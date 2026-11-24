/**
 * Ultra-lightweight pure JavaScript GIF89a Encoder
 * Encodes multiple HTML canvas frames into an animated GIF Blob.
 * Zero external dependencies, 100% client-side, runs in all browsers.
 */

export function createGifEncoder(width, height, delayMs = 100) {
  const frames = [];
  const delayHundredths = Math.round(delayMs / 10);

  return {
    addFrame(ctx) {
      const imgData = ctx.getImageData(0, 0, width, height).data;
      frames.push(new Uint8Array(imgData));
    },

    encode() {
      if (frames.length === 0) return null;

      // Build a 256-color palette across all frames using simple uniform/adaptive quantization
      const { palette, indexedFrames } = quantizeFrames(frames, width, height);

      const stream = [];

      // 1. GIF Header
      writeString(stream, 'GIF89a');

      // 2. Logical Screen Descriptor
      writeShort(stream, width);
      writeShort(stream, height);
      // GCT flag = 1, Color Res = 7 (8 bits), Sort = 0, GCT Size = 7 (256 colors)
      stream.push(0xf7);
      stream.push(0x00); // Background Color Index
      stream.push(0x00); // Pixel Aspect Ratio

      // 3. Global Color Table (256 * 3 bytes)
      for (let i = 0; i < 256; i++) {
        stream.push(palette[i * 3]);
        stream.push(palette[i * 3 + 1]);
        stream.push(palette[i * 3 + 2]);
      }

      // 4. Netscape Application Block for Infinite Looping
      stream.push(0x21); // Extension Introducer
      stream.push(0xff); // Application Extension Label
      stream.push(0x0b); // Block Size (11 bytes)
      writeString(stream, 'NETSCAPE2.0');
      stream.push(0x03); // Sub-block Size
      stream.push(0x01); // Sub-block ID (Loop)
      writeShort(stream, 0); // Loop Count 0 = Infinite
      stream.push(0x00); // Block Terminator

      // 5. Output Each Frame
      for (let f = 0; f < indexedFrames.length; f++) {
        const indexedData = indexedFrames[f];

        // Graphic Control Extension
        stream.push(0x21); // Extension Introducer
        stream.push(0xf9); // Graphic Control Label
        stream.push(0x04); // Block Size
        stream.push(0x00); // Disposal (0 = none), user input = 0, transparent = 0
        writeShort(stream, delayHundredths); // Delay time (1/100ths of second)
        stream.push(0x00); // Transparent color index
        stream.push(0x00); // Block Terminator

        // Image Descriptor
        stream.push(0x2c); // Image Separator
        writeShort(stream, 0); // Image Left
        writeShort(stream, 0); // Image Top
        writeShort(stream, width);
        writeShort(stream, height);
        stream.push(0x00); // No Local Color Table, not interlaced

        // Image Data: LZW compression (minimum code size = 8 for 256 colors)
        lzwEncode(8, indexedData, stream);
      }

      // 6. GIF Trailer
      stream.push(0x3b);

      const uint8 = new Uint8Array(stream);
      return new Blob([uint8], { type: 'image/gif' });
    }
  };
}

function writeString(stream, str) {
  for (let i = 0; i < str.length; i++) {
    stream.push(str.charCodeAt(i));
  }
}

function writeShort(stream, val) {
  stream.push(val & 0xff);
  stream.push((val >> 8) & 0xff);
}

// 256-color palette quantization (Popularity / Octree hybrid for card graphics)
function quantizeFrames(frames, width, height) {
  // Sample colors from frames to build representative 256 palette
  const colorMap = new Map();
  const step = Math.max(1, Math.floor((width * height * frames.length) / 50000));

  for (let f = 0; f < frames.length; f++) {
    const data = frames[f];
    for (let i = 0; i < data.length; i += 4 * step) {
      // 5-bit quantization for palette candidate clustering
      const r = (data[i] >> 3) << 3;
      const g = (data[i + 1] >> 3) << 3;
      const b = (data[i + 2] >> 3) << 3;
      const key = (r << 16) | (g << 8) | b;
      colorMap.set(key, (colorMap.get(key) || 0) + 1);
    }
  }

  // Sort by popularity and select top 256
  const sorted = Array.from(colorMap.entries()).sort((a, b) => b[1] - a[1]);
  const palette = new Uint8Array(256 * 3);
  const colorList = [];

  for (let i = 0; i < 256; i++) {
    if (i < sorted.length) {
      const key = sorted[i][0];
      const r = (key >> 16) & 0xff;
      const g = (key >> 8) & 0xff;
      const b = key & 0xff;
      palette[i * 3] = r;
      palette[i * 3 + 1] = g;
      palette[i * 3 + 2] = b;
      colorList.push({ r, g, b, idx: i });
    } else {
      // Pad empty slots
      palette[i * 3] = 0;
      palette[i * 3 + 1] = 0;
      palette[i * 3 + 2] = 0;
      colorList.push({ r: 0, g: 0, b: 0, idx: i });
    }
  }

  // Fast cache for nearest color lookup
  const cache = new Map();
  const getNearestIndex = (r, g, b) => {
    const key = (r << 16) | (g << 8) | b;
    if (cache.has(key)) return cache.get(key);

    let minDist = Infinity;
    let bestIdx = 0;
    for (let i = 0; i < colorList.length; i++) {
      const dr = r - colorList[i].r;
      const dg = g - colorList[i].g;
      const db = b - colorList[i].b;
      const dist = dr * dr + dg * dg + db * db;
      if (dist < minDist) {
        minDist = dist;
        bestIdx = i;
        if (dist === 0) break;
      }
    }
    cache.set(key, bestIdx);
    return bestIdx;
  };

  const indexedFrames = [];
  const pixelCount = width * height;

  for (let f = 0; f < frames.length; f++) {
    const data = frames[f];
    const indexed = new Uint8Array(pixelCount);
    for (let i = 0; i < pixelCount; i++) {
      const r = data[i * 4];
      const g = data[i * 4 + 1];
      const b = data[i * 4 + 2];
      indexed[i] = getNearestIndex(r, g, b);
    }
    indexedFrames.push(indexed);
  }

  return { palette, indexedFrames };
}

// Standard LZW Compression for GIF
function lzwEncode(minCodeSize, pixels, stream) {
  stream.push(minCodeSize);

  const clearCode = 1 << minCodeSize;
  const eoiCode = clearCode + 1;

  let codeSize = minCodeSize + 1;
  let maxCode = 1 << codeSize;

  let dict = new Map();
  const resetDict = () => {
    dict.clear();
    for (let i = 0; i < clearCode; i++) {
      dict.set(String.fromCharCode(i), i);
    }
    codeSize = minCodeSize + 1;
    maxCode = 1 << codeSize;
  };
  resetDict();

  let curAccum = 0;
  let curBits = 0;
  const subBlock = [];

  const writeBits = (code) => {
    curAccum |= code << curBits;
    curBits += codeSize;
    while (curBits >= 8) {
      subBlock.push(curAccum & 0xff);
      curAccum >>= 8;
      curBits -= 8;
      if (subBlock.length === 254) {
        stream.push(subBlock.length);
        for (let b = 0; b < subBlock.length; b++) stream.push(subBlock[b]);
        subBlock.length = 0;
      }
    }
  };

  // Write clear code first
  writeBits(clearCode);

  let curPrefix = '';
  for (let i = 0; i < pixels.length; i++) {
    const char = String.fromCharCode(pixels[i]);
    const nextStr = curPrefix + char;
    if (dict.has(nextStr)) {
      curPrefix = nextStr;
    } else {
      writeBits(dict.get(curPrefix));
      if (dict.size < 4096) {
        dict.set(nextStr, dict.size + 2);
        if (dict.size + 2 > maxCode && codeSize < 12) {
          codeSize++;
          maxCode = 1 << codeSize;
        }
      } else {
        writeBits(clearCode);
        resetDict();
      }
      curPrefix = char;
    }
  }

  if (curPrefix.length > 0) {
    writeBits(dict.get(curPrefix));
  }

  writeBits(eoiCode);

  // Flush remaining bits
  if (curBits > 0) {
    subBlock.push(curAccum & 0xff);
  }

  if (subBlock.length > 0) {
    stream.push(subBlock.length);
    for (let b = 0; b < subBlock.length; b++) stream.push(subBlock[b]);
    subBlock.length = 0;
  }

  stream.push(0x00); // Block terminator
}

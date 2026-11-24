import React, { useEffect, useRef, useState } from 'react';

export default function AtmosphereStage() {
  const glRef = useRef(null);
  const fxRef = useRef(null);
  const [eggCount, setEggCount] = useState(0);

  useEffect(() => {
    const glCanvas = glRef.current;
    const fxCanvas = fxRef.current;
    if (!glCanvas || !fxCanvas) return;

    let animId;
    let width = window.innerWidth;
    let height = Math.min(Math.max(window.innerHeight * 0.44, 300), 400);

    const resizeCanvases = () => {
      width = window.innerWidth;
      height = Math.min(Math.max(window.innerHeight * 0.44, 300), 400);
      [glCanvas, fxCanvas].forEach((c) => {
        c.width = width;
        c.height = height;
      });
    };

    resizeCanvases();
    window.addEventListener('resize', resizeCanvases);

    const glCtx = glCanvas.getContext('2d');
    const fxCtx = fxCanvas.getContext('2d');

    // Twinkling stars
    const stars = Array.from({ length: 70 }, () => ({
      x: Math.random(),
      y: Math.random() * 0.65,
      r: Math.random() * 1.5 + 0.6,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.04 + 0.015
    }));

    // Floating fireflies over the left hill
    const fireflies = Array.from({ length: 16 }, () => ({
      x: Math.random() * 0.16 + 0.02,
      y: Math.random() * 0.35 + 0.45,
      baseX: 0,
      baseY: 0,
      r: Math.random() * 1.8 + 1.2,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.03 + 0.02
    }));

    fireflies.forEach(f => {
      f.baseX = f.x;
      f.baseY = f.y;
    });

    // Sailboats bobbing in water
    const boats = [
      { x: 0.58, y: 0.58, scale: 0.75, speed: 0.00015 },
      { x: 0.70, y: 0.63, scale: 0.95, speed: -0.0001 },
      { x: 0.95, y: 0.66, scale: 0.80, speed: 0.00012 }
    ];

    let t = 0;

    const render = () => {
      t += 0.025;
      const isNight = document.documentElement.getAttribute('data-sky') !== 'day';

      if (!glCtx || !fxCtx) return;
      glCtx.clearRect(0, 0, width, height);
      fxCtx.clearRect(0, 0, width, height);

      // ==========================================
      // 1. SKY GRADIENT
      // ==========================================
      const skyGrad = glCtx.createLinearGradient(0, 0, 0, height * 0.6);
      if (isNight) {
        skyGrad.addColorStop(0, '#020306');
        skyGrad.addColorStop(0.4, '#060a14');
        skyGrad.addColorStop(0.8, '#0b1325');
        skyGrad.addColorStop(1, '#111a33');
      } else {
        skyGrad.addColorStop(0, '#2a83d6');
        skyGrad.addColorStop(0.45, '#c5e6f7');
        skyGrad.addColorStop(0.7, '#7fcfd6');
        skyGrad.addColorStop(1, '#e2f1f8');
      }
      glCtx.fillStyle = skyGrad;
      glCtx.fillRect(0, 0, width, height);

      // ==========================================
      // 2. CELESTIAL OBJECTS (Saturn, Mars, Moon/Sun, Stars)
      // ==========================================
      if (isNight) {
        // Stars
        stars.forEach((st) => {
          const currentAlpha = st.alpha * (0.65 + 0.35 * Math.sin(t * st.speed * 10));
          glCtx.beginPath();
          glCtx.arc(st.x * width, st.y * height, st.r, 0, Math.PI * 2);
          glCtx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
          glCtx.fill();
        });

        // Saturn with its tilted ring system (Upper Left-Center Sky)
        const saturnX = width * 0.29;
        const saturnY = height * 0.16;
        glCtx.save();
        glCtx.translate(saturnX, saturnY);
        glCtx.rotate((-20 * Math.PI) / 180);

        // Ring back
        glCtx.beginPath();
        glCtx.ellipse(0, 0, 16, 5, 0, Math.PI, Math.PI * 2);
        glCtx.strokeStyle = 'rgba(235, 205, 155, 0.65)';
        glCtx.lineWidth = 2.4;
        glCtx.stroke();

        // Saturn Body
        const saturnGrad = glCtx.createRadialGradient(-2, -2, 1, 0, 0, 8);
        saturnGrad.addColorStop(0, '#fde68a');
        saturnGrad.addColorStop(0.7, '#d97706');
        saturnGrad.addColorStop(1, '#92400e');
        glCtx.beginPath();
        glCtx.arc(0, 0, 7.5, 0, Math.PI * 2);
        glCtx.fillStyle = saturnGrad;
        glCtx.fill();

        // Ring front
        glCtx.beginPath();
        glCtx.ellipse(0, 0, 16, 5, 0, 0, Math.PI);
        glCtx.strokeStyle = 'rgba(235, 205, 155, 0.85)';
        glCtx.lineWidth = 2.4;
        glCtx.stroke();
        glCtx.restore();

        // Mars (Warm Reddish Planet Upper Center)
        const marsX = width * 0.61;
        const marsY = height * 0.13;
        const marsGrad = glCtx.createRadialGradient(marsX, marsY, 1, marsX, marsY, 9);
        marsGrad.addColorStop(0, '#fca5a5');
        marsGrad.addColorStop(0.4, '#ef4444');
        marsGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');
        glCtx.beginPath();
        glCtx.arc(marsX, marsY, 9, 0, Math.PI * 2);
        glCtx.fillStyle = marsGrad;
        glCtx.fill();

        glCtx.beginPath();
        glCtx.arc(marsX, marsY, 3.8, 0, Math.PI * 2);
        glCtx.fillStyle = '#f87171';
        glCtx.fill();

        // Moon (Upper Right Sky)
        const moonX = width * 0.89;
        const moonY = height * 0.22;
        const moonGlow = glCtx.createRadialGradient(moonX, moonY, 4, moonX, moonY, 32);
        moonGlow.addColorStop(0, 'rgba(254, 240, 138, 0.85)');
        moonGlow.addColorStop(0.3, 'rgba(253, 224, 71, 0.25)');
        moonGlow.addColorStop(1, 'rgba(253, 224, 71, 0)');
        glCtx.beginPath();
        glCtx.arc(moonX, moonY, 32, 0, Math.PI * 2);
        glCtx.fillStyle = moonGlow;
        glCtx.fill();

        glCtx.beginPath();
        glCtx.arc(moonX, moonY, 8.5, 0, Math.PI * 2);
        glCtx.fillStyle = '#fef08a';
        glCtx.fill();
      } else {
        // Daylight Sun on Right
        const sunX = width * 0.88;
        const sunY = height * 0.22;
        const sunGlow = glCtx.createRadialGradient(sunX, sunY, 8, sunX, sunY, 65);
        sunGlow.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        sunGlow.addColorStop(0.3, 'rgba(254, 240, 138, 0.45)');
        sunGlow.addColorStop(1, 'rgba(254, 240, 138, 0)');
        glCtx.beginPath();
        glCtx.arc(sunX, sunY, 65, 0, Math.PI * 2);
        glCtx.fillStyle = sunGlow;
        glCtx.fill();

        glCtx.beginPath();
        glCtx.arc(sunX, sunY, 14, 0, Math.PI * 2);
        glCtx.fillStyle = '#ffffff';
        glCtx.fill();
      }

      // ==========================================
      // 3. DISTANT MOUNTAIN SILHOUETTE (Right Horizon)
      // ==========================================
      glCtx.beginPath();
      glCtx.moveTo(width * 0.73, height * 0.54);
      glCtx.quadraticCurveTo(width * 0.85, height * 0.38, width, height * 0.47);
      glCtx.lineTo(width, height * 0.58);
      glCtx.lineTo(width * 0.73, height * 0.58);
      glCtx.closePath();
      glCtx.fillStyle = isNight ? '#0b1626' : '#6ba6cf';
      glCtx.fill();

      // Second closer mountain peak
      glCtx.beginPath();
      glCtx.moveTo(width * 0.80, height * 0.56);
      glCtx.quadraticCurveTo(width * 0.91, height * 0.43, width, height * 0.52);
      glCtx.lineTo(width, height * 0.60);
      glCtx.lineTo(width * 0.80, height * 0.60);
      glCtx.closePath();
      glCtx.fillStyle = isNight ? '#0e1c31' : '#4d92bf';
      glCtx.fill();

      // ==========================================
      // 4. WATER SURFACE & WAVES
      // ==========================================
      const waterTop = height * 0.49;
      const waterGrad = glCtx.createLinearGradient(0, waterTop, 0, height);
      if (isNight) {
        waterGrad.addColorStop(0, '#09101d');
        waterGrad.addColorStop(0.4, '#070b14');
        waterGrad.addColorStop(1, '#030508');
      } else {
        waterGrad.addColorStop(0, '#2b86c0');
        waterGrad.addColorStop(0.5, '#1e6899');
        waterGrad.addColorStop(1, '#0e3a59');
      }
      glCtx.fillStyle = waterGrad;
      glCtx.fillRect(0, waterTop, width, height - waterTop);

      // Gentle animated wave streaks
      glCtx.strokeStyle = isNight ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.2)';
      glCtx.lineWidth = 1.2;
      for (let i = 0; i < 6; i++) {
        const waveY = waterTop + 14 + i * 16;
        const offset = Math.sin(t * 0.8 + i) * 12;
        glCtx.beginPath();
        glCtx.moveTo(width * 0.25 + offset, waveY);
        glCtx.lineTo(width * 0.42 + offset, waveY);
        glCtx.moveTo(width * 0.55 - offset, waveY + 6);
        glCtx.lineTo(width * 0.78 - offset, waveY + 6);
        glCtx.stroke();
      }

      // ==========================================
      // 5. WHITE SAILBOATS (Bobbing in water)
      // ==========================================
      boats.forEach((b, bi) => {
        const bx = (b.x + Math.sin(t * 0.5 + bi) * 0.008) * width;
        const by = b.y * height + Math.sin(t * 1.5 + bi) * 2;
        const bs = b.scale;

        glCtx.save();
        glCtx.translate(bx, by);

        // Sail
        glCtx.beginPath();
        glCtx.moveTo(0, -14 * bs);
        glCtx.lineTo(7 * bs, -2 * bs);
        glCtx.lineTo(0, -2 * bs);
        glCtx.closePath();
        glCtx.fillStyle = isNight ? '#e2e8f0' : '#ffffff';
        glCtx.fill();

        // Hull
        glCtx.beginPath();
        glCtx.moveTo(-6 * bs, -1 * bs);
        glCtx.lineTo(7 * bs, -1 * bs);
        glCtx.lineTo(4 * bs, 2 * bs);
        glCtx.lineTo(-4 * bs, 2 * bs);
        glCtx.closePath();
        glCtx.fillStyle = isNight ? '#475569' : '#1e293b';
        glCtx.fill();

        glCtx.restore();
      });

      // ==========================================
      // 6. LEFT GREEN HILL & COASTAL ROCKS
      // ==========================================
      glCtx.beginPath();
      glCtx.moveTo(0, height * 0.24);
      glCtx.bezierCurveTo(width * 0.12, height * 0.25, width * 0.18, height * 0.55, width * 0.20, height * 0.68);
      glCtx.lineTo(0, height * 0.68);
      glCtx.closePath();

      const hillGrad = glCtx.createLinearGradient(0, height * 0.24, width * 0.2, height * 0.68);
      if (isNight) {
        hillGrad.addColorStop(0, '#10231c');
        hillGrad.addColorStop(0.6, '#0b1914');
        hillGrad.addColorStop(1, '#07100d');
      } else {
        hillGrad.addColorStop(0, '#34a853');
        hillGrad.addColorStop(0.6, '#237a3b');
        hillGrad.addColorStop(1, '#1b5e20');
      }
      glCtx.fillStyle = hillGrad;
      glCtx.fill();

      // Shoreline Rocks
      glCtx.beginPath();
      glCtx.ellipse(width * 0.18, height * 0.65, 12, 6, 0, 0, Math.PI * 2);
      glCtx.ellipse(width * 0.19, height * 0.67, 16, 7, 0, 0, Math.PI * 2);
      glCtx.ellipse(width * 0.21, height * 0.68, 14, 5, 0, 0, Math.PI * 2);
      glCtx.fillStyle = isNight ? '#0f172a' : '#334155';
      glCtx.fill();

      // Trees on Hill
      const treeColor = isNight ? '#06130e' : '#134e2a';
      [
        [0.02, 0.44, 9],
        [0.05, 0.49, 12],
        [0.08, 0.55, 10],
        [0.13, 0.61, 8]
      ].forEach(([tx, ty, tr]) => {
        glCtx.beginPath();
        glCtx.arc(tx * width, ty * height, tr, 0, Math.PI * 2);
        glCtx.fillStyle = treeColor;
        glCtx.fill();
      });

      // ==========================================
      // 7. LIGHTHOUSE / WINDMILL ON THE HILL
      // ==========================================
      const millBaseX = width * 0.055;
      const millBaseY = height * 0.46;
      const millTopY = height * 0.27;

      // Stone Tower
      glCtx.beginPath();
      glCtx.moveTo(millBaseX - 10, millBaseY);
      glCtx.lineTo(millBaseX + 10, millBaseY);
      glCtx.lineTo(millBaseX + 7, millTopY + 8);
      glCtx.lineTo(millBaseX - 7, millTopY + 8);
      glCtx.closePath();
      glCtx.fillStyle = isNight ? '#334155' : '#cbd5e1';
      glCtx.fill();

      // Conical Roof
      glCtx.beginPath();
      glCtx.moveTo(millBaseX - 10, millTopY + 8);
      glCtx.lineTo(millBaseX + 10, millTopY + 8);
      glCtx.lineTo(millBaseX, millTopY);
      glCtx.closePath();
      glCtx.fillStyle = isNight ? '#991b1b' : '#dc2626';
      glCtx.fill();

      // Glowing Lantern Windows
      const winY = (millBaseY + millTopY) * 0.5 + 4;
      glCtx.beginPath();
      glCtx.arc(millBaseX, winY, 4, 0, Math.PI * 2);
      glCtx.fillStyle = isNight ? '#fde047' : '#fef08a';
      glCtx.fill();

      // Spinning Airplane / Blades on top
      const bladeAngle = t * 1.8;
      glCtx.save();
      glCtx.translate(millBaseX, millTopY + 4);
      glCtx.rotate(bladeAngle);
      glCtx.strokeStyle = isNight ? '#cbd5e1' : '#475569';
      glCtx.lineWidth = 1.6;

      // 4 blades
      for (let b = 0; b < 4; b++) {
        glCtx.rotate(Math.PI / 2);
        glCtx.beginPath();
        glCtx.moveTo(0, 0);
        glCtx.lineTo(16, 0);
        glCtx.stroke();
        // small blade sail
        glCtx.fillStyle = isNight ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.9)';
        glCtx.fillRect(4, -2, 10, 4);
      }
      glCtx.restore();

      // ==========================================
      // 8. GLOWING FIREFLIES (Floating over hill)
      // ==========================================
      fireflies.forEach((ff, fi) => {
        ff.x = ff.baseX + Math.sin(t * ff.speed * 8 + ff.phase) * 0.015;
        ff.y = ff.baseY + Math.cos(t * ff.speed * 8 + ff.phase) * 0.02;

        const pulse = 0.5 + 0.5 * Math.sin(t * 3 + fi);
        const glowRad = ff.r * (3 + pulse * 2);

        const flyGlow = glCtx.createRadialGradient(
          ff.x * width, ff.y * height, 0.5,
          ff.x * width, ff.y * height, glowRad
        );
        flyGlow.addColorStop(0, 'rgba(253, 224, 71, 0.95)');
        flyGlow.addColorStop(0.4, 'rgba(163, 230, 53, 0.45)');
        flyGlow.addColorStop(1, 'rgba(163, 230, 53, 0)');

        glCtx.beginPath();
        glCtx.arc(ff.x * width, ff.y * height, glowRad, 0, Math.PI * 2);
        glCtx.fillStyle = flyGlow;
        glCtx.fill();

        glCtx.beginPath();
        glCtx.arc(ff.x * width, ff.y * height, ff.r, 0, Math.PI * 2);
        glCtx.fillStyle = '#fef08a';
        glCtx.fill();
      });

      // ==========================================
      // 9. LASER LIGHT BEAM (From Windmill to Center Prism)
      // ==========================================
      const beamStartX = millBaseX;
      const beamStartY = winY;
      const prismTargetX = width * 0.50;
      const prismTargetY = height * 0.65;

      // Draw Collimated Light Beam across the water
      glCtx.beginPath();
      glCtx.moveTo(beamStartX, beamStartY);
      glCtx.lineTo(prismTargetX - 10, prismTargetY);
      glCtx.strokeStyle = isNight ? 'rgba(254, 240, 138, 0.75)' : 'rgba(255, 255, 255, 0.85)';
      glCtx.lineWidth = 1.8;
      glCtx.stroke();

      // Secondary soft glow for the beam
      glCtx.beginPath();
      glCtx.moveTo(beamStartX, beamStartY);
      glCtx.lineTo(prismTargetX - 10, prismTargetY);
      glCtx.strokeStyle = isNight ? 'rgba(254, 240, 138, 0.25)' : 'rgba(255, 255, 255, 0.35)';
      glCtx.lineWidth = 5;
      glCtx.stroke();

      // ==========================================
      // 10. CENTER OPTICAL PRISM & RAINBOW REFRACTION FAN
      // ==========================================
      // Prism Body in Canvas
      glCtx.save();
      glCtx.translate(prismTargetX, prismTargetY);

      // Glow halo around prism
      const prismHalo = glCtx.createRadialGradient(0, 0, 4, 0, 0, 36);
      prismHalo.addColorStop(0, 'rgba(255, 255, 255, 0.35)');
      prismHalo.addColorStop(0.5, 'rgba(16, 185, 129, 0.15)');
      prismHalo.addColorStop(1, 'rgba(0, 0, 0, 0)');
      glCtx.beginPath();
      glCtx.arc(0, 0, 36, 0, Math.PI * 2);
      glCtx.fillStyle = prismHalo;
      glCtx.fill();

      // Triangular Prism
      glCtx.beginPath();
      glCtx.moveTo(0, -18);
      glCtx.lineTo(-15, 12);
      glCtx.lineTo(15, 12);
      glCtx.closePath();
      glCtx.fillStyle = isNight ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.45)';
      glCtx.strokeStyle = isNight ? 'rgba(255, 255, 255, 0.8)' : '#334155';
      glCtx.lineWidth = 1.4;
      glCtx.fill();
      glCtx.stroke();

      // Refracted Rainbow Beams spreading out to the right
      const colors = [
        '#ef4444', // Red
        '#f97316', // Orange
        '#eab308', // Yellow
        '#10b981', // Green
        '#06b6d4', // Cyan
        '#3b82f6', // Blue
        '#a855f7'  // Violet
      ];

      colors.forEach((col, ci) => {
        const spreadAngle = -0.22 + (ci / 6) * 0.44; // fan spread
        const beamLen = Math.min(width * 0.28, 220);
        const bx = 12 + Math.cos(spreadAngle) * beamLen;
        const by = 4 + Math.sin(spreadAngle) * beamLen;

        glCtx.beginPath();
        glCtx.moveTo(12, 4);
        glCtx.lineTo(bx, by);
        glCtx.strokeStyle = col;
        glCtx.lineWidth = 1.6;
        glCtx.globalAlpha = isNight ? 0.85 : 0.6;
        glCtx.stroke();
      });
      glCtx.globalAlpha = 1.0;
      glCtx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeCanvases);
    };
  }, []);

  return (
    <>
      {/* Background Graph-Paper Grid */}
      <div className="graph" aria-hidden="true" />

      {/* Main Coastal Scene Canvas */}
      <div className="stage" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <div className="scene" id="scene" style={{ position: 'relative', width: '100%', height: 'var(--scene-h, 360px)' }}>
          <canvas id="gl" ref={glRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
          <canvas id="fx" ref={fxRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', pointerEvents: 'none' }} />
          <div className="fade mist" />
          <div className="fade day" />
          <div className="fade night" />

          {/* Easter Egg Counter on Top Right (Exact match to Shivam Kumar Image 1) */}
          <div
            onClick={() => setEggCount((prev) => (prev + 1) % 16)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setEggCount((prev) => (prev + 1) % 16)}
            style={{
              position: 'absolute',
              top: '16px',
              right: '20px',
              zIndex: 35,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 12px',
              borderRadius: '999px',
              background: 'rgba(10, 14, 24, 0.72)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(12px)',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
              userSelect: 'none'
            }}
            title="Click Easter Egg"
          >
            {/* Egg Icon */}
            <div
              style={{
                width: '16px',
                height: '20px',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                background: 'linear-gradient(135deg, #fef08a 0%, #f59e0b 100%)',
                boxShadow: '0 0 6px #f59e0b'
              }}
            />
            <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: '#fef08a', fontWeight: 600 }}>
              {eggCount}/15
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

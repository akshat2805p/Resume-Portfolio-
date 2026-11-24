import React, { useState, useRef } from 'react';
import SpotlightCard from './reactbits/SpotlightCard';
import { createGifEncoder } from '../utils/gifEncoder';
import akshatImg from '../assets/akshat.jpg';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, CodeforcesIcon, XTwitterIcon } from './Icons';

export default function AkshatContact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [sentStatus, setSentStatus] = useState(null); // 'sending' | 'sent' | null
  const [gifStatus, setGifStatus] = useState(null); // 'generating' | 'done' | null

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSentStatus('sending');
    setTimeout(() => {
      setSentStatus('sent');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSentStatus(null), 4000);
    }, 1000);
  };

  // Generate and download the animated Spotlight Business Card as a real GIF
  const handleDownloadCardGif = async () => {
    if (gifStatus === 'generating') return;
    setGifStatus('generating');

    try {
      const W = 480;
      const H = 290;
      const totalFrames = 16;
      const delayMs = 90; // ~11 fps for smooth loop
      const encoder = createGifEncoder(W, H, delayMs);

      // Create offscreen canvas
      const canvas = document.createElement('canvas');
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });

      // Load avatar image
      const img = new Image();
      img.crossOrigin = 'anonymous';
      await new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve; // proceed even if image fails
        img.src = akshatImg;
      });

      // Render 16 frames with moving spotlight effect
      for (let f = 0; f < totalFrames; f++) {
        const t = f / totalFrames;
        // Sweep spotlight across card diagonally
        const spotX = -40 + t * (W + 80);
        const spotY = 60 + Math.sin(t * Math.PI * 2) * 40;

        // 1. Base card dark background
        ctx.fillStyle = '#0a0d14';
        ctx.fillRect(0, 0, W, H);

        // Subtle tech grid pattern
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.lineWidth = 1;
        for (let gx = 0; gx < W; gx += 24) {
          ctx.beginPath();
          ctx.moveTo(gx, 0);
          ctx.lineTo(gx, H);
          ctx.stroke();
        }
        for (let gy = 0; gy < H; gy += 24) {
          ctx.beginPath();
          ctx.moveTo(0, gy);
          ctx.lineTo(W, gy);
          ctx.stroke();
        }

        // 2. Animated Spotlight radial beam (Silver / Platinum Monochrome)
        const radGrad = ctx.createRadialGradient(spotX, spotY, 10, spotX, spotY, 200);
        radGrad.addColorStop(0, 'rgba(255, 255, 255, 0.32)');
        radGrad.addColorStop(0.5, 'rgba(200, 200, 210, 0.12)');
        radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = radGrad;
        ctx.fillRect(0, 0, W, H);

        // 3. Card Outer Border with spotlight edge highlight
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(1, 1, W - 2, H - 2);

        // 4. Portrait photo
        const px = 24;
        const py = 24;
        const pw = 68;
        const ph = 84;

        ctx.save();
        ctx.beginPath();
        ctx.roundRect(px, py, pw, ph, 10);
        ctx.clip();
        if (img.complete && img.naturalWidth > 0) {
          ctx.drawImage(img, px, py, pw, ph);
        } else {
          ctx.fillStyle = '#18181b';
          ctx.fillRect(px, py, pw, ph);
        }
        ctx.restore();

        // Portrait frame border
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(px, py, pw, ph, 10);
        ctx.stroke();

        // 5. Card Information & Typography
        const textX = px + pw + 20;

        // Status badge
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(textX + 4, py + 8, 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = '600 10px monospace';
        ctx.fillText('ACTIVE // AVAILABLE FOR ROLES', textX + 16, py + 11);

        // Name
        ctx.fillStyle = '#ffffff';
        ctx.font = '600 22px Georgia, serif';
        ctx.fillText('Akshat Pandey', textX, py + 38);

        // Headline
        ctx.fillStyle = '#a1a1aa';
        ctx.font = '500 11.5px monospace';
        ctx.fillText('Systems & AI Infrastructure Engineer', textX, py + 56);

        // Credentials & Affiliations
        ctx.fillStyle = '#d4d4d8';
        ctx.font = '400 11px system-ui, sans-serif';
        ctx.fillText('• FOSSEE Fellow, IIT Bombay (eSim EDA)', textX, py + 74);
        ctx.fillText('• LeetCode Knight (Rating 1,923 · Top 3.8%)', textX, py + 90);

        // Divider
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.beginPath();
        ctx.moveTo(24, 126);
        ctx.lineTo(W - 24, 126);
        ctx.stroke();

        // Direct details section
        ctx.fillStyle = '#71717a';
        ctx.font = '10px monospace';
        ctx.fillText('DEGREE:', 24, 150);
        ctx.fillStyle = '#f4f4f5';
        ctx.fillText('B.Tech CSE · VIT Bhopal (2023–2027)', 92, 150);

        ctx.fillStyle = '#71717a';
        ctx.fillText('EMAIL:', 24, 172);
        ctx.fillStyle = '#ffffff';
        ctx.fillText('akshatpandeygit28@gmail.com', 92, 172);

        ctx.fillStyle = '#71717a';
        ctx.fillText('NETWORKS:', 24, 194);
        ctx.fillStyle = '#f4f4f5';
        ctx.fillText('github.com/akshat2805p  ·  linkedin.com/in/akshatpandey28', 92, 194);

        ctx.fillStyle = '#71717a';
        ctx.fillText('LOCATION:', 24, 216);
        ctx.fillStyle = '#f4f4f5';
        ctx.fillText('Varanasi, India  ·  Codeforces: akshat_2805p', 92, 216);

        // Bottom footer banner
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.fillRect(0, H - 38, W, 38);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.beginPath();
        ctx.moveTo(0, H - 38);
        ctx.lineTo(W, H - 38);
        ctx.stroke();

        ctx.fillStyle = '#e4e4e7';
        ctx.font = '600 10px monospace';
        ctx.fillText('OFFICIAL DIGITAL BUSINESS CARD  ·  AUTHENTIC REPOSITORY ARCHIVE', 24, H - 16);

        // Push frame to GIF encoder
        encoder.addFrame(ctx);
      }

      // Encode animated GIF
      const blob = encoder.encode();
      if (!blob) throw new Error('Encoding failed');

      // Trigger client download
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Akshat_Pandey_Business_Card.gif';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setGifStatus('done');
      setTimeout(() => setGifStatus(null), 4000);
    } catch (err) {
      console.error('Failed to create GIF card:', err);
      setGifStatus(null);
    }
  };

  return (
    <section id="contact" className="section-wrap" style={{ padding: '80px 24px', maxWidth: '1080px', margin: '0 auto' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '44px' }}>
        <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '8px' }}>
          Direct Transmission &bull; Channels &bull; Credentials
        </p>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 400, color: 'var(--fg)', margin: '0 0 14px 0', letterSpacing: '-0.01em' }}>
          Get In Touch &amp; Connect
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--subfg)', maxWidth: '580px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
          Whether you want to discuss systems architecture, explore AI infrastructure collaborations, or invite me to an engineering role, my inbox is always open.
        </p>
      </div>

      {/* Featured: Interactive SpotlightCard Business Card */}
      <div style={{ maxWidth: '640px', margin: '0 auto 48px auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)', fontWeight: 600 }}>
            ★ Interactive Spotlight Business Card
          </span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', color: 'var(--muted)' }}>
            Hover / Move Cursor to illuminate
          </span>
        </div>

        <SpotlightCard
          spotlightColor="rgba(255, 255, 255, 0.32)"
          intensity={0.28}
          spotlightSize={340}
          softness={0.7}
          className="akshat-spotlight-card"
          style={{
            borderRadius: '20px',
            background: 'var(--card-bg)',
            border: '1px solid var(--card-bd)',
            boxShadow: 'var(--card-sh)',
            overflow: 'hidden'
          }}
        >
          <div style={{ padding: '28px 26px', position: 'relative', zIndex: 1 }}>
            {/* Top Row: Photo + Name + Status */}
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div
                style={{
                  width: '74px',
                  height: '92px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  border: '1.5px solid var(--line)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
                }}
              >
                <img
                  src={akshatImg}
                  alt="Akshat Pandey"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ flex: 1, minWidth: '200px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--fg)', display: 'inline-block', boxShadow: '0 0 8px var(--fg)' }} />
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', color: 'var(--fg)', letterSpacing: '0.05em', fontWeight: 700 }}>
                    ACTIVE // AVAILABLE FOR ROLES
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.85rem', fontWeight: 500, color: 'var(--fg)', margin: '0 0 4px 0', lineHeight: 1.1 }}>
                  Akshat Pandey
                </h3>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '12.5px', color: 'var(--subfg)', margin: '0 0 8px 0', fontWeight: 500 }}>
                  Systems &amp; AI Infrastructure Engineer
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--subfg)' }}>
                    &bull; FOSSEE Fellow, IIT Bombay (eSim EDA Plugins)
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--subfg)' }}>
                    &bull; LeetCode Knight (Rating 1,923 &bull; Top 3.81%)
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'var(--line)', margin: '20px 0' }} />

            {/* Middle Grid: Key Data Points */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '12px', marginBottom: '22px' }}>
              <div>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', display: 'block' }}>
                  Education
                </span>
                <span style={{ fontSize: '12.5px', color: 'var(--fg)', fontWeight: 500 }}>
                  B.Tech CSE &bull; VIT Bhopal (2023–2027)
                </span>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', display: 'block' }}>
                  Direct Transmission
                </span>
                <span style={{ fontSize: '12.5px', color: 'var(--fg)', fontFamily: 'var(--mono)', fontWeight: 500 }}>
                  {personalInfo.email}
                </span>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', display: 'block' }}>
                  Primary Codebase
                </span>
                <span style={{ fontSize: '12.5px', color: 'var(--fg)', fontFamily: 'var(--mono)' }}>
                  github.com/akshat2805p (33 Repos)
                </span>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', display: 'block' }}>
                  Competitive Rank
                </span>
                <span style={{ fontSize: '12.5px', color: 'var(--fg)', fontFamily: 'var(--mono)' }}>
                  LeetCode Knight &bull; Codeforces: akshat_2805p
                </span>
              </div>
            </div>

            {/* Card Actions: GIF Download & Direct Copy */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <a href="https://github.com/akshat2805p" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg)', padding: '4px' }} aria-label="GitHub">
                  <GithubIcon size={18} />
                </a>
                <a href="https://linkedin.com/in/akshatpandey28" target="_blank" rel="noopener noreferrer" style={{ color: '#0a66c2', padding: '4px' }} aria-label="LinkedIn">
                  <LinkedinIcon size={18} />
                </a>
                <a href="https://leetcode.com/u/akshatpandey28/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffa116', padding: '4px' }} aria-label="LeetCode">
                  <LeetcodeIcon size={18} />
                </a>
                <a href="https://codeforces.com/profile/akshat_2805p" target="_blank" rel="noopener noreferrer" style={{ color: '#1890ff', padding: '4px' }} aria-label="Codeforces">
                  <CodeforcesIcon size={18} />
                </a>
                <a href="https://x.com/Ak_Ap28Tweet" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg)', padding: '4px' }} aria-label="X Twitter">
                  <XTwitterIcon size={17} />
                </a>
              </div>

              {/* GIF Download Button (Monochrome Silver) */}
              <button
                type="button"
                onClick={handleDownloadCardGif}
                disabled={gifStatus === 'generating'}
                style={{
                  background: gifStatus === 'done' ? 'var(--fg)' : 'var(--chip)',
                  border: '1px solid ' + (gifStatus === 'done' ? 'var(--fg)' : 'rgba(255, 255, 255, 0.25)'),
                  color: gifStatus === 'done' ? 'var(--bg)' : 'var(--fg)',
                  padding: '8px 18px',
                  borderRadius: '999px',
                  fontSize: '12px',
                  fontFamily: 'var(--mono)',
                  fontWeight: 600,
                  cursor: gifStatus === 'generating' ? 'wait' : 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
                  transition: 'all 0.2s ease'
                }}
              >
                {gifStatus === 'generating' ? (
                  <>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: 'spin 1s linear infinite' }}>
                      <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="12" />
                    </svg>
                    <span>Generating Animated GIF...</span>
                  </>
                ) : gifStatus === 'done' ? (
                  <>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Card GIF Downloaded! ✨</span>
                  </>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>Download Business Card (GIF)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </SpotlightCard>
      </div>

      {/* Two Column Layout: Channels & Message Form */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '32px' }}>
        {/* Left Column: Direct Contact & Platform Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Email Card with One-Click Copy */}
          <div
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-bd)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--card-sh)'
            }}
          >
            <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '8px' }}>
              Direct Electronic Mail
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--fg)', fontWeight: 500 }}>
                {personalInfo.email}
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                style={{
                  background: copied ? 'var(--fg)' : 'var(--chip)',
                  border: '1px solid ' + (copied ? 'var(--fg)' : 'var(--line)'),
                  color: copied ? 'var(--bg)' : 'var(--fg)',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontFamily: 'var(--mono)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease'
                }}
              >
                {copied ? (
                  <>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '10px 0 0 0', fontFamily: 'var(--mono)' }}>
              &bull; Typical response latency &lt; 24 hours &bull; PGP key available on request
            </p>
          </div>

          {/* Connected Developer Networks & Platforms */}
          <div
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-bd)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--card-sh)',
              gap: '12px'
            }}
          >
            <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)', marginBottom: '4px' }}>
              Connected Developer Networks &amp; Platforms
            </span>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/akshatpandey28"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: '8px',
                background: 'var(--chip)',
                border: '1px solid var(--line)',
                textDecoration: 'none',
                color: 'var(--fg)',
                transition: 'background 0.2s ease, border-color 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#0a66c2' }}>
                  <LinkedinIcon size={20} />
                </span>
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 500 }}>LinkedIn</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>linkedin.com/in/akshatpandey28</div>
                </div>
              </div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--muted)' }}>
                <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/akshat2805p"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: '8px',
                background: 'var(--chip)',
                border: '1px solid var(--line)',
                textDecoration: 'none',
                color: 'var(--fg)',
                transition: 'background 0.2s ease, border-color 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--fg)' }}>
                  <GithubIcon size={20} />
                </span>
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 500 }}>GitHub</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>github.com/akshat2805p (33 Repos)</div>
                </div>
              </div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--muted)' }}>
                <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
              </svg>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/akshatpandey28/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: '8px',
                background: 'var(--chip)',
                border: '1px solid var(--line)',
                textDecoration: 'none',
                color: 'var(--fg)',
                transition: 'background 0.2s ease, border-color 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#ffa116' }}>
                  <LeetcodeIcon size={20} />
                </span>
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 500 }}>LeetCode</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>Knight &bull; Rating 1,923 (Top 3.8%)</div>
                </div>
              </div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--muted)' }}>
                <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
              </svg>
            </a>

            {/* Codeforces */}
            <a
              href="https://codeforces.com/profile/akshat_2805p"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: '8px',
                background: 'var(--chip)',
                border: '1px solid var(--line)',
                textDecoration: 'none',
                color: 'var(--fg)',
                transition: 'background 0.2s ease, border-color 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#1890ff' }}>
                  <CodeforcesIcon size={20} />
                </span>
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 500 }}>Codeforces</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>akshat_2805p</div>
                </div>
              </div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--muted)' }}>
                <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/Ak_Ap28Tweet"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: '8px',
                background: 'var(--chip)',
                border: '1px solid var(--line)',
                textDecoration: 'none',
                color: 'var(--fg)',
                transition: 'background 0.2s ease, border-color 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--fg)' }}>
                  <XTwitterIcon size={19} />
                </span>
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 500 }}>X (Twitter)</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>@Ak_Ap28Tweet</div>
                </div>
              </div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--muted)' }}>
                <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Direct Message Transmission Form */}
        <div
          style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-bd)',
            borderRadius: '16px',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 'var(--card-sh)'
          }}
        >
          <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)', marginBottom: '8px' }}>
            Dispatch Encrypted Inbound Message
          </span>
          <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.6rem', fontWeight: 500, color: 'var(--fg)', margin: '0 0 18px 0' }}>
            Send Message
          </h3>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)', marginBottom: '6px' }}>
                YOUR NAME *
              </label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="e.g. Linus Torvalds"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  background: 'var(--chip)',
                  border: '1px solid var(--line)',
                  color: 'var(--fg)',
                  fontFamily: 'var(--sans)',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)', marginBottom: '6px' }}>
                YOUR EMAIL *
              </label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="e.g. linus@kernel.org"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  background: 'var(--chip)',
                  border: '1px solid var(--line)',
                  color: 'var(--fg)',
                  fontFamily: 'var(--sans)',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)', marginBottom: '6px' }}>
                SUBJECT / TOPIC
              </label>
              <input
                type="text"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                placeholder="e.g. Distributed Systems Role / Collaboration"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  background: 'var(--chip)',
                  border: '1px solid var(--line)',
                  color: 'var(--fg)',
                  fontFamily: 'var(--sans)',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)', marginBottom: '6px' }}>
                MESSAGE *
              </label>
              <textarea
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Describe your inquiry, project scope, or opportunity..."
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  background: 'var(--chip)',
                  border: '1px solid var(--line)',
                  color: 'var(--fg)',
                  fontFamily: 'var(--sans)',
                  fontSize: '14px',
                  outline: 'none',
                  resize: 'vertical',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={sentStatus === 'sending'}
              style={{
                background: sentStatus === 'sent' ? 'var(--chip-hi)' : 'var(--fg)',
                color: sentStatus === 'sent' ? 'var(--fg)' : 'var(--bg)',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: sentStatus === 'sending' ? 'wait' : 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '4px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
                transition: 'all 0.2s ease'
              }}
            >
              {sentStatus === 'sending' ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: 'spin 1s linear infinite' }}>
                    <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="12" />
                  </svg>
                  <span>Dispatching Packet...</span>
                </>
              ) : sentStatus === 'sent' ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Transmission Confirmed!</span>
                </>
              ) : (
                <>
                  <span>Transmit Message</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Clean Minimal Colophon Footer (Replacing the clumsy DeskFooter) */}
      <div
        style={{
          marginTop: '70px',
          paddingTop: '28px',
          borderTop: '1px solid var(--line)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '12px',
          fontFamily: 'var(--mono)',
          color: 'var(--muted)'
        }}
      >
        <div>
          <span>&copy; {new Date().getFullYear()} Akshat Pandey &bull; Systems &amp; AI Infrastructure</span>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="#top" style={{ color: 'var(--fg)', textDecoration: 'none' }}>Back to top &uarr;</a>
          <span>&bull;</span>
          <a href="https://github.com/akshat2805p" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg)', textDecoration: 'none' }}>github.com/akshat2805p</a>
        </div>
      </div>
    </section>
  );
}

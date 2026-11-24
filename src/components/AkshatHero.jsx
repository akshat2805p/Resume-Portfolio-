import React, { useState, useEffect } from 'react';
import ASCIIText from './reactbits/ASCIIText';
import Lanyard from './reactbits/Lanyard';
import LogoLoop from './reactbits/LogoLoop';
import akshatImg from '../assets/akshat.jpg';
import {
  PythonLogo, CppLogo, GoLogo, ReactLogo, NextjsLogo, FastApiLogo,
  DockerLogo, PostgresLogo, RedisLogo, LinuxLogo, PyTorchLogo,
  KiCadLogo, GitLogo
} from './TechLogos';

// Interactive Tech Logo Tile: Logo-only by default; reveals name & authentic brand glow on hover
function TechLogoItem({ name, icon, brandColor }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: hovered ? '6px 14px 6px 10px' : '7px 11px',
        borderRadius: '999px',
        background: 'var(--chip)',
        border: hovered ? `1.5px solid ${brandColor}` : '1.5px solid var(--line)',
        color: 'var(--fg)',
        fontFamily: 'var(--mono)',
        fontSize: '12px',
        fontWeight: 600,
        whiteSpace: 'nowrap',
        userSelect: 'none',
        cursor: 'pointer',
        boxShadow: hovered
          ? `0 0 16px ${brandColor}66, 0 4px 14px rgba(0,0,0,0.15)`
          : '0 2px 8px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-2px) scale(1.06)' : 'none',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      title={name}
      aria-label={name}
    >
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          filter: hovered ? `drop-shadow(0 0 6px ${brandColor})` : 'none',
          transition: 'filter 0.25s ease'
        }}
      >
        {icon}
      </span>
      <span
        style={{
          maxWidth: hovered ? '140px' : '0px',
          opacity: hovered ? 1 : 0,
          marginLeft: hovered ? '7px' : '0px',
          overflow: 'hidden',
          transition: 'max-width 0.26s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease, margin 0.2s ease',
          display: 'inline-block',
          verticalAlign: 'middle',
          color: 'var(--fg)',
          fontSize: '11.5px',
          letterSpacing: '-0.01em'
        }}
      >
        {name}
      </span>
    </div>
  );
}

// Real official SVG brand logos with authentic glowing colors on hover
const HERO_TECH_LOGOS = [
  { name: 'Python 3.12', icon: <PythonLogo size={18} />, color: '#387eb8' },
  { name: 'C++20', icon: <CppLogo size={18} />, color: '#00599c' },
  { name: 'Go (Golang)', icon: <GoLogo size={18} />, color: '#00add8' },
  { name: 'FastAPI', icon: <FastApiLogo size={18} />, color: '#009688' },
  { name: 'React 19', icon: <ReactLogo size={18} />, color: '#61dafb' },
  { name: 'Next.js', icon: <NextjsLogo size={18} />, color: '#71717a' },
  { name: 'Docker', icon: <DockerLogo size={18} />, color: '#2496ed' },
  { name: 'PostgreSQL 16', icon: <PostgresLogo size={18} />, color: '#336791' },
  { name: 'Linux / Bash', icon: <LinuxLogo size={18} />, color: '#f59e0b' },
  { name: 'PyTorch', icon: <PyTorchLogo size={18} />, color: '#ee4c2c' },
  { name: 'KiCad EDA', icon: <KiCadLogo size={18} />, color: '#1e88e5' },
  { name: 'Redis', icon: <RedisLogo size={18} />, color: '#d82c20' },
  { name: 'Git', icon: <GitLogo size={18} />, color: '#f05032' }
].map(s => ({
  node: <TechLogoItem name={s.name} icon={s.icon} brandColor={s.color} />,
  title: s.name
}));

export default function AkshatHero({ onOpenThesis, onOpenResume }) {
  const [isDay, setIsDay] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth < 640 : false;
  });

  useEffect(() => {
    const checkSky = () => {
      const mode = document.documentElement.getAttribute('data-sky');
      setIsDay(mode === 'day');
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkSky();
    handleResize();

    const observer = new MutationObserver(checkSky);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-sky']
    });

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="top" className="hero" aria-label="Introduction" style={{ position: 'relative', zIndex: 10 }}>
      <div className="hero-split-grid">
        {/* Left Column: Information, ASCII Name, Bio, Logo-only skills, Action buttons */}
        <div className="hero-left-col">
          {/* 1. Status Pill Badge (Monochrome Black & White High Contrast) */}
          <div
            className="status-badge hero-status-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: isDay ? '#ffffff' : 'rgba(255, 255, 255, 0.08)',
              border: isDay ? '1.5px solid rgba(0, 0, 0, 0.22)' : '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: isDay ? '0 2px 10px rgba(0, 0, 0, 0.08)' : '0 2px 10px rgba(0, 0, 0, 0.2)',
              pointerEvents: 'auto'
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--fg)', display: 'inline-block', flexShrink: 0, boxShadow: '0 0 8px var(--fg)' }} />
            <span style={{ fontFamily: 'var(--mono)', fontSize: isMobile ? '10.5px' : '11px', color: 'var(--fg)', letterSpacing: '0.04em', fontWeight: 700 }}>
              Available for Systems &amp; AI Engineering Opportunities
            </span>
          </div>

          {/* 2. Kicker Text */}
          <p className="hero-kicker-text" style={{ fontFamily: 'var(--mono)', fontSize: isMobile ? '11px' : '12px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--muted)', margin: '2px 0 0 0', fontWeight: 700 }}>
            Portfolio &bull; Systems Architecture &bull; Artificial Intelligence
          </p>

          {/* 3. Name with ASCIIText (Clean, bold pitch-black in light mode, fine-grained resolution on mobile) */}
          <div className="hero-ascii-name-wrap">
            <h1 className="sr-only">Akshat Pandey</h1>
            <ASCIIText
              key={isMobile ? 'mobile-ascii' : 'desktop-ascii'}
              text="Akshat Pandey"
              asciiFontSize={isMobile ? 3.6 : 5.5}
              textScale={isMobile ? 1.35 : 1.12}
              fontWeight={700}
              blocks={0}
              waves={0.5}
              waveSpeed={0.7}
              chroma={0.15}
              tilt={0.45}
              colors={isDay ? ['#000000', '#09090b', '#18181b'] : ['#ffffff', '#f4f4f5', '#e4e4e7']}
              textColor={isDay ? '#000000' : '#ffffff'}
              theme={isDay ? 'light' : 'dark'}
              scramble={0.3}
              clickRipple={true}
              interactive={true}
              idle={true}
            />
          </div>

          {/* 4. Intro Paragraph */}
          <p
            className="hero-intro-text"
            style={{
              fontSize: 'clamp(14.5px, 1.2vw, 17.5px)',
              color: 'var(--subfg)',
              maxWidth: '620px',
              lineHeight: 1.65,
              fontWeight: 500,
              margin: '0 0 4px 0'
            }}
          >
            Computer Science undergraduate at <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>VIT Bhopal (2023–2027)</strong> and Summer Fellow at <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>FOSSEE, IIT Bombay</strong>. I engineer high-performance distributed systems, AI diagnostics, and developer infrastructure.
          </p>

          {/* 5. Logo-Only Skills Below Name */}
          <div className="hero-skills-strip" aria-label="Technical skills logos">
            <LogoLoop
              logos={HERO_TECH_LOGOS}
              direction="left"
              speed={40}
              logoHeight={isMobile ? 26 : 30}
              gap={isMobile ? 10 : 12}
              pauseOnHover={true}
              draggable={true}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutWidth={0.12}
              ariaLabel="Core Tech Stack Logos"
            />
          </div>

          {/* 6. Achievement Badges (Responsive Full-Width Stack on Mobile to Prevent Overflow) */}
          <div className="hero-badges-wrap">
            <div className="hero-badge-item" style={{ background: isDay ? '#ffffff' : 'var(--tag-bg)', border: isDay ? '1.5px solid rgba(0,0,0,0.18)' : '1px solid var(--tag-bd)', padding: '6px 14px', borderRadius: '8px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--tag-fg)', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', fontWeight: 600 }}>
              <span style={{ color: 'var(--fg)' }}>&bull;</span>
              <span>FOSSEE Fellow &bull; IIT Bombay (eSim KiCad EDA)</span>
            </div>
            <div className="hero-badge-item" style={{ background: isDay ? '#ffffff' : 'var(--tag-bg)', border: isDay ? '1.5px solid rgba(0,0,0,0.18)' : '1px solid var(--tag-bd)', padding: '6px 14px', borderRadius: '8px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--tag-fg)', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', fontWeight: 600 }}>
              <span style={{ color: 'var(--muted)' }}>&bull;</span>
              <span>LeetCode Knight (Rating 1,923 &bull; Top 3.81%)</span>
            </div>
            <div className="hero-badge-item" style={{ background: isDay ? '#ffffff' : 'var(--tag-bg)', border: isDay ? '1.5px solid rgba(0,0,0,0.18)' : '1px solid var(--tag-bd)', padding: '6px 14px', borderRadius: '8px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--tag-fg)', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', fontWeight: 600 }}>
              <span style={{ color: 'var(--subfg)' }}>&bull;</span>
              <span>B.Tech CSE &bull; VIT Bhopal (2023–2027)</span>
            </div>
          </div>

          {/* 7. Action Buttons (Monochrome High Contrast, Stacked & Touch-Friendly on Mobile) */}
          <div className="hero-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', margin: '0', pointerEvents: 'auto' }}>
            <a
              href="#projects"
              className="hero-btn-primary"
              style={{
                padding: '11px 24px',
                borderRadius: '999px',
                background: 'var(--fg)',
                color: 'var(--bg)',
                fontWeight: 700,
                fontSize: '13.5px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '7px',
                textDecoration: 'none',
                boxShadow: isDay ? '0 4px 18px rgba(0, 0, 0, 0.25)' : '0 4px 18px rgba(255, 255, 255, 0.25)',
                transition: 'all 0.2s ease'
              }}
            >
              <span>Explore Flagship Work</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
              </svg>
            </a>

            <button
              type="button"
              onClick={onOpenThesis}
              className="hero-btn-secondary"
              style={{
                padding: '11px 22px',
                borderRadius: '999px',
                background: isDay ? '#ffffff' : 'rgba(255, 255, 255, 0.10)',
                border: isDay ? '1.5px solid rgba(0, 0, 0, 0.2)' : '1.5px solid rgba(255, 255, 255, 0.25)',
                color: 'var(--fg)',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '7px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                transition: 'all 0.2s ease'
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              <span>FOSSEE Thesis &amp; Report</span>
            </button>

            <button
              type="button"
              onClick={onOpenResume}
              className="hero-btn-tertiary"
              style={{
                padding: '11px 22px',
                borderRadius: '999px',
                background: isDay ? '#ffffff' : 'rgba(255, 255, 255, 0.10)',
                border: isDay ? '1.5px solid rgba(0, 0, 0, 0.2)' : '1.5px solid rgba(255, 255, 255, 0.25)',
                color: 'var(--fg)',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '7px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                transition: 'all 0.2s ease'
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
              <span>Printable CV</span>
            </button>
          </div>
        </div>

        {/* Right Column: 3D Lanyard ID Badge - Responsively Sized on Mobile */}
        <div className="hero-right-col">
          <div className="hero-lanyard-stage">
            <Lanyard
              frontImage={akshatImg}
              backImage={akshatImg}
              cardColor={isDay ? '#ffffff' : '#09090b'}
              orientation="portrait"
              finish="holographic"
              metal="silver"
              strapColor={isDay ? '#18181b' : '#ffffff'}
              strapLength={isMobile ? 0.26 : 0.36}
              size={isMobile ? 0.72 : 0.92}
              interactive={true}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

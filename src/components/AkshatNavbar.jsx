import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';

// Interactive Dock Navigation Item: Logo-only by default; reveals label & authentic brand glow on hover
function DockNavItem({
  href,
  external = false,
  active = false,
  title,
  label,
  icon,
  brandColor
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`dock-action-btn ${active ? 'on' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={title}
      aria-label={label}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: hovered ? '0 12px 0 9px' : '0 8px',
        height: '34px',
        borderRadius: '10px',
        color: hovered ? brandColor : (active ? 'var(--fg)' : 'var(--pill-dim)'),
        background: hovered ? `${brandColor}18` : (active ? 'var(--chip-hi)' : 'transparent'),
        border: hovered ? `1.5px solid ${brandColor}` : (active ? '1.5px solid var(--line)' : '1.5px solid transparent'),
        boxShadow: hovered
          ? `0 0 16px ${brandColor}77, 0 4px 14px rgba(0,0,0,0.22)`
          : (active ? 'inset 0 0 0 1px var(--line), 0 2px 8px rgba(0,0,0,0.15)' : 'none'),
        transform: hovered ? 'translateY(-2px)' : 'none',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        textDecoration: 'none',
        userSelect: 'none',
        cursor: 'pointer',
        whiteSpace: 'nowrap'
      }}
    >
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: hovered ? brandColor : 'currentColor',
          filter: hovered ? `drop-shadow(0 0 6px ${brandColor})` : 'none',
          transition: 'all 0.25s ease'
        }}
      >
        {icon}
      </span>
      <span
        style={{
          maxWidth: hovered ? '100px' : '0px',
          opacity: hovered ? 1 : 0,
          marginLeft: hovered ? '6px' : '0px',
          overflow: 'hidden',
          transition: 'max-width 0.26s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease, margin 0.2s ease',
          display: 'inline-block',
          verticalAlign: 'middle',
          color: hovered ? 'var(--fg)' : 'transparent',
          fontSize: '12px',
          fontFamily: 'var(--mono)',
          fontWeight: 600,
          letterSpacing: '-0.01em'
        }}
      >
        {label}
      </span>
    </a>
  );
}

export default function AkshatNavbar({ activeSection = 'projects' }) {
  const [skyMode, setSkyMode] = useState(() => {
    return document.documentElement.getAttribute('data-sky') || 'night';
  });
  const [currentTime, setCurrentTime] = useState('');

  // Live clock ticker
  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      let hours = d.getHours();
      let mins = String(d.getMinutes()).padStart(2, '0');
      let ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12 || 12;
      setCurrentTime(`${hours}:${mins} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  // Sky mode toggle
  const toggleSky = () => {
    const next = skyMode === 'night' ? 'day' : 'night';
    setSkyMode(next);
    document.documentElement.setAttribute('data-sky', next);
    try {
      localStorage.setItem('akshat_sky', next);
    } catch (e) {}
  };

  return (
    <>
      <div className="dockveil" aria-hidden="true" />
      <div className="navwrap">
        <div className="navbox dock-unified-bar" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {/* 1. Home Button (3D Monogram Glass Tile) */}
          <div className="mark glass" title="Home: Back to Top">
            <a
              href="#top"
              aria-label="Home: Back to Top"
              className={activeSection === 'top' ? 'on' : ''}
            >
              <svg className="d3" viewBox="0 0 32 32" aria-hidden="true">
                <defs>
                  <linearGradient id="hgF" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#a1a1aa" />
                  </linearGradient>
                  <linearGradient id="hgS" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f4f4f5" />
                    <stop offset="100%" stopColor="#71717a" />
                  </linearGradient>
                </defs>
                <path d="M10 6.5 23 6.5 30 14V27H17V14Z" fill="url(#hgS)" stroke="url(#hgS)" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M3 14 10 6.5 17 14V27H3Z" fill="url(#hgF)" stroke="url(#hgF)" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M10 6.5 17 14V27" fill="none" stroke="#ffffff" strokeOpacity=".8" strokeWidth=".8" strokeLinejoin="round" />
                <path d="M21 27v-6.5a2.5 2.5 0 0 1 5 0V27Z" fill="#18181b" />
              </svg>
              <svg className="ln" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
            </a>
          </div>

          {/* 2. Main Dock Navigation (Logo-only by default, label reveals on hover with authentic brand glow) */}
          <nav className="glass dock-items-glass" aria-label="Quick Actions" style={{ display: 'flex', alignItems: 'center', gap: '3px', padding: '0 6px' }}>
            {/* Projects Button (Cyan glow) */}
            <DockNavItem
              href="#projects"
              active={activeSection === 'projects'}
              title="Flagship Projects"
              label="Projects"
              brandColor="#38bdf8"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              }
            />

            {/* Project Archive Button (Amber Gold glow) */}
            <DockNavItem
              href="#archive"
              active={activeSection === 'archive'}
              title="GitHub Codebase Archive (33 Repositories)"
              label="Archive"
              brandColor="#f59e0b"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="21 8 21 21 3 21 3 8" />
                  <rect x="1" y="3" width="22" height="5" />
                  <line x1="10" y1="12" x2="14" y2="12" />
                </svg>
              }
            />

            {/* Skills Button (Tech Emerald glow) */}
            <DockNavItem
              href="#skills"
              active={activeSection === 'skills'}
              title="Skills & Toolchain"
              label="Skills"
              brandColor="#10b981"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <rect x="9" y="9" width="6" height="6" />
                  <line x1="9" y1="1" x2="9" y2="4" />
                  <line x1="15" y1="1" x2="15" y2="4" />
                  <line x1="9" y1="20" x2="9" y2="23" />
                  <line x1="15" y1="20" x2="15" y2="23" />
                </svg>
              }
            />

            <span className="dock-vsep" aria-hidden="true" />

            {/* LeetCode Button (Official LeetCode Orange glow) */}
            <DockNavItem
              href="https://leetcode.com/u/akshatpandey28/"
              external={true}
              title="LeetCode Knight (Rating 1,923 · Top 3.81%)"
              label="LeetCode"
              brandColor="#ffa116"
              icon={<LeetcodeIcon size={18} />}
            />

            {/* GitHub Button (Official Git / GitHub Coral glow) */}
            <DockNavItem
              href="https://github.com/akshat2805p"
              external={true}
              title="GitHub Profile (33 Repositories)"
              label="GitHub"
              brandColor="#f05032"
              icon={<GithubIcon size={18} />}
            />

            {/* LinkedIn Button (Official LinkedIn Blue glow) */}
            <DockNavItem
              href="https://linkedin.com/in/akshatpandey28"
              external={true}
              title="LinkedIn Profile"
              label="LinkedIn"
              brandColor="#0a66c2"
              icon={<LinkedinIcon size={18} />}
            />
          </nav>

          {/* 3. Controls: Day/Night Switch + Clock (Clean & high contrast) */}
          <div className="ctrl glass dock-ctrl-glass" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '0 8px' }}>
            {/* Day / Night Toggle Switch */}
            <button
              className="dn"
              type="button"
              onClick={toggleSky}
              role="switch"
              aria-checked={skyMode === 'night'}
              aria-label={skyMode === 'night' ? 'Night active. Switch to day' : 'Day active. Switch to night'}
              title={skyMode === 'night' ? 'Switch to Day Light' : 'Switch to Night Sky'}
            >
              <span className="knob" />
            </button>

            <span className="vsep" aria-hidden="true" />

            {/* Live Clock Time */}
            <button className="when" type="button" data-live="true" aria-label="Local Time" title="Local Time">
              <span className="dot" aria-hidden="true" />
              <span id="whenText">{currentTime || '12:00 pm'}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

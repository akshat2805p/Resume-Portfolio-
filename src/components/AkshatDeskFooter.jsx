import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, CodeforcesIcon, XTwitterIcon } from './Icons';

export default function AkshatDeskFooter({ onOpenThesis, onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      let hours = d.getHours();
      let mins = String(d.getMinutes()).padStart(2, '0');
      let ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12 || 12;
      setTimeStr(`${hours}:${mins} ${ampm} IST`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <footer id="desk" style={{ position: 'relative', background: 'var(--bg, #070a12)', borderTop: '1px solid rgba(255, 255, 255, 0.08)', overflow: 'hidden' }}>
      {/* 1. Tactile Workspace Section */}
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '90px 24px 60px 24px' }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '8px' }}>
            Tactile Workbench &bull; Physical Artifacts
          </p>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 400, color: 'var(--fg)', margin: '0 0 14px 0', letterSpacing: '-0.01em' }}>
            Let&apos;s build systems that endure.
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--subfg)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Interact with the physical artifacts of my engineering journey: printable curriculum vitae, IIT Bombay fellowship paper, direct postal dispatch, and verified profiles.
          </p>
        </div>

        {/* Tactile Desk Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '28px',
            alignItems: 'stretch'
          }}
        >
          {/* Item 1: Printable Curriculum Vitae Sheet */}
          <div
            onClick={onOpenResume}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onOpenResume()}
            style={{
              background: '#f8f6f0',
              color: '#1a1815',
              borderRadius: '12px',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              position: 'relative',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.45)',
              transform: 'rotate(-1.5deg)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              minHeight: '260px'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(0deg) translateY(-6px) scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(-1.5deg) translateY(0) scale(1)')}
          >
            {/* Folded paper corner effect */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderWidth: '0 28px 28px 0',
                borderColor: 'transparent #e4ded0 transparent transparent',
                filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.15))'
              }}
              aria-hidden="true"
            />

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid #dcd5c7', paddingBottom: '8px', marginBottom: '14px' }}>
                <span style={{ fontFamily: 'var(--display)', fontSize: '20px', fontWeight: 600, letterSpacing: '0.04em' }}>AKSHAT PANDEY</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: '#c2412d', border: '1px solid #c2412d', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>CURRICULUM VITAE</span>
              </div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: '#685e50', margin: '0 0 12px 0' }}>
                B.Tech Computer Science &bull; Systems &bull; AI Platforms
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', color: '#443d34' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                  <span>FOSSEE Fellow &bull; IIT Bombay (eSim KiCad EDA)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f59e0b' }} />
                  <span>LeetCode Knight (Rating 1,923 &bull; Top 3.8%)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0284c7' }} />
                  <span>33 Verified Repositories on GitHub</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #dcd5c7', paddingTop: '10px' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', color: '#7a7060', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Click to view printable PDF</span>
              <span style={{ fontSize: '14px', color: '#1a1815' }}>&nearr;</span>
            </div>
          </div>

          {/* Item 2: FOSSEE Research Thesis Paper */}
          <div
            onClick={onOpenThesis}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onOpenThesis()}
            style={{
              background: '#f2eee3',
              color: '#1c1811',
              borderRadius: '12px',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              position: 'relative',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.45)',
              transform: 'rotate(1.5deg)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              minHeight: '260px'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(0deg) translateY(-6px) scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(1.5deg) translateY(0) scale(1)')}
          >
            {/* Top yellow tab */}
            <div
              style={{
                position: 'absolute',
                top: '-10px',
                right: '24px',
                background: '#ffd43b',
                color: '#493800',
                padding: '3px 10px',
                borderRadius: '4px',
                fontSize: '10px',
                fontFamily: 'var(--mono)',
                fontWeight: 700,
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
              }}
            >
              FELLOWSHIP REPORT
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid #d8d0bf', paddingBottom: '8px', marginBottom: '14px' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: '#80705a', textTransform: 'uppercase', letterSpacing: '0.06em' }}>IIT BOMBAY &bull; SUMMER 2026</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: '#10b981', background: 'rgba(16, 185, 129, 0.15)', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>VERIFIED</span>
              </div>
              <h4 style={{ fontFamily: 'var(--display)', fontSize: '1.45rem', fontWeight: 500, margin: '0 0 8px 0', lineHeight: 1.25, color: '#111' }}>
                eSim KiCad EDA Diagnostics
              </h4>
              <p style={{ fontSize: '12.5px', color: '#554d40', lineHeight: 1.55, margin: 0 }}>
                Six automation plugins for KiCad 6–10: automated PCB health grading, DRC audits, simulation validation, and three-stage AI-assisted reporting pipeline.
              </p>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #d8d0bf', paddingTop: '10px' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', color: '#7a7060', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Read fellowship thesis</span>
              <span style={{ fontSize: '14px', color: '#111' }}>&nearr;</span>
            </div>
          </div>

          {/* Item 3: Tactile Airmail Envelope */}
          <div
            onClick={handleCopyEmail}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleCopyEmail(e)}
            style={{
              background: '#f1e8d6',
              color: '#2a2218',
              borderRadius: '12px',
              padding: '24px 22px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              position: 'relative',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.45)',
              overflow: 'hidden',
              minHeight: '260px',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
          >
            {/* Vintage Airmail Stripe Header */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '8px',
                background: 'repeating-linear-gradient(135deg, #c2412d 0, #c2412d 12px, #ffffff 12px, #ffffff 18px, #1d4ed8 18px, #1d4ed8 30px, #ffffff 30px, #ffffff 36px)'
              }}
              aria-hidden="true"
            />

            <div style={{ marginTop: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: '#887c6b', letterSpacing: '0.1em' }}>PAR AVION &bull; AIR MAIL</span>
                <div style={{ width: '40px', height: '46px', border: '1px dashed #b8aa94', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2px' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '7px', color: '#887c6b' }}>INDIA</span>
                  <span style={{ fontSize: '14px' }}>&#9993;</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '7px', color: '#c2412d', fontWeight: 700 }}>2026</span>
                </div>
              </div>

              <div style={{ marginTop: '16px' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '9.5px', color: '#807260', letterSpacing: '0.08em' }}>DISPATCH TO:</span>
                <div style={{ fontFamily: 'var(--display)', fontSize: '20px', fontWeight: 500, color: '#1a1815' }}>Akshat Pandey</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: '#10b981', fontWeight: 600, marginTop: '2px', wordBreak: 'break-all' }}>
                  {personalInfo.email}
                </div>
              </div>
            </div>

            {/* Bottom Status / Wax Seal Action */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px dashed #d6cbba', paddingTop: '12px' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', color: copied ? '#10b981' : '#706454', fontWeight: copied ? 700 : 500 }}>
                {copied ? 'COPIED TO CLIPBOARD!' : 'CLICK TO COPY ADDRESS'}
              </span>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#b91c1c', color: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10.5px', fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 700, boxShadow: '0 2px 6px rgba(185, 28, 28, 0.4)' }}>
                AP
              </div>
            </div>
          </div>
        </div>

        {/* Tactile Platform Passes (Stamps, Tickets, Profiles) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '18px',
            marginTop: '28px'
          }}
        >
          {/* LinkedIn Stamp */}
          <a
            href="https://linkedin.com/in/akshatpandey28"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(135deg, #0e2a47 0%, #081726 100%)',
              border: '1px solid rgba(10, 102, 194, 0.35)',
              borderRadius: '10px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textDecoration: 'none',
              color: '#fff',
              transition: 'transform 0.2s ease, border-color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ color: '#0a66c2', background: 'rgba(10, 102, 194, 0.15)', padding: '8px', borderRadius: '8px' }}>
                <LinkedinIcon size={20} />
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>LinkedIn</div>
                <div style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>akshatpandey28</div>
              </div>
            </div>
            <span style={{ fontSize: '12px', color: '#0a66c2' }}>&nearr;</span>
          </a>

          {/* LeetCode Ticket */}
          <a
            href="https://leetcode.com/u/akshatpandey28/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(135deg, #2b1f0c 0%, #171105 100%)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              borderRadius: '10px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textDecoration: 'none',
              color: '#fff',
              transition: 'transform 0.2s ease, border-color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ color: '#f59e0b', background: 'rgba(245, 158, 11, 0.15)', padding: '8px', borderRadius: '8px' }}>
                <LeetcodeIcon size={20} />
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>LeetCode Knight</div>
                <div style={{ fontSize: '11px', color: '#f59e0b', fontFamily: 'var(--mono)' }}>Rating 1,923 (Top 3.8%)</div>
              </div>
            </div>
            <span style={{ fontSize: '12px', color: '#f59e0b' }}>&nearr;</span>
          </a>

          {/* GitHub Repositories Card */}
          <a
            href="https://github.com/akshat2805p"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(135deg, #161b22 0%, #0d1117 100%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '10px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textDecoration: 'none',
              color: '#fff',
              transition: 'transform 0.2s ease, border-color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ color: '#fff', background: 'rgba(255, 255, 255, 0.08)', padding: '8px', borderRadius: '8px' }}>
                <GithubIcon size={20} />
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>GitHub Archive</div>
                <div style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>33 Public Repos</div>
              </div>
            </div>
            <span style={{ fontSize: '12px', color: '#fff' }}>&nearr;</span>
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com/Ak_Ap28Tweet"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(135deg, #18181b 0%, #09090b 100%)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '10px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textDecoration: 'none',
              color: '#fff',
              transition: 'transform 0.2s ease, border-color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ color: '#e2e8f0', background: 'rgba(255, 255, 255, 0.08)', padding: '8px', borderRadius: '8px' }}>
                <XTwitterIcon size={19} />
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>X (Twitter)</div>
                <div style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>@Ak_Ap28Tweet</div>
              </div>
            </div>
            <span style={{ fontSize: '12px', color: '#e2e8f0' }}>&nearr;</span>
          </a>
        </div>
      </div>

      {/* 2. Modern Clean Footer Colophon Bar */}
      <div
        style={{
          borderTop: '1px solid var(--line)',
          background: 'var(--card-bg)',
          padding: '28px 24px 36px 24px'
        }}
      >
        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
          }}
        >
          {/* Identity & Status */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 8px #10b981' }} />
              <span style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: 600, color: 'var(--fg)' }}>
                Akshat Pandey
              </span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)' }}>
                ({timeStr})
              </span>
            </div>
            <p style={{ fontSize: '12.5px', color: 'var(--muted)', margin: 0, fontFamily: 'var(--mono)' }}>
              VIT Bhopal (2023–2027) &bull; FOSSEE Fellow, IIT Bombay &bull; LeetCode Knight
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a href="https://linkedin.com/in/akshatpandey28" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: '#0a66c2', background: 'var(--chip)', border: '1px solid var(--line)', padding: '7px', borderRadius: '6px', display: 'flex' }}>
              <LinkedinIcon size={17} />
            </a>
            <a href="https://github.com/akshat2805p" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--fg)', background: 'var(--chip)', border: '1px solid var(--line)', padding: '7px', borderRadius: '6px', display: 'flex' }}>
              <GithubIcon size={17} />
            </a>
            <a href="https://leetcode.com/u/akshatpandey28/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" style={{ color: '#ffa116', background: 'var(--chip)', border: '1px solid var(--line)', padding: '7px', borderRadius: '6px', display: 'flex' }}>
              <LeetcodeIcon size={17} />
            </a>
            <a href="https://codeforces.com/profile/akshat_2805p" target="_blank" rel="noopener noreferrer" aria-label="Codeforces" style={{ color: '#1890ff', background: 'var(--chip)', border: '1px solid var(--line)', padding: '7px', borderRadius: '6px', display: 'flex' }}>
              <CodeforcesIcon size={17} />
            </a>
            <a href="https://x.com/Ak_Ap28Tweet" target="_blank" rel="noopener noreferrer" aria-label="X Twitter" style={{ color: 'var(--fg)', background: 'var(--chip)', border: '1px solid var(--line)', padding: '7px', borderRadius: '6px', display: 'flex' }}>
              <XTwitterIcon size={16} />
            </a>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              style={{
                marginLeft: '8px',
                background: 'var(--chip)',
                border: '1px solid var(--line)',
                color: 'var(--fg)',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '11px',
                fontFamily: 'var(--mono)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 15l-6-6-6 6" />
              </svg>
              <span>TOP</span>
            </button>
          </div>
        </div>

        <div style={{ maxWidth: '1180px', margin: '16px auto 0 auto', paddingTop: '14px', borderTop: '1px solid var(--line)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)' }}>
            &copy; 2026 Akshat Pandey &bull; Designed &amp; engineered with React 19, Three.js &amp; Vite
          </span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)' }}>
            akshatpandeygit28@gmail.com
          </span>
        </div>
      </div>
    </footer>
  );
}

import React, { useEffect, useState } from 'react';
import { ArrowRight, FileText, Terminal, Shield, Award, Sparkles, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume, onOpenTerminal }) {
  const [counts, setCounts] = useState({ problems: 0, rating: 0, samples: 0, plugins: 0 });

  useEffect(() => {
    // Animate hero metrics
    const duration = 1800;
    const start = performance.now();
    const targets = { problems: 300, rating: 1923, samples: 10368, plugins: 6 };

    const frame = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);

      setCounts({
        problems: Math.floor(targets.problems * ease),
        rating: Math.floor(targets.rating * ease),
        samples: Math.floor(targets.samples * ease),
        plugins: Math.floor(targets.plugins * ease)
      });

      if (progress < 1) requestAnimationFrame(frame);
    };

    const timer = setTimeout(() => requestAnimationFrame(frame), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '110px',
        paddingBottom: '80px',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container" style={{ textAlign: 'center', maxWidth: '960px' }}>
        {/* Shivam Kumar Signature Glass Prism */}
        <div className="prism-container">
          <div className="prism" aria-hidden="true">
            <svg viewBox="-36 -34 72 64">
              <defs>
                <linearGradient id="pgl" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.25" />
                </linearGradient>
                <linearGradient id="pspec" gradientUnits="userSpaceOnUse" x1="-27" y1="0" x2="27" y2="0">
                  <stop offset="0%" stopColor="#ff5f56" />
                  <stop offset="33%" stopColor="#ffbd2e" />
                  <stop offset="66%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <polygon points="0,-30 30,22 -30,22" fill="url(#pgl)" opacity="0.6" />
              <polygon points="0,-30 30,22 -30,22" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" strokeLinejoin="round" />
              <path d="M-27,22 L27,22" stroke="url(#pspec)" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M-6,-19 L-11,-10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
            </svg>
          </div>
        </div>

        {/* Fellowship & Status Pill */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '6px 16px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.28)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11.5px',
              fontWeight: 600,
              color: 'var(--accent-mint)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase'
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-mint)',
                boxShadow: '0 0 10px var(--accent-mint)'
              }}
            />
            <span>Summer Fellow · FOSSEE, IIT Bombay &bull; VIT Bhopal</span>
          </div>
        </div>

        {/* Hero Title: Shivam Kumar Editorial Styling */}
        <h1
          style={{
            fontSize: 'clamp(44px, 7.5vw, 84px)',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
            fontFamily: 'var(--font-serif)',
            color: 'var(--text-main)'
          }}
        >
          Hi, I’m <span style={{ color: 'var(--accent-mint)' }}>Akshat</span>.{' '}
          <span style={{ display: 'block', fontSize: 'clamp(32px, 5.5vw, 68px)', color: 'var(--text-main)', opacity: 0.95 }}>
            I build distributed <em>systems</em> &amp; autonomous <em>AI</em>.
          </span>
        </h1>

        {/* Hero Bio */}
        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 19px)',
            lineHeight: 1.7,
            color: 'var(--text-muted)',
            maxWidth: '740px',
            margin: '0 auto 36px',
            fontFamily: 'var(--font-sans)',
            fontWeight: 400
          }}
        >
          Computer Science undergraduate at VIT Bhopal. FOSSEE Summer Fellow at{' '}
          <strong style={{ color: 'var(--text-main)', fontWeight: 600 }}>IIT Bombay</strong> engineering open-source EDA
          plugins for KiCad &amp; Ngspice, and systems builder designing high-concurrency Go clusters and machine learning telemetry.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '64px'
          }}
        >
          <a
            href="#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 32px',
              backgroundColor: 'var(--accent-mint)',
              color: '#090a0f',
              fontWeight: 700,
              fontSize: '15px',
              borderRadius: '10px',
              boxShadow: '0 8px 24px -4px rgba(16, 185, 129, 0.45)',
              transition: 'all 0.25s var(--ease-spring)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 30px -4px rgba(16, 185, 129, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(16, 185, 129, 0.45)';
            }}
          >
            <span>Explore Work</span>
            <ArrowRight size={17} />
          </a>

          <button
            onClick={onOpenResume}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: 'var(--text-main)',
              fontWeight: 600,
              fontSize: '15px',
              borderRadius: '10px',
              border: '1px solid var(--border-subtle)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.25s var(--ease-spring)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-mint)';
              e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <FileText size={17} color="var(--accent-mint)" />
            <span>Download Résumé</span>
          </button>

          <button
            onClick={onOpenTerminal}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 22px',
              backgroundColor: 'transparent',
              color: 'var(--text-muted)',
              fontWeight: 500,
              fontSize: '14px',
              fontFamily: 'var(--font-mono)',
              borderRadius: '10px',
              border: '1px solid var(--border-subtle)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--text-main)';
              e.currentTarget.style.borderColor = 'var(--text-muted)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
            }}
          >
            <Terminal size={15} />
            <span>Launch CLI</span>
          </button>
        </div>

        {/* Live Verified Metric Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            textAlign: 'left'
          }}
        >
          {/* LeetCode Knight */}
          <div className="glass-panel" style={{ padding: '22px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                LeetCode Knight
              </span>
              <Award size={16} color="var(--accent-mint)" />
            </div>
            <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--text-main)' }}>
              {counts.problems}+
            </div>
            <div style={{ fontSize: '12px', color: 'var(--accent-mint)', marginTop: '2px' }}>
              {counts.rating} Rating · Top 3.8%
            </div>
          </div>

          {/* IIT Bombay FOSSEE */}
          <div className="glass-panel" style={{ padding: '22px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                FOSSEE Plugins
              </span>
              <Shield size={16} color="var(--accent-mint)" />
            </div>
            <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--text-main)' }}>
              {counts.plugins} Native
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
              KiCad 6–10 &amp; Ngspice EDA
            </div>
          </div>

          {/* AIOps Sentinel Precision */}
          <div className="glass-panel" style={{ padding: '22px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                AIOps Sentinel
              </span>
              <Sparkles size={16} color="var(--accent-mint)" />
            </div>
            <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--text-main)' }}>
              83.96%
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
              Precision on {counts.samples.toLocaleString()} samples
            </div>
          </div>

          {/* Mini-Dynamo Quorum */}
          <div className="glass-panel" style={{ padding: '22px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                Mini-Dynamo
              </span>
              <ExternalLink size={16} color="var(--accent-mint)" />
            </div>
            <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--text-main)' }}>
              5 Nodes
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
              Go 1.25 · Consistent Hash Ring
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

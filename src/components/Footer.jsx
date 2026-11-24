import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        backgroundColor: 'var(--bg-surface)',
        padding: '48px 0 36px',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '32px'
          }}
        >
          {/* Logo & Status */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '16px', color: 'var(--text-main)' }}>
                <span style={{ color: 'var(--accent-mint)' }}>&gt;</span> AP.ENGINEERING
              </span>
              <span className="badge-mint" style={{ fontSize: '10px' }}>
                v2.0
              </span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Built with React 19, Three.js, and meticulous attention to performance.
            </p>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            {personalInfo.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '12.5px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-mint)';
                  e.currentTarget.style.borderColor = 'var(--accent-mint)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                {s.name}
              </a>
            ))}
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            style={{
              padding: '10px 14px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-mint)';
              e.currentTarget.style.color = 'var(--accent-mint)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.color = 'var(--text-main)';
            }}
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Bottom Sub-row */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            fontSize: '12px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-dim)'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Akshat Pandey. All rights reserved.
          </div>
          <div>
            IIT Bombay FOSSEE Fellow &bull; LeetCode Knight &bull; Zero external tracking
          </div>
        </div>
      </div>
    </footer>
  );
}

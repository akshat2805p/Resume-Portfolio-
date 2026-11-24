import React, { useState, useEffect } from 'react';
import { Sun, Moon, Terminal, FileText, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar({ isDark, setIsDark, onOpenResume, onOpenTerminal, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Archive', href: '#archive' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 28px',
          background: scrolled
            ? (isDark ? 'rgba(9, 10, 15, 0.88)' : 'rgba(255, 255, 255, 0.92)')
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.8)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.8)' : 'none',
          borderBottom: scrolled
            ? (isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)')
            : '1px solid transparent',
          transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.3)' : 'none'
        }}
      >
        {/* Brand Logo: Shivam Kumar Prismatic Monogram */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'var(--font-serif)',
            fontSize: '22px',
            color: 'var(--text-main)',
            letterSpacing: '-0.01em'
          }}
        >
          <span
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(6, 182, 212, 0.25) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              fontSize: '18px',
              color: 'var(--accent-mint)'
            }}
          >
            A
          </span>
          <span>
            Akshat <em style={{ fontStyle: 'italic', color: 'var(--accent-mint)' }}>Pandey</em>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '24px'
          }}
          className="desktop-nav-container"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.04em',
                  color: isActive ? 'var(--accent-mint)' : 'var(--text-muted)',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  padding: '4px 0'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? 'var(--accent-mint)' : 'var(--text-muted)')}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: 'var(--accent-mint)',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* CLI Terminal Launcher */}
          <button
            onClick={onOpenTerminal}
            aria-label="Launch interactive developer CLI"
            title="Press ~ or click to open developer CLI"
            style={{
              padding: '7px 11px',
              borderRadius: '8px',
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--accent-mint)',
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent-mint)';
              e.currentTarget.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
              e.currentTarget.style.color = 'var(--accent-mint)';
            }}
          >
            <Terminal size={14} />
            <span style={{ display: 'none' }} className="terminal-label">CLI</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle visual theme"
            style={{
              padding: '7px',
              borderRadius: '8px',
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-muted)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Résumé Modal Trigger */}
          <button
            onClick={onOpenResume}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              backgroundColor: 'var(--accent-mint)',
              color: '#090a0f',
              fontWeight: 600,
              fontSize: '13px',
              fontFamily: 'var(--font-sans)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 14px -2px rgba(16, 185, 129, 0.35)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 20px -2px rgba(16, 185, 129, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px -2px rgba(16, 185, 129, 0.35)';
            }}
          >
            <FileText size={14} />
            <span>Résumé</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-trigger"
            style={{
              display: 'none',
              padding: '8px',
              color: 'var(--text-main)'
            }}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            backgroundColor: isDark ? 'rgba(9, 10, 15, 0.96)' : 'rgba(255, 255, 255, 0.97)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            padding: '40px'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '22px',
                fontWeight: 600,
                fontFamily: 'var(--font-display)',
                color: activeSection === link.href.substring(1) ? 'var(--accent-mint)' : 'var(--text-main)',
                letterSpacing: '-0.02em'
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: '20px', display: 'flex', gap: '16px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                backgroundColor: 'var(--accent-mint)',
                color: '#000000',
                fontWeight: 600,
                fontSize: '15px'
              }}
            >
              View Full Résumé
            </button>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav-container { display: flex !important; }
          .terminal-label { display: inline !important; }
        }
        @media (max-width: 899px) {
          .mobile-menu-trigger { display: block !important; }
        }
      `}</style>
    </>
  );
}

import React, { useState } from 'react';
import { Mail, Send, ExternalLink, CheckCircle2, ArrowRight, FileText, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, CodeforcesIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onOpenResume }) {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
    }, 400);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const getSocialIcon = (name) => {
    switch (name) {
      case 'GitHub': return <GithubIcon size={16} />;
      case 'LinkedIn': return <LinkedinIcon size={16} />;
      case 'LeetCode': return <LeetcodeIcon size={16} />;
      case 'Codeforces': return <CodeforcesIcon size={16} />;
      default: return <ExternalLink size={16} />;
    }
  };

  return (
    <section id="contact" style={{ padding: '120px 0 80px', position: 'relative' }}>
      <div className="container">
        {/* Section Header: Shivam Kumar Editorial Styling */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag">
            <span>07 // INTERACTIVE DESK &amp; TRANSMISSION</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              fontWeight: 400,
              fontFamily: 'var(--font-serif)',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              color: 'var(--text-main)'
            }}
          >
            Everything is on this <em>desk</em>.
          </h2>
          <p
            style={{
              color: 'var(--text-muted)',
              maxWidth: '640px',
              margin: '0 auto',
              fontSize: '16px',
              fontFamily: 'var(--font-sans)',
              lineHeight: 1.65
            }}
          >
            Pull out the CV sheet, open the FOSSEE research folder, inspect the postage items, or send a transmission.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════
            SHIVAM KUMAR INTERACTIVE DESK STAGE
            ═══════════════════════════════════════════════════════════════════════ */}
        <div className="deskwrap" id="desk" style={{ marginBottom: '80px' }}>
          <div className="desk">
            {/* Desk Title Intro */}
            <div className="hello">
              <h2>
                let’s <em>talk</em>.
              </h2>
              <p>
                Everything about me is on this desk. Pull out the CV to review my technical background, inspect the
                IIT Bombay fellowship paper, or pick a card to reach me directly.
              </p>
              <button
                onClick={onOpenResume}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 22px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--accent-mint)',
                  color: '#070a12',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  boxShadow: '0 4px 18px rgba(16, 185, 129, 0.4)',
                  cursor: 'pointer'
                }}
              >
                <Download size={14} />
                <span>Pull Out CV Sheet &darr;</span>
              </button>
            </div>

            {/* Physical CV Paper Sheet */}
            <div
              className="it lift sheet-cv"
              onClick={onOpenResume}
              role="button"
              tabIndex={0}
              aria-label="Akshat Pandey CV Sheet"
            >
              <div>
                <div className="nm">
                  <span>Akshat Pandey</span>
                  <span className="rtag">CV · 2026</span>
                </div>
                <div className="rl">Systems Builder &bull; IITB Fellow</div>

                <div className="sec">Experience</div>
                <span className="ln" />
                <span className="ln" style={{ width: '82%' }} />
                <div style={{ fontSize: '9px', color: '#475569', marginBottom: '6px' }}>
                  FOSSEE Summer Fellow &bull; IIT Bombay
                </div>

                <div className="sec">Education</div>
                <span className="ln" />
                <div style={{ fontSize: '9px', color: '#475569', marginBottom: '6px' }}>
                  B.Tech CSE &bull; VIT Bhopal (2023–27)
                </div>

                <div className="sec">Competitive Track</div>
                <span className="ln" style={{ width: '90%' }} />
                <div style={{ fontSize: '9px', color: '#059669', fontWeight: 600 }}>
                  LeetCode Knight &bull; 1923 Rating
                </div>
              </div>

              <div className="seal">
                VERIFIED ARCHIVE &bull; MMXXVI
              </div>
            </div>

            {/* Research Paper / FOSSEE Fellowship Folder */}
            <a
              href="https://github.com/akshat2805p/esim-kicad-health-analyzer"
              target="_blank"
              rel="noopener noreferrer"
              className="it lift paper-thesis"
              aria-label="IIT Bombay Fellowship KiCad EDA Plugins"
            >
              <div>
                <svg className="crest" viewBox="0 0 80 96" fill="none">
                  <path d="M8 6h64v40c0 24-18 38-32 46C26 84 8 70 8 46z" stroke="currentColor" strokeWidth="3" />
                  <circle cx="40" cy="40" r="14" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M40 26v28M26 40h28" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div className="t">Open-Source EDA Architecture</div>
                <div style={{ fontSize: '11px', color: '#e6cf93', marginTop: '4px' }}>
                  KiCad 6–10 &amp; Ngspice Plugins
                </div>
              </div>

              <div>
                <div className="d">IIT BOMBAY FOSSEE &bull; MMXXVI</div>
                <div className="tab" style={{ marginTop: '8px' }}>
                  <span>Inspect System</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </a>

            {/* Postal Envelope: Say Hello */}
            <div
              className="it lift env-item"
              onClick={handleCopyEmail}
              role="button"
              tabIndex={0}
              aria-label="Direct Email Envelope"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span className="pm">AIRMAIL &bull; SAY HELLO</span>
                <div className="seal-stamp">A</div>
              </div>
              <div>
                <div style={{ fontSize: '9.5px', color: '#64748b', textTransform: 'uppercase' }}>
                  {copiedEmail ? '✓ Copied to clipboard!' : 'Click to copy email address:'}
                </div>
                <div className="to-email">{personalInfo.email}</div>
              </div>
            </div>

            {/* Perforated Postage Stamp: LinkedIn */}
            <a
              href="https://linkedin.com/in/akshatpandey28"
              target="_blank"
              rel="noopener noreferrer"
              className="it lift stamp-item"
              aria-label="LinkedIn Profile Stamp"
            >
              <small>POSTAGE &bull; ₹5</small>
              <b>in</b>
              <small style={{ color: '#0a66c2', fontWeight: 700 }}>akshatpandey28</small>
            </a>

            {/* Admission Ticket: LeetCode */}
            <a
              href="https://leetcode.com/u/akshatpandey28/"
              target="_blank"
              rel="noopener noreferrer"
              className="it lift ticket-item"
              aria-label="LeetCode Profile Ticket"
            >
              <div className="l">
                <small>ADMIT ONE &bull; KNIGHT</small>
                <b>Rating: 1923</b>
                <span style={{ fontSize: '10.5px', color: '#94a3b8' }}>300+ Problems Solved</span>
              </div>
              <div style={{ fontSize: '26px', opacity: 0.8 }}>⚡</div>
            </a>

            {/* Developer Business Card: GitHub */}
            <a
              href="https://github.com/akshat2805p"
              target="_blank"
              rel="noopener noreferrer"
              className="it lift card-item"
              aria-label="GitHub Profile Card"
            >
              <div>
                <b>Akshat Pandey</b>
                <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>
                  Software Engineer &bull; Systems
                </div>
              </div>
              <small>@akshat2805p &bull; 33 Repositories</small>
            </a>
          </div>
        </div>

        {/* Transmission & Direct Contact Channels */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            maxWidth: '1040px',
            margin: '0 auto'
          }}
        >
          {/* Direct Channels */}
          <div className="glass-panel" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '12px', fontFamily: 'var(--font-serif)' }}>
                Direct Channels &amp; Coordinates
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
                Open to software engineering roles, distributed systems challenges, and open-source collaborations.
              </p>

              {/* Email Card */}
              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  marginBottom: '20px',
                  transition: 'all 0.2s ease'
                }}
              >
                <div
                  style={{
                    padding: '10px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--accent-mint)',
                    color: '#090a0f'
                  }}
                >
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                    Primary Direct Email
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-main)', marginTop: '2px' }}>
                    {personalInfo.email}
                  </div>
                </div>
              </a>

              {/* Social Channels List */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {personalInfo.socials.slice(0, 4).map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '13px',
                      color: 'var(--text-main)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {getSocialIcon(s.name)}
                      <span>{s.name}</span>
                    </div>
                    <ExternalLink size={12} color="var(--text-dim)" />
                  </a>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '12px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                Response latency: usually within 24 hours &bull; IST (UTC+5:30)
              </div>
            </div>
          </div>

          {/* Message Transmission Form */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
              Send Transmission
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
              Have an engineering opportunity or project idea? Dispatch a message below.
            </p>

            {submitted ? (
              <div
                style={{
                  padding: '32px 24px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid var(--accent-mint)',
                  textAlign: 'center'
                }}
              >
                <CheckCircle2 size={36} color="var(--accent-mint)" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ fontSize: '17px', color: 'var(--text-main)', marginBottom: '6px' }}>
                  Transmission Recorded
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '13.5px' }}>
                  Thank you! Akshat will review and reply to {formState.email || 'your email'} shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: '16px',
                    padding: '8px 18px',
                    borderRadius: '6px',
                    backgroundColor: 'var(--accent-mint)',
                    color: '#090a0f',
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600
                  }}
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-dim)',
                      marginBottom: '6px',
                      textTransform: 'uppercase'
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-mint)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-dim)',
                      marginBottom: '6px',
                      textTransform: 'uppercase'
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="ada@analytical-engine.io"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-mint)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-dim)',
                      marginBottom: '6px',
                      textTransform: 'uppercase'
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Discussing a distributed backend architecture or engineering role..."
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-mint)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '14px 24px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--accent-mint)',
                    color: '#090a0f',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 4px 18px rgba(16, 185, 129, 0.4)',
                    transition: 'all 0.2s ease',
                    marginTop: '4px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.55)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 18px rgba(16, 185, 129, 0.4)';
                  }}
                >
                  <Send size={15} />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

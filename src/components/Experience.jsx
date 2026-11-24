import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header: Shivam Kumar Editorial Styling */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag">
            <span>03 // PROFESSIONAL TRACK &amp; FELLOWSHIP</span>
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
            Fellowship &amp; Engineering <em>Track</em>.
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '16px', fontFamily: 'var(--font-sans)', lineHeight: 1.65 }}>
            Open-source EDA plugin engineering at IIT Bombay, algorithm optimization, and developer leadership.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Connecting Line */}
          <div
            style={{
              position: 'absolute',
              left: '23px',
              top: '20px',
              bottom: '20px',
              width: '2px',
              backgroundColor: 'rgba(16, 185, 129, 0.25)',
              zIndex: 0
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {experiences.map((exp, idx) => (
              <div
                key={exp.role + exp.organization}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '24px',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {/* Timeline Dot Marker */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-dark)',
                    border: '2px solid var(--accent-mint)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-mint)',
                    flexShrink: 0,
                    boxShadow: '0 0 16px rgba(16, 185, 129, 0.3)'
                  }}
                >
                  <Briefcase size={20} />
                </div>

                {/* Timeline Card */}
                <div className="glass-panel" style={{ flex: 1, padding: '32px' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      marginBottom: '12px'
                    }}
                  >
                    <div>
                      <span className="badge-mint" style={{ marginBottom: '6px' }}>
                        {exp.badge}
                      </span>
                      <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)', marginTop: '4px' }}>
                        {exp.role}
                      </h3>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: 'var(--accent-mint)',
                          fontSize: '14px',
                          fontWeight: 600,
                          marginTop: '2px'
                        }}
                      >
                        <Building2 size={15} />
                        <span>{exp.organization}</span>
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        color: 'var(--text-muted)'
                      }}
                    >
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                    {exp.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle2
                          size={16}
                          color="var(--accent-mint)"
                          style={{ flexShrink: 0, marginTop: '3px' }}
                        />
                        <span style={{ fontSize: '13.5px', color: 'var(--text-main)', lineHeight: 1.6 }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {exp.skills.map((s) => (
                      <span key={s} className="badge-dim">
                        #{s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { GraduationCap, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { personalInfo, certifications } from '../data/portfolioData';

export default function EducationCertifications() {
  return (
    <section id="education" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header: Shivam Kumar Editorial Styling */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag">
            <span>06 // CREDENTIALS &amp; ACADEMICS</span>
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
            Education &amp; Professional <em>Credentials</em>.
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '16px', fontFamily: 'var(--font-sans)', lineHeight: 1.65 }}>
            Academic computer science grounding at VIT Bhopal supported by industry-certified professional credentials.
          </p>
        </div>

        {/* Top 2 Columns: Degree + LeetCode Knight */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}
        >
          {/* Degree Card */}
          <div className="glass-panel" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div
                style={{
                  padding: '12px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  color: 'var(--accent-mint)'
                }}
              >
                <GraduationCap size={24} />
              </div>
              <div>
                <span className="badge-mint" style={{ marginBottom: '4px' }}>
                  {personalInfo.education.period}
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>
                  {personalInfo.education.degree}
                </h3>
                <div style={{ fontSize: '14px', color: 'var(--accent-mint)', fontWeight: 600 }}>
                  {personalInfo.education.institution}
                </div>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7 }}>
              {personalInfo.education.details}
            </p>
          </div>

          {/* LeetCode Knight Recognition */}
          <div className="glass-panel" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div
                style={{
                  padding: '12px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  color: 'var(--accent-mint)'
                }}
              >
                <Award size={24} />
              </div>
              <div>
                <span className="badge-mint" style={{ marginBottom: '4px' }}>
                  Knight Badge
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>
                  {personalInfo.competitiveProgramming.title}
                </h3>
                <div style={{ fontSize: '14px', color: 'var(--accent-mint)', fontWeight: 600 }}>
                  {personalInfo.competitiveProgramming.rating}
                </div>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7 }}>
              {personalInfo.competitiveProgramming.details} Over 300 problems solved demonstrating rapid problem
              decomposition, asymptotic runtime optimization, and rigorous edge-case testing.
            </p>
          </div>
        </div>

        {/* Professional Certifications Grid */}
        <h3
          style={{
            fontSize: '22px',
            fontWeight: 700,
            marginBottom: '24px',
            textAlign: 'center',
            color: 'var(--text-main)'
          }}
        >
          Verified Industry Certifications
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}
        >
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="glass-panel"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span className="badge-mint" style={{ fontSize: '10px' }}>
                    {cert.issuer}
                  </span>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                    {cert.category}
                  </span>
                </div>

                <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                  {cert.name}
                </h4>

                <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px' }}>
                  {cert.description}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--accent-mint)',
                  fontSize: '11.5px',
                  fontFamily: 'var(--font-mono)',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '12px'
                }}
              >
                <CheckCircle2 size={13} />
                <span>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

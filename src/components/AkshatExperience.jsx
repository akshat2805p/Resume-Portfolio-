import React, { useState } from 'react';
import { experiences, certifications, personalInfo } from '../data/portfolioData';
import { LeetcodeIcon, CodeforcesIcon } from './Icons';
import { getSkillLogo, PythonLogo, KiCadLogo, LinuxLogo, CppLogo } from './TechLogos';

export default function AkshatExperience({ onOpenThesis }) {
  const [activeTab, setActiveTab] = useState('experience'); // 'experience' | 'certifications' | 'education'

  return (
    <section id="experience" className="section-wrap scroll-reveal" style={{ padding: '80px 24px', maxWidth: '1140px', margin: '0 auto' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--muted)', marginBottom: '8px', fontWeight: 600 }}>
          Trajectory &bull; Milestones &bull; Credentials
        </p>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 400, color: 'var(--fg)', margin: '0 0 14px 0', letterSpacing: '-0.01em' }}>
          Experience &amp; Education
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--subfg)', maxWidth: '640px', margin: '0 auto 28px auto', lineHeight: 1.6, fontWeight: 400 }}>
          Engineering fellowships, academic achievements, verified certifications, and competitive programming credentials.
        </p>

        {/* Tab Switcher */}
        <div
          className="exp-tab-switcher"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'var(--chip)',
            border: '1.5px solid var(--line)',
            borderRadius: '999px',
            padding: '4px',
            gap: '4px',
            maxWidth: '100%',
            overflowX: 'auto',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)'
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('experience')}
            style={{
              padding: '7px 22px',
              borderRadius: '999px',
              border: 'none',
              background: activeTab === 'experience' ? 'var(--fg)' : 'transparent',
              color: activeTab === 'experience' ? 'var(--bg)' : 'var(--muted)',
              fontSize: '12.5px',
              fontFamily: 'var(--mono)',
              fontWeight: activeTab === 'experience' ? 700 : 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Fellowship &amp; Roles
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('certifications')}
            style={{
              padding: '7px 22px',
              borderRadius: '999px',
              border: 'none',
              background: activeTab === 'certifications' ? 'var(--fg)' : 'transparent',
              color: activeTab === 'certifications' ? 'var(--bg)' : 'var(--muted)',
              fontSize: '12.5px',
              fontFamily: 'var(--mono)',
              fontWeight: activeTab === 'certifications' ? 700 : 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Certifications ({certifications.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('education')}
            style={{
              padding: '7px 22px',
              borderRadius: '999px',
              border: 'none',
              background: activeTab === 'education' ? 'var(--fg)' : 'transparent',
              color: activeTab === 'education' ? 'var(--bg)' : 'var(--muted)',
              fontSize: '12.5px',
              fontFamily: 'var(--mono)',
              fontWeight: activeTab === 'education' ? 700 : 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Education &amp; LeetCode
          </button>
        </div>
      </div>

      {/* Tab 1: Fellowship & Engineering Roles */}
      {activeTab === 'experience' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Card 1: IIT Bombay Fellowship */}
          <div
            className="exp-designed-card"
            style={{
              background: 'var(--card-bg)',
              border: '1.5px solid var(--card-bd)',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 36px)',
              position: 'relative',
              boxShadow: 'var(--card-sh)',
              overflow: 'hidden',
              transition: 'transform 0.25s ease, border-color 0.25s ease'
            }}
          >
            {/* Top metallic accent line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, var(--fg), var(--line), transparent)'
              }}
            />

            {/* Header: Role, Organization & Tenure */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '20px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      background: 'var(--fg)',
                      color: 'var(--bg)',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      fontWeight: 700
                    }}
                  >
                    ★ IIT BOMBAY SUMMER FELLOWSHIP
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '11px',
                      color: 'var(--muted)',
                      background: 'var(--chip)',
                      border: '1px solid var(--line)',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      fontWeight: 600
                    }}
                  >
                    May 2026 – July 2026
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 400, color: 'var(--fg)', margin: '0 0 6px 0' }}>
                  Summer Fellow
                </h3>
                <h4 style={{ fontSize: '15.5px', color: 'var(--subfg)', margin: 0, fontWeight: 500 }}>
                  FOSSEE, IIT Bombay &bull; eSim Open-Source EDA Architecture
                </h4>
              </div>

              {/* Action: Open Fellowship Thesis */}
              <button
                type="button"
                onClick={onOpenThesis}
                className="exp-thesis-btn"
                style={{
                  background: 'var(--fg)',
                  color: 'var(--bg)',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '999px',
                  fontSize: '12.5px',
                  fontFamily: 'var(--mono)',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                  transition: 'transform 0.2s ease, opacity 0.2s ease'
                }}
              >
                <span>Read Fellowship Report &amp; Thesis</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Narrative Summary */}
            <p style={{ fontSize: '15px', color: 'var(--fg)', lineHeight: 1.65, margin: '0 0 24px 0', maxWidth: '880px', fontWeight: 400 }}>
              Spearheaded the engineering of modular automation plugins for the eSim open-source EDA suite, integrating KiCad and Ngspice with intelligent analysis pipelines across all active KiCad versions.
            </p>

            {/* Key Contributions Breakdown Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '14px', marginBottom: '24px' }}>
              <div
                style={{
                  background: 'var(--chip)',
                  border: '1.5px solid var(--line)',
                  borderRadius: '12px',
                  padding: '16px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--fg)' }} />
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700 }}>
                    Plugin Architecture
                  </span>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--subfg)', lineHeight: 1.5, margin: 0 }}>
                  Architected six native Python/wxPython plugins enabling automated PCB health grading (A–F), schematic design-rule checks, and netlist simulation audits.
                </p>
              </div>

              <div
                style={{
                  background: 'var(--chip)',
                  border: '1.5px solid var(--line)',
                  borderRadius: '12px',
                  padding: '16px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--fg)' }} />
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700 }}>
                    API Abstraction
                  </span>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--subfg)', lineHeight: 1.5, margin: 0 }}>
                  Engineered an API abstraction layer resolving breaking API shifts between KiCad 6 through 10 with automatic fallback routing.
                </p>
              </div>

              <div
                style={{
                  background: 'var(--chip)',
                  border: '1.5px solid var(--line)',
                  borderRadius: '12px',
                  padding: '16px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--fg)' }} />
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700 }}>
                    Intelligent Diagnostics
                  </span>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--subfg)', lineHeight: 1.5, margin: 0 }}>
                  Developed a 3-stage AI reporting pipeline translating physical layout metrics into actionable design advice with NetworkX dependency graphs.
                </p>
              </div>
            </div>

            {/* Tech Badges with Official Logos */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', marginRight: '4px' }}>
                Toolchain:
              </span>
              {['Python', 'KiCad EDA', 'wxPython', 'Ngspice', 'NetworkX'].map((s) => (
                <div
                  key={s}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 12px',
                    borderRadius: '999px',
                    background: 'var(--tag-bg)',
                    border: '1.5px solid var(--tag-bd)',
                    color: 'var(--tag-fg)',
                    fontFamily: 'var(--mono)',
                    fontSize: '11.5px',
                    fontWeight: 600
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center' }}>{getSkillLogo(s, 15)}</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Community Leadership & Technical Mentorship */}
          <div
            className="exp-designed-card"
            style={{
              background: 'var(--card-bg)',
              border: '1.5px solid var(--card-bd)',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 36px)',
              position: 'relative',
              boxShadow: 'var(--card-sh)',
              overflow: 'hidden',
              transition: 'transform 0.25s ease, border-color 0.25s ease'
            }}
          >
            {/* Top metallic accent line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, var(--line), var(--fg), transparent)'
              }}
            />

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      background: 'var(--chip)',
                      border: '1px solid var(--line)',
                      color: 'var(--fg)',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      fontWeight: 700
                    }}
                  >
                    COMMUNITY &bull; MENTORSHIP
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '11px',
                      color: 'var(--muted)',
                      background: 'var(--chip)',
                      border: '1px solid var(--line)',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      fontWeight: 600
                    }}
                  >
                    2024 – Present
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 400, color: 'var(--fg)', margin: '0 0 6px 0' }}>
                  Co-Lead &amp; Technical Mentor
                </h3>
                <h4 style={{ fontSize: '15.5px', color: 'var(--subfg)', margin: 0, fontWeight: 500 }}>
                  Android Club &bull; VIT Bhopal University (200+ Student Community)
                </h4>
              </div>
            </div>

            <p style={{ fontSize: '15px', color: 'var(--fg)', lineHeight: 1.65, margin: '0 0 20px 0', maxWidth: '880px', fontWeight: 400 }}>
              Leading hands-on technical workshops, competitive hackathons, and open-source bootcamps for a community of 200+ aspiring software engineers.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '14px', marginBottom: '22px' }}>
              <div
                style={{
                  background: 'var(--chip)',
                  border: '1.5px solid var(--line)',
                  borderRadius: '12px',
                  padding: '16px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--fg)' }} />
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700 }}>
                    Technical Workshops
                  </span>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--subfg)', lineHeight: 1.5, margin: 0 }}>
                  Organized live technical deep-dives into modern systems architecture, asynchronous API integration, and full-stack patterns.
                </p>
              </div>

              <div
                style={{
                  background: 'var(--chip)',
                  border: '1.5px solid var(--line)',
                  borderRadius: '12px',
                  padding: '16px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--fg)' }} />
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700 }}>
                    Hackathon Mentorship
                  </span>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--subfg)', lineHeight: 1.5, margin: 0 }}>
                  Mentored student teams competing in national engineering hackathons and guided novice contributors into open-source repositories.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', marginRight: '4px' }}>
                Competencies:
              </span>
              {['System Design Mentorship', 'Community Leadership', 'Android / Web', 'Open Source'].map((s) => (
                <div
                  key={s}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 12px',
                    borderRadius: '999px',
                    background: 'var(--tag-bg)',
                    border: '1.5px solid var(--tag-bd)',
                    color: 'var(--tag-fg)',
                    fontFamily: 'var(--mono)',
                    fontSize: '11.5px',
                    fontWeight: 600
                  }}
                >
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Verified Professional Certifications */}
      {activeTab === 'certifications' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '22px' }}>
          {certifications.map((c, i) => (
            <div
              key={i}
              className="cert-designed-card"
              style={{
                background: 'var(--card-bg)',
                border: '1.5px solid var(--card-bd)',
                borderRadius: '16px',
                padding: '26px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--card-sh)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div>
                {/* Issuer Badge & Verified Date */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      background: 'var(--fg)',
                      color: 'var(--bg)',
                      padding: '3px 10px',
                      borderRadius: '6px',
                      fontWeight: 700
                    }}
                  >
                    {c.issuer}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '11px',
                      color: 'var(--muted)',
                      background: 'var(--chip)',
                      border: '1px solid var(--line)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      fontWeight: 600
                    }}
                  >
                    {c.date}
                  </span>
                </div>

                <h4 style={{ fontFamily: 'var(--display)', fontSize: '1.45rem', fontWeight: 500, color: 'var(--fg)', margin: '0 0 10px 0', lineHeight: 1.2 }}>
                  {c.name}
                </h4>

                <p style={{ fontSize: '13.5px', color: 'var(--subfg)', lineHeight: 1.6, margin: 0 }}>
                  {c.description}
                </p>
              </div>

              {/* Bottom Category Tag */}
              <div
                style={{
                  marginTop: '20px',
                  paddingTop: '14px',
                  borderTop: '1px solid var(--line)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '6px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--fg)', display: 'inline-block' }} />
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--fg)', fontWeight: 600 }}>
                    {c.category}
                  </span>
                </div>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', color: 'var(--muted)', fontWeight: 600 }}>
                  VERIFIED
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Education & Competitive Programming */}
      {activeTab === 'education' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '26px' }}>
          {/* Card 1: B.Tech Undergraduate Degree */}
          <div
            className="edu-designed-card"
            style={{
              background: 'var(--card-bg)',
              border: '1.5px solid var(--card-bd)',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 32px)',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--card-sh)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Top metallic bar */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--fg), var(--line))' }} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '14px' }}>
              <span
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  background: 'var(--fg)',
                  color: 'var(--bg)',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  fontWeight: 700
                }}
              >
                B.TECH UNDERGRADUATE DEGREE
              </span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11.5px', color: 'var(--muted)', fontWeight: 600 }}>
                {personalInfo.education.period}
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.75rem', fontWeight: 500, color: 'var(--fg)', margin: '0 0 6px 0', lineHeight: 1.15 }}>
              {personalInfo.education.degree}
            </h3>
            <h4 style={{ fontSize: '15px', color: 'var(--subfg)', margin: '0 0 16px 0', fontWeight: 500 }}>
              {personalInfo.education.institution}
            </h4>

            <p style={{ fontSize: '14px', color: 'var(--fg)', lineHeight: 1.6, margin: '0 0 20px 0' }}>
              {personalInfo.education.details}
            </p>

            {/* Coursework Focus Grid */}
            <div style={{ marginTop: 'auto', background: 'var(--chip)', borderRadius: '12px', padding: '16px 18px', border: '1.5px solid var(--line)' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                Core Academic Coursework:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['Data Structures & Algorithms', 'Distributed Systems', 'Operating Systems', 'DBMS', 'Computer Networks', 'Software Engineering'].map((c) => (
                  <span
                    key={c}
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '11px',
                      padding: '4px 9px',
                      borderRadius: '6px',
                      background: 'var(--tag-bg)',
                      border: '1px solid var(--tag-bd)',
                      color: 'var(--tag-fg)',
                      fontWeight: 600
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: LeetCode Knight & Competitive Programming */}
          <div
            className="edu-designed-card"
            style={{
              background: 'var(--card-bg)',
              border: '1.5px solid var(--card-bd)',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 32px)',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--card-sh)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Top metallic bar */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #d97706, var(--fg))' }} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '11px',
                  color: '#d97706',
                  background: 'rgba(245, 158, 11, 0.14)',
                  border: '1.5px solid rgba(245, 158, 11, 0.3)',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontWeight: 700
                }}
              >
                <LeetcodeIcon size={13} />
                <span>LEETCODE KNIGHT</span>
              </span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11.5px', color: '#d97706', fontWeight: 700 }}>
                Top 3.81% Globally
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.75rem', fontWeight: 500, color: 'var(--fg)', margin: '0 0 6px 0', lineHeight: 1.15 }}>
              Rating 1,923 &bull; Knight
            </h3>
            <h4 style={{ fontSize: '15px', color: 'var(--subfg)', margin: '0 0 16px 0', fontWeight: 500 }}>
              Algorithmic Problem Solving &bull; 300+ Problems Solved
            </h4>

            {/* Metrics Counter Dashboard */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
              <div style={{ background: 'var(--chip)', border: '1.5px solid var(--line)', borderRadius: '10px', padding: '12px 10px', textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '18px', fontWeight: 700, color: '#d97706', display: 'block' }}>1,923</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase' }}>Contest Rating</span>
              </div>
              <div style={{ background: 'var(--chip)', border: '1.5px solid var(--line)', borderRadius: '10px', padding: '12px 10px', textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '18px', fontWeight: 700, color: 'var(--fg)', display: 'block' }}>300+</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase' }}>Solved</span>
              </div>
              <div style={{ background: 'var(--chip)', border: '1.5px solid var(--line)', borderRadius: '10px', padding: '12px 10px', textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '18px', fontWeight: 700, color: 'var(--fg)', display: 'block' }}>50+</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase' }}>Hard Solved</span>
              </div>
            </div>

            <p style={{ fontSize: '14px', color: 'var(--subfg)', lineHeight: 1.6, margin: '0 0 20px 0' }}>
              {personalInfo.competitiveProgramming.details} Active contestant across weekly algorithmic competitions with extensive implementations in dynamic programming, graph theory, and advanced trees.
            </p>

            {/* Interactive Profile Buttons */}
            <div style={{ marginTop: 'auto', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a
                href="https://leetcode.com/u/akshatpandey28/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '7px',
                  padding: '10px 16px',
                  borderRadius: '10px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1.5px solid rgba(245, 158, 11, 0.35)',
                  color: '#d97706',
                  fontSize: '12.5px',
                  fontFamily: 'var(--mono)',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <LeetcodeIcon size={15} />
                <span>LeetCode Knight Profile</span>
              </a>

              <a
                href="https://codeforces.com/profile/akshat_2805p"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '7px',
                  padding: '10px 16px',
                  borderRadius: '10px',
                  background: 'var(--chip)',
                  border: '1.5px solid var(--line)',
                  color: 'var(--fg)',
                  fontSize: '12.5px',
                  fontFamily: 'var(--mono)',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <CodeforcesIcon size={15} />
                <span>Codeforces Profile</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

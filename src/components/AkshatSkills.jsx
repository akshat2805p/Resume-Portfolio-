import React, { useState } from 'react';
import LogoLoop from './reactbits/LogoLoop';
import { skillCategories, personalInfo } from '../data/portfolioData';
import { getSkillLogo } from './TechLogos';

function SkillPill({ name, icon }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '7px 18px',
        borderRadius: '999px',
        background: 'var(--chip)',
        border: '1.5px solid var(--line)',
        color: 'var(--fg)',
        fontFamily: 'var(--mono)',
        fontSize: '12.5px',
        fontWeight: 600,
        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        transition: 'border-color 0.2s ease, transform 0.2s ease'
      }}
    >
      <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>
      <span>{name}</span>
    </div>
  );
}

// Track 1: Languages, Systems & Runtimes with authentic official logos
const TRACK_ONE_SKILLS = [
  'Python 3.12',
  'C++20 / STL',
  'Go (Golang)',
  'FastAPI',
  'React 19',
  'Next.js',
  'TypeScript',
  'KiCad EDA',
  'wxPython (EDA)',
  'Ngspice Simulation'
].map(name => ({
  node: <SkillPill name={name} icon={getSkillLogo(name, 17)} />,
  title: name
}));

// Track 2: Distributed Systems, ML & Cloud Infrastructure with authentic official logos
const TRACK_TWO_SKILLS = [
  'PyTorch',
  'scikit-learn',
  'Docker',
  'PostgreSQL 16',
  'Redis',
  'Linux / Bash',
  'Git & GitHub',
  'Kubernetes',
  'Tailwind CSS',
  'gRPC / Protobuf',
  'Prometheus & Grafana'
].map(name => ({
  node: <SkillPill name={name} icon={getSkillLogo(name, 17)} />,
  title: name
}));

export default function AkshatSkills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="skills" className="section-wrap" style={{ padding: '60px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--muted)', marginBottom: '8px' }}>
          Technical Competencies &bull; Toolchain
        </p>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 400, color: 'var(--fg)', margin: '0 0 12px 0', letterSpacing: '-0.01em' }}>
          Skills &amp; Engineering Stack
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--subfg)', maxWidth: '640px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
          Full-stack systems development, asynchronous microservices, data persistence, and low-latency algorithmic problem-solving.
        </p>
      </div>

      {/* Infinite LogoLoop Showcase (Dual Responsive Tracks with Hover-Pause and Drag) */}
      <div
        className="skills-logoloop-showcase"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginBottom: '36px',
          padding: '10px 0',
          position: 'relative'
        }}
        aria-label="Interactive skills infinite loop"
      >
        {/* Track 1: Moving Left */}
        <LogoLoop
          logos={TRACK_ONE_SKILLS}
          direction="left"
          speed={45}
          logoHeight={32}
          gap={16}
          pauseOnHover={true}
          draggable={true}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutWidth={0.12}
          ariaLabel="Primary Programming Languages and Frameworks"
        />

        {/* Track 2: Moving Right */}
        <LogoLoop
          logos={TRACK_TWO_SKILLS}
          direction="right"
          speed={40}
          logoHeight={32}
          gap={16}
          pauseOnHover={true}
          draggable={true}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutWidth={0.12}
          ariaLabel="Distributed Systems and AI Infrastructure"
        />

        <div style={{ textAlign: 'center', marginTop: '4px' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.04em' }}>
            &bull; Drag to glide &bull; Hover to freeze &bull; Verified in production repositories
          </span>
        </div>
      </div>

      {/* Category Tabs */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '20px' }}>
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => setSelectedCategory(idx)}
              style={{
                padding: '7px 16px',
                borderRadius: '999px',
                border: selectedCategory === idx ? '1px solid var(--fg)' : '1px solid var(--line)',
                background: selectedCategory === idx ? 'var(--fg)' : 'var(--chip)',
                color: selectedCategory === idx ? 'var(--bg)' : 'var(--muted)',
                fontSize: '12px',
                fontFamily: 'var(--mono)',
                fontWeight: selectedCategory === idx ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.18s ease'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Category Skill Badges (Official SVG Logo & Name Pills ONLY - No descriptive boxes, per user instructions) */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          maxWidth: '860px',
          margin: '0 auto 36px auto'
        }}
      >
        {skillCategories[selectedCategory].skills.map((skill) => (
          <div
            key={skill.name}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 18px',
              borderRadius: '999px',
              background: 'var(--chip)',
              border: '1.5px solid var(--line)',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center' }}>
              {getSkillLogo(skill.name, 18)}
            </span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 700, color: 'var(--fg)' }}>
              {skill.name}
            </span>
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '10.5px',
                color: 'var(--muted)',
                background: 'var(--line)',
                padding: '2px 8px',
                borderRadius: '4px',
                fontWeight: 700
              }}
            >
              {skill.level}
            </span>
          </div>
        ))}
      </div>

      {/* Spoken Languages & Global Communication Banner */}
      <div
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-bd)',
          borderRadius: '16px',
          padding: '18px 24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '14px',
          boxShadow: 'var(--card-sh)'
        }}
      >
        <div>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg)', fontWeight: 600 }}>
            Spoken Languages
          </span>
          <p style={{ margin: '3px 0 0 0', fontSize: '13.5px', color: 'var(--subfg)' }}>
            International collaboration and engineering communication
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {personalInfo.spokenLanguages.map((lang) => (
            <div
              key={lang.language}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'var(--tag-bg)',
                border: '1px solid var(--tag-bd)',
                padding: '5px 12px',
                borderRadius: '8px'
              }}
            >
              <span style={{ fontSize: '12.5px', fontWeight: 500, color: 'var(--tag-fg)' }}>{lang.language}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', color: 'var(--muted)' }}>({lang.level})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

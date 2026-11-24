import React, { useState } from 'react';
import { Code, Layers, Database, Cpu, BookOpen, Check } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function SkillsGrid() {
  const [activeTab, setActiveTab] = useState(0);

  const getIcon = (name) => {
    switch (name) {
      case 'Programming Languages': return <Code size={18} />;
      case 'Frameworks & Runtimes': return <Layers size={18} />;
      case 'Databases & Storage': return <Database size={18} />;
      case 'DevOps & Cloud Infrastructure': return <Cpu size={18} />;
      default: return <BookOpen size={18} />;
    }
  };

  return (
    <section id="skills" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header: Shivam Kumar Editorial Styling */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag">
            <span>05 // TECHNICAL CAPABILITIES</span>
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
            Skills &amp; Engineering <em>Stack</em>.
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '16px', fontFamily: 'var(--font-sans)', lineHeight: 1.65 }}>
            Full-stack capabilities spanning systems programming, applied machine learning, and cloud infrastructure.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '40px'
          }}
        >
          {skillCategories.map((cat, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveTab(idx)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '10px',
                  backgroundColor: isActive ? 'var(--accent-mint)' : 'var(--bg-card)',
                  color: isActive ? '#090a0f' : 'var(--text-muted)',
                  border: isActive ? '1px solid var(--accent-mint)' : '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  fontWeight: 600,
                  transition: 'all 0.2s ease'
                }}
              >
                {getIcon(cat.name)}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Panel */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: '40px'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '28px',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  padding: '8px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  color: 'var(--accent-mint)'
                }}
              >
                {getIcon(skillCategories[activeTab].name)}
              </div>
              <h3 style={{ fontSize: '20px', color: 'var(--text-main)', fontWeight: 700 }}>
                {skillCategories[activeTab].name}
              </h3>
            </div>
            <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
              {skillCategories[activeTab].skills.length} Capabilities
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px'
            }}
          >
            {skillCategories[activeTab].skills.map((skill) => (
              <div
                key={skill.name}
                style={{
                  padding: '18px 20px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)';
                  e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.04)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-main)' }}>
                    {skill.name}
                  </span>
                  <span className="badge-mint" style={{ fontSize: '10px' }}>
                    {skill.level}
                  </span>
                </div>
                <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

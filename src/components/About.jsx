import React from 'react';
import { MapPin, GraduationCap, Globe, Mail, Code2, Server, Brain } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header: Shivam Kumar Editorial Styling */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag">
            <span>01 // PERSPECTIVE &amp; PHILOSOPHY</span>
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
            Architecting Resilient <em>Software</em>.
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '16px', fontFamily: 'var(--font-sans)', lineHeight: 1.65 }}>
            A rigorous computer science foundation coupled with real-world open-source EDA engineering at IIT Bombay.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'stretch'
          }}
        >
          {/* Main Narrative Card */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '22px', marginBottom: '20px', color: 'var(--text-main)' }}>
              Engineering Philosophy
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '20px' }}>
              I am a Computer Science undergraduate at <strong style={{ color: 'var(--text-main)' }}>VIT Bhopal (2023–2027)</strong> and
              a Summer Fellow at <strong style={{ color: 'var(--text-main)' }}>IIT Bombay’s FOSSEE</strong> project. My engineering work is grounded
              in distributed systems principles, production anomaly detection, and developer toolkits that eliminate repetitive human error.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
              Whether developing version-agnostic Python/wxPython plugins for KiCad, benchmarking unsupervised
              Isolation Forests across 10,000+ telemetry vectors, or implementing consistent hashing rings in Go,
              I prioritize measurable throughput, deterministic outcomes, and clear maintainability over hype.
            </p>

            {/* Core Pillars */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '28px' }}>
              <div
                style={{
                  padding: '14px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <Brain size={18} color="var(--accent-mint)" style={{ marginBottom: '8px' }} />
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)' }}>Applied AI &amp; ML</div>
                <div style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '2px' }}>
                  Isolation Forest, Vision, LLM APIs
                </div>
              </div>

              <div
                style={{
                  padding: '14px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <Server size={18} color="var(--accent-mint)" style={{ marginBottom: '8px' }} />
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)' }}>Distributed Systems</div>
                <div style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '2px' }}>
                  Go, gRPC, SWIM Gossip, WAL
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts & Metadata Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Education Info */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    color: 'var(--accent-mint)'
                  }}
                >
                  <GraduationCap size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--accent-mint)', textTransform: 'uppercase' }}>
                    Education (2023 – 2027)
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>
                    B.Tech. in Computer Science &amp; Engineering
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>
                    Vellore Institute of Technology, Bhopal
                  </div>
                </div>
              </div>
            </div>

            {/* Competitive Programming */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    color: 'var(--accent-mint)'
                  }}
                >
                  <Code2 size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--accent-mint)', textTransform: 'uppercase' }}>
                    Algorithmic Mastery
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>
                    LeetCode Knight · 1,923 Rating
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>
                    Top 3.81% globally · 300+ problems solved across DP, Graphs, and Trees
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Languages */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    color: 'var(--accent-mint)'
                  }}
                >
                  <Globe size={22} />
                </div>
                <div style={{ width: '100%' }}>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--accent-mint)', textTransform: 'uppercase' }}>
                    Location &amp; Polyglot Communication
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>
                    {personalInfo.location}
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                    {personalInfo.spokenLanguages.map((l) => (
                      <span key={l.language} className="badge-dim">
                        {l.language} ({l.level})
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Email Pill */}
            <div className="glass-panel" style={{ padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={16} color="var(--accent-mint)" />
                  <span style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    {personalInfo.email}
                  </span>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-mint)',
                    fontWeight: 600
                  }}
                >
                  Send Mail &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

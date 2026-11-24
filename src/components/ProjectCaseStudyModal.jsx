import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, BarChart3, AlertCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: 'rgba(9, 10, 15, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: 'var(--bg-surface)',
          padding: '36px',
          position: 'relative',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(16, 185, 129, 0.2)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close case study modal"
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            padding: '8px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            color: 'var(--text-muted)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--text-main)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-muted)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '28px', paddingRight: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge-mint">{project.category}</span>
            <span className="badge-dim">{project.affiliation}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 34px)', color: 'var(--text-main)', marginBottom: '8px' }}>
            {project.title}
          </h2>
          <p style={{ color: 'var(--accent-mint)', fontSize: '15px', fontWeight: 500 }}>
            {project.tagline}
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 18px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--text-main)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-mint)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
            >
              <GithubIcon size={15} />
              <span>GitHub Repository</span>
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 18px',
                borderRadius: '8px',
                backgroundColor: 'var(--accent-mint)',
                fontSize: '13px',
                fontWeight: 600,
                color: '#090a0f',
                transition: 'all 0.2s ease'
              }}
            >
              <ExternalLink size={15} />
              <span>Live Demonstration</span>
            </a>
          )}
        </div>

        {/* Verified Metrics Banner */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '12px',
            padding: '20px',
            borderRadius: '12px',
            backgroundColor: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            marginBottom: '32px'
          }}
        >
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                {m.label}
              </div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--accent-mint)', marginTop: '2px' }}>
                {m.value}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-dim)', marginTop: '2px' }}>
                {m.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Problem */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <AlertCircle size={18} color="var(--accent-mint)" />
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)' }}>
                The Engineering Problem
              </h4>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', lineHeight: 1.7 }}>
              {project.caseStudy.problem}
            </p>
          </div>

          {/* Approach */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Cpu size={18} color="var(--accent-mint)" />
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)' }}>
                Technical Approach &amp; Trade-offs
              </h4>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', lineHeight: 1.7 }}>
              {project.caseStudy.approach}
            </p>
          </div>

          {/* Architecture Details */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Layers size={18} color="var(--accent-mint)" />
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)' }}>
                System Architecture &amp; Subsystems
              </h4>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.caseStudy.architecture.map((arch, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '14px 16px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '13.5px',
                    color: 'var(--text-main)',
                    lineHeight: 1.6
                  }}
                >
                  <span style={{ color: 'var(--accent-mint)', fontWeight: 600, marginRight: '6px' }}>
                    [0{idx + 1}]
                  </span>
                  {arch}
                </div>
              ))}
            </div>
          </div>

          {/* Verified Outcomes */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <BarChart3 size={18} color="var(--accent-mint)" />
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)' }}>
                Verified Performance &amp; Benchmarks
              </h4>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {project.caseStudy.verifiedOutcomes.map((outcome, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={16} color="var(--accent-mint)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '20px' }}>
            <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '10px' }}>
              TECHNOLOGY MATRIX
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tech.map((t) => (
                <span key={t} className="badge-dim">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, ExternalLink, Award, GraduationCap, Briefcase, Code } from 'lucide-react';
import { personalInfo, experiences, certifications, skillCategories } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 250,
        backgroundColor: 'rgba(9, 10, 15, 0.9)',
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
          maxWidth: '880px',
          maxHeight: '92vh',
          overflowY: 'auto',
          backgroundColor: '#ffffff',
          color: '#0f172a',
          padding: '40px',
          position: 'relative',
          borderRadius: '16px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Top Bar (Hidden when printing) */}
        <div
          className="no-print"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #e2e8f0',
            paddingBottom: '16px',
            marginBottom: '28px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: 700,
                color: '#059669',
                backgroundColor: '#ecfdf5',
                padding: '4px 10px',
                borderRadius: '6px'
              }}
            >
              Curriculum Vitae Preview
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={handlePrint}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                backgroundColor: '#059669',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: 600,
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              <Printer size={15} />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close résumé modal"
              style={{
                padding: '8px',
                borderRadius: '50%',
                backgroundColor: '#f1f5f9',
                color: '#475569',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="resume-printable-area" style={{ fontFamily: 'var(--font-sans)', color: '#1e293b' }}>
          {/* Header */}
          <div style={{ borderBottom: '2px solid #0f172a', paddingBottom: '20px', marginBottom: '24px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.03em', marginBottom: '6px' }}>
              {personalInfo.name}
            </h1>
            <div style={{ fontSize: '15px', fontWeight: 600, color: '#059669', marginBottom: '10px' }}>
              Software Engineer &amp; Systems Builder · FOSSEE Fellow, IIT Bombay
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                fontSize: '12.5px',
                fontFamily: 'var(--font-mono)',
                color: '#475569'
              }}
            >
              <span>Email: <strong style={{ color: '#0f172a' }}>{personalInfo.email}</strong></span>
              <span>&bull;</span>
              <span>Location: <strong style={{ color: '#0f172a' }}>{personalInfo.location}</strong></span>
              <span>&bull;</span>
              <span>GitHub: <strong style={{ color: '#0f172a' }}>github.com/akshat2805p</strong></span>
              <span>&bull;</span>
              <span>LinkedIn: <strong style={{ color: '#0f172a' }}>linkedin.com/in/akshatpandey28</strong></span>
            </div>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '24px' }}>
            <h3
              style={{
                fontSize: '14px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#059669',
                borderBottom: '1px solid #cbd5e1',
                paddingBottom: '4px',
                marginBottom: '10px'
              }}
            >
              Education
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <strong style={{ fontSize: '15px', color: '#0f172a' }}>{personalInfo.education.institution}</strong>
                <div style={{ fontSize: '13.5px', color: '#334155' }}>{personalInfo.education.degree}</div>
              </div>
              <div style={{ fontSize: '12.5px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                {personalInfo.education.period}
              </div>
            </div>
            <div style={{ fontSize: '12.5px', color: '#64748b', marginTop: '4px' }}>
              {personalInfo.education.details}
            </div>
          </div>

          {/* Competitive Programming Achievement */}
          <div style={{ marginBottom: '24px' }}>
            <h3
              style={{
                fontSize: '14px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#059669',
                borderBottom: '1px solid #cbd5e1',
                paddingBottom: '4px',
                marginBottom: '10px'
              }}
            >
              Competitive Programming &amp; Algorithms
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <strong style={{ fontSize: '15px', color: '#0f172a' }}>LeetCode Knight</strong>
                <span style={{ marginLeft: '8px', fontSize: '13px', color: '#059669', fontWeight: 600 }}>
                  Rating: 1,923 (Top 3.81% globally)
                </span>
              </div>
              <div style={{ fontSize: '12.5px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                300+ Problems Solved
              </div>
            </div>
            <div style={{ fontSize: '12.5px', color: '#64748b', marginTop: '4px' }}>
              Solved 50+ Hard-rated problems across graph algorithms, dynamic programming, and binary trees.
            </div>
          </div>

          {/* Professional Experience */}
          <div style={{ marginBottom: '24px' }}>
            <h3
              style={{
                fontSize: '14px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#059669',
                borderBottom: '1px solid #cbd5e1',
                paddingBottom: '4px',
                marginBottom: '12px'
              }}
            >
              Experience
            </h3>

            {experiences.map((exp) => (
              <div key={exp.role + exp.organization} style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div>
                    <strong style={{ fontSize: '14.5px', color: '#0f172a' }}>{exp.role}</strong> —{' '}
                    <span style={{ fontSize: '14px', color: '#334155', fontWeight: 600 }}>{exp.organization}</span>
                  </div>
                  <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                    {exp.period}
                  </div>
                </div>

                <ul style={{ paddingLeft: '18px', marginTop: '6px', fontSize: '13px', color: '#334155', lineHeight: 1.6 }}>
                  {exp.highlights.map((h, i) => (
                    <li key={i} style={{ marginBottom: '4px' }}>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Featured Projects */}
          <div style={{ marginBottom: '24px' }}>
            <h3
              style={{
                fontSize: '14px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#059669',
                borderBottom: '1px solid #cbd5e1',
                paddingBottom: '4px',
                marginBottom: '12px'
              }}
            >
              Selected Engineering Projects
            </h3>

            {/* KiCad Analyzer */}
            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong style={{ fontSize: '14px', color: '#0f172a' }}>
                  eSim KiCad Health Analyzer &amp; AI Copilot
                </strong>
                <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                  Python, wxPython, KiCad API, Ngspice
                </span>
              </div>
              <p style={{ fontSize: '12.5px', color: '#334155', marginTop: '3px' }}>
                Engineered 6 native Python/wxPython plugins for KiCad 6–10 performing automated PCB health grading (A–F),
                design-rule checking, and simulation netlist validation with a 3-stage AI reporting pipeline (&lt;2.5s scan time on 10k+ elements).
              </p>
            </div>

            {/* AIOps Sentinel */}
            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong style={{ fontSize: '14px', color: '#0f172a' }}>
                  AIOps Sentinel — Server Telemetry Anomaly Detection
                </strong>
                <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                  Python 3.12, C++20, FastAPI, Isolation Forest, PostgreSQL
                </span>
              </div>
              <p style={{ fontSize: '12.5px', color: '#334155', marginTop: '3px' }}>
                Multivariate server telemetry platform using an Isolation Forest trained from scratch on 54 temporal features;
                achieved 83.96% precision and 0.6854 F1 score on 10,368 samples with 6× false positive rate reduction.
              </p>
            </div>

            {/* Mini-Dynamo */}
            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong style={{ fontSize: '14px', color: '#0f172a' }}>
                  Mini-Dynamo — 5-Node Distributed Key-Value Store
                </strong>
                <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                  Go 1.25, gRPC/mTLS, Proto3, Docker, Prometheus
                </span>
              </div>
              <p style={{ fontSize: '12.5px', color: '#334155', marginTop: '3px' }}>
                Architected a masterless key-value store in Go modeled after Amazon Dynamo with consistent hashing (320 virtual tokens),
                WAL disk durability, Lamport vector clocks, hinted handoff, and background Merkle anti-entropy sweeps.
              </p>
            </div>
          </div>

          {/* Technical Skills Matrix */}
          <div style={{ marginBottom: '24px' }}>
            <h3
              style={{
                fontSize: '14px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#059669',
                borderBottom: '1px solid #cbd5e1',
                paddingBottom: '4px',
                marginBottom: '10px'
              }}
            >
              Technical Skills &amp; Core Competencies
            </h3>
            <div style={{ fontSize: '12.5px', color: '#334155', lineHeight: 1.7 }}>
              <div>
                <strong>Languages:</strong> C++, Python, Go, JavaScript, TypeScript, HTML5/CSS3
              </div>
              <div>
                <strong>Frameworks &amp; Runtimes:</strong> React, Next.js, Node.js, Express, FastAPI, wxPython
              </div>
              <div>
                <strong>Databases &amp; Storage:</strong> PostgreSQL, MySQL, MongoDB, SQLite, Redis
              </div>
              <div>
                <strong>DevOps &amp; Tools:</strong> Docker, Kubernetes, Git/GitHub, GitHub Actions, Linux/Bash, Nginx
              </div>
              <div>
                <strong>Core CS:</strong> Data Structures &amp; Algorithms, OOP, Database Systems, Operating Systems, Computer Networks, System Design
              </div>
            </div>
          </div>

          {/* Certifications & Languages */}
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#059669',
                borderBottom: '1px solid #cbd5e1',
                paddingBottom: '4px',
                marginBottom: '10px'
              }}
            >
              Certifications &amp; Spoken Languages
            </h3>
            <div style={{ fontSize: '12.5px', color: '#334155', lineHeight: 1.7 }}>
              <div>
                <strong>Certificates:</strong> IBM AI Engineering Professional &bull; Google IT Support Professional &bull; NPTEL Introduction to Machine Learning &bull; NPTEL Marketing Analytics
              </div>
              <div>
                <strong>Spoken Languages:</strong> English (Fluent), Hindi (Native), Spanish (Intermediate)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

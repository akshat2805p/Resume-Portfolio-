import React, { useEffect } from 'react';
import { personalInfo, experiences, certifications, skillCategories } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';

export default function AkshatModals({
  thesisOpen,
  onCloseThesis,
  cvOpen,
  onCloseCV,
  selectedProject,
  onCloseProject
}) {
  // Close modals on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (thesisOpen) onCloseThesis();
        if (cvOpen) onCloseCV();
        if (selectedProject) onCloseProject();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [thesisOpen, cvOpen, selectedProject, onCloseThesis, onCloseCV, onCloseProject]);

  return (
    <>
      {/* 1. Fellowship Thesis Modal */}
      {thesisOpen && (
        <div
          className="modal-backdrop"
          onClick={onCloseThesis}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
        >
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--card-bd)',
              borderRadius: '16px',
              maxWidth: '780px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: 'clamp(20px, 4vw, 36px)',
              position: 'relative',
              boxShadow: 'var(--card-sh)'
            }}
          >
            <button
              type="button"
              onClick={onCloseThesis}
              aria-label="Close Thesis Modal"
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: 'var(--chip)',
                border: '1px solid var(--line)',
                color: 'var(--fg)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px'
              }}
            >
              &times;
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--accent)', background: 'rgba(16, 185, 129, 0.12)', padding: '3px 8px', borderRadius: '4px', fontWeight: 600 }}>
                FOSSEE &bull; IIT BOMBAY
              </span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)' }}>
                May &ndash; July 2026 &bull; Fellowship Report
              </span>
            </div>

            <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 500, color: 'var(--fg)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
              eSim KiCad EDA Automation &amp; Diagnostics
            </h2>

            <p style={{ fontSize: '15px', color: 'var(--subfg)', lineHeight: 1.65, marginBottom: '20px' }}>
              During the summer fellowship at FOSSEE, IIT Bombay, I spearheaded the design and implementation of automated health grading and simulation verification plugins for the eSim electronic design automation ecosystem.
            </p>

            <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', color: 'var(--fg)', margin: '24px 0 10px 0' }}>
              1. The Cross-Version Challenge
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--subfg)', lineHeight: 1.6 }}>
              KiCad evolved rapidly from version 6 through 10, bringing radical breaking changes to its internal C++ and Python SWIG bindings. Standard scripts developed for KiCad 6 crashed instantly on KiCad 8 or nightly builds due to altered method signatures in <code>pcbnew</code>.
            </p>

            <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', color: 'var(--fg)', margin: '24px 0 10px 0' }}>
              2. The Architectural Solution
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--subfg)', lineHeight: 1.6 }}>
              I developed a dynamic API abstraction layer that detects the host environment at runtime and dispatches calls to version-tailored adapters. Additionally, layout netlists are mapped into bipartite NetworkX graph structures, enabling sub-2.5 second DRC sweeps and automated thermal risk grading even on 10,000+ element boards.
            </p>

            <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', color: 'var(--fg)', margin: '24px 0 10px 0' }}>
              3. The AI Copilot Reporting Pipeline
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--subfg)', lineHeight: 1.6 }}>
              The output vectors are synthesized through a three-stage automated pipeline:
              <br />&bull; <strong>Extraction:</strong> Parsing geometric clearances and pin connectivity.
              <br />&bull; <strong>Topological Scoring:</strong> Network density and trace length analysis.
              <br />&bull; <strong>Natural Language Synthesis:</strong> Actionable engineering remediation cards with layout health grades (A through F).
            </p>

            <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={onCloseThesis}
                style={{
                  padding: '9px 22px',
                  borderRadius: '8px',
                  background: 'var(--accent)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '13.5px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Close Report
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Printable CV Modal */}
      {cvOpen && (
        <div
          className="modal-backdrop"
          onClick={onCloseCV}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
        >
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--card-bd)',
              borderRadius: '16px',
              maxWidth: '820px',
              width: '100%',
              maxHeight: '92vh',
              overflowY: 'auto',
              padding: 'clamp(20px, 4vw, 36px)',
              position: 'relative',
              boxShadow: 'var(--card-sh)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap', gap: '14px' }}>
              <div>
                <h1 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 600, color: 'var(--fg)', margin: 0 }}>
                  {personalInfo.name}
                </h1>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--accent)', margin: '4px 0 0 0' }}>
                  {personalInfo.title} &bull; {personalInfo.location}
                </p>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--muted)', margin: '2px 0 0 0' }}>
                  Email: {personalInfo.email} &bull; GitHub: akshat2805p &bull; LeetCode Knight: 1,923
                </p>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => window.print()}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '6px',
                    background: 'var(--chip)',
                    border: '1px solid var(--line)',
                    color: 'var(--fg)',
                    fontSize: '12px',
                    cursor: 'pointer',
                    fontFamily: 'var(--mono)'
                  }}
                >
                  Print / PDF
                </button>
                <button
                  type="button"
                  onClick={onCloseCV}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '6px',
                    background: 'var(--chip)',
                    border: '1px solid var(--line)',
                    color: 'var(--fg)',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}
                >
                  &times;
                </button>
              </div>
            </div>

            <hr style={{ borderColor: 'var(--line)', margin: '20px 0' }} />

            {/* Education */}
            <h3 style={{ fontFamily: 'var(--mono)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '8px' }}>
              Education
            </h3>
            <div style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                <strong style={{ fontSize: '15px', color: 'var(--fg)' }}>{personalInfo.education.institution}</strong>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--muted)' }}>{personalInfo.education.period}</span>
              </div>
              <div style={{ fontSize: '13.5px', color: 'var(--subfg)' }}>{personalInfo.education.degree}</div>
              <div style={{ fontSize: '12.5px', color: 'var(--muted)', marginTop: '4px' }}>{personalInfo.education.details}</div>
            </div>

            {/* Experience */}
            <h3 style={{ fontFamily: 'var(--mono)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '8px' }}>
              Engineering Experience
            </h3>
            {experiences.map((exp, i) => (
              <div key={i} style={{ marginBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                  <strong style={{ fontSize: '15px', color: 'var(--fg)' }}>{exp.role} &mdash; {exp.organization}</strong>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--muted)' }}>{exp.period}</span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--subfg)', margin: '4px 0 6px 0' }}>{exp.description}</p>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12.5px', color: 'var(--subfg)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {exp.highlights.map((h, hi) => <li key={hi}>{h}</li>)}
                </ul>
              </div>
            ))}

            {/* Competitive Programming */}
            <h3 style={{ fontFamily: 'var(--mono)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '8px' }}>
              Competitive Programming &amp; Honors
            </h3>
            <div style={{ marginBottom: '18px', fontSize: '13px', color: 'var(--subfg)' }}>
              <strong>LeetCode Knight:</strong> Rating {personalInfo.competitiveProgramming.rating} ({personalInfo.competitiveProgramming.solved}). {personalInfo.competitiveProgramming.details}
            </div>

            {/* Certifications */}
            <h3 style={{ fontFamily: 'var(--mono)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '8px' }}>
              Professional Certifications
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '10px', marginBottom: '20px' }}>
              {certifications.map((c, i) => (
                <div key={i} style={{ background: 'var(--tag-bg)', padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--tag-bd)' }}>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--fg)' }}>{c.name}</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>{c.issuer} &bull; {c.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. Project Case Study Modal */}
      {selectedProject && (
        <div
          className="modal-backdrop"
          onClick={onCloseProject}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
        >
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--card-bd)',
              borderRadius: '16px',
              maxWidth: '820px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: 'clamp(20px, 4vw, 36px)',
              position: 'relative',
              boxShadow: 'var(--card-sh)'
            }}
          >
            <button
              type="button"
              onClick={onCloseProject}
              aria-label="Close Case Study"
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: 'var(--chip)',
                border: '1px solid var(--line)',
                color: 'var(--fg)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px'
              }}
            >
              &times;
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--accent)', background: 'rgba(16, 185, 129, 0.12)', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>
                {selectedProject.category}
              </span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)' }}>
                {selectedProject.affiliation}
              </span>
            </div>

            <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 500, color: 'var(--fg)', margin: '0 0 8px 0', lineHeight: 1.2 }}>
              {selectedProject.title}
            </h2>

            <p style={{ fontFamily: 'var(--mono)', fontSize: '13.5px', color: 'var(--accent)', margin: '0 0 20px 0' }}>
              {selectedProject.tagline}
            </p>

            {/* Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '10px', background: 'var(--input-bg)', padding: '14px', borderRadius: '10px', border: '1px solid var(--line)', marginBottom: '24px' }}>
              {selectedProject.metrics.map((m, mi) => (
                <div key={mi} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--display)', fontSize: '18px', color: 'var(--fg)', fontWeight: 600 }}>{m.value}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)' }}>{m.label}</div>
                </div>
              ))}
            </div>

            {/* Problem */}
            <h4 style={{ fontFamily: 'var(--display)', fontSize: '1.35rem', color: 'var(--fg)', margin: '0 0 8px 0' }}>The Problem</h4>
            <p style={{ fontSize: '14px', color: 'var(--subfg)', lineHeight: 1.6, margin: '0 0 20px 0' }}>
              {selectedProject.caseStudy?.problem}
            </p>

            {/* Approach */}
            <h4 style={{ fontFamily: 'var(--display)', fontSize: '1.35rem', color: 'var(--fg)', margin: '0 0 8px 0' }}>Engineering Approach</h4>
            <p style={{ fontSize: '14px', color: 'var(--subfg)', lineHeight: 1.6, margin: '0 0 20px 0' }}>
              {selectedProject.caseStudy?.approach}
            </p>

            {/* Architecture */}
            <h4 style={{ fontFamily: 'var(--display)', fontSize: '1.35rem', color: 'var(--fg)', margin: '0 0 8px 0' }}>Architecture Highlights</h4>
            <ul style={{ margin: '0 0 20px 0', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {selectedProject.caseStudy?.architecture?.map((item, ii) => (
                <li key={ii} style={{ fontSize: '13.5px', color: 'var(--subfg)', lineHeight: 1.55 }}>
                  {item}
                </li>
              ))}
            </ul>

            {/* Verified Outcomes */}
            <h4 style={{ fontFamily: 'var(--display)', fontSize: '1.35rem', color: 'var(--fg)', margin: '0 0 8px 0' }}>Verified Outcomes</h4>
            <ul style={{ margin: '0 0 24px 0', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {selectedProject.caseStudy?.verifiedOutcomes?.map((vo, voi) => (
                <li key={vo} style={{ fontSize: '13.5px', color: 'var(--accent)', lineHeight: 1.55 }}>
                  {vo}
                </li>
              ))}
            </ul>

            {/* Action Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '18px', borderTop: '1px solid var(--line)', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    background: 'var(--chip)',
                    border: '1px solid var(--line)',
                    color: 'var(--fg)',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontFamily: 'var(--mono)'
                  }}
                >
                  <GithubIcon size={14} />
                  <span>GitHub Repository</span>
                </a>

                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      background: 'rgba(6, 182, 212, 0.15)',
                      border: '1px solid rgba(6, 182, 212, 0.3)',
                      color: '#0284c7',
                      textDecoration: 'none',
                      fontSize: '13px',
                      fontFamily: 'var(--mono)'
                    }}
                  >
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={onCloseProject}
                style={{
                  padding: '8px 18px',
                  borderRadius: '8px',
                  background: 'var(--accent)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '13px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

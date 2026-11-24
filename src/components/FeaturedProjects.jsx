import React, { useState } from 'react';
import { Layers, Sparkles, LayoutGrid, Eye, ExternalLink, ArrowRight, CheckCircle2, Terminal } from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';
import CardCarousel3D from './CardCarousel3D';
import SegmentedControl from './SegmentedControl';
import ProjectCaseStudyModal from './ProjectCaseStudyModal';
import LetterRoll from './LetterRoll';
import { GithubIcon } from './Icons';

export default function FeaturedProjects() {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [carouselEffect, setCarouselEffect] = useState('Bulge');
  const [viewMode, setViewMode] = useState('bento'); // 'bento' (Shivam style) or 'carousel' (Gahan 3D Stage)

  return (
    <section id="projects" style={{ padding: '120px 0 80px', position: 'relative' }}>
      <div className="container">
        {/* Section Header: Shivam Kumar Editorial Styling */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="section-tag">
            <span>02 // SELECTED SYSTEMS &amp; CASE STUDIES</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              fontWeight: 400,
              fontFamily: 'var(--font-serif)',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              color: 'var(--text-main)'
            }}
          >
            Engineering <em>Architectures</em> &amp; Flagship Works.
          </h2>
          <p
            style={{
              color: 'var(--text-muted)',
              maxWidth: '680px',
              margin: '0 auto 28px',
              fontSize: '16px',
              fontFamily: 'var(--font-sans)',
              lineHeight: 1.65
            }}
          >
            Detailed production architectures across open-source EDA tooling at IIT Bombay, distributed Go storage,
            and machine learning telemetry anomaly detection.
          </p>

          {/* Controls Bar: Switch between Shivam Bento Cards & Gahan 3D Stage */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginTop: '12px'
            }}
          >
            {/* View Mode Toggle */}
            <div
              style={{
                display: 'inline-flex',
                padding: '4px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(18, 22, 32, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(16px)'
              }}
            >
              <button
                onClick={() => setViewMode('bento')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 18px',
                  borderRadius: '9999px',
                  fontSize: '12.5px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  color: viewMode === 'bento' ? '#070a12' : 'var(--text-muted)',
                  backgroundColor: viewMode === 'bento' ? 'var(--accent-mint)' : 'transparent',
                  transition: 'all 0.25s var(--ease-spring)'
                }}
              >
                <LayoutGrid size={13} />
                <span>Bento Cards</span>
              </button>

              <button
                onClick={() => setViewMode('carousel')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 18px',
                  borderRadius: '9999px',
                  fontSize: '12.5px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  color: viewMode === 'carousel' ? '#070a12' : 'var(--text-muted)',
                  backgroundColor: viewMode === 'carousel' ? 'var(--accent-mint)' : 'transparent',
                  transition: 'all 0.25s var(--ease-spring)'
                }}
              >
                <Eye size={13} />
                <span>3D Stage Flow</span>
              </button>
            </div>

            {/* Gahan Rao Signature Segmented Control for 3D Carousel Effects */}
            {viewMode === 'carousel' && (
              <SegmentedControl
                options={['Bulge', 'Stretch', 'Drum', 'Shatter', 'Dust']}
                selected={carouselEffect}
                onChange={setCarouselEffect}
                size="md"
              />
            )}
          </div>
        </div>

        {/* 3D Stage Carousel Mode */}
        {viewMode === 'carousel' ? (
          <div style={{ marginTop: '20px', marginBottom: '40px' }}>
            <CardCarousel3D
              items={featuredProjects}
              effect={carouselEffect}
              onSelectCard={(p) => setActiveModalProject(p)}
              height="550px"
            />
          </div>
        ) : (
          /* Shivam Kumar Signature Bento Grid */
          <div className="shivam-grid" style={{ marginTop: '20px' }}>
            {/* Card 1: eSim KiCad Health Analyzer (IIT Bombay FOSSEE) */}
            <article
              className="shivam-card bento-col-6"
              style={{ '--acc': '#10b981', '--c1': 'rgba(20, 26, 38, 0.9)' }}
            >
              <div className="shivam-card-body">
                <div className="shivam-card-meta">
                  <span>IIT BOMBAY FOSSEE · EDA PLUGINS</span>
                  <span className="badge-mint">KiCad 6–10 Verified</span>
                </div>
                <h3>Automated PCB Health Grading &amp; KiCad Engine.</h3>
                <p className="desc">
                  Six modular Python/wxPython plugins for KiCad 6–10. Automated PCB design-rule verification, ngspice
                  simulation auditing, dependency tree analysis, and a 3-stage AI-assisted reporting pipeline.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  <span className="badge-dim">Python</span>
                  <span className="badge-dim">wxPython</span>
                  <span className="badge-dim">KiCad EDA</span>
                  <span className="badge-dim">Ngspice</span>
                  <span className="badge-dim">AI Reporting</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <button
                    onClick={() => setActiveModalProject(featuredProjects[0])}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--accent-mint)',
                      fontSize: '13px',
                      fontWeight: 600,
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <span>Read Case Study</span>
                    <ArrowRight size={13} />
                  </button>
                  <a
                    href="https://github.com/akshat2805p/esim-kicad-health-analyzer"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}
                  >
                    <GithubIcon size={14} />
                    <span>Source</span>
                  </a>
                </div>
              </div>

              {/* OS Window Mockup Stage */}
              <div className="shivam-card-vis">
                <div className="win-frame">
                  <div className="win-top">
                    <span className="win-dot red" />
                    <span className="win-dot yellow" />
                    <span className="win-dot green" />
                    <span className="win-host">kicad.esim.iitb.internal // analyzer</span>
                  </div>
                  <div className="win-body">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>DRC Clearance &amp; Netlist</span>
                      <span style={{ color: '#10b981', fontWeight: 700 }}>PASS · 0 Violations</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Ngspice Simulation Audit</span>
                      <span style={{ color: '#06b6d4', fontWeight: 700 }}>Active · 6 Plugins Loaded</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>AI Assisted Health Grade</span>
                      <span style={{ color: 'var(--accent-mint)', fontWeight: 700 }}>Grade A (98.4%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 2: AIOps Sentinel (Isolation Forest) */}
            <article
              className="shivam-card bento-col-6"
              style={{ '--acc': '#06b6d4', '--c1': 'rgba(18, 28, 40, 0.9)' }}
            >
              <div className="shivam-card-body">
                <div className="shivam-card-meta">
                  <span>PRODUCTION ML · TELEMETRY MONITOR</span>
                  <span className="badge-mint">10,368 Samples Evaluated</span>
                </div>
                <h3>Server Telemetry &amp; Isolation Forest Intelligence.</h3>
                <p className="desc">
                  Real-time server health and anomaly detection engine. Achieved 83.96% precision and 0.685 F1-score
                  versus 0.324 for a standard 3-sigma statistical baseline on 10,368 time-series server metrics.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  <span className="badge-dim">Python</span>
                  <span className="badge-dim">Scikit-Learn</span>
                  <span className="badge-dim">FastAPI</span>
                  <span className="badge-dim">Isolation Forest</span>
                  <span className="badge-dim">Docker</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <button
                    onClick={() => setActiveModalProject(featuredProjects[1])}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--accent-mint)',
                      fontSize: '13px',
                      fontWeight: 600,
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <span>Read Case Study</span>
                    <ArrowRight size={13} />
                  </button>
                  <a
                    href="https://github.com/akshat2805p/AIOps-Sentinel"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}
                  >
                    <GithubIcon size={14} />
                    <span>Source</span>
                  </a>
                </div>
              </div>

              {/* OS Window Mockup Stage */}
              <div className="shivam-card-vis">
                <div className="win-frame">
                  <div className="win-top">
                    <span className="win-dot red" />
                    <span className="win-dot yellow" />
                    <span className="win-dot green" />
                    <span className="win-host">telemetry.sentinel.aiops:9092 // monitor</span>
                  </div>
                  <div className="win-body">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                      <div style={{ background: 'rgba(255,255,255,0.04)', padding: '8px', borderRadius: '6px', textAlign: 'center' }}>
                        <div style={{ fontSize: '10px', color: 'var(--text-dim)' }}>PRECISION</div>
                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#06b6d4' }}>83.96%</div>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.04)', padding: '8px', borderRadius: '6px', textAlign: 'center' }}>
                        <div style={{ fontSize: '10px', color: 'var(--text-dim)' }}>F1-SCORE</div>
                        <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--accent-mint)' }}>0.685</div>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.04)', padding: '8px', borderRadius: '6px', textAlign: 'center' }}>
                        <div style={{ fontSize: '10px', color: 'var(--text-dim)' }}>SAMPLES</div>
                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#f3f4f8' }}>10.3k</div>
                      </div>
                    </div>
                    <div style={{ height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden', display: 'flex', marginTop: '4px' }}>
                      <div style={{ width: '84%', background: 'linear-gradient(90deg, #10b981, #06b6d4)' }} />
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 3: Mini-Dynamo (Full Width 12-Column Hero Card) */}
            <article
              className="shivam-card bento-col-12"
              style={{ '--acc': '#7a5cff', '--c1': 'rgba(24, 20, 42, 0.9)' }}
            >
              <div className="shivam-card-body">
                <div className="shivam-card-meta">
                  <span>DISTRIBUTED SYSTEMS · GO &amp; GRPC CLUSTER</span>
                  <span className="badge-mint">5-Node Quorum Active</span>
                </div>
                <h3>Mini-Dynamo: 5-Node Distributed Storage with Quorum Replication.</h3>
                <p className="desc" style={{ maxWidth: '820px' }}>
                  A production-grade distributed key-value store in Go modeled on the Amazon Dynamo paper. Implements
                  consistent hashing with virtual nodes, WAL persistence, vector clocks for causal conflict resolution,
                  gossip protocol node membership discovery, hinted handoff, and read repair with Prometheus metrics.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                  <span className="badge-dim">Go (Golang)</span>
                  <span className="badge-dim">gRPC &amp; Protobuf</span>
                  <span className="badge-dim">Consistent Hashing</span>
                  <span className="badge-dim">Vector Clocks</span>
                  <span className="badge-dim">Gossip Protocol</span>
                  <span className="badge-dim">Prometheus &amp; Grafana</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <button
                    onClick={() => setActiveModalProject(featuredProjects[2])}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--accent-mint)',
                      fontSize: '13px',
                      fontWeight: 600,
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <span>Read Case Study</span>
                    <ArrowRight size={13} />
                  </button>
                  <a
                    href="https://github.com/akshat2805p/Mini-Dynamo"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}
                  >
                    <GithubIcon size={14} />
                    <span>Source</span>
                  </a>
                </div>
              </div>

              {/* OS Window Mockup Stage */}
              <div className="shivam-card-vis">
                <div className="win-frame" style={{ maxWidth: '780px' }}>
                  <div className="win-top">
                    <span className="win-dot red" />
                    <span className="win-dot yellow" />
                    <span className="win-dot green" />
                    <span className="win-host">cluster.dynamo.rpc:50051 // 5-node cluster topology</span>
                  </div>
                  <div className="win-body">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                      {['node-01 (Leader)', 'node-02 (Quorum)', 'node-03 (Quorum)', 'node-04 (Follower)', 'node-05 (Follower)'].map((n, i) => (
                        <div key={n} style={{ background: 'rgba(255,255,255,0.04)', padding: '8px 10px', borderRadius: '6px', border: i < 3 ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(255,255,255,0.06)' }}>
                          <div style={{ fontSize: '9px', color: i < 3 ? '#10b981' : 'var(--text-dim)' }}>● ONLINE</div>
                          <div style={{ fontSize: '11px', fontWeight: 600, color: '#f3f4f8' }}>{n}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-dim)', paddingTop: '4px' }}>
                      <span>Quorum Config: R=2, W=2, N=5</span>
                      <span style={{ color: '#7a5cff' }}>Replication Strategy: Consistent Hash Ring</span>
                      <span>Vector Clocks: Synchronized</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 4: AURA-AI (Manifest V3 Chrome Extension) */}
            <article
              className="shivam-card bento-col-6"
              style={{ '--acc': '#f59e0b', '--c1': 'rgba(30, 24, 18, 0.9)' }}
            >
              <div className="shivam-card-body">
                <div className="shivam-card-meta">
                  <span>BROWSER INTELLIGENCE · EXTENSION</span>
                  <span className="badge-mint">Manifest V3 Production</span>
                </div>
                <h3>AURA-AI: Grounded Webpage Intelligence &amp; Chat.</h3>
                <p className="desc">
                  Manifest V3 Chrome extension providing real-time webpage summarization, grounded interactive chat,
                  and snippet persistence with zero-overhead background service worker lifecycle.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  <span className="badge-dim">TypeScript</span>
                  <span className="badge-dim">React</span>
                  <span className="badge-dim">Manifest V3</span>
                  <span className="badge-dim">LLM APIs</span>
                  <span className="badge-dim">Chrome Storage</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <button
                    onClick={() => setActiveModalProject(featuredProjects[3])}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--accent-mint)',
                      fontSize: '13px',
                      fontWeight: 600,
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <span>Read Case Study</span>
                    <ArrowRight size={13} />
                  </button>
                  <a
                    href="https://github.com/akshat2805p/AURA-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}
                  >
                    <GithubIcon size={14} />
                    <span>Source</span>
                  </a>
                </div>
              </div>

              {/* OS Window Mockup Stage */}
              <div className="shivam-card-vis">
                <div className="win-frame">
                  <div className="win-top">
                    <span className="win-dot red" />
                    <span className="win-dot yellow" />
                    <span className="win-dot green" />
                    <span className="win-host">chrome-extension://aura-ai/popup.html</span>
                  </div>
                  <div className="win-body">
                    <div style={{ padding: '8px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                      <div style={{ fontSize: '10px', color: '#f59e0b', fontWeight: 600 }}>PAGE CONTEXT GROUNDED</div>
                      <div style={{ fontSize: '11px', color: '#e2e8f0', marginTop: '2px' }}>Summarized 18,400 tokens in 280ms into 3 actionable architectural points.</div>
                    </div>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <span style={{ fontSize: '10px', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', padding: '2px 8px', borderRadius: '4px' }}>Ask Question</span>
                      <span style={{ fontSize: '10px', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-muted)', padding: '2px 8px', borderRadius: '4px' }}>Save Snippet</span>
                      <span style={{ fontSize: '10px', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-muted)', padding: '2px 8px', borderRadius: '4px' }}>Export Markdown</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 5: Self-UI & Developer Tools */}
            <article
              className="shivam-card bento-col-6"
              style={{ '--acc': '#ec4899', '--c1': 'rgba(28, 18, 30, 0.9)' }}
            >
              <div className="shivam-card-body">
                <div className="shivam-card-meta">
                  <span>DESIGN ENGINEERING · COMPONENT SYSTEM</span>
                  <span className="badge-mint">Accessible &amp; Fluid</span>
                </div>
                <h3>Self-UI: Modern React Design &amp; Interaction Toolkit.</h3>
                <p className="desc">
                  Developer-first UI component library crafted with high-performance animations, keyboard accessibility,
                  and dark-first ergonomics for technical interfaces and web applications.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  <span className="badge-dim">React 19</span>
                  <span className="badge-dim">CSS3D</span>
                  <span className="badge-dim">TypeScript</span>
                  <span className="badge-dim">A11y</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <a
                    href="https://github.com/akshat2805p/Self-Ui"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--accent-mint)',
                      fontSize: '13px',
                      fontWeight: 600,
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <span>View Repository</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>

              {/* OS Window Mockup Stage */}
              <div className="shivam-card-vis">
                <div className="win-frame">
                  <div className="win-top">
                    <span className="win-dot red" />
                    <span className="win-dot yellow" />
                    <span className="win-dot green" />
                    <span className="win-host">self-ui.dev // component-preview</span>
                  </div>
                  <div className="win-body">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Button.SpringPhysics</span>
                      <span style={{ color: '#10b981', fontWeight: 600 }}>Damped (60fps)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Accessible SegmentedControl</span>
                      <span style={{ color: '#ec4899', fontWeight: 600 }}>WAI-ARIA Compliant</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <ProjectCaseStudyModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}

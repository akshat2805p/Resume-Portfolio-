import React, { useState } from 'react';
import { featuredProjects } from '../data/portfolioData';
import CardCarousel3D from './CardCarousel3D';

export default function AkshatProjects({ onSelectProject }) {
  const [carouselEffect, setCarouselEffect] = useState('stretch');

  // User requirement: Keep strictly only three projects
  const topThreeProjects = featuredProjects.slice(0, 3);

  return (
    <section id="projects" className="section-wrap" style={{ padding: '70px 24px 50px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--muted)', marginBottom: '8px' }}>
          Flagship Architecture
        </p>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 400, color: 'var(--fg)', margin: '0 0 12px 0', letterSpacing: '-0.01em' }}>
          Featured Systems &amp; AI
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--subfg)', maxWidth: '640px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
          Three production systems engineered for resilience, high throughput, and verified outcomes. Interact with the 3D stage carousel below to inspect the architecture and case studies.
        </p>

        {/* 3D Effect Controls */}
        <div style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--chip)', border: '1px solid var(--line)', borderRadius: '999px', padding: '4px', gap: '4px' }}>
          {['stretch', 'bulge', 'drum'].map((eff) => (
            <button
              key={eff}
              type="button"
              onClick={() => setCarouselEffect(eff)}
              style={{
                padding: '5px 14px',
                borderRadius: '999px',
                border: 'none',
                background: carouselEffect === eff ? 'var(--fg)' : 'transparent',
                color: carouselEffect === eff ? 'var(--bg)' : 'var(--muted)',
                fontSize: '11px',
                fontFamily: 'var(--mono)',
                fontWeight: carouselEffect === eff ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textTransform: 'uppercase'
              }}
            >
              {eff}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Stage Carousel Only (User Requirement: Keep only the 3d cage carousel to it) */}
      <div style={{ position: 'relative', width: '100%', minHeight: '480px' }}>
        <CardCarousel3D
          items={topThreeProjects}
          effect={carouselEffect}
          onSelectCard={(p) => onSelectProject(p)}
          height="490px"
        />
      </div>
    </section>
  );
}

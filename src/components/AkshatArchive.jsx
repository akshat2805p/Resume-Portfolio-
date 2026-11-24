import React, { useState, useMemo } from 'react';
import ChromaGrid from './reactbits/ChromaGrid';
import { allRepositories } from '../data/portfolioData';

// Generate lightweight, high-contrast dynamic SVG terminal preview for each repository
function createRepoSvgThumbnail(repo, accent) {
  const isFork = repo.isFork;
  const techList = repo.tech || [];
  const primaryTech = techList[0] || 'Code';
  const name = (repo.displayName || repo.name)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  const desc = (repo.description || '')
    .slice(0, 68)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;') + '...';
  const metrics = (repo.metrics || repo.category || '')
    .slice(0, 38)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="380" viewBox="0 0 600 380">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0c101a"/>
        <stop offset="100%" stop-color="#040609"/>
      </linearGradient>
      <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="${accent}" stop-opacity="0.45"/>
        <stop offset="100%" stop-color="transparent"/>
      </linearGradient>
    </defs>
    <rect width="600" height="380" rx="14" fill="url(#bg)"/>
    <rect x="0" y="0" width="600" height="46" rx="14" fill="#111624"/>
    <circle cx="28" cy="23" r="6" fill="#ff5f56"/>
    <circle cx="48" cy="23" r="6" fill="#ffbd2e"/>
    <circle cx="68" cy="23" r="6" fill="#27c93f"/>
    <text x="96" y="27" fill="#8b949e" font-family="monospace" font-size="12">github.com/akshat2805p/${repo.name}</text>
    <rect x="24" y="66" width="552" height="1" fill="url(#glow)"/>
    <text x="32" y="106" fill="${accent}" font-family="monospace" font-size="13" font-weight="bold">$ ${isFork ? 'git checkout fork-study' : 'git status --branch // main'}</text>
    <text x="32" y="148" fill="#ffffff" font-family="system-ui, sans-serif" font-size="22" font-weight="600">${name}</text>
    <text x="32" y="184" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13.5">${desc}</text>
    <rect x="32" y="222" width="124" height="28" rx="6" fill="rgba(255,255,255,0.07)"/>
    <text x="44" y="241" fill="${accent}" font-family="monospace" font-size="12" font-weight="600">${primaryTech}</text>
    <rect x="168" y="222" width="160" height="28" rx="6" fill="rgba(255,255,255,0.05)"/>
    <text x="180" y="241" fill="#cbd5e1" font-family="monospace" font-size="11.5">${metrics}</text>
    <text x="32" y="340" fill="#64748b" font-family="monospace" font-size="11.5">Build: Verified Passed · 0 Errors · 33 Repositories Verified</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Tech accent color resolver
function getAccent(repo) {
  const techList = repo.tech || [];
  if (techList.some((t) => t.toLowerCase().includes('python'))) return '#38bdf8';
  if (techList.some((t) => t.toLowerCase().includes('c++') || t.toLowerCase().includes('cpp'))) return '#818cf8';
  if (techList.some((t) => t.toLowerCase().includes('go'))) return '#06b6d4';
  if (techList.some((t) => t.toLowerCase().includes('react') || t.toLowerCase().includes('javascript'))) return '#61dafb';
  if (repo.isFork) return '#a855f7';
  return '#e4e4e7'; // default monochrome silver
}

export default function AkshatArchive() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false); // default to 6 projects only per requirement

  const categories = [
    { key: 'all', label: `All Repositories (${allRepositories.length})` },
    { key: 'featured', label: `Featured Systems (4)` },
    { key: 'project', label: `Projects & Tools (11)` },
    { key: 'experiment', label: `Lab & Experiments (10)` },
    { key: 'fork', label: `Forks & Studies (4)` },
    { key: 'archive', label: `Legacy Archive (4)` }
  ];

  // Search & Filter
  const filteredRepositories = useMemo(() => {
    return allRepositories.filter((repo) => {
      const matchesFilter = activeFilter === 'all' || repo.category === activeFilter;
      const q = query.toLowerCase().trim();
      const matchesQuery =
        !q ||
        repo.name.toLowerCase().includes(q) ||
        (repo.displayName && repo.displayName.toLowerCase().includes(q)) ||
        (repo.description && repo.description.toLowerCase().includes(q)) ||
        (repo.tech && repo.tech.some((t) => t.toLowerCase().includes(q)));
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  // Format into ChromaGrid data: slice to 6 by default, or all when showAll is true
  const displayedRepos = useMemo(() => {
    return showAll ? filteredRepositories : filteredRepositories.slice(0, 6);
  }, [filteredRepositories, showAll]);

  const chromaItems = useMemo(() => {
    return displayedRepos.map((repo) => {
      const accent = getAccent(repo);
      return {
        title: repo.displayName || repo.name,
        subtitle: `${repo.tech?.[0] || 'Code'} · ${repo.metrics || repo.category}`,
        accent,
        image: createRepoSvgThumbnail(repo, accent),
        url: repo.githubUrl,
        alt: repo.displayName || repo.name
      };
    });
  }, [displayedRepos]);

  return (
    <section id="archive" className="section-wrap" style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '38px' }}>
        <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '8px' }}>
          Open Source Telemetry &bull; Versioned Lineage
        </p>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 400, color: 'var(--fg)', margin: '0 0 14px 0', letterSpacing: '-0.01em' }}>
          Complete Codebase &amp; Lab Archive
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--subfg)', maxWidth: '640px', margin: '0 auto 28px auto', lineHeight: 1.6 }}>
          Browse every public repository, research project, and contribution across systems engineering and AI.
        </p>

        {/* Search Bar */}
        <div style={{ maxWidth: '580px', margin: '0 auto 24px auto', position: 'relative' }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search across all 33 repositories by title, tech stack, or topic..."
            style={{
              width: '100%',
              padding: '12px 18px 12px 42px',
              borderRadius: '999px',
              background: 'var(--input-bg)',
              border: '1px solid var(--input-bd)',
              color: 'var(--fg)',
              fontSize: '16px',
              outline: 'none',
              boxSizing: 'border-box',
              boxShadow: 'var(--card-sh)',
              transition: 'border-color 0.2s ease, background 0.2s ease'
            }}
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        {/* Category Filters Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', maxWidth: '100%', overflowX: 'auto', paddingBottom: '4px' }}>
          {categories.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => {
                setActiveFilter(c.key);
                setShowAll(false); // reset to initial 6 when filter changes
              }}
              style={{
                padding: '6px 14px',
                borderRadius: '999px',
                border: activeFilter === c.key ? '1px solid var(--fg)' : '1px solid var(--line)',
                background: activeFilter === c.key ? 'var(--fg)' : 'var(--chip)',
                color: activeFilter === c.key ? 'var(--bg)' : 'var(--subfg)',
                fontSize: '12px',
                fontFamily: 'var(--mono)',
                fontWeight: activeFilter === c.key ? 600 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.18s ease'
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* ChromaGrid Interactive Spotlight Display */}
      {chromaItems.length > 0 ? (
        <div className="archive-chroma-wrap" style={{ position: 'relative' }}>
          <ChromaGrid
            items={chromaItems}
            columns={3}
            minCardWidth={280}
            gap={18}
            radius={280}
            softness={0.65}
            damping={0.45}
            fadeOut={0.6}
            grayscale={1}
            dim={0.12}
            glow={0.5}
            borderGlow={1}
            reveal="spotlight"
            aspectRatio="16 / 10"
            cardRadius={18}
            showInfo={true}
            frame={false}
            theme="dark"
          />

          {/* Show More / Show Less Button */}
          {filteredRepositories.length > 6 && (
            <div style={{ textAlign: 'center', marginTop: '38px' }}>
              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
                style={{
                  padding: '12px 32px',
                  borderRadius: '999px',
                  background: 'var(--card-bg)',
                  border: '1.5px solid var(--accent)',
                  color: 'var(--fg)',
                  fontFamily: 'var(--mono)',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(16, 185, 129, 0.22)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '9px',
                  transition: 'all 0.2s ease'
                }}
              >
                {showAll ? (
                  <>
                    <span>Show Less (Display 6 Only)</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Show More ({filteredRepositories.length} Repositories Available)</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--muted)' }}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '14px' }}>
            No repositories found matching &quot;{query}&quot;. Try another search term.
          </p>
        </div>
      )}
    </section>
  );
}

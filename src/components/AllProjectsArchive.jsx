import React, { useState, useMemo } from 'react';
import { Search, GitFork, Archive, LayoutGrid, Eye, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { allRepositories } from '../data/portfolioData';
import CardCarousel3D from './CardCarousel3D';
import SegmentedControl from './SegmentedControl';
import LetterRoll from './LetterRoll';

export default function AllProjectsArchive() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [archiveViewMode, setArchiveViewMode] = useState('carousel'); // 'carousel' or 'grid'
  const [carouselEffect, setCarouselEffect] = useState('Bulge');

  const filterTabs = [
    { id: 'all', label: 'All Repositories', count: allRepositories.length },
    { id: 'featured', label: 'Featured', count: allRepositories.filter((r) => r.category === 'featured').length },
    { id: 'project', label: 'Projects & Systems', count: allRepositories.filter((r) => r.category === 'project').length },
    { id: 'experiment', label: 'Experiments & Lab', count: allRepositories.filter((r) => r.category === 'experiment' || r.category === 'contribution').length },
    { id: 'fork', label: 'Forks & Studies', count: allRepositories.filter((r) => r.category === 'fork').length },
    { id: 'archive', label: 'Legacy Archive', count: allRepositories.filter((r) => r.category === 'archive').length }
  ];

  const filteredRepositories = useMemo(() => {
    return allRepositories.filter((repo) => {
      // Category filter
      let matchesCategory = true;
      if (activeFilter === 'featured') matchesCategory = repo.category === 'featured';
      else if (activeFilter === 'project') matchesCategory = repo.category === 'project';
      else if (activeFilter === 'experiment') matchesCategory = repo.category === 'experiment' || repo.category === 'contribution';
      else if (activeFilter === 'fork') matchesCategory = repo.category === 'fork';
      else if (activeFilter === 'archive') matchesCategory = repo.category === 'archive';

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        repo.displayName.toLowerCase().includes(q) ||
        repo.name.toLowerCase().includes(q) ||
        repo.description.toLowerCase().includes(q) ||
        repo.tech.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeFilter]);

  return (
    <section id="archive" style={{ padding: '120px 0 80px', position: 'relative' }}>
      <div className="container">
        {/* Section Header: Shivam Kumar Editorial Styling */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag">
            <span>04 // REPOSITORY MANIFEST &amp; LAB ARCHIVE</span>
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
            All 33 Repositories &amp; <em>3D Archive</em>.
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto 24px', fontSize: '16px', fontFamily: 'var(--font-sans)', lineHeight: 1.65 }}>
            Browse every public repository, research study, and open-source contribution in the 3D physics carousel or
            switch to the searchable directory grid.
          </p>

          {/* Controls Bar: Effect Switcher + Mode Toggle */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '28px'
            }}
          >
            {/* 3D Distortion Effect Selector */}
            {archiveViewMode === 'carousel' && (
              <SegmentedControl
                options={['Bulge', 'Stretch', 'Drum', 'Shatter', 'Dust']}
                selected={carouselEffect}
                onChange={setCarouselEffect}
                size="md"
              />
            )}

            {/* View Mode Toggle */}
            <div
              style={{
                display: 'inline-flex',
                padding: '4px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(18, 21, 30, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <button
                onClick={() => setArchiveViewMode('carousel')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  color: archiveViewMode === 'carousel' ? '#000000' : 'var(--text-muted)',
                  backgroundColor: archiveViewMode === 'carousel' ? 'var(--accent-mint)' : 'transparent',
                  transition: 'all 0.2s ease'
                }}
              >
                <Eye size={13} />
                <span>3D Flow</span>
              </button>

              <button
                onClick={() => setArchiveViewMode('grid')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  color: archiveViewMode === 'grid' ? '#000000' : 'var(--text-muted)',
                  backgroundColor: archiveViewMode === 'grid' ? 'var(--accent-mint)' : 'transparent',
                  transition: 'all 0.2s ease'
                }}
              >
                <LayoutGrid size={13} />
                <span>Catalog Grid</span>
              </button>
            </div>
          </div>

          {/* Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              justifyContent: 'center',
              marginBottom: '28px'
            }}
          >
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    backgroundColor: isActive ? 'var(--accent-mint)' : 'rgba(255, 255, 255, 0.04)',
                    color: isActive ? '#090a0f' : 'var(--text-muted)',
                    border: isActive ? '1px solid var(--accent-mint)' : '1px solid var(--border-subtle)',
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>{tab.label}</span>
                  <span
                    style={{
                      fontSize: '10px',
                      padding: '1px 5px',
                      borderRadius: '9999px',
                      backgroundColor: isActive ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Flow Mode in Archive */}
        {archiveViewMode === 'carousel' ? (
          <div style={{ marginTop: '10px', marginBottom: '40px' }}>
            <CardCarousel3D
              items={filteredRepositories}
              effect={carouselEffect}
              onSelectCard={(repo) => {
                if (repo.githubUrl) window.open(repo.githubUrl, '_blank');
              }}
              height="530px"
            />
          </div>
        ) : (
          /* Searchable Catalog Grid Mode */
          <div>
            {/* Live Search Input */}
            <div style={{ maxWidth: '680px', margin: '0 auto 32px', position: 'relative' }}>
              <Search
                size={18}
                color="var(--text-muted)"
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none'
                }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all 33 repositories by title, tech tag, or description..."
                style={{
                  width: '100%',
                  padding: '13px 16px 13px 46px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-main)',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent-mint)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
              />
            </div>

            {/* Counter */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '13px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-dim)',
                marginBottom: '20px'
              }}
            >
              <span>Displaying {filteredRepositories.length} of {allRepositories.length} repositories</span>
              <span className="badge-dim" style={{ fontSize: '10px' }}>Forks explicitly labeled</span>
            </div>

            {/* Grid of Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '20px'
              }}
            >
              {filteredRepositories.map((repo) => (
                <div
                  key={repo.name}
                  className="glass-panel"
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    overflow: 'hidden'
                  }}
                >
                  {/* Mini Window Frame Header */}
                  <div
                    className="win-top"
                    style={{
                      borderRadius: '12px 12px 0 0',
                      margin: '-24px -24px 16px -24px',
                      padding: '8px 12px'
                    }}
                  >
                    <span className="win-dot red" style={{ width: '8px', height: '8px' }} />
                    <span className="win-dot yellow" style={{ width: '8px', height: '8px' }} />
                    <span className="win-dot green" style={{ width: '8px', height: '8px' }} />
                    <span className="win-host" style={{ fontSize: '10px' }}>{repo.name}</span>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      {repo.isFork ? (
                        <span
                          style={{
                            backgroundColor: 'rgba(245, 158, 11, 0.12)',
                            color: '#f59e0b',
                            border: '1px solid rgba(245, 158, 11, 0.3)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '11px',
                            fontWeight: 500,
                            padding: '2px 8px',
                            borderRadius: '6px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <GitFork size={12} />
                          Fork / Study
                        </span>
                      ) : repo.category === 'featured' ? (
                        <span className="badge-mint">Featured</span>
                      ) : repo.category === 'archive' ? (
                        <span className="badge-dim">
                          <Archive size={12} style={{ marginRight: '4px' }} />
                          Archived
                        </span>
                      ) : (
                        <span className="badge-dim">{repo.type}</span>
                      )}

                      <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                        {repo.stars}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                      <LetterRoll text={repo.displayName} />
                    </h4>

                    <p style={{ color: 'var(--text-muted)', fontSize: '13.5px', lineHeight: 1.6, marginBottom: '16px' }}>
                      {repo.description}
                    </p>

                    {repo.metrics && (
                      <div
                        style={{
                          fontSize: '11.5px',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--accent-mint)',
                          backgroundColor: 'rgba(16, 185, 129, 0.06)',
                          padding: '6px 10px',
                          borderRadius: '6px',
                          marginBottom: '16px'
                        }}
                      >
                        &bull; {repo.metrics}
                      </div>
                    )}
                  </div>

                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                      {repo.tech.map((t) => (
                        <span key={t} className="badge-dim" style={{ fontSize: '10.5px' }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderTop: '1px solid var(--border-subtle)',
                        paddingTop: '12px'
                      }}
                    >
                      <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                        {repo.name}
                      </span>

                      <a
                        href={repo.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: '6px',
                          borderRadius: '6px',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          color: 'var(--text-muted)',
                          display: 'flex'
                        }}
                      >
                        <GithubIcon size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

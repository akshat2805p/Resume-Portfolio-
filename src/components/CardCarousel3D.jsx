import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Layers, ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { KicadThumbnail, AiOpsThumbnail, DynamoThumbnail, AuraAiThumbnail } from './ProjectThumbnails';
import LetterRoll from './LetterRoll';

export default function CardCarousel3D({
  items = [],
  effect = 'stretch', // 'stretch', 'bulge', 'drum', 'shatter', 'dust'
  onSelectCard,
  height = '500px'
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  // Sleek compact dimensions per user instructions (not oversized)
  const cardWidth = isMobile ? Math.min(296, windowWidth - 36) : (isTablet ? 320 : 350);
  const cardHeight = isMobile ? 385 : 415;
  const baseSpacing = isMobile ? (cardWidth + 24) : (isTablet ? 350 : 380);

  const containerRef = useRef(null);
  const stateRef = useRef({
    position: 0,
    target: 0,
    velocity: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartPos: 0,
    lastX: 0,
    lastTime: 0,
    rafId: null
  });

  const total = items.length;

  // Spring physics animation loop
  const animateSpring = useCallback(() => {
    const s = stateRef.current;
    if (s.isDragging) {
      s.rafId = requestAnimationFrame(animateSpring);
      return;
    }

    const SPRING_FREQ = 12; // spring tightness
    const DAMPING = 0.82; // damping factor
    const dt = 0.016;

    // Sub-step Euler integration for stable spring physics
    for (let i = 0; i < 4; i++) {
      const h = dt / 4;
      const force = (s.target - s.position) * (SPRING_FREQ * SPRING_FREQ);
      const drag = 2 * DAMPING * SPRING_FREQ * s.velocity;
      const accel = force - drag;
      s.velocity += accel * h;
      s.position += s.velocity * h;
    }

    setPosition(s.position);
    setVelocity(s.velocity);

    const diff = Math.abs(s.target - s.position);
    const speed = Math.abs(s.velocity);

    if (diff < 0.001 && speed < 0.005) {
      s.position = s.target;
      s.velocity = 0;
      setPosition(s.target);
      setVelocity(0);
      setCurrentIndex(((Math.round(s.target) % total) + total) % total);
      s.rafId = null;
    } else {
      s.rafId = requestAnimationFrame(animateSpring);
    }
  }, [total]);

  const snapTo = useCallback((idx) => {
    const s = stateRef.current;
    s.target = idx;
    if (!s.rafId) {
      s.rafId = requestAnimationFrame(animateSpring);
    }
  }, [animateSpring]);

  // Pointer Drag Handlers
  const handlePointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;

    const s = stateRef.current;
    s.isDragging = true;
    s.dragStartX = e.clientX;
    s.dragStartPos = s.position;
    s.lastX = e.clientX;
    s.lastTime = performance.now();
    s.velocity = 0;
    setIsDragging(true);

    if (s.rafId) {
      cancelAnimationFrame(s.rafId);
      s.rafId = null;
    }

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
  };

  const handlePointerMove = (e) => {
    const s = stateRef.current;
    if (!s.isDragging) return;

    const deltaX = e.clientX - s.dragStartX;
    const dragScale = baseSpacing || 360;
    const newPos = s.dragStartPos - (deltaX / dragScale);

    const now = performance.now();
    const dt = Math.max(now - s.lastTime, 1);
    const dx = e.clientX - s.lastX;
    s.velocity = - (dx / dt) * 1.2;
    s.lastX = e.clientX;
    s.lastTime = now;

    s.position = newPos;
    s.target = newPos;
    setPosition(newPos);
    setVelocity(s.velocity);
  };

  const handlePointerUp = (e) => {
    const s = stateRef.current;
    if (!s.isDragging) return;

    s.isDragging = false;
    setIsDragging(false);

    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('pointerup', handlePointerUp);
    window.removeEventListener('pointercancel', handlePointerUp);

    let projectedTarget = s.position + (s.velocity * 0.18);
    let nearestSnap = Math.round(projectedTarget);

    s.target = nearestSnap;
    s.rafId = requestAnimationFrame(animateSpring);
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || Math.abs(e.deltaY) > 20) {
      e.preventDefault();
      const s = stateRef.current;
      const step = (e.deltaX || e.deltaY) > 0 ? 1 : -1;
      snapTo(Math.round(s.target) + step);
    }
  };

  const computeCardStyle = (itemIndex) => {
    const rawOffset = itemIndex - position;
    const wrappedOffset = rawOffset - Math.round(rawOffset / total) * total;
    const absOffset = Math.abs(wrappedOffset);
    const isCenter = absOffset < 0.35;

    const translateX = wrappedOffset * baseSpacing;

    let transform = '';
    let opacity = isCenter ? 1.0 : Math.max(0.2, 0.6 - absOffset * 0.35);
    let filter = isCenter ? 'none' : 'blur(0.5px)';
    let zIndex = isCenter ? 100 : Math.max(1, Math.round(50 - absOffset * 20));

    const eff = effect.toLowerCase();

    if (eff === 'stretch') {
      const stretchFactor = 1 + Math.min(Math.abs(velocity) * 0.1, 0.3);
      const scaleX = (1 - Math.min(absOffset * 0.12, 0.35)) * (isCenter ? stretchFactor : 1);
      const scaleY = 1 - Math.min(absOffset * 0.1, 0.28);
      const skewY = wrappedOffset * Math.min(velocity * 1.2, 6);
      transform = `translate3d(${translateX}px, 0, ${-absOffset * 70}px) scale(${scaleX}, ${scaleY}) skewY(${skewY}deg)`;
    } else if (eff === 'bulge') {
      const zPush = Math.max(0, (1 - Math.min(absOffset * 0.75, 1)) * 140);
      const rotateY = -wrappedOffset * 20;
      const scale = Math.max(0.78, 1 - absOffset * 0.1);
      transform = `translate3d(${translateX}px, 0, ${zPush}px) rotateY(${rotateY}deg) scale(${scale})`;
    } else if (eff === 'drum') {
      const radius = isMobile ? 380 : 540;
      const angle = wrappedOffset * (isMobile ? 0.5 : 0.42);
      const drumX = Math.sin(angle) * radius;
      const drumZ = (Math.cos(angle) - 1) * radius;
      const rotateY = angle * (180 / Math.PI);
      transform = `translate3d(${drumX}px, 0, ${drumZ}px) rotateY(${rotateY}deg)`;
    } else {
      transform = `translate3d(${translateX}px, 0, ${-absOffset * 60}px) scale(${Math.max(0.8, 1 - absOffset * 0.12)})`;
    }

    return {
      position: 'absolute',
      left: '50%',
      top: '50%',
      marginLeft: `-${cardWidth / 2}px`,
      marginTop: `-${cardHeight / 2}px`,
      width: `${cardWidth}px`,
      height: `${cardHeight}px`,
      transform,
      opacity,
      filter,
      zIndex,
      transition: isDragging ? 'none' : 'box-shadow 0.3s ease, border-color 0.3s ease',
      willChange: 'transform, opacity, filter',
      userSelect: 'none',
      WebkitUserSelect: 'none'
    };
  };

  const renderCardThumbnail = (projectId) => {
    switch (projectId) {
      case 'esim-kicad-health-analyzer':
        return <KicadThumbnail />;
      case 'aiops-sentinel':
        return <AiOpsThumbnail />;
      case 'mini-dynamo':
        return <DynamoThumbnail />;
      case 'aura-ai':
        return <AuraAiThumbnail />;
      default:
        return null;
    }
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onPointerDown={handlePointerDown}
      onWheel={handleWheel}
      style={{
        position: 'relative',
        width: '100%',
        height,
        overflow: 'hidden',
        perspective: isMobile ? '800px' : '1100px',
        WebkitPerspective: isMobile ? '800px' : '1100px',
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'pan-y',
        outline: 'none'
      }}
      aria-label="3D Interactive Project Carousel"
    >
      {/* 3D Scene Viewport */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transformStyle: 'preserve-3d',
          WebkitTransformStyle: 'preserve-3d'
        }}
      >
        {items.map((item, idx) => {
          const rawOffset = idx - position;
          const wrappedOffset = rawOffset - Math.round(rawOffset / total) * total;
          const isCentered = Math.abs(wrappedOffset) < 0.4;
          const cardStyle = computeCardStyle(idx);

          return (
            <div
              key={item.id || item.title || idx}
              style={cardStyle}
              onClick={(e) => {
                if (isCentered) {
                  e.stopPropagation();
                  if (onSelectCard) onSelectCard(item);
                } else {
                  snapTo(Math.round(position + wrappedOffset));
                }
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  padding: isMobile ? '14px 14px 16px 14px' : '18px 18px 20px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  isolation: 'isolate',
                  backgroundColor: 'var(--card-bg)',
                  backdropFilter: 'blur(24px) saturate(170%)',
                  WebkitBackdropFilter: 'blur(24px) saturate(170%)',
                  border: isCentered ? '1px solid rgba(255, 255, 255, 0.35)' : '1px solid var(--card-bd)',
                  boxShadow: isCentered
                    ? '0 16px 40px rgba(0, 0, 0, 0.6), 0 0 24px rgba(255, 255, 255, 0.08)'
                    : 'var(--card-sh)',
                  cursor: 'pointer',
                  transition: 'background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                <div>
                  {/* Card Top Meta */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span
                      style={{
                        fontSize: '10px',
                        fontFamily: 'var(--mono)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--fg)',
                        background: 'var(--chip)',
                        border: '1px solid var(--line)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontWeight: 600
                      }}
                    >
                      {item.category || 'Flagship'}
                    </span>
                    <span style={{ fontSize: '10.5px', fontFamily: 'var(--mono)', color: 'var(--muted)' }}>
                      0{idx + 1} // 0{total}
                    </span>
                  </div>

                  {/* High-tech SVG Graphic Thumbnail */}
                  <div style={{ marginBottom: '12px' }}>
                    {renderCardThumbnail(item.id)}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: isMobile ? '16px' : '18px',
                      fontFamily: 'var(--display)',
                      fontWeight: 500,
                      color: 'var(--fg)',
                      margin: '0 0 3px 0',
                      lineHeight: 1.25
                    }}
                  >
                    <LetterRoll text={item.title || item.name} />
                  </h3>

                  {/* Tagline */}
                  <p style={{ fontSize: '11.5px', color: 'var(--subfg)', fontFamily: 'var(--mono)', fontWeight: 500, margin: '0 0 8px 0' }}>
                    {item.tagline || item.type}
                  </p>

                  {/* Short Description */}
                  <p
                    style={{
                      color: 'var(--muted)',
                      fontSize: '12px',
                      lineHeight: 1.45,
                      margin: '0 0 10px 0',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {item.shortDesc || item.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {(item.tech || []).slice(0, 3).map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '9.5px',
                          fontFamily: 'var(--mono)',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          background: 'var(--tag-bg)',
                          border: '1px solid var(--tag-bd)',
                          color: 'var(--tag-fg)'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid var(--line)',
                    paddingTop: '10px',
                    marginTop: '10px'
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      color: 'var(--fg)',
                      fontSize: '11.5px',
                      fontWeight: 600,
                      fontFamily: 'var(--mono)'
                    }}
                  >
                    <Layers size={12} />
                    <span>Case Study</span>
                    <ArrowRight size={10} />
                  </div>

                  <div style={{ display: 'flex', gap: '6px' }} onClick={(e) => e.stopPropagation()}>
                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: 'var(--fg)',
                          background: 'var(--chip)',
                          border: '1px solid var(--line)',
                          padding: '5px 7px',
                          borderRadius: '5px',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                        aria-label="GitHub Source"
                        title="GitHub Repository"
                      >
                        <GithubIcon size={13} />
                      </a>
                    )}
                    {item.demoUrl && (
                      <a
                        href={item.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: 'var(--fg)',
                          background: 'var(--chip)',
                          border: '1px solid var(--line)',
                          padding: '5px 7px',
                          borderRadius: '5px',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                        aria-label="Live Demo"
                        title="Interactive Demo"
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls: Arrows & Counter */}
      <div
        style={{
          position: 'absolute',
          bottom: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 120,
          pointerEvents: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => snapTo(Math.round(stateRef.current.position) - 1)}
          aria-label="Previous Project"
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            backgroundColor: 'var(--card-bg)',
            border: '1px solid var(--line)',
            color: 'var(--fg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--card-sh)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--fg)';
            e.currentTarget.style.color = 'var(--bg)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--card-bg)';
            e.currentTarget.style.color = 'var(--fg)';
          }}
        >
          <ChevronLeft size={16} />
        </button>

        {/* Counter Badge */}
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '11px',
            color: 'var(--muted)',
            backgroundColor: 'var(--card-bg)',
            padding: '5px 12px',
            borderRadius: '9999px',
            border: '1px solid var(--line)',
            boxShadow: 'var(--card-sh)'
          }}
        >
          <strong style={{ color: 'var(--fg)' }}>
            {String(((Math.round(position) % total) + total) % total + 1).padStart(2, '0')}
          </strong>{' '}
          / {String(total).padStart(2, '0')}
        </div>

        <button
          onClick={() => snapTo(Math.round(stateRef.current.position) + 1)}
          aria-label="Next Project"
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            backgroundColor: 'var(--card-bg)',
            border: '1px solid var(--line)',
            color: 'var(--fg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--card-sh)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--fg)';
            e.currentTarget.style.color = 'var(--bg)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--card-bg)';
            e.currentTarget.style.color = 'var(--fg)';
          }}
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Floating Interaction Hint */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--mono)',
          fontSize: '10.5px',
          color: 'var(--muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          pointerEvents: 'none',
          zIndex: 110,
          whiteSpace: 'nowrap'
        }}
      >
        <span>&larr; Drag or swipe &bull; Click to open case study &rarr;</span>
      </div>
    </div>
  );
}

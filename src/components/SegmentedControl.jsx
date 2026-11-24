import React from 'react';

// Optional Web Audio subtle tick
function playTick(freq = 600) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.5, ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.04);
  } catch (e) {
    // Audio context may be restricted by autoplay policy
  }
}

export default function SegmentedControl({
  options = ['Stretch', 'Bulge', 'Drum', 'Shatter', 'Dust'],
  selected,
  onChange,
  size = 'md'
}) {
  return (
    <div
      role="tablist"
      aria-label="3D Carousel Distortion Effect Switcher"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px',
        borderRadius: '9999px',
        backgroundColor: 'rgba(18, 21, 30, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
        position: 'relative',
        maxWidth: '100%',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none'
      }}
    >
      {options.map((opt) => {
        const isSelected = selected.toLowerCase() === opt.toLowerCase();
        return (
          <button
            key={opt}
            role="tab"
            aria-selected={isSelected}
            onClick={() => {
              playTick(800);
              onChange(opt);
            }}
            style={{
              position: 'relative',
              zIndex: 2,
              padding: size === 'sm' ? '5px 12px' : '7px 18px',
              fontSize: size === 'sm' ? '11.5px' : '13px',
              fontWeight: isSelected ? 700 : 500,
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.02em',
              color: isSelected ? '#000000' : 'var(--text-muted)',
              backgroundColor: isSelected ? 'var(--accent-mint)' : 'transparent',
              borderRadius: '9999px',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: isSelected ? '0 2px 10px rgba(16, 185, 129, 0.4)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (!isSelected) {
                e.currentTarget.style.color = 'var(--text-main)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isSelected) {
                e.currentTarget.style.color = 'var(--text-muted)';
              }
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

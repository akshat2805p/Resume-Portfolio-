import React, { useEffect, useState } from 'react';
import HoloMosaic from './reactbits/HoloMosaic';

const MOBILE_QUERY = '(max-width: 640px), (pointer: coarse)';

export default function HoloBackground() {
  const [isDay, setIsDay] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches
  );

  useEffect(() => {
    const checkSky = () => {
      setIsDay(document.documentElement.getAttribute('data-sky') === 'day');
    };
    const media = window.matchMedia(MOBILE_QUERY);
    const checkDevice = () => setIsMobile(media.matches);

    checkSky();
    checkDevice();
    const themeObserver = new MutationObserver(checkSky);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-sky']
    });
    media.addEventListener?.('change', checkDevice);
    window.addEventListener('resize', checkDevice, { passive: true });

    return () => {
      themeObserver.disconnect();
      media.removeEventListener?.('change', checkDevice);
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return (
    <div
      className={`holo-bg-root${isMobile ? ' holo-bg-mobile' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100dvh',
        minHeight: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        // Keep a CSS glow visible even on devices where WebGL2 is unavailable.
        background: isDay
          ? 'radial-gradient(ellipse at 18% 18%, rgba(16, 185, 129, 0.16), transparent 48%), radial-gradient(ellipse at 82% 72%, rgba(6, 182, 212, 0.12), transparent 45%), #f8fafc'
          : 'radial-gradient(ellipse at 18% 18%, rgba(16, 185, 129, 0.16), transparent 48%), radial-gradient(ellipse at 82% 72%, rgba(6, 182, 212, 0.12), transparent 45%), #090a0f'
      }}
      aria-hidden="true"
    >
      {/* Keep the animated background on touch devices, with lighter visual settings. */}
      <HoloMosaic
        className="w-full h-full"
        style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
        color={isDay ? '#e2e8f0' : '#09090b'}
        metalColor={isDay ? '#cbd5e1' : '#27272a'}
        spectrum="pearl"
        tileSize={isMobile ? 1.8 : 1.4}
        gap={0.04}
        roundness={0.18}
        bevel={0.15}
        rotation={15}
        scatter={0.06}
        tilt={0.25}
        swirl={isMobile ? 0.12 : 0.2}
        ripple={isMobile ? 0.15 : 0.3}
        bands={1.0}
        softness={0.7}
        intensity={isDay ? 0.45 : (isMobile ? 0.8 : 1.05)}
        saturation={isDay ? 0.08 : 0.3}
        glitter={isMobile ? 0.08 : (isDay ? 0.1 : 0.25)}
        sheen={isMobile ? 0.35 : (isDay ? 0.3 : 0.6)}
        grain={0.08}
        speed={isMobile ? 0.2 : 0.35}
        variation={1}
        filter="none"
        filterSize={1}
        mouseInteraction={!isMobile}
        mouseRadius={0.3}
        mouseStrength={1.5}
        flipOnClick={false}
        lightMode={isDay}
        paused={false}
      />
      <div
        className="holo-readability-veil"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          background: isDay
            ? 'radial-gradient(ellipse at 50% 28%, rgba(248, 250, 252, 0.38) 0%, rgba(241, 245, 249, 0.26) 55%, rgba(248, 250, 252, 0.52) 100%)'
            : 'radial-gradient(ellipse at 50% 28%, rgba(10, 14, 24, 0.28) 0%, rgba(7, 10, 18, 0.18) 55%, rgba(7, 10, 18, 0.42) 100%)',
          backdropFilter: 'blur(1px)',
          WebkitBackdropFilter: 'blur(1px)'
        }}
      />
    </div>
  );
}

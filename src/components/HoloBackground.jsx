import React, { useState, useEffect } from 'react';
import HoloMosaic from './reactbits/HoloMosaic';

export default function HoloBackground() {
  const [isDay, setIsDay] = useState(false);

  useEffect(() => {
    const checkSky = () => {
      const mode = document.documentElement.getAttribute('data-sky');
      setIsDay(mode === 'day');
    };

    checkSky();

    const observer = new MutationObserver(checkSky);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-sky']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="holo-bg-root"
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
        pointerEvents: 'none', // Strictly pointer-events: none so all clicks, buttons, inputs work 100%
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      <HoloMosaic
        className="w-full h-full"
        style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
        color={isDay ? '#e2e8f0' : '#09090b'}
        metalColor={isDay ? '#cbd5e1' : '#27272a'}
        spectrum="pearl"
        tileSize={1.4}
        gap={0.04}
        roundness={0.18}
        bevel={0.15}
        rotation={15}
        scatter={0.06}
        tilt={0.25}
        swirl={0.2}
        ripple={0.3}
        bands={1.0}
        softness={0.7}
        intensity={isDay ? 0.45 : 1.05}
        saturation={isDay ? 0.08 : 0.3}
        glitter={isDay ? 0.1 : 0.25}
        sheen={isDay ? 0.3 : 0.6}
        grain={0.08}
        speed={0.35}
        variation={1}
        filter="none"
        filterSize={1}
        mouseInteraction={true}
        mouseRadius={0.3}
        mouseStrength={1.5}
        flipOnClick={false}
        lightMode={isDay}
        paused={false}
      />

      {/* High-Readability Ambient Veil: Softens sharp specular tile glare behind typography while preserving 3D shimmer */}
      <div
        className="holo-readability-veil"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          background: isDay
            ? 'radial-gradient(ellipse at 50% 28%, rgba(248, 250, 252, 0.76) 0%, rgba(241, 245, 249, 0.58) 55%, rgba(248, 250, 252, 0.88) 100%)'
            : 'radial-gradient(ellipse at 50% 28%, rgba(10, 14, 24, 0.74) 0%, rgba(7, 10, 18, 0.56) 55%, rgba(7, 10, 18, 0.90) 100%)',
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)'
        }}
      />
    </div>
  );
}

import React from 'react';
import { AbsoluteFill, random, useCurrentFrame } from 'remotion';
import { TOKENS } from '../../themes/raahim';

// Wraps any scene in the 1950s filmstrip look: cream paper, halftone, grain,
// frame jitter, occasional dust and a soft vignette. Wrap, don't restyle.
export const FilmLook: React.FC<{ children?: React.ReactNode; intensity?: number }> = ({
  children,
  intensity = 1,
}) => {
  const frame = useCurrentFrame();
  const { jitterPx, halftoneOpacity, grainOpacity } = TOKENS.texture;
  const dx = (random(`jx${frame}`) - 0.5) * 2 * jitterPx * intensity;
  const dy = (random(`jy${frame}`) - 0.5) * 2 * jitterPx * intensity;
  const flicker = 1 - random(`fl${frame}`) * 0.04 * intensity;
  const dust = random(`dust${Math.floor(frame / 3)}`) < 0.25 * intensity;

  return (
    <AbsoluteFill style={{ backgroundColor: TOKENS.colors.background, overflow: 'hidden' }}>
      <AbsoluteFill style={{ transform: `translate(${dx}px, ${dy}px)`, opacity: flicker }}>
        {children}
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          backgroundImage: `radial-gradient(${TOKENS.colors.textPrimary} 1px, transparent 1.4px)`,
          backgroundSize: '6px 6px',
          opacity: halftoneOpacity * intensity,
          mixBlendMode: 'multiply',
        }}
      />
      <AbsoluteFill style={{ opacity: grainOpacity * intensity, mixBlendMode: 'multiply' }}>
        <svg width="100%" height="100%">
          <filter id={`grain${frame % 8}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} seed={frame % 8} />
          </filter>
          <rect width="100%" height="100%" filter={`url(#grain${frame % 8})`} />
        </svg>
      </AbsoluteFill>
      {dust && (
        <div
          style={{
            position: 'absolute',
            left: `${random(`dx${frame}`) * 100}%`,
            top: `${random(`dy${frame}`) * 100}%`,
            width: 3 + random(`ds${frame}`) * 5,
            height: 3 + random(`ds${frame}`) * 5,
            borderRadius: '50%',
            backgroundColor: TOKENS.colors.textPrimary,
            opacity: 0.35,
          }}
        />
      )}
      <AbsoluteFill
        style={{ boxShadow: `inset 0 0 220px rgba(43, 42, 40, ${0.35 * intensity})` }}
      />
    </AbsoluteFill>
  );
};

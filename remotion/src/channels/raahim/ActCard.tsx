import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { TOKENS } from '../../themes/raahim';
import { FilmLook } from './FilmLook';
import { HEADLINE, SANS } from './fonts';

// Filmstrip chapter card: "PART TWO" small, the title big, sprocket holes
// down both sides. Doubles as the chapter marker for YouTube timestamps.
export const ActCard: React.FC<{ part: string; title: string }> = ({ part, title }) => {
  const frame = useCurrentFrame();
  const inT = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: 'clamp' });
  const sprockets = Array.from({ length: 9 });

  return (
    <FilmLook>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: TOKENS.colors.teal }} />
      {[0, 1].map((side) => (
        <div
          key={side}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            [side ? 'right' : 'left']: 0,
            width: 110,
            backgroundColor: TOKENS.colors.backgroundDark,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            transform: `translateY(${-(frame * 2) % 120}px)`,
          }}
        >
          {sprockets.map((_, i) => (
            <div key={i} style={{ width: 48, height: 64, borderRadius: 8, backgroundColor: TOKENS.colors.background }} />
          ))}
        </div>
      ))}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          opacity: inT,
        }}
      >
        <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 56, letterSpacing: '0.3em', color: TOKENS.colors.background }}>
          {part}
        </div>
        <div
          style={{
            fontFamily: HEADLINE,
            fontSize: 150,
            color: TOKENS.colors.mustard,
            WebkitTextStroke: `5px ${TOKENS.colors.textPrimary}`,
            paintOrder: 'stroke fill',
            textAlign: 'center',
            maxWidth: 1500,
            lineHeight: 1.05,
          }}
        >
          {title}
        </div>
      </div>
    </FilmLook>
  );
};

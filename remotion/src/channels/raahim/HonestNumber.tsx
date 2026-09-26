import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { TOKENS } from '../../themes/raahim';
import { FilmLook } from './FilmLook';
import { HEADLINE, SANS } from './fonts';

// One real number, counted up and landed, with a plain-words caption.
// `peak` switches to the tomato accent — for the act's catastrophe only.
export const HonestNumber: React.FC<{
  value: number;
  prefix?: string;
  suffix?: string;
  caption: string;
  peak?: boolean;
}> = ({ value, prefix = '', suffix = '', caption, peak = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const count = interpolate(frame, [0, 40], [0, value], {
    extrapolateRight: 'clamp',
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });
  const land = spring({ frame: frame - 40, fps, config: { damping: 9, stiffness: 180 } });
  const captionIn = interpolate(frame, [48, 62], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const accent = peak ? TOKENS.colors.tomato : TOKENS.colors.mustard;
  // Size to the final string so long numbers never touch the frame edge.
  const finalText = `${prefix}${value.toLocaleString('en-US')}${suffix}`;
  const fontSize = Math.min(230, 1500 / (finalText.length * 0.68));

  return (
    <FilmLook>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 30,
        }}
      >
        <div
          style={{
            fontFamily: HEADLINE,
            fontSize,
            color: accent,
            WebkitTextStroke: `6px ${TOKENS.colors.textPrimary}`,
            paintOrder: 'stroke fill',
            transform: `scale(${1 + 0.08 * land - 0.08 * Math.min(1, land)})`,
            lineHeight: 1,
          }}
        >
          {prefix}
          {Math.round(count).toLocaleString('en-US')}
          {suffix}
        </div>
        <div
          style={{
            fontFamily: SANS,
            fontWeight: 600,
            fontSize: 64,
            color: TOKENS.colors.textPrimary,
            opacity: captionIn,
            transform: `translateY(${(1 - captionIn) * 20}px)`,
          }}
        >
          {caption}
        </div>
      </div>
    </FilmLook>
  );
};

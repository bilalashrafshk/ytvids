import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { TOKENS } from '../../themes/raahim';
import { FilmLook } from './FilmLook';
import { SANS } from './fonts';

const CHALK = '#F3EAD3';

// A chalkboard diagram that builds itself: lines of chalk text appear one by
// one, an arrow draws down, and the answer gets circled. Big and few words.
export const RaahimChalkboard: React.FC<{ lines: string[]; answer?: string }> = ({
  lines,
  answer,
}) => {
  const frame = useCurrentFrame();
  const perLine = 18;
  const arrowStart = lines.length * perLine + 6;
  const arrow = interpolate(frame, [arrowStart, arrowStart + 14], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const circle = interpolate(frame, [arrowStart + 20, arrowStart + 38], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <FilmLook>
      <div
        style={{
          position: 'absolute',
          inset: '90px 150px',
          backgroundColor: TOKENS.colors.backgroundDark,
          border: `22px solid ${TOKENS.colors.orange}`,
          borderRadius: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 18,
          fontFamily: SANS,
          color: CHALK,
        }}
      >
        {lines.map((line, i) => {
          const t = interpolate(frame, [i * perLine, i * perLine + 14], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          });
          return (
            <div
              key={line}
              style={{
                fontSize: 110,
                fontWeight: 600,
                letterSpacing: '0.04em',
                clipPath: `inset(0 ${100 - t * 100}% 0 0)`,
                opacity: 0.92,
              }}
            >
              {line}
            </div>
          );
        })}
        {answer && (
          <>
            <svg width="60" height="130" viewBox="0 0 60 130">
              <path
                d="M30 0 V110 M10 90 L30 120 L50 90"
                stroke={CHALK}
                strokeWidth="9"
                fill="none"
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray={1}
                strokeDashoffset={1 - arrow}
              />
            </svg>
            <div style={{ position: 'relative', fontSize: 110, fontWeight: 600, opacity: arrow }}>
              {answer}
              <svg
                style={{
                  position: 'absolute',
                  left: -60,
                  top: -18,
                  width: 'calc(100% + 120px)',
                  height: 'calc(100% + 36px)',
                  overflow: 'visible',
                }}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <ellipse
                  cx="50"
                  cy="50"
                  rx="48"
                  ry="46"
                  stroke={TOKENS.colors.mustard}
                  strokeWidth={2.4}
                  fill="none"
                  pathLength={1}
                  strokeDasharray={1}
                  strokeDashoffset={1 - circle}
                />
              </svg>
            </div>
          </>
        )}
      </div>
    </FilmLook>
  );
};

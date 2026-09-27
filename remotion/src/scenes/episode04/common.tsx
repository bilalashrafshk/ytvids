import React from 'react';
import { AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { TOKENS } from '../../tokens';

// Episode 04 shared pieces. Every graphic sits on its neighbouring beat still
// (softened and dimmed) so the number stays tied to the scene. Stills live in
// remotion/public/ep04/; until they exist, pass bg: null for a plain ground.
export type BgProps = { bg?: string | null };

export const C = TOKENS.colors;
export const FONT = TOKENS.typography.fontFamilySans;

export const ease = (f: number, a: number, b: number, from = 0, to = 1) =>
  interpolate(f, [a, b], [from, to], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.2, 0.8, 0.2, 1),
  });

export const Stage: React.FC<BgProps & { children: React.ReactNode; blur?: number }> = ({
  bg,
  children,
  blur = 10,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const push = interpolate(frame, [0, durationInFrames], [1.04, 1.1]);
  return (
    <AbsoluteFill style={{ backgroundColor: C.background, fontFamily: FONT }}>
      {bg ? (
        <>
          <Img
            src={staticFile(`ep04/${bg}`)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: `scale(${push})`,
              filter: `blur(${blur}px)`,
            }}
          />
          <AbsoluteFill style={{ backgroundColor: C.background, opacity: 0.72 }} />
        </>
      ) : null}
      <AbsoluteFill>{children}</AbsoluteFill>
    </AbsoluteFill>
  );
};

// Big, few labels. Never shrink to fit — shorten instead.
export const Label: React.FC<{
  children: React.ReactNode;
  size?: number;
  color?: string;
  weight?: number;
  style?: React.CSSProperties;
}> = ({ children, size = 64, color = C.textPrimary, weight = 800, style }) => (
  <div style={{ fontSize: size, fontWeight: weight, color, letterSpacing: '-0.02em', lineHeight: 1.05, ...style }}>
    {children}
  </div>
);

// A simple person figure: round head, rounded body. Height scales with `h`.
export const Person: React.FC<{ h?: number; color?: string; opacity?: number }> = ({
  h = 120,
  color = C.navy,
  opacity = 1,
}) => (
  <svg width={h * 0.42} height={h} viewBox="0 0 42 100" style={{ opacity, overflow: 'visible' }}>
    <circle cx="21" cy="14" r="12" fill={color} />
    <rect x="5" y="30" width="32" height="70" rx="15" fill={color} />
  </svg>
);

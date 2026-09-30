import React from 'react';
import { AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { TOKENS } from '../../tokens';

// Episode 05 (HDMI) shared pieces. Palette lock: every colour resolves to TOKENS.colors.*.
// One accent only (amber: the coin, the fee). Ticks and crosses use amber and navy, never green and red.
// Big and few: at most 4 live text labels per frame, never shrunk to fit; shorten the words instead.
export const C = TOKENS.colors;
export const FONT = TOKENS.typography.fontFamilySans;
export const MONO = TOKENS.typography.fontFamilyMono;

export type SceneProps = {
  frames?: number;
  durationInFrames?: number;
  scene?: string;
  cues?: number[];
  bg?: string | null; // optional neighbouring still in public/ep05/, softened behind the graphic
  plateDir?: string; // where feeder plates live (default public/ep05)
};

export const ease = (f: number, a: number, b: number, from = 0, to = 1) =>
  interpolate(f, [a, b], [from, to], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.2, 0.8, 0.2, 1),
  });

export const pop = (f: number, at: number, len = 10) =>
  interpolate(f, [at, at + len * 0.6, at + len], [0, 1.08, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

/** Frame of the i-th cue; if the beat has fewer cues, spread the missing ones across the duration. */
export const cueAt = (cues: number[] | undefined, i: number, total: number, dur: number) => {
  if (cues && cues[i] !== undefined && (cues.length > 1 || i === 0)) return cues[i];
  return Math.round((dur * 0.86 * i) / Math.max(1, total));
};

export const Stage: React.FC<{ bg?: string | null; children: React.ReactNode }> = ({ bg, children }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const push = interpolate(frame, [0, durationInFrames], [1.04, 1.09]);
  return (
    <AbsoluteFill style={{ backgroundColor: C.background, fontFamily: FONT, overflow: 'hidden' }}>
      {bg ? (
        <>
          <Img
            src={staticFile(`ep05/${bg}`)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${push})`, filter: 'blur(18px)' }}
          />
          <AbsoluteFill style={{ backgroundColor: C.background, opacity: 0.74 }} />
        </>
      ) : null}
      <AbsoluteFill>{children}</AbsoluteFill>
    </AbsoluteFill>
  );
};

/** Title top-left, source line directly under it (newsroom convention), thin rule below. */
export const Head: React.FC<{ title: string; source?: string; frame: number }> = ({ title, source, frame }) => (
  <div style={{ position: 'absolute', left: 120, top: 84, opacity: ease(frame, 0, 12), right: 120 }}>
    <div style={{ fontSize: 46, fontWeight: 800, color: C.textPrimary, letterSpacing: '-0.02em' }}>{title}</div>
    {source ? (
      <div style={{ fontSize: 26, color: C.textSecondary, marginTop: 10, fontWeight: 500 }}>{source}</div>
    ) : null}
    <div style={{ height: 3, width: 160, backgroundColor: C.amber, marginTop: 18, transform: `scaleX(${ease(frame, 2, 18)})`, transformOrigin: 'left' }} />
  </div>
);

export const Big: React.FC<{ children: React.ReactNode; size?: number; color?: string; style?: React.CSSProperties }> = ({
  children,
  size = 200,
  color = C.textPrimary,
  style,
}) => (
  <div style={{ fontSize: size, fontWeight: 900, color, letterSpacing: '-0.04em', lineHeight: 1, ...style }}>{children}</div>
);

export const Cap: React.FC<{ children: React.ReactNode; size?: number; color?: string; style?: React.CSSProperties }> = ({
  children,
  size = 46,
  color = C.textSecondary,
  style,
}) => <div style={{ fontSize: size, fontWeight: 700, color, lineHeight: 1.15, ...style }}>{children}</div>;

export const Card: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div
    style={{
      backgroundColor: C.surfaceCard,
      border: `3px solid ${C.borderCard}`,
      borderRadius: 28,
      boxShadow: '0 18px 40px rgba(15,23,42,0.10)',
      ...style,
    }}
  >
    {children}
  </div>
);

export const Coin: React.FC<{ r?: number; opacity?: number }> = ({ r = 26, opacity = 1 }) => (
  <svg width={r * 2} height={r * 2} viewBox="0 0 100 100" style={{ opacity, overflow: 'visible' }}>
    <circle cx="50" cy="50" r="46" fill={C.amber} stroke={C.textPrimary} strokeWidth="5" />
    <circle cx="50" cy="50" r="30" fill="none" stroke={C.textPrimary} strokeWidth="4" opacity="0.5" />
  </svg>
);

/** Flat TV icon (body + screen + stand). */
export const TvIcon: React.FC<{ w?: number; color?: string; screen?: string; opacity?: number }> = ({
  w = 120,
  color = C.navy,
  screen = C.background,
  opacity = 1,
}) => (
  <svg width={w} height={w * 0.75} viewBox="0 0 120 90" style={{ opacity, overflow: 'visible' }}>
    <rect x="4" y="4" width="112" height="70" rx="8" fill={color} />
    <rect x="12" y="12" width="96" height="54" rx="4" fill={screen} />
    <rect x="50" y="74" width="20" height="8" fill={color} />
    <rect x="32" y="82" width="56" height="6" rx="3" fill={color} />
  </svg>
);

export const Tick: React.FC<{ size?: number }> = ({ size = 96 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="46" fill={C.amber} />
    <path d="M28 52 L44 68 L74 32" fill="none" stroke={C.surfaceCard} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Cross: React.FC<{ size?: number }> = ({ size = 96 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="46" fill={C.navy} />
    <path d="M32 32 L68 68 M68 32 L32 68" fill="none" stroke={C.surfaceCard} strokeWidth="11" strokeLinecap="round" />
  </svg>
);

/** Rounded animated arrow between two points. */
export const Arrow: React.FC<{ x1: number; y1: number; x2: number; y2: number; progress: number; color?: string; width?: number }> = ({
  x1,
  y1,
  x2,
  y2,
  progress,
  color = C.navy,
  width = 8,
}) => {
  const ex = x1 + (x2 - x1) * progress;
  const ey = y1 + (y2 - y1) * progress;
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const hx = (a: number) => ex - Math.cos(ang + a) * 26;
  const hy = (a: number) => ey - Math.sin(ang + a) * 26;
  return (
    <svg width="1920" height="1080" style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none' }}>
      <line x1={x1} y1={y1} x2={ex} y2={ey} stroke={color} strokeWidth={width} strokeLinecap="round" />
      {progress > 0.85 ? (
        <path d={`M${ex} ${ey} L${hx(0.5)} ${hy(0.5)} M${ex} ${ey} L${hx(-0.5)} ${hy(-0.5)}`} stroke={color} strokeWidth={width} strokeLinecap="round" fill="none" />
      ) : null}
    </svg>
  );
};

/** Number formatting helpers. */
export const money = (n: number) => '$' + Math.round(n).toLocaleString('en-US');
export const fmt = (n: number) => Math.round(n).toLocaleString('en-US');

export const dur = (p: SceneProps, fallback = 150) => p.durationInFrames ?? p.frames ?? fallback;

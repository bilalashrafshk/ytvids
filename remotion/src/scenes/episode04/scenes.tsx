import React from 'react';
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { BgProps, C, FONT, Label, Person, Stage, ease } from './common';

// ---------- Six ages, six hourglasses, all the sand slows at once ----------
export const AgeingHourglasses: React.FC<BgProps> = ({ bg }) => {
  const f = useCurrentFrame();
  const { durationInFrames: d } = useVideoConfig();
  const slow = ease(f, d * 0.2, d * 0.7);
  const heights = [120, 170, 230, 240, 235, 225];
  return (
    <Stage bg={bg}>
      <div style={{ position: 'absolute', bottom: 180, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 110 }}>
        {heights.map((h, i) => {
          const drained = 0.25 + i * 0.1 + (f / d) * 0.25 * (1 - slow * 0.9);
          const stream = 10 * (1 - slow * 0.85);
          return (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26 }}>
              <svg width="90" height="140" viewBox="0 0 90 140">
                <path d="M10 6 H80 L48 70 L80 134 H10 L42 70 Z" fill="none" stroke={C.navy} strokeWidth="5" strokeLinejoin="round" />
                <path d={`M${16 + drained * 26} ${6 + drained * 60} H${74 - drained * 26} L48 66 L42 66 Z`} fill={C.lavender} />
                <rect x={45 - stream / 2} y="66" width={stream} height="60" fill={C.lavender} />
                <path d={`M14 134 H76 L${60} ${134 - drained * 40} H30 Z`} fill={C.lavender} />
              </svg>
              <Person h={h} color={C.navy} />
            </div>
          );
        })}
      </div>
    </Stage>
  );
};

// ---------- The queue: people step forward as the front one leaves ----------
const Icon: React.FC<{ k: number }> = ({ k }) => (
  <svg width="110" height="110" viewBox="0 0 110 110">
    {k === 0 ? <path d="M10 52 L55 14 L100 52 V100 H10 Z" fill={C.lavender} /> : null}
    {k === 1 ? <rect x="10" y="34" width="90" height="62" rx="10" fill={C.lavender} /> : null}
    {k === 2 ? <circle cx="55" cy="55" r="42" fill={C.lavender} /> : null}
    {k === 3 ? <path d="M12 88 L20 30 L42 58 L55 20 L68 58 L90 30 L98 88 Z" fill={C.lavender} /> : null}
  </svg>
);
export const QueueLoop: React.FC<BgProps & { mode: 'steady' | 'fast' | 'freeze' }> = ({ mode, bg }) => {
  const f = useCurrentFrame();
  const cycle = mode === 'fast' ? 22 : 40;
  const frozen = mode === 'freeze';
  const p = frozen ? Math.min(1, f / 10) * 0 : (f % cycle) / cycle;
  const step = 150;
  const doorX = 1580;
  return (
    <Stage bg={bg}>
      <div style={{ position: 'absolute', left: doorX, top: 330, width: 170, height: 380, borderRadius: 12, border: `8px solid ${C.navy}`, backgroundColor: frozen ? C.surfaceCard : C.lavenderMuted }} />
      {Array.from({ length: 10 }).map((_, i) => {
        const x = doorX - 120 - i * step + p * step;
        const leaving = i === 0 && !frozen;
        return (
          <div key={i} style={{ position: 'absolute', left: x, top: 470, opacity: leaving ? 1 - p : 1 }}>
            <Person h={240} color={C.navy} />
          </div>
        );
      })}
      {mode === 'fast' ? (
        <div style={{ position: 'absolute', left: doorX + 30, top: 200 - p * 80, opacity: 1 - p }}>
          <Icon k={Math.floor(f / cycle) % 4} />
        </div>
      ) : null}
      {frozen ? <AbsoluteFill style={{ boxShadow: `inset 0 0 ${80 + ease(f, 0, 30) * 220}px rgba(15, 23, 42, 0.45)` }} /> : null}
    </Stage>
  );
};

// ---------- The family photo that keeps getting wider ----------
export const FamilyPhotoStack: React.FC<BgProps & { phase: 'grow' | 'final'; years: number[] }> = ({ phase, years, bg }) => {
  const f = useCurrentFrame();
  const { durationInFrames: d } = useVideoConfig();
  const base = phase === 'grow' ? 3 : 4;
  const per = d / years.length;
  const ticks = Math.min(years.length, Math.floor(f / per) + 1);
  const rows = Math.min(5, base + (phase === 'grow' ? ticks - 1 : ticks));
  const width = 600 + rows * 180;
  return (
    <Stage bg={bg}>
      <div style={{ position: 'absolute', left: (1920 - width) / 2, top: 540 - rows * 62, width, height: rows * 124 + 40, border: `14px solid ${C.navy}`, borderRadius: 10, backgroundColor: C.surfaceCard, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 20, gap: 4 }}>
        {Array.from({ length: rows }).map((_, r) => {
          const isFront = r === rows - 1;
          const count = isFront ? 1 : 6 + r * 2;
          return (
            <div key={r} style={{ display: 'flex', justifyContent: 'center', gap: 14 }}>
              {Array.from({ length: count }).map((__, i) => (
                <Person key={i} h={isFront ? 90 : 110} color={isFront ? C.lavender : C.textSecondary} />
              ))}
            </div>
          );
        })}
      </div>
      <Label size={64} color={C.lavender} style={{ position: 'absolute', top: 60, width: '100%', textAlign: 'center' }}>
        {phase === 'final' && ticks === years.length ? '5 rows' : `+${years[ticks - 1]} years`}
      </Label>
    </Stage>
  );
};

// ---------- A ladder that tips over into a queue ----------
export const LadderToQueue: React.FC<BgProps & { phase: 'climb' | 'tip' }> = ({ phase, bg }) => {
  const f = useCurrentFrame();
  const { durationInFrames: d } = useVideoConfig();
  const climb = phase === 'climb' ? ease(f, 6, d * 0.9) : 1;
  const tip = phase === 'tip' ? ease(f, 4, d * 0.45) : 0;
  const door = phase === 'tip' ? ease(f, d * 0.55, d * 0.75) : 0;
  const rungs = 9;
  return (
    <Stage bg={bg}>
      <div style={{ position: 'absolute', left: 420, top: 120, width: 180, height: 820, transformOrigin: 'bottom center', transform: `rotate(${tip * 90}deg)` }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 16, height: 820, backgroundColor: C.navy, borderRadius: 8 }} />
        <div style={{ position: 'absolute', right: 0, top: 0, width: 16, height: 820, backgroundColor: C.navy, borderRadius: 8 }} />
        {Array.from({ length: rungs }).map((_, i) => (
          <div key={i} style={{ position: 'absolute', left: 0, top: 40 + i * 90, width: 180, height: 12, backgroundColor: C.navy, borderRadius: 6 }} />
        ))}
        {phase === 'climb' ? (
          <div style={{ position: 'absolute', left: 60, top: 700 - climb * 620 }}>
            <Person h={110} color={C.lavender} />
          </div>
        ) : null}
      </div>
      {phase === 'tip'
        ? Array.from({ length: 8 }).map((_, i) => (
            <div key={i} style={{ position: 'absolute', left: 560 + i * 95, top: 700, opacity: ease(f, d * 0.3 + i * 2, d * 0.45 + i * 2) }}>
              <Person h={170} color={i === 7 ? C.lavender : C.navy} />
            </div>
          ))
        : null}
      {phase === 'tip' ? (
        <div style={{ position: 'absolute', left: 1360, top: 610, width: 120, height: 330, border: `6px solid ${C.navy}`, backgroundColor: C.lavenderMuted, transformOrigin: 'left center', transform: `perspective(600px) rotateY(${-door * 70}deg)` }} />
      ) : null}
    </Stage>
  );
};

// ---------- Image-based pieces (need their Batch 1 plates in public/ep04/) ----------
export const KeyFlip: React.FC<{ plate: string }> = ({ plate }) => {
  const f = useCurrentFrame();
  const { durationInFrames: d } = useVideoConfig();
  const r = interpolate(f, [0, d], [0, 180]);
  // Scale so the rotated frame always covers the screen — no corners showing mid-turn.
  const rad = (r * Math.PI) / 180;
  const c = Math.abs(Math.cos(rad)), sn = Math.abs(Math.sin(rad));
  const cover = Math.max((1920 * c + 1080 * sn) / 1920, (1920 * sn + 1080 * c) / 1080);
  return (
    <AbsoluteFill style={{ backgroundColor: C.background, overflow: 'hidden' }}>
      <Img src={staticFile(`ep04/${plate}`)} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: `rotate(${r}deg) scale(${cover * 1.02})` }} />
    </AbsoluteFill>
  );
};

// ARCHETYPE_INFINITE_PORTAL_TUNNEL — continuous zoom toward the front door, 75f per doorway.
export const InfiniteQueueTunnel: React.FC<{ plate: string }> = ({ plate }) => {
  const f = useCurrentFrame();
  const LOOP = 75;
  const u = (f % LOOP) / LOOP;
  const layers = [0, 1, 2];
  return (
    <AbsoluteFill style={{ backgroundColor: C.background, overflow: 'hidden' }}>
      {layers.map((k) => {
        const s = Math.pow(2.4, k - u * 1);
        const wobble = Math.sin((2 * Math.PI * f) / 225) * 6;
        return (
          <AbsoluteFill key={k} style={{ transform: `translate(${wobble}px, 0) scale(${1 / s})`, transformOrigin: '50% 48%' }}>
            <Img src={staticFile(`ep04/${plate}`)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        );
      }).reverse()}
    </AbsoluteFill>
  );
};

// ARCHETYPE_WHIP_ZOOM_MONTAGE — 5f per plate with smear, then a 90f hero landing.
export const WhipZoomSeats: React.FC<{ plates: string[] }> = ({ plates }) => {
  const f = useCurrentFrame();
  const { durationInFrames: d } = useVideoConfig();
  const PER = 5;
  const cutsEnd = plates.length * PER;
  if (f < cutsEnd) {
    const i = Math.floor(f / PER);
    const local = (f % PER) / PER;
    return (
      <AbsoluteFill style={{ backgroundColor: C.background, overflow: 'hidden' }}>
        <Img src={staticFile(`ep04/${plates[i]}.png`)} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${1.25 - local * 0.2})`, filter: `blur(${(1 - local) * 6}px)` }} />
      </AbsoluteFill>
    );
  }
  const push = interpolate(f, [cutsEnd, d], [1.0, 1.1], { extrapolateRight: 'clamp' });
  return (
    <AbsoluteFill style={{ backgroundColor: C.background, overflow: 'hidden' }}>
      <Img src={staticFile(`ep04/${plates[0]}.png`)} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${push})` }} />
    </AbsoluteFill>
  );
};

// Lavender badge for CapCut Track 4 — render with a transparent background (ProRes 4444).
export const HypotheticalBadge: React.FC = () => {
  const f = useCurrentFrame();
  const { durationInFrames: d } = useVideoConfig();
  const inT = ease(f, 0, 10);
  const outT = 1 - ease(f, d - 10, d);
  return (
    <AbsoluteFill>
      <div style={{ position: 'absolute', right: 60, top: 50, opacity: inT * outT, transform: `translateY(${(1 - inT) * -20}px)`, backgroundColor: C.lavender, color: '#FFFFFF', fontFamily: FONT, fontWeight: 800, fontSize: 34, letterSpacing: '0.06em', padding: '14px 26px', borderRadius: 12 }}>
        HYPOTHETICAL SCENARIO
      </div>
    </AbsoluteFill>
  );
};

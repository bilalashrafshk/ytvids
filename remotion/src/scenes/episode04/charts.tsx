import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { BgProps, C, Label, Person, Stage, ease } from './common';

// ---------- Two bars side by side ----------
const CB: Record<string, { a: [string, number, string]; b: [string, number, string]; max: number; title: string }> = {
  'mortgage-monthly': { title: 'Each month', a: ['30-year', 1799, '$1,799'], b: ['100-year', 1504, '$1,504'], max: 2000 },
  'mortgage-interest': { title: 'Total interest', a: ['30-year', 350, '~$350K'], b: ['100-year', 1200, '~$1.2M'], max: 1300 },
  crash: { title: 'A crash at 40 costs', a: ['Then', 40, '40 years'], b: ['Now', 110, '110 years'], max: 120 },
};
export const CompareBars: React.FC<BgProps & { preset: string }> = ({ preset, bg }) => {
  const f = useCurrentFrame();
  const p = CB[preset];
  const H = 600;
  const bar = (v: number, i: number, color: string, text: string, name: string) => {
    const h = (v / p.max) * H * ease(f, 6 + i * 10, 34 + i * 10);
    return (
      <div key={name} style={{ position: 'relative', width: 340, height: H, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Label size={60} color={color} style={{ marginBottom: 18, opacity: ease(f, 26 + i * 10, 38 + i * 10) }}>{text}</Label>
        <div style={{ width: 300, height: h, backgroundColor: color, borderRadius: 14 }} />
        <Label size={44} weight={700} color={C.textSecondary} style={{ position: 'absolute', bottom: -70 }}>{name}</Label>
      </div>
    );
  };
  return (
    <Stage bg={bg}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 220, paddingBottom: 190 }}>
        {bar(p.a[1], 0, C.navy, p.a[2], p.a[0])}
        {bar(p.b[1], 1, C.lavender, p.b[2], p.b[0])}
      </div>
      <Label size={56} color={C.textSecondary} weight={700} style={{ position: 'absolute', top: 70, width: '100%', textAlign: 'center', opacity: ease(f, 0, 12) }}>{p.title}</Label>
    </Stage>
  );
};

// ---------- Population counter that plateaus ----------
export const PopulationCounter: React.FC<BgProps> = ({ bg }) => {
  const f = useCurrentFrame();
  const { durationInFrames: d } = useVideoConfig();
  const t = ease(f, 0, d * 0.75);
  const v = 8 + (19.5 - 8) * t;
  const pts = Array.from({ length: 60 }, (_, i) => {
    const u = i / 59;
    const y = 1 - Math.min(1, u * 1.6) ** 0.8;
    return `${260 + u * 1400},${880 - (1 - y) * 300}`;
  });
  const shown = Math.max(2, Math.round(60 * t));
  return (
    <Stage bg={bg}>
      <Label size={180} color={C.lavender} style={{ position: 'absolute', top: 150, width: '100%', textAlign: 'center' }}>{v.toFixed(1)} billion</Label>
      <Label size={56} color={C.textSecondary} style={{ position: 'absolute', top: 360, width: '100%', textAlign: 'center', opacity: ease(f, d * 0.75, d * 0.85) }}>then flat</Label>
      <svg width="1920" height="1080" style={{ position: 'absolute', inset: 0 }}>
        <polyline points={pts.slice(0, shown).join(' ')} fill="none" stroke={C.navy} strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Stage>
  );
};

// ---------- 1 in 4 children → 1 in 8 ----------
export const ChildrenPictogram: React.FC<BgProps> = ({ bg }) => {
  const f = useCurrentFrame();
  const swap = ease(f, 28, 48);
  const kids = [0, 1];
  return (
    <Stage bg={bg}>
      <div style={{ position: 'absolute', top: 300, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 50 }}>
        {Array.from({ length: 8 }).map((_, i) => {
          const isKid = kids.includes(i);
          const growing = i === 1; // the second child grows up: still 8 people, now 1 child
          if (!isKid) return <Person key={i} h={240} color={C.navy} />;
          if (!growing) return <Person key={i} h={140} color={C.lavender} />;
          return <Person key={i} h={140 + 100 * swap} color={swap > 0.5 ? C.navy : C.lavender} />;
        })}
      </div>
      <Label size={96} color={C.textPrimary} style={{ position: 'absolute', top: 700, width: '100%', textAlign: 'center' }}>
        {swap < 0.5 ? '1 in 4' : '1 in 8'}
      </Label>
    </Stage>
  );
};

// ---------- 500 seats; how many open each year ----------
export const SeatsGrid: React.FC<BgProps & { phase: 'build' | 'light' }> = ({ phase, bg }) => {
  const f = useCurrentFrame();
  const { durationInFrames: d } = useVideoConfig();
  const cols = 25, rows = 20, n = 500;
  const lit = (i: number) => {
    if (phase === 'build') return false;
    const h = (i * 7919) % n;
    const many = f < d * 0.5 ? h < 71 * ease(f, 0, d * 0.3) : false;
    const few = f >= d * 0.5 ? h < 12 : false;
    return many || few;
  };
  return (
    <Stage bg={bg}>
      <div style={{ position: 'absolute', left: 560, top: 150, display: 'grid', gridTemplateColumns: `repeat(${cols}, 28px)`, gap: 8 }}>
        {Array.from({ length: n }).map((_, i) => (
          <div key={i} style={{ width: 28, height: 28, borderRadius: 6, backgroundColor: lit(i) ? C.lavender : C.gridLine, opacity: phase === 'build' ? ease(f, (i % cols) * 0.8, (i % cols) * 0.8 + 10) : 1 }} />
        ))}
      </div>
      <Label size={72} style={{ position: 'absolute', left: 90, top: 440, width: 440 }}>
        {phase === 'build' ? '500 top jobs' : f < d * 0.5 ? '~70 a year' : '~12 a year'}
      </Label>
    </Stage>
  );
};

// ---------- Homes freed each year: 1 in 45 vs 1 in 115 ----------
const House: React.FC<{ on: boolean }> = ({ on }) => (
  <svg width="54" height="50" viewBox="0 0 54 50">
    <path d="M4 22 L27 4 L50 22 V46 H4 Z" fill={on ? C.lavender : C.gridLine} />
  </svg>
);
export const HomesFreedGrid: React.FC<BgProps> = ({ bg }) => {
  const f = useCurrentFrame();
  const { durationInFrames: d } = useVideoConfig();
  const N = 90;
  const year = Math.floor(ease(f, 0, d * 0.85) * 10);
  const onL = (i: number) => ((i * 37) % N) < Math.round(year * (N / 45));
  const onR = (i: number) => ((i * 37) % N) < Math.round(year * (N / 115));
  const grid = (on: (i: number) => boolean) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 54px)', gap: 14 }}>
      {Array.from({ length: N }).map((_, i) => <House key={i} on={on(i)} />)}
    </div>
  );
  return (
    <Stage bg={bg}>
      <div style={{ position: 'absolute', top: 230, width: '100%', display: 'flex', justifyContent: 'center', gap: 200 }}>
        <div>{grid(onL)}<Label size={60} style={{ marginTop: 40, textAlign: 'center' }}>1 in 45</Label></div>
        <div>{grid(onR)}<Label size={60} color={C.lavender} style={{ marginTop: 40, textAlign: 'center' }}>1 in 115</Label></div>
      </div>
    </Stage>
  );
};

// ---------- Two stacks rising together ----------
export const TwinStacks: React.FC<BgProps> = ({ bg }) => {
  const f = useCurrentFrame();
  const { durationInFrames: d } = useVideoConfig();
  const k = Math.round(ease(f, 0, d * 0.85) * 14);
  const stack = (color: string) => (
    <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: 8, height: 640, justifyContent: 'flex-start' }}>
      {Array.from({ length: k }).map((_, i) => (
        <div key={i} style={{ width: 360, height: 36, backgroundColor: color, borderRadius: 6, transform: `rotate(${(((i * 7) % 3) - 1) * 0.6}deg)` }} />
      ))}
    </div>
  );
  return (
    <Stage bg={bg}>
      <div style={{ position: 'absolute', top: 120, width: '100%', display: 'flex', justifyContent: 'center', gap: 260 }}>
        <div style={{ textAlign: 'center' }}>{stack(C.lavender)}<Label size={52} color={C.lavender} style={{ marginTop: 30 }}>Her healthy years</Label></div>
        <div style={{ textAlign: 'center' }}>{stack(C.navy)}<Label size={52} style={{ marginTop: 30 }}>Their rent</Label></div>
      </div>
    </Stage>
  );
};

// ---------- A small pot growing into a tall stack ----------
export const SavingsGrowth: React.FC<BgProps> = ({ bg }) => {
  const f = useCurrentFrame();
  const { durationInFrames: d } = useVideoConfig();
  const t = ease(f, 0, d * 0.9);
  const coins = Math.round(2 + t * t * 22);
  return (
    <Stage bg={bg}>
      <div style={{ position: 'absolute', left: 860, bottom: 220, display: 'flex', flexDirection: 'column-reverse', gap: 4 }}>
        {Array.from({ length: coins }).map((_, i) => (
          <div key={i} style={{ width: 200, height: 22, borderRadius: 11, backgroundColor: i % 2 ? C.amber : C.navy }} />
        ))}
      </div>
      <div style={{ position: 'absolute', left: 260, right: 260, bottom: 170, height: 8, backgroundColor: C.gridLine, borderRadius: 4 }}>
        <div style={{ width: `${t * 100}%`, height: 8, backgroundColor: C.lavender, borderRadius: 4 }} />
      </div>
      <Label size={56} style={{ position: 'absolute', right: 260, bottom: 70 }}>150 years</Label>
    </Stage>
  );
};

// ---------- Passbook pages flipping, rate shrinking ----------
export const PassbookRate: React.FC<BgProps & { rates: string[] }> = ({ rates, bg }) => {
  const f = useCurrentFrame();
  const { durationInFrames: d } = useVideoConfig();
  const per = d / rates.length;
  const i = Math.min(rates.length - 1, Math.floor(f / per));
  const flip = interpolate(f % per, [0, 8], [90, 0], { extrapolateRight: 'clamp' });
  const size = 200 - i * 38;
  return (
    <Stage bg={bg}>
      <div style={{ position: 'absolute', left: 610, top: 170, width: 700, height: 740, backgroundColor: C.surfaceCard, border: `4px solid ${C.borderCard}`, borderRadius: 18, transform: `perspective(1400px) rotateY(${flip}deg)`, transformOrigin: 'left center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Label size={52} color={C.textSecondary} weight={700}>rate</Label>
        <Label size={size} color={C.lavender}>{rates[i]}</Label>
      </div>
    </Stage>
  );
};

// ---------- Spreadsheet: one cell flips, then the column turns red ----------
export const SpreadsheetFlip: React.FC<BgProps & { phase: 'flip' | 'cascade' }> = ({ phase, bg }) => {
  const f = useCurrentFrame();
  const rows = 9;
  const flipT = phase === 'flip' ? ease(f, 10, 30) : 1;
  return (
    <Stage bg={bg}>
      <div style={{ position: 'absolute', left: 660, top: 90, width: 600 }}>
        {Array.from({ length: rows }).map((_, r) => {
          const hero = r === 0;
          const red = phase === 'cascade' && !hero && f > r * 5;
          return (
            <div key={r} style={{ height: 96, marginBottom: 6, borderRadius: 8, border: `3px solid ${hero ? C.lavender : C.borderCard}`, backgroundColor: red ? C.crimson : hero ? C.lavenderMuted : C.surfaceCard, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {hero ? <Label size={72} color={C.textPrimary}>{flipT < 0.5 ? '80' : '150'}</Label> : null}
            </div>
          );
        })}
      </div>
    </Stage>
  );
};

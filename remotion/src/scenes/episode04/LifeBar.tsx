import React from 'react';
import { useCurrentFrame } from 'remotion';
import { BgProps, C, Label, Stage, ease } from './common';

type Seg = { from: number; to: number; color: string; grow?: boolean; label?: string; end?: boolean };
type Row = { name?: string; segs: Seg[] };
type Preset = { max: number; rows: Row[]; marker?: { from: number; to?: number; text: string; row: number } };

const P: Record<string, Preset> = {
  'man-40': { max: 150, rows: [{ name: 'His life', segs: [{ from: 0, to: 80, color: C.navy, label: '80', end: true }, { from: 80, to: 130, color: C.lavender, grow: true, label: '130', end: true }] }] },
  marriage: { max: 150, rows: [{ name: 'Marriage', segs: [{ from: 30, to: 80, color: C.navy, label: '50 years' }, { from: 80, to: 150, color: C.lavender, grow: true, label: '120 years' }] }] },
  'career-today': { max: 150, rows: [{ name: 'Today', segs: [{ from: 20, to: 65, color: C.navy, label: 'Work' }, { from: 65, to: 80, color: C.emerald, label: '15 years off' }] }] },
  'career-65': { max: 150, rows: [{ name: 'Retire at 65', segs: [{ from: 20, to: 65, color: C.navy, label: 'Work' }, { from: 65, to: 150, color: C.crimson, grow: true, label: '85 years, no pay' }] }] },
  'career-120': { max: 150, rows: [{ name: 'Retire at 120', segs: [{ from: 20, to: 120, color: C.navy, grow: true, label: 'Work' }, { from: 120, to: 150, color: C.emerald, label: '30 years' }] }] },
  'inherit-50': { max: 150, rows: [{ name: 'Parent', segs: [{ from: 0, to: 50, color: C.navy }] }, { name: 'You', segs: [{ from: 0, to: 80, color: C.textSecondary }] }], marker: { from: 50, text: 'Inherit at 50', row: 1 } },
  'parent-150': { max: 150, rows: [{ name: 'Parent', segs: [{ from: 0, to: 50, color: C.navy }, { from: 50, to: 120, color: C.lavender, grow: true, label: '150', end: true }] }, { name: 'You', segs: [{ from: 0, to: 150, color: C.textSecondary }] }] },
  'inherit-120': { max: 150, rows: [{ name: 'Parent', segs: [{ from: 0, to: 120, color: C.navy }] }, { name: 'You', segs: [{ from: 0, to: 150, color: C.textSecondary }] }], marker: { from: 50, to: 120, text: 'Inherit at 120', row: 1 } },
  'tenure-7': { max: 40, rows: [{ name: 'Top job', segs: [{ from: 0, to: 7, color: C.navy, grow: true, label: '7 years' }] }] },
  'tenure-40': { max: 40, rows: [{ name: 'Top job', segs: [{ from: 0, to: 7, color: C.navy }, { from: 7, to: 40, color: C.lavender, grow: true, label: '40 years' }] }] },
  'old-age': { max: 150, rows: [{ name: 'Today', segs: [{ from: 0, to: 65, color: C.textSecondary }, { from: 65, to: 80, color: C.amber, label: '15 years' }] }, { name: 'At 150', segs: [{ from: 0, to: 113, color: C.textSecondary }, { from: 113, to: 150, color: C.amber, grow: true, label: '37 years' }] }] },
};

const X0 = 470, W = 1290, BAR = 88;

export const LifeBar: React.FC<BgProps & { preset: string }> = ({ preset, bg }) => {
  const f = useCurrentFrame();
  const p = P[preset];
  const x = (v: number) => X0 + (v / p.max) * W;
  const top = 540 - (p.rows.length * 190) / 2 + 60;
  return (
    <Stage bg={bg}>
      {p.rows.map((row, ri) => {
        const y = top + ri * 190;
        return (
          <div key={ri}>
            {row.name ? (
              <Label size={50} weight={700} color={C.textSecondary} style={{ position: 'absolute', left: 80, top: y + 16, width: 370, whiteSpace: 'nowrap', opacity: ease(f, 0, 12) }}>
                {row.name}
              </Label>
            ) : null}
            {row.segs.map((s, si) => {
              const t = s.grow ? ease(f, 18, 48) : ease(f, 2, 20);
              const w = (x(s.to) - x(s.from)) * t;
              return (
                <div key={si}>
                  <div style={{ position: 'absolute', left: x(s.from), top: y, width: w, height: BAR, backgroundColor: s.color, borderRadius: 10 }} />
                  {s.label ? (
                    <Label size={60} color={s.color === C.textSecondary ? C.textPrimary : s.color} style={{ position: 'absolute', left: s.end ? x(s.to) : (x(s.from) + x(s.to)) / 2, transform: `translateX(${s.end ? '-100%' : '-50%'})`, top: y - 82, opacity: s.grow ? ease(f, 40, 52) : ease(f, 14, 26), whiteSpace: 'nowrap' }}>
                      {s.label}
                    </Label>
                  ) : null}
                </div>
              );
            })}
          </div>
        );
      })}
      {p.marker ? (() => {
        const m = p.marker!;
        const v = m.to === undefined ? m.from : m.from + (m.to - m.from) * ease(f, 12, 46);
        const y = top + m.row * 190;
        return (
          <>
            <div style={{ position: 'absolute', left: x(v) - 4, top: top - 20, width: 8, height: y - top + BAR + 40, backgroundColor: C.lavender, borderRadius: 4, opacity: ease(f, 8, 16) }} />
            <Label size={56} color={C.lavender} style={{ position: 'absolute', left: Math.min(x(v) + 24, 1480), top: y + BAR + 28, whiteSpace: 'nowrap', opacity: ease(f, 10, 20) }}>
              {m.text}
            </Label>
          </>
        );
      })() : null}
    </Stage>
  );
};

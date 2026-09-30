import React from 'react';
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from 'remotion';
import { Big, C, Cap, FONT, SceneProps, dur, ease } from './common';

const plate = (p: SceneProps, name: string) => staticFile(`${p.plateDir ?? 'ep05'}/${name}`);

// ---------------------------------------------------------------- WhipZoom
// ARCHETYPE_WHIP_ZOOM_MONTAGE. Staccato 5-frame whips through eight plates, landing on the tangled knot.
// Cues: one per spoken sentence (One for the picture / Two for the sound / Another / Every one was different).
export const Ep05WhipZoom: React.FC<SceneProps> = (p) => {
  const f = useCurrentFrame();
  const d = dur(p);
  const cues = [0, 1, 2, 3].map((i) => (p.cues && p.cues[i] !== undefined ? p.cues[i] : Math.round((d * i) / 4)));
  // sequence of [startFrame, plateIndex] whips; the last plate is the landing (plate 1, the knot)
  // plates 2, 5 and 6 show mains power plugs (wrong subject), so they are skipped; repeats are mirrored
  const seq: [number, number, boolean][] = [
    [cues[0], 3, false],
    [cues[1], 4, false],
    [cues[2], 7, false],
    [cues[2] + 5, 8, false],
    [cues[3], 4, true],
    [cues[3] + 5, 3, true],
    [cues[3] + 10, 8, true],
    [cues[3] + 15, 1, false],
  ];
  let k = 0;
  seq.forEach((s, i) => {
    if (f >= s[0]) k = i;
  });
  const [start, idx, flip] = seq[k];
  const local = f - start;
  const isLanding = k === seq.length - 1;
  const whip = Math.max(0, 1 - local / 5);
  const nextStart = k + 1 < seq.length ? seq[k + 1][0] : d;
  const hold = interpolate(f, [start, nextStart], [1.0, isLanding ? 1.14 : 1.05], { extrapolateRight: 'clamp' });
  const scale = (1 + whip * 0.42) * hold;
  const dir = k % 2 === 0 ? 1 : -1;
  return (
    <AbsoluteFill style={{ backgroundColor: C.background, overflow: 'hidden' }}>
      {[-1, 0, 1].map((g) => {
        // three ghost layers approximate a 300 degree shutter smear while whipping
        const vis = g === 0 ? 1 : whip > 0.05 ? 0.28 : 0;
        return (
          <AbsoluteFill key={g} style={{ opacity: vis, transform: `translateX(${g * whip * 90 * dir}px) scale(${flip ? -scale : scale}, ${scale})` }}>
            <Img
              src={plate(p, `140_feeder_${String(idx).padStart(2, '0')}.png`)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: `blur(${whip * 9}px)` }}
            />
          </AbsoluteFill>
        );
      })}
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- Flywheel
// ARCHETYPE_3D_ORBITAL_FLYWHEEL. Four transparent cutouts orbit an ellipse; each spoken step turns the wheel a quarter.
const STEPS = ['studios back it', 'boxes use it', 'every TV needs it', 'every maker pays'];
export const Ep05Flywheel: React.FC<SceneProps> = (p) => {
  const f = useCurrentFrame();
  const d = dur(p);
  const cx = 960, cy = 520, rx = 640, ry = 250;
  const cues = [0, 1, 2, 3].map((i) => (p.cues && p.cues[i] !== undefined ? p.cues[i] : Math.round((d * 0.8 * i) / 4)));
  const turns = cues.map((c) => ease(f, c, c + 20));
  const total = turns[0] + turns[1] + turns[2] + turns[3]; // 0..4 quarter turns done
  const rot = total * 90; // degrees the wheel has turned
  const step = Math.min(3, Math.round(total) - 1); // step being spoken; -1 before the first cue
  return (
    <AbsoluteFill style={{ backgroundColor: C.background, overflow: 'hidden', fontFamily: FONT }}>
      <svg width="1920" height="1080" style={{ position: 'absolute', left: 0, top: 0 }}>
        <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke={C.borderCard} strokeWidth="10" />
        <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke={C.amber} strokeWidth="10" strokeLinecap="round" strokeDasharray={`${Math.min(1, total / 4) * 2 * Math.PI * ((rx + ry) / 2)} 99999`} />
      </svg>
      {STEPS.map((label, i) => {
        // node i is at the front (bottom, angle 90deg) when the wheel has turned i+1 quarters
        const ang = ((i * 90 + 180 - rot + 720) % 360) * (Math.PI / 180);
        const x = cx + rx * Math.cos(ang);
        const y = cy + ry * Math.sin(ang);
        const depth = (1 + Math.sin(ang)) / 2; // 1 at the front
        const lit = total >= i + 0.6;
        const isNow = step === i;
        const s = (0.62 + depth * 0.5) * (isNow ? 1.12 : 1);
        return (
          <div key={label} style={{ position: 'absolute', left: x - 170, top: y - 170, width: 340, transform: `scale(${s})`, zIndex: Math.round(depth * 10), opacity: lit ? 1 : 0.4 }}>
            <Img src={plate(p, `680_feeder_0${i + 1}.png`)} style={{ width: 340, height: 280, objectFit: 'contain' }} />
            <Cap size={46} color={isNow ? C.textPrimary : C.textSecondary} style={{ textAlign: 'center', marginTop: 4, fontWeight: 800 }}>
              {label}
            </Cap>
          </div>
        );
      })}
      {step >= 0 ? (
        <div style={{ position: 'absolute', left: 0, right: 0, top: 440, textAlign: 'center' }}>
          <Big size={130} color={C.amber}>{step + 1}</Big>
        </div>
      ) : null}
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- PortalTunnel
// ARCHETYPE_INFINITE_PORTAL_TUNNEL. Continuous zoom-out through a hallway of ports, settling on a wide shot.
export const Ep05PortalTunnel: React.FC<SceneProps> = (p) => {
  const f = useCurrentFrame();
  const d = dur(p);
  const settle = Math.round(d * 0.86);
  const prog = interpolate(f, [0, settle], [0, 1], { extrapolateRight: 'clamp', easing: (t) => 1 - Math.pow(1 - t, 2.2) });
  const wobble = Math.sin((2 * Math.PI * f) / 225) * 7 * (1 - prog);
  const scale = 2.7 - 1.7 * prog; // 2.7x down to 1.0x: never smaller than the frame, so no edges show
  // a second, slower copy fades through the middle so the corridor seems to keep going
  const scale2 = 1 + (scale - 1) * 0.42;
  const a2 = 0.35 * Math.sin(Math.PI * Math.min(1, prog * 1.6));
  return (
    <AbsoluteFill style={{ backgroundColor: C.background, overflow: 'hidden' }}>
      <AbsoluteFill style={{ transform: `translate(${wobble}px, 0) scale(${scale})`, transformOrigin: '50% 48%' }}>
        <Img src={plate(p, '2070_feeder_01.png')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </AbsoluteFill>
      <AbsoluteFill style={{ opacity: a2, transform: `translate(${wobble}px, 0) scale(${scale2})`, transformOrigin: '50% 48%' }}>
        <Img src={plate(p, '2070_feeder_01.png')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- Placeholder plates (for previews only)
// Real feeder plates from Batch 1 replace these; keep them under public/ep05/_placeholder/ so they can never
// be mistaken for the real ones. Render: npx remotion still Ep05Placeholder out.png --image-format=png --props='{"kind":"plate","i":1}'
export const Ep05Placeholder: React.FC<{ kind?: string; i?: number }> = ({ kind = 'plate', i = 1 }) => {
  const seed = (n: number) => Math.abs(Math.sin(n * 91.7 + i * 13.3));
  if (kind === 'cutout') {
    const icons: React.ReactNode[] = [
      <g key="1"><circle cx="130" cy="110" r="88" fill={C.navy} /><circle cx="130" cy="110" r="22" fill={C.amber} /><circle cx="130" cy="50" r="14" fill={C.background} /><circle cx="130" cy="170" r="14" fill={C.background} /><circle cx="70" cy="110" r="14" fill={C.background} /><circle cx="190" cy="110" r="14" fill={C.background} /></g>,
      <g key="2"><rect x="30" y="60" width="200" height="100" rx="14" fill={C.navy} /><circle cx="60" cy="110" r="12" fill={C.amber} /></g>,
      <g key="3"><rect x="24" y="30" width="212" height="130" rx="12" fill={C.navy} /><rect x="38" y="44" width="184" height="102" rx="6" fill={C.background} /><rect x="100" y="160" width="60" height="16" fill={C.navy} /></g>,
      <g key="4"><rect x="30" y="80" width="200" height="100" fill={C.navy} /><polygon points="30,80 90,30 90,80" fill={C.textSecondary} /><rect x="110" y="40" width="26" height="50" fill={C.textSecondary} /></g>,
    ];
    return (
      <AbsoluteFill>
        <svg width="1920" height="1080" viewBox="0 0 260 220" preserveAspectRatio="xMidYMid meet">{icons[(i - 1) % 4]}</svg>
      </AbsoluteFill>
    );
  }
  if (kind === 'corridor') {
    return (
      <AbsoluteFill style={{ backgroundColor: C.background }}>
        <svg width="1920" height="1080">
          {Array.from({ length: 9 }).map((_, k) => {
            const s = Math.pow(0.66, k);
            const w = 1700 * s, h = 940 * s;
            return (
              <g key={k}>
                <rect x={960 - w / 2} y={520 - h / 2} width={w} height={h} fill={k % 2 ? C.gridLine : C.surfaceCard} stroke={C.navy} strokeWidth={Math.max(2, 14 * s)} />
                <rect x={960 - w * 0.12} y={520 + h * 0.3} width={w * 0.24} height={h * 0.06} fill={C.navy} />
              </g>
            );
          })}
          <circle cx="960" cy="520" r="20" fill={C.amber} />
        </svg>
      </AbsoluteFill>
    );
  }
  const cols = [C.navy, C.textSecondary, C.textMuted, C.amber];
  return (
    <AbsoluteFill style={{ backgroundColor: i % 2 ? C.background : C.surfaceCard }}>
      <svg width="1920" height="1080">
        {Array.from({ length: 9 }).map((_, k) => {
          const y0 = 100 + seed(k) * 850, y1 = 100 + seed(k + 9) * 850;
          return (
            <path key={k} d={`M ${-40} ${y0} C ${500} ${y0 - 400 * seed(k + 2)}, ${1300} ${y1 + 400 * seed(k + 5)}, ${1960} ${y1}`} fill="none" stroke={cols[k % 4]} strokeWidth={26 + seed(k + 3) * 30} strokeLinecap="round" />
          );
        })}
        <text x="960" y="1010" textAnchor="middle" fontSize="44" fontWeight="700" fill={C.textSecondary}>PLACEHOLDER PLATE {i}</text>
      </svg>
    </AbsoluteFill>
  );
};

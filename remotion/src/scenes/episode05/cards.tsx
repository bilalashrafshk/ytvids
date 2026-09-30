import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { Big, C, Cap, Card, Coin, Cross, Head, Stage, SceneProps, Tick, TvIcon, cueAt, dur, ease, fmt, money, pop } from './common';

// ---------------------------------------------------------------- PriceCard
// Scenes: key_fee, key_prices, annual_big, annual_small, per_device_15, per_device_tiers
export const Ep05PriceCard: React.FC<SceneProps> = (p) => {
  const f = useCurrentFrame();
  const d = dur(p);
  const scene = p.scene ?? 'key_fee';
  const hero = (n: React.ReactNode, cap: React.ReactNode, sub?: React.ReactNode) => (
    <div style={{ position: 'absolute', left: 0, right: 0, top: 300, textAlign: 'center', transform: `scale(${pop(f, 6, 14)})` }}>
      <Big size={280}>{n}</Big>
      <Cap style={{ marginTop: 26 }} size={64} color={C.textPrimary}>{cap}</Cap>
      {sub ? <Cap style={{ marginTop: 14 }} size={40}>{sub}</Cap> : null}
    </div>
  );

  if (scene === 'key_fee') {
    return (
      <Stage bg={p.bg}>
        <Head frame={f} title="The lock: a yearly fee" source="Digital Content Protection LLC, licence agreement, 2024" />
        {hero(money(15000), 'a year, just to make a device with the lock')}
      </Stage>
    );
  }
  if (scene === 'key_prices') {
    const rows = [
      { v: '30¢', h: 420, sub: '10,000 keys' },
      { v: '7.5¢', h: 105, sub: '100,000 keys' },
      { v: '1.5¢', h: 21, sub: '1 million keys' },
    ];
    return (
      <Stage bg={p.bg}>
        <Head frame={f} title="Price of one key" source="Digital Content Protection LLC, licence agreement, 2024" />
        {rows.map((r, i) => {
          const at = Math.round((d * 0.72 * i) / 3) + 6;
          const grow = ease(f, at, at + 18);
          const x = 400 + i * 430;
          return (
            <div key={i} style={{ position: 'absolute', left: x, top: 240, width: 330, height: 700 }}>
              <div style={{ position: 'absolute', bottom: 110, left: 0, width: 330, height: r.h * grow, backgroundColor: i === 0 ? C.textSecondary : i === 1 ? C.textMuted : C.amber, borderRadius: 14 }} />
              <div style={{ position: 'absolute', bottom: 110 + r.h * grow + 14, left: 0, width: 330, textAlign: 'center', opacity: ease(f, at + 6, at + 16) }}>
                <Big size={112}>{r.v}</Big>
              </div>
              <div style={{ position: 'absolute', bottom: 40, left: 0, width: 330, textAlign: 'center', opacity: ease(f, at + 6, at + 16) }}>
                <Cap size={40}>{r.sub}</Cap>
              </div>
            </div>
          );
        })}
      </Stage>
    );
  }
  if (scene === 'annual_big') {
    return (
      <Stage bg={p.bg}>
        <Head frame={f} title="The yearly fee" source="As widely reported" />
        {hero(money(10000), 'a year, for a big maker')}
      </Stage>
    );
  }
  if (scene === 'annual_small') {
    return (
      <Stage bg={p.bg}>
        <Head frame={f} title="The yearly fee" source="As widely reported" />
        {hero(money(5000), 'a year, for a small maker', '+ $1 for every unit')}
      </Stage>
    );
  }
  if (scene === 'per_device_15') {
    return (
      <Stage bg={p.bg}>
        <Head frame={f} title="The fee on each device" source="As widely reported" />
        {hero('15¢', 'on every device sold')}
      </Stage>
    );
  }
  // per_device_tiers: 15 -> 5 (logo) -> 4 (logo + lock)
  const t = [
    { v: '15¢', c: 'no logo', at: 0 },
    { v: '5¢', c: 'with the logo', at: cueAt(p.cues, 0, 2, d) },
    { v: '4¢', c: 'logo + the lock', at: cueAt(p.cues, 1, 2, d) },
  ];
  const cueLogo = Math.max(cueAt(p.cues, 0, 2, d), 14);
  const cueLock = Math.max(cueAt(p.cues, 1, 2, d), cueLogo + 20);
  const at = [0, cueLogo, cueLock];
  return (
    <Stage bg={p.bg}>
      <Head frame={f} title="The fee on each device" source="As widely reported" />
      {t.map((x, i) => {
        const s = pop(f, at[i] + 4, 14);
        const dim = i < 2 && f > at[i + 1] ? 0.32 : 1;
        return (
          <div key={i} style={{ position: 'absolute', left: 190 + i * 520, top: 320, width: 460, textAlign: 'center', transform: `scale(${s})`, opacity: s === 0 ? 0 : dim }}>
            <Big size={220} color={i === 2 ? C.amber : C.textPrimary}>{x.v}</Big>
            <Cap size={52} style={{ marginTop: 22 }} color={C.textPrimary}>{x.c}</Cap>
          </div>
        );
      })}
      {[0, 1].map((i) => {
        const pr = ease(f, at[i + 1] - 10, at[i + 1] + 6);
        return (
          <div key={i} style={{ position: 'absolute', left: 620 + i * 520, top: 420, fontSize: 96, fontWeight: 900, color: C.textSecondary, opacity: pr }}>›</div>
        );
      })}
    </Stage>
  );
};

// ---------------------------------------------------------------- FeeWaterfall
// One stacked column so labels stay few. Scenes: small_yearly, small_a, small_b, giant_setup, giant
export const Ep05FeeWaterfall: React.FC<SceneProps> = (p) => {
  const f = useCurrentFrame();
  const d = dur(p);
  const scene = p.scene ?? 'small_yearly';
  const src = 'Our own math on the widely reported fees';

  if (scene === 'giant_setup') {
    const cols = 10, rows = 5;
    return (
      <Stage bg={p.bg}>
        <Head frame={f} title="A giant maker" source={src} />
        <div style={{ position: 'absolute', left: 340, top: 280, width: 1240, display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {Array.from({ length: cols * rows }).map((_, i) => (
            <div key={i} style={{ opacity: ease(f, Math.floor(i * 0.45), Math.floor(i * 0.45) + 8) }}>
              <TvIcon w={100} color={C.navy} />
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 830, textAlign: 'center', opacity: ease(f, 20, 34) }}>
          <Big size={130}>10 million TVs</Big>
        </div>
      </Stage>
    );
  }

  const giant = scene === 'giant';
  const total = giant ? 410000 : 15500;
  const H = 620;
  const scale = (n: number) => (n / total) * H;
  type Seg = { v: number; label: string; color: string; at: number };
  let segs: Seg[];
  if (giant) {
    segs = [
      { v: 10000, label: '$10,000', color: C.textSecondary, at: 4 },
      { v: 400000, label: '$400,000', color: C.amber, at: 4 },
    ];
  } else {
    const cueTotal = cueAt(p.cues, 1, 3, d);
    segs = [{ v: 5000, label: '$5,000', color: C.textSecondary, at: scene === 'small_yearly' ? 6 : -30 }];
    if (scene !== 'small_yearly') segs.push({ v: 10000, label: '$10,000', color: C.textMuted, at: scene === 'small_a' ? 8 : -30 });
    if (scene === 'small_b') segs.push({ v: 500, label: '$500', color: C.amber, at: 6 });
    void cueTotal;
  }
  let acc = 0;
  const x0 = 420;
  const bottom = 950;
  const totalCue = giant ? cueAt(p.cues, 1, 2, d) : cueAt(p.cues, 1, 3, d);
  const heroCue = giant ? cueAt(p.cues, 1, 2, d) + 4 : cueAt(p.cues, 2, 3, d);
  const showTotal = scene === 'small_b' || giant;
  return (
    <Stage bg={p.bg}>
      <Head frame={f} title={giant ? 'A giant maker, 10 million TVs' : 'A small maker, 10,000 TVs'} source={src} />
      {segs.map((s, i) => {
        const h = scale(s.v) * ease(f, s.at, s.at + 22);
        const y = bottom - scale(acc) - h;
        acc += s.v;
        return (
          <React.Fragment key={i}>
            <div style={{ position: 'absolute', left: x0, top: y, width: 300, height: h, backgroundColor: s.color, borderRadius: 10, borderTop: `4px solid ${C.background}` }} />
            <div style={{ position: 'absolute', left: x0 + 330, top: y + Math.max(0, h / 2 - 34), opacity: ease(f, s.at + 14, s.at + 26) }}>
              <Cap size={66} color={C.textPrimary}>{s.label}</Cap>
            </div>
          </React.Fragment>
        );
      })}
      {showTotal ? (
        <div style={{ position: 'absolute', left: x0, top: bottom - H - 96, width: 300, textAlign: 'center', opacity: ease(f, totalCue, totalCue + 12) }}>
          <Big size={84}>{giant ? '$410,000' : '$15,500'}</Big>
        </div>
      ) : null}
      {showTotal ? (
        <div style={{ position: 'absolute', left: 1180, top: 380, textAlign: 'left', transform: `scale(${pop(f, heroCue, 16)})`, transformOrigin: 'left center' }}>
          <Big size={260} color={C.amber}>{giant ? '4¢' : '$1.55'}</Big>
          <Cap size={64} color={C.textPrimary} style={{ marginTop: 18 }}>{giant ? 'about, on every TV' : 'on every TV'}</Cap>
        </div>
      ) : null}
      {!showTotal && scene === 'small_a' ? (
        <div style={{ position: 'absolute', left: 1160, top: 420, opacity: ease(f, 24, 36) }}>
          <Cap size={58} color={C.textPrimary}>$1 on each of</Cap>
          <Cap size={58} color={C.textPrimary}>10,000 TVs</Cap>
        </div>
      ) : null}
    </Stage>
  );
};

// ---------------------------------------------------------------- SplitCompare
// Scenes: forty_times, dp_vs_hdmi, four_k_lost, four_k
export const Ep05SplitCompare: React.FC<SceneProps> = (p) => {
  const f = useCurrentFrame();
  const d = dur(p);
  const scene = p.scene ?? 'forty_times';

  if (scene === 'four_k_lost' || scene === 'four_k') {
    const row2 = scene === 'four_k' ? pop(f, 10, 14) : 0;
    return (
      <Stage bg={p.bg}>
        <Head frame={f} title="4K at 120 frames a second" source="The Register, Phoronix, Tom's Hardware (2024)" />
        <div style={{ position: 'absolute', left: 200, top: 380, display: 'flex', alignItems: 'center', gap: 60, transform: `scale(${pop(f, scene === 'four_k' ? -30 : 8, 14)})`, transformOrigin: 'left center' }}>
          <Cross size={150} />
          <Big size={84}>HDMI on Linux, with an AMD card</Big>
        </div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 640, textAlign: 'center', opacity: row2 === 0 ? 0 : 1, transform: `scale(${row2})` }}>
          <Big size={200} color={C.amber}>4K · 120</Big>
        </div>
      </Stage>
    );
  }

  const cfg =
    scene === 'dp_vs_hdmi'
      ? { title: 'Cost of the plug, per product', src: 'Via Licensing Alliance; as widely reported', lt: 'Rival plug', lv: '20¢', lr: 20, rt: 'Lowest HDMI fee', rv: '4¢', rr: 4, badge: '5×', note: 'a patent group asks' }
      : { title: 'What each maker pays, per TV', src: 'Our own math on the widely reported fees', lt: 'Garage', lv: '$1.55', lr: 155, rt: 'Factory', rv: '4¢', rr: 4, badge: 'nearly 40×', note: 'our own math' };
  const H = 520;
  const lh = H;
  const rh = Math.max(14, (cfg.rr / cfg.lr) * H);
  const badgeAt = cueAt(p.cues, 0, 1, d) + Math.round(d * 0.5);
  return (
    <Stage bg={p.bg}>
      <Head frame={f} title={cfg.title} source={cfg.src} />
      {[
        { x: 260, h: lh, t: cfg.lt, v: cfg.lv, at: 6, color: C.textSecondary },
        { x: 1060, h: rh, t: cfg.rt, v: cfg.rv, at: 22, color: C.amber },
      ].map((b, i) => {
        const h = b.h * ease(f, b.at, b.at + 24);
        return (
          <React.Fragment key={i}>
            <div style={{ position: 'absolute', left: b.x, bottom: 210, width: 480, height: h, backgroundColor: b.color, borderRadius: 12 }} />
            <div style={{ position: 'absolute', left: b.x, width: 480, bottom: 210 + h + 16, textAlign: 'center', opacity: ease(f, b.at + 14, b.at + 26) }}>
              <Big size={132} color={i === 1 ? C.amber : C.textPrimary}>{b.v}</Big>
            </div>
            <div style={{ position: 'absolute', left: b.x, width: 480, bottom: 120, textAlign: 'center', opacity: ease(f, b.at + 6, b.at + 18) }}>
              <Cap size={56} color={C.textPrimary}>{b.t}</Cap>
            </div>
          </React.Fragment>
        );
      })}
      <div style={{ position: 'absolute', left: 810, top: 400, width: 300, textAlign: 'center', transform: `scale(${pop(f, badgeAt, 16)})` }}>
        <Card style={{ padding: '22px 12px' }}>
          <Big size={cfg.badge.length > 3 ? 74 : 110} color={C.amber}>{cfg.badge}</Big>
        </Card>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 44, textAlign: 'center', opacity: ease(f, badgeAt + 10, badgeAt + 24) }}>
        <Cap size={40}>{cfg.note}</Cap>
      </div>
    </Stage>
  );
};

// ---------------------------------------------------------------- CounterCard
// Scenes: devices_2017, devices_times, fourteen
export const Ep05CounterCard: React.FC<SceneProps> = (p) => {
  const f = useCurrentFrame();
  const d = dur(p);
  const scene = p.scene ?? 'devices_2017';
  if (scene === 'devices_times') {
    const at = Math.round(d * 0.42);
    return (
      <Stage bg={p.bg}>
        <Head frame={f} title="One year of fees, 2017" source="Our own math" />
        <div style={{ position: 'absolute', left: 0, right: 0, top: 290, textAlign: 'center', transform: `scale(${pop(f, 4, 14)})` }}>
          <Cap size={70} color={C.textPrimary}>× 4¢ to 15¢ on each</Cap>
        </div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 470, textAlign: 'center', transform: `scale(${pop(f, at, 16)})` }}>
          <Big size={200} color={C.amber}>$36M – $135M</Big>
          <Cap size={54} style={{ marginTop: 22 }}>about, in a single year</Cap>
        </div>
      </Stage>
    );
  }
  const isFee = scene === 'fourteen';
  const target = isFee ? 14000000 : 900;
  const run = ease(f, 6, Math.round(d * 0.7));
  const val = Math.round(target * run);
  return (
    <Stage bg={p.bg}>
      <Head frame={f} title={isFee ? 'The settlement' : 'HDMI devices shipped in 2017'} source={isFee ? 'HDMI Licensing Administrator statement; law firm summary' : 'HDMI Licensing Administrator press release, 2018'} />
      <div style={{ position: 'absolute', left: 0, right: 0, top: 330, textAlign: 'center' }}>
        {!isFee ? <Cap size={64} color={C.textPrimary} style={{ marginBottom: 6 }}>nearly</Cap> : null}
        <Big size={isFee ? 260 : 230} color={isFee ? C.amber : C.textPrimary} style={{ fontVariantNumeric: 'tabular-nums' }}>
          {isFee ? money(val) : `${fmt(val)} million`}
        </Big>
        <Cap size={62} color={C.textPrimary} style={{ marginTop: 34, opacity: ease(f, 24, 40) }}>
          {isFee ? 'agreed a week before the trial' : 'devices, in one year'}
        </Cap>
      </div>
    </Stage>
  );
};

// ---------------------------------------------------------------- Staircase
// Scenes: a (2009), b (2011 and 2021)
export const Ep05Staircase: React.FC<SceneProps> = (p) => {
  const f = useCurrentFrame();
  const d = dur(p);
  const scene = p.scene ?? 'a';
  const steps = [
    { year: '2009', v: 0.6, l: '600 million' },
    { year: '2011', v: 2, l: '2 billion' },
    { year: '2021', v: 10, l: 'nearly 10 billion' },
  ];
  const H = 640;
  const px = (v: number) => (v / 10) * H;
  const show = scene === 'a' ? [0] : [0, 1, 2];
  return (
    <Stage bg={p.bg}>
      <Head frame={f} title="HDMI devices shipped, all time" source="HDMI Licensing Administrator figures, as reported" />
      {show.map((i) => {
        const s = steps[i];
        const at = scene === 'a' ? 8 : i === 0 ? -30 : cueAt(p.cues, i - 1, 2, d) + 4 + (i === 2 ? 0 : 0);
        const atFix = scene === 'a' ? 8 : i === 0 ? -30 : Math.max(6, cueAt(p.cues, i - 1, 2, d) + 4);
        void at;
        const h = px(s.v) * ease(f, atFix, atFix + 20);
        return (
          <React.Fragment key={s.year}>
            <div style={{ position: 'absolute', left: 300 + i * 480, bottom: 150, width: 400, height: h, backgroundColor: i === 2 ? C.amber : i === 1 ? C.textMuted : C.textSecondary, borderRadius: 12 }} />
            <div style={{ position: 'absolute', left: 300 + i * 480, bottom: 150 + h + 14, width: 400, textAlign: 'center', opacity: ease(f, atFix + 12, atFix + 24) }}>
              <Big size={i === 2 ? 64 : 84}>{s.l}</Big>
            </div>
            <div style={{ position: 'absolute', left: 300 + i * 480, bottom: 70, width: 400, textAlign: 'center', opacity: ease(f, atFix + 4, atFix + 16) }}>
              <Cap size={54} color={C.textPrimary}>{s.year}</Cap>
            </div>
          </React.Fragment>
        );
      })}
    </Stage>
  );
};

// ---------------------------------------------------------------- RangeBar
export const Ep05RangeBar: React.FC<SceneProps> = (p) => {
  const f = useCurrentFrame();
  const d = dur(p);
  const x0 = 220, w = 1480, y = 660;
  const lo = x0 + (0.6 / 2) * w;
  const bandAt = cueAt(p.cues, 0, 2, d) + 6;
  const markAt = Math.round(d * 0.7);
  const band = ease(f, bandAt, bandAt + 26);
  return (
    <Stage bg={p.bg}>
      <Head frame={f} title="Fees since 2002, all devices" source="Our own math: about 14 billion devices × 4¢ to 15¢" />
      <div style={{ position: 'absolute', left: 0, right: 0, top: 290, textAlign: 'center', transform: `scale(${pop(f, 4, 14)})` }}>
        <Big size={190}>$0.6 – $2 billion</Big>
        <Cap size={56} color={C.textPrimary} style={{ marginTop: 20 }}>in 23 years, roughly</Cap>
      </div>
      <div style={{ position: 'absolute', left: x0, top: y, width: w, height: 70, backgroundColor: C.gridLine, borderRadius: 35 }} />
      <div style={{ position: 'absolute', left: lo, top: y, width: (w - (lo - x0)) * band, height: 70, backgroundColor: C.amber, borderRadius: 35, opacity: 0.85 }} />
      <div style={{ position: 'absolute', left: lo - 6, top: y - 24, width: 12, height: 118, backgroundColor: C.textPrimary, borderRadius: 6, opacity: ease(f, markAt, markAt + 8) }} />
      <div style={{ position: 'absolute', left: lo - 140, top: y + 122, width: 280, textAlign: 'center', opacity: ease(f, markAt + 4, markAt + 16) }}>
        <Cap size={46} color={C.textPrimary}>most likely here</Cap>
      </div>
    </Stage>
  );
};

// ---------------------------------------------------------------- ReceiptDots
export const Ep05ReceiptDots: React.FC<SceneProps> = (p) => {
  const f = useCurrentFrame();
  const d = dur(p);
  const t1 = Math.round(d * 0.34), t2 = Math.round(d * 0.62);
  const receipt = interpolate(f, [0, 8, t1, t2], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const zoom = interpolate(f, [t1, t2], [1, 0.42], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const grid = ease(f, t1 + 8, t2 + 6);
  const N = 100, S = 7.2;
  const sz = N * S;
  const pulse = 1 + 0.35 * Math.sin(f / 4) * ease(f, t2, t2 + 6);
  return (
    <Stage bg={p.bg}>
      <div style={{ position: 'absolute', left: 560, top: 300, width: 800, opacity: receipt, transform: `scale(${1 - (1 - zoom) * 0.35})`, transformOrigin: '50% 40%' }}>
        <Card style={{ padding: '46px 54px', borderRadius: 10 }}>
          <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 56, color: C.textPrimary, lineHeight: 1.7 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>TV</span><span>$400.00</span></div>
            <div style={{ borderTop: `3px dashed ${C.borderCard}`, marginTop: 8, paddingTop: 8, display: 'flex', justifyContent: 'space-between' }}><span>TOTAL</span><span>$400.00</span></div>
          </div>
        </Card>
      </div>
      <div style={{ position: 'absolute', left: (1920 - sz) / 2, top: 70, width: sz, height: sz, opacity: grid }}>
        <svg width={sz} height={sz}>
          <defs>
            <pattern id="dots" width={S} height={S} patternUnits="userSpaceOnUse">
              <circle cx={S / 2} cy={S / 2} r={S * 0.28} fill={C.textMuted} />
            </pattern>
          </defs>
          <rect width={sz} height={sz} fill="url(#dots)" />
          <circle cx={S * 50 + S / 2} cy={S * 50 + S / 2} r={S * 0.9 * pulse} fill={C.amber} stroke={C.textPrimary} strokeWidth={1.2} />
        </svg>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 810, textAlign: 'center', opacity: ease(f, t2 + 6, t2 + 20) }}>
        <Big size={112}>$1 in every $10,000</Big>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 940, textAlign: 'center', opacity: ease(f, t2 + 12, t2 + 26) }}>
        <Cap size={40}>4 cents on a $400 TV</Cap>
      </div>
    </Stage>
  );
};

import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { Arrow, Big, C, Cap, Card, Coin, Head, Stage, SceneProps, TvIcon, cueAt, dur, ease, pop } from './common';

/** The flat plug with two clipped corners. */
export const PlugIcon: React.FC<{ w?: number; color?: string }> = ({ w = 180, color = C.navy }) => (
  <svg width={w} height={w * 0.62} viewBox="0 0 100 62">
    <path d="M4 4 H96 V34 L82 58 H18 L4 34 Z" fill={color} />
    <rect x="16" y="14" width="68" height="12" rx="3" fill={C.background} opacity="0.85" />
  </svg>
);

// ---------------------------------------------------------------- FeeFlow
// Scenes: a (coins from TVs into one box), b (the box passes them to seven founders)
export const Ep05FeeFlow: React.FC<SceneProps> = (p) => {
  const f = useCurrentFrame();
  const d = dur(p);
  const scene = p.scene ?? 'a';
  const N = 12;
  if (scene === 'a') {
    const bx = 1240, by = 560;
    return (
      <Stage bg={p.bg}>
        <Head frame={f} title="Where the fee goes" source="hdmi.org" />
        {Array.from({ length: N }).map((_, i) => {
          const col = i % 3, row = Math.floor(i / 3);
          const x = 130 + col * 210, y = 250 + row * 190;
          return (
            <div key={i} style={{ position: 'absolute', left: x, top: y, opacity: ease(f, i * 2, i * 2 + 8) }}>
              <TvIcon w={150} color={C.textSecondary} />
            </div>
          );
        })}
        {Array.from({ length: N * 2 }).map((_, k) => {
          const i = k % N;
          const col = i % 3, row = Math.floor(i / 3);
          const sx = 130 + col * 210 + 150, sy = 250 + row * 190 + 56;
          const t = ((f - 10 - Math.floor(k / N) * 30 - i * 3) / 60) % 1;
          if (f < 10 + i * 3 + Math.floor(k / N) * 30) return null;
          const u = t < 0 ? t + 1 : t;
          const x = sx + (bx - sx) * u, y = sy + (by - sy) * u - Math.sin(u * Math.PI) * 60;
          return (
            <div key={k} style={{ position: 'absolute', left: x - 18, top: y - 18 }}>
              <Coin r={18} opacity={Math.min(1, u * 6, (1 - u) * 6)} />
            </div>
          );
        })}
        <div style={{ position: 'absolute', left: bx, top: by - 130, width: 560, transform: `scale(${pop(f, 4, 16)})`, transformOrigin: 'left center' }}>
          <Card style={{ padding: '38px 30px', textAlign: 'center' }}>
            <Big size={60}>HDMI Licensing Administrator</Big>
          </Card>
        </div>
        <div style={{ position: 'absolute', left: 520, top: 960, opacity: ease(f, 22, 36) }}>
          <Cap size={56} color={C.textPrimary}>the fee, from every TV</Cap>
        </div>
      </Stage>
    );
  }
  // scene b: box on the left, coins out to seven founder badges on an arc
  const cx = 470, cy = 560;
  const pts = Array.from({ length: 7 }).map((_, i) => {
    return { x: 1400 + Math.sin(i * 0.9) * 40, y: 250 + i * 100 };
  });
  return (
    <Stage bg={p.bg}>
      <Head frame={f} title="Where the fee goes" source="hdmi.org" />
      <div style={{ position: 'absolute', left: 150, top: cy - 130, width: 560 }}>
        <Card style={{ padding: '38px 30px', textAlign: 'center' }}>
          <Big size={60}>HDMI Licensing Administrator</Big>
        </Card>
      </div>
      {pts.map((pt, i) => {
        const at = 6 + i * Math.round(d * 0.09);
        const s = pop(f, at, 12);
        const t = ease(f, at, at + 24);
        return (
          <React.Fragment key={i}>
            <div style={{ position: 'absolute', left: pt.x - 44, top: pt.y - 44, transform: `scale(${s})`, opacity: s === 0 ? 0 : 1 }}>
              <svg width={88} height={88}>
                <circle cx="44" cy="44" r="40" fill={C.navy} stroke={C.amber} strokeWidth="8" />
              </svg>
            </div>
            {t > 0 && t < 1 ? (
              <div style={{ position: 'absolute', left: cx + 240 + (pt.x - 44 - cx - 240) * t - 16, top: cy + (pt.y - cy) * t - 16 }}>
                <Coin r={16} />
              </div>
            ) : null}
          </React.Fragment>
        );
      })}
      <div style={{ position: 'absolute', left: 150, top: 800, opacity: ease(f, 8, 22) }}>
        <Cap size={54} color={C.textPrimary}>collects for</Cap>
      </div>
      <div style={{ position: 'absolute', left: 1200, top: 985, opacity: ease(f, Math.round(d * 0.6), Math.round(d * 0.6) + 14) }}>
        <Cap size={54} color={C.textPrimary}>seven founders</Cap>
      </div>
    </Stage>
  );
};

// ---------------------------------------------------------------- NameBadges
const NAMES = ['Hitachi', 'Panasonic', 'Philips', 'Silicon Image', 'Sony', 'Thomson', 'Toshiba'];
export const Ep05NameBadges: React.FC<SceneProps> = (p) => {
  const f = useCurrentFrame();
  const d = dur(p);
  const cues = NAMES.map((_, i) => (p.cues && p.cues[i] !== undefined ? p.cues[i] : Math.round((d * i) / 7)));
  let k = 0;
  cues.forEach((c, i) => {
    if (f >= c) k = i;
  });
  const local = f - cues[k];
  const slam = interpolate(local, [0, 3, 8], [1.5, 0.96, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
  return (
    <Stage bg={p.bg}>
      <Head frame={f} title="Seven rivals, one plug" source="hdmi.org, December 2002" />
      <div style={{ position: 'absolute', left: 260, right: 260, top: 340, textAlign: 'center', transform: `scale(${slam})` }}>
        <Card style={{ padding: '70px 40px' }}>
          <Big size={170}>{NAMES[k]}</Big>
        </Card>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 850, display: 'flex', justifyContent: 'center', gap: 30 }}>
        {NAMES.map((_, i) => (
          <svg key={i} width={54} height={54}>
            <circle cx="27" cy="27" r="22" fill={i <= k ? C.amber : C.gridLine} stroke={C.textPrimary} strokeWidth="4" opacity={i <= k ? 1 : 0.7} />
          </svg>
        ))}
      </div>
    </Stage>
  );
};

// ---------------------------------------------------------------- BackerStack
// Scenes: studios (four cards fan round the plug), cable (satellite and cable cards)
export const Ep05BackerStack: React.FC<SceneProps> = (p) => {
  const f = useCurrentFrame();
  const d = dur(p);
  const scene = p.scene ?? 'studios';
  const cards = scene === 'studios' ? ['Fox', 'Universal', 'Warner Brothers', 'Disney'] : ['Satellite', 'Cable'];
  const n = cards.length;
  return (
    <Stage bg={p.bg}>
      <Head frame={f} title="Who backed it" source="hdmi.org press release, 2002" />
      <div style={{ position: 'absolute', left: 750, top: 300, transform: `scale(${pop(f, 0, 12)})` }}>
        <PlugIcon w={420} />
      </div>
      {cards.map((c, i) => {
        const at = 6 + Math.round((d * 0.66 * i) / n);
        const s = pop(f, at, 14);
        const spread = n === 4 ? [-1.5, -0.5, 0.5, 1.5][i] : [-1, 1][i];
        const x = 960 + spread * 400 - 190;
        const y = 780 + Math.abs(spread) * 34 + (n === 4 ? 0 : 20);
        const rot = spread * 5;
        return (
          <div key={c} style={{ position: 'absolute', left: x, top: y - 60, width: 380, transform: `rotate(${rot}deg) scale(${s})`, opacity: s === 0 ? 0 : 1 }}>
            <Card style={{ padding: '46px 18px', textAlign: 'center' }}>
              <Big size={c.length > 9 ? 50 : 64}>{c}</Big>
            </Card>
          </div>
        );
      })}
    </Stage>
  );
};

// ---------------------------------------------------------------- OrgDiagram
// Scenes: org_a (a second body appears), org_b (contract vs rules)
export const Ep05OrgDiagram: React.FC<SceneProps> = (p) => {
  const f = useCurrentFrame();
  const d = dur(p);
  const scene = p.scene ?? 'org_a';
  const a = scene === 'org_a';
  const forumAt = a ? Math.max(10, cueAt(p.cues, 0, 2, d) + 10) : -30;
  const cueA = a ? 0 : Math.max(0, cueAt(p.cues, 0, 2, d));
  const cueB = a ? 0 : Math.max(cueA + 20, cueAt(p.cues, 1, 2, d));
  const boxes = [
    { x: 150, y: 400, w: 500, t: 'The founders', s: '' },
    { x: 1080, y: 250, w: 660, t: 'HDMI Licensing Administrator', s: 'the contract' },
    { x: 1080, y: 640, w: 660, t: 'HDMI Forum', s: 'the rules' },
  ];
  const hiTop = !a && f >= cueA && f < cueB;
  const hiBot = !a && f >= cueB;
  return (
    <Stage bg={p.bg}>
      <Head frame={f} title="Two bodies, one set of founders" source="hdmi.org; founded 2011" />
      <Arrow x1={660} y1={480} x2={1070} y2={330} progress={ease(f, 6, 24)} color={C.textSecondary} />
      <Arrow x1={660} y1={520} x2={1070} y2={720} progress={ease(f, forumAt, forumAt + 20)} color={C.textSecondary} />
      {boxes.map((b, i) => {
        const at = i === 0 ? 0 : i === 1 ? 8 : forumAt;
        const s = pop(f, at, 14);
        const hi = (i === 1 && hiTop) || (i === 2 && hiBot);
        return (
          <div key={i} style={{ position: 'absolute', left: b.x, top: b.y, width: b.w, transform: `scale(${s})`, opacity: s === 0 ? 0 : 1, transformOrigin: 'left center' }}>
            <Card style={{ padding: '34px 26px', textAlign: 'center', borderColor: hi ? C.amber : C.borderCard, borderWidth: hi ? 8 : 3 }}>
              <Big size={i === 0 ? 62 : 52}>{b.t}</Big>
              {!a && b.s ? (
                <Cap size={54} color={hi ? C.amber : C.textSecondary} style={{ marginTop: 16, opacity: (i === 1 && f >= cueA) || (i === 2 && f >= cueB) ? 1 : 0.15 }}>
                  {b.s}
                </Cap>
              ) : null}
            </Card>
          </div>
        );
      })}
    </Stage>
  );
};

// ---------------------------------------------------------------- FeeChain
export const Ep05FeeChain: React.FC<SceneProps> = (p) => {
  const f = useCurrentFrame();
  const d = dur(p);
  const cQ = Math.max(4, cueAt(p.cues, 0, 2, d));
  const cA = Math.max(cQ + 30, cueAt(p.cues, 1, 2, d));
  const chipHi = f >= cA;
  return (
    <Stage bg={p.bg}>
      <Head frame={f} title="Who pays the fee?" source="HDMI Licensing Administrator statement, Dec 2025" />
      {[
        { x: 200, t: 'Chip maker', hi: chipHi },
        { x: 1120, t: 'TV maker', hi: false },
      ].map((b, i) => {
        const s = pop(f, 4 + i * 8, 14);
        return (
          <div key={i} style={{ position: 'absolute', left: b.x, top: 520, width: 600, transform: `scale(${s})`, opacity: s === 0 ? 0 : 1 }}>
            <Card style={{ padding: '58px 20px', textAlign: 'center', borderColor: b.hi ? C.amber : C.borderCard, borderWidth: b.hi ? 10 : 3 }}>
              <Big size={80}>{b.t}</Big>
            </Card>
          </div>
        );
      })}
      <Arrow x1={800} y1={610} x2={1110} y2={610} progress={ease(f, 12, 30)} color={C.textSecondary} />
      <div style={{ position: 'absolute', left: 0, right: 0, top: 300, textAlign: 'center', transform: `scale(${pop(f, cQ, 14)})` }}>
        <Big size={96}>Who owes the fee?</Big>
      </div>
      {chipHi ? (
        <div style={{ position: 'absolute', left: 430, top: 400, transform: `scale(${pop(f, cA, 12)})` }}>
          <Coin r={48} />
        </div>
      ) : null}
    </Stage>
  );
};

// ---------------------------------------------------------------- WallBricks
export const Ep05WallBricks: React.FC<SceneProps> = (p) => {
  const f = useCurrentFrame();
  const d = dur(p);
  const words = ['PATENTS', 'NAME', 'LOCK', 'COURT'];
  const shade = [C.navy, C.textSecondary, C.navy, C.textSecondary];
  return (
    <Stage bg={p.bg}>
      <Head frame={f} title="The wall" source="" />
      {words.map((w, i) => {
        const at = 6 + Math.round((d * 0.62 * i) / 4);
        const s = ease(f, at, at + 12);
        const y = 830 - i * 170;
        return (
          <div key={w} style={{ position: 'absolute', left: 560, top: y - (1 - s) * 90, width: 800, height: 150, opacity: s, backgroundColor: shade[i], borderRadius: 14, border: `4px solid ${C.background}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Big size={90} color={C.surfaceCard}>{w}</Big>
          </div>
        );
      })}
      <div style={{ position: 'absolute', left: 250, top: 880, opacity: ease(f, 2, 12) }}>
        <Coin r={40} />
      </div>
      <div style={{ position: 'absolute', left: 190, top: 980, opacity: ease(f, 8, 20) }}>
        <Cap size={40}>the cheap fee</Cap>
      </div>
    </Stage>
  );
};

// ---------------------------------------------------------------- QuoteCard
// Scenes: quote_a, quote_b (typewriter). Real message text, shown as a card.
const Q_A = ['The HDMI Forum has rejected our proposal unfortunately.', 'rejected'];
const Q_B = ['At this time an open source HDMI 2.1 implementation is not possible without running afoul of the HDMI Forum requirements.', 'not possible'];
export const Ep05QuoteCard: React.FC<SceneProps> = (p) => {
  const f = useCurrentFrame();
  const d = dur(p);
  const scene = p.scene ?? 'quote_a';
  const [text, key] = scene === 'quote_a' ? Q_A : Q_B;
  const shown = Math.floor(text.length * ease(f, 8, Math.round(d * 0.82)));
  const typed = text.slice(0, shown);
  const idx = text.indexOf(key);
  const hi = Math.max(0, Math.min(key.length, shown - idx));
  const before = typed.slice(0, Math.min(idx, shown));
  const mid = shown > idx ? text.slice(idx, idx + hi) : '';
  const after = shown > idx + key.length ? text.slice(idx + key.length, shown) : '';
  return (
    <Stage bg={p.bg}>
      <Head frame={f} title="An AMD engineer, early 2024" source="The Register, 2 March 2024" />
      <div style={{ position: 'absolute', left: 170, right: 170, top: 350 }}>
        <Card style={{ padding: '70px 84px' }}>
          {scene === 'quote_b' ? (
            <div style={{ fontSize: 40, color: C.textMuted, fontWeight: 600, marginBottom: 34, lineHeight: 1.25 }}>{Q_A[0]}</div>
          ) : null}
          <div style={{ fontSize: scene === 'quote_a' ? 78 : 64, fontWeight: 700, color: C.textPrimary, lineHeight: 1.28, minHeight: 300 }}>
            “{before}
            <span style={{ background: `linear-gradient(${C.amber}, ${C.amber}) no-repeat 0 92% / 100% 14px`, paddingBottom: 2 }}>{mid}</span>
            {after}
            {shown < text.length ? <span style={{ opacity: Math.floor(f / 8) % 2 ? 0 : 1, color: C.amber }}>▍</span> : '”'}
          </div>
        </Card>
      </div>
    </Stage>
  );
};

// ---------------------------------------------------------------- Newsprint
// Real page excerpts with a highlighter sweep. Scenes: logo_rules, docket, finding
export const Ep05Newsprint: React.FC<SceneProps> = (p) => {
  const f = useCurrentFrame();
  const d = dur(p);
  const scene = p.scene ?? 'logo_rules';
  const docs: Record<string, { head: string; sub: string; pre: string; hi: string; post: string; size: number }> = {
    logo_rules: {
      head: 'HDMI Adopted Trademark and Logo Usage Guidelines',
      sub: 'May 2022, section 1.1.1',
      pre: 'In order to encourage the use of the HDMI Stylized Logo, ',
      hi: 'you shall receive a discounted royalty rate',
      post: ' under the Adopter Agreement if you reasonably incorporate the HDMI Stylized Logo on your HDMI Licensed Products, related documentation, and promotional materials.',
      size: 54,
    },
    docket: {
      head: 'United States District Court, Northern District of California',
      sub: 'Case No. 22-cv-06947',
      pre: '',
      hi: 'HDMI LICENSING ADMINISTRATOR, INC. v. AVAILINK INC.',
      post: '',
      size: 76,
    },
    finding: {
      head: 'Court order, 31 December 2025',
      sub: 'as quoted by HDMI Licensing Administrator’s lawyers',
      pre: '“… the undisputed facts demonstrate that: (1) the Adopter Agreement ',
      hi: 'did not harm competition',
      post: ' …”',
      size: 66,
    },
  };
  const c = docs[scene];
  const sweepAt = 26;
  const sweep = ease(f, sweepAt, Math.min(d - 8, sweepAt + Math.round(d * 0.4)));
  return (
    <Stage bg={p.bg}>
      <div style={{ position: 'absolute', left: 150, right: 150, top: 230 }}>
        <Card style={{ padding: '58px 80px', borderRadius: 14, transform: `scale(${1 + f * 0.00025})`, transformOrigin: '50% 30%' }}>
          <div style={{ fontSize: 40, fontWeight: 800, color: C.textPrimary, letterSpacing: '0.01em' }}>{c.head}</div>
          <div style={{ fontSize: 34, color: C.textSecondary, marginTop: 8, fontWeight: 600, paddingBottom: 30, borderBottom: `4px solid ${C.gridLine}` }}>{c.sub}</div>
          <div style={{ marginTop: 44, fontSize: c.size, fontWeight: 600, color: C.textPrimary, lineHeight: 1.36 }}>
            {c.pre}
            <span style={{ background: `linear-gradient(${C.amber}, ${C.amber}) no-repeat 0 60% / ${sweep * 100}% 92%`, padding: '0 4px', boxDecorationBreak: 'clone' as any }}>{c.hi}</span>
            {c.post}
          </div>
        </Card>
      </div>
    </Stage>
  );
};

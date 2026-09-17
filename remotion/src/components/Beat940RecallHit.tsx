import React from 'react';
import { interpolate, useCurrentFrame, AbsoluteFill } from 'remotion';
import { TOKENS } from '../tokens';

export const Beat940RecallHit: React.FC = () => {
  const frame = useCurrentFrame();

  const reveal = (start: number, end: number) =>
    interpolate(frame, [start, end], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

  const headerProgress = reveal(0, 18);
  const card1 = reveal(18, 55);
  const card2 = reveal(50, 90);
  const card3 = reveal(85, 125);

  const cards = [
    { title: 'Immediate Revenue Hit', val: '-$26,000,000', note: 'Direct Tread+ Sales Halted', progress: card1 },
    { title: 'Returns & Refund Reserve', val: '$165,000,000', note: '125,000 Units Recalled', progress: card2 },
    { title: 'Commercialization Status', val: 'SUSPENDED', note: 'Indefinite Product Freeze', progress: card3 },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.background,
        fontFamily: TOKENS.typography.fontFamilySans,
        padding: '80px 100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Header */}
      <div style={{ opacity: headerProgress, transform: `translateY(${(1 - headerProgress) * 15}px)` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
          <span
            style={{
              backgroundColor: TOKENS.colors.crimson,
              color: '#FFF',
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: '0.08em',
              padding: '4px 10px',
              borderRadius: 4,
            }}
          >
            BEAT 940 • PRODUCT SAFETY RECALL LIABILITIES
          </span>
          <span style={{ fontSize: 16, color: TOKENS.colors.textSecondary, fontWeight: 500 }}>
            Tread+ CPSC Regulatory Settlement Balance Sheet Impact
          </span>
        </div>
        <h1
          style={{
            fontSize: 44,
            fontWeight: 800,
            color: TOKENS.colors.textPrimary,
            margin: '0 0 6px 0',
            letterSpacing: '-0.02em',
          }}
        >
          $191,000,000 IMMEDIATE RECALL WRITE-DOWN
        </h1>
        <p style={{ fontSize: 18, color: TOKENS.colors.textSecondary, margin: 0 }}>
          Source: SEC Form 10-Q Q3 FY2021 • CPSC Consent Agreement Financial Reserve
        </p>
      </div>

      {/* 3 Impact Cards */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 40,
        }}
      >
        {cards.map((c, idx) => (
          <div
            key={idx}
            style={{
              flex: 1,
              backgroundColor: TOKENS.colors.surfaceCard,
              border: `2px solid ${TOKENS.colors.crimson}`,
              borderRadius: 16,
              padding: 36,
              boxShadow: '0 12px 32px rgba(211,47,47,0.08)',
              opacity: c.progress,
              transform: `translateY(${(1 - c.progress) * 20}px)`,
            }}
          >
            <div style={{ fontSize: 16, fontWeight: 700, color: TOKENS.colors.textSecondary }}>
              {c.title}
            </div>
            <div
              style={{
                fontSize: 44,
                fontWeight: 900,
                color: TOKENS.colors.crimson,
                fontFamily: TOKENS.typography.fontFamilyMono,
                margin: '12px 0',
              }}
            >
              {c.val}
            </div>
            <div style={{ fontSize: 15, color: TOKENS.colors.textSecondary }}>{c.note}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: `1px solid ${TOKENS.colors.gridLine}`,
          paddingTop: 14,
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 15,
          color: TOKENS.colors.textMuted,
        }}
      >
        <span>FinanceCraft Regulatory & Governance Audit</span>
        <span>Resolution: 1920×1080 • Master 30fps</span>
      </div>
    </AbsoluteFill>
  );
};

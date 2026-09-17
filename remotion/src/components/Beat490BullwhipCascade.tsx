import React from 'react';
import { interpolate, useCurrentFrame, AbsoluteFill } from 'remotion';
import { TOKENS } from '../tokens';

export const Beat490BullwhipCascade: React.FC = () => {
  const frame = useCurrentFrame();

  const reveal = (start: number, end: number) =>
    interpolate(frame, [start, end], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

  const headerProgress = reveal(0, 18);
  const step1 = reveal(20, 55);
  const step2 = reveal(50, 85);
  const step3 = reveal(80, 115);
  const step4 = reveal(110, 145);

  const tiers = [
    { title: 'Consumer Demand', val: '+20%', height: 90, color: TOKENS.colors.navy, progress: step1, note: 'Quarantine spike' },
    { title: 'Retail Inventory Orders', val: '+40%', height: 160, color: TOKENS.colors.navy, progress: step2, note: 'Safety buffer' },
    { title: 'Wholesale Purchase Orders', val: '+80%', height: 260, color: TOKENS.colors.crimson, progress: step3, note: 'Precor $420M purchase' },
    { title: 'Factory Capex Committed', val: '+200%', height: 380, color: TOKENS.colors.crimson, progress: step4, note: 'Ohio Output Park $400M' },
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
            BEAT 490 • SUPPLY CHAIN AMPLIFICATION
          </span>
          <span style={{ fontSize: 16, color: TOKENS.colors.textSecondary, fontWeight: 500 }}>
            From Living Rooms to Wood County Megafactories
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
          THE CATASTROPHIC ORDER MULTIPLIER (20% TO 200%)
        </h1>
        <p style={{ fontSize: 18, color: TOKENS.colors.textSecondary, margin: 0 }}>
          Source: Supply Chain Forensics • Peloton Capital Allocation Review FY21
        </p>
      </div>

      {/* 4 Step Cascading Bars */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          padding: '0 60px 40px 60px',
          position: 'relative',
        }}
      >
        {tiers.map((t, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 240,
              opacity: t.progress,
              transform: `scale(${0.9 + 0.1 * t.progress})`,
            }}
          >
            <div
              style={{
                fontSize: 36,
                fontWeight: 900,
                color: t.color,
                fontFamily: TOKENS.typography.fontFamilyMono,
                marginBottom: 12,
              }}
            >
              {t.val}
            </div>
            <div
              style={{
                width: 180,
                height: t.height * t.progress,
                backgroundColor: t.color,
                borderRadius: '8px 8px 0 0',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              }}
            />
            <div style={{ marginTop: 14, textAlign: 'center' }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: TOKENS.colors.textPrimary }}>
                {t.title}
              </div>
              <div style={{ fontSize: 14, color: TOKENS.colors.textSecondary, marginTop: 4 }}>
                {t.note}
              </div>
            </div>
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
        <span>FinanceCraft Investigative Unit • Supply Chain Breakdown</span>
        <span>Resolution: 1920×1080 • Master 30fps</span>
      </div>
    </AbsoluteFill>
  );
};

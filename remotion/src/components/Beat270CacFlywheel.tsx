import React from 'react';
import { interpolate, useCurrentFrame, AbsoluteFill } from 'remotion';
import { TOKENS } from '../tokens';

export const Beat270CacFlywheel: React.FC = () => {
  const frame = useCurrentFrame();

  const reveal = (start: number, end: number) =>
    interpolate(frame, [start, end], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

  const headerProgress = reveal(0, 18);
  const step1Progress = reveal(18, 50);
  const step2Progress = reveal(48, 80);
  const step3Progress = reveal(78, 110);
  const step4Progress = reveal(108, 140);
  const centerBadgeProgress = reveal(135, 160);

  const steps = [
    {
      num: '01',
      title: '+$900 Hardware Cash',
      desc: '43% Gross Profit per Bike',
      color: TOKENS.colors.emerald,
      progress: step1Progress,
      x: -360,
      y: -120,
    },
    {
      num: '02',
      title: '100% CAC Covered',
      desc: 'Facebook Ads & Mall Leases Paid',
      color: TOKENS.colors.navy,
      progress: step2Progress,
      x: 360,
      y: -120,
    },
    {
      num: '03',
      title: '<1% Monthly Churn',
      desc: 'High Lifetime Value Locked',
      color: TOKENS.colors.emerald,
      progress: step3Progress,
      x: 360,
      y: 160,
    },
    {
      num: '04',
      title: 'SaaS Multiple',
      desc: 'Priced Like Netflix on a Bike',
      color: TOKENS.colors.accentLine,
      progress: step4Progress,
      x: -360,
      y: 160,
    },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.background,
        fontFamily: TOKENS.typography.fontFamilySans,
        padding: '90px 120px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Header */}
      <div style={{ opacity: headerProgress, transform: `translateY(${(1 - headerProgress) * 15}px)` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <span
            style={{
              backgroundColor: TOKENS.colors.emerald,
              color: '#FFF',
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: '0.08em',
              padding: '4px 10px',
              borderRadius: 4,
            }}
          >
            BEAT 270 • THE UNIT ECONOMICS ENGINE
          </span>
          <span style={{ fontSize: 16, color: TOKENS.colors.textSecondary, fontWeight: 500 }}>
            FY 2020 Customer Acquisition Mechanism
          </span>
        </div>
        <h1
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: TOKENS.colors.textPrimary,
            margin: '0 0 6px 0',
            letterSpacing: '-0.02em',
          }}
        >
          THE "FREE CAC" FLYWHEEL ILLUSION
        </h1>
        <p style={{ fontSize: 20, color: TOKENS.colors.textSecondary, margin: 0 }}>
          Source: SEC Form 10-K FY2020 • Hardware Gross Margin vs. Customer Acquisition Cost
        </p>
      </div>

      {/* Flywheel Visualization Area */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Center Emblem */}
        {centerBadgeProgress > 0 && (
          <div
            style={{
              width: 220,
              height: 220,
              borderRadius: 110,
              backgroundColor: '#FFF',
              border: `4px solid ${TOKENS.colors.emerald}`,
              boxShadow: '0 16px 40px rgba(16,185,129,0.18)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: 16,
              transform: `scale(${0.8 + 0.2 * centerBadgeProgress})`,
              opacity: centerBadgeProgress,
              zIndex: 10,
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 700, color: TOKENS.colors.textSecondary }}>
              EFFECTIVE RESULT
            </div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: TOKENS.colors.emerald,
                fontFamily: TOKENS.typography.fontFamilyMono,
                margin: '4px 0',
              }}
            >
              $0 CAC
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, color: TOKENS.colors.textPrimary }}>
              Self-Funding Growth
            </div>
          </div>
        )}

        {/* 4 Flywheel Nodes */}
        {steps.map((s, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              transform: `translate(${s.x}px, ${s.y}px) scale(${0.9 + 0.1 * s.progress})`,
              opacity: s.progress,
              width: 300,
              backgroundColor: TOKENS.colors.surfaceCard,
              border: `2px solid ${s.color}`,
              borderRadius: 12,
              padding: '16px 20px',
              boxShadow: '0 8px 24px rgba(15,23,42,0.06)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 800,
                  color: s.color,
                  fontFamily: TOKENS.typography.fontFamilyMono,
                }}
              >
                {s.num}
              </span>
              <span style={{ fontSize: 20, fontWeight: 800, color: TOKENS.colors.textPrimary }}>
                {s.title}
              </span>
            </div>
            <div style={{ fontSize: 15, color: TOKENS.colors.textSecondary }}>{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: `1px solid ${TOKENS.colors.gridLine}`,
          paddingTop: 16,
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 16,
          color: TOKENS.colors.textMuted,
        }}
      >
        <span>FinanceCraft Investigative Unit • Documented Case Series</span>
        <span>Resolution: 1920×1080 • Master 30fps</span>
      </div>
    </AbsoluteFill>
  );
};

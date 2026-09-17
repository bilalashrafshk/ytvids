import React from 'react';
import { interpolate, useCurrentFrame, AbsoluteFill } from 'remotion';
import { TOKENS } from '../tokens';

export const Beat1080McCarthyAxe: React.FC = () => {
  const frame = useCurrentFrame();

  const reveal = (start: number, end: number) =>
    interpolate(frame, [start, end], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

  const headerProgress = reveal(0, 18);
  const stamp1 = reveal(18, 50);
  const stamp2 = reveal(48, 80);
  const stamp3 = reveal(78, 110);
  const stamp4 = reveal(108, 140);
  // Frames 140 to 240 = stable reading hold (>3 seconds)

  const actions = [
    { title: 'Ohio Mega-Factory', action: 'PERMANENTLY HALTED', impact: '$400M Construction Abandoned', progress: stamp1 },
    { title: 'Corporate Headcount', action: '2,800 JOBS CUT', impact: '20% of Entire Workforce in 24 Hours', progress: stamp2 },
    { title: 'Proprietary Last-Mile Fleet', action: 'LIQUIDATED & SHUT DOWN', impact: 'Surrendered to 3rd-Party Freight', progress: stamp3 },
    { title: 'In-House Hardware Stamping', action: 'ABANDONED ENTIRELY', impact: 'Reverted to Rexon / Tonic in Taiwan', progress: stamp4 },
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
            BEAT 1080 • TURNAROUND SURGERY
          </span>
          <span style={{ fontSize: 16, color: TOKENS.colors.textSecondary, fontWeight: 500 }}>
            February 2022 Executive Restructuring Mandate
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
          THE 48-HOUR EXECUTIVE PURGE (BARRY MCCARTHY)
        </h1>
        <p style={{ fontSize: 18, color: TOKENS.colors.textSecondary, margin: 0 }}>
          Source: SEC Form 8-K (February 8, 2022) • Comprehensive Restructuring Plan Disclosures
        </p>
      </div>

      {/* 4 Restructuring Stamps Grid */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
          alignItems: 'center',
          padding: '20px 0',
        }}
      >
        {actions.map((act, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: TOKENS.colors.surfaceCard,
              border: `2px solid ${TOKENS.colors.borderCard}`,
              borderLeft: `8px solid ${TOKENS.colors.crimson}`,
              borderRadius: 12,
              padding: '22px 28px',
              boxShadow: '0 8px 24px rgba(15,23,42,0.06)',
              opacity: act.progress,
              transform: `scale(${0.92 + 0.08 * act.progress})`,
            }}
          >
            <div style={{ fontSize: 15, fontWeight: 700, color: TOKENS.colors.textSecondary }}>
              {act.title}
            </div>
            <div
              style={{
                fontSize: 26,
                fontWeight: 900,
                color: TOKENS.colors.crimson,
                fontFamily: TOKENS.typography.fontFamilyMono,
                margin: '6px 0',
              }}
            >
              {act.action}
            </div>
            <div style={{ fontSize: 15, color: TOKENS.colors.textPrimary, fontWeight: 500 }}>
              {act.impact}
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
        <span>FinanceCraft Restructuring & Balance Sheet Autopsy</span>
        <span>Resolution: 1920×1080 • Master 30fps</span>
      </div>
    </AbsoluteFill>
  );
};

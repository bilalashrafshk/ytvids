import React from 'react';
import { interpolate, useCurrentFrame, AbsoluteFill } from 'remotion';
import { TOKENS } from '../tokens';

export const Beat100CapitalDestruction: React.FC = () => {
  const frame = useCurrentFrame();

  // Timing reveals
  const reveal = (start: number, end: number) =>
    interpolate(frame, [start, end], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

  const headerProgress = reveal(0, 18);
  const leftBarProgress = reveal(20, 65);
  const rightBarProgress = reveal(70, 110);
  const badgeProgress = reveal(115, 140);
  // Frames 140 to 210 = stable reading hold (>2 seconds)

  const maxVal = 400; // $400M
  const committedVal = Math.round(interpolate(leftBarProgress, [0, 1], [0, 400]));
  const recoveredVal = Math.round(interpolate(rightBarProgress, [0, 1], [0, 33]));

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
      {/* 1. Header & Evidentiary Sourcing */}
      <div style={{ opacity: headerProgress, transform: `translateY(${(1 - headerProgress) * 15}px)` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <span
            style={{
              backgroundColor: TOKENS.colors.navy,
              color: '#FFF',
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: '0.08em',
              padding: '4px 10px',
              borderRadius: 4,
            }}
          >
            BEAT 100 • CAPITAL INVESTED VS LIQUIDATED
          </span>
          <span style={{ fontSize: 16, color: TOKENS.colors.textSecondary, fontWeight: 500 }}>
            Wood County, Ohio Monolith Analysis
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
          $400M COMMITTED vs. $33M RECOVERED
        </h1>
        <p style={{ fontSize: 20, color: TOKENS.colors.textSecondary, margin: 0 }}>
          Source: Wood County Recorder’s Office Deed Transfer • SEC Form 10-K FY21–FY24
        </p>
      </div>

      {/* 2. Comparative Plot Field */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          gap: 140,
          paddingBottom: 40,
          position: 'relative',
        }}
      >
        {/* Baseline Grid Line */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: 100,
            right: 100,
            height: 2,
            backgroundColor: TOKENS.colors.gridLine,
          }}
        />

        {/* Left Column: Capital Committed ($400M) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 260 }}>
          <div
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: TOKENS.colors.navy,
              marginBottom: 16,
              fontFamily: TOKENS.typography.fontFamilyMono,
              opacity: leftBarProgress > 0.05 ? 1 : 0,
            }}
          >
            ${committedVal}M
          </div>
          <div
            style={{
              width: 180,
              height: 420 * leftBarProgress,
              backgroundColor: TOKENS.colors.navy,
              borderRadius: '8px 8px 0 0',
              boxShadow: '0 8px 24px rgba(15,23,42,0.12)',
            }}
          />
          <div style={{ marginTop: 16, textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: TOKENS.colors.textPrimary }}>
              Capital Committed
            </div>
            <div style={{ fontSize: 16, color: TOKENS.colors.textSecondary, marginTop: 4 }}>
              May 2021 (Planned POP Factory)
            </div>
          </div>
        </div>

        {/* Right Column: Liquidation Sale ($33M) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 260 }}>
          <div
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: TOKENS.colors.crimson,
              marginBottom: 16,
              fontFamily: TOKENS.typography.fontFamilyMono,
              opacity: rightBarProgress > 0.05 ? 1 : 0,
            }}
          >
            ${recoveredVal}M
          </div>
          <div
            style={{
              width: 180,
              height: Math.max(10, 420 * (33 / 400) * rightBarProgress),
              backgroundColor: TOKENS.colors.crimson,
              borderRadius: '8px 8px 0 0',
              boxShadow: '0 8px 24px rgba(211,47,47,0.16)',
            }}
          />
          <div style={{ marginTop: 16, textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: TOKENS.colors.crimson }}>
              Liquidation Sale
            </div>
            <div style={{ fontSize: 16, color: TOKENS.colors.textSecondary, marginTop: 4 }}>
              Jan 2024 (Sold to First Solar)
            </div>
          </div>
        </div>

        {/* 3. Direct Anomaly Callout Badge */}
        {badgeProgress > 0 && (
          <div
            style={{
              position: 'absolute',
              top: '25%',
              right: '12%',
              backgroundColor: TOKENS.colors.crimsonMuted,
              border: `2px solid ${TOKENS.colors.crimson}`,
              borderRadius: 12,
              padding: '18px 28px',
              boxShadow: '0 12px 32px rgba(211,47,47,0.15)',
              transform: `scale(${0.9 + 0.1 * badgeProgress}) translateY(${(1 - badgeProgress) * 10}px)`,
              opacity: badgeProgress,
            }}
          >
            <div
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: TOKENS.colors.crimson,
                fontFamily: TOKENS.typography.fontFamilyMono,
                letterSpacing: '-0.02em',
              }}
            >
              -91.8% LOSS
            </div>
            <div style={{ fontSize: 16, fontWeight: 600, color: TOKENS.colors.textPrimary, marginTop: 4 }}>
              $367M Wiped Out Before Producing 1 Bike
            </div>
          </div>
        )}
      </div>

      {/* Footer Baseline Reading Indicator */}
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

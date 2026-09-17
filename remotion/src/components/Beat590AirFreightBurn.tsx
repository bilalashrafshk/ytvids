import React from 'react';
import { interpolate, useCurrentFrame, AbsoluteFill } from 'remotion';
import { TOKENS } from '../tokens';

export const Beat590AirFreightBurn: React.FC = () => {
  const frame = useCurrentFrame();

  const reveal = (start: number, end: number) =>
    interpolate(frame, [start, end], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

  const headerProgress = reveal(0, 18);
  const counterProgress = reveal(18, 120);
  const calloutProgress = reveal(115, 145);

  const currentSpend = Math.round(interpolate(counterProgress, [0, 1], [0, 100000000]));
  const formatted = currentSpend.toLocaleString('en-US');

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
            BEAT 590 • EXPEDITED FREIGHT PANIC
          </span>
          <span style={{ fontSize: 16, color: TOKENS.colors.textSecondary, fontWeight: 500 }}>
            Chartered Boeing 777 Cargo Flights (Asia to US Ports)
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
          $100,000,000 AIR CARGO CASH BURN
        </h1>
        <p style={{ fontSize: 18, color: TOKENS.colors.textSecondary, margin: 0 }}>
          Source: Peloton Interactive Q2 & Q3 FY2021 Shareholder Letters • Supply Chain Surcharges
        </p>
      </div>

      {/* Center Counter */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ fontSize: 20, fontWeight: 700, color: TOKENS.colors.textSecondary, letterSpacing: '0.05em' }}>
          TOTAL INCREMENTAL AIR FREIGHT COMMITTED
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: TOKENS.colors.crimson,
            fontFamily: TOKENS.typography.fontFamilyMono,
            margin: '16px 0',
            letterSpacing: '-0.03em',
          }}
        >
          ${formatted}
        </div>

        {/* Shave 3 Weeks Badge */}
        {calloutProgress > 0 && (
          <div
            style={{
              backgroundColor: TOKENS.colors.surfaceCard,
              border: `2px solid ${TOKENS.colors.crimson}`,
              borderRadius: 12,
              padding: '16px 28px',
              boxShadow: '0 12px 32px rgba(211,47,47,0.12)',
              opacity: calloutProgress,
              transform: `scale(${0.9 + 0.1 * calloutProgress})`,
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 800, color: TOKENS.colors.textPrimary }}>
              SPENT ENTIRELY TO SHAVE 3 WEEKS OFF PORT TRANSIT
            </div>
            <div style={{ fontSize: 15, color: TOKENS.colors.textSecondary, marginTop: 4 }}>
              Flying 70-lb stationary exercise bikes across the Pacific Ocean on cargo jets.
            </div>
          </div>
        )}
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
        <span>FinanceCraft Freight Forensics</span>
        <span>Resolution: 1920×1080 • Master 30fps</span>
      </div>
    </AbsoluteFill>
  );
};

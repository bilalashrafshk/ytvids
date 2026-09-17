import React from 'react';
import { interpolate, useCurrentFrame, AbsoluteFill } from 'remotion';
import { TOKENS } from '../tokens';

export const Beat320ChurnRetention: React.FC = () => {
  const frame = useCurrentFrame();

  const reveal = (start: number, end: number) =>
    interpolate(frame, [start, end], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

  const headerProgress = reveal(0, 18);
  const churnCounterProgress = reveal(20, 70);
  const barProgress = reveal(65, 110);
  const calloutProgress = reveal(105, 135);

  const churnDisplay = (0.64 * churnCounterProgress).toFixed(2);
  const retentionDisplay = Math.round(interpolate(barProgress, [0, 1], [0, 95]));

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
            BEAT 320 • RETENTION & CHURN BENCHMARK
          </span>
          <span style={{ fontSize: 16, color: TOKENS.colors.textSecondary, fontWeight: 500 }}>
            Connected Fitness Cohort Performance
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
          MONTHLY CHURN: 0.64% (95% ANNUAL RETENTION)
        </h1>
        <p style={{ fontSize: 20, color: TOKENS.colors.textSecondary, margin: 0 }}>
          Source: SEC Form 10-K FY2020 • Connected Fitness Subscriber Churn Metric
        </p>
      </div>

      {/* Main Metric Cards */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 60,
        }}
      >
        {/* Left Card: Monthly Churn */}
        <div
          style={{
            flex: 1,
            backgroundColor: TOKENS.colors.surfaceCard,
            border: `2px solid ${TOKENS.colors.borderCard}`,
            borderRadius: 16,
            padding: 40,
            boxShadow: '0 12px 32px rgba(15,23,42,0.06)',
            opacity: churnCounterProgress > 0 ? 1 : 0,
            transform: `translateY(${(1 - churnCounterProgress) * 20}px)`,
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 700, color: TOKENS.colors.textSecondary }}>
            AVERAGE MONTHLY CHURN
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: TOKENS.colors.emerald,
              fontFamily: TOKENS.typography.fontFamilyMono,
              margin: '12px 0',
            }}
          >
            {churnDisplay}%
          </div>
          <div style={{ fontSize: 18, color: TOKENS.colors.textSecondary }}>
            Under 1% of subscribers canceled in any single month throughout 2020.
          </div>
        </div>

        {/* Right Card: 12-Month Retention Bar */}
        <div
          style={{
            flex: 1.2,
            backgroundColor: TOKENS.colors.surfaceCard,
            border: `2px solid ${TOKENS.colors.borderCard}`,
            borderRadius: 16,
            padding: 40,
            boxShadow: '0 12px 32px rgba(15,23,42,0.06)',
            opacity: barProgress > 0 ? 1 : 0,
            transform: `translateY(${(1 - barProgress) * 20}px)`,
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 700, color: TOKENS.colors.textSecondary }}>
            12-MONTH COHORT RETENTION
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 900,
              color: TOKENS.colors.textPrimary,
              fontFamily: TOKENS.typography.fontFamilyMono,
              margin: '8px 0',
            }}
          >
            {retentionDisplay}% RETENTION
          </div>

          {/* Retention Bar Track */}
          <div
            style={{
              width: '100%',
              height: 24,
              backgroundColor: TOKENS.colors.gridLine,
              borderRadius: 12,
              overflow: 'hidden',
              marginTop: 16,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: `${95 * barProgress}%`,
                height: '100%',
                backgroundColor: TOKENS.colors.emerald,
                borderRadius: 12,
              }}
            />
          </div>

          {/* Netflix Comparison Callout */}
          {calloutProgress > 0 && (
            <div
              style={{
                backgroundColor: TOKENS.colors.emeraldMuted,
                borderLeft: `4px solid ${TOKENS.colors.emerald}`,
                padding: '12px 16px',
                borderRadius: 4,
                opacity: calloutProgress,
                transform: `translateX(${(1 - calloutProgress) * 15}px)`,
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 700, color: TOKENS.colors.navy }}>
                WALL STREET CONSENSUS: "HIGHER RETENTION THAN NETFLIX"
              </div>
              <div style={{ fontSize: 14, color: TOKENS.colors.textSecondary, marginTop: 2 }}>
                Investors concluded connected fitness churn was structural, not pandemic-driven.
              </div>
            </div>
          )}
        </div>
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

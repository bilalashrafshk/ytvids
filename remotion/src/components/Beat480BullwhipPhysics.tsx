import React from 'react';
import { interpolate, useCurrentFrame, AbsoluteFill } from 'remotion';
import { TOKENS } from '../tokens';

export const Beat480BullwhipPhysics: React.FC = () => {
  const frame = useCurrentFrame();

  const reveal = (start: number, end: number) =>
    interpolate(frame, [start, end], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

  const headerProgress = reveal(0, 18);
  const waveProgress = reveal(20, 110);
  const calloutProgress = reveal(105, 140);

  // Generate whip wave points across horizontal distance
  const points = [];
  const totalPoints = 60;
  for (let i = 0; i <= totalPoints; i++) {
    const xRatio = i / totalPoints;
    const x = 180 + xRatio * 1560;
    // Amplitude increases exponentially toward the tip
    const amplitude = Math.pow(xRatio, 2.5) * 220 * waveProgress;
    const phase = frame * 0.25 - xRatio * 8;
    const y = 580 + Math.sin(phase) * amplitude;
    points.push(`${x},${y}`);
  }
  const pathD = `M ${points.join(' L ')}`;

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
              backgroundColor: TOKENS.colors.navy,
              color: '#FFF',
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: '0.08em',
              padding: '4px 10px',
              borderRadius: 4,
            }}
          >
            BEAT 480 • SUPPLY CHAIN DYNAMICS
          </span>
          <span style={{ fontSize: 16, color: TOKENS.colors.textSecondary, fontWeight: 500 }}>
            Classical Industrial Engineering Principles
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
          THE BULLWHIP PRINCIPLE: AMPLIFICATION FROM WRIST TO TIP
        </h1>
        <p style={{ fontSize: 18, color: TOKENS.colors.textSecondary, margin: 0 }}>
          Source: Forrester Supply Chain Model • Demand Distortion Across Multi-Tier Manufacturing
        </p>
      </div>

      {/* SVG Canvas for Wave Propagation */}
      <div style={{ flex: 1, position: 'relative' }}>
        <svg width="1920" height="600" style={{ position: 'absolute', top: 0, left: -100 }}>
          {/* Wave Path */}
          <path
            d={pathD}
            fill="none"
            stroke={TOKENS.colors.crimson}
            strokeWidth={5}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: 'drop-shadow(0 4px 12px rgba(211,47,47,0.3))' }}
          />

          {/* Wrist Origin (Left) */}
          <circle cx="180" cy="580" r="12" fill={TOKENS.colors.navy} />

          {/* Whip Tip (Right) */}
          {points.length > 0 && (
            <circle
              cx={points[points.length - 1].split(',')[0]}
              cy={points[points.length - 1].split(',')[1]}
              r="14"
              fill={TOKENS.colors.crimson}
              style={{ filter: 'drop-shadow(0 0 16px #D32F2F)' }}
            />
          )}
        </svg>

        {/* Origin Label */}
        <div style={{ position: 'absolute', left: 40, top: '48%', width: 220 }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: TOKENS.colors.navy }}>
            THE WRIST (DEMAND)
          </div>
          <div style={{ fontSize: 15, color: TOKENS.colors.textSecondary, marginTop: 4 }}>
            2-Inch Motion (+10% Retail Orders)
          </div>
        </div>

        {/* Tip Crack Label */}
        <div
          style={{
            position: 'absolute',
            right: 40,
            top: '25%',
            width: 320,
            opacity: calloutProgress,
            transform: `translateX(${(1 - calloutProgress) * 20}px)`,
          }}
        >
          <div
            style={{
              backgroundColor: TOKENS.colors.crimsonMuted,
              border: `2px solid ${TOKENS.colors.crimson}`,
              borderRadius: 12,
              padding: '16px 20px',
              boxShadow: '0 8px 24px rgba(211,47,47,0.15)',
            }}
          >
            <div style={{ fontSize: 16, fontWeight: 800, color: TOKENS.colors.crimson }}>
              THE TIP (SUPPLIERS)
            </div>
            <div style={{ fontSize: 28, fontWeight: 900, color: TOKENS.colors.textPrimary, margin: '4px 0' }}>
              20-FOOT CRACK
            </div>
            <div style={{ fontSize: 14, color: TOKENS.colors.textSecondary }}>
              Overproduction of raw parts, chartered jets, and unneeded factories.
            </div>
          </div>
        </div>
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
        <span>FinanceCraft Investigative Framework</span>
        <span>Operational Dynamics Analysis</span>
      </div>
    </AbsoluteFill>
  );
};

import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';

import tariffDeskImg from '../../assets/episode03/005_demurrage_tariff_desk_bg.jpg';
import { TOKENS } from '../../tokens';

export const DemurrageAccumulationCurve: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig();

  // -------------------------------------------------------------
  // 1. CAMERA KINEMATICS (Cinematic Subtle Push Across 240 frames)
  // -------------------------------------------------------------
  const cameraProgress = interpolate(frame, [0, durationInFrames], [0, 1], {
    easing: Easing.bezier(0.2, 0.1, 0.2, 1.0),
  });
  const bgScale = interpolate(cameraProgress, [0, 1], [1.02, 1.10]);
  const bgPanX = interpolate(cameraProgress, [0, 1], [0, -30]);

  // -------------------------------------------------------------
  // 2. CHART PROGRESSION (Exponential Curve Climb)
  // -------------------------------------------------------------
  // Chart reveals between frame 20 and frame 190
  const chartProgress = interpolate(frame, [20, 190], [0, 1], {
    easing: Easing.bezier(0.4, 0.0, 0.2, 1.0),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Days count from 1 to 21
  const currentDay = Math.min(21, Math.max(1, Math.round(interpolate(chartProgress, [0, 1], [1, 21]))));

  // Daily fine rate: $275 * 40 containers = $11,000 / day
  const dailyRate = 11000;
  // Cumulative sum: day * $11,000 = up to $231,000
  const cumulativeAccrued = Math.round(chartProgress * 231000);

  // SVG dimensions for chart
  const chartW = 760;
  const chartH = 340;

  // Generate exponential bezier path
  // Start: (0, chartH), Control: (chartW * 0.55, chartH * 0.95), End: (chartW, 20)
  const headX = chartW * chartProgress;
  // Quadratic bezier y position
  const t = chartProgress;
  const p0y = chartH - 20;
  const p1y = chartH - 40;
  const p2y = 30;
  const headY = (1 - t) * (1 - t) * p0y + 2 * (1 - t) * t * p1y + t * t * p2y;

  // Pulse on head
  const pulse = 0.5 + 0.5 * Math.sin((frame / 10) * Math.PI * 2);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        overflow: 'hidden',
        fontFamily: TOKENS.typography.fontFamilySans,
      }}
    >
      {/* ------------------------------------------------------------- */}
      {/* LAYER 1: CINEMATIC PHYSICAL DESK BACKGROUND                   */}
      {/* ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          inset: -40,
          transform: `scale(${bgScale}) translate3d(${bgPanX}px, 0, 0)`,
          transformOrigin: '40% 50%',
        }}
      >
        <Img
          src={tariffDeskImg}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'contrast(1.08) brightness(0.85)',
          }}
        />
        {/* Subtle dark vignette over left side to preserve desk lamp warmth */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(10, 14, 20, 0.4) 0%, rgba(10, 14, 20, 0.7) 40%, rgba(10, 14, 20, 0.92) 70%, rgba(10, 14, 20, 0.96) 100%)',
          }}
        />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* LAYER 2 & 3: NEWSROOM DATA CARD & KINETIC WATERFALL           */}
      {/* ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 75,
          right: 80,
          width: 1060,
          bottom: 75,
          backgroundColor: 'rgba(15, 20, 28, 0.88)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 16,
          padding: '36px 48px',
          boxShadow: '0 16px 48px rgba(0, 0, 0, 0.65)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Card Header */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <span
              style={{
                backgroundColor: TOKENS.colors.crimson,
                color: '#ffffff',
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 12,
                fontWeight: 800,
                padding: '4px 10px',
                borderRadius: 4,
                letterSpacing: '0.08em',
              }}
            >
              PORT PENALTY ACCELERATION
            </span>
            <span
              style={{
                color: TOKENS.colors.amber,
                fontSize: 13,
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontWeight: 700,
              }}
            >
              PORT OF LOS ANGELES TARIFF NO. 4 • ITEM 1000
            </span>
          </div>

          <h1
            style={{
              color: '#ffffff',
              fontSize: 32,
              fontWeight: 800,
              margin: 0,
              letterSpacing: '-0.01em',
            }}
          >
            Compounding Demurrage Acceleration vs. Zero Revenue
          </h1>

          <p
            style={{
              color: TOKENS.colors.textMuted,
              fontSize: 14,
              margin: '6px 0 0 0',
              fontFamily: TOKENS.typography.fontFamilySans,
            }}
          >
            40 Refrigerated Ocean Containers (Berth 406) • Compounding Daily Fine: $275.00 / container / day
          </p>
        </div>

        {/* Chart + Metrics Layout */}
        <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
          {/* Exponential Curve Viewport */}
          <div
            style={{
              width: chartW,
              height: chartH,
              position: 'relative',
              borderBottom: `2px solid ${TOKENS.colors.borderCard}`,
              borderLeft: `2px solid ${TOKENS.colors.borderCard}`,
            }}
          >
            {/* Grid Guideline */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 40,
                borderTop: '1px dashed rgba(255, 255, 255, 0.15)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 22,
                left: 8,
                color: TOKENS.colors.crimson,
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 12,
                fontWeight: 800,
              }}
            >
              DEFAULT THRESHOLD: $231,000 (DAY 21)
            </div>

            {/* Flat Zero Revenue Baseline Line */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: 2,
                backgroundColor: '#ffffff',
                boxShadow: '0 0 8px rgba(255, 255, 255, 0.4)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 8,
                left: 8,
                color: '#ffffff',
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 11,
                fontWeight: 700,
              }}
            >
              INCOMING MERCHANT REVENUE: $0.00 FLATLINE
            </div>

            {/* Dynamic Curve SVG */}
            <svg
              style={{
                width: '100%',
                height: '100%',
                overflow: 'visible',
              }}
            >
              {/* Exponential Red Curve */}
              {chartProgress > 0.01 && (
                <path
                  d={`M 0 ${p0y} Q ${chartW * 0.55 * chartProgress} ${(p0y + p1y) / 2} ${headX} ${headY}`}
                  fill="none"
                  stroke={TOKENS.colors.crimson}
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              )}

              {/* White-Hot Electric Draw Head */}
              {chartProgress > 0.01 && (
                <>
                  {/* Outer Glow */}
                  <circle
                    cx={headX}
                    cy={headY}
                    r={12 + pulse * 4}
                    fill={TOKENS.colors.crimson}
                    opacity="0.4"
                  />
                  {/* Core White Pin */}
                  <circle
                    cx={headX}
                    cy={headY}
                    r="6"
                    fill="#ffffff"
                    stroke={TOKENS.colors.crimson}
                    strokeWidth="3"
                  />
                </>
              )}
            </svg>

            {/* X-Axis Timeline Callouts */}
            <div
              style={{
                position: 'absolute',
                bottom: -28,
                left: 0,
                color: TOKENS.colors.textMuted,
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 12,
              }}
            >
              DAY 1 (GATE SEIZURE)
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: -28,
                right: 0,
                color: TOKENS.colors.crimson,
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              DAY 21 (LEGAL DEFAULT)
            </div>
          </div>

          {/* Forensic Stat Columns */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {/* Daily Penalty Rate Box */}
            <div
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.08)',
                border: `1px solid ${TOKENS.colors.amber}`,
                borderRadius: 10,
                padding: '16px 20px',
              }}
            >
              <div
                style={{
                  color: TOKENS.colors.amber,
                  fontSize: 11,
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                }}
              >
                DAILY RUNNING PENALTY
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: 26,
                  fontWeight: 900,
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  marginTop: 2,
                }}
              >
                ${dailyRate.toLocaleString()} / DAY
              </div>
              <div style={{ color: TOKENS.colors.textMuted, fontSize: 11, marginTop: 2 }}>
                40 Containers × $275.00 / day
              </div>
            </div>

            {/* Cumulative Accrual Box */}
            <div
              style={{
                backgroundColor: 'rgba(220, 38, 38, 0.12)',
                border: `1px solid ${TOKENS.colors.crimson}`,
                borderRadius: 10,
                padding: '16px 20px',
              }}
            >
              <div
                style={{
                  color: TOKENS.colors.crimson,
                  fontSize: 11,
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                }}
              >
                TOTAL ACCRUED DEMURRAGE
              </div>
              <div
                style={{
                  color: TOKENS.colors.crimson,
                  fontSize: 34,
                  fontWeight: 900,
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  marginTop: 2,
                }}
              >
                ${cumulativeAccrued.toLocaleString()}
              </div>
              <div style={{ color: TOKENS.colors.textMuted, fontSize: 11, marginTop: 2 }}>
                Current Timeline: Day {currentDay} of 21
              </div>
            </div>
          </div>
        </div>

        {/* Card Footer Sourcing */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: 14,
            color: TOKENS.colors.textMuted,
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 11,
          }}
        >
          <div>
            SOURCE: PORT OF LOS ANGELES TARIFF NO. 4, ITEM 1000 (DEMURRAGE & STORAGE FEES)
          </div>
          <div style={{ color: TOKENS.colors.crimson, fontWeight: 700 }}>
            UCC-1 SECURED CREDITOR LIEN RISK: SEVERE
          </div>
        </div>
      </div>

      {/* 2.39:1 Anamorphic Letterbox Bars */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 55,
          backgroundColor: '#000000',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 55,
          backgroundColor: '#000000',
        }}
      />
    </AbsoluteFill>
  );
};

import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';

import vaultBgImg from '../../assets/episode03/079_bank_teller_checks_bg.jpg';
import { TOKENS } from '../../tokens';

export const WireSettlementDelayCurve: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // -------------------------------------------------------------
  // 1. CAMERA KINEMATICS (Slow 2.5D Push-in across 135 frames)
  // -------------------------------------------------------------
  const cameraProgress = interpolate(frame, [0, durationInFrames], [0, 1], {
    easing: Easing.bezier(0.2, 0.1, 0.2, 1.0),
  });
  const bgScale = interpolate(cameraProgress, [0, 1], [1.0, 1.055]);
  const bgPanY = interpolate(cameraProgress, [0, 1], [0, -10]);

  // Entrance animations
  const headerOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });
  const headerSlide = interpolate(frame, [0, 15], [-20, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  const cardOpacity = interpolate(frame, [6, 18], [0, 1], { extrapolateRight: 'clamp' });
  const cardSlide = interpolate(frame, [6, 18], [24, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  const footerOpacity = interpolate(frame, [18, 30], [0, 1], { extrapolateRight: 'clamp' });

  // -------------------------------------------------------------
  // 2. CURVE ANIMATION & DEFAULT THRESHOLD CROSSOVER
  // -------------------------------------------------------------
  // Curve draw progress (frames 15-70)
  const drawProgress = interpolate(frame, [15, 70], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Delay counter (1 up to 6 days)
  const currentDelay = Math.min(6, Math.max(1, Math.round(1 + 5 * drawProgress)));

  // Crossover occurs at Day 14 (frame 45+)
  const isCrossover = frame >= 45;
  const pulse = isCrossover ? (Math.sin((frame - 45) * 0.3) + 1) / 2 : 0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        fontFamily: TOKENS.typography.fontFamilySans,
        overflow: 'hidden',
      }}
    >
      {/* -------------------------------------------------------------
          LAYER 1: PHYSICAL SCENE FOUNDATION (Bank Vault Teller Feeder Plate)
          ------------------------------------------------------------- */}
      <AbsoluteFill
        style={{
          transform: `scale(${bgScale}) translateY(${bgPanY}px)`,
          transformOrigin: 'center center',
          filter: isCrossover ? 'brightness(0.85)' : 'brightness(1.0)',
          transition: 'filter 0.3s ease',
        }}
      >
        <Img
          src={vaultBgImg}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Editorial vignette */}
        <AbsoluteFill
          style={{
            background: isCrossover
              ? `radial-gradient(ellipse at 50% 50%, rgba(15, 20, 28, 0.65) 0%, rgba(15, 20, 28, 0.95) 100%)`
              : `radial-gradient(ellipse at 50% 50%, rgba(15, 20, 28, 0.50) 0%, rgba(15, 20, 28, 0.90) 100%)`,
          }}
        />
      </AbsoluteFill>

      {/* -------------------------------------------------------------
          LAYER 2: KINETIC SETTLEMENT THRESHOLD CHART (Strict 4-Label Max, Single Crimson Accent)
          ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 85,
          left: 100,
          right: 100,
          bottom: 85,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          zIndex: 10,
        }}
      >
        {/* LABEL 1 & 2: Header Block (Title + Visible Source directly underneath) */}
        <div
          style={{
            transform: `translateY(${headerSlide}px)`,
            opacity: headerOpacity,
          }}
        >
          <div
            style={{
              fontFamily: TOKENS.typography.fontFamilyMono,
              fontSize: 13,
              fontWeight: 800,
              color: isCrossover ? TOKENS.colors.crimson : TOKENS.colors.textSecondary,
              letterSpacing: '0.14em',
              marginBottom: 8,
              textTransform: 'uppercase',
            }}
          >
            Interbank Settlement Horizon
          </div>
          <h1
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Bank Settlement Delay
          </h1>
          <div
            style={{
              fontSize: 15,
              color: TOKENS.colors.textMuted,
              marginTop: 8,
            }}
          >
            Source: Interbank Physical Check Clearing & Settlement Audit
          </div>
        </div>

        {/* LABEL 3: Hero Chart Display (Numbers arrive alone, Single Semantic Accent) */}
        <div
          style={{
            transform: `translateY(${cardSlide}px)`,
            opacity: cardOpacity,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(15, 20, 28, 0.94)',
              border: `2px solid ${isCrossover ? TOKENS.colors.crimson : 'rgba(255, 255, 255, 0.12)'}`,
              borderRadius: 16,
              padding: '28px 44px',
              boxShadow: isCrossover
                ? `0 24px 60px rgba(0,0,0,0.85), 0 0 ${12 + pulse * 14}px ${TOKENS.colors.crimson}40`
                : '0 24px 60px rgba(0,0,0,0.85)',
              backdropFilter: 'blur(20px)',
              width: '100%',
              maxWidth: 960,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            {/* Metric Header Row inside Card */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                paddingBottom: 12,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 13,
                    fontWeight: 800,
                    color: isCrossover ? TOKENS.colors.crimson : TOKENS.colors.textSecondary,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  Manual Check Clearance Delay
                </div>
                <div style={{ fontSize: 14, color: TOKENS.colors.textMuted, marginTop: 2 }}>
                  Physical paper cashier checks pending manual signature audit
                </div>
              </div>
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 52,
                  fontWeight: 900,
                  color: isCrossover ? TOKENS.colors.crimson : '#FFFFFF',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                {currentDelay} DAYS
              </div>
            </div>

            {/* Threshold Crossover SVG Chart */}
            <div
              style={{
                width: '100%',
                height: 240,
                position: 'relative',
              }}
            >
              <svg
                viewBox="0 0 860 240"
                style={{
                  width: '100%',
                  height: '100%',
                  overflow: 'visible',
                }}
              >
                {/* Horizontal Gridlines */}
                <line x1="80" y1="40" x2="820" y2="40" stroke="rgba(255, 255, 255, 0.08)" strokeDasharray="4 4" />
                <line x1="80" y1="120" x2="820" y2="120" stroke="rgba(255, 255, 255, 0.08)" strokeDasharray="4 4" />
                <line x1="80" y1="200" x2="820" y2="200" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />

                {/* Vertical Timeline Axis (Day 8 to Day 18) */}
                <text x="80" y="222" fill={TOKENS.colors.textMuted} fontSize="12" fontFamily={TOKENS.typography.fontFamilyMono}>DAY 8</text>
                <text x="228" y="222" fill={TOKENS.colors.textMuted} fontSize="12" fontFamily={TOKENS.typography.fontFamilyMono}>DAY 10</text>
                <text x="376" y="222" fill={TOKENS.colors.textMuted} fontSize="12" fontFamily={TOKENS.typography.fontFamilyMono}>DAY 12</text>
                <text x="524" y="222" fill={TOKENS.colors.crimson} fontSize="12" fontWeight="800" fontFamily={TOKENS.typography.fontFamilyMono}>DAY 14 (DEFAULT)</text>
                <text x="672" y="222" fill={TOKENS.colors.textMuted} fontSize="12" fontFamily={TOKENS.typography.fontFamilyMono}>DAY 16</text>
                <text x="820" y="222" fill={TOKENS.colors.textMuted} fontSize="12" fontFamily={TOKENS.typography.fontFamilyMono}>DAY 18</text>

                {/* Default Threshold Vertical Barrier at Day 14 (x = 524) */}
                <line
                  x1="524"
                  y1="30"
                  x2="524"
                  y2="200"
                  stroke={TOKENS.colors.crimson}
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  opacity={isCrossover ? 0.8 : 0.3}
                />

                {/* Line 1: Descending Cash Runway Line (Starts high, hits $0 at Day 14) */}
                {/* Points: (80, 50) -> (228, 90) -> (376, 140) -> (524, 200) -> (820, 200) */}
                <path
                  d="M 80 50 L 228 90 L 376 140 L 524 200 L 820 200"
                  fill="none"
                  stroke={TOKENS.colors.textSecondary}
                  strokeWidth="2.5"
                />
                <text
                  x="90"
                  y="42"
                  fill={TOKENS.colors.textMuted}
                  fontSize="11"
                  fontWeight="700"
                  fontFamily={TOKENS.typography.fontFamilyMono}
                >
                  CASH RESERVES (EXPIRING)
                </text>

                {/* Line 2: Rising Check Clearance Horizon (Starts at 1 day = y:190, climbs to 6 days = y:60) */}
                {/* Drawn proportionally with drawProgress */}
                {(() => {
                  const xEnd = 80 + 740 * drawProgress;
                  const yEnd = 190 - 130 * drawProgress;
                  return (
                    <path
                      d={`M 80 190 L ${xEnd} ${yEnd}`}
                      fill="none"
                      stroke={TOKENS.colors.crimson}
                      strokeWidth="3.5"
                    />
                  );
                })()}

                {/* Crossover Alert Point at Day 14 (x = 524, y = 110 approx) */}
                {isCrossover && (
                  <g transform="translate(524, 110)">
                    <circle
                      cx="0"
                      cy="0"
                      r={16 + pulse * 8}
                      fill="none"
                      stroke={TOKENS.colors.crimson}
                      strokeWidth="2"
                      opacity={1 - pulse * 0.5}
                    />
                    <circle cx="0" cy="0" r="7" fill={TOKENS.colors.crimson} />
                    <rect
                      x="18"
                      y="-16"
                      width="160"
                      height="32"
                      rx="6"
                      fill="rgba(15, 20, 28, 0.95)"
                      stroke={TOKENS.colors.crimson}
                      strokeWidth="1.5"
                    />
                    <text
                      x="26"
                      y="5"
                      fill={TOKENS.colors.crimson}
                      fontSize="11"
                      fontWeight="900"
                      fontFamily={TOKENS.typography.fontFamilyMono}
                      letterSpacing="0.08em"
                    >
                      INSOLVENCY POINT
                    </text>
                  </g>
                )}
              </svg>
            </div>
          </div>
        </div>

        {/* LABEL 4: Direct Annotation / Takeaway Line */}
        <div
          style={{
            opacity: footerOpacity,
            backgroundColor: 'rgba(15, 20, 28, 0.92)',
            border: `1px solid ${isCrossover ? TOKENS.colors.crimson : 'rgba(255, 255, 255, 0.12)'}`,
            borderRadius: 10,
            padding: '16px 28px',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              fontSize: 17,
              fontWeight: 600,
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
            }}
          >
            “Manual bank checks take six days to clear, while cash reserves expire at Day 14.”
          </span>
          <span
            style={{
              fontFamily: TOKENS.typography.fontFamilyMono,
              fontSize: 13,
              fontWeight: 800,
              color: isCrossover ? TOKENS.colors.crimson : TOKENS.colors.textMuted,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {isCrossover ? 'DEFAULT CROSSED' : 'BUFFER CRITICAL'}
          </span>
        </div>
      </div>

      {/* -------------------------------------------------------------
          LAYER 3: 2.39:1 CINEMATIC ANAMORPHIC LETTERBOX BARS (55px)
          ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 55,
          backgroundColor: '#000000',
          zIndex: 100,
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
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
          zIndex: 100,
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      />
    </AbsoluteFill>
  );
};

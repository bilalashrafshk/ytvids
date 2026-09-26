import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';

import dispatchBgImg from '../../assets/episode03/060_global_trade_dispatch_bg.jpg';
import { TOKENS } from '../../tokens';

export const GlobalCashDisruptionMap: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // -------------------------------------------------------------
  // 1. CAMERA KINEMATICS (Cinematic Subtle Push Across 135 frames)
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
  // 2. TRADE LINE SEVERANCE (Frame 42: Intercontinental Disruption)
  // -------------------------------------------------------------
  const isCut = frame >= 42;
  const cutProgress = interpolate(frame, [42, 58], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const pulse = (Math.sin(frame * 0.3) + 1) / 2;

  // Arc path coordinates in 900x340 SVG viewport
  // Long Beach: (180, 140)
  // Nairobi: (590, 230)
  const lineDashOffset = interpolate(frame, [0, 135], [0, -120]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        fontFamily: TOKENS.typography.fontFamilySans,
        overflow: 'hidden',
      }}
    >
      {/* -------------------------------------------------------------
          LAYER 1: PHYSICAL SCENE FOUNDATION (Trade Room Feeder Plate)
          ------------------------------------------------------------- */}
      <AbsoluteFill
        style={{
          transform: `scale(${bgScale}) translateY(${bgPanY}px)`,
          transformOrigin: 'center center',
          filter: isCut ? 'brightness(0.85)' : 'brightness(1.0)',
          transition: 'filter 0.3s ease',
        }}
      >
        <Img
          src={dispatchBgImg}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Editorial vignette */}
        <AbsoluteFill
          style={{
            background: isCut
              ? `radial-gradient(ellipse at 50% 50%, rgba(15, 20, 28, 0.65) 0%, rgba(15, 20, 28, 0.95) 100%)`
              : `radial-gradient(ellipse at 50% 50%, rgba(15, 20, 28, 0.50) 0%, rgba(15, 20, 28, 0.90) 100%)`,
          }}
        />
      </AbsoluteFill>

      {/* -------------------------------------------------------------
          LAYER 2: KINETIC TRADE DISRUPTION MAP (Strict 4-Label Max, Single Semantic Accent)
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
              color: isCut ? TOKENS.colors.crimson : TOKENS.colors.textSecondary,
              letterSpacing: '0.14em',
              marginBottom: 8,
              textTransform: 'uppercase',
            }}
          >
            Cross-Border Supply Contagion
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
            Global Trade Disruption
          </h1>
          <div
            style={{
              fontSize: 15,
              color: TOKENS.colors.textMuted,
              marginTop: 8,
            }}
          >
            Source: International Commercial Trade & Settlement Audit
          </div>
        </div>

        {/* LABEL 3: Hero Map Card (Numbers arrive alone, Single Semantic Accent) */}
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
              border: `2px solid ${isCut ? TOKENS.colors.crimson : 'rgba(255, 255, 255, 0.12)'}`,
              borderRadius: 16,
              padding: '28px 36px',
              boxShadow: isCut
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
            {/* Status Callout Header inside Map Card */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                paddingBottom: 14,
              }}
            >
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 13,
                  fontWeight: 800,
                  color: isCut ? TOKENS.colors.crimson : TOKENS.colors.textSecondary,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {isCut ? 'NAIROBI CORRIDOR: SEVERED' : 'CALIFORNIA TO EAST AFRICA TRADE ROUTE'}
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  backgroundColor: isCut ? 'rgba(211, 47, 47, 0.16)' : 'rgba(255, 255, 255, 0.08)',
                  border: `1px solid ${isCut ? TOKENS.colors.crimson : 'rgba(255, 255, 255, 0.2)'}`,
                  borderRadius: 16,
                  padding: '4px 14px',
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 12,
                  fontWeight: 700,
                  color: isCut ? TOKENS.colors.crimson : TOKENS.colors.textSecondary,
                  letterSpacing: '0.1em',
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: isCut ? TOKENS.colors.crimson : TOKENS.colors.textSecondary,
                    boxShadow: isCut ? `0 0 6px ${TOKENS.colors.crimson}` : 'none',
                  }}
                />
                {isCut ? 'COMMERCE OFFLINE' : 'ROUTE ACTIVE'}
              </div>
            </div>

            {/* Vector Map Viewport */}
            <div
              style={{
                width: '100%',
                height: 280,
                position: 'relative',
                borderRadius: 10,
                overflow: 'hidden',
                backgroundColor: 'rgba(10, 14, 22, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <svg
                viewBox="0 0 900 280"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              >
                {/* Simplified continent landmasses in neutral muted slate */}
                {/* North America */}
                <path
                  d="M 60 40 L 160 30 L 220 50 L 260 110 L 230 160 L 180 180 L 140 160 L 100 120 Z"
                  fill="rgba(255, 255, 255, 0.05)"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1"
                />
                {/* South America */}
                <path
                  d="M 220 180 L 280 200 L 290 260 L 230 270 L 200 220 Z"
                  fill="rgba(255, 255, 255, 0.03)"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="1"
                />
                {/* Europe */}
                <path
                  d="M 440 40 L 520 30 L 540 80 L 480 100 L 430 80 Z"
                  fill="rgba(255, 255, 255, 0.05)"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1"
                />
                {/* Africa */}
                <path
                  d="M 440 100 L 540 90 L 610 140 L 620 200 L 580 265 L 500 260 L 460 180 L 430 130 Z"
                  fill="rgba(255, 255, 255, 0.06)"
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="1.2"
                />
                {/* Asia / Middle East */}
                <path
                  d="M 540 40 L 760 30 L 820 100 L 780 180 L 680 150 L 600 110 Z"
                  fill="rgba(255, 255, 255, 0.05)"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1"
                />

                {/* Trade Route Arc from Long Beach (180, 140) across to Nairobi (580, 200) */}
                <path
                  d="M 180 140 Q 380 40 580 200"
                  fill="none"
                  stroke={isCut ? TOKENS.colors.crimson : TOKENS.colors.textSecondary}
                  strokeWidth={isCut ? 3 : 2}
                  strokeDasharray={isCut ? '6 6' : '8 4'}
                  strokeDashoffset={isCut ? 0 : lineDashOffset}
                  opacity={isCut ? 0.9 : 0.6}
                />

                {/* Break Cut Marks at midpoint if severed */}
                {isCut && (
                  <g transform="translate(380, 120)">
                    <line x1="-12" y1="-12" x2="12" y2="12" stroke={TOKENS.colors.crimson} strokeWidth="3" />
                    <line x1="12" y1="-12" x2="-12" y2="12" stroke={TOKENS.colors.crimson} strokeWidth="3" />
                  </g>
                )}

                {/* Node 1: Long Beach, California (180, 140) */}
                <circle cx="180" cy="140" r="6" fill="#FFFFFF" />
                <circle cx="180" cy="140" r="14" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
                <text
                  x="180"
                  y="172"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="12"
                  fontWeight="800"
                  fontFamily={TOKENS.typography.fontFamilyMono}
                  letterSpacing="0.1em"
                >
                  PORT OF LONG BEACH
                </text>

                {/* Node 2: Nairobi, Kenya (580, 200) */}
                <circle
                  cx="580"
                  cy="200"
                  r={isCut ? 8 : 6}
                  fill={isCut ? TOKENS.colors.crimson : '#FFFFFF'}
                  boxShadow={isCut ? `0 0 12px ${TOKENS.colors.crimson}` : 'none'}
                />
                <circle
                  cx="580"
                  cy="200"
                  r={isCut ? 18 + pulse * 8 : 14}
                  fill="none"
                  stroke={isCut ? TOKENS.colors.crimson : 'rgba(255, 255, 255, 0.3)'}
                  strokeWidth="2"
                  opacity={isCut ? 1 - pulse * 0.4 : 0.5}
                />
                <text
                  x="580"
                  y="234"
                  textAnchor="middle"
                  fill={isCut ? TOKENS.colors.crimson : '#FFFFFF'}
                  fontSize="13"
                  fontWeight="900"
                  fontFamily={TOKENS.typography.fontFamilyMono}
                  letterSpacing="0.1em"
                >
                  NAIROBI, KENYA
                </text>
                <text
                  x="580"
                  y="250"
                  textAnchor="middle"
                  fill={isCut ? TOKENS.colors.crimson : TOKENS.colors.textMuted}
                  fontSize="11"
                  fontWeight="700"
                  fontFamily={TOKENS.typography.fontFamilyMono}
                  letterSpacing="0.08em"
                >
                  {isCut ? 'COMMERCE SEVERED' : 'LOGISTICS HUB'}
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* LABEL 4: Direct Annotation / Takeaway Line */}
        <div
          style={{
            opacity: footerOpacity,
            backgroundColor: 'rgba(15, 20, 28, 0.92)',
            border: `1px solid ${isCut ? TOKENS.colors.crimson : 'rgba(255, 255, 255, 0.12)'}`,
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
            “You call your logistics partner in Nairobi. He tells you the same story.”
          </span>
          <span
            style={{
              fontFamily: TOKENS.typography.fontFamilyMono,
              fontSize: 13,
              fontWeight: 800,
              color: isCut ? TOKENS.colors.crimson : TOKENS.colors.textMuted,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {isCut ? 'CORRIDOR PARALYZED' : 'SUPPLY ACTIVE'}
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

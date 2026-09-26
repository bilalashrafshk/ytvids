import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';

import courierBgImg from '../../assets/episode03/059_courier_dispatch_street_bg.jpg';
import { TOKENS } from '../../tokens';

export const CourierCashDepletionMeter: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // -------------------------------------------------------------
  // 1. CAMERA KINEMATICS (Cinematic Slow Push-in across 135 frames)
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
  // 2. CASH DEPLETION KINEMATICS ($85,000 down to $0 at Frame 75)
  // -------------------------------------------------------------
  const drainProgress = interpolate(frame, [15, 75], [0, 1], {
    easing: Easing.bezier(0.3, 0.0, 0.2, 1.0),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const currentCash = Math.max(0, Math.round(85000 * (1 - drainProgress)));
  const isZero = currentCash === 0;

  // Pulse effect when cash reaches 0
  const pulse = isZero ? (Math.sin((frame - 75) * 0.3) + 1) / 2 : 0;

  // Gauge bar width percentage (100% down to 0%)
  const gaugePercent = Math.max(0, Math.round((1 - drainProgress) * 100));

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        fontFamily: TOKENS.typography.fontFamilySans,
        overflow: 'hidden',
      }}
    >
      {/* -------------------------------------------------------------
          LAYER 1: PHYSICAL SCENE FOUNDATION (Manhattan Courier Feeder Plate)
          ------------------------------------------------------------- */}
      <AbsoluteFill
        style={{
          transform: `scale(${bgScale}) translateY(${bgPanY}px)`,
          transformOrigin: 'center center',
          filter: isZero ? 'brightness(0.85)' : 'brightness(1.0)',
          transition: 'filter 0.3s ease',
        }}
      >
        <Img
          src={courierBgImg}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Editorial vignette */}
        <AbsoluteFill
          style={{
            background: isZero
              ? `radial-gradient(ellipse at 50% 50%, rgba(15, 20, 28, 0.65) 0%, rgba(15, 20, 28, 0.95) 100%)`
              : `radial-gradient(ellipse at 50% 50%, rgba(15, 20, 28, 0.50) 0%, rgba(15, 20, 28, 0.90) 100%)`,
          }}
        />
      </AbsoluteFill>

      {/* -------------------------------------------------------------
          LAYER 2: KINETIC CASH DEPLETION GAUGE (Strict 4-Label Max, Single Crimson Accent)
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
              color: isZero ? TOKENS.colors.crimson : TOKENS.colors.textSecondary,
              letterSpacing: '0.14em',
              marginBottom: 8,
              textTransform: 'uppercase',
            }}
          >
            Manual Logistics Dispatch
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
            Emergency Cash Depletion
          </h1>
          <div
            style={{
              fontSize: 15,
              color: TOKENS.colors.textMuted,
              marginTop: 8,
            }}
          >
            Source: Urban Courier Logistics & Cash Refund Dispatch Logs
          </div>
        </div>

        {/* LABEL 3: Hero Metric Gauge Card (Numbers arrive alone, Single Semantic Accent) */}
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
              border: `2px solid ${isZero ? TOKENS.colors.crimson : 'rgba(255, 255, 255, 0.12)'}`,
              borderRadius: 16,
              padding: '40px 64px',
              boxShadow: isZero
                ? `0 24px 60px rgba(0,0,0,0.85), 0 0 ${14 + pulse * 14}px ${TOKENS.colors.crimson}50`
                : '0 24px 60px rgba(0,0,0,0.85)',
              backdropFilter: 'blur(20px)',
              width: '100%',
              maxWidth: 720,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 20,
            }}
          >
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                backgroundColor: isZero ? 'rgba(211, 47, 47, 0.16)' : 'rgba(255, 255, 255, 0.08)',
                border: `1px solid ${isZero ? TOKENS.colors.crimson : 'rgba(255, 255, 255, 0.2)'}`,
                borderRadius: 20,
                padding: '6px 18px',
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 13,
                fontWeight: 700,
                color: isZero ? TOKENS.colors.crimson : TOKENS.colors.textSecondary,
                letterSpacing: '0.12em',
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: isZero ? TOKENS.colors.crimson : TOKENS.colors.textSecondary,
                  boxShadow: isZero ? `0 0 8px ${TOKENS.colors.crimson}` : 'none',
                }}
              />
              {isZero ? 'RESERVES EXHAUSTED ($0)' : 'MANUAL DISPATCH ACTIVE'}
            </div>

            {/* Giant Depletion Number */}
            <div
              style={{
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 100,
                fontWeight: 900,
                color: isZero ? TOKENS.colors.crimson : '#FFFFFF',
                lineHeight: 1,
                letterSpacing: '-0.04em',
                transform: isZero ? `scale(${1 + pulse * 0.04})` : 'none',
              }}
            >
              ${currentCash.toLocaleString()}
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 16,
                fontWeight: 800,
                color: isZero ? TOKENS.colors.crimson : TOKENS.colors.textMuted,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Remaining Cash Buffer
            </div>

            {/* Linear Depletion Bar */}
            <div
              style={{
                width: '100%',
                height: 12,
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderRadius: 6,
                overflow: 'hidden',
                marginTop: 6,
              }}
            >
              <div
                style={{
                  width: `${gaugePercent}%`,
                  height: '100%',
                  backgroundColor: isZero ? TOKENS.colors.crimson : TOKENS.colors.textSecondary,
                  transition: 'width 0.1s linear',
                }}
              />
            </div>
          </div>
        </div>

        {/* LABEL 4: Direct Annotation / Takeaway Line */}
        <div
          style={{
            opacity: footerOpacity,
            backgroundColor: 'rgba(15, 20, 28, 0.92)',
            border: `1px solid ${isZero ? TOKENS.colors.crimson : 'rgba(255, 255, 255, 0.12)'}`,
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
            “They are burning their last cash reserves on bicycle messengers.”
          </span>
          <span
            style={{
              fontFamily: TOKENS.typography.fontFamilyMono,
              fontSize: 13,
              fontWeight: 800,
              color: isZero ? TOKENS.colors.crimson : TOKENS.colors.textMuted,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {isZero ? 'CASH ZEROED' : 'DRAIN RATE: HIGH'}
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

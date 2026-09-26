import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';

import adTradingBgImg from '../../assets/episode03/043_manhattan_ad_trading_desk_bg.jpg';
import { TOKENS } from '../../tokens';

export const AdAuctionBlackoutGraphic: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // -------------------------------------------------------------
  // 1. CAMERA KINEMATICS (Cinematic Subtle Push Across 135 frames)
  // -------------------------------------------------------------
  const cameraProgress = interpolate(frame, [0, durationInFrames], [0, 1], {
    easing: Easing.bezier(0.2, 0.1, 0.2, 1.0),
  });
  const bgScale = interpolate(cameraProgress, [0, 1], [1.0, 1.06]);
  const bgPanX = interpolate(cameraProgress, [0, 1], [0, -12]);
  const bgPanY = interpolate(cameraProgress, [0, 1], [0, -8]);

  // Entrance animations
  const headerOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });
  const headerSlide = interpolate(frame, [0, 15], [-20, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  const cardOpacity = interpolate(frame, [8, 22], [0, 1], { extrapolateRight: 'clamp' });
  const cardSlide = interpolate(frame, [8, 22], [24, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  const footerOpacity = interpolate(frame, [18, 30], [0, 1], { extrapolateRight: 'clamp' });

  // -------------------------------------------------------------
  // 2. THE AUCTION COLLAPSE (Frame 36: Real-time Ad Bids Flatline)
  // -------------------------------------------------------------
  const isCut = frame >= 36;
  const collapseProgress = interpolate(frame, [36, 52], [0, 1], {
    easing: Easing.bezier(0.3, 0.0, 0.15, 1.0),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Store concurrent visitors (1,450 down to 0)
  const currentVisitors = isCut
    ? Math.max(0, Math.round(1450 * (1 - collapseProgress)))
    : 1450;

  const pulse = (Math.sin(frame * 0.35) + 1) / 2;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        fontFamily: TOKENS.typography.fontFamilySans,
        overflow: 'hidden',
      }}
    >
      {/* -------------------------------------------------------------
          LAYER 1: PHYSICAL SCENE FOUNDATION (Manhattan D2C Desk Feeder Plate)
          ------------------------------------------------------------- */}
      <AbsoluteFill
        style={{
          transform: `scale(${bgScale}) translate(${bgPanX}px, ${bgPanY}px)`,
          transformOrigin: 'center center',
          filter: isCut ? 'brightness(0.82)' : 'brightness(1.0)',
          transition: 'filter 0.3s ease',
        }}
      >
        <Img
          src={adTradingBgImg}
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
              : `radial-gradient(ellipse at 50% 50%, rgba(15, 20, 28, 0.48) 0%, rgba(15, 20, 28, 0.90) 100%)`,
          }}
        />
      </AbsoluteFill>

      {/* -------------------------------------------------------------
          LAYER 2: CLEAN KINETIC DATA DISPLAY (Strict 4-Label Max, Single Semantic Accent)
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
            Digital Commerce Dispatch
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
            Online Customer Traffic
          </h1>
          <div
            style={{
              fontSize: 15,
              color: TOKENS.colors.textMuted,
              marginTop: 8,
            }}
          >
            Source: E-Commerce Storefront Traffic Records
          </div>
        </div>

        {/* LABEL 3: Hero Metric Field ("Numbers arrive alone", Single Semantic Accent) */}
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
              padding: '44px 80px',
              boxShadow: isCut
                ? `0 24px 60px rgba(0,0,0,0.85), 0 0 ${15 + pulse * 15}px ${TOKENS.colors.crimson}50`
                : '0 24px 60px rgba(0,0,0,0.85)',
              backdropFilter: 'blur(20px)',
              textAlign: 'center',
              minWidth: 620,
            }}
          >
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                backgroundColor: isCut ? 'rgba(211, 47, 47, 0.16)' : 'rgba(255, 255, 255, 0.08)',
                border: `1px solid ${isCut ? TOKENS.colors.crimson : 'rgba(255, 255, 255, 0.2)'}`,
                borderRadius: 20,
                padding: '6px 18px',
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 13,
                fontWeight: 700,
                color: isCut ? TOKENS.colors.crimson : TOKENS.colors.textSecondary,
                letterSpacing: '0.12em',
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: isCut ? TOKENS.colors.crimson : TOKENS.colors.textSecondary,
                  boxShadow: isCut ? `0 0 8px ${TOKENS.colors.crimson}` : 'none',
                }}
              />
              {isCut ? 'AD AUCTIONS SEVERED ($0 / SEC)' : 'AD AUCTIONS ACTIVE'}
            </div>

            {/* Giant Hero Number */}
            <div
              style={{
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 110,
                fontWeight: 900,
                color: isCut && currentVisitors === 0 ? TOKENS.colors.crimson : '#FFFFFF',
                lineHeight: 1,
                letterSpacing: '-0.04em',
                transform: isCut && currentVisitors === 0 ? `scale(${1 + pulse * 0.04})` : 'none',
              }}
            >
              {currentVisitors.toLocaleString()}
            </div>

            {/* Unit Subtitle */}
            <div
              style={{
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 18,
                fontWeight: 800,
                color: isCut && currentVisitors === 0 ? TOKENS.colors.crimson : TOKENS.colors.textMuted,
                letterSpacing: '0.2em',
                marginTop: 14,
                textTransform: 'uppercase',
              }}
            >
              Live Store Visitors
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
            {isCut
              ? '“The ad auctions are dead. His customer traffic is zero.”'
              : '“He buys his customers on ad auctions.”'}
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
            {isCut ? 'TRAFFIC COLLAPSED' : 'TRAFFIC ACTIVE'}
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

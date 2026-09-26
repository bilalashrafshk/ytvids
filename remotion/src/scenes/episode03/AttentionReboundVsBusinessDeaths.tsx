import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';

import newsroomBgImg from '../../assets/episode03/129_newsroom_splitscreen_oblivious_bg.jpg';
import { TOKENS } from '../../tokens';

export const AttentionReboundVsBusinessDeaths: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const barReveal = (s: number, e: number) => interpolate(frame, [s, e], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  // -------------------------------------------------------------
  // 1. CAMERA KINEMATICS (Slow 2.5D Push-in across 141 frames)
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

  const footerOpacity = interpolate(frame, [60, 75], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        fontFamily: TOKENS.typography.fontFamilySans,
        overflow: 'hidden',
      }}
    >
      {/* -------------------------------------------------------------
          LAYER 1: PHYSICAL SCENE FOUNDATION (Newsroom Splitscreen, Oblivious Hosts)
          ------------------------------------------------------------- */}
      <AbsoluteFill
        style={{
          transform: `scale(${bgScale}) translateY(${bgPanY}px)`,
          transformOrigin: 'center center',
        }}
      >
        <Img
          src={newsroomBgImg}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Editorial vignette */}
        <AbsoluteFill
          style={{
            background: `radial-gradient(ellipse at 50% 50%, rgba(15, 20, 28, 0.6) 0%, rgba(15, 20, 28, 0.94) 100%)`,
          }}
        />
      </AbsoluteFill>

      {/* -------------------------------------------------------------
          LAYER 2: KINETIC DIVERGENCE CHART (Strict 4-Label Max, Single Crimson Accent)
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
              color: TOKENS.colors.crimson,
              letterSpacing: '0.14em',
              marginBottom: 8,
              textTransform: 'uppercase',
            }}
          >
            The Asymmetric Recovery
          </div>
          <h1
            style={{
              fontSize: 38,
              fontWeight: 800,
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Attention Rebounds in Hours, Balance Sheets Die Permanently
          </h1>
          <div style={{ fontSize: 15, color: TOKENS.colors.textMuted, marginTop: 8 }}>
            Source: Platform Traffic Logs & DTC Brand Closure Registry
          </div>
        </div>

        {/* LABEL 3: Hero Divergent Bar Card (Bars arrive alone, Single Crimson Accent) */}
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
              border: '2px solid rgba(255, 255, 255, 0.14)',
              borderRadius: 16,
              padding: '32px 40px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.85)',
              backdropFilter: 'blur(20px)',
              width: '100%',
              maxWidth: 960,
              display: 'flex',
              flexDirection: 'column',
              gap: 28,
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: '#FFFFFF', fontSize: 17, fontWeight: 700 }}>Consumer Attention Rebound</span>
                <span style={{ color: TOKENS.colors.textMuted, fontFamily: TOKENS.typography.fontFamilyMono, fontSize: 18, fontWeight: 800 }}>100% in 4 Hours</span>
              </div>
              <div style={{ width: '100%', height: 28, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 6, overflow: 'hidden' }}>
                <div style={{ width: `${barReveal(20, 45) * 100}%`, height: '100%', backgroundColor: TOKENS.colors.textMuted }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: '#FFFFFF', fontSize: 17, fontWeight: 700 }}>Permanently Liquidated DTC Brands</span>
                <span style={{ color: TOKENS.colors.crimson, fontFamily: TOKENS.typography.fontFamilyMono, fontSize: 18, fontWeight: 800 }}>6,000 Companies Dead</span>
              </div>
              <div style={{ width: '100%', height: 28, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 6, overflow: 'hidden' }}>
                <div style={{ width: `${barReveal(45, 70) * 84}%`, height: '100%', backgroundColor: TOKENS.colors.crimson }} />
              </div>
            </div>
          </div>
        </div>

        {/* LABEL 4: Direct Annotation / Takeaway Line */}
        <div
          style={{
            opacity: footerOpacity,
            backgroundColor: 'rgba(15, 20, 28, 0.92)',
            border: `1px solid ${TOKENS.colors.crimson}60`,
            borderRadius: 10,
            padding: '16px 28px',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontSize: 17, fontWeight: 600, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
            Supply chains cannot survive 30 days of a programmatic freeze.
          </span>
          <span
            style={{
              fontFamily: TOKENS.typography.fontFamilyMono,
              fontSize: 13,
              fontWeight: 800,
              color: TOKENS.colors.crimson,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            CASUALTY REPORT
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

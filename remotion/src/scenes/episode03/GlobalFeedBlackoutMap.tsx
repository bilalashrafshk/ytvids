import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';

import nocBgImg from '../../assets/episode03/035_global_noc_warroom_bg.jpg';
import { TOKENS } from '../../tokens';

export const GlobalFeedBlackoutMap: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // -------------------------------------------------------------
  // 1. CAMERA KINEMATICS (Cinematic Slow Push Across 114 frames)
  // -------------------------------------------------------------
  const cameraProgress = interpolate(frame, [0, durationInFrames], [0, 1], {
    easing: Easing.bezier(0.2, 0.1, 0.2, 1.0),
  });
  const bgScale = interpolate(cameraProgress, [0, 1], [1.0, 1.05]);
  const bgPanY = interpolate(cameraProgress, [0, 1], [0, -12]);

  // Entrance animations (Establish frames 0-18)
  const headerOpacity = interpolate(frame, [0, 16], [0, 1], { extrapolateRight: 'clamp' });
  const headerSlide = interpolate(frame, [0, 16], [-20, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  const cardsOpacity = interpolate(frame, [8, 22], [0, 1], { extrapolateRight: 'clamp' });
  const cardsSlide = interpolate(frame, [8, 22], [25, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  // -------------------------------------------------------------
  // 2. THE BLACKOUT MOMENT (Frame 35: Feeds Go Dark)
  // -------------------------------------------------------------
  const isBlackout = frame >= 35;
  const blackoutProgress = interpolate(frame, [35, 50], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Rapid traffic collapse from 842.6 TB/s down to 0.00 GB/s
  const trafficTbps = isBlackout
    ? Math.max(0, (842.6 * (1 - blackoutProgress)).toFixed(1))
    : '842.6';

  // Electrical flicker pulse right at frame 35-40
  const flicker = frame >= 35 && frame <= 42 ? (frame % 2 === 0 ? 0.3 : 1) : 1;

  // Pulse when dark
  const pulse = (Math.sin(frame * 0.3) + 1) / 2;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        fontFamily: TOKENS.typography.fontFamilySans,
        overflow: 'hidden',
      }}
    >
      {/* -------------------------------------------------------------
          LAYER 1: PHYSICAL SCENE FOUNDATION (Global NOC War Room Feeder Plate)
          ------------------------------------------------------------- */}
      <AbsoluteFill
        style={{
          transform: `scale(${bgScale}) translateY(${bgPanY}px)`,
          transformOrigin: 'center center',
          filter: isBlackout ? `brightness(${0.75 * flicker})` : 'brightness(1.0)',
          transition: 'filter 0.1s ease',
        }}
      >
        <Img
          src={nocBgImg}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Dark editorial vignette and contrast grading */}
        <AbsoluteFill
          style={{
            background: isBlackout
              ? `radial-gradient(ellipse at 50% 50%, rgba(15, 20, 28, 0.65) 0%, rgba(15, 20, 28, 0.94) 100%)`
              : `radial-gradient(ellipse at 50% 50%, rgba(15, 20, 28, 0.45) 0%, rgba(15, 20, 28, 0.88) 100%)`,
          }}
        />
      </AbsoluteFill>

      {/* -------------------------------------------------------------
          LAYER 2: KINETIC NOC INCIDENT HUD & DATA CARDS
          ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 85,
          left: 90,
          right: 90,
          bottom: 85,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          zIndex: 10,
        }}
      >
        {/* Header Block: Title -> Unit -> Visible Source */}
        <div
          style={{
            transform: `translateY(${headerSlide}px)`,
            opacity: headerOpacity,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: isBlackout ? 'rgba(211, 47, 47, 0.15)' : 'rgba(2, 132, 199, 0.15)',
                border: `1px solid ${isBlackout ? TOKENS.colors.crimson : TOKENS.colors.accentLine}60`,
                borderRadius: 4,
                padding: '4px 12px',
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 12,
                fontWeight: 800,
                color: isBlackout ? TOKENS.colors.crimson : TOKENS.colors.accentLine,
                letterSpacing: '0.12em',
                marginBottom: 8,
              }}
            >
              <span>GLOBAL ASN ROUTING TEARDOWN</span>
              <span>•</span>
              <span>INTERNET BACKBONE CENSUS</span>
            </div>
            <h1
              style={{
                fontSize: 38,
                fontWeight: 800,
                color: '#FFFFFF',
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              Worldwide Social Feed Blackout
            </h1>
            <div
              style={{
                fontSize: 14,
                color: TOKENS.colors.textMuted,
                marginTop: 6,
              }}
            >
              Source: CAIDA BGP Routing Observational Database • Global Autonomous System Route Tables
            </div>
          </div>

          {/* Right Status Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              backgroundColor: 'rgba(15, 20, 28, 0.94)',
              border: `1.5px solid ${isBlackout ? TOKENS.colors.crimson : TOKENS.colors.emerald}`,
              borderRadius: 8,
              padding: '10px 20px',
              backdropFilter: 'blur(12px)',
              boxShadow: isBlackout
                ? `0 0 ${10 + pulse * 12}px ${TOKENS.colors.crimson}60`
                : 'none',
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: isBlackout ? TOKENS.colors.crimson : TOKENS.colors.emerald,
                boxShadow: `0 0 10px ${isBlackout ? TOKENS.colors.crimson : TOKENS.colors.emerald}`,
              }}
            />
            <span
              style={{
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 13,
                fontWeight: 800,
                color: isBlackout ? TOKENS.colors.crimson : TOKENS.colors.emerald,
                letterSpacing: '0.1em',
              }}
            >
              {isBlackout ? 'TELEMETRY: ALL SOCIAL SESSIONS SEVERED' : 'TELEMETRY: GLOBAL BACKBONE NOMINAL'}
            </span>
          </div>
        </div>

        {/* Centerpiece: Telemetry Matrix + Large Bandwidth Drain Metric */}
        <div
          style={{
            display: 'flex',
            gap: 36,
            justifyContent: 'center',
            alignItems: 'center',
            transform: `translateY(${cardsSlide}px)`,
            opacity: cardsOpacity,
          }}
        >
          {/* Left Visual: 4 Global Transit Hub Status Nodes */}
          <div
            style={{
              width: 440,
              backgroundColor: 'rgba(15, 20, 28, 0.94)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: 12,
              padding: '24px 28px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.75)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                paddingBottom: 8,
                fontSize: 12,
                fontFamily: TOKENS.typography.fontFamilyMono,
                color: isBlackout ? TOKENS.colors.crimson : TOKENS.colors.amber,
                fontWeight: 700,
                letterSpacing: '0.1em',
              }}
            >
              <span>PRIMARY INTERNET EXCHANGE NODES</span>
              <span>BGP STATUS</span>
            </div>

            {/* Node 1: Ashburn */}
            <div
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                borderLeft: `4px solid ${isBlackout ? TOKENS.colors.crimson : TOKENS.colors.emerald}`,
                borderRadius: 6,
                padding: '10px 14px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>ASHBURN (US-EAST DC2)</div>
                <div style={{ fontSize: 10, fontFamily: TOKENS.typography.fontFamilyMono, color: TOKENS.colors.textMuted }}>EQUINIX FIBER INTERCONNECT</div>
              </div>
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 12,
                  fontWeight: 800,
                  color: isBlackout ? TOKENS.colors.crimson : TOKENS.colors.emerald,
                }}
              >
                {isBlackout ? 'ROUTE WITHDRAWN' : 'ONLINE (312 TB/S)'}
              </div>
            </div>

            {/* Node 2: Slough */}
            <div
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                borderLeft: `4px solid ${isBlackout ? TOKENS.colors.crimson : TOKENS.colors.emerald}`,
                borderRadius: 6,
                padding: '10px 14px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>SLOUGH (LONDON LD5)</div>
                <div style={{ fontSize: 10, fontFamily: TOKENS.typography.fontFamilyMono, color: TOKENS.colors.textMuted }}>EUROPEAN GATEWAY NODE</div>
              </div>
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 12,
                  fontWeight: 800,
                  color: isBlackout ? TOKENS.colors.crimson : TOKENS.colors.emerald,
                }}
              >
                {isBlackout ? 'LINK DROPPED' : 'ONLINE (248 TB/S)'}
              </div>
            </div>

            {/* Node 3: Singapore */}
            <div
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                borderLeft: `4px solid ${isBlackout ? TOKENS.colors.crimson : TOKENS.colors.emerald}`,
                borderRadius: 6,
                padding: '10px 14px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>SINGAPORE (AP-SOUTH SG1)</div>
                <div style={{ fontSize: 10, fontFamily: TOKENS.typography.fontFamilyMono, color: TOKENS.colors.textMuted }}>SUBSEA TRANSIT CONSORTIUM</div>
              </div>
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 12,
                  fontWeight: 800,
                  color: isBlackout ? TOKENS.colors.crimson : TOKENS.colors.emerald,
                }}
              >
                {isBlackout ? 'TRANSIT OFFLINE' : 'ONLINE (176 TB/S)'}
              </div>
            </div>

            {/* Node 4: Tokyo */}
            <div
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                borderLeft: `4px solid ${isBlackout ? TOKENS.colors.crimson : TOKENS.colors.emerald}`,
                borderRadius: 6,
                padding: '10px 14px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>TOKYO (AP-NORTH TY2)</div>
                <div style={{ fontSize: 10, fontFamily: TOKENS.typography.fontFamilyMono, color: TOKENS.colors.textMuted }}>PACIFIC EDGE CACHE</div>
              </div>
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 12,
                  fontWeight: 800,
                  color: isBlackout ? TOKENS.colors.crimson : TOKENS.colors.emerald,
                }}
              >
                {isBlackout ? 'ZERO PACKETS' : 'ONLINE (106 TB/S)'}
              </div>
            </div>
          </div>

          {/* Right Metrics: Global Social Feed Bandwidth */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              width: 580,
            }}
          >
            {/* Metric 1: Aggregate Bandwidth */}
            <div
              style={{
                backgroundColor: 'rgba(15, 20, 28, 0.94)',
                border: `1.5px solid ${isBlackout ? TOKENS.colors.crimson : 'rgba(255, 255, 255, 0.12)'}`,
                borderRadius: 10,
                padding: '28px 36px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
                backdropFilter: 'blur(16px)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 12,
                    fontWeight: 800,
                    color: isBlackout ? TOKENS.colors.crimson : TOKENS.colors.emerald,
                    letterSpacing: '0.12em',
                  }}
                >
                  GLOBAL FEED TRANSIT BANDWIDTH
                </span>
                <span
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 11,
                    color: TOKENS.colors.textMuted,
                  }}
                >
                  MONITORED EGRESS
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                }}
              >
                <span
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 68,
                    fontWeight: 900,
                    color: isBlackout ? TOKENS.colors.crimson : '#FFFFFF',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {isBlackout && blackoutProgress >= 0.9 ? '0.00' : trafficTbps}
                </span>
                <span
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 22,
                    color: isBlackout ? TOKENS.colors.crimson : TOKENS.colors.emerald,
                    fontWeight: 800,
                  }}
                >
                  {isBlackout && blackoutProgress >= 0.9 ? 'GB/S (FLATLINE)' : 'TB/S (GLOBAL)'}
                </span>
              </div>
            </div>

            {/* Metric 2: Impact Callout */}
            <div
              style={{
                backgroundColor: 'rgba(15, 20, 28, 0.94)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderLeft: `5px solid ${isBlackout ? TOKENS.colors.crimson : TOKENS.colors.amber}`,
                borderRadius: 10,
                padding: '22px 28px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
                backdropFilter: 'blur(16px)',
              }}
            >
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 12,
                  fontWeight: 800,
                  color: isBlackout ? TOKENS.colors.crimson : TOKENS.colors.amber,
                  letterSpacing: '0.1em',
                  marginBottom: 6,
                }}
              >
                AD AUCTION PIPELINE STATUS
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '-0.01em',
                }}
              >
                {isBlackout
                  ? 'PROGRAMMATIC IMPRESSION AUCTIONS FROZEN WORLDWIDE'
                  : 'PROCESSING 1.2M REAL-TIME AD BIDS PER SECOND'}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: TOKENS.colors.textMuted,
                  marginTop: 6,
                  fontFamily: TOKENS.typography.fontFamilyMono,
                }}
              >
                IMPACT: 4.8 BILLION CONSUMER SCREENS LOSE DISPATCH CONTACT
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner: Quote & Evidence Sourcing */}
        <div
          style={{
            backgroundColor: 'rgba(15, 20, 28, 0.94)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderLeft: `5px solid ${TOKENS.colors.crimson}`,
            borderRadius: 8,
            padding: '14px 28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span
              style={{
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 12,
                fontWeight: 800,
                color: TOKENS.colors.crimson,
                letterSpacing: '0.12em',
              }}
            >
              NARRATIVE TRANSITION:
            </span>
            <span
              style={{
                fontSize: 17,
                fontWeight: 700,
                color: '#FFFFFF',
              }}
            >
              “Then the feeds go dark.”
            </span>
          </div>
          <div
            style={{
              fontFamily: TOKENS.typography.fontFamilyMono,
              fontSize: 12,
              fontWeight: 800,
              color: isBlackout ? TOKENS.colors.crimson : TOKENS.colors.amber,
            }}
          >
            {isBlackout ? 'CRITICAL DISCONNECTION VERIFIED' : 'MONITORING BGP SESSIONS'}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          LAYER 3: EDITORIAL HUD & ANAMORPHIC LETTERBOXING (55px Bars)
          ------------------------------------------------------------- */}
      {/* Top Letterbox Bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 55,
          backgroundColor: TOKENS.colors.backgroundDark,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 60px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 12,
            color: TOKENS.colors.textMuted,
            letterSpacing: '0.15em',
          }}
        >
          FINANCECRAFT DISPATCH // TELECOM CRISIS DESK
        </div>
        <div
          style={{
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 12,
            color: isBlackout ? TOKENS.colors.crimson : TOKENS.colors.amber,
            letterSpacing: '0.1em',
          }}
        >
          {isBlackout ? 'BLACKOUT LOCK: T+00:00:01' : 'NOMINAL CARRIER TRANSIT'}
        </div>
      </div>

      {/* Bottom Letterbox Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 55,
          backgroundColor: TOKENS.colors.backgroundDark,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 60px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 11,
            color: TOKENS.colors.textMuted,
            letterSpacing: '0.08em',
          }}
        >
          GLOBAL AUTONOMOUS SYSTEM INTERCONNECT // CAIDA BGP DATABASE
        </div>
        <div
          style={{
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 11,
            color: TOKENS.colors.textMuted,
            letterSpacing: '0.08em',
          }}
        >
          BGP PEERING SESSIONS: {isBlackout ? '100% COLLAPSED' : '100% ROUTING'}
        </div>
      </div>
    </AbsoluteFill>
  );
};

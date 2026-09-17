import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

import crumpledPaper from '../assets/crumpled_paper.jpg';
import trumpCutout from '../assets/trump_cutout.png';
import elonCutout from '../assets/elon_cutout.png';

export const NewsprintEditorialShort: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Entrance springs
  const topCardSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 16, stiffness: 85 },
  });

  const bottomCardSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 16, stiffness: 85 },
  });

  // Animated Marker Highlighter draws across text
  const highlight1Progress = interpolate(frame, [25, 60], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const highlight2Progress = interpolate(frame, [45, 80], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Subtitle text highlighter
  const highlightSubProgress = interpolate(frame, [60, 95], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Sketch scribble red line reveal
  const sketchSpring = spring({
    frame: frame - 40,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Gentle camera drift
  const cameraZoom = interpolate(frame, [0, 210], [1, 1.04]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#111317',
        fontFamily: "'Playfair Display', Georgia, serif",
        overflow: 'hidden',
        transform: `scale(${cameraZoom})`,
        transformOrigin: '50% 50%',
      }}
    >
      {/* Dark Textured Carbon Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 50% 50%, #1e2229 0%, #0d0f12 100%)',
        }}
      />
      {/* Subtle halftone line texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 2px, transparent 2px, transparent 6px)',
        }}
      />

      {/* Main Column Container */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 45px',
          gap: 36,
        }}
      >
        {/* ========================================================================= */}
        {/* TOP SECTION: "MY EDIT"                                                   */}
        {/* ========================================================================= */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            opacity: topCardSpring,
            transform: `translateY(${interpolate(topCardSpring, [0, 1], [-40, 0])}px)`,
          }}
        >
          {/* Section Header Pill */}
          <div
            style={{
              fontSize: 26,
              fontWeight: 900,
              fontFamily: "'Outfit', 'Inter', sans-serif",
              letterSpacing: 4,
              color: '#ffffff',
              textTransform: 'uppercase',
              marginBottom: 16,
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
            }}
          >
            MY EDIT
          </div>

          {/* Newspaper Card (Top) */}
          <div
            style={{
              width: '100%',
              height: 590,
              position: 'relative',
              borderRadius: 12,
              overflow: 'hidden',
              border: '3.5px solid #2563eb',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6), 0 0 30px rgba(37, 99, 235, 0.3)',
              backgroundColor: '#f1f1ee',
            }}
          >
            {/* Crumpled Archival Paper Texture */}
            <Img
              src={crumpledPaper}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.85,
                mixBlendMode: 'multiply',
              }}
            />

            {/* Micro Dot Grid Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'radial-gradient(rgba(0,0,0,0.12) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            />

            {/* Content Padding */}
            <div style={{ position: 'absolute', inset: 0, padding: '36px 40px' }}>
              {/* Crimson Date Badge */}
              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: '#991b1b',
                  color: '#ffffff',
                  padding: '4px 12px',
                  borderRadius: 3,
                  fontSize: 13,
                  fontWeight: 700,
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: 1,
                  marginBottom: 18,
                }}
              >
                July 20, 2024
              </div>

              {/* Main Headline with Real-time Yellow Marker Highlighter */}
              <div
                style={{
                  fontSize: 34,
                  fontWeight: 900,
                  lineHeight: 1.22,
                  color: '#0f172a',
                  position: 'relative',
                  zIndex: 10,
                  maxWidth: '72%',
                }}
              >
                {/* Yellow Highlighter Stroke under text */}
                <span style={{ position: 'relative', display: 'inline', zIndex: 1 }}>
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      bottom: 2,
                      height: '80%',
                      width: `${highlight1Progress}%`,
                      backgroundColor: 'rgba(250, 204, 21, 0.85)',
                      zIndex: -1,
                      borderRadius: 3,
                      transform: 'skewX(-6deg)',
                    }}
                  />
                  'I took a Bullet for Democracy,'
                </span>{' '}
                Trump says at First Rally Since Shooting
              </div>

              {/* Sub-headline text with secondary highlight */}
              <div
                style={{
                  marginTop: 18,
                  fontSize: 16,
                  lineHeight: 1.45,
                  color: '#334155',
                  maxWidth: '68%',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Republican presidential nominee Donald Trump made his first public appearance at the party's convention in{' '}
                <span style={{ position: 'relative', display: 'inline', zIndex: 1 }}>
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      bottom: 0,
                      height: '85%',
                      width: `${highlightSubProgress}%`,
                      backgroundColor: 'rgba(250, 204, 21, 0.75)',
                      zIndex: -1,
                    }}
                  />
                  Milwaukee, Wisconsin
                </span>
                , on Monday since a weekend assassination attempt.
              </div>

              {/* Editorial Masthead Rule */}
              <div
                style={{
                  marginTop: 26,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 900,
                    fontStyle: 'italic',
                    fontSize: 18,
                    color: '#0f172a',
                    letterSpacing: -0.5,
                  }}
                >
                  The New York Times
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: 'rgba(0,0,0,0.2)',
                  }}
                />
              </div>
            </div>

            {/* Subject Cutout with Hand-drawn Red Rim Accent Scribbles */}
            <div
              style={{
                position: 'absolute',
                right: 20,
                bottom: 0,
                width: 320,
                height: 480,
                pointerEvents: 'none',
              }}
            >
              <Img
                src={trumpCutout}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'right bottom',
                  filter: 'grayscale(1) contrast(1.15)',
                }}
              />

              {/* Hand-drawn Red Marker Accent Stroke around subject */}
              <svg
                width="320"
                height="480"
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: sketchSpring,
                  transform: `scale(${interpolate(sketchSpring, [0, 1], [0.95, 1])})`,
                }}
              >
                <path
                  d="M 120 180 Q 150 140 210 130 Q 240 170 235 240 Q 240 320 260 440"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeDasharray="6 4"
                />
                {/* Hand-drawn scribble arrow */}
                <path
                  d="M 100 240 Q 120 230 145 250"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth={3}
                  strokeLinecap="round"
                />
                <path
                  d="M 140 240 L 148 252 L 136 254"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth={3}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM SECTION: "ORIGINAL"                                                */}
        {/* ========================================================================= */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            opacity: bottomCardSpring,
            transform: `translateY(${interpolate(bottomCardSpring, [0, 1], [40, 0])}px)`,
          }}
        >
          {/* Section Header Pill */}
          <div
            style={{
              fontSize: 26,
              fontWeight: 900,
              fontFamily: "'Outfit', 'Inter', sans-serif",
              letterSpacing: 4,
              color: '#ffffff',
              textTransform: 'uppercase',
              marginBottom: 16,
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
            }}
          >
            ORIGINAL
          </div>

          {/* Newspaper Card (Bottom: Elon Musk 44B Twitter Deal) */}
          <div
            style={{
              width: '100%',
              height: 590,
              position: 'relative',
              borderRadius: 12,
              overflow: 'hidden',
              border: '3.5px solid #2563eb',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6), 0 0 30px rgba(37, 99, 235, 0.3)',
              backgroundColor: '#f1f1ee',
            }}
          >
            {/* Crumpled Archival Paper Texture */}
            <Img
              src={crumpledPaper}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.85,
                mixBlendMode: 'multiply',
              }}
            />

            {/* Micro Dot Grid Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'radial-gradient(rgba(0,0,0,0.12) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            />

            {/* Content Padding */}
            <div style={{ position: 'absolute', inset: 0, padding: '36px 40px' }}>
              {/* Crimson Date Badge */}
              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: '#991b1b',
                  color: '#ffffff',
                  padding: '4px 12px',
                  borderRadius: 3,
                  fontSize: 13,
                  fontWeight: 700,
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: 1,
                  marginBottom: 18,
                }}
              >
                Oct 27, 2022
              </div>

              {/* Main Headline with Animated Yellow Highlighter */}
              <div
                style={{
                  fontSize: 34,
                  fontWeight: 900,
                  lineHeight: 1.22,
                  color: '#0f172a',
                  position: 'relative',
                  zIndex: 10,
                  maxWidth: '72%',
                }}
              >
                Elon Musk{' '}
                <span style={{ position: 'relative', display: 'inline', zIndex: 1 }}>
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      bottom: 2,
                      height: '80%',
                      width: `${highlight2Progress}%`,
                      backgroundColor: 'rgba(250, 204, 21, 0.85)',
                      zIndex: -1,
                      borderRadius: 3,
                      transform: 'skewX(-6deg)',
                    }}
                  />
                  Completes $44 Billion
                </span>{' '}
                Deal to Own Twitter
              </div>

              {/* Sub-headline text */}
              <div
                style={{
                  marginTop: 18,
                  fontSize: 16,
                  lineHeight: 1.45,
                  color: '#334155',
                  maxWidth: '68%',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                The{' '}
                <span style={{ position: 'relative', display: 'inline', zIndex: 1 }}>
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      bottom: 0,
                      height: '85%',
                      width: `${highlightSubProgress}%`,
                      backgroundColor: 'rgba(250, 204, 21, 0.75)',
                      zIndex: -1,
                    }}
                  />
                  world's richest man closed
                </span>{' '}
                his blockbuster purchase of the social media service, thrusting Twitter into a new era.
              </div>

              {/* Editorial Masthead Rule */}
              <div
                style={{
                  marginTop: 26,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 900,
                    fontStyle: 'italic',
                    fontSize: 18,
                    color: '#0f172a',
                    letterSpacing: -0.5,
                  }}
                >
                  The New York Times
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: 'rgba(0,0,0,0.2)',
                  }}
                />
              </div>
            </div>

            {/* Subject Cutout (Elon Musk) with Red Accent Outline */}
            <div
              style={{
                position: 'absolute',
                right: 20,
                bottom: 0,
                width: 320,
                height: 480,
                pointerEvents: 'none',
              }}
            >
              <Img
                src={elonCutout}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'right bottom',
                  filter: 'grayscale(1) contrast(1.1)',
                }}
              />

              {/* Red marker doodle accent */}
              <svg
                width="320"
                height="480"
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: sketchSpring,
                  transform: `scale(${interpolate(sketchSpring, [0, 1], [0.95, 1])})`,
                }}
              >
                <path
                  d="M 120 190 Q 150 150 200 145 Q 230 180 225 240 Q 230 320 250 440"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeDasharray="6 4"
                />
                {/* Arrow doodle */}
                <path
                  d="M 110 240 Q 130 230 155 250"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth={3}
                  strokeLinecap="round"
                />
                <path
                  d="M 150 240 L 158 252 L 146 254"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth={3}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Footer Channel Watermark */}
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontWeight: 900,
            fontSize: 28,
            letterSpacing: 3,
            color: '#cbd5e1',
            textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            marginTop: 10,
          }}
        >
          STANZMEDIA
        </div>
      </div>
    </AbsoluteFill>
  );
};

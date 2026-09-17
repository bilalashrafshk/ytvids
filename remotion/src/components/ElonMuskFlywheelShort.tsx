import React, { useMemo } from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

// Import local assets
import elonCutout from '../assets/elon_cutout.png';
import citySkyline from '../assets/city_skyline.jpg';

interface CompanyNode {
  name: string;
  valuation: string;
  color: string;
  iconType: 'tesla' | 'spacex' | 'x' | 'neuralink' | 'boring' | 'xai';
}

const COMPANIES: CompanyNode[] = [
  { name: 'Tesla', valuation: '$750B+', color: '#e82127', iconType: 'tesla' },
  { name: 'SpaceX', valuation: '$210B', color: '#005288', iconType: 'spacex' },
  { name: 'X / Twitter', valuation: '$19B', color: '#111111', iconType: 'x' },
  { name: 'Neuralink', valuation: '$8B', color: '#00d2be', iconType: 'neuralink' },
  { name: 'Boring Co', valuation: '$7B', color: '#f59e0b', iconType: 'boring' },
  { name: 'xAI', valuation: '$24B', color: '#8b5cf6', iconType: 'xai' },
];

export const ElonMuskFlywheelShort: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // 1. Kinetic Entrance Springs
  const titleSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  const subjectSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 16, stiffness: 75 },
  });

  const orbitRevealSpring = spring({
    frame: frame - 30,
    fps,
    config: { damping: 18, stiffness: 70 },
  });

  // Camera sharp punch-in zoom: snaps quickly into a heroic close-up around frame 25
  const punchSpring = spring({
    frame: frame - 20,
    fps,
    config: { damping: 15, stiffness: 110 },
  });
  const cameraZoom = interpolate(punchSpring, [0, 1], [1.0, 1.28]);

  // 2. Continuous 3D Orbital Rotation Math
  // Rotates 360 degrees smoothly across the duration
  const baseRotation = (frame / 120) * Math.PI * 2;

  // Ellipse parameters for 3D perspective around torso
  // Center is around x=540, y=1140 (approx waist/torso level of 1080x1920)
  const centerX = width / 2;
  const centerY = height * 0.59;
  const radiusX = 390 * orbitRevealSpring;
  const radiusY = 110 * orbitRevealSpring; // Squashed ellipse creates 3D tilted plane

  // Calculate 3D position, depth, and scale for all 6 nodes
  const nodesWithDepth = useMemo(() => {
    return COMPANIES.map((company, index) => {
      const angle = baseRotation + (index * Math.PI * 2) / COMPANIES.length;
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      // 3D Ellipse projection
      const x = centerX + radiusX * cosA;
      const y = centerY + radiusY * sinA;

      // Depth (z): sinA > 0 is in front of subject, sinA < 0 is behind subject
      const isForeground = sinA >= 0;

      // Scale nodes based on depth perspective (0.75 when far, 1.25 when close)
      const depthScale = interpolate(sinA, [-1, 1], [0.72, 1.22]);

      // Opacity and blur based on depth
      const depthOpacity = interpolate(sinA, [-1, 1], [0.65, 1.0]);

      return {
        ...company,
        x,
        y,
        isForeground,
        depthScale,
        depthOpacity,
        sinA,
      };
    });
  }, [baseRotation, centerX, centerY, radiusX, radiusY]);

  // Split into background (behind Elon) and foreground (in front of Elon)
  const backNodes = nodesWithDepth.filter((n) => !n.isForeground);
  const frontNodes = nodesWithDepth.filter((n) => n.isForeground);

  // Active glowing line pulse
  const pulse = Math.sin(frame * 0.15) * 0.5 + 0.5;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#eef1f5',
        fontFamily: "'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        overflow: 'hidden',
      }}
    >
      {/* Zoomable Stage Container for Elon and 3D Orbit */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: `scale(${cameraZoom})`,
          transformOrigin: '50% 64%',
        }}
      >
      {/* ========================================================================= */}
      {/* LAYER 1: Minimalist Studio Background + Foggy Skyscraper Silhouette      */}
      {/* ========================================================================= */}
      {/* Studio Radial Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 50% 42%, #ffffff 0%, #e2e8f0 70%, #cbd5e1 100%)',
        }}
      />

      {/* Skyscraper City Backdrop with soft studio mist */}
      <div
        style={{
          position: 'absolute',
          bottom: 120,
          left: 0,
          width: '100%',
          height: '65%',
          opacity: 0.38,
          maskImage: 'linear-gradient(to top, black 50%, transparent 95%)',
          WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 95%)',
        }}
      >
        <Img
          src={citySkyline}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center bottom',
            filter: 'contrast(0.9) grayscale(1)',
          }}
        />
      </div>

      {/* Studio floor ground shadow */}
      <div
        style={{
          position: 'absolute',
          bottom: 80,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 520,
          height: 60,
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 0, 0, 0.25)',
          filter: 'blur(20px)',
        }}
      />

      {/* ========================================================================= */}
      {/* LAYER 2: 3D Orbital Ring (Back Arc) + Background Nodes (Behind Subject)  */}
      {/* ========================================================================= */}
      <svg
        width={width}
        height={height}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      >
        <defs>
          <filter id="nodeNeonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Back half of the ellipse (y < centerY) */}
        {orbitRevealSpring > 0.05 && (
          <ellipse
            cx={centerX}
            cy={centerY}
            rx={radiusX}
            ry={radiusY}
            fill="none"
            stroke="rgba(163, 230, 53, 0.55)"
            strokeWidth={3}
            strokeDasharray="8 6"
            strokeLinecap="round"
            opacity={orbitRevealSpring * 0.7}
          />
        )}
      </svg>

      {/* Render Back Nodes (behind subject) */}
      {backNodes.map((node, i) => (
        <RenderOrbitalNode key={i} node={node} />
      ))}

      {/* ========================================================================= */}
      {/* LAYER 3: Centered Cutout Portrait of Elon Musk                            */}
      {/* ========================================================================= */}
      <div
        style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: `translateX(-50%) scale(${interpolate(subjectSpring, [0, 1], [0.85, 1])})`,
          opacity: subjectSpring,
          height: '71%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          zIndex: 20,
          pointerEvents: 'none',
        }}
      >
        {/* Soft edge rim glow around subject */}
        <Img
          src={elonCutout}
          style={{
            height: '100%',
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 20px 35px rgba(0,0,0,0.3)) drop-shadow(0 2px 10px rgba(0,0,0,0.15))',
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* LAYER 4: 3D Orbital Ring (Front Arc) + Foreground Nodes (In Front)       */}
      {/* ========================================================================= */}
      <svg
        width={width}
        height={height}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 30 }}
      >
        {/* Front half glowing ellipse arc */}
        {orbitRevealSpring > 0.05 && (
          <path
            d={`M ${centerX - radiusX} ${centerY} A ${radiusX} ${radiusY} 0 0 0 ${centerX + radiusX} ${centerY}`}
            fill="none"
            stroke="#84cc16"
            strokeWidth={4.5}
            strokeLinecap="round"
            filter="url(#nodeNeonGlow)"
            opacity={orbitRevealSpring}
          />
        )}
      </svg>

      {/* Render Front Nodes (in front of subject, z-index: 35) */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 35, pointerEvents: 'none' }}>
        {frontNodes.map((node, i) => (
          <RenderOrbitalNode key={i} node={node} />
        ))}
      </div>
      </div>

      {/* ========================================================================= */}
      {/* LAYER 5: Kinetic Headlines & Subtitle Telemetry (Top Screen)             */}
      {/* ========================================================================= */}
      <div
        style={{
          position: 'absolute',
          top: 90,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 50,
          pointerEvents: 'none',
          opacity: titleSpring,
          transform: `translateY(${interpolate(titleSpring, [0, 1], [-30, 0])}px)`,
        }}
      >
        {/* Category Pill Tag */}
        <div
          style={{
            padding: '8px 22px',
            borderRadius: 50,
            backgroundColor: 'rgba(15, 23, 42, 0.08)',
            border: '1.5px solid rgba(15, 23, 42, 0.15)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 14,
            fontWeight: 800,
            letterSpacing: 3,
            color: '#334155',
            textTransform: 'uppercase',
            marginBottom: 14,
          }}
        >
          The $1 Trillion Empire
        </div>

        {/* Hero Headline */}
        <div
          style={{
            fontSize: 82,
            fontWeight: 900,
            letterSpacing: -1,
            color: '#0f172a',
            lineHeight: 1,
            textTransform: 'uppercase',
            textAlign: 'center',
            textShadow: '0 2px 16px rgba(255, 255, 255, 0.8), 0 4px 20px rgba(0,0,0,0.1)',
          }}
        >
          ELON MUSK
        </div>

        {/* Dynamic Speech Karaoke Subtitle with Backdrop Pill for 100% Contrast */}
        <div
          style={{
            marginTop: 14,
            padding: '8px 24px',
            borderRadius: 30,
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
            fontSize: 26,
            fontWeight: 700,
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span style={{ color: '#f8fafc' }}>he's not a businessman,</span>
          <span
            style={{
              color: '#a3e635',
              fontWeight: 900,
              textDecoration: 'underline',
              textDecorationThickness: 3,
              textShadow: '0 0 12px rgba(163, 230, 53, 0.6)',
            }}
          >
            he's an empire
          </span>
        </div>
      </div>

      {/* Bottom Mission Card Overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 50,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '12px 28px',
          borderRadius: 30,
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
          zIndex: 50,
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: '#84cc16',
            boxShadow: '0 0 12px #84cc16',
          }}
        />
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            fontWeight: 700,
            color: '#1e293b',
            letterSpacing: 1.5,
          }}
        >
          6 CONCURRENT MONOPOLIES // 3D KINETIC ORBIT
        </span>
      </div>
    </AbsoluteFill>
  );
};

// Sub-component to render each 3D orbital node card
const RenderOrbitalNode: React.FC<{ node: any }> = ({ node }) => {
  const { x, y, name, valuation, depthScale, depthOpacity, isForeground } = node;

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: `translate(-50%, -50%) scale(${depthScale})`,
        opacity: depthOpacity,
        zIndex: isForeground ? 35 : 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pointerEvents: 'none',
      }}
    >
      {/* Neon Green Node Pill / Orb */}
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          border: '3px solid #84cc16',
          boxShadow: isForeground
            ? '0 12px 30px rgba(132, 204, 22, 0.45), 0 0 20px #84cc16'
            : '0 4px 15px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Render Icon */}
        <NodeIcon type={node.iconType} />

        {/* Small neon tracking badge */}
        <div
          style={{
            position: 'absolute',
            bottom: -4,
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: '#84cc16',
            boxShadow: '0 0 10px #84cc16',
          }}
        />
      </div>

      {/* Node Text Callout */}
      <div
        style={{
          marginTop: 10,
          backgroundColor: 'rgba(15, 23, 42, 0.88)',
          backdropFilter: 'blur(10px)',
          borderRadius: 8,
          padding: '4px 12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: 0.5,
            whiteSpace: 'nowrap',
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontSize: 11,
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            color: '#84cc16',
            marginTop: 1,
            whiteSpace: 'nowrap',
          }}
        >
          {valuation}
        </span>
      </div>
    </div>
  );
};

// Vector icons for each company
const NodeIcon: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'tesla':
      return (
        <svg width="34" height="34" viewBox="0 0 100 100" fill="#e82127">
          <path d="M50 25c11.5 0 22.3 2.5 32 7-2.6 4.3-5.7 7.7-9.5 10.3-6.8-3.2-14.4-4.9-22.5-4.9s-15.7 1.7-22.5 4.9C23.7 39.7 20.6 36.3 18 32c9.7-4.5 20.5-7 32-7zm0 24c3 0 5.4-2.4 5.4-5.4V34.5c9.2 0.8 17.8 3.5 25.4 7.8-2 3.8-4.4 7-7.2 9.6-5.4-2.8-11.5-4.4-18.2-4.4v39.8h-10.8V47.5c-6.7 0-12.8 1.6-18.2 4.4-2.8-2.6-5.2-5.8-7.2-9.6 7.6-4.3 16.2-7 25.4-7.8v9.1c0 3 2.4 5.4 5.4 5.4z" />
        </svg>
      );
    case 'spacex':
      return (
        <svg width="36" height="36" viewBox="0 0 100 100" fill="#005288">
          <path d="M15 72l22-22c6-6 15-9 24-9 14 0 26 8 32 20-14-6-29-5-42 4L15 72z" />
          <path d="M85 28L63 50c-6 6-15 9-24 9-14 0-26-8-32-20 14 6 29 5 42-4l36-7z" />
        </svg>
      );
    case 'x':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#111111">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'neuralink':
      return (
        <svg width="32" height="32" viewBox="0 0 100 100" fill="none" stroke="#00d2be" strokeWidth="9">
          <circle cx="50" cy="50" r="32" />
          <path d="M35 50h30M50 35v30" />
        </svg>
      );
    case 'boring':
      return (
        <svg width="32" height="32" viewBox="0 0 100 100" fill="#f59e0b">
          <circle cx="50" cy="50" r="36" fill="none" stroke="#f59e0b" strokeWidth="8" />
          <rect x="36" y="36" width="28" height="28" rx="4" />
        </svg>
      );
    case 'xai':
      return (
        <svg width="32" height="32" viewBox="0 0 100 100" fill="#8b5cf6">
          <path d="M25 25l50 50M75 25L25 75" stroke="#8b5cf6" strokeWidth="12" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
};

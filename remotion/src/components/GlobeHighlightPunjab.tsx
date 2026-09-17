import React, { useMemo } from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { geoOrthographic, geoPath } from 'd3-geo';

import worldLand from '../assets/world_land.json';
import worldBorders from '../assets/world_borders.json';
import pakistanGeo from '../assets/pakistan.json';
import punjabGeo from '../assets/punjab_fixed.json';

export const GlobeHighlightPunjab: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // 1. Globe Rotation & Zoom Animation
  // Starts at Africa / Middle East (-30 lon), rotates smoothly to center on Punjab (-73.5 lon, -31.5 lat)
  const rotProgress = spring({
    frame: frame - 10,
    fps,
    config: { damping: 22, mass: 1.1, stiffness: 55 },
  });

  const currentLon = interpolate(rotProgress, [0, 1], [-15, -73.8], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const currentLat = interpolate(rotProgress, [0, 1], [-12, -31.5], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Scale: zooms in from full globe view (520px) to focused continental view (1150px)
  const zoomProgress = spring({
    frame: frame - 45,
    fps,
    config: { damping: 20, mass: 1.2, stiffness: 45 },
  });

  const globeScale = interpolate(zoomProgress, [0, 1], [480, 1250], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Shift globe slightly to the left to balance the framing with HUD on the right
  const globeTranslateX = interpolate(zoomProgress, [0, 1], [width / 2, width / 2 - 240]);
  const globeTranslateY = height / 2 + 30;

  // 2. Setup D3 Orthographic Projection
  const { projection, pathGenerator } = useMemo(() => {
    const proj = geoOrthographic()
      .scale(globeScale)
      .translate([globeTranslateX, globeTranslateY])
      .rotate([currentLon, currentLat, 0])
      .clipAngle(90);
    const path = geoPath().projection(proj);
    return { projection: proj, pathGenerator: path };
  }, [globeScale, globeTranslateX, globeTranslateY, currentLon, currentLat]);

  // Compute SVG paths
  const landD = useMemo(() => pathGenerator(worldLand as any) || '', [pathGenerator]);
  const bordersD = useMemo(() => pathGenerator(worldBorders as any) || '', [pathGenerator]);
  const pakistanD = useMemo(() => pathGenerator(pakistanGeo as any) || '', [pathGenerator]);
  const punjabD = useMemo(() => pathGenerator(punjabGeo as any) || '', [pathGenerator]);

  // Centroid coordinate for Lahore / Punjab: [74.35, 31.52]
  const pinCoords = useMemo(() => {
    return projection([74.3587, 31.5204]);
  }, [projection]);

  // 3. Highlight Glow & Pulse Animation
  const highlightSpring = spring({
    frame: frame - 65,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  const pulse = Math.sin((frame - 65) * 0.18) * 0.5 + 0.5;

  // 4. HUD Card Reveal
  const hudSpring = spring({
    frame: frame - 75,
    fps,
    config: { damping: 18, stiffness: 85 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#060911',
        fontFamily: "'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        overflow: 'hidden',
        color: '#f8fafc',
      }}
    >
      {/* Background Graticule Grid & Ambient Deep Space Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 45% 50%, rgba(20, 35, 75, 0.4) 0%, rgba(6, 9, 17, 0.98) 75%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Header HUD / Navigation Kicker */}
      <div
        style={{
          position: 'absolute',
          top: 50,
          left: 70,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          zIndex: 30,
        }}
      >
        <div
          style={{
            padding: '7px 16px',
            borderRadius: 8,
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            letterSpacing: 2.5,
            color: '#38bdf8',
            fontWeight: 700,
            textTransform: 'uppercase',
          }}
        >
          Geo-Spatial Vector Engine // Sector 31.5°N 74.3°E
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: '#64748b',
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 10px #10b981',
            }}
          />
          REAL-TIME D3 ORTHOGRAPHIC PROJECTION
        </div>
      </div>

      {/* Main SVG Globe Surface */}
      <svg
        width={width}
        height={height}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      >
        <defs>
          <radialGradient id="oceanGradient" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#111c33" />
            <stop offset="60%" stopColor="#0a1122" />
            <stop offset="100%" stopColor="#040711" />
          </radialGradient>

          <radialGradient id="atmosphereGlow" cx="42%" cy="40%" r="58%">
            <stop offset="85%" stopColor="rgba(56, 189, 248, 0)" />
            <stop offset="97%" stopColor="rgba(56, 189, 248, 0.25)" />
            <stop offset="100%" stopColor="rgba(56, 189, 248, 0.65)" />
          </radialGradient>

          <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur1" />
            <feGaussianBlur stdDeviation="16" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Base Ocean Globe Sphere */}
        <circle
          cx={globeTranslateX}
          cy={globeTranslateY}
          r={globeScale}
          fill="url(#oceanGradient)"
          stroke="rgba(56, 189, 248, 0.25)"
          strokeWidth={1.5}
        />

        {/* 2. World Landmasses */}
        <path
          d={landD}
          fill="#1e293b"
          fillOpacity={0.95}
          stroke="#0f172a"
          strokeWidth={0.5}
        />

        {/* 3. Global Country Borders */}
        <path
          d={bordersD}
          fill="none"
          stroke="rgba(100, 116, 139, 0.45)"
          strokeWidth={0.75}
        />

        {/* 4. Pakistan Country Boundary Overlay */}
        <path
          d={pakistanD}
          fill="rgba(30, 58, 138, 0.35)"
          stroke="#38bdf8"
          strokeWidth={1.5}
          strokeDasharray="4 3"
        />

        {/* 5. Highlighted Punjab Province - Vibrant Amber/Gold Fill */}
        {highlightSpring > 0.01 && (
          <g filter="url(#glowFilter)">
            <path
              d={punjabD}
              fill={`rgba(245, 158, 11, ${0.4 + 0.25 * pulse})`}
              stroke="#fbbf24"
              strokeWidth={2.5}
            />
          </g>
        )}

        {/* 6. Atmosphere Rim Ring */}
        <circle
          cx={globeTranslateX}
          cy={globeTranslateY}
          r={globeScale}
          fill="url(#atmosphereGlow)"
          style={{ mixBlendMode: 'screen' }}
        />

        {/* 7. Target Pin and Radar Pulse */}
        {pinCoords && highlightSpring > 0.1 && (
          <g
            transform={`translate(${pinCoords[0]}, ${pinCoords[1]})`}
            opacity={highlightSpring}
          >
            {/* Pulsing ring */}
            <circle
              r={14 + pulse * 28}
              fill="none"
              stroke="#f59e0b"
              strokeWidth={1.5}
              opacity={1 - pulse}
            />
            {/* Center target dot */}
            <circle r={7} fill="#fbbf24" />
            <circle r={3} fill="#060911" />

            {/* Target Reticle Crosshairs */}
            <line x1={-20} x2={-10} y1={0} y2={0} stroke="#fbbf24" strokeWidth={1.5} />
            <line x1={10} x2={20} y1={0} y2={0} stroke="#fbbf24" strokeWidth={1.5} />
            <line x1={0} x2={0} y1={-20} y2={-10} stroke="#fbbf24" strokeWidth={1.5} />
            <line x1={0} x2={0} y1={10} y2={20} stroke="#fbbf24" strokeWidth={1.5} />

            {/* Connecting Pointer Line towards HUD */}
            <polyline
              points={`16,-16 55,-55 120,-55`}
              fill="none"
              stroke="#fbbf24"
              strokeWidth={1.5}
              strokeDasharray="4 3"
            />
            <circle cx={120} cy={-55} r={3} fill="#fbbf24" />
          </g>
        )}
      </svg>

      {/* 8. Kinetic Telemetry HUD Card on Right Side */}
      <div
        style={{
          position: 'absolute',
          right: 80,
          top: '50%',
          transform: `translateY(-50%) translateX(${interpolate(hudSpring, [0, 1], [80, 0])}px)`,
          opacity: hudSpring,
          width: 450,
          backgroundColor: 'rgba(10, 15, 29, 0.88)',
          border: '1px solid rgba(245, 158, 11, 0.45)',
          borderRadius: 20,
          boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(245, 158, 11, 0.15)',
          backdropFilter: 'blur(20px)',
          padding: '32px 36px',
          zIndex: 30,
        }}
      >
        {/* Card Category Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div
            style={{
              fontSize: 12,
              letterSpacing: 2,
              fontFamily: "'JetBrains Mono', monospace",
              color: '#f59e0b',
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            Target Region Locked
          </div>
          <span
            style={{
              padding: '4px 10px',
              borderRadius: 6,
              backgroundColor: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              color: '#fbbf24',
              fontSize: 11,
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
            }}
          >
            ISO 3166-2: PK-PB
          </span>
        </div>

        {/* Hero Title */}
        <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -0.5, color: '#ffffff', lineHeight: 1.1 }}>
          PUNJAB
        </div>
        <div style={{ fontSize: 16, color: '#94a3b8', marginTop: 4, fontWeight: 500 }}>
          Islamic Republic of Pakistan
        </div>

        {/* Stats Grid */}
        <div
          style={{
            marginTop: 26,
            paddingTop: 22,
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20,
          }}
        >
          <div>
            <div style={{ fontSize: 11, color: '#64748b', fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1 }}>
              POPULATION
            </div>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#f8fafc', marginTop: 4 }}>
              127.7M
            </div>
            <div style={{ fontSize: 11, color: '#10b981', marginTop: 2, fontWeight: 600 }}>
              52.9% of National Total
            </div>
          </div>

          <div>
            <div style={{ fontSize: 11, color: '#64748b', fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1 }}>
              PROVINCIAL GDP
            </div>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#f8fafc', marginTop: 4 }}>
              $180B+
            </div>
            <div style={{ fontSize: 11, color: '#38bdf8', marginTop: 2, fontWeight: 600 }}>
              54% of National Output
            </div>
          </div>

          <div>
            <div style={{ fontSize: 11, color: '#64748b', fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1 }}>
              CAPITAL CITY
            </div>
            <div style={{ fontSize: 18, fontWeight: 600, color: '#f8fafc', marginTop: 4 }}>
              Lahore
            </div>
            <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>
              Cultural & Financial Hub
            </div>
          </div>

          <div>
            <div style={{ fontSize: 11, color: '#64748b', fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1 }}>
              COORDINATES
            </div>
            <div style={{ fontSize: 14, fontFamily: "'JetBrains Mono', monospace", color: '#fbbf24', marginTop: 6 }}>
              31.17°N 72.70°E
            </div>
            <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>
              Land of Five Rivers
            </div>
          </div>
        </div>

        {/* Footer Status Bar */}
        <div
          style={{
            marginTop: 24,
            padding: '12px 16px',
            borderRadius: 10,
            backgroundColor: 'rgba(245, 158, 11, 0.08)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#f59e0b',
              boxShadow: '0 0 10px #f59e0b',
            }}
          />
          <div style={{ fontSize: 12, color: '#cbd5e1', fontFamily: "'JetBrains Mono', monospace" }}>
            Topological Boundary Verified (GeoJSON MultiPolygon)
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

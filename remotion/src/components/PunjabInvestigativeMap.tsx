import React, { useMemo } from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { geoMercator, geoPath } from 'd3-geo';

import worldLand from '../assets/world_land.json';
import worldBorders from '../assets/world_borders.json';
import pakistanGeo from '../assets/pakistan.json';
import punjabGeo from '../assets/punjab_fixed.json';
import riversGeo from '../assets/punjab_rivers.json';
import provincesGeo from '../assets/pak_provinces_fixed.json';

export const PunjabInvestigativeMap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // 1. Camera Movement: Big cinematic zoom-in into Punjab (heroic focus)
  const zoomProgress = spring({
    frame: frame - 5,
    fps,
    config: { damping: 24, mass: 1.4, stiffness: 45 },
  });

  const mapScale = interpolate(zoomProgress, [0, 1], [4800, 7100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const centerLng = interpolate(zoomProgress, [0, 1], [72.3, 72.6], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const centerLat = interpolate(zoomProgress, [0, 1], [30.6, 31.0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // 2. Setup D3 Mercator Projection
  const { projection, pathGenerator } = useMemo(() => {
    const proj = geoMercator()
      .scale(mapScale)
      .center([centerLng, centerLat])
      .translate([width * 0.36, height * 0.54]);
    const path = geoPath().projection(proj);
    return { projection: proj, pathGenerator: path };
  }, [mapScale, centerLng, centerLat, width, height]);

  // 3. Computed SVG geometry
  const landD = useMemo(() => pathGenerator(worldLand as any) || '', [pathGenerator]);
  const bordersD = useMemo(() => pathGenerator(worldBorders as any) || '', [pathGenerator]);
  const pakistanD = useMemo(() => pathGenerator(pakistanGeo as any) || '', [pathGenerator]);
  const punjabD = useMemo(() => pathGenerator(punjabGeo as any) || '', [pathGenerator]);

  // Surrounding context provinces
  const provincePaths = useMemo(() => {
    return (provincesGeo as any[]).map((p) => ({
      name: p.name,
      d: pathGenerator(p.feature) || '',
    }));
  }, [pathGenerator]);

  // 4. Rivers Geometry (Natural Earth 10m Five Rivers System)
  const riverPaths = useMemo(() => {
    return (riversGeo.features as any[]).map((r) => ({
      name: r.properties.name,
      d: pathGenerator(r) || '',
    }));
  }, [pathGenerator]);

  // 5. River Flow Animation Timing
  const riverProgress = interpolate(frame, [10, 80], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // 6. Punjab Territory Bloom Animation (matching globe amber/gold glow)
  const bloomSpring = spring({
    frame: frame - 38,
    fps,
    config: { damping: 16, stiffness: 65 },
  });

  const fillOpacity = interpolate(bloomSpring, [0, 0.6, 1], [0, 0.55, 0.42], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const borderStrokeProgress = interpolate(frame, [30, 80], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Pulse timing
  const pulse = Math.sin(frame * 0.14) * 0.5 + 0.5;

  // 7. Key Geographic Nodes with Large, High-Contrast Labels
  const cities = useMemo(() => {
    const raw = [
      { name: 'LAHORE', subtitle: 'Provincial Capital // 13.1M', coords: [74.3587, 31.5204] as [number, number], primary: true },
      { name: 'FAISALABAD', subtitle: 'Industrial & Textile Core', coords: [73.0791, 31.4504] as [number, number], primary: false },
      { name: 'RAWALPINDI', subtitle: 'Northern Sector Axis', coords: [73.0479, 33.5651] as [number, number], primary: false },
      { name: 'MULTAN', subtitle: 'Southern Agrarian Capital', coords: [71.4753, 30.1575] as [number, number], primary: false },
      { name: 'GUJRANWALA', subtitle: 'Manufacturing Hub', coords: [74.1945, 32.1877] as [number, number], primary: false },
    ];
    return raw.map((c) => ({
      ...c,
      screen: projection(c.coords),
    }));
  }, [projection]);

  // UI Reveal Springs
  const titleSpring = spring({
    frame: frame - 40,
    fps,
    config: { damping: 16, stiffness: 75 },
  });

  const hudSpring = spring({
    frame: frame - 60,
    fps,
    config: { damping: 18, stiffness: 70 },
  });

  return (
    <AbsoluteFill
      style={{
        // Globe color palette: Deep navy/slate oceanic space
        backgroundColor: '#060911',
        fontFamily: "'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        color: '#f8fafc',
        overflow: 'hidden',
      }}
    >
      {/* 1. Deep Ocean Atmosphere & Subtle Horizon Radial Glow (matching globe) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 38% 52%, rgba(20, 35, 75, 0.45) 0%, rgba(6, 9, 17, 0.98) 75%)',
        }}
      />
      {/* 2. Topographical Grid Matrix */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(to right, rgba(56, 189, 248, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* 3. Top Banner Header (Shifted down to avoid overlapping northern cities) */}
      <div
        style={{
          position: 'absolute',
          top: 35,
          left: 65,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          zIndex: 40,
        }}
      >
        <div
          style={{
            padding: '7px 18px',
            borderRadius: 8,
            backgroundColor: 'rgba(56, 189, 248, 0.12)',
            border: '1.5px solid rgba(56, 189, 248, 0.4)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            letterSpacing: 2,
            color: '#38bdf8',
            fontWeight: 800,
            textTransform: 'uppercase',
          }}
        >
          Geo-Spatial Vector Engine // Sector 31.5°N 74.3°E
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: '#94a3b8',
            fontWeight: 600,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 12px #10b981',
            }}
          />
          REAL-TIME D3 ORTHOGRAPHIC / MERCATOR PROJECTION
        </div>
      </div>

      {/* 4. Main SVG Vector Map */}
      <svg
        width={width}
        height={height}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      >
        <defs>
          {/* Glowing Filter for Punjab & Rivers */}
          <filter id="punjabAmberGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur1" />
            <feGaussianBlur stdDeviation="22" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="riverElectricCyanGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="b1" />
            <feGaussianBlur stdDeviation="9" result="b2" />
            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Land Base (Matching Globe: #1e293b deep slate) */}
        <path d={landD} fill="#1e293b" fillOpacity={0.95} stroke="#0f172a" strokeWidth={0.8} />

        {/* Surrounding Context Provinces (Sindh, KPK, Balochistan) */}
        {provincePaths.map((p, idx) => (
          <path
            key={idx}
            d={p.d}
            fill="#152238"
            fillOpacity={0.6}
            stroke="rgba(100, 116, 139, 0.35)"
            strokeWidth={1.2}
            strokeDasharray="5 3"
          />
        ))}

        {/* Global Country Borders */}
        <path
          d={bordersD}
          fill="none"
          stroke="rgba(100, 116, 139, 0.45)"
          strokeWidth={1}
        />

        {/* Pakistan Country Boundary (Globe style: cyan dash) */}
        <path
          d={pakistanD}
          fill="rgba(30, 58, 138, 0.35)"
          stroke="#38bdf8"
          strokeWidth={2}
          strokeDasharray="6 4"
        />

        {/* PUNJAB TERRITORIAL BLOOM (Globe Amber/Gold: #fbbf24 & rgba(245, 158, 11)) */}
        {bloomSpring > 0.01 && (
          <g filter="url(#punjabAmberGlow)">
            {/* Rich warm amber fill */}
            <path
              d={punjabD}
              fill={`rgba(245, 158, 11, ${fillOpacity})`}
              stroke="none"
            />
            {/* Crisp glowing gold perimeter */}
            <path
              d={punjabD}
              fill="none"
              stroke="#fbbf24"
              strokeWidth={3}
              strokeDasharray={2400}
              strokeDashoffset={2400 * (1 - borderStrokeProgress)}
            />
          </g>
        )}

        {/* FIVE RIVERS SYSTEM (Electric Cyan arterial paths) */}
        <g filter="url(#riverElectricCyanGlow)">
          {riverPaths.map((r, i) => (
            <path
              key={i}
              d={r.d}
              fill="none"
              stroke="#38bdf8"
              strokeWidth={2.6}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={1800}
              strokeDashoffset={1800 * (1 - riverProgress)}
            />
          ))}
        </g>

        {/* River Underglow */}
        {riverPaths.map((r, i) => (
          <path
            key={`under-${i}`}
            d={r.d}
            fill="none"
            stroke="rgba(56, 189, 248, 0.35)"
            strokeWidth={7}
            strokeLinecap="round"
            strokeDasharray={1800}
            strokeDashoffset={1800 * (1 - riverProgress)}
          />
        ))}

        {/* City Reticles and Crosshairs */}
        {cities.map((city, idx) => {
          if (!city.screen) return null;
          const [cx, cy] = city.screen;
          const nodeDelay = 40 + idx * 7;
          const nodeSpring = spring({
            frame: frame - nodeDelay,
            fps,
            config: { damping: 14, stiffness: 90 },
          });

          if (nodeSpring <= 0.01) return null;

          return (
            <g key={idx} transform={`translate(${cx}, ${cy})`} opacity={nodeSpring}>
              {/* Radar pulse for Lahore HQ */}
              {city.primary && (
                <circle
                  r={14 + pulse * 28}
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth={2}
                  opacity={1 - pulse}
                />
              )}
              {/* Target Dot */}
              <circle
                r={city.primary ? 8 : 5}
                fill={city.primary ? '#fbbf24' : '#38bdf8'}
              />
              <circle r={city.primary ? 3.5 : 2} fill="#060911" />

              {/* Target Reticle Crosshairs for Lahore */}
              {city.primary && (
                <>
                  <line x1={-22} x2={-12} y1={0} y2={0} stroke="#fbbf24" strokeWidth={2} />
                  <line x1={12} x2={22} y1={0} y2={0} stroke="#fbbf24" strokeWidth={2} />
                  <line x1={0} x2={0} y1={-22} y2={-12} stroke="#fbbf24" strokeWidth={2} />
                  <line x1={0} x2={0} y1={12} y2={22} stroke="#fbbf24" strokeWidth={2} />

                  {/* Leader line pointing to Lahore label */}
                  <polyline
                    points="16,-16 45,-45 85,-45"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth={2}
                    strokeDasharray="4 3"
                  />
                  <circle cx={85} cy={-45} r={3.5} fill="#fbbf24" />
                </>
              )}
            </g>
          );
        })}
      </svg>

      {/* 5. BIG BOLD FLOATING CITY LABELS (HTML Overlay Layer) */}
      {cities.map((city, idx) => {
        if (!city.screen) return null;
        const [cx, cy] = city.screen;
        const nodeDelay = 40 + idx * 7;
        const nodeSpring = spring({
          frame: frame - nodeDelay,
          fps,
          config: { damping: 16, stiffness: 85 },
        });

        if (nodeSpring <= 0.05) return null;

        if (city.primary) {
          // HERO LAHORE LABEL (Large, crisp, prominent)
          return (
            <div
              key={idx}
              style={{
                position: 'absolute',
                left: cx + 95,
                top: cy - 65,
                opacity: nodeSpring,
                transform: `translateX(${interpolate(nodeSpring, [0, 1], [-20, 0])}px)`,
                pointerEvents: 'none',
                zIndex: 35,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span
                  style={{
                    fontSize: 28,
                    fontWeight: 900,
                    letterSpacing: 2,
                    fontFamily: "'Outfit', sans-serif",
                    color: '#ffffff',
                    textShadow: '0 3px 12px rgba(0,0,0,0.95)',
                  }}
                >
                  LAHORE
                </span>
                <span
                  style={{
                    fontSize: 12,
                    padding: '3px 8px',
                    borderRadius: 5,
                    backgroundColor: '#f59e0b',
                    color: '#000000',
                    fontWeight: 900,
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: 1,
                  }}
                >
                  HQ // CAPITAL
                </span>
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#fbbf24',
                  fontFamily: "'JetBrains Mono', monospace",
                  marginTop: 4,
                  letterSpacing: 0.5,
                  textShadow: '0 2px 8px rgba(0,0,0,0.9)',
                }}
              >
                31.52°N 74.35°E // METRO CORE (13.1M)
              </div>
            </div>
          );
        }

        // Secondary City Labels
        return (
          <div
            key={idx}
            style={{
              position: 'absolute',
              left: cx + 14,
              top: cy - 14,
              opacity: nodeSpring,
              pointerEvents: 'none',
              zIndex: 30,
            }}
          >
            <div
              style={{
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: 1.5,
                fontFamily: "'Outfit', sans-serif",
                color: '#ffffff',
                textShadow: '0 3px 8px rgba(0,0,0,0.95), 0 0 12px rgba(0,0,0,0.9)',
              }}
            >
              {city.name}
            </div>
            <div
              style={{
                fontSize: 12,
                color: '#94a3b8',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 600,
                letterSpacing: 0.5,
                textShadow: '0 2px 6px rgba(0,0,0,0.9)',
              }}
            >
              {city.subtitle}
            </div>
          </div>
        );
      })}

      {/* 6. HERO PROVINCIAL TITLE WATERMARK (Bottom-Left) */}
      <div
        style={{
          position: 'absolute',
          left: 65,
          bottom: 45,
          opacity: titleSpring,
          transform: `translateY(${interpolate(titleSpring, [0, 1], [30, 0])}px)`,
          pointerEvents: 'none',
          zIndex: 35,
        }}
      >
        <div
          style={{
            fontSize: 16,
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: 3.5,
            color: '#f59e0b',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: '50%',
              backgroundColor: '#f59e0b',
              boxShadow: '0 0 12px #f59e0b',
            }}
          />
          PROVINCE OF FIVE RIVERS
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 900,
            letterSpacing: -1.5,
            color: '#ffffff',
            lineHeight: 1,
            marginTop: 6,
            textShadow: '0 4px 20px rgba(0,0,0,0.9)',
          }}
        >
          PUNJAB
        </div>
        <div
          style={{
            display: 'flex',
            gap: 14,
            marginTop: 12,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 14,
            fontWeight: 700,
            color: '#cbd5e1',
          }}
        >
          <span style={{ color: '#38bdf8' }}>INDUS</span>
          <span style={{ color: '#f59e0b' }}>•</span>
          <span style={{ color: '#38bdf8' }}>JHELUM</span>
          <span style={{ color: '#f59e0b' }}>•</span>
          <span style={{ color: '#38bdf8' }}>CHENAB</span>
          <span style={{ color: '#f59e0b' }}>•</span>
          <span style={{ color: '#38bdf8' }}>RAVI</span>
          <span style={{ color: '#f59e0b' }}>•</span>
          <span style={{ color: '#38bdf8' }}>SUTLEJ</span>
        </div>
      </div>

      {/* 7. TELEMETRY BRIEFING HUD CARD (Right Side, Matching Globe Style) */}
      <div
        style={{
          position: 'absolute',
          right: 65,
          top: '50%',
          transform: `translateY(-50%) translateX(${interpolate(hudSpring, [0, 1], [80, 0])}px)`,
          opacity: hudSpring,
          width: 470,
          backgroundColor: 'rgba(10, 15, 29, 0.9)',
          border: '1.5px solid rgba(245, 158, 11, 0.45)',
          borderRadius: 22,
          boxShadow: '0 35px 70px -15px rgba(0, 0, 0, 0.85), 0 0 45px rgba(245, 158, 11, 0.15)',
          backdropFilter: 'blur(20px)',
          padding: '36px 40px',
          zIndex: 40,
        }}
      >
        {/* Card Category Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <div
            style={{
              fontSize: 13,
              letterSpacing: 2,
              fontFamily: "'JetBrains Mono', monospace",
              color: '#f59e0b',
              fontWeight: 800,
              textTransform: 'uppercase',
            }}
          >
            Target Region Locked
          </div>
          <span
            style={{
              padding: '4px 12px',
              borderRadius: 6,
              backgroundColor: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              color: '#fbbf24',
              fontSize: 12,
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 800,
            }}
          >
            ISO 3166-2: PK-PB
          </span>
        </div>

        {/* Hero Title */}
        <div style={{ fontSize: 40, fontWeight: 900, letterSpacing: -0.5, color: '#ffffff', lineHeight: 1.1 }}>
          PUNJAB
        </div>
        <div style={{ fontSize: 18, color: '#94a3b8', marginTop: 4, fontWeight: 500 }}>
          Islamic Republic of Pakistan
        </div>

        {/* Stats 2x2 Grid with Extra Large Numbers */}
        <div
          style={{
            marginTop: 26,
            paddingTop: 24,
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
          }}
        >
          <div>
            <div style={{ fontSize: 13, color: '#64748b', fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1.5, fontWeight: 700 }}>
              POPULATION
            </div>
            <div style={{ fontSize: 30, fontWeight: 900, color: '#f8fafc', marginTop: 4 }}>
              127.7M
            </div>
            <div style={{ fontSize: 13, color: '#10b981', marginTop: 2, fontWeight: 700 }}>
              52.9% of National Total
            </div>
          </div>

          <div>
            <div style={{ fontSize: 13, color: '#64748b', fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1.5, fontWeight: 700 }}>
              PROVINCIAL GDP
            </div>
            <div style={{ fontSize: 30, fontWeight: 900, color: '#f8fafc', marginTop: 4 }}>
              $180B+
            </div>
            <div style={{ fontSize: 13, color: '#38bdf8', marginTop: 2, fontWeight: 700 }}>
              54% of National Output
            </div>
          </div>

          <div>
            <div style={{ fontSize: 13, color: '#64748b', fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1.5, fontWeight: 700 }}>
              IRRIGATION CANALS
            </div>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#38bdf8', marginTop: 4 }}>
              58,000 km
            </div>
            <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 2 }}>
              World's Largest System
            </div>
          </div>

          <div>
            <div style={{ fontSize: 13, color: '#64748b', fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1.5, fontWeight: 700 }}>
              WHEAT PRODUCTION
            </div>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#fbbf24', marginTop: 4 }}>
              76%
            </div>
            <div style={{ fontSize: 13, color: '#fbbf24', marginTop: 2, fontWeight: 700 }}>
              National Breadbasket
            </div>
          </div>
        </div>

        {/* Footer Status Bar */}
        <div
          style={{
            marginTop: 26,
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
              width: 9,
              height: 9,
              borderRadius: '50%',
              backgroundColor: '#f59e0b',
              boxShadow: '0 0 10px #f59e0b',
            }}
          />
          <div style={{ fontSize: 13, color: '#cbd5e1', fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>
            Topological MultiPolygon (GeoJSON 1:110m + Hydro 10m)
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

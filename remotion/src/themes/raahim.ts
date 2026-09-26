// Raahim — Mid-Century Deadpan theme. Palette and semantic lock: channels/raahim/CHANNEL.md §4.
// Same shape as ../tokens.ts so components can swap themes; check with:
//   python3 check_remotion_theme.py --tokens remotion/src/themes/raahim.ts <dir>
export const TOKENS = {
  colors: {
    background: '#F3EAD3', // warm cream paper
    backgroundDark: '#2B2A28', // charcoal (night / title frames)
    surfaceCard: '#E4D6B5', // aged cream paper shadow
    textPrimary: '#2B2A28', // charcoal ink
    textSecondary: '#5C574E', // faded ink
    textMuted: '#8C8474',
    gridLine: '#D9CBA8',
    borderCard: '#2B2A28',
    // Semantic Accents
    teal: '#2F7F7A', // the world still normal / calm
    orange: '#D2692F', // escalation — things getting worse
    mustard: '#E1A73B', // the number to remember
    tomato: '#D8433A', // catastrophe peak only (<= 1 per act)
  },
  typography: {
    fontFamilyHeadline: "'Bowlby One', 'Arial Black', sans-serif",
    fontFamilySans: "'Jost', 'Futura', system-ui, sans-serif",
  },
  texture: {
    halftoneOpacity: 0.12,
    grainOpacity: 0.08,
    jitterPx: 1.5, // film-frame jitter
    characterFps: 10, // limited animation for cut-out characters
  },
  dimensions: {
    width: 1920,
    height: 1080,
    fps: 30,
  },
};

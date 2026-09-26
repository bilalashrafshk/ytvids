import { loadFont as loadBowlby } from '@remotion/google-fonts/BowlbyOne';
import { loadFont as loadJost } from '@remotion/google-fonts/Jost';

// Loaded once at import; Remotion waits for them before rendering.
export const HEADLINE = loadBowlby().fontFamily;
export const SANS = loadJost('normal', { weights: ['400', '600'], subsets: ['latin'] }).fontFamily;

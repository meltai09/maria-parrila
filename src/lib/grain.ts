export type GrainLevel = 1 | 2;

export const GRAIN_LEVEL_CONFIG: Record<GrainLevel, { baseFrequency: number; opacity: number; tile: number }> = {
  1: { baseFrequency: 0.85, opacity: 0.35, tile: 140 },
  2: { baseFrequency: 0.7, opacity: 0.55, tile: 220 },
};

/**
 * Same fractalNoise + color-matrix formula used everywhere in the project
 * for the distressed-poster grain (TexturedHeading, and anything else that
 * wants the identical texture). Kept here as the single source of truth so
 * every consumer produces byte-identical grain, not a visually-similar
 * reimplementation.
 */
export function grainDataUri(baseFrequency: number, opacity: number, tile: number, dark: boolean) {
  const rgb = dark ? "0 0 0 0 1  0 0 0 0 1  0 0 0 0 1" : "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${tile}" height="${tile}"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="${baseFrequency}" numOctaves="4" stitchTiles="stitch" seed="7"/><feColorMatrix type="matrix" values="${rgb}  0 0 0 ${opacity} 0"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

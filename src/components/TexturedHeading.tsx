import { CSSProperties, ElementType, ReactNode } from "react";
import { GRAIN_LEVEL_CONFIG, grainDataUri, type GrainLevel } from "@/lib/grain";

type Level = GrainLevel;

type TexturedHeadingProps = {
  as?: ElementType;
  level?: Level;
  color?: string;
  /** Text sits dark-on-light (e.g. ink text on an orange section). The
   * grain uses white speckle instead of black so it lightens rather than
   * darkens an already-dark base color — still visible either way. */
  dark?: boolean;
  /** Multiplier (0-1) on the level's default grain opacity. Pale,
   * low-saturation colors (e.g. cream) need this turned down: pushing a
   * low-saturation color's luminosity down far enough to read as "grain"
   * makes it approach neutral gray regardless of blend mode, since hue
   * only stays visually legible once you're away from the extremes of the
   * lightness range. Saturated colors (gold) hold their tint even at the
   * default intensity. */
  intensity?: number;
  rotate?: number;
  className?: string;
  children: ReactNode;
};

const LEVEL_CONFIG = GRAIN_LEVEL_CONFIG;

/**
 * Heading with a subtle distressed-poster grain, produced by clipping an
 * SVG feTurbulence noise layer to the text shape (background-clip: text).
 * Level 1 = titles (grain barely visible). Level 2 = hero feature word
 * (heavier grain, optional rotation, like a torn poster cutout).
 *
 * Blend mode is "luminosity", not multiply/screen: per the CSS compositing
 * spec, `luminosity` takes the backdrop's hue+saturation and only imposes
 * the source layer's luminosity — the grain can only ever vary how
 * light/dark the text looks, never its hue. That fixes drift toward an
 * unrelated color, but doesn't fix a pale color (like cream) simply
 * looking gray once darkened enough — that's `intensity`'s job.
 */
export function TexturedHeading({
  as: Tag = "h2",
  level = 1,
  color = "var(--color-cream)",
  dark = false,
  intensity = 1,
  rotate,
  className = "",
  children,
}: TexturedHeadingProps) {
  const cfg = LEVEL_CONFIG[level];
  const opacity = (dark ? cfg.opacity * 0.6 : cfg.opacity) * intensity;
  const grain = grainDataUri(cfg.baseFrequency, opacity, cfg.tile, dark);

  const style: CSSProperties = {
    backgroundImage: `url("${grain}"), linear-gradient(${color}, ${color})`,
    backgroundSize: `${cfg.tile}px ${cfg.tile}px, 100% 100%`,
    backgroundRepeat: "repeat, no-repeat",
    backgroundBlendMode: "luminosity",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block",
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
  };

  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
}

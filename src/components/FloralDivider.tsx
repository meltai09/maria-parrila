import Image from "next/image";

/**
 * Floral illustration straddling the Localização/CTA-final seam. Rendered
 * as a sibling of <Location /> and <SiteFooter /> in page.tsx — NOT nested
 * inside either — for the same reason as <HeroFlameDivider />: the footer
 * is `overflow-hidden` (`bg-grain relative overflow-hidden bg-ink`), so an
 * element nested inside it could never visually extend past its own box,
 * which is exactly what straddling the seam requires (part of the art over
 * Location's orange, part over the footer's black). As a sibling under
 * <main>, which has no overflow clipping, that restriction doesn't apply.
 *
 * Anchoring technique: negative top/bottom margins as percentages — same
 * one validated (and iterated on) for HeroFlameDivider. A block element's
 * vertical margin percentages resolve against its CONTAINING BLOCK'S
 * WIDTH, and this image's own rendered height is also a function of that
 * same width (fixed 2172×228 aspect ratio) — so a margin expressed as a
 * percentage of width is always that same fraction of the image's own
 * rendered height, at any viewport width, with no JS/translateY/one-time
 * offset calculation.
 *
 * The two margins are DELIBERATELY UNEQUAL (not a 50/50 split) — same
 * lesson as the flame divider: this art's own silhouette isn't symmetric
 * top-to-bottom. Row-by-row alpha density (sampled via `sharp`) shows
 * opaque content spans rows 8-220 (of 228), climbing gradually from the
 * top, peaking in a broad band around rows 120-165, and tapering back off
 * by row 220 — a much gentler bell curve than the flame divider's sharp
 * plateau+cliff, but still visibly bottom-heavy: the density-weighted
 * centroid sits at row ~135 (59.2% down the image), well past the
 * geometric midpoint (row 114, 50%). Centering on the geometric midpoint
 * (an equal 50/50 split) would put more of the visual weight below the
 * seam than above it. Weighting the split so row 135 (not row 114) lands
 * on the seam: margin-top = -(135/228) × (228/2172) ≈ -6.21%,
 * margin-bottom = -(1 − 135/228) × (228/2172) ≈ -4.28% (their sum still
 * equals -(228/2172) ≈ -10.50%, i.e. still exactly cancels the image's
 * own height — net-zero contribution to the page's flow is preserved, so
 * Location's bottom edge and the footer's top edge stay exactly where
 * they'd be without this element).
 *
 * `position: relative` (without any offset) + `z-10` is only there to make
 * z-index apply at all (z-index has no effect on statically positioned
 * elements) — it draws the art above the footer's own content in the
 * overlap region. `pointer-events-none` keeps it from intercepting clicks
 * meant for whatever sits beneath it.
 */
export function FloralDivider() {
  return (
    <Image
      src="/images/divisoria-floral-cortada.png"
      alt=""
      aria-hidden="true"
      width={2172}
      height={228}
      sizes="100vw"
      className="relative z-10 -mt-[6.21%] -mb-[4.28%] block h-auto w-full pointer-events-none"
    />
  );
}

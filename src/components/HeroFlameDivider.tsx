import Image from "next/image";

/**
 * Flame illustration straddling the Hero/Sobre seam. Rendered as a
 * sibling of <Hero /> and <About /> in page.tsx (NOT nested inside
 * Hero's own <section>) because that section has `overflow-hidden`
 * (needed for its crossfade backdrop and carousel transforms) — an
 * element nested inside it can never visually extend past the
 * section's own box, which is exactly what straddling the seam
 * requires (half the art over Hero's background, half over Sobre's).
 * As a sibling under <main>, which has no overflow clipping, that
 * restriction doesn't apply.
 *
 * Anchoring technique: negative top/bottom margins as percentages,
 * NOT translateY/JS/a one-time computed offset (those approaches went
 * stale whenever Hero's content height changed — documented in
 * earlier rounds). A block element's vertical margin percentages
 * resolve against its CONTAINING BLOCK'S WIDTH, and this image's own
 * rendered height is also a function of that same width (fixed
 * 2172×214 aspect ratio) — so any margin expressed as a percentage of
 * width is always that same fraction of the image's own rendered
 * height, at any viewport width, with no JS recalculation.
 *
 * The two margins are DELIBERATELY UNEQUAL (not a 50/50 split): the
 * art's own silhouette isn't symmetric top-to-bottom — row-by-row
 * alpha density (sampled via `sharp`) shows sparse flame tips from
 * row 0 to ~row 150 (climbing from 0% to ~90% opaque-width), a dense,
 * near-continuous "ground line" band around rows 155-172 (88-97%
 * opaque width — this is the silhouette's visual base), then a fast
 * drop-off from row ~173 to ~180 (80% down to 13%) into a few sparse
 * flower/leaf tips hanging below (rows 180-206, under 15%). An equal
 * 50/50 split (the previous version, -4.93%/-4.93%) centers the
 * image's geometric midpoint (row 107) on the seam — but row 107 is
 * still deep in the sparse upper region, which pushes the actual
 * dense base band (row ~172, 80.4% down the image) far below the
 * seam, into Sobre. That was the bug reported: the flames read as
 * "sitting inside the orange section" instead of "growing out of the
 * transition", because the part of the art that visually reads as
 * "the fire" was mostly below the line, not straddling it.
 *
 * Fixed by weighting the split so row ~150 (not row 107) lands on the
 * seam: margin-top = -(150/214) × (214/2172) ≈ -6.91%, margin-bottom
 * = -(1 − 150/214) × (214/2172) ≈ -2.95% (their sum still equals
 * -(214/2172) ≈ -9.85%, i.e. still exactly cancels the image's own
 * height — net-zero contribution to the page's flow is preserved, so
 * Hero's bottom edge and About's top edge stay exactly where they'd
 * be without this element, same as before). Row 150 sits just before
 * the density plateau (rows 155-172) rather than inside its peak —
 * pulled back from an initial attempt at row 172, which read
 * correctly at the seam but, at very wide viewports (this image is
 * 100vw with no height cap, so it renders tallest there), pushed
 * individual flame tongues up far enough to visually touch the CTA
 * button. Row 150 keeps a comfortable, empirically-checked clearance
 * to the CTA/dots at 1920px while still landing the visual base
 * clearly on the seam, with only the sparse flower/leaf tips below it
 * dipping into Sobre — a few px, not dozens.
 *
 * `position: relative` (without any offset) + `z-10` is only there to
 * make z-index apply at all (z-index has no effect on statically
 * positioned elements) — it draws the flame above Sobre's own content
 * in the overlap region. `pointer-events-none` keeps it from
 * intercepting clicks meant for whatever sits beneath it.
 */
export function HeroFlameDivider() {
  return (
    <Image
      src="/images/divisoria-chamas-cortada.png"
      alt=""
      aria-hidden="true"
      width={2172}
      height={214}
      sizes="100vw"
      className="relative z-10 -mt-[6.91%] -mb-[2.95%] block h-auto w-full pointer-events-none"
    />
  );
}

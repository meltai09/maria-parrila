import Image from "next/image";

export function SobreDivider() {
  return (
    <div className="relative w-full bg-orange-sobre" aria-hidden="true">
      {/* width/height (not fill) so the container's height is the image's
          own intrinsic ratio at 100% width — never cropped, never forced
          to a fixed height. If that makes the band tall, that's correct;
          any extra space is filled with the same orange as the artwork's
          own sky, never by cutting the art to fit.

          Asset is the "-cortada" (cropped) variant, not the original
          ilustracao-floresta-divisor.png: measured via `sharp` (row-by-row
          color-variance scan, calibrated against the pure-sky noise floor
          to avoid false positives from the art's own print-grain texture)
          that the top ~44.5% of the original 1672×941 canvas (rows 0-418)
          is a flat, empty orange "sky" band with zero illustrated content
          — no birds, clouds, or foliage, just uniform color. That dead
          band was rendering at full width same as the rest of the image,
          directly causing the large visible gap reported between the end
          of the "Sobre" section's content and the first visible part of
          this illustration (confirmed separately that the actual CSS gap
          between the two sections is 0 — About and SobreDivider are flush
          siblings with no margin between them, so the visual gap was 100%
          the image's own dead space, not a layout issue). Cropped
          (top=409px, ~10px of buffer kept above the topmost cloud so
          nothing soft/faint gets clipped) down to 1672×532 — this does
          NOT violate "never crop the illustration itself": the full art
          (all characters, foliage, birds, the train, the fox) is still
          100% present and uncut, only the surrounding dead sky shrank.
          Original file kept in place, unused but not deleted (same
          pattern as other superseded assets in this project). */}
      <Image
        src="/images/ilustracao-floresta-divisor-cortada.png"
        alt=""
        width={1672}
        height={532}
        sizes="100vw"
        className="h-auto w-full"
      />
    </div>
  );
}

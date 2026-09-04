"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

/**
 * "Magnetic cursor" effect: while the pointer moves within the element's
 * own parent (the "detection area" — callers must wrap the element in a
 * dedicated parent, not one shared with unrelated siblings, or moving the
 * mouse near one magnetic element would also pull its neighbors), the
 * element nudges toward the cursor, up to `limit` px, snapping back on
 * mouseleave.
 *
 * Writes straight to `el.style.transform` on every mousemove instead of
 * React state — a re-render per pointer-move event would be a real
 * performance cost for something this frequent, and the visual result (a
 * CSS transform) doesn't need React's render cycle at all. Pair with a
 * CSS transition on the element (see `.fx-magnet` in globals.css) so the
 * direct style writes still animate smoothly instead of snapping.
 */
export function useMagnetic<T extends HTMLElement>(limit = 16) {
  const ref = useRef<T>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    const area = el?.parentElement;
    if (!el || !area || reduceMotion) return;

    const handleMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = (event.clientX - centerX) / (rect.width / 2);
      const dy = (event.clientY - centerY) / (rect.height / 2);
      const strength = Math.min(1, Math.hypot(dx, dy));
      el.style.transform = `translate(${dx * limit * strength}px, ${dy * limit * strength}px)`;
    };

    const handleLeave = () => {
      el.style.transform = "";
    };

    area.addEventListener("mousemove", handleMove);
    area.addEventListener("mouseleave", handleLeave);
    return () => {
      area.removeEventListener("mousemove", handleMove);
      area.removeEventListener("mouseleave", handleLeave);
    };
  }, [limit, reduceMotion]);

  return ref;
}

"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal progress hook.
 *
 * Returns a `ref` to attach to a section and a progress value `p` (0 → 1) that
 * tracks the element travelling up through the viewport: ~0 when its top is near
 * the bottom of the screen, ~1 once it has risen toward the top. Use `p` to drive
 * scroll-linked transforms (translateY parallax, fade-in, scale, brightness) so a
 * component "moves up beautifully" as the user scrolls — like adobe.com.
 *
 * Updates run inside requestAnimationFrame on a passive scroll listener, so it's
 * cheap and jank-free.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const raw = (vh - rect.top) / (vh + rect.height * 0.55);
        setP(Math.min(1, Math.max(0, raw)));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return { ref, p };
}

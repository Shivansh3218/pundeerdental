import { useEffect } from "react";
import Lenis from "lenis";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

/** Module-level handle so nav links can request a smooth scroll. */
let lenisInstance: Lenis | null = null;

export function scrollToId(id: string) {
  const el = document.querySelector(id);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el as HTMLElement, { offset: -72, duration: 1.2 });
  } else {
    (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/** Initialises Lenis smooth scrolling (disabled when reduced-motion is on). */
export function SmoothScroll() {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisInstance = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisInstance = null;
    };
  }, [reduced]);

  return null;
}

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

interface Options {
  to: number;
  decimals?: number;
  duration?: number;
}

/**
 * Counts up to `to` once the element scrolls into view.
 * Returns a ref to attach and the formatted display string.
 */
export function useCountUp({ to, decimals = 0, duration = 1800 }: Options) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }
    let raf = 0;
    let start = 0;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3); // easeOutCubic
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(to * ease(progress));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, to, duration]);

  const display = value.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return { ref, display };
}

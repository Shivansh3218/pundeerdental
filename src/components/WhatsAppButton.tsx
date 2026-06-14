import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { WhatsAppIcon } from "./icons";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { waLink, DEFAULT_BOOKING_MESSAGE } from "../lib/whatsapp";

/** Floating WhatsApp action with a gentle pulse, revealed after the hero. */
export function WhatsAppButton() {
  const reduced = usePrefersReducedMotion();
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 520));

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={waLink(DEFAULT_BOOKING_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book on WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={reduced ? undefined : { scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] sm:bottom-7 sm:right-7"
        >
          {!reduced && (
            <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-[#25D366]/60" />
          )}
          <WhatsAppIcon className="h-7 w-7" />
          <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full bg-ink px-4 py-2 text-[13px] text-cream-100 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 sm:block">
            Book on WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

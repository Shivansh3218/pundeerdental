import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Logo } from "./Logo";
import { MagneticButton } from "./MagneticButton";
import { scrollToId } from "./SmoothScroll";
import { WhatsAppIcon, MenuIcon, CloseIcon } from "./icons";
import { NAV_LINKS } from "../site.config";
import { waLink, DEFAULT_BOOKING_MESSAGE } from "../lib/whatsapp";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 48));

  const go = (href: string) => {
    setOpen(false);
    scrollToId(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "bg-cream-100/85 backdrop-blur-md border-b border-ink/5"
            : "bg-transparent"
        }`}
      >
        <nav className="container-x flex h-[72px] items-center justify-between">
          <Logo light={!scrolled} />

          <div className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className={`group relative text-[15px] tracking-tight transition-colors ${
                  scrolled
                    ? "text-ink/70 hover:text-teal"
                    : "text-cream-100/80 hover:text-cream-100"
                }`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <MagneticButton
              href={waLink(DEFAULT_BOOKING_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              variant={scrolled ? "primary" : "outline"}
              className={
                scrolled
                  ? ""
                  : "border-cream-100/40 text-cream-100 hover:border-cream-100 hover:bg-cream-100/10"
              }
            >
              <WhatsAppIcon className="h-4 w-4" />
              Book on WhatsApp
            </MagneticButton>
          </div>

          <button
            className={`md:hidden ${scrolled ? "text-ink" : "text-cream-100"}`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon className="h-7 w-7" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] bg-teal text-cream-100 md:hidden"
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 6%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 6%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 6%)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container-x flex h-[72px] items-center justify-between">
              <Logo light />
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <CloseIcon className="h-7 w-7" />
              </button>
            </div>
            <div className="container-x mt-10 flex flex-col gap-2">
              {NAV_LINKS.map((l, i) => (
                <motion.button
                  key={l.href}
                  onClick={() => go(l.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + i * 0.06 }}
                  className="border-b border-cream-100/15 py-4 text-left font-display text-3xl tracking-tight"
                >
                  {l.label}
                </motion.button>
              ))}
              <a
                href={waLink(DEFAULT_BOOKING_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-cream-100 px-7 py-4 font-medium text-teal"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Book on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

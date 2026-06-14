import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Img } from "./Img";
import { MagneticButton } from "./MagneticButton";
import { scrollToId } from "./SmoothScroll";
import { WhatsAppIcon, StarIcon } from "./icons";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { CLINIC, IMAGES } from "../site.config";
import { waLink, DEFAULT_BOOKING_MESSAGE } from "../lib/whatsapp";

const EASE = [0.22, 1, 0.36, 1] as const;
const HEADLINE = ["Gentle, modern", "dentistry — in the", "heart of Srinagar."];

function MaskLine({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.95, ease: EASE, delay }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const overlayScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-teal">
      {/* Background image with subtle parallax + slow zoom */}
      <motion.div
        style={reduced ? undefined : { y: bgY, scale: overlayScale }}
        className="absolute inset-0 z-0"
      >
        <Img
          id={IMAGES.heroInterior}
          alt="The treatment room at Pundeer Dental Clinic, lit by soft daylight"
          eager
          sizes="100vw"
          className={`h-full w-full object-cover ${reduced ? "" : "animate-slow-zoom"}`}
        />
      </motion.div>

      {/* Palette-matched legibility overlays */}
      <div className="absolute inset-0 z-0 bg-teal/40 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/30" />

      {/* Right-edge vertical meta label */}
      <div className="pointer-events-none absolute right-7 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 text-[11px] uppercase tracking-[0.4em] text-cream-100/50 lg:block">
        Est. Srinagar · Garhwal
      </div>

      <div className="container-x relative z-10 flex h-full flex-col justify-end pb-16 sm:pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 flex items-center gap-3 text-cream-100/85"
        >
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-clay-400" />
            <span className="text-[13px] tracking-tight">{CLINIC.hoursShort}</span>
          </span>
        </motion.div>

        <h1 className="max-w-[14ch] font-display text-[clamp(2.6rem,7vw,6rem)] font-medium leading-[0.98] tracking-tightest text-cream-100">
          {reduced
            ? HEADLINE.join(" ")
            : HEADLINE.map((line, i) => (
                <MaskLine key={line} text={line} delay={0.25 + i * 0.13} />
              ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.75 }}
          className="mt-7 max-w-xl text-pretty text-[17px] leading-relaxed text-cream-100/80"
        >
          Careful, pain-free treatment and honest advice, on Badrinath Road below
          Nainital Bank. We show you what's going on — then fix it gently.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            href={waLink(DEFAULT_BOOKING_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-clay text-cream-100 hover:bg-clay-400 shadow-[0_14px_40px_-14px_rgba(194,116,79,0.8)]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Book on WhatsApp
          </MagneticButton>

          <button
            onClick={() => scrollToId("#services")}
            className="group inline-flex items-center gap-2 rounded-full border border-cream-100/30 px-7 py-3.5 text-[15px] font-medium tracking-tight text-cream-100 transition-colors hover:border-cream-100/70 hover:bg-cream-100/10"
          >
            Explore our care
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>

          <div className="ml-1 flex items-center gap-2 text-cream-100/85">
            <span className="flex text-clay-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            <span className="text-[14px]">
              <strong className="font-semibold">{CLINIC.rating}</strong> · {CLINIC.reviewCount} Google reviews
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      {!reduced && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
        >
          <span className="block h-10 w-6 rounded-full border border-cream-100/40">
            <motion.span
              className="mx-auto mt-2 block h-2 w-1 rounded-full bg-cream-100/70"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.div>
      )}
    </section>
  );
}

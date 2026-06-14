import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Img } from "./Img";
import { Reveal } from "./Reveal";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { IMAGES } from "../site.config";

const PILLARS = [
  {
    k: "01",
    t: "Pain-free, always",
    d: "Gentle technique and patient anaesthesia mean most treatments are over before you tense up.",
  },
  {
    k: "02",
    t: "You see what we see",
    d: "Digital X-rays and an on-screen walkthrough, so every recommendation is something you understand.",
  },
  {
    k: "03",
    t: "Honest, upfront pricing",
    d: "Clear costs before we start. No surprises added to the bill afterwards.",
  },
  {
    k: "04",
    t: "Open every day",
    d: "Morning to evening, seven days a week — including Sundays, when most clinics are shut.",
  },
];

export function About() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="scroll-mt-24 bg-teal text-cream-100">
      <div className="container-x grid gap-14 py-24 sm:py-32 lg:grid-cols-12 lg:gap-16">
        {/* Image column with parallax */}
        <div className="lg:col-span-5">
          <div
            ref={ref}
            className="relative aspect-[4/5] overflow-hidden rounded-[24px]"
          >
            <motion.div
              style={reduced ? undefined : { y: imgY }}
              className="absolute inset-[-10%]"
            >
              <Img
                id={IMAGES.aboutRoom}
                alt="A calm, modern treatment room at Pundeer Dental Clinic"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="duotone h-full w-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-teal/25 mix-blend-multiply" />
            {/* Floating rating tile */}
            <Reveal
              delay={0.15}
              className="absolute bottom-5 left-5 rounded-2xl bg-cream-100 px-5 py-4 text-ink shadow-xl"
            >
              <div className="font-display text-3xl leading-none text-teal">4.8★</div>
              <div className="mt-1 text-[12px] uppercase tracking-[0.16em] text-ink/55">
                114 patient reviews
              </div>
            </Reveal>
          </div>
        </div>

        {/* Text column */}
        <div className="lg:col-span-7 lg:pl-6">
          <Reveal>
            <span className="text-[13px] uppercase tracking-[0.24em] text-clay-200">
              Why Pundeer
            </span>
            <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2.1rem,4.4vw,3.4rem)] leading-[1.04] tracking-tight">
              A clinic built around how the visit feels.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-cream-100/75">
              For years, families across Garhwal have come to Pundeer for one
              reason: dentistry that doesn't feel rushed or frightening. We take
              the time to explain, we keep things comfortable, and we treat the
              person, not just the tooth.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <Reveal key={p.k} delay={0.12 + i * 0.08}>
                <div className="border-t border-cream-100/15 pt-5">
                  <span className="font-display text-sm text-clay-200">{p.k}</span>
                  <h3 className="mt-2 font-display text-xl tracking-tight">{p.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-cream-100/65">
                    {p.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

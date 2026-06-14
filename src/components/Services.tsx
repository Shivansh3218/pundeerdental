import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Img } from "./Img";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { ArrowUpRight } from "./icons";
import { scrollToId } from "./SmoothScroll";
import { SERVICES } from "../site.config";

const SPANS = [
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
];

function ServiceCard({
  index,
  service,
  span,
}: {
  index: number;
  service: (typeof SERVICES)[number];
  span: string;
}) {
  const cardRef = useRef<HTMLElement>(null);
  // Fires when card is near the vertical centre of the viewport.
  // margin: shrink the observer box so only ~middle 30% of the screen triggers it.
  const isActive = useInView(cardRef, {
    margin: "-35% 0px -35% 0px",
    once: false,
  });

  return (
    <RevealItem className={span}>
      <motion.article
        ref={cardRef}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 240, damping: 22 }}
        className="group relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-[20px] border border-ink/10 bg-cream-100 p-7"
      >
        {/* Image: scroll-activated on mobile, hover on desktop */}
        <div className="absolute inset-0 -z-0">
          <Img
            id={service.image}
            alt={service.title}
            sizes="(max-width: 768px) 100vw, 50vw"
            className={[
              "duotone h-full w-full object-cover transition-all duration-700 ease-editorial",
              // Desktop: hover-based
              "md:scale-110 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100",
              // Mobile: scroll-based
              isActive ? "scale-100 opacity-100" : "scale-110 opacity-0",
            ].join(" ")}
          />
          <div
            className={[
              "absolute inset-0 transition-colors duration-700",
              // Desktop: hover-based
              "md:bg-teal/0 md:group-hover:bg-teal/80",
              // Mobile: scroll-based
              isActive ? "bg-teal/75" : "bg-teal/0",
            ].join(" ")}
          />
        </div>

        <div className="relative z-10 flex items-start justify-between">
          <span
            className={[
              "font-display text-sm transition-colors duration-500",
              "md:text-ink/40 md:group-hover:text-cream-100/70",
              isActive ? "text-cream-100/70" : "text-ink/40",
            ].join(" ")}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={[
              "grid h-9 w-9 place-items-center rounded-full border transition-all duration-500",
              "md:border-ink/15 md:text-ink/50 md:group-hover:border-cream-100/40 md:group-hover:text-cream-100",
              isActive
                ? "border-cream-100/40 text-cream-100"
                : "border-ink/15 text-ink/50",
            ].join(" ")}
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <div className="relative z-10 mt-auto">
          <h3
            className={[
              "font-display text-[1.6rem] leading-tight tracking-tight transition-colors duration-500",
              "md:text-ink md:group-hover:text-cream-100",
              isActive ? "text-cream-100" : "text-ink",
            ].join(" ")}
          >
            {service.title}
          </h3>
          <p
            className={[
              "mt-2 max-w-sm text-[15px] leading-relaxed transition-colors duration-500",
              "md:text-ink/60 md:group-hover:text-cream-100/85",
              isActive ? "text-cream-100/85" : "text-ink/60",
            ].join(" ")}
          >
            {service.blurb}
          </p>
          {/* Detail: scroll-reveal on mobile, hover-reveal on desktop */}
          <div
            className={[
              "grid transition-[grid-template-rows] duration-500 ease-editorial",
              "md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]",
              isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            ].join(" ")}
          >
            <p
              className={[
                "overflow-hidden text-[14px] leading-relaxed transition-all duration-500",
                "md:pt-0 md:text-cream-100/0 md:group-hover:pt-3 md:group-hover:text-cream-100/75",
                isActive ? "pt-3 text-cream-100/75" : "pt-0 text-cream-100/0",
              ].join(" ")}
            >
              {service.detail}
            </p>
          </div>
        </div>
      </motion.article>
    </RevealItem>
  );
}

export function Services() {
  return (
    <section id="services" className="container-x scroll-mt-24 py-24 sm:py-32">
      <div className="mb-14 grid items-end gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <span className="text-[13px] uppercase tracking-[0.24em] text-clay">
            What we do
          </span>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.02] tracking-tight text-ink">
            Comprehensive care, delivered gently.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-5 md:pb-2">
          <p className="text-[16px] leading-relaxed text-ink/60">
            From a routine clean to implants and braces — everything under one
            calm roof, with treatment explained before it begins.
          </p>
        </Reveal>
      </div>

      <RevealGroup stagger={0.09} className="grid grid-cols-1 gap-5 md:grid-cols-6">
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.id} index={i} service={s} span={SPANS[i] ?? "md:col-span-2"} />
        ))}
      </RevealGroup>

      <Reveal delay={0.1} className="mt-12">
        <button
          onClick={() => scrollToId("#booking")}
          className="group inline-flex items-center gap-2 text-[15px] font-medium tracking-tight text-teal"
        >
          Not sure what you need? Ask us
          <span className="transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </button>
      </Reveal>
    </section>
  );
}

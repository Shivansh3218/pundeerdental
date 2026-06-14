import { motion } from "framer-motion";
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
  return (
    <RevealItem className={span}>
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 240, damping: 22 }}
        className="group relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-[20px] border border-ink/10 bg-cream-100 p-7"
      >
        {/* Image fills the card smoothly on hover */}
        <div className="absolute inset-0 -z-0">
          <Img
            id={service.image}
            alt={service.title}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="duotone h-full w-full scale-110 object-cover opacity-0 transition-all duration-700 ease-editorial group-hover:scale-100 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-teal/0 transition-colors duration-700 group-hover:bg-teal/80" />
        </div>

        <div className="relative z-10 flex items-start justify-between">
          <span className="font-display text-sm text-ink/40 transition-colors duration-500 group-hover:text-cream-100/70">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 text-ink/50 transition-all duration-500 group-hover:border-cream-100/40 group-hover:text-cream-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <div className="relative z-10 mt-auto">
          <h3 className="font-display text-[1.6rem] leading-tight tracking-tight text-ink transition-colors duration-500 group-hover:text-cream-100">
            {service.title}
          </h3>
          <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-ink/60 transition-colors duration-500 group-hover:text-cream-100/85">
            {service.blurb}
          </p>
          {/* Detail revealed on hover */}
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-editorial group-hover:grid-rows-[1fr]">
            <p className="overflow-hidden text-[14px] leading-relaxed text-cream-100/0 transition-colors duration-500 group-hover:pt-3 group-hover:text-cream-100/75">
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
            calm roof, with treatment explained before it begins. Hover a card to
            see what's involved.
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

import { Reveal } from "./Reveal";
import { StarIcon } from "./icons";
import { TESTIMONIALS, CLINIC } from "../site.config";

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <figure className="flex w-[86vw] max-w-[400px] shrink-0 flex-col justify-between rounded-[20px] border border-ink/10 bg-cream-100 p-7 sm:w-[400px]">
      <div>
        <div className="flex gap-1 text-clay">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="h-4 w-4" />
          ))}
        </div>
        <blockquote className="mt-5 text-[16px] leading-relaxed text-ink/80">
          “{t.quote}”
        </blockquote>
      </div>
      <figcaption className="mt-7 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-teal font-display text-sm text-cream-100">
          {t.initials}
        </span>
        <span className="leading-tight">
          <span className="block font-medium tracking-tight text-ink">{t.name}</span>
          <span className="block text-[13px] text-ink/50">{t.handle}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section id="reviews" className="scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="container-x mb-14 grid items-end gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-8">
          <span className="text-[13px] uppercase tracking-[0.24em] text-clay">
            In their words
          </span>
          <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.02] tracking-tight text-ink">
            Rated {CLINIC.rating} by {CLINIC.reviewCount} patients.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-4 md:pb-2">
          <p className="text-[16px] leading-relaxed text-ink/60">
            A few of the words patients have left on Google — gentle hands,
            clear explanations, and not a hint of the usual dread.
          </p>
        </Reveal>
      </div>

      {/* Auto-scrolling marquee, pauses on hover */}
      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent sm:w-28" />
        <div className="flex w-max gap-6 px-6 animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

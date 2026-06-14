import { Img } from "./Img";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { TEAM } from "../site.config";

const OFFSETS = ["", "lg:mt-16", "lg:mt-8"];

export function Doctors() {
  return (
    <section id="team" className="container-x scroll-mt-24 py-24 sm:py-32">
      <div className="mb-16 grid items-end gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-8">
          <span className="text-[13px] uppercase tracking-[0.24em] text-clay">
            The people
          </span>
          <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.02] tracking-tight text-ink">
            Familiar faces who remember yours.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-4 md:pb-2">
          <p className="text-[16px] leading-relaxed text-ink/60">
            A small, steady team — so you're cared for by people who know your
            history, not a different stranger each visit.
          </p>
        </Reveal>
      </div>

      <RevealGroup stagger={0.12} className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((m, i) => (
          <RevealItem key={m.name} className={OFFSETS[i] ?? ""}>
            <article className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-cream-200">
                <Img
                  id={m.image}
                  alt={m.name}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="h-full w-full object-cover grayscale transition-all duration-700 ease-editorial group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
                <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-cream-100/90 font-display text-sm tracking-tight text-teal backdrop-blur">
                  {m.initials}
                </span>
              </div>
              <div className="mt-5">
                <h3 className="font-display text-[1.45rem] leading-tight tracking-tight text-ink">
                  {m.name}
                </h3>
                <p className="mt-1 text-[13px] uppercase tracking-[0.16em] text-clay">
                  {m.role}
                </p>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink/60">
                  {m.bio}
                </p>
              </div>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

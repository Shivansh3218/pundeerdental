import { Reveal } from "./Reveal";
import { useCountUp } from "../hooks/useCountUp";
import { STATS } from "../site.config";

function Stat({
  value,
  suffix,
  label,
  decimals,
}: {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}) {
  const { ref, display } = useCountUp({ to: value, decimals: decimals ?? 0 });
  return (
    <div className="flex flex-col gap-2">
      <div className="font-display text-[clamp(2.4rem,5vw,3.6rem)] leading-none tracking-tight text-teal">
        <span ref={ref}>{display}</span>
        {suffix && <span className="text-clay">{suffix}</span>}
      </div>
      <div className="text-[13.5px] uppercase tracking-[0.16em] text-ink/55">
        {label}
      </div>
    </div>
  );
}

export function TrustStrip() {
  return (
    <section className="border-y border-ink/8 bg-cream-200/60">
      <div className="container-x py-14 sm:py-16">
        <Reveal className="mb-10 max-w-md text-[14px] uppercase tracking-[0.22em] text-ink/45">
          Trusted across Garhwal
        </Reveal>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <Stat
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                decimals={"decimals" in s ? (s.decimals as number) : 0}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

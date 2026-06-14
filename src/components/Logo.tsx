import { CLINIC } from "../site.config";

export function Logo({ light = false }: { light?: boolean }) {
  const ink = light ? "text-cream-100" : "text-teal";
  const sub = light ? "text-cream-100/60" : "text-ink/50";
  return (
    <a
      href="#top"
      className="group flex items-center gap-3"
      aria-label={`${CLINIC.name} — home`}
    >
      <span
        className={`grid h-10 w-10 place-items-center rounded-xl font-display text-lg ${
          light ? "bg-cream-100 text-teal" : "bg-teal text-cream-100"
        }`}
      >
        P
      </span>
      <span className="leading-none">
        <span className={`block font-display text-[17px] tracking-tight ${ink}`}>
          Pundeer
        </span>
        <span
          className={`block text-[10px] uppercase tracking-[0.22em] ${sub}`}
        >
          Dental Clinic
        </span>
      </span>
    </a>
  );
}

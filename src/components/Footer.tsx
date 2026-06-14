import { Logo } from "./Logo";
import { scrollToId } from "./SmoothScroll";
import { WhatsAppIcon } from "./icons";
import {
  CLINIC,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "../site.config";
import { waLink, DEFAULT_BOOKING_MESSAGE } from "../lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-ink text-cream-100/80">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-cream-100/60">
              Gentle, modern dentistry for Srinagar and the wider Garhwal — open
              seven days a week.
            </p>
            <a
              href={waLink(DEFAULT_BOOKING_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 text-[15px] font-medium text-cream-100 transition-colors hover:bg-clay-400"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Book on WhatsApp
            </a>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[12px] uppercase tracking-[0.2em] text-cream-100/45">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollToId(l.href)}
                    className="text-[15px] text-cream-100/70 transition-colors hover:text-clay-200"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[12px] uppercase tracking-[0.2em] text-cream-100/45">
              Visit & contact
            </h4>
            <address className="mt-4 space-y-1 not-italic text-[15px] leading-relaxed text-cream-100/70">
              <p>{CLINIC.addressFull}</p>
              <p>
                <a href={PHONE_HREF} className="hover:text-clay-200">{PHONE_DISPLAY}</a>
              </p>
              <p className="pt-2 text-cream-100/55">{CLINIC.hoursShort}</p>
            </address>
            <div className="mt-4 flex gap-4">
              {CLINIC.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-cream-100/60 underline-offset-4 transition-colors hover:text-clay-200 hover:underline"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-cream-100/10 pt-6 text-[13px] text-cream-100/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <p>{CLINIC.nameHindi} · {CLINIC.city}</p>
        </div>
      </div>
    </footer>
  );
}

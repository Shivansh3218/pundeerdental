import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { WhatsAppIcon, PhoneIcon, MapPinIcon, ClockIcon } from "./icons";
import { CLINIC, PHONE_DISPLAY, PHONE_HREF, SERVICES } from "../site.config";
import { waLink, bookingMessage } from "../lib/whatsapp";

export function Booking() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [preferred, setPreferred] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const url = waLink(bookingMessage({ name, service, preferred }));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="booking" className="scroll-mt-24 bg-teal text-cream-100">
      <div className="container-x grid gap-14 py-24 sm:py-32 lg:grid-cols-12 lg:gap-16">
        {/* Left: details + map */}
        <div className="lg:col-span-6">
          <Reveal>
            <span className="text-[13px] uppercase tracking-[0.24em] text-clay-200">
              Visit us
            </span>
            <h2 className="mt-4 max-w-[15ch] font-display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.02] tracking-tight">
              Book in under a minute.
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-cream-100/75">
              Tell us a little about your visit and we'll open WhatsApp with the
              details ready to send — or just call. We're on Badrinath Road,
              below Nainital Bank.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-9 space-y-5">
              <a href={PHONE_HREF} className="flex items-start gap-4 transition-colors hover:text-clay-200">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-clay-200" />
                <span>
                  <dt className="text-[12px] uppercase tracking-[0.16em] text-cream-100/55">Call</dt>
                  <dd className="text-[17px]">{PHONE_DISPLAY}</dd>
                </span>
              </a>
              <div className="flex items-start gap-4">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-clay-200" />
                <span>
                  <dt className="text-[12px] uppercase tracking-[0.16em] text-cream-100/55">Find us</dt>
                  <dd className="text-[17px] leading-snug">{CLINIC.addressFull}</dd>
                </span>
              </div>
              <div className="flex items-start gap-4">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-clay-200" />
                <span>
                  <dt className="text-[12px] uppercase tracking-[0.16em] text-cream-100/55">Hours</dt>
                  {CLINIC.hours.map((h) => (
                    <dd key={h.day} className="text-[17px] leading-snug">
                      {h.day}: {h.time}
                    </dd>
                  ))}
                </span>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="mt-9">
            <div className="overflow-hidden rounded-2xl border border-cream-100/15">
              <iframe
                title={`Map to ${CLINIC.name}`}
                src={CLINIC.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full grayscale-[0.2]"
              />
            </div>
            <a
              href={CLINIC.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-[14px] text-cream-100/70 underline-offset-4 hover:text-clay-200 hover:underline"
            >
              Get directions on Google Maps →
            </a>
          </Reveal>
        </div>

        {/* Right: booking form */}
        <div className="lg:col-span-6">
          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-[24px] bg-cream-100 p-7 text-ink shadow-2xl sm:p-9"
            >
              <h3 className="font-display text-2xl tracking-tight text-teal">
                Request an appointment
              </h3>
              <p className="mt-1.5 text-[14px] text-ink/55">
                Opens WhatsApp with your details pre-filled. Nothing is sent until
                you press send in WhatsApp.
              </p>

              <div className="mt-7 space-y-5">
                <div>
                  <label htmlFor="bk-name" className="block text-[13px] font-medium text-ink/70">
                    Your name
                  </label>
                  <input
                    id="bk-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="e.g. Aarav Sharma"
                    className="mt-2 w-full rounded-xl border border-ink/15 bg-cream-100 px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-ink/35 focus:border-teal"
                  />
                </div>

                <div>
                  <label htmlFor="bk-service" className="block text-[13px] font-medium text-ink/70">
                    What's it for?
                  </label>
                  <select
                    id="bk-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-ink/15 bg-cream-100 px-4 py-3 text-[15px] outline-none transition-colors focus:border-teal"
                  >
                    <option value="">Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Not sure — general check-up">Not sure — general check-up</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="bk-time" className="block text-[13px] font-medium text-ink/70">
                    Preferred date / time
                  </label>
                  <input
                    id="bk-time"
                    type="text"
                    value={preferred}
                    onChange={(e) => setPreferred(e.target.value)}
                    placeholder="e.g. Saturday morning"
                    className="mt-2 w-full rounded-xl border border-ink/15 bg-cream-100 px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-ink/35 focus:border-teal"
                  />
                </div>
              </div>

              <div className="mt-7">
                <MagneticButton type="submit" className="w-full bg-clay text-cream-100 hover:bg-clay-400">
                  <WhatsAppIcon className="h-4 w-4" />
                  Open WhatsApp to book
                </MagneticButton>
              </div>
              <p className="mt-4 text-center text-[13px] text-ink/50">
                Prefer to call? <a href={PHONE_HREF} className="font-medium text-teal underline-offset-2 hover:underline">{PHONE_DISPLAY}</a>
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

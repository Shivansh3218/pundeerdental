import { WHATSAPP_NUMBER } from "../site.config";

/** Build a click-to-chat WhatsApp URL with a URL-encoded, pre-filled message. */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Default booking message used by hero / nav / floating button CTAs. */
export const DEFAULT_BOOKING_MESSAGE =
  "Hi Pundeer Dental Clinic! 👋 I'd like to book a dental appointment.\n\nName: \nService: \nPreferred date/time: ";

/** Build a booking message from the contact-form fields. */
export function bookingMessage(opts: {
  name?: string;
  service?: string;
  preferred?: string;
}): string {
  const name = opts.name?.trim() || "___";
  const service = opts.service?.trim() || "___";
  const preferred = opts.preferred?.trim() || "___";
  return (
    `Hi Pundeer Dental Clinic! 👋 I'd like to book a dental appointment.\n\n` +
    `Name: ${name}\nService: ${service}\nPreferred date/time: ${preferred}`
  );
}

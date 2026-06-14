/**
 * Single source of truth for everything clinic-specific.
 * Swap any value here — phone number, hours, copy, images — without touching components.
 *
 * Data sourced from the clinic's public Google Maps & directory listings
 * (Pundeer Dental Clinic, Srinagar / Garhwal, Uttarakhand).
 */

// --- Booking ---------------------------------------------------------------
// One constant for the WhatsApp number. International format, digits only.
// 097605 01183  ->  +91 97605 01183  ->  919760501183
export const WHATSAPP_NUMBER = "919760501183";
export const PHONE_DISPLAY = "+91 97605 01183";
export const PHONE_HREF = "tel:+919760501183";

// --- Clinic ----------------------------------------------------------------
export const CLINIC = {
  name: "Pundeer Dental Clinic",
  nameHindi: "पुंडीर डेंटल क्लिनिक",
  tagline: "Gentle, modern dentistry",
  city: "Srinagar, Garhwal",
  addressLine: "Badrinath Road, below Nainital Bank",
  addressFull: "Badrinath Rd, below Nainital Bank, Srinagar, Uttarakhand 246174",
  plusCode: "6QCR+CV Srinagar, Uttarakhand",
  rating: 4.8,
  reviewCount: 114,
  // Google Maps signal: open Sundays, closes 8pm. Confirmed display hours:
  hours: [
    { day: "Monday — Saturday", time: "10:30 AM – 8:00 PM" },
    { day: "Sunday", time: "10:30 AM – 8:00 PM" },
  ],
  hoursShort: "Open every day · 10:30 AM – 8:00 PM",
  // Google Maps place link (Directions button uses this)
  mapsUrl:
    "https://www.google.com/maps/place/Pundeer+Dental+Clinic/@30.2210136,78.7921822,17z/data=!3m1!4b1!4m6!3m5!1s0x3909a5e17bc03a2d:0x6fb9cfff2c06b76c!8m2!3d30.2210136!4d78.7921822",
  // Embeddable map centred on the clinic coordinates
  mapEmbedUrl:
    "https://www.google.com/maps?q=30.2210136,78.7921822&z=16&output=embed",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/p/Pundeer-Dental-Clinic-100057065575175/" },
    { label: "Google", href: "https://www.google.com/maps/place/Pundeer+Dental+Clinic/@30.2210136,78.7921822,17z" },
  ],
} as const;

// --- Imagery ---------------------------------------------------------------
// Verified, working Unsplash photo IDs (hot-linked via the Unsplash CDN).
// The <Img> component builds optimised, responsive URLs from these IDs.
export const IMAGES = {
  heroInterior: "1616391182219-e080b4d1043a", // warm, window-lit operatory
  aboutRoom: "1704455306251-b4634215d98f", // clean modern operatory
  cleaning: "1629909613654-28e377c37b09", // bright clinic interior
  whitening: "1573294705900-9623cfc746b7", // soft close-up smile
  implants: "1756364405980-e705da6a3da6", // prosthetics / restorative close-up
  ortho: "1567516364473-233c4b6fcfbe", // aligned smile close-up
  emergency: "1609207825181-52d3214556dd", // dentist attending a patient
  teamLead: "1588776813677-77aaf5595b83", // masked clinician at work (identity-neutral)
  teamSurgical: "1622902046580-2b47f47f5471", // clinician in coat (no face)
  teamCare: "1670190057256-076461959142", // patient-care moment
} as const;

// --- Stats (trust strip, count-up) ----------------------------------------
export const STATS = [
  { value: 12, suffix: "+", label: "Years caring for Garhwal" },
  { value: 9000, suffix: "+", label: "Patients treated" },
  { value: 4.8, decimals: 1, label: "Google rating", suffix: "★" },
  { value: 114, suffix: "+", label: "Verified reviews" },
] as const;

// --- Services --------------------------------------------------------------
export const SERVICES = [
  {
    id: "cleaning",
    title: "Cleaning & Check-ups",
    blurb: "Painless scaling, polishing and routine exams that keep small problems small.",
    detail:
      "Digital X-rays and a gentle ultrasonic clean. We show you exactly what's happening on-screen and walk you through brushing that actually works.",
    image: IMAGES.cleaning,
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    blurb: "Safe, dentist-supervised whitening for a brighter, natural-looking smile.",
    detail:
      "In-clinic and take-home options, shade-matched to your enamel so the result looks like you on your best day — never artificial.",
    image: IMAGES.whitening,
  },
  {
    id: "implants",
    title: "Implants & Restorations",
    blurb: "Crowns, bridges and implants that restore bite, comfort and confidence.",
    detail:
      "Tooth-coloured crowns and titanium implants placed with precision planning, so missing teeth feel and function like the originals.",
    image: IMAGES.implants,
  },
  {
    id: "ortho",
    title: "Orthodontics",
    blurb: "Braces and clear aligners to gently bring teeth into line.",
    detail:
      "From traditional braces to discreet aligners, with a clear timeline and milestones — for teens and adults alike.",
    image: IMAGES.ortho,
  },
  {
    id: "emergency",
    title: "Emergency Dental Care",
    blurb: "Sudden pain, a chipped tooth or swelling? We make room the same day.",
    detail:
      "Toothache, trauma and abscesses seen promptly. Message us on WhatsApp and we'll prioritise getting you out of pain.",
    image: IMAGES.emergency,
  },
] as const;

// --- Team ------------------------------------------------------------------
// Dr. Sunita Shah is the verified lead dentist (public directory listings).
// Supporting cards are described by role rather than inventing names.
// Images are identity-neutral, clinical photographs — replace with real
// team headshots here whenever you have them.
export const TEAM = [
  {
    name: "Dr. Sunita Shah",
    role: "Lead Dentist · BDS",
    bio: "Leads the clinic with a calm, explain-everything approach — known for pain-free treatment and a steady hand.",
    image: IMAGES.teamLead,
    initials: "SS",
  },
  {
    name: "Restorative & Surgical Care",
    role: "Implants · Crowns · Extractions",
    bio: "Precision restorative and minor surgical procedures, planned carefully and delivered comfortably.",
    image: IMAGES.teamSurgical,
    initials: "RS",
  },
  {
    name: "Hygiene & Patient Care",
    role: "Cleanings · Orthodontics · Front desk",
    bio: "The team that greets you, keeps appointments running on time and makes the chair feel a little less clinical.",
    image: IMAGES.teamCare,
    initials: "PC",
  },
] as const;

// --- Testimonials ----------------------------------------------------------
// Real, public Google reviews of the clinic.
export const TESTIMONIALS = [
  {
    name: "Aaisha Rawat",
    handle: "Google review · 5★",
    quote:
      "The staff was polite, and the doctors carefully examined my teeth with an X-ray, clearly showing and explaining the condition on the screen. The guidance made the visit very helpful.",
    initials: "AR",
  },
  {
    name: "Priyanshi Rana",
    handle: "Google review · 5★",
    quote:
      "The dentist did an excellent job with my teeth treatment, and it was completely pain-free. The staff was also very polite and helpful.",
    initials: "PR",
  },
  {
    name: "Anuj Singh",
    handle: "Google review · 5★",
    quote:
      "Recently visited for teeth cleaning — amazing service and very friendly behaviour. Highly recommend the clinic.",
    initials: "AS",
  },
  {
    name: "Verified patient",
    handle: "Google review · 5★",
    quote:
      "He is very well mannered and experienced doctor. Recently I had ortho treatment from here and the whole process was smooth.",
    initials: "VP",
  },
] as const;

// --- Navigation ------------------------------------------------------------
export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#booking" },
] as const;

import { SmoothScroll } from "./components/SmoothScroll";
import { ScrollProgress } from "./components/ScrollProgress";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Doctors } from "./components/Doctors";
import { Testimonials } from "./components/Testimonials";
import { Booking } from "./components/Booking";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-teal focus:px-5 focus:py-2 focus:text-cream-100"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <About />
        <Doctors />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

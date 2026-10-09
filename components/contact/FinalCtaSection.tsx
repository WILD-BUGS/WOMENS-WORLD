import Image from "next/image";
import { getWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/config";
import { BotanicalFloral } from "@/components/ui/BotanicalDecor";
import { RangoliMandala } from "@/components/ui/RangoliAndSplash";
import { BrandLogo } from "@/components/ui/BrandLogo";

const WA_FINAL = getWhatsAppUrl(
  "Hello, I would like to begin my bridal couture consultation with Women's World."
);

export function FinalCtaSection() {
  return (
    <section
      id="contact"
      className="relative w-full py-24 lg:py-32 bg-[#F9F6F0] text-[#231120] overflow-hidden light-editorial-section textile-texture"
      style={{
        backgroundColor: "#F9F6F0",
        color: "#231120",
      }}
    >
      {/* Background Ambience: Subtle Plum/Gold Halos, Botanical Florals & Translucent Rangoli Art */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft Ambient Halos */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/15 blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-[#6B2470]/10 blur-[100px]" />

        {/* Translucent Rangoli Mandalas */}
        <RangoliMandala
          size={680}
          opacity={0.14}
          variant="gold"
          className="absolute -top-32 -right-20 animate-[spin_240s_linear_infinite]"
        />
        <RangoliMandala
          size={540}
          opacity={0.12}
          variant="plum"
          className="absolute -bottom-24 left-1/4 animate-[spin_180s_linear_infinite_reverse]"
        />

        {/* Botanical Floral watermarks */}
        <BotanicalFloral className="absolute -top-12 -left-12 w-[340px] h-[340px] opacity-[0.12]" />
        <BotanicalFloral className="absolute bottom-0 right-10 w-[300px] h-[300px] opacity-[0.10] rotate-45" />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Large Atelier/Bride Image (§21) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative w-full aspect-[4/5] border-2 border-[#C9A66B]/60 p-2 bg-[#F9F6F0] shadow-2xl">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/atelier_consultation.jpg"
                  alt="Women's World Atelier private couture consultation and fitting room in Chennai"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
              <div className="absolute bottom-5 left-5 right-5 bg-[#231120]/90 backdrop-blur-md p-4 text-center border border-gold/30">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold block mb-0.5">
                  Private Appointments
                </span>
                <span className="text-xs text-ivory/80 font-sans">
                  Monday – Sunday • By Advance Reservation
                </span>
              </div>
            </div>
          </div>

          {/* Right: Emotional Climax Typography & Multi-Channel Actions (§21) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-1 lg:order-2">
            <div className="mb-4">
              <BrandLogo size="sm" variant="dark" className="opacity-90" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#A88040] font-semibold block mb-3">
              The Climax
            </span>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#231120] font-normal leading-[1.08] uppercase tracking-tight mb-4">
              Your Story <br />
              <span className="italic font-light text-[#6B2470]">
                Starts Here.
              </span>
            </h2>

            <p className="font-heading italic text-xl sm:text-2xl text-[#5A3D6B] mb-8 font-light">
              Let&apos;s create something truly beautiful.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#5A3D6B] max-w-lg mb-10 leading-relaxed">
              Whether you possess a definitive bridal vision or wish to discover silhouette
              possibilities alongside our designers, we invite you to book a private bespoke consultation.
            </p>

            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href={WA_FINAL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#C9A66B] hover:bg-[#A88040] text-[#231120] hover:text-white text-xs font-semibold uppercase tracking-[0.25em] rounded-[2px] transition-all shadow-md text-center justify-center min-h-[48px] flex items-center active:scale-95 touch-manipulation"
                id="final-book-btn"
              >
                Book a Consultation
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="px-6 py-4 border border-[#C9A66B]/50 hover:border-[#6B2470] text-[#231120] hover:text-[#6B2470] text-xs font-medium uppercase tracking-[0.2em] rounded-[2px] transition-all text-center justify-center min-h-[48px] flex items-center active:scale-95 touch-manipulation"
              >
                Call Atelier
              </a>
            </div>

            {/* Direct Contact Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#C9A66B]/25 text-xs text-[#5A3D6B]">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#A88040] font-bold">
                  WhatsApp
                </span>
                <span className="font-mono text-xs">+91 97901 45978</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#A88040] font-bold">
                  Atelier
                </span>
                <span>Chennai, Tamil Nadu</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#A88040] font-bold">
                  Consultation
                </span>
                <span>In-Person &amp; Virtual</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

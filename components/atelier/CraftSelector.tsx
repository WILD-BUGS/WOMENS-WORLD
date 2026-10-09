import Image from "next/image";
import Link from "next/link";
import { RangoliMandala } from "@/components/ui/RangoliAndSplash";

export function CraftSelector() {
  return (
    <section
      id="choose-craft"
      className="relative w-full py-20 lg:py-28 bg-[#231120] text-ivory overflow-hidden"
    >
      {/* Translucent Rangoli style art */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <RangoliMandala
          size={700}
          opacity={0.12}
          variant="gold"
          className="absolute -top-32 left-1/2 -translate-x-1/2 animate-[spin_240s_linear_infinite]"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.35em] text-gold font-medium block mb-2">
            The Atelier
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-ivory font-normal uppercase tracking-tight">
            Choose <span className="italic font-light text-gradient-gold">Your Craft</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ivory/60 mt-3 tracking-wide">
            Two specialized arms, one singular standard of bespoke luxury.
          </p>
        </div>

        {/* Two Large Dual Panels (§09) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* LEFT PANEL: Tailoring & Embroidery */}
          <Link
            href="#craft"
            className="group relative h-[450px] sm:h-[540px] lg:h-[580px] overflow-hidden border border-white/10 hover:border-gold transition-all duration-700 block bg-[#231120]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/macro_zardosi.jpg"
                alt="Bespoke bridal tailoring and hand zardosi embroidery"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Dark overlay that deepens on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#231120] via-[#231120]/75 to-[#231120]/40 group-hover:via-[#231120]/85 transition-colors duration-500" />
            </div>

            {/* Corner gold accents on hover */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content Container */}
            <div className="relative h-full flex flex-col justify-between p-6 sm:p-12 z-10">
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold/90 border border-gold/30 px-3 py-1 bg-plum/60 backdrop-blur-sm">
                  Atelier 01
                </span>
                <span className="font-mono text-xs text-ivory/50">CRAFT &amp; WEAVE</span>
              </div>

              {/* Title & Service List */}
              <div className="transform group-hover:-translate-y-2.5 transition-transform duration-500">
                <h3 className="font-heading text-2xl sm:text-4xl lg:text-5xl text-ivory uppercase tracking-tight leading-none mb-4">
                  Tailoring <br />
                  <span className="font-light italic text-gradient-gold">&amp; Embroidery</span>
                </h3>

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] sm:text-xs tracking-[0.2em] text-ivory/70 uppercase mb-8">
                  <span>Blouses</span>
                  <span>•</span>
                  <span>Lehengas</span>
                  <span>•</span>
                  <span>Sarees</span>
                  <span>•</span>
                  <span>Pattern Design</span>
                  <span>•</span>
                  <span>Salwar Suits</span>
                </div>

                {/* Animated Arrow CTA */}
                <div className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-gold font-semibold group-hover:text-gold-light">
                  <span>Explore Craft</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transform transition-transform duration-500 group-hover:-rotate-45 group-hover:translate-x-1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* RIGHT PANEL: Bridal Beauty */}
          <Link
            href="#beauty"
            className="group relative h-[450px] sm:h-[540px] lg:h-[580px] overflow-hidden border border-white/10 hover:border-gold transition-all duration-700 block bg-[#231120]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/bridal_beauty.jpg"
                alt="Luxury bridal makeup and bridal beauty styling"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#231120] via-[#231120]/75 to-[#231120]/40 group-hover:via-[#231120]/85 transition-colors duration-500" />
            </div>

            {/* Corner gold accents */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content Container */}
            <div className="relative h-full flex flex-col justify-between p-6 sm:p-12 z-10">
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold/90 border border-gold/30 px-3 py-1 bg-plum/60 backdrop-blur-sm">
                  Atelier 02
                </span>
                <span className="font-mono text-xs text-ivory/50">GLAMOUR &amp; ART</span>
              </div>

              {/* Title & Service List */}
              <div className="transform group-hover:-translate-y-2.5 transition-transform duration-500">
                <h3 className="font-heading text-2xl sm:text-4xl lg:text-5xl text-ivory uppercase tracking-tight leading-none mb-4">
                  Bridal <br />
                  <span className="font-light italic text-gradient-gold">Beauty &amp; Hair</span>
                </h3>

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] sm:text-xs tracking-[0.2em] text-ivory/70 uppercase mb-8">
                  <span>Bridal Makeup</span>
                  <span>•</span>
                  <span>Reception Looks</span>
                  <span>•</span>
                  <span>Pre-Bridal Care</span>
                  <span>•</span>
                  <span>Saree Draping</span>
                  <span>•</span>
                  <span>On-Location</span>
                </div>

                {/* Animated Arrow CTA */}
                <div className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-gold font-semibold group-hover:text-gold-light">
                  <span>Discover Beauty</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transform transition-transform duration-500 group-hover:-rotate-45 group-hover:translate-x-1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}

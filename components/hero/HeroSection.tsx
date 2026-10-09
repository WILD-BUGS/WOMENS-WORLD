"use client";

import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";
import { BotanicalFloral } from "@/components/ui/BotanicalDecor";
import { RangoliMandala } from "@/components/ui/RangoliAndSplash";
import { BrushReveal } from "@/components/ui/BrushReveal";

const WA_HERO = getWhatsAppUrl(
  "Hello, I would like to enquire about bespoke bridal couture and book a consultation."
);

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen lg:min-h-[780px] bg-[#231120] text-ivory overflow-hidden flex items-center pt-20 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-12 textile-texture"
    >
      {/* Background Ambience: Subtle Plum & Gold Halos with Translucent Rangoli Art */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-wine/60 blur-[100px]" />

        {/* Translucent Rangoli Kolam Art Watermarks in Background */}
        <RangoliMandala
          size={600}
          opacity={0.16}
          variant="gold"
          className="absolute -top-24 -left-28 animate-[spin_180s_linear_infinite]"
        />
        <RangoliMandala
          size={750}
          opacity={0.14}
          variant="gold"
          className="absolute -bottom-40 right-[-10%] animate-[spin_240s_linear_infinite_reverse]"
        />
        <RangoliMandala
          size={380}
          opacity={0.1}
          variant="rose"
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        {/* Low-opacity decorative botanical watermark */}
        <BotanicalFloral className="absolute -top-12 -right-12 w-[340px] h-[340px] opacity-[0.12]" />
        <BotanicalFloral className="absolute bottom-0 -left-16 w-[380px] h-[380px] opacity-[0.08] rotate-45" />
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Asymmetrical 3-Part Editorial Grid (§06) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* LEFT: Headline & Typography (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left order-2 lg:order-1 z-20">
            {/* Top Eyebrow ornament */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold/60" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-gold font-medium">
                Haute Couture Atelier
              </span>
            </div>

            {/* Oversized Editorial Heading */}
            <h1 className="font-heading font-normal tracking-tight leading-[0.92] text-ivory mb-5 sm:mb-6">
              <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem]">
                BRIDAL
              </span>
              <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] italic font-light text-gradient-gold">
                COUTURE
              </span>
            </h1>

            {/* Tagline */}
            <p className="font-heading italic text-lg sm:text-2xl text-ivory/90 mb-3 font-light leading-snug">
              Where every stitch tells your story.
            </p>

            <p className="font-sans text-xs sm:text-sm text-ivory/65 max-w-sm mb-6 sm:mb-8 leading-relaxed tracking-wide">
              Handcrafted heirloom lehengas, bridal blouses, and bespoke styling 
              created in harmony with centuries of South Asian craft traditions.
            </p>

            {/* CTAs with generous mobile touch targets */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href={WA_HERO}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-gold hover:bg-gold-light text-[#231120] text-xs font-semibold uppercase tracking-[0.2em] rounded-[2px] transition-all hover:shadow-glow hover:-translate-y-0.5 active:scale-95 text-center justify-center min-h-[48px] flex items-center"
                id="hero-book-btn"
              >
                Book Consultation
              </a>
              <Link
                href="#collections"
                className="px-6 py-3.5 border border-gold/40 hover:border-gold text-ivory hover:text-gold text-xs font-medium uppercase tracking-[0.2em] rounded-[2px] transition-all active:scale-95 text-center justify-center min-h-[48px] flex items-center"
              >
                Explore Collections
              </Link>
            </div>

            {/* Micro details */}
            <div className="flex items-center gap-4 sm:gap-6 mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/10 text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-ivory/50">
              <div>
                <span className="block text-gold/80 font-bold">EST. 2024</span>
                <span>Bespoke House</span>
              </div>
              <div className="h-4 w-px bg-white/15" />
              <div>
                <span className="block text-gold/80 font-bold">CHENNAI</span>
                <span>Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* CENTER: Large Bride Photograph with Soft Editorial Brush Reveal (5 Columns) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 py-2 lg:py-4 overflow-visible relative">
            <BrushReveal
              src="/images/hero_bride.jpg"
              alt="Women's World bespoke bridal couture lehenga in imperial wine and antique gold"
              className="w-full max-w-[420px] sm:max-w-[500px] md:max-w-[560px] lg:max-w-[640px] xl:max-w-[700px]"
            >
              {/* Minimalist Floating Editorial Label Overlay — Zero frames, zero box outlines */}
              <div className="absolute bottom-5 left-6 right-6 flex justify-between items-end text-ivory pointer-events-none z-10">
                <div className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  <span className="block text-[9px] uppercase tracking-[0.32em] text-[#E8C98A] font-medium">
                    The Muhurtham Edit
                  </span>
                  <span className="font-heading text-sm italic tracking-wider text-ivory/95">
                    Zardosi &amp; Velvet
                  </span>
                </div>
                <span className="text-[10px] tracking-widest text-gold/80 font-mono drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                  01 / ARCHIVE
                </span>
              </div>
            </BrushReveal>
          </div>

          {/* RIGHT: Craft Metadata & Oversized Editorial Number (2 Columns) */}
          <div className="lg:col-span-2 flex flex-col justify-between order-3 text-left lg:text-right h-full py-4 lg:pl-2">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold block">
                The Art of the Stitch
              </span>
              <p className="font-sans text-xs text-ivory/70 leading-relaxed max-w-[200px] lg:ml-auto">
                Each motif is hand-drawn, needle-punched, and stitched with pure zari, bullion wire, and micro-pearls.
              </p>
            </div>

            {/* Editorial Cropped Number (§07) */}
            <div className="my-6 lg:my-8 relative select-none">
              <div className="font-heading text-6xl sm:text-7xl lg:text-[7rem] font-light leading-none text-white/5 lg:text-right">
                08
              </div>
              <div className="absolute bottom-2 lg:right-0">
                <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium whitespace-nowrap">
                  Years of Master Craft
                </p>
                <p className="text-[10px] text-ivory/50 tracking-widest whitespace-nowrap">
                  Over 1,200+ Bridal Stories
                </p>
              </div>
            </div>

            {/* Vertical Atelier Accent */}
            <div className="flex items-center gap-3 lg:justify-end text-[10px] uppercase tracking-[0.25em] text-ivory/60">
              <span>Bespoke Fitting</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span>Aari Needlework</span>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator at bottom */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[9px] uppercase tracking-[0.3em] text-gold">Scroll</span>
        <div className="w-px h-6 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}

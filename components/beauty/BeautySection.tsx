"use client";

import { useState } from "react";
import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/config";
import { RangoliMandala } from "@/components/ui/RangoliAndSplash";

const PACKAGES = [
  {
    role: "The Bride — Signature Muhurtham & Reception",
    highlights: ["High-Definition / Airbrush Makeup", "Intricate Bridal Hairstyling & Fresh Florals", "Couture Saree Draping / Lehenga Setting", "Full On-Site Touch-up Kit & Assistant"],
    timing: "3.5 – 4 Hours",
  },
  {
    role: "The Bridesmaids & Mother of Bride",
    highlights: ["Soft Glam / Dewy Finish Makeup", "Custom Traditional or Modern Braids / Curls", "Dupatta & Saree Pleating", "Long-Wear Transfer-Proof Setting"],
    timing: "1.5 Hours per Person",
  },
  {
    role: "Pre-Bridal Glow & Skin Preparation",
    highlights: ["Diamond Polishing & Hydration Therapy", "Kansa Wand Facial Massage", "Ayurvedic Scalp & Hair Rituals", "Custom Skincare Calendar 6 Weeks Prior"],
    timing: "Multi-Session Program",
  },
  {
    role: "Celebration Occasions (Engagement, Haldi, Sangeet)",
    highlights: ["Waterproof Haldi Makeup", "Vibrant Statement Eye Art & Glitter Sangeet Glam", "Floral Jewelry Integration", "Quick Look Changes Between Ceremonies"],
    timing: "2 Hours per Look",
  },
];

export function BeautySection() {
  const [activeRow, setActiveRow] = useState<number | null>(0);

  return (
    <section
      id="beauty"
      className="relative w-full py-24 lg:py-32 bg-[#231120] text-ivory overflow-hidden textile-texture"
    >
      {/* Translucent Rangoli style art in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <RangoliMandala
          size={650}
          opacity={0.11}
          variant="gold"
          className="absolute -top-32 right-[-10%] animate-[spin_250s_linear_infinite]"
        />
        <RangoliMandala
          size={500}
          opacity={0.08}
          variant="rose"
          className="absolute -bottom-28 left-[-5%] animate-[spin_200s_linear_infinite_reverse]"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Split Section (§15) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          
          {/* Left: Large Makeup Photograph */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative w-full aspect-[3/4] border border-gold/40 p-2 bg-[#231120] shadow-2xl">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/bridal_beauty.jpg"
                  alt="High fashion Indian bridal makeup and hair styling with temple jewelry"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>

              {/* Gold Label (§15) */}
              <div className="absolute top-6 right-6 bg-[#231120]/90 backdrop-blur-md px-3.5 py-1.5 border border-gold shadow-lg">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold">
                  On-Location Available
                </span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Typography & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-1 lg:order-2">
            <span className="text-[11px] uppercase tracking-[0.35em] text-gold font-medium block mb-2">
              Bridal Beauty Atelier
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-ivory font-normal leading-tight uppercase tracking-tight mb-4">
              Your Moment. <br />
              <span className="italic font-light text-gradient-gold">
                Your Look.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-ivory/70 max-w-xl mb-8 leading-relaxed">
              We specialize in camera-ready, high-definition bridal artistry that honors your natural
              complexion and individual beauty. From sacred temple rituals to opulent reception ballrooms,
              our team ensures your hair, drape, and skin look flawless under all lighting.
            </p>

            {/* Quick Service Badges */}
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-ivory/80 mb-8">
              {["Bridal", "Reception", "Bridesmaid", "Pre-Bridal", "Draping"].map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-1.5 border border-gold/25 bg-plum/40 rounded-[2px]"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={getWhatsAppUrl("Hello, I would like to check bridal makeup availability and book a bridal trial.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-gold hover:bg-gold-light text-[#231120] text-xs font-semibold uppercase tracking-[0.2em] rounded-[2px] transition-all self-start w-full sm:w-auto min-h-[48px] active:scale-95 touch-manipulation"
            >
              Book Bridal Makeup Consultation
            </a>
          </div>

        </div>

        {/* Beauty Package Presentation: Editorial Expandable Rows (§16) */}
        <div className="pt-12 border-t border-gold/20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-heading text-xl sm:text-2xl text-ivory tracking-wide uppercase">
              Curated Bridal Packages
            </h3>
            <span className="text-xs text-gold/80 tracking-widest uppercase font-mono">
              Editorial Menu
            </span>
          </div>

          <div className="divide-y divide-white/10">
            {PACKAGES.map((pkg, idx) => {
              const isOpen = activeRow === idx;
              return (
                <div
                  key={pkg.role}
                  onMouseEnter={() => setActiveRow(idx)}
                  className={`py-6 transition-all duration-300 cursor-pointer ${
                    isOpen ? "bg-white/[0.03] px-4 -mx-4" : ""
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-4">
                      <span className="font-heading text-sm text-gold/60 font-light">
                        0{idx + 1}
                      </span>
                      <h4 className="font-heading text-lg sm:text-xl text-ivory font-medium">
                        {pkg.role}
                      </h4>
                    </div>
                    <span className="text-xs text-gold tracking-widest uppercase font-mono sm:text-right">
                      {pkg.timing}
                    </span>
                  </div>

                  {/* Highlights list (expanded) */}
                  <div
                    className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-xs text-ivory/70 transition-all duration-500 overflow-hidden ${
                      isOpen ? "max-h-48 opacity-100" : "max-h-0 sm:max-h-48 opacity-60 sm:opacity-75"
                    }`}
                  >
                    {pkg.highlights.map((point) => (
                      <div key={point} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

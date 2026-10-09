import React from "react";
import { BotanicalFloral } from "@/components/ui/BotanicalDecor";
import { RangoliMandala } from "@/components/ui/RangoliAndSplash";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Idea & Vision",
    desc: "Understanding your bridal aesthetic, color moods, and ceremony themes.",
  },
  {
    step: "02",
    title: "Atelier Sketch",
    desc: "Bespoke illustrations detailing necklines, sleeve cuts, and placement embroidery.",
  },
  {
    step: "03",
    title: "Fabric Sourcing",
    desc: "Selecting pure Kanjivaram silks, Italian velvets, organzas, and raw silks.",
  },
  {
    step: "04",
    title: "Hand Embroidery",
    desc: "Master artisans execute zardosi and aari needlework over 60–120 hours.",
  },
  {
    step: "05",
    title: "Couture Fitting",
    desc: "Basting and contour adjustments to achieve a bespoke, sculpting silhouette.",
  },
  {
    step: "06",
    title: "The Bride",
    desc: "The final reveal—an heirloom ensemble ready for your lifetime celebration.",
  },
];

export function CraftProcess() {
  return (
    <section
      id="process"
      className="relative w-full py-24 lg:py-32 bg-[#F9F6F0] text-[#231120] overflow-hidden border-b border-gold/20 light-editorial-section textile-texture"
      style={{
        backgroundColor: "#F9F6F0",
        color: "#231120",
      }}
    >
      {/* Background Ambience: Subtle Plum/Gold Halos, Botanical Florals & Translucent Rangoli Art */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft Ambient Halos */}
        <div className="absolute top-1/3 left-1/4 w-[480px] h-[480px] rounded-full bg-gold/15 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-[#6B2470]/10 blur-[100px]" />

        {/* Translucent Rangoli Mandalas */}
        <RangoliMandala
          size={640}
          opacity={0.14}
          variant="gold"
          className="absolute -top-32 -right-24 animate-[spin_240s_linear_infinite]"
        />
        <RangoliMandala
          size={560}
          opacity={0.12}
          variant="plum"
          className="absolute -bottom-28 -left-20 animate-[spin_200s_linear_infinite_reverse]"
        />

        {/* Botanical Floral watermarks */}
        <BotanicalFloral className="absolute top-1/2 right-4 w-[320px] h-[320px] opacity-[0.12] -translate-y-1/2" />
        <BotanicalFloral className="absolute -top-12 -left-12 w-[340px] h-[340px] opacity-[0.10] rotate-45" />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16 lg:mb-24">
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#A88040] font-semibold block mb-2">
            The Method
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-[#231120] font-normal uppercase tracking-tight">
            From Sketch <br />
            <span className="italic font-light text-[#6B2470]">To Bride</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#5A3D6B] mt-4 max-w-md mx-auto">
            A continuous, flowing journey of handcrafted patience, precision, and devotion.
          </p>
        </div>

        {/* Process Flow with Flowing Gold Thread (§12) */}
        <div className="relative">
          {/* Flowing Gold Thread SVG Path for Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 w-full pointer-events-none z-0">
            <svg
              className="w-full h-24"
              viewBox="0 0 1200 90"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 50 45 Q 250 10 450 45 T 850 45 T 1150 45"
                stroke="#C9A66B"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="opacity-70"
              />
            </svg>
          </div>

          {/* 6 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {PROCESS_STEPS.map((item, idx) => (
              <div
                key={item.step}
                className="flex flex-col group p-4 sm:p-5 bg-white/90 backdrop-blur-sm border border-[#C9A66B]/35 hover:border-gold shadow-[0_4px_20px_rgba(59,18,64,0.06)] hover:shadow-[0_8px_30px_rgba(201,166,107,0.22)] transition-all duration-300 rounded-[2px]"
              >
                {/* Step Marker & Gold Dot */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-2xl font-light text-[#6B2470] group-hover:text-[#A88040] transition-colors">
                    {item.step}
                  </span>
                  <div className="w-3 h-3 rounded-full border border-gold bg-[#F9F6F0] flex items-center justify-center group-hover:bg-gold transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold group-hover:bg-[#231120]" />
                  </div>
                </div>

                <h3 className="font-heading text-lg font-medium text-[#231120] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="font-sans text-xs text-[#5A3D6B] leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-[#C9A66B]/15 text-[10px] uppercase tracking-widest text-[#A88040] opacity-60 group-hover:opacity-100 transition-opacity">
                  Phase 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

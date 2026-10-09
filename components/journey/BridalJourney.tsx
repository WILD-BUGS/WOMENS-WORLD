import React from "react";

const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Consultation",
    desc: "We begin with your vision, ceremony palette, silhouette preferences, and family heirlooms.",
    timing: "Week 1",
  },
  {
    step: "02",
    title: "Measurement",
    desc: "Over 24 anatomical measurements taken by master pattern cutters for a sculpting, comfortable fit.",
    timing: "Week 2",
  },
  {
    step: "03",
    title: "Trial Fitting",
    desc: "Basting session with the raw blouse and skirt to fine-tune ease, neckline drop, and posture lines.",
    timing: "Week 3–4",
  },
  {
    step: "04",
    title: "Final Delivery",
    desc: "Steamed, hand-finished, boxed in archival tissue—your piece ready for its once-in-a-lifetime moment.",
    timing: "Week 5–6",
  },
];

export function BridalJourney() {
  return (
    <section
      id="journey"
      className="relative w-full py-24 lg:py-32 bg-[#231120] text-ivory overflow-hidden textile-texture border-t border-gold/15"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-[11px] uppercase tracking-[0.35em] text-gold font-medium block mb-2">
            The Experience
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-ivory font-normal uppercase tracking-tight">
            Your Bridal <br />
            <span className="italic font-light text-gradient-gold">Journey</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ivory/60 mt-3">
            An intimate four-phase atelier progression designed around peace of mind.
          </p>
        </div>

        {/* 4 Connected Stages with Thin Gold Line (§19) */}
        <div className="relative">
          {/* Continuous Gold Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {JOURNEY_STEPS.map((item) => (
              <div
                key={item.step}
                className="flex flex-col p-6 bg-plum/60 border border-gold/20 hover:border-gold transition-colors duration-300 relative group"
              >
                {/* Node with step circle */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full border border-gold bg-[#231120] flex items-center justify-center font-heading text-lg text-gold font-light group-hover:bg-gold group-hover:text-[#231120] transition-colors">
                    {item.step}
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold/70 font-mono">
                    {item.timing}
                  </span>
                </div>

                <h3 className="font-heading text-xl text-ivory uppercase tracking-wide mb-2">
                  {item.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-ivory/65 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

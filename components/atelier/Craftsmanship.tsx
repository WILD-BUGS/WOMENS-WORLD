import Image from "next/image";
import { RangoliMandala } from "@/components/ui/RangoliAndSplash";

export function Craftsmanship() {
  return (
    <section
      id="craft"
      className="relative w-full py-24 lg:py-32 bg-[#231120] text-ivory overflow-hidden textile-texture border-t border-gold/15"
    >
      {/* Translucent Rangoli art in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <RangoliMandala
          size={650}
          opacity={0.11}
          variant="gold"
          className="absolute -bottom-36 -right-20 animate-[spin_240s_linear_infinite]"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Asymmetrical Craft Composition (§10) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Macro Embroidery & Overlapping Sketch (6 Columns) */}
          <div className="lg:col-span-6 relative">
            {/* Primary Large Macro Image */}
            <div className="relative w-full aspect-[4/3] border border-gold/40 p-2 bg-plum/90 shadow-2xl">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/artisan_hands.jpg"
                  alt="Indian master artisan hands stitching gold bullion zardosi embroidery on deep wine velvet"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute top-4 left-4 bg-plum/85 backdrop-blur-md px-3 py-1 border border-gold/30">
                <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-mono">
                  MACRO DETAIL 01
                </span>
              </div>
            </div>

            {/* Overlapping Fashion Sketch (Offset bottom-right on desktop) */}
            <div className="hidden sm:block absolute -bottom-10 -right-6 lg:-right-10 w-52 sm:w-64 aspect-[3/4] border-2 border-gold/50 bg-[#F7F2EA] shadow-2xl p-2 z-20">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/fashion_sketch.jpg"
                  alt="Haute couture atelier fashion sketch and fabric swatches"
                  fill
                  className="object-cover object-center"
                  sizes="256px"
                />
              </div>
              <div className="absolute bottom-2 left-2 right-2 bg-[#231120]/90 px-2 py-1 text-center">
                <span className="text-[9px] uppercase tracking-[0.25em] text-gold font-sans">
                  Original Atelier Sketch
                </span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative & Custom Craft Ornaments (6 Columns) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left lg:pl-8">
            <span className="text-[11px] uppercase tracking-[0.35em] text-gold font-medium block mb-3">
              Artisanal Heritage
            </span>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-ivory font-normal leading-[1.05] tracking-tight mb-6">
              FROM THREAD <br />
              <span className="italic font-light text-gradient-gold">
                TO MASTERPIECE.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-ivory/70 max-w-lg mb-10 leading-relaxed">
              Every garment created at Women’s World begins with a bespoke consultation,
              translating your wedding palette and family heritage into intricate, hand-punched
              embroidery patterns executed with micro-needles and antique metallic coils.
            </p>

            {/* Custom Embroidery Craft Motifs (§11) */}
            <div className="space-y-6 pt-4 border-t border-white/10">
              
              {/* ✦ AARI */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 shrink-0 rounded-full border border-gold/40 flex items-center justify-center bg-gold/10 text-gold">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" opacity="0.8"/>
                    <circle cx="12" cy="12" r="3" fill="#231120"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-ivory tracking-wide uppercase group-hover:text-gold transition-colors">
                    ✦ Aari Needlework
                  </h3>
                  <p className="text-xs text-ivory/60 leading-relaxed mt-1">
                    Continuous chain-stitch executed with fine awl needles, creating fluid peacock, floral, and vine scrolls.
                  </p>
                </div>
              </div>

              {/* ✦ ZARDOSI */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 shrink-0 rounded-full border border-gold/40 flex items-center justify-center bg-gold/10 text-gold">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3Z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 7V17M7 12H17" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-ivory tracking-wide uppercase group-hover:text-gold transition-colors">
                    ✦ Zardosi Bullion
                  </h3>
                  <p className="text-xs text-ivory/60 leading-relaxed mt-1">
                    3D sculptural metallic relief work using authentic gold and silver coiled wire, dabka, sequins, and cut-dana beads.
                  </p>
                </div>
              </div>

              {/* ✦ THREAD WORK */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 shrink-0 rounded-full border border-gold/40 flex items-center justify-center bg-gold/10 text-gold">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M6 18C10 14 14 10 18 6M6 6C10 10 14 14 18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-ivory tracking-wide uppercase group-hover:text-gold transition-colors">
                    ✦ Resham Thread Work
                  </h3>
                  <p className="text-xs text-ivory/60 leading-relaxed mt-1">
                    Rich silk shading and French knots delivering nuanced gradients and soft tonal depth to bridal motifs.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

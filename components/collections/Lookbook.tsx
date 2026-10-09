import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/config";
import { BotanicalFloral } from "@/components/ui/BotanicalDecor";
import { RangoliMandala } from "@/components/ui/RangoliAndSplash";

const LOOKS = [
  {
    num: "01",
    title: "The Muhurtham",
    subtitle: "Silk • Gold • Traditional",
    image: "/images/lookbook_muhurtham.jpg",
    desc: "Auspicious pure vermilion Kanjivaram silk layered with handcrafted temple jewelry, intricate kasu haram, and sacred floral fragrance.",
    tag: "South Indian Classic",
  },
  {
    num: "02",
    title: "The Reception",
    subtitle: "Contemporary • Glamorous",
    image: "/images/lookbook_reception.jpg",
    desc: "Architectural imperial wine velvet lehenga encrusted with cut-dana crystals, antique gold bullion, and a gossamer embroidered cape.",
    tag: "Modern Evening Glam",
  },
  {
    num: "03",
    title: "The Intimate",
    subtitle: "Soft • Romantic • Minimal",
    image: "/images/lookbook_intimate.jpg",
    desc: "Understated luxury featuring fluid drape, pastel accents, delicate French knots, and personalized initials woven into the border.",
    tag: "Civil & Sangeet",
  },
];

export function Lookbook() {
  return (
    <section
      id="lookbook"
      className="relative w-full py-24 lg:py-32 bg-[#F9F6F0] text-[#231120] overflow-hidden border-t border-b border-gold/20 light-editorial-section textile-texture"
      style={{
        backgroundColor: "#F9F6F0",
        color: "#231120",
      }}
    >
      {/* Background Ambience: Subtle Plum/Gold Halos, Botanical Florals & Translucent Rangoli Art */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft Ambient Halos */}
        <div className="absolute top-1/4 right-1/4 w-[480px] h-[480px] rounded-full bg-gold/15 blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-[#6B2470]/10 blur-[100px]" />

        {/* Translucent Rangoli Mandalas */}
        <RangoliMandala
          size={620}
          opacity={0.14}
          variant="gold"
          className="absolute -top-28 -left-20 animate-[spin_220s_linear_infinite]"
        />
        <RangoliMandala
          size={540}
          opacity={0.12}
          variant="plum"
          className="absolute -bottom-24 -right-16 animate-[spin_240s_linear_infinite_reverse]"
        />

        {/* Botanical Floral watermarks */}
        <BotanicalFloral className="absolute -top-12 -right-12 w-[320px] h-[320px] opacity-[0.12]" />
        <BotanicalFloral className="absolute bottom-0 -left-12 w-[340px] h-[340px] opacity-[0.10] rotate-45" />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Magazine Editorial Header */}
        <div className="text-center max-w-xl mx-auto mb-16 lg:mb-20">
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#A88040] font-semibold block mb-2">
            Fashion Lookbook
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-[#231120] font-normal uppercase tracking-tight">
            The Bridal <br />
            <span className="italic font-light text-[#6B2470]">Lookbook</span>
          </h2>
          <p className="font-heading italic text-lg sm:text-xl text-[#5A3D6B] mt-3">
            Three stories. Endless possibilities.
          </p>
        </div>

        {/* 3 Editorial Magazine Stories (No generic cards, pure Image + Typography) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {LOOKS.map((look) => (
            <div key={look.num} className="flex flex-col group">
              {/* Image with Sharp Edge & Zoom */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#231120] border border-[#C9A66B]/30 group-hover:border-[#A88040] transition-colors duration-500">
                <Image
                  src={look.image}
                  alt={look.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                {/* Number Overlay */}
                <div className="absolute top-4 left-4 font-heading text-3xl text-[#F7F2EA] drop-shadow-md font-light">
                  {look.num}
                </div>
                
                <div className="absolute bottom-4 right-4 bg-[#231120]/80 backdrop-blur-sm px-3 py-1 border border-gold/40">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-gold font-sans">
                    {look.tag}
                  </span>
                </div>
              </div>

              {/* Lookbook Typography Content */}
              <div className="pt-6 flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A88040] font-medium">
                  {look.subtitle}
                </span>

                <h3 className="font-heading text-2xl text-[#231120] mt-1 mb-2 font-normal group-hover:text-[#6B2470] transition-colors">
                  {look.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#5A3D6B] leading-relaxed mb-4">
                  {look.desc}
                </p>

                <a
                  href={getWhatsAppUrl(`Hello, I'm inspired by ${look.title} (${look.subtitle}) in your bridal lookbook.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#A88040] group-hover:text-[#6B2470] transition-colors mt-auto"
                >
                  <span>Consult This Look</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

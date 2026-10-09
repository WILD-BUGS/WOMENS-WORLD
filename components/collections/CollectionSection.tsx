import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/config";
import { RangoliMandala } from "@/components/ui/RangoliAndSplash";

const PIECES = [
  {
    id: "blouse",
    title: "The Regal Zardosi Blouse",
    category: "Couture Blouse",
    aspect: "aspect-[4/3]",
    colSpan: "lg:col-span-5",
    image: "/images/archive_blouse.jpg",
    details: "Hand-coiled antique bullion zari with scalloped pearl sleeve borders.",
  },
  {
    id: "lehenga",
    title: "Imperial Wine Bridal Lehenga",
    category: "Bridal Couture",
    aspect: "aspect-[3/4]",
    colSpan: "lg:col-span-4",
    image: "/images/lookbook_reception.jpg",
    details: "Layered silk velvet with handcrafted champagne crystal work.",
  },
  {
    id: "saree",
    title: "Heritage Muhurtham Kanjivaram",
    category: "Bridal Ensemble",
    aspect: "aspect-[3/4]",
    colSpan: "lg:col-span-3",
    image: "/images/archive_bride_1.jpg",
    details: "Custom-draped pure crimson silk paired with bespoke embroidered blouse.",
  },
];

export function CollectionSection() {
  return (
    <section
      id="collections"
      className="relative w-full py-24 lg:py-32 bg-[#231120] text-ivory overflow-hidden textile-texture"
    >
      {/* Translucent Rangoli style art in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <RangoliMandala
          size={700}
          opacity={0.11}
          variant="gold"
          className="absolute -top-32 -left-32 animate-[spin_260s_linear_infinite]"
        />
        <RangoliMandala
          size={550}
          opacity={0.08}
          variant="gold"
          className="absolute -bottom-36 -right-24 animate-[spin_220s_linear_infinite_reverse]"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-gold/20">
          <div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-gold font-medium block mb-2">
              The Collection
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-ivory font-normal uppercase tracking-tight">
              Pieces Made <br />
              <span className="italic font-light text-gradient-gold">
                For The Moment
              </span>
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-ivory/60 max-w-sm mt-4 md:mt-0 tracking-wide">
            Intentionally varied proportions, bespoke textures, and heirloom silhouettes built to endure generations.
          </p>
        </div>

        {/* Asymmetrical Horizontal Editorial Grid (§13) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {PIECES.map((piece) => (
            <div
              key={piece.id}
              className={`${piece.colSpan} flex flex-col group`}
            >
              {/* Image Container with Sharp Architectural Borders */}
              <div
                className={`relative w-full ${piece.aspect} overflow-hidden border border-white/15 group-hover:border-gold transition-colors duration-500 bg-[#231120]`}
              >
                <Image
                  src={piece.image}
                  alt={piece.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#231120]/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Corner tags */}
                <div className="absolute top-3 left-3 bg-[#231120]/80 backdrop-blur-sm px-2.5 py-1 border border-gold/30">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-gold font-mono">
                    {piece.category}
                  </span>
                </div>
              </div>

              {/* Editorial Typography Metadata */}
              <div className="pt-4 flex flex-col">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-heading text-xl text-ivory group-hover:text-gold transition-colors">
                    {piece.title}
                  </h3>
                  <span className="text-[10px] tracking-widest text-gold uppercase font-mono">
                    Bespoke
                  </span>
                </div>
                <p className="text-xs text-ivory/65 mt-1.5 leading-relaxed">
                  {piece.details}
                </p>
                <div className="mt-3">
                  <a
                    href={getWhatsAppUrl(`Hello, I'd like to enquire about ${piece.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-[0.25em] text-gold hover:text-gold-light inline-flex items-center gap-1.5"
                  >
                    <span>Enquire This Piece</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

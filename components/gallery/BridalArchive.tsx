"use client";

import { useState } from "react";
import Image from "next/image";
import { RangoliMandala } from "@/components/ui/RangoliAndSplash";
import { BrandLogo } from "@/components/ui/BrandLogo";

interface ArchiveItem {
  id: string;
  category: "BRIDES" | "BLOUSES" | "EMBROIDERY" | "BEAUTY" | "DETAILS";
  title: string;
  subtitle: string;
  image: string;
  aspect: string;
  span: string;
}

const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: "1",
    category: "BRIDES",
    title: "Ananya's Muhurtham Grandeur",
    subtitle: "Pure Kanjivaram Silk with Antique Gold Zari",
    image: "/images/archive_bride_1.jpg",
    aspect: "aspect-[3/4]",
    span: "col-span-12 sm:col-span-6 lg:col-span-4",
  },
  {
    id: "2",
    category: "EMBROIDERY",
    title: "Master Artisan Bullion Zardosi",
    subtitle: "Micro-awl Aari Needlework on Deep Wine Velvet",
    image: "/images/artisan_hands.jpg",
    aspect: "aspect-[4/3]",
    span: "col-span-12 sm:col-span-6 lg:col-span-5",
  },
  {
    id: "3",
    category: "BEAUTY",
    title: "Temple Jewelry Dewy Glamour",
    subtitle: "Radiant Skin Tone with Rose Shimmer Contour",
    image: "/images/bridal_beauty.jpg",
    aspect: "aspect-[3/4]",
    span: "col-span-12 sm:col-span-6 lg:col-span-3",
  },
  {
    id: "4",
    category: "DETAILS",
    title: "The Atelier Drafting Desk",
    subtitle: "Custom Blouse Drafting & Raw Silk Swatches",
    image: "/images/fashion_sketch.jpg",
    aspect: "aspect-[3/4]",
    span: "col-span-12 sm:col-span-6 lg:col-span-3",
  },
  {
    id: "5",
    category: "DETAILS",
    title: "French Knots & Micro-Pearl Detailing",
    subtitle: "Bullion Coil & Hand-Stitched Heirloom Motifs",
    image: "/images/archive_details.jpg",
    aspect: "aspect-[4/3]",
    span: "col-span-12 sm:col-span-6 lg:col-span-5",
  },
  {
    id: "6",
    category: "BLOUSES",
    title: "Bespoke Royal Velvet Blouse",
    subtitle: "Heirloom Scalloped Pearl Sleeve Embroidery",
    image: "/images/archive_blouse.jpg",
    aspect: "aspect-[3/4]",
    span: "col-span-12 sm:col-span-6 lg:col-span-4",
  },
];

const CATEGORIES = ["ALL", "BRIDES", "BLOUSES", "EMBROIDERY", "BEAUTY", "DETAILS"] as const;

export function BridalArchive() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [activeItem, setActiveItem] = useState<ArchiveItem | null>(null);

  const filteredItems =
    activeFilter === "ALL"
      ? ARCHIVE_ITEMS
      : ARCHIVE_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section
      id="archive"
      className="relative w-full py-24 lg:py-32 bg-[#231120] text-ivory overflow-hidden textile-texture"
    >
      {/* Translucent Rangoli art in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <RangoliMandala
          size={750}
          opacity={0.1}
          variant="gold"
          className="absolute -top-40 -left-40 animate-[spin_280s_linear_infinite]"
        />
        <RangoliMandala
          size={600}
          opacity={0.09}
          variant="gold"
          className="absolute -bottom-32 right-[-10%] animate-[spin_240s_linear_infinite_reverse]"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="mb-4 flex justify-center">
            <BrandLogo size="sm" variant="light" className="opacity-80" />
          </div>
          <span className="text-[11px] uppercase tracking-[0.35em] text-gold font-medium block mb-2">
            The Atelier Gallery
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-ivory font-normal uppercase tracking-tight">
            The Bridal <br />
            <span className="italic font-light text-gradient-gold">Archive</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ivory/60 mt-3">
            Real brides, artisanal close-ups, and atelier craftsmanship.
          </p>
        </div>

        {/* Categories: Blueprint §18 - Simple text links with animated gold underline (NO pills) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-6 sm:gap-10 mb-10 sm:mb-14 border-b border-white/10 pb-4 px-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`text-xs uppercase tracking-[0.25em] relative py-2 transition-colors font-medium shrink-0 whitespace-nowrap min-h-[44px] flex items-center touch-manipulation ${
                  isActive ? "text-gold font-semibold" : "text-ivory/60 hover:text-ivory"
                }`}
              >
                {cat}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold" />
                )}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Masonry-like Grid (§17) */}
        <div className="grid grid-cols-12 gap-6 items-center">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`${item.span} group cursor-pointer relative overflow-hidden bg-plum/70 border border-white/15 hover:border-gold transition-all duration-500`}
            >
              <div className={`relative w-full ${item.aspect} overflow-hidden`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-[#231120]/40 group-hover:bg-[#231120]/75 transition-colors duration-500" />

                {/* Corner Gold Indicators */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-gold border border-gold/40 px-2 py-0.5 bg-[#231120]/90">
                    {item.category}
                  </span>
                </div>

                {/* Caption Appears on Hover */}
                <div className="absolute inset-x-0 bottom-0 p-5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-[#231120] to-transparent">
                  <h3 className="font-heading text-lg text-ivory leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ivory/70 mt-1 font-sans">
                    {item.subtitle}
                  </p>
                  <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-medium mt-2 inline-block">
                    Click to View Lightbox ↗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal (§17) */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#231120]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute -top-12 right-0 text-ivory/80 hover:text-gold text-xs uppercase tracking-[0.25em] flex items-center gap-2"
            >
              <span>Close</span>
              <span className="text-lg">✕</span>
            </button>

            {/* Lightbox Image Container */}
            <div className="relative w-full h-[65vh] border border-gold/40 shadow-2xl p-2 bg-plum">
              <div className="relative w-full h-full">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 95vw, 1000px"
                />
              </div>
            </div>

            {/* Lightbox Caption */}
            <div className="w-full mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-gold/20 pt-3">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold">
                  {activeItem.category} • ARCHIVE ENTRY
                </span>
                <h3 className="font-heading text-xl sm:text-2xl text-ivory">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-ivory/70 mt-0.5 font-sans">
                  {activeItem.subtitle}
                </p>
              </div>

              <a
                href={`https://wa.me/919790145978?text=${encodeURIComponent(
                  `Hello, I would like to enquire about this piece from your Bridal Archive: ${activeItem.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 sm:mt-0 px-5 py-2.5 bg-gold text-[#231120] text-xs font-semibold uppercase tracking-[0.2em] rounded-[2px]"
              >
                Enquire On WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

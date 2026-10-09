"use client";

import { useState } from "react";
import Image from "next/image";
import { BotanicalFloral } from "@/components/ui/BotanicalDecor";
import { RangoliMandala } from "@/components/ui/RangoliAndSplash";

const TESTIMONIALS = [
  {
    quote: "THE ATTENTION TO DETAIL WAS SIMPLY INCREDIBLE. MY WEDDING BLOUSE WAS AN HEIRLOOM MASTERPIECE.",
    author: "Priya Ramanathan",
    event: "Muhurtham & Reception Bride, Chennai",
    image: "/images/testimonial_bride_1.jpg",
  },
  {
    quote: "I WAS STUNNED BY THE WEIGHTLESSNESS OF THE VELVET LEHENGA AND THE GLOW OF THE BRIDAL MAKEUP.",
    author: "Sneha Swaminathan",
    event: "Temple Wedding & Evening Reception",
    image: "/images/testimonial_bride_2.jpg",
  },
  {
    quote: "FROM THE FIRST SKETCH TO THE FINAL TRIAL, THE ATELIER MASTERED EVERY CURVE AND COLOR HARMONY.",
    author: "Divya Chandran",
    event: "Kanjivaram Bridal Couture, Coimbatore",
    image: "/images/testimonial_bride_3.jpg",
  },
];

export function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  return (
    <section
      id="testimonial"
      className="relative w-full py-24 lg:py-28 bg-[#F9F6F0] text-[#231120] overflow-hidden light-editorial-section textile-texture"
      style={{
        backgroundColor: "#F9F6F0",
        color: "#231120",
      }}
    >
      {/* Background Ambience: Subtle Plum/Gold Halos, Botanical Florals & Translucent Rangoli Art */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft Ambient Halos */}
        <div className="absolute top-1/3 left-1/4 w-[480px] h-[480px] rounded-full bg-gold/15 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-10 right-10 w-[420px] h-[420px] rounded-full bg-[#6B2470]/10 blur-[100px]" />

        {/* Translucent Rangoli Mandalas */}
        <RangoliMandala
          size={600}
          opacity={0.14}
          variant="gold"
          className="absolute -top-24 right-[-5%] animate-[spin_240s_linear_infinite]"
        />
        <RangoliMandala
          size={520}
          opacity={0.12}
          variant="plum"
          className="absolute -bottom-20 -left-10 animate-[spin_200s_linear_infinite_reverse]"
        />

        {/* Botanical Floral watermarks */}
        <BotanicalFloral className="absolute -top-10 -left-10 w-[300px] h-[300px] opacity-[0.12]" />
        <BotanicalFloral className="absolute bottom-0 right-4 w-[320px] h-[320px] opacity-[0.10] rotate-45" />
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Giant Editorial Quotation (§20) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Small Editorial Bridal Photograph */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-48 sm:w-56 aspect-[3/4] border-2 border-[#C9A66B] p-1.5 bg-[#F9F6F0] shadow-xl">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={current.image}
                  alt={current.author}
                  fill
                  className="object-cover object-center transition-all duration-700"
                  sizes="224px"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-[#231120] text-gold px-2.5 py-1 text-[9px] uppercase tracking-widest font-mono">
                Verified Bride
              </div>
            </div>
          </div>

          {/* Right: Giant Editorial Typography & Attribution */}
          <div className="lg:col-span-8 flex flex-col text-left">
            {/* Elegant Serif Quotation Mark */}
            <span className="font-heading text-6xl sm:text-8xl text-[#C9A66B]/50 leading-none select-none font-serif">
              “
            </span>

            <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#231120] font-normal leading-[1.2] uppercase tracking-tight -mt-4 mb-6">
              {current.quote}
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#C9A66B]/30">
              <div>
                <cite className="not-italic font-heading text-lg text-[#6B2470] font-semibold block">
                  — {current.author}
                </cite>
                <span className="text-xs text-[#5A3D6B] font-sans tracking-wide">
                  {current.event}
                </span>
              </div>

              {/* Minimalist Editorial Controls */}
              <div className="flex items-center gap-1">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className="p-2 min-w-[36px] min-h-[36px] flex items-center justify-center touch-manipulation focus:outline-none"
                    aria-label={`Show testimonial ${i + 1}`}
                  >
                    <span
                      className={`h-1.5 transition-all rounded-full block ${
                        index === i ? "w-8 bg-[#6B2470]" : "w-2.5 bg-[#C9A66B]/40 hover:bg-[#C9A66B]"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { GoldThreadDivider } from "@/components/ui/BotanicalDecor";
import { RangoliMandala } from "@/components/ui/RangoliAndSplash";

export function BrandStatement() {
  return (
    <section
      id="atelier"
      className="relative w-full py-24 sm:py-28 lg:py-36 bg-[#F9F6F0] text-[#231120] flex items-center justify-center overflow-hidden light-editorial-section"
      style={{
        backgroundColor: "#F9F6F0",
        color: "#231120",
      }}
    >
      {/* ── Top Organic Wave Drape Transition (§ Image Match) ── */}
      <div
        className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none select-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 lg:h-20 block"
          preserveAspectRatio="none"
        >
          {/* Deeper Plum under-layer */}
          <path
            d="M0,0 L1440,0 L1440,32 C1220,62 980,12 720,40 C460,68 220,18 0,42 Z"
            fill="#231120"
          />
          {/* Regal Violet accent wave layer */}
          <path
            d="M0,0 L1440,0 L1440,20 C1180,48 940,8 680,30 C440,50 200,10 0,26 Z"
            fill="#3B1240"
            opacity="0.95"
          />
          {/* Soft highlight border */}
          <path
            d="M0,42 C220,18 460,68 720,40 C980,12 1220,62 1440,32"
            stroke="#C9A66B"
            strokeWidth="1"
            strokeOpacity="0.4"
            fill="none"
          />
        </svg>

        {/* Floating Decorative Confetti Dots across Top Wave */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute left-[9%] top-[24px] w-1.5 h-1.5 rounded-full bg-[#3B1240] opacity-80" />
          <span className="absolute left-[13%] top-[12px] w-1 h-1 rounded-full bg-[#C9A66B] opacity-90" />
          <span className="absolute left-[24%] top-[28px] w-1.5 h-1.5 rounded-full bg-[#231120] opacity-75" />
          <span className="absolute left-[36%] top-[34px] w-2 h-2 rounded-full bg-[#3B1240] opacity-85" />
          <span className="absolute left-[39%] top-[45px] w-1 h-1 rounded-full bg-[#C9A66B] opacity-80" />
          <span className="absolute left-[48%] top-[30px] w-1 h-1 rounded-full bg-[#E8C98A] opacity-85" />
          <span className="absolute left-[51%] top-[46px] w-1.5 h-1.5 rounded-full bg-[#6B2470] opacity-75" />
          <span className="absolute left-[60%] top-[34px] w-1.5 h-1.5 rounded-full bg-[#3B1240] opacity-80" />
          <span className="absolute left-[63%] top-[48px] w-1 h-1 rounded-full bg-[#C9A66B] opacity-75" />
          <span className="absolute left-[73%] top-[28px] w-1 h-1 rounded-full bg-[#E8C98A] opacity-90" />
          <span className="absolute left-[76%] top-[38px] w-1.5 h-1.5 rounded-full bg-[#231120] opacity-70" />
          <span className="absolute left-[86%] top-[22px] w-2 h-2 rounded-full bg-[#3B1240] opacity-85" />
          <span className="absolute left-[89%] top-[34px] w-1 h-1 rounded-full bg-[#C9A66B] opacity-80" />
          <span className="absolute left-[95%] top-[18px] w-1 h-1 rounded-full bg-[#6B2470] opacity-75" />
        </div>
      </div>

      {/* ── Background Mandalas (sm+: Dual Symmetrical Left & Right | mobile: Single Clean Non-Overlapping Watermark) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Desktop & Tablet (sm and up): Dual Symmetrical 720px Mandalas */}
        <div className="hidden sm:block">
          <RangoliMandala
            size={720}
            opacity={0.17}
            variant="plum"
            className="absolute top-1/2 -left-44 md:-left-36 lg:-left-32 -translate-y-1/2 animate-[spin_240s_linear_infinite]"
          />
          <RangoliMandala
            size={720}
            opacity={0.17}
            variant="plum"
            className="absolute top-1/2 -right-44 md:-right-36 lg:-right-32 -translate-y-1/2 animate-[spin_240s_linear_infinite_reverse]"
          />
        </div>

        {/* Mobile View Only (< sm): Single Delicate Watermark — Zero Overlap */}
        <div className="block sm:hidden">
          <RangoliMandala
            size={340}
            opacity={0.10}
            variant="plum"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_240s_linear_infinite]"
          />
        </div>
      </div>

      {/* ── Center Editorial Content (§ Image Exact Typography) ── */}
      <div className="max-w-[920px] mx-auto px-6 text-center relative z-10 my-4 sm:my-6">
        {/* Eyebrow */}
        <span className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.38em] text-[#A88040] font-semibold block mb-4">
          THE ATELIER
        </span>

        {/* Core Statement Heading */}
        <h2 className="font-heading text-3xl sm:text-5xl lg:text-[3.6rem] font-normal tracking-tight text-[#231120] leading-[1.12] mb-6">
          WHERE EVERY STITCH
          <span className="block font-light italic text-[#3B1240]">
            TELLS YOUR STORY.
          </span>
        </h2>

        {/* Gold Star Horizontal Thread Divider (§ Image Match) */}
        <GoldThreadDivider className="my-6 max-w-xs mx-auto" />

        {/* Three rhythmic editorial lines */}
        <div className="space-y-1.5 text-base sm:text-lg md:text-xl font-heading italic text-[#5A3D6B] font-light">
          <p>Tailored with intention.</p>
          <p>Crafted by hand.</p>
          <p>Created for your moment.</p>
        </div>

        {/* Category Tagline from Image */}
        <div className="mt-8 text-[10px] sm:text-[11px] font-sans tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#6B2470]/85 font-medium">
          BESPOKE BRIDAL COUTURE • HAND EMBROIDERY • BEAUTY ATELIER
        </div>
      </div>

      {/* ── Bottom Organic Wave Drape Transition (§ Image Match) ── */}
      <div
        className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Floating Decorative Confetti Dots across Bottom Wave */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute left-[11%] bottom-[32px] w-1.5 h-1.5 rounded-full bg-[#3B1240] opacity-80" />
          <span className="absolute left-[15%] bottom-[16px] w-1.5 h-1.5 rounded-full bg-[#C9A66B] opacity-85" />
          <span className="absolute left-[29%] bottom-[24px] w-1 h-1 rounded-full bg-[#231120] opacity-75" />
          <span className="absolute left-[36%] bottom-[38px] w-1.5 h-1.5 rounded-full bg-[#6B2470] opacity-80" />
          <span className="absolute left-[54%] bottom-[18px] w-1 h-1 rounded-full bg-[#C9A66B] opacity-80" />
          <span className="absolute left-[74%] bottom-[36px] w-1 h-1 rounded-full bg-[#6B2470] opacity-80" />
          <span className="absolute left-[79%] bottom-[20px] w-1.5 h-1.5 rounded-full bg-[#3B1240] opacity-75" />
          <span className="absolute left-[89%] bottom-[12px] w-1.5 h-1.5 rounded-full bg-[#C9A66B] opacity-85" />
        </div>

        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 lg:h-20 block"
          preserveAspectRatio="none"
        >
          {/* Soft highlight border */}
          <path
            d="M0,48 C240,20 480,72 720,44 C960,16 1200,66 1440,38"
            stroke="#C9A66B"
            strokeWidth="1"
            strokeOpacity="0.4"
            fill="none"
          />
          {/* Regal Violet accent wave layer */}
          <path
            d="M0,56 C240,28 480,78 720,50 C960,22 1200,72 1440,46 L1440,90 L0,90 Z"
            fill="#3B1240"
            opacity="0.95"
          />
          {/* Deeper Plum base layer */}
          <path
            d="M0,64 C260,38 520,84 760,58 C1020,32 1240,78 1440,60 L1440,90 L0,90 Z"
            fill="#231120"
          />
        </svg>
      </div>
    </section>
  );
}

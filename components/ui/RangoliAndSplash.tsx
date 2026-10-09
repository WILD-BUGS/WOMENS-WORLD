import React from "react";
import Image from "next/image";

/**
 * Geometric, ornamental traditional South Asian Rangoli / Kolam mandala art
 * Rendered using authentic high-detail PNG artwork with continuous slow rotation,
 * subtle opacity, and zero layout interference.
 */
export function RangoliMandala({
  className = "",
  size = 400,
  opacity = 0.12,
  variant = "gold",
}: {
  className?: string;
  size?: number;
  opacity?: number;
  variant?: "gold" | "plum" | "rose";
}) {
  const imageSrc =
    variant === "plum"
      ? "/images/rangoli-detailed-plum.png"
      : "/images/rangoli-detailed.png";

  const filterStyle =
    variant === "rose"
      ? "hue-rotate(330deg) saturate(1.2)"
      : undefined;

  // If className doesn't already specify a spin/animation class, apply default slow continuous rotation
  const hasAnimation = className.includes("animate-") || className.includes("spin");
  const animationClass = hasAnimation ? "" : "rangoli-spin";

  return (
    <div
      className={`pointer-events-none select-none ${animationClass} ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
        filter: filterStyle,
        willChange: "transform",
      }}
      aria-hidden="true"
    >
      <Image
        src={imageSrc}
        alt=""
        width={size}
        height={size}
        className="w-full h-full object-contain pointer-events-none select-none max-w-none"
        aria-hidden="true"
      />
    </div>
  );
}

/**
 * Section Transition Disabled — Clean Editorial Color-Block Boundary
 * Sections transition cleanly and immediately with zero fades, zero gradients,
 * and zero decorative dividers.
 */
export function SplashTransition() {
  return null;
}


/**
 * Royal Grand Bridal Picture Frame
 * Inspired by South Asian royal palaces, antique gold filigree jharokha arches,
 * temple architecture, ornate corner brackets, and layered metallic jewel trims.
 */
export function RoyalBridalFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative p-3.5 sm:p-5 bg-gradient-to-b from-[#2A1527] via-[#210E1E] to-[#1A0A17] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_40px_rgba(201,166,107,0.22)] group ${className}`}
      style={{
        border: "2px solid #C9A66B",
        boxShadow:
          "0 0 0 3px #3B1240, 0 0 0 5px rgba(201,166,107,0.5), 0 25px 60px rgba(0,0,0,0.85)",
      }}
    >
      {/* Top Royal Crown / Jharokha Crest Ornament */}
      <div
        className="absolute -top-7 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center"
        aria-hidden="true"
      >
        <svg
          width="130"
          height="32"
          viewBox="0 0 130 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Royal arch pediment */}
          <path
            d="M 10 30 C 35 28, 50 14, 65 3 C 80 14, 95 28, 120 30"
            stroke="#E8C98A"
            strokeWidth="1.8"
            fill="#231120"
          />
          <path
            d="M 25 30 C 42 27, 54 18, 65 10 C 76 18, 88 27, 105 30"
            stroke="#C9A66B"
            strokeWidth="1.2"
          />
          {/* Center royal diamond jewel */}
          <polygon points="65,0 71,8 65,16 59,8" fill="#E8C98A" stroke="#C9A66B" strokeWidth="0.8" />
          <circle cx="65" cy="8" r="2.5" fill="#3B1240" />
          {/* Side ornamental pearls */}
          <circle cx="45" cy="20" r="2.5" fill="#E8C98A" />
          <circle cx="85" cy="20" r="2.5" fill="#E8C98A" />
          <circle cx="28" cy="28" r="2" fill="#C9A66B" />
          <circle cx="102" cy="28" r="2" fill="#C9A66B" />
        </svg>
      </div>

      {/* Ornate Royal Corner Brackets (Filigree Metalwork) */}
      {/* Top Left Corner */}
      <div className="absolute -top-3 -left-3 w-10 h-10 z-30 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
          <path
            d="M 2 38 L 2 12 C 2 6, 6 2, 12 2 L 38 2"
            stroke="#E8C98A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 8 36 L 8 16 C 8 11, 11 8, 16 8 L 36 8"
            stroke="#C9A66B"
            strokeWidth="1.2"
          />
          <circle cx="8" cy="8" r="3.5" fill="#E8C98A" stroke="#231120" strokeWidth="1" />
          <circle cx="2" cy="2" r="3" fill="#C9A66B" />
          <path d="M 12 12 Q 22 22 30 12" stroke="#E8C98A" strokeWidth="1" fill="none" />
          <path d="M 12 12 Q 22 22 12 30" stroke="#E8C98A" strokeWidth="1" fill="none" />
          <circle cx="20" cy="20" r="1.8" fill="#E8C98A" />
        </svg>
      </div>

      {/* Top Right Corner */}
      <div className="absolute -top-3 -right-3 w-10 h-10 z-30 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full scale-x-[-1]">
          <path
            d="M 2 38 L 2 12 C 2 6, 6 2, 12 2 L 38 2"
            stroke="#E8C98A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 8 36 L 8 16 C 8 11, 11 8, 16 8 L 36 8"
            stroke="#C9A66B"
            strokeWidth="1.2"
          />
          <circle cx="8" cy="8" r="3.5" fill="#E8C98A" stroke="#231120" strokeWidth="1" />
          <circle cx="2" cy="2" r="3" fill="#C9A66B" />
          <path d="M 12 12 Q 22 22 30 12" stroke="#E8C98A" strokeWidth="1" fill="none" />
          <path d="M 12 12 Q 22 22 12 30" stroke="#E8C98A" strokeWidth="1" fill="none" />
          <circle cx="20" cy="20" r="1.8" fill="#E8C98A" />
        </svg>
      </div>

      {/* Bottom Left Corner */}
      <div className="absolute -bottom-3 -left-3 w-10 h-10 z-30 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full scale-y-[-1]">
          <path
            d="M 2 38 L 2 12 C 2 6, 6 2, 12 2 L 38 2"
            stroke="#E8C98A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 8 36 L 8 16 C 8 11, 11 8, 16 8 L 36 8"
            stroke="#C9A66B"
            strokeWidth="1.2"
          />
          <circle cx="8" cy="8" r="3.5" fill="#E8C98A" stroke="#231120" strokeWidth="1" />
          <circle cx="2" cy="2" r="3" fill="#C9A66B" />
          <path d="M 12 12 Q 22 22 30 12" stroke="#E8C98A" strokeWidth="1" fill="none" />
          <path d="M 12 12 Q 22 22 12 30" stroke="#E8C98A" strokeWidth="1" fill="none" />
          <circle cx="20" cy="20" r="1.8" fill="#E8C98A" />
        </svg>
      </div>

      {/* Bottom Right Corner */}
      <div className="absolute -bottom-3 -right-3 w-10 h-10 z-30 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full scale-x-[-1] scale-y-[-1]">
          <path
            d="M 2 38 L 2 12 C 2 6, 6 2, 12 2 L 38 2"
            stroke="#E8C98A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 8 36 L 8 16 C 8 11, 11 8, 16 8 L 36 8"
            stroke="#C9A66B"
            strokeWidth="1.2"
          />
          <circle cx="8" cy="8" r="3.5" fill="#E8C98A" stroke="#231120" strokeWidth="1" />
          <circle cx="2" cy="2" r="3" fill="#C9A66B" />
          <path d="M 12 12 Q 22 22 30 12" stroke="#E8C98A" strokeWidth="1" fill="none" />
          <path d="M 12 12 Q 22 22 12 30" stroke="#E8C98A" strokeWidth="1" fill="none" />
          <circle cx="20" cy="20" r="1.8" fill="#E8C98A" />
        </svg>
      </div>

      {/* Antique Gold Filigree Inner Inset Matting */}
      <div className="relative p-1.5 bg-[#190B18] border border-[#E8C98A]/60 shadow-inner">
        {/* Fine gold bead border line */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            border: "1px dashed rgba(232, 201, 138, 0.4)",
            margin: "3px",
          }}
        />

        {/* The photo container */}
        <div className="relative w-full h-full overflow-hidden">
          {children}
        </div>
      </div>

      {/* Bottom Royal Medallion Prow */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="px-4 py-1 bg-gradient-to-r from-[#231120] via-[#3B1240] to-[#231120] border border-[#E8C98A] shadow-lg flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8C98A]" />
          <span className="text-[8px] uppercase tracking-[0.3em] text-[#E8C98A] font-semibold font-mono">
            ROYAL ATELIER HEIRLOOM
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8C98A]" />
        </div>
      </div>
    </div>
  );
}

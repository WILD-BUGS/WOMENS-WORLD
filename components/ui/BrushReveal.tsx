"use client";

import React from "react";
import Image from "next/image";

export interface BrushRevealProps {
  /** Source URL of the image to display and reveal */
  src?: string;
  /** Alias for src */
  imageSrc?: string;
  /** Accessible alt description */
  alt?: string;
  /** Optional container CSS class */
  className?: string;
  /** Optional overlay children (e.g., editorial caption labels) */
  children?: React.ReactNode;
  /** Image aspect ratio class or style (default 4/5) */
  aspectRatio?: string;
  /** Priority loading flag for Next.js Image */
  priority?: boolean;
}

/**
 * BrushReveal Component
 *
 * Implements an authentic paint-brush reveal using '/public/images/brush-mask.png'
 * (and '/public/brush-mask.png') via CSS mask-image and -webkit-mask-image.
 *
 * Requirements:
 * 1. The entire container and surrounding area is 100% COMPLETELY TRANSPARENT.
 *    - Zero background colors, zero purple rectangular cards, zero ambient color washes.
 *    - Zero borders, frames, or box outlines.
 * 2. The bridal portrait is revealed solely through the dry paint-brush texture mask.
 * 3. The center of the portrait (bride's face, jewelry, veil, embroidery) remains 100% clean,
 *    sharp, crisp, and undisturbed.
 * 4. The outer perimeter displays the organic uneven dry-brush strokes and bristle silhouette.
 */
export function BrushReveal({
  src,
  imageSrc,
  alt = "Women's World bespoke bridal couture lehenga",
  className = "",
  children,
  aspectRatio = "aspect-[4/5]",
  priority = true,
}: BrushRevealProps) {
  const finalSrc = src || imageSrc || "/images/hero_bride.jpg";

  return (
    <div
      className={`relative w-full max-w-[760px] mx-auto select-none overflow-visible bg-transparent ${className}`}
      style={{
        background: "transparent",
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        boxShadow: "none",
      }}
    >
      <style>{`
        @keyframes brushRevealFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.96);
          }
          40% {
            opacity: 0.8;
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .brush-reveal-container {
          animation: brushRevealFadeIn 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          will-change: transform, opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          .brush-reveal-container {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* 
        Core Brush-Masked Portrait:
        - CSS mask-image uses /public/images/brush-mask.png
        - Background is 100% transparent.
        - Center is sharp and untouched.
        - Edges reflect authentic dry brush-stroke silhouette.
      */}
      <div
        className={`relative w-full ${aspectRatio} overflow-visible brush-reveal-container`}
        style={{
          background: "transparent",
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          boxShadow: "none",
          WebkitMaskImage: "url(/images/brush-mask.png), url(/brush-mask.png)",
          maskImage: "url(/images/brush-mask.png), url(/brush-mask.png)",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      >
        {/* Crystal-clear photography: Bride's face, jewelry & couture remain sharp and undisturbed */}
        <Image
          src={finalSrc}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 95vw, (max-width: 1200px) 50vw, 580px"
          className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-[1.02]"
        />

        {/* Floating editorial children overlay (e.g. archive label) */}
        {children}
      </div>
    </div>
  );
}

// Backwards compatibility alias
export const InkReveal = BrushReveal;

export default BrushReveal;

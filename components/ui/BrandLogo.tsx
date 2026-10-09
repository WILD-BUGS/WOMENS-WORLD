import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "hero" | "nav";
  variant?: "light" | "dark";
  src?: string;
  priority?: boolean;
}

/**
 * Reusable Women's World Brand Logo Component
 * Renders the official brand mark from /logo.svg (or /images/logo.svg)
 * Preserves intrinsic aspect ratio without distortion.
 *
 * Size Guidelines:
 * - hero: Desktop: 140-190px (175px), Tablet: 120-160px (150px), Mobile: 100-140px (130px)
 * - nav: Desktop: 150-190px (165px), Tablet: 140px, Mobile: 120px
 */
export function BrandLogo({
  className = "",
  size = "md",
  variant = "light",
  src,
  priority,
}: BrandLogoProps) {
  const sizeClasses: Record<string, string> = {
    xs: "w-[80px] h-auto",
    sm: "w-[105px] sm:w-[120px] h-auto",
    md: "w-[130px] sm:w-[150px] lg:w-[165px] h-auto",
    lg: "w-[165px] sm:w-[190px] lg:w-[210px] h-auto",
    xl: "w-[200px] sm:w-[240px] h-auto",
    hero: "w-[130px] sm:w-[155px] lg:w-[175px] h-auto",
    nav: "w-[72px] sm:w-[110px] lg:w-[155px] h-auto max-h-[44px] sm:max-h-[58px] lg:max-h-[66px]",
  };

  const defaultSrc = variant === "dark" ? "/images/logo-dark.svg" : "/logo.svg";
  const logoSrc = src || defaultSrc;
  const isPriority = priority ?? (size === "hero" || size === "nav" || size === "md");

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src={logoSrc}
        alt="Women's World — Haute Couture Atelier & Bridal Luxury"
        width={470}
        height={485}
        className={`${sizeClasses[size] || sizeClasses.md} object-contain aspect-auto drop-shadow-sm`}
        priority={isPriority}
      />
    </div>
  );
}

export default BrandLogo;

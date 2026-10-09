import React from "react";

export function BotanicalFloral({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M100 20 C100 60 140 100 180 100 C140 100 100 140 100 180 C100 140 60 100 20 100 C60 100 100 60 100 20 Z"
        stroke="#C9A66B"
        strokeWidth="0.8"
        strokeDasharray="2 2"
      />
      <circle cx="100" cy="100" r="32" stroke="#C9A66B" strokeWidth="0.6" />
      <circle cx="100" cy="100" r="8" fill="#C9A66B" fillOpacity="0.4" />
      <path
        d="M70 70 Q100 90 130 70 Q110 100 130 130 Q100 110 70 130 Q90 100 70 70 Z"
        stroke="#E8C98A"
        strokeWidth="0.5"
      />
    </svg>
  );
}

export function GoldThreadDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-[#C9A66B]" />
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gold">
        <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="#C9A66B" />
      </svg>
      <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-[#C9A66B]" />
    </div>
  );
}

export function EditorialMonogram({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="w-7 h-7 rounded-full border border-gold/40 flex items-center justify-center bg-plum/40 backdrop-blur-sm">
        <span className="font-heading italic text-xs font-semibold text-gradient-gold">W</span>
      </div>
      <div className="flex flex-col text-left">
        <span className="font-heading text-xs tracking-[0.22em] text-ivory font-bold uppercase">
          Women&apos;s World
        </span>
        <span className="text-[9px] tracking-[0.25em] text-gold/80 uppercase font-sans">
          Atelier / Bridal Couture
        </span>
      </div>
    </div>
  );
}

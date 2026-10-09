"use client";

import { getWhatsAppUrl } from "@/lib/config";

const WA_FLOAT = getWhatsAppUrl(
  "Hello, I would like to enquire about bridal couture and book a consultation."
);

export function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center group"
    >
      <a
        href={WA_FLOAT}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 p-3.5 sm:px-4 sm:py-3 min-w-[48px] min-h-[48px] bg-[#C9A66B] hover:bg-[#E8C98A] text-[#231120] font-sans font-semibold text-xs tracking-wider uppercase rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 border border-[#231120]/30 touch-manipulation"
        aria-label="Enquire on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="shrink-0"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.981.536 1.761.802 2.796.802 3.178 0 5.766-2.587 5.766-5.766 0-3.18-2.587-5.768-5.766-5.768zm0 10.375c-.911 0-1.748-.258-2.487-.723l-.178-.106-1.579.414.422-1.54-.116-.185c-.512-.816-.782-1.637-.781-2.469 0-2.541 2.068-4.609 4.61-4.609 2.54 0 4.607 2.068 4.607 4.609 0 2.541-2.067 4.609-4.607 4.609z" />
        </svg>
        <span className="hidden sm:inline">Book on WhatsApp</span>
      </a>
    </aside>
  );
}

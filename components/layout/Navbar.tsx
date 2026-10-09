"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";
import { BrandLogo } from "@/components/ui/BrandLogo";

const NAV_LINKS = [
  { label: "Home", href: "#home", num: "01" },
  { label: "Collections", href: "#collections", num: "02" },
  { label: "Our Craft", href: "#craft", num: "03" },
  { label: "Bridal Beauty", href: "#beauty", num: "04" },
  { label: "Atelier", href: "#atelier", num: "05" },
  { label: "Archive", href: "#archive", num: "06" },
  { label: "Contact", href: "#contact", num: "07" },
];

const WA_NAV = getWhatsAppUrl(
  "Hello, I would like to enquire about bridal couture and book a consultation."
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#231120]/95 backdrop-blur-md border-b border-gold/25 py-2 sm:py-2.5 lg:py-3 shadow-lg"
            : "bg-transparent py-2 sm:py-3.5 lg:py-5 border-b border-white/5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Women's World Brand Logo */}
          <Link href="#home" className="group flex items-center py-0.5 sm:py-1">
            <BrandLogo size="nav" variant="light" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.18em] transition-colors relative py-1 font-medium ${
                    isActive
                      ? "text-gold font-semibold"
                      : "text-ivory/80 hover:text-gold"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={WA_NAV}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#231120] bg-gold hover:bg-gold-light transition-all rounded-[2px] shadow-sm flex items-center gap-2 hover:scale-[1.02]"
              id="navbar-wa-btn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.981.536 1.761.802 2.796.802 3.178 0 5.766-2.587 5.766-5.766 0-3.18-2.587-5.768-5.766-5.768zm0 10.375c-.911 0-1.748-.258-2.487-.723l-.178-.106-1.579.414.422-1.54-.116-.185c-.512-.816-.782-1.637-.781-2.469 0-2.541 2.068-4.609 4.61-4.609 2.54 0 4.607 2.068 4.607 4.609 0 2.541-2.067 4.609-4.607 4.609z" />
              </svg>
              <span>Book WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-1.5 text-ivory hover:text-gold transition-colors focus:outline-none min-w-[42px] min-h-[42px] flex items-center justify-center touch-manipulation"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">Menu</span>
            <div className="w-5 sm:w-6 h-4 sm:h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2 text-gold" : ""
                }`}
              />
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2 text-gold" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Full-Screen Plum Mobile Menu (Blueprint §05 & §30) */}
      <div
        className={`fixed inset-0 z-50 bg-[#231120] text-ivory flex flex-col justify-between px-6 sm:px-8 py-20 transition-transform duration-500 lg:hidden overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="absolute top-5 left-6 right-6 flex items-center justify-between">
          <BrandLogo size="sm" variant="light" />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="p-2.5 text-ivory hover:text-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-4 sm:gap-5 mt-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-baseline gap-4 group text-left py-1.5 touch-manipulation"
            >
              <span className="font-heading text-xs tracking-widest text-gold/60 group-hover:text-gold">
                {link.num}
              </span>
              <span className="font-heading text-2xl sm:text-3xl tracking-wide uppercase text-ivory group-hover:text-gold transition-colors">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-4 pt-6 border-t border-gold/20">
          <a
            href={WA_NAV}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="w-full py-4 text-center text-xs font-semibold tracking-[0.25em] uppercase text-[#231120] bg-gold rounded-[2px] min-h-[48px] flex items-center justify-center active:scale-95 transition-transform"
          >
            Book on WhatsApp
          </a>
          <p className="text-[11px] text-center text-ivory/50 uppercase tracking-widest">
            Chennai / Tamil Nadu • Bespoke Atelier
          </p>
        </div>
      </div>
    </>
  );
}

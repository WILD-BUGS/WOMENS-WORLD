import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { WHATSAPP_NUMBER, getWhatsAppUrl } from "@/lib/config";

export function Footer() {
  return (
    <footer className="w-full bg-[#231120] text-ivory pt-16 pb-12 textile-texture">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Three Editorial Columns (§22) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Logo (5 Columns) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <BrandLogo size="md" variant="light" className="mb-4" />
            <p className="font-sans text-xs text-ivory/65 max-w-sm leading-relaxed mb-6">
              Indian Bridal Couture Editorial × Luxury Atelier. Handcrafting heirloom bridal lehengas,
              artisanal zardosi blouses, and radiant bridal beauty looks in Chennai, Tamil Nadu.
            </p>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold/80 font-mono">
              EST. 2024 • CHENNAI ATELIER
            </div>
          </div>

          {/* Column 2: Explore Navigation (4 Columns) */}
          <div className="md:col-span-4 flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold mb-4 block">
              Explore Atelier
            </span>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs text-ivory/75 font-sans">
              <Link href="#collections" className="hover:text-gold transition-colors">
                Collections
              </Link>
              <Link href="#craft" className="hover:text-gold transition-colors">
                Our Craft
              </Link>
              <Link href="#lookbook" className="hover:text-gold transition-colors">
                Bridal Lookbook
              </Link>
              <Link href="#beauty" className="hover:text-gold transition-colors">
                Bridal Beauty
              </Link>
              <Link href="#process" className="hover:text-gold transition-colors">
                Craft Process
              </Link>
              <Link href="#archive" className="hover:text-gold transition-colors">
                Bridal Archive
              </Link>
              <Link href="#journey" className="hover:text-gold transition-colors">
                Your Journey
              </Link>
              <Link href="#atelier" className="hover:text-gold transition-colors">
                About The House
              </Link>
            </div>
          </div>

          {/* Column 3: Contact & Atelier Details (3 Columns) */}
          <div className="md:col-span-3 flex flex-col text-left">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold mb-4 block">
              Contact &amp; Visit
            </span>
            <div className="space-y-3 text-xs text-ivory/70 font-sans">
              <p>
                <span className="block text-[10px] uppercase tracking-widest text-gold/80">WhatsApp</span>
                <a
                  href={getWhatsAppUrl("Hello Women's World Atelier")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold font-mono"
                >
                  +91 97901 45978
                </a>
              </p>
              <p>
                <span className="block text-[10px] uppercase tracking-widest text-gold/80">Phone</span>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-gold font-mono">
                  +91 97901 45978
                </a>
              </p>
              <p>
                <span className="block text-[10px] uppercase tracking-widest text-gold/80">Location</span>
                <span>Chennai, Tamil Nadu, India</span>
              </p>
              <p>
                <span className="block text-[10px] uppercase tracking-widest text-gold/80">Hours</span>
                <span>Mon – Sun: 10:00 AM – 8:30 PM</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar (§22) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ivory/50 font-sans tracking-wider">
          <div>
            © {new Date().getFullYear()} Women&apos;s World Atelier. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em]">
            <Link href="#home" className="hover:text-gold transition-colors">
              Top of Atelier
            </Link>
            <span className="text-gold/40">•</span>
            <span>Handcrafted in India</span>
          </div>
        </div>

        {/* WILD BUGS™ Trademark Signature */}
        <div className="pt-8 mt-8 border-t border-white/5 text-center">
          <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-[#C9A66B]/75 hover:text-[#C9A66B] transition-colors font-medium select-none">
            W I L D &nbsp; B U G S ™
          </span>
        </div>

      </div>
    </footer>
  );
}

import { HeroSection } from "@/components/hero/HeroSection";
import { BrandStatement } from "@/components/atelier/BrandStatement";
import { CraftSelector } from "@/components/atelier/CraftSelector";
import { Craftsmanship } from "@/components/atelier/Craftsmanship";
import { CraftProcess } from "@/components/atelier/CraftProcess";
import { CollectionSection } from "@/components/collections/CollectionSection";
import { Lookbook } from "@/components/collections/Lookbook";
import { BeautySection } from "@/components/beauty/BeautySection";
import { BridalArchive } from "@/components/gallery/BridalArchive";
import { BridalJourney } from "@/components/journey/BridalJourney";
import { TestimonialSection } from "@/components/journey/TestimonialSection";
import { FinalCtaSection } from "@/components/contact/FinalCtaSection";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#231120] text-ivory font-body selection:bg-gold/30 selection:text-wine antialiased overflow-x-hidden">
      <main>
        {/* 01. Hero Section (Deep Plum #231120) */}
        <HeroSection />

        {/* 02. Brand Statement (Warm Ivory Silk #F9F6F0 with Organic Waves & Mandalas) */}
        <BrandStatement />

        {/* 03. Choose Your Craft Dual Panels (Deep Plum #231120) */}
        <CraftSelector />

        {/* 04. Craftsmanship Section (Deep Plum #231120) */}
        <Craftsmanship />

        {/* 05. Visual Storytelling: From Sketch to Bride (Warm Ivory Silk #F9F6F0) */}
        <CraftProcess />

        {/* 06. Couture Collection */}
        <CollectionSection />

        {/* 07. Bridal Lookbook (Warm Ivory Silk #F9F6F0) */}
        <Lookbook />

        {/* 08. Bridal Beauty Atelier */}
        <BeautySection />

        {/* 09. The Bridal Archive */}
        <BridalArchive />

        {/* 10. The Bridal Journey */}
        <BridalJourney />

        {/* 11. Editorial Testimonial (Warm Ivory Silk #F9F6F0) */}
        <TestimonialSection />

        {/* 12. Emotional Climax: Final CTA (Warm Ivory Silk #F9F6F0) */}
        <FinalCtaSection />
      </main>

      {/* 13. Editorial Footer (Deep Plum #231120) — direct color-block boundary */}
      <Footer />

      {/* 14. Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}

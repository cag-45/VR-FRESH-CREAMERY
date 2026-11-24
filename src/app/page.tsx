import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import {
  HeroSection,
  FlavorsSection,
  CraftStorySection,
  CraftFilmstripSection,
  CateringSection,
  TestimonialsSection,
  LocationHoursSection,
} from "@/components/sections";
import { MessageCircle } from "lucide-react";
import { STORE_INFO } from "@/data/store-info";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6ED] text-[#1C1C1C] antialiased selection:bg-[#0B4822] selection:text-white">
      {/* Sticky Header with Logo & Navigation */}
      <Header />

      {/* Main Experience */}
      <main className="flex-1">
        {/* 01: Hero Section with Real HD Scoop Imagery & Direct Pricing */}
        <HeroSection />

        {/* 02: The 4 Signature Flavours Interactive Tasting Lounge */}
        <FlavorsSection />

        {/* 03: Gelato vs Commercial Frozen Dessert Standard */}
        <CraftStorySection />

        {/* 04: Visual Process Filmstrip Gallery */}
        <CraftFilmstripSection />

        {/* 05: 5-Litre Bulk Tubs & Party Catering Calculator */}
        <CateringSection />

        {/* 06: Customer Reviews & Verified Experiences */}
        <TestimonialsSection />

        {/* 07: Parlour Location & Embedded Map */}
        <LocationHoursSection />
      </main>

      {/* 08: Botanical Heritage Typographic Footer */}
      <Footer />

      {/* Floating Tactical WhatsApp Button for Quick Orders */}
      <aside aria-label="Direct WhatsApp Order" className="fixed bottom-5 right-5 z-40">
        <a
          href={`https://wa.me/91${STORE_INFO.whatsapp.replace(/\D/g, "")}?text=Hi%20VR%20Fresh%20Creamery,%20I%20would%20like%20to%20order%20ice%20cream.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#0B4822] hover:bg-[#083719] text-white shadow-xl hover:shadow-2xl transition-all border border-emerald-600/40 hover:scale-105 group backdrop-blur-md"
        >
          <div className="w-8 h-8 rounded-full bg-[#258742] flex items-center justify-center shrink-0">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <div className="text-left hidden sm:block pr-1">
            <span className="block text-[9px] uppercase tracking-widest text-emerald-200 font-bold leading-tight">
              Order On WhatsApp
            </span>
            <span className="block text-xs font-bold font-serif-brand">
              99481 44296
            </span>
          </div>
        </a>
      </aside>
    </div>
  );
}

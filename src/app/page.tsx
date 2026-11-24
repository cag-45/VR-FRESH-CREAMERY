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
    <div className="min-h-screen flex flex-col bg-[#04140B] text-[#FAF6ED] antialiased selection:bg-emerald-500 selection:text-black">
      {/* Elevated Navigation Header */}
      <Header />

      {/* Main Narrative Experience */}
      <main className="flex-1">
        {/* 01: Full-Bleed Atmospheric Video & Live Dispatch Hero */}
        <HeroSection />

        {/* 02: The Curated Four Interactive Sensory Tasting Stage */}
        <FlavorsSection />

        {/* 03: The Anti-Factory Gelato Standard & Ingredient Matrix */}
        <CraftStorySection />

        {/* 04: Interactive 5-Litre Tub & Party Catering Calculator */}
        <CateringSection />

        {/* 05: The Churn In Motion — Photographic Filmstrip */}
        <CraftFilmstripSection />

        {/* 06: Verified Customer Love & Google Reviews */}
        <TestimonialsSection />

        {/* 07: Medipalli Parlour Workshop & Interactive Navigation */}
        <LocationHoursSection />
      </main>

      {/* 08: Bespoke Architectural Typographic Footer */}
      <Footer />

      {/* Floating Tactical WhatsApp Button for Quick Orders */}
      <aside aria-label="Direct WhatsApp Order" className="fixed bottom-5 right-5 z-40">
        <a
          href={`https://wa.me/91${STORE_INFO.whatsapp.replace(/\D/g, "")}?text=Hi%20VR%20Fresh%20Creamery,%20I%20would%20like%20to%20order%20ice%20cream.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#258742] hover:bg-[#1E6F36] text-white shadow-2xl hover:shadow-emerald-500/30 transition-all border border-emerald-400/40 hover:scale-105 group backdrop-blur-md"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div className="text-left hidden sm:block pr-1">
            <span className="block text-[9px] uppercase tracking-widest text-emerald-200 font-bold">
              Instant Order
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

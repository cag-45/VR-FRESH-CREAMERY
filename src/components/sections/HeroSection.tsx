"use client";

import Image from "next/image";
import { ArrowRight, MessageCircle, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { STORE_INFO } from "@/data/store-info";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden bg-[#FAF6ED]">
      {/* Subtle organic background textures */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <Image
          src="/images/hero-bg.jpg"
          alt="Fresh Gelato Churn Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6ED] via-[#FAF6ED]/80 to-[#FAF6ED]" />
      </div>

      {/* Decorative ambient color accents */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full">
        {/* Top Fresh Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E8DFC8] shadow-xs text-xs font-semibold text-[#0B4822]">
            <span className="w-2 h-2 rounded-full bg-[#258742] animate-pulse" />
            <span>Medipalli, Hyderabad</span>
            <span className="text-[#E8DFC8]">|</span>
            <span className="text-[#6B7280]">Daily Churn 11:00 AM – 11:00 PM</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-xs font-semibold text-[#0B4822]">
            <Sparkles className="w-3.5 h-3.5 text-[#258742]" />
            <span>100% Farm Whole Milk • Zero Palm Oil</span>
          </div>
        </div>

        {/* Main Grid: Headline + Visual Composition */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#258742] block">
                Fresh Cream Gelato
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-serif-brand tracking-tight text-[#0B4822] leading-[1.08]">
                Real Whole Milk. <br />
                Real Seasonal Fruit. <br />
                <span className="font-script-brand text-[#258742] text-5xl sm:text-7xl lg:text-8xl inline-block -rotate-1 font-bold">
                  Freshness in Every Scoop.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#374151] leading-relaxed max-w-xl font-normal">
              No artificial essences. No pumped air. No vegetable oil. 
              At <strong className="text-[#0B4822] font-semibold">VR Fresh Creamery</strong> in Medipalli, 
              we craft pure artisanal gelato slow-churned from 100% farm-fresh milk and fresh, real fruits.
            </p>

            {/* Quick Pricing Highlight Banner */}
            <div className="p-4 rounded-2xl bg-white/90 border border-[#E8DFC8] shadow-sm max-w-lg space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#0B4822]">
                <span className="uppercase tracking-wider">Our Signature Four</span>
                <span className="text-[#258742]">Scoops & 5L Tubs</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center">
                <div className="p-2 rounded-xl bg-purple-50/70 border border-purple-100">
                  <span className="block text-[11px] font-medium text-purple-900">Mulberry</span>
                  <span className="block text-sm font-black text-purple-950 font-serif-brand">₹95</span>
                </div>
                <div className="p-2 rounded-xl bg-emerald-50/70 border border-emerald-100">
                  <span className="block text-[11px] font-medium text-emerald-900">Coconut</span>
                  <span className="block text-sm font-black text-emerald-950 font-serif-brand">₹85</span>
                </div>
                <div className="p-2 rounded-xl bg-rose-50/70 border border-rose-100">
                  <span className="block text-[11px] font-medium text-rose-900">Guava</span>
                  <span className="block text-sm font-black text-rose-950 font-serif-brand">₹85</span>
                </div>
                <div className="p-2 rounded-xl bg-amber-50/70 border border-amber-100">
                  <span className="block text-[11px] font-medium text-amber-900">Sitaphal</span>
                  <span className="block text-sm font-black text-amber-950 font-serif-brand">₹85</span>
                </div>
              </div>
              <p className="text-[11px] text-[#6B7280] text-center pt-1">
                Mulberry is ₹95 &bull; All other 3 flavours start from ₹85 &bull; 5L tubs for parties
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#flavours"
                className="px-8 py-4 rounded-full bg-[#0B4822] hover:bg-[#083719] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group text-center"
              >
                <span>Explore The 4 Flavours</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={`https://wa.me/91${STORE_INFO.whatsapp.replace(/\D/g, "")}?text=Hi%20VR%20Fresh%20Creamery,%20I%20would%20like%20to%20order%20ice%20cream.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-white hover:bg-emerald-50 text-[#0B4822] border-2 border-[#0B4822] font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4 text-[#258742]" />
                <span>WhatsApp: 99481 44296</span>
              </a>
            </div>

            {/* Real Quality Seals */}
            <div className="pt-4 flex flex-wrap gap-5 text-xs text-[#4B5563] font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#258742]" />
                <span>100% Pure Vegetarian</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#258742]" />
                <span>Zero Vanaspati or Palm Fats</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#258742]" />
                <span>Hand-Deseeded Seasonal Fruit</span>
              </div>
            </div>

          </div>

          {/* Right Visual Stage: Actual Mouth-Watering Ice Cream Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Ice Cream Hero Card */}
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/images/hero-scoop.jpg"
                  alt="VR Fresh Creamery Handcrafted Gelato"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                {/* Floating Brand Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-[#0B4822] border border-[#E8DFC8] shadow-sm flex items-center gap-2">
                  <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0">
                    <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
                  </div>
                  <span>VR Fresh Creamery</span>
                </div>

                {/* Bottom Card Caption */}
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold block">
                    Daily Fresh Churn
                  </span>
                  <h3 className="font-serif-brand font-bold text-xl sm:text-2xl text-white leading-tight">
                    Pure Cream Gelato
                  </h3>
                  <p className="text-xs text-white/90 leading-snug">
                    Dense, spoon-coating texture made from whole buffalo & cow milk.
                  </p>
                </div>
              </div>

              {/* Overlapping Floating Tasting Pill */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white p-4 rounded-2xl shadow-xl border border-[#E8DFC8] flex items-center gap-3.5 max-w-[260px] animate-float">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-purple-200">
                  <Image src="/images/flavors/mulberry.jpg" alt="Mulberry Scoop" fill className="object-cover" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 block">
                    Customer Favorite
                  </span>
                  <span className="font-serif-brand font-bold text-sm text-[#1C1C1C] block leading-tight">
                    Mulberry Delight
                  </span>
                  <span className="text-xs font-black text-[#0B4822]">₹95 / scoop</span>
                </div>
              </div>

              {/* Overlapping Floating Parlour Info Pill */}
              <div className="absolute -top-4 -right-4 bg-[#0B4822] text-white p-3.5 rounded-2xl shadow-xl border border-emerald-700 flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-300 shrink-0" />
                <div className="text-left">
                  <span className="block text-[10px] text-emerald-200 font-medium leading-none">Medipalli Lab</span>
                  <span className="block text-xs font-bold text-white">Daily 11 AM – 11 PM</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

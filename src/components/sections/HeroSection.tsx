"use client";

import Image from "next/image";
import { ArrowRight, MessageCircle, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { STORE_INFO, getWhatsAppUrl } from "@/data/store-info";

export function HeroSection() {
  const showcaseItems = [
    { src: "/images/flavors/mulberry.jpg", alt: "VR Fresh Creamery Mulberry Gelato Tub", name: "Mulberry Delight", price: "₹95" },
    { src: "/images/flavors/tender-coconut.jpg", alt: "VR Fresh Creamery Tender Coconut Gelato Tub", name: "Tender Coconut", price: "₹85" },
    { src: "/images/flavors/guava.jpg", alt: "VR Fresh Creamery Guava Gelato Tub", name: "Pink Guava", price: "₹85" },
    { src: "/images/flavors/sitaphal.jpg", alt: "VR Fresh Creamery Sitaphal Gelato Tub", name: "Fresh Sitaphal", price: "₹85" },
    { src: "/images/flavors/all-flavors-collection.jpg", alt: "VR Fresh Creamery Premium Gelato Gift Pack", name: "All 4 Flavours Pack", price: "Gift Box" },
  ];

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-between pt-24 pb-4 overflow-hidden bg-[#FAF6ED]">
      {/* Motioned HD Background at the Top (Smooth Ken Burns cinematic movement) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -inset-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)] animate-ken-burns">
          <Image
            src="/images/hero-bg.jpg"
            alt="VR Fresh Creamery Artisan Gelato Background"
            fill
            priority
            className="object-cover opacity-25"
          />
        </div>
        {/* Soft warm creamy overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6ED]/85 via-[#FAF6ED]/75 to-[#FAF6ED]" />
        {/* Dynamic ambient color glows */}
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-emerald-200/40 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-purple-200/35 rounded-full blur-3xl pointer-events-none animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full flex-1 flex flex-col justify-center">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#E8DFC8] shadow-xs text-xs font-semibold text-[#0B4822]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#258742] animate-pulse" />
            <span className="font-bold">VR Fresh Creamery</span>
            <span className="text-[#E8DFC8]">|</span>
            <span className="text-[#6B7280]">Fresh Cream Gelato</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-200 text-xs font-semibold text-[#0B4822]">
            <Sparkles className="w-3.5 h-3.5 text-[#258742]" />
            <span>100% Farm Whole Milk Gelato</span>
          </div>
        </div>

        {/* Main Grid: Headline + Visual Composition */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#258742] block">
                VR Fresh Creamery &bull; Fresh Cream Gelato
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
              At <strong className="text-[#0B4822] font-semibold">VR Fresh Creamery</strong>, 
              we craft pure artisanal gelato slow-churned from 100% farm-fresh milk and fresh, real fruits.
            </p>

            {/* Quick Pricing Highlight Banner */}
            <div className="p-4 rounded-2xl bg-white/95 border border-[#E8DFC8] shadow-sm max-w-lg space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#0B4822]">
                <span className="uppercase tracking-wider">VR Fresh Creamery Flavours</span>
                <span className="text-[#258742]">Scoops & 5L Tubs</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center">
                <div className="p-2.5 rounded-xl bg-purple-50/80 border border-purple-200/80">
                  <span className="block text-[11px] font-medium text-purple-900">Mulberry</span>
                  <span className="block text-sm font-black text-purple-950 font-serif-brand">₹95</span>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200/80">
                  <span className="block text-[11px] font-medium text-emerald-900">Coconut</span>
                  <span className="block text-sm font-black text-emerald-950 font-serif-brand">₹85</span>
                </div>
                <div className="p-2.5 rounded-xl bg-rose-50/80 border border-rose-200/80">
                  <span className="block text-[11px] font-medium text-rose-900">Guava</span>
                  <span className="block text-sm font-black text-rose-950 font-serif-brand">₹85</span>
                </div>
                <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/80">
                  <span className="block text-[11px] font-medium text-amber-900">Sitaphal</span>
                  <span className="block text-sm font-black text-amber-950 font-serif-brand">₹85</span>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="#flavours"
                className="px-8 py-4 rounded-full bg-[#0B4822] hover:bg-[#083719] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group text-center"
              >
                <span>Explore our flavours</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={getWhatsAppUrl("Hi VR Fresh Creamery, I would like to order ice cream.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-white hover:bg-emerald-50 text-[#0B4822] border-2 border-[#0B4822] font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4 text-[#258742]" />
                <span>WhatsApp: 99481 44296</span>
              </a>
            </div>

            {/* Real Quality Seals */}
            <div className="pt-3 flex flex-wrap gap-5 text-xs text-[#4B5563] font-medium">
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
              <div className="relative h-[430px] sm:h-[490px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/images/hero-scoop.jpg"
                  alt="VR Fresh Creamery Handcrafted Gelato"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

                {/* Floating Brand Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0B4822] border border-[#E8DFC8] shadow-sm flex items-center gap-2">
                  <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0">
                    <Image src="/logo.jpg" alt="VR Fresh Creamery Logo" fill className="object-cover" />
                  </div>
                  <span>VR Fresh Creamery</span>
                </div>

                {/* Bottom Card Caption */}
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold block">
                    VR Fresh Creamery
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
                    VR Fresh Creamery
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
                  <span className="block text-[10px] text-emerald-200 font-medium leading-none">VR Fresh Creamery</span>
                  <span className="block text-xs font-bold text-white">Daily 11 AM – 11 PM</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Aligned Handcrafted Gelato Showcase Bar (Redesigned with 5 clean items: 4 flavours + 5L tubs, NO waffle cones) */}
      <div className="relative z-10 w-full mt-10 pt-6 border-t border-[#E8DFC8]/70 bg-white/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#258742]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B4822]">
                VR Fresh Creamery Menu Showcase
              </span>
            </div>
            <span className="text-xs font-semibold text-[#6B7280]">
              Handcrafted with 100% Whole Farm Milk & Real Fruit
            </span>
          </div>

          {/* Symmetrical, perfectly aligned 5-card responsive grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 pb-2">
            {showcaseItems.map((item, idx) => (
              <a
                key={idx}
                href="#flavours"
                className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#E8DFC8] shadow-xs hover:border-[#0B4822] hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-[#E8DFC8]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="min-w-0 pr-1">
                  <span className="font-serif-brand font-bold text-xs text-[#1C1C1C] block leading-tight truncate group-hover:text-[#0B4822] transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[11px] font-black text-[#0B4822] block mt-0.5">
                    {item.price}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

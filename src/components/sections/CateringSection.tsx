"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Check, Users, Sparkles } from "lucide-react";
import { STORE_INFO, getWhatsAppUrl } from "@/data/store-info";

export function CateringSection() {
  const [guestCount, setGuestCount] = useState<number>(50);

  // ~35 scoops per 5L tub, ~1.2 scoops per guest
  const tubsNeeded = Math.max(1, Math.ceil((guestCount * 1.2) / 35));

  const whatsappMessage = `Hi VR Fresh Creamery, I am inquiring about 5-Litre Bulk Tubs for an event of ~${guestCount} guests (${tubsNeeded} tubs estimated). Please provide bulk pricing and flavor availability.`;
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <section id="catering" className="py-20 sm:py-28 bg-[#FAF6ED] border-b border-[#E8DFC8] relative overflow-hidden">
      {/* HD Celebration Dessert Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/catering-bg.jpg"
          alt="Celebration Dessert Background"
          fill
          className="object-cover opacity-12"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6ED] via-[#FAF6ED]/85 to-[#FAF6ED]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-14">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#0B4822] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#258742]" />
            <span>Celebrations & Bulk Orders</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-serif-brand text-[#0B4822] tracking-tight">
            5-Litre Party Tubs & Event Catering
          </h2>

          <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
            Planning a birthday, anniversary, family get-together, or wedding dessert counter? 
            We supply fresh insulated 5-Litre gelato tubs churned specifically for your event date.
          </p>
        </div>

        {/* 2-Column Grid: Visual Card & Interactive Guest Calculator */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual Party Tub Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[460px] w-full rounded-3xl overflow-hidden shadow-xl border border-[#E8DFC8] group">
              <Image
                src="/images/parlour/party-tubs.jpg"
                alt="5 Litre Ice Cream Tub Catering"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              <div className="absolute top-4 left-4 bg-white/95 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0B4822] border border-[#E8DFC8] shadow-sm">
                5-Litre Bulk Format
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-xs uppercase font-bold text-emerald-300 tracking-wider">
                  Price Depends Upon Quantity
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif-brand">
                  Freshness For All Your Guests
                </h3>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                  Served in heavy insulated tubs with dry-ice packing options to stay dense and frozen throughout your function.
                </p>
              </div>
            </div>

            {/* Overlapping Floating Banner */}
            <div className="absolute -bottom-5 right-6 sm:right-10 bg-white px-5 py-3 rounded-2xl shadow-xl border border-[#E8DFC8] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#0B4822]" />
              </div>
              <div>
                <span className="block text-[11px] font-bold text-[#0B4822]">Any of the 4 Flavours</span>
                <span className="block text-xs text-[#6B7280]">Mulberry, Coconut, Guava, Sitaphal</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tub Estimator & Details */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-[#E8DFC8] p-6 sm:p-8 shadow-md space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#258742] block mb-1">
                  Quick Estimator
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-serif-brand text-[#0B4822]">
                  How Many 5L Tubs Do You Need?
                </h4>
              </div>

              {/* Slider for Guests */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span className="text-[#374151] flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#0B4822]" />
                    Estimated Guests:
                  </span>
                  <span className="text-lg font-black text-[#0B4822] font-serif-brand">
                    {guestCount} guests
                  </span>
                </div>

                <input
                  type="range"
                  min="15"
                  max="300"
                  step="5"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E8DFC8] rounded-lg appearance-none cursor-pointer accent-[#0B4822]"
                />
                <div className="flex justify-between text-[11px] text-[#6B7280]">
                  <span>15 guests</span>
                  <span>150 guests</span>
                  <span>300+ guests</span>
                </div>
              </div>

              {/* Recommendation Box */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#0B4822] font-semibold block">
                    Recommended Tubs:
                  </span>
                  <span className="text-2xl font-black font-serif-brand text-[#0B4822]">
                    {tubsNeeded} {tubsNeeded === 1 ? "Tub" : "Tubs"} (5L each)
                  </span>
                  <span className="block text-[11px] text-[#258742] font-medium mt-0.5">
                    Yields approx {tubsNeeded * 35} generous scoops
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-[#6B7280] block">Bulk Pricing</span>
                  <span className="text-xs font-bold text-[#0B4822] block">Custom Quote</span>
                </div>
              </div>

              {/* Quality inclusions */}
              <div className="space-y-2 pt-1 text-xs text-[#374151]">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#0B4822] text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>Choose any combination of our 4 signature flavours</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#0B4822] text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>Fresh morning batch churned right before dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#0B4822] text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>Special discounted pricing based on ordered volume</span>
                </div>
              </div>

              {/* WhatsApp Inquiry Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-[#0B4822] hover:bg-[#083719] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire for {guestCount} Guests via WhatsApp</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

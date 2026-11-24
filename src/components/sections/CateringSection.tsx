"use client";

import { useState } from "react";
import Image from "next/image";
import { Package, Users, Check, MessageCircle, ArrowUpRight, Sparkles, Calculator, Flame } from "lucide-react";
import { STORE_INFO } from "@/data/store-info";

export function CateringSection() {
  const [guestCount, setGuestCount] = useState<number>(50);

  // 1 tub serves approx 25-30 hearty scoops
  const tubsNeeded = Math.max(1, Math.ceil(guestCount / 28));

  const inquiryMsg = encodeURIComponent(
    `Hi VR Fresh Creamery, I am planning an event for approximately ${guestCount} guests (estimated ${tubsNeeded} x 5L tubs). Please share the bulk quantity pricing quote.`
  );

  return (
    <section id="catering-calculator" className="py-20 md:py-32 bg-[#04140B] text-white border-b border-emerald-950 relative overflow-hidden">
      
      {/* Decorative ambient aura */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-700 text-xs font-bold uppercase tracking-wider text-emerald-300">
            <Package className="w-3.5 h-3.5 text-emerald-400" />
            <span>Celebrations, Weddings & House Parties</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif-brand tracking-tight text-[#FAF6ED] leading-[1.08]">
            5-Litre Party Tubs & <br />
            <span className="font-script-brand text-emerald-400 text-4xl sm:text-6xl font-bold">
              Live Gelato Counters.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/80 font-medium leading-relaxed">
            From intimate terrace celebrations in Jubilee Hills to grand wedding receptions across Telangana. Our insulated thermal containers preserve churn consistency for 4+ hours with zero melting.
          </p>
        </div>

        {/* The Interactive Tub & Catering Estimator Tool */}
        <div className="bg-[#092B17]/90 rounded-3xl border border-emerald-700/60 p-5 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Interactive Calculator Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-emerald-800/60">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
                <Calculator className="w-4 h-4 text-emerald-300" />
                <span>Live Event Quantity Estimator</span>
              </div>
              <span className="text-[10px] bg-emerald-950 border border-emerald-700 text-emerald-300 px-2 py-0.5 rounded font-mono font-bold">
                Medipalli Dispatch
              </span>
            </div>

            {/* Guest Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="guest-slider" className="text-sm font-semibold text-emerald-100">
                  Estimated Guest Count:
                </label>
                <span className="font-serif-brand text-3xl font-black text-[#FAF6ED]">
                  {guestCount} Guests
                </span>
              </div>
              <input
                id="guest-slider"
                type="range"
                min="15"
                max="300"
                step="5"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2.5 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-[#258742]"
              />
              <div className="flex justify-between text-[11px] font-mono text-emerald-400/80">
                <span>15 (Intimate)</span>
                <span>100 (Party)</span>
                <span>200 (Grand Event)</span>
                <span>300+</span>
              </div>
            </div>

            {/* Calculated Output Readout */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#04190D] border border-emerald-800">
                <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block mb-1">
                  Recommended 5L Tubs
                </span>
                <span className="font-serif-brand text-2xl sm:text-3xl font-black text-white">
                  {tubsNeeded} Tub{tubsNeeded > 1 ? "s" : ""}
                </span>
                <span className="block text-[11px] text-emerald-300/70 mt-1">
                  ~{tubsNeeded * 28} generous scoops
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#04190D] border border-emerald-800">
                <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block mb-1">
                  Flavour Combinations
                </span>
                <span className="font-serif-brand text-base sm:text-lg font-bold text-white block truncate">
                  {tubsNeeded === 1 ? "1 Signature Pick" : `Mix of ${Math.min(tubsNeeded, 4)} Flavours`}
                </span>
                <span className="block text-[11px] text-emerald-300/70 mt-1">
                  Mulberry, Coconut, Guava, Sitaphal
                </span>
              </div>
            </div>

            {/* Pricing Model Transparency Box */}
            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-700/70 text-xs space-y-1.5">
              <p className="font-bold text-emerald-200">
                Pricing Structure: 5 Litre ice cream tubs and bulk party order pricing depends upon total quantity.
              </p>
              <p className="text-emerald-300/80 leading-relaxed">
                We calculate special tiered volume discounts for multi-tub orders and live event setups. Tap below to receive an instant transparent quote directly from our founder on WhatsApp.
              </p>
            </div>

            {/* Instant WhatsApp Action */}
            <a
              href={`https://wa.me/91${STORE_INFO.whatsapp.replace(/\D/g, "")}?text=${inquiryMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-full bg-[#258742] hover:bg-[#1E6F36] text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all"
            >
              <MessageCircle className="w-5 h-5 text-emerald-100" />
              <span>Get WhatsApp Bulk Quote for {guestCount} Guests</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

          </div>

          {/* Right Column: High-Res Catering Photography */}
          <div className="lg:col-span-5 relative space-y-4">
            <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-2xl border border-emerald-700/50">
              <Image
                src="/images/parlour/event-catering-macro.jpg"
                alt="VR Fresh Creamery Live Event Catering"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300">
                  Full Service Catering
                </span>
                <h4 className="font-serif-brand font-bold text-lg">Live Scooping Counter</h4>
                <p className="text-xs text-emerald-100/80">
                  Uniformed master scooper, waffle cones, and fresh toppings.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#04190D] border border-emerald-800 text-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-200">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Insulated thermal cases keep tubs frozen for 4+ hours</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-200">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct delivery across Medchal-Malkajgiri & Greater Hyderabad</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

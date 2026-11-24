"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, MessageCircle, MapPin, ShieldCheck, ThermometerSnowflake, Activity } from "lucide-react";
import { CinematicBackground } from "@/components/animations/CinematicBackground";
import { STORE_INFO } from "@/data/store-info";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden text-white bg-[#062012]">
      {/* HD Video & Atmospheric Particle Background */}
      <CinematicBackground />

      {/* Top Live Churn Ticker Strip (Mobile & Desktop) */}
      <div className="relative z-10 w-full border-b border-emerald-900/60 bg-[#04160C]/85 backdrop-blur-md py-2.5 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-semibold text-emerald-300 gap-1.5 sm:gap-4">
          
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <span className="flex items-center gap-1.5 text-emerald-400 shrink-0">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span className="uppercase tracking-widest font-bold">Live Dispatch:</span>
            </span>
            <span className="text-emerald-100/90 tracking-wide truncate">
              Daily morning churn in Medipalli • 100% Farm Whole Cream • Open 11:00 AM – 11:00 PM
            </span>
          </div>

          <div className="flex items-center gap-4 text-emerald-200/90 shrink-0 text-[10px] sm:text-[11px]">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-emerald-400" />
              Medipalli, Hyderabad
            </span>
            <span className="flex items-center gap-1">
              <ThermometerSnowflake className="w-3 h-3 text-emerald-400" />
              -12°C Churn Density
            </span>
          </div>

        </div>
      </div>

      {/* Main Hero Stage */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Hero Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Emblem & Brand Subtitle */}
            <div className="inline-flex items-center gap-2.5 sm:gap-3 p-1.5 pr-4 rounded-full bg-emerald-950/70 border border-emerald-700/60 backdrop-blur-md">
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-emerald-400 shrink-0">
                <Image src="/logo.jpg" alt="VR Fresh Creamery" fill className="object-cover" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-emerald-300">
                Medipalli&apos;s Artisan Gelateria
              </span>
            </div>

            {/* Editorial Monumental Headline */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-serif-brand leading-[1.05] tracking-tight text-[#FAF6ED]">
                Real Whole Milk. <br />
                Raw Wild Harvest. <br />
                <span className="font-script-brand text-emerald-400 text-5xl sm:text-7xl lg:text-8xl inline-block -rotate-1 font-bold">
                  Zero Shortcut.
                </span>
              </h1>
            </div>

            {/* Short Catchy Statement */}
            <p className="text-sm sm:text-base lg:text-lg text-emerald-100/90 leading-relaxed max-w-2xl font-medium">
              We reject pumped air, vegetable oil, and artificial essence. At <strong className="text-white font-bold">VR Fresh Creamery</strong>, every batch is slow-churned from 100% whole buffalo & cow milk and real whole fruits.
            </p>

            {/* Live CTA Bar (Mobile & Desktop Optimized) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#flavor-vault"
                className="px-7 py-3.5 sm:py-4 rounded-full bg-[#258742] hover:bg-[#1E6F36] text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group text-center"
              >
                <span>Explore 4 Signature Flavours</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-emerald-200" />
              </a>

              <a
                href="#catering-calculator"
                className="px-6 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF6ED] border border-white/20 font-bold text-sm backdrop-blur-md transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>5L Party Calculator</span>
              </a>

              <a
                href={`https://wa.me/91${STORE_INFO.whatsapp.replace(/\D/g, "")}?text=Hi%20VR%20Fresh%20Creamery,%20I%20would%20like%20to%20order%20ice%20cream.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 sm:py-4 rounded-full bg-white text-[#062012] hover:bg-emerald-100 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg text-center"
              >
                <MessageCircle className="w-4 h-4 text-[#258742]" />
                <span>WhatsApp: 99481 44296</span>
              </a>
            </div>

            {/* Quality Seals (Zero Emojis - Responsive flex-wrap) */}
            <div className="pt-4 sm:pt-6 border-t border-emerald-900/60 flex flex-wrap gap-4 sm:gap-6 text-xs text-emerald-200/90 font-semibold">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Pure Vegetarian</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Vanaspati / Palm Fats</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ThermometerSnowflake className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dense Low-Overrun Gelato</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Showcase: The 4 Signature Tasters (Mobile & Tablet Responsive) */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Backlight */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-emerald-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Elevated Culinary Stage Card */}
            <div className="relative bg-[#0A2C19]/90 border border-emerald-700/50 rounded-3xl p-5 sm:p-7 shadow-2xl backdrop-blur-xl space-y-5">
              
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-emerald-800/60">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-emerald-400 block">
                    Daily Fresh Board
                  </span>
                  <h3 className="font-serif-brand font-bold text-lg sm:text-xl text-[#FAF6ED]">
                    The Curated Four
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-300">Medipalli Lab</span>
                  <span className="block text-[10px] text-emerald-400/80">Batch #142 Ready</span>
                </div>
              </div>

              {/* The 4 Flavors List with Direct Pricing and Macro Imagery */}
              <div className="space-y-2.5 sm:space-y-3">
                
                {/* Mulberry */}
                <a
                  href="#flavor-vault"
                  className="p-2.5 sm:p-3 rounded-2xl bg-purple-950/40 border border-purple-700/50 hover:border-purple-400 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 border border-purple-500/40">
                      <Image src="/images/flavors/mulberry-macro.jpg" alt="Mulberry" fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-xs sm:text-sm text-[#FAF6ED] font-serif-brand">Mulberry Delight</span>
                        <span className="text-[9px] bg-purple-800 text-purple-200 px-1.5 py-0.5 rounded uppercase font-bold">Crown</span>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-purple-300/80">Wild forest berry compote & cream</p>
                    </div>
                  </div>
                  <span className="text-sm sm:text-base font-black text-purple-300 font-serif-brand shrink-0 pl-2">₹95</span>
                </a>

                {/* Tender Coconut */}
                <a
                  href="#flavor-vault"
                  className="p-2.5 sm:p-3 rounded-2xl bg-emerald-950/50 border border-emerald-700/40 hover:border-emerald-400 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 border border-emerald-500/40">
                      <Image src="/images/flavors/coconut-macro.jpg" alt="Tender Coconut" fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <span className="font-bold text-xs sm:text-sm text-[#FAF6ED] font-serif-brand">Tender Coconut Malai</span>
                      <p className="text-[10px] sm:text-[11px] text-emerald-300/80">Fresh water & young coconut pulp</p>
                    </div>
                  </div>
                  <span className="text-sm sm:text-base font-black text-emerald-300 font-serif-brand shrink-0 pl-2">₹85</span>
                </a>

                {/* Pink Guava */}
                <a
                  href="#flavor-vault"
                  className="p-2.5 sm:p-3 rounded-2xl bg-rose-950/40 border border-rose-700/40 hover:border-rose-400 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 border border-rose-500/40">
                      <Image src="/images/flavors/guava-macro.jpg" alt="Pink Guava" fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <span className="font-bold text-xs sm:text-sm text-[#FAF6ED] font-serif-brand">Ripe Pink Guava</span>
                      <p className="text-[10px] sm:text-[11px] text-rose-300/80">Orchard guava with chili-salt rim</p>
                    </div>
                  </div>
                  <span className="text-sm sm:text-base font-black text-rose-300 font-serif-brand shrink-0 pl-2">₹85</span>
                </a>

                {/* Sitaphal */}
                <a
                  href="#flavor-vault"
                  className="p-2.5 sm:p-3 rounded-2xl bg-amber-950/40 border border-amber-700/40 hover:border-amber-400 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 border border-amber-500/40">
                      <Image src="/images/flavors/sitaphal-macro.jpg" alt="Fresh Sitaphal" fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-xs sm:text-sm text-[#FAF6ED] font-serif-brand">Fresh Sitaphal</span>
                        <span className="text-[9px] bg-amber-800 text-amber-200 px-1.5 py-0.5 rounded uppercase font-bold">Seasonal</span>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-amber-300/80">Hand-deseeded custard apple chunks</p>
                    </div>
                  </div>
                  <span className="text-sm sm:text-base font-black text-amber-300 font-serif-brand shrink-0 pl-2">₹85</span>
                </a>

              </div>

              {/* Bottom Notice */}
              <div className="pt-2 text-center text-[10px] sm:text-[11px] text-emerald-300/80 border-t border-emerald-800/60">
                <span>Mulberry ₹95 • All other 3 flavours start from ₹85</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Transition */}
      <div className="relative z-10 w-full h-8 bg-gradient-to-b from-transparent to-[#04140B]" />
    </section>
  );
}

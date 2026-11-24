"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

export function CraftFilmstripSection() {
  const visualFrames = [
    {
      title: "Wild Mulberry Compote",
      category: "Fruit Sourcing",
      image: "/images/flavors/mulberry-macro.jpg",
      caption: "Whole wild mulberries slowly simmered in copper pans.",
    },
    {
      title: "Fresh Tender Coconut Malai",
      category: "Coastal Harvest",
      image: "/images/flavors/coconut-macro.jpg",
      caption: "Chewy young coconut pulp spooned fresh from the shell.",
    },
    {
      title: "Pure Farm Whole Cream",
      category: "Dairy Integrity",
      image: "/images/craft/milk-pour-macro.jpg",
      caption: "100% whole buffalo and cow milk rich in natural butterfat.",
    },
    {
      title: "Hand-Deseeded Sitaphal",
      category: "Seasonal Pulp",
      image: "/images/flavors/sitaphal-macro.jpg",
      caption: "Carefully separated custard apple chunks folded in cream.",
    },
    {
      title: "Slow Cold Churning",
      category: "Batch Science",
      image: "/images/craft/churn-macro.jpg",
      caption: "Slow-extruded at low temperature to eliminate icy crystals.",
    },
  ];

  return (
    <section id="craft-filmstrip" className="py-16 sm:py-24 bg-[#FAF6ED] text-[#1C1C1C] overflow-hidden border-b border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#0B4822] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#258742]" />
              <span>Real Ingredients</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-serif-brand tracking-tight text-[#0B4822]">
              The Churn In Motion
            </h2>
          </div>
          <div className="flex items-center justify-between md:justify-end gap-3 text-xs sm:text-sm text-[#4B5563] max-w-md font-medium">
            <p>Real photography from our Medipalli workshop. Genuine dairy, real fruit, and deliberate craft.</p>
            <span className="lg:hidden text-[11px] text-[#0B4822] font-bold bg-emerald-100 px-2.5 py-1 rounded-full shrink-0">
              Swipe →
            </span>
          </div>
        </div>

        {/* Horizontal Filmstrip Gallery */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-5 px-5 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-5 scrollbar-thin">
          {visualFrames.map((frame, idx) => (
            <div
              key={idx}
              className="min-w-[260px] sm:min-w-[280px] lg:min-w-0 snap-center group relative rounded-2xl overflow-hidden border border-[#E8DFC8] bg-white shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between shrink-0 lg:shrink"
            >
              <div className="relative h-60 w-full overflow-hidden bg-[#FAF6ED]">
                <Image
                  src={frame.image}
                  alt={frame.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[9px] font-bold uppercase tracking-wider text-emerald-300 border border-white/10">
                  {frame.category}
                </span>
              </div>

              <div className="p-4 space-y-1 bg-white">
                <h3 className="font-serif-brand font-bold text-sm text-[#0B4822]">
                  {frame.title}
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {frame.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

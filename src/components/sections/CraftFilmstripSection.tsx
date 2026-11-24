"use client";

import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

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
      caption: "Extruded at -12°C to eliminate icy crystallization.",
    },
  ];

  return (
    <section id="craft-filmstrip" className="py-16 sm:py-20 md:py-28 bg-[#FAF6ED] text-[#0A2615] overflow-hidden border-b border-[#E3E9DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Editorial Subheading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div>
            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-[0.25em] text-[#0B4822] block mb-2">
              Visual Documentation
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-serif-brand tracking-tight text-[#071F11]">
              The Churn In Motion.
            </h2>
          </div>
          <div className="flex items-center justify-between md:justify-end gap-3 text-xs sm:text-sm text-[#385340] max-w-md font-medium">
            <p>Captured inside our Medipalli creamery workshop. Real ingredients and deliberate slow pacing.</p>
            <span className="lg:hidden text-[10px] text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded-full shrink-0">
              Swipe →
            </span>
          </div>
        </div>

        {/* Responsive Gallery: Touch Swipe Strip on Mobile & Tablet, 5-Col Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-5 scrollbar-thin">
          {visualFrames.map((frame, idx) => (
            <div
              key={idx}
              className="min-w-[260px] sm:min-w-[280px] lg:min-w-0 snap-center group relative rounded-2xl overflow-hidden border border-[#E3E9DD] bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between shrink-0 lg:shrink"
            >
              <div className="relative h-60 w-full overflow-hidden bg-emerald-950">
                <Image
                  src={frame.image}
                  alt={frame.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[9px] font-bold uppercase tracking-wider text-emerald-300 border border-white/10">
                  {frame.category}
                </span>
              </div>

              <div className="p-4 space-y-1 bg-white">
                <h3 className="font-serif-brand font-bold text-sm text-[#071F11] group-hover:text-[#0B4822] transition-colors">
                  {frame.title}
                </h3>
                <p className="text-[11px] text-[#4F6456] leading-relaxed">
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

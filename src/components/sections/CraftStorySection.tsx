"use client";

import Image from "next/image";
import { CheckCircle2, XCircle, Milk, Leaf, ThermometerSnowflake, Scale, Sparkles } from "lucide-react";

export function CraftStorySection() {
  const comparisonItems = [
    {
      metric: "Primary Dairy Base",
      commercial: "Reconstituted skim milk solids blended with hydrogenated palm kernel oil (Vanaspati).",
      vrCreamery: "100% Pure whole farm buffalo & cow milk. Zero vegetable oils, zero milk substitutes.",
    },
    {
      metric: "Fruit Sourcing",
      commercial: "Artificial essence chemicals, synthetic coloring (E122/E102), and corn syrup solids.",
      vrCreamery: "Raw, hand-selected fruit: simmered wild mulberries, hand-deseeded sitaphal, and tender coconut malai.",
    },
    {
      metric: "Air & Overrun Ratio",
      commercial: "Pumped with 50% to 60% pressurized air so a 1-litre tub weighs merely 450 grams.",
      vrCreamery: "Low-aeration slow batch churn (18% natural overrun). Heavy, spoon-coating density.",
    },
    {
      metric: "Freezer Lifespan",
      commercial: "Laced with chemical gums (E466/E407) to survive 12 months in distributor warehouses.",
      vrCreamery: "Freshly churned in Medipalli every morning. Kept pure and served at peak freshness.",
    },
  ];

  return (
    <section id="craft-story" className="py-20 md:py-32 bg-[#FAF6ED] text-[#0A2615] border-b border-[#E3E9DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B4822]/10 border border-[#0B4822]/20 text-xs font-bold uppercase tracking-wider text-[#0B4822]">
            <Scale className="w-3.5 h-3.5 text-[#258742]" />
            <span>The Honest Standard</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif-brand tracking-tight text-[#071F11] leading-[1.08]">
            Gelato vs. <br />
            <span className="font-script-brand text-[#258742] text-4xl sm:text-6xl font-bold">
              Industrial Frozen Desserts.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#2E4A37] font-medium leading-relaxed">
            Read the fine print on most supermarket cartons. They legally cannot call themselves &ldquo;Ice Cream&rdquo; because they are filled with cheap vegetable fat. At <strong>VR Fresh Creamery</strong>, we churn raw culinary truth.
          </p>
        </div>

        {/* Dual High-Res Macro Visual Strip */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Card 1: Pure Whole Farm Dairy */}
          <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-[#E3E9DD] group">
            <Image
              src="/images/craft/milk-pour-macro.jpg"
              alt="Raw Farm Whole Dairy Pour"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-emerald-300">
                Dairy Purity
              </span>
              <h3 className="text-2xl font-bold font-serif-brand">Unadulterated Whole Milk</h3>
              <p className="text-xs text-emerald-100/80 max-w-md">
                Rich in natural milk butterfat. Creates a clean, silky melt on the tongue with zero oily coating.
              </p>
            </div>
          </div>

          {/* Card 2: Slow-Batch Churn Freezing */}
          <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-[#E3E9DD] group">
            <Image
              src="/images/craft/churn-macro.jpg"
              alt="Slow Churned Gelato Pan"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-emerald-300">
                Low Aeration Churn
              </span>
              <h3 className="text-2xl font-bold font-serif-brand">-12°C Velvet Consistency</h3>
              <p className="text-xs text-emerald-100/80 max-w-md">
                Extruded slowly to prevent ice crystallization and give every scoop its signature dense mouthfeel.
              </p>
            </div>
          </div>

        </div>

        {/* The Transparent Comparison Table */}
        <div className="bg-white rounded-3xl border border-[#E3E9DD] shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8 bg-[#092B17] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">
                Label Transparency
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-brand">
                What Goes Into Your Scoop
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Made Daily in Medipalli, Hyderabad</span>
            </div>
          </div>

          <div className="divide-y divide-[#E3E9DD]">
            {comparisonItems.map((item, idx) => (
              <div
                key={idx}
                className="grid md:grid-cols-12 p-6 sm:p-8 gap-6 items-start hover:bg-[#FAF8F2]/60 transition-colors"
              >
                {/* Metric Title */}
                <div className="md:col-span-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 block mb-1">
                    Parameter 0{idx + 1}
                  </span>
                  <h4 className="font-serif-brand font-bold text-base text-[#071F11]">
                    {item.metric}
                  </h4>
                </div>

                {/* Commercial Ice Cream */}
                <div className="md:col-span-4 p-4 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Commercial Frozen Dessert</span>
                  </div>
                  <p className="text-xs text-[#524446] leading-relaxed">
                    {item.commercial}
                  </p>
                </div>

                {/* VR Fresh Creamery */}
                <div className="md:col-span-5 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-300/80 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B4822]">
                    <CheckCircle2 className="w-4 h-4 text-[#258742] shrink-0" />
                    <span>VR Fresh Creamery Gelato</span>
                  </div>
                  <p className="text-xs text-[#2A4734] font-medium leading-relaxed">
                    {item.vrCreamery}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

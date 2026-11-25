import Image from "next/image";
import { Check, X, Sparkles, ShieldCheck } from "lucide-react";

export function CraftStorySection() {
  const comparisons = [
    {
      feature: "The Dairy Base",
      gelato: "100% Pure Whole Farm Buffalo & Cow Milk with natural butterfat.",
      commercial: "Water, reconstituted skim milk powder, and hydrogenated palm oil (Vanaspati).",
    },
    {
      feature: "Fruit Content",
      gelato: "Real hand-deseeded custard apple, wild mulberries, and fresh tender coconut malai.",
      commercial: "Synthetic chemical flavorings, artificial colors (E102, E122), and sugary corn syrups.",
    },
    {
      feature: "Density & Air Ratio",
      gelato: "Slow batch-churned with minimal air (low overrun). Dense, spoon-coating, and rich.",
      commercial: "Pumped with 50% to 60% pressurized air so you are mostly buying cold air.",
    },
    {
      feature: "Freshness & Shelf Life",
      gelato: "Freshly churned every single morning. Kept pure and served at peak freshness.",
      commercial: "Loaded with chemical gums and stabilizers to survive 12 months in distributor freezers.",
    },
  ];

  return (
    <section id="craft" className="py-20 sm:py-28 bg-[#FAF6ED] border-b border-[#E8DFC8] relative overflow-hidden">
      {/* HD Dairy Farm Atmospheric Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/craft/dairy-farm.jpg"
          alt="Dairy Farm Atmosphere"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6ED] via-[#FAF6ED]/90 to-[#FAF6ED]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-16">

        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#0B4822] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#258742]" />
            <span>The Honest Standard</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-serif-brand text-[#0B4822] tracking-tight leading-[1.1]">
            Real Gelato vs. <br />
            <span className="font-script-brand text-[#258742] text-4xl sm:text-6xl font-bold">
              Industrial Frozen Desserts.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
            Most supermarket cartons are legally classified as &ldquo;Frozen Dessert&rdquo; because they are made from cheap vegetable palm oil instead of real dairy cream. At <strong>VR Fresh Creamery</strong>, we churn pure food honesty.
          </p>
        </div>

        {/* Visual Dual Photography Strip */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Card 1: Farm Milk Pour */}
          <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-[#E8DFC8] group">
            <Image
              src="/images/craft/milk-pour-macro.jpg"
              alt="Farm Whole Milk Pour"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300">
                Purity First
              </span>
              <h3 className="text-2xl font-bold font-serif-brand">100% Farm Whole Milk</h3>
              <p className="text-xs text-white/80 max-w-sm">
                Rich in wholesome dairy cream that melts cleanly on your tongue with zero oily aftertaste.
              </p>
            </div>
          </div>

          {/* Card 2: Fresh Churned Pan */}
          <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-[#E8DFC8] group">
            <Image
              src="/images/craft/spoon-texture.jpg"
              alt="Dense Spoon-Coating Artisan Gelato Texture"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300">
                Low Aeration Churn
              </span>
              <h3 className="text-2xl font-bold font-serif-brand">Dense Spoon-Coating Texture</h3>
              <p className="text-xs text-white/80 max-w-sm">
                No pumped air. Every scoop is weighty, velvety, and deeply satisfying.
              </p>
            </div>
          </div>
        </div>

        {/* Transparent Comparison Table */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-[#E8DFC8] overflow-hidden shadow-md">
          <div className="p-6 sm:p-8 bg-[#0B4822] text-white">
            <h3 className="text-xl sm:text-2xl font-bold font-serif-brand">
              What Goes Into Your Spoon
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
              A transparent look at how VR Fresh Creamery compares to typical mass-produced commercial ice cream.
            </p>
          </div>

          <div className="divide-y divide-[#E8DFC8]">
            {comparisons.map((item, idx) => (
              <div key={idx} className="p-5 sm:p-7 grid md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                    {item.feature}
                  </span>
                </div>

                {/* VR Fresh Creamery Column */}
                <div className="md:col-span-5 bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-100">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#0B4822] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-[#0B4822] uppercase tracking-wider mb-0.5">
                        VR Fresh Creamery
                      </span>
                      <p className="text-xs sm:text-sm text-[#1C1C1C] font-medium leading-relaxed">
                        {item.gelato}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Commercial Ice Cream Column */}
                <div className="md:col-span-4 bg-gray-50 p-3.5 rounded-xl border border-gray-200">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-[#6B7280] uppercase tracking-wider mb-0.5">
                        Commercial Frozen Dessert
                      </span>
                      <p className="text-xs text-[#6B7280] leading-relaxed">
                        {item.commercial}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="p-5 bg-[#FAF6ED] border-t border-[#E8DFC8] flex items-center justify-between text-xs text-[#4B5563]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#258742]" />
              <span className="font-semibold text-[#0B4822]">100% Pure Vegetarian Quality Guarantee</span>
            </div>
            <span className="text-[#6B7280]">VR Fresh Creamery Standards</span>
          </div>
        </div>

      </div>
    </section>
  );
}

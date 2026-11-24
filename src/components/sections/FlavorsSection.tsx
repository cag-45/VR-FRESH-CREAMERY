"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { STORE_INFO } from "@/data/store-info";

interface FlavorData {
  id: string;
  name: string;
  subName: string;
  price: string;
  isSpecial?: boolean;
  accentColor: string;
  badgeBg: string;
  image: string;
  macroImage: string;
  description: string;
  fruitRatio: string;
  sweetness: string;
  ingredients: string[];
}

const FLAVORS_DATA: FlavorData[] = [
  {
    id: "mulberry",
    name: "Mulberry Delight",
    subName: "Wild Forest Berries & Whole Farm Cream",
    price: "₹95",
    isSpecial: true,
    accentColor: "text-purple-700",
    badgeBg: "bg-purple-100 text-purple-900 border-purple-200",
    image: "/images/flavors/mulberry.jpg",
    macroImage: "/images/flavors/mulberry-macro.jpg",
    description:
      "Our most sought-after signature creation. Handpicked wild mulberries are slow-simmered in small batches to preserve their tart sweetness, then gently folded into fresh unhomogenized farm whole milk. Rich natural berry tint with authentic fruit pulp in every spoonful.",
    fruitRatio: "Real Wild Mulberry Compote",
    sweetness: "Naturally Tart & Berry Sweet",
    ingredients: [
      "Wild Forest Mulberries",
      "Farm Fresh Whole Milk",
      "Fresh Dairy Cream",
      "Raw Cane Sugar",
    ],
  },
  {
    id: "tender-coconut",
    name: "Tender Coconut Malai",
    subName: "Fresh Coconut Water & Soft Malai Pulp",
    price: "₹85",
    accentColor: "text-[#0B4822]",
    badgeBg: "bg-emerald-100 text-[#0B4822] border-emerald-200",
    image: "/images/flavors/tender-coconut.jpg",
    macroImage: "/images/flavors/coconut-macro.jpg",
    description:
      "Pure, refreshing, and true to nature. We crack open fresh young tender coconuts daily, using both the sweet natural coconut water and the soft, silky malai chunks. Churned with chilled dairy cream for a melt-in-mouth finish that feels like pure tropical refreshment.",
    fruitRatio: "Fresh Tender Coconut Malai",
    sweetness: "Mild & Refreshing Dairy Sweet",
    ingredients: [
      "Fresh Tender Coconut Malai",
      "Natural Coconut Water",
      "Whole Farm Dairy Cream",
      "Light Organic Sugar",
    ],
  },
  {
    id: "guava",
    name: "Ripe Pink Guava",
    subName: "Ruby Orchard Guava Puree",
    price: "₹85",
    accentColor: "text-rose-700",
    badgeBg: "bg-rose-100 text-rose-900 border-rose-200",
    image: "/images/flavors/guava.jpg",
    macroImage: "/images/flavors/guava-macro.jpg",
    description:
      "A nostalgic tribute to fresh orchard guavas. Ripe pink guavas are carefully deseeded and pureed into a velvety gelato base. Extremely aromatic, bursting with natural fruit tang and floral notes. Optional touch of red chili-salt on request at the parlour.",
    fruitRatio: "Fresh Pink Guava Puree",
    sweetness: "Fragrant & Naturally Tangy",
    ingredients: [
      "Natural Pink Guava Pulp",
      "Whole Farm Buffalo Milk",
      "Dairy Fresh Cream",
      "Raw Cane Sugar",
    ],
  },
  {
    id: "sitaphal",
    name: "Fresh Sitaphal",
    subName: "Hand-Deseeded Custard Apple Segments",
    price: "₹85",
    isSpecial: true,
    accentColor: "text-amber-700",
    badgeBg: "bg-amber-100 text-amber-900 border-amber-200",
    image: "/images/flavors/sitaphal.jpg",
    macroImage: "/images/flavors/sitaphal-macro.jpg",
    description:
      "A labor of genuine passion. Every single custard apple is manually deseeded by hand in our Medipalli kitchen to ensure the succulent fruit segments remain intact. Slow-churned so the deep, aromatic honey notes blend seamlessly with the dense cold dairy cream.",
    fruitRatio: "Handmade Whole Sitaphal Pulp",
    sweetness: "Rich & Honeyed Fruit Custard",
    ingredients: [
      "Hand-Deseeded Sitaphal",
      "Farm Fresh Whole Dairy Milk",
      "Slow-Churned Cream",
      "Zero Synthetic Essence",
    ],
  },
];

export function FlavorsSection() {
  const [selectedFlavor, setSelectedFlavor] = useState<FlavorData>(FLAVORS_DATA[0]);

  const whatsappLink = `https://wa.me/91${STORE_INFO.whatsapp.replace(
    /\D/g,
    ""
  )}?text=Hi%20VR%20Fresh%20Creamery,%20I%20would%20like%20to%20order%20${encodeURIComponent(
    selectedFlavor.name
  )}%20(${selectedFlavor.price}/scoop).`;

  return (
    <section id="flavours" className="py-20 sm:py-28 bg-[#FAF6ED] border-b border-[#E8DFC8] relative overflow-hidden">
      {/* HD Cream Swirl Textured Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/cream-swirl-bg.jpg"
          alt="Cream Swirl Texture"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6ED] via-[#FAF6ED]/95 to-[#FAF6ED]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8DFC8]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#0B4822] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#258742]" />
              <span>Handcrafted Daily</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-serif-brand text-[#0B4822] tracking-tight">
              Our 4 Signature Flavours
            </h2>
          </div>
          <div className="max-w-md text-left md:text-right">
            <p className="text-sm text-[#4B5563] leading-relaxed">
              We specialize in 4 authentic fruit formulations made without any essences or artificial coloring.
            </p>
            <p className="text-xs font-bold text-[#0B4822] mt-1.5">
              VR Fresh Creamery &bull; Pure Farm Milk Gelato
            </p>
          </div>
        </div>

        {/* 4 Interactive Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {FLAVORS_DATA.map((flavor) => {
            const isSelected = flavor.id === selectedFlavor.id;
            return (
              <button
                key={flavor.id}
                onClick={() => setSelectedFlavor(flavor)}
                className={`text-left p-4 sm:p-5 rounded-2xl transition-all border cursor-pointer relative ${
                  isSelected
                    ? "bg-white border-[#0B4822] shadow-md ring-2 ring-[#0B4822]/20"
                    : "bg-[#F5F0E4] border-[#E8DFC8] hover:bg-white/80 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${flavor.badgeBg}`}>
                    {flavor.isSpecial ? "Speciality" : "Classic"}
                  </span>
                  <span className="font-serif-brand font-black text-sm text-[#0B4822]">
                    {flavor.price}
                  </span>
                </div>

                <h3 className="font-serif-brand font-bold text-base sm:text-lg text-[#1C1C1C] truncate">
                  {flavor.name}
                </h3>
                <p className="text-xs text-[#6B7280] truncate mt-0.5">
                  {flavor.subName}
                </p>

                {isSelected && (
                  <div className="absolute bottom-0 left-4 right-4 h-1 bg-[#0B4822] rounded-t-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Flavor Spotlight Card */}
        <div className="bg-white/95 rounded-3xl border border-[#E8DFC8] p-6 sm:p-10 shadow-lg backdrop-blur-sm">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Column: Ice Cream Images */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-md border border-[#E8DFC8] group">
                <Image
                  src={selectedFlavor.image}
                  alt={selectedFlavor.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#0B4822] border border-[#E8DFC8]">
                  Real Handcrafted Scoop
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-serif-brand">
                      {selectedFlavor.name}
                    </h3>
                    <p className="text-xs text-white/90">
                      {selectedFlavor.subName}
                    </p>
                  </div>
                  <span className="text-3xl font-black font-serif-brand text-white">
                    {selectedFlavor.price}
                  </span>
                </div>
              </div>

              {/* Sub Macro Thumbnail Strip */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#FAF6ED] border border-[#E8DFC8] flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-lg overflow-hidden shrink-0 border border-[#E8DFC8]">
                    <Image src={selectedFlavor.macroImage} alt="Texture" fill className="object-cover" />
                  </div>
                  <div>
                    <span className="block font-bold text-[#1C1C1C]">Macro Texture</span>
                    <span className="text-[11px] text-[#6B7280]">Natural pulp & seed flecks</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF6ED] border border-[#E8DFC8] flex items-center gap-2 text-[#0B4822]">
                  <CheckCircle2 className="w-5 h-5 text-[#258742] shrink-0" />
                  <span className="text-xs font-semibold leading-tight">100% Vegetarian & Farm Milk</span>
                </div>
              </div>
            </div>

            {/* Flavor Story & Tasting Notes */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#258742]">
                    Flavour Profile
                  </span>
                  <span className="text-[#E8DFC8]">•</span>
                  <span className="text-xs text-[#6B7280]">
                    {selectedFlavor.price} per scoop
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif-brand text-[#0B4822]">
                  {selectedFlavor.name}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                {selectedFlavor.description}
              </p>

              {/* Attributes */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#FAF6ED] border border-[#E8DFC8]">
                  <span className="text-[10px] uppercase font-bold text-[#6B7280] tracking-wider block">
                    Fruit Content
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0B4822] mt-0.5 block">
                    {selectedFlavor.fruitRatio}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF6ED] border border-[#E8DFC8]">
                  <span className="text-[10px] uppercase font-bold text-[#6B7280] tracking-wider block">
                    Taste Profile
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0B4822] mt-0.5 block">
                    {selectedFlavor.sweetness}
                  </span>
                </div>
              </div>

              {/* Pure Ingredients */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#1C1C1C] block">
                  Pure Raw Ingredients (Zero Essences):
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedFlavor.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white border border-[#E8DFC8] text-xs font-medium text-[#374151]"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Order via WhatsApp */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-[#0B4822] hover:bg-[#083719] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order {selectedFlavor.name} on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <span className="text-xs text-[#6B7280] text-center sm:text-left">
                  Available in single scoops & 5-Litre bulk tubs
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* 4-Card Visual Gallery Grid: Real scoops on display */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-brand font-bold text-xl sm:text-2xl text-[#0B4822]">
              All 4 Flavours In Pictures
            </h3>
            <span className="text-xs text-[#6B7280]">
              Slow-churned daily in Medipalli
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLAVORS_DATA.map((flavor) => (
              <div
                key={flavor.id}
                className="bg-white rounded-3xl border border-[#E8DFC8] overflow-hidden shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={flavor.image}
                      alt={flavor.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/95 text-[10px] font-bold text-[#0B4822] shadow-xs">
                      {flavor.price} / scoop
                    </span>
                    <span className="absolute bottom-3 left-3 text-white font-serif-brand font-bold text-base">
                      {flavor.name}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-3">
                      {flavor.description}
                    </p>

                    <div className="text-[11px] text-[#258742] font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{flavor.fruitRatio}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={`https://wa.me/91${STORE_INFO.whatsapp.replace(/\D/g, "")}?text=Hi%20VR%20Fresh%20Creamery,%20I%20would%20like%20to%20order%20${encodeURIComponent(flavor.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#FAF6ED] hover:bg-[#0B4822] text-[#0B4822] hover:text-white border border-[#E8DFC8] font-bold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order {flavor.price}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

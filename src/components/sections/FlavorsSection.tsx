"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, CheckCircle2, Sparkles, ArrowUpRight } from "lucide-react";
import { STORE_INFO } from "@/data/store-info";

interface FlavorDetail {
  id: string;
  number: string;
  name: string;
  tagline: string;
  price: string;
  isSpecial?: boolean;
  color: string;
  bgGradient: string;
  borderColor: string;
  image: string;
  macroImage: string;
  story: string;
  profile: {
    fruitPulp: string;
    sweetness: string;
    texture: string;
    finish: string;
  };
  ingredients: string[];
}

const CURATED_FLAVORS: FlavorDetail[] = [
  {
    id: "mulberry",
    number: "01",
    name: "Mulberry Delight",
    tagline: "Wild Forest Berries Simmered Into Glossy Reduction & Whole Farm Cream",
    price: "₹95",
    isSpecial: true,
    color: "#8B2671",
    bgGradient: "from-[#2A0820] via-[#1D0817] to-[#0D040A]",
    borderColor: "border-purple-600/40",
    image: "/images/flavors/mulberry.jpg",
    macroImage: "/images/flavors/mulberry-macro.jpg",
    story:
      "Our crown formulation. Hand-foraged wild mulberries slow-simmered in small copper kettles to preserve their natural tartness, then folded into dense, unhomogenized farm whole milk. Rich wine-stained hue with real seed texture in every bite.",
    profile: {
      fruitPulp: "38% Pure Wild Mulberry",
      sweetness: "Naturally Tart & Fruity",
      texture: "Velvety Dense Gelato",
      finish: "Subtle Crimson Blackberry Lingering",
    },
    ingredients: [
      "Wild Forest Mulberries",
      "Farm Fresh Whole Buffalo Milk",
      "Organic Cane Sugar",
      "Fresh Dairy Cream",
    ],
  },
  {
    id: "tender-coconut",
    number: "02",
    name: "Tender Coconut Malai",
    tagline: "Cold-Extracted Tender Coconut Water & Shredded Fresh Malai Pulp",
    price: "₹85",
    color: "#258742",
    bgGradient: "from-[#082613] via-[#051C0E] to-[#030F07]",
    borderColor: "border-emerald-600/40",
    image: "/images/flavors/tender-coconut.jpg",
    macroImage: "/images/flavors/coconut-macro.jpg",
    story:
      "A tribute to pure coastal simplicity. We extract fresh water and spoon the young, delicate malai pulp straight from newly harvested coconuts. Churned immediately at low temperature to protect its clean, silky floral sweetness.",
    profile: {
      fruitPulp: "Fresh Shredded Coconut Malai",
      sweetness: "Mild & Refreshingly Natural",
      texture: "Chewy Malai Flecks in Silk",
      finish: "Clean, Pure Dairy Refreshment",
    },
    ingredients: [
      "Fresh Tender Coconut Malai",
      "Pure Tender Coconut Water",
      "Whole Farm Dairy Cream",
      "Light Raw Cane Sugar",
    ],
  },
  {
    id: "guava",
    number: "03",
    name: "Ripe Pink Guava",
    tagline: "Orchard-Picked Ruby Guava Puree with Optional Red Chili-Salt Dusting",
    price: "₹85",
    color: "#E15B64",
    bgGradient: "from-[#2B0E11] via-[#1F0A0D] to-[#0F0406]",
    borderColor: "border-rose-600/40",
    image: "/images/flavors/guava.jpg",
    macroImage: "/images/flavors/guava-macro.jpg",
    story:
      "Evoking the timeless memory of roadside orchard guavas. Ripe pink guavas are deseeded and pureed into a velvety gelato base. Delivers an intoxicating tropical aroma with an optional dusting of mountain chili-salt upon request.",
    profile: {
      fruitPulp: "Fresh Pink Guava Puree",
      sweetness: "Tropical, Fragrant & Balanced",
      texture: "Smooth, Luscious Fruit Satin",
      finish: "Nostalgic Orchard Guava Aroma",
    },
    ingredients: [
      "Natural Pink Guava Pulp",
      "Farm Whole Buffalo Milk",
      "Raw Sugar Cane",
      "Optional Mountain Chili-Salt",
    ],
  },
  {
    id: "sitaphal",
    number: "04",
    name: "Fresh Sitaphal (Custard Apple)",
    tagline: "Hand-Deseeded Seasonal Custard Apple Folded in Chilled Dairy Cream",
    price: "₹85",
    isSpecial: true,
    color: "#D4A359",
    bgGradient: "from-[#261C08] via-[#1C1405] to-[#0D0902]",
    borderColor: "border-amber-600/40",
    image: "/images/flavors/sitaphal.jpg",
    macroImage: "/images/flavors/sitaphal-macro.jpg",
    story:
      "An unhurried autumn indulgence. Each custard apple is manually deseeded by hand in our Medipalli workshop to keep the large, juicy pulp segments whole. Churned slowly so the natural floral sweetness blooms through the cold dairy cream.",
    profile: {
      fruitPulp: "Hand-Deseeded Whole Sitaphal",
      sweetness: "Rich, Honeyed Fruit Custard",
      texture: "Thick Pulp Segments & Cream",
      finish: "Long, Fragrant Autumn Finish",
    },
    ingredients: [
      "Handmade Sitaphal Pulp",
      "Farm Fresh Whole Dairy Milk",
      "Small Batch Churned Cream",
      "Zero Synthetic Essence",
    ],
  },
];

export function FlavorsSection() {
  const [activeFlavor, setActiveFlavor] = useState<FlavorDetail>(CURATED_FLAVORS[0]);

  const whatsappOrderUrl = `https://wa.me/91${STORE_INFO.whatsapp.replace(
    /\D/g,
    ""
  )}?text=Hi%20VR%20Fresh%20Creamery,%20I%20would%20like%20to%20order%20${encodeURIComponent(
    activeFlavor.name
  )}%20(${activeFlavor.price}/scoop).`;

  return (
    <section id="flavor-vault" className="py-14 sm:py-20 md:py-28 bg-[#04140B] text-[#FAF6ED] relative overflow-hidden border-b border-emerald-950">
      
      {/* Dynamic Ambient Background Glow that morphs per flavor */}
      <div
        className="absolute inset-0 opacity-40 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 60% 40%, ${activeFlavor.color}25 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-12">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-emerald-900/40">
          <div>
            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-[0.25em] text-emerald-400 block mb-2">
              The Daily Formulation
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif-brand tracking-tight text-[#FAF6ED]">
              The Curated Four.
            </h2>
          </div>
          <div className="text-left md:text-right max-w-md">
            <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed font-medium">
              We master 4 exceptional fruit formulations churned fresh every morning in Medipalli.
            </p>
            <p className="text-[11px] sm:text-xs font-bold text-emerald-400 mt-1 sm:mt-2">
              Mulberry is ₹95/scoop • All other 3 flavours are ₹85/scoop.
            </p>
          </div>
        </div>

        {/* Tactile Flavor Navigation Tabs (Mobile 2x2, Desktop 4x1) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {CURATED_FLAVORS.map((flavor) => {
            const isActive = flavor.id === activeFlavor.id;
            return (
              <button
                key={flavor.id}
                onClick={() => setActiveFlavor(flavor)}
                className={`text-left p-3.5 sm:p-5 rounded-2xl transition-all border relative overflow-hidden ${
                  isActive
                    ? "bg-[#092B17] border-emerald-400 shadow-xl ring-1 ring-emerald-400/40"
                    : "bg-[#061D10]/80 border-emerald-900/50 hover:border-emerald-700/60 hover:bg-[#082415]"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-1 sm:mb-2">
                  <span>{flavor.number}</span>
                  <span className="font-serif-brand font-black text-xs sm:text-sm text-[#FAF6ED]">
                    {flavor.price}
                  </span>
                </div>
                <h3 className="font-serif-brand font-bold text-sm sm:text-lg text-white mb-0.5 sm:mb-1 truncate">
                  {flavor.name}
                </h3>
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-emerald-300 block">
                  {flavor.isSpecial ? "Signature Pick" : "Daily Classic"}
                </span>

                {isActive && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: flavor.color }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Flavor Tasting Stage (Responsive on Mobile, Tablet & Laptop) */}
        <div
          className={`rounded-3xl border ${activeFlavor.borderColor} bg-gradient-to-br ${activeFlavor.bgGradient} p-5 sm:p-8 lg:p-12 shadow-2xl transition-all duration-500`}
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Visual Column: Dual High-Res Photography */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src={activeFlavor.macroImage}
                  alt={activeFlavor.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                
                {/* Floating Tag */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold border border-white/20 text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Real Macro Texture</span>
                </div>

                <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-emerald-300 font-bold">
                      Flavour No. {activeFlavor.number}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-bold font-serif-brand">
                      {activeFlavor.name}
                    </h3>
                  </div>
                  <span className="text-2xl sm:text-3xl font-black font-serif-brand text-emerald-300">
                    {activeFlavor.price}
                  </span>
                </div>
              </div>

              {/* Sub-strip with Serving Scoop image and 100% vegetarian guarantee */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs">
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-white/10">
                    <Image src={activeFlavor.image} alt={activeFlavor.name} fill className="object-cover" />
                  </div>
                  <div>
                    <span className="block font-bold text-white">Serving Cup</span>
                    <span className="text-[10px] text-emerald-300">{activeFlavor.price} / scoop</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center gap-2 text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-medium leading-tight">100% Vegetarian & Pure Farm Dairy</span>
                </div>
              </div>
            </div>

            {/* Information Column: Sensory Notes & Direct Order */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              
              <div>
                <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-emerald-400 block mb-1">
                  Taste & Formulation Dossier
                </span>
                <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold font-serif-brand text-white leading-tight">
                  {activeFlavor.tagline}
                </h3>
              </div>

              <p className="text-xs sm:text-sm lg:text-base text-emerald-100/90 leading-relaxed font-medium">
                {activeFlavor.story}
              </p>

              {/* Sensory Radar Grid */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                <div className="p-3 sm:p-3.5 rounded-xl bg-black/30 border border-white/10">
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold text-emerald-300 tracking-wider block">
                    Fruit Content
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {activeFlavor.profile.fruitPulp}
                  </span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-black/30 border border-white/10">
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold text-emerald-300 tracking-wider block">
                    Sweetness Profile
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {activeFlavor.profile.sweetness}
                  </span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-black/30 border border-white/10">
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold text-emerald-300 tracking-wider block">
                    Gelato Texture
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {activeFlavor.profile.texture}
                  </span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-black/30 border border-white/10">
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold text-emerald-300 tracking-wider block">
                    Lingering Finish
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {activeFlavor.profile.finish}
                  </span>
                </div>
              </div>

              {/* Real Ingredients Tag Strip */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-300/80 block">
                  Pure Raw Formula (Zero Essence):
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {activeFlavor.ingredients.map((ing, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full bg-white/10 border border-white/15 text-emerald-100"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Instant WhatsApp Action (Full width on mobile) */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-[#062012] hover:bg-emerald-100 font-bold text-xs sm:text-sm shadow-xl transition-all flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#258742]" />
                  <span>Order {activeFlavor.name} on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <span className="text-[11px] text-emerald-300/90 font-medium text-center sm:text-left">
                  Fresh tub ready for parlour pickup in Medipalli
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

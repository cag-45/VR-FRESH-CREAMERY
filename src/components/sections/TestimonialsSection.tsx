"use client";

import Image from "next/image";
import { Star, CheckCircle2, Quote, Sparkles } from "lucide-react";
import { CUSTOMER_REVIEWS } from "@/data/reviews";

export function TestimonialsSection() {
  const flavorAvatars: Record<string, string> = {
    "Mulberry Delight": "/images/flavors/mulberry.jpg",
    "Tender Coconut": "/images/flavors/tender-coconut.jpg",
    "Pink Guava": "/images/flavors/guava.jpg",
    "Fresh Sitaphal": "/images/flavors/sitaphal.jpg",
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FAF6ED] border-b border-[#E8DFC8] relative overflow-hidden">
      {/* HD Ambient Parlour Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/parlour-ambient-bg.jpg"
          alt="Artisanal Parlour Atmosphere"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6ED] via-[#FAF6ED]/90 to-[#FAF6ED]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-[#0B4822] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#258742]" />
            <span>Community Love</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-serif-brand text-[#0B4822] tracking-tight">
            Loved By Medipalli & Hyderabad
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
            Read what ice cream lovers and families say about our pure fresh-milk gelato.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CUSTOMER_REVIEWS.map((review) => {
            const avatarImg = flavorAvatars[review.favoriteFlavor] || "/images/hero-scoop.jpg";
            return (
              <div
                key={review.id}
                className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 border border-[#E8DFC8] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-emerald-200" />
                  </div>

                  <p className="text-xs sm:text-sm text-[#374151] leading-relaxed italic">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8DFC8] mt-4 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#E8DFC8] shadow-xs">
                    <Image
                      src={avatarImg}
                      alt={review.favoriteFlavor}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-serif-brand font-bold text-sm text-[#0B4822] truncate">
                        {review.author}
                      </span>
                      {review.verifiedVisit && (
                        <span className="flex items-center gap-0.5 text-[10px] font-semibold text-[#258742] shrink-0">
                          <CheckCircle2 className="w-3 h-3" />
                          Verified
                        </span>
                      )}
                    </div>
                    <span className="block text-[11px] text-[#6B7280] truncate">
                      {review.location} &bull; Loved {review.favoriteFlavor}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

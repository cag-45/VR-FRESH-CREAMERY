"use client";

import { Star, CheckCircle2, Quote, Sparkles } from "lucide-react";
import { CUSTOMER_REVIEWS } from "@/data/reviews";

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FAF6ED] border-b border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-12">
        
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
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 border border-[#E8DFC8] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
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

              <div className="pt-4 border-t border-[#E8DFC8] mt-4 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-serif-brand font-bold text-sm text-[#0B4822]">
                    {review.author}
                  </span>
                  {review.verifiedVisit && (
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-[#258742]">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#6B7280]">
                  <span>{review.location}</span>
                  <span className="font-semibold text-emerald-800">
                    Loved {review.favoriteFlavor}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { Star, CheckCircle2, Quote } from "lucide-react";
import { CUSTOMER_REVIEWS } from "@/data/reviews";

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-gradient-to-b from-[#FAF8F2] to-[#F6F2E7] border-b border-[#E3E9DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#0B4822] text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-[#D4A359] text-[#D4A359]" />
            <span>Customer Love</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-serif-brand text-[#0A3D1C] tracking-tight">
            Loved Across Telangana
          </h2>
          <p className="text-sm sm:text-base text-[#385340] leading-relaxed font-medium">
            Read what ice cream purists and families in Medipalli and Hyderabad say about our fresh dairy gelato.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 border border-[#E3E9DD] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Star Rating & Quote Mark */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#D4A359] text-[#D4A359]"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-emerald-200" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#2E4A37] leading-relaxed font-medium italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author & Favorite Flavor */}
              <div className="pt-4 border-t border-[#E3E9DD] mt-4 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-serif-brand font-bold text-sm text-[#0A3D1C]">
                    {review.author}
                  </span>
                  {review.verifiedVisit && (
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-[#258742]">
                      <CheckCircle2 className="w-3 h-3 text-[#258742]" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-gray-500">{review.location}</p>
                <p className="text-[10px] font-bold text-[#0B4822] bg-[#FAF8F2] px-2 py-0.5 rounded border border-[#E3E9DD] inline-block">
                  Favorite: {review.favoriteFlavor}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Rating Trust Bar */}
        <div className="mt-12 text-center text-xs font-bold text-[#0B4822] flex items-center justify-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#D4A359] text-[#D4A359]" />
            ))}
          </div>
          <span>4.9 / 5 Rating from verified neighbourhood visits & event catering orders</span>
        </div>

      </div>
    </section>
  );
}

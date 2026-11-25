"use client";

import Image from "next/image";
import { MapPin, Clock, Phone, Mail, MessageCircle, Navigation, Sparkles } from "lucide-react";
import { STORE_INFO, getWhatsAppUrl } from "@/data/store-info";

export function LocationHoursSection() {
  const encodedAddress = encodeURIComponent(
    `${STORE_INFO.address.street}, ${STORE_INFO.address.area}, ${STORE_INFO.address.city} - ${STORE_INFO.address.pincode}`
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#FAF6ED] text-[#1C1C1C] border-b border-[#E8DFC8] relative overflow-hidden">
      {/* HD Gelato Shop Atmospheric Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/gelato-shop.jpg"
          alt="Artisanal Gelato Parlour Interior"
          fill
          className="object-cover opacity-12"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6ED] via-[#FAF6ED]/85 to-[#FAF6ED]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#0B4822] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#258742]" />
              <span>Visit Us In Person</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-serif-brand tracking-tight text-[#0B4822]">
              Our Gelato Parlour
            </h2>
          </div>
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 border border-[#E8DFC8] text-xs font-bold text-[#0B4822] shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#258742] animate-pulse" />
              <span>Open Daily: 11:00 AM – 11:00 PM</span>
            </span>
          </div>
        </div>

        {/* Location Dispatch Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Address, Hours & Direct Contact */}
          <div className="lg:col-span-5 bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-[#E8DFC8] shadow-md flex flex-col justify-between space-y-6">

            <div className="space-y-6">
              {/* Parlour Badge */}
              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#0B4822] shrink-0 shadow-xs">
                  <Image src="/logo.jpg" alt="VR Fresh Creamery" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-serif-brand font-bold text-lg text-[#0B4822]">
                    VR Fresh Creamery
                  </h3>
                  <span className="text-xs text-[#258742] font-semibold">
                    Artisan Fresh Cream Gelato
                  </span>
                </div>
              </div>

              {/* Exact Physical Address */}
              <div className="space-y-1.5 pt-2">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B4822]">
                  <MapPin className="w-4 h-4 text-[#258742]" />
                  <span>Parlour Address</span>
                </div>
                <p className="text-sm font-medium text-[#374151] leading-relaxed">
                  {STORE_INFO.address.street},<br />
                  {STORE_INFO.address.area},<br />
                  DIST: {STORE_INFO.address.city} — {STORE_INFO.address.pincode}
                </p>
              </div>

              {/* Operating Hours */}
              <div className="space-y-1.5 pt-4 border-t border-[#E8DFC8]">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B4822]">
                  <Clock className="w-4 h-4 text-[#258742]" />
                  <span>Parlour Timings</span>
                </div>
                <p className="text-sm font-semibold text-[#1C1C1C]">
                  Monday – Sunday: 11:00 AM – 11:00 PM
                </p>
                <p className="text-xs text-[#6B7280]">
                  Fresh scoops served in cones and cups &bull; 5L bulk tubs packed on-demand.
                </p>
              </div>

              {/* Contact Links */}
              <div className="space-y-2.5 pt-4 border-t border-[#E8DFC8] text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#6B7280]">WhatsApp:</span>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#0B4822] hover:underline"
                  >
                    +91 99481 44296
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#6B7280]">Phone Hotline:</span>
                  <a
                    href={`tel:${STORE_INFO.phone.replace(/\s+/g, "")}`}
                    className="font-bold text-[#0B4822] hover:underline"
                  >
                    {STORE_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#6B7280]">Email:</span>
                  <a
                    href={`mailto:${STORE_INFO.email}`}
                    className="font-bold text-[#0B4822] hover:underline"
                  >
                    {STORE_INFO.email}
                  </a>
                </div>
              </div>

            </div>

            {/* Direct Directions Action */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-5 rounded-full bg-[#0B4822] hover:bg-[#083719] text-white text-xs font-bold text-center flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Google Maps Directions</span>
              </a>

              <a
                href={getWhatsAppUrl("Hi VR Fresh Creamery, I am visiting the parlour today.")}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 rounded-full bg-[#FAF6ED] hover:bg-[#F5F0E4] border border-[#E8DFC8] text-[#0B4822] text-xs font-bold text-center flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#258742]" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed with Overlay Parlour Image */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-white rounded-3xl overflow-hidden border border-[#E8DFC8] shadow-md min-h-[300px] sm:min-h-[340px] flex-1 relative">
              <iframe
                title="VR Fresh Creamery Parlour Location"
                src="https://maps.google.com/maps?q=Parvathapur,+Medipalli,+Medchal-Malkajgiri,+Telangana+500098&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Parlour Counter Photo Strip */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-36 rounded-2xl overflow-hidden border border-[#E8DFC8] shadow-xs group">
                <Image
                  src="/images/gelato-scoops.jpg"
                  alt="Gelato Display Counter"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-white text-xs font-bold font-serif-brand">
                  Fresh Display Counter
                </span>
              </div>

              <div className="relative h-36 rounded-2xl overflow-hidden border border-[#E8DFC8] shadow-xs group">
                <Image
                  src="/images/flavors/mulberry.jpg"
                  alt="Fresh Artisan Gelato"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-white text-xs font-bold font-serif-brand">
                  Artisan Berry Gelato
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

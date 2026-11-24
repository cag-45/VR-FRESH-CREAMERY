"use client";

import Image from "next/image";
import { MapPin, Clock, Phone, Mail, MessageCircle, ArrowUpRight, Navigation, Sparkles } from "lucide-react";
import { STORE_INFO } from "@/data/store-info";

export function LocationHoursSection() {
  const encodedAddress = encodeURIComponent(
    `${STORE_INFO.address.street}, ${STORE_INFO.address.area}, ${STORE_INFO.address.city} - ${STORE_INFO.address.pincode}`
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <section id="location" className="py-20 md:py-32 bg-[#062012] text-white border-b border-emerald-950 relative overflow-hidden">
      
      {/* Ambient glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-emerald-900/60">
          <div>
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-emerald-400 block mb-2">
              Physical Presence
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif-brand tracking-tight text-[#FAF6ED]">
              The Medipalli Parlour.
            </h2>
          </div>
          <div className="text-left md:text-right">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-700 text-xs font-bold text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open Today • 11:00 AM to 11:00 PM</span>
            </span>
          </div>
        </div>

        {/* Location Dispatch Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Hours & Direct Hotline */}
          <div className="lg:col-span-5 bg-[#0A2E1A]/90 rounded-3xl p-5 sm:p-8 lg:p-10 border border-emerald-700/50 shadow-2xl backdrop-blur-xl flex flex-col justify-between space-y-6 sm:space-y-8">
            
            <div className="space-y-6">
              {/* Parlour Badge */}
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-400 shrink-0">
                  <Image src="/logo.jpg" alt="VR Fresh Creamery" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-serif-brand font-bold text-xl text-white">
                    VR Fresh Creamery
                  </h3>
                  <span className="text-xs font-semibold text-emerald-300">
                    Fresh Cream Gelato Workshop
                  </span>
                </div>
              </div>

              {/* Exact Physical Address */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                  <MapPin className="w-4 h-4 text-emerald-300" />
                  <span>Exact Address</span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-emerald-100 leading-relaxed">
                  {STORE_INFO.address.street},<br />
                  {STORE_INFO.address.area},<br />
                  DIST: {STORE_INFO.address.city} — {STORE_INFO.address.pincode}
                </p>
              </div>

              {/* Operating Hours */}
              <div className="space-y-2 pt-4 border-t border-emerald-800/60">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                  <Clock className="w-4 h-4 text-emerald-300" />
                  <span>Workshop Hours</span>
                </div>
                <p className="text-sm font-semibold text-white">
                  Monday – Sunday: 11:00 AM – 11:00 PM
                </p>
                <p className="text-xs text-emerald-300/80">
                  Fresh tubs packed on-demand for walk-in takeaway and party pickups.
                </p>
              </div>

              {/* Contact Links */}
              <div className="space-y-3 pt-4 border-t border-emerald-800/60 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-300/70 font-medium">WhatsApp:</span>
                  <a
                    href={`https://wa.me/91${STORE_INFO.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-emerald-300 flex items-center gap-1"
                  >
                    <span>+91 99481 44296</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-emerald-300/70 font-medium">Direct Hotline:</span>
                  <a
                    href={`tel:${STORE_INFO.phone.replace(/\s+/g, "")}`}
                    className="font-bold text-white hover:text-emerald-300"
                  >
                    {STORE_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-emerald-300/70 font-medium">Email Dispatch:</span>
                  <a
                    href={`mailto:${STORE_INFO.email}`}
                    className="font-bold text-white hover:text-emerald-300"
                  >
                    {STORE_INFO.email}
                  </a>
                </div>
              </div>

            </div>

            {/* Direct Directions Action */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 rounded-full bg-[#258742] hover:bg-[#1E6F36] text-white text-xs font-bold text-center flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Navigate on Google Maps</span>
              </a>

              <a
                href={`https://wa.me/91${STORE_INFO.whatsapp.replace(/\D/g, "")}?text=Hi%20VR%20Fresh%20Creamery,%20I%20am%20visiting%20the%20parlour%20today.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold text-center flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Embedded Map with Dark Surround */}
          <div className="lg:col-span-7 bg-[#04190D] rounded-3xl overflow-hidden border border-emerald-700/50 shadow-2xl min-h-[320px] sm:min-h-[420px] relative">
            <iframe
              title="VR Fresh Creamery Medipalli Location"
              src="https://maps.google.com/maps?q=Medipalli,+Medchal-Malkajgiri,+Telangana+500098&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-105"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

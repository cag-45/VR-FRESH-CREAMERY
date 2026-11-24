import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2, Clock } from "lucide-react";
import { STORE_INFO } from "@/data/store-info";

export function Footer() {
  return (
    <footer className="bg-[#030F08] text-[#E8F5E9] pt-20 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Massive Typographic Architectural Brand Header */}
        <div className="border-b border-emerald-900/60 pb-12 text-center sm:text-left">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-emerald-400 block mb-2">
            The Artisan Gelateria of Medchal-Malkajgiri
          </span>
          <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black font-serif-brand tracking-tight text-white leading-none">
            VR FRESH CREAMERY
          </h2>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-emerald-900/60">
          
          {/* Column 1: Brand & Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-400 shadow-sm shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="VR Fresh Creamery"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif-brand font-black text-2xl text-white">
                    VR
                  </span>
                  <span className="font-script-brand font-bold text-2xl text-emerald-400 -rotate-2 inline-block">
                    Fresh Creamery
                  </span>
                </div>
                <span className="block text-[10px] uppercase font-bold tracking-[0.2em] text-emerald-300">
                  Fresh Cream Gelato
                </span>
              </div>
            </div>

            <p className="text-xs text-emerald-200/80 leading-relaxed font-medium">
              Handcrafted in Medipalli with 100% whole farm milk and real seasonal fruit. Zero artificial flavors, zero vegetable fats. Freshness in Every Scoop.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-emerald-300">
              <span className="px-2.5 py-1 rounded-full bg-emerald-950 border border-emerald-800 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>100% Vegetarian</span>
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-950 border border-emerald-800 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>Zero Vanaspati</span>
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-950 border border-emerald-800 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>Real Fruit Only</span>
              </span>
            </div>
          </div>

          {/* Column 2: The Curated Four & Prices (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-brand font-bold text-sm text-white uppercase tracking-wider">
              The Curated Four
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#flavor-vault"
                  className="hover:text-white transition-colors flex items-center justify-between text-emerald-200"
                >
                  <span>01 / Mulberry Delight</span>
                  <span className="font-bold text-purple-300">₹95</span>
                </a>
              </li>
              <li>
                <a
                  href="#flavor-vault"
                  className="hover:text-white transition-colors flex items-center justify-between text-emerald-200"
                >
                  <span>02 / Tender Coconut Malai</span>
                  <span className="font-bold text-emerald-300">₹85</span>
                </a>
              </li>
              <li>
                <a
                  href="#flavor-vault"
                  className="hover:text-white transition-colors flex items-center justify-between text-emerald-200"
                >
                  <span>03 / Ripe Pink Guava</span>
                  <span className="font-bold text-rose-300">₹85</span>
                </a>
              </li>
              <li>
                <a
                  href="#flavor-vault"
                  className="hover:text-white transition-colors flex items-center justify-between text-emerald-200"
                >
                  <span>04 / Fresh Sitaphal</span>
                  <span className="font-bold text-amber-300">₹85</span>
                </a>
              </li>
              <li className="pt-2 text-[11px] text-emerald-400/90 font-medium border-t border-emerald-900/60">
                Mulberry is ₹95; all other flavours are ₹85 per scoop.
              </li>
            </ul>
          </div>

          {/* Column 3: Bulk Tubs & Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-brand font-bold text-sm text-white uppercase tracking-wider">
              Party & Catering
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200">
              <li>
                <a href="#catering-calculator" className="hover:text-white transition-colors">
                  5L Tub Calculator
                </a>
              </li>
              <li>
                <a href="#catering-calculator" className="hover:text-white transition-colors">
                  Live Event Counters
                </a>
              </li>
              <li>
                <a href="#craft-story" className="hover:text-white transition-colors">
                  The Gelato Standard
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Verified Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Medipalli Map & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Full Contact & Address (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-brand font-bold text-sm text-white uppercase tracking-wider">
              Parlour & Dispatch
            </h4>
            
            <div className="text-xs text-emerald-200 space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {STORE_INFO.address.street},<br />
                  {STORE_INFO.address.area},<br />
                  DIST: {STORE_INFO.address.city} — {STORE_INFO.address.pincode}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <p>Monday – Sunday: 11:00 AM – 11:00 PM</p>
              </div>

              <div className="pt-2 space-y-1.5">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href={`https://wa.me/91${STORE_INFO.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-300 font-bold"
                  >
                    WhatsApp: 99481 44296
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href={`tel:${STORE_INFO.phone.replace(/\s+/g, "")}`}
                    className="text-emerald-200 hover:text-white font-medium"
                  >
                    Phone: {STORE_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href={`mailto:${STORE_INFO.email}`}
                    className="text-emerald-200 hover:text-white font-medium break-all"
                  >
                    {STORE_INFO.email}
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/80">
          <p>© 2026 VR FRESH CREAMERY. All rights reserved. Handcrafted Fresh Cream Gelato.</p>
          <div className="flex items-center gap-4">
            <span>Medipalli, Medchal-Malkajgiri, Telangana</span>
            <span>•</span>
            <a
              href={`https://wa.me/91${STORE_INFO.whatsapp.replace(/\D/g, "")}?text=Hi%20VR%20Fresh%20Creamery`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { STORE_INFO, getWhatsAppUrl } from "@/data/store-info";

export function Footer() {
  return (
    <footer className="relative bg-[#072412] text-[#FAF6ED] pt-16 pb-12 border-t border-[#0B4822] overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-12">
        {/* Top Brand Banner */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/60">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-400 shrink-0 shadow-lg bg-white">
                <Image
                  src="/logo.jpg"
                  alt="VR Fresh Creamery"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif-brand font-black text-2xl text-white tracking-tight">
                  VR Fresh Creamery
                </h3>
                <p className="font-script-brand text-emerald-300 text-lg leading-none">
                  Freshness in Every Scoop.
                </p>
              </div>
            </div>

            <p className="text-sm text-emerald-100/80 leading-relaxed font-normal max-w-sm">
              Authentic fresh cream gelato handcrafted daily with 100% whole farm milk and real handpicked fruits.
              Zero vegetable oils, zero vanaspati, and zero synthetic essence.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800">
                100% Pure Vegetarian
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800">
                Fresh Daily Churn
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800">
                Real Fruit Pulp
              </span>
            </div>
          </div>

          {/* Flavours & Prices */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-brand font-bold text-base text-white tracking-wide">
              Our 4 Flavours
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/85">
              <li className="flex items-center justify-between py-1 border-b border-emerald-900/40">
                <span className="font-medium">Mulberry Delight</span>
                <span className="font-bold text-emerald-300">₹95 / scoop</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-emerald-900/40">
                <span className="font-medium">Tender Coconut Malai</span>
                <span className="font-bold text-emerald-300">₹85 / scoop</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-emerald-900/40">
                <span className="font-medium">Ripe Pink Guava</span>
                <span className="font-bold text-emerald-300">₹85 / scoop</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-emerald-900/40">
                <span className="font-medium">Fresh Sitaphal</span>
                <span className="font-bold text-emerald-300">₹85 / scoop</span>
              </li>
              <li className="pt-1 text-[11px] text-emerald-300/80 italic">
                * 5-Litre Bulk Tubs: pricing depends on quantity
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif-brand font-bold text-base text-white tracking-wide">
              Parlour & Orders
            </h4>

            <div className="space-y-2.5 text-xs text-emerald-100/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=17.401626,78.606934+(VR+Fresh+Creamery)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  H.No 6-34/7, Road No 9, Sai Aishwarya Colony, Parvathapur, Bibi Shaeb Maqta, PO: Medipalli, DIST: Medchal-Malkajgiri, Telangana 500098
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Daily: 11:00 AM – 11:00 PM</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${STORE_INFO.phone.replace(/\s+/g, "")}`} className="hover:text-white underline">
                  +91 99481 44296
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${STORE_INFO.email}`} className="hover:text-white underline">
                  vrfreshcreamery@gmail.com
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Hi VR Fresh Creamery, I would like to order ice cream.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#258742] hover:bg-[#1E6F36] text-white font-bold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp Direct: 99481 44296
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/70 pt-2">
          <p>© 2026 VR Fresh Creamery. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Handcrafted with pure passion & natural ingredients</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

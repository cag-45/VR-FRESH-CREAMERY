"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { STORE_INFO } from "@/data/store-info";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "The Curated Four", href: "#flavor-vault" },
    { label: "The Standard", href: "#craft-story" },
    { label: "5L Party Calculator", href: "#catering-calculator" },
    { label: "Reviews", href: "#reviews" },
    { label: "Medipalli Parlour", href: "#location" },
  ];

  return (
    <>
      {/* Top Status Bar (Responsive on Mobile, Tablet & Desktop) */}
      <div className="bg-[#031209] text-[#E8F5E9] py-2 px-3 sm:px-4 text-xs font-medium border-b border-emerald-950/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          {/* Status Badge */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="tracking-wide text-[11px] text-emerald-200">
              Fresh Daily Churn in Medipalli • 100% Whole Farm Milk
            </span>
          </div>

          {/* Location & Contact Info (Visible across Mobile, Tablet, & Desktop) */}
          <div className="flex items-center gap-3 sm:gap-5 text-emerald-200 text-[11px]">
            <span className="flex items-center gap-1 hidden xs:flex">
              <Clock className="w-3 h-3 text-emerald-400" />
              11 AM – 11 PM
            </span>
            <span className="flex items-center gap-1 hidden sm:flex">
              <MapPin className="w-3 h-3 text-emerald-400" />
              Medchal-Malkajgiri
            </span>
            <a
              href={`tel:${STORE_INFO.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1 hover:text-white transition-colors font-bold text-emerald-300"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>99481 44296</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Elevated Glass Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#062012]/95 backdrop-blur-md border-b border-emerald-900/60 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 sm:gap-3.5 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-emerald-400 shadow-md transition-transform group-hover:scale-105 shrink-0">
              <Image
                src="/logo.jpg"
                alt="VR Fresh Creamery Logo"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif-brand font-black text-2xl sm:text-3xl text-white tracking-tight">
                  VR
                </span>
                <span className="font-script-brand font-bold text-2xl sm:text-3xl text-emerald-400 -rotate-2 inline-block">
                  Fresh Creamery
                </span>
              </div>
              <span className="block text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-emerald-300/90">
                Fresh Cream Gelato
              </span>
            </div>
          </Link>

          {/* Desktop & Tablet Landscape Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider text-emerald-100 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/91${STORE_INFO.whatsapp.replace(/\D/g, "")}?text=Hi%20VR%20Fresh%20Creamery,%20I%20would%20like%20to%20order%20ice%20cream.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#258742] hover:bg-[#1E6F36] text-white text-xs font-bold shadow-md hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-100" />
              <span>WhatsApp Order</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-100" />
            </a>
          </div>

          {/* Mobile & Tablet Portrait Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`https://wa.me/91${STORE_INFO.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order on WhatsApp"
              className="p-2 sm:hidden rounded-full bg-[#258742] text-white"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2.5 rounded-xl text-emerald-200 hover:bg-emerald-900 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile & Tablet Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#062012] border-b border-emerald-900/60 px-5 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-emerald-100 hover:text-white py-2.5 border-b border-emerald-900/40 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-emerald-400">→</span>
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/91${STORE_INFO.whatsapp.replace(/\D/g, "")}?text=Hi%20VR%20Fresh%20Creamery,%20I%20want%20to%20order%20ice%20cream.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#258742] text-white font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order (99481 44296)</span>
              </a>

              <a
                href={`tel:${STORE_INFO.phone.replace(/\s+/g, "")}`}
                className="flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>Call Parlour</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-emerald-200/80 space-y-1">
              <p className="font-semibold text-emerald-300">Medipalli Workshop:</p>
              <p>{STORE_INFO.address.street}, {STORE_INFO.address.area}</p>
              <p className="text-emerald-400 font-medium">Monday – Sunday: 11:00 AM – 11:00 PM</p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

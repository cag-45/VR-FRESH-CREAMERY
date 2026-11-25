"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { STORE_INFO, getWhatsAppUrl } from "@/data/store-info";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Our Flavours", href: "#flavours" },
    { label: "Our Craft", href: "#craft" },
    { label: "Bulk Orders", href: "#catering" },
    { label: "Find Us", href: "#location" },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) {
      window.history.pushState(null, "", window.location.pathname);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E8DFC8]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo & Brand - Shown on mobile, tablet, and laptop */}
          <a
            href="#"
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 cursor-pointer min-w-0"
            aria-label="VR Fresh Creamery - Back to top"
          >
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden border-2 border-[#0B4822] shadow-sm transition-transform group-hover:scale-105 shrink-0">
              <Image
                src="/logo.jpg"
                alt="VR Fresh Creamery"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif-brand font-black text-[#0B4822] text-base sm:text-xl leading-tight block tracking-tight">
                VR Fresh Creamery
              </span>
              <span className="font-script-brand text-[#258742] text-xs sm:text-sm block leading-none">
                Freshness in Every Scoop.
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-semibold tracking-wide text-[#1C1C1C] hover:text-[#0B4822] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#258742] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={getWhatsAppUrl("Hi VR Fresh Creamery, I would like to order ice cream.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#0B4822] hover:bg-[#083719] text-white text-[11px] sm:text-xs font-bold tracking-wide shadow-md transition-all shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Order Now</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#0B4822] hover:bg-[#0B4822]/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E8DFC8] px-5 py-6 space-y-5 shadow-xl">
            <nav className="flex flex-col divide-y divide-[#E8DFC8]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3.5 text-sm font-semibold text-[#1C1C1C] hover:text-[#0B4822] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#258742] text-xs">&#8594;</span>
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3 pt-1">
              <a
                href={getWhatsAppUrl("Hi VR Fresh Creamery, I want to order ice cream.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#0B4822] text-white font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: 85000 86995
              </a>
              <a
                href={`tel:${STORE_INFO.phone.replace(/\s+/g, "")}`}
                className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#FAF6ED] border border-[#E8DFC8] text-[#0B4822] font-bold text-sm"
              >
                <Phone className="w-4 h-4" />
                Call the Parlour
              </a>
            </div>

            <p className="text-xs text-[#6B7280] text-center pt-1">
              Open Daily 11:00 AM – 11:00 PM &bull; Hyderabad
            </p>
          </div>
        )}
      </header>
    </>
  );
}

import { CateringPackage } from "@/types";

export const CATERING_PACKAGES: CateringPackage[] = [
  {
    id: "bulk-5l-tubs",
    name: "5 Litre Party Tubs",
    servesCount: "25 – 35 Scoops per tub",
    priceStartingAt: "Price Depends on Quantity",
    badge: "Most Popular for Gatherings",
    isPopular: true,
    description: "Authentic, freshly churned gelato packed in insulated 5-litre food-grade tubs. Perfect for house parties, festivals, and family celebrations.",
    includedItems: [
      "Available in Mulberry, Tender Coconut, Guava & Sitaphal",
      "Freshly packed on morning of event for peak freshness",
      "Special tiered discounts on multiple 5L tubs",
      "Direct parlour pickup or chilled local delivery",
    ],
  },
  {
    id: "live-event-counter",
    name: "Live Creamery Counter",
    servesCount: "50 – 200+ Guests",
    priceStartingAt: "Custom Quote on WhatsApp",
    badge: "Weddings & Birthdays",
    description: "A complete live gelato counter setup for weddings, corporate celebrations, and milestone events.",
    includedItems: [
      "All 4 signature fruit gelato flavors served live",
      "Crispy waffle cones, cups & eco-friendly wooden spoons",
      "Professional ice cream scooper for the event duration",
      "Special bulk pricing customized to your guest count",
    ],
  },
  {
    id: "corporate-celebrations",
    name: "Corporate & Festival Bulk Orders",
    servesCount: "Custom Bulk Volume",
    priceStartingAt: "Volume Discount Available",
    description: "Wholesale & corporate bulk gifting in individual mini-cups or tubs with custom brand labeling.",
    includedItems: [
      "Pre-portioned individual gelato cups or 5L party packs",
      "Dry ice & insulated packaging ensuring zero melting",
      "GST invoice and priority delivery across Medchal & Hyderabad",
      "Direct coordination with creamery founder on WhatsApp",
    ],
  },
];

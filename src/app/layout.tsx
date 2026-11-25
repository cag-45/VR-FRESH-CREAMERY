import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const isGithub = process.env.GITHUB_ACTIONS === "true" || process.env.DEPLOY_TARGET === "gh-pages";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined
  ? process.env.NEXT_PUBLIC_BASE_PATH
  : isGithub
  ? "/VR-FRESH-CREAMERY"
  : "";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "VR Fresh Creamery | Fresh Cream Gelato — Freshness in Every Scoop",
  description: "Handcrafted artisan fresh-cream gelato by VR Fresh Creamery. Churned daily from 100% whole farm milk and real seasonal fruits: Mulberry, Tender Coconut, Guava, and Sitaphal. 5L bulk party tubs available.",
  keywords: [
    "VR Fresh Creamery",
    "Fresh Cream Gelato Hyderabad",
    "Artisan Ice Cream Hyderabad",
    "Mulberry Ice Cream Hyderabad",
    "Tender Coconut Ice Cream",
    "Sitaphal Custard Apple Ice Cream",
    "Pink Guava Gelato",
    "5 Litre Ice Cream Tubs Hyderabad",
    "Pure Fruit Gelato Medipalli",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VR Fresh Creamery | Fresh Cream Gelato — Freshness in Every Scoop",
    description: "Handcrafted artisan fresh-cream gelato churned daily from 100% whole farm milk and real seasonal fruits. 100% natural, eggless, zero artificial preservatives.",
    url: siteUrl,
    siteName: "VR Fresh Creamery",
    images: [
      {
        url: `${basePath}/logo.jpg`,
        width: 800,
        height: 800,
        alt: "VR Fresh Creamery Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR Fresh Creamery | Fresh Cream Gelato",
    description: "Handcrafted artisan fresh-cream gelato churned daily from 100% whole farm milk and real seasonal fruits.",
    images: [`${basePath}/logo.jpg`],
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: "any" },
      { url: `${basePath}/logo.jpg`, type: "image/jpeg" },
    ],
    apple: `${basePath}/apple-touch-icon.png`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["IceCreamShop", "FoodEstablishment"],
  name: "VR Fresh Creamery",
  image: `${siteUrl}/logo.jpg`,
  description: "Handcrafted artisan fresh-cream gelato churned daily from 100% whole milk and real seasonal fruits: Mulberry, Tender Coconut, Guava, and Sitaphal.",
  telephone: "+918500086995",
  address: {
    "@type": "PostalAddress",
    streetAddress: "H.No - 6-34/7, Sai Aishwarya Colony Road No - 9, Parvathapur, Bibi Shaeb Maqta",
    addressLocality: "Medipalli, Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500098",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.4093,
    longitude: 78.5912,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "11:00",
      closes: "23:30",
    },
  ],
  priceRange: "₹85 - ₹95",
  servesCuisine: ["Gelato", "Ice Cream", "Pure Fruit Artisan Desserts"],
  hasMenu: {
    "@type": "Menu",
    name: "Signature Gelato Flavours",
    hasMenuItem: [
      {
        "@type": "MenuItem",
        name: "Mulberry Delight Gelato",
        description: "Wild forest mulberries simmered into rich compote and slow-folded into thick farm dairy cream.",
        offers: { "@type": "Offer", price: "95", priceCurrency: "INR" },
      },
      {
        "@type": "MenuItem",
        name: "Tender Coconut Malai Gelato",
        description: "100% natural tender coconut water and shredded fresh malai pulp.",
        offers: { "@type": "Offer", price: "85", priceCurrency: "INR" },
      },
      {
        "@type": "MenuItem",
        name: "Ripe Pink Guava Gelato",
        description: "Fragrant orchard-fresh pink guava pulp churned to velvety smooth gelato.",
        offers: { "@type": "Offer", price: "85", priceCurrency: "INR" },
      },
      {
        "@type": "MenuItem",
        name: "Fresh Sitaphal Gelato",
        description: "Seasonal custard apple pulp hand-deseeded and folded into cold cream.",
        offers: { "@type": "Offer", price: "85", priceCurrency: "INR" },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} ${dancingScript.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF6ED] text-[#1C1C1C] antialiased selection:bg-[#0B4822] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

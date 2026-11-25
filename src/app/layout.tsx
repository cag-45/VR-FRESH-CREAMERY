import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
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

export const metadata: Metadata = {
  title: "VR Fresh Creamery | Fresh Cream Gelato — Freshness in Every Scoop",
  description: "Handcrafted artisan fresh-cream gelato by VR Fresh Creamery. Churned daily from 100% whole farm milk and real seasonal fruits: Mulberry, Tender Coconut, Guava, and Sitaphal. 5L party tubs available.",
  keywords: [
    "VR Fresh Creamery",
    "Fresh Cream Gelato Hyderabad",
    "Artisan Ice Cream Hyderabad",
    "Mulberry Ice Cream",
    "Tender Coconut Ice Cream",
    "Sitaphal Ice Cream",
    "Guava Ice Cream",
    "5 Litre Ice Cream Tubs Hyderabad",
  ],
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: "any" },
      { url: `${basePath}/logo.jpg`, type: "image/jpeg" },
    ],
    apple: `${basePath}/apple-touch-icon.png`,
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
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";

import { TopNav } from "@/components/TopNav";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "StardewProfit – Stardew Valley Crop Calculator & Guides",
  description:
    "StardewProfit.com: the fastest Stardew Valley crop profit calculator. Compare gold/day by season and read expert farming guides.",
  alternates: {
    canonical: "./",
  },
  manifest: "/manifest.json",
  keywords: [
    "stardew valley crop profit calculator",
    "stardew crop calculator",
    "best crops stardew valley",
    "gold per day stardew",
    "stardew spring crops",
    "stardewprofit",
  ],
  openGraph: {
    title: "StardewProfit – Stardew Valley Crop Calculator & Guides",
    description:
      "StardewProfit.com: compare crop profit by season and maximize gold/day with a free calculator.",
    type: "website",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary",
    title: "StardewProfit – Stardew Valley Crop Calculator & Guides",
    description:
      "StardewProfit.com: compare crop profit by season and maximize gold/day with a free calculator.",
  },
};

export const viewport: Viewport = {
  themeColor: "#6ea84f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/geist-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Suspense fallback={null}>
          <TopNav />
        </Suspense>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

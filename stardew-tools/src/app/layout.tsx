import type { Metadata, Viewport } from "next";
import { Suspense } from "react";

import { TopNav } from "@/components/TopNav";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://stardewprofit.com"),
  title: "Stardew Profit Calculator | Best Crop Tool 2026",
  description:
    "stardewprofit.com is a fast Stardew Valley crop profit calculator. Compare gold/day and seasonal profit to pick the best crops for any season.",
  manifest: "/manifest.json",
  keywords: [
    "stardew valley crop profit calculator",
    "stardew crop calculator",
    "best crops stardew valley",
    "gold per day stardew",
    "stardew spring crops",
  ],
  openGraph: {
    title: "Stardew Profit Calculator | Best Crop Tool 2026",
    description:
      "Use stardewprofit.com to compare crop profit by season and maximize gold/day with a simple calculator.",
    type: "website",
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
      <body className="antialiased">
        <Suspense fallback={null}>
          <TopNav />
        </Suspense>
        {children}
      </body>
    </html>
  );
}

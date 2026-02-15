import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stardew Valley Crop Profit Calculator | Maximize Your Farm Revenue",
  description:
    "A fast Stardew Valley crop profit calculator. Compare gold/day and seasonal profit to pick the best crops for any season.",
  manifest: "/manifest.json",
  keywords: [
    "stardew valley crop profit calculator",
    "stardew crop calculator",
    "best crops stardew valley",
    "gold per day stardew",
    "stardew spring crops",
  ],
  openGraph: {
    title: "Stardew Valley Crop Profit Calculator",
    description:
      "Compare crop profit by season and maximize gold/day with a simple calculator.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorClient } from "@/components/CalculatorClient";
import { FaqGuideCard } from "@/components/calculator/FaqGuideCard";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import crops from "@/data/crops.json";
import { calculateSeasonProfit, type Crop, type Season } from "@/lib/calculateProfit";

const QUICK_PRESET_LINKS = [
  {
    href: "/?season=spring&daysLeft=28",
    label: "Spring Best",
    icon: "🌸",
  },
  {
    href: "/?season=summer&daysLeft=10",
    label: "Summer Panic",
    icon: "☀️",
  },
  {
    href: "/?season=greenhouse",
    label: "Greenhouse Strategy",
    icon: "🏡",
  },
] as const;

export const metadata: Metadata = {
  title: "Stardew Valley Crop Profit Calculator (Gold/Day) | Stardew Tools",
  description:
    "Compare Stardew Valley crops by harvest count, total seasonal profit, and gold per day. Includes regrowing crops support.",
};

export default function CalculatorPage() {
  const initialSeason: Season = "spring";

  const initialResults = (crops as Crop[])
    .filter((crop) => crop.season.includes(initialSeason))
    .map((crop) => calculateSeasonProfit({ crop, quality: "normal", hasTiller: false }))
    .sort((a, b) => b.goldPerDay - a.goldPerDay);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is this calculator ranking crops?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ranking compares seasonal total profit and gold per day with regrow logic, quality multipliers, and optional Tiller bonus.",
        },
      },
      {
        "@type": "Question",
        name: "Does this include artisan processing profit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. This page focuses on direct crop selling value for faster in-season crop planning.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use this for Year 1 Spring planning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Use Normal quality and Tiller Off for early-game baseline planning.",
        },
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 20%, rgba(255,255,255,0.24) 0 4%, transparent 5%), radial-gradient(circle at 78% 15%, rgba(255,255,255,0.2) 0 3%, transparent 4%), repeating-linear-gradient(135deg, rgba(121,176,77,0.22) 0 16px, rgba(96,154,66,0.18) 16px 32px)",
            backgroundColor: "#9ecf77",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#b8e8ff]/55 via-transparent to-[#98ca73]/35" />
        <div
          className="absolute inset-x-0 bottom-0 h-24 opacity-90 sm:h-32"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(105,66,37,0.9) 0 14%, rgba(145,95,53,0.9) 14% 32%, transparent 32%), repeating-linear-gradient(to right, rgba(116,73,41,0.92) 0 10px, rgba(151,102,58,0.92) 10px 22px, transparent 22px 52px)",
            backgroundSize: "100% 100%, 100% 100%",
            backgroundPosition: "bottom center, bottom center",
          }}
        />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 py-8 subpixel-antialiased sm:px-12 sm:py-10">
        <PwaRegisterScript />

        <header className="rounded-[30px] border-4 border-[#8a5b3a]/75 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
            Stardew Valley Tool
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Crop Profit Calculator
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/85 sm:text-base">
            Compare crop profit per season with quality multipliers and Tiller profession effects.
            Built for quick in-game route planning on desktop and mobile.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {QUICK_PRESET_LINKS.map((preset) => (
              <Link
                key={preset.href}
                href={preset.href}
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-3 py-1.5 text-xs font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  {preset.icon}
                </span>
                {preset.label}
              </Link>
            ))}
          </div>
        </header>

        <section className="mt-8 grid gap-6">
          <CalculatorClient
            crops={crops as Crop[]}
            initialSeason={initialSeason}
            initialResults={initialResults}
          />
          <FaqGuideCard />

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f4b2a]/75">New Module</p>
                <h2 className="mt-1 text-xl font-semibold text-[#4a321e] sm:text-2xl">Secret Notes Finder</h2>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Decode all 25 secret notes, track completion progress, and jump directly between clues with desktop
                  sidebar navigation or mobile quick-jump chips.
                </p>
              </div>

              <Link
                href="/secret-notes"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  🔎
                </span>
                Open Secret Notes Finder
              </Link>
            </div>
          </section>
        </section>

        <SiteFooter className="mt-10" />

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </main>
    </div>
  );
}

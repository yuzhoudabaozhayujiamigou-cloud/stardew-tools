import type { Metadata } from "next";

import { CalculatorClient } from "@/components/CalculatorClient";
import { FaqGuideCard } from "@/components/calculator/FaqGuideCard";
import crops from "@/data/crops.json";
import { calculateSeasonProfit, type Crop, type Season } from "@/lib/calculateProfit";

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
    <div className="relative min-h-screen overflow-x-hidden bg-[#9ed7a4]">
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

      <main className="relative z-10 mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
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
        </header>

        <section className="mt-8 grid gap-6">
          <CalculatorClient
            crops={crops as Crop[]}
            initialSeason={initialSeason}
            initialResults={initialResults}
          />
          <FaqGuideCard />
        </section>

        <footer className="mt-10 text-xs text-[#4f3823]/80">
          Unofficial fan-made tool. Not affiliated with ConcernedApe.
        </footer>

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </main>
    </div>
  );
}

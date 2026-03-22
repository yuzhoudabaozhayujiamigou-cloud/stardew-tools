import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import { SiteFooter } from "@/components/SiteFooter";

type FishProfitRow = {
  name: string;
  basePrice: number;
  location: string;
  season: string;
};

const CARD_CLASS =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";

const PRIMARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#5c8a3e] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4e7a32]";

const SECONDARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-white/60 px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-white/80";

const TOP_FISH: FishProfitRow[] = [
  { name: "Legend", basePrice: 5000, location: "Mountain Lake", season: "Spring (Rain)" },
  { name: "Crimsonfish", basePrice: 1500, location: "East Beach Pier", season: "Summer" },
  { name: "Mutant Carp", basePrice: 1000, location: "Sewers", season: "Any" },
  { name: "Glacierfish", basePrice: 1000, location: "Cindersap Forest River", season: "Winter" },
  { name: "Angler", basePrice: 900, location: "North of JojaMart", season: "Fall" },
  { name: "Lava Eel", basePrice: 700, location: "Mines Floor 100", season: "Any" },
  { name: "Pufferfish", basePrice: 200, location: "Ocean", season: "Summer (Sunny, 12:00-16:00)" },
  { name: "Catfish", basePrice: 200, location: "River / Secret Woods", season: "Spring/Fall (Rain)" },
  { name: "Scorpion Carp", basePrice: 150, location: "Desert", season: "Any" },
  { name: "Eel", basePrice: 85, location: "Ocean", season: "Spring/Fall (Rain, Night)" },
];

const PAGE_PATH = "/tools/fishing-profit";

export const metadata: Metadata = {
  title: "Stardew Valley Fishing Profit Guide – Best Fish by Location",
  description:
    "Find the most profitable fish in Stardew Valley by location and season. Compare gold per fish and daily income from fishing vs farming.",
  alternates: {
    canonical: PAGE_PATH,
  },
};

function formatGold(value: number): string {
  return `${value.toLocaleString()}g`;
}

function fisherValue(basePrice: number): number {
  return Math.round(basePrice * 1.25);
}

function anglerValue(basePrice: number): number {
  return Math.round(basePrice * 1.5);
}

export default function FishingProfitPage() {
  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Tools", href: "/tools" },
            { name: "Fishing Profit", href: PAGE_PATH },
          ]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.stardewprofit.com" },
                { "@type": "ListItem", position: 2, name: "Tools", item: "https://www.stardewprofit.com/tools" },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Stardew Valley Fishing Profit Guide",
                  item: "https://www.stardewprofit.com/tools/fishing-profit",
                },
              ],
            }),
          }}
        />

        <header className={CARD_CLASS}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Tools</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Stardew Valley Fishing Profit Guide
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Use this list to prioritize high-value fish by location and season, then compare expected fishing income
            against your crop plans.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Profession note: Fisher gives +25% fish value, while the Angler path gives +50% total fish value and is
            strongest on high-ticket catches.
          </p>
        </header>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Top 10 fish by value</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm text-[#4a321e]">
              <thead>
                <tr className="border-b-2 border-[#7c4d2e]/40">
                  <th className="px-2 py-2 font-semibold">Rank</th>
                  <th className="px-2 py-2 font-semibold">Fish</th>
                  <th className="px-2 py-2 font-semibold">Location</th>
                  <th className="px-2 py-2 font-semibold">Season / Window</th>
                  <th className="px-2 py-2 font-semibold">Base Value</th>
                  <th className="px-2 py-2 font-semibold">Fisher (+25%)</th>
                  <th className="px-2 py-2 font-semibold">Angler (+50%)</th>
                </tr>
              </thead>
              <tbody>
                {TOP_FISH.map((fish, index) => (
                  <tr key={fish.name} className="border-b border-[#7c4d2e]/20">
                    <td className="px-2 py-2 font-semibold">{index + 1}</td>
                    <td className="px-2 py-2">{fish.name}</td>
                    <td className="px-2 py-2">{fish.location}</td>
                    <td className="px-2 py-2">{fish.season}</td>
                    <td className="px-2 py-2">{formatGold(fish.basePrice)}</td>
                    <td className="px-2 py-2">{formatGold(fisherValue(fish.basePrice))}</td>
                    <td className="px-2 py-2">{formatGold(anglerValue(fish.basePrice))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Compare fishing vs farming income</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Use the calculator to compare active fishing income with your planned crop and artisan setup for each
            season.
          </p>
          <div className="mt-5">
            <Link href="/calculator" className={PRIMARY_CTA_CLASS}>
              Open Profit Calculator
            </Link>
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-lg font-semibold text-[#4a321e] sm:text-xl">Related Pages</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/calculator" className={SECONDARY_CTA_CLASS}>
              Profit Calculator
            </Link>
            <Link href="/tools/professions" className={SECONDARY_CTA_CLASS}>
              Profession Guide
            </Link>
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}

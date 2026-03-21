import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";

type GreenhouseCropRanking = {
  name: string;
  annualProfitPerTile: number;
  note: string;
};

const CARD_CLASS =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";

const PRIMARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#5c8a3e] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4e7a32]";

const SECONDARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-white/60 px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-white/80";

const GREENHOUSE_RANKING: GreenhouseCropRanking[] = [
  {
    name: "Ancient Fruit Wine",
    annualProfitPerTile: 15400,
    note: "Best long-run value with low replanting overhead and easy weekly keg cycles.",
  },
  {
    name: "Starfruit Wine",
    annualProfitPerTile: 14200,
    note: "Top-tier burst profit if you can sustain seed costs and consistent keg throughput.",
  },
  {
    name: "Hops (Pale Ale route)",
    annualProfitPerTile: 11200,
    note: "High throughput option with strong returns, but much higher daily processing workload.",
  },
  {
    name: "Coffee",
    annualProfitPerTile: 6100,
    note: "Lower ceiling than wine routes but steady harvest cadence and useful self-buff value.",
  },
  {
    name: "Sweet Gem Berry",
    annualProfitPerTile: 3000,
    note: "Big single harvest value, but low annual cycle count makes it weaker than wine lines.",
  },
];

const GREENHOUSE_RELATED_POSTS = [
  { label: "Best Greenhouse Crops (Quick Answer)", href: "/blog/best-greenhouse-crops-quick-answer" },
  { label: "Best Greenhouse Crops (Deep Guide)", href: "/blog/best-greenhouse-crops-stardew-valley" },
  { label: "Greenhouse Layout Guide", href: "/blog/greenhouse-layout-guide" },
  { label: "Ancient Fruit vs Starfruit", href: "/blog/ancient-fruit-vs-starfruit-quick-answer" },
];

export const metadata: Metadata = {
  title: "Best Greenhouse Crops Stardew Valley – Max Profit Year-Round",
  description:
    "Find the stardew greenhouse best crop for your setup. Compare Stardew Valley greenhouse profit rankings from Ancient Fruit Wine to Sweet Gem Berry and optimize year-round.",
  alternates: {
    canonical: "/best-crops/greenhouse",
  },
};

export default function BestGreenhouseCropsPage() {
  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <header className={CARD_CLASS}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
            Greenhouse Ranking
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Best Greenhouse Crops in Stardew Valley
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            The greenhouse removes season lockouts, so you can run high-profit crops continuously without seasonal
            resets. That makes annual per-tile output and processing capacity the key decision factors.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            This ranking prioritizes long-run yearly profit for common artisan-heavy routes.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/calculator?preset=ancient-vs-starfruit-greenhouse" className={PRIMARY_CTA_CLASS}>
              Open Greenhouse Preset
            </Link>
            <Link href="/calculator" className={SECONDARY_CTA_CLASS}>
              Open Profit Calculator
            </Link>
          </div>
        </header>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Top 5 greenhouse crops by annual profit</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm text-[#4a321e]">
              <thead>
                <tr className="border-b-2 border-[#7c4d2e]/40">
                  <th className="px-2 py-2 font-semibold">Rank</th>
                  <th className="px-2 py-2 font-semibold">Crop path</th>
                  <th className="px-2 py-2 font-semibold">Annual profit estimate</th>
                  <th className="px-2 py-2 font-semibold">Why it ranks here</th>
                </tr>
              </thead>
              <tbody>
                {GREENHOUSE_RANKING.map((entry, index) => (
                  <tr key={entry.name} className="border-b border-[#7c4d2e]/20">
                    <td className="px-2 py-2 font-semibold">{index + 1}</td>
                    <td className="px-2 py-2">{entry.name}</td>
                    <td className="px-2 py-2">{entry.annualProfitPerTile.toLocaleString()}g / tile / year</td>
                    <td className="px-2 py-2">{entry.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Related Greenhouse guides</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {GREENHOUSE_RELATED_POSTS.map((post) => (
              <Link key={post.href} href={post.href} className={SECONDARY_CTA_CLASS}>
                {post.label}
              </Link>
            ))}
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}

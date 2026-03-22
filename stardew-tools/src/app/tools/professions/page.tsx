import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import { SiteFooter } from "@/components/SiteFooter";

type ProfessionComparisonRow = {
  category: string;
  optionA: string;
  optionB: string;
  bestWhen: string;
};

type RecommendationRow = {
  goal: string;
  recommended: string;
  reason: string;
};

const CARD_CLASS =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";

const PRIMARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#5c8a3e] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4e7a32]";

const SECONDARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-white/60 px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-white/80";

const COMPARISON_ROWS: ProfessionComparisonRow[] = [
  {
    category: "Farming",
    optionA: "Tiller (+10% crops)",
    optionB: "Artisan (+40% artisan goods)",
    bestWhen: "Artisan wins once kegs and jars drive most of your income.",
  },
  {
    category: "Fishing",
    optionA: "Fisher (+25%)",
    optionB: "Angler (+50% legendary)",
    bestWhen: "Fisher is safer for daily income; Angler is strongest for premium catches.",
  },
  {
    category: "Mining",
    optionA: "Miner (+1 ore per vein)",
    optionB: "Geologist (higher gem chance)",
    bestWhen: "Miner supports bar-heavy crafting, Geologist supports gem selling and geode value.",
  },
];

const RECOMMENDATION_ROWS: RecommendationRow[] = [
  {
    goal: "Scale wine/jam empire",
    recommended: "Artisan (+40% artisan goods)",
    reason: "Largest multiplier for late-game processing pipelines.",
  },
  {
    goal: "Sell raw crops early",
    recommended: "Tiller (+10% crops)",
    reason: "Immediate boost while machine count is still low.",
  },
  {
    goal: "Steady fish income",
    recommended: "Fisher (+25%)",
    reason: "Consistent value increase on all regular fish sales.",
  },
  {
    goal: "Legendary fish cashouts",
    recommended: "Angler (+50% legendary)",
    reason: "Highest payout route for one-time or high-value fish targets.",
  },
  {
    goal: "Ore-first progression",
    recommended: "Miner (+1 ore)",
    reason: "More ore per run accelerates tool upgrades and keg crafting.",
  },
  {
    goal: "Gem farming runs",
    recommended: "Geologist (gem chance)",
    reason: "Higher gem frequency improves direct sales and late-game crystal setups.",
  },
];

const PAGE_PATH = "/tools/professions";

export const metadata: Metadata = {
  title: "Stardew Valley Profession Guide – Tiller vs Artisan & More",
  description:
    "Compare Stardew Valley professions: Tiller vs Artisan, Fisher vs Angler, Miner vs Geologist. Find which profession maximizes your farm profit.",
  alternates: {
    canonical: PAGE_PATH,
  },
};

export default function ProfessionsPage() {
  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Tools", href: "/tools" },
            { name: "Professions", href: PAGE_PATH },
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
                  name: "Stardew Valley Profession Guide",
                  item: "https://www.stardewprofit.com/tools/professions",
                },
              ],
            }),
          }}
        />

        <header className={CARD_CLASS}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Tools</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Stardew Valley Profession Guide
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Profession choices lock in long-term income multipliers. This comparison shows where each path performs
            best for farming, fishing, and mining-focused saves.
          </p>
        </header>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Core profession comparisons</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm text-[#4a321e]">
              <thead>
                <tr className="border-b-2 border-[#7c4d2e]/40">
                  <th className="px-2 py-2 font-semibold">Category</th>
                  <th className="px-2 py-2 font-semibold">Option A</th>
                  <th className="px-2 py-2 font-semibold">Option B</th>
                  <th className="px-2 py-2 font-semibold">Practical outcome</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.category} className="border-b border-[#7c4d2e]/20">
                    <td className="px-2 py-2 font-semibold">{row.category}</td>
                    <td className="px-2 py-2">{row.optionA}</td>
                    <td className="px-2 py-2">{row.optionB}</td>
                    <td className="px-2 py-2">{row.bestWhen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Simple recommendation table</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm text-[#4a321e]">
              <thead>
                <tr className="border-b-2 border-[#7c4d2e]/40">
                  <th className="px-2 py-2 font-semibold">Goal</th>
                  <th className="px-2 py-2 font-semibold">Recommended Profession</th>
                  <th className="px-2 py-2 font-semibold">Why</th>
                </tr>
              </thead>
              <tbody>
                {RECOMMENDATION_ROWS.map((row) => (
                  <tr key={row.goal} className="border-b border-[#7c4d2e]/20">
                    <td className="px-2 py-2">{row.goal}</td>
                    <td className="px-2 py-2">{row.recommended}</td>
                    <td className="px-2 py-2">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Test profession impact on your farm</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Compare profession paths directly with your crop and artisan setup in the calculator.
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
            <Link href="/tools/artisan-profit" className={SECONDARY_CTA_CLASS}>
              Artisan Profit Guide
            </Link>
            <Link href="/tools/seed-maker" className={SECONDARY_CTA_CLASS}>
              Seed Maker Calculator
            </Link>
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}

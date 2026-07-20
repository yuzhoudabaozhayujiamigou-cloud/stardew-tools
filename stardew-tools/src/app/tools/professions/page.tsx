import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import { EditorialReview } from "@/components/EditorialReview";
import { GuideVisual } from "@/components/GuideVisual";
import { SiteFooter } from "@/components/SiteFooter";
import { buildArticleJsonLd, EDITORIAL_AUTHOR_NAME } from "@/lib/editorial";

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
    category: "Farming: processing",
    optionA: "Tiller at level 5 (+10% crops)",
    optionB: "Artisan at level 10 (+40% artisan goods)",
    bestWhen: "Follow this path when kegs, jars, cheese, oil, or other artisan goods drive income.",
  },
  {
    category: "Fishing: fish sales",
    optionA: "Fisher at level 5 (+25% fish value)",
    optionB: "Angler at level 10 (+50% fish value total)",
    bestWhen: "Use this path when selling fish matters more than crab-pot convenience or treasure hunting.",
  },
  {
    category: "Mining: materials",
    optionA: "Miner at level 5 (+1 ore per vein)",
    optionB: "Blacksmith or Prospector at level 10",
    bestWhen: "Choose more ore for tool upgrades and crafting, then specialize in bar value or coal supply.",
  },
  {
    category: "Mining: gems and geodes",
    optionA: "Geologist at level 5 (chance for paired gems)",
    optionB: "Excavator or Gemologist at level 10",
    bestWhen: "Choose this path for more geodes or a 30% value bonus on gems and minerals.",
  },
];

const RECOMMENDATION_ROWS: RecommendationRow[] = [
  {
    goal: "Scale wine/jam empire",
    recommended: "Tiller -> Artisan",
    reason: "Largest multiplier for late-game processing pipelines.",
  },
  {
    goal: "Sell raw crops early",
    recommended: "Tiller",
    reason: "Immediate boost while machine count is still low.",
  },
  {
    goal: "Steady fish income",
    recommended: "Fisher -> Angler",
    reason: "Consistent value increase on all regular fish sales.",
  },
  {
    goal: "Crab-pot convenience",
    recommended: "Trapper -> Mariner or Luremaster",
    reason: "Choose no-junk catches or bait-free pots instead of the fish-sale path.",
  },
  {
    goal: "Ore-first progression",
    recommended: "Miner -> Prospector or Blacksmith",
    reason: "More ore per run accelerates tool upgrades and keg crafting.",
  },
  {
    goal: "Gem and geode value",
    recommended: "Geologist -> Gemologist or Excavator",
    reason: "Geologist can produce paired gems; level 10 then improves gem value or geode frequency.",
  },
];

const PAGE_PATH = "/tools/professions";
const PAGE_TITLE = "Stardew Valley Profession Guide - Tiller vs Artisan and More";
const PAGE_DESCRIPTION =
  "Compare Stardew Valley professions: Tiller vs Artisan, Fisher vs Angler, Miner vs Geologist. Find which profession maximizes your farm profit.";
const PAGE_IMAGE = "/visuals/profession-paths.svg";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  authors: [{ name: EDITORIAL_AUTHOR_NAME, url: "/about#editorial-team" }],
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
            __html: JSON.stringify(
              buildArticleJsonLd({ headline: PAGE_TITLE, description: PAGE_DESCRIPTION, path: PAGE_PATH, imagePath: PAGE_IMAGE }),
            ),
          }}
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
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Level 10 professions are continuations of a level 5 choice, not separate alternatives. For example,
            Artisan requires Tiller and Angler requires Fisher.
          </p>
          <EditorialReview gameVersion="1.6" />
        </header>

        <GuideVisual
          src={PAGE_IMAGE}
          alt="Profession decision tree showing level 5 choices leading to level 10 continuations"
          caption="Original StardewProfit decision diagram. It separates level 5 choices from their level 10 continuations and records the profession mechanics reviewed for this guide."
        />

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Core profession comparisons</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm text-[#4a321e]">
              <thead>
                <tr className="border-b-2 border-[#7c4d2e]/40">
                  <th className="px-2 py-2 font-semibold">Category</th>
                  <th className="px-2 py-2 font-semibold">Level 5 choice</th>
                  <th className="px-2 py-2 font-semibold">Level 10 continuation</th>
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
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Read percentage bonuses correctly</h2>
          <p className="mt-3 text-sm leading-7 text-[#5f4228]/90">
            Fisher and Angler are the same skill path. A fish with a 1,000g sale value becomes 1,250g with Fisher or
            1,500g after choosing Angler; the bonuses do not stack into 1,750g. Geologist also does not increase the
            general chance of finding a gem. It gives mining nodes a chance to produce gems in pairs.
          </p>
          <p className="mt-3 text-sm leading-7 text-[#5f4228]/90">
            If your farm changes direction, the Statue of Uncertainty in the Sewers lets you pay 10,000g to change a
            skill&apos;s professions. Treat that cost as a reset fee when comparing a short early-game bonus with a stronger
            late-game path.
          </p>
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

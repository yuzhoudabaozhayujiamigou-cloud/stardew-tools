import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { TrackLink } from "@/components/TrackLink";
import cropsData from "@/data/crops.json";
import { calculateSeasonProfit, type Crop, type Season } from "@/lib/calculateProfit";
import { SITE_ORIGIN } from "@/lib/site";

const PAGE_PATH = "/crops";
const PAGE_TITLE = "Stardew Valley Crops Profit Guide — Best Crops by Season";
const PAGE_DESCRIPTION =
  "Compare Stardew Valley crop profits by season. Find the most profitable crops for Spring, Summer, Fall and Greenhouse with our calculator.";

const CARD_CLASS =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";
const PRIMARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#5c8a3e] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4e7a32]";
const SECONDARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-white/60 px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-white/80";

const crops = cropsData as Crop[];

type RankedCrop = {
  id: string;
  name: string;
  goldPerDay: number;
  totalProfit: number;
  harvestCount: number;
};

const SEASON_CONFIG = [
  {
    season: "spring" as const,
    label: "Spring",
    seasonDays: 28,
    description: "Best base-quality picks for the first season's full 28-day window.",
  },
  {
    season: "summer" as const,
    label: "Summer",
    seasonDays: 28,
    description: "High-velocity summer crops ranked by per-day profit over a full season.",
  },
  {
    season: "fall" as const,
    label: "Fall",
    seasonDays: 28,
    description: "Fall standouts sorted by direct-sale profit/day with regrow timing included.",
  },
  {
    season: "greenhouse" as const,
    label: "Greenhouse",
    seasonDays: 56,
    description: "Greenhouse ranking uses a 56-day horizon to better reflect longer cycle crops.",
  },
] as const;

const FAQ_ITEMS = [
  {
    question: "How are these crop rankings calculated?",
    answer:
      "Each ranking uses the same profit math as the site calculator: base quality, no Tiller bonus, and harvest timing based on growth and regrow days from the crop dataset.",
  },
  {
    question: "Why does the greenhouse table use 56 days?",
    answer:
      "A longer 56-day window gives a fairer comparison for crops with long first harvest times and repeat harvest cycles, which better matches greenhouse planning.",
  },
  {
    question: "Do these numbers include kegs or preserves jars?",
    answer:
      "No. These tables show direct crop selling profit only. Use the calculator presets to compare artisan processing setups.",
  },
  {
    question: "Can I run a custom scenario with days left in season?",
    answer:
      "Yes. Open the calculator and set your season, days left, profession, and quality to get a ranking tailored to your farm state.",
  },
] as const;

const GOLD_PER_DAY_FORMATTER = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const TOTAL_GOLD_FORMATTER = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: `${SITE_ORIGIN}${PAGE_PATH}`,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_ORIGIN}${PAGE_PATH}`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

function getTopCropsBySeason(season: Season, seasonDays: number): RankedCrop[] {
  return crops
    .filter((crop) => season === "greenhouse" || crop.season.includes(season))
    .map((crop) => {
      const result = calculateSeasonProfit({
        crop,
        seasonDays,
        quality: "normal",
        hasTiller: false,
        profession: "none",
      });

      return {
        id: crop.id,
        name: crop.name,
        goldPerDay: result.goldPerDay,
        totalProfit: result.totalProfit,
        harvestCount: result.harvestCount,
      };
    })
    .sort((left, right) => right.goldPerDay - left.goldPerDay)
    .slice(0, 5);
}

const RANKINGS = SEASON_CONFIG.map((config) => ({
  ...config,
  rows: getTopCropsBySeason(config.season, config.seasonDays),
}));

export default function CropsProfitGuidePage() {
  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <FaqJsonLd faqs={FAQ_ITEMS.map((item) => ({ ...item }))} />

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Crops Profit Guide", href: PAGE_PATH },
          ]}
        />

        <header className={CARD_CLASS}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Season Profit Guide</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">{PAGE_TITLE}</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Use this guide to compare crop profit per day across Spring, Summer, Fall, and Greenhouse planning. These
            rankings are generated from the same crop dataset as our calculator.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <TrackLink href="/calculator" className={PRIMARY_CTA_CLASS} trackEvent="crops_guide_open_calculator">
              Open Profit Calculator
            </TrackLink>
            <TrackLink href="/blog" className={SECONDARY_CTA_CLASS} trackEvent="crops_guide_open_blog">
              Read Blog Guides
            </TrackLink>
            <TrackLink
              href="/calculator?preset=best-spring-10-days-left"
              className={SECONDARY_CTA_CLASS}
              trackEvent="crops_guide_open_spring_preset"
            >
              Try Spring Preset
            </TrackLink>
          </div>
        </header>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Top 5 crops by season</h2>
          <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
            Profit/day numbers assume base quality crop sales. Seasonal tables use 28 days; greenhouse uses 56 days.
          </p>
          <div className="mt-6 space-y-6">
            {RANKINGS.map((group) => (
              <section key={group.season} className="rounded-2xl border border-[#8a5b3a]/25 bg-[#fff8e8]/90 p-4">
                <h3 className="text-lg font-semibold text-[#4a321e] sm:text-xl">
                  {group.label} top crops ({group.seasonDays} days)
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">{group.description}</p>
                <div className="mt-3 overflow-x-auto">
                  <table className="min-w-full border-collapse text-left text-sm text-[#4a321e]">
                    <thead>
                      <tr className="border-b-2 border-[#7c4d2e]/40">
                        <th className="px-2 py-2 font-semibold">Rank</th>
                        <th className="px-2 py-2 font-semibold">Crop</th>
                        <th className="px-2 py-2 font-semibold">Gold/Day</th>
                        <th className="px-2 py-2 font-semibold">Total Profit</th>
                        <th className="px-2 py-2 font-semibold">Harvests</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.rows.map((row, index) => (
                        <tr key={`${group.season}-${row.id}`} className="border-b border-[#7c4d2e]/20">
                          <td className="px-2 py-2 font-semibold">{index + 1}</td>
                          <td className="px-2 py-2">{row.name}</td>
                          <td className="px-2 py-2 text-[#1f6b2e]">
                            {GOLD_PER_DAY_FORMATTER.format(row.goldPerDay)}g/day
                          </td>
                          <td className="px-2 py-2">{TOTAL_GOLD_FORMATTER.format(row.totalProfit)}g</td>
                          <td className="px-2 py-2">{row.harvestCount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">How to use these rankings</h2>
          <div className="mt-3 grid gap-5 text-sm leading-7 text-[#5f4228]/90 lg:grid-cols-3">
            <div>
              <h3 className="font-semibold text-[#4a321e]">1. Start with time remaining</h3>
              <p className="mt-1">
                A full-season ranking is useful on day 1, but it can mislead you late in the season. A crop that needs
                13 days to mature may be a poor choice with 10 days left even if its full-season total looks strong.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#4a321e]">2. Check cash-flow needs</h3>
              <p className="mt-1">
                Gold/day measures return over the planning window, not whether you can afford the seeds today. Use the
                <Link className="ml-1 underline" href="/calculator">calculator</Link> to compare a short-term seed budget and
                a longer greenhouse plan separately.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#4a321e]">3. Account for processing</h3>
              <p className="mt-1">
                These tables show direct crop sales only. If Kegs or Preserves Jars are part of your plan, use the
                <Link className="ml-1 underline" href="/tools/keg-vs-preserves-jar">machine comparison</Link> after selecting
                a crop so machine time does not become the hidden bottleneck.
              </p>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border-2 border-[#7c4d2e]/45 bg-white/55 p-4 text-sm leading-7 text-[#5f4228]/85">
            <strong className="text-[#4a321e]">Method note:</strong> the ranking uses the same crop dataset and
            harvest-cycle function as the calculator. It assumes normal quality, no Tiller bonus, and direct sale
            value. Regrowing crops are credited for each harvest that fits inside the selected 28-day or 56-day
            window; crops that cannot finish before the window ends are not treated as profitable just because their
            sticker price is high.
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Common planning mistakes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5f4228]/90">
            <li>Comparing total gold without dividing by the days and tiles committed to the crop.</li>
            <li>Planting a crop on the last possible day without leaving time for the harvest or a replant.</li>
            <li>Using a greenhouse ranking for a seasonal field where the season-change deadline still applies.</li>
            <li>Ignoring seed cost when cash is tight, then missing a tool upgrade or a festival purchase.</li>
          </ul>
          <p className="mt-4 text-sm leading-7 text-[#5f4228]/85">
            Treat the table as a shortlist, not a command. Your best choice is the crop that fits your days left,
            seed budget, watering capacity, and machine queue at the same time.
          </p>
        </section>

        <section id="faq" className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">FAQ</h2>
          <div className="mt-4 space-y-3">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8] p-4">
                <summary className="cursor-pointer font-semibold text-[#4a321e]">{item.question}</summary>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Next steps</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Use your real farm inputs to get a personalized ranking, then compare quick presets for short-season
            decisions.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <TrackLink href="/calculator" className={PRIMARY_CTA_CLASS} trackEvent="crops_guide_next_steps_calculator">
              Go to Calculator
            </TrackLink>
            <TrackLink
              href="/calculator?preset=best-fall-10-days-left"
              className={SECONDARY_CTA_CLASS}
              trackEvent="crops_guide_next_steps_fall_preset"
            >
              Compare Fall 10-Day Preset
            </TrackLink>
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}

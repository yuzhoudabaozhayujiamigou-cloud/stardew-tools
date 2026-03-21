import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";
import cropsData from "@/data/crops.json";

type CropRecord = {
  id: string;
  name: string;
  seedCost: number;
  sellPrice: number;
  growthDays: number;
};

type WinterOption = {
  name: string;
  sellPrice: number;
  growthDays: number;
  goldPerDay: number;
};

const CARD_CLASS =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";

const PRIMARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#5c8a3e] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4e7a32]";

const SECONDARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-white/60 px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-white/80";

const winterSeedCrop = (cropsData as CropRecord[]).find((crop) => crop.id === "winter_seed");

const WINTER_OPTIONS: WinterOption[] = winterSeedCrop
  ? [
      {
        name: "Winter Seeds",
        sellPrice: winterSeedCrop.sellPrice,
        growthDays: winterSeedCrop.growthDays,
        goldPerDay: (winterSeedCrop.sellPrice - winterSeedCrop.seedCost) / winterSeedCrop.growthDays,
      },
    ]
  : [];

const WINTER_RELATED_POSTS = [
  { label: "Winter Seeds Profit Guide", href: "/blog/winter-seeds-profit-guide" },
  { label: "Best Greenhouse Crops", href: "/blog/best-greenhouse-crops-stardew-valley" },
  { label: "Greenhouse Layout Guide", href: "/blog/greenhouse-layout-guide" },
  { label: "Greenhouse Mastery Guide", href: "/blog/stardew-valley-greenhouse-mastery-guide" },
];

export const metadata: Metadata = {
  title: "Best Winter Crops Stardew Valley - Winter Seeds Strategy",
  description:
    "Need the best winter crops Stardew Valley strategy? Winter has no regular outdoor crops, so use Winter Seeds, greenhouse farming, and calculator planning for profit.",
  alternates: {
    canonical: "/best-crops/winter",
  },
};

export default function BestWinterCropsPage() {
  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <header className={CARD_CLASS}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Winter Strategy</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Best Winter Crops in Stardew Valley
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            In vanilla Stardew Valley, winter has no normal outdoor crops from Pierre. Your reliable winter outdoor
            option is Winter Seeds, while your real profit scaling usually comes from greenhouse planting.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Use winter to stabilize income, process artisan goods, and set up year-round greenhouse production.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/calculator?season=winter&daysLeft=28" className={PRIMARY_CTA_CLASS}>
              Plan Winter Seeds in Calculator
            </Link>
            <Link href="/calculator?preset=ancient-vs-starfruit-greenhouse" className={SECONDARY_CTA_CLASS}>
              Open Greenhouse Preset
            </Link>
          </div>
        </header>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Winter options by gold/day estimate</h2>
          <p className="mt-3 text-sm leading-6 text-[#5f4228]/90">
            Formula used: <span className="font-semibold text-[#4a321e]">(sellPrice - seedCost) / growthDays</span>.
            Winter Seeds is a forage conversion path, not a standard seed-shop crop line.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm text-[#4a321e]">
              <thead>
                <tr className="border-b-2 border-[#7c4d2e]/40">
                  <th className="px-2 py-2 font-semibold">Rank</th>
                  <th className="px-2 py-2 font-semibold">Crop Name</th>
                  <th className="px-2 py-2 font-semibold">Sell Price</th>
                  <th className="px-2 py-2 font-semibold">Growth Days</th>
                  <th className="px-2 py-2 font-semibold">Gold/Day estimate</th>
                </tr>
              </thead>
              <tbody>
                {WINTER_OPTIONS.length > 0 ? (
                  WINTER_OPTIONS.map((option, index) => (
                    <tr key={option.name} className="border-b border-[#7c4d2e]/20">
                      <td className="px-2 py-2 font-semibold">{index + 1}</td>
                      <td className="px-2 py-2">{option.name}</td>
                      <td className="px-2 py-2">{option.sellPrice}g</td>
                      <td className="px-2 py-2">{option.growthDays} days</td>
                      <td className="px-2 py-2">{option.goldPerDay.toFixed(2)}g</td>
                    </tr>
                  ))
                ) : (
                  <tr className="border-b border-[#7c4d2e]/20">
                    <td className="px-2 py-2 font-semibold">1</td>
                    <td className="px-2 py-2">Winter Seeds</td>
                    <td className="px-2 py-2">N/A</td>
                    <td className="px-2 py-2">N/A</td>
                    <td className="px-2 py-2">N/A</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Related Winter and Greenhouse guides</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {WINTER_RELATED_POSTS.map((post) => (
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

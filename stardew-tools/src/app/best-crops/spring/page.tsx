import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";
import cropsData from "@/data/crops.json";

type CropRecord = {
  id: string;
  name: string;
  season: string[];
  seedCost: number;
  sellPrice: number;
  growthDays: number;
};

type RankedCrop = {
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

const SPRING_TOP_CROPS: RankedCrop[] = (cropsData as CropRecord[])
  .filter((crop) => crop.season.includes("spring"))
  .map((crop) => ({
    name: crop.name,
    sellPrice: crop.sellPrice,
    growthDays: crop.growthDays,
    goldPerDay: (crop.sellPrice - crop.seedCost) / crop.growthDays,
  }))
  .sort((left, right) => right.goldPerDay - left.goldPerDay)
  .slice(0, 8);

const SPRING_RELATED_POSTS = [
  { label: "Best Spring Crops (10 Days Left)", href: "/blog/best-spring-crops-10-days-left" },
  { label: "Year 1 Spring Crops Profit Guide", href: "/blog/year-1-spring-crops-profit-guide" },
  { label: "Spring Profit Guide 2026", href: "/blog/stardew-valley-spring-profit-guide-2026" },
  { label: "Strawberry Day 13 Timing", href: "/blog/strawberry-spring-day-13-too-late" },
];

export const metadata: Metadata = {
  title: "Best Spring Crops Stardew Valley - Profit Ranking Guide",
  description:
    "Find the best spring crops Stardew Valley players can plant for profit. Compare sell price, growth days, and gold/day estimates, then test plans in our calculator.",
  alternates: {
    canonical: "/best-crops/spring",
  },
};

export default function BestSpringCropsPage() {
  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <header className={CARD_CLASS}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Spring Ranking</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Best Spring Crops in Stardew Valley
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Spring is your first major profit window, so crop speed and margin matter immediately. This ranking uses
            crop data from our calculator dataset and compares each crop with a simple gold/day estimate.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Formula used: <span className="font-semibold text-[#4a321e]">(sellPrice - seedCost) / growthDays</span>.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/calculator" className={PRIMARY_CTA_CLASS}>
              Open Profit Calculator
            </Link>
            <Link href="/blog/best-crops-every-season" className={SECONDARY_CTA_CLASS}>
              Best Crops Every Season
            </Link>
          </div>
        </header>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Top Spring crops by gold/day estimate</h2>
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
                {SPRING_TOP_CROPS.map((crop, index) => (
                  <tr key={crop.name} className="border-b border-[#7c4d2e]/20">
                    <td className="px-2 py-2 font-semibold">{index + 1}</td>
                    <td className="px-2 py-2">{crop.name}</td>
                    <td className="px-2 py-2">{crop.sellPrice}g</td>
                    <td className="px-2 py-2">{crop.growthDays} days</td>
                    <td className="px-2 py-2">{crop.goldPerDay.toFixed(2)}g</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Related Spring guides</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {SPRING_RELATED_POSTS.map((post) => (
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

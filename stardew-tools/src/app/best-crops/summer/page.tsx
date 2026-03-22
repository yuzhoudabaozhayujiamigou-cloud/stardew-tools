import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
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

const SUMMER_TOP_CROPS: RankedCrop[] = (cropsData as CropRecord[])
  .filter((crop) => crop.season.includes("summer"))
  .map((crop) => ({
    name: crop.name,
    sellPrice: crop.sellPrice,
    growthDays: crop.growthDays,
    goldPerDay: (crop.sellPrice - crop.seedCost) / crop.growthDays,
  }))
  .sort((left, right) => right.goldPerDay - left.goldPerDay)
  .slice(0, 8);

const SUMMER_RELATED_POSTS = [
  { label: "Best Summer Crops (Quick Answer)", href: "/blog/best-summer-crops-quick-answer" },
  { label: "Summer Day 1 Maximum Profit", href: "/blog/stardew-valley-summer-day-1-maximum-profit-guide" },
  { label: "Summer Day 15 Planting Guide", href: "/blog/stardew-valley-summer-day-15-profit-guide" },
  { label: "Summer Day 20 Is It Too Late?", href: "/blog/stardew-valley-summer-day-20-is-it-too-late" },
];

const PAGE_PATH = "/best-crops/summer";

export const metadata: Metadata = {
  title: "Best Summer Crops Stardew Valley - Profit Ranking Guide",
  description:
    "Compare the best summer crops Stardew Valley farmers can use for profit. See sell price, growth days, and gold/day estimates before locking your calculator plan.",
  alternates: {
    canonical: PAGE_PATH,
  },
};

export default function BestSummerCropsPage() {
  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Best Crops", href: "/best-crops" },
            { name: "Summer", href: PAGE_PATH },
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
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Best Crops",
                  item: "https://www.stardewprofit.com/best-crops",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Best Summer Crops in Stardew Valley",
                  item: "https://www.stardewprofit.com/best-crops/summer",
                },
              ],
            }),
          }}
        />

        <header className={CARD_CLASS}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Summer Ranking</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Best Summer Crops in Stardew Valley
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Summer is where your farm can scale quickly if you pick high-margin crops early. This page ranks summer
            crops from our calculator dataset using a simple gold/day estimate for fast comparison.
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
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Top Summer crops by gold/day estimate</h2>
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
                {SUMMER_TOP_CROPS.map((crop, index) => (
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
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Related Summer guides</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {SUMMER_RELATED_POSTS.map((post) => (
              <Link key={post.href} href={post.href} className={SECONDARY_CTA_CLASS}>
                {post.label}
              </Link>
            ))}
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-lg font-semibold text-[#4a321e] sm:text-xl">Related Pages</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/calculator" className={SECONDARY_CTA_CLASS}>
              Profit Calculator
            </Link>
            <Link href="/best-crops/spring" className={SECONDARY_CTA_CLASS}>
              Best Spring Crops
            </Link>
            <Link href="/best-crops/fall" className={SECONDARY_CTA_CLASS}>
              Best Fall Crops
            </Link>
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}

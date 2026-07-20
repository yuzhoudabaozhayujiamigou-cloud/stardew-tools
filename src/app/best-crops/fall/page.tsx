import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import { SiteFooter } from "@/components/SiteFooter";
import cropsData from "@/data/crops.json";
import { calculateSeasonProfit, type Crop } from "@/lib/calculateProfit";

type RankedCrop = {
  name: string;
  harvestCount: number;
  totalProfit: number;
  goldPerDay: number;
};

const CARD_CLASS =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";

const PRIMARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#5c8a3e] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4e7a32]";

const SECONDARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-white/60 px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-white/80";

const FALL_TOP_CROPS: RankedCrop[] = (cropsData as Crop[])
  .filter((crop) => crop.season.includes("fall"))
  .map((crop) => {
    const result = calculateSeasonProfit({
      crop,
      seasonDays: 28,
      quality: "normal",
      hasTiller: false,
      profession: "none",
    });

    return {
      name: crop.name,
      harvestCount: result.harvestCount,
      totalProfit: result.totalProfit,
      goldPerDay: result.goldPerDay,
    };
  })
  .sort((left, right) => right.goldPerDay - left.goldPerDay)
  .slice(0, 8);

const FALL_RELATED_POSTS = [
  { label: "Best Fall Crops (Quick Answer)", href: "/blog/best-fall-crops-quick-answer" },
  { label: "Best Crops with 10 Days Left", href: "/blog/best-crops-10-days-left-quick-answer" },
  { label: "Best Crops with 7 Days Left", href: "/blog/best-crops-7-days-left-before-season-switch" },
  { label: "Stardew Year 1 Profit Guide", href: "/blog/stardew-valley-year-1-profit-guide-complete" },
];

const PAGE_PATH = "/best-crops/fall";

export const metadata: Metadata = {
  title: "Best Fall Crops Stardew Valley - Profit Ranking Guide",
  description:
    "See the best fall crops Stardew Valley players can run for profit. Compare sell price, growth days, and gold/day estimates to plan your fall planting routes.",
  alternates: {
    canonical: PAGE_PATH,
  },
};

export default function BestFallCropsPage() {
  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Best Crops", href: "/best-crops" },
            { name: "Fall", href: PAGE_PATH },
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
                  name: "Best Fall Crops in Stardew Valley",
                  item: "https://www.stardewprofit.com/best-crops/fall",
                },
              ],
            }),
          }}
        />

        <header className={CARD_CLASS}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Fall Ranking</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Best Fall Crops in Stardew Valley
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Fall is your last major outdoor profit season before winter, so each crop decision matters. This ranking
            compares fall crops with the same 28-day harvest-cycle model used by the main calculator.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Assumptions: normal quality, direct crop sales, no Tiller bonus, and planting on Fall 1.
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
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Top Fall crops over a full 28-day season</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm text-[#4a321e]">
              <thead>
                <tr className="border-b-2 border-[#7c4d2e]/40">
                  <th className="px-2 py-2 font-semibold">Rank</th>
                  <th className="px-2 py-2 font-semibold">Crop Name</th>
                  <th className="px-2 py-2 font-semibold">Harvests</th>
                  <th className="px-2 py-2 font-semibold">Total Profit</th>
                  <th className="px-2 py-2 font-semibold">Gold/Day</th>
                </tr>
              </thead>
              <tbody>
                {FALL_TOP_CROPS.map((crop, index) => (
                  <tr key={crop.name} className="border-b border-[#7c4d2e]/20">
                    <td className="px-2 py-2 font-semibold">{index + 1}</td>
                    <td className="px-2 py-2">{crop.name}</td>
                    <td className="px-2 py-2">{crop.harvestCount}</td>
                    <td className="px-2 py-2">{crop.totalProfit.toLocaleString()}g</td>
                    <td className="px-2 py-2">{crop.goldPerDay.toFixed(2)}g</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-6 text-[#5f4228]/85">
            Regrowing crops receive credit for every harvest that fits before Winter 1. A late-season planting will
            produce a different order, so use the calculator when fewer than 28 days remain.
          </p>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Choose by Fall objective</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#8a5b3a]/35 bg-white/55 p-4">
              <h3 className="font-semibold text-[#4a321e]">Immediate cash</h3>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/85">Favor a crop with an early first harvest when you need tool or building money before the season ends.</p>
            </div>
            <div className="rounded-2xl border border-[#8a5b3a]/35 bg-white/55 p-4">
              <h3 className="font-semibold text-[#4a321e]">Full-season return</h3>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/85">Use the table when planting on day 1 and you can maintain every tile through all scheduled harvests.</p>
            </div>
            <div className="rounded-2xl border border-[#8a5b3a]/35 bg-white/55 p-4">
              <h3 className="font-semibold text-[#4a321e]">Artisan stock</h3>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/85">Check Keg and Jar capacity before choosing a crop whose real value depends on processing after Fall.</p>
            </div>
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Related Fall guides</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {FALL_RELATED_POSTS.map((post) => (
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
            <Link href="/best-crops/summer" className={SECONDARY_CTA_CLASS}>
              Best Summer Crops
            </Link>
            <Link href="/best-crops/greenhouse" className={SECONDARY_CTA_CLASS}>
              Best Greenhouse Crops
            </Link>
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}

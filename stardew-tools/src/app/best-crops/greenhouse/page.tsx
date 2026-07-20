import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import { EditorialReview } from "@/components/EditorialReview";
import { GuideVisual } from "@/components/GuideVisual";
import { SiteFooter } from "@/components/SiteFooter";
import cropsData from "@/data/crops.json";
import { calculateSeasonProfit, type Crop } from "@/lib/calculateProfit";
import { buildArticleJsonLd, EDITORIAL_AUTHOR_NAME } from "@/lib/editorial";

type GreenhouseCropRanking = {
  name: string;
  harvestCount: number;
  totalProfit: number;
  goldPerDay: number;
  note: string;
};

const CARD_CLASS =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";

const PRIMARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#5c8a3e] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4e7a32]";

const SECONDARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-white/60 px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-white/80";

const GREENHOUSE_DAYS = 112;
const GREENHOUSE_TILES = 116;

const GREENHOUSE_RANKING: GreenhouseCropRanking[] = (cropsData as Crop[])
  .map((crop) => {
    const result = calculateSeasonProfit({
      crop,
      seasonDays: 28,
      quality: "normal",
      hasTiller: false,
      profession: "none",
      environment: "greenhouse",
      crossSeasonDays: GREENHOUSE_DAYS,
    });

    return {
      name: crop.name,
      harvestCount: result.harvestCount,
      totalProfit: result.totalProfit,
      goldPerDay: result.goldPerDay,
      note: crop.isRegrowing
        ? `Plant once, then harvest every ${crop.regrowDays} days after the first crop.`
        : `Replant after each ${result.effectiveGrowthDays}-day growth cycle; seed cost is charged each cycle.`,
    };
  })
  .filter((crop) => crop.harvestCount > 0)
  .sort((left, right) => right.goldPerDay - left.goldPerDay)
  .slice(0, 8);

const TOP_FULL_GREENHOUSE_PROFIT = GREENHOUSE_RANKING[0].totalProfit * GREENHOUSE_TILES;

const GREENHOUSE_RELATED_POSTS = [
  { label: "Best Greenhouse Crops (Quick Answer)", href: "/blog/best-greenhouse-crops-quick-answer" },
  { label: "Best Greenhouse Crops (Deep Guide)", href: "/blog/best-greenhouse-crops-stardew-valley" },
  { label: "Greenhouse Layout Guide", href: "/blog/greenhouse-layout-guide" },
  { label: "Ancient Fruit vs Starfruit", href: "/blog/ancient-fruit-vs-starfruit-quick-answer" },
];

const PAGE_PATH = "/best-crops/greenhouse";
const PAGE_TITLE = "Best Greenhouse Crops Stardew Valley - Max Profit Year-Round";
const PAGE_DESCRIPTION =
  "Compare Stardew Valley greenhouse crops with a reproducible 112-day direct-sale model, then separate crop output from artisan machine capacity.";
const PAGE_IMAGE = "/visuals/greenhouse-112-day-model.svg";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  authors: [{ name: EDITORIAL_AUTHOR_NAME, url: "/about#editorial-team" }],
  alternates: {
    canonical: PAGE_PATH,
  },
};

export default function BestGreenhouseCropsPage() {
  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Best Crops", href: "/best-crops" },
            { name: "Greenhouse", href: PAGE_PATH },
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
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Best Crops",
                  item: "https://www.stardewprofit.com/best-crops",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Best Greenhouse Crops in Stardew Valley",
                  item: "https://www.stardewprofit.com/best-crops/greenhouse",
                },
              ],
            }),
          }}
        />

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
            This ranking uses a reproducible 112-day direct-sale model. Artisan goods are shown as a separate decision
            because crop output does not become wine or jelly unless your machines can process it.
          </p>
          <EditorialReview gameVersion="1.6" />
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/calculator?preset=ancient-vs-starfruit-greenhouse" className={PRIMARY_CTA_CLASS}>
              Open Greenhouse Preset
            </Link>
            <Link href="/calculator" className={SECONDARY_CTA_CLASS}>
              Open Profit Calculator
            </Link>
          </div>
        </header>

        <GuideVisual
          src={PAGE_IMAGE}
          alt="Greenhouse 112-day calculation flow from seed plan to gold per day and machine capacity"
          caption="Original StardewProfit calculation visual. It documents the exact ranking sequence and keeps artisan machine throughput separate from direct crop sales."
        />

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Top greenhouse crops over 112 days</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#5f4228]/90">
            Assumptions: one tile, normal quality, direct crop sales, no Tiller bonus, no fertilizer, and an empty
            greenhouse planted on day 1. Regrowing crops pay for one seed; replant crops pay for every cycle.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm text-[#4a321e]">
              <thead>
                <tr className="border-b-2 border-[#7c4d2e]/40">
                  <th className="px-2 py-2 font-semibold">Rank</th>
                  <th className="px-2 py-2 font-semibold">Crop</th>
                  <th className="px-2 py-2 font-semibold">Harvests</th>
                  <th className="px-2 py-2 font-semibold">112-day profit</th>
                  <th className="px-2 py-2 font-semibold">Gold/day</th>
                  <th className="px-2 py-2 font-semibold">Growth plan</th>
                </tr>
              </thead>
              <tbody>
                {GREENHOUSE_RANKING.map((entry, index) => (
                  <tr key={entry.name} className="border-b border-[#7c4d2e]/20">
                    <td className="px-2 py-2 font-semibold">{index + 1}</td>
                    <td className="px-2 py-2">{entry.name}</td>
                    <td className="px-2 py-2">{entry.harvestCount}</td>
                    <td className="px-2 py-2">{entry.totalProfit.toLocaleString()}g / tile</td>
                    <td className="px-2 py-2">{entry.goldPerDay.toFixed(2)}g</td>
                    <td className="px-2 py-2">{entry.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">How the greenhouse calculation works</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#5f4228]/90">
            <li>Count every harvest that fits after the crop&apos;s first growth period.</li>
            <li>Multiply harvests by the normal-quality sale price and yield per harvest.</li>
            <li>Subtract one seed for a regrowing crop or one seed for every replant cycle.</li>
            <li>Divide the 112-day profit by 112 to make crops with different schedules comparable.</li>
          </ol>
          <div className="mt-5 rounded-lg border-2 border-[#7c4d2e]/45 bg-[#fff8e8] p-4 text-sm leading-7 text-[#5f4228]/90">
            <strong className="text-[#4a321e]">Scale check:</strong> filling all {GREENHOUSE_TILES} standard crop tiles
            with the first-ranked direct-sale crop would produce about {TOP_FULL_GREENHOUSE_PROFIT.toLocaleString()}g
            over this first 112-day window before fertilizer, professions, or processing. A mature greenhouse that has
            already finished its first growth period needs a separate steady-state comparison.
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Direct sale and artisan profit are different plans</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            <div className="rounded-lg border border-[#8a5b3a]/35 bg-white/55 p-4">
              <h3 className="font-semibold text-[#4a321e]">Crop capacity</h3>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/85">The table answers how much one planted tile produces before machines.</p>
            </div>
            <div className="rounded-lg border border-[#8a5b3a]/35 bg-white/55 p-4">
              <h3 className="font-semibold text-[#4a321e]">Machine capacity</h3>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/85">Kegs and jars can only process the items that fit through their cycle time.</p>
            </div>
            <div className="rounded-lg border border-[#8a5b3a]/35 bg-white/55 p-4">
              <h3 className="font-semibold text-[#4a321e]">Player capacity</h3>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/85">Replanting and frequent harvests can lose value when the routine is not maintained.</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-[#5f4228]/90">
            After choosing a raw crop, use the <Link className="font-semibold underline" href="/tools/keg-vs-preserves-jar">Keg vs Preserves Jar comparison</Link> and
            your real machine count. Do not apply an artisan multiplier to every harvest when most of the crop will wait
            in a chest or be sold raw.
          </p>
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

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-lg font-semibold text-[#4a321e] sm:text-xl">Related Pages</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/calculator" className={SECONDARY_CTA_CLASS}>
              Profit Calculator
            </Link>
            <Link href="/tools/artisan-profit" className={SECONDARY_CTA_CLASS}>
              Artisan Profit Guide
            </Link>
            <Link href="/best-crops/spring" className={SECONDARY_CTA_CLASS}>
              Best Spring Crops
            </Link>
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}

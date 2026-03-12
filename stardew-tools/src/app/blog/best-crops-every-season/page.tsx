import type { Metadata } from "next";

import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogReadNextPosts } from "@/lib/read-next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.stardewprofit.com/blog/best-crops-every-season",
  },
  openGraph: {
    type: "article",
    publishedTime: "2026-02-28T00:00:00+08:00",
    modifiedTime: "2026-02-28T00:00:00+08:00",
    url: "https://www.stardewprofit.com/blog/best-crops-every-season",
    title:
      "Best Crops for Every Season in Stardew Valley (Complete 2026 Guide)",
  },
  title:
    "Best Crops for Every Season in Stardew Valley (Complete 2026 Guide) | StardewProfit",
  description:
    "A complete Stardew Valley crop guide for Spring, Summer, Fall, and Winter. See the best crops each season with gold/day, plus Greenhouse picks and a quick comparison table.",
  keywords: [
    "best crops stardew valley",
    "best crops each season stardew",
    "stardew valley crop guide",
    "spring crops",
    "summer crops",
    "fall crops",
    "winter seeds",
    "greenhouse crops",
  ],
};

const fromPath = "/blog/best-crops-every-season";

type CropRow = {
  crop: string;
  goldPerDay: string;
  notes: string;
  href?: string;
};

const springTop5: CropRow[] = [
  {
    crop: "Strawberry",
    goldPerDay: "High",
    notes:
      "Festival seed (Spring 13). Insane after first harvest; scales with sprinklers.",
    href: "/blog/strawberry-spring-day-13-too-late",
  },
  {
    crop: "Potato",
    goldPerDay: "Very good",
    notes: "Early game workhorse; chance for extra potatoes helps profit/day.",
  },
  {
    crop: "Cauliflower",
    goldPerDay: "Good (burst)",
    notes: "Slow but high value; great if planted early and processed later.",
  },
  {
    crop: "Rhubarb",
    goldPerDay: "Great (Desert)",
    notes:
      "Needs Oasis access; strong raw profit and solid processing candidate.",
  },
  {
    crop: "Parsnip",
    goldPerDay: "Surprisingly solid",
    notes:
      "Fast cycle makes it useful when you have limited days left or limited capital.",
  },
];

const summerTop5: CropRow[] = [
  {
    crop: "Blueberry",
    goldPerDay: "Very high",
    notes:
      "Multiple berries per harvest; beginner-friendly and sprinkler-friendly.",
  },
  {
    crop: "Starfruit",
    goldPerDay: "Top-tier",
    notes: "Highest-value crop; best when you can keg into wine (Artisan).",
    href: "/blog/ancient-fruit-vs-starfruit-quick-answer",
  },
  {
    crop: "Red Cabbage",
    goldPerDay: "High (situational)",
    notes: "Best when you can plant early; also relevant for bundles.",
  },
  {
    crop: "Melon",
    goldPerDay: "Good",
    notes: "High value per harvest; strong for preserves jars early.",
  },
  {
    crop: "Hops",
    goldPerDay: "Insane (labor/kegs)",
    notes:
      "Daily harvest after growth; turns into Pale Ale in Kegs for huge value.",
    href: "/blog/hops-vs-starfruit-quick-answer",
  },
];

const fallTop5: CropRow[] = [
  {
    crop: "Cranberry",
    goldPerDay: "Very high",
    notes: "Repeat harvest, easy profit/day, great for big fields.",
  },
  {
    crop: "Pumpkin",
    goldPerDay: "High (processing)",
    notes: "Best as jelly/pickles; huge value with jars and Artisan.",
  },
  {
    crop: "Grape",
    goldPerDay: "High (kegs)",
    notes: "Fast repeat harvest; can be steady wine/juice input.",
  },
  {
    crop: "Artichoke",
    goldPerDay: "Good",
    notes: "Solid base profit; nice midgame choice if you want variety.",
  },
  {
    crop: "Amaranth",
    goldPerDay: "Decent",
    notes:
      "Good backup crop when you plant late or need bundle/quest flexibility.",
  },
];

const quickComparison: {
  season: "Spring" | "Summer" | "Fall" | "Winter";
  items: CropRow[];
}[] = [
  {
    season: "Spring",
    items: [
      {
        crop: "Strawberry",
        goldPerDay: "High",
        notes: "Best overall once you hit Spring 13; multiple harvests.",
      },
      {
        crop: "Potato",
        goldPerDay: "Very good",
        notes: "Great early profit/day and low effort.",
      },
      {
        crop: "Rhubarb",
        goldPerDay: "Great",
        notes: "Desert unlock; strong raw value.",
      },
    ],
  },
  {
    season: "Summer",
    items: [
      {
        crop: "Blueberry",
        goldPerDay: "Very high",
        notes: "Beginner king: easy, repeat harvest, scales with sprinklers.",
      },
      {
        crop: "Starfruit",
        goldPerDay: "Top-tier",
        notes: "Best when kegged into wine; premium burst.",
      },
      {
        crop: "Hops",
        goldPerDay: "Extremely high",
        notes: "Daily harvest + Pale Ale chain; needs Kegs + time.",
      },
    ],
  },
  {
    season: "Fall",
    items: [
      {
        crop: "Cranberry",
        goldPerDay: "Very high",
        notes: "Reliable repeat harvest; easy field profit.",
      },
      {
        crop: "Pumpkin",
        goldPerDay: "High",
        notes: "Best processed in jars; strong per-tile value.",
      },
      {
        crop: "Grape",
        goldPerDay: "High",
        notes: "Steady repeat harvest; good processing input.",
      },
    ],
  },
  {
    season: "Winter",
    items: [
      {
        crop: "Winter Seeds",
        goldPerDay: "Varies",
        notes:
          "Foraging-based farming; profits scale with fields + sprinklers.",
      },
      {
        crop: "Crystal Fruit",
        goldPerDay: "Good",
        notes: "Often the best Winter Seeds outcome; consider preserving.",
      },
      {
        crop: "Infrastructure",
        goldPerDay: "Indirect",
        notes:
          "Winter is where you build Kegs/Jars/Sprinklers to explode next season.",
      },
    ],
  },
];

const faqEn = [
  {
    question: "What are the best crops in Stardew Valley for each season?",
    answer:
      "Spring: Strawberry (after Spring 13), Potato, Rhubarb. Summer: Blueberry, Starfruit, Hops. Fall: Cranberry, Pumpkin, Grape. Winter: Winter Seeds (plus upgrading tools and building Kegs/Jars).",
  },
  {
    question: "Is Strawberry still the best Spring crop in Year 1?",
    answer:
      "Yes for raw profit/day after the Egg Festival, but you only get it on Spring 13. Before that, Potato is usually the best easy pick for most farms.",
  },
  {
    question: "Should I plant Starfruit or Ancient Fruit in the Greenhouse?",
    answer:
      "Ancient Fruit is the best long-term set-and-forget choice. Starfruit can win in short bursts if you have enough Kegs and want higher spikes.",
  },
  {
    question: "How do I maximize gold/day if I plant late in the season?",
    answer:
      "Focus on fast or repeat-harvest crops, and always check profit/day for the remaining days. The StardewProfit calculator can filter by season and compare profit/day instantly.",
  },
  {
    question: "What is the safest no-regret crop route for Year 1?",
    answer:
      "A simple route is Potato -> Strawberry in Spring, Blueberry in Summer, and Cranberry in Fall, then spend Winter improving tools and processing capacity. It is stable, low-risk, and easy to scale with sprinklers.",
  },
  {
    question: "How many Kegs or Jars do I need before betting on Starfruit/Hops?",
    answer:
      "If you only have a few machines, prioritize easy repeat crops first. Once you have enough Kegs/Jars to process harvests consistently every cycle, Starfruit and Hops become much stronger choices.",
  },
];

const faqZh = [
  {
    question: "星露谷每个季节最赚的作物是什么？",
    answer:
      "春季：草莓（13 号之后）、土豆、甜菜根（沙漠）。夏季：蓝莓、杨桃、啤酒花。秋季：蔓越莓、南瓜、葡萄。冬季：冬季种子（同时抓紧做洒水器/桶/罐子）。",
  },
  {
    question: "第一年春天还是草莓最强吗？",
    answer:
      "是的，但前提是你能在春 13 蛋节买到种子并尽早铺开田地；在此之前土豆通常更稳、更适合新手。",
  },
  {
    question: "温室种远古水果还是杨桃？",
    answer:
      "远古水果更适合长期稳定收益（省事、持续产出）；杨桃更适合短期冲高收益（但更吃桶/Keg 数量）。",
  },
  {
    question: "季节快结束了，怎么选作物最赚？",
    answer:
      "看剩余天数，优先选生长快或可重复收获的作物，并对比 gold/day。你也可以直接用 StardewProfit 计算器按季节筛选对比。",
  },
  {
    question: "第一年最稳的无脑赚钱种植路线是什么？",
    answer:
      "可以用这条稳健路线：春季土豆 -> 草莓，夏季蓝莓，秋季蔓越莓；冬天把重心放在工具升级和桶/罐子产能建设。上限高、容错也高。",
  },
  {
    question: "桶和罐子不多时，要不要硬玩杨桃/啤酒花？",
    answer:
      "不建议。加工产能不足时，先用好养、可重复收获的主力作物更稳。等你桶/罐子数量能稳定消化收成，再切到杨桃/啤酒花会更赚。",
  },
];

function RowLink({ row }: { row: CropRow }) {
  if (!row.href) {
    return <span className="font-semibold text-[#4a321e]">{row.crop}</span>;
  }

  return (
    <Link
      href={row.href}
      className="font-semibold text-[#4a321e] underline decoration-[#7c4d2e]/40 underline-offset-4 transition hover:text-[#2f6a3a]"
    >
      {row.crop}
    </Link>
  );
}

export default function BestCropsEverySeasonPage() {
  const readNextPosts = getBlogReadNextPosts("best-crops-every-season", 3);

  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 20%, rgba(255,255,255,0.24) 0 4%, transparent 5%), radial-gradient(circle at 78% 15%, rgba(255,255,255,0.2) 0 3%, transparent 4%), repeating-linear-gradient(135deg, rgba(121,176,77,0.22) 0 16px, rgba(96,154,66,0.18) 16px 32px)",
            backgroundColor: "#9ecf77",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#ffe9b8]/55 via-transparent to-[#98ca73]/35" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <PwaRegisterScript />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Best Crops Every Season" },
          ]}
        />

        <FaqJsonLd faqs={[...faqEn, ...faqZh]} />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Stardew Valley Crop Guide (2026)
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Best Crops for Every Season in Stardew Valley
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              不管你在哪个季节，这篇指南告诉你种什么最赚。I&apos;ll give you the
              best crops each season (Spring/Summer/Fall/Winter) with quick
              profit/day logic, plus a Greenhouse section for endgame planning.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?utm_source=best-crops-every-season&utm_medium=cta&utm_campaign=hero-full-plan"
                fromPath={fromPath}
                ctaName="best_crops_every_season_hero_utm"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#2f6a3a]/30 bg-[#e6f8d8] px-4 py-2 text-sm font-semibold text-[#1f6b2e] shadow-sm transition hover:-translate-y-0.5 hover:border-[#2f6a3a]/60 hover:bg-[#d9f2c7]"
              >
                🚀 Open Full Crop Planner
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?season=spring&profession=artisan"
                fromPath={fromPath}
                ctaName="best_crops_every_season_spring"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="opacity-85">
                  🌱
                </span>
                Open Spring Calculator
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?season=summer&profession=artisan"
                fromPath={fromPath}
                ctaName="best_crops_every_season_summer"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="opacity-85">
                  ☀️
                </span>
                Open Summer Calculator
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?season=fall&profession=artisan"
                fromPath={fromPath}
                ctaName="best_crops_every_season_fall"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="opacity-85">
                  🍂
                </span>
                Open Fall Calculator
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=greenhouse&profession=artisan"
                fromPath={fromPath}
                ctaName="best_crops_every_season_greenhouse"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="opacity-85">
                  🌿
                </span>
                Greenhouse Optimizer
              </TrackedBlogCtaLink>
            </div>

            <div className="mt-6 rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
              <p className="text-sm leading-6 text-[#5f4228]/90">
                Want the “best crop” for your exact day, sprinklers, profession,
                and processing chain? Use the calculator:{" "}
                <Link
                  href="/calculator"
                  className="font-semibold text-[#2f6a3a] underline decoration-[#2f6a3a]/30 underline-offset-4 hover:text-[#1f6b2e]"
                >
                  https://www.stardewprofit.com/calculator
                </Link>
              </p>
            </div>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">
              Quick comparison (Top 3 per season)
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              This table is a fast “what should I plant” answer. For exact
              numbers, run the season calculator (and toggle Artisan/Tiller).
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {quickComparison.map((block) => (
                <div
                  key={block.season}
                  className="rounded-3xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-[#4a321e]">
                      {block.season}
                    </h3>
                    <Link
                      href={
                        block.season === "Spring"
                          ? "/calculator?season=spring"
                          : block.season === "Summer"
                            ? "/calculator?season=summer"
                            : block.season === "Fall"
                              ? "/calculator?season=fall"
                              : "/calculator"
                      }
                      className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2f6a3a] underline decoration-[#2f6a3a]/30 underline-offset-4 hover:text-[#1f6b2e]"
                    >
                      open calculator
                    </Link>
                  </div>

                  <div className="mt-3 grid grid-cols-12 gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#6f4b2a]/75">
                    <div className="col-span-5">Crop</div>
                    <div className="col-span-3">Gold/day</div>
                    <div className="col-span-4">Notes</div>
                  </div>

                  <div className="mt-2 space-y-2">
                    {block.items.map((row) => (
                      <div
                        key={`${block.season}-${row.crop}`}
                        className="grid grid-cols-12 gap-2 rounded-2xl border border-[#7c4d2e]/20 bg-[#fffdf5] p-3 text-sm"
                      >
                        <div className="col-span-5 text-[#4a321e]">
                          <span className="font-semibold">{row.crop}</span>
                        </div>
                        <div className="col-span-3 font-semibold text-[#1f6b2e]">
                          {row.goldPerDay}
                        </div>
                        <div className="col-span-4 text-xs leading-5 text-[#5f4228]/90">
                          {row.notes}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">
              Mid-season check: lock your plan now
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              If you&apos;re switching from raw crop profit to processing profit,
              do a quick calculator check now so you don&apos;t lock gold into a
              weak crop cycle.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?utm_source=best-crops-every-season&utm_medium=cta&utm_campaign=mid-season-check"
                fromPath={fromPath}
                ctaName="best_crops_every_season_mid_utm"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#2f6a3a]/30 bg-[#e6f8d8] px-4 py-2 text-sm font-semibold text-[#1f6b2e] shadow-sm transition hover:-translate-y-0.5 hover:border-[#2f6a3a]/60 hover:bg-[#d9f2c7]"
              >
                📈 Run Mid-season Crop Audit
              </TrackedBlogCtaLink>
              <TrackedBlogCtaLink
                href="/calculator?preset=greenhouse&profession=artisan&utm_source=best-crops-every-season&utm_medium=cta&utm_campaign=mid-greenhouse"
                fromPath={fromPath}
                ctaName="best_crops_every_season_mid_preset"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                🌿 Open Greenhouse Preset
              </TrackedBlogCtaLink>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Link
                href="/blog/best-crops-year-1"
                className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4 text-sm font-semibold text-[#4a321e] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/40"
              >
                Best Crops Year 1 (route)
              </Link>
              <Link
                href="/blog/keg-vs-jar-profit-guide"
                className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4 text-sm font-semibold text-[#4a321e] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/40"
              >
                Keg vs Jar Profit Guide
              </Link>
              <Link
                href="/blog/greenhouse-layout-guide"
                className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4 text-sm font-semibold text-[#4a321e] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/40"
              >
                Greenhouse Layout Guide
              </Link>
              <Link
                href="/blog/stardew-valley-profit-guide-2026"
                className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4 text-sm font-semibold text-[#4a321e] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/40"
              >
                Stardew Valley Profit Guide 2026
              </Link>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-[#4a321e]">
                  Spring: top crops (profit/day focus)
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Spring has two phases: early Spring (before Egg Festival) and
                  the Strawberry era. If you want a Year 1 optimized plan, read{" "}
                  <Link
                    href="/blog/best-crops-year-1"
                    className="font-semibold text-[#2f6a3a] underline decoration-[#2f6a3a]/30 underline-offset-4 hover:text-[#1f6b2e]"
                  >
                    Best Crops for Year 1
                  </Link>
                  .
                </p>
              </div>

              <TrackedBlogCtaLink
                href="/calculator?season=spring&profession=artisan"
                fromPath={fromPath}
                ctaName="spring_section_calculator"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                🌱 Calculate Spring crops
              </TrackedBlogCtaLink>
            </div>

            <div className="mt-4 overflow-hidden rounded-3xl border border-[#7c4d2e]/25 bg-[#fff8e8]">
              <div className="grid grid-cols-12 gap-2 border-b border-[#7c4d2e]/20 bg-[#fff2c8] px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6f4b2a]/75">
                <div className="col-span-4">Crop</div>
                <div className="col-span-2">Gold/day</div>
                <div className="col-span-6">Why it wins</div>
              </div>
              <div className="divide-y divide-[#7c4d2e]/15">
                {springTop5.map((row) => (
                  <div
                    key={row.crop}
                    className="grid grid-cols-12 gap-2 px-4 py-3 text-sm"
                  >
                    <div className="col-span-4">
                      <RowLink row={row} />
                    </div>
                    <div className="col-span-2 font-semibold text-[#1f6b2e]">
                      {row.goldPerDay}
                    </div>
                    <div className="col-span-6 text-xs leading-5 text-[#5f4228]/90">
                      {row.notes}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fffdf5] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Spring rule of thumb
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">
                  If it&apos;s before Spring 13: plant Potato (or fast crops)
                  while you prep gold for Strawberries. After Spring 13: scale
                  Strawberries with sprinklers.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fffdf5] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Related reads
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">
                  If you&apos;re mid-season, use the “days left” guides like{" "}
                  <Link
                    href="/blog/best-crops-10-days-left-quick-answer"
                    className="font-semibold text-[#2f6a3a] underline decoration-[#2f6a3a]/30 underline-offset-4 hover:text-[#1f6b2e]"
                  >
                    best crops with 10 days left
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-[#4a321e]">
                  Summer: top crops (profit/day focus)
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Summer is where farming turns into an engine: blueberries for
                  field profit, and Starfruit/Hops for processing profit.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/blog/best-summer-crops-quick-answer"
                  className="inline-flex items-center rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#4a321e] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/40"
                >
                  Quick Summer Answer
                </Link>
                <TrackedBlogCtaLink
                  href="/calculator?season=summer&profession=artisan"
                  fromPath={fromPath}
                  ctaName="summer_section_calculator"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
                >
                  ☀️ Calculate Summer crops
                </TrackedBlogCtaLink>
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-3xl border border-[#7c4d2e]/25 bg-[#fff8e8]">
              <div className="grid grid-cols-12 gap-2 border-b border-[#7c4d2e]/20 bg-[#fff2c8] px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6f4b2a]/75">
                <div className="col-span-4">Crop</div>
                <div className="col-span-2">Gold/day</div>
                <div className="col-span-6">Why it wins</div>
              </div>
              <div className="divide-y divide-[#7c4d2e]/15">
                {summerTop5.map((row) => (
                  <div
                    key={row.crop}
                    className="grid grid-cols-12 gap-2 px-4 py-3 text-sm"
                  >
                    <div className="col-span-4">
                      <RowLink row={row} />
                    </div>
                    <div className="col-span-2 font-semibold text-[#1f6b2e]">
                      {row.goldPerDay}
                    </div>
                    <div className="col-span-6 text-xs leading-5 text-[#5f4228]/90">
                      {row.notes}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fffdf5] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Processing note
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">
                  If you have Kegs, Summer gets crazy. Compare processing chains
                  with{" "}
                  <Link
                    href="/blog/keg-vs-jar-profit-guide"
                    className="font-semibold text-[#2f6a3a] underline decoration-[#2f6a3a]/30 underline-offset-4 hover:text-[#1f6b2e]"
                  >
                    Keg vs Jar profit guide
                  </Link>
                  .
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fffdf5] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  If you plant late
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">
                  Late-summer planting is punished by slow crops. Check{" "}
                  <Link
                    href="/blog/stardew-valley-is-it-too-late-to-plant-on-summer-day-25"
                    className="font-semibold text-[#2f6a3a] underline decoration-[#2f6a3a]/30 underline-offset-4 hover:text-[#1f6b2e]"
                  >
                    Summer Day 25: is it too late?
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-[#4a321e]">
                  Fall: top crops (profit/day focus)
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Fall is the best “set it and harvest” season. Cranberries
                  dominate fields; Pumpkins dominate jars.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/blog/best-fall-crops-quick-answer"
                  className="inline-flex items-center rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#4a321e] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/40"
                >
                  Quick Fall Answer
                </Link>
                <TrackedBlogCtaLink
                  href="/calculator?season=fall&profession=artisan"
                  fromPath={fromPath}
                  ctaName="fall_section_calculator"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
                >
                  🍂 Calculate Fall crops
                </TrackedBlogCtaLink>
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-3xl border border-[#7c4d2e]/25 bg-[#fff8e8]">
              <div className="grid grid-cols-12 gap-2 border-b border-[#7c4d2e]/20 bg-[#fff2c8] px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6f4b2a]/75">
                <div className="col-span-4">Crop</div>
                <div className="col-span-2">Gold/day</div>
                <div className="col-span-6">Why it wins</div>
              </div>
              <div className="divide-y divide-[#7c4d2e]/15">
                {fallTop5.map((row) => (
                  <div
                    key={row.crop}
                    className="grid grid-cols-12 gap-2 px-4 py-3 text-sm"
                  >
                    <div className="col-span-4">
                      <RowLink row={row} />
                    </div>
                    <div className="col-span-2 font-semibold text-[#1f6b2e]">
                      {row.goldPerDay}
                    </div>
                    <div className="col-span-6 text-xs leading-5 text-[#5f4228]/90">
                      {row.notes}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fffdf5] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Profession tip
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">
                  If you&apos;re processing (wine/jelly/pickles),{" "}
                  <Link
                    href="/blog/artisan-vs-tiller-quick-answer"
                    className="font-semibold text-[#2f6a3a] underline decoration-[#2f6a3a]/30 underline-offset-4 hover:text-[#1f6b2e]"
                  >
                    Artisan vs Tiller
                  </Link>{" "}
                  usually decides your total yearly profit.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fffdf5] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  If you plant late
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">
                  Fall late planting has traps too. Use the quick answer guide
                  and the season calculator to avoid slow-crop dead zones.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">
              Winter: Winter Seeds strategy
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              Winter has no normal crops, but it&apos;s not a “dead season.” If
              you want farming profit in Winter, your main option is{" "}
              <strong>Winter Seeds</strong>
              (crafted from winter foraging). You can plant a huge field with
              sprinklers and harvest repeatedly.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  How Winter Seeds make money
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">
                  1) Forage → 2) craft seeds → 3) plant → 4) harvest forage → 5)
                  craft more seeds. It scales with field size and how many
                  sprinklers you have.
                </p>
                <p className="mt-2 text-sm">
                  <Link
                    href="/blog/winter-seeds-profit-guide"
                    className="font-semibold text-[#2f6a3a] underline decoration-[#2f6a3a]/30 underline-offset-4 hover:text-[#1f6b2e]"
                  >
                    Read: Winter Seeds Profit Guide
                  </Link>
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Winter is also upgrade season
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">
                  If Winter Seeds feel like too much work, use winter for mines,
                  tool upgrades, and building Kegs/Jars. Your spring profit
                  often depends on what you build in winter.
                </p>
                <p className="mt-2 text-sm">
                  <Link
                    href="/blog/how-many-kegs-do-i-need-quick-answer"
                    className="font-semibold text-[#2f6a3a] underline decoration-[#2f6a3a]/30 underline-offset-4 hover:text-[#1f6b2e]"
                  >
                    Read: How many Kegs do I need?
                  </Link>
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-[#7c4d2e]/25 bg-[#fffdf5] p-4">
              <p className="text-sm leading-6 text-[#5f4228]/90">
                Shortcut: open the calculator to compare processing setups and
                see which crops justify your Kegs:{" "}
                <Link
                  href="/calculator"
                  className="font-semibold text-[#2f6a3a] underline decoration-[#2f6a3a]/30 underline-offset-4 hover:text-[#1f6b2e]"
                >
                  https://www.stardewprofit.com/calculator
                </Link>
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">
              Greenhouse: Ancient Fruit vs Starfruit
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              The Greenhouse ignores seasons. That means the “best crops stardew
              valley” question changes: you want crops that scale forever and
              feed your processing.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-5">
                <h3 className="text-base font-semibold text-[#4a321e]">
                  Ancient Fruit
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Best long-term comfort pick: plant once, harvest weekly
                  forever. Great for a stable wine pipeline.
                </p>
                <p className="mt-3 text-sm">
                  <Link
                    href="/blog/starfruit-vs-ancient-fruit-wine-quick-answer"
                    className="font-semibold text-[#2f6a3a] underline decoration-[#2f6a3a]/30 underline-offset-4 hover:text-[#1f6b2e]"
                  >
                    Read: Starfruit vs Ancient Fruit (quick answer)
                  </Link>
                </p>
              </div>

              <div className="rounded-3xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-5">
                <h3 className="text-base font-semibold text-[#4a321e]">
                  Starfruit
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  Highest burst profit. If you have enough Kegs and don&apos;t
                  mind replanting, Starfruit can win the short-term profit/day
                  race.
                </p>
                <p className="mt-3 text-sm">
                  <Link
                    href="/blog/ancient-fruit-vs-starfruit-quick-answer"
                    className="font-semibold text-[#2f6a3a] underline decoration-[#2f6a3a]/30 underline-offset-4 hover:text-[#1f6b2e]"
                  >
                    Read: Ancient Fruit vs Starfruit (quick answer)
                  </Link>
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fffdf5] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Layout matters
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">
                  A good layout gives you more weekly harvests and less walking.
                  Use the layout guide here:
                </p>
                <p className="mt-2 text-sm">
                  <Link
                    href="/blog/greenhouse-layout-guide"
                    className="font-semibold text-[#2f6a3a] underline decoration-[#2f6a3a]/30 underline-offset-4 hover:text-[#1f6b2e]"
                  >
                    Read: Greenhouse Layout Guide
                  </Link>
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fffdf5] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Keg capacity is the bottleneck
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">
                  Most farms aren&apos;t limited by crops. They&apos;re limited
                  by Kegs/Jars. If you want the true endgame answer, your “best
                  crop” is the one that matches your processing capacity.
                </p>
                <p className="mt-2 text-sm">
                  <Link
                    href="/blog/keg-vs-jar-quick-answer"
                    className="font-semibold text-[#2f6a3a] underline decoration-[#2f6a3a]/30 underline-offset-4 hover:text-[#1f6b2e]"
                  >
                    Read: Keg vs Jar (quick answer)
                  </Link>
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=greenhouse&profession=artisan"
                fromPath={fromPath}
                ctaName="greenhouse_section_calculator"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                🌿 Run Greenhouse Calculator
              </TrackedBlogCtaLink>
              <TrackedBlogCtaLink
                href="/calculator?preset=keg-vs-jar-starfruit&profession=artisan"
                fromPath={fromPath}
                ctaName="greenhouse_section_keg_jar"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                🧮 Compare Keg vs Jar
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">FAQ (EN)</h2>
            <div className="mt-3 space-y-4">
              {faqEn.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4"
                >
                  <p className="text-sm font-semibold text-[#4a321e]">
                    {item.question}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">
              常见问题（中文）
            </h2>
            <div className="mt-3 space-y-4">
              {faqZh.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4"
                >
                  <p className="text-sm font-semibold text-[#4a321e]">
                    {item.question}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">
              Final step: turn this guide into your exact crop plan
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              You already have the best seasonal shortlist. Run one last check
              with your current day, profession, and machine count so every
              field tile is optimized for your farm state.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?utm_source=best-crops-every-season&utm_medium=cta&utm_campaign=end-final-check"
                fromPath={fromPath}
                ctaName="best_crops_every_season_end_utm"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#2f6a3a]/30 bg-[#e6f8d8] px-4 py-2 text-sm font-semibold text-[#1f6b2e] shadow-sm transition hover:-translate-y-0.5 hover:border-[#2f6a3a]/60 hover:bg-[#d9f2c7]"
              >
                ✅ Open Final Crop Check
              </TrackedBlogCtaLink>
              <TrackedBlogCtaLink
                href="/calculator?preset=keg-vs-jar-starfruit&profession=artisan&utm_source=best-crops-every-season&utm_medium=cta&utm_campaign=end-processing"
                fromPath={fromPath}
                ctaName="best_crops_every_season_end_preset"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                🧪 Compare Processing Preset
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Read next</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              If you want to go deeper, these posts connect directly to picking
              the best crops each season and converting harvests into real
              profit.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <Link
                href="/blog/stardew-valley-profit-guide-2026"
                className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4 text-sm font-semibold text-[#4a321e] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/40"
              >
                Stardew Valley Profit Guide 2026
              </Link>
              <Link
                href="/blog/best-greenhouse-crops-quick-answer"
                className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4 text-sm font-semibold text-[#4a321e] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/40"
              >
                Best Greenhouse Crops (Quick Answer)
              </Link>
            </div>
          </section>
        </article>

        <BlogReadNext
          posts={readNextPosts}
          currentSlug="best-crops-every-season"
        />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}

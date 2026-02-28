import type { Metadata } from "next";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import FaqJsonLd from "@/components/FaqJsonLd";
import { getBlogReadNextPosts } from "@/lib/read-next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  openGraph: {
    type: "article",
    publishedTime: "2026-02-28T00:00:00+08:00",
    modifiedTime: "2026-02-28T00:00:00+08:00",
  },
  title: "8 Beginner Mistakes Losing You Money in Stardew Valley | Stardew Profit",
  description:
    "Stop losing gold! These 8 common Stardew Valley mistakes cost beginners thousands. Learn what to do instead with exact profit numbers.",
  keywords: [
    "beginner mistakes",
    "stardew valley money",
    "profit tips",
    "farming guide",
  ],
};

const faqEn = [
  {
    question: "What is the biggest money mistake in Stardew Valley?",
    answer:
      "Selling raw high-value crops instead of processing them (Kegs/Jars) is usually the biggest early-game profit leak.",
  },
  {
    question: "Should I pick Artisan or Tiller?",
    answer:
      "If you process crops, pick Artisan: it gives +40% value on artisan goods (wine, juice, jelly, pickles, etc.).",
  },
  {
    question: "What should I grow in the Greenhouse?",
    answer:
      "Ancient Fruit (best long-term) or Starfruit (high burst profit). Avoid seasonal crops because the Greenhouse ignores seasons.",
  },
  {
    question: "When should I start using sprinklers?",
    answer:
      "As soon as you hit Mining level 2 and can craft basic sprinklers—freeing time for mines, fishing, and more planting.",
  },
];

const faqZh = [
  {
    question: "星露谷最大的赚钱错误是什么？",
    answer: "卖原材料而不加工（不做酒/果酱/腌菜）。",
  },
  {
    question: "应该选工匠还是农耕？",
    answer: "工匠（Artisan），加工品 +40% 收益。",
  },
  {
    question: "温室应该种什么？",
    answer: "远古水果或杨桃；不要种季节作物。",
  },
  {
    question: "什么时候开始用洒水器？",
    answer: "挖矿等级到 2 就可以开始做基础洒水器。",
  },
];

export default function BeginnerMistakesLosingMoneyPage() {
  const fromPath = "/blog/beginner-mistakes-losing-money";
  const readNextPosts = getBlogReadNextPosts("beginner-mistakes-losing-money", 3);

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
        <div className="absolute inset-0 bg-gradient-to-b from-[#b8e8ff]/55 via-transparent to-[#98ca73]/35" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        <PwaRegisterScript />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            {
              name: "8 Beginner Mistakes Losing You Money in Stardew Valley | Stardew Profit",
            },
          ]}
        />

        <FaqJsonLd faqs={[...faqEn, ...faqZh]} />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Money Mistakes (Beginner Guide)
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              8 Beginner Mistakes Losing You Money in Stardew Valley
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Most new players don&apos;t lose money because they play “wrong”—they lose
              it because they invest time in low-return actions. Below are 8 common
              mistakes ranked by how much gold they can quietly delete from your first
              year.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=keg-vs-jar-starfruit&profession=artisan"
                fromPath={fromPath}
                ctaName="compare_keg_vs_jar"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  🧮
                </span>
                Compare Keg vs Jar
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=greenhouse&profession=artisan"
                fromPath={fromPath}
                ctaName="greenhouse_optimizer"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  🌿
                </span>
                Greenhouse Optimizer
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?season=spring&profession=artisan"
                fromPath={fromPath}
                ctaName="best_spring_crops"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  🌱
                </span>
                Best Spring Crops
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?season=summer&profession=artisan"
                fromPath={fromPath}
                ctaName="best_summer_crops"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  ☀️
                </span>
                Best Summer Crops
              </TrackedBlogCtaLink>
            </div>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">
              How to read the “gold lost” estimates
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              The numbers below are practical ranges (not perfect theorycraft). They
              reflect what beginners commonly miss during Year 1: failing to process
              crops, picking the wrong profession, and wasting prime growing days.
              If your farm is smaller, scale the estimate down; if you have the Greenhouse
              and lots of Kegs, scale it up.
            </p>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">1) Selling raw crops instead of using Kegs/Jars</h2>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#8a2b1f]">What players do wrong:</span> They ship high-value crops immediately because “gold now” feels safer.
              The problem is that a single processing step often multiplies value.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#8a2b1f]">Gold lost (estimate):</span> <strong>10,000–120,000g</strong> in Year 1.
              Example: turning a decent stack of Starfruit into wine instead of raw shipping can add tens of thousands.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#1f6b2e]">Do this instead:</span> Prioritize a small “processing core” (10–30 Kegs/Jars) and feed it your best crops.
              Process the expensive stuff first (Starfruit/Ancient Fruit/Hops/Pumpkin), raw-ship low-value overflow.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=keg-vs-jar-starfruit&profession=artisan"
                fromPath={fromPath}
                ctaName="mistake_1_keg_vs_jar"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Compare Keg vs Jar
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">2) Growing seasonal crops in the Greenhouse</h2>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#8a2b1f]">What players do wrong:</span> They fill the Greenhouse with “whatever seeds they have”—often seasonal crops that aren&apos;t the best long-term.
              The Greenhouse is the one place where seasons don&apos;t matter, so you want crops that scale forever.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#8a2b1f]">Gold lost (estimate):</span> <strong>20,000–200,000g</strong> over the year.
              The opportunity cost is huge because the Greenhouse produces every week of every season.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#1f6b2e]">Do this instead:</span> Plant <strong>Ancient Fruit</strong> for steady weekly harvests, or <strong>Starfruit</strong> if you want high bursts.
              Then route harvests into Kegs (ideally with Artisan).
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=greenhouse&profession=artisan"
                fromPath={fromPath}
                ctaName="mistake_2_greenhouse"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Greenhouse Optimizer
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">3) Ignoring the Artisan profession</h2>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#8a2b1f]">What players do wrong:</span> They pick Tiller or other options without realizing Artisan is a straight multiplier on their best money engine.
              If you process anything, Artisan is basically a permanent gold boost.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#8a2b1f]">Gold lost (estimate):</span> <strong>15,000–250,000g</strong> depending on how much you process.
              Artisan adds <strong>+40%</strong> to wine, juice, jelly, pickles, pale ale, etc.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#1f6b2e]">Do this instead:</span> If your plan includes Kegs/Jars, take Artisan at Farming level 10.
              If you already picked the wrong one, consider paying to respec later (it can pay back quickly).
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=keg-vs-jar-starfruit&profession=artisan"
                fromPath={fromPath}
                ctaName="mistake_3_artisan"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                See Artisan in the calculator
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">4) Planting the wrong crops for the season</h2>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#8a2b1f]">What players do wrong:</span> They choose crops based on “sell price” or vibes, not on how many harvests fit into the season.
              Planting too slow (or too late) quietly kills profit.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#8a2b1f]">Gold lost (estimate):</span> <strong>5,000–80,000g</strong> per season.
              Missing even one extra harvest cycle across a big field adds up fast.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#1f6b2e]">Do this instead:</span> Plan around <strong>profit per day</strong> and remaining days.
              Use repeat-harvest crops when you&apos;re late (or when you want less replanting time).
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?season=spring&profession=artisan"
                fromPath={fromPath}
                ctaName="mistake_4_spring"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Best Spring Crops
              </TrackedBlogCtaLink>
              <TrackedBlogCtaLink
                href="/calculator?season=summer&profession=artisan"
                fromPath={fromPath}
                ctaName="mistake_4_summer"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Best Summer Crops
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">5) Not using sprinklers early</h2>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#8a2b1f]">What players do wrong:</span> They hand-water huge fields for weeks.
              Watering feels like progress, but it steals the only thing you can never buy back: time.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#8a2b1f]">Gold lost (estimate):</span> <strong>3,000–40,000g</strong> in missed opportunities.
              Those hours could be mines (ore for more sprinklers), fishing, foraging, and extra planting.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#1f6b2e]">Do this instead:</span> Rush Mining level 2, craft a few basic sprinklers, and expand as ore allows.
              Even 4–8 sprinklers early can change your whole daily schedule.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?season=spring&profession=artisan"
                fromPath={fromPath}
                ctaName="mistake_5_profit_per_day"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Pick crops that pay per day
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">6) Selling Ancient Fruit instead of seeding it</h2>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#8a2b1f]">What players do wrong:</span> They finally get Ancient Fruit, ship it, and then wait forever to get more.
              Ancient Fruit is special because it becomes an engine once you scale it.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#8a2b1f]">Gold lost (estimate):</span> <strong>10,000–150,000g</strong> as opportunity cost.
              Every early Ancient Seed you don&apos;t duplicate is weeks of lost future harvests.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#1f6b2e]">Do this instead:</span> Use the Seed Maker to multiply Ancient Fruit until your Greenhouse (and later Ginger Island) is filled.
              Once scaled, route to Kegs for wine.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=greenhouse&profession=artisan"
                fromPath={fromPath}
                ctaName="mistake_6_ancient_seed"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Greenhouse plan for Ancient Fruit
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">7) Skipping the mines in winter</h2>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#8a2b1f]">What players do wrong:</span> They treat winter as a “dead season” and do random chores.
              Winter is actually your upgrade season: ore, bars, sprinklers, tool upgrades, and unlocks.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#8a2b1f]">Gold lost (estimate):</span> <strong>5,000–60,000g</strong> in delayed upgrades.
              If sprinklers and Kegs arrive a season late, your next season&apos;s farm becomes smaller and weaker.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#1f6b2e]">Do this instead:</span> Use winter to push deeper mine floors, stockpile ore, and craft infrastructure for spring.
              Think of it as investing in next season&apos;s daily profit.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?season=spring&profession=artisan"
                fromPath={fromPath}
                ctaName="mistake_7_spring_setup"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Plan a profitable spring
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">8) Not checking profit per day</h2>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#8a2b1f]">What players do wrong:</span> They choose crops by “highest sale price” or “highest total harvest,” ignoring time.
              A crop that looks great on paper can lose to a faster crop once you divide by days.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#8a2b1f]">Gold lost (estimate):</span> <strong>2,000–30,000g</strong> per season, especially when you plant mid-season.
              The math punishes slow crops when you don&apos;t have enough days left.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              <span className="font-semibold text-[#1f6b2e]">Do this instead:</span> Compare crops with profit per day (and with your profession).
              If you have Kegs/Jars, also compare the processed chain profit per day.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?season=summer&profession=artisan"
                fromPath={fromPath}
                ctaName="mistake_8_ppd"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Compare profit per day
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">FAQ (EN)</h2>
            <div className="mt-3 space-y-4">
              {faqEn.map((item) => (
                <div key={item.question} className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                  <p className="text-sm font-semibold text-[#4a321e]">{item.question}</p>
                  <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">常见问题（中文）</h2>
            <div className="mt-3 space-y-4">
              {faqZh.map((item) => (
                <div key={item.question} className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                  <p className="text-sm font-semibold text-[#4a321e]">{item.question}</p>
                  <p className="mt-1 text-sm leading-6 text-[#5f4228]/90">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="beginner-mistakes-losing-money" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}

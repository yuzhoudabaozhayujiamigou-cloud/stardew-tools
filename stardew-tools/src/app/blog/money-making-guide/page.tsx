import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { SiteFooter } from "@/components/SiteFooter";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { getBlogReadNextPosts } from "@/lib/read-next";

export const metadata: Metadata = {
  openGraph: {
    type: "article",
    publishedTime: "2026-02-28T00:00:00+08:00",
    modifiedTime: "2026-02-28T00:00:00+08:00",
  },
  title:
    "Stardew Valley Money Making Guide (2026) – From Broke to Rich | StardewProfit",
  description:
    "A universal Stardew Valley money making guide for any year: best early crops, mid-game processing, late-game wine pipelines, plus pro tips and a profit calculator.",
  keywords: [
    "stardew valley money making guide",
    "how to make money stardew valley",
    "stardew valley gold guide",
    "best crops",
    "keg vs jar",
    "ancient fruit wine",
    "starfruit wine",
  ],
  alternates: {
    canonical: "https://www.stardewprofit.com/blog/money-making-guide",
  },
};

const faqEn = [
  {
    question: "What is the fastest way to make money in Stardew Valley?",
    answer:
      "In practice: grow high-profit crops, then process them. Early game, optimize Spring/Summer crops; mid game, build a Keg/Jar line; late game, run an Ancient Fruit or Starfruit wine pipeline with the Artisan profession.",
  },
  {
    question: "What crops should I plant for maximum profit in Year 1?",
    answer:
      "A strong beginner path is Parsnip → Potato → Strawberry (Spring) then Blueberry (Summer). Use a profit calculator to adapt to your day-of-season, seed budget, and sprinklers.",
  },
  {
    question: "Keg vs Jar: which makes more gold?",
    answer:
      "Kegs usually win for high-value fruit crops (Starfruit/Ancient Fruit) because wine scales extremely well, especially with Artisan. Jars are great earlier (lower setup cost) and for many vegetables.",
  },
  {
    question: "Should I choose Artisan or Tiller for money?",
    answer:
      "If you process crops into wine/juice/jelly/pickles, Artisan is typically the best long-term money profession (+40% artisan goods). Tiller can be fine if you mostly ship raw crops.",
  },
  {
    question: "What should I grow in the Greenhouse to get rich?",
    answer:
      "Ancient Fruit is the classic best long-term option. Starfruit can beat it for burst profit if you can keep Kegs running and don't mind replanting. Layout and processing capacity matter.",
  },
];

const faqZh = [
  {
    question: "星露谷最快的赚钱方式是什么？",
    answer:
      "实战里最稳的路线是：前期种高利润作物，中期开始建加工线（啤酒桶/罐头瓶），后期用远古水果/杨桃做酒，并尽量选择工匠（Artisan）。",
  },
  {
    question: "第一年应该种什么更赚钱？",
    answer:
      "可以走一条简单高胜率路线：防风草 → 土豆 → 草莓（春），蓝莓（夏）。但最好用计算器按“剩余天数、预算、洒水器数量”动态算。",
  },
  {
    question: "啤酒桶和罐头瓶选哪个更赚？",
    answer:
      "一般来说，高价值水果（杨桃/远古水果）更偏向啤酒桶做酒；罐头瓶更适合前中期（成本低）以及不少蔬菜。最终以你的加工产能为准。",
  },
  {
    question: "选工匠还是农耕（Tiller）？",
    answer:
      "如果你会做酒/果酱/腌菜等加工品，工匠通常是长期收益最高的选择（加工品 +40%）。如果你几乎只卖原材料，农耕也能用。",
  },
  {
    question: "温室种什么最容易变富？",
    answer:
      "远古水果是最经典的长期最优解；杨桃适合追求爆发利润但需要频繁补种。温室布局和你的啤酒桶数量会决定实际收益。",
  },
];

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
      <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
        {children}
      </div>
    </section>
  );
}

function PillLink({
  href,
  children,
  tone = "plain",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "plain" | "primary";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5";
  const styles =
    tone === "primary"
      ? "border-[#8a5b3a]/55 bg-[#fff2c8] text-[#5c3d23] hover:border-[#7c4d2e]/75 hover:bg-[#fce8b1]"
      : "border-[#8a5b3a]/45 bg-[#fff8e8] text-[#5c3d23] hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

export default function MoneyMakingGuidePage() {
  const fromPath = "/blog/money-making-guide";
  const readNextPosts = getBlogReadNextPosts("money-making-guide", 3);

  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 14%, rgba(255,255,255,0.23) 0 4%, transparent 5%), radial-gradient(circle at 86% 22%, rgba(255,255,255,0.18) 0 3%, transparent 4%), radial-gradient(circle at 22% 72%, rgba(255,255,255,0.12) 0 3%, transparent 4%), repeating-linear-gradient(135deg, rgba(121,176,77,0.22) 0 16px, rgba(96,154,66,0.18) 16px 32px)",
            backgroundColor: "#9ecf77",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#b8e8ff]/55 via-transparent to-[#98ca73]/35" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <PwaRegisterScript />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Money Making Guide" },
          ]}
        />

        <FaqJsonLd faqs={[...faqEn, ...faqZh]} />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Stardew Valley Gold Guide (2026)
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Stardew Valley Money Making Guide – From Broke to Rich
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              No matter what year you&apos;re in—Year 1 Spring, Year 2 rebuild,
              or a mega-farm in Year 5—this guide shows the highest-impact ways
              to make more gold: better crops, smarter timing, and the
              processing pipelines that turn “pretty good” harvests into “why am
              I rich now?” income.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?season=spring&profession=artisan"
                fromPath={fromPath}
                ctaName="mmg_cta_spring_calculator"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/55 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/75 hover:bg-[#fce8b1]"
              >
                <span
                  aria-hidden
                  className="inline-flex items-center leading-none opacity-85"
                >
                  🧮
                </span>
                Open Profit Calculator
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=keg-vs-jar-starfruit&profession=artisan"
                fromPath={fromPath}
                ctaName="mmg_cta_keg_vs_jar"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Keg vs Jar Calculator
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=greenhouse&profession=artisan"
                fromPath={fromPath}
                ctaName="mmg_cta_greenhouse"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Greenhouse Optimizer
              </TrackedBlogCtaLink>
            </div>

            <div className="mt-6 rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
              <p className="text-sm font-semibold text-[#4a321e]">
                Quick map (use this if you&apos;re lost)
              </p>
              <div className="mt-2 grid gap-2 text-sm text-[#5f4228]/90 sm:grid-cols-2">
                <p>
                  <span className="font-semibold text-[#1f6b2e]">Early:</span>{" "}
                  Parsnip → Potato → Strawberry → Blueberry
                </p>
                <p>
                  <span className="font-semibold text-[#1f6b2e]">Mid:</span>{" "}
                  Cranberry & Pumpkin + Kegs/Jars + Artisan
                </p>
                <p>
                  <span className="font-semibold text-[#1f6b2e]">Late:</span>{" "}
                  Ancient Fruit / Starfruit wine pipeline
                </p>
                <p>
                  <span className="font-semibold text-[#1f6b2e]">Always:</span>{" "}
                  Use the calculator to fit your farm
                </p>
              </div>
            </div>
          </header>

          <Card title="Start Here: Profit is a system (not one crop)">
            <p>
              The fastest way to get rich is to stop thinking in “best crop” and
              start thinking in a loop:{" "}
              <span className="font-semibold text-[#4a321e]">
                seeds → harvest → processing → reinvest
              </span>
              .
            </p>
            <p>
              If you want a universal answer, it&apos;s this:{" "}
              <span className="font-semibold text-[#4a321e]">
                upgrade your profit-per-day
              </span>{" "}
              with better timing, then multiply it with processing.
            </p>
            <p>
              Use the calculator whenever your situation changes (new
              sprinklers, more cash, late planting, profession swaps).
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <PillLink
                href="/calculator?season=spring&profession=artisan"
                tone="primary"
              >
                🧮 Calculate my best crop today
              </PillLink>
              <PillLink href="/blog/stardew-valley-profit-guide-2026">
                Read: Stardew Valley Profit Guide 2026
              </PillLink>
            </div>
          </Card>

          <Card title="Early Game (Year 1 Spring–Summer): build your seed money">
            <p>
              In early game you don&apos;t have Kegs, a Greenhouse, or a huge
              sprinkler grid. So your goal is simple:{" "}
              <span className="font-semibold text-[#4a321e]">
                turn time into the biggest pile of cash possible
              </span>{" "}
              so you can buy seeds, upgrade tools, and scale.
            </p>

            <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
              <p className="text-sm font-semibold text-[#4a321e]">
                Best starter crop ladder
              </p>
              <p className="mt-1">
                <span className="font-semibold">Parsnip</span> →{" "}
                <span className="font-semibold">Potato</span> →{" "}
                <span className="font-semibold">Strawberry</span> →{" "}
                <span className="font-semibold">Blueberry</span>
              </p>
              <p className="mt-2 text-sm text-[#5f4228]/90">
                This path is popular because it&apos;s forgiving: early crops
                are quick to recycle into more seeds, Strawberries spike your
                Spring income, and Blueberries stabilize Summer.
              </p>
            </div>

            <p>
              The trap is planting “a good crop” at a bad time. If it&apos;s
              already Spring Day 15 or Summer Day 20, the best crop can change.
            </p>

            <div className="flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?season=spring&profession=artisan"
                fromPath={fromPath}
                ctaName="mmg_early_calculator_spring"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/55 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/75 hover:bg-[#fce8b1]"
              >
                🧮 Spring crop calculator
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?season=summer&profession=artisan"
                fromPath={fromPath}
                ctaName="mmg_early_calculator_summer"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/55 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/75 hover:bg-[#fce8b1]"
              >
                🧮 Summer crop calculator
              </TrackedBlogCtaLink>

              <PillLink href="/blog/best-crops-year-1">
                Read: Best Crops for Year 1
              </PillLink>
              <PillLink href="/blog/stardew-valley-summer-day-1-maximum-profit-guide">
                Read: Summer Day 1 maximum profit
              </PillLink>
              <PillLink href="/blog/stardew-valley-summer-day-15-profit-guide">
                Read: Summer Day 15 profit guide
              </PillLink>
            </div>

            <p>
              Early-game gold is also about freeing time. Every hour you
              don&apos;t spend watering can be spent mining ore (for
              sprinklers), fishing, and planting more.
            </p>
          </Card>

          <Card title="Mid Game (Year 1 Fall–Year 2): processing turns good into great">
            <p>
              Mid game is when most farms explode in income.{" "}
              <span className="font-semibold text-[#4a321e]">
                The moment you start processing
              </span>{" "}
              is the moment your best crop becomes “whatever feeds your machines
              efficiently.”
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Fall crop priorities
                </p>
                <p className="mt-1">
                  <span className="font-semibold">Cranberry</span> →{" "}
                  <span className="font-semibold">Pumpkin</span> → start your
                  processing line
                </p>
                <p className="mt-2 text-sm text-[#5f4228]/90">
                  Cranberries give stable repeat harvests. Pumpkins become more
                  interesting once you can preserve or juice them.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Machine decision
                </p>
                <p className="mt-1">
                  If you can only build one line first, build the one you can
                  feed consistently.
                </p>
                <p className="mt-2 text-sm text-[#5f4228]/90">
                  Kegs often dominate late game, but Jars can win in early-mid
                  game because they&apos;re easier to mass-produce.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <PillLink href="/blog/keg-vs-jar-profit-guide">
                Read: Keg vs Jar profit guide
              </PillLink>
              <PillLink href="/blog/artisan-vs-tiller-quick-answer">
                Read: Artisan vs Tiller (quick answer)
              </PillLink>
              <PillLink href="/blog/wine-vs-juice-quick-answer">
                Read: Wine vs Juice
              </PillLink>
              <PillLink href="/blog/how-many-kegs-do-i-need-quick-answer">
                Read: How many Kegs do I need?
              </PillLink>
            </div>

            <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
              <p className="text-sm font-semibold text-[#4a321e]">
                The mid-game rule of thumb
              </p>
              <p className="mt-1">
                <span className="font-semibold text-[#1f6b2e]">Ship raw</span>{" "}
                low-value overflow.{" "}
                <span className="font-semibold text-[#1f6b2e]">
                  Process first
                </span>{" "}
                the expensive stuff.
              </p>
              <p className="mt-2 text-sm text-[#5f4228]/90">
                A small processing core (10–30 machines) can out-earn a huge raw
                field if it&apos;s always running.
              </p>
            </div>

            <div className="mt-2 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=keg-vs-jar-starfruit&profession=artisan"
                fromPath={fromPath}
                ctaName="mmg_mid_keg_vs_jar_calc"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/55 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/75 hover:bg-[#fce8b1]"
              >
                🧮 Keg vs Jar calculator
              </TrackedBlogCtaLink>
              <TrackedBlogCtaLink
                href="/calculator?season=fall&profession=artisan"
                fromPath={fromPath}
                ctaName="mmg_mid_fall_calculator"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/55 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/75 hover:bg-[#fce8b1]"
              >
                🧮 Fall crop calculator
              </TrackedBlogCtaLink>
            </div>
          </Card>

          <Card title="Late Game (Year 2+): the wine pipeline that prints gold">
            <p>
              Late game money is about consistency:{" "}
              <span className="font-semibold text-[#4a321e]">fill a space</span>{" "}
              (Greenhouse / Ginger Island) with a high-value crop, then{" "}
              <span className="font-semibold text-[#4a321e]">
                feed a Keg line
              </span>{" "}
              forever.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Ancient Fruit Wine (steady)
                </p>
                <p className="mt-1">
                  Ancient Fruit is the long-term king because it keeps
                  producing, meaning your Kegs stay fed with minimal replanting
                  work.
                </p>
                <p className="mt-2 text-sm text-[#5f4228]/90">
                  If you&apos;re scaling, use the Seed Maker to multiply your
                  first Ancient Fruit instead of shipping it early.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Starfruit Wine (burst)
                </p>
                <p className="mt-1">
                  Starfruit can win when you can afford constant replanting and
                  have enough Kegs to avoid backlog.
                </p>
                <p className="mt-2 text-sm text-[#5f4228]/90">
                  The real answer depends on your machine count and harvest
                  schedule.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <PillLink href="/blog/starfruit-vs-ancient-fruit-wine-quick-answer">
                Read: Starfruit vs Ancient Fruit Wine
              </PillLink>
              <PillLink href="/blog/greenhouse-layout-guide">
                Read: Greenhouse layout guide
              </PillLink>
              <PillLink href="/blog/best-greenhouse-crops-quick-answer">
                Read: Best Greenhouse crops
              </PillLink>
            </div>

            <div className="mt-2 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=greenhouse&profession=artisan"
                fromPath={fromPath}
                ctaName="mmg_late_greenhouse_calc"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/55 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/75 hover:bg-[#fce8b1]"
              >
                🧮 Optimize my Greenhouse
              </TrackedBlogCtaLink>
              <TrackedBlogCtaLink
                href="/calculator?preset=keg-vs-jar-starfruit&profession=artisan"
                fromPath={fromPath}
                ctaName="mmg_late_keg_vs_jar_calc"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/55 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/75 hover:bg-[#fce8b1]"
              >
                🧮 Check Keg vs Jar again
              </TrackedBlogCtaLink>
            </div>

            <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
              <p className="text-sm font-semibold text-[#4a321e]">
                Late-game &quot;rich loop&quot; checklist
              </p>
              <p className="mt-1">
                1) Crop that produces reliably → 2) enough Kegs → 3) Artisan
                profession → 4) reinvest into more machines.
              </p>
            </div>
          </Card>

          <Card title="Beyond Crops: other income streams (use them strategically)">
            <p>
              Crops + processing is the main engine, but other sources can
              bridge gaps or fund upgrades when seeds are tight:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">Animals</p>
                <p className="mt-1 text-sm text-[#5f4228]/90">
                  A steady baseline (especially once you have
                  auto-feeding/auto-collection). Process milk/eggs when you can.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Fish Ponds
                </p>
                <p className="mt-1 text-sm text-[#5f4228]/90">
                  Low daily work, nice side products, and useful if you like
                  set-and-forget setups.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Mining & Ore
                </p>
                <p className="mt-1 text-sm text-[#5f4228]/90">
                  Ore is not just sale value- it&apos;s infrastructure: sprinklers,
                  Kegs, and upgrades.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  Seasonal events
                </p>
                <p className="mt-1 text-sm text-[#5f4228]/90">
                  If you&apos;re broke, events and quests can inject cash (and
                  unlocks) without needing seeds.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <PillLink href="/blog/winter-seeds-profit-guide">
                Read: Winter Seeds profit guide
              </PillLink>
              <PillLink href="/blog/auto-petter-worth-it">
                Read: Is Auto-Petter worth it?
              </PillLink>
            </div>
          </Card>

          <Card title="Pro Tips: 5 fast ways to increase gold (without grinding)">
            <div className="space-y-3">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  1) Replant with the season clock in mind
                </p>
                <p className="mt-1 text-sm text-[#5f4228]/90">
                  If you&apos;re late in the season, switch to faster or
                  repeat-harvest crops. Don&apos;t let “best crop” bait you into
                  missing the last harvest.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <PillLink href="/blog/best-crops-10-days-left-quick-answer">
                    Best crops with 10 days left
                  </PillLink>
                  <PillLink href="/blog/best-crops-7-days-left-before-season-switch">
                    Best crops with 7 days left
                  </PillLink>
                </div>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  2) Buy time with sprinklers (time is money)
                </p>
                <p className="mt-1 text-sm text-[#5f4228]/90">
                  Even a small sprinkler grid can convert watering time into
                  mining/fishing time. That often pays more than “one better
                  crop.”
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  3) Keep your machines running
                </p>
                <p className="mt-1 text-sm text-[#5f4228]/90">
                  A half-idle Keg barn is the hidden killer. Plan harvest sizes
                  so you can refill machines on schedule.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  4) Speed-Gro is an investment, not a luxury
                </p>
                <p className="mt-1 text-sm text-[#5f4228]/90">
                  If Speed-Gro earns you one extra harvest cycle, it can beat
                  “saving money” easily.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <PillLink href="/blog/speed-gro-vs-deluxe-speed-gro">
                    Speed-Gro vs Deluxe Speed-Gro
                  </PillLink>
                </div>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                <p className="text-sm font-semibold text-[#4a321e]">
                  5) Use the calculator for every “big buy”
                </p>
                <p className="mt-1 text-sm text-[#5f4228]/90">
                  Before buying 200 seeds or building 50 machines, run a quick
                  comparison. A 30-second check can save an entire season.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <PillLink
                    href="/calculator?season=summer&profession=artisan"
                    tone="primary"
                  >
                    🧮 Run the calculator
                  </PillLink>
                </div>
              </div>
            </div>
          </Card>

          <Card title="FAQ (EN)">
            <div className="space-y-4">
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
          </Card>

          <Card title="常见问题（中文）">
            <div className="space-y-4">
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
          </Card>

          <Card title="Next reads (if you want to min-max)">
            <div className="grid gap-3 sm:grid-cols-2">
              <PillLink href="/blog/stardew-valley-spring-profit-guide-2026">
                Stardew Valley Spring Profit Guide 2026
              </PillLink>
              <PillLink href="/blog/stardew-valley-profit-guide-2026">
                Stardew Valley Profit Guide 2026
              </PillLink>
              <PillLink href="/blog/keg-vs-jar-quick-answer">
                Keg vs Jar (quick answer)
              </PillLink>
              <PillLink href="/blog/ancient-fruit-wine-vs-starfruit-wine">
                Ancient Fruit Wine vs Starfruit Wine
              </PillLink>
              <PillLink href="/blog/hops-vs-starfruit-quick-answer">
                Hops vs Starfruit
              </PillLink>
              <PillLink href="/blog/strawberry-spring-day-13-too-late">
                Strawberry on Spring Day 13?
              </PillLink>
            </div>
            <div className="mt-3 rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
              <p className="text-sm font-semibold text-[#4a321e]">
                One last CTA
              </p>
              <p className="mt-1 text-sm text-[#5f4228]/90">
                If you only do one thing today, do this: open the calculator,
                set your season/day, and compare the top 3 options. That single
                habit will make you richer than memorizing any list.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <TrackedBlogCtaLink
                  href="/calculator?season=spring&profession=artisan"
                  fromPath={fromPath}
                  ctaName="mmg_final_calculator"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/55 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/75 hover:bg-[#fce8b1]"
                >
                  🧮 Open Profit Calculator
                </TrackedBlogCtaLink>
              </div>
            </div>
          </Card>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="money-making-guide" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}

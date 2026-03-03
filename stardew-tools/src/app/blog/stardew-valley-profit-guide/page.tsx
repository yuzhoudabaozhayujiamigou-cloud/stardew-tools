import type { Metadata } from "next";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogReadNextPosts } from "@/lib/read-next";

const PUBLISHED_TIME_ISO = "2026-03-03T00:00:00.000Z";
const MODIFIED_TIME_ISO = "2026-03-03T00:00:00.000Z";

const FAQ_ITEMS = [
  {
    question: "What is the single best way to increase profit per day in Stardew Valley?",
    answer:
      "Improve throughput. Profit per day usually jumps more from processing (kegs/jars), consistent harvest cycles, and not wasting grow time than from chasing a slightly higher base crop price.",
  },
  {
    question: "Is the Keg always better than the Preserves Jar?",
    answer:
      "Not always. Kegs typically win on high-value crops over time, but jars can be better when you are limited by time, have many low-to-mid value crops, or need faster turnaround.",
  },
  {
    question: "Do animals or crops make more money?",
    answer:
      "Both can be top-tier. Crops scale fastest early, while animals can become extremely strong once you have reliable daily routines and processing (cheese/mayo) plus late-game multipliers.",
  },
  {
    question: "Should I sell raw crops or process them?",
    answer:
      "If you have machines and time, processing usually increases total profit. The best choice depends on the processing cycle length (keg days), the crop value, and your days-left window.",
  },
  {
    question: "How do profession bonuses change profit rankings?",
    answer:
      "They can flip close matchups. Artisan makes processed goods much stronger, while Tiller/ Agriculturist can raise crop profit or accelerate harvest cycles. Always calculate with your profession.",
  },
] as const;

export const metadata: Metadata = {
  title: "Stardew Valley Profit Guide (2026): Best Money Methods, Crops, Artisan, Animals",
  description:
    "A practical Stardew Valley profit guide focused on high-intent decisions: best crops by season, greenhouse scaling, artisan processing (keg vs jar), and animal profits—plus calculator links to run your real setup.",
  openGraph: {
    type: "article",
    title: "Stardew Valley Profit Guide (2026): Best Money Methods, Crops, Artisan, Animals",
    description:
      "A practical, calculator-driven profit guide for crops, greenhouse, artisan goods, and animals. Use presets to compare profit/day with your profession and days-left window.",
    publishedTime: PUBLISHED_TIME_ISO,
    modifiedTime: MODIFIED_TIME_ISO,
  },
};

export default function StardewValleyProfitGuide2026Page() {
  const fromPath = "/blog/stardew-valley-profit-guide";
  const readNextPosts = getBlogReadNextPosts("stardew-valley-profit-guide", 3);

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

        <FaqJsonLd faqs={FAQ_ITEMS.map((f) => ({ question: f.question, answer: f.answer }))} />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Stardew Valley Profit Guide (2026)" },
          ]}
        />

        <article className="space-y-8">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Pillar Guide</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Stardew Valley Profit Guide (2026)
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              This is a system-level money guide built for players who want clear decisions: what to plant, what to process, what
              to build next, and how to avoid the most common “I’m busy but broke” traps.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator"
                fromPath={fromPath}
                ctaName="profit_guide_open_calculator"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">
                  🧮
                </span>
                Open Profit Calculator
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/blog/best-greenhouse-crops-quick-answer"
                fromPath={fromPath}
                ctaName="profit_guide_internal_best_greenhouse"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🌿</span>
                Best Greenhouse Crops
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/blog/keg-vs-jar-quick-answer"
                fromPath={fromPath}
                ctaName="profit_guide_internal_keg_vs_jar"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🍷</span>
                Keg vs Jar
              </TrackedBlogCtaLink>
            </div>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Table of contents</h2>
            <nav className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              <a className="text-[#5c3d23] underline decoration-[#8a5b3a]/40 underline-offset-4 hover:decoration-[#7c4d2e]" href="#how-profit-actually-works">
                1) How profit actually works (and why players get stuck)
              </a>
              <a className="text-[#5c3d23] underline decoration-[#8a5b3a]/40 underline-offset-4 hover:decoration-[#7c4d2e]" href="#early-game-profit">
                2) Early game profit: simple loops that scale
              </a>
              <a className="text-[#5c3d23] underline decoration-[#8a5b3a]/40 underline-offset-4 hover:decoration-[#8a5b3a]/40 underline-offset-4 hover:decoration-[#7c4d2e]" href="#mid-game-processing">
                3) Mid game: processing throughput (kegs & jars)
              </a>
              <a className="text-[#5c3d23] underline decoration-[#8a5b3a]/40 underline-offset-4 hover:decoration-[#7c4d2e]" href="#greenhouse-strategy">
                4) Greenhouse strategy: the money engine
              </a>
              <a className="text-[#5c3d23] underline decoration-[#8a5b3a]/40 underline-offset-4 hover:decoration-[#7c4d2e]" href="#animal-profits">
                5) Animal profits: reliable daily income
              </a>
              <a className="text-[#5c3d23] underline decoration-[#8a5b3a]/40 underline-offset-4 hover:decoration-[#7c4d2e]" href="#late-game-multipliers">
                6) Late game multipliers and what to build next
              </a>
              <a className="text-[#5c3d23] underline decoration-[#8a5b3a]/40 underline-offset-4 hover:decoration-[#7c4d2e]" href="#faq">
                7) FAQ
              </a>
            </nav>
          </section>

          <section
            id="how-profit-actually-works"
            className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7"
          >
            <h2 className="text-2xl font-semibold text-[#4a321e]">1) How profit actually works (and why players get stuck)</h2>
            <p className="mt-3 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              Stardew Valley profit is not just “pick the highest price crop.” In practice, your gold per day is limited by three
              bottlenecks:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              <li>
                <strong>Grow time</strong>: every empty tile is lost revenue, and every crop that finishes after a season ends is a
                waste.
              </li>
              <li>
                <strong>Labor time</strong>: daily routes matter (watering, harvesting, petting, collecting). If your loop takes too
                long, you will avoid it.
              </li>
              <li>
                <strong>Processing throughput</strong>: kegs and jars can multiply value, but only if you can keep them busy.
              </li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              A useful mental model is: <strong>profit per day = (units per day) × (value per unit)</strong>. You can raise either
              side of the equation, but you get the biggest jumps by removing bottlenecks.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              If you want numbers for your actual situation (days left, profession, quality assumptions), open the calculator and
              compare presets instead of copying a listicle.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator"
                fromPath={fromPath}
                ctaName="profit_guide_calculator_core"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">📈</span>
                Compare Profit/Day
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section
            id="early-game-profit"
            className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7"
          >
            <h2 className="text-2xl font-semibold text-[#4a321e]">2) Early game profit: simple loops that scale</h2>
            <p className="mt-3 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              In the first spring and summer, you are usually bottlenecked by energy, watering, and cash flow. Your best “profit
              strategy” is to pick a crop loop you can actually execute every day.
            </p>
            <h3 className="mt-5 text-xl font-semibold text-[#4a321e]">Early game rules of thumb</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              <li>
                <strong>Don’t miss harvest windows.</strong> A slightly worse crop that you harvest on time beats a theoretical best
                crop you forget.
              </li>
              <li>
                <strong>Prioritize repeat-harvest crops</strong> when you are learning routes (fewer re-plant days).
              </li>
              <li>
                <strong>Buy seeds with a plan.</strong> If you have 10 days left, choose crops that complete and re-harvest in that
                window.
              </li>
            </ul>

            <p className="mt-4 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              If you are in the “season is almost over” situation, these quick answers are designed to help with high-intent
              searches:
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/blog/best-crops-10-days-left-quick-answer"
                fromPath={fromPath}
                ctaName="profit_guide_internal_10_days_left"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🗓️</span>
                Best Crops With 10 Days Left
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/blog/best-crops-7-days-left-before-season-switch"
                fromPath={fromPath}
                ctaName="profit_guide_internal_7_days_left"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">⏳</span>
                Best Crops With 7 Days Left
              </TrackedBlogCtaLink>
            </div>

            <p className="mt-5 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              When you have cash but not time, <strong>Sprinklers</strong> are effectively a profit multiplier: they convert time
              into extra tiles, and extra tiles into extra harvests. If your farm feels chaotic, aim for a simple loop: plant,
              water (or sprinkler), harvest, sell. Then add complexity.
            </p>
          </section>

          <section
            id="mid-game-processing"
            className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7"
          >
            <h2 className="text-2xl font-semibold text-[#4a321e]">3) Mid game: processing throughput (kegs & jars)</h2>
            <p className="mt-3 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              Mid game profit is where most guides become misleading. They say “turn everything into wine,” and then ignore that
              a keg takes days. If you have more crops than machines, the best choice is often:
              <strong> process your highest-value inputs first</strong> and sell the rest raw.
            </p>

            <h3 className="mt-5 text-xl font-semibold text-[#4a321e]">Keg vs Jar: how to decide</h3>
            <p className="mt-3 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              Think in two numbers: <strong>total value gained</strong> and <strong>days occupied</strong>. A keg might give a bigger
              multiplier but also ties up the slot longer. That means jars can win in tight windows (end of season) or when your
              farm produces lots of medium crops.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              If you want a fast answer with direct calculator presets, use our internal comparison:
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/blog/keg-vs-jar-quick-answer"
                fromPath={fromPath}
                ctaName="profit_guide_internal_keg_vs_jar_2"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🍯</span>
                Keg vs Jar (With Presets)
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/blog/how-many-kegs-do-i-need-quick-answer"
                fromPath={fromPath}
                ctaName="profit_guide_internal_kegs_needed"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🧰</span>
                How Many Kegs Do I Need?
              </TrackedBlogCtaLink>
            </div>

            <h3 className="mt-6 text-xl font-semibold text-[#4a321e]">Throughput checklist (the part most guides skip)</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              <li>
                <strong>Do you have enough machines?</strong> If not, pick your top inputs and sell overflow raw.
              </li>
              <li>
                <strong>Are you missing reload days?</strong> A keg that sits empty is worse than a jar that runs every day.
              </li>
              <li>
                <strong>Is your profession set?</strong> Artisan massively changes the ranking for processed goods.
              </li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              Practical tip: if you are limited by machine count, it can be optimal to standardize your pipeline. For example:
              “All high-value fruit into kegs; everything else sold raw or jarred.” Standardization reduces decision fatigue.
            </p>
          </section>

          <section
            id="greenhouse-strategy"
            className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7"
          >
            <h2 className="text-2xl font-semibold text-[#4a321e]">4) Greenhouse strategy: the money engine</h2>
            <p className="mt-3 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              The greenhouse is where profit becomes consistent, because you remove seasonal risk and can build a stable harvest +
              processing schedule. Most players make one of two mistakes:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              <li>
                <strong>Switching crops too often</strong> and losing regrowth time.
              </li>
              <li>
                <strong>Choosing a crop before planning processing</strong> (you end up with mountains of fruit and empty kegs).
              </li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              A good greenhouse plan ties together: crop cycle → harvest frequency → machine cycle. That’s why “Ancient Fruit vs
              Starfruit” is not a universal answer. Ancient Fruit is easy and consistent; Starfruit can be stronger in certain
              pipelines but demands replanting.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              Use the greenhouse guide for a staged plan (early/mid/late) and presets you can modify:
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/blog/best-greenhouse-crops-quick-answer"
                fromPath={fromPath}
                ctaName="profit_guide_internal_greenhouse_quick"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🏡</span>
                Best Greenhouse Crops (With Presets)
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section
            id="animal-profits"
            className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7"
          >
            <h2 className="text-2xl font-semibold text-[#4a321e]">5) Animal profits: reliable daily income</h2>
            <p className="mt-3 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              Animals are the “steady paycheck” option. They shine when you want daily income with predictable routines. The key
              is that animals are not only about the raw product; they are about <strong>processed goods</strong> and consistency.
            </p>

            <h3 className="mt-5 text-xl font-semibold text-[#4a321e]">How to evaluate animal profit</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              <li>
                <strong>Collection time matters.</strong> If you skip petting/collecting, the math collapses.
              </li>
              <li>
                <strong>Processing is often the multiplier.</strong> Mayo and cheese stabilize income and usually beat selling raw.
              </li>
              <li>
                <strong>Space is a cost.</strong> If your farm is tile-limited, compare animals to high-density crop plots.
              </li>
            </ul>

            <p className="mt-4 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              If you are choosing between “more kegs” and “more barns,” decide based on your time budget. Kegs are bulk processing
              with periodic reloads; animals ask for small daily attention.
            </p>
          </section>

          <section
            id="late-game-multipliers"
            className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7"
          >
            <h2 className="text-2xl font-semibold text-[#4a321e]">6) Late game multipliers and what to build next</h2>
            <p className="mt-3 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              Late game “profit” often becomes a construction and routing problem. Your biggest gains come from stacking
              multipliers:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              <li>
                <strong>Machine density</strong>: build enough kegs/jars that your harvest does not overflow.
              </li>
              <li>
                <strong>Transport & layout</strong>: minimize walking to keep routines painless.
              </li>
              <li>
                <strong>Profession alignment</strong>: Artisan for processing; other professions for niche loops.
              </li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
              If you want a simple decision framework, use this order:
              <strong> eliminate idle time → eliminate empty tiles → eliminate empty machines</strong>. When all three are under
              control, you will feel “rich” even if your crop choice is not perfect.
            </p>
          </section>

          <section
            id="faq"
            className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7"
          >
            <h2 className="text-2xl font-semibold text-[#4a321e]">7) FAQ</h2>
            <div className="mt-4 space-y-4">
              {FAQ_ITEMS.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-[#8a5b3a]/35 bg-[#fff8e8]/70 p-4 shadow-sm"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-[#4a321e] sm:text-base">
                    {item.question}
                  </summary>
                  <p className="mt-2 text-sm leading-7 text-[#5f4228]/90 sm:text-base">{item.answer}</p>
                </details>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[#8a5b3a]/35 bg-[#fff2c8]/70 p-4">
              <p className="text-sm leading-7 text-[#5f4228]/90 sm:text-base">
                Want the profit answer for <strong>your</strong> farm? The fastest path is to open the calculator, set your profession,
                and compare presets.
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <TrackedBlogCtaLink
                  href="/calculator"
                  fromPath={fromPath}
                  ctaName="profit_guide_footer_calculator"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
                >
                  <span aria-hidden className="inline-flex items-center leading-none opacity-85">🧮</span>
                  Run Your Numbers
                </TrackedBlogCtaLink>
              </div>
            </div>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="stardew-valley-profit-guide" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}

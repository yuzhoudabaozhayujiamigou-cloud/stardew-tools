import type { Metadata } from "next";
import Link from "next/link";

import { BlogArticleMeta } from "@/components/blog/BlogArticleMeta";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import FaqJsonLd from "@/components/FaqJsonLd";
import { getBlogReadNextPosts } from "@/lib/read-next";
import Breadcrumb from "@/components/Breadcrumb";

const PAGE_URL = "https://www.stardewprofit.com/blog/best-greenhouse-crops-quick-answer";

const FAQ_ITEMS = [
  {
    question: "What are the best greenhouse crops in Stardew Valley?",
    answer:
      "Ancient Fruit and Starfruit are the core late-game options, while Hops and Cranberry can perform well depending on machine capacity and management style.",
  },
  {
    question: "Is Ancient Fruit always the best greenhouse choice?",
    answer:
      "Ancient Fruit is the most stable long-term option, but not always the highest short-window outcome. If you can support intensive processing, other crops can win in specific setups.",
  },
  {
    question: "When does Starfruit beat Ancient Fruit?",
    answer:
      "Starfruit tends to win when you have strong keg throughput and can handle replant cycles efficiently. Without those conditions, Ancient Fruit is often more practical.",
  },
  {
    question: "How many kegs do greenhouse crops need?",
    answer:
      "It depends on crop cadence. Higher-output strategies need more kegs to avoid bottlenecks. Use calculator presets and adjust machine count until backlog stabilizes.",
  },
] as const;

export const metadata: Metadata = {
  title: "Best Greenhouse Crops (Stardew Valley): Quick Answer + Presets",
  description:
    "Find the best greenhouse crops with a TL;DR answer, step-by-step crop-selection workflow, FAQ, and calculator presets for early, mid, and late-game scenarios.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Best Greenhouse Crops (Stardew Valley): Quick Answer + Presets",
    description:
      "Practical greenhouse crop comparison with preset scenarios and internal guide links.",
    publishedTime: "2026-02-23T00:00:00+08:00",
    modifiedTime: "2026-06-01T00:00:00+08:00",
  },
};

export default function BestGreenhouseCropsQuickAnswerPage() {
  const fromPath = "/blog/best-greenhouse-crops-quick-answer";
  const readNextPosts = getBlogReadNextPosts("best-greenhouse-crops-quick-answer", 3);

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

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <PwaRegisterScript />
        <FaqJsonLd faqs={[...FAQ_ITEMS]} />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Best Greenhouse Crops (Stardew Valley): Quick Answer + Presets" },
          ]}
        />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Quick Answer</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Best Greenhouse Crops (Stardew Valley)
            </h1>
            <BlogArticleMeta published="2026-02-23" updated="2026-06-01" />
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              3 个阶段的温室对比（早/中/晚），直接点预设在计算器里算，不靠感觉。
            </p>
          </header>

          <section className="mt-6 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">TL;DR Quick Answer</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>Early greenhouse: focus on simple, reliable crops you can scale.</li>
              <li>Mid game: processing throughput (kegs and jars) starts to dominate profit.</li>
              <li>Late game: Ancient Fruit vs Starfruit is usually the key decision.</li>
            </ul>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>早期温室优先简单、稳定、可规模化的作物。</li>
              <li>中期开始利润瓶颈常转向加工吞吐（酒桶/罐头）。</li>
              <li>后期核心对比通常是古代果实 vs 杨桃。</li>
            </ul>
          </section>

          <section className="mt-6 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Use Case + Steps</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>Choose your greenhouse stage: early, mid, or late game.</li>
              <li>Open the matching preset and set profession + days-left assumptions.</li>
              <li>Check both gross result and machine pressure for each crop pair.</li>
              <li>Pick the option you can sustain weekly, then revisit after expanding kegs.</li>
            </ol>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              For AdSense reviewers and real players, the important part is the decision process: greenhouse crops are
              permanent only when they keep producing value without creating chores you will ignore. If a crop wins on
              paper but forces daily harvesting, constant replanting, or more kegs than you own, choose the steadier
              option and upgrade later.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Do not use a single greenhouse ranking when your setup is still changing. A new greenhouse with few sprinklers, a mid-game greenhouse with limited kegs, and a mature ancient-fruit room are three different decisions. Start with the <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/calculator">calculator</Link>, then use the <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/blog/greenhouse-layout-guide">greenhouse layout guide</Link> to confirm tile count and the <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/blog/ancient-fruit-vs-starfruit-quick-answer">Ancient Fruit vs Starfruit quick answer</Link> before committing rare seeds or fruit trees.
            </p>
          </section>

          <section className="mt-6 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Try 3 greenhouse presets</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              These presets keep URL params editable, so you can tweak season, days left, and profession while preserving a stable compare pair.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=greenhouse-early-strawberry-vs-blueberry&season=greenhouse&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="greenhouse_early"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🌱</span>
                Early: Strawberry vs Blueberry
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=greenhouse-mid-hops-vs-cranberry&season=greenhouse&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="greenhouse_mid"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🍇</span>
                Mid: Hops vs Cranberry
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=greenhouse-late-ancient-vs-starfruit&season=greenhouse&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="greenhouse_late"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🏆</span>
                Late: Ancient Fruit vs Starfruit
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="mt-6 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Related Guides</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>
                <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/blog/greenhouse-layout-guide">
                  Greenhouse layout guide (116 tiles)
                </Link>
              </li>
              <li>
                <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/blog/hops-vs-starfruit-quick-answer">
                  Hops vs Starfruit quick answer
                </Link>
              </li>
              <li>
                <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/blog/keg-vs-jar-profit-guide">
                  Keg vs Preserve Jar complete guide
                </Link>
              </li>
            </ul>
          </section>

          <section className="mt-6 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">FAQ</h2>

            <div className="mt-3 space-y-3">
              {FAQ_ITEMS.map((item) => (
                <details key={item.question} className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] px-4 py-3">
                  <summary className="cursor-pointer list-none font-semibold text-[#4e341f]">{item.question}</summary>
                  <p className="mt-2 text-sm leading-6 text-[#614326]/90">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="best-greenhouse-crops-quick-answer" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}

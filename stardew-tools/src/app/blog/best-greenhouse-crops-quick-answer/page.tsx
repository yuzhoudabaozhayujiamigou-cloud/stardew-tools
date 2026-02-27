import type { Metadata } from "next";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import FaqJsonLd from "@/components/FaqJsonLd";
import { getBlogReadNextPosts } from "@/lib/read-next";
import Breadcrumb from "@/components/Breadcrumb";

const FAQ_EN = [
  "What are the best greenhouse crops in Stardew Valley?",
  "Is Ancient Fruit always the best choice?",
  "When does Starfruit beat Ancient Fruit?",
  "Do Hops outperform Cranberries in a greenhouse setup?",
  "Does Artisan profession change greenhouse crop rankings?",
  "How many kegs do I need for greenhouse crops?",
] as const;

const FAQ_ZH = [
  "温室里种什么最赚钱？",
  "古代果实是不是永远最优？",
  "什么时候杨桃会赢过古代果实？",
  "啤酒花和蔓越莓温室里怎么选？",
  "Artisan 会改变温室作物排名吗？",
  "温室作物大概需要多少酒桶？",
] as const;

export const metadata: Metadata = {
  openGraph: {
    type: "article",
    publishedTime: "2026-02-23T00:00:00+08:00",
    modifiedTime: "2026-02-23T00:00:00+08:00",
  },
  title: "Best Greenhouse Crops (Quick Answer + Profit Calculator)",
  description:
    "A quick, practical greenhouse crop guide for Stardew Valley. Compare early, mid, and late greenhouse scenarios with direct calculator presets.",
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

      <main className="relative z-10 mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        <PwaRegisterScript />
        <FaqJsonLd
          faqs={FAQ_EN.map((question, index) => ({
            question,
            answer: FAQ_ZH[index] ?? "",
          }))}
        />

        
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Best Greenhouse Crops (Quick Answer + Profit Calculator)" },
          ]}
        />

<header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Quick Answer</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Best Greenhouse Crops (Stardew Valley)
          </h1>
          <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            3 个阶段的温室对比（早/中/晚），直接点预设在计算器里算，不靠感觉。
          </p>
        </header>

        <section className="mt-6 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
          <h2 className="text-xl font-semibold text-[#4a321e]">TL;DR</h2>
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
          <h2 className="text-xl font-semibold text-[#4a321e]">FAQ</h2>

          <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#6f4b2a]/80">EN</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90">
            {FAQ_EN.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-[#6f4b2a]/80">ZH</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90">
            {FAQ_ZH.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </section>

        <BlogReadNext posts={readNextPosts} currentSlug="best-greenhouse-crops-quick-answer" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}


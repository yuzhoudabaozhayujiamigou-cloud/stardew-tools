import type { Metadata } from "next";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { getBlogReadNextPosts } from "@/lib/read-next";

const FAQ_EN = [
  "Is Artisan better than Tiller for long-term money?",
  "Can I still use this guide if my calculator currently focuses on Artisan mode?",
  "Which crops show the biggest processing upside?",
  "Do spring crops react differently from fall crops?",
  "How should I test my own setup quickly?",
] as const;

const FAQ_ZH = [
  "长期收益看，Artisan 一定比 Tiller 更好吗？",
  "如果计算器当前偏 Artisan，这篇还适用吗？",
  "哪些作物最能体现加工加成？",
  "春季和秋季作物的表现会不同吗？",
  "怎么快速验证自己的实际配置？",
] as const;

export const metadata: Metadata = {
  openGraph: {
    type: "article",
    publishedTime: "2026-02-24T00:00:00+08:00",
    modifiedTime: "2026-02-24T00:00:00+08:00",
  },
  title: "Artisan vs Tiller: Which Makes More Money? (Quick Answer)",
  description:
    "SEO quick answer page for Artisan vs Tiller, implemented with calculator-compatible Artisan presets only.",
};

export default function ArtisanVsTillerQuickAnswerPage() {
  const fromPath = "/blog/artisan-vs-tiller-quick-answer";

    const readNextPosts = getBlogReadNextPosts("artisan-vs-tiller-quick-answer", 3);

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

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Quick Answer</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Artisan vs Tiller: Which Makes More Money?
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              SEO 语义保留 Artisan vs Tiller；当前实现保持与现有计算器兼容（仅使用 Artisan 预设链路）。
            </p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">TL;DR</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>Processing-heavy chains usually benefit more from Artisan assumptions.</li>
              <li>Pure farming choices still vary by season and harvest rhythm.</li>
              <li>Use presets below to compare scenarios quickly with your own timing.</li>
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Try 3 presets</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=artisan-vs-tiller-processing&season=greenhouse&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="artisan_vs_tiller_processing"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">⚗️</span>
                Processing: Starfruit vs Ancient Fruit
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=artisan-vs-tiller-farming&season=spring&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="artisan_vs_tiller_farming"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🌱</span>
                Farming: Strawberry vs Blueberry
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=artisan-vs-tiller-mixed&season=fall&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="artisan_vs_tiller_mixed"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🍂</span>
                Mixed: Pumpkin vs Cranberry
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
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
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="artisan-vs-tiller-quick-answer" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}


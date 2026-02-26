import type { Metadata } from "next";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { getBlogReadNextPosts } from "@/lib/read-next";

const FAQ_EN = [
  "Is wine more profitable than juice in Stardew Valley?",
  "Does Artisan profession increase both wine and juice value?",
  "When should I skip kegs and stay with simpler chains?",
  "Which crops are better for wine-focused processing?",
  "How does greenhouse timing affect wine vs juice?",
] as const;

const FAQ_ZH = [
  "在星露谷里 wine 一定比 juice 更赚钱吗？",
  "Artisan 是否会同时提高 wine 和 juice 收益？",
  "什么时候应该跳过酒桶，走更轻量的链路？",
  "哪些作物更适合 wine 导向的加工？",
  "温室节奏会如何影响 wine vs juice 的结论？",
] as const;

export const metadata: Metadata = {
  openGraph: {
    type: "article",
    publishedTime: "2026-02-24T00:00:00+08:00",
    modifiedTime: "2026-02-24T00:00:00+08:00",
  },
  title: "Wine vs Juice: Which Is More Profitable? (Quick Answer)",
  description:
    "Quick answer for Wine vs Juice with three calculator presets: keg-heavy, balanced, and no-kegs setup.",
};

export default function WineVsJuiceQuickAnswerPage() {
  const fromPath = "/blog/wine-vs-juice-quick-answer";

    const readNextPosts = getBlogReadNextPosts("wine-vs-juice-quick-answer", 3);

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
              Stardew Wine vs Juice: Which Is More Profitable?
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              一句话：看你的加工吞吐和作物结构。用预设快速对比，比凭感觉更稳定。
            </p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">TL;DR</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>Keg-heavy setups usually reward high-value crops more strongly.</li>
              <li>Balanced setups depend on crop mix and your processing cadence.</li>
              <li>No-kegs scenarios can still be competitive with simpler, faster choices.</li>
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Try 3 presets</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=wine-vs-juice-keg-heavy&season=summer&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="wine_vs_juice_keg_heavy"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🍷</span>
                Keg-heavy: Starfruit vs Pumpkin
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=wine-vs-juice-balanced&season=greenhouse&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="wine_vs_juice_balanced"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">⚖️</span>
                Balanced: Ancient Fruit vs Starfruit
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=wine-vs-juice-no-kegs&season=summer&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="wine_vs_juice_no_kegs"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🥤</span>
                No-kegs: Blueberry vs Cranberry
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

        <BlogReadNext posts={readNextPosts} currentSlug="wine-vs-juice-quick-answer" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}


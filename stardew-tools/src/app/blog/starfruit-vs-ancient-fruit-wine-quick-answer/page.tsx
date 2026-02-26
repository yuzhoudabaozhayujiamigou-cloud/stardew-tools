import type { Metadata } from "next";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { getBlogReadNextPosts } from "@/lib/read-next";

const FAQ_EN = [
  "Which wine is more profitable: Starfruit or Ancient Fruit?",
  "Is Ancient Fruit Wine better for long-term greenhouse play?",
  "Is Starfruit Wine better for short windows like 10 days left?",
  "Does Artisan profession change the winner?",
] as const;

const FAQ_ZH = [
  "杨桃酒和古代果实酒，哪个更赚钱？",
  "温室长期玩法下，古代果实酒是否更稳？",
  "如果只剩 10 天，杨桃酒是否更占优？",
  "Artisan 职业会改变结论吗？",
] as const;

export const metadata: Metadata = {
  openGraph: {
    type: "article",
    publishedTime: "2026-02-24T00:00:00+08:00",
    modifiedTime: "2026-02-24T00:00:00+08:00",
  },
  title: "Starfruit vs Ancient Fruit Wine (Quick Answer + Profit Calculator)",
  description:
    "Quick answer for Starfruit Wine vs Ancient Fruit Wine with 3 calculator presets for summer, greenhouse, and short-window scenarios.",
};

export default function StarfruitVsAncientFruitWineQuickAnswerPage() {
  const fromPath = "/blog/starfruit-vs-ancient-fruit-wine-quick-answer";

    const readNextPosts = getBlogReadNextPosts("starfruit-vs-ancient-fruit-wine-quick-answer", 3);

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
              Starfruit vs Ancient Fruit Wine - Best Profit Pick
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              一句话：要爆发收益看杨桃酒；要长期省心看古代果实酒。用下面 3 个预设直接在计算器里复现。
            </p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">TL;DR</h2>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>If you want peak profit per harvest and can replant, Starfruit Wine is usually stronger.</li>
              <li>If you want low-maintenance long-run consistency, Ancient Fruit Wine is usually the better baseline.</li>
              <li>Do not guess. Open a preset and compare with your season and days left.</li>
            </ul>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>追求单次爆发收益且能补种：杨桃酒通常更强。</li>
              <li>追求长期稳定且省心：古代果实酒通常更优。</li>
              <li>别靠感觉：用预设直接带入计算器，按你自己的窗口期对比。</li>
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">How to decide in 30 seconds</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>Short campaign (10-28 days): Starfruit Wine often wins on burst output.</li>
              <li>Greenhouse long run: Ancient Fruit Wine is usually the stable default engine.</li>
              <li>If your processing line is tight, compare both with identical parameters before committing.</li>
            </ol>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Try 3 presets</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              All links use current supported params only: preset, season, daysLeft, profession=artisan.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=starfruit-wine-summer-28d&season=summer&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="starfruit_wine_summer_28d"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">☀️</span>
                Starfruit Wine - Summer 28 Days
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=ancient-fruit-wine-greenhouse-28d&season=greenhouse&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="ancient_fruit_wine_greenhouse_28d"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🌿</span>
                Ancient Fruit Wine - Greenhouse 28 Days
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=starfruit-wine-summer-10d&season=summer&daysLeft=10&profession=artisan"
                fromPath={fromPath}
                ctaName="starfruit_wine_summer_10d"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">⏳</span>
                Starfruit Wine - Summer 10 Days Left
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

            <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#6f4b2a]/80">ZH</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90">
              {FAQ_ZH.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="starfruit-vs-ancient-fruit-wine-quick-answer" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}


import type { Metadata } from "next";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import FaqJsonLd from "@/components/FaqJsonLd";
import { getBlogReadNextPosts } from "@/lib/read-next";
import Breadcrumb from "@/components/Breadcrumb";

const FAQ_EN = [
  "Is Hops better than Starfruit for keg profit?",
  "When does Starfruit win over Hops?",
  "What if I only have 10 days left in the season?",
  "Does Artisan profession change the winner?",
] as const;

const FAQ_ZH = [
  "啤酒花和杨桃，做酒桶（keg）谁更赚？",
  "什么时候杨桃会反超啤酒花？",
  "如果只剩 10 天该选哪个？",
  "工匠（Artisan）会改变结论吗？",
] as const;

export const metadata: Metadata = {
  openGraph: {
    type: "article",
    publishedTime: "2026-02-24T00:00:00+08:00",
    modifiedTime: "2026-02-24T00:00:00+08:00",
  },
  title: "Hops vs Starfruit (Quick Answer + Profit Calculator)",
  description:
    "Quick answer for Hops vs Starfruit with 3 calculator presets (summer full season, short window, greenhouse baseline). Compare instantly with identical parameters.",
};

export default function HopsVsStarfruitQuickAnswerPage() {
  const fromPath = "/blog/hops-vs-starfruit-quick-answer";

    const readNextPosts = getBlogReadNextPosts("hops-vs-starfruit-quick-answer", 3);

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
            { name: "Hops vs Starfruit (Quick Answer + Profit Calculator)" },
          ]}
        />

<article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Quick Answer</p>

            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Hops vs Starfruit - Best Profit Pick
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              One line: Hops often shines when you want frequent, steady keg input; Starfruit often shines when you
              want high burst value per harvest. Use the presets below and compare with your own season and days
              left.
            </p>

            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              一句话：想要更频繁、更稳定的酒桶输入，啤酒花通常很强；想要单次爆发更高的收获价值，杨桃通常更强。别靠感觉，直接用预设在计算器里对比。
            </p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">TL;DR</h2>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>If your goal is a steady keg routine with frequent inputs, Hops is often a strong pick.</li>
              <li>
                If your goal is maximum burst value per harvest and you can handle replant cycles, Starfruit is often
                strong.
              </li>
              <li>Do not guess. Compare both with identical parameters (season, days left, profession).</li>
            </ul>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>目标是稳定高频周转：啤酒花通常更适合。</li>
              <li>目标是单次收获爆发：杨桃通常更适合。</li>
              <li>别争：用同一组参数在计算器里一键对比。</li>
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">How to decide in 30 seconds</h2>

            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>If you only have a short window (10 days), run the short-window preset and pick the higher result.</li>
              <li>If you want a full-season plan, run the 28-day Summer preset and pick the higher result.</li>
              <li>If you are greenhouse-focused, run the greenhouse preset as a stable baseline.</li>
            </ol>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Try 3 presets</h2>

            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              All links use only supported params: preset, season, daysLeft, profession=artisan.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=hops-vs-starfruit-summer-28d&season=summer&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="hops_vs_starfruit_summer_28d"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">☀️</span>
                Summer 28 Days (Compare)
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=hops-vs-starfruit-greenhouse-28d&season=greenhouse&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="hops_vs_starfruit_greenhouse_28d"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🌿</span>
                Greenhouse 28 Days (Compare)
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=hops-vs-starfruit-summer-10d&season=summer&daysLeft=10&profession=artisan"
                fromPath={fromPath}
                ctaName="hops_vs_starfruit_summer_10d"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">⏳</span>
                Summer 10 Days Left (Compare)
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">FAQ</h2>

            <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#6f4b2a]/80">EN</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              {FAQ_EN.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>

            <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#6f4b2a]/80">ZH</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              {FAQ_ZH.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="hops-vs-starfruit-quick-answer" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}


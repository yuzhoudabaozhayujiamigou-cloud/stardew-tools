import type { Metadata } from "next";
import Link from "next/link";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import FaqJsonLd from "@/components/FaqJsonLd";
import { getBlogReadNextPosts } from "@/lib/read-next";
import Breadcrumb from "@/components/Breadcrumb";

const PAGE_URL = "https://www.stardewprofit.com/blog/how-many-kegs-do-i-need-quick-answer";

const FAQ_ITEMS = [
  {
    question: "How many kegs do I need for Starfruit wine?",
    answer:
      "Start with enough kegs to keep your best harvest from sitting idle. If you still have large chest backlog after each harvest cycle, add more kegs before expanding crop tiles.",
  },
  {
    question: "Do Ancient Fruit and Hops need the same keg count?",
    answer:
      "No. Hops creates much heavier input pressure because of frequent output, while Ancient Fruit is easier to stabilize with fewer kegs per tile.",
  },
  {
    question: "Does Artisan profession change keg planning?",
    answer:
      "Artisan boosts processed value, so under-building kegs becomes more expensive in opportunity cost. The profession usually increases the payoff of expanding your keg line.",
  },
  {
    question: "What if I cannot craft enough kegs yet?",
    answer:
      "Use a hybrid setup: route top-value fruit into existing kegs, sell some crops raw, and use jars for overflow. This keeps cashflow moving while you scale materials.",
  },
] as const;

export const metadata: Metadata = {
  title: "How Many Kegs Do I Need? (Stardew Valley Quick Planner)",
  description:
    "Estimate keg count fast with a TL;DR benchmark, practical step-by-step workflow, FAQ, and calculator presets for small, mid, and heavy processing farms.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "How Many Kegs Do I Need? (Stardew Valley Quick Planner)",
    description:
      "Use-case based keg planning with presets for starter, balanced, and heavy processing setups.",
    publishedTime: "2026-02-23T00:00:00+08:00",
    modifiedTime: "2026-02-23T00:00:00+08:00",
  },
};

export default function HowManyKegsDoINeedQuickAnswerPage() {
  const fromPath = "/blog/how-many-kegs-do-i-need-quick-answer";
  const readNextPosts = getBlogReadNextPosts("how-many-kegs-do-i-need-quick-answer", 3);

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
            { name: "How Many Kegs Do I Need? (Stardew Valley Quick Planner)" },
          ]}
        />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Quick Answer</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">How Many Kegs Do I Need?</h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">酒桶要做多少才够？一页看懂：小作坊 / 中等产线 / 重度产线。</p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">TL;DR Quick Answer</h2>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>If you are early game, start with a small keg core and avoid overbuilding.</li>
              <li>As crop volume grows, keg throughput (time plus count) becomes the main bottleneck.</li>
              <li>Use preset scenarios below to compare your setup instantly instead of guessing.</li>
            </ul>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>前期先做小规模酒桶核心，不要一次性铺太大。</li>
              <li>中后期核心瓶颈不是种子，而是酒桶吞吐（耗时 + 数量）。</li>
              <li>直接点下面的预设场景对比，比凭感觉靠谱得多。</li>
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Use Case + Steps</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>Pick one crop chain you actually run now (for example Starfruit or Ancient Fruit).</li>
              <li>Open the matching preset and set your true season/days-left values.</li>
              <li>Check whether processed output is waiting in storage after harvest.</li>
              <li>If backlog remains week to week, increase kegs before adding more crop tiles.</li>
            </ol>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              This pairs well with{" "}
              <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/calculator">
                the crop profit calculator
              </Link>{" "}
              for fast what-if checks.
            </p>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Try 3 keg planning presets</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              These presets keep URL params editable, so you can tweak season, days left, and profession while preserving a stable comparison pair.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=keg-count-small-workshop&season=summer&daysLeft=15&profession=artisan"
                fromPath={fromPath}
                ctaName="keg_count_small_workshop"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  🛠️
                </span>
                Small Workshop (starter)
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=keg-count-mid-farm&season=summer&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="keg_count_mid_farm"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  ⚙️
                </span>
                Mid Farm (balanced)
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=keg-count-heavy-processing&season=greenhouse&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="keg_count_heavy_processing"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  🏭
                </span>
                Heavy Processing (late game)
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Related Guides</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>
                <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/blog/keg-vs-jar-profit-guide">
                  Keg vs Preserve Jar complete guide
                </Link>
              </li>
              <li>
                <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/blog/hops-vs-starfruit-quick-answer">
                  Hops vs Starfruit quick answer
                </Link>
              </li>
              <li>
                <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/blog/greenhouse-layout-guide">
                  Greenhouse layout guide
                </Link>
              </li>
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
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

        <BlogReadNext posts={readNextPosts} currentSlug="how-many-kegs-do-i-need-quick-answer" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}

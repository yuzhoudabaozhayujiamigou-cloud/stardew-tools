import type { Metadata } from "next";
import Link from "next/link";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import FaqJsonLd from "@/components/FaqJsonLd";
import { getBlogReadNextPosts } from "@/lib/read-next";
import Breadcrumb from "@/components/Breadcrumb";
import { BlogArticleMeta } from "@/components/blog/BlogArticleMeta";

const PAGE_URL = "https://www.stardewprofit.com/blog/artisan-vs-tiller-quick-answer";

const FAQ_ITEMS = [
  {
    question: "Is Artisan better than Tiller for long-term money?",
    answer:
      "Artisan usually wins once your farm is processing-heavy. Tiller can still be useful earlier when most income comes from raw crops rather than crafted goods.",
  },
  {
    question: "Can I still use this guide if I currently run Artisan-only presets?",
    answer:
      "Yes. Use this page as a decision framework and compare scenarios consistently. The key is to keep assumptions fixed while testing different crop chains.",
  },
  {
    question: "Which crops show the biggest processing upside?",
    answer:
      "High-value fruit and keg-focused chains usually show the clearest upside because processed multipliers scale strongly with stable input and machine uptime.",
  },
  {
    question: "How should I test my own setup quickly?",
    answer:
      "Pick one season, run one farming-focused preset and one processing-focused preset, then compare output and backlog risk. Repeat with your real days-left value.",
  },
] as const;

export const metadata: Metadata = {
  title: "Artisan vs Tiller: Quick Answer + Profit Workflow",
  description:
    "Artisan or Tiller for better money? Use the TL;DR rule, step-by-step comparison flow, FAQ, and calculator presets to test your own Stardew Valley farm setup.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Artisan vs Tiller: Quick Answer + Profit Workflow",
    description:
      "Decision framework for Artisan vs Tiller with practical presets and FAQ.",
    publishedTime: "2026-02-24T00:00:00+08:00",
    modifiedTime: "2026-02-24T00:00:00+08:00",
  },
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

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <PwaRegisterScript />
        <FaqJsonLd faqs={[...FAQ_ITEMS]} />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Artisan vs Tiller: Quick Answer + Profit Workflow" },
          ]}
        />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Quick Answer</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Artisan vs Tiller: Which Makes More Money?
            </h1>
            <BlogArticleMeta published="2026-03-21" updated="2026-03-21" />
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Compare the Artisan and Tiller professions with a quick profit workflow and presets you can run in minutes.
            </p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">TL;DR Quick Answer</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>Processing-heavy chains usually benefit more from Artisan assumptions.</li>
              <li>Pure farming choices still vary by season and harvest rhythm.</li>
              <li>Use presets below to compare scenarios quickly with your own timing.</li>
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Use Case + Steps</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>Choose one target season and set the same days-left value across tests.</li>
              <li>Run one processing-heavy preset and one farming-heavy preset.</li>
              <li>Compare results and check if your machines can keep up with crop flow.</li>
              <li>Pick the path that gives stable output with less idle time and less backlog.</li>
            </ol>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Start with{" "}
              <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/calculator">
                the calculator baseline
              </Link>
              .
            </p>
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
            <h2 className="text-xl font-semibold text-[#4a321e]">Related Guides</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>
                <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/blog/keg-vs-jar-quick-answer">
                  Keg vs Jar quick answer
                </Link>
              </li>
              <li>
                <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/blog/best-crops-year-1">
                  Best crops year 1 guide
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

        <BlogReadNext posts={readNextPosts} currentSlug="artisan-vs-tiller-quick-answer" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}

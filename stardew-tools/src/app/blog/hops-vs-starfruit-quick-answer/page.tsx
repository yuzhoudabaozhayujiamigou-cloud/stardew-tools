import type { Metadata } from "next";
import Link from "next/link";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import FaqJsonLd from "@/components/FaqJsonLd";
import { getBlogReadNextPosts } from "@/lib/read-next";
import Breadcrumb from "@/components/Breadcrumb";

const PAGE_URL = "https://www.stardewprofit.com/blog/hops-vs-starfruit-quick-answer";

const FAQ_ITEMS = [
  {
    question: "Is Hops or Starfruit more profitable in Stardew Valley?",
    answer:
      "It depends on your setup. Hops produces Pale Ale every 1-2 days for steady daily gold, while Starfruit Wine takes 7 days but yields a higher single sale. With enough kegs, Hops usually edges ahead on gold-per-day; with limited kegs, Starfruit's burst value wins.",
  },
  {
    question: "When does Starfruit beat Hops?",
    answer:
      "Starfruit usually gains ground when you have limited kegs and can consistently process high-value harvests. It also wins in the Greenhouse where the longer grow time doesn't cost you a season.",
  },
  {
    question: "What if I only have 10 days left in the season?",
    answer:
      "With only 10 days left, Hops can still squeeze in multiple harvests while Starfruit cannot finish a full grow cycle. Run the 10-day preset in the calculator to see exact numbers for your save.",
  },
  {
    question: "Does Artisan profession change the result?",
    answer:
      "Yes — Artisan adds +40% to all artisan goods, which boosts both Pale Ale and Starfruit Wine equally in percentage terms. However, because Starfruit Wine has a higher base price, the absolute gold gain from Artisan is larger for Starfruit. Always toggle the profession in the calculator to compare.",
  },
  {
    question: "How much gold per day does Hops make vs Starfruit?",
    answer:
      "With Artisan, a single Hops plant can yield roughly 420g per Pale Ale every 1-2 days. A single Starfruit plant yields about 3,150g per Wine but takes 7 days in the keg plus the longer grow time. Hops wins on throughput; Starfruit wins on per-harvest value.",
  },
  {
    question: "Should I grow Hops or Starfruit in the Greenhouse?",
    answer:
      "Starfruit is generally the better Greenhouse pick. The Greenhouse removes seasonal pressure, so Starfruit's slow grow time stops being a disadvantage — and its higher per-Wine value shines over a full year of harvests.",
  },
  {
    question: "Can I grow both Hops and Starfruit at the same time?",
    answer:
      "Yes, and many players do. A mixed setup lets you maintain steady Pale Ale income from Hops while stockpiling Starfruit for high-value Wine batches. Use the calculator to find the optimal split for your keg count.",
  },
] as const;

export const metadata: Metadata = {
  title: "Hops vs Starfruit Stardew Valley – Which Crop Is More Profitable? (2026)",
  description:
    "Hops vs Starfruit: Hops wins on gold-per-day with enough kegs; Starfruit Wine wins per-harvest. Get the verdict + free calculator presets for 10-day, 28-day & Greenhouse.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Hops vs Starfruit Stardew Valley – Which Crop Is More Profitable? (2026)",
    description:
      "Hops vs Starfruit: Hops wins on gold-per-day with enough kegs; Starfruit Wine wins per-harvest. Calculator presets for 10-day, 28-day & Greenhouse.",
    publishedTime: "2026-02-24T00:00:00+08:00",
    modifiedTime: "2026-02-24T00:00:00+08:00",
  },
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

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <PwaRegisterScript />
        <FaqJsonLd faqs={[...FAQ_ITEMS]} />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Hops vs Starfruit (Stardew Valley): Which Is Better for Profit?" },
          ]}
        />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Quick Answer</p>

            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Hops vs Starfruit: Profit Verdict First
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Verdict: Hops is usually better when your goal is steady, frequent keg throughput. Starfruit is usually
              better when your goal is high burst value per harvest and you can support replant cycles.
            </p>

            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Do not treat this as a fixed ranking. Re-run both crops with identical season, days-left, and profession
              settings in the calculator to confirm which one wins in your save.
            </p>

            <div className="mt-4 flex flex-wrap gap-2.5">
              <TrackedBlogCtaLink
                href="/calculator"
                fromPath={fromPath}
                ctaName="hops_vs_starfruit_open_calculator"
                className="inline-flex items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-[#5c8a3e] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#4e7a32]"
              >
                Open Crop Profit Calculator
              </TrackedBlogCtaLink>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8]/90 px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-[#f6ebcf]"
              >
                Back to Home Quick Answer
              </Link>
            </div>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">TL;DR Quick Answer</h2>

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
            <h2 className="text-xl font-semibold text-[#4a321e]">Use Case + Steps</h2>

            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>If you only have a short window (10 days), run the short-window preset first.</li>
              <li>If you want a full-season plan, run the 28-day Summer preset with the same settings.</li>
              <li>If you are greenhouse-focused, run the greenhouse preset as your stable baseline.</li>
              <li>Compare which crop keeps your machines busier without creating unprocessed backlog.</li>
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
            <h2 className="text-xl font-semibold text-[#4a321e]">Related Guides</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>
                <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/blog/how-many-kegs-do-i-need-quick-answer">
                  How many kegs do I need?
                </Link>
              </li>
              <li>
                <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/blog/wine-vs-juice-quick-answer">
                  Wine vs Juice quick answer
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

        <BlogReadNext posts={readNextPosts} currentSlug="hops-vs-starfruit-quick-answer" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}

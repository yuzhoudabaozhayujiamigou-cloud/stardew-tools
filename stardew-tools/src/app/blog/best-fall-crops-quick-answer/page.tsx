import type { Metadata } from "next";

import { BlogReadNext } from "@/components/blog/BlogReadNext";
import FaqJsonLd from "@/components/FaqJsonLd";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogReadNextPosts } from "@/lib/read-next";
import Breadcrumb from "@/components/Breadcrumb";

const FAQ_EN = [
  "What is the most profitable fall crop?",
  "Are Cranberries better than Pumpkins?",
  "Should I use Artisan profession in fall?",
  "Is it worth planting Grape in fall?",
  "What should I plant if I only have 14 days left in fall?",
  "Can I grow Ancient Fruit in fall?",
] as const;

const FAQ_ZH = [
  "秋季最赚钱的作物是什么？",
  "蔓越莓和南瓜哪个更赚？",
  "秋季该选 Artisan 职业吗？",
  "秋季只剩14天该种什么？",
  "秋季种葡萄值得吗？",
  "秋季能种古代果实吗？",
] as const;

export const metadata: Metadata = {
  title: "Best Fall Crops (Quick Answer + Calculator)",
  description:
    "Find the most profitable fall crops in Stardew Valley. Compare Cranberry, Pumpkin, Grape, and more by gold per day with calculator presets.",
  openGraph: {
    type: "article",
    publishedTime: "2026-02-26T00:00:00+08:00",
    modifiedTime: "2026-02-26T00:00:00+08:00",
  },
};

const CTA_CLASS =
  "inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]";

export default function BestFallCropsQuickAnswerPage() {
  const fromPath = "/blog/best-fall-crops-quick-answer";
  const readNextPosts = getBlogReadNextPosts("best-fall-crops-quick-answer", 3);

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
            { name: "Best Fall Crops (Quick Answer + Calculator)" },
          ]}
        />

<article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Quick Answer</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Best Fall Crops in Stardew Valley
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">星露谷秋季最赚钱的作物是什么？</p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Quick Answer</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                <strong>Cranberries</strong> are the best fall crop for gold per day if you plant them by Day 1.
                They regrow every 5 days after the first harvest (7 days), giving you multiple harvests per season
                with minimal replanting cost.
              </p>
              <p>
                <strong>Pumpkin</strong> is the best single-harvest fall crop. It sells for 320g base and makes
                excellent Artisan goods (Pumpkin Juice via kegs = 720g). If you have Artisan profession, Pumpkin
                can beat Cranberries in total profit.
              </p>
              <p>
                <strong>Grape</strong> is a solid mid-tier pick — regrows every 3 days and produces great wine
                (Wine = 240g base, 336g with Artisan). Good if you have lots of kegs.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Fall Crop Tier List</h2>
            <div className="mt-3 space-y-2 text-sm leading-6 text-[#5f4228]/90">
              <p>🥇 <strong>Cranberry</strong> — Best overall gold/day. Regrows every 5 days. Plant Day 1 for 4+ harvests.</p>
              <p>🥈 <strong>Pumpkin</strong> — Highest single-harvest value. Giant crop chance. Best with Artisan + kegs.</p>
              <p>🥉 <strong>Grape</strong> — Fast regrow (3 days). Great wine profit if you have kegs.</p>
              <p>4th <strong>Artichoke</strong> — Decent sell price (160g), but single harvest and slow (8 days).</p>
              <p>5th <strong>Yam</strong> — Quick grow (10 days), okay profit. Good filler crop.</p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">When to Plant What</h2>
            <div className="mt-3 space-y-2 text-sm leading-6 text-[#5f4228]/90">
              <p><strong>Day 1–7:</strong> Cranberries (max harvests) or Pumpkin (if you want giant crops + Artisan processing).</p>
              <p><strong>Day 8–14:</strong> Pumpkin still works (one harvest). Grape can squeeze in 2–3 regrows.</p>
              <p><strong>Day 15–21:</strong> Yam (10 days), Bok Choy (4 days), or Wheat (4 days) for quick cash.</p>
              <p><strong>Day 22+:</strong> Only Wheat (4 days) or Bok Choy (4 days) will finish in time.</p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Try It in the Calculator</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              Click a preset to see the full profit breakdown with your settings.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?season=fall&daysLeft=28"
                fromPath={fromPath}
                ctaName="fall_full_season"
                className={CTA_CLASS}
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🍂</span>
                Full Fall Season (28 days)
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?season=fall&daysLeft=14"
                fromPath={fromPath}
                ctaName="fall_mid_season"
                className={CTA_CLASS}
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">⏰</span>
                Mid Fall (14 days left)
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?season=fall&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="fall_artisan"
                className={CTA_CLASS}
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🏆</span>
                Fall + Artisan Profession
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

        <BlogReadNext posts={readNextPosts} currentSlug="best-fall-crops-quick-answer" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}

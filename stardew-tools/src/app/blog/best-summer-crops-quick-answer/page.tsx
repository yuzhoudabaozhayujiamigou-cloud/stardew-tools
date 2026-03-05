import type { Metadata } from "next";

import { BlogReadNext } from "@/components/blog/BlogReadNext";
import FaqJsonLd from "@/components/FaqJsonLd";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogReadNextPosts } from "@/lib/read-next";
import Breadcrumb from "@/components/Breadcrumb";

const FAQ_EN = [
  "What are the best summer crops in Stardew Valley?",
  "Is Starfruit better than Blueberry?",
  "What is the best summer crop for kegs?",
  "What should I plant if I only have 14 days left in summer?",
  "Do regrowing crops beat single-harvest crops?",
  "Is it worth planting Hops in summer?",
] as const;

const FAQ_ZH = [
  "星露谷夏季最好的作物是什么？",
  "杨桃和蓝莓哪个更赚？",
  "夏季最适合做酒桶（Keg）的作物是什么？",
  "夏季只剩14天该种什么？",
  "可重复收获作物一定更赚钱吗？",
  "夏季种啤酒花值得吗？",
] as const;

export const metadata: Metadata = {
  title: "Best Summer Crops in Stardew Valley (Quick Answer)",
  description:
    "Find the best summer crops in Stardew Valley fast. Compare Blueberry, Starfruit, Melon, Hops, and more with summer calculator presets.",
  openGraph: {
    type: "article",
    publishedTime: "2026-02-27T00:00:00+08:00",
    modifiedTime: "2026-02-27T00:00:00+08:00",
  },
};

const CTA_CLASS =
  "inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]";

export default function BestSummerCropsQuickAnswerPage() {
  const fromPath = "/blog/best-summer-crops-quick-answer";
  const readNextPosts = getBlogReadNextPosts("best-summer-crops-quick-answer", 3);

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
            { name: "Best Summer Crops in Stardew Valley (Quick Answer)" },
          ]}
        />

<article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Quick Answer</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Best Summer Crops in Stardew Valley
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">星露谷夏季最赚钱的作物是什么？</p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Quick Answer</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                <strong>Blueberry</strong> is the best all-around summer crop for most farms: it regrows every 4 days
                after the first harvest (13 days) and produces <strong>3 berries per harvest</strong>. If you plant on
                Summer Day 1, you get multiple harvests with only one seed purchase.
              </p>
              <p>
                <strong>Starfruit</strong> is the best <strong>single-harvest</strong> summer crop for raw selling price
                (750g base), and it becomes a top-tier choice if you can process it into wine (especially with Artisan).
                It takes 13 days, so timing matters.
              </p>
              <p>
                <strong>Hops</strong> is the best &quot;high-maintenance, high-upside&quot; option: it regrows every day after 11 days.
                It sells cheaply as a crop (25g), but it shines if you have lots of kegs (Pale Ale is strong over time).
              </p>
              <p>
                <strong>Melon</strong> is a solid middle ground (12 days, 250g base) and a great keg target early if you
                don&apos;t have Starfruit access yet.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Summer Crop Tier List</h2>
            <div className="mt-3 space-y-2 text-sm leading-6 text-[#5f4228]/90">
              <p>🥇 <strong>Blueberry</strong> — Best overall for most players. Regrows every 4 days, 3 berries each harvest.</p>
              <p>🥈 <strong>Starfruit</strong> — Best single harvest value (750g). Best with kegs + Artisan.</p>
              <p>🥉 <strong>Hops</strong> — Daily harvest after 11 days. Best if you can process (kegs) and don&apos;t mind daily picking.</p>
              <p>4th <strong>Melon</strong> — Strong early-summer cash crop (12 days). Good keg option before Starfruit.</p>
              <p>5th <strong>Hot Pepper</strong> — Cheap seeds, regrows every 3 days. Nice filler when you want steady harvests.</p>
              <p>6th <strong>Wheat</strong> — Fast (4 days) and flexible for late-season gaps; good if time is short.</p>
            </div>
            <p className="mt-3 text-xs leading-5 text-[#6f4b2a]/80">
              Data notes (from calculator crop dataset): Blueberry (13+4 regrow, 3 yield), Starfruit (13 days), Melon (12 days),
              Hops (11+1 regrow), Hot Pepper (6+3 regrow), Wheat (4 days).
            </p>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">When to Plant What</h2>
            <div className="mt-3 space-y-2 text-sm leading-6 text-[#5f4228]/90">
              <p>
                <strong>Day 1</strong> Blueberry for steady profit, or Starfruit if you&apos;re keg-focused. Melon is great if you&apos;re early game.
              </p>
              <p>
                <strong>Day 8</strong> You can still plant Blueberry and get multiple harvests. Starfruit is still fine if you&apos;re planning around one harvest.
              </p>
              <p>
                <strong>14 days left (Day 15)</strong> Melon (12 days) is the big-value pick; Hot Pepper (6 days) can fit two cycles; Wheat (4 days) fits 3 cycles.
              </p>
              <p>
                <strong>7–3 days left (Day 22+)</strong> Switch to quick crops like Wheat (4 days) or consider finishing with regrow crops only if already planted.
              </p>
              <p className="text-xs leading-5 text-[#6f4b2a]/80">
                Tip: Regrowing crops are usually best when planted early. Single-harvest crops can win late-season because they finish cleanly.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Calculator Presets</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              Open a preset to compare crops by gold per day with your exact settings.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?season=summer&daysLeft=28"
                fromPath={fromPath}
                ctaName="summer_full_season"
                className={CTA_CLASS}
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">☀️</span>
                Full Summer Season (28 days)
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?season=summer&daysLeft=14"
                fromPath={fromPath}
                ctaName="summer_mid_season"
                className={CTA_CLASS}
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">⏰</span>
                Mid Summer (14 days left)
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?season=summer&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="summer_artisan"
                className={CTA_CLASS}
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🏆</span>
                Summer + Artisan Profession
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?season=summer&daysLeft=28&quality=iridium"
                fromPath={fromPath}
                ctaName="summer_iridium"
                className={CTA_CLASS}
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">💎</span>
                Summer (Iridium Quality)
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

        <BlogReadNext posts={readNextPosts} currentSlug="best-summer-crops-quick-answer" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}

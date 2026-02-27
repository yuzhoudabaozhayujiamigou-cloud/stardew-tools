import type { Metadata } from "next";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import FaqJsonLd from "@/components/FaqJsonLd";
import { getBlogReadNextPosts } from "@/lib/read-next";
import Breadcrumb from "@/components/Breadcrumb";

const FAQ_EN = [
  "Is Ancient Fruit better than Starfruit in the greenhouse?",
  "Does Artisan profession change the result?",
  "What if I do not have enough kegs?",
  "Is it worth turning Ancient Fruit / Starfruit into wine?",
  "Which one is better for low-effort money?",
  "How many days left in the season makes Starfruit not worth it?",
] as const;

const FAQ_ZH = [
  "温室里古代果实一定比杨桃强吗？",
  "选 Artisan 会改变结论吗？",
  "酒桶不够怎么办（瓶颈怎么考虑）？",
  "古代果实 / 杨桃做成酒一定更赚吗？",
  "哪个更省心、适合懒人收益？",
  "剩余多少天时杨桃不值得种？",
] as const;

export const metadata: Metadata = {
  openGraph: {
    type: "article",
    publishedTime: "2026-02-23T00:00:00+08:00",
    modifiedTime: "2026-02-23T00:00:00+08:00",
  },
  title: "Ancient Fruit vs Starfruit (Quick Answer + Calculator)",
  description:
    "Ancient Fruit vs Starfruit quick answer with direct calculator presets for greenhouse, full season, and short-window profit comparison.",
};

export default function AncientFruitVsStarfruitQuickAnswerPage() {
  const fromPath = "/blog/ancient-fruit-vs-starfruit-quick-answer";

    const readNextPosts = getBlogReadNextPosts("ancient-fruit-vs-starfruit-quick-answer", 3);

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
            { name: "Ancient Fruit vs Starfruit (Quick Answer + Calculator)" },
          ]}
        />

<article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Quick Answer</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Ancient Fruit vs Starfruit - Which Is More Profitable?
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">古代果实 vs 杨桃：到底哪个更赚钱？</p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">TL;DR</h2>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>If you want set-and-forget long-term value, Ancient Fruit is usually the better baseline.</li>
              <li>If you can replant and optimize bursts, Starfruit often wins on peak profit per harvest (especially with kegs).</li>
              <li>Do not guess. Use the calculator with your season, days left, and Artisan to compare instantly.</li>
            </ul>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>追求省心长期：多数情况下古代果实更适合无脑滚雪球。</li>
              <li>追求爆发收益：能频繁补种/有产线时，杨桃常常在单次收益上更强（尤其走酒桶）。</li>
              <li>别靠感觉：用计算器按你剩余天数/职业/产线直接对比。</li>
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Why the winner changes</h2>

            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>Replanting cost and effort: Ancient Fruit keeps producing; Starfruit needs replanting each cycle.</li>
              <li>Processing bottlenecks: keg time and number of kegs can flip the winner.</li>
              <li>Season and time horizon: with fewer days left, shorter ROI can matter more than max profit.</li>
            </ol>

            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>补种成本与操作：古代果实连续产出；杨桃每轮要补种。</li>
              <li>加工瓶颈：酒桶耗时/酒桶数量足不足，会直接改变结论。</li>
              <li>时间窗口：剩余天数少时，回本快可能比单次最高更重要。</li>
            </ol>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Try the exact scenarios</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              Open a preset to compare Ancient Fruit vs Starfruit under different assumptions. URL parameters remain editable, so you can reuse the same link in guides and social posts.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=ancient-vs-starfruit-greenhouse&season=greenhouse&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="ancient_vs_starfruit_greenhouse"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  🌿
                </span>
                Compare in Greenhouse (baseline)
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=ancient-vs-starfruit-summer-28&season=summer&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="ancient_vs_starfruit_full_season"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  ☀️
                </span>
                Compare for a Full Season
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=ancient-vs-starfruit-short-window&season=summer&daysLeft=10&profession=artisan"
                fromPath={fromPath}
                ctaName="ancient_vs_starfruit_short_window"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  ⏳
                </span>
                Compare with 10 Days Left
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

        <BlogReadNext posts={readNextPosts} currentSlug="ancient-fruit-vs-starfruit-quick-answer" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}


import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogReadNextPosts } from "@/lib/read-next";
import { SITE_ORIGIN } from "@/lib/site";

const publishedTime = "2026-03-08T00:00:00+08:00";
const modifiedTime = "2026-03-08T00:00:00+08:00";
const fromPath = "/blog/fish-pond-profit-calculator";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE = "Stardew Valley Fish Pond Profit Calculator: Best Fish to Raise (Roe Value + Bonus Items)";
const DESCRIPTION =
  "Find the best fish to raise in Stardew Valley fish ponds. Compare roe value, aged roe profit, production time, and bonus items for Lava Eel, Sturgeon, Blobfish, and more.";

const FAQ_EN = [
  {
    question: "What is the most profitable fish to raise in a fish pond?",
    answer:
      "Lava Eel is typically the most profitable fish pond choice, producing high-value aged roe (1,064g) and valuable bonus items like Gold Ore and Magma Caps.",
  },
  {
    question: "Is Sturgeon worth raising in a fish pond?",
    answer:
      "Yes, Sturgeon is excellent for profit. It produces Caviar (500g base, 700g with Artisan) and has a fast 4-day production cycle, making it one of the best consistent earners.",
  },
  {
    question: "What fish pond requires the least maintenance?",
    answer:
      "Blobfish and Ice Pip are low-maintenance options. They have simple quest requirements and produce decent roe without needing frequent attention.",
  },
  {
    question: "Do fish pond bonus items matter for profit?",
    answer:
      "Yes, bonus items can significantly boost overall profit. Lava Eel drops Gold Ore and Magma Caps, Super Cucumber drops Iridium Ore, and these add substantial value over time.",
  },
  {
    question: "Should I age fish roe in casks?",
    answer:
      "Aging roe doubles its value (from base to Iridium quality), making it highly profitable. However, cask space is limited, so prioritize high-value roe like Lava Eel or Sturgeon.",
  },
  {
    question: "How many fish ponds should I build?",
    answer:
      "Start with 2-3 ponds for your top profit fish (Lava Eel, Sturgeon), then expand based on available space and processing capacity. Each pond costs 5,000g, 200 Stone, and 5 Seaweed.",
  },
  {
    question: "What's the difference between roe value and aged roe value?",
    answer:
      "Roe value is the base selling price. Aged roe is roe that has been aged in a cask to Iridium quality, which doubles the value. Aging takes 14-28 days depending on the roe.",
  },
] as const;

const FAQ_ZH = [
  {
    question: "鱼塘里养什么鱼最赚钱？",
    answer:
      "熔岩鳗鱼通常是最赚钱的选择，它产出高价值的陈年鱼子酱（1,064金）和有价值的奖励物品，如金矿石和岩浆帽。",
  },
  {
    question: "鲟鱼值得在鱼塘里养吗？",
    answer:
      "值得。鲟鱼产出鱼子酱（基础500金，工匠职业700金），生产周期只需4天，是最稳定的收益来源之一。",
  },
  {
    question: "哪种鱼塘最省心？",
    answer:
      "水滴鱼和冰刺鱼是低维护选项。它们的任务要求简单，产出不错的鱼子，不需要频繁照料。",
  },
  {
    question: "鱼塘的奖励物品对收益重要吗？",
    answer:
      "重要。奖励物品能显著提升总收益。熔岩鳗鱼掉落金矿石和岩浆帽，超级海参掉落铱矿石，这些长期价值很高。",
  },
  {
    question: "应该把鱼子放进木桶陈年吗？",
    answer:
      "陈年鱼子能让价值翻倍（从基础品质到铱星品质），非常赚钱。但木桶空间有限，优先陈年高价值鱼子，如熔岩鳗鱼或鲟鱼。",
  },
  {
    question: "应该建多少个鱼塘？",
    answer:
      "先建2-3个养最赚钱的鱼（熔岩鳗鱼、鲟鱼），然后根据可用空间和加工能力扩展。每个鱼塘成本5,000金、200石头、5海草。",
  },
  {
    question: "鱼子价值和陈年鱼子价值有什么区别？",
    answer:
      "鱼子价值是基础售价。陈年鱼子是在木桶中陈年到铱星品质的鱼子，价值翻倍。陈年时间根据鱼子不同需要14-28天。",
  },
] as const;

export const metadata: Metadata = {
  title: `${TITLE} | Stardew Profit`,
  description: DESCRIPTION,
  keywords: [
    "fish pond profit stardew valley",
    "best fish pond",
    "roe value stardew",
    "aged roe profit",
    "lava eel fish pond",
    "sturgeon caviar",
    "fish pond bonus items",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: `${TITLE} | Stardew Profit`,
    description: DESCRIPTION,
    type: "article",
    url,
    images: [{ url: `${url}/opengraph-image` }],
    publishedTime,
    modifiedTime,
  },
};

const CARD =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";

const H2 = "text-xl font-semibold text-[#4a321e] sm:text-2xl";

const LINK =
  "font-semibold text-[#2f6a3a] underline decoration-[#2f6a3a]/30 underline-offset-4 hover:text-[#1f6b2e]";

const CTA_CLASS =
  "inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]";

export default function FishPondProfitCalculatorPage() {
  const readNextPosts = getBlogReadNextPosts("fish-pond-profit-calculator", 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      name: "Stardew Profit",
    },
    publisher: {
      "@type": "Organization",
      name: "Stardew Profit",
    },
    image: [`${url}/opengraph-image`],
    about: [
      "fish pond profit calculator",
      "best fish to raise",
      "roe value comparison",
    ],
  };

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
          faqs={[...FAQ_EN, ...FAQ_ZH].map((item) => ({
            question: item.question,
            answer: item.answer,
          }))}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Fish Pond Profit Calculator" },
          ]}
        />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Fish Pond Guide • Roe Profit Calculator</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">Fish Pond Profit Calculator: Best Fish to Raise</h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">Compare roe value, aged roe profit, production time, and bonus items to find the best fish for your ponds.</p>

            <div className="mt-5 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=money-making"
                fromPath={fromPath}
                ctaName="fish_pond_try_calculator_hero"
                className={CTA_CLASS}
              >
                Try Calculator
              </TrackedBlogCtaLink>
            </div>
          </header>

          <section className={CARD}>
            <h2 className={H2}>Quick Answer</h2>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <strong>Lava Eel</strong> is the most profitable fish pond choice for pure profit, producing high-value aged roe (1,064g) and valuable bonus items. <strong>Sturgeon</strong> is the best for consistent income with fast 4-day cycles and Caviar production. <strong>Blobfish</strong> and <strong>Ice Pip</strong> are excellent low-maintenance options that still generate solid returns.
            </p>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Fish Pond Profit Comparison Table</h2>
            <p className="mt-2 text-sm text-[#5f4228]/75">Copy this table to compare fish pond options. Values assume Artisan profession and Iridium-quality aged roe.</p>
            
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-[#7c4d2e]/30 bg-[#fff8e8]">
                    <th className="p-3 text-left font-semibold text-[#4a321e]">Fish</th>
                    <th className="p-3 text-right font-semibold text-[#4a321e]">Roe Value</th>
                    <th className="p-3 text-right font-semibold text-[#4a321e]">Aged Roe</th>
                    <th className="p-3 text-right font-semibold text-[#4a321e]">Days</th>
                    <th className="p-3 text-right font-semibold text-[#4a321e]">Daily Profit</th>
                    <th className="p-3 text-left font-semibold text-[#4a321e]">Bonus Items</th>
                  </tr>
                </thead>
                <tbody className="text-[#5f4228]/90">
                  <tr className="border-b border-[#7c4d2e]/20">
                    <td className="p-3 font-medium">Lava Eel</td>
                    <td className="p-3 text-right">380g</td>
                    <td className="p-3 text-right">1,064g</td>
                    <td className="p-3 text-right">5</td>
                    <td className="p-3 text-right font-semibold text-[#2f6a3a]">213g</td>
                    <td className="p-3">Gold Ore, Magma Cap</td>
                  </tr>
                  <tr className="border-b border-[#7c4d2e]/20 bg-[#fff8e8]/50">
                    <td className="p-3 font-medium">Sturgeon</td>
                    <td className="p-3 text-right">500g (Caviar)</td>
                    <td className="p-3 text-right">700g</td>
                    <td className="p-3 text-right">4</td>
                    <td className="p-3 text-right font-semibold text-[#2f6a3a]">175g</td>
                    <td className="p-3">Roe, Omni Geode</td>
                  </tr>
                  <tr className="border-b border-[#7c4d2e]/20">
                    <td className="p-3 font-medium">Blobfish</td>
                    <td className="p-3 text-right">280g</td>
                    <td className="p-3 text-right">784g</td>
                    <td className="p-3 text-right">4</td>
                    <td className="p-3 text-right font-semibold text-[#2f6a3a]">196g</td>
                    <td className="p-3">Pearl, Warp Totem</td>
                  </tr>
                  <tr className="border-b border-[#7c4d2e]/20 bg-[#fff8e8]/50">
                    <td className="p-3 font-medium">Super Cucumber</td>
                    <td className="p-3 text-right">250g</td>
                    <td className="p-3 text-right">700g</td>
                    <td className="p-3 text-right">4</td>
                    <td className="p-3 text-right font-semibold text-[#2f6a3a]">175g</td>
                    <td className="p-3">Iridium Ore, Amethyst</td>
                  </tr>
                  <tr className="border-b border-[#7c4d2e]/20">
                    <td className="p-3 font-medium">Void Salmon</td>
                    <td className="p-3 text-right">240g</td>
                    <td className="p-3 text-right">672g</td>
                    <td className="p-3 text-right">4</td>
                    <td className="p-3 text-right font-semibold text-[#2f6a3a]">168g</td>
                    <td className="p-3">Void Egg, Void Essence</td>
                  </tr>
                  <tr className="border-b border-[#7c4d2e]/20 bg-[#fff8e8]/50">
                    <td className="p-3 font-medium">Ice Pip</td>
                    <td className="p-3 text-right">250g</td>
                    <td className="p-3 text-right">700g</td>
                    <td className="p-3 text-right">4</td>
                    <td className="p-3 text-right font-semibold text-[#2f6a3a]">175g</td>
                    <td className="p-3">Frozen Tear, Iron Ore</td>
                  </tr>
                  <tr className="border-b border-[#7c4d2e]/20">
                    <td className="p-3 font-medium">Stonefish</td>
                    <td className="p-3 text-right">220g</td>
                    <td className="p-3 text-right">616g</td>
                    <td className="p-3 text-right">5</td>
                    <td className="p-3 text-right font-semibold text-[#2f6a3a]">123g</td>
                    <td className="p-3">Copper Ore, Geode</td>
                  </tr>
                  <tr className="border-b border-[#7c4d2e]/20 bg-[#fff8e8]/50">
                    <td className="p-3 font-medium">Ghostfish</td>
                    <td className="p-3 text-right">180g</td>
                    <td className="p-3 text-right">504g</td>
                    <td className="p-3 text-right">2</td>
                    <td className="p-3 text-right font-semibold text-[#2f6a3a]">252g</td>
                    <td className="p-3">Quartz, Refined Quartz</td>
                  </tr>
                  <tr className="border-b border-[#7c4d2e]/20">
                    <td className="p-3 font-medium">Woodskip</td>
                    <td className="p-3 text-right">180g</td>
                    <td className="p-3 text-right">504g</td>
                    <td className="p-3 text-right">2</td>
                    <td className="p-3 text-right font-semibold text-[#2f6a3a]">252g</td>
                    <td className="p-3">Hardwood, Mahogany Seed</td>
                  </tr>
                  <tr className="bg-[#fff8e8]/50">
                    <td className="p-3 font-medium">Slimejack</td>
                    <td className="p-3 text-right">140g</td>
                    <td className="p-3 text-right">392g</td>
                    <td className="p-3 text-right">3</td>
                    <td className="p-3 text-right font-semibold text-[#2f6a3a]">131g</td>
                    <td className="p-3">Green Algae, Slime</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-[#5f4228]/75">
              Note: Daily Profit = Aged Roe Value ÷ Production Days. Bonus items add significant value but are not included in daily profit calculation.
            </p>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Best Fish by Goal</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/30 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Best for Pure Profit</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  <strong>Lava Eel</strong> (213g/day) and <strong>Blobfish</strong> (196g/day) offer the highest daily returns when aging roe. Lava Eel also drops valuable Gold Ore and Magma Caps.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/30 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Best for Consistent Income</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  <strong>Sturgeon</strong> (175g/day) produces Caviar every 4 days with minimal quest requirements. Reliable and easy to maintain.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/30 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Best for Low Maintenance</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  <strong>Ice Pip</strong> and <strong>Blobfish</strong> have simple quest requirements and produce decent roe without needing frequent attention.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/30 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Best for Bonus Items</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                  <strong>Lava Eel</strong> (Gold Ore, Magma Cap), <strong>Super Cucumber</strong> (Iridium Ore), and <strong>Woodskip</strong> (Hardwood) provide valuable bonus drops.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=greenhouse-ancient-fruit"
                fromPath={fromPath}
                ctaName="fish_pond_compare_greenhouse"
                className={CTA_CLASS}
              >
                Compare with Greenhouse Profit
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Fish Pond Setup Checklist</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>Build fish pond (5,000g, 200 Stone, 5 Seaweed) from Robin{String.fromCharCode(39)}s shop.</li>
              <li>Catch your target fish (Lava Eel from Mines 100, Sturgeon from Mountain Lake Summer/Winter).</li>
              <li>Place fish in pond and complete population quests (usually 3 Stone, 5 Green Algae, etc.).</li>
              <li>Collect roe every 1-5 days depending on fish type.</li>
              <li>Age high-value roe (Lava Eel, Sturgeon) in casks for 2x profit.</li>
              <li>Collect bonus items from pond (check daily for rare drops).</li>
            </ol>

            <p className="mt-4 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              For more money-making strategies, see{" "}
              <Link href="/blog/money-making-guide" className={LINK}>
                Money Making Guide
              </Link>
              {" "}and{" "}
              <Link href="/blog/stardew-valley-profit-guide-2026" className={LINK}>
                Profit Guide 2026
              </Link>
              .
            </p>
          </section>

          <section id="faq-en" className={CARD}>
            <h2 className={H2}>FAQ (English)</h2>
            <div className="mt-4 space-y-4">
              {FAQ_EN.map((item) => (
                <details key={item.question} className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-[#4a321e] sm:text-base">{item.question}</summary>
                  <p className="mt-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="faq-zh" className={CARD}>
            <h2 className={H2}>常见问题（中文）</h2>
            <div className="mt-4 space-y-4">
              {FAQ_ZH.map((item) => (
                <details key={item.question} className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-[#4a321e] sm:text-base">{item.question}</summary>
                  <p className="mt-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Read Next</h2>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <Link href="/blog/money-making-guide" className={LINK}>
                Money Making Guide
              </Link>
              <Link href="/blog/greenhouse-keg-empire-profit-guide" className={LINK}>
                Greenhouse Keg Empire Guide
              </Link>
              <Link href="/blog/stardew-valley-profit-guide-2026" className={LINK}>
                Profit Guide 2026
              </Link>
              <Link href="/blog/farm-profit-pillars" className={LINK}>
                Farm Profit Pillars
              </Link>
            </div>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="fish-pond-profit-calculator" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}

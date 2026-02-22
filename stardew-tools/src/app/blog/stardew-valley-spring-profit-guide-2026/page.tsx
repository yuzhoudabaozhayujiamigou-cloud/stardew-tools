import type { Metadata } from "next";
import Link from "next/link";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";

type CropGuideRow = {
  crop: string;
  seedCost: number;
  sellPrice: number;
  cycle: string;
  harvests: number;
  totalProfit: number;
  goldPerDay: number;
  tier: "S" | "A" | "B";
};

const sTierNotes = [
  {
    title: "Strawberry 🍓",
    detail:
      "Best spring ROI when you can plant early. Regrow timing creates the strongest Gold/Day curve among core spring crops.",
  },
  {
    title: "Potato 🥔",
    detail:
      "Reliable and beginner-friendly. Multi-yield expectation keeps it highly efficient for normal-quality direct selling.",
  },
];

const aTierNotes = [
  {
    title: "Cauliflower 🥦",
    detail:
      "Excellent per-harvest value with fewer harvest windows. Great when you want low-maintenance, higher single-sale payouts.",
  },
  {
    title: "Green Bean 🫛",
    detail:
      "Strong regrow option after first maturity. Efficient mid-tier choice when strawberry seeds are limited.",
  },
  {
    title: "Kale 🥬",
    detail:
      "Solid fallback crop with straightforward cycle math. Less explosive than S-tier but consistent across the season.",
  },
];

const rows: CropGuideRow[] = [
  {
    crop: "Strawberry",
    seedCost: 100,
    sellPrice: 120,
    cycle: "8d + regrow 4d",
    harvests: 5,
    totalProfit: 500,
    goldPerDay: 17.86,
    tier: "S",
  },
  {
    crop: "Potato",
    seedCost: 50,
    sellPrice: 80,
    cycle: "6d",
    harvests: 4,
    totalProfit: 200,
    goldPerDay: 7.14,
    tier: "S",
  },
  {
    crop: "Cauliflower",
    seedCost: 80,
    sellPrice: 175,
    cycle: "12d",
    harvests: 2,
    totalProfit: 190,
    goldPerDay: 6.79,
    tier: "A",
  },
  {
    crop: "Green Bean",
    seedCost: 60,
    sellPrice: 40,
    cycle: "10d + regrow 3d",
    harvests: 6,
    totalProfit: 180,
    goldPerDay: 6.43,
    tier: "A",
  },
  {
    crop: "Kale",
    seedCost: 70,
    sellPrice: 110,
    cycle: "6d",
    harvests: 4,
    totalProfit: 160,
    goldPerDay: 5.71,
    tier: "A",
  },
  {
    crop: "Garlic",
    seedCost: 40,
    sellPrice: 60,
    cycle: "4d",
    harvests: 6,
    totalProfit: 120,
    goldPerDay: 4.29,
    tier: "B",
  },
];

const faqItems = [
  {
    question: "What's the best crop for Spring Year 1 in Stardew Valley?",
    answer:
      "For most players, strawberry and potato are the strongest practical Spring Year 1 picks under normal direct-selling assumptions.",
  },
  {
    question: "How do I compare Spring crops with my own setup?",
    answer:
      "Use the calculator with Spring and 28 days left, then adjust quality and profession settings to match your run.",
  },
  {
    question: "Is this guide for full-season planning or late-season panic decisions?",
    answer:
      "This page is for full-season Spring planning. For late-season panic windows, use dedicated Day 15/Day 20 threshold guides.",
  },
];

export const metadata: Metadata = {
  title: "Stardew Valley Spring Profit Guide 2026 | S/A Tier Crops",
  description:
    "S-tier and A-tier spring crop recommendations with profit data table. Includes ROI breakdown and quick path back to the calculator.",
};

function tierBadge(tier: CropGuideRow["tier"]) {
  if (tier === "S") {
    return "bg-[#ffe59c] text-[#7e4d10] border-[#d29a2c]/55";
  }

  if (tier === "A") {
    return "bg-[#efe3bf] text-[#5c4227] border-[#9f744c]/45";
  }

  return "bg-[#e8dcc5] text-[#62442d] border-[#8f6b47]/40";
}

export default function SpringProfitGuidePage() {
  const fromPath = "/blog/stardew-valley-spring-profit-guide-2026";
  const pageUrl = "https://stardewprofit.com/blog/stardew-valley-spring-profit-guide-2026";

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Stardew Valley Spring Profit Guide 2026",
    datePublished: "2026-02-15",
    author: {
      "@type": "Organization",
      name: "Stardew Tools",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#9ed7a4]">
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Spring Guide 2026
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Stardew Valley Spring Profit Tier List
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/85 sm:text-base">
              Practical S/A tier crop picks with a clean data table you can compare at a glance.
              Baseline assumptions: Normal quality, no Tiller, direct crop selling.
            </p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-2xl font-semibold text-[#4a321e]">S Tier Crops</h2>
            <ul className="mt-4 grid gap-3">
              {sTierNotes.map((item) => (
                <li key={item.title} className="rounded-2xl border border-[#9f744c]/30 bg-[#fff8e8]/85 px-4 py-3">
                  <h3 className="text-base font-semibold text-[#4e341f]">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#614326]/90">{item.detail}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-2xl font-semibold text-[#4a321e]">A Tier Crops</h2>
            <ul className="mt-4 grid gap-3">
              {aTierNotes.map((item) => (
                <li key={item.title} className="rounded-2xl border border-[#9f744c]/30 bg-[#fff8e8]/85 px-4 py-3">
                  <h3 className="text-base font-semibold text-[#4e341f]">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#614326]/90">{item.detail}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-2xl font-semibold text-[#4a321e]">Spring Data Comparison</h2>
            <p className="mt-2 text-sm text-[#614326]/90">
              28-day season simulation under the calculator’s baseline assumptions.
            </p>

            <div className="relative mt-4">
              <div className="overflow-x-auto">
                <table className="min-w-[760px] w-full border-separate border-spacing-y-2 text-sm tracking-wide">
                  <thead>
                    <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                      <th className="px-3 py-2">Crop</th>
                      <th className="px-3 py-2">Tier</th>
                      <th className="px-3 py-2">Seed</th>
                      <th className="px-3 py-2">Sell</th>
                      <th className="px-3 py-2">Cycle</th>
                      <th className="px-3 py-2">Harvests</th>
                      <th className="px-3 py-2">Profit</th>
                      <th className="px-3 py-2">Gold/Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, index) => (
                      <tr
                        key={row.crop}
                        className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl shadow-[0_1px_0_rgba(122,82,46,0.14)] ring-1 ring-[#9f744c]/20`}
                      >
                        <td className="px-3 py-3 font-medium text-[#503521]">{row.crop}</td>
                        <td className="px-3 py-3">
                          <span className={`inline-flex rounded-full border px-2 py-1 text-xs font-semibold ${tierBadge(row.tier)}`}>
                            {row.tier}
                          </span>
                        </td>
                        <td className="px-3 py-3 text-[#5f432a]/85">{row.seedCost}</td>
                        <td className="px-3 py-3 text-[#5f432a]/85">{row.sellPrice}</td>
                        <td className="px-3 py-3 text-[#5f432a]/85">{row.cycle}</td>
                        <td className="px-3 py-3 text-[#5f432a]/85">{row.harvests}</td>
                        <td className="px-3 py-3 text-[#5f432a]/85">{row.totalProfit}</td>
                        <td className="px-3 py-3 font-semibold text-[#875717]">{row.goldPerDay.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#f3e5bf] via-[#f3e5bf]/75 to-transparent sm:hidden" />
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Next Step</h2>
            <p className="mt-2 text-sm text-[#614326]/90">
              Want to test different quality tiers and Tiller toggles in real time? Jump back to the interactive calculator.
            </p>

            <div className="mt-4">
              <TrackedBlogCtaLink
                href="/calculator?season=spring&daysLeft=28"
                fromPath={fromPath}
                ctaName="next_step_button"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-80">
                  🧮
                </span>
                Use the Calculator Now
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-2xl font-semibold text-[#4a321e]">FAQ</h2>
            <div className="mt-4 space-y-3">
              {faqItems.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-[#9f744c]/35 bg-[#fff8e8]/85 px-4 py-3">
                  <summary className="cursor-pointer list-none font-semibold text-[#4e341f]">{faq.question}</summary>
                  <p className="mt-2 text-sm leading-6 text-[#614326]/90">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Next Read</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[#614326]/90">
              <li>
                Need a late-Spring emergency version? {" "}
                <Link className="font-semibold underline" href="/blog/stardew-valley-is-it-too-late-to-plant-spring-day-20">
                  Stardew Valley: Is it too late to plant on Spring Day 20?
                </Link>
              </li>
              <li>
                For short-window salvage picks: {" "}
                <Link className="font-semibold underline" href="/blog/best-crops-7-days-left-before-season-switch">
                  Stardew Valley: best crops with 7 days left before season switch
                </Link>
              </li>
            </ul>
          </section>
        </article>

        <SiteFooter className="mt-8" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
      </main>

      <TrackedBlogCtaLink
        href="/calculator?season=spring&daysLeft=28"
        fromPath={fromPath}
        ctaName="floating_button"
        aria-label="Back to Calculator"
        className="fixed bottom-6 right-6 z-20 inline-flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#6f4528]/85 bg-[#b77842] text-2xl shadow-[0_10px_20px_rgba(54,34,18,0.35)] transition hover:scale-105 hover:bg-[#c6874f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d18c]/90 focus-visible:ring-offset-2 focus-visible:ring-offset-[#9ecf77]"
      >
        <span aria-hidden="true" className="inline-flex items-center leading-none">
          🧮
        </span>
      </TrackedBlogCtaLink>
    </div>
  );
}

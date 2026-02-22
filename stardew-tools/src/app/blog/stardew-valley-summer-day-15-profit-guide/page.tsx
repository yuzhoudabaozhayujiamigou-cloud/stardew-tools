import type { Metadata } from "next";
import Link from "next/link";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";

type PickItem = {
  crop: string;
  why: string;
};

type TableRow = {
  crop: string;
  growth: string;
  estHarvests: string;
  estGoldPerDay: string;
  note: string;
};

const topPicks: PickItem[] = [
  {
    crop: "Radish",
    why: "Fast 6-day route that still fits cleanly in a 13-day window and gives practical late-Summer liquidity.",
  },
  {
    crop: "Wheat",
    why: "Low-cost safe bet if you want broad tile coverage with lower timing risk near season midpoint.",
  },
  {
    crop: "Hot Pepper",
    why: "Decent fallback if planted in time; regrow can still provide a few returns in the remaining window.",
  },
  {
    crop: "Hops",
    why: "Can still work if your daily labor is stable, but execution burden is high compared to safer options.",
  },
];

const rows: TableRow[] = [
  {
    crop: "Radish",
    growth: "6d",
    estHarvests: "2",
    estGoldPerDay: "~4.62",
    note: "Best balanced Day 15 default.",
  },
  {
    crop: "Wheat",
    growth: "4d",
    estHarvests: "3",
    estGoldPerDay: "~2.54",
    note: "Budget-safe late pivot.",
  },
  {
    crop: "Hot Pepper",
    growth: "5d + regrow 3d",
    estHarvests: "3",
    estGoldPerDay: "~3.46",
    note: "Usable with good timing discipline.",
  },
  {
    crop: "Hops",
    growth: "11d + regrow 1d",
    estHarvests: "3",
    estGoldPerDay: "~2.00",
    note: "Labor-heavy at this stage.",
  },
  {
    crop: "Melon",
    growth: "12d",
    estHarvests: "1",
    estGoldPerDay: "~5.00",
    note: "One-cycle risk play.",
  },
];

const faqItems = [
  {
    question: "What should I plant on Summer Day 15 for profit?",
    answer:
      "Radish is usually the cleanest practical pick. Wheat and hot pepper are common safe alternatives when you want lower risk or lower cost.",
  },
  {
    question: "Is Summer Day 15 too late for long-cycle crops?",
    answer:
      "For many long-cycle routes, yes. With only 13 days left, your margin for error is thin and single missed timing can kill the harvest.",
  },
  {
    question: "How many days left does Summer Day 15 mean?",
    answer:
      "Summer Day 15 maps to daysLeft=13 based on daysLeft = 28 - (dayOfMonth - 1).",
  },
];

import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Stardew Valley: Summer Day 15 Profit Guide",
  description:
    "Stardew Valley Summer Day 15 guide with 13 days left: radish, wheat, hot pepper picks and a direct calculator CTA.",
};

export default function StardewValleySummerDay15ProfitGuidePage() {
  const fromPath = "/blog/stardew-valley-summer-day-15-profit-guide";
  const pageUrl = `${SITE_ORIGIN}/blog/stardew-valley-summer-day-15-profit-guide`;

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
    headline: "Stardew Valley: Summer Day 15 Profit Guide",
    datePublished: "2026-02-17",
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Summer Midpoint</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Summer Day 15 Profit Guide
            </h1>

            <div className="mt-3 space-y-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                Summer Day 15 is a decision line: you still have room to profit, but long-cycle mistakes become expensive.
              </p>
              <p>
                This template uses <strong>daysLeft=13</strong> and favors crops with cleaner timing and safer execution.
              </p>
              <p>
                Run the exact setup here: {" "}
                <TrackedBlogCtaLink
                  className="font-semibold text-[#6a3f1e] underline"
                  href="/calculator?season=summer&daysLeft=13"
                  fromPath={fromPath}
                  ctaName="inline_path_link"
                >
                  /calculator?season=summer&daysLeft=13
                </TrackedBlogCtaLink>
                .
              </p>
            </div>

            <div className="mt-4">
              <TrackedBlogCtaLink
                href="/calculator?season=summer&daysLeft=13"
                fromPath={fromPath}
                ctaName="hero_jump_button"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-80">
                  ⚡
                </span>
                Jump to Calculator
              </TrackedBlogCtaLink>
            </div>
          </header>

          <section className="rounded-[24px] border-2 border-[#9f744c]/35 bg-[#fff8e8]/85 p-4 sm:p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6f4b2a]/80">Quick Nav</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#5f4228]/90">
              <li>
                <Link className="underline" href="#top-picks">
                  Top picks for Summer Day 15
                </Link>
              </li>
              <li>
                <Link className="underline" href="#assumptions">
                  Assumptions and methodology
                </Link>
              </li>
              <li>
                <TrackedBlogCtaLink
                  className="underline"
                  href="/calculator?season=summer&daysLeft=13"
                  fromPath={fromPath}
                  ctaName="quick_nav_jump_link"
                >
                  Jump to calculator (Summer, daysLeft=13)
                </TrackedBlogCtaLink>
              </li>
            </ul>
          </section>

          <section
            id="top-picks"
            className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7"
          >
            <h2 className="text-2xl font-semibold text-[#4a321e]">Top Picks (13 Days Left)</h2>
            <ul className="mt-4 grid gap-3">
              {topPicks.map((item) => (
                <li key={item.crop} className="rounded-2xl border border-[#9f744c]/30 bg-[#fff8e8]/85 px-4 py-3">
                  <h3 className="text-base font-semibold text-[#4e341f]">{item.crop}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#614326]/90">{item.why}</p>
                </li>
              ))}
            </ul>

            <div className="relative mt-4 overflow-x-auto">
              <table className="min-w-[760px] w-full border-separate border-spacing-y-2 text-sm tracking-wide">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Crop</th>
                    <th className="px-3 py-2">Growth</th>
                    <th className="px-3 py-2">Est. Harvests</th>
                    <th className="px-3 py-2">Est. Gold/Day</th>
                    <th className="px-3 py-2">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr
                      key={row.crop}
                      className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl shadow-[0_1px_0_rgba(122,82,46,0.14)] ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-medium text-[#503521]">{row.crop}</td>
                      <td className="px-3 py-3 text-[#5f432a]/85">{row.growth}</td>
                      <td className="px-3 py-3 text-[#5f432a]/85">{row.estHarvests}</td>
                      <td className="px-3 py-3 font-semibold text-[#875717]">{row.estGoldPerDay}</td>
                      <td className="px-3 py-3 text-[#5f432a]/85">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5">
              <TrackedBlogCtaLink
                href="/calculator?season=summer&daysLeft=13"
                fromPath={fromPath}
                ctaName="results_section_button"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-80">
                  🧮
                </span>
                Check Summer Day 15 Results in Calculator
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
                If you're coming from earlier Summer: {" "}
                <Link className="font-semibold underline" href="/blog/stardew-valley-summer-day-7-what-to-plant">
                  Stardew Valley: Summer Day 7 — What Should I Plant?
                </Link>
              </li>
              <li>
                Continue to late-window panic planning: {" "}
                <Link className="font-semibold underline" href="/blog/stardew-valley-summer-day-20-is-it-too-late">
                  Stardew Valley: Summer Day 20 — Is It Too Late?
                </Link>
              </li>
            </ul>
          </section>

          <section
            id="assumptions"
            className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7"
          >
            <details className="cursor-pointer text-sm text-[#5f4228]/90">
              <summary className="font-semibold text-[#4a321e]">Assumptions (Methodology)</summary>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-6">
                <li>Assumes Summer Day 15, so <code>daysLeft=13</code>.</li>
                <li>
                  Day-to-daysLeft conversion: <code>daysLeft = 28 - (dayOfMonth - 1)</code>.
                </li>
                <li>Default baseline is no Speed-Gro, no Tiller/Artisan bonus, direct crop selling.</li>
              </ul>
            </details>
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
    </div>
  );
}

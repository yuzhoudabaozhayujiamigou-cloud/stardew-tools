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
    why: "Most practical Summer Day 20 pick. 6-day growth still fits one clean harvest in an 8-day window.",
  },
  {
    crop: "Wheat",
    why: "Lowest-risk salvage route for empty tiles when you want guaranteed finish over upside.",
  },
  {
    crop: "Hot Pepper",
    why: "Can still work as a late fallback if you can fit first maturity and one regrow cycle.",
  },
  {
    crop: "Do not plant long-cycle crops",
    why: "Melon/Blueberry-first strategies are usually dead this late unless already established.",
  },
];

const rows: TableRow[] = [
  {
    crop: "Radish",
    growth: "6d",
    estHarvests: "1",
    estGoldPerDay: "~3.75",
    note: "Best late-window default.",
  },
  {
    crop: "Wheat",
    growth: "4d",
    estHarvests: "2",
    estGoldPerDay: "~2.50",
    note: "Safe but low upside.",
  },
  {
    crop: "Hot Pepper",
    growth: "5d + regrow 3d",
    estHarvests: "2",
    estGoldPerDay: "~2.50",
    note: "Execution-sensitive.",
  },
  {
    crop: "Melon",
    growth: "12d",
    estHarvests: "0",
    estGoldPerDay: "0.00",
    note: "Too late for new planting.",
  },
  {
    crop: "Blueberry",
    growth: "13d + regrow 4d",
    estHarvests: "0",
    estGoldPerDay: "0.00",
    note: "Only viable if planted earlier.",
  },
];

const faqItems = [
  {
    question: "Is it too late to plant on Summer Day 20?",
    answer:
      "For most high-upside Summer crops, yes. With only 8 days left, prioritize short-cycle salvage crops and avoid long-cycle bets.",
  },
  {
    question: "What should I plant with 8 days left in Summer?",
    answer:
      "Start with radish or wheat. Hot pepper can work as a situational fallback if your timing is tight and consistent.",
  },
  {
    question: "How many days left does Summer Day 20 mean?",
    answer:
      "Summer Day 20 maps to daysLeft=9 by strict conversion, but this guide uses a stricter panic template with daysLeft=8.",
  },
];

export const metadata: Metadata = {
  title: "Stardew Valley: Summer Day 20 — Is It Too Late?",
  description:
    "Stardew Valley Summer Day 20 panic guide with an 8-day late-window template: radish, wheat, hot pepper salvage picks and calculator CTA.",
};

export default function StardewValleySummerDay20IsItTooLatePage() {
  const fromPath = "/blog/stardew-valley-summer-day-20-is-it-too-late";
  const pageUrl = "https://stardew-tools.vercel.app/blog/stardew-valley-summer-day-20-is-it-too-late";

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
    headline: "Stardew Valley: Summer Day 20 — Is It Too Late?",
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Late-Summer Panic</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Summer Day 20 — Is It Too Late?
            </h1>

            <div className="mt-3 space-y-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                This is the late-season panic zone. Most “big profit” Summer plans are already gone if not planted earlier.
              </p>
              <p>
                This template uses <strong>daysLeft=8</strong> and focuses on salvage picks that can still finish.
              </p>
              <p>
                Run the strict late-window setup here: {" "}
                <TrackedBlogCtaLink
                  className="font-semibold text-[#6a3f1e] underline"
                  href="/calculator?season=summer&daysLeft=8"
                  fromPath={fromPath}
                  ctaName="inline_path_link"
                >
                  /calculator?season=summer&daysLeft=8
                </TrackedBlogCtaLink>
                .
              </p>
            </div>

            <div className="mt-4">
              <TrackedBlogCtaLink
                href="/calculator?season=summer&daysLeft=8"
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
                  Late-window salvage picks
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
                  href="/calculator?season=summer&daysLeft=8"
                  fromPath={fromPath}
                  ctaName="quick_nav_jump_link"
                >
                  Jump to calculator (Summer, daysLeft=8)
                </TrackedBlogCtaLink>
              </li>
            </ul>
          </section>

          <section
            id="top-picks"
            className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7"
          >
            <h2 className="text-2xl font-semibold text-[#4a321e]">Salvage Picks (8-Day Template)</h2>
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
                href="/calculator?season=summer&daysLeft=8"
                fromPath={fromPath}
                ctaName="results_section_button"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-80">
                  🧮
                </span>
                Check Summer Day 20 Results in Calculator
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
                Read the Day 15 bridge strategy first: {" "}
                <Link className="font-semibold underline" href="/blog/stardew-valley-summer-day-15-profit-guide">
                  Stardew Valley: Summer Day 15 Profit Guide
                </Link>
              </li>
              <li>
                Restart with full-season planning: {" "}
                <Link className="font-semibold underline" href="/blog/stardew-valley-summer-day-1-maximum-profit-guide">
                  Stardew Valley: Summer Day 1 Maximum Profit Guide
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
                <li>This page uses a strict late-window template with <code>daysLeft=8</code>.</li>
                <li>Standard reminder: Summer Day 20 strictly maps to 9 days left.</li>
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

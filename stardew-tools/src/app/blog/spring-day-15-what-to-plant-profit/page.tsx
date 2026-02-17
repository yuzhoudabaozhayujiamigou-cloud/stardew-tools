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
    crop: "Potato",
    why: "Strong Day 15 default because a 6-day cycle still fits two harvest windows with stable late-season value.",
  },
  {
    crop: "Garlic",
    why: "4-day cycle lets you stack multiple harvest attempts in a 14-day window with low seed-cost risk.",
  },
  {
    crop: "Kale",
    why: "Simple one-cycle timing and predictable margin when you want fewer timing surprises.",
  },
  {
    crop: "Parsnip",
    why: "Cheap fallback for broad coverage when cash flow is tight after Day 15.",
  },
];

const rows: TableRow[] = [
  {
    crop: "Potato",
    growth: "6d",
    estHarvests: "2",
    estGoldPerDay: "~7.14",
    note: "Default Day 15 value anchor.",
  },
  {
    crop: "Garlic",
    growth: "4d",
    estHarvests: "3",
    estGoldPerDay: "~6.43",
    note: "Good budget-friendly multi-cycle option.",
  },
  {
    crop: "Kale",
    growth: "6d",
    estHarvests: "2",
    estGoldPerDay: "~5.71",
    note: "Reliable cycle planning with clean timing.",
  },
  {
    crop: "Parsnip",
    growth: "4d",
    estHarvests: "3",
    estGoldPerDay: "~4.29",
    note: "Low-capital fallback for filled tiles.",
  },
  {
    crop: "Cauliflower",
    growth: "12d",
    estHarvests: "1",
    estGoldPerDay: "~5.71",
    note: "Works as a single-cycle bet, but low flexibility.",
  },
];

const faqItems = [
  {
    question: "Is it too late to plant crops on Spring Day 15?",
    answer:
      "Not always. Spring Day 15 still leaves 14 days, which is enough for profitable fast-cycle crops in most baseline setups.",
  },
  {
    question: "How many harvests can I get if I plant 6-day crops on Spring Day 15?",
    answer:
      "Usually two harvests. With 14 days left, a 6-day crop often fits two clean harvest windows if watering is consistent.",
  },
  {
    question: "What should I plant with 14 days left in Spring for profit?",
    answer:
      "Start with potato and garlic. They are common Day 15 picks because they keep late-season gold/day competitive while staying low risk.",
  },
];

export const metadata: Metadata = {
  title: "Stardew Valley Spring Day 15: What Can I Still Plant for Profit?",
  description:
    "Stardew Valley Spring Day 15 playbook with the exact conversion (14 days left), top late-season crop picks, and a direct calculator CTA.",
};

export default function SpringDay15WhatToPlantProfitPage() {
  const fromPath = "/blog/spring-day-15-what-to-plant-profit";
  const pageUrl = "https://stardew-tools.vercel.app/blog/spring-day-15-what-to-plant-profit";

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
    headline: "Stardew Valley Spring Day 15: What Can I Still Plant for Profit?",
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Late Spring Threshold</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Spring Day 15: What Can I Still Plant for Profit?
            </h1>

            <div className="mt-3 space-y-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                This is the classic edge-case question: on Spring Day 15, the wrong seed can lock your field into low
                late-season returns.
              </p>
              <p>
                Spring Day 15 converts to <strong>daysLeft = 14</strong> using <code>daysLeft = 28 - (dayOfMonth - 1)</code>.
              </p>
              <p>
                Run the exact Day 15 scenario here: {" "}
                <TrackedBlogCtaLink
                  className="font-semibold text-[#6a3f1e] underline"
                  href="/calculator?season=spring&daysLeft=14"
                  fromPath={fromPath}
                  ctaName="inline_path_link"
                >
                  /calculator?season=spring&daysLeft=14
                </TrackedBlogCtaLink>
                .
              </p>
            </div>

            <div className="mt-4">
              <TrackedBlogCtaLink
                href="/calculator?season=spring&daysLeft=14"
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
                  Top picks for Spring Day 15
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
                  href="/calculator?season=spring&daysLeft=14"
                  fromPath={fromPath}
                  ctaName="quick_nav_jump_link"
                >
                  Jump to calculator (Spring, daysLeft=14)
                </TrackedBlogCtaLink>
              </li>
            </ul>
          </section>

          <section
            id="top-picks"
            className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7"
          >
            <h2 className="text-2xl font-semibold text-[#4a321e]">Top Picks (14 Days Left)</h2>
            <ul className="mt-4 grid gap-3">
              {topPicks.map((item) => (
                <li key={item.crop} className="rounded-2xl border border-[#9f744c]/30 bg-[#fff8e8]/85 px-4 py-3">
                  <h3 className="text-base font-semibold text-[#4e341f]">{item.crop}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#614326]/90">{item.why}</p>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm leading-6 text-[#614326]/90">
              Baseline assumptions: no Speed-Gro, no profession bonus, direct crop selling.
            </p>

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
                href="/calculator?season=spring&daysLeft=14"
                fromPath={fromPath}
                ctaName="results_section_button"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-80">
                  🧮
                </span>
                Check Spring Day 15 Results in Calculator
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
                Compare with <strong>Spring Day 13 strawberries</strong>: {" "}
                <Link className="font-semibold underline" href="/blog/strawberry-spring-day-13-too-late">
                  Is it too late to plant strawberries on Spring 13?
                </Link>
              </li>
              <li>
                For the 10-day threshold cluster: {" "}
                <Link className="font-semibold underline" href="/blog/best-spring-crops-10-days-left">
                  Best Spring Crops With 10 Days Left
                </Link>
              </li>
              <li>
                For short-window planning: {" "}
                <Link className="font-semibold underline" href="/blog/best-crops-7-days-left-before-season-switch">
                  Stardew Valley: best crops with 7 days left before season switch
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
                <li>Day 0 means you plant today.</li>
                <li>Season length is 28 days.</li>
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

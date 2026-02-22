import type { Metadata } from "next";
import Link from "next/link";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_ORIGIN } from "@/lib/site";

type PickItem = {
  crop: string;
  why: string;
};

type TableRow = {
  crop: string;
  growth: string;
  estHarvests: string;
  estGoldPerDay: string;
};

const topPicks: PickItem[] = [
  {
    crop: "Potato",
    why: "One clean 6-day cycle still fits, and expected multi-yield helps keep value competitive.",
  },
  {
    crop: "Garlic",
    why: "4-day growth is a safe 7-day pick when you need fast, low-risk conversion of empty tiles.",
  },
  {
    crop: "Parsnip",
    why: "Low seed cost makes it a practical filler for last-week planting.",
  },
  {
    crop: "Kale",
    why: "Simple one-cycle route if you prefer predictable timing over aggressive bets.",
  },
];

const rows: TableRow[] = [
  {
    crop: "Potato",
    growth: "6d",
    estHarvests: "1",
    estGoldPerDay: "~7.14",
  },
  {
    crop: "Garlic",
    growth: "4d",
    estHarvests: "1",
    estGoldPerDay: "~5.71",
  },
  {
    crop: "Parsnip",
    growth: "4d",
    estHarvests: "1",
    estGoldPerDay: "~2.86",
  },
  {
    crop: "Kale",
    growth: "6d",
    estHarvests: "1",
    estGoldPerDay: "~5.71",
  },
  {
    crop: "Cauliflower",
    growth: "12d",
    estHarvests: "0",
    estGoldPerDay: "0.00",
  },
];

const faqItems = [
  {
    question: "What should I plant with 7 days left before the season switch?",
    answer:
      "Focus on fast crops. Potato, garlic, parsnip, and kale are the safest practical choices in a 7-day window.",
  },
  {
    question: "Is it too late to plant cauliflower with 7 days left?",
    answer:
      "Yes in baseline runs. Cauliflower needs 12 days, so planting with only 7 days left usually misses harvest.",
  },
  {
    question: "How many harvests can I get if I only have 7 days left?",
    answer:
      "Usually one harvest. Most viable picks in a 7-day window are single-cycle decisions, not multi-cycle plans.",
  },
];


export const metadata: Metadata = {
  title: "Stardew Valley: Best Crops With 7 Days Left Before Season Switch",
  description:
    "Stardew Valley late-season guide for exactly 7 days left before season switch: fast crop picks, expected harvest count, and direct calculator CTA.",
};

export default function BestCrops7DaysLeftBeforeSeasonSwitchPage() {
  const fromPath = "/blog/best-crops-7-days-left-before-season-switch";
  const pageUrl = `${SITE_ORIGIN}/blog/best-crops-7-days-left-before-season-switch`;

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
    headline: "Stardew Valley: Best Crops With 7 Days Left Before Season Switch",
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Season-End Planning</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Best Crops With 7 Days Left Before Season Switch
            </h1>

            <div className="mt-3 space-y-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                At 7 days left, this is no longer a growth-max strategy. It is a strict “what can still finish” decision.
              </p>
              <p>
                In calculator terms, this scenario is <strong>daysLeft = 7</strong> for current-season planting.
              </p>
              <p>
                Open the exact short-window setup: {" "}
                <TrackedBlogCtaLink
                  className="font-semibold text-[#6a3f1e] underline"
                  href="/calculator?season=spring&daysLeft=7"
                  fromPath={fromPath}
                  ctaName="inline_path_link"
                >
                  /calculator?season=spring&daysLeft=7
                </TrackedBlogCtaLink>
                .
              </p>
            </div>

            <div className="mt-4">
              <TrackedBlogCtaLink
                href="/calculator?season=spring&daysLeft=7"
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
                  Top picks for 7 days left
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
                  href="/calculator?season=spring&daysLeft=7"
                  fromPath={fromPath}
                  ctaName="quick_nav_jump_link"
                >
                  Jump to calculator (Spring, daysLeft=7)
                </TrackedBlogCtaLink>
              </li>
            </ul>
          </section>

          <section
            id="top-picks"
            className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7"
          >
            <h2 className="text-2xl font-semibold text-[#4a321e]">Top Picks (7-Day Window)</h2>
            <ul className="mt-4 grid gap-3">
              {topPicks.map((item) => (
                <li key={item.crop} className="rounded-2xl border border-[#9f744c]/30 bg-[#fff8e8]/85 px-4 py-3">
                  <h3 className="text-base font-semibold text-[#4e341f]">{item.crop}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#614326]/90">{item.why}</p>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm leading-6 text-[#614326]/90">
              Treat this as an end-of-season salvage window: priority is crops that finish on time, not maximum theoretical yield.
            </p>

            <div className="relative mt-4 overflow-x-auto">
              <table className="min-w-[700px] w-full border-separate border-spacing-y-2 text-sm tracking-wide">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Crop</th>
                    <th className="px-3 py-2">Growth</th>
                    <th className="px-3 py-2">Est. Harvests</th>
                    <th className="px-3 py-2">Est. Gold/Day</th>
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 rounded-2xl border border-[#9f744c]/30 bg-[#fff8e8]/85 px-4 py-3">
              <h3 className="text-sm font-semibold text-[#4e341f]">💡 Skill Bonus Boost</h3>
              <div className="mt-2 space-y-2 text-sm leading-6 text-[#614326]/90">
                <p>
                  With <strong className="text-[#4e341f]">Tiller (Level 5)</strong> + <strong className="text-[#4e341f]">Artisan (Level 10)</strong> skills:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-xs">
                  <li><strong>Potato:</strong> ~45g/day → ~63g/day (+40%)</li>
                  <li><strong>Kale:</strong> ~35g/day → ~49g/day (+40%)</li>
                  <li><strong>Strawberry:</strong> ~28g/day → ~39g/day (+40%)</li>
                </ul>
                <p className="text-xs text-[#6f4b2a]/70">
                  Try with skills:{" "}
                  <TrackedBlogCtaLink
                    className="font-semibold underline"
                    href="/calculator?season=spring&daysLeft=7&hasTiller=true&profession=artisan"
                    fromPath={fromPath}
                    ctaName="skill_bonus_link"
                  >
                    Tiller + Artisan setup
                  </TrackedBlogCtaLink>
                </p>
              </div>
            </div>

            <div className="mt-5">
              <TrackedBlogCtaLink
                href="/calculator?season=spring&daysLeft=7"
                fromPath={fromPath}
                ctaName="results_section_button"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-80">
                  🧮
                </span>
                Check 7-Day Results in Calculator
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
                For the 10-day version of this decision: {" "}
                <Link className="font-semibold underline" href="/blog/best-spring-crops-10-days-left">
                  Best Spring Crops With 10 Days Left
                </Link>
              </li>
              <li>
                For the Day 13 strawberry branch: {" "}
                <Link className="font-semibold underline" href="/blog/strawberry-spring-day-13-too-late">
                  Is it too late to plant strawberries on Spring 13?
                </Link>
              </li>
              <li>
                For the mid-threshold case: {" "}
                <Link className="font-semibold underline" href="/blog/spring-day-15-what-to-plant-profit">
                  Stardew Valley Spring Day 15: what can I still plant for profit?
                </Link>
              </li>
              <li>
                For a late panic scenario with 8-day window: {" "}
                <Link className="font-semibold underline" href="/blog/stardew-valley-is-it-too-late-to-plant-spring-day-20">
                  Stardew Valley: Is it too late to plant on Spring Day 20?
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

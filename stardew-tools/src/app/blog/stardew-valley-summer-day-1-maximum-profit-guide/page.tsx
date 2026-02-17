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
    crop: "Blueberry",
    why: "Best passive-income core for Summer Day 1 because regrow scaling compounds over the full 28-day window.",
  },
  {
    crop: "Starfruit",
    why: "High-roller choice when bus access and capital are ready; strong single-cycle value at high seed cost.",
  },
  {
    crop: "Melon",
    why: "Solid middle-ground pick with big-crop upside and easier access than premium desert-only paths.",
  },
  {
    crop: "Hops",
    why: "Excellent long-run route if you can sustain daily harvest rhythm and kegs later.",
  },
];

const rows: TableRow[] = [
  {
    crop: "Blueberry",
    growth: "13d + regrow 4d",
    estHarvests: "4",
    estGoldPerDay: "~15.00",
    note: "Default Summer Day 1 king for most players.",
  },
  {
    crop: "Starfruit",
    growth: "13d",
    estHarvests: "2",
    estGoldPerDay: "~17.14",
    note: "Top end value, but seed gate is real.",
  },
  {
    crop: "Melon",
    growth: "12d",
    estHarvests: "2",
    estGoldPerDay: "~8.93",
    note: "Balanced budget-to-profit option.",
  },
  {
    crop: "Hops",
    growth: "11d + regrow 1d",
    estHarvests: "18",
    estGoldPerDay: "~13.93",
    note: "Great if you can maintain daily pick routine.",
  },
  {
    crop: "Corn",
    growth: "14d + regrow 4d",
    estHarvests: "4",
    estGoldPerDay: "~8.21",
    note: "Useful if you want Summer + Fall carryover.",
  },
];

const faqItems = [
  {
    question: "What should I plant on Summer Day 1 for maximum profit?",
    answer:
      "Start with blueberries in most runs. They combine strong gold/day and easy execution across the full Summer window.",
  },
  {
    question: "Is Blueberry always better than Starfruit on Summer Day 1?",
    answer:
      "For most players, yes as a baseline. Starfruit can win in top-end setups, but requires higher upfront cost and access conditions.",
  },
  {
    question: "How do I compare Summer Day 1 options with my own setup?",
    answer:
      "Use the calculator with Summer and 28 days left, then toggle your quality/profession assumptions to see your real ranking.",
  },
];

export const metadata: Metadata = {
  title: "Stardew Valley: Summer Day 1 Maximum Profit Guide",
  description:
    "Stardew Valley Summer Day 1 strategy guide with 28 days left: blueberry vs starfruit vs melon, and a direct calculator CTA.",
};

export default function StardewValleySummerDay1MaximumProfitGuidePage() {
  const fromPath = "/blog/stardew-valley-summer-day-1-maximum-profit-guide";
  const pageUrl = "https://stardew-tools.vercel.app/blog/stardew-valley-summer-day-1-maximum-profit-guide";

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
    headline: "Stardew Valley: Summer Day 1 Maximum Profit Guide",
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Season Shift Strategy</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Summer Day 1 Maximum Profit Guide
            </h1>

            <div className="mt-3 space-y-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                Summer Day 1 is the opposite of panic planning. This is your full-cycle investment day with <strong>28
                days left</strong>.
              </p>
              <p>
                If you choose the right seed mix now, your whole season’s profit curve becomes easier to manage.
              </p>
              <p>
                Run this full-season setup in calculator: {" "}
                <TrackedBlogCtaLink
                  className="font-semibold text-[#6a3f1e] underline"
                  href="/calculator?season=summer&daysLeft=28"
                  fromPath={fromPath}
                  ctaName="inline_path_link"
                >
                  /calculator?season=summer&daysLeft=28
                </TrackedBlogCtaLink>
                .
              </p>
            </div>

            <div className="mt-4">
              <TrackedBlogCtaLink
                href="/calculator?season=summer&daysLeft=28"
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
                  Top picks for Summer Day 1
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
                  href="/calculator?season=summer&daysLeft=28"
                  fromPath={fromPath}
                  ctaName="quick_nav_jump_link"
                >
                  Jump to calculator (Summer, daysLeft=28)
                </TrackedBlogCtaLink>
              </li>
            </ul>
          </section>

          <section
            id="top-picks"
            className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7"
          >
            <h2 className="text-2xl font-semibold text-[#4a321e]">Top Picks (Summer Day 1)</h2>
            <ul className="mt-4 grid gap-3">
              {topPicks.map((item) => (
                <li key={item.crop} className="rounded-2xl border border-[#9f744c]/30 bg-[#fff8e8]/85 px-4 py-3">
                  <h3 className="text-base font-semibold text-[#4e341f]">{item.crop}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#614326]/90">{item.why}</p>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm leading-6 text-[#614326]/90">
              This is a planning-first page: prioritize seeds with strong full-season scaling and manageable daily effort.
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
                href="/calculator?season=summer&daysLeft=28"
                fromPath={fromPath}
                ctaName="results_section_button"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-80">
                  🧮
                </span>
                Check Summer Day 1 Results in Calculator
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
                Want the late-Spring emergency version? Read: {" "}
                <Link className="font-semibold underline" href="/blog/stardew-valley-is-it-too-late-to-plant-spring-day-20">
                  Stardew Valley: Is it too late to plant on Spring Day 20?
                </Link>
              </li>
              <li>
                Run your exact season setup: {" "}
                <TrackedBlogCtaLink
                  className="font-semibold underline"
                  href="/calculator?season=summer&daysLeft=28"
                  fromPath={fromPath}
                  ctaName="next_read_calculator_link"
                >
                  Open Summer calculator with 28 days left
                </TrackedBlogCtaLink>
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
                <li>Assumes Summer Day 1 baseline with <code>daysLeft=28</code>.</li>
                <li>Values are directional under default assumptions; validate with your own settings in calculator.</li>
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

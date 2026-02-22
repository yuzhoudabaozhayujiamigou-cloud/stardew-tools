import type { Metadata } from "next";
import Link from "next/link";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_ORIGIN } from "@/lib/site";

type PanicItem = {
  action: string;
  why: string;
};

type ScenarioRow = {
  scenario: string;
  setup: string;
  estHarvests: string;
  estGoldPerDay: string;
  note: string;
};

const panicPicks: PanicItem[] = [
  {
    action: "Wheat (cross-season carry)",
    why: "Wheat grows in both Summer and Fall, so late planting can preserve field continuity into Fall instead of leaving tiles idle.",
  },
  {
    action: "Wheat + Speed-Gro (edge case)",
    why: "In strict late windows, Speed-Gro can create a narrow timing path for a same-season finish.",
  },
  {
    action: "Skip pure Summer ROI and prep Fall Day 1",
    why: "At this stage, avoiding dead tiles and reducing reset friction can be more valuable than chasing one last Summer sale.",
  },
];

const rows: ScenarioRow[] = [
  {
    scenario: "Wheat (no Speed-Gro)",
    setup: "4d growth, strict 3d window",
    estHarvests: "0",
    estGoldPerDay: "0.00",
    note: "No same-season harvest in strict template.",
  },
  {
    scenario: "Wheat (Speed-Gro edge)",
    setup: "3d effective growth",
    estHarvests: "1 (conditional)",
    estGoldPerDay: "~1.67",
    note: "Narrow timing edge case.",
  },
  {
    scenario: "Hot Pepper",
    setup: "5d + regrow 3d",
    estHarvests: "0",
    estGoldPerDay: "0.00",
    note: "Too late for fresh setup.",
  },
  {
    scenario: "No new Summer planting",
    setup: "Transition-first strategy",
    estHarvests: "N/A",
    estGoldPerDay: "N/A",
    note: "Often best practical move.",
  },
];

const faqItems = [
  {
    question: "Is it too late to plant on Summer Day 25?",
    answer:
      "For same-season Summer profit crops, usually yes. With only 3 days in this strict template, most fresh plantings miss harvest timing.",
  },
  {
    question: "Can wheat still be worth planting on Summer Day 25?",
    answer:
      "Sometimes, yes for transition strategy. Wheat can carry across Summer and Fall, which can help preserve field continuity even when same-season profit is limited.",
  },
  {
    question: "Why does this page use daysLeft=3 for Summer Day 25?",
    answer:
      "This is a strict panic template. Under the standard conversion, Summer Day 25 maps to 4 days left and Summer Day 26 maps to 3.",
  },
];


export const metadata: Metadata = {
  title: "Stardew Valley: Is It Too Late to Plant on Summer Day 25?",
  description:
    "Only 3 days left in Summer? Panic-template for late planting, including wheat cross-season carry logic and a direct calculator CTA.",
};

export default function StardewValleyIsItTooLateToPlantOnSummerDay25Page() {
  const fromPath = "/blog/stardew-valley-is-it-too-late-to-plant-on-summer-day-25";
  const pageUrl = `${SITE_ORIGIN}/blog/stardew-valley-is-it-too-late-to-plant-on-summer-day-25`;

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
    headline: "Stardew Valley: Is It Too Late to Plant on Summer Day 25?",
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Summer Panic Button</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Is It Too Late to Plant on Summer Day 25?
            </h1>

            <div className="mt-3 space-y-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                Only <strong>3 days</strong> left in this strict panic template. Most fresh Summer planting routes are
                effectively dead.
              </p>
              <p>
                The key late-game exception is <strong>Wheat</strong> because it can carry into Fall and reduce seasonal reset friction.
              </p>
              <p>
                Run the strict panic setup here: {" "}
                <TrackedBlogCtaLink
                  className="font-semibold text-[#6a3f1e] underline"
                  href="/calculator?season=summer&daysLeft=3"
                  fromPath={fromPath}
                  ctaName="inline_path_link"
                >
                  /calculator?season=summer&daysLeft=3
                </TrackedBlogCtaLink>
                .
              </p>
            </div>

            <div className="mt-4">
              <TrackedBlogCtaLink
                href="/calculator?season=summer&daysLeft=3"
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
                  Panic picks and transition actions
                </Link>
              </li>
              <li>
                <Link className="underline" href="#assumptions">
                  Assumptions and day mapping
                </Link>
              </li>
              <li>
                <TrackedBlogCtaLink
                  className="underline"
                  href="/calculator?season=summer&daysLeft=3"
                  fromPath={fromPath}
                  ctaName="quick_nav_jump_link"
                >
                  Jump to calculator (Summer, daysLeft=3)
                </TrackedBlogCtaLink>
              </li>
            </ul>
          </section>

          <section
            id="top-picks"
            className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7"
          >
            <h2 className="text-2xl font-semibold text-[#4a321e]">Panic Picks (3-Day Template)</h2>
            <ul className="mt-4 grid gap-3">
              {panicPicks.map((item) => (
                <li key={item.action} className="rounded-2xl border border-[#9f744c]/30 bg-[#fff8e8]/85 px-4 py-3">
                  <h3 className="text-base font-semibold text-[#4e341f]">{item.action}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#614326]/90">{item.why}</p>
                </li>
              ))}
            </ul>

            <div className="relative mt-4 overflow-x-auto">
              <table className="min-w-[760px] w-full border-separate border-spacing-y-2 text-sm tracking-wide">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Scenario</th>
                    <th className="px-3 py-2">Setup</th>
                    <th className="px-3 py-2">Est. Harvests</th>
                    <th className="px-3 py-2">Est. Gold/Day</th>
                    <th className="px-3 py-2">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr
                      key={row.scenario}
                      className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl shadow-[0_1px_0_rgba(122,82,46,0.14)] ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-medium text-[#503521]">{row.scenario}</td>
                      <td className="px-3 py-3 text-[#5f432a]/85">{row.setup}</td>
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
                href="/calculator?season=summer&daysLeft=3"
                fromPath={fromPath}
                ctaName="results_section_button"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-80">
                  🧮
                </span>
                Run Summer Day 25 Panic Scenario
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
                First read the 8-day late-window guide: {" "}
                <Link className="font-semibold underline" href="/blog/stardew-valley-summer-day-20-is-it-too-late">
                  Stardew Valley: Summer Day 20 — Is It Too Late?
                </Link>
              </li>
              <li>
                Continue with Fall opening setup: {" "}
                <TrackedBlogCtaLink
                  className="font-semibold underline"
                  href="/calculator?season=fall&daysLeft=28"
                  fromPath={fromPath}
                  ctaName="next_read_fall_calculator_link"
                >
                  Open Fall calculator (Day 1 template)
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
                <li>This is a strict panic template with <code>daysLeft=3</code>.</li>
                <li>Standard conversion reminder: Summer Day 25 strictly maps to 4 days left.</li>
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

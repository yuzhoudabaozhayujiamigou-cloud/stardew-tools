import type { Metadata } from "next";
import Link from "next/link";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";

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
    action: "Parsnip + Basic Speed-Gro (edge case)",
    why: "The only realistic late-window crop trick if you insist on a final Spring harvest under a strict 3-day calculator window.",
  },
  {
    action: "Skip planting and prep Summer Day 1",
    why: "Often the highest EV move: keep land ready, stock seeds, and push full-cycle Summer crops immediately.",
  },
  {
    action: "Use remaining energy on mining/fishing",
    why: "When crop finish probability is low, convert your day into tool upgrades and cash prep for next season.",
  },
];

const rows: ScenarioRow[] = [
  {
    scenario: "Parsnip (no Speed-Gro)",
    setup: "4d growth, strict 3d window",
    estHarvests: "0",
    estGoldPerDay: "0.00",
    note: "Misses cutoff under baseline assumptions.",
  },
  {
    scenario: "Parsnip (Basic Speed-Gro edge)",
    setup: "3d effective growth",
    estHarvests: "1 (conditional)",
    estGoldPerDay: "~3.33",
    note: "Timing-sensitive edge case, not guaranteed in all setups.",
  },
  {
    scenario: "Any 6d+ crop",
    setup: "Kale/Potato/Tulip class",
    estHarvests: "0",
    estGoldPerDay: "0.00",
    note: "Too late for normal Spring finish.",
  },
  {
    scenario: "No new planting",
    setup: "Prep for Summer Day 1",
    estHarvests: "N/A",
    estGoldPerDay: "N/A",
    note: "Often best practical move in late panic windows.",
  },
];

const faqItems = [
  {
    question: "Is it too late to plant on Spring Day 25?",
    answer:
      "In most baseline setups, yes for profit crops. At this stage, most players should treat it as a season-prep decision unless using a speed-up edge case.",
  },
  {
    question: "Can I plant Parsnips on Spring Day 25 with only 3 days left?",
    answer:
      "Without Speed-Gro, usually no. With Basic Speed-Gro, some setups can barely fit one harvest, but it is a strict timing edge case.",
  },
  {
    question: "Why does this page use daysLeft=3 for a Day 25 panic query?",
    answer:
      "This page uses a stricter worst-case panic template (daysLeft=3). Under the standard conversion, Day 25 maps to 4 days left and Day 26 maps to 3.",
  },
];

import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Stardew Valley: Is It Too Late to Plant on Spring Day 25?",
  description:
    "Only 3 days left? Stardew Valley panic-guide for end-of-Spring planting, including the parsnip Speed-Gro edge case and a direct calculator CTA.",
};

export default function StardewValleyIsItTooLateToPlantOnSpringDay25Page() {
  const fromPath = "/blog/stardew-valley-is-it-too-late-to-plant-on-spring-day-25";
  const pageUrl = `${SITE_ORIGIN}/blog/stardew-valley-is-it-too-late-to-plant-on-spring-day-25`;

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
    headline: "Stardew Valley: Is It Too Late to Plant on Spring Day 25?",
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Panic Button</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Is It Too Late to Plant on Spring Day 25?
            </h1>

            <div className="mt-3 space-y-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                Only <strong>3 days</strong> left in this panic template. In that window, almost every normal crop route is
                already dead.
              </p>
              <p>
                If you still want a last-second attempt, the main edge case is <strong>Parsnip + Speed-Gro</strong>.
              </p>
              <p>
                Run the strict panic setup directly: {" "}
                <TrackedBlogCtaLink
                  className="font-semibold text-[#6a3f1e] underline"
                  href="/calculator?season=spring&daysLeft=3"
                  fromPath={fromPath}
                  ctaName="inline_path_link"
                >
                  /calculator?season=spring&daysLeft=3
                </TrackedBlogCtaLink>
                .
              </p>
            </div>

            <div className="mt-4">
              <TrackedBlogCtaLink
                href="/calculator?season=spring&daysLeft=3"
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
                  Panic picks and actions
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
                  href="/calculator?season=spring&daysLeft=3"
                  fromPath={fromPath}
                  ctaName="quick_nav_jump_link"
                >
                  Jump to calculator (Spring, daysLeft=3)
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

            <p className="mt-5 text-sm leading-6 text-[#614326]/90">
              This page is intentionally conservative. In real runs, missing one day here means zero harvest before season rollover.
            </p>

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
                href="/calculator?season=spring&daysLeft=3"
                fromPath={fromPath}
                ctaName="results_section_button"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-80">
                  🧮
                </span>
                Run Panic Scenario in Calculator
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
                Need the less-extreme threshold first? {" "}
                <Link className="font-semibold underline" href="/blog/stardew-valley-is-it-too-late-to-plant-spring-day-20">
                  Stardew Valley: Is it too late to plant on Spring Day 20?
                </Link>
              </li>
              <li>
                Preparing the next season anyway? {" "}
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
                <li>This is a strict panic template built around <code>daysLeft=3</code>.</li>
                <li>
                  Standard conversion reminder: <code>daysLeft = 28 - (dayOfMonth - 1)</code>.
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

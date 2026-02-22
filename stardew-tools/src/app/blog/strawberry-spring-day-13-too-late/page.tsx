import type { Metadata } from "next";
import Link from "next/link";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";

type ScenarioRow = {
  plan: string;
  growthCycle: string;
  estHarvests: string;
  estGoldPerDay: string;
  note: string;
};

const scenarioRows: ScenarioRow[] = [
  {
    plan: "Strawberry (No Speed-Gro)",
    growthCycle: "8d + regrow 4d",
    estHarvests: "2",
    estGoldPerDay: "~8.75",
    note: "Typical Day 13 baseline outcome.",
  },
  {
    plan: "Strawberry (Basic Speed-Gro)",
    growthCycle: "7d + regrow 4d",
    estHarvests: "3",
    estGoldPerDay: "~16.25",
    note: "Edge case where timing can fit a third harvest.",
  },
  {
    plan: "Potato fallback",
    growthCycle: "6d",
    estHarvests: "2",
    estGoldPerDay: "~10.00",
    note: "Stable fallback when strawberry timing feels risky.",
  },
  {
    plan: "Kale fallback",
    growthCycle: "6d",
    estHarvests: "2",
    estGoldPerDay: "~8.00",
    note: "Simple cycle, fewer surprises in late Spring.",
  },
];

const faqItems = [
  {
    question: "Is it too late to plant strawberries on Spring Day 13?",
    answer:
      "Usually no under baseline assumptions. Planting strawberries on Spring Day 13 is commonly still viable for two harvests.",
  },
  {
    question: "How many harvests can I get if I plant strawberries on Spring Day 13?",
    answer:
      "Without Speed-Gro, most setups land on two harvests; with Speed-Gro, some setups can reach a third harvest. The calculator baseline currently assumes no Speed-Gro unless enabled in advanced settings.",
  },
  {
    question: "What should I plant with 16 days left in Spring if I skip strawberries?",
    answer:
      "Use reliable alternatives like potato or kale when you want lower timing risk while keeping a strong late-Spring profit profile.",
  },
];

export const metadata: Metadata = {
  title: "Stardew Valley: Is It Too Late to Plant Strawberries on Spring 13?",
  description:
    "Stardew Valley Spring Day 13 guide with the exact conversion (16 days left), no-Speed-Gro baseline, and fallback crop plans linked to the calculator.",
};

export default function StrawberrySpringDay13TooLatePage() {
  const fromPath = "/blog/strawberry-spring-day-13-too-late";
  const pageUrl = "https://stardewprofit.com/blog/strawberry-spring-day-13-too-late";

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
    headline: "Stardew Valley: Is It Too Late to Plant Strawberries on Spring 13?",
    datePublished: "2026-02-16",
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Timing Decision Guide</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Is It Too Late to Plant Strawberries on Spring 13?
            </h1>

            <div className="mt-3 space-y-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                This is one of the highest-friction Stardew questions because one day of timing can change total
                harvest count.
              </p>
              <p>
                Spring Day 13 means <strong>daysLeft = 16</strong> using <code>daysLeft = 28 - (dayOfMonth - 1)</code>.
              </p>
              <p>
                Run the exact scenario in the calculator: {" "}
                <TrackedBlogCtaLink
                  className="font-semibold text-[#6a3f1e] underline"
                  href="/calculator?season=spring&daysLeft=16"
                  fromPath={fromPath}
                  ctaName="inline_path_link"
                >
                  /calculator?season=spring&daysLeft=16
                </TrackedBlogCtaLink>
                .
              </p>
            </div>

            <div className="mt-4">
              <TrackedBlogCtaLink
                href="/calculator?season=spring&daysLeft=16"
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
                  Top picks and verdict
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
                  href="/calculator?season=spring&daysLeft=16"
                  fromPath={fromPath}
                  ctaName="quick_nav_jump_link"
                >
                  Jump to calculator (Spring, daysLeft=16)
                </TrackedBlogCtaLink>
              </li>
            </ul>
          </section>

          <section
            id="top-picks"
            className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7"
          >
            <h2 className="text-2xl font-semibold text-[#4a321e]">Quick Verdict</h2>
            <ul className="mt-4 grid gap-3">
              <li className="rounded-2xl border border-[#9f744c]/30 bg-[#fff8e8]/85 px-4 py-3 text-sm text-[#614326]/90">
                <strong className="text-[#4e341f]">No Speed-Gro baseline:</strong> still worth planting on Day 13 in
                most runs, but usually for 2 harvests.
              </li>
              <li className="rounded-2xl border border-[#9f744c]/30 bg-[#fff8e8]/85 px-4 py-3 text-sm text-[#614326]/90">
                <strong className="text-[#4e341f]">With Speed-Gro:</strong> timing may fit a third harvest, depending
                on watering consistency and exact growth assumptions.
              </li>
              <li className="rounded-2xl border border-[#9f744c]/30 bg-[#fff8e8]/85 px-4 py-3 text-sm text-[#614326]/90">
                <strong className="text-[#4e341f]">If uncertain:</strong> compare strawberry vs potato/kale fallback
                at the same <code>daysLeft=16</code> in the calculator.
              </li>
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-2xl font-semibold text-[#4a321e]">Scenario Table (From Spring Day 13)</h2>
            <p className="mt-2 text-sm text-[#614326]/90">
              Estimated outcomes for discussion and prioritization. Validate with your own quality/profession settings
              in the calculator.
            </p>

            <div className="relative mt-4 overflow-x-auto">
              <table className="min-w-[760px] w-full border-separate border-spacing-y-2 text-sm tracking-wide">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Plan</th>
                    <th className="px-3 py-2">Growth Cycle</th>
                    <th className="px-3 py-2">Est. Harvests</th>
                    <th className="px-3 py-2">Est. Gold/Day</th>
                    <th className="px-3 py-2">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {scenarioRows.map((row, index) => (
                    <tr
                      key={row.plan}
                      className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl shadow-[0_1px_0_rgba(122,82,46,0.14)] ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-medium text-[#503521]">{row.plan}</td>
                      <td className="px-3 py-3 text-[#5f432a]/85">{row.growthCycle}</td>
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
                href="/calculator?season=spring&daysLeft=16"
                fromPath={fromPath}
                ctaName="results_section_button"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-80">
                  🧮
                </span>
                Test Spring Day 13 Case in Calculator
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
                For other late-season choices, see: {" "}
                <Link className="font-semibold underline" href="/blog/best-spring-crops-10-days-left">
                  Best Spring Crops With 10 Days Left
                </Link>
              </li>
              <li>
                Need the next day-threshold scenario? Read: {" "}
                <Link className="font-semibold underline" href="/blog/spring-day-15-what-to-plant-profit">
                  Stardew Valley Spring Day 15: what can I still plant for profit?
                </Link>
              </li>
              <li>
                For the shortest late-season setup, read: {" "}
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
                <li>Day 0 means you plant today with seeds already in inventory.</li>
                <li>Season length is 28 days and day conversion is fixed.</li>
                <li>
                  Day-to-daysLeft conversion: <code>daysLeft = 28 - (dayOfMonth - 1)</code>.
                </li>
                <li>Default analysis assumes no Speed-Gro unless explicitly toggled in advanced settings.</li>
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

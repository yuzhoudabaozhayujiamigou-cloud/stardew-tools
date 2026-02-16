import type { Metadata } from "next";
import Link from "next/link";

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
};

const topPicks: PickItem[] = [
  {
    crop: "Potato",
    why: "Safe late-spring value pick because expected multi-yield keeps returns stable even with a short window.",
  },
  {
    crop: "Kale",
    why: "6-day cycle gives a clean one-cycle finish in a 10-day window with simple planning.",
  },
  {
    crop: "Garlic",
    why: "Short cycle and low seed cost make it forgiving when your budget and energy are tight.",
  },
  {
    crop: "Parsnip",
    why: "Best low-capital filler when you need broad field coverage and low risk replanting.",
  },
];

const rows: TableRow[] = [
  {
    crop: "Potato",
    growth: "6d",
    estHarvests: "1",
    estGoldPerDay: "~5.00",
  },
  {
    crop: "Kale",
    growth: "6d",
    estHarvests: "1",
    estGoldPerDay: "~4.00",
  },
  {
    crop: "Garlic",
    growth: "4d",
    estHarvests: "2",
    estGoldPerDay: "~4.00",
  },
  {
    crop: "Parsnip",
    growth: "4d",
    estHarvests: "2",
    estGoldPerDay: "~3.00",
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
    question: "What is the best crop with 10 days left in Spring?",
    answer:
      "For a short 10-day window, practical picks are potato, kale, garlic, and parsnip because they can finish within or close to one clean cycle under baseline assumptions.",
  },
  {
    question: "Should I plant cauliflower with 10 days left?",
    answer:
      "Usually no. Cauliflower needs 12 days, so a new planting with 10 days left does not complete before Spring ends.",
  },
  {
    question: "How do I convert day-of-season to daysLeft?",
    answer:
      "Use daysLeft = 28 - (dayOfMonth - 1). For example, Spring Day 19 means 10 days left.",
  },
];

export const metadata: Metadata = {
  title: "Best Spring Crops With 10 Days Left (Stardew Valley)",
  description:
    "Late Spring crop picks for a 10-day window. Compare fast options, estimated harvest count, and gold/day with a direct calculator CTA.",
};

export default function BestSpringCrops10DaysLeftPage() {
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Late Spring Planning</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Best Spring Crops With 10 Days Left
            </h1>

            <div className="mt-3 space-y-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                If you are in late Spring with only about 10 days left, the wrong seed choice can lock your field into
                low returns.
              </p>
              <p>
                This quick guide focuses on Year 1-friendly constraints: no sprinklers, no Speed-Gro, and direct crop
                selling.
              </p>
              <p>
                Use the live calculator for your exact setup: {" "}
                <Link className="font-semibold text-[#6a3f1e] underline" href="/calculator?season=spring&daysLeft=10">
                  /calculator?season=spring&daysLeft=10
                </Link>
                .
              </p>
            </div>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-2xl font-semibold text-[#4a321e]">Top Picks (10-Day Window)</h2>
            <ul className="mt-4 grid gap-3">
              {topPicks.map((item) => (
                <li key={item.crop} className="rounded-2xl border border-[#9f744c]/30 bg-[#fff8e8]/85 px-4 py-3">
                  <h3 className="text-base font-semibold text-[#4e341f]">{item.crop}</h3>
                  <p className="mt-1 text-sm text-[#614326]/90">{item.why}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-2xl font-semibold text-[#4a321e]">Quick Comparison Table</h2>
            <p className="mt-2 text-sm text-[#614326]/90">
              Baseline estimate under a 10-day horizon with direct selling and no profession/fertilizer bonuses.
            </p>

            <div className="relative mt-4 overflow-x-auto">
              <table className="min-w-[640px] w-full border-separate border-spacing-y-2 text-sm tracking-wide">
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

            <div className="mt-5">
              <Link
                href="/calculator?season=spring&daysLeft=10"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-80">
                  🧮
                </span>
                Check 10-Day Results in Calculator
              </Link>
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
      </main>
    </div>
  );
}

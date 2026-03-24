import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/guides/strawberry-profit-guide";

const PAGE_TITLE = "Strawberry Profit Stardew Valley Guide | StardewProfit";
const PAGE_DESCRIPTION =
  "Learn strawberry profit Stardew Valley strategy: Egg Festival timing, Spring harvest counts, Year 1 planning, processing choices, and common mistakes to avoid.";

const CARD_CLASS =
  "mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60";

const HARVEST_ROWS = [
  {
    setup: "Year 1, plant on Spring 13 (Egg Festival)",
    firstHarvest: "Spring 21",
    totalSpringHarvests: "2 (Day 21, Day 25)",
    note: "Standard Year 1 outcome without pre-stocked seeds.",
  },
  {
    setup: "Year 1 with speed fertilizer before planting",
    firstHarvest: "Around Spring 19-20",
    totalSpringHarvests: "Often 3 with tight timing",
    note: "Can recover one extra harvest if setup is ready before festival day.",
  },
  {
    setup: "Year 2+, plant on Spring 1",
    firstHarvest: "Spring 9",
    totalSpringHarvests: "5 (Day 9, 13, 17, 21, 25)",
    note: "Best long-term strawberry profit pattern.",
  },
] as const;

const PROCESSING_ROWS = [
  {
    path: "Sell raw strawberries",
    strengths: "Fast cash flow and no machine bottleneck",
    whenToUse: "Early Year 1 when kegs and jars are limited",
  },
  {
    path: "Preserves Jar",
    strengths: "Stable value increase with easier machine scaling",
    whenToUse: "Mid-game when you can process batches each week",
  },
  {
    path: "Keg",
    strengths: "Higher upside but longer processing cycle",
    whenToUse: "Late-game machine-heavy farms with steady input volume",
  },
  {
    path: "Seed Maker",
    strengths: "Builds seed stock for Spring 1 planting next year",
    whenToUse: "When preparing Year 2+ strawberry expansion",
  },
] as const;

const FAQS = [
  {
    question: "Why is strawberry profit so strong in Stardew Valley?",
    answer:
      "Strawberries are multi-harvest crops with strong Spring timing. They are especially profitable once you can plant on Spring 1 and collect five harvests in one season.",
  },
  {
    question: "How many strawberry harvests do I get in Year 1?",
    answer:
      "If you buy seeds at the Egg Festival on Spring 13 and plant immediately, you usually get two harvests in Spring. With good speed setup, you can sometimes squeeze in a third.",
  },
  {
    question: "Should I process strawberries or sell raw?",
    answer:
      "In early Year 1, selling raw is often best for liquidity. As machine capacity grows, jars and kegs can increase total value, and Seed Maker helps secure next Spring's seed stock.",
  },
] as const;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    type: "article",
    url: `${SITE_URL}${PAGE_PATH}`,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function StrawberryProfitGuidePage() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Strawberry Profit Guide", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />

        <header className={`${CARD_CLASS} mt-6`}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Strawberry Profit Guide</h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            This strawberry profit Stardew Valley guide focuses on practical timing: buying on Egg Festival day,
            maximizing Spring harvest count, and deciding when to sell raw fruit versus process for higher value.
          </p>
        </header>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Egg Festival Timing and Spring Harvest Count</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Setup</th>
                  <th className="px-4 py-3 font-semibold">First Harvest</th>
                  <th className="px-4 py-3 font-semibold">Spring Harvests</th>
                  <th className="px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {HARVEST_ROWS.map((row) => (
                  <tr key={row.setup} className="border-t border-[#7c4d2e]/30 align-top">
                    <td className="px-4 py-3 font-semibold">{row.setup}</td>
                    <td className="px-4 py-3">{row.firstHarvest}</td>
                    <td className="px-4 py-3">{row.totalSpringHarvests}</td>
                    <td className="px-4 py-3">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-6 text-[#5f4228]/85">
            Key point: Year 1 strawberry seeds arrive on Spring 13, so your baseline is lower than Year 2+.
          </p>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Year 1 Strategy That Works</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Save cash before Spring 13 so you can buy enough seeds immediately.</li>
            <li>Prepare tilled and watered space before the festival to plant right away.</li>
            <li>Use speed fertilizer only if it can realistically add one more Spring harvest.</li>
            <li>Keep part of the output for Seed Maker plans so Year 2 starts stronger.</li>
          </ul>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Processing Options</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Path</th>
                  <th className="px-4 py-3 font-semibold">Strength</th>
                  <th className="px-4 py-3 font-semibold">When to Use</th>
                </tr>
              </thead>
              <tbody>
                {PROCESSING_ROWS.map((row) => (
                  <tr key={row.path} className="border-t border-[#7c4d2e]/30 align-top">
                    <td className="px-4 py-3 font-semibold">{row.path}</td>
                    <td className="px-4 py-3">{row.strengths}</td>
                    <td className="px-4 py-3">{row.whenToUse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Common Mistakes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Spending too much before Spring 13 and missing strawberry seed volume.</li>
            <li>Planting late after the festival and losing one full harvest cycle.</li>
            <li>Overcommitting to processing without enough jars or kegs to handle output.</li>
            <li>Skipping seed stock planning and repeating the same Year 1 timing limits.</li>
          </ul>
        </section>

        <section id="faq" className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-4 space-y-3">
            {FAQS.map((item) => (
              <details key={item.question} className="rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8] p-4">
                <summary className="cursor-pointer font-semibold text-[#4a321e]">{item.question}</summary>
                <p className="mt-2 leading-7 text-[#5f4228]/90">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Related Guides and Tools</h2>
          <ul className="mt-4 space-y-2 leading-7 text-[#5f4228]/90">
            <li>
              <Link href="/tools/keg-vs-preserves-jar" className={LINK_CLASS}>
                Keg vs Preserves Jar Tool
              </Link>
            </li>
            <li>
              <Link href="/tools/seed-maker" className={LINK_CLASS}>
                Seed Maker Tool
              </Link>
            </li>
            <li>
              <Link href="/guides/spring-crops" className={LINK_CLASS}>
                Spring Crops Guide
              </Link>
            </li>
            <li>
              <Link href="/guides/strawberry-vs-blueberry-vs-cranberries" className={LINK_CLASS}>
                Strawberry vs Blueberry vs Cranberries
              </Link>
            </li>
          </ul>
          <div className="mt-5 rounded-2xl border border-[#7c4d2e]/60 bg-[#f8ecc8] p-4">
            <p className="text-sm leading-6 text-[#5f4228]/90">
              Compare your exact crop plan and machine setup before planting.
            </p>
            <Link href="/calculator" className={`${LINK_CLASS} mt-2 inline-block font-semibold`}>
              Open the Stardew Valley Profit Calculator
            </Link>
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </article>
    </main>
  );
}

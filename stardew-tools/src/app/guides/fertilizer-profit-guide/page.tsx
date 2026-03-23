import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/guides/fertilizer-profit-guide";

const PAGE_TITLE = "Fertilizer Profit Guide for Stardew Valley | StardewProfit";
const PAGE_DESCRIPTION =
  "A practical fertilizer profit guide for Stardew Valley covering quality fertilizers, Speed-Gro options, and when each one adds real value.";

const CARD_CLASS =
  "mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60";

const FERTILIZER_ROWS = [
  {
    fertilizer: "Basic Fertilizer",
    effect: "Improves crop quality chance",
    bestUse: "Low-cost quality boost on early crops",
  },
  {
    fertilizer: "Quality Fertilizer",
    effect: "Higher chance for silver and gold quality",
    bestUse: "Mid-game value crops like Melon and Pumpkin",
  },
  {
    fertilizer: "Deluxe Fertilizer",
    effect: "Strongest quality boost",
    bestUse: "High-value single harvest crops and contest crops",
  },
  {
    fertilizer: "Speed-Gro",
    effect: "10% faster growth",
    bestUse: "When shaving days secures an extra harvest window",
  },
  {
    fertilizer: "Deluxe Speed-Gro",
    effect: "25% faster growth",
    bestUse: "Tight seasonal schedules and expensive crops",
  },
  {
    fertilizer: "Hyper Speed-Gro",
    effect: "33% faster growth",
    bestUse: "Late-game min-maxing and aggressive crop cycles",
  },
] as const;

const FAQS = [
  {
    question: "Is quality fertilizer always better than speed fertilizer?",
    answer:
      "Not always. Quality fertilizer improves sell value, while speed fertilizer only matters when reduced grow time changes harvest count or timing. The better choice depends on your crop calendar.",
  },
  {
    question: "Does Speed-Gro affect every harvest of regrowing crops?",
    answer:
      "Speed-Gro affects time to first harvest. It does not speed up later regrowth intervals, so quality-focused fertilizer is often better for long-running regrow crops.",
  },
  {
    question: "When should beginners use fertilizer?",
    answer:
      "Beginners should use low-cost fertilizer selectively on valuable plots first, then expand as budget grows. Avoid over-investing in fertilizer when seed and tool upgrades are the larger bottleneck.",
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

export default function FertilizerProfitGuidePage() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Fertilizer Profit Guide", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />

        <header className={`${CARD_CLASS} mt-6`}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Fertilizer Profit Guide</h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            Fertilizer can be a real profit multiplier, but only when matched to crop timing. This guide
            helps you decide between quality-focused fertilizer and speed-focused fertilizer without guesswork.
          </p>
        </header>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Fertilizer Types and Best Use</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Fertilizer</th>
                  <th className="px-4 py-3 font-semibold">Main Effect</th>
                  <th className="px-4 py-3 font-semibold">Best Use Case</th>
                </tr>
              </thead>
              <tbody>
                {FERTILIZER_ROWS.map((row) => (
                  <tr key={row.fertilizer} className="border-t border-[#7c4d2e]/30 align-top">
                    <td className="px-4 py-3 font-semibold">{row.fertilizer}</td>
                    <td className="px-4 py-3">{row.effect}</td>
                    <td className="px-4 py-3">{row.bestUse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Profit Rules That Matter Most</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Use quality fertilizer on high base-value crops where quality tiers pay back quickly.</li>
            <li>Use Speed-Gro only if reduced days create one extra harvest or prevent seasonal loss.</li>
            <li>For long-term regrow crops, quality fertilizers often outperform speed fertilizers.</li>
            <li>Review fertilizer choice every season based on available seed money and machine capacity.</li>
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
              <Link href="/tools/sprinkler-coverage-calculator" className={LINK_CLASS}>
                Sprinkler Coverage Calculator
              </Link>
            </li>
            <li>
              <Link href="/tools/artisan-profit" className={LINK_CLASS}>
                Artisan Profit Tool
              </Link>
            </li>
            <li>
              <Link href="/tools/seed-maker" className={LINK_CLASS}>
                Seed Maker Tool
              </Link>
            </li>
            <li>
              <Link href="/guides/quality-sprinklers-guide" className={LINK_CLASS}>
                Quality Sprinklers Guide
              </Link>
            </li>
            <li>
              <Link href="/guides/spring-crops" className={LINK_CLASS}>
                Spring Crops Guide
              </Link>
            </li>
            <li>
              <Link href="/guides/best-crops-every-season" className={LINK_CLASS}>
                Best Crops Every Season
              </Link>
            </li>
          </ul>
        </section>

        <SiteFooter className="mt-10" />
      </article>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/guides/speed-gro-vs-deluxe-speed-gro";

const PAGE_TITLE = "Speed Gro vs Deluxe Speed Gro Stardew Valley | StardewProfit";
const PAGE_DESCRIPTION =
  "Compare speed gro vs deluxe speed gro Stardew Valley with cost, availability, crop cycle impact, and quick rules for deciding when each fertilizer is worth it.";

const CARD_CLASS =
  "mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60";

const COMPARISON_ROWS = [
  {
    option: "Speed-Gro",
    growthEffect: "10% faster growth",
    typicalCost: "Lower upfront cost",
    availability: "Earlier and easier to buy or craft",
    bestWhen: "You only need a small timing push to fit one extra cycle",
  },
  {
    option: "Deluxe Speed-Gro",
    growthEffect: "25% faster growth",
    typicalCost: "Higher upfront cost",
    availability: "Usually later progression and less convenient shops",
    bestWhen: "Your schedule is tight and missing one harvest is expensive",
  },
] as const;

const DECISION_ROWS = [
  {
    situation: "Early Year 1 with low cash",
    pick: "Speed-Gro",
    reason: "Cheaper to scale while seed money is still your main bottleneck.",
  },
  {
    situation: "Mid-game with expensive crops and limited days",
    pick: "Deluxe Speed-Gro",
    reason: "A stronger cycle cut is more likely to add a full extra harvest.",
  },
  {
    situation: "Regrow crops after first harvest",
    pick: "Usually Speed-Gro or no speed fertilizer",
    reason: "Speed fertilizer affects first harvest timing, not later regrowth ticks.",
  },
  {
    situation: "Greenhouse min-max with high capital",
    pick: "Deluxe Speed-Gro",
    reason: "Higher setup cost is often justified by tighter long-term throughput.",
  },
] as const;

const FAQS = [
  {
    question: "Is Deluxe Speed-Gro always better than Speed-Gro?",
    answer:
      "Not automatically. Deluxe Speed-Gro gives a bigger growth reduction, but it only pays off when that extra reduction changes harvest count or protects an expensive crop cycle.",
  },
  {
    question: "Does speed fertilizer shorten every harvest on regrow crops?",
    answer:
      "No. Speed fertilizer mainly shortens time to first harvest. Regrowth intervals usually stay the same, so always test if the initial timing gain changes total season output.",
  },
  {
    question: "How should I decide between Speed-Gro and Deluxe Speed-Gro?",
    answer:
      "Run a cycle check: compare expected harvest count with and without each fertilizer. If Deluxe is not adding an extra harvest or avoiding wasted days, use the cheaper option.",
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

export default function SpeedGroVsDeluxeSpeedGroPage() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Speed-Gro vs Deluxe Speed-Gro", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />

        <header className={`${CARD_CLASS} mt-6`}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Speed-Gro vs Deluxe Speed-Gro</h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            For speed gro vs deluxe speed gro Stardew Valley planning, the real question is not only fertilizer
            strength. You need to compare cost, availability, and whether crop cycle shortening actually creates
            one additional harvest window.
          </p>
        </header>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Cost and Availability Comparison</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Fertilizer</th>
                  <th className="px-4 py-3 font-semibold">Growth Effect</th>
                  <th className="px-4 py-3 font-semibold">Typical Cost</th>
                  <th className="px-4 py-3 font-semibold">Availability</th>
                  <th className="px-4 py-3 font-semibold">When It Is Worth It</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.option} className="border-t border-[#7c4d2e]/30 align-top">
                    <td className="px-4 py-3 font-semibold">{row.option}</td>
                    <td className="px-4 py-3">{row.growthEffect}</td>
                    <td className="px-4 py-3">{row.typicalCost}</td>
                    <td className="px-4 py-3">{row.availability}</td>
                    <td className="px-4 py-3">{row.bestWhen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Quick Decision Table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Situation</th>
                  <th className="px-4 py-3 font-semibold">Pick</th>
                  <th className="px-4 py-3 font-semibold">Why</th>
                </tr>
              </thead>
              <tbody>
                {DECISION_ROWS.map((row) => (
                  <tr key={row.situation} className="border-t border-[#7c4d2e]/30 align-top">
                    <td className="px-4 py-3 font-semibold">{row.situation}</td>
                    <td className="px-4 py-3">{row.pick}</td>
                    <td className="px-4 py-3">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Cycle-Shortening Rule</h2>
          <p className="mt-4 leading-7 text-[#5f4228]/90">
            Use speed fertilizer when reducing crop days changes total harvest count. If both options still produce
            the same number of harvests, choose the cheaper setup and keep capital for seeds, sprinklers, or machines.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Check season day remaining before planting.</li>
            <li>Estimate first-harvest timing with each fertilizer.</li>
            <li>Count total harvests and compare net difference after fertilizer cost.</li>
            <li>Only pay for Deluxe when the cycle gain is meaningful in gold terms.</li>
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
              <Link href="/tools/seed-maker" className={LINK_CLASS}>
                Seed Maker Tool
              </Link>
            </li>
            <li>
              <Link href="/tools/sprinkler-coverage-calculator" className={LINK_CLASS}>
                Sprinkler Coverage Calculator
              </Link>
            </li>
            <li>
              <Link href="/guides/fertilizer-profit-guide" className={LINK_CLASS}>
                Fertilizer Profit Guide
              </Link>
            </li>
            <li>
              <Link href="/guides/best-crops-every-season" className={LINK_CLASS}>
                Best Crops Every Season
              </Link>
            </li>
          </ul>
          <div className="mt-5 rounded-2xl border border-[#7c4d2e]/60 bg-[#f8ecc8] p-4">
            <p className="text-sm leading-6 text-[#5f4228]/90">
              Want to test full-season outcomes with your exact crop plan?
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

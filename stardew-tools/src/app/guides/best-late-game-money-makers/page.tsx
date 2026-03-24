import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/guides/best-late-game-money-makers";

const PAGE_TITLE = "Best Late-Game Money Makers (Stardew 1.6) | StardewProfit";
const PAGE_DESCRIPTION =
  "Compare reliable late-game money makers in Stardew Valley 1.6 and choose a production mix that supports perfection goals like obelisks and Golden Clock.";

const CARD_CLASS =
  "mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60";

const MONEY_ROWS = [
  {
    method: "Ancient Fruit into wine",
    strengths: "Stable repeat cycle and easy long-horizon scaling.",
    limits: "Needs large keg capacity and consistent collection cadence.",
  },
  {
    method: "Starfruit-focused artisan batches",
    strengths: "Strong per-item upside for planned production windows.",
    limits: "Higher seed and planning pressure if cash buffer is thin.",
  },
  {
    method: "Fairy Rose honey routes",
    strengths: "Strong seasonal output with low daily touch once setup is done.",
    limits: "Layout and placement matter; poor routing cuts efficiency.",
  },
  {
    method: "Pig + truffle pipeline",
    strengths: "Powerful daily cash flow with straightforward conversion options.",
    limits: "Requires animal care rhythm and weather-aware expectations.",
  },
  {
    method: "Aged roe / specialty fish products",
    strengths: "Good supplemental income that fills idle machine windows.",
    limits: "Not always ideal as your single primary endgame engine.",
  },
] as const;

const STRATEGY_RULES = [
  "Use one primary engine and one secondary engine instead of splitting effort across many small pipelines.",
  "Track machine bottlenecks weekly; idle machines and inventory pileups both reduce effective profit.",
  "Reserve part of your gold for seeds, materials, and quest prep so perfection tasks stay on schedule.",
  "Rebalance only at season boundaries unless a major unlock changes your throughput.",
] as const;

const FAQS = [
  {
    question: "What is the best single late-game money maker?",
    answer:
      "There is no universal best for every farm. Ancient Fruit wine is popular for consistency, while other setups can outperform in specific farm layouts and work rhythms.",
  },
  {
    question: "Should I switch methods every season?",
    answer:
      "Only if your unlocks changed meaningfully. Frequent switching creates downtime; stable loops usually win over constant reconfiguration.",
  },
  {
    question: "How does this connect to perfection goals?",
    answer:
      "Late-game income funds expensive perfection requirements like obelisks and Golden Clock, and also supports prep for Qi quests and island cleanup.",
  },
] as const;

const RELATED_LINKS = [
  { href: "/guides/perfection-checklist-1-6", label: "Perfection Checklist 1.6" },
  { href: "/guides/golden-clock-guide", label: "Golden Clock Guide" },
  { href: "/guides/how-to-get-qi-gems-fast", label: "How to Get Qi Gems Fast" },
  { href: "/guides/golden-walnuts-guide", label: "Golden Walnuts Guide" },
  { href: "/tools/perfection-tracker", label: "Perfection Tracker Tool" },
  { href: "/calculator", label: "Stardew Valley Profit Calculator" },
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

export default function BestLateGameMoneyMakersPage() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Best Late-Game Money Makers", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />

        <header className={`${CARD_CLASS} mt-6`}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Best Late-Game Money Makers</h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            Strong endgame profit is less about one perfect crop and more about running stable, repeatable
            pipelines that feed perfection milestones.
          </p>
        </header>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Top Late-Game Options</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Method</th>
                  <th className="px-4 py-3 font-semibold">Why Players Use It</th>
                  <th className="px-4 py-3 font-semibold">Watchouts</th>
                </tr>
              </thead>
              <tbody>
                {MONEY_ROWS.map((row) => (
                  <tr key={row.method} className="border-t border-[#7c4d2e]/30 align-top">
                    <td className="px-4 py-3 font-semibold">{row.method}</td>
                    <td className="px-4 py-3">{row.strengths}</td>
                    <td className="px-4 py-3">{row.limits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Money Routing Rules</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            {STRATEGY_RULES.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">When to Pivot Your Setup</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Pivot after major unlocks, not after random low-output days.</li>
            <li>Compare projected gold over full cycles, not one-off harvest snapshots.</li>
            <li>If a method is profitable but exhausting to run, simplify before scaling.</li>
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
          <h2 className="text-2xl font-semibold">Related Guides &amp; Tools</h2>
          <ul className="mt-4 space-y-2 leading-7 text-[#5f4228]/90">
            {RELATED_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={LINK_CLASS}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <SiteFooter className="mt-10" />
      </article>
    </main>
  );
}

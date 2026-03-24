import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/guides/golden-clock-guide";

const PAGE_TITLE = "Golden Clock Guide (Stardew 1.6) | StardewProfit";
const PAGE_DESCRIPTION =
  "Plan your Golden Clock purchase for Stardew Valley perfection with a practical late-game funding order and risk-controlled money routing.";

const CARD_CLASS =
  "mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60";

const TIMELINE_ROWS = [
  {
    step: "Set base income",
    details: "Lock in repeatable artisan output before chasing expensive monuments.",
  },
  {
    step: "Finish mobility",
    details: "Build key obelisks first so daily routing is faster and less error-prone.",
  },
  {
    step: "Fund the clock",
    details: "Push high-throughput money makers until the 10,000,000g purchase is safe.",
  },
] as const;

const FUNDING_RULES = [
  "Run a primary cash engine (for example, crop-to-keg loops) and avoid splitting inventory across too many weak lines.",
  "Keep a buffer for seeds, upgrades, and emergencies so your clock fund does not collapse mid-season.",
  "Batch upgrades and purchases on planned days to reduce travel and processing waste.",
  "Use your calculator projections weekly to verify that your gold pace still supports the target date.",
] as const;

const FAQS = [
  {
    question: "How much does the Golden Clock cost?",
    answer:
      "The Golden Clock costs 10,000,000g. It is one of the largest single purchases in Stardew Valley and is required for full perfection.",
  },
  {
    question: "Should I buy obelisks or Golden Clock first?",
    answer:
      "Most players progress faster by finishing obelisks first, then buying Golden Clock. Better travel speed helps you execute money loops and finish other perfection tasks more consistently.",
  },
  {
    question: "What is the biggest mistake when saving for Golden Clock?",
    answer:
      "Over-investing into new experiments while saving. Late-game gold grows best when you keep one reliable production pipeline and protect your working capital.",
  },
] as const;

const RELATED_LINKS = [
  { href: "/guides/perfection-checklist-1-6", label: "Perfection Checklist 1.6" },
  { href: "/guides/best-late-game-money-makers", label: "Best Late-Game Money Makers" },
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

export default function GoldenClockGuidePage() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Golden Clock Guide", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />

        <header className={`${CARD_CLASS} mt-6`}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Golden Clock Guide</h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            Golden Clock is a perfection milestone and a major capital test. This guide helps you reach
            it without breaking your farm cash flow.
          </p>
        </header>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Practical Build Order</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Step</th>
                  <th className="px-4 py-3 font-semibold">What to Do</th>
                </tr>
              </thead>
              <tbody>
                {TIMELINE_ROWS.map((row) => (
                  <tr key={row.step} className="border-t border-[#7c4d2e]/30 align-top">
                    <td className="px-4 py-3 font-semibold">{row.step}</td>
                    <td className="px-4 py-3">{row.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-6 text-[#5f4228]/85">
            Milestone check: do not trigger the 10,000,000g purchase until your production loop is stable.
          </p>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Funding Rules That Keep Momentum</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            {FUNDING_RULES.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Before You Buy</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Confirm perfection blockers are mostly non-economic (friendships, recipes, slayer gaps).</li>
            <li>Keep enough liquid gold for your next production cycle after purchase.</li>
            <li>Review your pathing plan so post-clock days remain productive, not reactive.</li>
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

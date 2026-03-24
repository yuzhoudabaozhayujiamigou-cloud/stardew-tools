import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/guides/golden-walnuts-guide";

const PAGE_TITLE = "Golden Walnuts Guide for Perfection | StardewProfit";
const PAGE_DESCRIPTION =
  "Use this Golden Walnuts guide to clear Ginger Island progression for Stardew Valley perfection with practical tracking and cleanup steps.";

const CARD_CLASS =
  "mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60";

const SOURCE_ROWS = [
  {
    source: "Exploration spots",
    notes: "Check hidden paths, dig points, and interactable map objects.",
  },
  {
    source: "Puzzle or event rewards",
    notes: "Finish island mini-events and puzzle interactions you may have skipped early.",
  },
  {
    source: "Combat and activity rewards",
    notes: "Clear island combat loops and repeatable gameplay that can grant walnuts.",
  },
  {
    source: "Island farming/fishing paths",
    notes: "Keep normal island activity active while targeting known missing categories.",
  },
] as const;

const CLEANUP_STEPS = [
  "Unlock enough island infrastructure first so routing is efficient.",
  "Use parrot hints to narrow the missing category before free-roaming.",
  "Clear one zone at a time and mark what is done in your own tracker.",
  "After each cleanup pass, re-check hints and repeat until no gaps remain.",
] as const;

const FAQS = [
  {
    question: "Why are Golden Walnuts critical for perfection?",
    answer:
      "Golden Walnuts gate Ginger Island progression and are part of the perfection checklist. Missing walnuts can block multiple late-game systems at once.",
  },
  {
    question: "What is the safest way to find missing walnuts?",
    answer:
      "Use hint-driven cleanup, not random searching. Start from parrot hints, focus one area at a time, and track finished sources so you do not recheck the same spots endlessly.",
  },
  {
    question: "Should I do walnuts before Qi Gem optimization?",
    answer:
      "Usually yes. Stable island unlocks and movement options make Qi quest planning much easier and reduce wasted travel time.",
  },
] as const;

const RELATED_LINKS = [
  { href: "/guides/perfection-checklist-1-6", label: "Perfection Checklist 1.6" },
  { href: "/guides/how-to-get-qi-gems-fast", label: "How to Get Qi Gems Fast" },
  { href: "/guides/golden-clock-guide", label: "Golden Clock Guide" },
  { href: "/guides/best-late-game-money-makers", label: "Best Late-Game Money Makers" },
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

export default function GoldenWalnutsGuidePage() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Golden Walnuts Guide", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />

        <header className={`${CARD_CLASS} mt-6`}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Golden Walnuts Guide</h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            Golden Walnut cleanup is mostly a tracking problem. Use a structured route and clear one source
            category at a time.
          </p>
        </header>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Where Walnuts Usually Come From</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Source</th>
                  <th className="px-4 py-3 font-semibold">Practical Notes</th>
                </tr>
              </thead>
              <tbody>
                {SOURCE_ROWS.map((row) => (
                  <tr key={row.source} className="border-t border-[#7c4d2e]/30 align-top">
                    <td className="px-4 py-3 font-semibold">{row.source}</td>
                    <td className="px-4 py-3">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Efficient Cleanup Sequence</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            {CLEANUP_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Common Reasons Players Stall</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Searching randomly instead of using hint-driven passes.</li>
            <li>Not recording completed interactions and revisiting solved spots.</li>
            <li>Trying to finish walnuts without unlocking enough island mobility first.</li>
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

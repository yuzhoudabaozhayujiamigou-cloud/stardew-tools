import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/guides/perfection-checklist-1-6";

const PAGE_TITLE = "Stardew Valley 1.6 Perfection Checklist | StardewProfit";
const PAGE_DESCRIPTION =
  "Use this concise Stardew Valley 1.6 perfection checklist to plan skills, stardrops, crafting, cooking, walnuts, friendships, and late-game purchases.";

const CARD_CLASS =
  "mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60";

const CHECKLIST_GROUPS = [
  {
    name: "Core progression",
    items: [
      "Level all skills to 10.",
      "Collect all stardrops.",
      "Complete the museum and shipping goals.",
    ],
  },
  {
    name: "Walnut Room goals",
    items: [
      "Finish monster slayer goals at the Adventurer's Guild.",
      "Craft every recipe and cook every recipe at least once.",
      "Find all Golden Walnuts and unlock Ginger Island systems.",
    ],
  },
  {
    name: "Late-game purchases",
    items: [
      "Build all obelisks.",
      "Buy the Golden Clock.",
      "Max friendships and clear any final checklist gaps.",
    ],
  },
] as const;

const ROADMAP_ROWS = [
  {
    phase: "Stabilize",
    focus: "Skills, recipes, and daily routine",
    why: "You reduce checklist drift and avoid random endgame backtracking.",
  },
  {
    phase: "Unlock",
    focus: "Walnut Room and Ginger Island coverage",
    why: "Qi quests and island unlocks open the fastest late-game pathing.",
  },
  {
    phase: "Close",
    focus: "Monster slayer, friendships, obelisks, Golden Clock",
    why: "These are the most common final blockers before perfection triggers.",
  },
] as const;

const FAQS = [
  {
    question: "What is the safest order for Stardew 1.6 perfection?",
    answer:
      "Start with repeatable progress first: skills, recipes, and shipping coverage. Then clear island and Qi systems, and leave expensive purchases like obelisks and Golden Clock for last.",
  },
  {
    question: "Should I chase Golden Clock first?",
    answer:
      "Usually no. Golden Clock is required for perfection, but rushing it too early can slow your progress on recipes, slayer goals, and walnuts.",
  },
  {
    question: "How do I avoid missing one tiny requirement at the end?",
    answer:
      "Track every category in one place and do weekly gap checks. A lightweight checklist tool is usually enough to catch single missing recipes, stardrops, or friendship hearts.",
  },
] as const;

const RELATED_LINKS = [
  { href: "/tools/perfection-tracker", label: "Perfection Tracker Tool" },
  { href: "/guides/golden-clock-guide", label: "Golden Clock Guide" },
  { href: "/guides/golden-walnuts-guide", label: "Golden Walnuts Guide" },
  { href: "/guides/how-to-get-qi-gems-fast", label: "How to Get Qi Gems Fast" },
  { href: "/guides/best-late-game-money-makers", label: "Best Late-Game Money Makers" },
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

export default function PerfectionChecklist16Page() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Perfection Checklist 1.6", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />

        <header className={`${CARD_CLASS} mt-6`}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Stardew 1.6 Perfection Checklist</h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            This checklist keeps late-game progress organized so you can close perfection cleanly without
            hunting random missing tasks.
          </p>
        </header>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">What to Track</h2>
          <div className="mt-4 space-y-4">
            {CHECKLIST_GROUPS.map((group) => (
              <div key={group.name} className="rounded-2xl border border-[#7c4d2e]/60 bg-[#f8ecc8] p-4">
                <h3 className="text-lg font-semibold">{group.name}</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-[#5f4228]/90">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Late-Game Roadmap</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Phase</th>
                  <th className="px-4 py-3 font-semibold">Main Focus</th>
                  <th className="px-4 py-3 font-semibold">Why It Works</th>
                </tr>
              </thead>
              <tbody>
                {ROADMAP_ROWS.map((row) => (
                  <tr key={row.phase} className="border-t border-[#7c4d2e]/30 align-top">
                    <td className="px-4 py-3 font-semibold">{row.phase}</td>
                    <td className="px-4 py-3">{row.focus}</td>
                    <td className="px-4 py-3">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Common Final-Week Blockers</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>One missing recipe from Queen of Sauce or a merchant source.</li>
            <li>Monster slayer categories left half-done while focusing only on money.</li>
            <li>Friendship hearts lagging behind because gifting was not routinized.</li>
            <li>Golden Walnut gaps from puzzle or exploration spots not revisited.</li>
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

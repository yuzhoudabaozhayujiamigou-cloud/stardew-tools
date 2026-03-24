import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/guides/how-to-get-qi-gems-fast";

const PAGE_TITLE = "How to Get Qi Gems Fast (Stardew 1.6) | StardewProfit";
const PAGE_DESCRIPTION =
  "Build a reliable Qi Gem routine in Stardew Valley 1.6 with weekly quest selection, prep rules, and late-game scheduling tips.";

const CARD_CLASS =
  "mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60";

const PICKING_ROWS = [
  {
    questType: "Skill-aligned challenge",
    takeWhen: "You already do this activity weekly",
    avoidWhen: "You would need major route changes or extra setup",
  },
  {
    questType: "Collection or delivery challenge",
    takeWhen: "You have inventory, storage, or production buffers ready",
    avoidWhen: "You are resource-starved and still scaling machines",
  },
  {
    questType: "High-pressure combat/mining challenge",
    takeWhen: "Your gear and food sustain are stable",
    avoidWhen: "You are still missing survivability and consistency",
  },
] as const;

const ROUTINE_STEPS = [
  "Check the Walnut Room board at the start of each week and commit early.",
  "Pick quests that overlap your farm's existing loop instead of forcing a new loop.",
  "Prepare consumables and inventory one day before your heavy execution window.",
  "Finish early if possible so unexpected events do not kill completion.",
  "Reinvest Qi Gem rewards into unlocks that improve future consistency.",
] as const;

const FAQS = [
  {
    question: "What is the fastest way to farm Qi Gems consistently?",
    answer:
      "Consistency comes from quest selection, not raw difficulty. Choose Walnut Room quests that match your strongest weekly gameplay loop and complete them on schedule.",
  },
  {
    question: "Should I always pick the hardest Qi quest?",
    answer:
      "Not always. Hard quests can give strong rewards, but failed runs waste full weeks. Reliable completion usually beats risky spikes when you are building long-term Qi progress.",
  },
  {
    question: "When should I start optimizing Qi Gems for perfection?",
    answer:
      "Start once Ginger Island access and core farm income are stable. At that point, weekly Qi planning becomes much easier to sustain without hurting your gold pipeline.",
  },
] as const;

const RELATED_LINKS = [
  { href: "/guides/perfection-checklist-1-6", label: "Perfection Checklist 1.6" },
  { href: "/guides/golden-walnuts-guide", label: "Golden Walnuts Guide" },
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

export default function HowToGetQiGemsFastPage() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "How to Get Qi Gems Fast", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />

        <header className={`${CARD_CLASS} mt-6`}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">How to Get Qi Gems Fast</h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            Qi Gems scale fastest when your weekly quest choices match your real play pattern. This guide
            focuses on repeatability over high-variance runs.
          </p>
        </header>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Quest Selection Framework</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Quest Type</th>
                  <th className="px-4 py-3 font-semibold">Take It When</th>
                  <th className="px-4 py-3 font-semibold">Skip It When</th>
                </tr>
              </thead>
              <tbody>
                {PICKING_ROWS.map((row) => (
                  <tr key={row.questType} className="border-t border-[#7c4d2e]/30 align-top">
                    <td className="px-4 py-3 font-semibold">{row.questType}</td>
                    <td className="px-4 py-3">{row.takeWhen}</td>
                    <td className="px-4 py-3">{row.avoidWhen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Weekly Qi Gem Routine</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            {ROUTINE_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Common Mistakes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Taking quests based only on reward size without checking completion probability.</li>
            <li>Starting preparation too late and losing multiple days to setup overhead.</li>
            <li>Ignoring farm cashflow while over-focusing on short-term Qi Gem spikes.</li>
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

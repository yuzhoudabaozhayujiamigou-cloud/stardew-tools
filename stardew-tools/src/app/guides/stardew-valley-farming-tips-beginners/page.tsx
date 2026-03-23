import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/guides/stardew-valley-farming-tips-beginners";

const PAGE_TITLE = "Stardew Valley Farming Tips for Beginners | StardewProfit";
const PAGE_DESCRIPTION =
  "Beginner-friendly Stardew Valley farming tips to avoid common money mistakes, choose better crops, and build a reliable first-year profit foundation.";

const CARD_CLASS =
  "mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60";

const TIPS = [
  "Plant quickly on Day 1 and keep enough cash for seed restocks.",
  "Use mixed crop timing so you always have something harvesting every few days.",
  "Upgrade watering can and sprinklers early to free daily energy and time.",
  "Do not overbuy slow crops late in a season unless harvest timing is guaranteed.",
  "Turn high-value fruit and vegetables into artisan goods once machine capacity is ready.",
  "Keep a small reserve for festival seed opportunities like Spring Strawberries.",
  "Use fertilizer selectively on your most valuable plots instead of everything.",
  "Track machine bottlenecks weekly and adjust crop volume to match throughput.",
  "Use greenhouse and quality sprinklers as your core automation milestones.",
  "Reinvest profit into tools, machines, and layout efficiency before luxury upgrades.",
] as const;

const FAQS = [
  {
    question: "What is the most important beginner farming tip in Stardew Valley?",
    answer:
      "Always plan around crop timing. If crops do not mature before season end, that money is lost. Timing discipline beats almost every other beginner optimization.",
  },
  {
    question: "Should beginners process crops or sell raw crops?",
    answer:
      "Sell raw crops early if you need fast seed capital, then shift to processing as soon as machine count supports steady throughput.",
  },
  {
    question: "When should I prioritize sprinklers?",
    answer:
      "Prioritize sprinklers as soon as materials allow. Automation saves daily labor and unlocks larger crop fields without overwhelming your routine.",
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

export default function StardewFarmingTipsBeginnersPage() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Farming Tips for Beginners", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />

        <header className={`${CARD_CLASS} mt-6`}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Stardew Valley Farming Tips for Beginners
          </h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            New farms lose the most gold from timing mistakes, not bad crop choices. This page gives
            beginner-safe farming rules that scale from Spring Year 1 into late-game automation.
          </p>
        </header>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">10 Beginner Tips That Protect Profit</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            {TIPS.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ol>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Starter Season Workflow</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Early season: build seed capital and secure at least one reliable multi-harvest crop.</li>
            <li>Mid-season: upgrade tools and begin machine crafting pipeline.</li>
            <li>Late season: avoid risky long-grow seeds and prepare for next-season transitions.</li>
            <li>Off-season: use greenhouse, artisan goods, and infrastructure upgrades.</li>
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
              <Link href="/tools/sprinkler-coverage-calculator" className={LINK_CLASS}>
                Sprinkler Coverage Calculator
              </Link>
            </li>
            <li>
              <Link href="/guides/spring-crops" className={LINK_CLASS}>
                Spring Crops Guide
              </Link>
            </li>
            <li>
              <Link href="/guides/summer-crops" className={LINK_CLASS}>
                Summer Crops Guide
              </Link>
            </li>
            <li>
              <Link href="/guides/fall-crops" className={LINK_CLASS}>
                Fall Crops Guide
              </Link>
            </li>
          </ul>
        </section>

        <SiteFooter className="mt-10" />
      </article>
    </main>
  );
}

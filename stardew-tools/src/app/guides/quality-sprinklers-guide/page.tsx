import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/guides/quality-sprinklers-guide";

const PAGE_TITLE = "Quality Sprinklers Guide Stardew Valley 1.6 | Unlock, Coverage, Layout Tips";
const PAGE_DESCRIPTION =
  "Complete quality sprinkler guide for Stardew Valley 1.6: unlock at Farming 6, water 8 tiles, layout planning, upgrade timing, and when to switch to iridium sprinklers.";

const CARD_CLASS =
  "mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60";

const LAYOUT_ROWS = [
  {
    sprinklers: 1,
    coverage: 8,
    useCase: "Small trial patch",
  },
  {
    sprinklers: 6,
    coverage: 48,
    useCase: "Starter automation zone",
  },
  {
    sprinklers: 12,
    coverage: 96,
    useCase: "Mid-game crop block",
  },
  {
    sprinklers: 15,
    coverage: 120,
    useCase: "Large seasonal production plot",
  },
] as const;

const FAQS = [
  {
    question: "How many tiles does a quality sprinkler water?",
    answer:
      "A quality sprinkler waters 8 surrounding tiles in a 3x3 square, excluding the center tile where the sprinkler sits.",
  },
  {
    question: "When do you unlock quality sprinklers?",
    answer:
      "Quality sprinklers unlock at Farming Level 6. The crafting recipe uses 1 Iron Bar, 1 Gold Bar, and 1 Refined Quartz.",
  },
  {
    question: "Should I skip quality sprinklers and wait for iridium?",
    answer:
      "Usually no. Quality sprinklers are a major labor upgrade and often pay back quickly. Most farms benefit from using them before iridium sprinklers are available at scale.",
  },
  {
    question: "What is the best layout for quality sprinklers?",
    answer:
      "The most efficient layout is a simple grid with 1 tile spacing between sprinklers. This maximizes coverage while keeping harvest paths clear. Avoid complex patterns that create blocked tiles.",
  },
  {
    question: "How much do quality sprinklers cost to craft?",
    answer:
      "Each quality sprinkler requires 1 Iron Bar (5 Iron Ore + Coal), 1 Gold Bar (5 Gold Ore + Coal), and 1 Refined Quartz (1 Quartz + Coal in a furnace). Total material cost is roughly 500-800g depending on ore prices.",
  },
  {
    question: "When should I upgrade from quality to iridium sprinklers?",
    answer:
      "Upgrade to iridium sprinklers when you have stable iridium ore income (Skull Cavern or Statue of Perfection). Don't wait too long—quality sprinklers pay for themselves quickly and free up time for other farm tasks.",
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
    images: [
      {
        url: `${SITE_URL}/api/og?title=Quality+Sprinklers+Guide&subtitle=Unlock+Coverage+Layout&type=guide`,
        width: 1200,
        height: 630,
        alt: "Quality Sprinklers Guide - Stardew Valley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/api/og?title=Quality+Sprinklers+Guide&subtitle=Unlock+Coverage+Layout&type=guide`],
  },
  keywords: [
    "quality sprinklers stardew valley",
    "quality sprinkler coverage",
    "quality sprinkler layout",
    "quality sprinkler unlock",
    "quality sprinkler recipe",
    "quality vs iridium sprinklers",
    "stardew valley sprinkler guide",
    "farming level 6 sprinklers",
  ],
};

export default function QualitySprinklersGuidePage() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Quality Sprinklers Guide", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />

        <header className={`${CARD_CLASS} mt-6`}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#6f8b3c]/60 bg-[#e7f1c8] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#5b6f2f] shadow-sm">
            <span aria-hidden="true">✓</span>
            Updated for Stardew Valley 1.6.9
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Quality Sprinklers Guide: Unlock, Coverage, and Layout Tips
          </h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            Quality sprinklers are the first major automation breakpoint in Stardew Valley. Once you
            unlock Farming 6, field labor drops sharply and crop scale becomes much easier.
          </p>
        </header>

        {/* Quick Answer Section */}
        <section className={`${CARD_CLASS} border-[#6f8b3c]/70 bg-gradient-to-br from-[#e7f1c8] to-[#d4e5b5]`}>
          <div className="flex items-start gap-3">
            <span className="text-3xl" aria-hidden="true">⚡</span>
            <div>
              <h2 className="text-2xl font-bold text-[#4a321e]">Quick Answer</h2>
              <p className="mt-3 text-base leading-7 text-[#5f4228]/90">
                <strong>Unlock at Farming Level 6</strong> → Craft with 1 Iron Bar + 1 Gold Bar + 1 Refined Quartz → 
                Waters <strong>8 tiles</strong> in a 3×3 grid → Use simple grid layout with 1-tile spacing → 
                Upgrade to iridium when you have stable ore income.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-[#7c4d2e]/50 bg-white/70 p-4 shadow-sm">
              <h3 className="font-semibold text-[#4a321e]">🎯 Best Use Case</h3>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                Mid-game automation (Year 1 Summer-Fall). Frees up time for mining, fishing, and social activities.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#7c4d2e]/50 bg-white/70 p-4 shadow-sm">
              <h3 className="font-semibold text-[#4a321e]">⏱️ Upgrade Timing</h3>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                Don&apos;t wait for iridium. Quality sprinklers pay back in 1-2 seasons and make farming much more enjoyable.
              </p>
            </div>
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Core Facts</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Unlock requirement: Farming Level 6.</li>
            <li>Recipe: 1 Iron Bar, 1 Gold Bar, 1 Refined Quartz.</li>
            <li>Coverage: 8 tiles around the sprinkler (center tile is occupied).</li>
            <li>Waters tiles automatically every morning.</li>
            <li>Works in all seasons and weather conditions.</li>
            <li>Can be upgraded with Pressure Nozzle (coverage +1 tile in each direction).</li>
          </ul>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Coverage Planning Table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Sprinklers</th>
                  <th className="px-4 py-3 font-semibold">Tiles Watered</th>
                  <th className="px-4 py-3 font-semibold">Typical Use Case</th>
                </tr>
              </thead>
              <tbody>
                {LAYOUT_ROWS.map((row) => (
                  <tr key={row.sprinklers} className="border-t border-[#7c4d2e]/30 align-top">
                    <td className="px-4 py-3 font-semibold">{row.sprinklers}</td>
                    <td className="px-4 py-3">{row.coverage}</td>
                    <td className="px-4 py-3">{row.useCase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-6 text-[#5f4228]/85">
            💡 <strong>Pro tip:</strong> Start with 6 sprinklers to automate a starter zone, then expand to 12-15 as materials become available.
          </p>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Upgrade Timing Tips</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Build quality sprinklers as soon as material flow is stable.</li>
            <li>Pair sprinkler upgrades with fertilizer and high-value seed expansion.</li>
            <li>Keep simple grid spacing to avoid blocked tiles and harvest friction.</li>
            <li>Transition to iridium gradually instead of delaying all automation.</li>
            <li>Use quality sprinklers in greenhouse until iridium is abundant.</li>
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
              {" "}— Calculate exact coverage for your farm layout
            </li>
            <li>
              <Link href="/blog/best-crops-every-season" className={LINK_CLASS}>
                Best Crops Every Season
              </Link>
              {" "}— Maximize profit with quality sprinklers
            </li>
            <li>
              <Link href="/guides/greenhouse-profit-guide" className={LINK_CLASS}>
                Greenhouse Profit Guide
              </Link>
              {" "}— Optimize greenhouse with quality sprinklers
            </li>
            <li>
              <Link href="/tools/artisan-profit" className={LINK_CLASS}>
                Artisan Profit Tool
              </Link>
              {" "}— Plan processing for sprinkler-automated crops
            </li>
            <li>
              <Link href="/guides/fertilizer-profit-guide" className={LINK_CLASS}>
                Fertilizer Profit Guide
              </Link>
              {" "}— Pair fertilizer with sprinkler automation
            </li>
            <li>
              <Link href="/calculator" className={LINK_CLASS}>
                Crop Profit Calculator
              </Link>
              {" "}— Find best crops for your sprinkler setup
            </li>
            <li>
              <Link href="/blog/money-making-guide" className={LINK_CLASS}>
                Money Making Guide
              </Link>
              {" "}— Scale up with sprinkler automation
            </li>
            <li>
              <Link href="/tools/seed-maker" className={LINK_CLASS}>
                Seed Maker Tool
              </Link>
              {" "}— Reduce seed costs for large sprinkler fields
            </li>
          </ul>
        </section>

        <SiteFooter className="mt-10" />
      </article>
    </main>
  );
}

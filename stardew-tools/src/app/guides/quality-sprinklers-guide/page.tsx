import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/guides/quality-sprinklers-guide";

const PAGE_TITLE = "Quality Sprinklers Guide in Stardew Valley | StardewProfit";
const PAGE_DESCRIPTION =
  "A complete quality sprinkler guide for Stardew Valley covering recipe unlocks, tile coverage, field layout planning, and upgrade timing.";

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
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Quality Sprinklers Guide</h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            Quality sprinklers are the first major automation breakpoint in Stardew Valley. Once you
            unlock Farming 6, field labor drops sharply and crop scale becomes much easier.
          </p>
        </header>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Core Facts</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Unlock requirement: Farming Level 6.</li>
            <li>Recipe: 1 Iron Bar, 1 Gold Bar, 1 Refined Quartz.</li>
            <li>Coverage: 8 tiles around the sprinkler (center tile is occupied).</li>
            <li>Waters tiles automatically every morning.</li>
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
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Upgrade Timing Tips</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Build quality sprinklers as soon as material flow is stable.</li>
            <li>Pair sprinkler upgrades with fertilizer and high-value seed expansion.</li>
            <li>Keep simple grid spacing to avoid blocked tiles and harvest friction.</li>
            <li>Transition to iridium gradually instead of delaying all automation.</li>
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
              <Link href="/guides/fertilizer-profit-guide" className={LINK_CLASS}>
                Fertilizer Profit Guide
              </Link>
            </li>
            <li>
              <Link href="/guides/greenhouse-profit-guide" className={LINK_CLASS}>
                Greenhouse Profit Guide
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

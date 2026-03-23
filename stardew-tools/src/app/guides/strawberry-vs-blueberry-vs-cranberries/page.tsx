import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/guides/strawberry-vs-blueberry-vs-cranberries";

const PAGE_TITLE = "Strawberry vs Blueberry vs Cranberries | StardewProfit";
const PAGE_DESCRIPTION =
  "Compare Strawberry, Blueberry, and Cranberries in Stardew Valley by season timing, harvest count, and practical profit planning.";

const CARD_CLASS =
  "mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60";

const COMPARISON = [
  {
    crop: "Strawberry",
    season: "Spring",
    seedPrice: "100g",
    baseSell: "120g each",
    fullSeasonPattern: "Plant Day 1: 5 harvests (Year 2 or seeded stock)",
    notes: "Year 1 seeds are sold at Egg Festival on Spring 13",
  },
  {
    crop: "Blueberry",
    season: "Summer",
    seedPrice: "80g",
    baseSell: "50g each",
    fullSeasonPattern: "Plant Day 1: 4 harvests, usually 3 berries each",
    notes: "Very strong low-effort summer volume crop",
  },
  {
    crop: "Cranberries",
    season: "Fall",
    seedPrice: "240g",
    baseSell: "75g each",
    fullSeasonPattern: "Plant Day 1: 5 harvests, usually 2 berries each",
    notes: "Large total output and strong processing potential",
  },
] as const;

const FAQS = [
  {
    question: "Which of the three is best for Year 1?",
    answer:
      "Blueberries are usually the easiest Year 1 winner because seeds are available from Summer Day 1 and produce strong multi-harvest output. Year 1 Strawberries are limited because seeds appear on Spring 13.",
  },
  {
    question: "Are Cranberries better than Blueberries?",
    answer:
      "Both are strong. Cranberries have high Fall volume and pair well with artisan processing, while Blueberries are cheaper to start and excellent for Summer cash flow.",
  },
  {
    question: "When do Strawberries become very strong?",
    answer:
      "Strawberries become much stronger when you can plant from Spring Day 1, usually in Year 2 after building a seed stock through saved seeds or Seed Maker expansion.",
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

export default function StrawberryBlueberryCranberriesPage() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Strawberry vs Blueberry vs Cranberries", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />

        <header className={`${CARD_CLASS} mt-6`}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Strawberry vs Blueberry vs Cranberries
          </h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            These three multi-harvest crops drive most seasonal farm income. The best pick depends on
            timing and capital, not only raw sell price. This comparison focuses on what works in real
            farm progression.
          </p>
        </header>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Season and Harvest Comparison</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Crop</th>
                  <th className="px-4 py-3 font-semibold">Season</th>
                  <th className="px-4 py-3 font-semibold">Seed Price</th>
                  <th className="px-4 py-3 font-semibold">Base Sell</th>
                  <th className="px-4 py-3 font-semibold">Full-Season Pattern</th>
                  <th className="px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.crop} className="border-t border-[#7c4d2e]/30 align-top">
                    <td className="px-4 py-3 font-semibold">{row.crop}</td>
                    <td className="px-4 py-3">{row.season}</td>
                    <td className="px-4 py-3">{row.seedPrice}</td>
                    <td className="px-4 py-3">{row.baseSell}</td>
                    <td className="px-4 py-3">{row.fullSeasonPattern}</td>
                    <td className="px-4 py-3">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Practical Decision Framework</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Need Summer cash quickly: prioritize Blueberries on Summer Day 1.</li>
            <li>Preparing for long Fall processing chains: Cranberries are a strong volume source.</li>
            <li>Planning Year 2 optimization: build Strawberry seed stock for Spring Day 1 planting.</li>
            <li>Machine-limited farm: compare crop volume against your keg and jar capacity each week.</li>
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
              <Link href="/tools/keg-vs-preserves-jar" className={LINK_CLASS}>
                Keg vs Preserves Jar Tool
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

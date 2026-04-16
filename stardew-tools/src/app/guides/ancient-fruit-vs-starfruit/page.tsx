import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/guides/ancient-fruit-vs-starfruit";

const PAGE_TITLE = "Ancient Fruit vs Starfruit: Complete Profit Comparison | StardewProfit";
const PAGE_DESCRIPTION =
  "Compare Ancient Fruit and Starfruit in Stardew Valley with clear tradeoffs for setup cost, labor, wine value, and long-term greenhouse profit.";

const CARD_CLASS =
  "mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60";

const COMPARISON_ROWS = [
  {
    point: "Seed Access",
    ancientFruit: "Ancient Seed artifact chain, then Seed Maker expansion",
    starfruit: "Buy seeds for 400g each from Sandy at the Oasis",
  },
  {
    point: "Growth Pattern",
    ancientFruit: "28 days to first harvest, then regrows every 7 days",
    starfruit: "13 days per harvest and must be replanted each cycle",
  },
  {
    point: "Base Crop Price",
    ancientFruit: "550g",
    starfruit: "750g",
  },
  {
    point: "Wine Price (Base Profession)",
    ancientFruit: "1,650g",
    starfruit: "2,250g",
  },
  {
    point: "Labor Intensity",
    ancientFruit: "Low after setup",
    starfruit: "High due to repeated seed buying and replanting",
  },
  {
    point: "Best Use Case",
    ancientFruit: "Stable greenhouse automation",
    starfruit: "Maximum value per crop when labor and seed cost are manageable",
  },
] as const;

const FAQS = [
  {
    question: "Which crop makes more money in kegs: Ancient Fruit or Starfruit?",
    answer:
      "Starfruit wine has the highest value per bottle, while Ancient Fruit wins on convenience and automation because it regrows weekly and does not need replanting.",
  },
  {
    question: "How long does it take to grow Ancient Fruit vs Starfruit?",
    answer:
      "Ancient Fruit takes 28 days for the first harvest, then regrows every 7 days. Starfruit takes 13 days per harvest and must be replanted each time. Over a full season, Ancient Fruit provides more harvests with less replanting work.",
  },
  {
    question: "Is Ancient Fruit better for the greenhouse?",
    answer:
      "For most players, yes. Ancient Fruit lines up well with a weekly machine schedule and saves large amounts of labor over time.",
  },
  {
    question: "When should I switch from Starfruit to Ancient Fruit?",
    answer:
      "Switch when your main bottleneck becomes labor and seed buying, not raw crop value. Many farms start with Starfruit for fast cash and transition to Ancient Fruit for a stable long-term loop.",
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

export default function AncientFruitVsStarfruitGuidePage() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Ancient Fruit vs Starfruit", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />

        <header className={`${CARD_CLASS} mt-6`}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Ancient Fruit vs Starfruit</h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            This is one of the biggest late-game decisions in Stardew Valley. Starfruit has the higher
            single-batch value, but Ancient Fruit often creates a smoother and more scalable money system.
          </p>
        </header>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Side-by-Side Comparison</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Decision Point</th>
                  <th className="px-4 py-3 font-semibold">Ancient Fruit</th>
                  <th className="px-4 py-3 font-semibold">Starfruit</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.point} className="border-t border-[#7c4d2e]/30 align-top">
                    <td className="px-4 py-3 font-semibold">{row.point}</td>
                    <td className="px-4 py-3">{row.ancientFruit}</td>
                    <td className="px-4 py-3">{row.starfruit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Decision Rules</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Choose Starfruit when you want peak value per harvested crop and can handle replanting.</li>
            <li>Choose Ancient Fruit when you want a low-maintenance weekly loop that scales cleanly.</li>
            <li>If you are still building capital, Starfruit can accelerate cash flow early.</li>
            <li>If you are optimizing operations, Ancient Fruit usually lowers effort for similar long-term returns.</li>
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
              <Link href="/tools/keg-vs-preserves-jar" className={LINK_CLASS}>
                Keg vs Preserves Jar Tool
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
              <Link href="/guides/best-keg-items" className={LINK_CLASS}>
                Best Keg Items Guide
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

import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/guides/winter-money-guide";

const PAGE_TITLE = "Winter Money Guide in Stardew Valley | StardewProfit";
const PAGE_DESCRIPTION =
  "A practical Winter money guide for Stardew Valley: what to prioritize when fields are empty, including greenhouse crops, artisan processing, winter seeds, and daily routines.";

const CARD_CLASS =
  "mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60";

const WINTER_ROUTES = [
  {
    route: "Greenhouse Ancient Fruit",
    startup: "Ancient Seeds + sprinklers",
    why: "Steady weekly harvests with no replanting",
    notes: "Best long-term route once setup is ready",
  },
  {
    route: "Starfruit Wine Pipeline",
    startup: "Desert seeds + keg capacity",
    why: "Highest value per crop processed",
    notes: "Great when you can handle weekly replanting",
  },
  {
    route: "Winter Seeds Foraging Loop",
    startup: "Winter foraging + Seed Maker",
    why: "Low-cost outdoor income in Winter",
    notes: "Useful if greenhouse is still small",
  },
  {
    route: "Animals + Artisan Goods",
    startup: "Barn/Coop + machines",
    why: "Daily cash flow independent of seasons",
    notes: "Cheese and mayo smooth out weekly crop cycles",
  },
] as const;

const FAQS = [
  {
    question: "What is the best way to make money in Winter in Stardew Valley?",
    answer:
      "The most reliable Winter strategy is greenhouse production plus artisan processing. If your greenhouse is not mature yet, combine Winter Seeds, fishing, and animal products to keep income stable.",
  },
  {
    question: "Can regular crops grow outside during Winter?",
    answer:
      "No. Standard seasonal crops do not grow outdoors in Winter. Winter Seeds are the main outdoor farming option, while the greenhouse supports normal crops year-round.",
  },
  {
    question: "Should I focus on kegs or preserve jars in Winter?",
    answer:
      "Use whichever machine is your bottleneck. Kegs are stronger for high-value fruit like Starfruit and Ancient Fruit, while preserve jars often provide faster turnover when machine count is limited.",
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

export default function WinterMoneyGuidePage() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Winter Money Guide", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />

        <header className={`${CARD_CLASS} mt-6`}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Winter Money Guide in Stardew Valley
          </h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            Winter is where many farms stall. The profitable approach is to run a stable weekly loop:
            greenhouse harvests, machine processing, and daily filler income from animals, fishing, or
            Winter Seeds. This guide gives a clean order of operations so your Winter becomes a setup
            season instead of a dead season.
          </p>
        </header>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Best Winter Income Routes</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Route</th>
                  <th className="px-4 py-3 font-semibold">Startup Need</th>
                  <th className="px-4 py-3 font-semibold">Why It Works</th>
                  <th className="px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {WINTER_ROUTES.map((item) => (
                  <tr key={item.route} className="border-t border-[#7c4d2e]/30 align-top">
                    <td className="px-4 py-3 font-semibold">{item.route}</td>
                    <td className="px-4 py-3">{item.startup}</td>
                    <td className="px-4 py-3">{item.why}</td>
                    <td className="px-4 py-3">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">A Simple Daily Winter Routine</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Harvest greenhouse crops first and reload kegs or jars immediately.</li>
            <li>Collect animal products and process milk/eggs so daily value is not wasted.</li>
            <li>Use outdoor time for Winter foraging routes and Winter Seed crafting.</li>
            <li>Spend extra hours mining for machine materials or fishing for quick cash.</li>
            <li>Reinvest weekly profit into more kegs, jars, and sprinkler quality upgrades.</li>
          </ol>
          <p className="mt-4 leading-7 text-[#5f4228]/90">
            If your machine queue is always full, your Winter is productive. If machines sit idle,
            shift crop choices to match your processing capacity.
          </p>
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
              <Link href="/guides/greenhouse-profit-guide" className={LINK_CLASS}>
                Greenhouse Profit Guide
              </Link>
            </li>
            <li>
              <Link href="/guides/best-crops-every-season" className={LINK_CLASS}>
                Best Crops Every Season
              </Link>
            </li>
            <li>
              <Link href="/guides/quality-sprinklers-guide" className={LINK_CLASS}>
                Quality Sprinklers Guide
              </Link>
            </li>
          </ul>
        </section>

        <SiteFooter className="mt-10" />
      </article>
    </main>
  );
}

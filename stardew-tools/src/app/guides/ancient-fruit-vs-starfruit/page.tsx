import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/guides/ancient-fruit-vs-starfruit";

const PAGE_TITLE =
  "Ancient Fruit vs Starfruit Greenhouse Guide: Best Late-Game Crop Choice | StardewProfit";
const PAGE_DESCRIPTION =
  "Ancient Fruit vs Starfruit for greenhouse and late-game profit in Stardew Valley: quick verdict, wine value tradeoffs, labor cost, and when to choose each crop.";

const CARD_CLASS =
  "mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60";

const HERO_LINK_CLASS =
  "inline-flex items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]";

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
    question: "Which is better in Stardew Valley 1.6.9: Ancient Fruit or Starfruit?",
    answer:
      "In Stardew Valley 1.6.9, Ancient Fruit remains the better default greenhouse crop for most players because it regrows every 7 days and supports a low-maintenance weekly money loop. Starfruit is still better if you want the highest value per harvest and can manage repeated replanting. The 1.6.9 update did not change the core tradeoff between these two crops.",
  },
  {
    question: "What is better in the greenhouse: Ancient Fruit or Starfruit?",
    answer:
      "For most late-game greenhouse setups, Ancient Fruit is better because it regrows every 7 days, reduces labor, and scales smoothly into a weekly keg routine. Starfruit is stronger when you care most about top value per harvest and do not mind replanting.",
  },
  {
    question: "Which crop makes more money in kegs: Ancient Fruit or Starfruit?",
    answer:
      "Starfruit wine has the higher value per bottle, but Ancient Fruit often wins the full greenhouse system decision because it removes repeated seed buying and replanting. The better answer depends on whether your bottleneck is labor, seeds, or keg throughput.",
  },
  {
    question: "When should I switch from Starfruit to Ancient Fruit?",
    answer:
      "Switch when your farm is stable enough that labor and consistency matter more than single-harvest spikes. Many players use Starfruit to build capital, then convert the greenhouse to Ancient Fruit for the long-term weekly loop.",
  },
  {
    question: "How long does it take to grow Ancient Fruit vs Starfruit?",
    answer:
      "Ancient Fruit takes 28 days for the first harvest, then regrows every 7 days. Starfruit takes 13 days per harvest and must be replanted each time. That timing difference is why Ancient Fruit is usually the easier late-game greenhouse staple.",
  },
  {
    question: "Is Starfruit ever better than Ancient Fruit in late game?",
    answer:
      "Yes. Starfruit is better when you can support high seed cost, repeated replanting, and a strong keg or cask pipeline that rewards maximum value per fruit. If you are optimizing around peak wine price instead of low maintenance, Starfruit stays competitive.",
  },
] as const;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "ancient fruit vs starfruit",
    "ancient fruit vs starfruit greenhouse",
    "best greenhouse crop stardew valley",
    "stardew valley late game crops",
    "ancient fruit or starfruit",
    "starfruit vs ancient fruit wine",
    "stardew greenhouse profit",
  ],
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    type: "article",
    url: `${SITE_URL}${PAGE_PATH}`,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
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
          <div className="mb-4 rounded-2xl border-2 border-[#2f6a3a]/40 bg-[#e6f8d8] p-4">
            <div className="flex items-center gap-2">
              <span className="text-xl" aria-hidden>✨</span>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1f6b2e]">
                Updated for Stardew Valley 1.6.9
              </p>
            </div>
            <p className="mt-2 text-sm leading-6 text-[#245631]">
              This guide is current for Stardew Valley 1.6.9 (2026). The core tradeoff between Ancient Fruit and Starfruit remains unchanged: Ancient Fruit wins for low-maintenance greenhouse automation, Starfruit wins for maximum wine value per harvest.
            </p>
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f4b2a]/80">
            Greenhouse Guide
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Ancient Fruit vs Starfruit: Which Is Better for the Greenhouse?
          </h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            Quick answer: <strong>Ancient Fruit is the better default late-game greenhouse crop</strong> because it
            regrows every 7 days and supports a low-maintenance weekly money loop. <strong>Starfruit is better</strong>{" "}
            if you want the highest value per harvest and are willing to keep buying seeds and replanting.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] p-4">
              <p className="text-sm font-semibold">Best default greenhouse choice</p>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                Ancient Fruit wins for most farms because it cuts labor and keeps kegs fed on a predictable weekly
                schedule.
              </p>
            </div>
            <div className="rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] p-4">
              <p className="text-sm font-semibold">Best for max wine value</p>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                Starfruit wins on peak bottle value, especially if your seed cost and replanting workload are already
                solved.
              </p>
            </div>
            <div className="rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] p-4">
              <p className="text-sm font-semibold">Best transition strategy</p>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                Use Starfruit to generate cash, then switch the greenhouse to Ancient Fruit once consistency matters
                more than burst value.
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/calculator?preset=ancient-vs-starfruit-greenhouse#calculator" className={HERO_LINK_CLASS}>
              Compare in Calculator
            </Link>
            <Link href="/guides/greenhouse-profit-guide" className={HERO_LINK_CLASS}>
              Read Greenhouse Guide
            </Link>
            <Link href="#faq" className={HERO_LINK_CLASS}>
              Jump to FAQ
            </Link>
          </div>
        </header>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Late-Game Decision Rule</h2>
          <div className="mt-4 rounded-2xl border border-[#7c4d2e]/60 bg-[#f8ecc8] p-5">
            <p className="text-lg font-semibold text-[#4a321e]">
              Choose Ancient Fruit for the greenhouse unless you specifically want Starfruit&apos;s higher per-harvest
              value and can support the extra work.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
              <li>Pick Ancient Fruit if your goal is a steady weekly harvest and easier automation.</li>
              <li>Pick Starfruit if your goal is maximum wine value and you do not mind replanting every cycle.</li>
              <li>Use the calculator when machine count, professions, or time horizon might change the result.</li>
            </ul>
          </div>
        </section>

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
          <h2 className="text-2xl font-semibold">Why Ancient Fruit Usually Wins the Greenhouse</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>It removes recurring seed cost after setup, which improves long-term stability.</li>
            <li>Its 7-day regrow timing fits a simple weekly harvest and keg refill routine.</li>
            <li>It scales cleanly across a full greenhouse because there is no repeated replanting tax.</li>
            <li>It is usually the safer answer for players optimizing total system efficiency, not just crop price.</li>
          </ul>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">When Starfruit Is Still the Right Call</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Choose Starfruit when you want the highest value per fruit or per wine bottle.</li>
            <li>Choose Starfruit when seed buying and replanting are not meaningful constraints on your farm.</li>
            <li>Choose Starfruit when you are pushing short-term cash spikes instead of building a permanent loop.</li>
            <li>Keep Starfruit in the mix if your cellar and keg setup are built around premium wine value.</li>
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
          <p className="mt-4 leading-7 text-[#5f4228]/90">
            Use these internal links to turn the verdict into a real greenhouse plan, then validate the math with your
            own farm settings.
          </p>
          <ul className="mt-4 space-y-2 leading-7 text-[#5f4228]/90">
            <li>
              <Link href="/calculator?preset=ancient-vs-starfruit-greenhouse#calculator" className={LINK_CLASS}>
                Stardew Valley Profit Calculator: Ancient Fruit vs Starfruit greenhouse preset
              </Link>
            </li>
            <li>
              <Link href="/tools/artisan-profit" className={LINK_CLASS}>
                Artisan Profit Tool
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
              <Link href="/guides/best-keg-items" className={LINK_CLASS}>
                Best Keg Items Guide
              </Link>
            </li>
          </ul>
        </section>

        <SiteFooter className="mt-10" />
      </article>
    </main>
  );
}

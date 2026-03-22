import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/blog/keg-vs-preserves-jar";

const PAGE_TITLE =
  "Keg vs Preserves Jar Stardew Valley – Which Makes More Money?";
const PAGE_DESCRIPTION =
  "Keg vs Preserves Jar: Kegs win on high-value crops like Starfruit and Ancient Fruit. Jars win on cheap crops like Blueberries. Full comparison table + profit calculator.";

type ComparisonRow = {
  crop: string;
  rawPrice: string;
  kegOutput: string;
  kegPrice: string;
  jarOutput: string;
  jarPrice: string;
  winner: string;
};

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    crop: "Starfruit",
    rawPrice: "750g",
    kegOutput: "Starfruit Wine",
    kegPrice: "2250g",
    jarOutput: "Starfruit Jelly",
    jarPrice: "1550g",
    winner: "Keg",
  },
  {
    crop: "Ancient Fruit",
    rawPrice: "550g",
    kegOutput: "Ancient Fruit Wine",
    kegPrice: "1650g",
    jarOutput: "Ancient Fruit Jelly",
    jarPrice: "1150g",
    winner: "Keg",
  },
  {
    crop: "Blueberry",
    rawPrice: "50g",
    kegOutput: "Blueberry Wine",
    kegPrice: "150g",
    jarOutput: "Blueberry Jam",
    jarPrice: "150g",
    winner: "Jar (faster)",
  },
  {
    crop: "Cranberry",
    rawPrice: "75g",
    kegOutput: "Cranberry Wine",
    kegPrice: "225g",
    jarOutput: "Cranberry Jelly",
    jarPrice: "200g",
    winner: "Keg (slight)",
  },
  {
    crop: "Pumpkin",
    rawPrice: "320g",
    kegOutput: "Pumpkin Juice",
    kegPrice: "960g",
    jarOutput: "Pumpkin Jam",
    jarPrice: "690g",
    winner: "Keg",
  },
  {
    crop: "Tomato",
    rawPrice: "60g",
    kegOutput: "Tomato Juice",
    kegPrice: "180g",
    jarOutput: "Tomato Jelly",
    jarPrice: "170g",
    winner: "Jar (faster)",
  },
  {
    crop: "Hops",
    rawPrice: "25g",
    kegOutput: "Pale Ale",
    kegPrice: "300g",
    jarOutput: "—",
    jarPrice: "—",
    winner: "Keg only",
  },
];

const FAQS = [
  {
    question: "Is Keg or Preserves Jar better in Stardew Valley?",
    answer:
      "Depends on crop price. Rule: crops >160g raw → Keg, below → Jar.",
  },
  {
    question: "Does Artisan profession affect both Keg and Jar?",
    answer:
      "Yes, +40% to both. But Keg output is higher base so Artisan amplifies the difference.",
  },
  {
    question: "Can I use both Keg and Jar on the same farm?",
    answer:
      "Yes. Use Kegs for Starfruit/Ancient Fruit, Jars for Blueberries/Cranberries.",
  },
  {
    question: "Which is better for Blueberries: Keg or Jar?",
    answer:
      "Jar. Same output price but Jar is faster (3 days vs 6 days for wine).",
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

export default function KegVsPreservesJarPage() {
  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 20%, rgba(255,255,255,0.24) 0 4%, transparent 5%), radial-gradient(circle at 78% 15%, rgba(255,255,255,0.2) 0 3%, transparent 4%), repeating-linear-gradient(135deg, rgba(121,176,77,0.22) 0 16px, rgba(96,154,66,0.18) 16px 32px)",
            backgroundColor: "#9ecf77",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#b8e8ff]/55 via-transparent to-[#98ca73]/35" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Keg vs Preserves Jar" },
          ]}
        />

        <FaqJsonLd faqs={[...FAQS]} />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Quick Answer
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Keg vs Preserves Jar: Which Makes More Money?
            </h1>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>
                Kegs make more money on expensive crops: Starfruit, Ancient Fruit,
                and Hops.
              </li>
              <li>
                Jars make more money on cheap or abundant crops: Blueberries,
                Cranberries, and cheap vegetables.
              </li>
              <li>
                Rule of thumb: if raw crop sells for &gt;160g, use Keg. Below
                160g, use Jar.
              </li>
            </ul>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Keg vs Preserves Jar Comparison Table
            </h2>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-[#8a5b3a]/35 bg-[#fff8e8]/85">
              <table className="min-w-full divide-y divide-[#8a5b3a]/30 text-sm text-[#5f4228]/95">
                <thead className="bg-[#f5e6be] text-left text-xs uppercase tracking-wide text-[#6a4729]">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Crop</th>
                    <th className="px-4 py-3 font-semibold">Raw Price</th>
                    <th className="px-4 py-3 font-semibold">Keg Output</th>
                    <th className="px-4 py-3 font-semibold">Keg Price</th>
                    <th className="px-4 py-3 font-semibold">Jar Output</th>
                    <th className="px-4 py-3 font-semibold">Jar Price</th>
                    <th className="px-4 py-3 font-semibold">Winner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#8a5b3a]/20">
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.crop}>
                      <td className="whitespace-nowrap px-4 py-3 font-medium text-[#4a321e]">
                        {row.crop}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3">{row.rawPrice}</td>
                      <td className="whitespace-nowrap px-4 py-3">{row.kegOutput}</td>
                      <td className="whitespace-nowrap px-4 py-3">{row.kegPrice}</td>
                      <td className="whitespace-nowrap px-4 py-3">{row.jarOutput}</td>
                      <td className="whitespace-nowrap px-4 py-3">{row.jarPrice}</td>
                      <td className="whitespace-nowrap px-4 py-3 font-semibold text-[#1f6b2e]">
                        {row.winner}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-[#5f4228]/90">
              Note: Artisan profession adds +40% to all values.
            </p>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              When to Use Each
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[#8a5b3a]/30 bg-[#fff8e8]/85 p-4">
                <h3 className="text-lg font-semibold text-[#4a321e]">Use Keg when</h3>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90">
                  <li>You are processing slow-growing, high-value crops.</li>
                  <li>You have enough kegs to keep crop flow moving.</li>
                  <li>You picked Artisan and want maximum value per item.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#8a5b3a]/30 bg-[#fff8e8]/85 p-4">
                <h3 className="text-lg font-semibold text-[#4a321e]">Use Jar when</h3>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90">
                  <li>You are processing fast-regrow crops in bulk.</li>
                  <li>You have limited kegs and need immediate throughput.</li>
                  <li>You are in early game and want easier setup.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Processing Time Note
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>Keg: 3 days for wine/juice, or 1-2 days for beer/pale ale.</li>
              <li>Jar: 3 days for all jelly/pickle outputs.</li>
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Profit Tools and Related Guides
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>
                <Link
                  href="/tools/artisan-profit"
                  className="text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60"
                >
                  Artisan Profit Tool
                </Link>
              </li>
              <li>
                <Link
                  href="/best-crops/greenhouse"
                  className="text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60"
                >
                  Best Greenhouse Crops Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/calculator"
                  className="text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60"
                >
                  Stardew Profit Calculator
                </Link>
              </li>
            </ul>

            <TrackedBlogCtaLink
              href="/calculator"
              fromPath={PAGE_PATH}
              ctaName="keg_vs_preserves_jar_calculate_profit"
              className="mt-5 inline-flex min-h-[44px] items-center rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
            >
              Calculate exact profit for your crops →
            </TrackedBlogCtaLink>
          </section>

          <section
            id="faq"
            className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7"
          >
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">FAQ</h2>
            <div className="mt-4 space-y-3">
              {FAQS.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-[#8a5b3a]/25 bg-[#fff8e8]/90 p-5"
                >
                  <summary className="cursor-pointer list-none font-semibold text-[#4a321e]">
                    <span className="group-open:underline">{item.question}</span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </article>

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}

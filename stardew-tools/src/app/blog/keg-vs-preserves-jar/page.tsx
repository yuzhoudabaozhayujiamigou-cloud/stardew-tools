import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/blog/keg-vs-preserves-jar";

const PAGE_TITLE =
  "Keg vs Preserves Jar: Best Choice for Every Stardew Valley Crop";
const PAGE_DESCRIPTION =
  "Quick crop-by-crop answers for Cranberries, Ancient Fruit, Starfruit, Blueberries, and Strawberries. See when Kegs win, when Preserves Jars make money faster, and what to process first.";

type DecisionRow = {
  crop: string;
  choice: string;
  why: string;
};

const DECISION_ROWS: DecisionRow[] = [
  {
    crop: "Cranberry",
    choice: "Preserves Jar",
    why: "Cranberry wine only beats jelly by a small margin per fruit, so most farms make better use of machine time by jarring Cranberries and saving Kegs for premium fruit.",
  },
  {
    crop: "Ancient Fruit",
    choice: "Keg",
    why: "Ancient Fruit is one of the best long-term wine crops, with steady weekly harvests and strong value per keg slot.",
  },
  {
    crop: "Starfruit",
    choice: "Keg",
    why: "Starfruit wine gives the biggest value spike per item, making it a top-tier keg crop when you can handle the replanting loop.",
  },
  {
    crop: "Blueberry",
    choice: "Preserves Jar",
    why: "Blueberries flood your inventory with low-base fruit, so faster Jar turnover is usually stronger than tying up Kegs.",
  },
  {
    crop: "Strawberry",
    choice: "Preserves Jar",
    why: "Strawberries make decent wine, but most farms get more useful throughput by jarring them and reserving Kegs for Ancient Fruit, Starfruit, or Hops.",
  },
];

const FAQS = [
  {
    question: "Are Cranberries good in a Keg?",
    answer:
      "They are okay, but not a priority. Cranberry wine only has a small edge over jelly per fruit, so Preserves Jars are usually the better real-farm choice unless you have spare Kegs.",
  },
  {
    question: "Is Keg or Preserves Jar better in Stardew Valley?",
    answer:
      "Kegs are better for expensive crops like Starfruit and Ancient Fruit. Preserves Jars are better for cheaper or bulk crops like Cranberries, Blueberries, and most Strawberries.",
  },
  {
    question: "Does Artisan profession affect both Keg and Jar?",
    answer:
      "Yes, +40% to both. But Keg output is higher base so Artisan amplifies the difference.",
  },
  {
    question: "Can I use both Keg and Jar on the same farm?",
    answer:
      "Yes. Use Kegs for premium fruit like Starfruit and Ancient Fruit, then route bulk berries like Blueberries and Cranberries into Preserves Jars.",
  },
  {
    question: "Which is better for Blueberries or Strawberries: Keg or Jar?",
    answer:
      "Usually Jar. Those crops are strong because of volume, and Jars convert that volume faster while leaving your Kegs open for higher-value fruit.",
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
  twitter: {
    card: "summary_large_image",
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
              Crop Decision Guide
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Keg vs Preserves Jar: Best Choice for Every Stardew Valley Crop
            </h1>
            <p className="mt-3 max-w-4xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Are Cranberries good in a Keg? <strong>They are fine, but usually not your best Keg crop.</strong> Cranberry wine only beats jelly by a small amount per fruit, so most farms should put Cranberries in a Preserves Jar and save Kegs for Ancient Fruit, Starfruit, or Hops.
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Quick rule: expensive fruit usually belongs in a Keg, while cheaper or high-volume berries usually belong in a Preserves Jar because Jar throughput is easier to scale.
            </p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Are Cranberries good in a Keg?
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                <strong>Yes, but only as a secondary Keg crop.</strong> If you already have spare Kegs, Cranberry wine is still profitable. The problem is opportunity cost: Kegs do far more work for you when they are busy on Ancient Fruit, Starfruit, or Hops.
              </p>
              <p>
                For most real farms, <strong>Preserves Jars are the better Cranberry answer</strong> because the value gap is small while the Jar route converts bulk harvests into cash faster and more consistently.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Keg vs Preserves Jar quick answer
            </h2>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-[#8a5b3a]/35 bg-[#fff8e8]/85">
              <table className="min-w-full divide-y divide-[#8a5b3a]/30 text-sm text-[#5f4228]/95">
                <thead className="bg-[#f5e6be] text-left text-xs uppercase tracking-wide text-[#6a4729]">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Crop</th>
                    <th className="px-4 py-3 font-semibold">Better Choice</th>
                    <th className="px-4 py-3 font-semibold">Why</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#8a5b3a]/20">
                  {DECISION_ROWS.map((row) => (
                    <tr key={row.crop}>
                      <td className="whitespace-nowrap px-4 py-3 font-medium text-[#4a321e]">
                        {row.crop}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 font-semibold text-[#1f6b2e]">
                        {row.choice}
                      </td>
                      <td className="min-w-[280px] px-4 py-3 leading-6">
                        {row.why}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-[#5f4228]/90">
              Rule of thumb: crops with premium single-item value favor Kegs, while berries that come in bulk usually favor Preserves Jars.
            </p>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Best crops for Kegs
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li><strong>Starfruit:</strong> best high-value wine crop when you can keep replanting.</li>
              <li><strong>Ancient Fruit:</strong> the classic weekly wine engine for long-term farms.</li>
              <li><strong>Hops:</strong> Pale Ale is keg-only and scales hard if you can feed the machines.</li>
              <li><strong>Pumpkin and Melon:</strong> strong vegetable or fruit picks when you want bigger value per item.</li>
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Best crops for Preserves Jars
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li><strong>Cranberry:</strong> great bulk harvest, but usually not worth spending premium Keg space on.</li>
              <li><strong>Blueberry:</strong> a classic Jar crop because of heavy volume and lower base fruit price.</li>
              <li><strong>Strawberry:</strong> solid in Jars on farms that are still Keg-limited.</li>
              <li><strong>Tomato and other cheaper vegetables:</strong> good Jar candidates when you want dependable turnaround.</li>
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              When Kegs are better
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>You are processing <strong>expensive fruit</strong> and care about maximum value per item.</li>
              <li>You have enough Kegs to avoid backlog, especially for <strong>Ancient Fruit</strong> or <strong>Starfruit</strong>.</li>
              <li>You are building a late-game Artisan setup where Keg slots are your main money engine.</li>
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              When Jars make money faster
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>You are processing <strong>bulk berries</strong> like Cranberries or Blueberries and need faster turnover.</li>
              <li>You are still <strong>Keg-limited</strong>, so every Keg needs to go to the highest-value crop possible.</li>
              <li>You want simpler early or mid-game processing without waiting on long wine cycles.</li>
            </ul>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              In practice, this is why Cranberries are usually better described as a <strong>Jar crop with optional spare-Keg upside</strong>, not a core Keg crop.
            </p>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Profit Tools and Related Guides
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>
                <Link
                  href="/calculator"
                  className="text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60"
                >
                  Stardew Profit Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/greenhouse-layout-guide"
                  className="text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60"
                >
                  Greenhouse Layout Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/best-crops-year-1"
                  className="text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60"
                >
                  Best Crops Year 1
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

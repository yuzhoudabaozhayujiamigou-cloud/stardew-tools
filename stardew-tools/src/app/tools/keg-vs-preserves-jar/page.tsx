import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/tools/keg-vs-preserves-jar";

const PAGE_TITLE = "Keg vs Preserves Jar Tool | StardewProfit";
const PAGE_DESCRIPTION =
  "Compare keg and preserves jar outputs in Stardew Valley with clear formulas, per-day value estimates, and machine routing guidance.";

const CARD_CLASS =
  "mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60";

type CropType = "fruit" | "vegetable";

type CropInput = {
  name: string;
  type: CropType;
  basePrice: number;
};

const INPUTS: CropInput[] = [
  { name: "Starfruit", type: "fruit", basePrice: 750 },
  { name: "Ancient Fruit", type: "fruit", basePrice: 550 },
  { name: "Melon", type: "fruit", basePrice: 250 },
  { name: "Blueberry", type: "fruit", basePrice: 50 },
  { name: "Pumpkin", type: "vegetable", basePrice: 320 },
  { name: "Red Cabbage", type: "vegetable", basePrice: 260 },
];

const KEG_DAYS = 7;
const JAR_DAYS = 3;

const FAQS = [
  {
    question: "What are the core formulas for kegs and preserves jars?",
    answer:
      "Kegs produce wine at 3x fruit value and juice at 2.25x vegetable value. Preserves jars produce jelly or pickles at 2x base crop value plus 50g.",
  },
  {
    question: "Why do preserve jars often feel faster?",
    answer:
      "Preserves jars complete cycles sooner, so you can process more batches in the same time window. Kegs usually win on top-end value per processed item.",
  },
  {
    question: "Which machine should I build first?",
    answer:
      "Use your current bottleneck: if harvest overflow is high, jars stabilize throughput quickly. If you already have steady premium fruit supply, kegs usually scale better long-term.",
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

function formatGold(value: number): string {
  return `${value.toLocaleString()}g`;
}

function kegOutputPrice(input: CropInput): number {
  if (input.type === "fruit") {
    return input.basePrice * 3;
  }

  return Math.floor(input.basePrice * 2.25);
}

function jarOutputPrice(input: CropInput): number {
  return input.basePrice * 2 + 50;
}

export default function KegVsPreservesJarPage() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Tools", href: "/tools" },
            { name: "Keg vs Preserves Jar", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />

        <header className={`${CARD_CLASS} mt-6`}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Keg vs Preserves Jar</h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            This tool compares both machines using the same crop inputs so you can decide by value,
            throughput, and your current farm constraints.
          </p>
        </header>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Formula Snapshot</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Keg (fruit): output = base x 3, typical planning cycle ~7 days.</li>
            <li>Keg (vegetable): output = floor(base x 2.25), typical planning cycle ~7 days.</li>
            <li>Preserves Jar: output = base x 2 + 50, typical planning cycle ~3 days.</li>
          </ul>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Comparison Table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Crop</th>
                  <th className="px-4 py-3 font-semibold">Type</th>
                  <th className="px-4 py-3 font-semibold">Base</th>
                  <th className="px-4 py-3 font-semibold">Keg Output</th>
                  <th className="px-4 py-3 font-semibold">Keg Added/day</th>
                  <th className="px-4 py-3 font-semibold">Jar Output</th>
                  <th className="px-4 py-3 font-semibold">Jar Added/day</th>
                </tr>
              </thead>
              <tbody>
                {INPUTS.map((input) => {
                  const kegPrice = kegOutputPrice(input);
                  const jarPrice = jarOutputPrice(input);
                  const kegAddedPerDay = (kegPrice - input.basePrice) / KEG_DAYS;
                  const jarAddedPerDay = (jarPrice - input.basePrice) / JAR_DAYS;

                  return (
                    <tr key={input.name} className="border-t border-[#7c4d2e]/30 align-top">
                      <td className="px-4 py-3 font-semibold">{input.name}</td>
                      <td className="px-4 py-3">{input.type}</td>
                      <td className="px-4 py-3">{formatGold(input.basePrice)}</td>
                      <td className="px-4 py-3">{formatGold(kegPrice)}</td>
                      <td className="px-4 py-3">{`${kegAddedPerDay.toFixed(2)}g/day`}</td>
                      <td className="px-4 py-3">{formatGold(jarPrice)}</td>
                      <td className="px-4 py-3">{`${jarAddedPerDay.toFixed(2)}g/day`}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-6 text-[#5f4228]/75">
            Added/day values are planning estimates based on approximate cycle timing.
          </p>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Routing Tips</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Feed kegs with your highest-value fruit first.</li>
            <li>Use preserves jars to absorb overflow and stabilize daily machine throughput.</li>
            <li>When machines idle, prioritize speed and consistency over perfect per-item value.</li>
            <li>Re-check machine allocation whenever your field size changes.</li>
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
              <Link href="/guides/best-keg-items" className={LINK_CLASS}>
                Best Keg Items Guide
              </Link>
            </li>
            <li>
              <Link href="/guides/best-preserves-jar-items" className={LINK_CLASS}>
                Best Preserves Jar Items Guide
              </Link>
            </li>
            <li>
              <Link href="/guides/ancient-fruit-vs-starfruit" className={LINK_CLASS}>
                Ancient Fruit vs Starfruit Guide
              </Link>
            </li>
          </ul>
        </section>

        <SiteFooter className="mt-10" />
      </article>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";

const pagePath = "/guides/stardew-valley-1-6-new-crops";

export const metadata: Metadata = {
  title: "Stardew Valley 1.6 New Crops – Carrot, Summer Squash, Broccoli & Powdermelon",
  description:
    "Complete guide to all 4 new crops in Stardew Valley 1.6: Carrot, Summer Squash, Broccoli, and Powdermelon. Prices, seasons, growth times, and profit tips.",
  alternates: {
    canonical: pagePath,
  },
};

const cropRows = [
  {
    crop: "Carrot",
    season: "Spring",
    growthDays: "3",
    sellPrice: "35g",
    notes: "Fast early crop",
  },
  {
    crop: "Summer Squash",
    season: "Summer",
    growthDays: "5",
    sellPrice: "65g",
    notes: "Good for kegs",
  },
  {
    crop: "Broccoli",
    season: "Fall",
    growthDays: "6",
    sellPrice: "70g",
    notes: "High yield",
  },
  {
    crop: "Powdermelon",
    season: "Winter",
    growthDays: "5",
    sellPrice: "60g",
    notes: "Rare winter crop",
  },
] as const;

const faqs = [
  {
    question: "What new crops were added in Stardew Valley 1.6?",
    answer:
      "Stardew Valley 1.6 added four crops: Carrot, Summer Squash, Broccoli, and Powdermelon.",
  },
  {
    question: "Which Stardew Valley 1.6 crop grows the fastest?",
    answer:
      "Carrot is the fastest among the new crops, with a 3-day growth time in Spring.",
  },
  {
    question: "Can you grow any of the 1.6 crops in Winter?",
    answer:
      "Yes, Powdermelon is a winter crop and gives players a rare winter farming option.",
  },
  {
    question: "Where can I get seeds for the 1.6 crops?",
    answer:
      "You can find 1.6 crop seeds through Pierre, the Traveling Cart, the Bookseller, and Mystery Boxes.",
  },
] as const;

const cardClass =
  "rounded-2xl border border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_28px_rgba(56,41,23,0.2)]";

const secondaryLinkClass =
  "inline-flex items-center rounded-xl border border-[#7c4d2e]/70 bg-[#fff2c8] px-4 py-2 font-semibold text-[#4a321e] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#fce8b1]";

export default function StardewValley16NewCropsPage() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Stardew Valley 1.6 New Crops", href: pagePath },
          ]}
        />

        <FaqJsonLd faqs={faqs.map((faq) => ({ ...faq }))} />

        <header className={`${cardClass} mt-6`}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Stardew Valley 1.6 New Crops Guide
          </h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            Stardew Valley 1.6 added 4 new crops that give each season more options for money, processing, and farm
            planning. This quick guide covers Carrot, Summer Squash, Broccoli, and Powdermelon with growth time,
            prices, and practical profit notes.
          </p>
        </header>

        <section className={`${cardClass} mt-8`}>
          <h2 className="text-2xl font-semibold">1.6 New Crops Table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/70 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Crop</th>
                  <th className="px-4 py-3 font-semibold">Season</th>
                  <th className="px-4 py-3 font-semibold">Growth Days</th>
                  <th className="px-4 py-3 font-semibold">Sell Price</th>
                  <th className="px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {cropRows.map((row) => (
                  <tr key={row.crop} className="border-t border-[#7c4d2e]/30 align-top">
                    <td className="px-4 py-3 font-semibold">{row.crop}</td>
                    <td className="px-4 py-3">{row.season}</td>
                    <td className="px-4 py-3">{row.growthDays}</td>
                    <td className="px-4 py-3">{row.sellPrice}</td>
                    <td className="px-4 py-3">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={`${cardClass} mt-8`}>
          <h2 className="text-2xl font-semibold">Where To Get Seeds</h2>
          <p className="mt-3 leading-7 text-[#5f4228]/90">
            You can get seeds for the new 1.6 crops from multiple sources depending on your progression and luck.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Pierre&apos;s General Store</li>
            <li>Traveling Cart</li>
            <li>Bookseller inventory</li>
            <li>Mystery Boxes</li>
          </ul>
        </section>

        <section className={`${cardClass} mt-8`}>
          <h2 className="text-2xl font-semibold">Profit Tips</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Use Carrot for fast early-season cash and quick field turnover.</li>
            <li>Route Summer Squash into kegs when possible to increase value.</li>
            <li>Scale Broccoli fields in Fall for stronger bulk harvest income.</li>
            <li>Plant Powdermelon in Winter to reduce seasonal profit downtime.</li>
          </ul>
        </section>

        <section className={`${cardClass} mt-8`}>
          <h2 className="text-2xl font-semibold">Plan Your Next Season</h2>
          <p className="mt-3 leading-7 text-[#5f4228]/90">
            Compare these new crops against your current setup and profession choices before buying seeds.
          </p>
          <TrackedBlogCtaLink
            href="/calculator"
            fromPath={pagePath}
            ctaName="stardew_1_6_new_crops_open_calculator"
            className="mt-4 inline-flex items-center rounded-xl border border-[#7c4d2e]/80 bg-[#fff2c8] px-4 py-2 font-semibold text-[#4a321e] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#fce8b1]"
          >
            Open Profit Calculator
          </TrackedBlogCtaLink>
        </section>

        <section className={`${cardClass} mt-8`}>
          <h2 className="text-2xl font-semibold">Related Guides & Tools</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/best-crops/spring" className={secondaryLinkClass}>
              Best Spring Crops
            </Link>
            <Link href="/best-crops/winter" className={secondaryLinkClass}>
              Best Winter Crops
            </Link>
            <Link href="/tools/artisan-profit" className={secondaryLinkClass}>
              Artisan Profit Tool
            </Link>
          </div>
        </section>

        <section id="faq" className={`${cardClass} mt-8`}>
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((item) => (
              <details key={item.question} className="rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8] p-4">
                <summary className="cursor-pointer font-semibold text-[#4a321e]">{item.question}</summary>
                <p className="mt-2 leading-7 text-[#5f4228]/90">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </article>
    </main>
  );
}

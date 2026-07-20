import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogReadNextPosts } from "@/lib/read-next";
import { SITE_ORIGIN } from "@/lib/site";

const publishedTime = "2026-05-08T00:00:00Z";
const modifiedTime = "2026-05-08T00:00:00Z";
const fromPath = "/blog/stardew-valley-summer-profit-guide";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE = "Stardew Valley Summer Profit Guide: Best Crops, Profits & Strategy";
const DESCRIPTION =
  "Complete Summer profit guide for Stardew Valley. Best crops ranked by gold/day, Starfruit vs Blueberry vs Melon, keg strategy, and a practical Day 1 to late-Summer plan.";

const FAQ_ITEMS = [
  {
    question: "What is the best Summer crop in Stardew Valley?",
    answer:
      "For most players, Blueberry is the safest best pick because it regrows, gives multiple berries per harvest, and scales well before you have a huge processing setup. Starfruit is better profit per harvest but requires replanting and kegs to unlock its full value.",
  },
  {
    question: "Is Starfruit worth growing in Summer Year 1?",
    answer:
      "Starfruit is worth it if you can afford seeds (400g each from Oasis) and have enough kegs to process most harvests into wine. If you are still building kegs in Summer Year 1, Blueberry is usually a stronger practical choice because it works well even without processing.",
  },
  {
    question: "Should I keg or jar my Summer crops?",
    answer:
      "Kegs produce higher value per crop, especially for Starfruit and Melon wine. Preserves jars finish faster and can be better if you are short on kegs or processing time. For Blueberry, preserves jars are actually better (blueberry jam vs wine) because the wine value is relatively low per fruit.",
  },
  {
    question: "How many Summer crops should I plant?",
    answer:
      "A practical target is 50-100 Summer crops in Year 1 if you can afford seeds, scaling to 200+ in Year 2. Your limit is usually not space but processing capacity — match your crop count to your keg or jar availability so nothing rots in a chest.",
  },
  {
    question: "Can I make more money with Hops than Blueberry in Summer?",
    answer:
      "Hops processed into Pale Ale is higher gold/day than Blueberry in kegs, but Hops require daily harvesting and keg dedication for the entire season. Blueberry gives you more flexibility because it regrows with less daily attention.",
  },
  {
    question: "Should I save Summer crops for winter or sell immediately?",
    answer:
      "Sell immediately unless you have keg capacity and the crop converts well. Starfruit should always go through kegs if possible. Blueberry and Melon can be sold raw early-game and processed once you have spare kegs. Do not stockpile crops you cannot process — that gold buys seeds for the next season.",
  },
];

const TABLE_SUMMER_CROPS = `| Crop | Seed Cost | Growth | Regrow | Gold/Day (Raw) | Gold/Day (Keg) | Best Use |
|------|-----------|--------|--------|----------------|----------------|----------|
| Starfruit | 400g | 13d | No | 105g | 245g | Keg → Wine |
| Blueberry | 80g | 13d | Yes (4d) | 61g | 74g | Jar → Jam or Sell Raw |
| Melon | 80g | 12d | No | 62g | 144g | Keg → Wine |
| Hops | 60g | 11d | Yes (1d) | 65g | 182g | Keg → Pale Ale |
| Red Cabbage | 100g | 9d | No | 48g | 111g | Keg → Juice |
| Corn | 150g | 14d | Yes (4d) | 21g | 37g | Fill gaps, extends to Fall |
| Radish | 40g | 6d | No | 29g | 50g | Quick rotation |
| Tomato | 50g | 11d | Yes (4d) | 26g | 49g | Jar → Juice |
| Hot Pepper | 40g | 9d | Yes (3d) | 30g | 55g | Jar → Pickles |
| Wheat | 10g | 4d | No | 8g | 56g | Keg → Beer |`;

const TOC = [
  { id: "tldr", label: "TL;DR Summer crop picks" },
  { id: "top-crops-ranked", label: "Best Summer crops ranked" },
  { id: "blueberry-vs-star-fruit", label: "Blueberry vs Starfruit: the real choice" },
  { id: "processing-strategy", label: "Summer keg & jar strategy" },
  { id: "day-1-to-late-summer", label: "Day 1 to late-Summer plan" },
  { id: "faq", label: "FAQ" },
];

const CARD =
  "rounded-[28px] border-4 border-[#7c4d2e]/70 bg-[#fff3da]/92 p-5 shadow-[0_14px_34px_rgba(56,41,23,0.22)] ring-1 ring-yellow-900/15 sm:p-7";
const H2 = "text-xl font-semibold text-[#4a321e] sm:text-2xl";
const P = "mt-3 text-sm leading-6 text-[#5c4033]/90 sm:text-base";
const LI = "ml-5 list-disc text-sm leading-6 text-[#5c4033]/90 sm:text-base";
const LINK =
  "font-semibold underline decoration-[#b77841]/60 underline-offset-4 transition hover:text-[#3f2a22] hover:decoration-[#b77841]";
const CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#fce8b1] px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ffd88a]";
const SUB_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/65 bg-white/45 px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-white/60";

export const metadata: Metadata = {
  title: `${TITLE} | Stardew Profit`,
  description: DESCRIPTION,
  openGraph: {
    title: `${TITLE} | Stardew Profit`,
    description: DESCRIPTION,
    type: "article",
    url,
    images: [{ url: `${url}/opengraph-image` }],
    publishedTime,
    modifiedTime,
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Stardew Profit`,
    description: DESCRIPTION,
  },
  alternates: { canonical: url },
};

function SectionLink({ id, label }: { id: string; label: string }) {
  return (
    <li className={LI}>
      <a href={`#${id}`} className={LINK}>
        {label}
      </a>
    </li>
  );
}

function Table({ children }: { children: string }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[600px] border-collapse text-xs sm:text-sm">
        <thead>
          <tr className="border-b-2 border-[#7c4d2e]/70 bg-[#fce8b1]/40">
            {(children.match(/^\|(.+)\|/) || [])[1]
              ?.split("|")
              .map((h: string, i: number) => (
                <th key={i} className="px-2 py-2 text-left font-semibold text-[#4a321e]">
                  {h.trim()}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {children
            .split("\n")
            .slice(2)
            .map((row: string, i: number) => (
              <tr
                key={i}
                className={
                  i % 2 === 0
                    ? "border-b border-[#7c4d2e]/30 bg-white/40"
                    : "border-b border-[#7c4d2e]/30 bg-[#fff3da]/30"
                }
              >
                {row
                  .split("|")
                  .slice(1, -1)
                  .map((cell: string, j: number) => (
                    <td key={j} className="px-2 py-2 text-[#5c4033]/90">
                      {cell.trim()}
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SummerProfitGuidePage() {
  const readNextPosts = getBlogReadNextPosts("stardew-valley-summer-profit-guide", 3);

  return (
    <div className="mx-auto max-w-4xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
      <main>
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Summer Profit Guide" },
          ]}
        />

        <Link
          href="/calculator"
          className="group mb-6 inline-flex items-center gap-2 rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#fce8b1] px-4 py-2 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ffd88a]"
        >
          ← Open the Profit Calculator
        </Link>

        <PwaRegisterScript />

        <article>
          {/* Header */}
          <header>
            <h1 className="text-2xl font-bold text-[#4a321e] sm:text-3xl">
              {TITLE}
            </h1>
            <p className="mt-2 text-sm text-[#5c4033]/70">
              Published: May 8, 2026 — Updated: May 8, 2026
            </p>
            <p className={P}>{DESCRIPTION}</p>
          </header>

          {/* Table of Contents */}
          <nav aria-label="Table of contents" className={`mt-6 ${CARD}`}>
            <h2 className="text-lg font-semibold text-[#4a321e]">On this page</h2>
            <ul className="mt-2 space-y-1">
              {TOC.map((item) => (
                <SectionLink key={item.id} id={item.id} label={item.label} />
              ))}
            </ul>
          </nav>

          {/* TL;DR */}
          <section id="tldr" className={`mt-8 ${CARD}`}>
            <h2 className={H2}>TL;DR Summer crop picks</h2>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Best long-term profit (with kegs)</h3>
                <p className="mt-1 text-sm text-[#5c4033]/90">
                  Starfruit in kegs. It produces the highest gold/day in Summer by a wide margin. But it needs replanting and a strong keg pipeline.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Best low-effort profit</h3>
                <p className="mt-1 text-sm text-[#5c4033]/90">
                  Blueberry. Plant once, harvest 6 times per plant, minimal daily work. Very strong for early-game when kegs are limited.
                </p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Best if processing is limited</h3>
                <p className="mt-1 text-sm text-[#5c4033]/90">
                  Hops → Pale Ale if you can harvest daily. Melon → Wine if you want big per-harvest value with less daily work than Blueberry.
                </p>
              </div>
            </div>
          </section>

          {/* Top Crops Ranked */}
          <section id="top-crops-ranked" className="mt-10">
            <h2 className={H2}>Best Summer crops ranked</h2>
            <p className={P}>
              The table below ranks every Summer crop by practical profit. The &quot;Best Use&quot; column tells you
              whether the crop shines in kegs, jars, or just as raw sale.
            </p>
            <Table>{TABLE_SUMMER_CROPS}</Table>
            <p className="mt-3 text-xs text-[#5c4033]/60">
              * Gold/day assumes Artisan profession. Hops and Blueberry use average harvest rates.
            </p>
          </section>

          {/* Blueberry vs Starfruit */}
          <section id="blueberry-vs-star-fruit" className="mt-10">
            <h2 className={H2}>Blueberry vs Starfruit: the real choice</h2>
            <p className={P}>
              These two crops dominate Summer discussions, but they solve different problems:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border-2 border-[#7c4d2e]/60 bg-[#fce8b1]/25 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Blueberry</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-[#5c4033]/90">
                  <li>80g seed, regrows every 4 days</li>
                  <li>~61g gold/day raw — strong without processing</li>
                  <li>Multiple berries per harvest through RNG</li>
                  <li>Best when kegs are scarce</li>
                  <li>Works well in preserves jars</li>
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-[#7c4d2e]/60 bg-[#d4e8d4]/25 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Starfruit</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-[#5c4033]/90">
                  <li>400g seed, no regrowth (replant after 13 days)</li>
                  <li>~105g gold/day raw, 245g gold/day in kegs</li>
                  <li>Best per-harvest profit in the game</li>
                  <li>Requires replanting effort and seed cash</li>
                  <li>Neads keg density to justify the premium</li>
                </ul>
              </div>
            </div>
            <p className={`${P} rounded-2xl border border-[#7c4d2e]/25 bg-[#fff3da]/60 p-4`}>
              <strong>Rule of thumb:</strong> If you have fewer than 30 kegs in Summer Year 1, go Blueberry. If
              you have 60+ kegs and can afford Starfruit seeds, go Starfruit.
            </p>
          </section>

          {/* Processing Strategy */}
          <section id="processing-strategy" className="mt-10">
            <h2 className={H2}>Summer keg &amp; jar strategy</h2>
            <p className={P}>
              Processing is the single biggest lever on Summer profit. Here is the priority order:
            </p>
            <ol className="mt-4 space-y-3">
              <li className="rounded-2xl border-l-4 border-[#b77841] bg-white/45 p-3">
                <strong className="text-[#4a321e]">1. Starfruit → Keg → Wine</strong>
                <p className="mt-1 text-sm text-[#5c4033]/90">
                  Highest priority. Every Starfruit should go through a keg. The wine sells for 2,250g base and
                  3,150g with Artisan. This alone defines your Summer profit ceiling.
                </p>
              </li>
              <li className="rounded-2xl border-l-4 border-[#b77841]/70 bg-white/45 p-3">
                <strong className="text-[#4a321e]">2. Hops → Keg → Pale Ale</strong>
                <p className="mt-1 text-sm text-[#5c4033]/90">
                  Second priority if you grow Hops. Pale Ale at 420g base per keg cycle generates very strong
                  daily value, but requires daily harvest &amp; keg cycling.
                </p>
              </li>
              <li className="rounded-2xl border-l-4 border-[#b77841]/50 bg-white/45 p-3">
                <strong className="text-[#4a321e]">3. Melon → Keg → Wine</strong>
                <p className="mt-1 text-sm text-[#5c4033]/90">
                  Melon Wine at 825g base is respectable. Use spare keg capacity after Starfruit and Pale Ale.
                </p>
              </li>
              <li className="rounded-2xl border-l-4 border-[#b77841]/30 bg-white/45 p-3">
                <strong className="text-[#4a321e]">4. Blueberry → Jar → Jam, or sell raw</strong>
                <p className="mt-1 text-sm text-[#5c4033]/90">
                  Blueberry jam is better than wine per fruit. If jars are available, use them here. Otherwise,
                  raw sale is fine and still profitable.
                </p>
              </li>
            </ol>
          </section>

          {/* Day 1 to Late Summer */}
          <section id="day-1-to-late-summer" className="mt-10">
            <h2 className={H2}>Day 1 to late-Summer plan</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Summer Day 1 (Year 1)</h3>
                <ul className="mt-2 space-y-1 text-sm text-[#5c4033]/90">
                  <li>Plant Blueberry as your main crop (affordable, regrows, low risk)</li>
                  <li>If you saved gold for Starfruit seeds: plant 10-20 and assign them dedicated kegs</li>
                  <li>Start Hops if you have kegs ready (each hop plant needs 1 keg minimum)</li>
                  <li>Leave at least 5% of farm for Melon (gift potential + decent profit)</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Mid Summer (Day 8-15)</h3>
                <ul className="mt-2 space-y-1 text-sm text-[#5c4033]/90">
                  <li>First Blueberry harvest — sell raw or check jar capacity</li>
                  <li>Starfruit still growing — prepare kegs for the wave</li>
                  <li>If you planted Hops, Pale Ale pipeline should be running</li>
                  <li>Assess if you can afford a second Starfruit rotation</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Late Summer (Day 16-28)</h3>
                <ul className="mt-2 space-y-1 text-sm text-[#5c4033]/90">
                  <li>Last Starfruit harvest — keg immediately</li>
                  <li>Blueberry continues to produce every 4 days</li>
                  <li>Plan Fall crop rotation now (cranberries, pumpkins)</li>
                  <li>Empty kegs and prepare for Fall processing</li>
                  <li>Use the calculator to plan your Fall transition</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mt-10">
            <h2 className={H2}>FAQ</h2>
            <FaqJsonLd faqs={FAQ_ITEMS} />
            <div className="mt-4 space-y-4">
              {FAQ_ITEMS.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4"
                >
                  <h3 className="text-base font-semibold text-[#4a321e]">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5c4033]/90 sm:text-base">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className={`mt-10 ${CARD}`}>
            <h2 className={H2}>Next Step: Check Your Exact Numbers</h2>
            <p className={P}>
              Every Summer save is different. The calculator lets you compare crops by your exact days left,
              processing capacity, and profession. Run your scenario before you buy seeds.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/calculator" className={CTA_CLASS}>
                Open Profit Calculator
              </Link>
              <Link href="/blog/best-crops-every-season" className={SUB_CTA_CLASS}>
                Every Season Guide
              </Link>
              <Link href="/blog/keg-vs-jar-profit-guide" className={SUB_CTA_CLASS}>
                Keg vs Jar Guide
              </Link>
              <Link href="/guides/greenhouse-profit-guide" className={SUB_CTA_CLASS}>
                Greenhouse Guide
              </Link>
            </div>
          </section>
        </article>

        <div className="mt-8">
          <BlogReadNext posts={readNextPosts} currentSlug="stardew-valley-summer-profit-guide" />
        </div>

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}

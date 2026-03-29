import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogReadNextPosts } from "@/lib/read-next";
import { SITE_ORIGIN } from "@/lib/site";

const publishedTime = "2026-03-29T00:00:00Z";
const modifiedTime = "2026-03-29T00:00:00Z";
const fromPath = "/blog/stardew-valley-summer-crops-tier-list";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE = "Stardew Valley Summer Crops Tier List (2026): Ranked by Gold Per Day";
const DESCRIPTION =
  "Complete summer crops tier list for Stardew Valley ranked by gold/day profit. Starfruit, Blueberry, Hops, Red Cabbage, Melon, and more — with calculator links and processing analysis.";

const FAQ_ITEMS = [
  {
    question: "What is the most profitable summer crop in Stardew Valley?",
    answer:
      "Starfruit is the most profitable raw summer crop at roughly 26g/day without processing. However, Hops processed into Pale Ale via a Keg reaches around 110g/day, making it the highest gold-per-day option if you have artisan infrastructure.",
  },
  {
    question: "Is Starfruit or Hops better in Stardew Valley?",
    answer:
      "It depends on your setup. Without Kegs, Starfruit wins — higher single sell price and strong Wine potential at 2250g per bottle. With a large Keg array, Hops wins on gold/day because Pale Ale (300g each) produces roughly every two in-game days from a one-day regrow crop.",
  },
  {
    question: "Should I plant Blueberry or Melon in Summer?",
    answer:
      "Blueberry is almost always the better choice. It regrows every 4 days after the initial 13-day growth and produces 3 berries per harvest, delivering around 34g/day. Melon only grows once per planting at about 14g/day.",
  },
  {
    question: "When is it too late to plant summer crops?",
    answer:
      "Plant regrowable crops by Summer Day 12 so they can harvest at least once before Fall. Single-harvest crops need more lead time — Starfruit (13 days) must be planted by Day 15, Melon (12 days) by Day 16. All crops die when Fall begins on Day 1.",
  },
  {
    question: "Is Red Cabbage worth planting in Year 1?",
    answer:
      "No. Red Cabbage seeds are only sold at Pierre&#39;s store starting in Year 2. In Year 1, focus on Starfruit from the Oasis or Blueberry from Pierre&#39;s instead.",
  },
  {
    question: "What is the best summer crop for beginners?",
    answer:
      "Blueberry is the best beginner summer crop. Seeds cost 80g at Pierre&#39;s, growth takes 13 days, then the plant regrows every 4 days producing 3 berries per harvest. Low seed cost, multiple harvests per season, and Year 1 Day 1 availability make it the safest profitable choice.",
  },
  {
    question: "Does processing crops into Artisan goods improve profit significantly?",
    answer:
      "Yes, dramatically. Starfruit Wine (2250g) is three times the raw value (750g). Hops into Pale Ale multiplies value 12x — from 25g raw to 300g processed. With the Artisan profession these values increase by another 40%.",
  },
] as const;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: url },
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url,
      type: "article",
      publishedTime,
      modifiedTime,
    },
  };
}

const CARD =
  "rounded-[28px] border-4 border-[#7c4d2e]/70 bg-[#fff3da]/92 p-5 shadow-[0_14px_34px_rgba(56,41,23,0.22)] ring-1 ring-yellow-900/15 sm:p-7";
const H2 = "text-xl font-semibold text-[#4a321e] sm:text-2xl";
const H3 = "text-lg font-semibold text-[#4a321e] sm:text-xl";
const P = "mt-3 text-sm leading-7 text-[#5c4033]/95 sm:text-base";
const LI = "ml-5 list-disc text-sm leading-7 text-[#5c4033]/95 sm:text-base";
const LINK =
  "font-semibold underline decoration-[#b77841]/60 underline-offset-4 transition hover:text-[#3f2a22] hover:decoration-[#b77841]";
const TOC_LINK =
  "block rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55";
const CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#fce8b1] px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ffd88a]";
const SUB_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/65 bg-white/45 px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-white/60";

const TIER_ROWS = [
  { tier: "S", crop: "Hops → Pale Ale", seedCost: 60, sellPrice: 300, growDays: 11, regrow: 1, goldPerDay: 110, note: "Needs Keg; 12x value multiplier" },
  { tier: "S", crop: "Starfruit → Wine", seedCost: 400, sellPrice: 2250, growDays: 13, regrow: null, goldPerDay: 173, note: "Via Keg; raw sell 750g (~26g/day)" },
  { tier: "A", crop: "Blueberry", seedCost: 80, sellPrice: 150, growDays: 13, regrow: 4, goldPerDay: 34, note: "3 berries/harvest; great for beginners" },
  { tier: "A", crop: "Red Cabbage", seedCost: 100, sellPrice: 260, growDays: 9, regrow: null, goldPerDay: 18, note: "Year 2+ only; strong single-harvest" },
  { tier: "B", crop: "Melon", seedCost: 80, sellPrice: 250, growDays: 12, regrow: null, goldPerDay: 14, note: "Giant crop chance; single harvest" },
  { tier: "B", crop: "Wheat", seedCost: 10, sellPrice: 25, growDays: 4, regrow: null, goldPerDay: 3, note: "Beer/Flour processing boosts value" },
  { tier: "C", crop: "Hot Pepper", seedCost: 40, sellPrice: 40, growDays: 5, regrow: 3, goldPerDay: 10, note: "Regrows; decent filler crop" },
  { tier: "C", crop: "Tomato", seedCost: 50, sellPrice: 75, growDays: 11, regrow: 4, goldPerDay: 10, note: "Regrows; juice is decent" },
  { tier: "C", crop: "Corn", seedCost: 150, sellPrice: 50, growDays: 14, regrow: 4, goldPerDay: 6, note: "Summer + Fall; low gold/day" },
  { tier: "D", crop: "Radish", seedCost: 40, sellPrice: 100, growDays: 6, regrow: null, goldPerDay: 10, note: "Single harvest; mediocre return" },
  { tier: "D", crop: "Poppy", seedCost: 100, sellPrice: 140, growDays: 7, regrow: null, goldPerDay: 6, note: "Single harvest; low value" },
  { tier: "D", crop: "Sunflower", seedCost: 200, sellPrice: 80, growDays: 8, regrow: null, goldPerDay: -15, note: "Sells at a loss raw; seeds have side value" },
] as const;

const TIER_COLORS: Record<string, string> = {
  S: "bg-yellow-400/90 text-yellow-900 font-bold",
  A: "bg-green-400/80 text-green-900 font-bold",
  B: "bg-blue-300/80 text-blue-900 font-bold",
  C: "bg-gray-300/80 text-gray-800 font-semibold",
  D: "bg-red-200/80 text-red-900 font-semibold",
};

export default async function SummerCropsTierListPage() {
  const readNext = await getBlogReadNextPosts(fromPath);

  return (
    <>
      <PwaRegisterScript />
      <FaqJsonLd items={FAQ_ITEMS} />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Summer Crops Tier List" },
          ]}
        />

        <h1 className="mt-6 text-2xl font-bold leading-snug text-[#3f2a22] sm:text-3xl">
          Stardew Valley Summer Crops Tier List (2026): Ranked by Gold Per Day
        </h1>
        <p className={P}>
          Summer is the most lucrative farming season in Stardew Valley — if you pick the right crops.
          This tier list ranks every summer crop by <strong>gold per day (g/day)</strong>, the only
          objective metric that matters for profit. Whether you have a Keg array or you&apos;re still
          selling raw crops, this guide tells you exactly where to put your seeds.
        </p>

        {/* CTA */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className={CTA_CLASS}>
            📊 Calculate Your Crop Profits
          </Link>
          <Link href="/blog/keg-vs-jar-complete-profit-system" className={SUB_CTA_CLASS}>
            Keg vs Jar Guide →
          </Link>
        </div>

        {/* TOC */}
        <nav className="mt-8 rounded-2xl border border-[#7c4d2e]/20 bg-white/40 p-4">
          <p className="mb-3 text-sm font-semibold text-[#4a321e]">Table of Contents</p>
          <ul className="space-y-1">
            {[
              ["#tier-list", "Complete Tier List (All Summer Crops)"],
              ["#s-tier", "S Tier: Maximum Profit"],
              ["#a-tier", "A Tier: Strong Returns"],
              ["#starfruit-vs-hops", "Starfruit vs Hops: Which is Better?"],
              ["#blueberry-vs-melon", "Blueberry vs Melon"],
              ["#processing", "How Processing Changes Everything"],
              ["#planting-timeline", "Planting Timeline by Day"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className={TOC_LINK}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tier List Table */}
        <section id="tier-list" className="mt-10">
          <h2 className={H2}>Complete Summer Crops Tier List</h2>
          <p className={P}>
            Gold/day figures assume normal quality, no profession bonuses, and optimal planting on
            Summer Day 1. Processed values assume Keg output with standard sell price.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-[#7c4d2e]/20">
            <table className="w-full text-sm">
              <thead className="bg-[#7c4d2e]/10">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-[#4a321e]">Tier</th>
                  <th className="px-3 py-2 text-left font-semibold text-[#4a321e]">Crop</th>
                  <th className="px-3 py-2 text-right font-semibold text-[#4a321e]">Seed</th>
                  <th className="px-3 py-2 text-right font-semibold text-[#4a321e]">Sell</th>
                  <th className="px-3 py-2 text-right font-semibold text-[#4a321e]">g/day</th>
                  <th className="hidden px-3 py-2 text-left font-semibold text-[#4a321e] sm:table-cell">Note</th>
                </tr>
              </thead>
              <tbody>
                {TIER_ROWS.map((row) => (
                  <tr key={row.crop} className="border-t border-[#7c4d2e]/10 even:bg-white/30">
                    <td className="px-3 py-2">
                      <span className={`rounded-lg px-2 py-0.5 text-xs ${TIER_COLORS[row.tier]}`}>
                        {row.tier}
                      </span>
                    </td>
                    <td className="px-3 py-2 font-medium text-[#4a321e]">{row.crop}</td>
                    <td className="px-3 py-2 text-right text-[#5c4033]">{row.seedCost}g</td>
                    <td className="px-3 py-2 text-right text-[#5c4033]">{row.sellPrice}g</td>
                    <td className="px-3 py-2 text-right font-semibold text-[#4a321e]">
                      {row.goldPerDay > 0 ? `~${row.goldPerDay}g` : `${row.goldPerDay}g`}
                    </td>
                    <td className="hidden px-3 py-2 text-[#5c4033]/80 sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* S Tier */}
        <section id="s-tier" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>S Tier: Maximum Profit Crops</h2>
            <p className={P}>
              S Tier crops are the undisputed kings of Summer. Both Hops and Starfruit can generate
              the bulk of your annual income if planted correctly.
            </p>
            <h3 className={`mt-5 ${H3}`}>Hops (with Keg): ~110g/day</h3>
            <p className={P}>
              Hops is a one-day regrow crop that sells for only 25g raw — but converts to Pale Ale
              (300g) in a Keg. With the Artisan profession, Pale Ale reaches 420g. A single Hops
              plant paired with a Keg running continuously generates roughly 110g/day once your Keg supply matches your harvest rate.
            </p>
            <h3 className={`mt-5 ${H3}`}>Starfruit (raw or Wine): 26g–173g/day</h3>
            <p className={P}>
              Raw Starfruit sells for 750g from a 400g seed over 13 days — about 26g/day. That&apos;s
              already strong for a single-harvest crop. But Starfruit Wine (2250g, or 3150g with
              Artisan) transforms it into one of the highest-value items in the game. The bottleneck
              is Keg availability and the time wine takes to ferment.
            </p>
          </div>
        </section>

        {/* A Tier */}
        <section id="a-tier" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>A Tier: Strong, Reliable Returns</h2>
            <h3 className={`mt-4 ${H3}`}>Blueberry: ~34g/day</h3>
            <p className={P}>
              Blueberry produces 3 berries per harvest every 4 days after its initial 13-day growth.
              Seeds cost only 80g at Pierre&apos;s, making this the best beginner crop in Summer.
              No processing required — just keep harvesting.
            </p>
            <h3 className={`mt-5 ${H3}`}>Red Cabbage: ~18g/day (Year 2+)</h3>
            <p className={P}>
              Red Cabbage seeds are only available from Year 2 onwards at Pierre&apos;s. At 260g per
              head with a 9-day growth cycle, it&apos;s a solid single-harvest crop. Pickle it for
              572g with a Preserves Jar.
            </p>
          </div>
        </section>

        {/* Starfruit vs Hops */}
        <section id="starfruit-vs-hops" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>Starfruit vs Hops: Which is Actually Better?</h2>
            <p className={P}>
              This is the most common debate for experienced Summer farmers. Here&apos;s the honest
              breakdown:
            </p>
            <ul className="mt-4 space-y-2">
              <li className={LI}>
                <strong>No Kegs:</strong> Starfruit wins. 750g raw sell price dwarfs Hops&apos; 25g.
              </li>
              <li className={LI}>
                <strong>Small Keg array (under 20):</strong> Starfruit Wine still wins — higher
                per-bottle value means fewer Kegs needed.
              </li>
              <li className={LI}>
                <strong>Large Keg array (50+):</strong> Hops wins on gold/day. Daily regrow means
                your Kegs stay full, maximizing throughput.
              </li>
              <li className={LI}>
                <strong>Artisan profession:</strong> Both benefit equally (40% bonus), so Hops
                maintains its throughput advantage at scale.
              </li>
            </ul>
            <p className={P}>
              <strong>Verdict:</strong> Plant Starfruit if you have fewer than 30 Kegs. Switch to
              Hops once your artisan infrastructure is mature.
            </p>
            <div className="mt-5">
              <Link href="/blog/keg-vs-jar-complete-profit-system" className={LINK}>
                → Full Keg vs Jar Profit System Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Blueberry vs Melon */}
        <section id="blueberry-vs-melon" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>Blueberry vs Melon: Not Even Close</h2>
            <p className={P}>
              Blueberry delivers ~34g/day through multiple harvests. Melon delivers ~14g/day from a
              single harvest. Unless you&apos;re specifically hunting for a Giant Melon (which
              requires a 3x3 grid), Blueberry is the clear winner for profit.
            </p>
            <p className={P}>
              Melon does have one advantage: it&apos;s required for the Crops Bundle in the Community
              Center. Grow a few for that, then fill the rest of your field with Blueberries.
            </p>
          </div>
        </section>

        {/* Processing */}
        <section id="processing" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>How Processing Changes the Tier List</h2>
            <p className={P}>
              Raw sell prices tell only half the story. Here&apos;s how processing shifts the rankings:
            </p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/20">
              <table className="w-full text-sm">
                <thead className="bg-[#7c4d2e]/10">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-[#4a321e]">Crop</th>
                    <th className="px-3 py-2 text-right font-semibold text-[#4a321e]">Raw</th>
                    <th className="px-3 py-2 text-right font-semibold text-[#4a321e]">Keg</th>
                    <th className="px-3 py-2 text-right font-semibold text-[#4a321e]">Jar</th>
                    <th className="px-3 py-2 text-right font-semibold text-[#4a321e]">Multiplier</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { crop: "Starfruit", raw: "750g", keg: "2250g (Wine)", jar: "1550g (Juice)", mult: "3x" },
                    { crop: "Hops", raw: "25g", keg: "300g (Pale Ale)", jar: "100g (Pickle)", mult: "12x" },
                    { crop: "Blueberry", raw: "50g", keg: "200g (Wine)", jar: "150g (Jam)", mult: "4x" },
                    { crop: "Melon", raw: "250g", keg: "750g (Wine)", jar: "550g (Juice)", mult: "3x" },
                    { crop: "Red Cabbage", raw: "260g", keg: "780g (Wine)", jar: "572g (Pickle)", mult: "3x" },
                  ].map((r) => (
                    <tr key={r.crop} className="border-t border-[#7c4d2e]/10 even:bg-white/30">
                      <td className="px-3 py-2 font-medium text-[#4a321e]">{r.crop}</td>
                      <td className="px-3 py-2 text-right text-[#5c4033]">{r.raw}</td>
                      <td className="px-3 py-2 text-right text-[#5c4033]">{r.keg}</td>
                      <td className="px-3 py-2 text-right text-[#5c4033]">{r.jar}</td>
                      <td className="px-3 py-2 text-right font-semibold text-[#4a321e]">{r.mult}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={P}>
              Use the{" "}
              <Link href="/" className={LINK}>
                Stardew Valley Profit Calculator
              </Link>{" "}
              to model exact returns based on your Keg count and profession.
            </p>
          </div>
        </section>

        {/* Planting Timeline */}
        <section id="planting-timeline" className="mt-10">
          <div className={CARD}>
            <h2 className={H2}>Planting Timeline: What to Plant and When</h2>
            <div className="mt-4 space-y-3">
              {[
                { day: "Day 1", rec: "Starfruit + Hops + Blueberry", note: "Maximum harvests for regrow crops" },
                { day: "Day 8", rec: "Blueberry + Red Cabbage (Y2)", note: "Still fits multiple Blueberry harvests" },
                { day: "Day 15", rec: "Blueberry only", note: "Last safe day for Starfruit single harvest" },
                { day: "Day 20+", rec: "Nothing new", note: "Too late for meaningful returns" },
              ].map((r) => (
                <div key={r.day} className="flex gap-4 rounded-xl border border-[#7c4d2e]/15 bg-white/35 p-3">
                  <span className="min-w-[60px] font-bold text-[#4a321e]">{r.day}</span>
                  <div>
                    <p className="text-sm font-semibold text-[#4a321e]">{r.rec}</p>
                    <p className="text-xs text-[#5c4033]/80">{r.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator CTA */}
        <section className="mt-10">
          <div className="rounded-[28px] border-4 border-[#b77841]/50 bg-gradient-to-br from-[#fff8e7] to-[#fce8b1] p-6 text-center shadow-lg">
            <p className="text-lg font-bold text-[#4a321e]">Calculate Your Exact Summer Profits</p>
            <p className="mt-2 text-sm text-[#5c4033]">
              Enter your planting date, crop choice, and Keg count to see real gold/day numbers
              tailored to your farm.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link href="/" className={CTA_CLASS}>
                Open Profit Calculator →
              </Link>
              <Link href="/blog/best-summer-crops-quick-answer" className={SUB_CTA_CLASS}>
                Quick Answer: Best Summer Crop
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-10">
          <h2 className={H2}>Frequently Asked Questions</h2>
          <div className="mt-4 space-y-4">
            {FAQ_ITEMS.map((item) => (
              <div key={item.question} className={CARD}>
                <h3 className="text-base font-semibold text-[#4a321e]">{item.question}</h3>
                <p className={P}>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <BlogReadNext posts={readNext} />
      </main>
      <SiteFooter />
    </>
  );
}

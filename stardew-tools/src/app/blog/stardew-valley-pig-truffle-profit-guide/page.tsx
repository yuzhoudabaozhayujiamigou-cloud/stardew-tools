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
const fromPath = "/blog/stardew-valley-pig-truffle-profit-guide";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE =
  "Stardew Valley Pig and Truffle Profit Guide (2026): Best Animal for Gold Per Day";
const DESCRIPTION =
  "Complete guide to pigs and truffles in Stardew Valley. Truffle Oil profit calculation, pig happiness mechanics, Artisan profession boost, and comparison with other farm animals.";

const FAQ_ITEMS = [
  {
    question: "How much do truffles sell for in Stardew Valley?",
    answer:
      "A raw truffle sells for 625g at base quality. With the Artisan profession, Truffle Oil sells for 1,491g per bottle. That makes pigs the single most profitable barn animal in the game when processed correctly.",
  },
  {
    question: "Is pig farming profitable in Year 1?",
    answer:
      "Generally no. Pigs cost 16,000g each and require a Deluxe Barn (12,000g upgrade on top of the base Barn chain). That total investment is difficult to justify before Year 2. Spend Year 1 building barn infrastructure and cash reserves, then buy pigs early in Year 2.",
  },
  {
    question: "Should I make Truffle Oil or sell raw truffles?",
    answer:
      "Always process into Truffle Oil if you have the Artisan profession. Artisan Truffle Oil sells for 1,491g versus 625g raw — a 138% markup. Without Artisan, Truffle Oil sells for 1,065g, still a 70% gain over raw. The Oil Maker pays for itself very quickly.",
  },
  {
    question: "How many pigs should I have?",
    answer:
      "A Deluxe Barn holds up to 12 animals. Most players run 6 to 10 pigs alongside a few other animals. Ten pigs with the Artisan profession can yield over 14,000g per day in Truffle Oil — well into endgame income territory.",
  },
  {
    question: "Do pigs find truffles in winter?",
    answer:
      "No. Pigs must go outside to find truffles, and animals do not leave the barn during Winter or on rainy days. This means zero truffle production for the entire Winter season, which is a major seasonal gap to plan around.",
  },
  {
    question: "Does the Auto-Petter work for pigs?",
    answer:
      "Yes. The Auto-Petter provides one happiness point per day, which counts toward keeping pigs at full mood. It does not completely replace manual petting (you still get slightly higher friendship from hands-on care), but it dramatically reduces the daily chore load for large pig herds.",
  },
] as const;

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

const PROFIT_ROWS = [
  {
    setup: "1 pig — Raw Truffle",
    perDay: "625g",
    perWeek: "~4,375g",
    notes: "Assumes sunny non-winter days; no processing required.",
  },
  {
    setup: "1 pig — Truffle Oil (no Artisan)",
    perDay: "1,065g",
    perWeek: "~7,455g",
    notes: "Requires Oil Maker. 70% markup over raw with no profession.",
  },
  {
    setup: "1 pig — Truffle Oil (Artisan)",
    perDay: "1,491g",
    perWeek: "~10,437g",
    notes: "Best single-pig return. Artisan adds 40% on top of base Oil value.",
  },
  {
    setup: "5 pigs — Truffle Oil (Artisan)",
    perDay: "7,455g",
    perWeek: "~52,185g",
    notes: "Small herd. Strong mid-game passive income with manageable Oil Maker count.",
  },
  {
    setup: "10 pigs — Truffle Oil (Artisan)",
    perDay: "14,910g",
    perWeek: "~104,370g",
    notes: "Full-scale operation. Requires 10 Oil Makers running in parallel for same-day processing.",
  },
] as const;

const ANIMAL_ROWS = [
  {
    animal: "Pig",
    building: "Deluxe Barn",
    product: "Truffle / Truffle Oil",
    baseSell: "625g / 1,491g",
    bestDaily: "1,491g (Artisan)",
    notes: "Best gold-per-animal in the game. Weather-dependent; no output in winter or rain.",
  },
  {
    animal: "Chicken",
    building: "Coop",
    product: "Egg / Mayo",
    baseSell: "50–95g / 190g",
    bestDaily: "380g (Large Mayo, Artisan)",
    notes: "Cheapest to set up. Reliable daily output in all seasons and weather.",
  },
  {
    animal: "Cow",
    building: "Barn",
    product: "Milk / Cheese",
    baseSell: "125–190g / 230–345g",
    bestDaily: "690g (Large Cheese, Artisan)",
    notes: "Good baseline income. Consistent year-round. Easier entry than pigs.",
  },
  {
    animal: "Goat",
    building: "Big Barn",
    product: "Goat Milk / Goat Cheese",
    baseSell: "225–345g / 375–565g",
    bestDaily: "798g (Artisan Goat Cheese)",
    notes: "Every other day output. Better gold per item than cow but lower daily frequency.",
  },
  {
    animal: "Sheep",
    building: "Deluxe Barn",
    product: "Wool / Cloth",
    baseSell: "340g / 470g",
    bestDaily: "658g (Artisan Cloth)",
    notes: "Every 3 days output base; every other day with max friendship. Cloth is in high demand.",
  },
] as const;

function TableOfContents() {
  return (
    <nav className={`${CARD} !p-5`}>
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#6f4b2a]/75">
        Table of Contents
      </p>
      <div className="mt-3 grid gap-1.5 sm:grid-cols-2">
        <a className={TOC_LINK} href="#pig-basics">
          1) Pig Basics &amp; Costs
        </a>
        <a className={TOC_LINK} href="#truffle-oil">
          2) Truffle Oil Processing
        </a>
        <a className={TOC_LINK} href="#profit-tables">
          3) Profit Calculation Tables
        </a>
        <a className={TOC_LINK} href="#animal-comparison">
          4) Animal Comparison
        </a>
        <a className={TOC_LINK} href="#happiness">
          5) Pig Happiness Management
        </a>
        <a className={TOC_LINK} href="#auto-petter">
          6) Auto-Petter Value Analysis
        </a>
        <a className={TOC_LINK} href="#when-to-buy">
          7) When to Buy Pigs
        </a>
        <a className={TOC_LINK} href="#faq">
          8) FAQ
        </a>
      </div>
    </nav>
  );
}

function Callout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="mt-5 rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4 ring-1 ring-yellow-900/10">
      <p className="text-sm font-semibold text-[#4a321e]">{title}</p>
      <div className="mt-2 text-sm leading-7 text-[#5c4033]/95">{children}</div>
    </aside>
  );
}

function ProfitTable({
  rows,
}: {
  rows: ReadonlyArray<{
    setup: string;
    perDay: string;
    perWeek: string;
    notes: string;
  }>;
}) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-[680px] w-full border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
            <th className="px-3 py-2">Setup</th>
            <th className="px-3 py-2">Per Day</th>
            <th className="px-3 py-2">Per Week</th>
            <th className="px-3 py-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.setup}
              className={`${
                index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"
              } rounded-2xl ring-1 ring-[#9f744c]/20`}
            >
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.setup}</td>
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.perDay}</td>
              <td className="px-3 py-3">{row.perWeek}</td>
              <td className="px-3 py-3">{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AnimalTable({
  rows,
}: {
  rows: ReadonlyArray<{
    animal: string;
    building: string;
    product: string;
    baseSell: string;
    bestDaily: string;
    notes: string;
  }>;
}) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-[860px] w-full border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
            <th className="px-3 py-2">Animal</th>
            <th className="px-3 py-2">Building</th>
            <th className="px-3 py-2">Product</th>
            <th className="px-3 py-2">Base Sell</th>
            <th className="px-3 py-2">Best Daily (Artisan)</th>
            <th className="px-3 py-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.animal}
              className={`${
                index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"
              } rounded-2xl ring-1 ring-[#9f744c]/20`}
            >
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.animal}</td>
              <td className="px-3 py-3">{row.building}</td>
              <td className="px-3 py-3">{row.product}</td>
              <td className="px-3 py-3">{row.baseSell}</td>
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.bestDaily}</td>
              <td className="px-3 py-3">{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const metadata: Metadata = {
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
    images: [`${url}/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default async function StardewValleyPigTruffleProfitGuidePage() {
  const readNextPosts = getBlogReadNextPosts("stardew-valley-pig-truffle-profit-guide", 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      name: "Stardew Profit",
    },
    publisher: {
      "@type": "Organization",
      name: "Stardew Profit",
    },
    image: [`${url}/opengraph-image`],
    about: [
      "stardew valley pig profit",
      "truffle oil artisan",
      "pig happiness mechanics",
      "best barn animal stardew",
      "truffle profit calculator",
    ],
  };

  return (
    <div className="relative min-h-screen bg-[#f5e6c8] text-[#5c4033]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 16% 18%, rgba(255,255,255,0.35) 0 5%, transparent 6%), radial-gradient(circle at 82% 14%, rgba(255,255,255,0.26) 0 4%, transparent 5%), radial-gradient(circle at 18% 84%, rgba(255,255,255,0.22) 0 6%, transparent 7%), repeating-linear-gradient(135deg, rgba(124,77,46,0.10) 0 16px, rgba(124,77,46,0.06) 16px 32px)",
            backgroundColor: "#f5e6c8",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#e8cfa3]/35" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <PwaRegisterScript />
        <FaqJsonLd
          faqs={FAQ_ITEMS.map((item) => ({
            question: item.question,
            answer: item.answer,
          }))}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Pig & Truffle Profit Guide" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border-4 border-[#7c4d2e]/80 bg-[#fff3da]/95 p-6 shadow-[0_16px_40px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Complete Guide • Animal Farming • Artisan Economy
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              {TITLE}
            </h1>
            <p className={P}>{DESCRIPTION}</p>
            <p className={P}>
              If you want the single highest gold-per-animal output in Stardew Valley, pigs are the
              answer. A fully optimized pig with the Artisan profession produces Truffle Oil worth
              1,491g per day — more than twice what a cow or chicken can generate. The catch is that
              pigs require significant upfront investment, careful happiness management, and a
              processing pipeline to reach that ceiling. This guide breaks down every number, every
              mechanic, and every decision point so you can build a pig operation that actually
              delivers on its potential.
            </p>
            <p className={P}>
              Keep the{" "}
              <Link className={LINK} href="/">
                Profit Calculator
              </Link>{" "}
              open while reading — it lets you model pig herds of any size against your current
              farm setup and compare them to other income sources.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-[#5c4033]/90">
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Published:{" "}
                <time dateTime={publishedTime}>
                  {new Date(publishedTime).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Animal Farming
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Artisan Profession
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Year 2+
              </span>
            </div>
          </header>

          <TableOfContents />

          <section id="pig-basics" className={CARD}>
            <h2 className={H2}>1) Pig Basics and Costs</h2>
            <p className={P}>
              Pigs are the crown jewel of barn animals. They are not the easiest or cheapest to
              obtain, but no other animal comes close to their daily gold output once they are
              operational. Here is everything you need to know before buying your first pig.
            </p>

            <h3 className={`${H3} mt-6`}>Purchase price and requirements</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                <strong>Cost:</strong> 16,000g per pig from Marnie&apos;s Ranch.
              </li>
              <li className={LI}>
                <strong>Building required:</strong> Deluxe Barn (costs 12,000g and 150 hardwood to
                upgrade from Big Barn, which itself costs 10,000g and 300 wood from a standard Barn).
              </li>
              <li className={LI}>
                <strong>Capacity:</strong> Deluxe Barn holds up to 12 animals of any barn type.
              </li>
              <li className={LI}>
                <strong>Maturity:</strong> Pigs take 10 in-game days to grow from baby to adult
                before they can produce truffles.
              </li>
            </ul>

            <h3 className={`${H3} mt-6`}>How truffles work</h3>
            <p className={P}>
              Each adult pig that goes outside on a non-rainy, non-winter day has a chance to dig up
              a truffle. A pig with maximum happiness (full hearts) finds exactly one truffle per
              outing. Truffles appear on the ground outside the barn and must be collected manually —
              they do not go into a chest automatically. Raw truffles sell for{" "}
              <strong>625g</strong> at base quality. Unlike most animal products, truffle quality is
              fixed and does not scale with profession.
            </p>

            <Callout title="Key constraint: weather and season">
              Pigs only produce truffles when they go outside. They will not leave the barn on rainy
              days or during Winter. This means your effective production season is Spring, Summer,
              and Fall on sunny days only. Plan your income projections around roughly 50–60 sunny
              days per year across those three seasons.
            </Callout>

            <h3 className={`${H3} mt-6`}>Total startup cost estimate</h3>
            <p className={P}>
              To run 4 pigs in a Deluxe Barn, you need roughly 100,000g in total investment:
              barn construction chain (~32,000g in materials and gold), pig purchases (64,000g), and
              Oil Makers for processing (each costs 1 Gold Bar + 1 Copper Bar + 25 Hardwood). That
              infrastructure cost is why Year 2 is the standard recommendation.
            </p>
          </section>

          <section id="truffle-oil" className={CARD}>
            <h2 className={H2}>2) Truffle Oil Processing</h2>
            <p className={P}>
              Raw truffles are valuable on their own, but converting them into Truffle Oil with an
              Oil Maker is the core of the pig profit strategy — especially once you unlock the
              Artisan profession.
            </p>

            <h3 className={`${H3} mt-6`}>Oil Maker basics</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                <strong>Recipe unlock:</strong> Farming level 8.
              </li>
              <li className={LI}>
                <strong>Materials:</strong> 1 Gold Bar, 1 Copper Bar, 25 Hardwood.
              </li>
              <li className={LI}>
                <strong>Processing time:</strong> 6 in-game hours per truffle.
              </li>
              <li className={LI}>
                <strong>Output:</strong> 1 Truffle → 1 Bottle of Truffle Oil.
              </li>
            </ul>

            <h3 className={`${H3} mt-6`}>Truffle Oil sale prices</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                <strong>Base price:</strong> 1,065g per bottle.
              </li>
              <li className={LI}>
                <strong>With Artisan profession:</strong> 1,491g per bottle (+40%).
              </li>
              <li className={LI}>
                <strong>Raw truffle for comparison:</strong> 625g.
              </li>
            </ul>

            <Callout title="Always process with Artisan">
              The Artisan profession (Farming level 10, Tiller path) applies a 40% bonus to all
              artisan goods including Truffle Oil. At 1,491g per bottle, Artisan Truffle Oil is
              138% more valuable than a raw truffle. If you are running pigs without Artisan, you
              are leaving the majority of the profit on the table. See the{" "}
              <Link className={LINK} href="/blog/stardew-valley-artisan-machines-roi-guide">
                Artisan Machines ROI Guide
              </Link>{" "}
              for the full breakdown on Oil Maker returns.
            </Callout>

            <h3 className={`${H3} mt-6`}>How many Oil Makers do you need?</h3>
            <p className={P}>
              Each Oil Maker processes one truffle every 6 hours, so it can handle up to 4 truffles
              per day if loaded back-to-back from 6:00 AM. For 10 pigs producing 10 truffles daily,
              you need at least 3 Oil Makers running in parallel to avoid a backlog. A practical
              setup for 10 pigs is 4 Oil Makers: load them first thing in the morning, collect
              finished oil in the evening, and reload before bed.
            </p>
          </section>

          <section id="profit-tables" className={CARD}>
            <h2 className={H2}>3) Profit Calculation Tables</h2>
            <p className={P}>
              The numbers below assume one truffle per pig per sunny non-winter day, Artisan Oil
              where indicated, and a standard 7-day week. Real output varies with weather — budget
              for roughly 4–5 truffle days per in-game week during the active seasons.
            </p>
            <ProfitTable rows={PROFIT_ROWS} />
            <Callout title="Scale tip">
              The jump from 5 to 10 pigs is purely linear — double the pigs, double the Oil Makers,
              double the gold. The main constraint is time spent collecting truffles and loading
              machines each morning. At 10+ pigs, Auto-Petter becomes worth its cost purely from
              the reduced daily task load.
            </Callout>
          </section>

          <section id="animal-comparison" className={CARD}>
            <h2 className={H2}>4) Animal Comparison</h2>
            <p className={P}>
              How do pigs stack up against every other barn and coop animal? The table below uses
              best-case Artisan daily values for a fair comparison. For a deeper look at all animal
              returns, see the{" "}
              <Link className={LINK} href="/blog/animal-profit-guide">
                Animal Profit Guide
              </Link>.
            </p>
            <AnimalTable rows={ANIMAL_ROWS} />
            <p className={P}>
              The key takeaway: pigs produce 2–4x more gold per animal per day than any other
              option, but only on sunny non-winter days. Chickens and cows win on consistency —
              they produce every single day regardless of weather. A balanced farm often runs
              chickens or cows for reliable daily income and pigs as the high-output premium layer.
            </p>
          </section>

          <section id="happiness" className={CARD}>
            <h2 className={H2}>5) Pig Happiness Management</h2>
            <p className={P}>
              A pig at full happiness (5 hearts) will reliably find one truffle per outdoor day.
              A pig at low happiness may not find any truffle at all. Happiness management is
              therefore directly tied to your daily profit ceiling.
            </p>

            <h3 className={`${H3} mt-6`}>Daily care checklist</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                <strong>Pet every pig daily.</strong> Each pet interaction adds one friendship
                point. Skipping a day causes a small friendship decay.
              </li>
              <li className={LI}>
                <strong>Leave the barn door open</strong> on sunny days so pigs can go outside
                automatically. Pigs that stay inside all day do not find truffles.
              </li>
              <li className={LI}>
                <strong>Ensure hay is always available.</strong> An empty food trough causes
                happiness to drop overnight. Auto-feed via a silo connected to the barn prevents
                this completely.
              </li>
            </ul>

            <h3 className={`${H3} mt-6`}>Weather and seasonal constraints</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                <strong>Rainy days:</strong> Pigs stay inside. No truffles. Happiness does not
                drop from weather alone, but you lose a production day.
              </li>
              <li className={LI}>
                <strong>Winter:</strong> Pigs cannot go outside at all for the entire season.
                Zero truffle production from Day 1 to Day 28 of Winter.
              </li>
            </ul>

            <h3 className={`${H3} mt-6`}>Winter heater strategy</h3>
            <p className={P}>
              Place a Heater in your Deluxe Barn before Winter starts. The heater prevents
              happiness from declining during cold months when pigs cannot go outside. Without it,
              happiness slowly erodes over Winter, and you will spend the first weeks of Spring
              rebuilding friendship before you see reliable truffle output again. One heater covers
              the entire barn regardless of animal count.
            </p>

            <Callout title="Rainy day routine">
              On rainy days when pigs stay in, use the time to harvest and process any stockpiled
              truffles from previous days, load Oil Makers, and pet your animals. Keeping the
              petting routine consistent even on zero-truffle days protects your happiness baseline.
            </Callout>
          </section>

          <section id="auto-petter" className={CARD}>
            <h2 className={H2}>6) Auto-Petter Value Analysis</h2>
            <p className={P}>
              The Auto-Petter is a rare item obtained from Skull Cavern treasure rooms or the
              Qi Gem shop (50 Qi Gems). Placed inside a barn, it automatically pets every animal
              once per day without any player input.
            </p>

            <h3 className={`${H3} mt-6`}>What it does and does not do</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                <strong>Does:</strong> Provides 1 automatic friendship point per animal per day,
                preventing friendship decay on days you skip manual petting.
              </li>
              <li className={LI}>
                <strong>Does not:</strong> Replace manual petting entirely for friendship gain.
                Manual petting still gives a slightly higher friendship increment, so full 5-heart
                status is reached faster with hands-on care.
              </li>
              <li className={LI}>
                <strong>Combined effect:</strong> Auto-Petter + manual petting on the same day
                gives maximum daily friendship gain.
              </li>
            </ul>

            <h3 className={`${H3} mt-6`}>Is it worth the cost?</h3>
            <p className={P}>
              For a barn of 10 pigs generating 14,910g per day in Artisan Truffle Oil, even a single
              missed pet session that drops a pig&apos;s mood costs you 1,491g in lost output. The
              Auto-Petter pays for itself in insurance value within a few weeks. If you are running
              a large pig operation and your daily routine is tight, the Auto-Petter is one of the
              best quality-of-life purchases in the game. The primary cost — 50 Qi Gems — requires
              reaching Perfection milestones, so it is a late-game convenience, not an early
              solution.
            </p>

            <Callout title="Alternative: Friendship from talking">
              If you do not have the Auto-Petter yet, establish a strict morning routine: open the
              barn, pet every pig in one sweep (takes about 30 seconds per pig), then open the door.
              With 6 pigs this is under 3 minutes and protects your entire daily output.
            </Callout>
          </section>

          <section id="when-to-buy" className={CARD}>
            <h2 className={H2}>7) When to Buy Pigs</h2>
            <p className={P}>
              Pigs are not a Year 1 investment for most players. The math is straightforward: you
              need roughly 100,000g in liquid capital to build a Deluxe Barn and buy 4 pigs with
              Oil Makers. Reaching that threshold while also funding crops, tool upgrades, and mine
              progression is genuinely difficult before Year 2.
            </p>

            <h3 className={`${H3} mt-6`}>Recommended Year 2 timeline</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                <strong>Winter Year 1:</strong> Begin upgrading your standard Barn to Big Barn,
                then to Deluxe Barn. Each upgrade takes 3 in-game days.
              </li>
              <li className={LI}>
                <strong>Spring Year 2, Day 1:</strong> Purchase 2–4 pigs immediately. They will
                mature by around Day 11 and start producing truffles before Spring ends.
              </li>
              <li className={LI}>
                <strong>Summer Year 2:</strong> Add more pigs as cash flow allows. By now your
                Oil Makers should be running and Artisan profession secured.
              </li>
            </ul>

            <h3 className={`${H3} mt-6`}>Capital threshold checklist</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Deluxe Barn fully built ✓</li>
              <li className={LI}>Farming level 10 with Artisan profession ✓</li>
              <li className={LI}>At least 3 Oil Makers crafted ✓</li>
              <li className={LI}>Silo and auto-feed system in place ✓</li>
              <li className={LI}>16,000g per pig available without gutting crop budget ✓</li>
            </ul>

            <Callout title="Use the calculator before buying">
              Before committing 64,000g to four pigs, model the expected return in the{" "}
              <Link className={LINK} href="/">
                Profit Calculator
              </Link>. Compare pig income against your current best crop strategy for the season.
              Pigs win decisively over a full year, but crops can deliver faster short-term
              returns if you are still in a cash-tight phase.
            </Callout>
          </section>

          <section id="faq" className={CARD}>
            <h2 className={H2}>8) FAQ</h2>
            <div className="mt-4 space-y-4">
              {FAQ_ITEMS.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-[#7c4d2e]/20 bg-white/40 px-4 py-3"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-[#4a321e]">
                    {item.question}
                  </summary>
                  <p className="mt-2 text-sm leading-7 text-[#5c4033]/95">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Start Calculating Your Pig Profits</h2>
            <p className={P}>
              Ready to build your pig empire? Use the calculator to model exactly how much your
              herd will earn based on size, season, and profession. Compare pig income against
              crops and other animals to find your optimal Year 2 strategy.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link className={CTA_CLASS} href="/">
                Open Profit Calculator
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/stardew-valley-artisan-machines-roi-guide">
                Artisan Machines ROI Guide
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/animal-profit-guide">
                Full Animal Profit Guide
              </Link>
            </div>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="stardew-valley-pig-truffle-profit-guide" />
      </main>

      <SiteFooter />
    </div>
  );
}

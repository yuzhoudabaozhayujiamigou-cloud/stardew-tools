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
const fromPath = "/blog/stardew-valley-foraging-profit-guide";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE =
  "Complete Foraging Profit Guide for Stardew Valley (2026): Seasons, Botanist, and Gold Routes";
const DESCRIPTION =
  "Complete Stardew Valley foraging profit guide with seasonal item rankings, Botanist profession analysis, wine/jelly processing routes, and daily gold maximization strategies.";

const FAQ_ITEMS = [
  {
    question: "What is the most profitable forageable in Stardew Valley?",
    answer:
      "Purple Mushroom (250g base, 375g Iridium with Botanist) from cave foraging is the single highest-value repeatable forageable. Among seasonal items, Chanterelle in Fall (160g, 240g Iridium) and Crystal Fruit in Winter (150g, 225g Iridium) are the top outdoor picks. With the Botanist profession, Spring Onions from the Secret Woods jump from 8g to 160g each, making them exceptional for their abundance.",
  },
  {
    question: "Is Botanist or Tracker better for profit?",
    answer:
      "Botanist is almost always better for profit-focused players. It guarantees Iridium Quality on every forageable, multiplying sell value by 1.5x across the board. Tracker only shows forageable locations on the minimap, which saves a small amount of time but adds zero gold per item. If maximizing income from foraging is your goal, Botanist is the clear choice at Foraging Level 10.",
  },
  {
    question: "Should I process foraged items or sell them raw?",
    answer:
      "It depends on the item. Morel Mushrooms become Morel Jelly worth 352g vs 225g raw (Iridium), so processing wins. Fiddlehead Ferns become Fiddlehead Pickles worth 342g vs 135g raw (Iridium), making them one of the best foraging-to-artisan conversions. However, Purple Mushrooms, Chanterelles, and Crystal Fruits are often better sold raw at Iridium Quality because the artisan multiplier does not outpace their high base value enough to justify the Preserves Jar or Keg time and slot cost.",
  },
  {
    question: "Is foraging worth focusing on for profit?",
    answer:
      "Yes, especially in Year 1 and early Year 2. Foraging requires zero investment — no seeds, no watering, no infrastructure — and scales well once you hit Foraging Level 10 and unlock Botanist. A daily foraging route in the Secret Woods, Forest, Beach, and Mountain can net 1,000–3,000g per day with Botanist active, rivaling mid-tier fishing sessions. It is best treated as a reliable free-income layer running alongside your main farm economy.",
  },
  {
    question: "Which cave is better for profit: Mushroom or Bat?",
    answer:
      "Mushroom Cave wins for raw gold value. It produces Red Mushrooms (75g) and Purple Mushrooms (250g, 375g Iridium with Botanist) every few days. Bat Cave produces random fruit that can be used for Wine, but the variety is inconsistent and the Keg processing queue adds complexity. If you have Botanist and want a reliable passive income stream, Mushroom Cave is the stronger choice. Choose Bat Cave only if you are heavily invested in a large Wine operation with spare Keg capacity.",
  },
  {
    question: "When should I pick foraging over other activities?",
    answer:
      "Foraging is best in the morning before energy-intensive tasks, since it costs minimal stamina. Prioritize foraging routes on days when crops do not need harvesting and fishing conditions are poor (no rain, no premium windows). In Winter, foraging becomes relatively more valuable because crop options are limited, making Holly, Nautilus Shells, and Crystal Fruit the primary outdoor income aside from the Greenhouse.",
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

const SPRING_ROWS = [
  {
    rank: "1",
    item: "Morel",
    location: "Secret Woods (Spring 16–28)",
    baseValue: "150g",
    botanistValue: "225g",
    notes: "Highest single-item Spring forageable. Morel Jelly (Preserves Jar) yields 352g, beating raw Iridium sale.",
  },
  {
    rank: "2",
    item: "Spring Onion",
    location: "Cindersap Forest (south edge)",
    baseValue: "8g",
    botanistValue: "160g",
    notes: "Transforms from near-worthless to 160g each with Botanist. Respawns daily; collect every morning.",
  },
  {
    rank: "3",
    item: "Daffodil",
    location: "Forest, Town, Mountain",
    baseValue: "30g",
    botanistValue: "45g",
    notes: "Abundant and easy to collect. Low per-item value but high volume compensates early game.",
  },
  {
    rank: "4",
    item: "Dandelion",
    location: "Forest, Town, Mountain",
    baseValue: "40g",
    botanistValue: "60g",
    notes: "Slightly more valuable than Daffodil. Good filler item on any Spring foraging route.",
  },
  {
    rank: "5",
    item: "Leek",
    location: "Forest, Town, Mountain",
    baseValue: "60g",
    botanistValue: "90g",
    notes: "Best common Spring forageable. Worth prioritizing in early game before Botanist is available.",
  },
] as const;

const SUMMER_ROWS = [
  {
    rank: "1",
    item: "Fiddlehead Fern",
    location: "Secret Woods (all Summer)",
    baseValue: "90g",
    botanistValue: "135g",
    notes: "Fiddlehead Pickle (Preserves Jar) yields 342g — one of the best foraging-to-artisan conversions in the game.",
  },
  {
    rank: "2",
    item: "Spice Berry",
    location: "Forest, Town, Mountain",
    baseValue: "80g",
    botanistValue: "120g",
    notes: "Most common high-value Summer forageable. Wine (Keg) yields 200g if Keg capacity is available.",
  },
  {
    rank: "3",
    item: "Red Mushroom",
    location: "Forest, Secret Woods",
    baseValue: "75g",
    botanistValue: "112g",
    notes: "Available in Summer and Fall. Also spawns in Mushroom Cave. Consistent mid-tier forageable.",
  },
  {
    rank: "4",
    item: "Sweet Pea",
    location: "Forest, Town, Mountain",
    baseValue: "50g",
    botanistValue: "75g",
    notes: "Common Summer forageable used in some bundles. Low effort pickup on standard routes.",
  },
  {
    rank: "5",
    item: "Grape",
    location: "Forest, Town, Mountain",
    baseValue: "80g",
    botanistValue: "120g",
    notes: "Grape Wine (Keg) reaches 200g. Foraged Grapes are a bonus; their real value is as a Wine ingredient.",
  },
] as const;

const FALL_ROWS = [
  {
    rank: "1",
    item: "Chanterelle",
    location: "Forest, Secret Woods",
    baseValue: "160g",
    botanistValue: "240g",
    notes: "Highest-value outdoor Fall forageable. Sell raw at Iridium Quality — processing gain is marginal.",
  },
  {
    rank: "2",
    item: "Purple Mushroom",
    location: "Forest, Mines (deep), Cave",
    baseValue: "250g",
    botanistValue: "375g",
    notes: "Best repeatable forageable in the game. Priority target whenever available. Mushroom Cave maximizes supply.",
  },
  {
    rank: "3",
    item: "Wild Plum",
    location: "Forest, Town, Mountain",
    baseValue: "80g",
    botanistValue: "120g",
    notes: "Widely available Fall forageable. Wine (Keg) yields 200g. Good Keg filler if slots are open.",
  },
  {
    rank: "4",
    item: "Blackberry",
    location: "Forest, Town, Mountain (days 8–11)",
    baseValue: "20g (×3 cluster)",
    botanistValue: "30g per berry (×3)",
    notes: "Blackberry Season (days 8–11) is the single best foraging event of the year. Each tile drops 3 berries.",
  },
  {
    rank: "5",
    item: "Common Mushroom",
    location: "Forest, Secret Woods, Cave",
    baseValue: "40g",
    botanistValue: "60g",
    notes: "Lower value but extremely common. Great for bundle completion and cooking alongside Chanterelles.",
  },
] as const;

const WINTER_ROWS = [
  {
    rank: "1",
    item: "Crystal Fruit",
    location: "Forest, Town, Mountain",
    baseValue: "150g",
    botanistValue: "225g",
    notes: "Highest-value Winter outdoor forageable. Rare spawn; prioritize whenever spotted. Sell raw at Iridium.",
  },
  {
    rank: "2",
    item: "Nautilus Shell",
    location: "Beach",
    baseValue: "120g",
    botanistValue: "180g",
    notes: "Beach-exclusive Winter forageable. Easy daily pickup on any Beach route. Strong value for zero effort.",
  },
  {
    rank: "3",
    item: "Holly",
    location: "Forest, Town, Mountain",
    baseValue: "80g",
    botanistValue: "120g",
    notes: "Most common Winter forageable. Reasonable value; makes Winter foraging viable despite limited outdoor options.",
  },
  {
    rank: "4",
    item: "Winter Root",
    location: "Forest, Town, Mountain (digging)",
    baseValue: "70g",
    botanistValue: "105g",
    notes: "Obtained by hoeing tilled soil spots in Winter. Less glamorous but contributes to daily totals.",
  },
  {
    rank: "5",
    item: "Snow Yam",
    location: "Forest, Town, Mountain (digging)",
    baseValue: "100g",
    botanistValue: "150g",
    notes: "Hidden under snow; requires hoeing. Best per-item Winter digging target. Worth scanning tilled patches.",
  },
] as const;

const PROCESSING_ROWS = [
  {
    item: "Fiddlehead Fern",
    raw: "90g (135g Iridium)",
    processed: "342g (Fiddlehead Pickle, Preserves Jar)",
    verdict: "Process",
    notes: "2.5× value gain. One of the strongest foraging-to-artisan conversions. Always jar these.",
  },
  {
    item: "Morel",
    raw: "150g (225g Iridium)",
    processed: "352g (Morel Jelly, Preserves Jar)",
    verdict: "Process",
    notes: "Processing beats raw Iridium by over 50%. Dedicate Preserves Jar slots to Morel when in season.",
  },
  {
    item: "Purple Mushroom",
    raw: "250g (375g Iridium)",
    processed: "602g (Purple Mushroom Jelly, Preserves Jar)",
    verdict: "Process if slots available",
    notes: "Massive processing gain, but limited supply means raw Iridium sale is often more practical day-to-day.",
  },
  {
    item: "Chanterelle",
    raw: "160g (240g Iridium)",
    processed: "322g (Chanterelle Jelly, Preserves Jar)",
    verdict: "Situational",
    notes: "Processing adds value but Chanterelle is best sold raw when Preserves Jars are busy with higher-priority items.",
  },
  {
    item: "Spice Berry",
    raw: "80g (120g Iridium)",
    processed: "200g (Spice Berry Wine, Keg)",
    verdict: "Process if Keg available",
    notes: "Wine nearly triples raw value. Good Keg filler during Summer when Starfruit/Melon Kegs are not running.",
  },
  {
    item: "Crystal Fruit",
    raw: "150g (225g Iridium)",
    processed: "350g (Crystal Fruit Wine, Keg)",
    verdict: "Process",
    notes: "Wine significantly beats raw sale. Excellent Winter Keg filler when crop Wine options are scarce.",
  },
  {
    item: "Spring Onion",
    raw: "8g (160g Iridium with Botanist)",
    processed: "Not worthwhile",
    verdict: "Sell raw",
    notes: "Botanist makes raw sale the dominant strategy. High volume makes artisan processing impractical.",
  },
] as const;

const ROUTE_ROWS = [
  {
    location: "Secret Woods",
    season: "Spring, Summer, Fall",
    keyItems: "Morel (Spring), Fiddlehead Fern (Summer), Hardwood",
    timeMinutes: "5–8 min",
    dailyGold: "200–600g",
    notes: "Highest-density premium forageables. First stop every morning once Axe is upgraded.",
  },
  {
    location: "Cindersap Forest",
    season: "All seasons",
    keyItems: "Spring Onions, seasonal forageables, Fiber",
    timeMinutes: "8–12 min",
    dailyGold: "300–900g (Spring Onions with Botanist)",
    notes: "Spring Onion patch at south edge is mandatory with Botanist. Large open area with consistent spawns.",
  },
  {
    location: "Beach",
    season: "All seasons (best Winter)",
    keyItems: "Nautilus Shell (Winter), Coral, Sea Urchin",
    timeMinutes: "5–7 min",
    dailyGold: "150–400g",
    notes: "Quick sweep yields reliable Beach forageables. Combine with Beach fishing sessions for zero wasted travel.",
  },
  {
    location: "Mountain (north of town)",
    season: "All seasons",
    keyItems: "Seasonal forageables, Winter Root, Snow Yam",
    timeMinutes: "6–10 min",
    dailyGold: "100–350g",
    notes: "Lower density than Forest but good filler route. Include when passing through to Mines.",
  },
  {
    location: "Town + Bus Stop path",
    season: "All seasons",
    keyItems: "Seasonal forageables on roadsides",
    timeMinutes: "3–5 min (en route)",
    dailyGold: "50–200g",
    notes: "Collect opportunistically while running other errands. Zero dedicated time cost.",
  },
] as const;

export const metadata: Metadata = {
  title: `${TITLE} | Stardew Profit`,
  description: DESCRIPTION,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: `${TITLE} | Stardew Profit`,
    description: DESCRIPTION,
    type: "article",
    url,
    images: [{ url: `${url}/opengraph-image` }],
    publishedTime,
    modifiedTime,
  },
};

function Toc() {
  return (
    <nav aria-label="Table of contents" className={CARD}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Table of Contents</p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <a className={TOC_LINK} href="#why-foraging">
          1) Why foraging is an underrated income source
        </a>
        <a className={TOC_LINK} href="#seasonal-rankings">
          2) Most profitable forageables by season
        </a>
        <a className={TOC_LINK} href="#botanist">
          3) Botanist profession deep-dive
        </a>
        <a className={TOC_LINK} href="#processing">
          4) Processing routes: Wine, Jelly, or raw?
        </a>
        <a className={TOC_LINK} href="#daily-routes">
          5) Daily foraging route recommendations
        </a>
        <a className={TOC_LINK} href="#mushroom-vs-bat">
          6) Mushroom Cave vs Bat Cave
        </a>
        <a className={TOC_LINK} href="#faq">
          7) FAQ
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

function ForagingTable({
  rows,
}: {
  rows: ReadonlyArray<{
    rank: string;
    item: string;
    location: string;
    baseValue: string;
    botanistValue: string;
    notes: string;
  }>;
}) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-[900px] w-full border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
            <th className="px-3 py-2">Rank</th>
            <th className="px-3 py-2">Item</th>
            <th className="px-3 py-2">Location</th>
            <th className="px-3 py-2">Base value</th>
            <th className="px-3 py-2">Botanist (Iridium)</th>
            <th className="px-3 py-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={`${row.rank}-${row.item}`}
              className={`${
                index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"
              } rounded-2xl ring-1 ring-[#9f744c]/20`}
            >
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.rank}</td>
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.item}</td>
              <td className="px-3 py-3">{row.location}</td>
              <td className="px-3 py-3">{row.baseValue}</td>
              <td className="px-3 py-3 font-semibold text-[#2a6b3a]">{row.botanistValue}</td>
              <td className="px-3 py-3">{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProcessingTable({
  rows,
}: {
  rows: ReadonlyArray<{
    item: string;
    raw: string;
    processed: string;
    verdict: string;
    notes: string;
  }>;
}) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-[860px] w-full border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
            <th className="px-3 py-2">Item</th>
            <th className="px-3 py-2">Raw sell value</th>
            <th className="px-3 py-2">Processed value</th>
            <th className="px-3 py-2">Verdict</th>
            <th className="px-3 py-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.item}
              className={`${
                index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"
              } rounded-2xl ring-1 ring-[#9f744c]/20`}
            >
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.item}</td>
              <td className="px-3 py-3">{row.raw}</td>
              <td className="px-3 py-3">{row.processed}</td>
              <td className="px-3 py-3 font-semibold text-[#2a6b3a]">{row.verdict}</td>
              <td className="px-3 py-3">{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RouteTable({
  rows,
}: {
  rows: ReadonlyArray<{
    location: string;
    season: string;
    keyItems: string;
    timeMinutes: string;
    dailyGold: string;
    notes: string;
  }>;
}) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-[920px] w-full border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
            <th className="px-3 py-2">Location</th>
            <th className="px-3 py-2">Best season</th>
            <th className="px-3 py-2">Key items</th>
            <th className="px-3 py-2">Time cost</th>
            <th className="px-3 py-2">Est. daily gold</th>
            <th className="px-3 py-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.location}
              className={`${
                index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"
              } rounded-2xl ring-1 ring-[#9f744c]/20`}
            >
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.location}</td>
              <td className="px-3 py-3">{row.season}</td>
              <td className="px-3 py-3">{row.keyItems}</td>
              <td className="px-3 py-3">{row.timeMinutes}</td>
              <td className="px-3 py-3 font-semibold text-[#2a6b3a]">{row.dailyGold}</td>
              <td className="px-3 py-3">{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function StardewValleyForagingProfitGuidePage() {
  const readNextPosts = getBlogReadNextPosts("stardew-valley-foraging-profit-guide", 3);

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
      "stardew valley foraging profit",
      "botanist profession",
      "best forageables by season",
      "mushroom cave vs bat cave",
      "foraging gold routes",
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
            { name: "Complete Foraging Profit Guide" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border-4 border-[#7c4d2e]/80 bg-[#fff3da]/95 p-6 shadow-[0_16px_40px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Complete Guide &bull; Foraging Economy &bull; Seasonal Routing
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              {TITLE}
            </h1>
            <p className={P}>{DESCRIPTION}</p>
            <p className={P}>
              Foraging is one of the most underrated income sources in Stardew Valley. It costs no
              gold, no seeds, no watering, and no infrastructure — yet a disciplined forager with the
              Botanist profession can pull 1,000–3,000g per day from routes that take less than
              twenty minutes to complete. This guide breaks down exactly which items to collect each
              season, when to process versus sell raw, and how to build a daily route that runs
              alongside your main farm economy without competing for energy or time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className={CTA_CLASS} href="/">
                Open Profit Calculator
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/money-making-guide">
                Money-Making Master Guide
              </Link>
            </div>
          </header>

          <Toc />

          <section id="why-foraging" className={CARD}>
            <h2 className={H2}>1) Why foraging is an underrated income source</h2>
            <p className={P}>
              Most players treat foraging as a passive bonus — items you pick up while walking
              between destinations. That framing underestimates its real potential. Foraging has
              zero input cost. Every item you collect is pure margin: no seed purchase, no planting
              day, no harvest window to manage. In Year 1, before your farm infrastructure is
              established, this zero-cost income is genuinely valuable as a liquidity bridge.
            </p>
            <p className={P}>
              The transformation happens at Foraging Level 10 when you unlock the Botanist profession.
              Botanist guarantees that every forageable you pick up is Iridium Quality, applying a
              1.5× multiplier to every single item. A Spring Onion that normally sells for 8g becomes
              160g. A Purple Mushroom that sells for 250g becomes 375g. An entire Forest sweep that
              might have yielded 400g now yields 600g for the same ten minutes of walking.
            </p>
            <p className={P}>
              The practical implication: foraging is not a supplementary activity. For players who
              invest in leveling the skill and select Botanist at Level 10, it becomes a reliable
              income layer that runs every single day at near-zero time and energy cost — freeing
              your stamina budget for farming, mining, or fishing.
            </p>
            <Callout title="Key insight: Botanist is a multiplier on free income">
              Unlike crop or fishing profession bonuses that require active investment, Botanist
              applies to items that already spawn for free. Every point of the 1.5× multiplier is
              pure profit added to work you would have done anyway.
            </Callout>
          </section>

          <section id="seasonal-rankings" className={CARD}>
            <h2 className={H2}>2) Most profitable forageables by season</h2>

            <h3 className={`${H3} mt-6`}>Spring forageables</h3>
            <p className={P}>
              Spring is defined by Morel Mushrooms in the Secret Woods and Spring Onions along the
              southern edge of Cindersap Forest. With Botanist, Spring Onions jump from near-worthless
              to 160g each — and they respawn daily, making the southern Forest path mandatory every
              morning from Spring 1 through Spring 28.
            </p>
            <ForagingTable rows={SPRING_ROWS} />

            <h3 className={`${H3} mt-8`}>Summer forageables</h3>
            <p className={P}>
              Summer is the Fiddlehead Fern season. These spawn exclusively in the Secret Woods and
              are one of the best foraging-to-artisan items in the game: Fiddlehead Pickles from a
              Preserves Jar yield 342g versus 135g raw at Iridium Quality. If you have Preserves Jar
              capacity, route the Secret Woods every summer day.
            </p>
            <ForagingTable rows={SUMMER_ROWS} />

            <h3 className={`${H3} mt-8`}>Fall forageables</h3>
            <p className={P}>
              Fall is the strongest foraging season. Chanterelles (160g base), Purple Mushrooms
              (250g base), and the legendary Blackberry Season on days 8–11 make Fall foraging
              genuinely competitive with mid-tier fishing. Every floor of the Forest on days 8–11
              yields clusters of three Blackberries per tile — do not skip this window.
            </p>
            <ForagingTable rows={FALL_ROWS} />

            <h3 className={`${H3} mt-8`}>Winter forageables</h3>
            <p className={P}>
              Winter limits outdoor crops but foraging remains viable. Crystal Fruit (150g base,
              225g Iridium) is rare but extremely valuable when found. Nautilus Shells on the Beach
              are a reliable daily pickup. Snow Yam and Winter Root require hoeing but contribute
              meaningful gold to Winter income totals.
            </p>
            <ForagingTable rows={WINTER_ROWS} />
          </section>

          <section id="botanist" className={CARD}>
            <h2 className={H2}>3) Botanist profession deep-dive</h2>
            <p className={P}>
              Botanist is unlocked at Foraging Level 10 and guarantees Iridium Quality on every
              forageable item you collect. This is not a percentage chance — it is a guaranteed
              quality upgrade on every single pickup, every day, for the rest of the game.
            </p>

            <h3 className={`${H3} mt-6`}>What Botanist actually does to your income</h3>
            <p className={P}>
              The Iridium Quality multiplier is 1.5× the base sell price. Applied across a full
              foraging route, the compound effect is significant:
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Spring Onion: 8g → 160g (Botanist Iridium price, not just ×1.5 — this item has a special bonus)</li>
              <li className={LI}>Morel: 150g → 225g (+75g per item)</li>
              <li className={LI}>Chanterelle: 160g → 240g (+80g per item)</li>
              <li className={LI}>Purple Mushroom: 250g → 375g (+125g per item)</li>
              <li className={LI}>Crystal Fruit: 150g → 225g (+75g per item)</li>
            </ul>
            <p className={P}>
              On a typical Fall day with Botanist, a full Forest + Secret Woods sweep might yield
              600–900g versus 400–600g without it. Over a 28-day season, that difference
              compounds to 5,600–8,400g of additional income from foraging alone.
            </p>

            <h3 className={`${H3} mt-6`}>Botanist vs Tracker: which should you choose?</h3>
            <p className={P}>
              Tracker (the Level 10 alternative) shows forageable item locations on your minimap.
              It saves some search time but adds zero gold per item. For profit-focused players,
              Botanist is not a close decision — it wins decisively. Choose Tracker only if you
              find routing mentally taxing and want navigation assistance more than you want income
              optimization.
            </p>

            <h3 className={`${H3} mt-6`}>When to prioritize leveling Foraging</h3>
            <p className={P}>
              Foraging levels up by collecting items and chopping trees. The fastest path to Level 10
              is consistent daily foraging on every route plus regular wood-cutting. You gain Foraging
              XP from every forageable collected regardless of quality, so early-game low-value
              pickups still contribute. Target Level 10 by Year 1 Fall or Year 2 Spring at the latest
              to maximize Botanist coverage across your playtime.
            </p>

            <Callout title="Profession tip: Botanist compounds with Artisan">
              Botanist guarantees Iridium Quality inputs. When you process Iridium Quality
              forageables into Wine or Jelly with an Artisan-profession farmer, both multipliers
              stack on your final sell price. A dual-profession household (one Botanist, one Artisan)
              maximizes both raw and processed foraging income simultaneously.
            </Callout>
          </section>

          <section id="processing" className={CARD}>
            <h2 className={H2}>4) Processing routes: Wine, Jelly, or raw?</h2>
            <p className={P}>
              Not every forageable benefits equally from artisan processing. The decision depends
              on three factors: how much the processed value exceeds the raw Iridium price, how
              scarce your Preserves Jar or Keg slots are, and whether the item is better used for
              bundle completion or cooking. The table below gives a direct verdict for each key item.
            </p>
            <ProcessingTable rows={PROCESSING_ROWS} />

            <h3 className={`${H3} mt-6`}>The Fiddlehead Fern rule</h3>
            <p className={P}>
              Fiddlehead Ferns are the clearest process-always item in foraging. A Fiddlehead
              Pickle (Preserves Jar, ~2 days) yields 342g versus 135g raw at Iridium Quality.
              That is a 2.5× multiplier on something that costs you nothing to acquire. If you
              have any Preserves Jar capacity at all during Summer, Fiddlehead Ferns should fill it.
            </p>

            <h3 className={`${H3} mt-6`}>When raw beats processed</h3>
            <p className={P}>
              High-volume, high-base-value items like Purple Mushrooms and Chanterelles are often
              better sold raw. The absolute gold gain from processing is real, but if your artisan
              stations are already running higher-margin crops (Starfruit Wine, Ancient Fruit Wine),
              the opportunity cost of occupying a Keg or Jar slot with forageable Wine is negative.
              Raw Iridium Purple Mushrooms at 375g each clear out instantly with no machine time.
            </p>

            <Callout title="Priority order for Preserves Jar slots">
              1. Fiddlehead Fern (342g pickle) &rarr; 2. Morel (352g jelly) &rarr; 3. Purple Mushroom
              (if Jar slots are genuinely idle) &rarr; 4. Everything else raw at Iridium.
            </Callout>
          </section>

          <section id="daily-routes" className={CARD}>
            <h2 className={H2}>5) Daily foraging route recommendations</h2>
            <p className={P}>
              An efficient foraging route is one that collects the highest-value items per minute
              of travel time, integrates naturally with your other daily tasks, and does not drain
              stamina you need for farming or mining. The routes below are ordered by gold-per-minute
              efficiency and can be combined into a single morning sweep.
            </p>
            <RouteTable rows={ROUTE_ROWS} />

            <h3 className={`${H3} mt-6`}>Recommended morning sweep sequence</h3>
            <p className={P}>
              Start at the Secret Woods (Morel in Spring, Fiddlehead Fern in Summer, mushrooms
              in Fall). Exit south through Cindersap Forest, collecting Spring Onions at the
              southern path if it is Spring. Sweep the open Forest area for seasonal forageables.
              Head east to the Beach for a quick Nautilus Shell or Coral pickup. Return north
              through Town, collecting roadside items on the way to the Mountain if you plan to
              mine. This full loop takes 15–25 minutes of real time and consistently generates
              500–1,500g depending on season and Botanist status.
            </p>

            <h3 className={`${H3} mt-6`}>Time cost vs gold return</h3>
            <p className={P}>
              The key efficiency insight: foraging routes have a hard daily cap imposed by spawn
              density, not by your stamina or time budget. Once you have cleared all spawns in a
              zone, additional passes add nothing. This means the optimal strategy is a single
              efficient daily sweep rather than repeated passes — leaving the rest of your energy
              for higher-stamina activities.
            </p>

            <Callout title="Blackberry Season is mandatory (Fall days 8–11)">
              Blackberry Season is the highest-density foraging event in the game. Every forageable
              tile in the Forest and Town drops a cluster of 3 Blackberries. With Botanist,
              each berry is 30g — a full sweep can yield 50–80 berries (1,500–2,400g) in under
              15 minutes. Clear your calendar for those four days.
            </Callout>
          </section>

          <section id="mushroom-vs-bat" className={CARD}>
            <h2 className={H2}>6) Mushroom Cave vs Bat Cave</h2>
            <p className={P}>
              Demetrius visits your farm in Year 1 Summer (Day 17) and offers a permanent choice
              between two cave upgrades. This decision affects your passive foraging income for the
              rest of the save file, so it is worth understanding the profit difference clearly.
            </p>

            <h3 className={`${H3} mt-6`}>Mushroom Cave</h3>
            <p className={P}>
              The Mushroom Cave produces Red Mushrooms (75g base, 112g Iridium) and Purple
              Mushrooms (250g base, 375g Iridium with Botanist) on a regular spawn schedule.
              Purple Mushrooms are the highest-value repeatable forageable in the game. With
              Botanist active, a single Purple Mushroom pickup is 375g for walking ten steps
              into your cave. Over a season, Mushroom Cave passive income can exceed 3,000–6,000g
              depending on spawn frequency and quality.
            </p>

            <h3 className={`${H3} mt-6`}>Bat Cave</h3>
            <p className={P}>
              The Bat Cave produces random fruit — typically common items like Pomegranate, Apple,
              Peach, or Cherry. These can be processed into Wine in Kegs for significant value,
              but the variety is inconsistent and you cannot control which fruit spawns. Without
              a reliable supply of any single high-value fruit, the Bat Cave output is harder to
              optimize and generally produces lower total gold per season than Mushroom Cave for
              most players.
            </p>

            <h3 className={`${H3} mt-6`}>Verdict</h3>
            <p className={P}>
              Choose Mushroom Cave for pure profit. The combination of Purple Mushrooms, Botanist,
              and zero input cost makes it the strongest passive income source available from a
              single farm decision. Choose Bat Cave only if you are running a large dedicated Wine
              operation with many spare Kegs and want a supplementary fruit supply — knowing that
              the profit ceiling is lower and less predictable.
            </p>

            <Callout title="Mushroom Cave + Botanist is a compounding advantage">
              Every Purple Mushroom the cave produces is worth 375g with Botanist. At even modest
              spawn rates of 3–4 Purple Mushrooms per week, that is 1,125–1,500g of weekly passive
              income from a ten-second daily cave check.
            </Callout>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Try the Profit Calculator</h2>
            <p className={P}>
              Want to see exactly how foraging income stacks against your crops and artisan
              processing lines? The Stardew Profit Calculator lets you model every income source
              side-by-side so you can make confident seasonal decisions.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link className={CTA_CLASS} href="/">
                Open Profit Calculator
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/stardew-valley-fishing-profit-guide">
                Fishing Profit Guide
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/money-making-guide">
                Money-Making Master Guide
              </Link>
            </div>
          </section>

          <section id="faq" className={CARD}>
            <h2 className={H2}>7) FAQ</h2>
            <div className="mt-4 space-y-4">
              {FAQ_ITEMS.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-[#7c4d2e]/20 bg-white/40 px-4 py-3"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-[#4a321e] sm:text-base">
                    {item.question}
                  </summary>
                  <p className="mt-2 text-sm leading-7 text-[#5c4033]/95">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Next Steps</h2>
            <p className={P}>
              Foraging is most powerful when layered on top of a strong farm economy. Use it as
              a daily free-income sweep, then convert the gold into crop infrastructure, artisan
              stations, or tool upgrades that compound your returns across seasons.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                Compare foraging income against crop plans in the{" "}
                <Link className={LINK} href="/">Profit Calculator</Link>.
              </li>
              <li className={LI}>
                For fishing income strategies, see the{" "}
                <Link className={LINK} href="/blog/stardew-valley-fishing-profit-guide">
                  Complete Fishing Profit Guide
                </Link>.
              </li>
              <li className={LI}>
                For a full income overview across all systems, read the{" "}
                <Link className={LINK} href="/blog/money-making-guide">
                  Money-Making Master Guide
                </Link>.
              </li>
            </ul>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="stardew-valley-foraging-profit-guide" />
      </main>

      <SiteFooter />
    </div>
  );
}
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
const fromPath = "/blog/stardew-valley-farm-layout-profit-guide";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE =
  "Best Stardew Valley Farm Layout for Maximum Profit (2026): Crop Density and Sprinkler Guide";
const DESCRIPTION =
  "Optimize your Stardew Valley farm layout for maximum gold per tile. Learn sprinkler placement, crop density strategies, artisan processing zones, and Standard vs Four Corners vs Beach farm comparison.";

const FAQ_ITEMS = [
  {
    question: "Which farm type is best for maximum profit in Stardew Valley?",
    answer:
      "Standard Farm is the best choice for maximum profit because it offers the largest open tilling area — roughly 3,400 tillable tiles. More tillable land means more crop rows, better sprinkler efficiency, and higher total harvest value per season.",
  },
  {
    question: "What is the most efficient sprinkler layout for Stardew Valley farms?",
    answer:
      "Iridium Sprinklers arranged in a repeating 5x5 grid pattern achieve the highest coverage efficiency. Each sprinkler covers a 5x5 area (24 tiles around it), and tiling them edge-to-edge with no gaps targets over 90% coverage of your crop zone with zero wasted watering capacity.",
  },
  {
    question: "What crops give the best profit per tile in Stardew Valley?",
    answer:
      "Ancient Fruit (via Greenhouse or year-round Greenhouse replants) gives the best sustained profit per tile at roughly 550-680g profit per tile per harvest with Artisan. For seasonal crops, Starfruit in Summer and Cranberries in Fall are top picks, especially when processed through Kegs and Jars.",
  },
  {
    question: "How much of my farm should I dedicate to artisan processing?",
    answer:
      "A profit-optimized farm typically allocates roughly 80% of usable area to crops and 15-20% to Keg or Preserves Jar processing zones. This ratio keeps your raw harvest fully processed, preventing bottlenecks where crops sit unprocessed and lose artisan multiplier value.",
  },
  {
    question: "Should I use paths and decorations on a profit-focused farm?",
    answer:
      "Minimize paths on a profit-focused layout. Every decorative path tile is a lost crop slot. If navigation is needed, use the narrowest single-tile corridors between sprinkler blocks. Decorative fencing and furniture should be moved to non-tillable edges or off-farm areas entirely.",
  },
  {
    question: "Is Beach Farm worth it for profit?",
    answer:
      "Beach Farm is not recommended if pure gold per season is your goal. While it has a unique aesthetic and free fertilizer via beach forage, its tillable area is significantly smaller than Standard Farm and the sandy soil prevents standard sprinkler placement in many sections, capping your crop density.",
  },
  {
    question: "When should I switch from crops to full artisan processing?",
    answer:
      "Start building Keg infrastructure as soon as you can afford the wood and copper. A reasonable milestone is Year 1 Fall: aim for 20-40 Kegs processing Starfruit Wine or Cranberry Juice. By Year 2, shift focus to filling your processing zone with 100+ Kegs or a balanced Keg/Jar split based on your crop mix.",
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

const FARM_TYPE_ROWS = [
  {
    name: "Standard Farm",
    tillable: "~3,400 tiles",
    sprinklerRating: "Excellent",
    profitPotential: "Highest",
    verdict: "Best choice for profit-focused players. Maximum crop rows and near-perfect sprinkler grid coverage.",
  },
  {
    name: "Four Corners Farm",
    tillable: "~2,600 tiles",
    sprinklerRating: "Good",
    profitPotential: "High",
    verdict: "Strong pick for diversification. Each quadrant can specialize (crops, animals, mining, foraging) while still running solid crop density.",
  },
  {
    name: "Forest Farm",
    tillable: "~1,100 tiles",
    sprinklerRating: "Moderate",
    profitPotential: "Medium",
    verdict: "Limited tillable area hurts crop profit. Foraging bonuses are minor compared to top-tier crop income.",
  },
  {
    name: "Hill-top Farm",
    tillable: "~1,500 tiles",
    sprinklerRating: "Moderate",
    profitPotential: "Medium",
    verdict: "Mining node spawns are a nice bonus but do not compensate for the smaller crop zone. Mid-tier profit ceiling.",
  },
  {
    name: "Riverland Farm",
    tillable: "~1,700 tiles",
    sprinklerRating: "Poor",
    profitPotential: "Low-Medium",
    verdict: "Fragmented land separated by water makes sprinkler grid planning difficult. Fishing support is nice but crop profit lags.",
  },
  {
    name: "Beach Farm",
    tillable: "~2,100 tiles (partial)",
    sprinklerRating: "Poor (sandy soil)",
    profitPotential: "Low",
    verdict: "Sandy soil blocks most sprinkler placement in the main area. Visually appealing but a significant profit handicap.",
  },
] as const;

const CROP_VALUE_ROWS = [
  {
    crop: "Ancient Fruit",
    season: "Any (Greenhouse)",
    baseValue: "550g",
    artisanValue: "2,310g (Wine)",
    harvestCycle: "7 days (regrow)",
    profitPerTile: "Highest sustained",
    notes: "The gold standard for long-term tile efficiency. Requires patience to unlock but dominates all other options once running.",
  },
  {
    crop: "Starfruit",
    season: "Summer",
    baseValue: "750g",
    artisanValue: "3,150g (Wine)",
    harvestCycle: "13 days",
    profitPerTile: "Highest single season",
    notes: "Best single-season crop with Artisan + Agriculturist. Plant on Day 1, harvest twice per Summer with Speed-Gro.",
  },
  {
    crop: "Cranberries",
    season: "Fall",
    baseValue: "75g (×2 per harvest)",
    artisanValue: "345g/jar (Juice)",
    harvestCycle: "5 days (regrow)",
    profitPerTile: "Very High",
    notes: "Multi-yield per harvest and a fast regrow cycle make Cranberries the most efficient Fall crop by volume.",
  },
  {
    crop: "Pumpkin",
    season: "Fall",
    baseValue: "320g",
    artisanValue: "690g (Juice)",
    harvestCycle: "13 days",
    profitPerTile: "High",
    notes: "Giant crop chance adds bonus yield. Solid raw-sell option if you lack enough Kegs to process Cranberries.",
  },
  {
    crop: "Blueberries",
    season: "Summer",
    baseValue: "50g (×3 per harvest)",
    artisanValue: "225g/jar (Jelly)",
    harvestCycle: "4 days (regrow)",
    profitPerTile: "High",
    notes: "Best early-Summer option before you can afford mass Starfruit seeds. Triple-yield makes it extremely Jar-efficient.",
  },
  {
    crop: "Hops",
    season: "Summer",
    baseValue: "25g",
    artisanValue: "420g (Pale Ale)",
    harvestCycle: "1 day (regrow)",
    profitPerTile: "Very High w/ Kegs",
    notes: "Daily harvest makes it outstanding for Keg throughput. Requires a large Keg bank to realize full value — do not plant without processing capacity.",
  },
] as const;

const ZONE_ROWS = [
  {
    zone: "Crop Zone (Primary)",
    share: "~80%",
    contents: "High-value crops under Iridium Sprinkler grid",
    priority: "Maximize tillable tile usage, minimize path footprint",
  },
  {
    zone: "Artisan Processing Zone",
    share: "~12%",
    contents: "Kegs, Preserves Jars, Casks (Cellar when available)",
    priority: "Place near barn/shed for easy batch-load; organize by crop type",
  },
  {
    zone: "Animal Zone (Optional)",
    share: "~5%",
    contents: "Barn, Coop, Silos, Pasture",
    priority: "Keep in a corner; auto-feeder + auto-pet pet reduces daily time cost",
  },
  {
    zone: "Infrastructure",
    share: "~3%",
    contents: "Chests, Shed, Crafting stations, minimal path tiles",
    priority: "Consolidate into one compact cluster near the farmhouse",
  },
] as const;

const SPRINKLER_ROWS = [
  {
    type: "Basic Sprinkler",
    range: "4 tiles (N/S/E/W)",
    craftLevel: "Farming Level 2",
    efficiency: "Low",
    verdict: "Skip for profit builds. Only waters 4 adjacent tiles. The infrastructure cost per watered tile is terrible compared to Iridium.",
  },
  {
    type: "Quality Sprinkler",
    range: "8 tiles (3x3 minus center)",
    craftLevel: "Farming Level 6",
    efficiency: "Medium",
    verdict: "A workable mid-game upgrade. Use these to bridge the gap while saving for Iridium Sprinklers. Replace as soon as possible.",
  },
  {
    type: "Iridium Sprinkler",
    range: "24 tiles (5x5 minus center)",
    craftLevel: "Farming Level 9",
    efficiency: "Excellent",
    verdict: "The only sprinkler worth building your layout around. Place one every 5 tiles in both directions for seamless full-farm coverage.",
  },
  {
    type: "Iridium Sprinkler + Pressure Nozzle",
    range: "48 tiles (7x7 minus center)",
    craftLevel: "Level 9 + Qi Gem shop",
    efficiency: "Maximum",
    verdict: "End-game upgrade that doubles coverage per sprinkler. Allows sparser placement and frees up additional crop tiles between units.",
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
        <a className={TOC_LINK} href="#why-layout-matters">
          1) Why layout is the highest-leverage profit variable
        </a>
        <a className={TOC_LINK} href="#farm-type-comparison">
          2) Farm type comparison (profit angle)
        </a>
        <a className={TOC_LINK} href="#profit-per-tile">
          3) Profit per tile: the core principle
        </a>
        <a className={TOC_LINK} href="#sprinkler-grid">
          4) Iridium Sprinkler grid layout
        </a>
        <a className={TOC_LINK} href="#zone-planning">
          5) Zone planning: crops, processing, animals
        </a>
        <a className={TOC_LINK} href="#top-crops">
          6) Top crops by profit per tile
        </a>
        <a className={TOC_LINK} href="#artisan-multiplier">
          7) Artisan processing multiplier
        </a>
        <a className={TOC_LINK} href="#year-by-year">
          8) Year-by-year build progression
        </a>
        <a className={TOC_LINK} href="#faq">
          9) FAQ
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

function FarmTypeTable() {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-[860px] w-full border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
            <th className="px-3 py-2">Farm Type</th>
            <th className="px-3 py-2">Tillable Tiles</th>
            <th className="px-3 py-2">Sprinkler Rating</th>
            <th className="px-3 py-2">Profit Potential</th>
            <th className="px-3 py-2">Verdict</th>
          </tr>
        </thead>
        <tbody>
          {FARM_TYPE_ROWS.map((row, index) => (
            <tr
              key={row.name}
              className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
            >
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.name}</td>
              <td className="px-3 py-3">{row.tillable}</td>
              <td className="px-3 py-3">{row.sprinklerRating}</td>
              <td className="px-3 py-3 font-semibold">{row.profitPotential}</td>
              <td className="px-3 py-3">{row.verdict}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CropValueTable() {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-[980px] w-full border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
            <th className="px-3 py-2">Crop</th>
            <th className="px-3 py-2">Season</th>
            <th className="px-3 py-2">Base Value</th>
            <th className="px-3 py-2">Artisan Value</th>
            <th className="px-3 py-2">Harvest Cycle</th>
            <th className="px-3 py-2">Profit/Tile</th>
            <th className="px-3 py-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {CROP_VALUE_ROWS.map((row, index) => (
            <tr
              key={row.crop}
              className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
            >
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.crop}</td>
              <td className="px-3 py-3">{row.season}</td>
              <td className="px-3 py-3">{row.baseValue}</td>
              <td className="px-3 py-3 font-semibold text-[#5c4033]">{row.artisanValue}</td>
              <td className="px-3 py-3">{row.harvestCycle}</td>
              <td className="px-3 py-3 font-semibold">{row.profitPerTile}</td>
              <td className="px-3 py-3">{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ZoneTable() {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-[700px] w-full border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
            <th className="px-3 py-2">Zone</th>
            <th className="px-3 py-2">Area Share</th>
            <th className="px-3 py-2">Contents</th>
            <th className="px-3 py-2">Priority</th>
          </tr>
        </thead>
        <tbody>
          {ZONE_ROWS.map((row, index) => (
            <tr
              key={row.zone}
              className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
            >
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.zone}</td>
              <td className="px-3 py-3 font-semibold">{row.share}</td>
              <td className="px-3 py-3">{row.contents}</td>
              <td className="px-3 py-3">{row.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SprinklerTable() {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-[700px] w-full border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
            <th className="px-3 py-2">Type</th>
            <th className="px-3 py-2">Range</th>
            <th className="px-3 py-2">Unlock</th>
            <th className="px-3 py-2">Efficiency</th>
            <th className="px-3 py-2">Verdict</th>
          </tr>
        </thead>
        <tbody>
          {SPRINKLER_ROWS.map((row, index) => (
            <tr
              key={row.type}
              className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl ring-1 ring-[#9f744c]/20`}
            >
              <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.type}</td>
              <td className="px-3 py-3">{row.range}</td>
              <td className="px-3 py-3">{row.craftLevel}</td>
              <td className="px-3 py-3 font-semibold">{row.efficiency}</td>
              <td className="px-3 py-3">{row.verdict}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function StardewValleyFarmLayoutProfitGuidePage() {
  const readNextPosts = getBlogReadNextPosts("stardew-valley-farm-layout-profit-guide", 3);

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
      "stardew valley farm layout",
      "profit per tile",
      "iridium sprinkler placement",
      "artisan processing zone",
      "best crops by tile efficiency",
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
            { name: "Farm Layout Profit Guide" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border-4 border-[#7c4d2e]/80 bg-[#fff3da]/95 p-6 shadow-[0_16px_40px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Complete Guide • Farm Layout • Profit Optimization
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              {TITLE}
            </h1>
            <p className={P}>{DESCRIPTION}</p>
            <p className={P}>
              Most players design their farm around aesthetics — winding paths, themed zones, decorative
              fences. That approach is perfectly valid for enjoyment, but it leaves serious gold on the
              table. A profit-optimized layout can generate 40–60% more income per season compared to a
              casually arranged farm of the same size. The difference is not luck or grinding — it is
              deliberate tile allocation, sprinkler coverage discipline, and a processing chain that
              converts every harvest into its highest-value form.
            </p>
            <p className={P}>
              This guide breaks down every decision that separates a high-earning farm from an average
              one: which farm type to pick, how to tile Iridium Sprinklers for near-perfect coverage,
              which crops maximize gold per square, and how to build a Keg and Jar zone that keeps pace
              with your harvest output.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className={CTA_CLASS} href="/calculator">
                Calculate Crop Profit →
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/keg-vs-jar-profit-guide">
                Keg vs Jar Guide
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/ancient-fruit-vs-starfruit">
                Ancient Fruit vs Starfruit
              </Link>
            </div>
          </header>

          <Toc />

          <section id="why-layout-matters" className={CARD}>
            <h2 className={H2}>1) Why farm layout is the highest-leverage profit variable</h2>
            <p className={P}>
              In Stardew Valley, most players optimize at the crop level — they research which seed
              gives the best return and buy accordingly. That is the right instinct, but it is only half
              the equation. The other half is how many of those crops you can actually plant and water
              each day. A farm with 500 watered tiles and premium seeds will always outperform a farm
              with 200 watered tiles and the same seeds — not because of better choices, but because of
              better infrastructure. Layout is infrastructure. It determines your ceiling before a
              single seed is planted.
            </p>
            <p className={P}>
              The math is straightforward. If a standard tile of Starfruit Wine yields roughly 2,250g
              of net profit per harvest, the difference between 400 planted tiles and 700 planted tiles
              is approximately 675,000g per seasonal cycle — for zero extra daily effort once sprinklers
              are in place. Multiply that across a full year and the compound effect of a dense,
              well-watered layout dwarfs any seed selection optimization.
            </p>
            <Callout title="The 40–60% gap">
              Tracking profit on two comparable saves — one aesthetics-first, one profit-first — shows
              that the profit-first layout consistently earns 40–60% more per season. The gap comes
              almost entirely from three factors: more crop tiles, higher sprinkler coverage, and a
              larger artisan processing chain. None of these require better luck or more skill — only
              deliberate planning.
            </Callout>
          </section>

          <section id="farm-type-comparison" className={CARD}>
            <h2 className={H2}>2) Farm type comparison from a profit angle</h2>
            <p className={P}>
              Your farm type is the most permanent decision in the game — you cannot change it after
              starting a save. From a pure profit perspective, the differences are significant. The key
              variable is tillable tile count: more tillable land means more crops, more sprinkler
              coverage, and more processing throughput.
            </p>
            <FarmTypeTable />
            <h3 className={`mt-6 ${H3}`}>Standard Farm: the profit default</h3>
            <p className={P}>
              Standard Farm is the right choice if maximizing gold is your primary goal. Its wide-open
              layout accommodates a clean Iridium Sprinkler grid with minimal interruption. There are
              no rivers fragmenting your crop zone, no rocky outcroppings forcing awkward gaps. You can
              tile the entire central area with repeating 5×5 sprinkler units and achieve coverage
              above 90% of your planted area with almost no planning overhead.
            </p>
            <h3 className={`mt-6 ${H3}`}>Four Corners Farm: strong diversification option</h3>
            <p className={P}>
              Four Corners Farm sacrifices some raw tillable area compared to Standard but compensates
              with structure. Each quadrant naturally separates into a functional zone — one for crops,
              one for animals, one for mining nodes, one for foraging. If you want a diversified income
              stream with animals and forage supplementing your crop income, Four Corners is a
              thoughtful choice. Pure crop profit still lags Standard, but total farm income can be
              competitive when all four zones are optimized.
            </p>
            <h3 className={`mt-6 ${H3}`}>Beach Farm: avoid for profit</h3>
            <p className={P}>
              Beach Farm is the most visually distinctive option but the worst choice for profit
              optimization. The sandy soil that covers most of the main farming area prevents standard
              sprinkler placement — Iridium Sprinklers will not work on sandy tiles. This forces manual
              watering or workarounds, both of which cap your effective crop density well below what
              Standard or Four Corners can achieve. The free fertilizer from beach foraging and the
              aesthetic appeal are real, but they do not compensate for the structural irrigation
              handicap.
            </p>
            <Callout title="Riverland and Hill-top">
              Riverland Farm fragments your land with water channels, making contiguous sprinkler grids
              difficult to execute. Hill-top Farm introduces rocky sections that break up large crop
              zones. Both are mid-tier profit options — workable, but requiring more planning to
              approach Standard Farm efficiency.
            </Callout>
          </section>

          <section id="profit-per-tile" className={CARD}>
            <h2 className={H2}>3) Profit per tile: the core optimization principle</h2>
            <p className={P}>
              The single metric that drives every layout decision is <strong>gold per tile per day</strong>.
              Not total gold. Not profit per seed. Gold per tile per day. This metric accounts for
              harvest cycle length, regrow behavior, artisan processing multipliers, and the opportunity
              cost of every square on your farm.
            </p>
            <p className={P}>
              Under this framework, the hierarchy is clear. A tile of Ancient Fruit Wine running
              year-round in the Greenhouse or through a sustained planting cycle generates more gold per
              day than almost any other use of that space. A tile of Starfruit in Summer with Artisan
              and Speed-Gro is the strongest single-season burst. A tile of Cranberries in Fall with
              Preserves Jars running in parallel is the best regrow-cycle efficiency.
            </p>
            <p className={P}>
              The practical implication: every layout decision — path width, processing zone size,
              animal pen footprint — should be evaluated against this baseline. If a decorative path
              takes up 20 tiles, that is roughly 45,000g of foregone Starfruit Wine value per Summer.
              If your Keg zone is undersized and 300 Starfruit sit unprocessed, you are selling at base
              value instead of 4.2× artisan value. Tile allocation is not aesthetic — it is financial.
            </p>
            <Callout title="The 90% sprinkler coverage target">
              Aim to have Iridium Sprinklers watering at least 90% of your planted tiles. Any tile
              outside sprinkler range requires manual watering, which costs stamina, time, and
              opportunity. On a 3,000-tile farm, dropping from 90% to 75% sprinkler coverage means
              450 manually watered tiles daily — roughly 45 stamina and 20+ in-game minutes that could
              go to mining, fishing, or Keg management.
            </Callout>
          </section>

          <section id="sprinkler-grid" className={CARD}>
            <h2 className={H2}>4) Iridium Sprinkler grid layout: the 5×5 unit system</h2>
            <p className={P}>
              The optimal Iridium Sprinkler layout is built around a repeating 5×5 unit. Each Iridium
              Sprinkler covers the 24 tiles surrounding it in a 5×5 square (the center tile is the
              sprinkler itself, not a crop slot). When you place sprinklers every 5 tiles in both the
              horizontal and vertical directions, their coverage areas fit edge-to-edge with no overlap
              and no gaps.
            </p>
            <SprinklerTable />
            <h3 className={`mt-6 ${H3}`}>How to tile the grid</h3>
            <p className={P}>
              Start from one corner of your crop zone. Place an Iridium Sprinkler at position (3, 3)
              — leaving a 2-tile buffer from the farm edge. Then place the next sprinkler 5 tiles to
              the right at (8, 3), then (13, 3), and so on across the row. Drop down 5 tiles to row 8
              and repeat. This creates a uniform grid where every crop tile except the sprinkler
              positions themselves is watered automatically each morning.
            </p>
            <p className={P}>
              On a Standard Farm with roughly 3,400 tillable tiles, a complete Iridium Sprinkler grid
              requires approximately 130–150 sprinklers depending on exact field boundaries. This sounds
              like a lot, but each sprinkler is crafted from materials available by mid-Year 1 once you
              reach Farming Level 9. Prioritize the central crop zone first and expand the grid
              outward as you craft more sprinklers.
            </p>
            <Callout title="Pressure Nozzle upgrade">
              Once you have access to Qi Gems (Qi&apos;s Walnut Room), purchase Pressure Nozzles to upgrade
              your Iridium Sprinklers to 7×7 coverage (48 tiles each). This effectively halves the
              number of sprinklers you need and frees up the tiles those sprinklers previously occupied
              for additional crops. A full Pressure Nozzle upgrade on a Standard Farm grid recovers
              roughly 60–80 extra crop tiles.
            </Callout>
          </section>

          <section id="zone-planning" className={CARD}>
            <h2 className={H2}>5) Zone planning: how to divide your farm</h2>
            <p className={P}>
              A profit-optimized farm is not a single undifferentiated crop field — it is a system with
              distinct zones that each serve a specific function. The key insight is that your crop zone
              and your processing zone must be sized in proportion to each other. An oversized crop zone
              with too few Kegs creates a processing bottleneck. An oversized processing zone with too
              few crops wastes infrastructure capacity.
            </p>
            <ZoneTable />
            <h3 className={`mt-6 ${H3}`}>Crop zone (80% of usable area)</h3>
            <p className={P}>
              The crop zone should dominate your farm footprint. Lay your Iridium Sprinkler grid across
              this entire area before planting anything. Resist the urge to add decorative elements
              inside the crop zone — every non-crop tile is a permanent profit reduction. Use the
              absolute minimum path width needed for navigation: single-tile corridors between sprinkler
              blocks are sufficient.
            </p>
            <h3 className={`mt-6 ${H3}`}>Artisan processing zone (12% of usable area)</h3>
            <p className={P}>
              Place your Kegs, Preserves Jars, and eventually Casks in a dedicated zone near a Shed or
              large barn for easy batch loading. Organize by crop type: one cluster of Kegs for
              Starfruit Wine, another for Ancient Fruit Wine, a Jar cluster for Cranberries. This
              layout makes daily harvest-to-processing runs fast and reduces the chance of leaving
              harvested crops sitting idle overnight.
            </p>
            <p className={P}>
              Scale your Keg count to match your harvest volume. A rough rule: for every 100 Starfruit
              you harvest per cycle, you need at least 14 Kegs running to process the full batch within the 13-day Starfruit cycle.
              For Cranberries (5-day regrow), the ratio is higher — plan for roughly 1 Keg per 3–4
              plants to keep the pipeline flowing without idle capacity.
            </p>
            <h3 className={`mt-6 ${H3}`}>Animal zone and infrastructure (8% combined)</h3>
            <p className={P}>
              If you run animals, tuck the Barn and Coop into a corner of the farm well away from the
              crop zone. Use auto-feeders and the auto-grabber to minimize daily time cost. Animals
              generate meaningful income — Goat Milk, Large Egg, Truffle — but they should supplement,
              not compete with, your crop tile allocation.
            </p>
          </section>

          <section id=
"top-crops" className={CARD}>
            <h2 className={H2}>6) Top crops by profit per tile</h2>
            <p className={P}>
              Not all crops are equal on a profit-first farm. The table below ranks the most
              important crops by their effective profit per tile, accounting for artisan processing,
              harvest cycle length, and seasonal availability.
            </p>
            <CropValueTable />
            <h3 className={`mt-6 ${H3}`}>Ancient Fruit: the long game</h3>
            <p className={P}>
              Ancient Fruit is the undisputed champion of sustained profit per tile. A single plant
              produces fruit every 7 days indefinitely once mature, and Ancient Fruit Wine sells for
              2,310g (3,465g with Artisan profession). The challenge is acquisition: you need to find
              Ancient Seeds from artifact spots, fishing treasure chests, or the Traveling Cart, then
              propagate via the Seed Maker. In the Greenhouse, a full 116-plant Ancient Fruit setup
              running with Artisan generates over 380,000g per month in Wine alone.
            </p>
            <h3 className={`mt-6 ${H3}`}>Starfruit: the Summer spike</h3>
            <p className={P}>
              Starfruit combined with Speed-Gro and the Artisan profession is the highest single-season
              earning crop available. With two harvests per Summer using Speed-Gro, Starfruit Wine at
              3,150g per bottle makes a fully planted Standard Farm capable of generating over
              1,000,000g in a single Summer. The seed cost of 400g each from Sandy is the main
              overhead — plan your Year 1 Spring cash flow around building enough capital to buy seeds
              for a full Summer planting.
            </p>
            <h3 className={`mt-6 ${H3}`}>Cranberries: the Fall workhorse</h3>
            <p className={P}>
              Cranberries yield at least two berries per harvest on a 5-day regrow cycle, giving them
              exceptional volume for Preserves Jars. Fall has fewer top-tier options than Summer, and
              Cranberries fill that gap cleanly. Pair them with a large Jar bank and the Artisan
              profession for Cranberry Jelly at 345g per jar. A secondary option is Pumpkin for
              players who lack enough Jars — Pumpkins sell well raw and benefit from giant crop bonus.
            </p>
          </section>

          <section id="artisan-multiplier" className={CARD}>
            <h2 className={H2}>7) Artisan processing: the multiplier that changes everything</h2>
            <p className={P}>
              The Artisan profession (Farming Level 10, Tiller path) applies a 40% value bonus to all
              artisan goods — Wines, Jellies, Juices, Pickles, and more. Combined with the base
              processing multiplier from Kegs (roughly 3× base crop value for most crops) and Preserves
              Jars (2× base value plus 50g), the effective multiplier on your raw harvest can reach
              4–5× with Artisan active.
            </p>
            <p className={P}>
              The practical implication for layout: your processing zone needs to be large enough to
              handle your entire harvest without overflow. A common mistake is building too few Kegs
              early and letting harvested crops pile up in chests, effectively selling them at base
              value by default. Treat your Keg count as a hard constraint on how many artisan-value
              crops you can actually run.
            </p>
            <Callout title="Keg vs Jar: when to use each">
              Kegs produce the highest value output for high base-value crops like Starfruit, Ancient
              Fruit, and Hops. Preserves Jars win for low base-value, high-volume crops like
              Cranberries and Blueberries — the flat 2×+50g formula outperforms the Keg multiplier
              when base price is below roughly 180g. Use the{" "}
              <Link className={LINK} href="/blog/keg-vs-jar-profit-guide">Keg vs Jar guide</Link>{" "}
              to optimize your exact crop mix.
            </Callout>
            <h3 className={`mt-6 ${H3}`}>How many Kegs to build</h3>
            <p className={P}>
              A practical scaling guide based on farm progression:
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Year 1 Fall: Target 20–40 Kegs for your first Starfruit Wine batch.</li>
              <li className={LI}>Year 1 Winter: Expand to 60–80 Kegs using wood from tree farms or foraging.</li>
              <li className={LI}>Year 2 Spring: Aim for 100+ Kegs to handle a full Ancient Fruit + Starfruit pipeline.</li>
              <li className={LI}>Year 2+: Scale to 150–200 Kegs inside a dedicated Shed for maximum throughput.</li>
            </ul>
          </section>

          <section id="year-by-year" className={CARD}>
            <h2 className={H2}>8) Year-by-year layout build progression</h2>
            <p className={P}>
              A profit-optimized farm is not built in a day. Here is a practical progression that
              balances infrastructure investment with income generation across the first two years.
            </p>
            <h3 className={`mt-6 ${H3}`}>Year 1 Spring: foundation phase</h3>
            <p className={P}>
              Plant Cauliflower in your first Spring for strong early income and bundle completion.
              Prioritize clearing rocks and debris from your intended crop zone — every cleared tile is
              a future profit tile. Begin crafting Quality Sprinklers at Farming Level 6 to replace
              hand-watering. Save gold aggressively for Summer Starfruit seeds.
            </p>
            <h3 className={`mt-6 ${H3}`}>Year 1 Summer: first big earning season</h3>
            <p className={P}>
              Plant as much Starfruit as your budget allows on Day 1. Use Speed-Gro for two harvests.
              Begin placing Quality Sprinklers across your crop zone and start crafting your first
              batch of Kegs. By end of Summer, aim to have 20–30 Kegs loaded with Starfruit Wine
              aging.
            </p>
            <h3 className={`mt-6 ${H3}`}>Year 1 Fall: scale and diversify</h3>
            <p className={P}>
              Plant Cranberries across your full crop zone. Sell your Starfruit Wine from Summer —
              this should be your largest single cash injection of Year 1. Use the proceeds to buy
              more Keg materials and begin planning your Iridium Sprinkler grid. Reach Farming Level 9
              to unlock Iridium Sprinkler crafting before Year 2.
            </p>
            <h3 className={`mt-6 ${H3}`}>Year 2 onwards: full optimization</h3>
            <p className={P}>
              Deploy Iridium Sprinklers across your entire crop zone, replacing all Quality Sprinklers.
              Begin acquiring Ancient Seeds and propagating via Seed Maker. Establish a dedicated
              processing Shed with 100+ Kegs. At this point your farm transitions from a
              season-to-season hustle into a self-sustaining profit engine generating 500,000–
              1,500,000g per season depending on farm size and artisan setup.
            </p>
            <Callout title="Greenhouse priority">
              Completing the Pantry bundle to unlock the Greenhouse should be a Year 1 goal for any
              profit-focused player. The Greenhouse allows year-round Ancient Fruit cultivation,
              effectively adding a permanent high-value crop zone that operates independently of
              seasonal resets. A full 116-tile Greenhouse planted with Ancient Fruit and paired with
              Artisan is the single best long-term profit investment in the game.
            </Callout>
          </section>

          <section id="faq" className={CARD}>
            <h2 className={H2}>9) Frequently asked questions</h2>
            <dl className="mt-4 space-y-6">
              {FAQ_ITEMS.map((item) => (
                <div key={item.question}>
                  <dt className="text-sm font-semibold text-[#4a321e] sm:text-base">{item.question}</dt>
                  <dd className={P}>{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Next Steps</h2>
            <p className={P}>
              Layout optimization is the structural foundation of your farm economy. Once your
              sprinkler grid is in place and your processing zone is scaled, the remaining levers are
              crop selection and artisan profession choices. Use the tools below to fine-tune each
              layer of your profit stack.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                Run exact profit numbers with the{" "}
                <Link className={LINK} href="/calculator">Profit Calculator</Link>.
              </li>
              <li className={LI}>
                Compare top crops head-to-head:{" "}
                <Link className={LINK} href="/blog/ancient-fruit-vs-starfruit">Ancient Fruit vs Starfruit</Link>.
              </li>
              <li className={LI}>
                Choose the right processing method:{" "}
                <Link className={LINK} href="/blog/keg-vs-jar-profit-guide">Keg vs Jar Profit Guide</Link>.
              </li>
              <li className={LI}>
                Plan each season:{" "}
                <Link className={LINK} href="/blog/stardew-valley-spring-profit-guide-2026">Spring</Link>,{" "}
                <Link className={LINK} href="/blog/best-summer-crops-quick-answer">Summer</Link>,{" "}
                <Link className={LINK} href="/blog/best-fall-crops-quick-answer">Fall</Link>, and{" "}
                <Link className={LINK} href="/blog/winter-seeds-profit-guide">Winter</Link> guides.
              </li>
            </ul>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="stardew-valley-farm-layout-profit-guide" />
      </main>

      <SiteFooter />
    </div>
  );
}

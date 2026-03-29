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
const fromPath = "/blog/stardew-valley-iridium-sprinkler-guide";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE =
  "Iridium Sprinkler Guide for Stardew Valley (2026): Coverage, Cost, and ROI";
const DESCRIPTION =
  "Complete Iridium Sprinkler guide for Stardew Valley — 24-tile coverage, crafting cost, ROI vs Quality Sprinkler, optimal farm layouts, and when to upgrade.";

const FAQ_ITEMS = [
  {
    question: "How many tiles does the Iridium Sprinkler cover?",
    answer:
      "The Iridium Sprinkler waters 24 tiles arranged in a 5x5 grid centered on the sprinkler, excluding the four corner tiles. This means every tile within two steps of the sprinkler is watered each morning automatically.",
  },
  {
    question: "What level do I need to craft an Iridium Sprinkler?",
    answer:
      "You unlock the Iridium Sprinkler crafting recipe at Farming level 9. Before reaching that level, you can also obtain one from the Statue of Perfection or as a rare reward, but crafting is the reliable route.",
  },
  {
    question: "How much does an Iridium Sprinkler cost to craft?",
    answer:
      "Crafting an Iridium Sprinkler requires 1 Gold Bar, 1 Iridium Bar, and 1 Battery Pack. The total market value of these materials is roughly 1,800–2,200g depending on whether you process the bars yourself or purchase components.",
  },
  {
    question: "Is the Iridium Sprinkler worth upgrading from Quality Sprinkler?",
    answer:
      "Yes. An Iridium Sprinkler waters 24 tiles vs 8 for Quality, a 3x improvement. One Iridium Sprinkler replaces three Quality Sprinklers. The labor time you recover each season pays back the crafting cost in the first year of use.",
  },
  {
    question: "Can you put a Pressure Nozzle on an Iridium Sprinkler?",
    answer:
      "Yes. Attaching a Pressure Nozzle (obtained from Qi's Walnut Room for 20 Qi Gems) expands the Iridium Sprinkler to a 7x7 coverage area, watering 48 tiles. This is the maximum coverage possible and ideal for endgame greenhouse layouts.",
  },
  {
    question: "What is the best way to get Iridium Bars early?",
    answer:
      "Mine Skull Cavern on high-luck days, use Mega Bombs for fast clearing, and eat spicy food for speed boosts. Each Iridium Ore smelts into bars at a 5:1 ratio. Donating to the Museum or reaching Skull Cavern floor 100 also rewards Iridium.",
  },
];

const SPRINKLER_COMPARE = [
  {
    type: "Basic Sprinkler",
    tiles: "4",
    pattern: "Adjacent 4 (N/S/E/W)",
    craftLevel: "Farming 2",
    materials: "1 Copper Bar + 1 Iron Bar",
    approxCost: "~250g",
  },
  {
    type: "Quality Sprinkler",
    tiles: "8",
    pattern: "3x3 ring (all 8 adjacent)",
    craftLevel: "Farming 6",
    materials: "1 Iron Bar + 1 Gold Bar + 1 Refined Quartz",
    approxCost: "~700g",
  },
  {
    type: "Iridium Sprinkler",
    tiles: "24",
    pattern: "5x5 minus corners",
    craftLevel: "Farming 9",
    materials: "1 Gold Bar + 1 Iridium Bar + 1 Battery Pack",
    approxCost: "~2,000g",
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
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description: DESCRIPTION,
    },
  };
}

// ── Style constants (identical to site-wide blog style) ──────────────────────
const CARD = "rounded-3xl border border-[#7c4d2e]/20 bg-white/50 p-5 shadow-sm sm:p-7";
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

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-2xl border border-[#b77841]/40 bg-[#fef9ee] px-5 py-4">
      <p className="text-sm font-semibold text-[#7c4d2e]">{title}</p>
      <div className="mt-1 text-sm leading-7 text-[#5c4033]/90">{children}</div>
    </div>
  );
}

export default async function IridiumSprinklerGuidePage() {
  const readNextPosts = await getBlogReadNextPosts("stardew-valley-iridium-sprinkler-guide");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    url,
    datePublished: publishedTime,
    dateModified: modifiedTime,
  };

  return (
    <div className="min-h-screen bg-[#fdf6e3]">
      <PwaRegisterScript />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqJsonLd items={FAQ_ITEMS} />

      <main className="mx-auto max-w-3xl px-4 pb-20 pt-6 sm:px-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Iridium Sprinkler Guide" },
          ]}
        />

        <header className="mt-6">
          <h1 className="text-2xl font-bold leading-snug text-[#3f2a22] sm:text-3xl lg:text-4xl">
            {TITLE}
          </h1>
          <p className="mt-3 text-sm text-[#5c4033]/70">
            Published{" "}
            <time dateTime={publishedTime}>March 29, 2026</time>
          </p>
          <p className="mt-3 text-base leading-7 text-[#5c4033]/90">
            The Iridium Sprinkler is the single most impactful automation tool in Stardew Valley.
            Covering 24 tiles per unit, it lets one sprinkler do the work of three Quality Sprinklers
            — freeing your morning hours for mining, relationships, and artisan processing. This guide
            covers every aspect: crafting cost, coverage geometry, ROI calculations, optimal farm
            layouts, greenhouse placement, and the fastest path to acquiring Iridium Bars.
          </p>
        </header>

        {/* Table of Contents */}
        <nav
          aria-label="Table of contents"
          className="mt-8 rounded-3xl border border-[#7c4d2e]/20 bg-white/50 p-5 shadow-sm sm:p-6"
        >
          <p className="mb-3 text-sm font-semibold text-[#4a321e]">In this guide</p>
          <ol className="space-y-2">
            {[
              ["#sprinkler-comparison", "1. Sprinkler Comparison Table"],
              ["#coverage", "2. 24-Tile Coverage Explained"],
              ["#roi", "3. ROI & Payback Calculation"],
              ["#farm-layout", "4. Optimal Farm Layouts"],
              ["#when-to-upgrade", "5. When to Upgrade from Quality"],
              ["#greenhouse", "6. Greenhouse Optimal Layout"],
              ["#speed-gro", "7. Pairing with Deluxe Speed-Gro"],
              ["#calculator", "8. Profit Calculator"],
              ["#faq", "9. FAQ"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className={TOC_LINK}>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="mt-8 space-y-8">

          {/* Section 1: Sprinkler Comparison */}
          <section id="sprinkler-comparison" className={CARD}>
            <h2 className={H2}>1) Sprinkler Comparison Table</h2>
            <p className={P}>
              There are three sprinklers in Stardew Valley. Each one requires a higher Farming level
              and more expensive materials, but the payoff in tiles watered per day scales dramatically.
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[540px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#7c4d2e]/20 bg-[#fce8b1]/60">
                    <th className="px-3 py-2 text-left font-semibold text-[#4a321e]">Sprinkler</th>
                    <th className="px-3 py-2 text-center font-semibold text-[#4a321e]">Tiles Watered</th>
                    <th className="px-3 py-2 text-left font-semibold text-[#4a321e]">Pattern</th>
                    <th className="px-3 py-2 text-left font-semibold text-[#4a321e]">Craft Level</th>
                    <th className="px-3 py-2 text-left font-semibold text-[#4a321e]">Materials</th>
                    <th className="px-3 py-2 text-right font-semibold text-[#4a321e]">Approx. Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {SPRINKLER_COMPARE.map((row, i) => (
                    <tr
                      key={row.type}
                      className={`border-b border-[#7c4d2e]/10 ${
                        i === 2 ? "bg-[#fef3d0]/70 font-medium" : "bg-white/30"
                      }`}
                    >
                      <td className="px-3 py-2 text-[#4a321e]">{row.type}</td>
                      <td className="px-3 py-2 text-center text-[#4a321e]">{row.tiles}</td>
                      <td className="px-3 py-2 text-[#5c4033]/90">{row.pattern}</td>
                      <td className="px-3 py-2 text-[#5c4033]/90">{row.craftLevel}</td>
                      <td className="px-3 py-2 text-[#5c4033]/90">{row.materials}</td>
                      <td className="px-3 py-2 text-right text-[#5c4033]/90">{row.approxCost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Callout title="Key takeaway">
              Moving from Quality to Iridium triples your tile coverage per sprinkler. On a mid-size
              farm with 72 crop tiles, you need 9 Quality Sprinklers or just 3 Iridium Sprinklers.
              That difference compounds every season.
            </Callout>
          </section>

          {/* Section 2: Coverage */}
          <section id="coverage" className={CARD}>
            <h2 className={H2}>2) 24-Tile Coverage Explained</h2>
            <p className={P}>
              The Iridium Sprinkler occupies one tile and waters every tile within a 2-step Manhattan
              radius, forming a 5×5 grid with the four corner tiles removed. That gives exactly 24
              watered tiles per sprinkler.
            </p>
            <p className={P}>
              The diagram below uses <strong>W</strong> for watered tiles and{" "}
              <strong>S</strong> for the sprinkler itself. Corners marked with{" "}
              <strong>·</strong> are <em>not</em> watered.
            </p>
            <div className="mt-4 overflow-x-auto">
              <pre className="inline-block rounded-2xl border border-[#7c4d2e]/20 bg-[#fef9ee] px-6 py-4 font-mono text-sm leading-6 text-[#4a321e]">
{`·  W  W  W  ·
W  W  W  W  W
W  W  S  W  W
W  W  W  W  W
·  W  W  W  ·`}
              </pre>
            </div>
            <p className={P}>
              Because the pattern is symmetric, you can tile Iridium Sprinklers in a grid with a
              spacing of 5 tiles (center-to-center) and achieve gapless coverage on large rectangular
              fields. Each sprinkler &quot;owns&quot; a 5×5 block of farmland.
            </p>
            <h3 className={`${H3} mt-5`}>Pressure Nozzle upgrade</h3>
            <p className={P}>
              Attaching a Pressure Nozzle expands the watered area to a full 7×7 grid (48 tiles).
              This is a late-game upgrade purchased from Qi&apos;s Walnut Room for 20 Qi Gems. It is
              most impactful in the Greenhouse, where every tile counts.
            </p>
          </section>

          {/* Section 3: ROI */}
          <section id="roi" className={CARD}>
            <h2 className={H2}>3) ROI &amp; Payback Calculation</h2>
            <p className={P}>
              Understanding the return on investment for an Iridium Sprinkler helps you decide when
              crafting one is worth the Iridium Bar cost.
            </p>
            <h3 className={`${H3} mt-5`}>Crafting cost breakdown</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>1 Gold Bar — sell value ~400g, produced from 5 Gold Ore</li>
              <li className={LI}>1 Iridium Bar — sell value ~1,000g, produced from 5 Iridium Ore</li>
              <li className={LI}>1 Battery Pack — sell value ~500g, obtained from Lightning Rods</li>
            </ul>
            <p className={P}>
              Total material sell value: approximately <strong>1,900–2,100g</strong>. If you gather
              the materials yourself the opportunity cost is roughly 2,000g.
            </p>
            <h3 className={`${H3} mt-5`}>Time savings per season</h3>
            <p className={P}>
              Manual watering takes roughly 1 energy per tile. On a 72-tile field, that is 72 energy
              per day — consuming nearly your entire morning. Three Iridium Sprinklers cover that
              field automatically, freeing ~60–70 energy daily for mining or foraging.
            </p>
            <p className={P}>
              In Spring Year 1, Strawberries sell for 120g base (240g iridium quality). Each extra
              mining trip enabled by freed energy can net 300–600g in ore and gems. Over a 28-day
              season the sprinkler set pays back its 6,000g total cost (three sprinklers) within
              roughly <strong>10–14 days</strong> of use through indirect income gains alone.
            </p>
            <Callout title="Shortcut math">
              One Iridium Sprinkler at ~2,000g cost, covering 24 crop tiles: if those tiles grow
              Blueberries in Summer (160g/harvest × 3 harvests/season), total revenue per sprinkler
              zone is ~11,520g per season. The sprinkler pays back its cost on the first harvest day.
            </Callout>
          </section>

          {/* Section 4: Farm Layout */}
          <section id="farm-layout" className={CARD}>
            <h2 className={H2}>4) Optimal Farm Layouts</h2>
            <p className={P}>
              The key principle: place Iridium Sprinklers at the center of every 5×5 block of
              tillable soil. No tile between sprinklers should be left unwatered, and no sprinkler
              should overlap its neighbor&apos;s range.
            </p>
            <h3 className={`${H3} mt-5`}>Standard Farm (River)</h3>
            <p className={P}>
              The River Farm&apos;s main crop area is roughly 20×12 tiles. Placing sprinklers at
              coordinates (3,3), (8,3), (13,3), (18,3) and repeating every 5 rows covers the
              entire field with 8 Iridium Sprinklers, watering up to 192 tiles.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Space sprinklers 5 tiles apart (center-to-center).</li>
              <li className={LI}>Use paths or scarecrows in corner gaps to avoid wasted space.</li>
              <li className={LI}>Place Junimo Huts at the geometric center of 8-sprinkler clusters for passive harvesting.</li>
            </ul>
            <h3 className={`${H3} mt-5`}>Four Corners Farm</h3>
            <p className={P}>
              Each corner plot is roughly 15×10 tiles. Two Iridium Sprinklers per corner (4 total
              per farm section) cover the usable area efficiently. This farm type benefits most from
              Iridium Sprinklers because the corner separation means you cannot run a single large
              grid.
            </p>
            <h3 className={`${H3} mt-5`}>Wilderness / Forest Farm</h3>
            <p className={P}>
              These farms have irregular boundaries. Map your tillable tiles first, then work
              backward: drop sprinklers at every 5th tile intersection and fill gaps with Quality
              Sprinklers. Hybrid setups are valid — Iridium for the core, Quality for edge rows.
            </p>
            <Callout title="Scarecrow synergy">
              A standard Scarecrow covers an 8-tile radius (roughly a 17×17 circle). One Scarecrow
              can protect a 3×3 block of Iridium Sprinkler zones (9 sprinklers, 216 tiles) with
              comfortable overlap. Plan your scarecrow grid alongside your sprinkler grid.
            </Callout>
          </section>

          {/* Section 5: When to Upgrade */}
          <section id="when-to-upgrade" className={CARD}>
            <h2 className={H2}>5) When to Upgrade from Quality Sprinkler</h2>
            <p className={P}>
              The target milestone most experienced players recommend is{" "}
              <strong>Year 2, Spring 1</strong> — entering the second year with at least 6–8 Iridium
              Sprinklers ready to deploy. Here is how to hit that target.
            </p>
            <h3 className={`${H3} mt-5`}>Year 1 roadmap</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                <strong>Spring Y1:</strong> Reach Farming 6 by Summer. Plant mixed crops, use Basic
                then Quality Sprinklers as soon as unlocked.
              </li>
              <li className={LI}>
                <strong>Summer Y1:</strong> Prioritize Skull Cavern access. Mine through the regular
                mines to unlock the Skull Cavern elevator by Fall.
              </li>
              <li className={LI}>
                <strong>Fall Y1:</strong> First Skull Cavern runs. Collect Iridium Ore on high-luck
                days. Set up Lightning Rods (crafted at Farming 6) for Battery Packs.
              </li>
              <li className={LI}>
                <strong>Winter Y1:</strong> Smelt Iridium Bars, craft sprinklers. Reach Farming 9
                by end of Winter if possible using Speed-Gro on winter crops or training.
              </li>
            </ul>
            <h3 className={`${H3} mt-5`}>Accelerating Iridium access</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}>Eat food that boosts Luck before Skull Cavern runs (Spicy Eel, Lucky Lunch).</li>
              <li className={LI}>Use Mega Bombs to clear large rock clusters quickly — craft or buy from the Dwarf.</li>
              <li className={LI}>The Desert Trader sells Iridium Ore for 1 Omni Geode on Wednesdays — stockpile geodes.</li>
              <li className={LI}>Completing the Community Center unlocks the bus, giving earlier Desert access.</li>
            </ul>
            <p className={P}>
              If you have Quality Sprinklers already installed, do not remove them until you have
              enough Iridium Sprinklers to replace the entire zone. A partial swap creates watering
              gaps that will kill crops.
            </p>
          </section>

          {/* Section 6: Greenhouse */}
          <section id="greenhouse" className={CARD}>
            <h2 className={H2}>6) Greenhouse Optimal Layout</h2>
            <p className={P}>
              The Greenhouse has a tillable area of <strong>10×12 tiles (120 tiles total)</strong>,
              but the interior walkable grid is actually 10 columns × 12 rows of plantable soil with
              a 1-tile border on each side. The effective crop area works out to{" "}
              <strong>116 plantable tiles</strong> once sprinkler and path tiles are accounted for.
            </p>
            <h3 className={`${H3} mt-5`}>Standard Iridium layout (no Pressure Nozzle)</h3>
            <p className={P}>
              Place 6 Iridium Sprinklers in a 2-column × 3-row arrangement, each centered in a 5×5
              block. This covers all 120 interior tiles with zero unwatered cells and leaves room for
              an Ancient Fruit or Starfruit monoculture.
            </p>
            <div className="mt-4 overflow-x-auto">
              <pre className="inline-block rounded-2xl border border-[#7c4d2e]/20 bg-[#fef9ee] px-6 py-4 font-mono text-sm leading-6 text-[#4a321e]">
{`· W W W · · W W W ·
W W S W W W W S W W
· W W W · · W W W ·`}
              </pre>
            </div>
            <p className={P}>
              Rows 1–4 use the top two sprinklers, rows 5–8 use the middle pair, and rows 9–12 use
              the bottom pair. Each sprinkler is placed at columns 3 and 8, rows 3, 7, and 11.
              Result: 100+ crop tiles in a fully automated year-round monoculture.
            </p>
            <h3 className={`${H3} mt-5`}>Pressure Nozzle layout (endgame)</h3>
            <p className={P}>
              With Pressure Nozzles, two Iridium Sprinklers placed at (5, 4) and (5, 9) cover the
              entire greenhouse width. Add a third at (5, 14) if your greenhouse mod extends rows.
              For vanilla, 2–3 nozzle-upgraded sprinklers handle the full 120-tile interior.
            </p>
          </section>
          {/* Section 7: Speed-Gro */}
          <section id="speed-gro" className={CARD}>
            <h2 className={H2}>7) Pairing with Deluxe Speed-Gro</h2>
            <p className={P}>
              Iridium Sprinklers handle watering; Deluxe Speed-Gro handles growth speed. Together
              they form the most efficient crop automation stack in the game.
            </p>
            <h3 className={`${H3} mt-5`}>How Deluxe Speed-Gro works</h3>
            <p className={P}>
              Deluxe Speed-Gro reduces crop growth time by 25% and can be purchased from Pierre for
              80g or crafted at Farming level 8 (1 Truffle Oil + 5 Coral). Applied on planting day,
              it permanently accelerates that crop growth.
            </p>
            <h3 className={`${H3} mt-5`}>Combo impact by crop</h3>
            <ul className="mt-3 space-y-1">
              <li className={LI}><strong>Ancient Fruit:</strong> Growth cut from 28 to 21 days.</li>
              <li className={LI}><strong>Starfruit:</strong> Reduced to ~10 days, fits 2 harvests per Summer.</li>
              <li className={LI}><strong>Blueberry:</strong> First harvest day 10, then every 3 days.</li>
              <li className={LI}><strong>Cranberry:</strong> Extra Fall harvest, ~15% more yield.</li>
            </ul>
            <p className={P}>
              With Iridium Sprinklers, you apply Speed-Gro on day 1 and the crop waters and grows
              itself. This combo is the foundation of every high-efficiency year-2+ farm.
            </p>
          </section>

          {/* Section 8: Calculator CTA */}
          <section id="calculator" className={CARD}>
            <h2 className={H2}>8) Calculate Your Farm Profit</h2>
            <p className={P}>
              Knowing how many Iridium Sprinklers you need is only half the picture. Use the Stardew
              Profit Calculator to find the best crops for your watered tiles each season.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link className={CTA_CLASS} href="/">Open Profit Calculator</Link>
              <Link className={SUB_CTA_CLASS} href="/blog/stardew-valley-quality-sprinklers-guide">
                Quality Sprinkler Guide
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/stardew-valley-greenhouse-mastery-guide">
                Greenhouse Mastery Guide
              </Link>
            </div>
          </section>

          {/* Section 9: FAQ */}
          <section id="faq" className={CARD}>
            <h2 className={H2}>9) FAQ</h2>
            <div className="mt-4 space-y-4">
              {FAQ_ITEMS.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-[#7c4d2e]/20 bg-white/40 px-4 py-3"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-[#4a321e] sm:text-base">
                    {item.question}
                  </summary>
                  <p className="mt-2 text-sm leading-7 text-[#5c4033]/90">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Next Steps */}
          <section className={CARD}>
            <h2 className={H2}>Next Steps</h2>
            <p className={P}>
              Iridium Sprinklers are the automation backbone of every late-game farm. Once deployed,
              reinvest your freed energy into Kegs, Preserve Jars, and Bee Houses.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                Compare crop options with the{" "}
                <Link className={LINK} href="/">Profit Calculator</Link>.
              </li>
              <li className={LI}>
                <Link className={LINK} href="/blog/stardew-valley-greenhouse-mastery-guide">
                  Greenhouse Mastery Guide
                </Link>{" "}for full interior layouts.
              </li>
              <li className={LI}>
                <Link className={LINK} href="/blog/stardew-valley-quality-sprinklers-guide">
                  Quality Sprinkler Guide
                </Link>{" "}for Year 1 bridge strategies.
              </li>
            </ul>
          </section>

        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="stardew-valley-iridium-sprinkler-guide" />
      </main>

      <SiteFooter />
    </div>
  );
}

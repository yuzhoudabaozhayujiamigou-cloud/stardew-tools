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
const fromPath = "/blog/stardew-valley-quality-sprinklers-guide";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE =
  "Quality Sprinkler Guide for Stardew Valley (2026): Coverage, ROI, and Profit Maximization";
const DESCRIPTION =
  "Complete guide to Quality Sprinklers in Stardew Valley — coverage patterns, crafting cost, ROI calculation, upgrade path to Iridium Sprinkler, and how sprinklers unlock profit scaling.";

const FAQ_ITEMS = [
  {
    question: "How many tiles does a Quality Sprinkler cover?",
    answer:
      "A Quality Sprinkler waters 8 tiles — all 8 squares surrounding it in a 3×3 grid, with the sprinkler occupying the center tile. This is double the coverage of a Basic Sprinkler (4 tiles in a cross pattern) and is the cornerstone of efficient mid-game farming.",
  },
  {
    question: "When should I upgrade from Basic to Quality Sprinkler?",
    answer:
      "Upgrade as soon as you hit Farming Level 6, which unlocks the Quality Sprinkler recipe. With consistent daily farming you can reach Level 6 by mid-Spring or early Summer of Year 1. The material cost (Iron Bar + Gold Bar + Refined Quartz) is easily covered by that point, and the efficiency gain is immediate.",
  },
  {
    question: "Is Iridium Sprinkler worth the cost?",
    answer:
      "Yes. The Iridium Sprinkler covers 24 tiles (a 5×5 area minus the four corners), replacing roughly three Quality Sprinklers. The Gold Bar + Iridium Bar + Battery Pack recipe makes it a Year 2 goal for most players, but the farm efficiency return is exceptional for large-scale crop operations.",
  },
  {
    question: "How do sprinklers affect my daily profit?",
    answer:
      "Sprinklers free the energy you would spend hand-watering. Each tile costs 2 energy to water manually. Automating irrigation frees 50–150+ energy per day, which you can redirect to mining, foraging, fishing, or socializing — all of which generate income. Conservatively, Quality Sprinklers add 500–2,000g per day in opportunity value.",
  },
  {
    question: "Can sprinklers water crops in the Greenhouse?",
    answer:
      "Yes. Sprinklers work identically in the Greenhouse. The plantable interior is 12×10 tiles, making it ideal for a Quality or Iridium Sprinkler grid. Since Greenhouse crops grow year-round, efficient coverage there has higher long-term value than seasonal outdoor fields.",
  },
  {
    question: "What is the best sprinkler layout for a standard farm?",
    answer:
      "For Quality Sprinklers, place one per 3×3 block in a repeating grid with no overlap. Clear land in rectangles divisible by 3 in both dimensions and place sprinklers at each block center. This results in zero wasted tiles within the cleared area.",
  },
  {
    question: "Can I use Pressure Nozzles with Quality Sprinklers?",
    answer:
      "Yes. A Pressure Nozzle attached to a Quality Sprinkler expands coverage from a 3×3 area (8 tiles) to a 5×5 area (24 tiles), matching Iridium Sprinkler output at far lower material cost. Pressure Nozzles come from the Traveling Cart or the Qi's Cuisine special order.",
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

const SPRINKLER_ROWS = [
  {
    name: "Basic Sprinkler",
    tiles: "4 (cross pattern)",
    unlock: "Farming Lv 2",
    recipe: "1 Copper Bar + 1 Iron Bar",
    cost: "~100g",
    best: "Early Year 1 stopgap",
  },
  {
    name: "Quality Sprinkler",
    tiles: "8 (3×3 grid)",
    unlock: "Farming Lv 6",
    recipe: "1 Iron Bar + 1 Gold Bar + 1 Refined Quartz",
    cost: "~450g",
    best: "Mid-game workhorse",
  },
  {
    name: "Iridium Sprinkler",
    tiles: "24 (5×5 minus corners)",
    unlock: "Farming Lv 10",
    recipe: "1 Gold Bar + 1 Iridium Bar + 1 Battery Pack",
    cost: "~2,000g+",
    best: "Late-game / Year 2+",
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
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
        Table of Contents
      </p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <a className={TOC_LINK} href="#why-sprinklers-matter">1) Why sprinklers are the foundation of profit</a>
        <a className={TOC_LINK} href="#sprinkler-comparison">2) Sprinkler comparison table</a>
        <a className={TOC_LINK} href="#coverage-pattern">3) Quality Sprinkler coverage pattern</a>
        <a className={TOC_LINK} href="#roi-calculation">4) ROI calculation</a>
        <a className={TOC_LINK} href="#farm-layout">5) Optimal farm layout</a>
        <a className={TOC_LINK} href="#upgrade-path">6) Upgrade path: Basic to Iridium</a>
        <a className={TOC_LINK} href="#speed-gro">7) Speed-Gro combination</a>
        <a className={TOC_LINK} href="#faq">8) FAQ</a>
      </div>
    </nav>
  );
}

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <aside className="mt-5 rounded-2xl border border-[#7c4d2e]/25 bg-white/45 p-4 ring-1 ring-yellow-900/10">
      <p className="text-sm font-semibold text-[#4a321e]">{title}</p>
      <div className="mt-2 text-sm leading-7 text-[#5c4033]/95">{children}</div>
    </aside>
  );
}

export default function QualitySprinklersGuidePage() {
  const readNextPosts = getBlogReadNextPosts("stardew-valley-quality-sprinklers-guide", 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "Stardew Profit" },
    publisher: { "@type": "Organization", name: "Stardew Profit" },
    image: [`${url}/opengraph-image`],
    about: ["quality sprinkler stardew valley", "sprinkler coverage", "iridium sprinkler", "farm layout", "sprinkler ROI"],
  };

  return (
    <div className="relative min-h-screen bg-[#f5e6c8] text-[#5c4033]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 16% 18%, rgba(255,255,255,0.35) 0 5%, transparent 6%), radial-gradient(circle at 82% 14%, rgba(255,255,255,0.26) 0 4%, transparent 5%), repeating-linear-gradient(135deg, rgba(124,77,46,0.10) 0 16px, rgba(124,77,46,0.06) 16px 32px)",
            backgroundColor: "#f5e6c8",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#e8cfa3]/35" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <PwaRegisterScript />
        <FaqJsonLd
          faqs={FAQ_ITEMS.map((i) => ({ question: i.question, answer: i.answer }))}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Quality Sprinkler Guide" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border-4 border-[#7c4d2e]/80 bg-[#fff3da]/95 p-6 shadow-[0_16px_40px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Complete Guide &bull; Irrigation &bull; Farm Efficiency
            </p>
            <h1 className="mt-3 text-2xl font-bold text-[#3f2a22] sm:text-3xl lg:text-4xl">
              Quality Sprinkler Guide for Stardew Valley (2026): Coverage, ROI, and Profit Maximization
            </h1>
            <p className={P}>
              Manual watering is the silent tax that kills early-game momentum. Every tile you water
              by hand costs 2 energy and real time — energy that could go toward mining, foraging,
              or fishing. The path from hand-watering to a fully automated farm runs through three
              sprinkler tiers, and the{" "}
              <strong>Quality Sprinkler</strong> is the pivotal milestone: available at Farming
              Level 6, it waters a full 3&times;3 grid and delivers enough coverage density to
              unlock serious profit scaling while keeping crafting costs manageable.
            </p>
            <p className={P}>
              This guide covers everything: coverage patterns, crafting costs, ROI math, optimal
              farm layouts, the upgrade timeline from Basic to Iridium, Speed-Gro synergies, and
              how to use the profit calculator to measure the impact on your specific farm.
            </p>
            <p className="mt-4 text-xs text-[#6f4b2a]/60">Published March 29, 2026 &middot; 12 min read</p>
          </header>

          <Toc />

          {/* Section 1: Why Sprinklers Matter */}
          <section id="why-sprinklers-matter" className={CARD}>
            <h2 className={H2}>1) Why Sprinklers Are the Foundation of Profit</h2>
            <p className={P}>
              In early Stardew Valley, your starting energy pool is 270 points. Each watered tile
              costs 2 energy, meaning you can water at most 135 tiles before collapsing — and that
              is with zero energy spent on anything else. Once your farm grows beyond 30–40 tiles,
              hand-watering becomes your primary bottleneck.
            </p>
            <p className={P}>
              Sprinklers break this bottleneck entirely. A single Quality Sprinkler handles 8 tiles
              automatically every morning before you even wake up. With 10 Quality Sprinklers
              covering 80 tiles, you reclaim roughly 160 energy per day — enough for a full mining
              run, several hours of fishing, or completing multiple daily tasks that generate
              additional income.
            </p>
            <p className={P}>
              The compound effect is significant. A player who redirects saved watering energy to
              mining typically reaches the deeper mine floors (and their valuable ore veins) one
              to two weeks earlier than one who hand-waters a large farm. That acceleration
              directly improves when you can craft Gold Bars for Quality Sprinklers, creating a
              virtuous cycle: sprinklers free energy → energy goes to mining → mining produces
              bars → bars enable more sprinklers.
            </p>
            <Callout title="Key insight">
              Sprinklers do not just save time — they unlock the energy budget for every other
              income source. The true value of a Quality Sprinkler is not just the crops it waters;
              it is everything else you can do with the energy it frees.
            </Callout>
          </section>

          {/* Section 2: Sprinkler Comparison */}
          <section id="sprinkler-comparison" className={CARD}>
            <h2 className={H2}>2) Sprinkler Comparison: Basic vs Quality vs Iridium</h2>
            <p className={P}>
              There are three sprinkler tiers in Stardew Valley. Understanding their tradeoffs
              helps you know when to craft each and how to plan your upgrade timeline.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-[700px] w-full border-separate border-spacing-y-2 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Sprinkler</th>
                    <th className="px-3 py-2">Tiles Watered</th>
                    <th className="px-3 py-2">Unlock</th>
                    <th className="px-3 py-2">Recipe</th>
                    <th className="px-3 py-2">Material Cost</th>
                    <th className="px-3 py-2">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {SPRINKLER_ROWS.map((row, i) => (
                    <tr
                      key={row.name}
                      className={`${
                        i % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"
                      } rounded-2xl ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-semibold text-[#4a321e]">{row.name}</td>
                      <td className="px-3 py-3">{row.tiles}</td>
                      <td className="px-3 py-3">{row.unlock}</td>
                      <td className="px-3 py-3">{row.recipe}</td>
                      <td className="px-3 py-3">{row.cost}</td>
                      <td className="px-3 py-3">{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={P}>
              The Quality Sprinkler sits at the sweet spot of cost and coverage. The Basic
              Sprinkler is worth crafting the moment you hit Level 2 to stop hand-watering
              entirely on a small starter plot, but it is ultimately a placeholder. The Iridium
              Sprinkler requires rare Iridium Bars that are not reliably available until
              mid-Year 2, making Quality Sprinklers the dominant infrastructure for all of
              Year 1 and much of Year 2.
            </p>
          </section>

          {/* Section 3: Coverage Pattern */}
          <section id="coverage-pattern" className={CARD}>
            <h2 className={H2}>3) Quality Sprinkler Coverage Pattern</h2>
            <p className={P}>
              The Quality Sprinkler waters every tile in the 3&times;3 grid surrounding it. Place
              the sprinkler at the center and it irrigates all 8 adjacent tiles: the 4 cardinal
              neighbors (north, south, east, west) plus the 4 diagonal neighbors (northeast,
              northwest, southeast, southwest).
            </p>
            <div className="mt-4 rounded-2xl bg-[#f9efd8] p-4 ring-1 ring-[#9f744c]/20">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6f4b2a]/75 mb-3">Coverage Grid (S = Sprinkler, W = Watered)</p>
              <div className="grid grid-cols-3 gap-1 w-36 mx-auto font-mono text-center text-sm">
                <div className="rounded bg-[#b6e4b0] px-2 py-2 font-bold text-[#2d5a27]">W</div>
                <div className="rounded bg-[#b6e4b0] px-2 py-2 font-bold text-[#2d5a27]">W</div>
                <div className="rounded bg-[#b6e4b0] px-2 py-2 font-bold text-[#2d5a27]">W</div>
                <div className="rounded bg-[#b6e4b0] px-2 py-2 font-bold text-[#2d5a27]">W</div>
                <div className="rounded bg-[#7c4d2e] px-2 py-2 font-bold text-white">S</div>
                <div className="rounded bg-[#b6e4b0] px-2 py-2 font-bold text-[#2d5a27]">W</div>
                <div className="rounded bg-[#b6e4b0] px-2 py-2 font-bold text-[#2d5a27]">W</div>
                <div className="rounded bg-[#b6e4b0] px-2 py-2 font-bold text-[#2d5a27]">W</div>
                <div className="rounded bg-[#b6e4b0] px-2 py-2 font-bold text-[#2d5a27]">W</div>
              </div>
              <p className="mt-3 text-xs text-center text-[#6f4b2a]/70">8 watered tiles around the central sprinkler</p>
            </div>
            <p className={P}>
              Compare this to the Basic Sprinkler, which only waters the 4 cardinal tiles (a
              plus-sign shape), missing all four corners. The Quality Sprinkler fills those
              corners, doubling coverage per unit and making it twice as efficient on a
              tiles-per-sprinkler basis.
            </p>
            <p className={P}>
              Importantly, the sprinkler tile itself cannot be planted on. So each Quality
              Sprinkler consumes 1 tile (itself) and irrigates 8 tiles, for a ratio of 8:1
              crop tiles per sprinkler tile. The Basic Sprinkler is 4:1 and the Iridium
              Sprinkler is 24:1.
            </p>
          </section>

          {/* Section 4: ROI Calculation */}
          <section id="roi-calculation" className={CARD}>
            <h2 className={H2}>4) ROI Calculation: When Does a Quality Sprinkler Pay Off?</h2>
            <p className={P}>
              Let&apos;s do the math on a single Quality Sprinkler covering 8 tiles planted with
              Cauliflower (a Spring staple worth 175g base, ~280g average with quality bonus).
            </p>
            <h3 className={H3}>Crafting Cost</h3>
            <ul className="mt-2 space-y-1">
              <li className={LI}>1 Iron Bar: smelted from 5 Iron Ore (~50g total ore cost or free from mining)</li>
              <li className={LI}>1 Gold Bar: smelted from 5 Gold Ore (~150g total ore cost or free from mining)</li>
              <li className={LI}>1 Refined Quartz: from 1 Quartz or 1 Fire Quartz (~25g)</li>
              <li className={LI}><strong>Total material value: ~225–450g</strong> depending on ore prices</li>
            </ul>
            <h3 className={H3}>Energy Savings Per Day</h3>
            <p className={P}>
              Hand-watering 8 tiles costs 16 energy. Over a 28-day season that is 448 energy
              saved — the equivalent of about 1.6 full energy bars. Each energy bar is roughly
              worth one additional fishing trip or half a mine run, which conservatively
              generates 300–800g of additional income.
            </p>
            <h3 className={H3}>Payback Period</h3>
            <p className={P}>
              If a Quality Sprinkler costs 450g to craft and the 8 tiles it covers produce
              280g average per Cauliflower harvest (13-day crop), that is 2,240g per harvest
              cycle from those 8 tiles. The sprinkler pays back its material cost in less
              than one harvest — typically within the first 3–5 days of planting.
            </p>
            <p className={P}>
              When you factor in the <em>energy opportunity value</em> (what you earn by not
              wasting energy on watering), the break-even is essentially day one. Every
              subsequent day the sprinkler is in use is pure profit.
            </p>
            <Callout title="ROI summary">
              A Quality Sprinkler covering 8 tiles of mid-tier crops recoups its full material
              cost within a single harvest cycle. The energy it frees adds 300–800g per day in
              opportunity income. It is one of the highest-ROI crafts in the game.
            </Callout>
          </section>

          {/* Section 5: Farm Layout */}
          <section id="farm-layout" className={CARD}>
            <h2 className={H2}>5) Optimal Farm Layout with Quality Sprinklers</h2>
            <p className={P}>
              The key to zero-waste Quality Sprinkler coverage is tiling your farm in repeating
              3&times;3 blocks. Each block has the sprinkler at its center and 8 crop tiles
              surrounding it. Adjacent blocks share no watered tiles, so there is no overlap
              or gap when you grid them correctly.
            </p>
            <h3 className={H3}>Standard Grid Layout</h3>
            <p className={P}>
              On a cleared rectangular area, place sprinklers at every position that is a
              multiple of 3 in both row and column (1-indexed from the top-left corner of
              your cleared zone). For example, in a 9&times;9 cleared area, sprinklers go
              at positions (2,2), (2,5), (2,8), (5,2), (5,5), (5,8), (8,2), (8,5), (8,8) —
              that is 9 sprinklers covering 72 crop tiles with zero waste.
            </p>
            <div className="mt-4 rounded-2xl bg-[#f9efd8] p-4 ring-1 ring-[#9f744c]/20 overflow-x-auto">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6f4b2a]/75 mb-3">9×9 Example Layout (S = Sprinkler, C = Crop)</p>
              <div className="grid grid-cols-9 gap-0.5 w-max mx-auto font-mono text-center text-xs">
                {Array.from({ length: 81 }, (_, idx) => {
                  const row = Math.floor(idx / 9) + 1;
                  const col = (idx % 9) + 1;
                  const isSprinkler = row % 3 === 2 && col % 3 === 2;
                  return (
                    <div
                      key={idx}
                      className={`w-7 h-7 flex items-center justify-center rounded font-bold ${
                        isSprinkler
                          ? "bg-[#7c4d2e] text-white"
                          : "bg-[#b6e4b0] text-[#2d5a27]"
                      }`}
                    >
                      {isSprinkler ? "S" : "C"}
                    </div>
                  );
                })}
              </div>
              <p className="mt-3 text-xs text-center text-[#6f4b2a]/70">9 sprinklers covering 72 crop tiles — 100% efficiency</p>
            </div>
            <h3 className={H3}>Practical Tips for the Standard Farm</h3>
            <ul className="mt-2 space-y-1">
              <li className={LI}>Clear land in rectangles whose width and height are multiples of 3 for perfect grid fit.</li>
              <li className={LI}>Avoid placing sprinklers on paths, water, or decorative tiles — they cannot water crops from there.</li>
              <li className={LI}>Use scarecrows (one per 8-tile radius) alongside sprinklers for full crop protection.</li>
              <li className={LI}>On the standard farm map, the main tilled area around the farmhouse is ideal for a 6&times;6 or 9&times;9 sprinkler grid to start.</li>
              <li className={LI}>Leave access paths between sprinkler blocks to reach crops for harvesting without trampling.</li>
            </ul>
            <p className={P}>
              As you expand, keep adding 3&times;3 blocks. The modular nature of the Quality
              Sprinkler grid means you never need to redesign your layout — just append new
              blocks to the edges of your existing cleared area.
            </p>
          </section>

          {/* Section 6: Upgrade Path */}
          <section id="upgrade-path" className={CARD}>
            <h2 className={H2}>6) Upgrade Path: Basic &rarr; Quality &rarr; Iridium</h2>
            <p className={P}>
              Knowing <em>when</em> to upgrade is as important as knowing <em>how</em>. Here
              is the recommended timeline based on efficient Year 1 and Year 2 play.
            </p>
            <h3 className={H3}>Phase 1: Basic Sprinklers (Year 1 Spring, Days 1–14)</h3>
            <p className={P}>
              Craft your first Basic Sprinklers as soon as you hit Farming Level 2, which
              typically happens by Spring Day 5–8 if you plant your entire starter parsnip
              plot and water consistently. Even covering just 8–12 tiles with Basic Sprinklers
              frees meaningful energy for early mine runs to gather Copper and Iron.
            </p>
            <ul className="mt-2 space-y-1">
              <li className={LI}><strong>Goal:</strong> Reach Farming Level 2 by Day 5–8</li>
              <li className={LI}><strong>Action:</strong> Craft 2–4 Basic Sprinklers to cover your starter plot</li>
              <li className={LI}><strong>Priority:</strong> Begin mining for Iron Ore immediately to prepare for Quality Sprinklers</li>
            </ul>
            <h3 className={H3}>Phase 2: Quality Sprinklers (Year 1 Summer–Fall)</h3>
            <p className={P}>
              Farming Level 6 is the unlock milestone. In an efficient Year 1, you can reach
              Level 6 by late Spring (Day 20–28) or early Summer if you are planting a full
              tilled area every season. The moment the recipe unlocks, prioritize crafting
              Quality Sprinklers in batches of 4–8.
            </p>
            <ul className="mt-2 space-y-1">
              <li className={LI}><strong>Target:</strong> Farming Level 6 by end of Spring Year 1</li>
              <li className={LI}><strong>Recipe:</strong> 1 Iron Bar + 1 Gold Bar + 1 Refined Quartz per sprinkler</li>
              <li className={LI}><strong>Build out:</strong> Replace all Basic Sprinklers and expand coverage to 40–80 tiles by Summer</li>
              <li className={LI}><strong>Side goal:</strong> Reach Farming Level 10 by Fall Year 1 or Winter Year 1 to unlock Iridium Sprinkler recipe</li>
            </ul>
            <h3 className={H3}>Phase 3: Iridium Sprinklers (Year 2+)</h3>
            <p className={P}>
              Iridium Bars require reaching the bottom of the Skull Cavern or finding Iridium
              Nodes in the regular mines past floor 115. Battery Packs come from Lightning Rods
              during storms or from purchasing them. Realistically, you can build your first
              Iridium Sprinklers in Year 2 Spring once you have a stock of Iridium Bars.
            </p>
            <ul className="mt-2 space-y-1">
              <li className={LI}><strong>Target:</strong> First Iridium Sprinklers by Year 2 Spring</li>
              <li className={LI}><strong>Strategy:</strong> Replace Quality Sprinklers from the center of your farm outward</li>
              <li className={LI}><strong>Transition:</strong> Each Iridium Sprinkler replaces 3 Quality Sprinklers, freeing 3 crop tiles in the process</li>
              <li className={LI}><strong>End state:</strong> Full Iridium coverage by Year 2 Summer–Fall for maximum farm efficiency</li>
            </ul>
            <Callout title="Upgrade rule of thumb">
              Do not wait for perfect Iridium coverage before expanding your farm. Quality
              Sprinklers are so efficient that running them through most of Year 2 while
              gradually transitioning to Iridium is better than stalling farm expansion
              while you accumulate rare materials.
            </Callout>
          </section>

          {/* Section 7: Speed-Gro */}
          <section id="speed-gro" className={CARD}>
            <h2 className={H2}>7) Speed-Gro Combination: Sprinklers + Fertilizer Synergy</h2>
            <p className={P}>
              Quality Sprinklers and Speed-Gro fertilizer are the two most powerful farm
              efficiency upgrades available before Year 2. Together, they compound in ways
              that significantly increase the number of harvests per season.
            </p>
            <h3 className={H3}>How Speed-Gro Works</h3>
            <p className={P}>
              Speed-Gro (craftable at Farming Level 3) reduces crop growth time by 10%,
              rounding down to the nearest day. Deluxe Speed-Gro (available from Pierre
              in Spring Year 2 or crafted at Farming Level 8) reduces growth time by 25%.
              Applied before planting, this can squeeze an extra harvest into a season
              for fast-growing crops.
            </p>
            <h3 className={H3}>The Sprinkler + Speed-Gro Stack</h3>
            <ul className="mt-2 space-y-1">
              <li className={LI}>
                <strong>Sprinklers ensure consistent daily watering</strong> — crops never
                miss a growth day due to skipped watering (a common mistake when energy runs low).
              </li>
              <li className={LI}>
                <strong>Speed-Gro reduces the growth window</strong> — a 13-day Cauliflower
                becomes an 11-day crop with Speed-Gro, allowing replanting earlier.
              </li>
              <li className={LI}>
                <strong>Combined effect:</strong> A sprinkler-irrigated, Speed-Gro-treated
                Blueberry field in Summer can achieve one extra harvest cycle per season
                compared to hand-watered, unfertilized crops.
              </li>
            </ul>
            <h3 className={H3}>Priority Crops for the Combo</h3>
            <ul className="mt-2 space-y-1">
              <li className={LI}>
                <strong>Spring:</strong> Strawberries from the Egg Festival — each Speed-Gro
                application can add 1–2 extra harvests from replanting cycles.
              </li>
              <li className={LI}>
                <strong>Summer:</strong> Blueberries and Starfruit — the highest per-tile
                value crops benefit most from compressed growth cycles.
              </li>
              <li className={LI}>
                <strong>Fall:</strong> Cranberries — same logic as Blueberries; more
                harvest cycles in the 28-day window means more 75g berries per plant.
              </li>
              <li className={LI}>
                <strong>Year-round (Greenhouse):</strong> Ancient Fruit + Deluxe Speed-Gro
                is the ultimate endgame stack, reducing growth from 28 days to 21 days
                for the initial growth, then harvesting every 7 days indefinitely.
              </li>
            </ul>
            <p className={P}>
              For a full breakdown of which crops to plant each season to maximize the
              sprinkler + fertilizer stack, see our{" "}
              <Link className={LINK} href="/blog/best-spring-crops-10-days-left">
                Spring crops guide
              </Link>{" "}
              and the{" "}
              <Link className={LINK} href="/blog/stardew-valley-greenhouse-mastery-guide">
                Greenhouse mastery guide
              </Link>.
            </p>
          </section>

          {/* Section 8: Calculator CTA */}
          <section id="calculator-cta" className={CARD}>
            <h2 className={H2}>8) Calculate Your Farm Profit</h2>
            <p className={P}>
              Every farm is different. The right number of Quality Sprinklers, the best crop
              choices, and the ideal layout all depend on your current season, available
              gold, and farm size. Use the Stardew Profit Calculator to model your exact
              situation and find the highest-ROI moves available right now.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link className={CTA_CLASS} href="/">
                Open Profit Calculator
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/stardew-valley-greenhouse-mastery-guide">
                Greenhouse Mastery Guide
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/best-spring-crops-10-days-left">
                Best Spring Crops Guide
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
                  <p className="mt-2 text-sm leading-7 text-[#5c4033]/95">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Next Steps */}
          <section className={CARD}>
            <h2 className={H2}>Next Steps</h2>
            <p className={P}>
              Quality Sprinklers are the infrastructure that makes large-scale farming viable.
              Once your irrigation is automated, your next bottleneck is crop selection and
              processing. Use the profit calculator to model your next season, then follow
              these guides to maximize output at every stage.
            </p>
            <ul className="mt-3 space-y-1">
              <li className={LI}>
                Plan your crop portfolio with the{" "}
                <Link className={LINK} href="/">Profit Calculator</Link>.
              </li>
              <li className={LI}>
                Maximize your Spring income with the{" "}
                <Link className={LINK} href="/blog/best-spring-crops-10-days-left">
                  Best Spring Crops guide
                </Link>.
              </li>
              <li className={LI}>
                Unlock year-round farming by completing the{" "}
                <Link className={LINK} href="/blog/stardew-valley-greenhouse-mastery-guide">
                  Greenhouse Mastery guide
                </Link>.
              </li>
            </ul>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="stardew-valley-quality-sprinklers-guide" />
      </main>

      <SiteFooter />
    </div>
  );
}

import type { Metadata } from "next";

import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogReadNextPosts } from "@/lib/read-next";

const FAQ_EN = [
  "What is the best Stardew Valley greenhouse layout?",
  "How many planting tiles are in the greenhouse?",
  "Is Ancient Fruit or Starfruit better in the greenhouse?",
  "What are the best greenhouse crops if I have few kegs?",
  "Where should I place sprinklers in the greenhouse?",
  "Should I plant fruit trees inside the greenhouse?",
] as const;

const FAQ_ZH = [
  "温室最好的布局是什么？",
  "温室一共有多少块可种植地块？",
  "温室里古代果实和杨桃哪个好？",
  "酒桶不够时温室种什么更好？",
  "温室洒水器怎么摆最省格子？",
  "温室里要不要种果树？",
] as const;

export const metadata: Metadata = {
  title: "Stardew Valley Greenhouse Layout Guide (116 Tiles)",
  description:
    "A practical Stardew Valley greenhouse layout guide for 116 planting tiles: sprinkler placement, best greenhouse crops ranked, and Ancient Fruit vs Starfruit decisions with calculator presets.",
  openGraph: {
    type: "article",
    publishedTime: "2026-02-27T00:00:00+08:00",
    modifiedTime: "2026-02-27T00:00:00+08:00",
  },
};

const CTA_CLASS =
  "inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]";

type RankedCrop = {
  id: string;
  name: string;
  seedCost?: number;
  sellPrice: number;
  growthDays: number;
  isRegrowing: boolean;
  regrowDays: number;
  yieldPerHarvest: number;
  why: string;
};

const TOP_GREENHOUSE_CROPS: RankedCrop[] = [
  {
    id: "ancient_fruit",
    name: "Ancient Fruit",
    seedCost: 0,
    sellPrice: 550,
    growthDays: 28,
    isRegrowing: true,
    regrowDays: 7,
    yieldPerHarvest: 1,
    why: "Late-game king for low-maintenance wine: 1 harvest/week forever.",
  },
  {
    id: "starfruit",
    name: "Starfruit",
    seedCost: 400,
    sellPrice: 750,
    growthDays: 13,
    isRegrowing: false,
    regrowDays: 0,
    yieldPerHarvest: 1,
    why: "Best per-keg value. Replanting cost + time is the trade-off.",
  },
  {
    id: "hops",
    name: "Hops",
    seedCost: 60,
    sellPrice: 25,
    growthDays: 11,
    isRegrowing: true,
    regrowDays: 1,
    yieldPerHarvest: 1,
    why: "Explodes in output (daily). Great if you can process into Pale Ale.",
  },
  {
    id: "cranberry",
    name: "Cranberry",
    seedCost: 240,
    sellPrice: 75,
    growthDays: 7,
    isRegrowing: true,
    regrowDays: 5,
    yieldPerHarvest: 2,
    why: "Strong raw gold/day with almost no processing dependency.",
  },
];

function formatCropFacts(crop: RankedCrop): string {
  if (crop.isRegrowing) {
    return `${crop.growthDays}d first harvest, then every ${crop.regrowDays}d (x${crop.yieldPerHarvest}).`;
  }

  return `${crop.growthDays}d growth, single harvest (x${crop.yieldPerHarvest}).`;
}

export default function GreenhouseLayoutGuidePage() {
  const fromPath = "/blog/greenhouse-layout-guide";
  const readNextPosts = getBlogReadNextPosts("greenhouse-layout-guide", 3);

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

      <main className="relative z-10 mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        <PwaRegisterScript />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Quick Answer</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Stardew Valley Greenhouse Layout Guide
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              温室怎么摆才不浪费格子？洒水器放哪最省？
            </p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Quick Answer</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                If your goal is a clean, fully-irrigated <strong>stardew valley greenhouse layout</strong>,
                design around <strong>116 planting tiles</strong>: the 10×12 soil area (120) minus the 4 permanent tiles
                blocked by the center border/planter.
              </p>
              <p>
                The most practical “always works” setup is <strong>6 Iridium Sprinklers</strong> watering every planting
                tile while leaving a short central walkway for harvesting.
              </p>
              <p>
                For crops, the classic endgame answer is <strong>Ancient Fruit</strong> for low-maintenance weekly harvests,
                while <strong>Starfruit</strong> can win on raw value <em>if</em> you have the keg capacity and don’t mind
                replanting.
              </p>
              <p>
                If you’re still building processing, pick <strong>best greenhouse crops</strong> that are strong even when sold
                raw (Cranberry) or scale well with a few kegs (Hops).
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Best Greenhouse Layout (116 tiles)</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                Think of the greenhouse soil as <strong>10 columns × 12 rows</strong>. The common “116 tiles” layout is simply
                the full soil rectangle, except the 4 center-adjacent tiles you can’t plant.
              </p>
              <p>
                Use <strong>6 Iridium Sprinklers</strong> in two rows of three. This covers the entire usable soil while keeping
                the layout easy to path and harvest.
              </p>
              <p>
                The layout is “optimal” because it’s <strong>complete coverage</strong> (no hand-watering), <strong>minimal sprinklers</strong>
                (so you don’t burn tiles), and <strong>low friction</strong> for harvesting.
              </p>
            </div>

            <div className="mt-4 rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4 text-sm leading-6 text-[#5f4228]/90">
              <p className="font-semibold text-[#4a321e]">Recommended sprinkler pattern</p>
              <p className="mt-2">
                Place 3 sprinklers on an upper interior row and 3 on a lower interior row, evenly spaced across the 10-wide
                bed. The exact tile labels vary by screenshot grid, but the pattern is:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Row A: sprinklers roughly at columns 2, 5, 8</li>
                <li>Row B: sprinklers roughly at columns 2, 5, 8</li>
              </ul>
              <p className="mt-2">
                This creates 6 overlapping 5×5 watering squares that saturate the entire 10×12 plantable region.
              </p>
            </div>

            <div className="mt-4 rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4 text-sm leading-6 text-[#5f4228]/90">
              <p className="font-semibold text-[#4a321e]">Fruit trees note</p>
              <p className="mt-2">
                You can plant fruit trees on the outer walkway (not on soil). This doesn’t change the 116 crop tiles.
                If you want trees, plant them around the border so the center remains a harvesting lane.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Top Greenhouse Crops Ranked</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Ranked for real play: regrowth cadence, replanting overhead, and processing pressure.
            </p>

            <div className="mt-4 space-y-3">
              {TOP_GREENHOUSE_CROPS.map((crop, index) => (
                <div
                  key={crop.id}
                  className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4 text-sm leading-6 text-[#5f4228]/90"
                >
                  <p className="font-semibold text-[#4a321e]">
                    #{index + 1} {crop.name}
                  </p>
                  <p className="mt-1">
                    <strong>Base sell:</strong> {crop.sellPrice}g.
                    {typeof crop.seedCost === "number" ? (
                      <>
                        {" "}
                        <strong>Seed:</strong> {crop.seedCost}g.
                      </>
                    ) : null}{" "}
                    <strong>Growth:</strong> {formatCropFacts(crop)}
                  </p>
                  <p className="mt-1">{crop.why}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm leading-6 text-[#5f4228]/90">
              Data notes: base sell price and growth/regrow values align with the site’s `crops.json` dataset.
            </p>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Ancient Fruit vs Starfruit in Greenhouse</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                This decision is usually about your bottleneck. In a greenhouse, <strong>tiles</strong> are fixed (116), so the
                question becomes: is your bottleneck <strong>processing capacity</strong> (kegs/jars) or <strong>time/attention</strong>?
              </p>
              <p>
                <strong>Ancient Fruit</strong> is “set-and-forget”: 28 days to start, then 1 harvest every 7 days forever. It keeps
                your work low and your weekly harvest consistent.
              </p>
              <p>
                <strong>Starfruit</strong> is “high value per cycle”: 13 days per harvest, but you must replant. Starfruit wine is
                famously strong, so if you have enough kegs and steady seed supply, Starfruit can edge out Ancient Fruit on
                total profit.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90">
                <li>
                  Pick <strong>Ancient Fruit</strong> if you want a stable weekly loop and fewer chores.
                </li>
                <li>
                  Pick <strong>Starfruit</strong> if you want maximum value per keg and don’t mind replanting.
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Sprinkler Placement Tips</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                Greenhouse sprinklers are mostly about avoiding “dead tiles”. A symmetric 6-iridium pattern removes
                hand-watering and makes crop swaps painless.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong>Iridium Sprinklers</strong>: 6 total for full coverage of the 116 plantable tiles.
                </li>
                <li>
                  <strong>Keep one center lane</strong>: harvesting becomes faster and you won’t block yourself in.
                </li>
                <li>
                  <strong>Upgrade path</strong>: start with whatever you have (Quality Sprinklers), then migrate to the 6-iridium grid.
                </li>
                <li>
                  <strong>Match crop to kegs</strong>: if kegs are scarce, avoid ultra-high-output crops that flood your inventory.
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Calculator Presets</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              Click a preset to compare crops with the greenhouse season setting.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=greenhouse-layout-116-ancient-fruit&season=greenhouse&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="greenhouse_layout_ancient"
                className={CTA_CLASS}
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🌿</span>
                116 Tiles: Ancient Fruit
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=greenhouse-layout-116-starfruit&season=greenhouse&daysLeft=28&profession=artisan"
                fromPath={fromPath}
                ctaName="greenhouse_layout_starfruit"
                className={CTA_CLASS}
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">⭐</span>
                116 Tiles: Starfruit
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">FAQ</h2>

            <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#6f4b2a]/80">EN</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90">
              {FAQ_EN.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-[#6f4b2a]/80">ZH</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90">
              {FAQ_ZH.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="greenhouse-layout-guide" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}

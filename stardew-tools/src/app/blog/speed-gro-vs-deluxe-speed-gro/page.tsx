import type { Metadata } from "next";

import { BlogReadNext } from "@/components/blog/BlogReadNext";
import FaqJsonLd from "@/components/FaqJsonLd";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import crops from "@/data/crops.json";
import { type Crop, calculateSeasonProfit, getActualGrowthDays } from "@/lib/calculateProfit";
import { getBlogReadNextPosts } from "@/lib/read-next";
import Breadcrumb from "@/components/Breadcrumb";

const FAQ_EN = [
  "Is Deluxe Speed-Gro always better than Speed-Gro?",
  "Does Speed-Gro affect regrow time (like Cranberries)?",
  "What crops benefit most from Speed-Gro?",
  "Does Speed-Gro stack with Agriculturist?",
  "Is it worth using Speed-Gro late in the season?",
  "Does Speed-Gro help in the Greenhouse?",
] as const;

const FAQ_ZH = [
  "Deluxe Speed-Gro 一定比 Speed-Gro 更好吗？",
  "Speed-Gro 会减少再生作物的再生时间吗（比如蔓越莓）？",
  "哪些作物最吃 Speed-Gro 的加速收益？",
  "Speed-Gro 能和 Agriculturist（农学家）叠加吗？",
  "季节后期还值得用 Speed-Gro 吗？",
  "温室里用 Speed-Gro 值得吗？",
] as const;

export const metadata: Metadata = {
  title: "Speed-Gro vs Deluxe Speed-Gro (Stardew Valley)",
  description:
    "Speed-Gro vs Deluxe Speed-Gro in Stardew Valley: exact growth-speed differences, when each is worth it, and cost break-even logic with calculator presets.",
  openGraph: {
    type: "article",
    publishedTime: "2026-02-27T00:00:00+08:00",
    modifiedTime: "2026-02-27T00:00:00+08:00",
  },
};

const CTA_CLASS =
  "inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]";

type GrowthRow = {
  crop: string;
  base: string;
  speedGro: string;
  deluxe: string;
  whyItMatters: string;
};

function formatRegrowLabel(crop: Crop) {
  if (!crop.isRegrowing) {
    return `${crop.growthDays}d`;
  }

  return `${crop.growthDays}d + regrow ${crop.regrowDays}d`;
}

function growthWithMultiplier(crop: Crop, growthMultiplier: number): string {
  const adjustedGrowthDays = Math.max(1, Math.ceil(crop.growthDays * growthMultiplier));
  const adjustedRegrowDays = crop.isRegrowing
    ? Math.max(1, Math.ceil(crop.regrowDays * growthMultiplier))
    : 0;

  if (!crop.isRegrowing) {
    return `${adjustedGrowthDays}d`;
  }

  return `${adjustedGrowthDays}d + regrow ${adjustedRegrowDays}d`;
}

export default function SpeedGroVsDeluxeSpeedGroPage() {
  const fromPath = "/blog/speed-gro-vs-deluxe-speed-gro";
  const readNextPosts = getBlogReadNextPosts("speed-gro-vs-deluxe-speed-gro", 3);

  const cropsData = crops as Crop[];

  const pumpkin = cropsData.find((crop) => crop.id === "pumpkin");
  const cranberry = cropsData.find((crop) => crop.id === "cranberry");
  const grape = cropsData.find((crop) => crop.id === "grape");
  const blueberry = cropsData.find((crop) => crop.id === "blueberry");
  const hops = cropsData.find((crop) => crop.id === "hops");

  const spotlightCrops = [pumpkin, cranberry, grape, blueberry, hops].filter(Boolean) as Crop[];

  const growthRows: GrowthRow[] = spotlightCrops.map((crop) => {
    const base = formatRegrowLabel(crop);

    // Stardew wiki uses different exact rounding rules; here we keep this blog consistent with our app's math style.
    // We present this section as an "expected" comparison and encourage validating in the calculator.
    const speedGro = growthWithMultiplier(crop, 0.9);
    const deluxe = growthWithMultiplier(crop, 0.75);

    const baseGrowth = crop.growthDays;
    const baseRegrow = crop.regrowDays;

    const speedGroGrowth = getActualGrowthDays(Math.ceil(baseGrowth * 0.9), false);
    const deluxeGrowth = getActualGrowthDays(Math.ceil(baseGrowth * 0.75), false);

    const speedGroDelta = Math.max(0, baseGrowth - speedGroGrowth);
    const deluxeDelta = Math.max(0, baseGrowth - deluxeGrowth);

    const whyItMatters = crop.isRegrowing
      ? `Often adds 1 extra harvest when you're timing-limited. Also speeds regrow (base regrow ${baseRegrow}d).`
      : `Main value is squeezing in an extra harvest when daysLeft is tight (+${speedGroDelta}d / +${deluxeDelta}d).`;

    return {
      crop: crop.name,
      base,
      speedGro,
      deluxe,
      whyItMatters,
    };
  });

  const season = "fall" as const;

  const profitCranberryNormal = cranberry
    ? calculateSeasonProfit({ crop: cranberry, seasonDays: 28, quality: "normal", hasTiller: false, profession: "none" })
    : null;

  const profitPumpkinNormal = pumpkin
    ? calculateSeasonProfit({ crop: pumpkin, seasonDays: 28, quality: "normal", hasTiller: false, profession: "none" })
    : null;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#9ed7a4]">
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
        <FaqJsonLd
          faqs={FAQ_EN.map((question, index) => ({
            question,
            answer: FAQ_ZH[index] ?? "",
          }))}
        />

        
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Speed-Gro vs Deluxe Speed-Gro (Stardew Valley)" },
          ]}
        />

<article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Quick Answer
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Speed-Gro vs Deluxe Speed-Gro in Stardew Valley
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              speed gro vs deluxe speed gro stardew valley（基础加速 vs 豪华加速肥）
            </p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Quick Answer</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                <strong>Deluxe Speed-Gro</strong> is the better choice when you’re trying to
                <strong> force an extra harvest</strong> (late-season planting, tight greenhouse cycles, or any
                situation where 1 day matters). It’s especially strong for regrowing crops.
              </p>
              <p>
                <strong>Speed-Gro</strong> is the better “default” when you want a cheaper timing boost across a large
                field and you’re not right on the edge of an extra harvest.
              </p>
              <p>
                If you’re unsure, treat it like this: if Deluxe Speed-Gro changes the number of harvests, it’s
                usually worth it; if it doesn’t, you’re mostly paying for convenience.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Growth Speed Comparison Table</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              Table uses crop timings from <code>src/data/crops.json</code> (base growth + regrow). The exact rounding
              behavior for Speed-Gro in-game can be fiddly; for planning, validate your exact setup using the calculator
              presets below.
            </p>

            <div className="relative mt-4 overflow-x-auto">
              <table className="min-w-[860px] w-full border-separate border-spacing-y-2 text-sm tracking-wide">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-[#6f4b2a]/80">
                    <th className="px-3 py-2">Crop</th>
                    <th className="px-3 py-2">Base</th>
                    <th className="px-3 py-2">Speed-Gro (≈10% faster)</th>
                    <th className="px-3 py-2">Deluxe Speed-Gro (≈25% faster)</th>
                    <th className="px-3 py-2">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {growthRows.map((row, index) => (
                    <tr
                      key={row.crop}
                      className={`${index % 2 === 0 ? "bg-[#fff9ea]" : "bg-[#f9efd8]"} rounded-2xl shadow-[0_1px_0_rgba(122,82,46,0.14)] ring-1 ring-[#9f744c]/20`}
                    >
                      <td className="px-3 py-3 font-medium text-[#503521]">{row.crop}</td>
                      <td className="px-3 py-3 text-[#5f432a]/85">{row.base}</td>
                      <td className="px-3 py-3 text-[#5f432a]/85">{row.speedGro}</td>
                      <td className="px-3 py-3 text-[#5f432a]/85">{row.deluxe}</td>
                      <td className="px-3 py-3 text-[#5f432a]/85">{row.whyItMatters}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">When to Use Each</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#9f744c]/30 bg-[#fff8e8]/85 px-4 py-4 text-sm leading-6 text-[#5f4228]/90">
                <h3 className="text-base font-semibold text-[#4a321e]">Use Speed-Gro when…</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>You’re planting large fields and want a cheaper, broad speed boost.</li>
                  <li>You’re not on a harvest-count breakpoint (extra harvest unlikely).</li>
                  <li>You care more about earlier cashflow than maximizing harvest count.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#9f744c]/30 bg-[#fff8e8]/85 px-4 py-4 text-sm leading-6 text-[#5f4228]/90">
                <h3 className="text-base font-semibold text-[#4a321e]">Use Deluxe Speed-Gro when…</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>You’re timing-limited (late in season, planting day is delayed).</li>
                  <li>It turns a 2-harvest plan into 3 (or adds an extra regrow harvest).</li>
                  <li>You’re optimizing greenhouse / keg throughput cycles.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Cost Analysis (Break-Even Logic)</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90">
              <p>
                Fertilizer cost is only worth it if it either (1) increases <strong>harvest count</strong>, or (2) helps
                you align processing / cashflow in a way that beats the extra spend.
              </p>
              <p>
                A simple rule: if Deluxe Speed-Gro creates +1 harvest, the break-even threshold is roughly:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>Extra profit from +1 harvest</strong> ≈ (sell price × yield) − (seed cost, if you must replant)
                </li>
                <li>
                  If that extra profit is greater than the fertilizer cost difference, Deluxe is a win.
                </li>
              </ul>
              <p>
                Example context from our crop dataset: in Fall,
                {profitCranberryNormal ? (
                  <> <strong>Cranberry</strong> is a regrow crop (seed cost {cranberry?.seedCost}g, sell {cranberry?.sellPrice}g, yield {cranberry?.yieldPerHarvest ?? 1} per harvest) </>
                ) : null}
                and
                {profitPumpkinNormal ? (
                  <> <strong>Pumpkin</strong> is a single-harvest crop (seed cost {pumpkin?.seedCost}g, sell {pumpkin?.sellPrice}g). </>
                ) : null}
                Regrow crops tend to get more “harvest count” value out of speed.
              </p>
              <p>
                For a precise answer on your farm, use the presets below and compare gold/day with and without speed.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Calculator Presets</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              These links open the profit calculator with pre-filled scenarios. Compare outcomes between baseline vs
              faster growth plans.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?season=fall&daysLeft=28"
                fromPath={fromPath}
                ctaName="fall_full_season_baseline"
                className={CTA_CLASS}
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🍂</span>
                Fall (28 days) Baseline
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?season=fall&daysLeft=14"
                fromPath={fromPath}
                ctaName="fall_mid_season_timing"
                className={CTA_CLASS}
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">⏰</span>
                Fall (14 days left) Timing Test
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?season=fall&daysLeft=28&profession=agriculturist"
                fromPath={fromPath}
                ctaName="fall_agriculturist_proxy"
                className={CTA_CLASS}
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🌿</span>
                Fall + Agriculturist (Speed Proxy)
              </TrackedBlogCtaLink>
            </div>
            <p className="mt-3 text-xs leading-5 text-[#6f4b2a]/80">
              Note: the current calculator doesn’t model Speed-Gro items directly. Use Agriculturist as a
              speed-control proxy and focus on the breakpoint question: does faster growth change harvest count?
            </p>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">FAQ</h2>

            <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#6f4b2a]/80">EN</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90">
              {FAQ_EN.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>

            <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#6f4b2a]/80">ZH</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90">
              {FAQ_ZH.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="speed-gro-vs-deluxe-speed-gro" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}

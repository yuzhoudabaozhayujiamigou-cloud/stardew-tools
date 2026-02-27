import type { Metadata } from "next";

import { BlogReadNext } from "@/components/blog/BlogReadNext";
import FaqJsonLd from "@/components/FaqJsonLd";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import crops from "@/data/crops.json";
import { getBlogReadNextPosts } from "@/lib/read-next";
import Breadcrumb from "@/components/Breadcrumb";

const FAQ_EN = [
  "Which is better: Ancient Fruit Wine or Starfruit Wine?",
  "Is Ancient Fruit really the best long-term greenhouse crop?",
  "Does Starfruit Wine beat Ancient Fruit Wine if I have limited kegs?",
  "Should I use Speed-Gro for Ancient Fruit or Starfruit?",
  "Is it worth aging Starfruit Wine in casks?",
  "Do jars (jelly) ever beat wine for these crops?",
] as const;

const FAQ_ZH = [
  "古代果实酒和杨桃酒哪个更好？",
  "古代果实真的是温室长期最强作物吗？",
  "如果酒桶有限，杨桃酒会更赚吗？",
  "古代果实/杨桃要用加速肥吗？",
  "杨桃酒值得放到酒窖陈酿吗？",
  "果酱罐（果酱）会比酒更赚吗？",
] as const;

export const metadata: Metadata = {
  title: "Ancient Fruit Wine vs Starfruit Wine (Deep Dive)",
  description:
    "Ancient fruit wine vs starfruit wine Stardew Valley: side-by-side values, keg vs jar, and long-term annual profit logic for greenhouse planning.",
  openGraph: {
    type: "article",
    publishedTime: "2026-02-27T00:00:00+08:00",
    modifiedTime: "2026-02-27T00:00:00+08:00",
  },
};

const CTA_CLASS =
  "inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]";

function formatGold(value: number): string {
  return `${Math.round(value).toLocaleString()}g`;
}

function pickCrop(name: string) {
  const crop = (
    crops as unknown as Array<{
      name: string;
      sellPrice: number;
      growthDays: number;
      regrowDays: number;
      seedCost: number;
    }>
  ).find((entry) => entry.name === name);

  if (!crop) {
    throw new Error(`Crop not found in crops.json: ${name}`);
  }

  return crop;
}

function winePrice(baseFruitSellPrice: number, artisan = false): number {
  const base = baseFruitSellPrice * 3;
  return artisan ? base * 1.4 : base;
}

function jellyPrice(baseFruitSellPrice: number, artisan = false): number {
  const base = 2 * baseFruitSellPrice + 50;
  return artisan ? base * 1.4 : base;
}

function goldPerDay(value: number, days: number): number {
  return value / days;
}

function annualizedKegGpdFromCycle(
  wineSellPrice: number,
  cycleDays: number,
): { gpd: number; gpy: number } {
  const gpd = wineSellPrice / cycleDays;
  const gpy = gpd * 112;
  return { gpd, gpy };
}

export default function AncientFruitWineVsStarfruitWinePage() {
  const fromPath = "/blog/ancient-fruit-wine-vs-starfruit-wine";
  const readNextPosts = getBlogReadNextPosts(
    "ancient-fruit-wine-vs-starfruit-wine",
    3,
  );

  const ancientFruit = pickCrop("Ancient Fruit");
  const starfruit = pickCrop("Starfruit");

  // Reference values from crops.json
  const ancientFruitBase = ancientFruit.sellPrice; // 550
  const starfruitBase = starfruit.sellPrice; // 750

  // Standard processed-good formulas (base quality; no perks except Artisan option below)
  const ancientWine = winePrice(ancientFruitBase, false);
  const ancientWineArtisan = winePrice(ancientFruitBase, true);
  const starWine = winePrice(starfruitBase, false);
  const starWineArtisan = winePrice(starfruitBase, true);

  const ancientJelly = jellyPrice(ancientFruitBase, false);
  const ancientJellyArtisan = jellyPrice(ancientFruitBase, true);
  const starJelly = jellyPrice(starfruitBase, false);
  const starJellyArtisan = jellyPrice(starfruitBase, true);

  // Throughput assumptions (ignoring fruit growth constraints; focuses on machine time)
  // - Keg: 7 days per wine
  // - Jar: 3 days per jelly
  const kegDays = 7;
  const jarDays = 3;

  const annualAncientWineBase = annualizedKegGpdFromCycle(ancientWine, kegDays);
  const annualAncientWineArtisan = annualizedKegGpdFromCycle(
    ancientWineArtisan,
    kegDays,
  );
  const annualStarWineBase = annualizedKegGpdFromCycle(starWine, kegDays);
  const annualStarWineArtisan = annualizedKegGpdFromCycle(
    starWineArtisan,
    kegDays,
  );

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
            { name: "Ancient Fruit Wine vs Starfruit Wine (Deep Dive)" },
          ]}
        />

<article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Quick Answer
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Ancient Fruit Wine vs Starfruit Wine (Deep Dive)
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              ancient fruit wine vs starfruit wine stardew valley｜古代果实酒 vs
              杨桃酒
            </p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Quick Answer
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                If you can reliably supply fruit,{" "}
                <strong>Starfruit Wine</strong> is the highest-value wine per
                keg cycle (base: {formatGold(starWine)}, Artisan:{" "}
                {formatGold(starWineArtisan)}).
              </p>
              <p>
                For set-and-forget farming, <strong>Ancient Fruit</strong> is
                usually the better long-term system: it regrows every{" "}
                {ancientFruit.regrowDays} days and doesn’t require replanting,
                so it’s easier to keep your kegs running all year.
              </p>
              <p>
                In practice:{" "}
                <strong>Starfruit wins on “value per fruit”</strong>, while{" "}
                <strong>Ancient Fruit wins on “reliability + scale”</strong>{" "}
                (especially in the greenhouse).
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Side-by-Side Comparison
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              All numbers below use base-quality fruit and standard processing
              formulas.
            </p>

            <div className="mt-4 overflow-x-auto rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8]">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead className="bg-[#fce8b1] text-[#4a321e]">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Metric</th>
                    <th className="px-4 py-3 font-semibold">Ancient Fruit</th>
                    <th className="px-4 py-3 font-semibold">Starfruit</th>
                    <th className="px-4 py-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-[#5f4228]/90">
                  <tr className="border-t border-[#7c4d2e]/20">
                    <td className="px-4 py-3 font-semibold">
                      Base fruit sell price
                    </td>
                    <td className="px-4 py-3">
                      {formatGold(ancientFruitBase)}
                    </td>
                    <td className="px-4 py-3">{formatGold(starfruitBase)}</td>
                    <td className="px-4 py-3">From `crops.json`</td>
                  </tr>
                  <tr className="border-t border-[#7c4d2e]/20">
                    <td className="px-4 py-3 font-semibold">Growth / regrow</td>
                    <td className="px-4 py-3">
                      {ancientFruit.growthDays}d / {ancientFruit.regrowDays}d
                    </td>
                    <td className="px-4 py-3">{starfruit.growthDays}d / —</td>
                    <td className="px-4 py-3">Ancient Fruit is regrowing</td>
                  </tr>
                  <tr className="border-t border-[#7c4d2e]/20">
                    <td className="px-4 py-3 font-semibold">Wine (keg)</td>
                    <td className="px-4 py-3">
                      {formatGold(ancientWine)} /{" "}
                      {formatGold(ancientWineArtisan)}
                    </td>
                    <td className="px-4 py-3">
                      {formatGold(starWine)} / {formatGold(starWineArtisan)}
                    </td>
                    <td className="px-4 py-3">Base / Artisan</td>
                  </tr>
                  <tr className="border-t border-[#7c4d2e]/20">
                    <td className="px-4 py-3 font-semibold">Jelly (jar)</td>
                    <td className="px-4 py-3">
                      {formatGold(ancientJelly)} /{" "}
                      {formatGold(ancientJellyArtisan)}
                    </td>
                    <td className="px-4 py-3">
                      {formatGold(starJelly)} / {formatGold(starJellyArtisan)}
                    </td>
                    <td className="px-4 py-3">Base / Artisan</td>
                  </tr>
                  <tr className="border-t border-[#7c4d2e]/20">
                    <td className="px-4 py-3 font-semibold">
                      Wine value per day of keg time
                    </td>
                    <td className="px-4 py-3">
                      {formatGold(goldPerDay(ancientWine, kegDays))}/day
                    </td>
                    <td className="px-4 py-3">
                      {formatGold(goldPerDay(starWine, kegDays))}/day
                    </td>
                    <td className="px-4 py-3">Throughput comparison</td>
                  </tr>
                  <tr className="border-t border-[#7c4d2e]/20">
                    <td className="px-4 py-3 font-semibold">
                      Jelly value per day of jar time
                    </td>
                    <td className="px-4 py-3">
                      {formatGold(goldPerDay(ancientJelly, jarDays))}/day
                    </td>
                    <td className="px-4 py-3">
                      {formatGold(goldPerDay(starJelly, jarDays))}/day
                    </td>
                    <td className="px-4 py-3">Jars are faster cycles</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Long-Term Profit Analysis (Annualized)
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                The biggest “deep dive” mistake is comparing fruit values but
                ignoring <strong>machine time</strong>. A keg is usually your
                bottleneck.
              </p>
              <p>
                If a keg runs nonstop for a full in-game year (112 days), then
                the annualized return per keg is:
              </p>

              <div className="mt-4 overflow-x-auto rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8]">
                <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                  <thead className="bg-[#fce8b1] text-[#4a321e]">
                    <tr>
                      <th className="px-4 py-3 font-semibold">
                        Per-keg Annualized
                      </th>
                      <th className="px-4 py-3 font-semibold">
                        Ancient Fruit Wine
                      </th>
                      <th className="px-4 py-3 font-semibold">
                        Starfruit Wine
                      </th>
                      <th className="px-4 py-3 font-semibold">
                        Interpretation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[#5f4228]/90">
                    <tr className="border-t border-[#7c4d2e]/20">
                      <td className="px-4 py-3 font-semibold">
                        Gold/day (keg time)
                      </td>
                      <td className="px-4 py-3">
                        {formatGold(annualAncientWineBase.gpd)}/day
                      </td>
                      <td className="px-4 py-3">
                        {formatGold(annualStarWineBase.gpd)}/day
                      </td>
                      <td className="px-4 py-3">Base professions</td>
                    </tr>
                    <tr className="border-t border-[#7c4d2e]/20">
                      <td className="px-4 py-3 font-semibold">
                        Gold/year (112d)
                      </td>
                      <td className="px-4 py-3">
                        {formatGold(annualAncientWineBase.gpy)}
                      </td>
                      <td className="px-4 py-3">
                        {formatGold(annualStarWineBase.gpy)}
                      </td>
                      <td className="px-4 py-3">Assumes nonstop supply</td>
                    </tr>
                    <tr className="border-t border-[#7c4d2e]/20">
                      <td className="px-4 py-3 font-semibold">
                        Gold/year with Artisan
                      </td>
                      <td className="px-4 py-3">
                        {formatGold(annualAncientWineArtisan.gpy)}
                      </td>
                      <td className="px-4 py-3">
                        {formatGold(annualStarWineArtisan.gpy)}
                      </td>
                      <td className="px-4 py-3">+40% sell price</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                So why do many players still pick Ancient Fruit for the
                greenhouse? Because the question usually isn’t “which wine is
                worth more,” it’s{" "}
                <strong>
                  which crop keeps my kegs full with the least hassle
                </strong>
                . Ancient Fruit regrows every {ancientFruit.regrowDays} days
                after its first harvest, while Starfruit needs seeds,
                replanting, and seasonal access.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Keg vs Jar for Each Crop
            </h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">
                  Ancient Fruit
                </h3>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90">
                  <li>
                    <strong>Keg:</strong> Wine sells for{" "}
                    {formatGold(ancientWine)} (Artisan{" "}
                    {formatGold(ancientWineArtisan)}). Best if kegs are your
                    main money engine.
                  </li>
                  <li>
                    <strong>Jar:</strong> Jelly sells for{" "}
                    {formatGold(ancientJelly)} (Artisan{" "}
                    {formatGold(ancientJellyArtisan)}). Better if you’re
                    jar-heavy early game.
                  </li>
                  <li>
                    <strong>Practical tip:</strong> Ancient Fruit’s{" "}
                    {ancientFruit.regrowDays}-day regrow lines up nicely with
                    weekly keg cycles (you can batch harvest + reload).
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">
                  Starfruit
                </h3>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90">
                  <li>
                    <strong>Keg:</strong> Wine sells for {formatGold(starWine)}{" "}
                    (Artisan {formatGold(starWineArtisan)}). Highest
                    value-per-keg-cycle in this matchup.
                  </li>
                  <li>
                    <strong>Jar:</strong> Jelly sells for{" "}
                    {formatGold(starJelly)} (Artisan{" "}
                    {formatGold(starJellyArtisan)}). Jars are faster, but the
                    top-end payoff is still usually in wine.
                  </li>
                  <li>
                    <strong>Practical tip:</strong> Starfruit is a
                    single-harvest crop ({starfruit.growthDays} days), so it
                    shines when you can mass-plant in summer (or run it in
                    greenhouse with seed supply).
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#5f4228]/90">
              Rule of thumb: if you’re limited by <strong>kegs</strong>, push
              your best fruit into kegs (usually Starfruit); if you’re limited
              by <strong>fruit supply</strong>, Ancient Fruit’s regrow
              consistency can outperform in real play.
            </p>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Which One Should You Choose?
            </h2>
            <div className="mt-3 space-y-2 text-sm leading-6 text-[#5f4228]/90">
              <p>
                ✅ Choose <strong>Ancient Fruit → Wine</strong> if you want the
                easiest long-term greenhouse setup: plant once, harvest weekly,
                keep kegs loaded.
              </p>
              <p>
                ✅ Choose <strong>Starfruit → Wine</strong> if you can handle
                seed logistics and want the biggest payday per bottle
                (especially with Artisan and casks).
              </p>
              <p>
                ✅ Choose{" "}
                <strong>Starfruit in kegs + Ancient Fruit as backup</strong> if
                you often run out of Starfruit: use Ancient Fruit to prevent
                idle kegs.
              </p>
              <p>
                ⚠️ If you’re early-game and mostly have preserves jars, both
                crops still work — but the machine you have more of should
                decide.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">
              Calculator Presets
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              Try these presets to compare assumptions quickly. (You can tweak
              everything in the calculator after opening.)
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?crop=ancient_fruit&process=keg&daysLeft=112&location=greenhouse"
                fromPath={fromPath}
                ctaName="ancient_fruit_wine_year"
                className={CTA_CLASS}
              >
                <span
                  aria-hidden
                  className="inline-flex items-center leading-none opacity-85"
                >
                  🍷
                </span>
                Ancient Fruit Wine (112 days)
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?crop=starfruit&process=keg&daysLeft=28&season=summer"
                fromPath={fromPath}
                ctaName="starfruit_wine_summer"
                className={CTA_CLASS}
              >
                <span
                  aria-hidden
                  className="inline-flex items-center leading-none opacity-85"
                >
                  ⭐
                </span>
                Starfruit Wine (Summer 28 days)
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?crop=starfruit&process=keg&daysLeft=112&profession=artisan&location=greenhouse"
                fromPath={fromPath}
                ctaName="starfruit_wine_year_artisan"
                className={CTA_CLASS}
              >
                <span
                  aria-hidden
                  className="inline-flex items-center leading-none opacity-85"
                >
                  🏆
                </span>
                Starfruit Wine + Artisan (112 days)
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">FAQ</h2>

            <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#6f4b2a]/80">
              EN
            </h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90">
              {FAQ_EN.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>

            <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#6f4b2a]/80">
              ZH
            </h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90">
              {FAQ_ZH.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </section>
        </article>

        <BlogReadNext
          posts={readNextPosts}
          currentSlug="ancient-fruit-wine-vs-starfruit-wine"
        />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}

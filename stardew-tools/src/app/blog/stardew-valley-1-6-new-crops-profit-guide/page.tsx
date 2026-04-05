import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_ORIGIN } from "@/lib/site";
import { getBlogReadNextPosts } from "@/lib/read-next";

const fromPath = "/blog/stardew-valley-1-6-new-crops-profit-guide";

const FAQ_ITEMS = [
  {
    question: "Is Stardew Valley 1.6 really only 4 new crops?",
    answer:
      "Yes. The official 1.6 changelog explicitly states four new crops: Carrot, Summer Squash, Broccoli, and Powdermelon.",
  },
  {
    question: "Is Powdermelon a summer regrow crop?",
    answer:
      "No. Powdermelon is a winter crop, takes 7 days, and is not regrowable.",
  },
  {
    question: "Which of the 4 new crops is best for raw field profit?",
    answer:
      "In a season-level, seed-opportunity-cost model (Day 1 planting, 28 days), Summer Squash is first and Broccoli is second. Carrot is mainly a fast-cash spring tool, and Powdermelon is lower as raw winter output.",
  },
  {
    question: "Does Deluxe Speed-Gro make Summer Squash and Broccoli regrow faster?",
    answer:
      "No. It can accelerate first maturity but does not reduce the regrow interval itself.",
  },
  {
    question: "Keg or Preserves Jar for the 4 new crops?",
    answer:
      "Under the timing model used in this guide (Juice 4000 min, Wine 10000 min, Jar 4000 min), Jars generally produce stronger value per machine-minute for these four crops.",
  },
] as const;

export const metadata: Metadata = {
  title: "Stardew Valley 1.6: 4 New Crops Profit Guide (Reproducible Math)",
  description:
    "Stardew Valley 1.6 added 4 new crops, not 8. Compare Carrot, Summer Squash, Broccoli, and Powdermelon with reproducible profit formulas, seed acquisition routes, and processing math.",
  openGraph: {
    type: "article",
    publishedTime: "2026-04-05T00:00:00+08:00",
    modifiedTime: "2026-04-05T00:00:00+08:00",
  },
};

export default async function Page() {
  const readNextPosts = await getBlogReadNextPosts(fromPath);

  return (
    <>
      <PwaRegisterScript />
      <FaqJsonLd faqs={FAQ_ITEMS} />

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <Breadcrumb
            items={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
              {
                name: "1.6 New Crops Profit Guide",
                href: fromPath,
              },
            ]}
          />

          <article className="prose prose-lg mx-auto mt-8 max-w-none">
            <h1>Stardew Valley 1.6: 4 New Crops Profit Guide (With Reproducible Math)</h1>

            <p>
              Stardew Valley 1.6 added <strong>four</strong> new crops, not eight:{" "}
              <strong>Carrot, Summer Squash, Broccoli, and Powdermelon</strong>. If you are
              optimizing your farm for gold, this matters, because any strategy built on the old
              "8 new crops" claim will push you into bad decisions and broken calculations.
            </p>

            <p>
              This guide is a full rewrite with one goal: every key number should be easy to verify
              and easy to hand-calculate. We will cover:
            </p>

            <ul>
              <li>The only four true 1.6 crops</li>
              <li>Correct growth/regrow/season values</li>
              <li>Correct processing formulas and times</li>
              <li>Seed acquisition paths (since these seeds are not sold in normal stores)</li>
              <li>Step-by-step profit formulas you can reproduce on paper</li>
            </ul>

            <p>
              If you want to test your own layout (field tiles, machine count, professions,
              fertilizer), run the same formulas in our{" "}
              <TrackedBlogCtaLink href="/calculator" fromPath={fromPath} ctaName="calculator">
                Stardew crop profit calculator
              </TrackedBlogCtaLink>
              .
            </p>

            <h2>TL;DR: Fast Ranking Before the Deep Dive</h2>

            <p>
              If we compare one tile for a full in-season window (28 days) using a conservative
              seed opportunity-cost model (explained below), the four new crops rank like this:
            </p>

            <ol>
              <li>
                <strong>Summer Squash</strong> (best seasonal net among the 4)
              </li>
              <li>
                <strong>Broccoli</strong> (very close, strong low-maintenance fall performer)
              </li>
              <li>
                <strong>Carrot</strong> (great early cash flow, lower long-window yield)
              </li>
              <li>
                <strong>Powdermelon</strong> (correctly modeled as winter, non-regrow, modest raw
                return)
              </li>
            </ol>

            <p>
              If your bottleneck is artisan machines instead of field tiles,{" "}
              <strong>
                Preserves Jar products are generally more machine-efficient than Keg products
              </strong>{" "}
              for these four crops under this guide's required processing-time assumptions.
            </p>

            <p>
              You can validate all of this using the formulas in this article or directly in the{" "}
              <TrackedBlogCtaLink href="/calculator" fromPath={fromPath} ctaName="calculator">
                calculator
              </TrackedBlogCtaLink>
              .
            </p>

            <h2>Data Snapshot: The 4 Real 1.6 Crops</h2>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Crop</th>
                    <th>Season</th>
                    <th>Days to First Harvest</th>
                    <th>Regrow Interval</th>
                    <th>Base Sell Price</th>
                    <th>Crop Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Carrot</td>
                    <td>Spring</td>
                    <td>3</td>
                    <td>No regrow</td>
                    <td>35g</td>
                    <td>Vegetable</td>
                  </tr>
                  <tr>
                    <td>Summer Squash</td>
                    <td>Summer</td>
                    <td>6</td>
                    <td>3 days</td>
                    <td>45g</td>
                    <td>Vegetable</td>
                  </tr>
                  <tr>
                    <td>Broccoli</td>
                    <td>Fall</td>
                    <td>8</td>
                    <td>4 days</td>
                    <td>70g</td>
                    <td>Vegetable</td>
                  </tr>
                  <tr>
                    <td>Powdermelon</td>
                    <td>Winter</td>
                    <td>7</td>
                    <td>No regrow</td>
                    <td>60g</td>
                    <td>Fruit</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <strong>Important correction:</strong> Powdermelon is <strong>winter</strong>,{" "}
              <strong>7 days</strong>, <strong>not regrowable</strong>, and{" "}
              <strong>60g base sell</strong>.
            </p>

            <h2>How To Get the New Seeds (They Are Not in Normal Shops)</h2>

            <p>
              1.6 new seeds are not sold at Pierre/Joja/Traveling Cart in the usual way. You need
              alternate acquisition routes.
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Seed</th>
                    <th>Normal Shop Purchase</th>
                    <th>Core Acquisition Routes</th>
                    <th>Seasonal Drop Window</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Carrot Seeds</td>
                    <td>Not sold</td>
                    <td>
                      Seed Spots, Raccoon requests, Raccoon Wife trade (1 Maple Seed), Golden
                      Fishing Treasure Chest, Seed Maker, Prize Machine, Mystery Boxes,
                      crates/barrels, Iridium Golems
                    </td>
                    <td>Winter 21 to Spring 23</td>
                  </tr>
                  <tr>
                    <td>Summer Squash Seeds</td>
                    <td>Not sold</td>
                    <td>
                      Seed Spots, Raccoon requests, Raccoon Wife trade (15 Sap), Golden Fishing
                      Treasure Chest, Seed Maker, Prize Machine, Mystery Boxes, crates/barrels,
                      Iridium Golems
                    </td>
                    <td>Spring 24 to Summer 20</td>
                  </tr>
                  <tr>
                    <td>Broccoli Seeds</td>
                    <td>Not sold</td>
                    <td>
                      Seed Spots, Raccoon requests, Raccoon Wife trade (5 Moss), Golden Fishing
                      Treasure Chest, Seed Maker, Prize Machine, Mystery Boxes, crates/barrels,
                      Iridium Golems
                    </td>
                    <td>Summer 21 to Fall 20</td>
                  </tr>
                  <tr>
                    <td>Powdermelon Seeds</td>
                    <td>Not sold</td>
                    <td>
                      Seed Spots, Raccoon requests, Raccoon Wife trade (2 Pine Cone), Golden
                      Fishing Treasure Chest, Seed Maker, Prize Machine, Mystery Boxes,
                      crates/barrels, Iridium Golems
                    </td>
                    <td>Fall 21 to Winter 20</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Practical takeaway: seed availability in Year 1 is spikier than normal Pierre crops.
              Plan around your actual seed inventory, not a theoretical "I can buy 500 tomorrow"
              assumption.
            </p>

            <h2>Assumption Box (Read This Before Comparing Numbers)</h2>

            <p>To keep every table reproducible, this guide uses explicit assumptions:</p>

            <ul>
              <li>
                <strong>Time window:</strong> 28-day season.
              </li>
              <li>
                <strong>Planting day:</strong> Day 1 of the crop's season.
              </li>
              <li>
                <strong>Watering:</strong> Every day (no missed growth).
              </li>
              <li>
                <strong>Seed-cost model (default):</strong> We use each seed's{" "}
                <strong>sell price as opportunity cost</strong> (Carrot 15g, Summer Squash 20g,
                Broccoli 40g, Powdermelon 20g from seed pages).
              </li>
              <li>
                <strong>Alternative model:</strong> If you treat found seeds as "free," use the
                gross model (shown alongside net where useful).
              </li>
              <li>
                <strong>Quality/professions:</strong> Base quality, no Tiller/Artisan bonuses in
                core comparison.
              </li>
              <li>
                <strong>Machine bottleneck:</strong> Processing sections separate field output from
                machine throughput; do not assume infinite Kegs/Jars.
              </li>
              <li>
                <strong>Fertilizer rule:</strong> Speed-Gro/Agriculturist can reduce time to first
                harvest, but <strong>do not reduce regrow interval</strong> for multi-harvest crops.
              </li>
            </ul>

            <p>
              This assumption block is exactly why your results can differ from random online tier
              lists.
            </p>

            <p className="text-center my-8">
              <TrackedBlogCtaLink
                href="/calculator"
                fromPath={fromPath}
                ctaName="calculator-cta"
                className="inline-block rounded-lg bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700 transition-colors"
              >
                Calculate Your Farm Profit →
              </TrackedBlogCtaLink>
            </p>

            <h2>Reproducible Profit Formulas</h2>

            <p>We will use only a few formulas.</p>

            <h3>1) Harvest Count</h3>

            <p>For a non-regrow crop planted on Day 1:</p>

            <p>
              <code>H = floor((L - 1) / D)</code>
            </p>

            <p>For a regrow crop planted on Day 1:</p>

            <p>
              <code>H = 1 + floor((L - D - 1) / R)</code>
            </p>

            <p>Where:</p>

            <ul>
              <li>
                <code>L</code> = season length (28)
              </li>
              <li>
                <code>D</code> = days to first harvest
              </li>
              <li>
                <code>R</code> = regrow interval
              </li>
              <li>
                <code>H</code> = total harvests in the season
              </li>
            </ul>

            <h3>2) Seasonal Revenue and Net Profit</h3>

            <p>
              <code>Revenue = H x S</code>
            </p>

            <p>
              <code>SeedCost = U x C</code>
            </p>

            <p>
              <code>NetProfit = Revenue - SeedCost</code>
            </p>

            <p>Where:</p>

            <ul>
              <li>
                <code>S</code> = crop sell price
              </li>
              <li>
                <code>C</code> = seed opportunity cost
              </li>
              <li>
                <code>U</code> = seeds consumed in season
                <ul>
                  <li>
                    For non-regrow crops: <code>U = H</code>
                  </li>
                  <li>
                    For regrow crops: <code>U = 1</code>
                  </li>
                </ul>
              </li>
            </ul>

            <h3>3) Per-Day Metrics (Season-Level)</h3>

            <p>
              <code>GrossPerDay = Revenue / L</code>
            </p>

            <p>
              <code>NetPerDay = NetProfit / L</code>
            </p>

            <p>
              These formulas are easy to port into the{" "}
              <TrackedBlogCtaLink href="/calculator" fromPath={fromPath} ctaName="calculator">
                calculator
              </TrackedBlogCtaLink>{" "}
              and match by hand.
            </p>

            <h2>Full Seasonal Math for Each New Crop (Step by Step)</h2>

            <h3>Carrot (Spring, 3 days, no regrow)</h3>

            <p>Inputs:</p>

            <ul>
              <li>
                <code>L = 28</code>
              </li>
              <li>
                <code>D = 3</code>
              </li>
              <li>
                <code>S = 35</code>
              </li>
              <li>
                <code>C = 15</code>
              </li>
            </ul>

            <p>Harvest count:</p>

            <p>
              <code>H = floor((28 - 1) / 3) = floor(27 / 3) = 9</code>
            </p>

            <p>Revenue:</p>

            <p>
              <code>Revenue = 9 x 35 = 315g</code>
            </p>

            <p>Seed consumption and cost (non-regrow):</p>

            <p>
              <code>U = H = 9</code>
            </p>

            <p>
              <code>SeedCost = 9 x 15 = 135g</code>
            </p>

            <p>Net:</p>

            <p>
              <code>NetProfit = 315 - 135 = 180g</code>
            </p>

            <p>Per day:</p>

            <p>
              <code>GrossPerDay = 315 / 28 = 11.25g/day</code>
            </p>

            <p>
              <code>NetPerDay = 180 / 28 = 6.43g/day</code>
            </p>

            <p>
              Interpretation: Carrot is still a strong <strong>cash-flow crop</strong> because of
              the 3-day loop, but it is not the best long-window earner among the four once you
              include seed opportunity cost.
            </p>

            <h3>Summer Squash (Summer, 6 days then 3 days)</h3>

            <p>Inputs:</p>

            <ul>
              <li>
                <code>L = 28</code>
              </li>
              <li>
                <code>D = 6</code>
              </li>
              <li>
                <code>R = 3</code>
              </li>
              <li>
                <code>S = 45</code>
              </li>
              <li>
                <code>C = 20</code>
              </li>
            </ul>

            <p>Harvest count:</p>

            <p>
              <code>H = 1 + floor((28 - 6 - 1) / 3)</code>
            </p>

            <p>
              <code>H = 1 + floor(21 / 3) = 8</code>
            </p>

            <p>Revenue:</p>

            <p>
              <code>Revenue = 8 x 45 = 360g</code>
            </p>

            <p>Seed cost (regrow):</p>

            <p>
              <code>U = 1</code>
            </p>

            <p>
              <code>SeedCost = 1 x 20 = 20g</code>
            </p>

            <p>Net:</p>

            <p>
              <code>NetProfit = 360 - 20 = 340g</code>
            </p>

            <p>Per day:</p>

            <p>
              <code>GrossPerDay = 360 / 28 = 12.86g/day</code>
            </p>

            <p>
              <code>NetPerDay = 340 / 28 = 12.14g/day</code>
            </p>

            <p>
              Interpretation: Summer Squash wins this model because regrowth gives repeated harvests
              while only consuming one seed.
            </p>

            <h3>Broccoli (Fall, 8 days then 4 days)</h3>

            <p>Inputs:</p>

            <ul>
              <li>
                <code>L = 28</code>
              </li>
              <li>
                <code>D = 8</code>
              </li>
              <li>
                <code>R = 4</code>
              </li>
              <li>
                <code>S = 70</code>
              </li>
              <li>
                <code>C = 40</code>
              </li>
            </ul>

            <p>Harvest count:</p>

            <p>
              <code>H = 1 + floor((28 - 8 - 1) / 4)</code>
            </p>

            <p>
              <code>H = 1 + floor(19 / 4) = 5</code>
            </p>

            <p>Revenue:</p>

            <p>
              <code>Revenue = 5 x 70 = 350g</code>
            </p>

            <p>Seed cost (regrow):</p>

            <p>
              <code>U = 1</code>
            </p>

            <p>
              <code>SeedCost = 1 x 40 = 40g</code>
            </p>

            <p>Net:</p>

            <p>
              <code>NetProfit = 350 - 40 = 310g</code>
            </p>

            <p>Per day:</p>

            <p>
              <code>GrossPerDay = 350 / 28 = 12.50g/day</code>
            </p>

            <p>
              <code>NetPerDay = 310 / 28 = 11.07g/day</code>
            </p>

            <p>
              Interpretation: Broccoli is nearly tied with Summer Squash and has very low management
              overhead in fall.
            </p>

            <h3>Powdermelon (Winter, 7 days, no regrow)</h3>

            <p>Inputs:</p>

            <ul>
              <li>
                <code>L = 28</code>
              </li>
              <li>
                <code>D = 7</code>
              </li>
              <li>
                <code>S = 60</code>
              </li>
              <li>
                <code>C = 20</code>
              </li>
            </ul>

            <p>Harvest count:</p>

            <p>
              <code>H = floor((28 - 1) / 7) = floor(27 / 7) = 3</code>
            </p>

            <p>Revenue:</p>

            <p>
              <code>Revenue = 3 x 60 = 180g</code>
            </p>

            <p>Seed cost:</p>

            <p>
              <code>U = H = 3</code>
            </p>

            <p>
              <code>SeedCost = 3 x 20 = 60g</code>
            </p>

            <p>Net:</p>

            <p>
              <code>NetProfit = 180 - 60 = 120g</code>
            </p>

            <p>Per day:</p>

            <p>
              <code>GrossPerDay = 180 / 28 = 6.43g/day</code>
            </p>

            <p>
              <code>NetPerDay = 120 / 28 = 4.29g/day</code>
            </p>

            <p>
              Interpretation: Powdermelon is correctly modeled as a winter single-harvest cycle
              crop. It is useful, but it is not a hidden regrow monster.
            </p>

            <h2>Comparison Table: Seasonal Field Performance (Per Tile)</h2>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Crop</th>
                    <th>Harvests in 28 Days</th>
                    <th>Revenue</th>
                    <th>Seed Cost</th>
                    <th>Net Profit</th>
                    <th>Gross/Day</th>
                    <th>Net/Day</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Carrot</td>
                    <td>9</td>
                    <td>315g</td>
                    <td>135g</td>
                    <td>180g</td>
                    <td>11.25</td>
                    <td>6.43</td>
                  </tr>
                  <tr>
                    <td>Summer Squash</td>
                    <td>8</td>
                    <td>360g</td>
                    <td>20g</td>
                    <td>340g</td>
                    <td>12.86</td>
                    <td>12.14</td>
                  </tr>
                  <tr>
                    <td>Broccoli</td>
                    <td>5</td>
                    <td>350g</td>
                    <td>40g</td>
                    <td>310g</td>
                    <td>12.50</td>
                    <td>11.07</td>
                  </tr>
                  <tr>
                    <td>Powdermelon</td>
                    <td>3</td>
                    <td>180g</td>
                    <td>60g</td>
                    <td>120g</td>
                    <td>6.43</td>
                    <td>4.29</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              If you switch to a "seeds are free drops" model, subtract the seed-cost column from
              your decision process. That boosts all four, but does not change the core behavior
              pattern: Summer Squash and Broccoli remain the strongest season-long tile earners.
            </p>

            <p className="text-center my-8">
              <TrackedBlogCtaLink
                href="/calculator"
                fromPath={fromPath}
                ctaName="calculator-cta"
                className="inline-block rounded-lg bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700 transition-colors"
              >
                Try the Profit Calculator →
              </TrackedBlogCtaLink>
            </p>

            <h2>FAQ</h2>

            {FAQ_ITEMS.map((item, i) => (
              <div key={i}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}

            <h2>Final Takeaways</h2>

            <p>The corrected 1.6 crop picture is much cleaner than the misinformation version:</p>

            <ul>
              <li>
                <strong>Only 4 true new crops.</strong>
              </li>
              <li>
                <strong>Powdermelon is winter, 7-day, non-regrow.</strong>
              </li>
              <li>
                <strong>Speed-Gro does not alter regrow interval.</strong>
              </li>
              <li>
                <strong>
                  Seed acquisition is a real constraint because normal stores do not sell these
                  seeds.
                </strong>
              </li>
              <li>
                <strong>
                  Processing decisions must include machine bottlenecks, not just raw sell
                  multipliers.
                </strong>
              </li>
            </ul>

            <p>If you want one practical default plan:</p>

            <ol>
              <li>Use Carrot for fast Spring liquidity.</li>
              <li>Lean on Summer Squash in Summer for strong stable net.</li>
              <li>Shift to Broccoli rhythm in Fall for reliable high-value cycles.</li>
              <li>
                Use Powdermelon in Winter as a correctly scoped supplemental crop, not a fake regrow
                anchor.
              </li>
            </ol>

            <p>
              Then customize from there using your own tile count, machine count, and profession
              setup in the{" "}
              <TrackedBlogCtaLink href="/calculator" fromPath={fromPath} ctaName="calculator">
                calculator
              </TrackedBlogCtaLink>
              .
            </p>

            <div className="mt-12 rounded-lg bg-green-50 p-6">
              <h3 className="mt-0">Related Guides</h3>
              <ul className="mb-0">
                <li>
                  <Link href="/blog/best-crops-every-season" className="text-green-700 hover:text-green-900">
                    Best Crops Every Season
                  </Link>
                </li>
                <li>
                  <Link href="/blog/kegs-vs-preserves-jars-complete-guide" className="text-green-700 hover:text-green-900">
                    Kegs vs Preserves Jars Complete Guide
                  </Link>
                </li>
                <li>
                  <Link href="/blog/stardew-valley-speed-gro-when-to-use" className="text-green-700 hover:text-green-900">
                    Speed-Gro: When to Use
                  </Link>
                </li>
              </ul>
            </div>
          </article>

          {readNextPosts.length > 0 && (
            <BlogReadNext posts={readNextPosts} currentSlug={fromPath} />
          )}
        </div>
      </div>

      <SiteFooter />
    </>
  );
}

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

const fromPath = "/blog/kegs-vs-preserves-jars-complete-guide";

const FAQ_ITEMS = [
  {
    question: "Should I use kegs or preserves jars in Stardew Valley?",
    answer:
      "Use kegs for high-value crops (Ancient Fruit, Starfruit, Melon) because wine multiplies base value by 3×. Use preserves jars for low-value crops (Cranberry, Blueberry) because they add a flat +100g bonus. The break-even point is around 80-100g base crop value.",
  },
  {
    question: "What is the profit difference between kegs and jars?",
    answer:
      "For Ancient Fruit: kegs make 2,310g (330g/day) vs jars 1,540g (385g/day). Kegs win on total value, jars win on daily throughput. For Cranberry: jars make 280g (70g/day) vs kegs 315g (45g/day). Jars win both metrics for cheap crops.",
  },
  {
    question: "How many kegs vs jars should I build?",
    answer:
      "Start with 10-20 preserves jars (cheaper, faster). Build kegs once you have Oak Resin production and high-value crops. Aim for 1 keg per Ancient Fruit plant, or 1 jar per 2-3 cheap crop harvests per week.",
  },
  {
    question: "Do I need the Artisan profession for kegs and jars?",
    answer:
      "Artisan (+40% artisan good value) is essential for maximizing profit. It boosts both kegs and jars equally, making it the best Level 10 Farming profession for most players.",
  },
  {
    question: "Can I use both kegs and jars together?",
    answer:
      "Yes! Use kegs for expensive crops and jars for cheap crops. This maximizes profit across your entire farm. Process high-value items in kegs first, then use jars for overflow or low-value crops.",
  },
] as const;

export const metadata: Metadata = {
  title: "Kegs vs Preserves Jars: Complete Profit Guide (Stardew Valley)",
  description:
    "Kegs vs Preserves Jars in Stardew Valley: which artisan machine makes more money? Complete profit math, tier lists, material costs, and processing speed comparison.",
  openGraph: {
    type: "article",
    publishedTime: "2026-04-03T00:00:00+08:00",
    modifiedTime: "2026-04-03T00:00:00+08:00",
  },
};

const CARD =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";

const H2 = "text-xl font-semibold text-[#4a321e] sm:text-2xl";

const P = "mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base";

const LINK =
  "font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]";

const CTA_CLASS =
  "inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]";

export default function KegsVsPreservesJarsPage() {
  const pageUrl = `${SITE_ORIGIN}${fromPath}`;
  const readNextPosts = getBlogReadNextPosts("kegs-vs-preserves-jars-complete-guide", 3);

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
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Kegs vs Preserves Jars" },
          ]}
        />

        <article className={`${CARD} mt-6`}>
          <h1 className="text-2xl font-bold text-[#4a321e] sm:text-3xl lg:text-4xl">
            Stardew Valley Kegs vs Preserves Jars: Which Artisan Good Makes More Money?
          </h1>

          <div className="mt-6 flex flex-wrap gap-3">
            <TrackedBlogCtaLink
              href="/calculator"
              fromPath={fromPath}
              ctaName="calculator-top"
              className={CTA_CLASS}
            >
              📊 Profit Calculator
            </TrackedBlogCtaLink>
            <TrackedBlogCtaLink
              href="/blog/best-crops-every-season"
              fromPath={fromPath}
              ctaName="best-crops-guide"
              className={CTA_CLASS}
            >
              🌱 Best Crops Guide
            </TrackedBlogCtaLink>
          </div>

          <section className="mt-8">
            <h2 className={H2}>Quick Answer: Kegs or Preserves Jars?</h2>
            <p className={P}>
              <strong>For maximum profit per item</strong>: Kegs win for high-value crops (Ancient Fruit, Starfruit, Melon) because wine multiplies base value by 3×. Preserves Jars are better for low-value crops (Cranberry, Blueberry, Hot Pepper) because they add a flat +100g bonus regardless of base price.
            </p>
            <p className={P}>
              <strong>For speed and throughput</strong>: Preserves Jars process in 2-4 days vs 7 days for Kegs, making them ideal when you have more crops than processing capacity.
            </p>
            <p className={P}>
              <strong>For early-game cash flow</strong>: Preserves Jars require fewer materials (40 Wood, 8 Stone, 50 Coal) and turn around faster, helping you scale production before you can afford dozens of Kegs.
            </p>
            <p className={P}>
              <strong>Bottom line</strong>: Use Kegs for expensive crops (&gt;100g base value), Preserves Jars for cheap crops (&lt;80g base value), and prioritize Kegs once you have Artisan profession unlocked.
            </p>
          </section>

          <section className="mt-8">
            <h2 className={H2}>The Math: When Does Each Machine Win?</h2>
            
            <h3 className="mt-6 text-lg font-semibold text-[#4a321e]">Keg Profit Formula</h3>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-[#5f4228]/90 sm:text-base">
              <li><strong>Wine</strong>: Base Crop Value × 3</li>
              <li><strong>Juice</strong>: Base Crop Value × 2.25</li>
              <li><strong>Processing Time</strong>: 7 days (6.25 days with Artisan)</li>
              <li><strong>With Artisan Profession</strong>: +40% final value</li>
            </ul>

            <div className="mt-4 rounded-xl bg-[#fff8e8] p-4 border-2 border-[#8a5b3a]/30">
              <p className="text-sm font-semibold text-[#4a321e]">Example (Ancient Fruit):</p>
              <ul className="mt-2 space-y-1 text-sm text-[#5f4228]/90">
                <li>• Base Value: 550g</li>
                <li>• Wine Value: 550g × 3 = 1,650g</li>
                <li>• With Artisan: 1,650g × 1.4 = 2,310g</li>
                <li>• <strong>Daily Profit: 2,310g ÷ 7 days = 330g/day</strong></li>
              </ul>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-[#4a321e]">Preserves Jar Profit Formula</h3>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-[#5f4228]/90 sm:text-base">
              <li><strong>Jelly/Pickles</strong>: (Base Crop Value × 2) + 50g</li>
              <li><strong>Processing Time</strong>: 4 days (3 days for vegetables)</li>
              <li><strong>With Artisan Profession</strong>: +40% final value</li>
            </ul>

            <div className="mt-4 rounded-xl bg-[#fff8e8] p-4 border-2 border-[#8a5b3a]/30">
              <p className="text-sm font-semibold text-[#4a321e]">Example (Cranberry):</p>
              <ul className="mt-2 space-y-1 text-sm text-[#5f4228]/90">
                <li>• Base Value: 75g</li>
                <li>• Jelly Value: (75g × 2) + 50g = 200g</li>
                <li>• With Artisan: 200g × 1.4 = 280g</li>
                <li>• <strong>Daily Profit: 280g ÷ 4 days = 70g/day</strong></li>
              </ul>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-[#4a321e]">Break-Even Point</h3>
            <p className={P}>
              The crossover happens around <strong>80-100g base crop value</strong>:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-[#5f4228]/90 sm:text-base">
              <li><strong>Below 80g</strong>: Preserves Jar wins (flat +50g bonus matters more)</li>
              <li><strong>Above 100g</strong>: Keg wins (3× multiplier scales better)</li>
              <li><strong>80-100g range</strong>: Roughly equal, choose based on processing speed needs</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className={H2}>Tier List: Best Crops for Each Machine</h2>
            
            <h3 className="mt-6 text-lg font-semibold text-[#4a321e]">S-Tier Keg Crops (Always Use Kegs)</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#8a5b3a]/20">
                    <th className="border border-[#8a5b3a]/30 px-3 py-2 text-left font-semibold text-[#4a321e]">Crop</th>
                    <th className="border border-[#8a5b3a]/30 px-3 py-2 text-left font-semibold text-[#4a321e]">Base Value</th>
                    <th className="border border-[#8a5b3a]/30 px-3 py-2 text-left font-semibold text-[#4a321e]">Wine Value (Artisan)</th>
                    <th className="border border-[#8a5b3a]/30 px-3 py-2 text-left font-semibold text-[#4a321e]">Daily Profit</th>
                  </tr>
                </thead>
                <tbody className="text-[#5f4228]/90">
                  <tr>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2"><strong>Ancient Fruit</strong></td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">550g</td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">2,310g</td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">330g/day</td>
                  </tr>
                  <tr>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2"><strong>Starfruit</strong></td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">750g</td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">3,150g</td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">450g/day</td>
                  </tr>
                  <tr>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2"><strong>Melon</strong></td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">250g</td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">1,050g</td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">150g/day</td>
                  </tr>
                  <tr>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2"><strong>Pumpkin</strong></td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">320g</td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">1,344g</td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">192g/day</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-[#4a321e]">A-Tier Preserves Jar Crops (Always Use Jars)</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#8a5b3a]/20">
                    <th className="border border-[#8a5b3a]/30 px-3 py-2 text-left font-semibold text-[#4a321e]">Crop</th>
                    <th className="border border-[#8a5b3a]/30 px-3 py-2 text-left font-semibold text-[#4a321e]">Base Value</th>
                    <th className="border border-[#8a5b3a]/30 px-3 py-2 text-left font-semibold text-[#4a321e]">Jelly/Pickle Value (Artisan)</th>
                    <th className="border border-[#8a5b3a]/30 px-3 py-2 text-left font-semibold text-[#4a321e]">Daily Profit</th>
                  </tr>
                </thead>
                <tbody className="text-[#5f4228]/90">
                  <tr>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2"><strong>Cranberry</strong></td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">75g</td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">280g</td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">70g/day</td>
                  </tr>
                  <tr>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2"><strong>Blueberry</strong></td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">50g</td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">210g</td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">52.5g/day</td>
                  </tr>
                  <tr>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2"><strong>Hot Pepper</strong></td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">40g</td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">182g</td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">60.7g/day</td>
                  </tr>
                  <tr>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2"><strong>Strawberry</strong></td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">120g</td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">406g</td>
                    <td className="border border-[#8a5b3a]/30 px-3 py-2">101.5g/day</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="mt-8 rounded-xl bg-[#fff8e8] p-6 border-2 border-[#8a5b3a]/30">
            <p className="text-sm font-semibold text-[#4a321e]">💡 Pro Tip:</p>
            <p className="mt-2 text-sm text-[#5f4228]/90">
              Use the{" "}
              <TrackedBlogCtaLink
                href="/calculator"
                fromPath={fromPath}
                ctaName="calculator-inline"
                className={LINK}
              >
                Stardew Profit Calculator
              </TrackedBlogCtaLink>
              {" "}to compare exact profit for your specific crops and processing setup.
            </p>
          </div>

          <section className="mt-8">
            <h2 className={H2}>Material Cost Comparison</h2>
            
            <h3 className="mt-6 text-lg font-semibold text-[#4a321e]">Keg Recipe (Unlocked at Farming Level 8)</h3>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-[#5f4228]/90 sm:text-base">
              <li><strong>Materials</strong>: 30 Wood, 1 Copper Bar, 1 Iron Bar, 1 Oak Resin</li>
              <li><strong>Estimated Cost</strong>: ~1,500g (if buying bars)</li>
              <li><strong>Crafting Time</strong>: Requires Tapper setup for Oak Resin (6-7 days per resin)</li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold text-[#4a321e]">Preserves Jar Recipe (Unlocked at Farming Level 4)</h3>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-[#5f4228]/90 sm:text-base">
              <li><strong>Materials</strong>: 40 Wood, 8 Stone, 50 Coal</li>
              <li><strong>Estimated Cost</strong>: ~500g (if buying coal)</li>
              <li><strong>Crafting Time</strong>: Instant (no waiting for resin)</li>
            </ul>

            <p className={P}>
              <strong>Early-Game Strategy</strong>: Build 10-20 Preserves Jars first (cheaper, faster to scale), then transition to Kegs once you have stable Oak Resin production and high-value crops.
            </p>
          </section>

          <section className="mt-8">
            <h2 className={H2}>Related Guides</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <TrackedBlogCtaLink
                href="/blog/best-greenhouse-crops-stardew-valley"
                fromPath={fromPath}
                ctaName="greenhouse-crops"
                className="block rounded-xl border-2 border-[#8a5b3a]/30 bg-[#fff8e8] p-4 transition hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <h3 className="font-semibold text-[#4a321e]">🏡 Best Greenhouse Crops</h3>
                <p className="mt-2 text-sm text-[#5f4228]/90">
                  Maximize your greenhouse profit with the best crop choices
                </p>
              </TrackedBlogCtaLink>
              <TrackedBlogCtaLink
                href="/blog/ancient-fruit-vs-starfruit"
                fromPath={fromPath}
                ctaName="ancient-vs-starfruit"
                className="block rounded-xl border-2 border-[#8a5b3a]/30 bg-[#fff8e8] p-4 transition hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <h3 className="font-semibold text-[#4a321e]">🍇 Ancient Fruit vs Starfruit</h3>
                <p className="mt-2 text-sm text-[#5f4228]/90">
                  Complete profit comparison for the two best crops
                </p>
              </TrackedBlogCtaLink>
            </div>
          </section>
        </article>

        <BlogReadNext currentSlug="kegs-vs-preserves-jars-complete-guide" posts={readNextPosts} />
      </div>

      <SiteFooter />
      <PwaRegisterScript />
      <FaqJsonLd faqs={FAQ_ITEMS} />
    </div>
  );
}

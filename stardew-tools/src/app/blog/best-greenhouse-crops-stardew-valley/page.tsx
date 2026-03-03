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

const FAQ_ITEMS = [
  {
    question: "What are the best greenhouse crops in Stardew Valley?",
    answer:
      "The best greenhouse crop depends on your processing capacity. If you have lots of kegs, Starfruit and Ancient Fruit are top choices; if you process less and want daily harvests, crops like Strawberries or Coffee can fit a tighter schedule.",
  },
  {
    question: "Is Ancient Fruit better than Starfruit in the greenhouse?",
    answer:
      "Ancient Fruit is low effort because it regrows weekly and pairs well with a big keg setup. Starfruit often wins per harvest but requires replanting, which adds effort and seed cost.",
  },
  {
    question: "Do I need sprinklers inside the greenhouse?",
    answer:
      "Yes if you want a consistent routine. Quality Sprinklers or Iridium Sprinklers free up time so the greenhouse becomes a predictable daily or weekly loop.",
  },
  {
    question: "Should I process greenhouse crops in kegs or preserves jars?",
    answer:
      "Generally, kegs are best for high-value fruits (wine). Preserves jars are great early because they are cheaper and finish faster, so they can keep up with daily-harvest crops.",
  },
  {
    question: "What greenhouse crops work if I only play on weekends?",
    answer:
      "Pick crops with forgiving harvest timing or regrow cycles (Ancient Fruit, Pineapple, Blueberries, Cranberries). Avoid setups that require daily harvesting unless you automate or accept missed harvests.",
  },
  {
    question: "How do I know if I have enough kegs/jars for my greenhouse?",
    answer:
      "Use a throughput approach: estimate how many crops you harvest per week and whether your kegs/jars can process that output without bottlenecking. The profit calculator helps you compare options with your real counts.",
  },
] as const;

export const metadata: Metadata = {
  openGraph: {
    type: "article",
    publishedTime: "2026-03-02T00:00:00+08:00",
    modifiedTime: "2026-03-02T00:00:00+08:00",
  },
  title: "Best Greenhouse Crops in Stardew Valley (Throughput-Based Guide)",
  description:
    "A practical greenhouse crop guide for Stardew Valley based on processing throughput (kegs/preserves jars) and your schedule. Pick crops that match daily play or weekend-only farming.",
};

const CTA_CLASS =
  "inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]";

export default function BestGreenhouseCropsStardewValleyPage() {
  const fromPath = "/blog/best-greenhouse-crops-stardew-valley";
  const pageUrl = `${SITE_ORIGIN}${fromPath}`;
  const readNextPosts = getBlogReadNextPosts("best-greenhouse-crops-stardew-valley", 3);

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
          faqs={FAQ_ITEMS.map((faq) => ({
            question: faq.question,
            answer: faq.answer,
          }))}
        />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Best Greenhouse Crops" },
          ]}
        />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Profit Guide</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Best Greenhouse Crops in Stardew Valley
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Choose greenhouse crops based on <strong>throughput</strong>: how many <strong>kegs</strong> /{" "}
              <strong>preserves jars</strong> you can feed, plus how often you actually play (daily vs weekends).
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <TrackedBlogCtaLink
                className={CTA_CLASS}
                href="/calculator"
                fromPath={fromPath}
                ctaName="open_calculator_hero"
              >
                Open the Profit Calculator
              </TrackedBlogCtaLink>
              <Link
                className="text-sm font-semibold text-[#5c3d23] underline"
                href="/blog/ancient-fruit-vs-starfruit-quick-answer"
              >
                Ancient Fruit vs Starfruit →
              </Link>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Keywords: <strong>best greenhouse crops</strong>, <strong>greenhouse profit stardew</strong>,{" "}
              <strong>keg throughput</strong>
            </p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">The Greenhouse Problem: Bottlenecks</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                The greenhouse is special because it removes seasons, but it doesn→t remove bottlenecks. Your real limits
                are usually:
              </p>
              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  <strong>Processing capacity</strong>: how many kegs / jars you can keep busy.
                </li>
                <li>
                  <strong>Harvest rhythm</strong>: daily, every 3 days, weekly, or only on weekends.
                </li>
                <li>
                  <strong>Replant effort</strong>: some crops regrow, others force replanting.
                </li>
              </ol>
              <p>
                This guide is built around one idea: <strong>don→t pick a crop first</strong>. Pick a <strong>loop</strong>, then
                pick crops that fit it.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Quick Picks by Play Schedule</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                If you want a fast answer, start here. Then verify with the calculator using your actual keg/jar counts.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4">
                  <h3 className="text-base font-semibold text-[#4a321e]">Daily play (5 days/week)</h3>
                  <p className="mt-2">
                    Crops with frequent harvests can win because you won→t miss cycles.
                  </p>
                  <p className="mt-2">
                    Examples: <strong>Coffee</strong>, <strong>Strawberries</strong>, <strong>Hops</strong> (effort-heavy but powerful with kegs).
                  </p>
                </div>
                <div className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4">
                  <h3 className="text-base font-semibold text-[#4a321e]">Weekend-only (1 days/week)</h3>
                  <p className="mt-2">
                    Choose forgiving timing. Weekly regrow crops are your friend.
                  </p>
                  <p className="mt-2">
                    Examples: <strong>Ancient Fruit</strong>, <strong>Pineapple</strong>, <strong>Cranberries</strong> (less punishing if late).
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <TrackedBlogCtaLink
                  className={CTA_CLASS}
                  href="/calculator"
                  fromPath={fromPath}
                  ctaName="open_calculator_mid"
                >
                  Compare crops with your setup
                </TrackedBlogCtaLink>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#fff8e8]/92 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.22)] ring-1 ring-yellow-900/15 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Related Guides (Recommended Next)</h2>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              If you're optimizing your greenhouse, these guides connect the strategy to the numbers (kegs, jars, timing,
              and season planning).
            </p>
            <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              <Link className={CTA_CLASS + " justify-center text-center"} href="/calculator">
                Profit Calculator (compare crops)
              </Link>
              <Link className="text-sm font-semibold text-[#5c3d23] underline" href="/blog/stardew-valley-artisan-profit-guide">
                Artisan Profit Guide (kegs vs jars framework)
              </Link>
              <Link className="text-sm font-semibold text-[#5c3d23] underline" href="/blog/keg-vs-jar-profit-guide">
                Keg vs Jar (full profit guide)
              </Link>
              <Link className="text-sm font-semibold text-[#5c3d23] underline" href="/blog/how-many-kegs-do-i-need-quick-answer">
                How Many Kegs Do I Need? (capacity planning)
              </Link>
              <Link className="text-sm font-semibold text-[#5c3d23] underline" href="/blog/ancient-fruit-vs-starfruit-quick-answer">
                Ancient Fruit vs Starfruit (quick answer)
              </Link>
              <Link className="text-sm font-semibold text-[#5c3d23] underline" href="/blog/starfruit-vs-ancient-fruit-wine-quick-answer">
                Starfruit Wine vs Ancient Fruit Wine
              </Link>
              <Link className="text-sm font-semibold text-[#5c3d23] underline" href="/blog/greenhouse-layout-guide">
                Greenhouse Layout Guide
              </Link>
              <Link className="text-sm font-semibold text-[#5c3d23] underline" href="/blog/best-crops-every-season">
                Best Crops for Every Season
              </Link>
              <Link className="text-sm font-semibold text-[#5c3d23] underline" href="/blog/stardew-valley-profit-guide-2026">
                Profit Guide 2026 (roadmap)
              </Link>
              <Link className="text-sm font-semibold text-[#5c3d23] underline" href="/blog/wine-vs-juice-quick-answer">
                Wine vs Juice (when kegs win)
              </Link>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Throughput Framework: Kegs vs Jars</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                Think in batches. A greenhouse with 116 tiles can output a lot of fruit. If you only have a handful of kegs,
                then wine-focused crops will create a backlog.
              </p>
              <p>
                In general:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>Kegs</strong>: higher value, slower cycles. Great for high-value fruits and long-term setups.
                </li>
                <li>
                  <strong>Preserves jars</strong>: cheaper, faster cycles. Great for early throughput or frequent-harvest crops.
                </li>
              </ul>
              <p className="text-xs text-[#6f4b2a]/75">
                You don→t need perfect math here. You need a setup that doesn→t turn into constant chest management.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Greenhouse Crop Shortlist (Practical)</h2>
            <div className="mt-3 space-y-4 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                These aren→t the only options, but they cover most real playstyles.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8]">
                <table className="w-full min-w-[720px] border-collapse text-left text-sm sm:text-base">
                  <thead>
                    <tr className="border-b border-[#7c4d2e]/30">
                      <th className="px-4 py-3 font-semibold text-[#4a321e]">Crop</th>
                      <th className="px-4 py-3 font-semibold text-[#4a321e]">Harvest rhythm</th>
                      <th className="px-4 py-3 font-semibold text-[#4a321e]">Best processor</th>
                      <th className="px-4 py-3 font-semibold text-[#4a321e]">Why it works</th>
                      <th className="px-4 py-3 font-semibold text-[#4a321e]">Best for</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#7c4d2e]/20">
                      <td className="px-4 py-3 font-semibold text-[#4a321e]">Ancient Fruit</td>
                      <td className="px-4 py-3">Weekly regrow</td>
                      <td className="px-4 py-3">Kegs</td>
                      <td className="px-4 py-3">Low effort, steady output, great wine crop</td>
                      <td className="px-4 py-3">Weekend-friendly, large keg barns</td>
                    </tr>
                    <tr className="border-b border-[#7c4d2e]/20">
                      <td className="px-4 py-3 font-semibold text-[#4a321e]">Starfruit</td>
                      <td className="px-4 py-3">Harvest + replant</td>
                      <td className="px-4 py-3">Kegs</td>
                      <td className="px-4 py-3">High value per unit, strong wine</td>
                      <td className="px-4 py-3">Max profit, if you don→t mind replanting</td>
                    </tr>
                    <tr className="border-b border-[#7c4d2e]/20">
                      <td className="px-4 py-3 font-semibold text-[#4a321e]">Pineapple</td>
                      <td className="px-4 py-3">Weekly-ish regrow</td>
                      <td className="px-4 py-3">Kegs or Jars</td>
                      <td className="px-4 py-3">Strong value, forgiving, easy to maintain</td>
                      <td className="px-4 py-3">Hybrid setups</td>
                    </tr>
                    <tr className="border-b border-[#7c4d2e]/20">
                      <td className="px-4 py-3 font-semibold text-[#4a321e]">Strawberries</td>
                      <td className="px-4 py-3">Every few days</td>
                      <td className="px-4 py-3">Jars early, Kegs later</td>
                      <td className="px-4 py-3">Great throughput crop if you harvest often</td>
                      <td className="px-4 py-3">Daily-ish play</td>
                    </tr>
                    <tr className="border-b border-[#7c4d2e]/20">
                      <td className="px-4 py-3 font-semibold text-[#4a321e]">Coffee</td>
                      <td className="px-4 py-3">Frequent (beans)</td>
                      <td className="px-4 py-3">Kegs</td>
                      <td className="px-4 py-3">Fast cycles, useful product, consistent routine</td>
                      <td className="px-4 py-3">Daily play, speed stacks</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-[#4a321e]">Hops</td>
                      <td className="px-4 py-3">Daily harvest</td>
                      <td className="px-4 py-3">Kegs</td>
                      <td className="px-4 py-3">Insane with kegs, but labor-heavy</td>
                      <td className="px-4 py-3">Min-max daily farmers</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                If you→re deciding between two options, focus on one question: <strong>will your processors sit idle</strong>
                or <strong>will crops pile up in chests</strong>?
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Two Working Loops</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4">
                  <h3 className="text-base font-semibold text-[#4a321e]">Loop 1: Weekly harvest + weekly keg load</h3>
                  <p className="mt-2">
                    Harvest a regrow crop once per week (Ancient Fruit / Pineapple), then load kegs in one batch.
                  </p>
                  <p className="mt-2 text-xs text-[#6f4b2a]/75">
                    Great if you play on weekends or want a low-maintenance greenhouse.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4">
                  <h3 className="text-base font-semibold text-[#4a321e]">Loop 2: Frequent harvest + jar throughput</h3>
                  <p className="mt-2">
                    Harvest every 1 days and keep a wall of preserves jars running constantly.
                  </p>
                  <p className="mt-2 text-xs text-[#6f4b2a]/75">
                    Great early when jars are cheaper than building a massive keg shed.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Common Mistakes</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>Picking a daily-harvest crop</strong> when you only log in twice a week (you lose cycles).
                </li>
                <li>
                  <strong>Building too few kegs</strong> for a wine-focused greenhouse (chests overflow, then you stop processing).
                </li>
                <li>
                  <strong>Overcomplicating replanting</strong> (Starfruit is great, but only if you enjoy the loop).
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">FAQ</h2>
            <div className="mt-3 space-y-4 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              {FAQ_ITEMS.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4">
                  <h3 className="text-base font-semibold text-[#4a321e]">{faq.question}</h3>
                  <p className="mt-2 text-sm text-[#5f4228]/90 sm:text-base">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <TrackedBlogCtaLink
                className={CTA_CLASS}
                href="/calculator"
                fromPath={fromPath}
                ctaName="open_calculator_end"
              >
                Build your greenhouse plan with the calculator
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Read Next</h2>
            <BlogReadNext posts={readNextPosts} currentSlug="best-greenhouse-crops-stardew-valley" />
          </section>
        </article>

        <SiteFooter />
        <p className="mt-6 text-center text-xs text-[#6f4b2a]/70">URL: {pageUrl}</p>
      </main>
    </div>
  );
}

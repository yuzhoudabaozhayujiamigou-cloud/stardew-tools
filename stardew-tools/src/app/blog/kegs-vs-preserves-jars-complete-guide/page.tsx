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
    question: "Should I use Kegs or Preserves Jars for Ancient Fruit?",
    answer:
      "Always Kegs. Ancient Fruit Wine (2,310g with Artisan) is one of the most profitable items in the game. Preserves Jars only yield 1,540g, so you lose a huge chunk of value per fruit.",
  },
  {
    question: "Are Preserves Jars worth it late-game?",
    answer:
      "Yes, especially for low-value crops like Cranberry and Blueberry. They process faster than Kegs and protect your high-value Keg slots for Ancient Fruit, Starfruit, Melon, and Pumpkin.",
  },
  {
    question: "How many Kegs do I need for a full Greenhouse?",
    answer:
      "A standard optimized Greenhouse holds 116 Ancient Fruit plants. Since Ancient Fruit regrows every 7 days and Kegs also take 7 days, you need 116 Kegs to keep up perfectly.",
  },
  {
    question: "Can I use Preserves Jars for fruit and Kegs for vegetables?",
    answer:
      "No. The right machine depends on base crop value, not crop type. High-value vegetables like Pumpkin belong in Kegs, while low-value fruits like Cranberry and Blueberry are usually better in Preserves Jars.",
  },
  {
    question: "What should I process if I only have 10 Kegs?",
    answer:
      "Use those 10 Kegs on your highest-value crops first, usually Ancient Fruit or Starfruit. Sell the low-value crops raw or push them into Preserves Jars instead.",
  },
] as const;

export const metadata: Metadata = {
  title: "Kegs vs Preserves Jars: Complete Stardew Valley Profit Guide",
  description:
    "Kegs vs Preserves Jars in Stardew Valley: compare profit formulas, throughput, crop breakpoints, machine costs, and the best artisan setup for early, mid, and late game.",
  openGraph: {
    title: "Kegs vs Preserves Jars: Complete Stardew Valley Profit Guide",
    description:
      "Should you use Kegs or Preserves Jars in Stardew Valley? This complete guide covers crop breakpoints, daily profit, machine costs, throughput, and optimal processing strategy.",
    url: `${SITE_ORIGIN}${fromPath}`,
    type: "article",
    publishedTime: "2026-04-03T00:00:00+08:00",
    modifiedTime: "2026-04-03T00:00:00+08:00",
  },
};

const CARD =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";

const H2 = "text-xl font-semibold text-[#4a321e] sm:text-2xl";
const H3 = "mt-5 text-lg font-semibold text-[#4a321e] sm:text-xl";
const P = "mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base";
const LI = "text-sm leading-6 text-[#5f4228]/90 sm:text-base";
const LINK =
  "font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]";
const CTA_CLASS =
  "inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]";

export default function KegsVsPreservesJarsPage() {
  const pageUrl = `${SITE_ORIGIN}${fromPath}`;
  const readNextPosts = getBlogReadNextPosts(
    "kegs-vs-preserves-jars-complete-guide",
    3,
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

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
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
            { name: "Kegs vs Preserves Jars" },
          ]}
        />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Artisan Goods Guide
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Kegs vs Preserves Jars
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              If you want the fastest correct answer: use <strong>Kegs for expensive crops</strong> and <strong>Preserves Jars for cheap crops</strong>. The real optimization comes from matching crop value, machine speed, and your actual processing bottleneck.
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
              <TrackedBlogCtaLink
                className={CTA_CLASS}
                href="/blog/artisan-goods-empire-beginner-to-master"
                fromPath={fromPath}
                ctaName="artisan_empire_hero"
              >
                Read the Artisan Goods Empire guide
              </TrackedBlogCtaLink>
            </div>
          </header>

          <section className={CARD}>
            <h2 className={H2}>Quick answer: which machine should you use?</h2>
            <p className={P}>
              <strong>For maximum profit per item:</strong> Kegs win for high-value crops like Ancient Fruit, Starfruit, Melon, and Pumpkin because wine or juice scales off the crop&apos;s base value.
            </p>
            <p className={P}>
              <strong>For speed and throughput:</strong> Preserves Jars win on lower-value crops because they finish faster and add a strong flat-value bonus.
            </p>
            <p className={P}>
              <strong>Bottom line:</strong> use Kegs for crops above roughly <strong>100g base value</strong>, Preserves Jars for crops below roughly <strong>80g base value</strong>, and treat the middle range as flexible depending on capacity.
            </p>
          </section>

          <section className={CARD}>
            <h2 className={H2}>The math: when does each machine win?</h2>

            <h3 className={H3}>Keg formula</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li className={LI}><strong>Wine:</strong> Base Crop Value × 3</li>
              <li className={LI}><strong>Juice:</strong> Base Crop Value × 2.25</li>
              <li className={LI}><strong>Processing time:</strong> 7 days</li>
              <li className={LI}><strong>With Artisan:</strong> +40% final value</li>
            </ul>
            <p className={P}>
              Example: Ancient Fruit starts at 550g. Wine becomes 1,650g, and with Artisan it reaches <strong>2,310g</strong>, or about <strong>330g/day</strong> over a 7-day cycle.
            </p>

            <h3 className={H3}>Preserves Jar formula</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li className={LI}><strong>Jelly / Pickles:</strong> (Base Crop Value × 2) + 50g</li>
              <li className={LI}><strong>Processing time:</strong> 4 days for fruit, 3 days for many vegetables</li>
              <li className={LI}><strong>With Artisan:</strong> +40% final value</li>
            </ul>
            <p className={P}>
              Example: Cranberry starts at 75g. Jelly becomes 200g, and with Artisan it reaches <strong>280g</strong>, or about <strong>70g/day</strong> over a 4-day cycle.
            </p>

            <h3 className={H3}>Break-even point</h3>
            <p className={P}>
              The practical crossover is around <strong>80g to 100g base value</strong>. Below that range, the flat bonus from Preserves Jars matters more. Above that range, the Keg multiplier scales harder and usually wins.
            </p>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Best crops for each machine</h2>

            <h3 className={H3}>Best Keg crops</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li className={LI}><strong>Ancient Fruit</strong> — 550g base → 2,310g wine with Artisan</li>
              <li className={LI}><strong>Starfruit</strong> — 750g base → 3,150g wine with Artisan</li>
              <li className={LI}><strong>Melon</strong> — 250g base → 1,050g wine with Artisan</li>
              <li className={LI}><strong>Pumpkin</strong> — 320g base → 1,344g juice with Artisan</li>
            </ul>

            <h3 className={H3}>Best Preserves Jar crops</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li className={LI}><strong>Cranberry</strong> — classic Jar crop with fast seasonal throughput</li>
              <li className={LI}><strong>Blueberry</strong> — low value individually, excellent in bulk</li>
              <li className={LI}><strong>Hot Pepper</strong> — quick pickle cycle and strong daily value</li>
              <li className={LI}><strong>Strawberry</strong> — solid early-game Jar option when Kegs are scarce</li>
            </ul>

            <p className={P}>
              Flexible crops like <strong>Grape</strong> sit in the middle. If your Kegs are full, use Jars. If your Kegs are idle, push those borderline crops through Kegs.
            </p>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Material cost comparison</h2>
            <p className={P}>
              <strong>Kegs</strong> unlock later and are bottlenecked by Oak Resin. They cost Wood, Copper Bar, Iron Bar, and Oak Resin, which makes your scaling speed depend on Tapper infrastructure.
            </p>
            <p className={P}>
              <strong>Preserves Jars</strong> unlock earlier and are much easier to mass craft because they mostly consume Wood, Stone, and Coal. That makes them the best early-game processing machine for scaling cash flow.
            </p>
            <p className={P}>
              Early game, it is usually smarter to build <strong>10 to 20 Preserves Jars first</strong>, then transition into a Keg-heavy setup once Oak Resin production stabilizes.
            </p>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Processing speed: throughput matters more than people think</h2>
            <p className={P}>
              If you harvest faster than you can process, your machine choice changes. A Keg that gives slightly more value can still be the wrong choice if most of your crop sits in chests or gets sold raw.
            </p>
            <p className={P}>
              Example: if you harvest <strong>100 Cranberries every 5 days</strong>, 25 Preserves Jars will cycle that crop much more cleanly than 25 Kegs. The Jar route keeps cash moving instead of creating a giant idle backlog.
            </p>
            <p className={P}>
              That is why low-value bulk crops belong in Jars. Kegs should stay reserved for premium inputs.
            </p>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Artisan profession is the real multiplier</h2>
            <p className={P}>
              The <strong>Artisan profession</strong> adds <strong>+40% value</strong> to artisan goods. This is the point where serious processing becomes absurdly profitable.
            </p>
            <p className={P}>
              Ancient Fruit Wine jumps from 1,650g to <strong>2,310g</strong>. Cranberry Jelly jumps from 200g to <strong>280g</strong>. Both machines benefit, but the higher-value Keg products gain far more in absolute gold.
            </p>
            <p className={P}>
              If you care about profit optimization at all, the standard path is <Link href="/blog/artisan-vs-tiller-quick-answer" className={LINK}>Tiller → Artisan</Link>.
            </p>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Recommended hybrid setup</h2>
            <p className={P}>
              The best farms do not choose one machine forever. They run a <strong>hybrid processing line</strong>.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li className={LI}><strong>30 to 50 Kegs</strong> for Ancient Fruit, Starfruit, Melon, and Pumpkin</li>
              <li className={LI}><strong>20 to 30 Preserves Jars</strong> for Cranberry, Blueberry, Hot Pepper, and overflow crops</li>
              <li className={LI}><strong>Separate sheds or zones</strong> so your workflow stays clean</li>
            </ul>
            <p className={P}>
              This lets you protect your highest-value machine slots while still monetizing bulk harvests efficiently.
            </p>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Common mistakes to avoid</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              <li className={LI}><strong>Using Kegs on low-value crops</strong> — you tie up slow machines for mediocre returns.</li>
              <li className={LI}><strong>Building too many Kegs too early</strong> — Oak Resin is the real bottleneck, not Wood.</li>
              <li className={LI}><strong>Ignoring throughput</strong> — idle crops destroy the theoretical advantage of “better” machines.</li>
              <li className={LI}><strong>Skipping Artisan</strong> — you leave 40% value on the table.</li>
              <li className={LI}><strong>Not matching planting scale to machine count</strong> — your farm plan should reflect processing capacity.</li>
            </ul>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Year-by-year strategy</h2>

            <h3 className={H3}>Year 1: Foundation</h3>
            <p className={P}>
              Build cash flow with Preserves Jars. Strawberries, Blueberries, and Cranberries are your main processing crops, and Jars are cheap enough to scale quickly.
            </p>

            <h3 className={H3}>Year 2: Transition</h3>
            <p className={P}>
              Start filling the Greenhouse with Ancient Fruit, build 20 to 30 Kegs, and move your highest-value crops into a Keg-first pipeline.
            </p>

            <h3 className={H3}>Year 3+: Optimization</h3>
            <p className={P}>
              Aim for a stable 1:1 Keg-to-Ancient-Fruit rhythm in the Greenhouse and use Preserves Jars only for low-value seasonal overflow. Ginger Island pushes this setup even harder in favor of Kegs.
            </p>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Seasonal crop machine choices</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              <li className={LI}><strong>Spring:</strong> Strawberry → Jar, Cauliflower / Rhubarb → Keg</li>
              <li className={LI}><strong>Summer:</strong> Blueberry / Hot Pepper → Jar, Melon / Starfruit → Keg</li>
              <li className={LI}><strong>Fall:</strong> Cranberry → Jar, Pumpkin → Keg, Grape → flexible</li>
              <li className={LI}><strong>Winter:</strong> Process backlog, scale infrastructure, and prep for next year</li>
            </ul>
            <p className={P}>
              If you want to optimize greenhouse planning around this, read <Link href="/blog/best-greenhouse-crops-stardew-valley" className={LINK}>Best Greenhouse Crops</Link> next.
            </p>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Ginger Island changes the equation</h2>
            <p className={P}>
              Ginger Island gives you year-round outdoor farming, which massively increases the value of a Keg-centered setup. With hundreds of Ancient Fruit plants, your limiting factor becomes machine count and logistics, not crop availability.
            </p>
            <p className={P}>
              At that point, Preserves Jars become support infrastructure for overflow and secondary crops, while Kegs remain the core engine of your late-game gold machine.
            </p>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Use the calculator to validate your farm</h2>
            <p className={P}>
              The fastest way to stop guessing is to run the numbers for your own crop mix, profession choice, and machine count.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <TrackedBlogCtaLink
                className={CTA_CLASS}
                href="/calculator"
                fromPath={fromPath}
                ctaName="open_calculator_body"
              >
                Open the Stardew Profit Calculator
              </TrackedBlogCtaLink>
              <TrackedBlogCtaLink
                className={CTA_CLASS}
                href="/blog/how-many-kegs-do-i-need-quick-answer"
                fromPath={fromPath}
                ctaName="how_many_kegs_body"
              >
                How many Kegs do I need?
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className={CARD}>
            <h2 className={H2}>FAQ</h2>
            <div className="mt-4 space-y-4 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              {FAQ_ITEMS.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] p-4">
                  <h3 className="text-base font-semibold text-[#4a321e]">{faq.question}</h3>
                  <p className="mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Conclusion</h2>
            <p className={P}>
              The right answer is not “Kegs are best” or “Preserves Jars are best.” The real answer is <strong>use the right machine for the right crop</strong>.
            </p>
            <p className={P}>
              Build Preserves Jars first for fast early-game scaling. Shift into Kegs when you unlock premium crops and stable Oak Resin. In late game, Kegs dominate your profit core while Jars handle efficient overflow.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <TrackedBlogCtaLink
                className={CTA_CLASS}
                href="/calculator"
                fromPath={fromPath}
                ctaName="open_calculator_end"
              >
                Calculate your own crop profit
              </TrackedBlogCtaLink>
              <Link className="text-sm font-semibold text-[#5c3d23] underline" href="/blog/best-greenhouse-crops-stardew-valley">
                Read Best Greenhouse Crops →
              </Link>
            </div>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Read Next</h2>
            <BlogReadNext
              posts={readNextPosts}
              currentSlug="kegs-vs-preserves-jars-complete-guide"
            />
          </section>
        </article>

        <SiteFooter />
        <p className="mt-6 text-center text-xs text-[#6f4b2a]/70">URL: {pageUrl}</p>
      </main>
    </div>
  );
}

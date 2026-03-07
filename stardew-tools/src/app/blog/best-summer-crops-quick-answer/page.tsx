import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogReadNextPosts } from "@/lib/read-next";
import { SITE_ORIGIN } from "@/lib/site";

const publishedTime = "2026-02-27T00:00:00+08:00";
const modifiedTime = "2026-03-07T00:00:00+08:00";
const fromPath = "/blog/best-summer-crops-quick-answer";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE = "Best Summer Crops in Stardew Valley (Quick Answer + Profit Checklist)";
const DESCRIPTION =
  "Best Summer crops in Stardew Valley with quick picks for Day 1, mid-season, and late-season. Includes TL;DR, calculator CTA, crop links, and an 8-question FAQ.";

const FAQ = [
  {
    question: "What is the best Summer crop in Stardew Valley for most players?",
    answer:
      "Blueberry is usually the safest best pick for most farms because it regrows, gives multiple berries per harvest, and scales well even before your processing setup is huge.",
  },
  {
    question: "Is Starfruit better than Blueberry in Summer?",
    answer:
      "Starfruit wins on high single-crop value and can dominate with kegs plus Artisan. Blueberry is easier and more forgiving for Year 1 or low-machine farms.",
  },
  {
    question: "What should I plant on Summer Day 1 if I want stable gold?",
    answer:
      "Plant mostly Blueberries, then add a smaller lane of Melon or Starfruit based on your budget and machine plans.",
  },
  {
    question: "What if I only have around 14 days left in Summer?",
    answer:
      "Favor crops that can still finish cleanly in the remaining window and avoid slow chains that miss the season cutoff. Check calculator scenarios with daysLeft=14 before buying seeds.",
  },
  {
    question: "Is Hops worth planting in Summer?",
    answer:
      "Hops is strong only if you can handle daily harvest rhythm and have enough kegs to process output. Without keg capacity, Hops can create backlog and stress.",
  },
  {
    question: "Should I process Summer crops in kegs or preserve jars?",
    answer:
      "If fruit-heavy and machine-stable, kegs usually carry long-term profit. Jars are still useful for faster cashflow and overflow control.",
  },
  {
    question: "Can late-season Wheat beat premium crops?",
    answer:
      "In short windows, yes. Fast crops can outperform expensive slow crops if the premium crop cannot finish or only yields once at poor timing.",
  },
  {
    question: "What is the fastest way to choose Summer crops correctly?",
    answer:
      "Use a 3-step check: remaining days, seed budget, and machine capacity. Then test top candidates in the calculator before purchasing.",
  },
] as const;

export const metadata: Metadata = {
  title: `${TITLE} | Stardew Profit`,
  description: DESCRIPTION,
  keywords: [
    "best summer crops stardew valley",
    "stardew summer crop guide",
    "blueberry vs starfruit stardew",
    "summer day 15 stardew",
    "stardew crop profit calculator",
  ],
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

const CARD =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";

const H2 = "text-xl font-semibold text-[#4a321e] sm:text-2xl";

const LINK =
  "font-semibold text-[#2f6a3a] underline decoration-[#2f6a3a]/30 underline-offset-4 hover:text-[#1f6b2e]";

const CTA_CLASS =
  "inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]";

export default function BestSummerCropsQuickAnswerPage() {
  const readNextPosts = getBlogReadNextPosts("best-summer-crops-quick-answer", 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
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
      "best summer crops stardew valley",
      "summer crop timing",
      "blueberry starfruit comparison",
    ],
  };

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
          faqs={FAQ.map((item) => ({
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
            { name: "Best Summer Crops" },
          ]}
        />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Quick Answer • Summer Crop SEO</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">Best Summer Crops in Stardew Valley</h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">Use this page when you need a fast Summer crop choice that still respects timing, budget, and machine capacity.</p>

            <div className="mt-5 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?season=summer&daysLeft=28"
                fromPath={fromPath}
                ctaName="summer_quick_try_calculator_hero"
                className={CTA_CLASS}
              >
                Try Calculator
              </TrackedBlogCtaLink>
              <Link href="/blog/best-crops-every-season" className={LINK}>
                Read the full all-season crop guide
              </Link>
            </div>
          </header>

          <section className={CARD}>
            <h2 className={H2}>TL;DR</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>Most players: start with Blueberry for stable Summer gold.</li>
              <li>Starfruit is premium if you can afford seeds and keep kegs busy.</li>
              <li>Hops is high-upside but only with strong keg throughput.</li>
              <li>When days are short, choose crops that can still finish on time.</li>
              <li>Before buying seeds, run one calculator check with your exact days left.</li>
            </ul>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Best Summer Crop Picks by Situation</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/30 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Best overall: Blueberry</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">Blueberry is usually the highest win-rate pick because it regrows and smooths cashflow across the season.</p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/30 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Best premium route: Starfruit</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">Use Starfruit when you can support higher seed cost and process into wine with keg capacity.</p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/30 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Best early machine route: Melon</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">Melon gives strong per-harvest value and is easier to integrate before large Starfruit scale.</p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/30 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Best min-max route: Hops</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">Great if you can maintain daily harvest rhythm plus keg processing. Skip if you dislike micro-heavy loops.</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              If you are unsure whether to optimize for raw crop sales or processing, read{" "}
              <Link href="/blog/keg-vs-jar-profit-guide" className={LINK}>
                Keg vs Jar Profit Guide
              </Link>
              {" "}and compare with the{" "}
              <Link href="/blog/stardew-valley-artisan-profit-guide" className={LINK}>
                Artisan Profit Guide
              </Link>
              .
            </p>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Timing Rules (Day 1, Day 15, Late Summer)</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p><strong>Summer Day 1:</strong> prioritize Blueberry baseline, then optional Starfruit/Melon lanes.</p>
              <p><strong>Around Day 15:</strong> stop planting slow options that cannot finish reliably.</p>
              <p><strong>Late Summer:</strong> switch to fast-turn crops and short-cycle profit protection.</p>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <Link href="/blog/stardew-valley-summer-day-1-maximum-profit-guide" className={LINK}>
                Summer Day 1 maximum profit guide
              </Link>
              <Link href="/blog/stardew-valley-summer-day-15-profit-guide" className={LINK}>
                Summer Day 15 profit guide
              </Link>
              <Link href="/blog/stardew-valley-summer-day-20-is-it-too-late" className={LINK}>
                Summer Day 20: is it too late?
              </Link>
              <Link href="/blog/best-crops-7-days-left-before-season-switch" className={LINK}>
                Best crops with 7 days left
              </Link>
            </div>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Action Checklist (Do This Before Buying Seeds)</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>Set your real remaining days (not idealized timing).</li>
              <li>Confirm seed budget after tool/building reserves.</li>
              <li>Choose a main lane (Blueberry or Starfruit) and one backup lane.</li>
              <li>Check if your kegs/jars can absorb planned harvest volume.</li>
              <li>Run the calculator and compare top 3 candidates.</li>
              <li>Lock plan for one week and avoid random seed swaps.</li>
            </ol>

            <div className="mt-5 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?season=summer&daysLeft=14&profession=artisan"
                fromPath={fromPath}
                ctaName="summer_quick_try_calculator_checklist"
                className={CTA_CLASS}
              >
                Try Calculator
              </TrackedBlogCtaLink>
              <TrackedBlogCtaLink
                href="/calculator?preset=keg-vs-jar-starfruit&profession=artisan"
                fromPath={fromPath}
                ctaName="summer_quick_compare_processing"
                className={CTA_CLASS}
              >
                Compare Keg vs Jar
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section id="faq" className={CARD}>
            <h2 className={H2}>FAQ</h2>
            <div className="mt-4 space-y-4">
              {FAQ.map((item) => (
                <details key={item.question} className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-[#4a321e] sm:text-base">{item.question}</summary>
                  <p className="mt-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Read Next</h2>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <Link href="/blog/best-crops-every-season" className={LINK}>
                Best Crops for Every Season
              </Link>
              <Link href="/blog/money-making-guide" className={LINK}>
                Money Making Guide
              </Link>
              <Link href="/blog/stardew-valley-profit-guide-2026" className={LINK}>
                Profit Guide 2026
              </Link>
              <Link href="/blog/best-fall-crops-quick-answer" className={LINK}>
                Best Fall Crops Quick Answer
              </Link>
            </div>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="best-summer-crops-quick-answer" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}

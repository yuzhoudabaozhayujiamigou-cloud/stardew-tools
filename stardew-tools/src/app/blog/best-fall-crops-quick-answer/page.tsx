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

const publishedTime = "2026-02-26T00:00:00+08:00";
const modifiedTime = "2026-03-07T00:00:00+08:00";
const fromPath = "/blog/best-fall-crops-quick-answer";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE = "Best Fall Crops in Stardew Valley (Quick Answer + Fall Profit Checklist)";
const DESCRIPTION =
  "Find the best Fall crops in Stardew Valley with fast decisions for Day 1, mid-Fall, and late-Fall. Includes TL;DR, FAQ, internal links, and Try Calculator CTAs.";

const FAQ = [
  {
    question: "What is the best Fall crop in Stardew Valley for most farms?",
    answer:
      "Cranberry is usually the best all-around Fall crop because repeat harvests create consistent returns and reduce replanting friction.",
  },
  {
    question: "Is Pumpkin better than Cranberry?",
    answer:
      "Pumpkin can outperform in specific setups, especially with processing and Artisan. Cranberry is often easier and more stable for field-level profit flow.",
  },
  {
    question: "What should I plant at Fall Day 1?",
    answer:
      "Most players should start with Cranberry as baseline, then allocate part of budget to Pumpkin or Grape based on machine plans.",
  },
  {
    question: "What should I plant with about 14 days left in Fall?",
    answer:
      "Favor crops that can still finish cleanly. Avoid long-cycle plans that fail to complete before season end.",
  },
  {
    question: "Does Artisan profession matter for Fall crop choices?",
    answer:
      "Yes. Artisan can shift rankings when your farm has strong processing throughput, especially for Pumpkin and high-value wine chains.",
  },
  {
    question: "Are Grapes worth it in Fall?",
    answer:
      "Grape can be a useful supporting lane, especially when you want frequent harvest rhythm and a manageable processing feed.",
  },
  {
    question: "How do I avoid late-Fall planting mistakes?",
    answer:
      "Always verify remaining days, seed cost, and expected harvest count in calculator mode before purchasing seeds.",
  },
  {
    question: "Should I optimize for raw sales or processing in Fall?",
    answer:
      "If your kegs/jars are active and stable, processing often wins long-term. If you are machine-limited or cash-tight, raw sales can be the better short-term move.",
  },
] as const;

export const metadata: Metadata = {
  title: `${TITLE} | Stardew Profit`,
  description: DESCRIPTION,
  keywords: [
    "best fall crops stardew valley",
    "cranberry vs pumpkin stardew",
    "fall crop profit stardew",
    "stardew fall day 15",
    "stardew crop calculator",
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

export default function BestFallCropsQuickAnswerPage() {
  const readNextPosts = getBlogReadNextPosts("best-fall-crops-quick-answer", 3);

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
      "best fall crops stardew valley",
      "cranberry pumpkin comparison",
      "fall crop timing guide",
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
            { name: "Best Fall Crops" },
          ]}
        />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Quick Answer • Fall Crop SEO</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">Best Fall Crops in Stardew Valley</h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">This guide gives the fast Fall crop answer while keeping the decision tied to days left and processing reality.</p>

            <div className="mt-5 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?season=fall&daysLeft=28"
                fromPath={fromPath}
                ctaName="fall_quick_try_calculator_hero"
                className={CTA_CLASS}
              >
                Try Calculator
              </TrackedBlogCtaLink>
              <Link href="/blog/best-crops-every-season" className={LINK}>
                Read full season-by-season crop guide
              </Link>
            </div>
          </header>

          <section className={CARD}>
            <h2 className={H2}>TL;DR</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>Cranberry is the best all-around Fall crop for most farms.</li>
              <li>Pumpkin is a high-value option that shines with processing.</li>
              <li>Grape can support steady harvest rhythm and machine feed.</li>
              <li>Late Fall requires fast, finishable crop choices.</li>
              <li>Always run one calculator pass before committing seed budget.</li>
            </ul>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Best Fall Picks by Strategy</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#7c4d2e]/30 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Best baseline: Cranberry</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">Reliable repeat harvest pattern and strong field-level consistency.</p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/30 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Best premium: Pumpkin</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">High single-harvest value and strong upside when routed into artisan processing.</p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/30 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Best support lane: Grape</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">Frequent harvest cadence can help maintain processing throughput.</p>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/30 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Best late-season approach</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">Switch to fast-turn crops and avoid any plan that fails the season cutoff.</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              For machine routing decisions, combine this page with{" "}
              <Link href="/blog/keg-vs-jar-profit-guide" className={LINK}>
                Keg vs Jar Profit Guide
              </Link>
              {" "}and{" "}
              <Link href="/blog/stardew-valley-artisan-profit-guide" className={LINK}>
                Artisan Profit Guide
              </Link>
              .
            </p>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Timing: Day 1 vs Mid-Fall vs Late-Fall</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p><strong>Day 1-7:</strong> lock your main Fall crop plan and reserve budget.</p>
              <p><strong>Day 8-14:</strong> avoid overcommitting to slow options without a clean finish window.</p>
              <p><strong>Late Fall:</strong> prioritize finishable crop cycles and inventory clean-up.</p>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <Link href="/blog/best-crops-10-days-left-quick-answer" className={LINK}>
                Best crops with 10 days left
              </Link>
              <Link href="/blog/best-crops-7-days-left-before-season-switch" className={LINK}>
                Best crops with 7 days left
              </Link>
              <Link href="/blog/money-making-guide" className={LINK}>
                Money Making Guide (full roadmap)
              </Link>
              <Link href="/blog/stardew-valley-profit-guide-2026" className={LINK}>
                Profit Guide 2026
              </Link>
            </div>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Action Checklist (Fall Planting Decision)</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>Set days-left and filter out crops that cannot finish.</li>
              <li>Reserve gold for upgrades/buildings before seed spending.</li>
              <li>Choose one baseline crop and one supporting crop lane.</li>
              <li>Check processing capacity so harvests do not backlog.</li>
              <li>Run calculator comparison for your top 3 options.</li>
              <li>Re-evaluate every 7 in-game days, not every single day.</li>
            </ol>

            <div className="mt-5 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?season=fall&daysLeft=14&profession=artisan"
                fromPath={fromPath}
                ctaName="fall_quick_try_calculator_checklist"
                className={CTA_CLASS}
              >
                Try Calculator
              </TrackedBlogCtaLink>
              <TrackedBlogCtaLink
                href="/calculator?preset=keg-vs-jar-starfruit&profession=artisan"
                fromPath={fromPath}
                ctaName="fall_quick_compare_processing"
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
              <Link href="/blog/best-summer-crops-quick-answer" className={LINK}>
                Best Summer Crops Quick Answer
              </Link>
              <Link href="/blog/best-crops-year-1" className={LINK}>
                Best Crops Year 1
              </Link>
              <Link href="/blog/greenhouse-keg-empire-profit-guide" className={LINK}>
                Greenhouse Keg Empire Guide
              </Link>
              <Link href="/blog/farm-profit-pillars" className={LINK}>
                Farm Profit Pillars
              </Link>
            </div>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="best-fall-crops-quick-answer" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}

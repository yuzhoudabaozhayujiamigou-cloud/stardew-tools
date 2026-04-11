import type { Metadata } from "next";
import Link from "next/link";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_ORIGIN } from "@/lib/site";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import FaqJsonLd from "@/components/FaqJsonLd";
import { getBlogReadNextPosts } from "@/lib/read-next";
import Breadcrumb from "@/components/Breadcrumb";

const faqItems = [
  {
    question: "What should I plant on Fall Day 15 in Stardew Valley?",
    answer:
      "For most farms, Cranberry is no longer the default once you are this late. Fall Day 15 is a threshold spot where you should prioritize crops that clearly finish and still pay back inside the remaining window.",
  },
  {
    question: "How many days left does Fall Day 15 mean?",
    answer:
      "Fall Day 15 means 14 days left using the shared rule daysLeft = 28 - (dayOfMonth - 1).",
  },
  {
    question: "Is Fall Day 15 too late for Cranberries?",
    answer:
      "For many normal profit plans, yes. Cranberries are strongest early in the season. By Day 15, you should verify the remaining harvest count before buying seeds.",
  },
  {
    question: "Should I plant Pumpkin on Fall Day 15?",
    answer:
      "Pumpkin can still work in some setups because it fits a single clean cycle. It becomes more attractive if you value a simple timing line or plan to process high-value crops.",
  },
  {
    question: "Should I stop planting and prepare for Winter instead?",
    answer:
      "Not always. Day 15 is still playable, but every tile must earn its place. If a crop cannot finish cleanly or the return is weak, shift that budget toward prep, machines, or Winter transition work.",
  },
];

export const metadata: Metadata = {
  title: "Stardew Valley Fall Day 15: What to Plant for Profit",
  description:
    "Stardew Valley Fall Day 15 guide with 14 days left: what still finishes, what becomes risky, and where to run the exact calculator setup.",
  keywords: [
    "stardew valley fall day 15",
    "what to plant on fall day 15 stardew valley",
    "stardew valley fall 14 days left",
    "best fall crops mid season",
  ],
  alternates: {
    canonical: `${SITE_ORIGIN}/blog/stardew-valley-fall-day-15-what-to-plant`,
  },
  openGraph: {
    type: "article",
    publishedTime: "2026-04-11T00:00:00+08:00",
    modifiedTime: "2026-04-11T00:00:00+08:00",
  },
};

export default function StardewValleyFallDay15WhatToPlantPage() {
  const fromPath = "/blog/stardew-valley-fall-day-15-what-to-plant";
  const pageUrl = `${SITE_ORIGIN}/blog/stardew-valley-fall-day-15-what-to-plant`;
  const readNextPosts = getBlogReadNextPosts("stardew-valley-fall-day-15-what-to-plant", 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Stardew Valley Fall Day 15: What to Plant for Profit",
    datePublished: "2026-04-11",
    dateModified: "2026-04-11",
    author: {
      "@type": "Organization",
      name: "Stardew Profit",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };

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

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <PwaRegisterScript />
        <FaqJsonLd faqs={faqItems} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Fall Day 15: What to Plant" },
          ]}
        />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Fall Threshold Guide</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              What to Plant on Fall Day 15 in Stardew Valley
            </h1>

            <div className="mt-3 space-y-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                Fall Day 15 is the borderline zone. You still have enough room to profit, but blind “best crop” advice stops working.
              </p>
              <p>
                This page translates the date into <strong>daysLeft = 14</strong> and focuses on crops that can still finish cleanly.
              </p>
              <p>
                Run the exact setup here:{" "}
                <TrackedBlogCtaLink
                  className="font-semibold text-[#6a3f1e] underline"
                  href="/calculator?season=fall&daysLeft=14"
                  fromPath={fromPath}
                  ctaName="inline_path_link"
                >
                  /calculator?season=fall&daysLeft=14
                </TrackedBlogCtaLink>
                .
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?season=fall&daysLeft=14"
                fromPath={fromPath}
                ctaName="hero_jump_button"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-80">
                  ⚡
                </span>
                Jump to Calculator
              </TrackedBlogCtaLink>
              <Link href="/blog/best-fall-crops-quick-answer" className="font-semibold text-[#2f6a3a] underline decoration-[#2f6a3a]/30 underline-offset-4 hover:text-[#1f6b2e]">
                Read the broader Fall crop guide
              </Link>
            </div>
          </header>

          <section className="rounded-[24px] border-2 border-[#9f744c]/35 bg-[#fff8e8]/85 p-4 sm:p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6f4b2a]/80">Quick Answer</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#5f4228]/90 sm:text-base">
              <li>Fall Day 15 is no longer an “early season” crop choice.</li>
              <li>Use finishable crops first. One missed timing step matters now.</li>
              <li>Pumpkin-type one-cycle decisions become easier to justify than slow repeat-harvest fantasies.</li>
              <li>Cranberry can still look tempting, but only if the remaining harvest count really works for your setup.</li>
              <li>If a crop does not finish cleanly, do not buy it just because it is famous.</li>
            </ul>
          </section>

          <section className="rounded-[24px] border-2 border-[#9f744c]/35 bg-[#fff8e8]/85 p-4 sm:p-5">
            <h2 className="text-2xl font-semibold text-[#4a321e]">How to think about Fall Day 15</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                This is the middle-risk window. Early Fall rewards broad upside; late Fall forces panic planting. Day 15 sits in between.
              </p>
              <p>
                The main job here is simple: stop thinking in seasonal slogans and start thinking in <strong>remaining cycles</strong>. The best crop is the one that still finishes, fits your budget, and matches your machine throughput.
              </p>
              <p>
                If you are unsure, compare this page with the stronger baseline guide at <Link href="/blog/best-fall-crops-quick-answer" className="font-semibold underline">Best Fall Crops</Link> and then validate with the calculator.
              </p>
            </div>
          </section>

          <section className="rounded-[24px] border-2 border-[#9f744c]/35 bg-[#fff8e8]/85 p-4 sm:p-5">
            <h2 className="text-2xl font-semibold text-[#4a321e]">Recommended internal links</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li><Link href="/calculator?season=fall&daysLeft=14" className="font-semibold underline">Fall calculator with 14 days left</Link></li>
              <li><Link href="/calculator?season=fall&daysLeft=9" className="font-semibold underline">Compare against the tighter Fall Day 20 window</Link></li>
              <li><Link href="/blog/best-fall-crops-quick-answer" className="font-semibold underline">Best Fall Crops quick answer</Link></li>
              <li><Link href="/blog/best-crops-10-days-left-quick-answer" className="font-semibold underline">Best crops with 10 days left</Link></li>
              <li><Link href="/blog/best-crops-7-days-left-before-season-switch" className="font-semibold underline">Best crops with 7 days left</Link></li>
              <li><Link href="/presets" className="font-semibold underline">Preset starting points</Link></li>
            </ul>
          </section>

          <section className="rounded-[24px] border-2 border-[#9f744c]/35 bg-[#fff8e8]/85 p-4 sm:p-5">
            <h2 className="text-2xl font-semibold text-[#4a321e]">FAQ</h2>
            <div className="mt-3 space-y-4">
              {faqItems.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-[#7c4d2e]/20 bg-[#fffdf6] p-4">
                  <h3 className="text-base font-semibold text-[#4a321e]">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[24px] border-2 border-[#9f744c]/35 bg-[#fff8e8]/85 p-4 sm:p-5">
            <h2 className="text-2xl font-semibold text-[#4a321e]">Read next</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              If you want broader strategy context, start with the all-Fall answer page, then tighten the decision with calculator inputs.
            </p>
          </section>
        </article>

        <div className="mt-10">
          <BlogReadNext currentSlug="stardew-valley-fall-day-15-what-to-plant" posts={readNextPosts} />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

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

const fromPath = "/blog/ancient-fruit-vs-starfruit";

const FAQ_ITEMS = [
  {
    question: "Which is better: Ancient Fruit or Starfruit?",
    answer:
      "It depends on your bottleneck. Ancient Fruit is best when you want a low-maintenance weekly loop (especially for greenhouse + kegs). Starfruit is best when you can handle replanting and want the highest value per harvest.",
  },
  {
    question: "Is Starfruit always more profitable than Ancient Fruit?",
    answer:
      "Starfruit often wins per single harvest, but Ancient Fruit can win on gold/day for real farms because it regrows and saves replant time, seed cost, and missed cycles.",
  },
  {
    question: "Which is better for the greenhouse?",
    answer:
      "Ancient Fruit is the classic greenhouse pick because it regrows weekly and fits a stable processing cadence. Starfruit is still great if you enjoy the replant loop or want to min-max.",
  },
  {
    question: "Should I use kegs or preserves jars for these crops?",
    answer:
      "For both Ancient Fruit and Starfruit, kegs usually win if your bottleneck is value per item (wine). Preserves jars can be better early if you need faster cycles or you do not have enough kegs yet.",
  },
  {
    question: "What is the simplest decision rule?",
    answer:
      "If you want the easiest long-term loop: Ancient Fruit. If you want max value per harvest and do not mind replanting: Starfruit. Then confirm with the calculator using a 28- or 56-day window.",
  },
] as const;

export const metadata: Metadata = {
  title: "Ancient Fruit vs Starfruit (Profit, Effort, and Greenhouse Loop)",
  description:
    "Ancient Fruit vs Starfruit in Stardew Valley: which crop is better for profit? This guide compares profit, effort (replanting), greenhouse loops, and keg/jar throughput.",
  openGraph: {
    type: "article",
    publishedTime: "2026-03-03T00:00:00+08:00",
    modifiedTime: "2026-03-03T00:00:00+08:00",
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

export default function AncientFruitVsStarfruitPage() {
  const pageUrl = `${SITE_ORIGIN}${fromPath}`;
  const readNextPosts = getBlogReadNextPosts("ancient-fruit-vs-starfruit", 3);

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
            { name: "Ancient Fruit vs Starfruit" },
          ]}
        />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Profit Decision
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Ancient Fruit vs Starfruit
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              The best crop is the one that matches your <strong>bottleneck</strong>: effort (replanting), machine
              throughput (kegs/jars), and how often you actually log in.
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
              <Link className="text-sm font-semibold text-[#5c3d23] underline" href="/blog/best-greenhouse-crops-stardew-valley">
                Best greenhouse crops (pillar guide) →
              </Link>
            </div>
          </header>

          <section className={CARD}>
            <h2 className={H2}>TL;DR: The simplest rule</h2>
            <p className={P}>
              If you want the easiest long-term loop (especially in the greenhouse), pick <strong>Ancient Fruit</strong>.
              If you want maximum value per harvest and you do not mind replanting, pick <strong>Starfruit</strong>.
            </p>
            <p className={P}>
              Then confirm your choice using the <Link href="/calculator" className={LINK}>calculator</Link> with a longer
              window (28 or 56 days) so regrow cycles and throughput show up.
            </p>
          </section>

          <section className={CARD}>
            <h2 className={H2}>What actually matters: your bottleneck</h2>
            <p className={P}>
              Most debates about Ancient Fruit vs Starfruit assume you have infinite time and infinite machines. Real
              farms do not. In practice, you are limited by one (or more) of these:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>
                <strong>Replant effort</strong>: Starfruit requires replanting. Ancient Fruit regrows.
              </li>
              <li>
                <strong>Machine throughput</strong>: Do you have enough <Link href="/blog/how-many-kegs-do-i-need-quick-answer" className={LINK}>kegs</Link> or jars?
              </li>
              <li>
                <strong>Schedule</strong>: Daily play vs weekend-only changes what is "best".
              </li>
            </ul>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Greenhouse loop comparison</h2>
            <p className={P}>
              In the greenhouse, consistency is king. Ancient Fruit shines because it naturally fits a weekly routine:
              harvest once per week, load kegs in one batch, and repeat. Starfruit is still excellent, but it adds a
              replant step that some players simply do not enjoy.
            </p>
            <p className={P}>
              If you are planning your greenhouse as a long-term profit engine, pair this guide with the pillar article:
              <Link href="/blog/best-greenhouse-crops-stardew-valley" className={LINK}> best greenhouse crops</Link>.
            </p>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Kegs vs jars: processing changes the winner</h2>
            <p className={P}>
              When you process fruit into wine, your limiting factor becomes machine-days. If you are keg-limited, the
              question is not "which crop is best", it is "which crop produces the most value per keg cycle".
            </p>
            <p className={P}>
              Use these two guides to sanity-check the pipeline:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>
                <Link href="/blog/keg-vs-jar-profit-guide" className={LINK}>Keg vs Jar (full profit guide)</Link>
              </li>
              <li>
                <Link href="/blog/wine-vs-juice-quick-answer" className={LINK}>Wine vs Juice (quick answer)</Link>
              </li>
            </ul>
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

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <TrackedBlogCtaLink
                className={CTA_CLASS}
                href="/calculator"
                fromPath={fromPath}
                ctaName="open_calculator_end"
              >
                Compare both crops in the calculator
              </TrackedBlogCtaLink>
              <Link className="text-sm font-semibold text-[#5c3d23] underline" href="/blog/stardew-valley-artisan-profit-guide">
                Read the Artisan profit guide →
              </Link>
            </div>
          </section>

          <section className={CARD}>
            <h2 className={H2}>Read Next</h2>
            <BlogReadNext posts={readNextPosts} currentSlug="ancient-fruit-vs-starfruit" />
          </section>
        </article>

        <SiteFooter />
        <p className="mt-6 text-center text-xs text-[#6f4b2a]/70">URL: {pageUrl}</p>
      </main>
    </div>
  );
}

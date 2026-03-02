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
    question: "What are the best Spring crops in Stardew Valley Year 1?",
    answer:
      "In Year 1 Spring, the best crop depends on your days left, budget, and how consistently you can water. Use a gold/day comparison to pick a plan you can actually execute.",
  },
  {
    question: "Is it worth switching crops in mid-Spring?",
    answer:
      "Sometimes. It’s only worth switching if you have enough days left to finish at least one full growth cycle. Use the 14-days-left preset to sanity-check before you buy seeds.",
  },
  {
    question: "Why does gold per day matter more than total profit in Year 1?",
    answer:
      "In Year 1, time and energy are the bottlenecks. Total profit hides time. Gold per day helps you compare crops fairly when you have limited days and limited stamina.",
  },
  {
    question: "Should I assume professions for Year 1 planning?",
    answer:
      "If you’re unsure, start with normal quality and no professions. You can toggle assumptions later once your setup is stable.",
  },
  {
    question: "What’s the #1 mistake with Spring crops?",
    answer:
      "Planting too late and ignoring days left. Crops that don’t mature before Summer are effectively a loss.",
  },
] as const;

export const metadata: Metadata = {
  openGraph: {
    type: "article",
    publishedTime: "2026-03-02T00:00:00+08:00",
    modifiedTime: "2026-03-02T00:00:00+08:00",
  },
  title: "Stardew Valley Year 1 Spring Crops Profit Guide (With Daily Profit Calculator)",
  description:
    "A practical Year 1 Spring crop plan for Stardew Valley. Compare gold/day with calculator presets and pick the best crops for your days left, watering, and regrow cycles.",
};

const CTA_CLASS =
  "inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]";

export default function Year1SpringCropsProfitGuidePage() {
  const fromPath = "/blog/year-1-spring-crops-profit-guide";
  const pageUrl = `${SITE_ORIGIN}${fromPath}`;
  const readNextPosts = getBlogReadNextPosts("year-1-spring-crops-profit-guide", 3);

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
            { name: "Year 1 Spring Crops Profit Guide" },
          ]}
        />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Profit Guide
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Stardew Valley Year 1 Spring Crops Profit Guide
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              A practical guide for early-game Spring: compare crops by <strong>gold per day</strong> and pick a
              plan you can actually execute.
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
              <Link className="text-sm font-semibold text-[#5c3d23] underline" href="/blog/best-crops-year-1">
                Best Crops Year 1 →
              </Link>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Keywords: <strong>year 1 spring crops</strong>, <strong>best spring crops</strong>,{" "}
              <strong>daily profit stardew</strong>
            </p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Start Here: 3 Constraints</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                Year 1 Spring is not about finding the “#1 crop on paper”. It’s about picking a plan that fits
                your <strong>days left</strong>, your <strong>watering / harvesting capacity</strong>, and your
                early-game budget.
              </p>
              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  <strong>Days left in Spring</strong> (late planting is the #1 way to waste seeds).
                </li>
                <li>
                  <strong>How consistently you can water/harvest</strong> (time + energy is the real bottleneck).
                </li>
                <li>
                  <strong>Assumptions</strong> (keep it simple: normal quality, no professions at first).
                </li>
              </ol>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Quick Answer: 3 Good-Enough Plans</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                Use these as a starting point, then confirm with the calculator presets below.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>Plan A (low effort):</strong> choose a crop that doesn’t punish you for missing a harvest
                  window.
                </li>
                <li>
                  <strong>Plan B (higher gold/day):</strong> if you can keep up with watering/harvesting, prioritize
                  stronger gold/day crops.
                </li>
                <li>
                  <strong>Plan C (late Spring catch-up):</strong> don’t plant anything that can’t mature before Summer.
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Copy These Calculator Presets</h2>
            <div className="mt-3 space-y-4 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                Run each preset and compare the top crops by <strong>gold/day</strong>. Then pick the plan that
                matches your playstyle.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <TrackedBlogCtaLink
                  className={CTA_CLASS}
                  href="/calculator?season=spring&daysLeft=28"
                  fromPath={fromPath}
                  ctaName="spring_preset_28"
                >
                  Spring start (28 days left)
                </TrackedBlogCtaLink>
                <TrackedBlogCtaLink
                  className={CTA_CLASS}
                  href="/calculator?season=spring&daysLeft=14"
                  fromPath={fromPath}
                  ctaName="spring_preset_14"
                >
                  Mid Spring (14 days left)
                </TrackedBlogCtaLink>
                <TrackedBlogCtaLink
                  className={CTA_CLASS}
                  href="/calculator?season=spring&daysLeft=7"
                  fromPath={fromPath}
                  ctaName="spring_preset_7"
                >
                  Late Spring (7 days left)
                </TrackedBlogCtaLink>
              </div>

              <p className="text-xs text-[#6f4b2a]/75">
                Tip: if you’re comparing two options, keep assumptions the same (normal quality, no professions)
                so the gold/day ranking stays apples-to-apples.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Common Mistakes (Year 1 Spring)</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>Planting too late</strong> and ignoring days left (the season cutoff is unforgiving).
                </li>
                <li>
                  <strong>Over-optimizing without sprinklers</strong> (a “best crop” you can’t maintain is not best).
                </li>
                <li>
                  <strong>Switching too often</strong> (seed cost + lost growth days add up).
                </li>
              </ul>
              <p>
                If you want more general early-game strategy, check{" "}
                <Link className="font-semibold text-[#5c3d23] underline" href="/blog/best-crops-year-1">
                  Best Crops Year 1
                </Link>
                .
              </p>
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
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Read Next</h2>
            <BlogReadNext posts={readNextPosts} currentSlug="year-1-spring-crops-profit-guide" />
          </section>
        </article>

        <SiteFooter />
        <p className="mt-6 text-center text-xs text-[#6f4b2a]/70">URL: {pageUrl}</p>
      </main>
    </div>
  );
}

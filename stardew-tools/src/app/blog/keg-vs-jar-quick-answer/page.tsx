import type { Metadata } from "next";
import Link from "next/link";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import FaqJsonLd from "@/components/FaqJsonLd";
import { getBlogReadNextPosts } from "@/lib/read-next";
import Breadcrumb from "@/components/Breadcrumb";
import { BlogArticleMeta } from "@/components/blog/BlogArticleMeta";

const PAGE_URL = "https://www.stardewprofit.com/blog/keg-vs-jar-quick-answer";

const FAQ_ITEMS = [
  {
    question: "Is Keg or Preserves Jar better in Stardew Valley?",
    answer:
      "Keg usually wins for high-value fruit because wine has stronger upside. Preserves Jar is often better for faster cashflow, overflow crops, and early-game machine-light setups.",
  },
  {
    question: "When should I build Preserves Jars before Kegs?",
    answer:
      "Build jars first when you need faster turnaround and cannot keep a keg line fed yet. They are practical when your crop mix is broad and your machine count is still low.",
  },
  {
    question: "Can I run both Kegs and Jars at the same time?",
    answer:
      "Yes. A mixed pipeline is common: send top fruit into kegs, then route vegetables and overflow into jars so fewer crops sit idle in chests.",
  },
  {
    question: "How can I verify my own Keg vs Jar result quickly?",
    answer:
      "Run the calculator presets with your season, days left, and profession. If your result flips after changing only one variable, your farm is close to the break-even point and capacity planning matters most.",
  },
] as const;

export const metadata: Metadata = {
  title: "Keg vs Jar (Stardew Valley): Quick Answer + Calculator Presets",
  description:
    "Should you build Kegs or Preserves Jars first? Get a TL;DR answer, a 5-minute decision workflow, FAQ, and calculator presets for real Stardew Valley profit checks.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Keg vs Jar (Stardew Valley): Quick Answer + Calculator Presets",
    description:
      "TL;DR + step-by-step Keg vs Jar decision guide with calculator presets.",
    publishedTime: "2026-02-23T00:00:00+08:00",
    modifiedTime: "2026-06-02T00:00:00+08:00",
  },
};

export default function KegVsJarQuickAnswerPage() {
  const fromPath = "/blog/keg-vs-jar-quick-answer";
  const readNextPosts = getBlogReadNextPosts("keg-vs-jar-quick-answer", 3);

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
        <FaqJsonLd faqs={[...FAQ_ITEMS]} />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Keg vs Jar (Stardew Valley): Quick Answer + Calculator Presets" },
          ]}
        />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Quick Answer</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">Keg vs Jar: Which is better?</h1>
            <BlogArticleMeta published="2026-02-23" updated="2026-06-02" />
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              In most high-value crop chains, <strong>Keg</strong> wins total profit, while <strong>Preserves Jar</strong> can still be efficient for lower-value crops or
              tight processing windows.
            </p>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">TL;DR Quick Answer</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>Keg-first is usually stronger when your farm can supply high-value fruit steadily.</li>
              <li>Jar-first is often safer if your machine count is low and you need faster cash cycles.</li>
              <li>Most farms improve with a mixed line: kegs for premium inputs, jars for overflow.</li>
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Use Case + Steps (5 minutes)</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>Pick your real scenario: season, days left, and profession.</li>
              <li>Open one Keg preset and one Jar-friendly preset in the calculator.</li>
              <li>Compare net outcome and backlog risk, not only single-item value.</li>
              <li>If results are close, keep both machine types to reduce idle time.</li>
            </ol>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Start from{" "}
              <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/calculator">
                the profit calculator
              </Link>{" "}
              and adjust one variable at a time.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              The practical mistake is choosing a machine from the sell price alone. A keg can be mathematically better
              for Starfruit, Ancient Fruit, or Hops, but it loses value when fruit waits in a chest for weeks. A jar can
              look weaker per item while still improving your farm because it clears vegetables and mixed harvests fast.
              If your chests are full, compare total weekly output instead of one finished good.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              For a safer plan, pair this page with the deeper{" "}
              <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/blog/keg-vs-jar-profit-guide">
                Keg vs Preserve Jar profit guide
              </Link>
              , then check{" "}
              <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/blog/how-many-kegs-do-i-need-quick-answer">
                how many kegs you need
              </Link>{" "}
              before spending rare oak resin on machines that may sit idle.
            </p>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Use your real setup, not generic advice</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              Your answer depends on season timing, days left, and profession bonuses. Open the calculator preset below to compare artisan columns with live filters.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?preset=keg-vs-jar-starfruit&profession=artisan&lang=zh"
                fromPath={fromPath}
                ctaName="keg_vs_jar_starfruit_preset"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  🧮
                </span>
                Starfruit Wine Preset
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=keg-vs-jar-pumpkin&profession=artisan&lang=zh"
                fromPath={fromPath}
                ctaName="keg_vs_jar_pumpkin_preset"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  📊
                </span>
                Pumpkin Pickles Preset
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator?preset=keg-vs-jar-hops&profession=artisan&lang=zh"
                fromPath={fromPath}
                ctaName="keg_vs_jar_hops_preset"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">
                  🍺
                </span>
                Hops Pale Ale Preset
              </TrackedBlogCtaLink>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">Related Guides</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>
                <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/blog/keg-vs-jar-profit-guide">
                  Keg vs Preserve Jar: complete profit guide
                </Link>
              </li>
              <li>
                <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/blog/how-many-kegs-do-i-need-quick-answer">
                  How many kegs do I need?
                </Link>
              </li>
              <li>
                <Link className="font-semibold underline decoration-[#b77841]/60 underline-offset-4 hover:text-[#3f2a22] hover:decoration-[#b77841]" href="/blog/greenhouse-layout-guide">
                  Greenhouse layout guide (116 tiles)
                </Link>
              </li>
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e]">FAQ</h2>
            <div className="mt-3 space-y-3">
              {FAQ_ITEMS.map((item) => (
                <details key={item.question} className="rounded-2xl border border-[#7c4d2e]/35 bg-[#fff8e8] px-4 py-3">
                  <summary className="cursor-pointer list-none font-semibold text-[#4e341f]">{item.question}</summary>
                  <p className="mt-2 text-sm leading-6 text-[#614326]/90">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </article>

        <BlogReadNext posts={readNextPosts} currentSlug="keg-vs-jar-quick-answer" />

        <SiteFooter className="mt-8" />
      </main>
    </div>
  );
}

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
    question: "Is Fall Day 20 too late to plant in Stardew Valley?",
    answer:
      "For many big-ticket Fall plans, yes. Fall Day 20 is a late-window decision where you should avoid slow crops and focus on whatever still finishes cleanly.",
  },
  {
    question: "How many days left does Fall Day 20 mean?",
    answer:
      "Fall Day 20 means 9 days left using the standard daysLeft formula.",
  },
  {
    question: "Can I still plant Cranberries on Fall Day 20?",
    answer:
      "Usually not as a normal fresh planting plan. This is the point where repeat-harvest dreams often die unless the crop was already established earlier.",
  },
  {
    question: "What should I do instead of forcing late crops?",
    answer:
      "Run the calculator with the exact remaining window, favor fast finishes, and compare whether the seed budget is better spent on salvage planting, machine work, or Winter prep.",
  },
];

export const metadata: Metadata = {
  title: "Stardew Valley Fall Day 20: Is It Too Late to Plant?",
  description:
    "Stardew Valley Fall Day 20 guide with 9 days left: what still works, what becomes a trap, and how to use the late-window calculator setup.",
  keywords: [
    "stardew valley fall day 20",
    "is it too late to plant on fall day 20",
    "stardew valley fall 9 days left",
    "late fall planting stardew valley",
  ],
  alternates: {
    canonical: `${SITE_ORIGIN}/blog/stardew-valley-fall-day-20-is-it-too-late`,
  },
  openGraph: {
    type: "article",
    publishedTime: "2026-04-11T00:00:00+08:00",
    modifiedTime: "2026-04-11T00:00:00+08:00",
  },
};

export default function StardewValleyFallDay20IsItTooLatePage() {
  const fromPath = "/blog/stardew-valley-fall-day-20-is-it-too-late";
  const pageUrl = `${SITE_ORIGIN}/blog/stardew-valley-fall-day-20-is-it-too-late`;
  const readNextPosts = getBlogReadNextPosts("stardew-valley-fall-day-20-is-it-too-late", 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Stardew Valley Fall Day 20: Is It Too Late to Plant?",
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
            { name: "Fall Day 20: Is It Too Late?" },
          ]}
        />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Late Fall Panic Guide</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Is Fall Day 20 Too Late to Plant in Stardew Valley?
            </h1>

            <div className="mt-3 space-y-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                This is the panic zone. By Fall Day 20, most “best crop” advice becomes misleading because the remaining window is tiny.
              </p>
              <p>
                This page uses <strong>daysLeft = 9</strong> and asks one brutal question: what still finishes before Winter?
              </p>
              <p>
                Run the late-window setup here:{" "}
                <TrackedBlogCtaLink
                  className="font-semibold text-[#6a3f1e] underline"
                  href="/calculator?season=fall&daysLeft=9"
                  fromPath={fromPath}
                  ctaName="inline_path_link"
                >
                  /calculator?season=fall&daysLeft=9
                </TrackedBlogCtaLink>
                .
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?season=fall&daysLeft=9"
                fromPath={fromPath}
                ctaName="hero_jump_button"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-[#fce8b1]"
              >
                <span aria-hidden="true" className="inline-flex items-center leading-none opacity-80">
                  ⚡
                </span>
                Jump to Calculator
              </TrackedBlogCtaLink>
              <Link href="/blog/stardew-valley-fall-day-15-what-to-plant" className="font-semibold text-[#2f6a3a] underline decoration-[#2f6a3a]/30 underline-offset-4 hover:text-[#1f6b2e]">
                Compare with the Day 15 threshold guide
              </Link>
            </div>
          </header>

          <section className="rounded-[24px] border-2 border-[#9f744c]/35 bg-[#fff8e8]/85 p-4 sm:p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6f4b2a]/80">Quick Answer</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#5f4228]/90 sm:text-base">
              <li>Yes, for many high-upside Fall crops it is already too late.</li>
              <li>Do not start repeat-harvest fantasies from scratch here.</li>
              <li>Favor fast finishes, not famous crop names.</li>
              <li>If the calculator shows weak return, preserve gold for Winter transition instead of forcing bad seeds.</li>
            </ul>
          </section>

          <section className="rounded-[24px] border-2 border-[#9f744c]/35 bg-[#fff8e8]/85 p-4 sm:p-5">
            <h2 className="text-2xl font-semibold text-[#4a321e]">What changes by Day 20</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                Fall Day 20 is no longer a ranking problem. It is a survival filter. Most of the page exists to stop you from buying seeds that cannot possibly pay back.
              </p>
              <p>
                At this point, the only honest route is to test the exact remaining days and compare them against short-window alternatives. This is why the calculator link matters more than generic crop tier lists.
              </p>
              <p>
                If you want the broader Fall overview first, start with <Link href="/blog/best-fall-crops-quick-answer" className="font-semibold underline">Best Fall Crops</Link>, then come back to this stricter page.
              </p>
            </div>
          </section>

          <section className="rounded-[24px] border-2 border-[#9f744c]/35 bg-[#fff8e8]/85 p-4 sm:p-5">
            <h2 className="text-2xl font-semibold text-[#4a321e]">Useful next clicks</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li><Link href="/calculator?season=fall&daysLeft=9" className="font-semibold underline">Run the 9-days-left Fall calculator</Link></li>
              <li><Link href="/blog/stardew-valley-fall-day-15-what-to-plant" className="font-semibold underline">Fall Day 15 threshold guide</Link></li>
              <li><Link href="/blog/best-crops-10-days-left-quick-answer" className="font-semibold underline">10 days left quick answer</Link></li>
              <li><Link href="/blog/best-crops-7-days-left-before-season-switch" className="font-semibold underline">7 days left panic guide</Link></li>
              <li><Link href="/presets" className="font-semibold underline">Preset routes for rescue scenarios</Link></li>
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
        </article>

        <div className="mt-10">
          <BlogReadNext currentSlug="stardew-valley-fall-day-20-is-it-too-late" posts={readNextPosts} />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

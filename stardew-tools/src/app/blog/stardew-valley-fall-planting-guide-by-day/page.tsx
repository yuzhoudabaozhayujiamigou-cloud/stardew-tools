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

const fromPath = "/blog/stardew-valley-fall-planting-guide-by-day";
const url = `${SITE_ORIGIN}${fromPath}`;

const faqItems = [
  {
    question: "What is the best crop to plant on Fall Day 15?",
    answer:
      "Fall Day 15 is a threshold decision. Prioritize crops that finish cleanly in the remaining 14-day window instead of blindly following Day 1 rankings.",
  },
  {
    question: "Is it too late to plant Cranberries on Fall Day 20?",
    answer:
      "Usually as a new planting plan, yes. By Day 20 you should treat repeat-harvest Fall crops as suspicious unless the calculator proves the remaining window still works.",
  },
  {
    question: "What can I still plant on Fall Day 25?",
    answer:
      "Very little in baseline farming runs. Fall Day 25 is mostly a salvage scenario where many players should stop pretending it is a normal crop-planning decision.",
  },
  {
    question: "Should I stop planting and prepare for Winter instead?",
    answer:
      "If the remaining window is too short for meaningful returns, yes. Winter prep, machine routing, and preserving cash can beat forcing bad late-season seeds.",
  },
  {
    question: "What does Fall Day 20 mean in days left?",
    answer:
      "Fall Day 20 means 9 days left, using daysLeft = 28 - (dayOfMonth - 1).",
  },
];

export const metadata: Metadata = {
  title: "Stardew Valley Fall Planting Guide by Day (Day 1, 7, 15, 20, 25)",
  description:
    "Stardew Valley Fall guide by exact day: Day 1, 7, 15, 20, and 25. Convert current date into days left, avoid late-season traps, and jump into the correct calculator setup.",
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Stardew Valley Fall Planting Guide by Day (Day 1, 7, 15, 20, 25)",
    description:
      "A day-by-day Fall planting map for Stardew Valley. Translate current date into days left, compare threshold windows, and avoid bad late-Fall decisions.",
    type: "article",
    url,
    images: [{ url: `${url}/opengraph-image` }],
    publishedTime: "2026-04-11T00:00:00+08:00",
    modifiedTime: "2026-04-11T00:00:00+08:00",
  },
};

export default function StardewValleyFallPlantingGuideByDayPage() {
  const readNextPosts = getBlogReadNextPosts("stardew-valley-fall-planting-guide-by-day", 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Stardew Valley Fall Planting Guide by Day (Day 1, 7, 15, 20, 25)",
    description:
      "A day-based Fall planting guide for Stardew Valley that converts current date into days-left decision windows.",
    datePublished: "2026-04-11",
    dateModified: "2026-04-11",
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
        <FaqJsonLd faqs={faqItems} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Fall Planting Guide by Day" },
          ]}
        />

        <article className="space-y-6">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Fall Day-by-Day Hub</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              What to Plant in Fall by Day in Stardew Valley
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              If you are already inside Fall and just want the fastest answer, use this page as a threshold map. Pick the current day, convert it into days left, then jump to the right decision page.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator?season=fall&daysLeft=28"
                fromPath={fromPath}
                ctaName="fall_day_hub_try_calculator"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                Try Fall Calculator
              </TrackedBlogCtaLink>
              <Link href="/blog/best-fall-crops-quick-answer" className="font-semibold text-[#2f6a3a] underline decoration-[#2f6a3a]/30 underline-offset-4 hover:text-[#1f6b2e]">
                Read quick answer first
              </Link>
            </div>
          </header>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Quick conversion rule</h2>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              Use this shared formula across Stardew Profit threshold pages:
            </p>
            <div className="mt-3 rounded-2xl border border-[#7c4d2e]/20 bg-[#fff8e8] p-4 font-mono text-sm text-[#4a321e]">
              daysLeft = 28 - (dayOfMonth - 1)
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <li>Fall Day 1 = 28 days left</li>
              <li>Fall Day 7 = 22 days left</li>
              <li>Fall Day 15 = 14 days left</li>
              <li>Fall Day 20 = 9 days left</li>
              <li>Fall Day 25 = 4 days left</li>
            </ul>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Fall-by-day quick navigation</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#7c4d2e]/20 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Day 1-7</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">Normal early-season planning. Big-profit Fall staples are still on the table.</p>
                <Link href="/blog/best-fall-crops-quick-answer" className="mt-3 inline-block font-semibold underline">Best Fall Crops</Link>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/20 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Day 15</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">Borderline zone. Strong crops must still fit cleanly inside the remaining window.</p>
                <Link href="/blog/stardew-valley-fall-day-15-what-to-plant" className="mt-3 inline-block font-semibold underline">Open Day 15 guide</Link>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/20 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Day 20</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">Panic zone. Most slow crops become traps.</p>
                <Link href="/blog/stardew-valley-fall-day-20-is-it-too-late" className="mt-3 inline-block font-semibold underline">Open Day 20 guide</Link>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/20 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">10 days left</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">Threshold-first decision making for short windows.</p>
                <Link href="/blog/best-crops-10-days-left-quick-answer" className="mt-3 inline-block font-semibold underline">Open 10-day guide</Link>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/20 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">7 days left</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">Strict finishability mode. Very little room for error.</p>
                <Link href="/blog/best-crops-7-days-left-before-season-switch" className="mt-3 inline-block font-semibold underline">Open 7-day guide</Link>
              </div>
              <div className="rounded-2xl border border-[#7c4d2e]/20 bg-[#fff8e8] p-4">
                <h3 className="text-base font-semibold text-[#4a321e]">Calculator jump</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">Skip the blog flow and test exact numbers for your farm.</p>
                <TrackedBlogCtaLink href="/calculator?season=fall&daysLeft=14" fromPath={fromPath} ctaName="hub_inline_calculator" className="mt-3 inline-block font-semibold underline">
                  Run calculator
                </TrackedBlogCtaLink>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">What stops being worth it as Fall gets late?</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              <p>
                Early Fall rewards wide choice. Mid-Fall asks for discipline. Late Fall punishes fantasy planning.
              </p>
              <p>
                The later you are, the less this is about “best crop in the game” and the more it becomes “what can still finish before Winter without lying to yourself.”
              </p>
              <p>
                That is the point of this hub: map the date to a real threshold page, then validate the final decision with the calculator before you spend gold.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">FAQ</h2>
            <div className="mt-4 space-y-4">
              {faqItems.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-[#7c4d2e]/20 bg-[#fff8e8] p-4">
                  <h3 className="text-base font-semibold text-[#4a321e]">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        <div className="mt-10">
          <BlogReadNext currentSlug="stardew-valley-fall-planting-guide-by-day" posts={readNextPosts} />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

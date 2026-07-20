import type { Metadata } from "next";
import Link from "next/link";

import { HomeQuickCalculator } from "@/components/HomeQuickCalculator";
import { SiteFooter } from "@/components/SiteFooter";
import {
  EDITORIAL_AUTHOR_NAME,
  EDITORIAL_AUTHOR_PATH,
  VERIFIED_REVIEW_DATE,
  VERIFIED_REVIEW_DATE_LABEL,
} from "@/lib/editorial";
import { SITE_ORIGIN } from "@/lib/site";

const PAGE_TITLE = "Stardew Valley Profit Calculator & Best Crops Planner";
const PAGE_DESCRIPTION =
  "Compare Stardew Valley crop profit, rank crops by days left, and continue into greenhouse, artisan, and seasonal planning guides.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  authors: [{ name: EDITORIAL_AUTHOR_NAME, url: EDITORIAL_AUTHOR_PATH }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const DESTINATIONS = [
  {
    label: "Crop rankings",
    title: "Best crops by season",
    description: "Compare Spring, Summer, Fall, Winter, and Greenhouse rankings with stated assumptions.",
    href: "/best-crops",
    accent: "border-t-[#d9a441]",
  },
  {
    label: "Guide library",
    title: "Plan the whole farm",
    description: "Move from one crop choice into Year 1, progression, greenhouse, and completion routes.",
    href: "/guides",
    accent: "border-t-[#3f78a8]",
  },
  {
    label: "Artisan tools",
    title: "Match crops to machines",
    description: "Compare kegs, jars, seed replacement value, sprinkler coverage, and processing capacity.",
    href: "/tools",
    accent: "border-t-[#b14f3a]",
  },
  {
    label: "Greenhouse",
    title: "Use a 112-day horizon",
    description: "Separate direct crop output from the machine throughput needed for wine or jelly.",
    href: "/best-crops/greenhouse",
    accent: "border-t-[#527047]",
  },
  {
    label: "Secret Notes",
    title: "Find locations and rewards",
    description: "Browse the finder and open the expanded Note 19 and Note 22 route schematics.",
    href: "/secret-notes",
    accent: "border-t-[#8c5b7c]",
  },
  {
    label: "Methodology",
    title: "Check every assumption",
    description: "See how harvest timing, regrowth, quality, professions, and seed costs enter each result.",
    href: "/methodology",
    accent: "border-t-[#284d41]",
  },
] as const;

const HOME_FAQS = [
  {
    question: "How does the quick crop ranking work?",
    answerText:
      "It uses the same crop dataset and harvest-cycle calculator as the full tool. Results assume one outdoor tile, normal quality, direct crop sales, and the selected number of days left.",
    answer: (
      <>
        It uses the same crop dataset and harvest-cycle calculator as the full tool. Results assume one outdoor tile,
        normal quality, direct crop sales, and the selected number of days left.
      </>
    ),
  },
  {
    question: "Why can the best crop change late in a season?",
    answerText:
      "A high-value crop is useless if its first harvest misses the season deadline. The ranking counts only harvests that fit in the selected window and subtracts the seeds required for those cycles.",
    answer: (
      <>
        A high-value crop is useless if its first harvest misses the season deadline. The ranking counts only harvests
        that fit in the selected window and subtracts the seeds required for those cycles.
      </>
    ),
  },
  {
    question: "Does the homepage ranking include kegs and Preserves Jars?",
    answerText:
      "No. It ranks direct crop sales first because machine capacity is a separate constraint. After choosing a crop, use the artisan tools to compare processing value and throughput.",
    answer: (
      <>
        No. It ranks direct crop sales first because machine capacity is a separate constraint. After choosing a crop,
        use the <Link href="/tools/keg-vs-preserves-jar" className="font-semibold underline underline-offset-4">artisan comparison</Link>{" "}
        to evaluate processing value and throughput.
      </>
    ),
  },
] as const;

export default function HomePage() {
  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "StardewProfit",
    url: `${SITE_ORIGIN}/`,
    description: PAGE_DESCRIPTION,
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "StardewProfit",
    url: `${SITE_ORIGIN}/`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answerText,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#f8f6ee] text-[#203b33]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main>
        <section className="border-b border-[#b7c8c1] bg-[#e5f0eb]">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(560px,1.18fr)] lg:items-center lg:gap-12">
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-[#b14f3a]">StardewProfit</p>
              <h1 className="mt-2 text-4xl font-semibold leading-tight text-[#203b33] sm:text-5xl">
                Stardew Valley Profit Calculator
              </h1>
              <p className="mt-5 text-lg leading-8 text-[#40554d]">
                Rank crops by the days you actually have left, then carry the result into seasonal, greenhouse, and
                artisan planning.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#586860]">
                The quick ranking uses the same shared crop data and harvest-cycle logic as the full calculator. It
                counts regrowth, subtracts seed costs, and excludes harvests that miss the deadline.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="#quick-calculator-heading"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#284d41] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#203f35] lg:hidden"
                >
                  Start quick ranking
                </Link>
                <Link
                  href="/calculator"
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#284d41] bg-white px-5 py-2.5 text-sm font-semibold text-[#284d41] transition hover:bg-[#f4f8f6]"
                >
                  Open full calculator
                </Link>
              </div>
              <div className="mt-7 border-l-4 border-[#d9a441] pl-4 text-sm leading-6 text-[#586860]">
                <p>
                  Reviewed <time dateTime={VERIFIED_REVIEW_DATE}>{VERIFIED_REVIEW_DATE_LABEL}</time> for Stardew Valley
                  1.6 mechanics.
                </p>
                <p className="mt-1">
                  <Link href={EDITORIAL_AUTHOR_PATH} className="font-semibold underline underline-offset-4">
                    {EDITORIAL_AUTHOR_NAME}
                  </Link>{" "}
                  · <Link href="/methodology" className="font-semibold underline underline-offset-4">Calculation methodology</Link>
                </p>
              </div>
            </div>

            <HomeQuickCalculator />
          </div>
        </section>

        <section className="border-b border-[#ddd8c8] bg-[#fffdf8]">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-[#3f78a8]">Explore by decision</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#203b33]">Continue from a number to a farm plan</h2>
              <p className="mt-3 text-base leading-7 text-[#586860]">
                Choose the section that matches the constraint in front of you. Each destination links back to a
                working calculator or explains the assumptions behind its recommendation.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DESTINATIONS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group rounded-lg border border-[#d8d5c9] border-t-4 ${item.accent} bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#9ea9a4] hover:shadow-md`}
                >
                  <p className="text-sm font-semibold text-[#6a746f]">{item.label}</p>
                  <h3 className="mt-2 text-xl font-semibold text-[#203b33] group-hover:text-[#b14f3a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#586860]">{item.description}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-[#284d41] underline decoration-[#284d41]/30 underline-offset-4">
                    Open section
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#c8d5d0] bg-[#eef4f1]">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
            <div>
              <p className="text-sm font-semibold text-[#b14f3a]">Transparent calculations</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#203b33]">A ranking you can audit</h2>
              <p className="mt-3 text-base leading-7 text-[#586860]">
                A crop is only credited when its harvest fits. Regrowing crops keep their first seed cost, replant crops
                pay for every cycle, and artisan goods remain a separate machine-capacity decision.
              </p>
              <Link
                href="/methodology"
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-[#284d41] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#203f35]"
              >
                Read the methodology
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="border-l-4 border-[#d9a441] bg-white px-4 py-5">
                <strong className="text-2xl text-[#203b33]">1-28</strong>
                <p className="mt-2 text-sm leading-6 text-[#586860]">Day window used by the homepage ranking.</p>
              </div>
              <div className="border-l-4 border-[#3f78a8] bg-white px-4 py-5">
                <strong className="text-2xl text-[#203b33]">Per tile</strong>
                <p className="mt-2 text-sm leading-6 text-[#586860]">Keeps fields of different sizes comparable.</p>
              </div>
              <div className="border-l-4 border-[#b14f3a] bg-white px-4 py-5">
                <strong className="text-2xl text-[#203b33]">Direct sale</strong>
                <p className="mt-2 text-sm leading-6 text-[#586860]">Prevents unlimited machine assumptions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fffdf8]">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-[#8c5b7c]">Questions</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#203b33]">What the quick result means</h2>
            </div>
            <div className="mt-7 divide-y divide-[#d8d5c9] border-y border-[#d8d5c9]">
              {HOME_FAQS.map((item) => (
                <details key={item.question} className="group py-5">
                  <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-[#203b33] marker:content-none">
                    {item.question}
                  </summary>
                  <p className="mt-3 max-w-4xl text-sm leading-7 text-[#586860]">{item.answer}</p>
                </details>
              ))}
            </div>

            <SiteFooter className="mt-10 border-t border-[#d8d5c9] pt-6" />
          </div>
        </section>
      </main>
    </div>
  );
}

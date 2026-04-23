import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

import {
  CARD_CLASS,
  GUIDE_HUB_PATH,
  guidePath,
  LETHAL_GUIDES,
  LINK_CLASS,
  QUOTA_CALCULATOR_PATH,
  SITE_URL,
} from "./guide-config";

const PAGE_TITLE = "Lethal Company Quota and Terminal Guides | StardewProfit";
const PAGE_DESCRIPTION =
  "Browse practical Lethal Company guides for Day 1 vs Day 2 selling, deadline strategy, quota formula, and essential terminal commands.";

const PAGE_KEYWORDS = [
  "lethal company guides",
  "lethal company quota calculator",
  "lethal company terminal commands",
  "lethal company day 1 day 2 sell",
] as const;

const HUB_FAQS = [
  {
    question: "What is the best default sell strategy in Lethal Company?",
    answer:
      "Keep Day 1 and Day 2 sales minimal, then use the highest-value payout window to clear quota with less inventory waste.",
  },
  {
    question: "Why should I learn terminal commands early?",
    answer:
      "Core commands like SCAN, MOONS, STORE, BESTIARY, and VIEW MONITOR improve route quality, buying decisions, and team survival.",
  },
  {
    question: "How does quota growth affect strategy?",
    answer:
      "Quota growth is quadratic, so pressure rises faster later. Inventory discipline and sell timing become more important every cycle.",
  },
] as const;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [...PAGE_KEYWORDS],
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${SITE_URL}${GUIDE_HUB_PATH}`,
  },
  openGraph: {
    type: "article",
    url: `${SITE_URL}${GUIDE_HUB_PATH}`,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function LethalCompanyGuideHubPage() {
  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Lethal Company", href: GUIDE_HUB_PATH },
          ]}
        />

        <FaqJsonLd faqs={HUB_FAQS.map((item) => ({ ...item }))} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Lethal Company Guide Hub",
              itemListElement: LETHAL_GUIDES.map((guide, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: guide.shortTitle,
                url: `${SITE_URL}${guidePath(guide.slug)}`,
              })),
            }),
          }}
        />

        <header className={CARD_CLASS}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Guides</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Lethal Company Quota and Selling Strategy Guides
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            This hub organizes focused guides from our Lethal Company SEO content set. Each page includes a practical
            checklist you can apply immediately in live runs.
          </p>
        </header>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Guide Library</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {LETHAL_GUIDES.map((guide) => (
              <article key={guide.slug} className="rounded-2xl border border-[#8a5b3a]/45 bg-white/55 p-4">
                <h3 className="text-base font-semibold text-[#4a321e] sm:text-lg">{guide.shortTitle}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">{guide.description}</p>
                <Link href={guidePath(guide.slug)} className={`${LINK_CLASS} mt-3`}>
                  Read Guide
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Core Rules from the Strategy Set</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            <li>Day 1 and Day 2 are usually reduced payout windows, so avoid panic full-inventory sales.</li>
            <li>Deadline Day 3 is generally the best value sell window for large quota conversion.</li>
            <li>The quota formula scales quadratically, so late-cycle pressure rises much faster.</li>
            <li>Terminal command discipline is a core economic skill, not just a convenience.</li>
          </ul>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Quick Links</h2>
          <div className="mt-4 grid gap-3 sm:flex sm:flex-wrap sm:gap-2">
            <Link href="/" className={LINK_CLASS}>
              Back to Home
            </Link>
            <Link href={QUOTA_CALCULATOR_PATH} className={LINK_CLASS}>
              Open Quota Calculator
            </Link>
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}

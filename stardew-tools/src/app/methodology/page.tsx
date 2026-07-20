import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import { EditorialReview } from "@/components/EditorialReview";
import { SiteFooter } from "@/components/SiteFooter";
import { EDITORIAL_AUTHOR_NAME } from "@/lib/editorial";
import { SITE_ORIGIN } from "@/lib/site";

const PAGE_PATH = "/methodology";
const PAGE_TITLE = "Data and Calculation Methodology | StardewProfit";
const PAGE_DESCRIPTION =
  "See how StardewProfit calculates crop returns, handles regrowth and professions, reviews game data, and explains the limits of each ranking.";

const SECTION_CLASS =
  "mt-6 rounded-[24px] border-2 border-[#8a5b3a]/45 bg-white/55 p-5 text-sm leading-7 text-[#5f4228]/90 sm:p-6 sm:text-base";
const LINK_CLASS =
  "font-semibold text-[#1f6b2e] underline decoration-[#1f6b2e]/35 underline-offset-4 hover:decoration-[#1f6b2e]/65";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  authors: [{ name: EDITORIAL_AUTHOR_NAME, url: "/about#editorial-team" }],
  alternates: { canonical: `${SITE_ORIGIN}${PAGE_PATH}` },
  openGraph: {
    type: "article",
    url: `${SITE_ORIGIN}${PAGE_PATH}`,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function MethodologyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_ORIGIN}${PAGE_PATH}`,
    dateModified: "2026-07-20",
    publisher: {
      "@type": "Organization",
      name: "StardewProfit",
      url: SITE_ORIGIN,
    },
  };

  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <main className="relative z-10 mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Methodology", href: PAGE_PATH },
          ]}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <header className="rounded-[30px] border-4 border-[#8a5b3a]/75 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Transparency</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Data and Calculation Methodology
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#5f4228]/90 sm:text-base">
            StardewProfit turns game values into planning estimates. This page explains what the calculator counts,
            what each ranking leaves out, and how to decide whether a result applies to your farm.
          </p>
          <EditorialReview gameVersion="1.6" />
        </header>

        <section className={SECTION_CLASS}>
          <h2 className="text-xl font-semibold text-[#4a321e]">What the crop calculator measures</h2>
          <p className="mt-3">
            The main calculator uses seed cost, crop sale value, first-growth time, regrowth time, the number of days
            available, quality assumptions, and selected profession bonuses. It simulates every harvest that fits in
            the chosen window rather than dividing one sale by one growth cycle.
          </p>
          <p className="mt-3">
            The primary comparison is gold per day. Total profit is still shown because a high daily return can be a
            poor plan when it produces too little cash for the upgrade or festival purchase you are targeting.
          </p>
        </section>

        <section className={SECTION_CLASS}>
          <h2 className="text-xl font-semibold text-[#4a321e]">Core calculation sequence</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>Determine whether the first harvest fits inside the selected number of days.</li>
            <li>For regrowing crops, add every additional harvest that fits after the first one.</li>
            <li>Apply the selected crop-quality value and relevant profession multiplier.</li>
            <li>Subtract the seed investment used by that planting plan.</li>
            <li>Divide the resulting profit by the planning window to produce gold per day.</li>
          </ol>
          <p className="mt-3">
            A crop that cannot mature before the season ends is not credited with a future harvest. This is why a
            day-limited result can differ sharply from a full 28-day season ranking.
          </p>
        </section>

        <section className={SECTION_CLASS}>
          <h2 className="text-xl font-semibold text-[#4a321e]">Direct sales and artisan goods are separate decisions</h2>
          <p className="mt-3">
            Seasonal crop tables default to direct crop sales unless the page says otherwise. Kegs and Preserves Jars
            introduce a second constraint: machine time. A higher output price is not automatically better if your
            harvest waits in a chest for weeks.
          </p>
          <p className="mt-3">
            Use the <Link href="/calculator" className={LINK_CLASS}>crop calculator</Link> to choose a crop, then use the{" "}
            <Link href="/tools/keg-vs-preserves-jar" className={LINK_CLASS}>Keg vs Preserves Jar comparison</Link> to
            route the harvest through the machines you actually own.
          </p>
        </section>

        <section className={SECTION_CLASS}>
          <h2 className="text-xl font-semibold text-[#4a321e]">Important limits</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Travel time, watering time, luck, food buffs, and player execution are not converted into gold.</li>
            <li>Festival access, shop availability, and unlock requirements can make a mathematically strong crop unavailable.</li>
            <li>Seed Maker output is random, so its pages use planning averages rather than guaranteed results.</li>
            <li>Greenhouse and Ginger Island plans use a longer horizon because they do not share the normal season deadline.</li>
            <li>Game updates can change values or availability; individual save conditions always take priority.</li>
          </ul>
        </section>

        <section className={SECTION_CLASS}>
          <h2 className="text-xl font-semibold text-[#4a321e]">How pages are reviewed</h2>
          <p className="mt-3">
            Data-backed pages use the shared crop dataset and calculation library instead of copying numbers into each
            article. Strategy pages are reviewed for internal consistency: the stated days left must match the crop
            growth window, processing recommendations must acknowledge machine capacity, and links must lead to a
            working calculator or a more detailed guide.
          </p>
          <p className="mt-3">
            When an estimate is simplified, the page should state the simplification next to the table. Corrections can
            be reported through the <Link href="/contact" className={LINK_CLASS}>contact page</Link>. Include the crop,
            page URL, game version, and the value you believe needs review.
          </p>
        </section>

        <section className={SECTION_CLASS}>
          <h2 className="text-xl font-semibold text-[#4a321e]">Editorial and ownership disclosure</h2>
          <p className="mt-3">
            StardewProfit is an independent fan-made tool. It is not affiliated with ConcernedApe. Guides are written
            to explain a reproducible decision, not to present one universal play style as mandatory. Automated tools
            may assist development, but published calculations are tied to the shared data and code paths described
            above.
          </p>
          <p className="mt-3">
            See <Link href="/about" className={LINK_CLASS}>About StardewProfit</Link> for the project purpose and{" "}
            <Link href="/disclaimer" className={LINK_CLASS}>Disclaimer</Link> for the limits of the information provided.
          </p>
        </section>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}

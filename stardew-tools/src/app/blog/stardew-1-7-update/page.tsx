import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";

const publishedTime = "2026-04-23T00:00:00Z";
const modifiedTime = "2026-04-23T00:00:00Z";
const url = "https://www.stardewprofit.com/blog/stardew-1-7-update";

const TITLE = "Stardew Valley 1.7 Update: New Crops, Profit Changes & What to Expect";
const DESCRIPTION =
  "Complete guide to Stardew Valley 1.7 update: new crops, profit calculations, machine changes, and how the update affects your farm income strategy.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: "article",
    url,
    title: TITLE,
    description: DESCRIPTION,
    publishedTime,
    modifiedTime,
    authors: ["StardewProfit Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  keywords: [
    "stardew valley 1.7",
    "stardew 1.7 update",
    "stardew 1.7 new crops",
    "stardew 1.7 profit",
    "stardew valley update 1.7",
    "stardew 1.7 changes",
    "stardew valley 1.7 new features",
  ],
};

const FAQ_ITEMS = [
  {
    question: "When is Stardew Valley 1.7 coming out?",
    answer:
      "Stardew Valley 1.7 release date has not been officially announced yet. This page will be updated as soon as ConcernedApe shares official information.",
  },
  {
    question: "What new crops are in Stardew Valley 1.7?",
    answer:
      "Official new crops for 1.7 have not been confirmed yet. This guide will be updated with profit calculations and planting strategies once the update releases.",
  },
  {
    question: "Will Stardew Valley 1.7 change crop profits?",
    answer:
      "Any balance changes in 1.7 will affect crop profit calculations. We will update our calculator and guides immediately after the update to reflect new prices, growth times, and processing values.",
  },
  {
    question: "How will Stardew Valley 1.7 affect my current farm?",
    answer:
      "Major updates typically maintain save compatibility. However, new crops, machines, or balance changes may shift optimal profit strategies. Check back here for updated guides after 1.7 releases.",
  },
  {
    question: "Where can I find Stardew Valley 1.7 profit calculations?",
    answer:
      "Once 1.7 releases, use our crop profit calculator with updated 1.7 data. All guides (greenhouse, keg vs jar, money making) will be updated to reflect 1.7 changes.",
  },
] as const;

export default function Stardew17UpdatePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: "Stardew Valley 1.7 Update", href: url },
        ]}
      />

      <article className="mx-auto max-w-4xl px-4 py-8">
        <header className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-full border border-[#7c4d2e]/35 bg-[#fff2c8] px-3 py-1 text-xs font-semibold text-[#5c3d23]">
              Version 1.7
            </span>
            <span className="inline-flex rounded-full border border-[#7c4d2e]/35 bg-white/55 px-3 py-1 text-xs font-semibold text-[#5c3d23]">
              Coming Soon
            </span>
          </div>
          <h1 className="text-4xl font-bold text-[#4a321e] sm:text-5xl">{TITLE}</h1>
          <p className="mt-4 text-lg leading-relaxed text-[#5f4228]/90">{DESCRIPTION}</p>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="rounded-2xl border-2 border-[#6f8b3c]/60 bg-[#e7f1c8]/80 p-6 shadow-sm">
            <h2 className="mt-0 text-xl font-semibold text-[#3f2d1b]">Quick Answer</h2>
            <p className="mb-0">
              <strong>Stardew Valley 1.7 has not been officially announced yet.</strong> This page is a placeholder
              that will be updated immediately when ConcernedApe releases official information about new crops, profit
              changes, or gameplay updates.
            </p>
          </div>

          <h2>What We Know So Far</h2>
          <p>
            As of April 2026, ConcernedApe has not announced a Stardew Valley 1.7 update. The most recent major update
            was <strong>1.6</strong>, which introduced significant changes including:
          </p>
          <ul>
            <li>New crops and artisan goods</li>
            <li>Dehydrator and Smoker machines</li>
            <li>Quality-based processing changes</li>
            <li>New festivals and events</li>
          </ul>

          <h2>What to Expect from Future Updates</h2>
          <p>Based on past update patterns, a hypothetical 1.7 update could include:</p>

          <h3>Potential New Crops</h3>
          <p>
            Previous updates have added crops like Sweet Gem Berry, Ancient Fruit, and Starfruit. Any new crops in 1.7
            would likely:
          </p>
          <ul>
            <li>Fill seasonal gaps or provide new greenhouse options</li>
            <li>Introduce unique processing chains (like Hops → Pale Ale)</li>
            <li>Balance late-game profit strategies</li>
          </ul>

          <h3>Potential Profit Changes</h3>
          <p>Updates may adjust:</p>
          <ul>
            <li>Base crop prices</li>
            <li>Processing multipliers (kegs, jars, dehydrators)</li>
            <li>Growth times or regrowth mechanics</li>
            <li>Quality chances or profession bonuses</li>
          </ul>

          <h2>How StardewProfit Will Handle 1.7</h2>
          <p>When Stardew Valley 1.7 (or any future update) releases, we will:</p>

          <h3>1. Update the Calculator Immediately</h3>
          <p>
            Our{" "}
            <Link href="/calculator" className="font-semibold text-[#5c8a3e] underline">
              crop profit calculator
            </Link>{" "}
            will be updated within 24 hours of the official release with:
          </p>
          <ul>
            <li>New crop data (prices, growth times, seasons)</li>
            <li>Updated processing values</li>
            <li>New machine options (if added)</li>
          </ul>

          <h3>2. Revise All Guides</h3>
          <p>Key guides will be updated to reflect 1.7 changes:</p>
          <ul>
            <li>
              <Link href="/blog/money-making-guide" className="font-semibold text-[#5c8a3e] underline">
                Money Making Guide
              </Link>{" "}
              – Updated profit strategies
            </li>
            <li>
              <Link href="/blog/keg-vs-jar-profit-guide" className="font-semibold text-[#5c8a3e] underline">
                Keg vs Jar Guide
              </Link>{" "}
              – New processing comparisons
            </li>
            <li>
              <Link href="/guides/greenhouse-profit-guide" className="font-semibold text-[#5c8a3e] underline">
                Greenhouse Profit Guide
              </Link>{" "}
              – Optimal crop updates
            </li>
            <li>
              <Link href="/blog/best-crops-every-season" className="font-semibold text-[#5c8a3e] underline">
                Best Crops Every Season
              </Link>{" "}
              – Seasonal rankings
            </li>
          </ul>

          <h3>3. Create 1.7-Specific Content</h3>
          <p>If 1.7 introduces major changes, we will publish:</p>
          <ul>
            <li>New crop deep-dives (e.g., &quot;Ancient Fruit vs [New Crop]&quot;)</li>
            <li>Processing chain guides for new machines</li>
            <li>Updated Year 1 strategies if early-game balance changes</li>
          </ul>

          <h2>Stay Updated</h2>
          <p>To get notified when Stardew Valley 1.7 releases and our guides are updated:</p>
          <ul>
            <li>
              Bookmark this page – it will be updated immediately when official information is available
            </li>
            <li>
              Check our{" "}
              <Link href="/" className="font-semibold text-[#5c8a3e] underline">
                homepage
              </Link>{" "}
              for the latest guides
            </li>
            <li>
              Follow{" "}
              <a
                href="https://twitter.com/ConcernedApe"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#5c8a3e] underline"
              >
                ConcernedApe on Twitter
              </a>{" "}
              for official announcements
            </li>
          </ul>

          <h2>Current Version: Stardew Valley 1.6</h2>
          <p>
            While waiting for future updates, make sure you&apos;re taking advantage of all the 1.6 features. Our guides are
            fully updated for 1.6:
          </p>
          <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
            <Link
              href="/calculator"
              className="rounded-2xl border-2 border-[#7c4d2e]/60 bg-[#fff8e8]/80 p-4 shadow-sm transition hover:bg-[#fffef4]"
            >
              <h3 className="text-base font-semibold text-[#4a321e]">Crop Profit Calculator</h3>
              <p className="mt-2 text-sm text-[#5f4228]/90">Compare all crops with 1.6 data</p>
            </Link>
            <Link
              href="/blog/money-making-guide"
              className="rounded-2xl border-2 border-[#7c4d2e]/60 bg-[#fff8e8]/80 p-4 shadow-sm transition hover:bg-[#fffef4]"
            >
              <h3 className="text-base font-semibold text-[#4a321e]">Money Making Guide</h3>
              <p className="mt-2 text-sm text-[#5f4228]/90">Full 1.6 profit strategy</p>
            </Link>
          </div>

          <h2>Frequently Asked Questions</h2>
          <div className="not-prose space-y-4">
            {FAQ_ITEMS.map((item) => (
              <div key={item.question} className="rounded-2xl border-2 border-[#7c4d2e]/55 bg-white/55 p-4">
                <h3 className="text-sm font-semibold text-[#4a321e]">{item.question}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/85">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      <FaqJsonLd faqs={FAQ_ITEMS} />
    </>
  );
}

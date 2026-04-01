import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { QuotaCalculatorClient } from "@/components/quota-calculator/QuotaCalculatorClient";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/tools/quota-calculator";

const PAGE_TITLE = "Quota Calculator (Day 1 vs Day 2) | StardewProfit";
const PAGE_DESCRIPTION =
  "Enter current quota, current funds, and days left to get a minimum target amount, exact-sell strategy, gear-budget strategy, and Day 1 vs Day 2 revenue delta.";

const CARD_CLASS =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "inline-flex min-h-11 w-full items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-white/60 px-4 py-2.5 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-white/80 sm:w-auto";

const FAQS = [
  {
    question: "How is minimum target amount calculated?",
    answer:
      "Minimum target amount is max(quota - current funds, 0). It is the smallest additional credited value needed to clear quota.",
  },
  {
    question: "Why only sell to exact target or target plus gear budget?",
    answer:
      "This keeps high-value inventory for higher-payout days and avoids overselling. The calculator defaults to exact target first, then adds a capped gear budget only when needed.",
  },
  {
    question: "What does Day 1 vs Day 2 delta show?",
    answer:
      "It compares how much raw sale value is needed to reach the same credited target under Day 1 and Day 2 payout assumptions. The gap is the cost of selling too early.",
  },
] as const;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    type: "article",
    url: `${SITE_URL}${PAGE_PATH}`,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function QuotaCalculatorPage() {
  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Tools", href: "/tools" },
            { name: "Quota Calculator", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.stardewprofit.com" },
                { "@type": "ListItem", position: 2, name: "Tools", item: "https://www.stardewprofit.com/tools" },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Quota Calculator",
                  item: "https://www.stardewprofit.com/tools/quota-calculator",
                },
              ],
            }),
          }}
        />

        <header className={CARD_CLASS}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Tools</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">Quota Calculator</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Use this calculator to avoid overselling. The default decision framework is simple: sell only for
            <span className="font-semibold text-[#4a321e]"> exact quota clearance </span>
            or
            <span className="font-semibold text-[#4a321e]"> quota + essential gear budget </span>
            and preserve the rest for better payout windows.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Input current quota, current funds, and days left to get your minimum target amount plus a Day 1 vs Day 2
            revenue delta comparison.
          </p>
        </header>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Calculate your sell target</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            The tool outputs a hard minimum and a buffered target. Use the lower value when your run is stable; use
            the buffered value only when purchases are mandatory.
          </p>
          <QuotaCalculatorClient />
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Lethal Company Selling Strategy Guide</h2>
          <div className="mt-4 space-y-6 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
            <div>
              <h3 className="font-bold text-[#4a321e]">1. Day 1 vs Day 2 selling rates</h3>
              <p>Searching for a <strong>Lethal Company quota calculator</strong>? Understanding the risk vs. reward of selling on different days is the key to high-quota runs. Day 1 and Day 2 selling rates are often reduced to 0% or 50%, while the Deadline (Day 3) pays 100%.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#4a321e]">2. Quadratic Quota Formula explained</h3>
              <p>The quota growth in Lethal Company isn&apos;t linear; it&apos;s <strong>quadratic</strong>. Formula: <code>Quota = 100 + 100 * (1 + (DaysPassed / 12)^2)</code>. This means the difficulty spikes sharply after the first few cycles.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#4a321e]">3. Essential Terminal Commands</h3>
              <ul className="list-disc pl-5">
                <li><code>SCAN</code>: Ping all scrap values.</li>
                <li><code>STORE</code>: Buy essential gear.</li>
                <li><code>VIEW MONITOR</code>: Track positions and danger.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Core sell rules</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            <li>First target is always the minimum quota gap.</li>
            <li>Second target is minimum gap plus capped essential gear budget.</li>
            <li>Prefer later higher-payout day sales unless deadline pressure leaves no buffer.</li>
            <li>Avoid panic overselling that destroys next-cycle inventory efficiency.</li>
          </ul>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-lg font-semibold text-[#4a321e] sm:text-xl">Related Pages</h2>
          <div className="mt-4 grid gap-3 sm:flex sm:flex-wrap sm:gap-2">
            <Link href="/calculator" className={LINK_CLASS}>
              Profit Calculator
            </Link>
            <Link href="/tools/artisan-profit" className={LINK_CLASS}>
              Artisan Profit Guide
            </Link>
            <Link href="/tools/keg-vs-preserves-jar" className={LINK_CLASS}>
              Keg vs Preserves Jar
            </Link>
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_ORIGIN } from "@/lib/site";

type PresetCard = {
  title: string;
  season: "Spring" | "Summer" | "Fall" | "Winter" | "Greenhouse";
  summary: string;
  href: string;
  relatedGuide: {
    label: string;
    href: string;
  };
};

const PRESET_CARD_CLASS =
  "rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]";

const PRIMARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#5c8a3e] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4e7a32]";

const SECONDARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-white/60 px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-white/80";

const PRESETS: PresetCard[] = [
  {
    title: "Spring Year 1 Starter",
    season: "Spring",
    summary: "Simple baseline for early cash flow and realistic early tools.",
    href: "/calculator?season=spring&daysLeft=28",
    relatedGuide: {
      label: "Best Crops Every Season",
      href: "/blog/best-crops-every-season",
    },
  },
  {
    title: "Spring (10 Days Left)",
    season: "Spring",
    summary: "Late-spring rescue plan when you need fast turnaround crops.",
    href: "/calculator?preset=best-spring-10-days-left",
    relatedGuide: {
      label: "Best Spring Crops with 10 Days Left",
      href: "/blog/best-spring-crops-10-days-left",
    },
  },
  {
    title: "Strawberry Push",
    season: "Spring",
    summary: "Festival-timed strawberry scenario for high upside starts.",
    href: "/calculator?season=spring&daysLeft=15",
    relatedGuide: {
      label: "Strawberry Day 13 Timing",
      href: "/blog/strawberry-spring-day-13-too-late",
    },
  },
  {
    title: "Summer Blueberry Core",
    season: "Summer",
    summary: "Reliable repeat-harvest setup with stable weekly income.",
    href: "/calculator?season=summer&daysLeft=28",
    relatedGuide: {
      label: "Best Summer Crops",
      href: "/blog/best-summer-crops-quick-answer",
    },
  },
  {
    title: "Starfruit Wine Focus (28 Days)",
    season: "Summer",
    summary: "High-value summer path for farms that can feed kegs.",
    href: "/calculator?preset=starfruit-wine-summer-28d",
    relatedGuide: {
      label: "Keg vs Jar Profit Guide",
      href: "/blog/keg-vs-jar-profit-guide",
    },
  },
  {
    title: "Summer Panic (10 Days Left)",
    season: "Summer",
    summary: "Quick decision mode when season time is almost gone.",
    href: "/calculator?preset=best-summer-10-days-left",
    relatedGuide: {
      label: "Summer Day 20 Planting Guide",
      href: "/blog/stardew-valley-summer-day-20-is-it-too-late",
    },
  },
  {
    title: "Fall Cranberry Stability",
    season: "Fall",
    summary: "Consistent regrow income with lower execution burden.",
    href: "/calculator?season=fall&daysLeft=28",
    relatedGuide: {
      label: "Best Fall Crops",
      href: "/blog/best-fall-crops-quick-answer",
    },
  },
  {
    title: "Pumpkin Processing Focus",
    season: "Fall",
    summary: "High-value fall setup when you plan to process output.",
    href: "/calculator?preset=keg-vs-jar-pumpkin",
    relatedGuide: {
      label: "Artisan Profit Guide",
      href: "/blog/stardew-valley-artisan-profit-guide",
    },
  },
  {
    title: "Fall Last-10-Days Rescue",
    season: "Fall",
    summary: "Salvage late-season gold/day with quick-cycle choices.",
    href: "/calculator?preset=best-fall-10-days-left",
    relatedGuide: {
      label: "Best Crops with 10 Days Left",
      href: "/blog/best-crops-10-days-left-quick-answer",
    },
  },
  {
    title: "Winter Seeds Baseline",
    season: "Winter",
    summary: "Use winter windows for low-risk incremental income.",
    href: "/calculator?season=winter&daysLeft=28",
    relatedGuide: {
      label: "Winter Seeds Profit Guide",
      href: "/blog/winter-seeds-profit-guide",
    },
  },
  {
    title: "Winter Transition Prep",
    season: "Winter",
    summary: "Bridge plan while preparing greenhouse and processing lanes.",
    href: "/calculator?season=winter&daysLeft=14",
    relatedGuide: {
      label: "Money Making Guide",
      href: "/blog/money-making-guide",
    },
  },
  {
    title: "Greenhouse Ancient vs Starfruit",
    season: "Greenhouse",
    summary: "Head-to-head greenhouse benchmark with artisan assumptions.",
    href: "/calculator?preset=ancient-vs-starfruit-greenhouse",
    relatedGuide: {
      label: "Greenhouse Layout Guide",
      href: "/blog/greenhouse-layout-guide",
    },
  },
  {
    title: "Greenhouse Hops vs Starfruit",
    season: "Greenhouse",
    summary: "Throughput stress test for machine-heavy greenhouse farms.",
    href: "/calculator?preset=hops-vs-starfruit-greenhouse-28d",
    relatedGuide: {
      label: "Hops vs Starfruit",
      href: "/blog/hops-vs-starfruit-quick-answer",
    },
  },
];

export const metadata: Metadata = {
  title: "Stardew Profit Presets (Spring to Greenhouse)",
  description:
    "10+ calculator-ready Stardew presets across Spring, Summer, Fall, Winter, and Greenhouse. Open any scenario and fine-tune instantly.",
  alternates: {
    canonical: "/presets",
  },
  openGraph: {
    type: "website",
    url: "https://www.stardewprofit.com/presets",
    title: "Stardew Profit Presets (Spring to Greenhouse)",
    description:
      "10+ calculator-ready Stardew presets across Spring, Summer, Fall, Winter, and Greenhouse.",
  },
};

export default function PresetsPage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: PRESETS.map((preset, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: preset.title,
      url: `${SITE_ORIGIN}${preset.href}`,
    })),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
        />

        <header className="rounded-[30px] border-4 border-[#8a5b3a]/75 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Presets Hub</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Calculator Presets (10+)
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Start with a proven scenario, then tune days-left and profession values for your current farm state.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/calculator" className={PRIMARY_CTA_CLASS}>
              Open in Calculator
            </Link>
            <Link href="/blog" className={SECONDARY_CTA_CLASS}>
              Browse Guides
            </Link>
          </div>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRESETS.map((preset) => (
            <article key={preset.title} className={PRESET_CARD_CLASS}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6f4b2a]/80">{preset.season}</p>
              <h2 className="mt-1 text-lg font-semibold text-[#4a321e]">{preset.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">{preset.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href={preset.href} className={PRIMARY_CTA_CLASS}>
                  Open in Calculator
                </Link>
                <Link href={preset.relatedGuide.href} className={SECONDARY_CTA_CLASS}>
                  {preset.relatedGuide.label}
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Quick internal links</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/calculator" className={SECONDARY_CTA_CLASS}>
              Crop Profit Calculator
            </Link>
            <Link href="/blog/stardew-valley-profit-guide-2026" className={SECONDARY_CTA_CLASS}>
              Profit Guide 2026
            </Link>
            <Link href="/blog/keg-vs-jar-profit-guide" className={SECONDARY_CTA_CLASS}>
              Keg vs Jar Guide
            </Link>
            <Link href="/blog/best-crops-every-season" className={SECONDARY_CTA_CLASS}>
              Best Crops Every Season
            </Link>
            <Link href="/blog/greenhouse-layout-guide" className={SECONDARY_CTA_CLASS}>
              Greenhouse Layout Guide
            </Link>
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}

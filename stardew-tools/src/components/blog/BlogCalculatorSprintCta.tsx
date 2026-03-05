import Link from "next/link";

import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";

type SprintLink = {
  href: string;
  label: string;
};

const DEFAULT_RELATED_LINKS: SprintLink[] = [
  { href: "/presets", label: "Preset Scenarios" },
  { href: "/blog/best-crops-every-season", label: "Best Crops Every Season" },
  { href: "/blog/keg-vs-jar-profit-guide", label: "Keg vs Jar Profit Guide" },
  { href: "/blog/greenhouse-layout-guide", label: "Greenhouse Layout Guide" },
  { href: "/blog", label: "All Guides" },
];

const CARD_CLASS =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";

const PRIMARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#5c8a3e] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#4e7a32]";

const SECONDARY_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/65 bg-white/55 px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-white/70";

const RELATED_LINK_CLASS =
  "inline-flex items-center rounded-xl border border-[#8a5b3a]/40 bg-white/55 px-3 py-1.5 text-xs font-semibold text-[#5c3d23] shadow-sm transition hover:border-[#7c4d2e]/65 hover:bg-[#fce8b1]";

export function BlogCalculatorSprintCta({
  fromPath,
  primaryHref = "/calculator",
  primaryLabel = "Open in Calculator",
  relatedLinks = DEFAULT_RELATED_LINKS,
}: {
  fromPath: string;
  primaryHref?: string;
  primaryLabel?: string;
  relatedLinks?: SprintLink[];
}) {
  return (
    <section className={CARD_CLASS}>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f4b2a]/75">Action Block</p>
      <h2 className="mt-1 text-xl font-semibold text-[#4a321e] sm:text-2xl">
        Run this strategy with your own numbers
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-[#5f4228]/90">
        Use the calculator for a live scenario, then compare against 3-5 related internal guides before you lock your
        planting or processing plan.
      </p>
      <div className="mt-4 flex flex-wrap gap-2.5">
        <TrackedBlogCtaLink
          href={primaryHref}
          fromPath={fromPath}
          ctaName="sprint_open_calculator"
          className={PRIMARY_CTA_CLASS}
        >
          {primaryLabel}
        </TrackedBlogCtaLink>
        <Link href="/presets" className={SECONDARY_CTA_CLASS}>
          Browse Presets
        </Link>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {relatedLinks.slice(0, 5).map((link) => (
          <Link key={link.href} href={link.href} className={RELATED_LINK_CLASS}>
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

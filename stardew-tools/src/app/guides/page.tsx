import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import { EditorialReview } from "@/components/EditorialReview";
import { SiteFooter } from "@/components/SiteFooter";
import { EDITORIAL_AUTHOR_NAME } from "@/lib/editorial";
import { SITE_ORIGIN } from "@/lib/site";

const PAGE_PATH = "/guides";
const CARD_CLASS =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";
const GUIDE_GROUPS = [
  {
    title: "Crop and season planning",
    description: "Choose crops by season, planting date, and days remaining rather than sticker price alone.",
    links: [
      ["Crop profit guide", "/crops"],
      ["Spring crops", "/guides/spring-crops"],
      ["Summer crops", "/guides/summer-crops"],
      ["Fall crops", "/guides/fall-crops"],
      ["Winter money guide", "/guides/winter-money-guide"],
    ],
  },
  {
    title: "Artisan and greenhouse systems",
    description: "Match harvest volume to machine capacity and decide when processing beats direct sales.",
    links: [
      ["Greenhouse profit guide", "/guides/greenhouse-profit-guide"],
      ["Ancient Fruit vs Starfruit", "/guides/ancient-fruit-vs-starfruit"],
      ["Best Keg items", "/guides/best-keg-items"],
      ["Best Preserves Jar items", "/guides/best-preserves-jar-items"],
      ["Fertilizer profit guide", "/guides/fertilizer-profit-guide"],
    ],
  },
  {
    title: "Progression and completion",
    description: "Plan the upgrades and unlocks that support a profitable save beyond the first harvest.",
    links: [
      ["Beginner farming tips", "/guides/stardew-valley-farming-tips-beginners"],
      ["Community Center bundles", "/guides/community-center-bundles"],
      ["Perfection checklist", "/guides/perfection-checklist-1-6"],
      ["Golden Walnuts", "/guides/golden-walnuts-guide"],
      ["Qi Gems", "/guides/how-to-get-qi-gems-fast"],
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "Stardew Valley Planning Guides | StardewProfit",
  description:
    "Browse Stardew Valley crop, artisan, greenhouse, progression, and completion guides organized by the decision you need to make.",
  authors: [{ name: EDITORIAL_AUTHOR_NAME, url: "/about#editorial-team" }],
  alternates: { canonical: `${SITE_ORIGIN}${PAGE_PATH}` },
};

export default function GuidesHubPage() {
  return (
    <div className="min-h-screen bg-[#9ed7a4]">
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Guides", href: PAGE_PATH }]} />
        <header className={CARD_CLASS}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Guide Library</p>
          <h1 className="mt-1 text-3xl font-semibold text-[#4a321e] sm:text-5xl">Stardew Valley planning guides</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#5f4228]/90 sm:text-base">
            Start with the decision in front of you: what to plant, what to process, or which upgrade unlocks the next
            income step. Each group below leads to a focused guide and then back to a working calculator.
          </p>
          <EditorialReview gameVersion="1.6" />
        </header>

        {GUIDE_GROUPS.map((group) => (
          <section key={group.title} className={`mt-8 ${CARD_CLASS}`}>
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">{group.title}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[#5f4228]/90">{group.description}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-lg border-2 border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-3 text-sm font-semibold text-[#5c3d23] transition hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e]">Need a number instead of a general rule?</h2>
          <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
            Use your real planting date, seed budget, crop quality, and profession in the calculator before committing
            an entire field to a guide recommendation.
          </p>
          <Link className="mt-4 inline-flex rounded-lg bg-[#5c8a3e] px-4 py-2 text-sm font-semibold text-white" href="/calculator">
            Open Crop Calculator
          </Link>
        </section>
        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}

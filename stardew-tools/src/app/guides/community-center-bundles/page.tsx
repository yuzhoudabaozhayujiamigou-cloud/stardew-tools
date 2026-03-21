import type { Metadata } from "next";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";

const pagePath = "/guides/community-center-bundles";

export const metadata: Metadata = {
  title: "Stardew Valley Community Center Bundles – Complete Guide",
  description:
    "Complete Stardew Valley Community Center bundles checklist. All 6 rooms, every item needed, best order to complete for maximum farm profit.",
  alternates: {
    canonical: pagePath,
  },
};

const summaryRows = [
  {
    room: "Crafts Room",
    keyItems: "Foraging items x4 seasons + Wood/Stone/Hardwood",
    keyReward: "Bus Repair",
  },
  {
    room: "Pantry",
    keyItems: "Spring/Summer/Fall/Quality Crops + Animal + Artisan items",
    keyReward: "Greenhouse",
  },
  {
    room: "Fish Tank",
    keyItems: "River/Lake/Ocean/Night fish + Crab Pot + Specialty Fish",
    keyReward: "Boulder removal",
  },
  {
    room: "Boiler Room",
    keyItems: "Copper/Iron/Gold bars + Gems + Monster loot",
    keyReward: "Minecarts",
  },
  {
    room: "Bulletin Board",
    keyItems: "Cooked food + Dye items + Field research + Animal food",
    keyReward: "Friendship",
  },
  {
    room: "Vault",
    keyItems: "2500g + 5000g + 10000g + 25000g",
    keyReward: "Bridge repair",
  },
] as const;

const faqs = [
  {
    question: "What is the best Community Center reward?",
    answer:
      "The Greenhouse is the best Community Center reward because it unlocks year-round crop production and gives the biggest long-term profit jump.",
  },
  {
    question: "Can I complete Community Center in Year 1?",
    answer:
      "Yes, you can complete the Community Center in Year 1 with planning, seasonal checklists, and early focus on Pantry crops and key fish windows.",
  },
  {
    question: "What happens if I choose Joja instead?",
    answer:
      "Choosing Joja puts you on the Joja Mart route, no Greenhouse bundle unlock, and progression shifts to buying upgrades with gold.",
  },
  {
    question: "Which bundle is hardest?",
    answer:
      "The Specialty Fish bundle is usually the hardest because timing and weather windows are strict, and many players leave the Legend path for late game.",
  },
] as const;

const cardClass =
  "rounded-2xl border border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_28px_rgba(56,41,23,0.2)]";

export default function CommunityCenterBundlesPage() {
  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Community Center Bundles", href: pagePath },
          ]}
        />

        <FaqJsonLd faqs={faqs.map((faq) => ({ ...faq }))} />

        <header className={`${cardClass} mt-6`}>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Stardew Valley Community Center Bundles Guide
          </h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            The Community Center is one of Stardew Valley&apos;s core progression systems, where you restore six rooms by completing item bundles. Finishing bundles unlocks major farm power spikes, especially the Greenhouse for year-round crop profit. If you skip this path, the Joja route becomes your alternative progression track.
          </p>
        </header>

        <section className={`${cardClass} mt-8`}>
          <h2 className="text-2xl font-semibold">Bundles Summary Table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#7c4d2e]/70 bg-[#f8ecc8]">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#eedaa0] text-[#4a321e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Room</th>
                  <th className="px-4 py-3 font-semibold">Key Items</th>
                  <th className="px-4 py-3 font-semibold">Key Reward</th>
                </tr>
              </thead>
              <tbody>
                {summaryRows.map((row) => (
                  <tr key={row.room} className="border-t border-[#7c4d2e]/30 align-top">
                    <td className="px-4 py-3 font-semibold">{row.room}</td>
                    <td className="px-4 py-3">{row.keyItems}</td>
                    <td className="px-4 py-3">{row.keyReward}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={`${cardClass} mt-8`}>
          <h2 className="text-2xl font-semibold">Most Important Room: Pantry (Greenhouse First)</h2>
          <p className="mt-3 leading-7 text-[#5f4228]/90">
            If you want maximum farm profit, prioritize Pantry bundles before anything else. The Greenhouse unlock is the single biggest economy boost because it removes seasonal downtime and lets you scale high-value crops every day of the year.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Year-round production means no winter farming dead zone.</li>
            <li>High-value repeat crops become consistent cash flow.</li>
            <li>Artisan processing chains stay busy with stable harvests.</li>
            <li>Early Greenhouse timing compounds total Year 2 income.</li>
          </ul>
        </section>

        <section className={`${cardClass} mt-8`}>
          <h2 className="text-2xl font-semibold">Year 1 Completion Tips</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Track each season&apos;s crops and foraging items from Day 1 so nothing gets missed.</li>
            <li>Buy and plant at least one of every needed crop early, then save extras in a chest.</li>
            <li>Check weather and fish windows weekly to avoid missing Specialty Fish opportunities.</li>
            <li>Upgrade tools and unlock mines quickly so Boiler Room materials are easy to stock.</li>
            <li>Treat Pantry as your primary milestone and route resources there first.</li>
          </ul>
        </section>

        <section className={`${cardClass} mt-8`}>
          <h2 className="text-2xl font-semibold">Plan With The Calculator</h2>
          <p className="mt-3 leading-7 text-[#5f4228]/90">
            Build your next season plan and compare crop profit outcomes before you commit seeds and gold.
          </p>
          <TrackedBlogCtaLink
            href="/calculator"
            fromPath={pagePath}
            ctaName="community_center_bundles_open_calculator"
            className="mt-4 inline-flex items-center rounded-xl border border-[#7c4d2e]/80 bg-[#fff2c8] px-4 py-2 font-semibold text-[#4a321e] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#fce8b1]"
          >
            Open Profit Calculator
          </TrackedBlogCtaLink>
        </section>

        <section id="faq" className={`${cardClass} mt-8`}>
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((item) => (
              <details key={item.question} className="rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8] p-4">
                <summary className="cursor-pointer font-semibold text-[#4a321e]">{item.question}</summary>
                <p className="mt-2 leading-7 text-[#5f4228]/90">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </article>
    </main>
  );
}

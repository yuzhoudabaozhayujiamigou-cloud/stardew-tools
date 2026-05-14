import type { Metadata } from "next";

import Breadcrumb from "@/components/Breadcrumb";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";

export const metadata: Metadata = {
  title: "Stardew Valley New Player FAQ (Quick Answers)",
  description:
    "A beginner-focused Stardew Valley FAQ hub: saves, backups, co-op, platform differences, and practical money progression—organized so each question can become a full guide later.",
  openGraph: {
    type: "article",
    title: "Stardew Valley New Player FAQ (Quick Answers)",
    description:
      "A practical Stardew Valley FAQ hub for new players: starting steps, backups, multiplayer, platforms, and early money decisions.",
    publishedTime: "2026-03-17T00:00:00.000Z",
    modifiedTime: "2026-03-17T00:00:00.000Z",
  },
};

type Q = { q: string; intent: string };

const SECTIONS: Array<{ title: string; items: Q[] }> = [
  {
    title: "Getting started",
    items: [
      {
        q: "What should I do on Day 1?",
        intent: "Give 5 priority actions (chest, seeds, stamina plan, tool upgrade pacing, and a simple exploration routine).",
      },
      {
        q: "Which farm layout is best for beginners?",
        intent: "Recommend by goal (relaxed / profit / fishing / mining) instead of claiming a single best choice.",
      },
      {
        q: "Fast early money: what actually works?",
        intent: "Provide a stable early cash-flow loop (not luck-based), with a link to the calculator to test crops.",
      },
    ],
  },
  {
    title: "Saves & backup",
    items: [
      {
        q: "How do I back up my save on PC?",
        intent: "Give a short backup checklist you can do before any major update (manual copy + keep a dated folder).",
      },
      {
        q: "Can I transfer saves between devices (PC ↔ mobile)?",
        intent: "Answer with a clear yes/no/depends, then list common limitations and what info is needed to confirm.",
      },
      {
        q: "What should I do before updating to a new major version?",
        intent: "Back up, validate co-op version matching, and avoid updating mid-week if you’re doing time-sensitive plans.",
      },
    ],
  },
  {
    title: "Multiplayer",
    items: [
      {
        q: "Co-op vs split-screen: what’s the difference?",
        intent: "Explain mode differences and note that support depends on platform/version.",
      },
      {
        q: "Why can’t my friend join my farm?",
        intent: "Provide a short troubleshooting checklist (version match, host settings, network/NAT, cabins, invitation flow).",
      },
    ],
  },
  {
    title: "Platforms & versions",
    items: [
      {
        q: "Is mobile different from PC/console?",
        intent: "List differences that matter (update cadence, controls, multiplayer limitations, and mod support).",
      },
      {
        q: "Should I start now or wait for 1.7?",
        intent: "Answer: start now, but use backups; link to the 1.7 tracker for status updates.",
      },
    ],
  },
  {
    title: "Money & progression",
    items: [
      {
        q: "Kegs vs jars: what should I craft first?",
        intent: "Explain in terms of resources and pacing (turnaround time vs throughput), not just a one-word verdict.",
      },
      {
        q: "When should I unlock the greenhouse?",
        intent: "Give milestone-based guidance and how it changes crop priorities.",
      },
      {
        q: "Biggest beginner mistakes that lose money?",
        intent: "List 7 common traps (stamina waste, time mismanagement, planting too late, skipping processing, no backups, etc.).",
      },
      {
        q: "What’s the simplest way to compare crops fast?",
        intent: "Use the calculator presets and days-left window to avoid planting mistakes.",
      },
    ],
  },
];

export default function StardewValleyNewPlayerFaqHubPage() {
  const fromPath = "/blog/stardew-valley-new-player-faq";

  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <PwaRegisterScript />

        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "New Player FAQ" }]} />

        <article className="space-y-8">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">FAQ Hub</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">Stardew Valley New Player FAQ</h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              This is a directory page. Each question includes a one-line “answer intent” so it can be expanded into a full guide later.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/blog/stardew-valley-1-7-update-tracker"
                fromPath={fromPath}
                ctaName="new_player_faq_open_17_tracker"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🧭</span>
                1.7 update tracker
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/calculator"
                fromPath={fromPath}
                ctaName="new_player_faq_open_calculator"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🧮</span>
                Profit calculator
              </TrackedBlogCtaLink>
            </div>

            <p className="mt-4 text-xs text-[#6f4b2a]/80">Last updated: 2026-03-17</p>
          </header>

          {SECTIONS.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-2xl font-semibold text-[#4a321e]">{section.title}</h2>
              <ul className="space-y-3">
                {section.items.map((it) => (
                  <li key={it.q} className="rounded-2xl border border-[#7c4d2e]/20 bg-white/75 p-4 text-[#5f4228]">
                    <p className="font-semibold text-[#4a321e]">{it.q}</p>
                    <p className="mt-1 text-sm opacity-90">
                      <span className="font-semibold">Answer intent:</span> {it.intent}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="rounded-2xl border border-[#7c4d2e]/20 bg-white/70 p-4 text-sm text-[#5f4228]">
            <p className="font-semibold text-[#4a321e]">Next step (optional)</p>
            <p className="mt-1">
              Each item above can become a standalone “quick answer” page. This hub exists to keep the site structure consistent and to make future content production easy.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}

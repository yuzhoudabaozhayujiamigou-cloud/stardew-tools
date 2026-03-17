import type { Metadata } from "next";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { TrackedBlogCtaLink } from "@/components/blog/TrackedBlogCtaLink";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";

const PUBLISHED_TIME_ISO = "2026-03-17T00:00:00.000Z";
const MODIFIED_TIME_ISO = "2026-03-17T00:00:00.000Z";

const FAQ_ITEMS = [
  {
    question: "Is Stardew Valley 1.7 confirmed?",
    answer:
      "As of today, 1.7 is widely discussed as the next major update, but details should be treated as unconfirmed unless they come from official channels. This tracker page is built to separate confirmed info from unknowns and community reports.",
  },
  {
    question: "Is there a release date for Stardew Valley 1.7?",
    answer:
      "No official release date has been announced. Until a date is confirmed, the best move is to keep your save backed up and follow official announcements rather than rumors.",
  },
  {
    question: "Will 1.7 come to Switch / PlayStation / Xbox / Mobile on the same day as PC?",
    answer:
      "Platform release timing is currently unknown. Historically, major Stardew updates often arrive on PC first, then consoles, and mobile can be later—so plan for a staggered rollout unless an official statement says otherwise.",
  },
  {
    question: "Will my 1.6 save work in 1.7?",
    answer:
      "Save compatibility is not guaranteed until release notes confirm it, but most Stardew updates aim to keep saves working. The practical advice is: back up before updating and avoid updating mid-critical in-game week if you can.",
  },
  {
    question: "Do mods usually break after major updates?",
    answer:
      "Mods often need updates after major Stardew patches, especially framework mods. If you rely on mods, first test 1.7 vanilla on a copy of your save, then re-enable mods gradually once the mod ecosystem catches up.",
  },
  {
    question: "What should I do before updating when 1.7 launches?",
    answer:
      "Do a manual save backup and take note of your current mod list. If you play co-op, confirm your whole group is on the same version before loading the shared farm to reduce version mismatch and desync risks.",
  },
  {
    question: "Should new players start now or wait for 1.7?",
    answer:
      "Start now—Stardew is long-term and you’ll learn fundamentals that still apply after updates. The only real caution is to keep backups so you can update safely when 1.7 arrives.",
  },
  {
    question: "Where will this page be updated first?",
    answer:
      "We’ll update the changelog section on this page whenever confirmed information appears. If something is only community-reported, we will label it clearly as unverified until an official source is available.",
  },
] as const;

export const metadata: Metadata = {
  title: "Stardew Valley 1.7 Update Tracker (What We Know So Far)",
  description:
    "A continuously updated Stardew Valley 1.7 tracker: confirmed info vs unknowns, platform differences, a 1.6 refresher by system, and an FAQ—so you can prepare without relying on rumors.",
  openGraph: {
    type: "article",
    title: "Stardew Valley 1.7 Update Tracker (What We Know So Far)",
    description:
      "Confirmed info vs unknowns, platform differences, a 1.6 refresher, and FAQs—updated as new official details appear.",
    publishedTime: PUBLISHED_TIME_ISO,
    modifiedTime: MODIFIED_TIME_ISO,
  },
};

export default function StardewValley17UpdateTrackerPage() {
  const fromPath = "/blog/stardew-valley-1-7-update-tracker";

  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <PwaRegisterScript />

        <FaqJsonLd faqs={FAQ_ITEMS.map((f) => ({ question: f.question, answer: f.answer }))} />

        <Breadcrumb
          items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "Stardew 1.7 Update Tracker" }]}
        />

        <article className="space-y-8">
          <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Update Tracker</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              Stardew Valley 1.7 Update Tracker
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              This page is intentionally strict: we separate <strong>confirmed</strong> info from <strong>unknown</strong>
              items and <strong>unverified</strong> community reports. The goal is to help you prepare (especially saves and
              mods) without guessing.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <TrackedBlogCtaLink
                href="/calculator"
                fromPath={fromPath}
                ctaName="stardew_17_tracker_open_calculator"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">🧮</span>
                Open Profit Calculator
              </TrackedBlogCtaLink>

              <TrackedBlogCtaLink
                href="/blog"
                fromPath={fromPath}
                ctaName="stardew_17_tracker_version_history_coming_soon"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
              >
                <span aria-hidden className="inline-flex items-center leading-none opacity-85">📜</span>
                Version history (coming soon)
              </TrackedBlogCtaLink>
            </div>

            <p className="mt-4 text-xs text-[#6f4b2a]/80">Last updated: 2026-03-17</p>
          </header>

          <section className="space-y-3" id="confirmed">
            <h2 className="text-2xl font-semibold text-[#4a321e]">What we know (confirmed)</h2>
            <ul className="list-disc space-y-2 pl-6 text-[#5f4228]">
              <li>
                Development status: <strong>in progress</strong>. Specific features are not listed here unless confirmed by
                official sources.
              </li>
              <li>
                Release date: <strong>not officially announced</strong>.
              </li>
            </ul>
          </section>

          <section className="space-y-3" id="unknown">
            <h2 className="text-2xl font-semibold text-[#4a321e]">What we don’t know yet (and how we’ll update this page)</h2>
            <p className="text-[#5f4228]">
              Unknowns are still useful: they tell you what <em>not</em> to plan around. When official info appears, we’ll
              move items from “unknown” into “confirmed” with a source note.
            </p>
            <ul className="list-disc space-y-2 pl-6 text-[#5f4228]">
              <li>Release date / release window</li>
              <li>Whether PC / console / mobile ship simultaneously</li>
              <li>Save compatibility guarantees</li>
              <li>Multiplayer-related changes</li>
              <li>New content scope (areas, items, systems)</li>
              <li>Mod breakage expectations and timeline for mod updates</li>
              <li>Balance / economy changes</li>
              <li>Patch cadence and communication channels</li>
            </ul>
          </section>

          <section className="space-y-3" id="one-six">
            <h2 className="text-2xl font-semibold text-[#4a321e]">Quick refresher: what 1.6 changed (by system)</h2>
            <p className="text-[#5f4228]">
              This is a structural refresher, not a full changelog. It’s here to help you reason about what future updates
              usually touch.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {["Farming & crops", "Skills & progression", "Combat & exploration", "Quality-of-life & UI", "Economy & money-making"].map(
                (it) => (
                  <li key={it} className="rounded-2xl border border-[#7c4d2e]/20 bg-white/70 p-4 text-[#5f4228]">
                    <span className="font-semibold text-[#4a321e]">{it}</span>
                    <p className="mt-1 text-sm opacity-90">We summarize changes by buckets so you can compare your playstyle across versions.</p>
                  </li>
                ),
              )}
            </ul>
          </section>

          <section className="space-y-3" id="platforms">
            <h2 className="text-2xl font-semibold text-[#4a321e]">Platform parity & version differences (PC / Console / Mobile)</h2>
            <ul className="list-disc space-y-2 pl-6 text-[#5f4228]">
              <li>Update timing differences (some platforms may receive patches later)</li>
              <li>Controls / UI differences</li>
              <li>Multiplayer limitations (especially on mobile)</li>
              <li>Mod support differences (PC vs console/mobile)</li>
            </ul>
          </section>

          <section className="space-y-4" id="faq">
            <h2 className="text-2xl font-semibold text-[#4a321e]">FAQ (Stardew 1.7)</h2>
            <div className="grid gap-4">
              {FAQ_ITEMS.map((f) => (
                <details
                  key={f.question}
                  className="rounded-2xl border border-[#7c4d2e]/20 bg-white/75 p-4 text-[#5f4228]"
                >
                  <summary className="cursor-pointer font-semibold text-[#4a321e]">{f.question}</summary>
                  <p className="mt-2 text-sm leading-6">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="space-y-3" id="changelog">
            <h2 className="text-2xl font-semibold text-[#4a321e]">Changelog (page updates)</h2>
            <ul className="list-disc space-y-2 pl-6 text-[#5f4228]">
              <li>2026-03-17 — Page created: skeleton + FAQ + internal links.</li>
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
}

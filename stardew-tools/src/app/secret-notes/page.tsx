import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SecretNotesClient } from "@/components/secret-notes/SecretNotesClient";
import { SiteFooter } from "@/components/SiteFooter";
import { secretNotes } from "@/data/secretNotes";

export const metadata: Metadata = {
  title: "Stardew Valley Secret Notes Finder | StardewProfit",
  description:
    "Search and decode Stardew Valley Secret Notes with location hints, rewards, and completion tracking. Find all 25 secret notes and unlock hidden rewards.",
  alternates: {
    canonical: "/secret-notes",
  },
  openGraph: {
    url: "/secret-notes",
    title: "Stardew Valley Secret Notes Finder",
    description:
      "Search and decode all 25 secret notes with location hints and rewards.",
    type: "website",
    images: [
      {
        url: "/api/og?title=Secret+Notes+Finder&subtitle=Find+All+25+Secret+Notes&type=guide",
        width: 1200,
        height: 630,
        alt: "Stardew Valley Secret Notes Finder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stardew Valley Secret Notes Finder",
    description:
      "Search and decode all 25 secret notes with location hints and rewards.",
    images: ["/api/og?title=Secret+Notes+Finder&subtitle=Find+All+25+Secret+Notes&type=guide"],
  },
};

const secretNotesSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Stardew Valley Secret Notes Finder",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Search and decode Stardew Valley Secret Notes with location hints, rewards, and completion tracking. Find all 25 secret notes and unlock hidden rewards.",
  "url": "https://www.stardewprofit.com/secret-notes",
  "screenshot": "https://www.stardewprofit.com/api/og?title=Secret+Notes+Finder&type=guide",
  "featureList": [
    "Search all 25 secret notes",
    "Location hints and guides",
    "Reward information",
    "Completion tracking",
    "Mobile-friendly interface"
  ],
  "author": {
    "@type": "Organization",
    "name": "StardewProfit",
    "url": "https://www.stardewprofit.com"
  }
};

export default function SecretNotesPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#9ed7a4]">
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
        <div
          className="absolute inset-x-0 bottom-0 h-24 opacity-90 sm:h-32"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(105,66,37,0.9) 0 14%, rgba(145,95,53,0.9) 14% 32%, transparent 32%), repeating-linear-gradient(to right, rgba(116,73,41,0.92) 0 10px, rgba(151,102,58,0.92) 10px 22px, transparent 22px 52px)",
            backgroundSize: "100% 100%, 100% 100%",
            backgroundPosition: "bottom center, bottom center",
          }}
        />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <PwaRegisterScript />

        <header className="rounded-[30px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
            Stardew Valley Tool
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Secret Notes Finder
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/85 sm:text-base">
            Search all 25 Secret Notes by number, location, reward, or a phrase from the decoded hint. Each result
            explains where to look, what the clue means, and what to do after you find it, so the finder works as a
            checklist rather than a list of unexplained answers.
          </p>
        </header>

        <section className="mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">How to use this finder</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#5f4228]/90">
                <li>Unlock Secret Notes by obtaining the Magnifying Glass during the Winter Mystery quest.</li>
                <li>Use the search and filters to narrow the list to a note number, area, or reward.</li>
                <li>Open a note to read the decoded clue, then follow the location instructions in your save.</li>
                <li>Mark the note complete on this device so the remaining clues are easy to revisit.</li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">What the results include</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5f4228]/90">
                <li>Location hints grouped by the farm, town, beach, mountain, desert, and island areas.</li>
                <li>Reward summaries that distinguish one-time items from repeatable activities.</li>
                <li>Practical next steps for clues that require a season, time window, or unlocked area.</li>
                <li>Links to focused detail pages, including the popular <Link className="underline" href="/secret-notes/22">Secret Note #22 tunnel panel guide</Link>.</li>
              </ul>
            </div>
          </div>
          <p className="mt-5 border-t border-[#7c4d2e]/25 pt-4 text-sm leading-7 text-[#5f4228]/85">
            Secret Notes are optional discoveries, so there is no penalty for solving them out of order. If a clue
            points to an area you have not unlocked yet, leave it unchecked and return later. The completion state is
            stored locally in your browser; it is never required to browse the full reference list.
          </p>
        </section>

        <section className="mt-8">
          <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Popular notes</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
              Quick picks that often show up in searches.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[22, 10, 12, 2, 3].map((id) => (
                <a
                  key={id}
                  href={`/secret-notes/${id}`}
                  className="inline-flex min-h-9 items-center justify-center rounded-xl border-2 border-[#7c4d2e]/55 bg-white/55 px-3 py-2 text-sm font-semibold text-[#4a321e] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/75 hover:bg-white/70"
                >
                  Note #{id}
                </a>
              ))}
            </div>
          </section>

          <Suspense
            fallback={
              <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-6 text-sm text-[#5f4228]/85 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20">
                Loading secret notes...
              </section>
            }
          >
            <SecretNotesClient notes={secretNotes} />
          </Suspense>
        </section>

        <SiteFooter className="mt-10" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(secretNotesSchema) }}
        />
      </main>
    </div>
  );
}

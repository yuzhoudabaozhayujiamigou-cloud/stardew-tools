import { Suspense } from "react";

import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { SecretNotesClient } from "@/components/secret-notes/SecretNotesClient";
import { SiteFooter } from "@/components/SiteFooter";
import { secretNotes } from "@/data/secretNotes";

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
            Search, decode, and track your Secret Notes progress. This first skeleton includes mock data,
            desktop two-column layout, and mobile-friendly stacked cards.
          </p>
        </header>

        <section className="mt-8">
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
      </main>
    </div>
  );
}

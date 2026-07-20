import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import { EditorialReview } from "@/components/EditorialReview";
import FaqJsonLd from "@/components/FaqJsonLd";
import { buildArticleJsonLd, EDITORIAL_AUTHOR_NAME } from "@/lib/editorial";
import { SITE_ORIGIN } from "@/lib/site";

const PAGE_URL = `${SITE_ORIGIN}/guides/multiplayer-crossplay`;
const publishedTime = "2026-03-11T00:00:00.000Z";
const modifiedTime = "2026-07-20T00:00:00.000Z";

export const metadata: Metadata = {
  title: "Stardew Valley Multiplayer Crossplay Guide (2026): Platform Status + Fast Setup",
  description:
    "Quick multiplayer and crossplay status for Stardew Valley across PC, Switch, PlayStation, Xbox, and mobile. Includes split-screen support and shortest setup steps.",
  authors: [{ name: EDITORIAL_AUTHOR_NAME, url: "/about#editorial-team" }],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Stardew Valley Multiplayer Crossplay Guide (2026)",
    description:
      "Check multiplayer, split-screen, and cross-platform status by platform, plus the shortest setup path.",
    url: PAGE_URL,
    siteName: "Stardew Profit",
    type: "article",
    publishedTime,
    modifiedTime,
  },
};

const platformRows = [
  {
    platform: "Windows / Mac / Linux (Steam, GOG)",
    multiplayer: "Yes",
    splitScreen: "Yes",
    crossPlatform: "No official crossplay (PC ecosystem only)",
    shortestSteps: "Host Co-op farm -> share invite code -> join from Co-op menu",
  },
  {
    platform: "Nintendo Switch",
    multiplayer: "Yes",
    splitScreen: "Yes",
    crossPlatform: "No official crossplay (Switch only)",
    shortestSteps: "Open Co-op -> host or join -> invite friend account",
  },
  {
    platform: "PlayStation",
    multiplayer: "Yes",
    splitScreen: "Yes",
    crossPlatform: "No official crossplay (PlayStation only)",
    shortestSteps: "Create or load farm in Co-op -> invite from friends list",
  },
  {
    platform: "Xbox",
    multiplayer: "Yes",
    splitScreen: "Yes",
    crossPlatform: "No official crossplay (Xbox only)",
    shortestSteps: "Open Co-op farm -> invite friend on Xbox network",
  },
  {
    platform: "iOS / Android",
    multiplayer: "No standard supported menu",
    splitScreen: "No",
    crossPlatform: "No supported crossplay",
    shortestSteps: "Use the standard release as a single-player game",
  },
] as const;

const faqItems = [
  {
    question: "Will official crossplay be added later?",
    answer:
      "No official release date is announced in this guide yet. Treat this as a status snapshot and re-check after major game updates.",
  },
  {
    question: "Can I play co-op between console and PC today?",
    answer:
      "Not through official crossplay. Co-op is currently limited to players on the same platform ecosystem.",
  },
  {
    question: "Does mobile support multiplayer now?",
    answer:
      "The standard mobile release does not provide the same supported co-op menu as PC and consoles. Experimental or unofficial workarounds are not treated as dependable crossplay in this guide.",
  },
];

export default function MultiplayerCrossplayGuidePage() {
  return (
    <main className="min-h-screen bg-[#f6f1df] text-slate-900">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Multiplayer Crossplay", href: "/guides/multiplayer-crossplay" },
          ]}
        />

        <FaqJsonLd faqs={faqItems} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildArticleJsonLd({
                headline: "Stardew Valley Multiplayer Crossplay Guide",
                description:
                  "Current multiplayer, split-screen, and cross-platform support across PC, consoles, and mobile.",
                path: "/guides/multiplayer-crossplay",
                datePublished: publishedTime,
                dateModified: modifiedTime,
              }),
            ),
          }}
        />

        <header className="mt-6 rounded-2xl border border-amber-200 bg-white/60 p-6 shadow-sm">
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Stardew Valley Multiplayer Crossplay Guide
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-700">
            Fast status check for multiplayer, split-screen, and cross-platform support. Use this page when you want
            a direct answer before inviting friends.
          </p>
          <EditorialReview gameVersion="1.6" className="!text-slate-600" />
        </header>

        <section className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-xl font-semibold text-emerald-950">Direct Answer</h2>
          <p className="mt-3 leading-7 text-emerald-900">
            <strong>Official cross-platform play is not available right now.</strong> Multiplayer works on PC and
            consoles within their own platform ecosystems, and mobile is single-player.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-emerald-900">
            <li>Want co-op today: pick the same platform first.</li>
            <li>Want couch co-op: use split-screen on supported PC and console versions.</li>
            <li>Want fast setup: host from Co-op menu, then invite directly.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Platform Matrix</h2>
          <p className="mt-3 leading-7 text-slate-700">
            Table fields: platform x multiplayer x split-screen x cross-platform x shortest setup path.
          </p>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-amber-200 bg-white/75">
            <table className="min-w-full border-collapse text-left text-sm">
              <caption className="sr-only">Stardew Valley multiplayer and crossplay platform status table</caption>
              <thead className="bg-amber-100 text-slate-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Platform</th>
                  <th className="px-4 py-3 font-semibold">Multiplayer</th>
                  <th className="px-4 py-3 font-semibold">Split-Screen</th>
                  <th className="px-4 py-3 font-semibold">Cross-Platform</th>
                  <th className="px-4 py-3 font-semibold">Shortest Steps</th>
                </tr>
              </thead>
              <tbody>
                {platformRows.map((row) => (
                  <tr key={row.platform} className="border-t border-amber-100 align-top">
                    <td className="px-4 py-3 font-medium text-slate-900">{row.platform}</td>
                    <td className="px-4 py-3 text-slate-800">{row.multiplayer}</td>
                    <td className="px-4 py-3 text-slate-800">{row.splitScreen}</td>
                    <td className="px-4 py-3 text-slate-800">{row.crossPlatform}</td>
                    <td className="px-4 py-3 text-slate-800">{row.shortestSteps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="faq" className="mt-12">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <p className="mt-3 leading-7 text-slate-700">
            These answers describe the standard supported game experience. Platform services, experimental mobile
            features, and mods can change what is technically possible without creating official crossplay support.
          </p>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-amber-200 bg-white/65 p-5">
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  <span className="group-open:underline">{item.question}</span>
                </summary>
                <p className="mt-3 leading-7 text-slate-800">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Requirements before a friend can join</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-amber-200 bg-white/70 p-5">
              <h3 className="font-semibold">Match the game version</h3>
              <p className="mt-2 leading-7 text-slate-700">
                Host and farmhands should install the same game update. On PC, mismatched gameplay mods can also stop
                a connection or make the save behave differently after joining.
              </p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-white/70 p-5">
              <h3 className="font-semibold">Provide one cabin per farmhand</h3>
              <p className="mt-2 leading-7 text-slate-700">
                A farm needs an available cabin for each additional player. Build one through Robin if an existing
                single-player save has no open farmhand slot.
              </p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-white/70 p-5">
              <h3 className="font-semibold">Keep the host online</h3>
              <p className="mt-2 leading-7 text-slate-700">
                The host owns the farm save. Farmhands cannot continue that world while the host is offline unless the
                save is transferred and opened by another player.
              </p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-white/70 p-5">
              <h3 className="font-semibold">Check platform services</h3>
              <p className="mt-2 leading-7 text-slate-700">
                Console online play can require the platform&apos;s network service and an eligible account. A local
                split-screen session does not use cross-platform networking.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-lg border border-sky-200 bg-sky-50/80 p-6">
          <h2 className="text-2xl font-semibold">Connection troubleshooting order</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-slate-700">
            <li>Confirm both players are using the same platform ecosystem and game version.</li>
            <li>Load the farm through the Co-op menu and verify an unused cabin exists.</li>
            <li>On PC, temporarily test without gameplay mods to rule out a mod mismatch.</li>
            <li>Restart the game and platform client, then create a fresh invite code or invitation.</li>
            <li>Check the platform network status and local firewall or router only after the farm setup is correct.</li>
          </ol>
          <p className="mt-4 leading-7 text-slate-700">
            Crossplay means joining across different platform ecosystems. Playing between Steam and GOG on PC, or
            between devices in the same console family, does not mean PC-to-console crossplay exists.
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-white/70 p-6">
          <h2 className="text-xl font-semibold">Related Tools And Guides</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link className="rounded-xl bg-sky-700 px-4 py-2 text-white hover:bg-sky-800" href="/blog/money-making-guide">
              Open Strategy Hub
            </Link>
            <Link
              className="rounded-xl border border-sky-700 bg-white/60 px-4 py-2 text-sky-800 hover:bg-white"
              href="/guides/greenhouse-profit-guide"
            >
              Read Greenhouse Guide
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}

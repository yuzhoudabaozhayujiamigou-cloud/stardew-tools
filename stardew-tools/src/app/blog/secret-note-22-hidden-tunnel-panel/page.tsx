import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Secret Note 22 (Stardew Valley): Solution, Location & Rewards (1.6)",
  description:
    "Secret Note 22 points to a hidden panel in the Tunnel. Here’s the exact location, step-by-step directions, what you get, and common mistakes (Stardew Valley 1.6).",
};

const pageUrl =
  "https://www.stardewprofit.com/blog/secret-note-22-hidden-tunnel-panel";

function slugifyAnchor(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

type TocItem = {
  id: string;
  label: string;
};

const toc: TocItem[] = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "what-secret-note-22-is", label: "What Secret Note 22 Is" },
  { id: "where-to-find-secret-note-22", label: "Where to Find Secret Note 22" },
  { id: "hidden-tunnel-panel-location", label: "Hidden Tunnel Panel Location" },
  { id: "what-you-get", label: "What You Get (And Why It Matters)" },
  { id: "common-mistakes", label: "Common Mistakes (And Fixes)" },
  { id: "best-time-to-do-it", label: "Best Time to Do It" },
  { id: "faq", label: "FAQ" },
];

const faqs = [
  {
    q: "Where do you find Secret Note 22?",
    a: "Secret Note 22 is part of the Secret Notes system unlocked after you obtain the Magnifying Glass. Once notes are unlocked, they can drop from normal gameplay (combat, fishing, chopping trees, digging artifact spots, etc.).",
  },
  {
    q: "Where is the panel for Secret Note 22?",
    a: "The clue points to a hidden, interactable panel on the wall inside the Tunnel near the Bus Stop. Enter the Tunnel and click along the wall area until you hit the interact prompt.",
  },
  {
    q: "What reward do you get from Secret Note 22?",
    a: "Interacting with the hidden panel reveals a stash/reward. It’s a quick detour that gives an immediate payoff once you click the correct spot.",
  },
  {
    q: "Why can’t I interact with the panel?",
    a: "Make sure you’re in the correct Tunnel area by the Bus Stop and click precisely on the wall spot (it can be easy to miss). If you just unlocked notes, try re-entering the area and clicking slowly along the wall.",
  },
  {
    q: "Does Secret Note 22 change in Stardew Valley 1.6?",
    a: "The basic solution (Tunnel + hidden panel) is the same. If anything feels off, it’s usually a positioning/miss-click issue rather than a version change.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Script
        id="secret-note-22-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <header className="mb-8">
        <p className="text-sm text-neutral-700">Stardew Valley Guides</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900">
          Secret Note 22 (Stardew Valley): Solution, Location &amp; Rewards
        </h1>
        <p className="mt-3 text-base leading-7 text-neutral-800">
          <strong>Quick answer:</strong> Secret Note 22 is a clue for a hidden panel inside the Tunnel by the Bus Stop.
          Go to the Bus Stop, enter the Tunnel, then interact with the panel on the wall to reveal the stash and claim the reward.
        </p>
        <p className="mt-3 text-base leading-7 text-neutral-800">
          Below you’ll find the exact location, step-by-step directions, and troubleshooting tips if it doesn’t trigger.
        </p>

        <div className="mt-5 rounded-lg border border-neutral-200 bg-white/60 p-4">
          <p className="text-sm text-neutral-800">
            Want the fastest way to sanity-check whether a reward is worth it?
            Use the{" "}
            <Link className="underline" href="/calculator">
              profit calculator
            </Link>{" "}
            to compare gold/day options before you commit your time.
          </p>
        </div>
      </header>

      <nav className="mb-10 rounded-xl border border-neutral-200 bg-white/70 p-5">
        <p className="mb-3 text-sm font-semibold text-neutral-900">
          Table of contents
        </p>
        <ol className="grid gap-2 text-sm text-neutral-800">
          {toc.map((item) => (
            <li key={item.id}>
              <a className="underline" href={`#${item.id}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <section id="quick-answer" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold text-neutral-900">Quick Answer</h2>
        <div className="mt-4 rounded-xl border border-neutral-200 bg-white/70 p-5">
          <ul className="list-disc space-y-2 pl-5 text-neutral-800">
            <li>
              Secret Note 22 is a clue that points you to an interactable hidden
              panel inside the tunnel area by the Bus Stop.
            </li>
            <li>
              If you go to the tunnel and click the correct spot on the wall,
              you can reveal the stash the note is hinting at.
            </li>
            <li>
              Treat it like a quick “treasure hunt” note: short detour, instant
              payoff, and not something you can permanently miss.
            </li>
          </ul>
        </div>

        <p className="mt-4 text-neutral-800">
          If you want the canonical reference list, start from the{" "}
          <Link className="underline" href="/secret-notes">
            Secret Notes hub
          </Link>{" "}
          and jump to{" "}
          <Link className="underline" href="/secret-notes/22">
            Secret Note 22
          </Link>
          . This page is the “deep explanation” version.
        </p>
      </section>

      <section id="what-secret-note-22-is" className="mt-12 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-neutral-900">
          What Secret Note 22 Is
        </h2>
        <p className="mt-4 text-neutral-800">
          Secret Notes are small collectible hints you can find after unlocking
          the system in the mid-game. Some notes are pure lore, some are
          mini-quests, and a few point to hidden interactables that most players
          would never click by accident.
        </p>
        <p className="mt-4 text-neutral-800">
          Secret Note 22 belongs to that last category: it’s essentially a map
          in words. If you read it and then walk to the relevant place, you can
          “solve” the note immediately.
        </p>
      </section>

      <section id="where-to-find-secret-note-22" className="mt-12 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Where to Find Secret Note 22
        </h2>
        <p className="mt-4 text-neutral-800">
          The exact drop table details can vary by activity and are easy to
          overthink. The practical rule is: once Secret Notes are unlocked, keep
          playing normally. You’ll pick up notes from everyday actions.
        </p>
        <div className="mt-4 rounded-xl border border-neutral-200 bg-white/70 p-5">
          <p className="text-sm font-semibold text-neutral-900">Practical tips</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-800">
            <li>
              Don’t grind a specific activity for one note unless you enjoy the
              grind.
            </li>
            <li>
              Save your “solve it now” energy for notes that unlock permanent
              value (recipes, unique items, shortcuts).
            </li>
            <li>
              Use this guide as soon as you see the note, then go back to profit
              optimization.
            </li>
          </ul>
        </div>
      </section>

      <section id="hidden-tunnel-panel-location" className="mt-12 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Hidden Tunnel Panel Location
        </h2>
        <p className="mt-4 text-neutral-800">
          The “tunnel” in Stardew Valley is the dark passage near the Bus Stop.
          Many players walk past it dozens of times and never interact with
          anything inside.
        </p>
        <p className="mt-4 text-neutral-800">
          Secret Note 22 is telling you there’s something there anyway. Go to
          the tunnel and carefully click along the wall area where a panel would
          realistically be. When you click the correct spot, the hidden stash is
          revealed.
        </p>
        <div className="mt-6 rounded-xl border border-neutral-200 bg-white/70 p-5">
          <p className="text-sm font-semibold text-neutral-900">
            Fast checklist
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-800">
            <li>Go to the Bus Stop tunnel.</li>
            <li>Click the tunnel wall area (slowly, deliberately).</li>
            <li>When it triggers, collect the stash.</li>
          </ul>
        </div>
        <p className="mt-4 text-neutral-800">
          After you collect it, the note is effectively “done.”
        </p>
      </section>

      <section id="what-you-get" className="mt-12 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-neutral-900">
          What You Get (And Why It Matters)
        </h2>
        <p className="mt-4 text-neutral-800">
          Most Secret Notes rewards are either a one-time item stash or a
          permanent unlock. Secret Note 22 is in the “quick stash” camp.
        </p>
        <p className="mt-4 text-neutral-800">
          The real value is not the raw gold amount. It’s the compounding effect
          of knowing how Stardew hides interactables: once you internalize the
          pattern, you’ll solve other notes faster.
        </p>
        <div className="mt-6 rounded-xl border border-neutral-200 bg-white/70 p-5">
          <p className="text-sm font-semibold text-neutral-900">
            Profit-minded framing
          </p>
          <p className="mt-3 text-neutral-800">
            If you’re optimizing, treat Secret Note detours like this:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-800">
            <li>
              If the detour is under ~1 in-game hour and yields a unique reward,
              do it immediately.
            </li>
            <li>
              If it’s a longer chain, batch it with other errands (community
              center, tool upgrades, Skull Cavern runs).
            </li>
            <li>
              Use the{" "}
              <Link className="underline" href="/calculator">
                profit calculator
              </Link>{" "}
              to stay focused on your main gold engine.
            </li>
          </ul>
        </div>
      </section>

      <section id="common-mistakes" className="mt-12 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Common Mistakes (And Fixes)
        </h2>
        <div className="mt-4 rounded-xl border border-neutral-200 bg-white/70 p-5">
          <ul className="list-disc space-y-3 pl-5 text-neutral-800">
            <li>
              <strong>Over-searching the wrong place:</strong> the key word is
              “tunnel.” If you’re clicking around town or the railroad area,
              you’re off target.
            </li>
            <li>
              <strong>Expecting a visible object:</strong> the panel is hidden.
              You trigger it by interacting with the correct spot, not by
              finding a shiny item sprite.
            </li>
            <li>
              <strong>Assuming it’s time-limited:</strong> secret notes are not
              missable. Come back later if you’re in the middle of a high-value
              day.
            </li>
            <li>
              <strong>Getting distracted from profit goals:</strong> solve the
              note, then go back to your main money plan. If you need one,
              start here: the{" "}
              <Link className="underline" href="/calculator">
                Stardew profit calculator
              </Link>
              .
            </li>
          </ul>
        </div>
      </section>

      <section id="best-time-to-do-it" className="mt-12 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Best Time to Do It
        </h2>
        <p className="mt-4 text-neutral-800">
          The best time is whenever you’re already near the Bus Stop for another
          reason: heading to the desert, returning from town, or checking the
          traveling cart. You can slot this in without derailing your day.
        </p>
        <p className="mt-4 text-neutral-800">
          If you’re deep in a profit run (Skull Cavern, a harvest day, artisan
          production management), you can postpone it—there’s no penalty.
        </p>
      </section>

      <section id="faq" className="mt-12 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-neutral-900">FAQ</h2>
        <div className="mt-4 space-y-4">
          {faqs.map((f) => (
            <details
              key={slugifyAnchor(f.q)}
              className="rounded-xl border border-neutral-200 bg-white/70 p-5"
            >
              <summary className="cursor-pointer text-base font-semibold text-neutral-900">
                {f.q}
              </summary>
              <p className="mt-3 text-neutral-800">{f.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-neutral-800">
          More Secret Notes: visit the{" "}
          <Link className="underline" href="/secret-notes">
            Secret Notes hub
          </Link>
          {" "}
          or go directly to{" "}
          <Link className="underline" href="/secret-notes/22">
            Secret Note 22
          </Link>
          .
        </p>
      </section>

      <footer className="mt-12 border-t border-neutral-200 pt-8 text-sm text-neutral-700">
        <p>
          If you want more profit-focused guides, start with the{" "}
          <Link className="underline" href="/calculator">
            Stardew Profit Calculator
          </Link>
          .
        </p>
      </footer>

      <p className="sr-only">Page URL: {pageUrl}</p>
    </main>
  );
}

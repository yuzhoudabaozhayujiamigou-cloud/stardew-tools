import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Secret Note 22 in Stardew Valley: Hidden Tunnel Panel Explained",
  description:
    "Learn what Secret Note 22 means, where to find the hidden tunnel panel, and what you get from it. Includes step-by-step directions, tips, and FAQs.",
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
    q: "Where do I get Secret Note 22?",
    a: "You get Secret Note 22 from the Secret Notes system (unlocked after you gain the Magnifying Glass). Like most notes, it can drop from common activities such as killing monsters, chopping trees, fishing, or digging artifact spots once notes are unlocked.",
  },
  {
    q: "Where is the hidden tunnel panel mentioned in Secret Note 22?",
    a: "The note points to a hidden panel inside the tunnel area by the Bus Stop. Look for an interactable spot on the tunnel wall; when you click it, you can reveal the stash the note is hinting at.",
  },
  {
    q: "Is Secret Note 22 missable?",
    a: "No. Secret Notes are not permanently missable. If you don't act on one right away, you can still complete it later once you know the location and have access to the relevant area.",
  },
  {
    q: "Do I need a specific season or weather for Secret Note 22?",
    a: "No specific season is required. The key requirement is access to the tunnel by the Bus Stop and knowing where to interact to reveal the hidden panel.",
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
          Secret Note 22 in Stardew Valley: Hidden Tunnel Panel Explained
        </h1>
        <p className="mt-3 text-base leading-7 text-neutral-800">
          Secret Note 22 is one of those Stardew Valley notes that feels cryptic
          until you know exactly <em>where</em> to look. This guide explains what
          the note is pointing at, how to find the hidden tunnel panel, and what
          you get when you interact with it.
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

import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { BlogReadNext } from "@/components/blog/BlogReadNext";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_ORIGIN } from "@/lib/site";
import { getBlogReadNextPosts } from "@/lib/read-next";

const publishedTime = "2026-03-06T00:00:00Z";
const modifiedTime = "2026-03-06T00:00:00Z";
const fromPath = "/blog/wizard-quest-prismatic-jelly-guide";
const url = `${SITE_ORIGIN}${fromPath}`;

const TITLE =
  'How to Finish Wizard Quests (Prismatic Jelly & A Curious Substance) Fast | Stardew Valley 1.6';

const DESCRIPTION =
  "Complete guide to finishing the Wizard's Prismatic Jelly and A Curious Substance quests quickly in Stardew Valley 1.6. Best locations, tips, and common mistakes to avoid.";

const FAQ = [
  {
    question: "Can I get Prismatic Jelly before accepting the quest?",
    answer:
      "No. Prismatic Slimes only have a chance to spawn after the Prismatic Jelly quest is active in your journal. If you farm mines before accepting it, you can kill normal slimes forever and never see Prismatic Jelly.",
  },
  {
    question: "What is the best floor to farm Prismatic Slimes?",
    answer:
      "For speed, many players loop floors 5-10 because elevator travel is fast and resets are easy. If you prefer more total enemy density, farm floors 40-80. The best route is the one you can repeat quickly without downtime.",
  },
  {
    question: "Does the Burglar's Ring help with Prismatic Jelly?",
    answer:
      "It does not increase Prismatic Slime spawn chance, but it helps once you find one by giving extra loot roll value from kills in general. For A Curious Substance, it can also improve your overall drop efficiency while farming Void Essence floors.",
  },
  {
    question: "How long does it take to complete both Wizard quests?",
    answer:
      "A Curious Substance is usually quick, often around 1-2 in-game days with focused Mines routing. Prismatic Jelly is more RNG-heavy, so it can be same-day if lucky or several days if unlucky. Efficient reset loops reduce average completion time.",
  },
  {
    question: "Can I fail these quests?",
    answer:
      "Yes. These are timed quests. If the timer ends, the quest fails for that cycle and you must accept it again when it comes back. Always confirm the quest is active before starting a farming session.",
  },
] as const;

export const metadata: Metadata = {
  title: `${TITLE} | Stardew Profit`,
  description: DESCRIPTION,
  openGraph: {
    title: `${TITLE} | Stardew Profit`,
    description: DESCRIPTION,
    type: "article",
    url,
    images: [{ url: `${url}/opengraph-image` }],
    publishedTime,
    modifiedTime,
  },
};

const CARD =
  "rounded-[28px] border-4 border-[#7c4d2e]/70 bg-[#fff3da]/92 p-5 shadow-[0_14px_34px_rgba(56,41,23,0.22)] ring-1 ring-yellow-900/15 sm:p-7";

const H2 = "text-xl font-semibold text-[#4a321e] sm:text-2xl";
const H3 = "text-lg font-semibold text-[#4a321e]";
const P = "mt-3 text-sm leading-6 text-[#5c4033]/90 sm:text-base";
const LI = "ml-5 list-disc text-sm leading-6 text-[#5c4033]/90 sm:text-base";

const LINK =
  "font-semibold underline decoration-[#b77841]/60 underline-offset-4 transition hover:text-[#3f2a22] hover:decoration-[#b77841]";

const CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/70 bg-[#fce8b1] px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ffd88a]";

const SUB_CTA_CLASS =
  "inline-flex items-center justify-center rounded-2xl border-2 border-[#7c4d2e]/65 bg-white/45 px-5 py-2.5 text-sm font-semibold text-[#5c4033] shadow-sm transition hover:-translate-y-0.5 hover:bg-white/60";

function Toc() {
  return (
    <nav aria-label="Table of contents" className={CARD}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
        Table of contents
      </p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <a className="rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55" href="#what-are-these-quests">
          1) What are these Wizard quests?
        </a>
        <a className="rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55" href="#curious-substance-fast">
          2) A Curious Substance: fast path
        </a>
        <a className="rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55" href="#prismatic-jelly-tricky">
          3) Prismatic Jelly: reliable routing
        </a>
        <a className="rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55" href="#mistakes">
          4) Common mistakes to avoid
        </a>
        <a className="rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55" href="#after-completing">
          5) After completing: what next?
        </a>
        <a className="rounded-xl border border-[#7c4d2e]/25 bg-white/40 px-3 py-2 text-sm font-medium text-[#4a321e] transition hover:bg-white/55" href="#faq">
          6) FAQ
        </a>
      </div>
    </nav>
  );
}

function Callout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="mt-5 rounded-2xl border border-[#7c4d2e]/25 bg-white/40 p-4 ring-1 ring-yellow-900/10">
      <p className="text-sm font-semibold text-[#4a321e]">{title}</p>
      <div className="mt-2 text-sm leading-6 text-[#5c4033]/90">{children}</div>
    </aside>
  );
}

export default function WizardQuestPrismaticJellyGuidePage() {
  const readNextPosts = getBlogReadNextPosts("wizard-quest-prismatic-jelly-guide", 3);

  return (
    <div className="relative min-h-screen bg-[#f5e6c8] text-[#5c4033]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 16% 18%, rgba(255,255,255,0.35) 0 5%, transparent 6%), radial-gradient(circle at 82% 14%, rgba(255,255,255,0.26) 0 4%, transparent 5%), radial-gradient(circle at 18% 84%, rgba(255,255,255,0.22) 0 6%, transparent 7%), repeating-linear-gradient(135deg, rgba(124,77,46,0.10) 0 16px, rgba(124,77,46,0.06) 16px 32px)",
            backgroundColor: "#f5e6c8",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#e8cfa3]/35" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <FaqJsonLd
          faqs={FAQ.map((item) => ({
            question: item.question,
            answer: item.answer,
          }))}
        />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Wizard Quest Prismatic Jelly Guide" },
          ]}
        />

        <article className="mt-6 space-y-6">
          <header className="rounded-[32px] border-4 border-[#7c4d2e]/80 bg-[#fff3da]/95 p-6 shadow-[0_16px_40px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
              Wizard Quests • Mines Routing • Fast Completion
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
              {TITLE}
            </h1>
            <p className={P}>{DESCRIPTION}</p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-[#5c4033]/90">
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Updated: <time dateTime={modifiedTime}>2026-03-06</time>
              </span>
              <span className="rounded-xl border border-[#7c4d2e]/25 bg-white/45 px-3 py-1.5">
                Goal: finish both quests with minimal mine time
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className={CTA_CLASS} href="/calculator">
                Open the Profit Calculator
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog">
                Visit the Blog Hub
              </Link>
            </div>
          </header>

          <Toc />

          <section id="what-are-these-quests" className={CARD}>
            <h2 className={H2}>What Are These Wizard Quests?</h2>
            <p className={P}>
              These two Wizard quests are best treated as one short project: clear the
              easier objective quickly, then spend focused mining time on the RNG-heavy
              Prismatic Jelly step. If you split your attention across farm chores,
              social events, and random mine runs, completion time balloons. If you
              batch the work, it is much faster.
            </p>
            <p className={P}>
              The practical chain in this guide is:
            </p>
            <ul className="mt-3 space-y-2">
              <li className={LI}>
                <span className="font-semibold text-[#4a321e]">A Curious Substance</span>: collect Void Essence (best route: Mines 80-120).
              </li>
              <li className={LI}>
                <span className="font-semibold text-[#4a321e]">Prismatic Jelly</span>: hunt a rare Prismatic Slime after accepting the quest.
              </li>
            </ul>
            <p className={P}>
              Fastest-path mindset: do not optimize for perfect combat. Optimize for
              fast floor cycling and low downtime between encounters.
            </p>

            <Callout title="Quick benchmark">
              Most players can finish A Curious Substance in about 1-2 in-game days if
              they route cleanly. Prismatic Jelly varies more because spawn rate is RNG,
              so focus on fast resets rather than deep floors.
            </Callout>
          </section>

          <section id="curious-substance-fast" className={CARD}>
            <h2 className={H2}>A Curious Substance: Quick Completion Tips</h2>
            <p className={P}>
              This part is straightforward. You want enemies that commonly drop Void
              Essence, and you want to fight enough of them per minute. Floors 80-120 in
              the Mines are the most consistent target because Shadow Brutes and Shadow
              Shamans appear frequently.
            </p>

            <h3 className={`${H3} mt-6`}>Fast route checklist</h3>
            <ul className="mt-3 space-y-2">
              <li className={LI}>Start at floor 80 with elevator access.</li>
              <li className={LI}>
                Clear aggressive enemy packs first, then move on. Skip low-value rocks.
              </li>
              <li className={LI}>
                Use food you can spam without hesitation; downtime kills speed.
              </li>
              <li className={LI}>
                If you have the Burglar&apos;s Ring, equip it for better drop efficiency.
              </li>
              <li className={LI}>
                End the day once your target count is complete; do not over-farm.
              </li>
            </ul>

            <p className={P}>
              If you are under-geared, reduce risk and just run shallow loops between a
              few known elevator floors. A slower but repeatable route beats a faster
              route that causes deaths, item loss pressure, or panic healing.
            </p>

            <p className={P}>
              Want a deeper mine profit framework after this quest chain? Read
              {" "}
              <Link href="/blog/skull-cavern-mining-profit-guide" className={LINK}>
                Skull Cavern Mining Profit Guide
              </Link>
              {" "}
              for long-term mining strategy.
            </p>
          </section>

          <section id="prismatic-jelly-tricky" className={CARD}>
            <h2 className={H2}>Prismatic Jelly: The Tricky One</h2>
            <p className={P}>
              This quest feels bad when you treat it like normal mining. You are not
              hunting ore. You are hunting a rare spawn. The key mechanic is non-negotiable:
              <strong> Prismatic Slimes only appear after you accept the quest.</strong>
              Always verify the quest is active before entering the Mines.
            </p>

            <h3 className={`${H3} mt-6`}>Two practical farming routes</h3>
            <ol className="mt-4 space-y-3">
              <li className={LI}>
                <span className="font-semibold text-[#4a321e]">Speed reset loop (floors 5-10):</span> best when you want rapid rerolls. Check floors quickly, exit, and repeat.
              </li>
              <li className={LI}>
                <span className="font-semibold text-[#4a321e]">Density loop (floors 40-80):</span> best when you prefer fighting more enemies per run for extra encounter chances.
              </li>
            </ol>

            <p className={P}>
              Neither route is universally superior. Use floors 5-10 if your objective is
              pure spawn checks per minute. Use 40-80 if your gear is strong and you want
              extra side-value from combat drops while you hunt.
            </p>

            <h3 className={`${H3} mt-6`}>How to reduce RNG pain</h3>
            <ul className="mt-3 space-y-2">
              <li className={LI}>Set a fixed loop pattern and stick to it for the day.</li>
              <li className={LI}>Keep inventory clear so pickup friction is low.</li>
              <li className={LI}>Use movement buffs if available to increase floor checks.</li>
              <li className={LI}>
                Do not chase every resource node; your objective is finding one specific slime.
              </li>
            </ul>

            <Callout title="Important ring note">
              Burglar&apos;s Ring does not force Prismatic Slime spawns. It helps overall loot
              value and can still be worth equipping, but your main success lever remains
              fast and disciplined floor resets.
            </Callout>
          </section>

          <section id="mistakes" className={CARD}>
            <h2 className={H2}>Common Mistakes to Avoid</h2>

            <h3 className={`${H3} mt-6`}>Mistake 1: Farming before accepting Prismatic Jelly</h3>
            <p className={P}>
              This is the most expensive mistake in time. If the quest is not active,
              Prismatic Slimes will not spawn. Check your journal first, every time.
            </p>

            <h3 className={`${H3} mt-6`}>Mistake 2: Mixing up quest requirements</h3>
            <p className={P}>
              A Curious Substance and Prismatic Jelly are different tasks with different
              targets. Track your current objective in the journal and stop splitting
              your route between conflicting goals.
            </p>

            <h3 className={`${H3} mt-6`}>Mistake 3: Over-clearing floors</h3>
            <p className={P}>
              If your objective is Prismatic Jelly, full floor clears are often wasted
              time. Prioritize encounter speed and reset frequency.
            </p>

            <h3 className={`${H3} mt-6`}>Mistake 4: Ignoring the timer window</h3>
            <p className={P}>
              These are timed quests. Delay too long and the order expires. If you accept
              the quest, schedule dedicated mine sessions immediately instead of “maybe
              tomorrow.”
            </p>
          </section>

          <section id="after-completing" className={CARD}>
            <h2 className={H2}>After Completing: What&apos;s Next?</h2>
            <p className={P}>
              Finishing both quests gives you more than a checkbox. You gain Wizard
              progression value and a cleaner mid-game rhythm: one or two focused combat
              days, then back to stable farm profits. This matters because random combat
              detours often wreck planting and processing routines.
            </p>
            <p className={P}>
              The best follow-up is to immediately rebalance your economy. Use quest days
              for combat/mining, then use farm days for predictable processing loops. If
              you want to check what to plant and process next, open
              {" "}
              <Link href="/calculator" className={LINK}>
                the crop profit calculator
              </Link>
              {" "}
              and compare raw crops vs artisan outputs for your current season.
            </p>
            <p className={P}>
              For more direct strategy articles, browse the
              {" "}
              <Link href="/blog" className={LINK}>
                full blog hub
              </Link>
              .
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className={CTA_CLASS} href="/calculator">
                Plan your next profit step
              </Link>
              <Link className={SUB_CTA_CLASS} href="/blog/skull-cavern-mining-profit-guide">
                Read: Skull Cavern Mining Guide
              </Link>
            </div>
          </section>

          <section id="faq" className={CARD}>
            <h2 className={H2}>FAQ</h2>
            <div className="mt-5 space-y-5">
              {FAQ.map((item) => (
                <div key={item.question} className="rounded-2xl bg-white/35 p-4">
                  <h3 className="text-base font-semibold text-[#4a321e]">
                    {item.question}
                  </h3>
                  <p className={P}>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <BlogReadNext
            posts={readNextPosts}
            currentSlug="wizard-quest-prismatic-jelly-guide"
          />
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}

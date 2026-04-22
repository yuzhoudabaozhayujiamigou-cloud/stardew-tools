import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/tools/perfection-tracker";

const PAGE_TITLE = "Stardew Valley Perfection Tracker: Track 100% Completion Progress (1.6.9) | StardewProfit";
const PAGE_DESCRIPTION =
  "Track your Stardew Valley 1.6.9 perfection progress with this browser-based checklist. Skills, stardrops, golden walnuts, crafting, cooking, friendships, and late-game goals. Auto-saves locally.";

const CARD_CLASS =
  "mt-8 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "text-[#1f6b2e] underline decoration-[#1f6b2e]/30 underline-offset-4 hover:decoration-[#1f6b2e]/60";

type TrackerItem = {
  id: string;
  label: string;
  note?: string;
};

type TrackerSection = {
  id: string;
  title: string;
  items: TrackerItem[];
};

const TRACKER_SECTIONS: TrackerSection[] = [
  {
    id: "skills",
    title: "Skills",
    items: [
      { id: "farming-10", label: "Farming level 10" },
      { id: "fishing-10", label: "Fishing level 10" },
      { id: "foraging-10", label: "Foraging level 10" },
      { id: "mining-10", label: "Mining level 10" },
      { id: "combat-10", label: "Combat level 10" },
    ],
  },
  {
    id: "stardrops",
    title: "Stardrops",
    items: [
      { id: "stardrop-mine", label: "Mine reward stardrop" },
      { id: "stardrop-secret-woods", label: "Old Master Cannoli stardrop" },
      { id: "stardrop-spouse", label: "Spouse or roommate stardrop" },
      { id: "stardrop-krobus", label: "Sewer purchase stardrop" },
      { id: "stardrop-fair", label: "Stardew Valley Fair stardrop" },
      { id: "stardrop-museum", label: "Museum donation reward stardrop" },
      { id: "stardrop-fishing", label: "Master Angler stardrop" },
    ],
  },
  {
    id: "monster-slayer",
    title: "Monster Slayer",
    items: [
      { id: "slayer-board", label: "Review every Adventurer's Guild slayer target" },
      { id: "slayer-complete", label: "Finish remaining slayer goals" },
      { id: "slayer-rewards", label: "Claim all slayer rewards" },
    ],
  },
  {
    id: "crafting",
    title: "Crafting",
    items: [
      { id: "crafting-recipe-check", label: "Collect all crafting recipes" },
      { id: "crafting-once", label: "Craft each item at least once" },
      { id: "crafting-missables", label: "Double-check festival and shop-limited recipes" },
    ],
  },
  {
    id: "cooking",
    title: "Cooking",
    items: [
      { id: "cooking-recipe-check", label: "Collect all cooking recipes" },
      { id: "cooking-once", label: "Cook each recipe at least once" },
      { id: "cooking-tv", label: "Catch up missing TV or friendship recipes" },
    ],
  },
  {
    id: "golden-walnuts",
    title: "Golden Walnuts",
    items: [
      { id: "walnut-regions", label: "Clear each Ginger Island region" },
      { id: "walnut-hints", label: "Use hints to find remaining missing walnuts" },
      { id: "walnut-final-pass", label: "Run final island cleanup pass" },
    ],
  },
  {
    id: "obelisks-clock",
    title: "Obelisks / Clock",
    items: [
      { id: "all-obelisks", label: "Build all obelisks" },
      { id: "golden-clock", label: "Purchase Golden Clock" },
    ],
  },
  {
    id: "friendships",
    title: "Friendships",
    items: [
      { id: "villager-hearts", label: "Reach full friendship goals for villagers" },
      { id: "dwarf-krobus", label: "Complete Dwarf and Krobus friendship goals" },
      { id: "pet-bowl", label: "Max pet friendship" },
    ],
  },
];

const FAQS = [
  {
    question: "Does this perfection tracker save automatically?",
    answer:
      "Yes. Changes save to localStorage in your current browser. There is no backend and no account sync.",
  },
  {
    question: "Can I use this tracker on multiple devices?",
    answer:
      "Not automatically. Because this tool is local-only, each browser keeps its own progress unless you manually copy your checklist status.",
  },
  {
    question: "Is this tracker meant to replace in-game perfection tracking?",
    answer:
      "No. It is a planning layer that helps you avoid missing categories. You should still confirm final status in-game for official perfection completion.",
  },
  {
    question: "What counts toward 100% perfection in Stardew Valley 1.6.9?",
    answer:
      "Perfection in Stardew Valley 1.6.9 requires: all skills at level 10, all stardrops collected, all monster slayer goals completed, all crafting and cooking recipes made at least once, all 130 golden walnuts found, all obelisks built, the Golden Clock purchased, and full friendship with all villagers and pets.",
  },
  {
    question: "How do I track golden walnuts progress?",
    answer:
      "This tracker includes a Golden Walnuts section with region-based hints. For detailed walnut locations, check the Golden Walnuts Guide linked below the checklist.",
  },
  {
    question: "Can I reset my perfection tracker progress?",
    answer:
      "Yes. Use the Reset button at the bottom of the checklist to clear all progress in your current browser. This action cannot be undone.",
  },
] as const;

const RELATED_LINKS = [
  { href: "/guides/perfection-checklist-1-6", label: "Perfection Checklist 1.6" },
  { href: "/guides/golden-clock-guide", label: "Golden Clock Guide" },
  { href: "/guides/how-to-get-qi-gems-fast", label: "How to Get Qi Gems Fast" },
  { href: "/guides/golden-walnuts-guide", label: "Golden Walnuts Guide" },
  { href: "/guides/best-late-game-money-makers", label: "Best Late-Game Money Makers" },
  { href: "/calculator", label: "Stardew Valley Profit Calculator" },
] as const;

const TRACKER_SCRIPT = `
(() => {
  const STORAGE_KEY = "stardew-perfection-tracker-v1";
  const ROOT_SELECTOR = '[data-perfection-tracker="root"]';
  const initializedRoots = new WeakSet();

  function parseState(raw) {
    if (!raw) return {};
    try {
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return {};
      return parsed;
    } catch {
      return {};
    }
  }

  function initRoot(root) {
    if (!(root instanceof HTMLElement) || initializedRoots.has(root)) return;

    const form = root.querySelector('form[data-perfection-tracker="form"]');
    if (!(form instanceof HTMLFormElement)) return;

    initializedRoots.add(root);

    const checkboxes = Array.from(
      form.querySelectorAll('input[type="checkbox"][data-task-id]')
    ).filter((node) => node instanceof HTMLInputElement);

    const statusNode = root.querySelector('[data-perfection-tracker="status"]');
    const overallNode = root.querySelector('[data-perfection-tracker="overall-progress"]');
    const percentNode = root.querySelector('[data-perfection-tracker="overall-percent"]');
    const updatedNode = root.querySelector('[data-perfection-tracker="updated"]');
    const resetButton = root.querySelector('[data-perfection-tracker="reset"]');
    const sectionNodes = Array.from(root.querySelectorAll('[data-section-progress]'));

    function updateProgress() {
      const total = checkboxes.length;
      const done = checkboxes.filter((box) => box.checked).length;
      const percent = total > 0 ? Math.round((done / total) * 100) : 0;

      if (overallNode) overallNode.textContent = done + " / " + total;
      if (percentNode) percentNode.textContent = percent + "%";
      if (updatedNode) updatedNode.textContent = new Date().toLocaleString();

      sectionNodes.forEach((node) => {
        const sectionId = node.getAttribute("data-section-progress");
        if (!sectionId) return;

        const sectionBoxes = checkboxes.filter(
          (box) => box.dataset.sectionId === sectionId
        );
        const sectionDone = sectionBoxes.filter((box) => box.checked).length;
        node.textContent = sectionDone + " / " + sectionBoxes.length;
      });
    }

    function readState() {
      return parseState(localStorage.getItem(STORAGE_KEY));
    }

    function writeState() {
      const next = {};
      checkboxes.forEach((box) => {
        const id = box.dataset.taskId;
        if (!id) return;
        next[id] = box.checked;
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }

    function applyState(state) {
      checkboxes.forEach((box) => {
        const id = box.dataset.taskId;
        box.checked = id ? Boolean(state[id]) : false;
      });
    }

    applyState(readState());
    updateProgress();

    form.addEventListener("change", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement) || target.type !== "checkbox") return;

      writeState();
      updateProgress();
      if (statusNode) statusNode.textContent = "Saved to this browser.";
    });

    if (resetButton instanceof HTMLButtonElement) {
      resetButton.addEventListener("click", () => {
        if (!window.confirm("Reset all checklist progress in this browser?")) return;

        localStorage.removeItem(STORAGE_KEY);
        checkboxes.forEach((box) => {
          box.checked = false;
        });
        updateProgress();
        if (statusNode) statusNode.textContent = "Checklist reset.";
      });
    }

    if (statusNode) statusNode.textContent = "Ready. Progress saves automatically.";
  }

  function initAll() {
    document.querySelectorAll(ROOT_SELECTOR).forEach((root) => initRoot(root));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll, { once: true });
  } else {
    initAll();
  }

  const observer = new MutationObserver(initAll);
  observer.observe(document.body, { childList: true, subtree: true });
})();
`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "stardew valley perfection tracker",
    "stardew perfection checklist",
    "stardew valley 100 percent completion",
    "stardew valley perfection guide",
    "golden walnuts tracker",
    "stardew valley 1.6.9 perfection",
    "stardew valley late game checklist",
  ],
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    type: "article",
    url: `${SITE_URL}${PAGE_PATH}`,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function PerfectionTrackerPage() {
  const totalTasks = TRACKER_SECTIONS.reduce((sum, section) => sum + section.items.length, 0);

  return (
    <main className="min-h-screen bg-[#9ed7a4] text-[#4a321e]">
      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Tools", href: "/tools" },
            { name: "Perfection Tracker", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />

        <header className={`${CARD_CLASS} mt-6`}>
          <div className="mb-4 rounded-2xl border-2 border-[#2f6a3a]/40 bg-[#e6f8d8] p-4">
            <div className="flex items-center gap-2">
              <span className="text-xl" aria-hidden>✨</span>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1f6b2e]">
                Updated for Stardew Valley 1.6.9
              </p>
            </div>
            <p className="mt-2 text-sm leading-6 text-[#245631]">
              This perfection tracker is current for Stardew Valley 1.6.9 (2026). All categories match the latest perfection requirements: skills, stardrops, monster slayer, crafting, cooking, golden walnuts, obelisks, Golden Clock, and friendships.
            </p>
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Perfection Tracker</h1>
          <p className="mt-4 text-base leading-7 text-[#5f4228]/90 md:text-lg">
            Simple browser-based checklist for Stardew Valley 1.6.9 perfection progress. No account, no
            backend, and auto-save in localStorage.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
              <p className="text-sm font-semibold text-[#4a321e]">When to use this tracker</p>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                Use this when you&apos;re in late game and want a clean checklist to avoid missing perfection categories. It&apos;s especially helpful for tracking golden walnuts, crafting/cooking recipes, and friendship goals.
              </p>
            </div>
            <div className="rounded-2xl border border-[#7c4d2e]/25 bg-[#fff8e8] p-4">
              <p className="text-sm font-semibold text-[#4a321e]">How it works</p>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
                Check off items as you complete them. Progress saves automatically to your browser (localStorage). No account needed, but progress won&apos;t sync across devices.
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/guides/perfection-checklist-1-6"
              className="inline-flex items-center gap-2 rounded-2xl border border-[#2f6a3a]/30 bg-[#e6f8d8] px-4 py-2 text-sm font-semibold text-[#1f6b2e] shadow-sm transition hover:-translate-y-0.5 hover:border-[#2f6a3a]/60 hover:bg-[#d9f2c7]"
            >
              📋 Read Full Perfection Guide
            </Link>
            <Link
              href="/guides/golden-walnuts-guide"
              className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]"
            >
              🥥 Golden Walnuts Guide
            </Link>
          </div>
        </header>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Checklist Tool</h2>
          <p id="tracker-help" className="mt-2 text-sm leading-6 text-[#5f4228]/85">
            Mark items as you complete them. Progress saves automatically in this browser.
          </p>

          <div data-perfection-tracker="root" className="mt-4 rounded-2xl border border-[#7c4d2e]/60 bg-[#f8ecc8] p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#7c4d2e]/30 pb-3">
              <div>
                <p className="text-sm font-semibold text-[#4a321e]">Overall progress</p>
                <p className="text-sm text-[#5f4228]/90">
                  <span data-perfection-tracker="overall-progress" className="font-semibold">
                    0 / {totalTasks}
                  </span>{" "}
                  tasks complete ({" "}
                  <span data-perfection-tracker="overall-percent" className="font-semibold">
                    0%
                  </span>
                  )
                </p>
              </div>
              <button
                type="button"
                data-perfection-tracker="reset"
                className="min-h-[44px] rounded-lg border border-[#7c4d2e]/60 bg-[#f3e5bf] px-3 py-2 text-sm font-semibold text-[#4a321e] hover:bg-[#eedaa0]"
              >
                Reset Checklist
              </button>
            </div>

            <p data-perfection-tracker="status" role="status" aria-live="polite" className="mt-3 text-sm text-[#5f4228]/90">
              Loading tracker...
            </p>
            <p className="mt-1 text-xs text-[#5f4228]/80">
              Last update: <span data-perfection-tracker="updated">-</span>
            </p>

            <form data-perfection-tracker="form" aria-describedby="tracker-help" className="mt-4 space-y-4">
              {TRACKER_SECTIONS.map((section) => (
                <fieldset
                  key={section.id}
                  className="rounded-xl border border-[#7c4d2e]/40 bg-[#f3e5bf]/70 p-4"
                >
                  <legend className="px-1 text-base font-semibold text-[#4a321e]">{section.title}</legend>
                  <p className="px-1 text-sm text-[#5f4228]/90">
                    Completed: <span data-section-progress={section.id}>0 / {section.items.length}</span>
                  </p>
                  <ul className="mt-2 space-y-2">
                    {section.items.map((item) => {
                      const inputId = `${section.id}-${item.id}`;

                      return (
                        <li key={item.id}>
                          <div className="flex items-start gap-3 rounded-lg border border-[#7c4d2e]/20 bg-[#f8ecc8] p-3">
                            <input
                              id={inputId}
                              type="checkbox"
                              data-task-id={item.id}
                              data-section-id={section.id}
                              className="mt-1 h-5 w-5 accent-[#1f6b2e]"
                            />
                            <label htmlFor={inputId} className="cursor-pointer leading-6 text-[#4a321e]">
                              <span className="font-medium">{item.label}</span>
                              {item.note ? (
                                <span className="mt-1 block text-sm text-[#5f4228]/85">{item.note}</span>
                              ) : null}
                            </label>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </fieldset>
              ))}
            </form>
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">How to Use It Well</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#5f4228]/90">
            <li>Update this checklist at the end of each in-game week.</li>
            <li>Pair it with your Walnut Room tracker for final verification.</li>
            <li>Use the related guides below when one section is stalled.</li>
          </ul>
        </section>

        <section id="faq" className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-4 space-y-3">
            {FAQS.map((item) => (
              <details key={item.question} className="rounded-xl border border-[#7c4d2e]/60 bg-[#f8ecc8] p-4">
                <summary className="cursor-pointer font-semibold text-[#4a321e]">{item.question}</summary>
                <p className="mt-2 leading-7 text-[#5f4228]/90">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={CARD_CLASS}>
          <h2 className="text-2xl font-semibold">Related Guides &amp; Tools</h2>
          <ul className="mt-4 space-y-2 leading-7 text-[#5f4228]/90">
            {RELATED_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={LINK_CLASS}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <SiteFooter className="mt-10" />
      </article>

      <script dangerouslySetInnerHTML={{ __html: TRACKER_SCRIPT }} />
    </main>
  );
}

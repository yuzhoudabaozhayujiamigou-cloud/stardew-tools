export type LethalGuideSection = {
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  steps?: readonly string[];
  code?: string;
  rows?: readonly {
    label: string;
    value: string;
  }[];
};

export type LethalGuideFaq = {
  question: string;
  answer: string;
};

export type LethalGuideContent = {
  path: string;
  breadcrumb: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: readonly LethalGuideSection[];
  faqs: readonly LethalGuideFaq[];
  related: readonly {
    href: string;
    label: string;
  }[];
};

const BASE_RELATED_LINKS = [
  { href: "/", label: "Back to Home" },
  { href: "/tools/quota-calculator", label: "Open Quota Calculator" },
] as const;

export const LETHAL_GUIDE_CONTENT = {
  hub: {
    path: "/guides/lethal-company",
    breadcrumb: "Lethal Company Guides",
    title: "Lethal Company Quota Calculator Strategy Hub | StardewProfit",
    description:
      "Master Lethal Company quota runs with day-based selling, quadratic quota growth, and terminal command strategy built around the Quota Calculator.",
    h1: "Lethal Company Quota Strategy Hub",
    intro:
      "This hub turns the core report into a practical playbook: sell timing, quota math, and terminal execution. Start here, then jump into the focused pages below.",
    sections: [
      {
        title: "Core Ideas from the Report",
        bullets: [
          "Day 1 and Day 2 sales usually pay reduced rates; deadline sales pay full value.",
          "Quota growth follows a quadratic pattern, not a linear pattern.",
          "Terminal command quality separates stable teams from panic teams.",
        ],
      },
      {
        title: "Default Team Rule",
        paragraphs: [
          "Set one person as terminal anchor and one person as quota caller. Everyone else focuses on clean scrap routing and fast extraction.",
          "Use the Quota Calculator before each sale window so your team sells only what is required, not the entire inventory.",
        ],
      },
      {
        title: "What to Read Next",
        rows: [
          { label: "Sell Timing", value: "Day 1 vs Day 2 sell and deadline sell checklists." },
          { label: "Quota Math", value: "Quadratic formula explanation with pacing examples." },
          { label: "Terminal Ops", value: "Command list and role-based command micro-guides." },
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best first step before selling?",
        answer:
          "Calculate the minimum credited value needed to clear quota, then sell only enough scrap to hit that number plus essential gear budget.",
      },
      {
        question: "Why does this hub focus on deadline sales?",
        answer:
          "Because early-day payouts are usually discounted, while deadline windows are the highest-value conversion point for your inventory.",
      },
      {
        question: "Is this useful for solo runs?",
        answer:
          "Yes. The same principles apply: protect inventory value early, track quota growth, and use terminal commands to reduce decision mistakes.",
      },
    ],
    related: [
      { href: "/guides/lethal-company/day-1-vs-day-2-sell", label: "Day 1 vs Day 2 Sell" },
      { href: "/guides/lethal-company/quota-formula-explained", label: "Quota Formula Explained" },
      { href: "/guides/lethal-company/terminal-commands-list", label: "Terminal Commands List" },
      ...BASE_RELATED_LINKS,
    ],
  },
  day1vsday2: {
    path: "/guides/lethal-company/day-1-vs-day-2-sell",
    breadcrumb: "Day 1 vs Day 2 Sell",
    title: "Lethal Company Day 1 vs Day 2 Sell Strategy | StardewProfit",
    description:
      "Compare Day 1 and Day 2 selling tradeoffs in Lethal Company and choose when to sell just enough scrap to stay alive without killing deadline value.",
    h1: "Day 1 vs Day 2 Sell Strategy",
    intro:
      "Most failed quota runs lose value by overselling too early. This page helps you decide whether Day 1 or Day 2 partial selling is justified.",
    sections: [
      {
        title: "Why Early Selling Is Expensive",
        paragraphs: [
          "The report highlights that Day 1 and Day 2 commonly apply reduced payout rates. Selling full inventory during these windows burns future quota potential.",
          "Treat early selling as a survival tool, not a main profit event.",
        ],
      },
      {
        title: "Decision Checklist",
        steps: [
          "Calculate current quota gap with the Quota Calculator.",
          "Estimate required gear spend for the next run only.",
          "Sell the smallest raw scrap amount that covers quota gap plus required gear.",
          "Hold the rest for the deadline window.",
        ],
      },
      {
        title: "When Day 2 Beats Day 1",
        bullets: [
          "You need one more high-value run and can survive without immediate purchases.",
          "Your team already has basic tools and light upgrades.",
          "Risk on the target moon is moderate and extraction reliability is high.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should we ever full-sell on Day 1?",
        answer:
          "Only in emergency scenarios where failing current quota is more likely than surviving to the deadline with inventory intact.",
      },
      {
        question: "Is Day 2 always better than Day 1?",
        answer:
          "Not always. Day 2 is often better for payout, but team risk, moon access, and current tools still decide whether waiting is realistic.",
      },
      {
        question: "How much buffer should we sell for gear?",
        answer:
          "Sell for essential gear only. Avoid convenience purchases until quota clearance is mathematically secured.",
      },
    ],
    related: [
      { href: "/guides/lethal-company/deadline-day-3-sell", label: "Deadline Day 3 Sell" },
      { href: "/guides/lethal-company/quota-growth-spikes", label: "Quota Growth Spikes" },
      ...BASE_RELATED_LINKS,
    ],
  },
  deadline: {
    path: "/guides/lethal-company/deadline-day-3-sell",
    breadcrumb: "Deadline Day 3 Sell",
    title: "Lethal Company Deadline Day 3 Selling Guide | StardewProfit",
    description:
      "Use deadline-day selling rules to capture 100% value in Lethal Company while avoiding panic dumps and failed quota clears.",
    h1: "Deadline (Day 3) Selling Guide",
    intro:
      "The report's golden rule is simple: deadline is the full-value window. This page gives you a clean sell routine for that window.",
    sections: [
      {
        title: "Why Deadline Is the Main Payout Event",
        paragraphs: [
          "Deadline sales are where your scrap converts at full rate. Every raw value unit counts more here than in early windows.",
          "Your objective is to arrive at deadline with enough inventory to clear quota and retain strategic leftovers whenever possible.",
        ],
      },
      {
        title: "Deadline Execution Routine",
        steps: [
          "Sort inventory by raw value before docking.",
          "Sell medium-value items first to approach quota cleanly.",
          "Use high-value items last to avoid overkill selling.",
          "Stop immediately after quota and required gear budget are secured.",
        ],
      },
      {
        title: "Panic-Sell Mistakes",
        bullets: [
          "Selling everything first, then realizing next cycle has no buffer.",
          "Ignoring gear budget and buying non-essential items post-sale.",
          "Failing to assign one player to final value calling during sales.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should we always keep extra scrap after clearing quota?",
        answer:
          "If possible, yes. Preserving value smooths the next quadratic quota jump and reduces emergency decisions.",
      },
      {
        question: "What if we are slightly short at deadline?",
        answer:
          "Sell targeted high-value items only until quota is met. Avoid full inventory liquidation unless failure is otherwise guaranteed.",
      },
      {
        question: "Can deadline strategy work with random teammates?",
        answer:
          "Yes, if one person handles quota calls and everyone commits to exact-target selling rather than impulse selling.",
      },
    ],
    related: [
      { href: "/guides/lethal-company/day-1-vs-day-2-sell", label: "Day 1 vs Day 2 Sell" },
      { href: "/guides/lethal-company/quota-formula-explained", label: "Quota Formula Explained" },
      ...BASE_RELATED_LINKS,
    ],
  },
  formula: {
    path: "/guides/lethal-company/quota-formula-explained",
    breadcrumb: "Quota Formula Explained",
    title: "Lethal Company Quota Formula Explained (Quadratic) | StardewProfit",
    description:
      "Understand the Lethal Company quadratic quota formula and use it to plan sales, moon difficulty, and inventory retention across cycles.",
    h1: "Quota Formula Explained (Quadratic)",
    intro:
      "Quota pressure rises faster than most teams expect because growth is quadratic. This page translates the formula into practical run planning.",
    sections: [
      {
        title: "The Formula",
        paragraphs: [
          "The report formula is shown below. Use it to forecast how hard the next cycles will hit your team economy.",
        ],
        code: "Quota = 100 + 100 * (1 + (DaysPassed / 12)^2)",
      },
      {
        title: "Practical Meaning",
        bullets: [
          "Early cycles feel manageable, so teams over-spend and over-sell.",
          "Mid cycles spike quickly, and weak inventory discipline gets punished.",
          "Late cycles reward teams that preserve high-value scrap and buy only essentials.",
        ],
      },
      {
        title: "Planning Rules",
        steps: [
          "Forecast one cycle ahead before every sell decision.",
          "Tie moon risk to projected quota jump, not current comfort level.",
          "Increase reserve target whenever formula growth accelerates.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do runs collapse after a few successful cycles?",
        answer:
          "Because quota growth compounds. If inventory and spending discipline are weak, teams hit a sudden wall when quadratic growth starts biting.",
      },
      {
        question: "Do I need exact math every cycle?",
        answer:
          "You need directional math at minimum. Even rough forecasts help you avoid overconfidence and mistimed selling.",
      },
      {
        question: "How does this connect to moon selection?",
        answer:
          "Higher quota growth means you should shift to higher-value routes earlier, as long as your team can execute safely.",
      },
    ],
    related: [
      { href: "/guides/lethal-company/quota-growth-spikes", label: "Quota Growth Spikes" },
      { href: "/guides/lethal-company/deadline-day-3-sell", label: "Deadline Day 3 Sell" },
      ...BASE_RELATED_LINKS,
    ],
  },
  growth: {
    path: "/guides/lethal-company/quota-growth-spikes",
    breadcrumb: "Quota Growth Spikes",
    title: "Lethal Company Quota Growth Spikes and Pacing | StardewProfit",
    description:
      "Handle quota growth spikes in Lethal Company with pacing rules for selling, reserve value, and moon escalation.",
    h1: "Quota Growth Spikes and Team Pacing",
    intro:
      "When quota jumps faster than your team's rhythm, strategy breaks. This guide sets pacing rules to survive the quadratic climb.",
    sections: [
      {
        title: "Signs Your Team Is Behind the Curve",
        bullets: [
          "You need early full-sells in consecutive cycles.",
          "Essential gear purchases are delayed because quota is too tight.",
          "Team starts taking high-risk moons without recovery buffer.",
        ],
      },
      {
        title: "Pacing Model",
        rows: [
          { label: "Stable", value: "Exact-target sells plus small reserve growth each cycle." },
          { label: "Warning", value: "Frequent oversell and no carry-over value for next quota." },
          { label: "Critical", value: "Emergency sells before deadline and weak gear coverage." },
        ],
      },
      {
        title: "Recovery Steps",
        steps: [
          "Downgrade one route tier for consistency if deaths are frequent.",
          "Cut non-essential store spending until reserve value returns.",
          "Reassign one player to strict terminal support for cleaner extraction.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much reserve value should we keep?",
        answer:
          "Enough to absorb one rough run without forcing a panic full-sell. The exact number depends on your cycle and route risk.",
      },
      {
        question: "When should we escalate to harder moons?",
        answer:
          "Escalate when your team consistently clears quota with reserve left, not just when one lucky run succeeds.",
      },
      {
        question: "Can pacing fix weak mechanical skill?",
        answer:
          "It cannot replace skill, but it prevents economic collapse while your team improves execution.",
      },
    ],
    related: [
      { href: "/guides/lethal-company/quota-formula-explained", label: "Quota Formula Explained" },
      { href: "/guides/lethal-company/day-1-vs-day-2-sell", label: "Day 1 vs Day 2 Sell" },
      ...BASE_RELATED_LINKS,
    ],
  },
  terminal: {
    path: "/guides/lethal-company/terminal-commands-list",
    breadcrumb: "Terminal Commands List",
    title: "Lethal Company Terminal Commands List and Effects | StardewProfit",
    description:
      "Learn the core Lethal Company terminal commands, what each command does, and how to use them in coordinated quota runs.",
    h1: "Terminal Commands List and Effects",
    intro:
      "The report calls terminal mastery non-negotiable. Use this page as the base command map before learning role-specific command guides.",
    sections: [
      {
        title: "Core Commands",
        rows: [
          { label: "SCAN", value: "Ping scrap values inside the facility." },
          { label: "MOONS", value: "Route ship to available moons." },
          { label: "STORE", value: "Buy gear such as flashlights and utility tools." },
          { label: "BESTIARY", value: "Review enemy knowledge and behavior context." },
          { label: "VIEW MONITOR", value: "Track teammate location and danger timing." },
        ],
      },
      {
        title: "Command Priority During Runs",
        steps: [
          "Pre-landing: MOONS and route validation.",
          "Mid-run: SCAN and VIEW MONITOR support calls.",
          "Post-run: STORE and budget lock before next route.",
        ],
      },
      {
        title: "Terminal Operator Rules",
        bullets: [
          "Keep calls short, numeric, and repeatable.",
          "Do not stack command experiments during extraction windows.",
          "Log what changed so team decisions stay synchronized.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which command matters most for quota?",
        answer:
          "All five matter, but SCAN and VIEW MONITOR usually have the biggest impact on clean extraction and inventory retention.",
      },
      {
        question: "Should every player learn terminal commands?",
        answer:
          "Yes at a basic level, but one primary terminal operator improves consistency in high-pressure runs.",
      },
      {
        question: "How often should we open STORE?",
        answer:
          "Only when planned purchases are aligned with quota math. Avoid impulse buying between cycles.",
      },
    ],
    related: [
      { href: "/guides/lethal-company/scan-command-guide", label: "SCAN Command Guide" },
      { href: "/guides/lethal-company/moons-command-guide", label: "MOONS Command Guide" },
      { href: "/guides/lethal-company/store-command-guide", label: "STORE Command Guide" },
      { href: "/guides/lethal-company/view-monitor-and-bestiary", label: "VIEW MONITOR & BESTIARY" },
      ...BASE_RELATED_LINKS,
    ],
  },
  scan: {
    path: "/guides/lethal-company/scan-command-guide",
    breadcrumb: "SCAN Command Guide",
    title: "Lethal Company SCAN Command Guide | StardewProfit",
    description:
      "Use SCAN command data to prioritize scrap routes, improve extraction calls, and protect quota value in Lethal Company runs.",
    h1: "SCAN Command Guide",
    intro:
      "SCAN is your information advantage. Better scans mean fewer blind pushes and better value-per-risk decisions.",
    sections: [
      {
        title: "What SCAN Gives You",
        bullets: [
          "Visibility into available scrap value before overcommitting.",
          "Better route calling for players inside the facility.",
          "Faster decision to extract when value threshold is met.",
        ],
      },
      {
        title: "SCAN Callout Format",
        steps: [
          "Call total visible value.",
          "Call nearest high-value zone.",
          "Call extraction trigger value.",
        ],
      },
      {
        title: "Common SCAN Errors",
        bullets: [
          "Treating scan data as static while teammates keep looting.",
          "Ignoring time pressure and weather while chasing one high-value line.",
          "Failing to match scan calls with quota target from calculator.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can SCAN replace map knowledge?",
        answer:
          "No. SCAN augments map knowledge by improving value visibility, but movement discipline and route familiarity still matter.",
      },
      {
        question: "How often should terminal operator scan?",
        answer:
          "Often enough to keep value calls current without interrupting critical monitor calls during extraction.",
      },
      {
        question: "Should SCAN influence sell timing?",
        answer:
          "Yes. Better scan confidence helps decide whether to wait for deadline or sell partially for survival.",
      },
    ],
    related: [
      { href: "/guides/lethal-company/terminal-commands-list", label: "Terminal Commands List" },
      { href: "/guides/lethal-company/day-1-vs-day-2-sell", label: "Day 1 vs Day 2 Sell" },
      ...BASE_RELATED_LINKS,
    ],
  },
  moons: {
    path: "/guides/lethal-company/moons-command-guide",
    breadcrumb: "MOONS Command Guide",
    title: "Lethal Company MOONS Command Guide | StardewProfit",
    description:
      "Use MOONS command planning to pick the right risk tier and route your team toward quota-efficient scavenging runs.",
    h1: "MOONS Command Guide",
    intro:
      "MOONS selection controls your risk-reward curve. Strong teams route based on quota needs, not habit.",
    sections: [
      {
        title: "Route Selection Logic",
        rows: [
          { label: "Low pressure cycle", value: "Take stable routes and preserve team consistency." },
          { label: "Quota catch-up cycle", value: "Take higher-value routes with tighter extraction rules." },
          { label: "Recovery cycle", value: "Lower risk after deaths to rebuild reserve." },
        ],
      },
      {
        title: "Before Confirming a Moon",
        steps: [
          "Check quota gap and target raw value.",
          "Confirm team gear baseline and utility coverage.",
          "Set extraction trigger before landing.",
        ],
      },
      {
        title: "Moon Routing Mistakes",
        bullets: [
          "Jumping to high-tier moons without communication discipline.",
          "Repeating underperforming routes out of comfort.",
          "Ignoring recent death pattern and pushing risk upward anyway.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should we always choose the highest-value moon?",
        answer:
          "No. Expected value matters more than theoretical value. If execution quality is low, safer routes can outperform.",
      },
      {
        question: "How does moon choice affect selling day?",
        answer:
          "Higher-value route success often lets you delay selling until deadline, which improves payout efficiency.",
      },
      {
        question: "When should we rotate route type?",
        answer:
          "Rotate when quota growth or team stability changes, not because of one unusual run.",
      },
    ],
    related: [
      { href: "/guides/lethal-company/quota-growth-spikes", label: "Quota Growth Spikes" },
      { href: "/guides/lethal-company/terminal-commands-list", label: "Terminal Commands List" },
      ...BASE_RELATED_LINKS,
    ],
  },
  store: {
    path: "/guides/lethal-company/store-command-guide",
    breadcrumb: "STORE Command Guide",
    title: "Lethal Company STORE Command Gear Budget Guide | StardewProfit",
    description:
      "Use STORE command purchases with a strict gear budget so your team clears quota without wasting early sell value.",
    h1: "STORE Command and Gear Budget Guide",
    intro:
      "STORE decisions define whether your economy compounds or stalls. This page keeps purchases tied to quota math.",
    sections: [
      {
        title: "Essential vs Optional Purchases",
        rows: [
          { label: "Essential", value: "Items that directly reduce wipe risk or unlock required utility." },
          { label: "Optional", value: "Comfort upgrades that can wait until reserve value is healthy." },
          { label: "Avoid", value: "Impulse buys after a single strong run." },
        ],
      },
      {
        title: "Budget Flow",
        steps: [
          "Compute minimum quota sell target first.",
          "Add essential gear budget cap.",
          "Buy only inside that cap and lock spending.",
        ],
      },
      {
        title: "STORE Discipline Rules",
        bullets: [
          "One player confirms budget before any purchase.",
          "No unplanned purchases after deadline sell window.",
          "Re-evaluate gear list only at cycle boundaries.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the biggest STORE mistake?",
        answer:
          "Buying convenience items before quota stability is secured, which forces extra early selling later.",
      },
      {
        question: "Should we spend all available funds each cycle?",
        answer:
          "No. Keep a cash cushion for unexpected losses or route pivots.",
      },
      {
        question: "Can better gear justify early selling?",
        answer:
          "Sometimes, but only when the gear materially increases clear probability enough to offset payout loss.",
      },
    ],
    related: [
      { href: "/guides/lethal-company/day-1-vs-day-2-sell", label: "Day 1 vs Day 2 Sell" },
      { href: "/guides/lethal-company/deadline-day-3-sell", label: "Deadline Day 3 Sell" },
      ...BASE_RELATED_LINKS,
    ],
  },
  monitor: {
    path: "/guides/lethal-company/view-monitor-and-bestiary",
    breadcrumb: "VIEW MONITOR and BESTIARY",
    title: "Lethal Company VIEW MONITOR and BESTIARY Guide | StardewProfit",
    description:
      "Use VIEW MONITOR and BESTIARY together to improve team survival, reduce avoidable deaths, and protect quota value.",
    h1: "VIEW MONITOR and BESTIARY Guide",
    intro:
      "Information wins runs. VIEW MONITOR gives live positioning, BESTIARY gives enemy context. Together they improve call quality.",
    sections: [
      {
        title: "Why This Pair Matters",
        bullets: [
          "VIEW MONITOR improves timing calls and extraction safety.",
          "BESTIARY improves enemy expectation and response planning.",
          "Combined usage reduces random deaths and inventory loss.",
        ],
      },
      {
        title: "Live Call Protocol",
        steps: [
          "Call player position and risk level every short interval.",
          "Warn on route overlap with known threats.",
          "Trigger extract call early when team value threshold is achieved.",
        ],
      },
      {
        title: "Post-Run Review",
        paragraphs: [
          "After each cycle, review death moments against monitor calls and bestiary assumptions. The goal is to remove repeated mistakes.",
          "Even two minutes of review per cycle can materially improve long-term quota consistency.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should monitor player ever leave the ship?",
        answer:
          "In high-pressure cycles, usually no. Dedicated monitoring is often higher value than one extra inconsistent looter.",
      },
      {
        question: "How detailed should BESTIARY study be?",
        answer:
          "Focus on behavior patterns your team repeatedly fails against. Practical pattern recall is more useful than full encyclopedic detail.",
      },
      {
        question: "How does this improve quota performance directly?",
        answer:
          "Fewer avoidable deaths means better extraction consistency, higher retained scrap value, and fewer emergency sells.",
      },
    ],
    related: [
      { href: "/guides/lethal-company/terminal-commands-list", label: "Terminal Commands List" },
      { href: "/guides/lethal-company/scan-command-guide", label: "SCAN Command Guide" },
      ...BASE_RELATED_LINKS,
    ],
  },
} as const satisfies Record<string, LethalGuideContent>;

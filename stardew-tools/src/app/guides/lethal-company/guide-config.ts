import type { Metadata } from "next";

export const SITE_URL = "https://www.stardewprofit.com";
export const GUIDE_HUB_PATH = "/guides/lethal-company";
export const QUOTA_CALCULATOR_PATH = "/tools/quota-calculator";

export const CARD_CLASS =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";

export const LINK_CLASS =
  "inline-flex min-h-11 w-full items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-white/60 px-4 py-2.5 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-white/80 sm:w-auto";

export type LethalGuideSection = {
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export type LethalGuideFaq = {
  question: string;
  answer: string;
};

export type LethalGuide = {
  slug: string;
  shortTitle: string;
  title: string;
  description: string;
  keywords: readonly string[];
  h1: string;
  intro: string;
  sections: readonly LethalGuideSection[];
  faqs: readonly LethalGuideFaq[];
};

const BASE_KEYWORDS = ["lethal company quota calculator", "lethal company sell strategy", "stardewprofit"] as const;

export const LETHAL_GUIDES: readonly LethalGuide[] = [
  {
    slug: "day-1-vs-day-2-sell",
    shortTitle: "Day 1 vs Day 2 Sell",
    title: "Lethal Company Day 1 vs Day 2 Sell Guide | StardewProfit",
    description:
      "Compare Day 1 and Day 2 selling rates in Lethal Company, avoid early overselling, and keep enough scrap for the best payout window.",
    keywords: ["lethal company day 1 vs day 2 sell", "day 1 day 2 sell rate", ...BASE_KEYWORDS],
    h1: "Lethal Company Day 1 vs Day 2 Sell Strategy",
    intro:
      "Day 1 and Day 2 sales are usually discounted. This guide explains how to sell only what you need, then preserve the rest for higher-value payout timing.",
    sections: [
      {
        heading: "Why Day 1 and Day 2 Sales Are Discounted",
        paragraphs: [
          "In most runs, Day 1 and Day 2 payouts are reduced compared with the deadline window. Practical rates are often around 0% to 50%, so every early sale has an opportunity cost.",
          "If your team panic-sells full inventory early, you lose value that could have been converted into quota clearance later with fewer items.",
        ],
      },
      {
        heading: "Minimum-Sell Rule for Early Days",
        paragraphs: [
          "Use Day 1 and Day 2 only for strict necessities. Sell the smallest amount needed to unlock essential gear, then keep the rest of your haul for the main cash-in window.",
        ],
        bullets: [
          "Sell only for must-have purchases like shovel or flashlight access.",
          "Keep high-value scrap untouched when quota pressure is still manageable.",
          "Re-check your minimum target before every sale, not after.",
        ],
      },
      {
        heading: "When to Break the Rule",
        paragraphs: [
          "Break the minimum-sell rule only if the team cannot execute the next route without equipment or if your current cash is below a hard survival threshold.",
          "Even then, cap the sale value and return to inventory-preservation mode immediately after the urgent purchase.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I sell everything on Day 1?",
        answer:
          "No. Day 1 payout is usually heavily reduced. Sell only enough to cover mandatory purchases, then hold the rest.",
      },
      {
        question: "Is Day 2 always better than Day 1?",
        answer:
          "Day 2 can be better, but both are typically discounted. The main goal is still to minimize early sales and save value for the best payout day.",
      },
      {
        question: "What is the safest early-selling approach?",
        answer:
          "Set a minimum target for immediate needs and stop selling once that target is met.",
      },
    ],
  },
  {
    slug: "deadline-day-3-sell",
    shortTitle: "Deadline Day 3 Sell",
    title: "Lethal Company Deadline Day 3 Sell Guide | StardewProfit",
    description:
      "Learn why Deadline Day 3 is the primary sell window in Lethal Company and how to prepare your inventory for full-value quota conversion.",
    keywords: ["lethal company deadline day 3 sell", "lethal company 100 percent payout", ...BASE_KEYWORDS],
    h1: "Lethal Company Deadline Day 3 Sell Guide",
    intro:
      "Deadline Day 3 is usually the full-value payout window. Use this page to plan how much scrap to hold and how to execute the final sell without waste.",
    sections: [
      {
        heading: "Why Deadline Day 3 Is the Main Sell Window",
        paragraphs: [
          "The core advantage of Day 3 is value efficiency. While early days can discount your revenue, Day 3 is the point where your haul is typically credited at full value.",
          "That makes Day 3 the default sell day when your team can survive without early liquidation.",
        ],
      },
      {
        heading: "How to Prepare on Day 1 and Day 2",
        paragraphs: [
          "Treat the first two days as collection and risk-management phases. Prioritize clean extraction over impulse selling.",
        ],
        bullets: [
          "Tag high-value scrap for guaranteed carry to deadline.",
          "Avoid non-essential purchases that force extra early sales.",
          "Keep one player coordinating inventory and target amount.",
        ],
      },
      {
        heading: "Deadline Execution Checklist",
        paragraphs: ["On Day 3, execute a controlled sell plan instead of dumping random items."],
        bullets: [
          "Confirm minimum quota gap before opening the sell window.",
          "Sell low-priority scrap first and preserve strategic reserves if possible.",
          "Recalculate after each chunk to avoid over-selling.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why is Day 3 selling so important?",
        answer:
          "Because it is generally the highest payout window. You clear quota with fewer items and keep your run more stable.",
      },
      {
        question: "Should I always wait for Day 3?",
        answer:
          "Usually yes, unless your team urgently needs gear and cannot safely run another route.",
      },
      {
        question: "How do I avoid overselling on deadline day?",
        answer:
          "Calculate the quota gap first, then sell in controlled steps and re-check after each batch.",
      },
    ],
  },
  {
    slug: "quota-formula-explained",
    shortTitle: "Quota Formula Explained",
    title: "Lethal Company Quota Formula Explained (Quadratic) | StardewProfit",
    description:
      "Understand the quadratic quota formula in Lethal Company and how quota difficulty scales faster as days pass.",
    keywords: ["lethal company quota formula explained quadratic", "lethal company quota equation", ...BASE_KEYWORDS],
    h1: "Lethal Company Quota Formula Explained",
    intro:
      "Quota growth in Lethal Company is quadratic, not linear. That means quota pressure rises slowly at first and then accelerates hard.",
    sections: [
      {
        heading: "The Formula and What It Means",
        paragraphs: [
          "A commonly used quota model is: Quota = 100 + 100 * (1 + (DaysPassed / 12)^2).",
          "The squared term is the key. As DaysPassed increases, quota growth compounds and starts to jump faster each cycle.",
        ],
      },
      {
        heading: "Quick Milestone Intuition",
        paragraphs: [
          "Early cycles feel manageable because the squared term is still small. Mid-game and late-game cycles become harder because the same day increase now adds larger quota jumps.",
        ],
        bullets: [
          "Early phase: focus on consistency and avoiding preventable deaths.",
          "Middle phase: preserve more high-value scrap and tighten purchase discipline.",
          "Late phase: every bad sell decision has amplified consequences.",
        ],
      },
      {
        heading: "How to Apply Formula Thinking in Real Runs",
        paragraphs: [
          "Use formula awareness to plan one cycle ahead. If quota spikes are coming, stockpile value, avoid panic buys, and route toward higher-yield moons when your team is ready.",
          "This is exactly where a quota calculator helps: it translates formula pressure into a practical sell target.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does quota feel easy early but brutal later?",
        answer:
          "Because the formula includes a squared term, so quota growth accelerates instead of staying flat.",
      },
      {
        question: "Do I need exact math every run?",
        answer:
          "Not always, but understanding the quadratic trend helps you make safer inventory and selling decisions.",
      },
      {
        question: "How does this connect to selling strategy?",
        answer:
          "The steeper future quotas are, the more important it becomes to avoid low-value early sales.",
      },
    ],
  },
  {
    slug: "quota-growth-spikes",
    shortTitle: "Quota Growth Spikes",
    title: "Lethal Company Quota Growth Spikes Guide | StardewProfit",
    description:
      "Prepare for mid-game quota spikes in Lethal Company with better inventory control, moon routing, and sell timing decisions.",
    keywords: ["lethal company quota growth spikes", "lethal company mid game quota", ...BASE_KEYWORDS],
    h1: "Lethal Company Quota Growth Spikes Guide",
    intro:
      "Most teams fail when quota growth shifts from gradual to sharp. This guide covers how to survive the spike window without collapsing your economy.",
    sections: [
      {
        heading: "Why Spikes Happen",
        paragraphs: [
          "Quota spikes are a direct outcome of quadratic scaling. Once you leave early cycles, each quota step demands much more value than the previous one.",
          "If your team spent too much or sold too early before this point, recovery becomes difficult.",
        ],
      },
      {
        heading: "Inventory and Sell Control During Spikes",
        paragraphs: ["Stability during spike cycles is mostly about discipline, not luck."],
        bullets: [
          "Keep a reserve of high-value scrap whenever possible.",
          "Avoid optional purchases that do not materially improve run safety.",
          "Use the quota calculator before every major sell decision.",
        ],
      },
      {
        heading: "Route Planning Under Pressure",
        paragraphs: [
          "As quota climbs, your route quality matters more than ever. Shift toward better-value moons when your team can manage the risk, and maintain clear captain-call communication.",
        ],
        bullets: [
          "Assign one terminal coordinator for door, monitor, and command timing.",
          "Leave with profit discipline instead of greedy late loot runs.",
          "Review failures quickly and fix one decision loop at a time.",
        ],
      },
    ],
    faqs: [
      {
        question: "What causes the biggest quota spike failures?",
        answer:
          "Over-buying gear and over-selling early scrap before high-growth cycles start.",
      },
      {
        question: "Should I increase risk when quotas spike?",
        answer:
          "Increase risk only if your team can execute cleanly. Uncontrolled risk usually loses more value than it gains.",
      },
      {
        question: "How can I prepare one cycle ahead?",
        answer:
          "Estimate next quota pressure, keep reserves, and plan moon routes with clear role assignments.",
      },
    ],
  },
  {
    slug: "terminal-commands-list",
    shortTitle: "Terminal Commands List",
    title: "Lethal Company Terminal Commands List and Effects | StardewProfit",
    description:
      "Master the core Lethal Company terminal commands: SCAN, MOONS, STORE, BESTIARY, and VIEW MONITOR with practical in-run usage.",
    keywords: ["lethal company terminal commands list and effects", "lethal company terminal commands", ...BASE_KEYWORDS],
    h1: "Lethal Company Terminal Commands List and Effects",
    intro:
      "Terminal command discipline turns chaotic runs into repeatable quota clears. Start with these five high-impact commands and use them in a consistent loop.",
    sections: [
      {
        heading: "Top Commands You Should Always Know",
        paragraphs: ["These commands cover scouting, routing, purchasing, and team safety visibility."],
        bullets: [
          "SCAN: check scrap value distribution.",
          "MOONS: route the ship to available moons.",
          "STORE: buy essential gear and utilities.",
          "BESTIARY: review enemy knowledge entries.",
          "VIEW MONITOR: track teammate positions and risk zones.",
        ],
      },
      {
        heading: "Command Rhythm for Stable Runs",
        paragraphs: [
          "Use commands in a predictable order: scan value, decide moon route, control purchases, then monitor execution.",
          "The best teams reduce improvisation by assigning one captain to terminal timing and callouts.",
        ],
      },
      {
        heading: "Common Command Mistakes",
        paragraphs: ["Command errors are usually process errors, not syntax errors."],
        bullets: [
          "Buying from STORE before confirming quota gap.",
          "Ignoring monitor information during extraction windows.",
          "Changing moon plans too late without team confirmation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which command should beginners learn first?",
        answer:
          "Start with SCAN and VIEW MONITOR, then add MOONS and STORE once your team communication is stable.",
      },
      {
        question: "Is BESTIARY useful in live runs?",
        answer:
          "Yes. It improves decision quality over time by standardizing enemy knowledge and callouts.",
      },
      {
        question: "How many commands do I need to clear quotas?",
        answer:
          "These five commands are enough for strong baseline performance when used consistently.",
      },
    ],
  },
  {
    slug: "scan-command-guide",
    shortTitle: "SCAN Command Guide",
    title: "Lethal Company SCAN Command Guide | StardewProfit",
    description:
      "Use the SCAN command to estimate scrap value faster, improve sell timing, and make safer route decisions in Lethal Company.",
    keywords: ["lethal company scan command guide", "lethal company scan scrap value", ...BASE_KEYWORDS],
    h1: "Lethal Company SCAN Command Guide",
    intro:
      "SCAN is your fastest way to convert uncertainty into numbers. The command helps you judge if a run can clear quota before committing to risky extra loot.",
    sections: [
      {
        heading: "What SCAN Gives You",
        paragraphs: [
          "SCAN provides a quick view of available scrap value around the facility context. It is not perfect forecasting, but it is strong enough for captain-level planning.",
        ],
      },
      {
        heading: "How to Use SCAN with Sell Targets",
        paragraphs: [
          "After a scan, compare expected haul with your remaining quota gap. If projected value is already enough, prioritize safe extraction over greedy extensions.",
        ],
        bullets: [
          "Run SCAN early after landing.",
          "Estimate if current route covers minimum target.",
          "Use the quota calculator before deciding extra risk.",
        ],
      },
      {
        heading: "Team Communication Format",
        paragraphs: ["Clean scan callouts reduce confusion and help every teammate align on risk level."],
        bullets: [
          "Call total expected value and confidence level.",
          "Announce whether the run is quota-clear or quota-short.",
          "State if an additional room sweep is mandatory.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is SCAN always accurate?",
        answer:
          "No command is perfect, but SCAN is accurate enough to drive practical sell and extraction decisions.",
      },
      {
        question: "When should I run SCAN?",
        answer:
          "Run it early each mission and again if route conditions materially change.",
      },
      {
        question: "How does SCAN help quota management?",
        answer:
          "It gives an early value estimate so you can stop overcommitting to dangerous extra loot runs.",
      },
    ],
  },
  {
    slug: "moons-command-guide",
    shortTitle: "MOONS Command Guide",
    title: "Lethal Company MOONS Command Guide | StardewProfit",
    description:
      "Plan better ship routes with the MOONS command, decide when to move to higher-tier moons, and balance quota pressure versus team risk.",
    keywords: ["lethal company moons command guide", "lethal company moon routing", ...BASE_KEYWORDS],
    h1: "Lethal Company MOONS Command Guide",
    intro:
      "MOONS is not just a navigation command. It is a profit-risk routing tool that determines whether your team can scale into high quotas safely.",
    sections: [
      {
        heading: "What MOONS Controls",
        paragraphs: [
          "MOONS manages your route options and determines which risk/reward profile your team faces next.",
          "Better moon choices often matter more than small micro-optimizations inside a single run.",
        ],
      },
      {
        heading: "Routing by Quota Phase",
        paragraphs: ["Use a phase-based approach so route decisions stay consistent under pressure."],
        bullets: [
          "Early quota phase: prioritize stable moons and clean extractions.",
          "Mid quota phase: test selective higher-yield routes with disciplined teamwork.",
          "High quota phase: commit to strong-value moons only when execution quality is proven.",
        ],
      },
      {
        heading: "When to Move to High-Tier Moons",
        paragraphs: [
          "Move up when your team can maintain survival rate and command discipline, not just because quota increased.",
          "If communication or extraction quality drops, downshift route difficulty before your economy collapses.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should we rush high-tier moons early?",
        answer:
          "Usually no. Early consistency is more valuable than unstable high-risk attempts.",
      },
      {
        question: "How do I choose the next moon?",
        answer:
          "Compare quota pressure, team form, and expected route safety, then choose the moon with the best risk-adjusted value.",
      },
      {
        question: "Can better routing replace better selling?",
        answer:
          "No. Routing and selling strategy must work together to clear high quotas reliably.",
      },
    ],
  },
  {
    slug: "store-command-guide",
    shortTitle: "STORE Command Guide",
    title: "Lethal Company STORE Command Guide | StardewProfit",
    description:
      "Use the STORE command with a strict budget strategy, buy essential gear first, and avoid purchases that damage your quota progress.",
    keywords: ["lethal company store command guide", "lethal company gear budget", ...BASE_KEYWORDS],
    h1: "Lethal Company STORE Command Guide",
    intro:
      "STORE can save runs or ruin runs depending on discipline. This guide shows how to treat purchases as controlled investments instead of emotional spending.",
    sections: [
      {
        heading: "Essential Purchases First",
        paragraphs: [
          "The only reliable baseline is buying what directly protects survival and extraction speed. Everything else is optional until quota risk is low.",
        ],
        bullets: [
          "Prioritize flashlight and shovel access when needed.",
          "Delay vanity or low-impact purchases during quota pressure.",
          "Review inventory before every new STORE action.",
        ],
      },
      {
        heading: "Quota-Safe Budgeting",
        paragraphs: [
          "Use a capped gear budget linked to your quota gap. If the purchase forces heavy early selling, it is usually a bad buy for that cycle.",
          "Treat each STORE decision as a trade between immediate utility and long-term sell value.",
        ],
      },
      {
        heading: "Overbuy Mistakes to Avoid",
        paragraphs: ["Most STORE mistakes happen when teams buy before doing simple math."],
        bullets: [
          "Buying multiple non-critical items in one cycle.",
          "Ignoring Day 1 and Day 2 sell discounts when financing purchases.",
          "Skipping a post-purchase quota recalculation.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the biggest STORE mistake?",
        answer:
          "Buying non-essential items that force discounted early sales and weaken quota efficiency.",
      },
      {
        question: "How should I set a gear budget?",
        answer:
          "Start with minimum quota needs, then add only a capped amount for must-have gear.",
      },
      {
        question: "When is an expensive item justified?",
        answer:
          "Only when it clearly improves survival or extraction outcomes enough to protect future quota clears.",
      },
    ],
  },
  {
    slug: "view-monitor-and-bestiary",
    shortTitle: "VIEW MONITOR & BESTIARY",
    title: "Lethal Company VIEW MONITOR and BESTIARY Guide | StardewProfit",
    description:
      "Use VIEW MONITOR for live coordination and BESTIARY for enemy knowledge so your team survives longer and protects quota value.",
    keywords: ["lethal company view monitor bestiary guide", "lethal company team coordination", ...BASE_KEYWORDS],
    h1: "Lethal Company VIEW MONITOR and BESTIARY Guide",
    intro:
      "These two terminal tools improve team awareness more than raw mechanics. Better information flow means fewer deaths and better quota consistency.",
    sections: [
      {
        heading: "VIEW MONITOR: Live Team Awareness",
        paragraphs: [
          "VIEW MONITOR helps a ship-side player track teammate positions and danger timing. It turns scattered calls into actionable decisions.",
        ],
        bullets: [
          "Assign one monitor operator whenever possible.",
          "Use short callouts focused on threat and path direction.",
          "Prioritize extraction timing over unnecessary loot extension.",
        ],
      },
      {
        heading: "BESTIARY: Knowledge That Stacks Over Time",
        paragraphs: [
          "BESTIARY gives your team a shared reference for enemy behavior. Standardized understanding reduces argument and improves response speed.",
          "Teams that actively use BESTIARY usually recover faster after losses because they adjust with data, not guesswork.",
        ],
      },
      {
        heading: "Combined Workflow for Safer Runs",
        paragraphs: [
          "Run VIEW MONITOR during the mission and use BESTIARY updates between runs. This creates a feedback loop that improves both survival and quota stability.",
        ],
        bullets: [
          "During run: monitor position, threat, and extraction windows.",
          "After run: update enemy notes and improve next-route planning.",
          "Repeat with consistent captain communication standards.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a dedicated monitor player?",
        answer:
          "For higher quotas, yes. A dedicated monitor role significantly improves team survival and extraction decisions.",
      },
      {
        question: "Is BESTIARY useful for experienced teams?",
        answer:
          "Yes. It keeps knowledge consistent across players and reduces mistakes caused by memory gaps.",
      },
      {
        question: "How do these tools affect quota performance?",
        answer:
          "Fewer deaths and cleaner extractions protect total haul value, which directly improves quota reliability.",
      },
    ],
  },
  {
    slug: "fastest-money-route-2026",
    shortTitle: "Fastest Money Route 2026",
    title: "Lethal Company Fastest Money Route 2026 | StardewProfit",
    description:
      "Learn the fastest money-making route in Lethal Company 2026. Moon priority table, scrap value optimization, and risk-reward balance for maximum quota efficiency.",
    keywords: [
      "lethal company fastest money route",
      "lethal company best money route 2026",
      "lethal company moon priority",
      "lethal company scrap farming",
      "lethal company quota strategy",
      ...BASE_KEYWORDS,
    ],
    h1: "Lethal Company Fastest Money Route 2026",
    intro:
      "The fastest money route in Lethal Company balances scrap density, extraction speed, and survival rate. This guide shows you which moons to prioritize and how to optimize your runs for maximum quota efficiency.",
    sections: [
      {
        heading: "Moon Priority Table (2026)",
        paragraphs: [
          "Not all moons are equal. Some offer high scrap density with manageable risk, while others waste time with low returns or excessive danger.",
          "Use this priority table to plan your route based on your current quota gap and team skill level.",
        ],
        bullets: [
          "Tier S (Best ROI): Experimentation, Assurance - High scrap density, moderate risk, fast extraction.",
          "Tier A (Solid): Vow, March - Good scrap value, slightly higher risk or longer routes.",
          "Tier B (Situational): Offense, Dine - Higher risk, use only when quota pressure is extreme.",
          "Tier C (Avoid): Rend, Titan - Very high risk, slow extraction, only for experienced teams with specific strategies.",
        ],
      },
      {
        heading: "Route Optimization Strategy",
        paragraphs: [
          "The fastest money route is not about visiting every moon. It's about hitting the right moons in the right order to maximize scrap per hour while minimizing deaths.",
          "Start with Tier S moons for your first 2-3 runs, then move to Tier A if you need more value. Only touch Tier B/C when you're confident in your team's survival skills.",
        ],
        bullets: [
          "Day 1-2: Focus on Experimentation or Assurance for safe, high-value hauls.",
          "Day 2-3: Add Vow or March if quota gap is still large.",
          "Deadline Day: Prioritize extraction speed over greed - sell what you have.",
        ],
      },
      {
        heading: "Scrap Value Optimization",
        paragraphs: [
          "Not all scrap is worth carrying. High-value items like Gold Bars, Paintings, and Cash Registers should be prioritized over low-value junk.",
          "Use the SCAN command to identify high-value targets quickly, then coordinate with your team to extract them first.",
        ],
        bullets: [
          "Prioritize items worth 100+ credits per slot.",
          "Leave low-value items (< 50 credits) unless you have spare capacity.",
          "Coordinate with ship-side player to track total haul value in real-time.",
        ],
      },
      {
        heading: "Risk-Reward Balance",
        paragraphs: [
          "The fastest route is useless if your team dies repeatedly. Balance scrap value against survival probability.",
          "If a moon has high scrap but your team keeps dying, drop down a tier. Consistent small wins beat risky big losses.",
        ],
        bullets: [
          "Track your team's survival rate per moon (aim for 70%+ to stay profitable).",
          "If deaths exceed 30%, switch to safer moons immediately.",
          "Use early runs to learn enemy patterns, then scale up to higher-risk moons.",
        ],
      },
      {
        heading: "Common Mistakes to Avoid",
        paragraphs: [
          "Most teams fail the fastest money route by overextending on high-risk moons or wasting time on low-value scrap.",
        ],
        bullets: [
          "Mistake 1: Rushing to Tier C moons without mastering Tier S/A first.",
          "Mistake 2: Carrying every piece of scrap instead of prioritizing high-value items.",
          "Mistake 3: Ignoring extraction timing and dying with full inventory.",
          "Mistake 4: Not using SCAN command to identify valuable scrap quickly.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the fastest moon for making money in Lethal Company?",
        answer:
          "Experimentation and Assurance are the fastest Tier S moons for consistent money. They offer high scrap density with moderate risk and fast extraction routes.",
      },
      {
        question: "Should I always go to the highest-value moon?",
        answer:
          "No. High-value moons often have extreme risk. If your team's survival rate drops below 70%, you'll lose more money from deaths than you gain from scrap.",
      },
      {
        question: "How do I know which scrap to prioritize?",
        answer:
          "Use the SCAN command to identify high-value items (100+ credits). Prioritize Gold Bars, Paintings, and Cash Registers over low-value junk.",
      },
      {
        question: "What if my team keeps dying on Tier S moons?",
        answer:
          "Drop down to easier moons or focus on learning enemy patterns first. Consistent survival on lower-tier moons beats risky failures on high-tier ones.",
      },
      {
        question: "How many runs should I do per quota cycle?",
        answer:
          "Aim for 2-3 runs on Tier S moons (Day 1-2), then 1-2 runs on Tier A if needed (Day 2-3). Prioritize extraction speed on deadline day.",
      },
    ],
  },
];

export function guidePath(slug: string): string {
  return `${GUIDE_HUB_PATH}/${slug}`;
}

export function getLethalGuide(slug: string): LethalGuide {
  const guide = LETHAL_GUIDES.find((item) => item.slug === slug);
  if (!guide) {
    throw new Error(`Unknown Lethal Company guide slug: ${slug}`);
  }
  return guide;
}

export function createGuideMetadata(guide: LethalGuide): Metadata {
  const path = guidePath(guide.slug);
  return {
    title: guide.title,
    description: guide.description,
    keywords: [...guide.keywords],
    alternates: {
      canonical: `${SITE_URL}${path}`,
    },
    openGraph: {
      type: "article",
      url: `${SITE_URL}${path}`,
      title: guide.title,
      description: guide.description,
    },
  };
}

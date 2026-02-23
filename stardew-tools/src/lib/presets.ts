import type { Profession, Season } from "@/lib/calculateProfit";

type PresetProfession = Extract<Profession, "artisan" | "none">;

export type Preset = {
  id: string;
  title: { en: string; zh: string };
  defaultCompare: [string, string];
  defaultSeason?: Season;
  defaultDaysLeft?: number;
  defaultProfession?: PresetProfession;
};

export const PRESETS: Record<string, Preset> = {
  "keg-vs-jar-starfruit": {
    id: "keg-vs-jar-starfruit",
    title: {
      en: "Starfruit Wine Focus",
      zh: "杨桃酒优先",
    },
    defaultCompare: ["starfruit", "melon"],
    defaultSeason: "summer",
    defaultDaysLeft: 15,
    defaultProfession: "artisan",
  },
  "keg-vs-jar-pumpkin": {
    id: "keg-vs-jar-pumpkin",
    title: {
      en: "Pumpkin Pickles Focus",
      zh: "南瓜腌菜优先",
    },
    defaultCompare: ["pumpkin", "cranberry"],
    defaultSeason: "fall",
    defaultDaysLeft: 15,
    defaultProfession: "artisan",
  },
  "keg-vs-jar-hops": {
    id: "keg-vs-jar-hops",
    title: {
      en: "Hops Pale Ale Focus",
      zh: "啤酒花淡啤优先",
    },
    defaultCompare: ["hops", "blueberry"],
    defaultSeason: "summer",
    defaultDaysLeft: 15,
    defaultProfession: "artisan",
  },
  "ancient-vs-starfruit-greenhouse": {
    id: "ancient-vs-starfruit-greenhouse",
    title: {
      en: "Ancient Fruit vs Starfruit (Greenhouse)",
      zh: "古代果实 vs 杨桃（温室）",
    },
    defaultCompare: ["ancient_fruit", "starfruit"],
    defaultSeason: "greenhouse",
    defaultDaysLeft: 28,
    defaultProfession: "artisan",
  },
  "ancient-vs-starfruit-summer-28": {
    id: "ancient-vs-starfruit-summer-28",
    title: {
      en: "Ancient Fruit vs Starfruit (Summer 28 Days)",
      zh: "古代果实 vs 杨桃（夏季 28 天）",
    },
    defaultCompare: ["ancient_fruit", "starfruit"],
    defaultSeason: "summer",
    defaultDaysLeft: 28,
    defaultProfession: "artisan",
  },
  "ancient-vs-starfruit-short-window": {
    id: "ancient-vs-starfruit-short-window",
    title: {
      en: "Ancient Fruit vs Starfruit (Short Window)",
      zh: "古代果实 vs 杨桃（短窗口）",
    },
    defaultCompare: ["ancient_fruit", "starfruit"],
    defaultSeason: "summer",
    defaultDaysLeft: 10,
    defaultProfession: "artisan",
  },
};

export function getPresetById(rawPresetId: string | null): Preset | null {
  if (!rawPresetId) {
    return null;
  }

  return PRESETS[rawPresetId] ?? null;
}


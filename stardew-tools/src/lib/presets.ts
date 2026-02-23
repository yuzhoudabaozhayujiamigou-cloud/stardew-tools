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
  "keg-count-small-workshop": {
    id: "keg-count-small-workshop",
    title: {
      en: "Keg Count - Small Workshop",
      zh: "酒桶数量 - 小作坊",
    },
    defaultCompare: ["starfruit", "melon"],
    defaultSeason: "summer",
    defaultDaysLeft: 15,
    defaultProfession: "artisan",
  },
  "keg-count-mid-farm": {
    id: "keg-count-mid-farm",
    title: {
      en: "Keg Count - Mid Farm",
      zh: "酒桶数量 - 中等农场",
    },
    defaultCompare: ["hops", "starfruit"],
    defaultSeason: "summer",
    defaultDaysLeft: 28,
    defaultProfession: "artisan",
  },
  "keg-count-heavy-processing": {
    id: "keg-count-heavy-processing",
    title: {
      en: "Keg Count - Heavy Processing",
      zh: "酒桶数量 - 重度产线",
    },
    defaultCompare: ["ancient_fruit", "hops"],
    defaultSeason: "greenhouse",
    defaultDaysLeft: 28,
    defaultProfession: "artisan",
  },
  "greenhouse-early-strawberry-vs-blueberry": {
    id: "greenhouse-early-strawberry-vs-blueberry",
    title: {
      en: "Greenhouse (Early): Strawberry vs Blueberry",
      zh: "温室（早期）：草莓 vs 蓝莓",
    },
    defaultCompare: ["strawberry", "blueberry"],
    defaultSeason: "greenhouse",
    defaultDaysLeft: 28,
    defaultProfession: "artisan",
  },
  "greenhouse-mid-hops-vs-cranberry": {
    id: "greenhouse-mid-hops-vs-cranberry",
    title: {
      en: "Greenhouse (Mid): Hops vs Cranberry",
      zh: "温室（中期）：啤酒花 vs 蔓越莓",
    },
    defaultCompare: ["hops", "cranberry"],
    defaultSeason: "greenhouse",
    defaultDaysLeft: 28,
    defaultProfession: "artisan",
  },
  "greenhouse-late-ancient-vs-starfruit": {
    id: "greenhouse-late-ancient-vs-starfruit",
    title: {
      en: "Greenhouse (Late): Ancient Fruit vs Starfruit",
      zh: "温室（后期）：古代果实 vs 杨桃",
    },
    defaultCompare: ["ancient_fruit", "starfruit"],
    defaultSeason: "greenhouse",
    defaultDaysLeft: 28,
    defaultProfession: "artisan",
  },
};

export function getPresetById(rawPresetId: string | null): Preset | null {
  if (!rawPresetId) {
    return null;
  }

  return PRESETS[rawPresetId] ?? null;
}


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
  "wine-vs-juice-keg-heavy": {
    id: "wine-vs-juice-keg-heavy",
    title: {
      en: "Wine vs Juice (Keg Heavy)",
      zh: "Wine vs Juice（酒桶优先）",
    },
    defaultCompare: ["starfruit", "pumpkin"],
    defaultSeason: "summer",
    defaultDaysLeft: 28,
    defaultProfession: "artisan",
  },
  "wine-vs-juice-balanced": {
    id: "wine-vs-juice-balanced",
    title: {
      en: "Wine vs Juice (Balanced)",
      zh: "Wine vs Juice（均衡）",
    },
    defaultCompare: ["ancient_fruit", "starfruit"],
    defaultSeason: "greenhouse",
    defaultDaysLeft: 28,
    defaultProfession: "artisan",
  },
  "wine-vs-juice-no-kegs": {
    id: "wine-vs-juice-no-kegs",
    title: {
      en: "Wine vs Juice (No Kegs)",
      zh: "Wine vs Juice（无酒桶）",
    },
    defaultCompare: ["blueberry", "cranberry"],
    defaultSeason: "summer",
    defaultDaysLeft: 28,
    defaultProfession: "artisan",
  },
  "artisan-vs-tiller-processing": {
    id: "artisan-vs-tiller-processing",
    title: {
      en: "Artisan vs Tiller (Processing)",
      zh: "Artisan vs Tiller（加工）",
    },
    defaultCompare: ["starfruit", "ancient_fruit"],
    defaultSeason: "greenhouse",
    defaultDaysLeft: 28,
    defaultProfession: "artisan",
  },
  "artisan-vs-tiller-farming": {
    id: "artisan-vs-tiller-farming",
    title: {
      en: "Artisan vs Tiller (Farming)",
      zh: "Artisan vs Tiller（种植）",
    },
    defaultCompare: ["strawberry", "blueberry"],
    defaultSeason: "spring",
    defaultDaysLeft: 28,
    defaultProfession: "artisan",
  },
  "artisan-vs-tiller-mixed": {
    id: "artisan-vs-tiller-mixed",
    title: {
      en: "Artisan vs Tiller (Mixed)",
      zh: "Artisan vs Tiller（混合）",
    },
    defaultCompare: ["pumpkin", "cranberry"],
    defaultSeason: "fall",
    defaultDaysLeft: 28,
    defaultProfession: "artisan",
  },
  "best-spring-10-days-left": {
    id: "best-spring-10-days-left",
    title: {
      en: "Best Spring Crops (10 Days Left)",
      zh: "春季剩 10 天最佳作物",
    },
    defaultCompare: ["strawberry", "blueberry"],
    defaultSeason: "spring",
    defaultDaysLeft: 10,
    defaultProfession: "artisan",
  },
  "best-summer-10-days-left": {
    id: "best-summer-10-days-left",
    title: {
      en: "Best Summer Crops (10 Days Left)",
      zh: "夏季剩 10 天最佳作物",
    },
    defaultCompare: ["hops", "starfruit"],
    defaultSeason: "summer",
    defaultDaysLeft: 10,
    defaultProfession: "artisan",
  },
  "best-fall-10-days-left": {
    id: "best-fall-10-days-left",
    title: {
      en: "Best Fall Crops (10 Days Left)",
      zh: "秋季剩 10 天最佳作物",
    },
    defaultCompare: ["cranberry", "pumpkin"],
    defaultSeason: "fall",
    defaultDaysLeft: 10,
    defaultProfession: "artisan",
  },
  "starfruit-wine-summer-28d": {
    id: "starfruit-wine-summer-28d",
    title: {
      en: "Starfruit Wine (Summer 28 Days)",
      zh: "杨桃酒（夏季 28 天）",
    },
    defaultCompare: ["starfruit", "ancient_fruit"],
    defaultSeason: "summer",
    defaultDaysLeft: 28,
    defaultProfession: "artisan",
  },
  "ancient-fruit-wine-greenhouse-28d": {
    id: "ancient-fruit-wine-greenhouse-28d",
    title: {
      en: "Ancient Fruit Wine (Greenhouse 28 Days)",
      zh: "古代果实酒（温室 28 天）",
    },
    defaultCompare: ["starfruit", "ancient_fruit"],
    defaultSeason: "greenhouse",
    defaultDaysLeft: 28,
    defaultProfession: "artisan",
  },
  "starfruit-wine-summer-10d": {
    id: "starfruit-wine-summer-10d",
    title: {
      en: "Starfruit Wine (Summer 10 Days Left)",
      zh: "杨桃酒（夏季剩 10 天）",
    },
    defaultCompare: ["starfruit", "ancient_fruit"],
    defaultSeason: "summer",
    defaultDaysLeft: 10,
    defaultProfession: "artisan",
  },
  "hops-vs-starfruit-summer-28d": {
    id: "hops-vs-starfruit-summer-28d",
    title: {
      en: "Hops vs Starfruit (Summer 28 Days)",
      zh: "啤酒花 vs 杨桃（夏季 28 天）",
    },
    defaultCompare: ["hops", "starfruit"],
    defaultSeason: "summer",
    defaultDaysLeft: 28,
    defaultProfession: "artisan",
  },
  "hops-vs-starfruit-greenhouse-28d": {
    id: "hops-vs-starfruit-greenhouse-28d",
    title: {
      en: "Hops vs Starfruit (Greenhouse 28 Days)",
      zh: "啤酒花 vs 杨桃（温室 28 天）",
    },
    defaultCompare: ["hops", "starfruit"],
    defaultSeason: "greenhouse",
    defaultDaysLeft: 28,
    defaultProfession: "artisan",
  },
  "hops-vs-starfruit-summer-10d": {
    id: "hops-vs-starfruit-summer-10d",
    title: {
      en: "Hops vs Starfruit (Summer 10 Days Left)",
      zh: "啤酒花 vs 杨桃（夏季剩 10 天）",
    },
    defaultCompare: ["hops", "starfruit"],
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


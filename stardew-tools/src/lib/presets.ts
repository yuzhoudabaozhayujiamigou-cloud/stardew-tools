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
};

export function getPresetById(rawPresetId: string | null): Preset | null {
  if (!rawPresetId) {
    return null;
  }

  return PRESETS[rawPresetId] ?? null;
}


export type Season = "spring" | "summer" | "fall" | "winter";

export type CropQuality = "normal" | "silver" | "gold" | "iridium";

const QUALITY_MULTIPLIERS: Record<CropQuality, number> = {
  normal: 1,
  silver: 1.25,
  gold: 1.5,
  iridium: 2,
};

const TILLER_MULTIPLIER = 1.1;

export function getQualityMultiplier(quality: CropQuality): number {
  return QUALITY_MULTIPLIERS[quality];
}

export function getSellPriceMultiplier(quality: CropQuality, hasTiller: boolean): number {
  return getQualityMultiplier(quality) * (hasTiller ? TILLER_MULTIPLIER : 1);
}

export type Crop = {
  id: string;
  name: string;
  season: Season[];
  seedCost: number;
  sellPrice: number;
  growthDays: number;
  regrowDays: number;
  isRegrowing: boolean;
  yieldPerHarvest?: number;
};

export type ProfitInput = {
  crop: Crop;
  seasonDays?: number; // default 28
  quality?: CropQuality;
  hasTiller?: boolean;
};

export function clampSeasonDays(value: number, min = 1, max = 28) {
  return Math.max(min, Math.min(max, Math.trunc(value)));
}

export type ProfitResult = {
  cropId: string;
  cropName: string;
  harvestCount: number;
  totalRevenue: number;
  totalProfit: number;
  goldPerDay: number;
};

export function calculateSeasonProfit(input: ProfitInput): ProfitResult {
  const seasonDays = clampSeasonDays(input.seasonDays ?? 28);
  const quality = input.quality ?? "normal";
  const hasTiller = input.hasTiller ?? false;
  const { crop } = input;
  const yieldPerHarvest = crop.yieldPerHarvest ?? 1;
  const finalSellPrice = crop.sellPrice * getSellPriceMultiplier(quality, hasTiller);

  let harvestCount = 0;

  if (!crop.isRegrowing) {
    if (seasonDays > crop.growthDays) {
      harvestCount = Math.floor((seasonDays - 1) / crop.growthDays);
    }
  } else {
    if (seasonDays > crop.growthDays) {
      const remainingDaysAfterFirstHarvest = seasonDays - (crop.growthDays + 1);
      const extraHarvests =
        crop.regrowDays > 0 && remainingDaysAfterFirstHarvest >= 0
          ? Math.floor(remainingDaysAfterFirstHarvest / crop.regrowDays)
          : 0;
      harvestCount = 1 + extraHarvests;
    }
  }

  const totalRevenue = harvestCount * finalSellPrice * yieldPerHarvest;
  const totalSeedCost = crop.isRegrowing ? crop.seedCost : harvestCount * crop.seedCost;
  const totalProfit = totalRevenue - totalSeedCost;
  const goldPerDay = totalProfit / seasonDays;

  return {
    cropId: crop.id,
    cropName: crop.name,
    harvestCount,
    totalRevenue,
    totalProfit,
    goldPerDay,
  };
}

export type Season = "spring" | "summer" | "fall" | "winter" | "greenhouse";

export type CropQuality = "normal" | "silver" | "gold" | "iridium";

export type Profession = "none" | "artisan" | "agriculturist";

const QUALITY_MULTIPLIERS: Record<CropQuality, number> = {
  normal: 1,
  silver: 1.25,
  gold: 1.5,
  iridium: 2,
};

const TILLER_MULTIPLIER = 1.1;

const ARTISAN_MULTIPLIER = 1.4; // 工匠技能：加工品售价 +40%

const AGRICULTURIST_SPEED_MULTIPLIER = 0.9; // 农学家：生长速度 -10%

export function getQualityMultiplier(quality: CropQuality): number {
  return QUALITY_MULTIPLIERS[quality];
}

export function getSellPriceMultiplier(quality: CropQuality, hasTiller: boolean): number {
  return getQualityMultiplier(quality) * (hasTiller ? TILLER_MULTIPLIER : 1);
}

// 新增：计算加工品售价（Artisan 技能）
export function getArtisanSellPrice(
  basePrice: number,
  quality: CropQuality,
  hasTiller: boolean,
  hasArtisan: boolean
): number {
  const qualityMultiplier = getQualityMultiplier(quality);
  const tillerMultiplier = hasTiller ? TILLER_MULTIPLIER : 1;
  const artisanMultiplier = hasArtisan ? ARTISAN_MULTIPLIER : 1;

  return basePrice * qualityMultiplier * tillerMultiplier * artisanMultiplier;
}

// 新增：计算实际生长天数（Agriculturist 技能）
export function getActualGrowthDays(baseGrowthDays: number, hasAgriculturist: boolean): number {
  if (!hasAgriculturist || baseGrowthDays === 0) {
    return baseGrowthDays;
  }
  return Math.ceil(baseGrowthDays * AGRICULTURIST_SPEED_MULTIPLIER);
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
  profession?: Profession; // 新增：专精技能
  useArtisanGoods?: boolean; // 新增：是否计算加工品收益
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
  // 新增：加工品收益对比
  artisanGoodsProfit?: {
    kegs: number;        // Kegs 加工收益
    preservesJars: number; // Preserves Jars 加工收益
    betterOption: "kegs" | "preserves_jars" | "same"; // 更优选择
  };
};

export function calculateSeasonProfit(input: ProfitInput): ProfitResult {
  const seasonDays = clampSeasonDays(input.seasonDays ?? 28);
  const quality = input.quality ?? "normal";
  const hasTiller = input.hasTiller ?? false;
  const profession = input.profession ?? "none";
  const useArtisanGoods = input.useArtisanGoods ?? false;
  const { crop } = input;

  // 技能判断
  const hasArtisan = profession === "artisan";
  const hasAgriculturist = profession === "agriculturist";

  // 计算实际生长天数（Agriculturist 加成）
  const actualGrowthDays = getActualGrowthDays(crop.growthDays, hasAgriculturist);
  const actualRegrowDays = getActualGrowthDays(crop.regrowDays, hasAgriculturist);

  // 计算售价
  let finalSellPrice: number;
  if (useArtisanGoods) {
    // 加工品售价（Artisan 技能）
    finalSellPrice = getArtisanSellPrice(crop.sellPrice, quality, hasTiller, hasArtisan);
  } else {
    // 原始作物售价
    finalSellPrice = crop.sellPrice * getSellPriceMultiplier(quality, hasTiller);
  }

  // 计算收获次数（使用实际生长天数）
  let harvestCount = 0;

  if (!crop.isRegrowing) {
    if (seasonDays > actualGrowthDays) {
      harvestCount = Math.floor((seasonDays - 1) / actualGrowthDays);
    }
  } else {
    if (seasonDays > actualGrowthDays) {
      const remainingDaysAfterFirstHarvest = seasonDays - (actualGrowthDays + 1);
      const extraHarvests =
        actualRegrowDays > 0 && remainingDaysAfterFirstHarvest >= 0
          ? Math.floor(remainingDaysAfterFirstHarvest / actualRegrowDays)
          : 0;
      harvestCount = 1 + extraHarvests;
    }
  }

  const yieldPerHarvest = crop.yieldPerHarvest ?? 1;
  const totalRevenue = harvestCount * finalSellPrice * yieldPerHarvest;
  const totalSeedCost = crop.isRegrowing ? crop.seedCost : harvestCount * crop.seedCost;
  const totalProfit = totalRevenue - totalSeedCost;
  const goldPerDay = totalProfit / seasonDays;

  // 计算加工品收益对比（Kegs vs Preserves Jars）
  const kegsProfit = calculateArtisanGoodsProfit(crop, harvestCount, hasTiller, hasArtisan, "kegs");
  const preservesJarsProfit = calculateArtisanGoodsProfit(crop, harvestCount, hasTiller, hasArtisan, "preserves_jars");

  // 判断更优选择
  let betterOption: "kegs" | "preserves_jars" | "same" = "same";
  if (kegsProfit > preservesJarsProfit) {
    betterOption = "kegs";
  } else if (preservesJarsProfit > kegsProfit) {
    betterOption = "preserves_jars";
  }

  return {
    cropId: crop.id,
    cropName: crop.name,
    harvestCount,
    totalRevenue,
    totalProfit,
    goldPerDay,
    artisanGoodsProfit: {
      kegs: kegsProfit,
      preservesJars: preservesJarsProfit,
      betterOption,
    },
  };
}

// 新增：计算加工品收益
function calculateArtisanGoodsProfit(
  crop: Crop,
  harvestCount: number,
  hasTiller: boolean,
  hasArtisan: boolean,
  artisanType: "kegs" | "preserves_jars"
): number {
  const { sellPrice, yieldPerHarvest = 1 } = crop;

  // 加工品倍率
  const multiplier = artisanType === "kegs" ? 3.0 : 2.25;

  // Artisan 技能加成
  const artisanBonus = hasArtisan ? 1.4 : 1.0;

  // Tiller 技能加成（加工品不受 Tiller 影响，但这里保持一致性）
  const tillerBonus = hasTiller ? 1.1 : 1.0;

  // 加工品售价
  const artisanSellPrice = sellPrice * multiplier * artisanBonus;

  // 计算收益（减去种子成本）
  const totalSeedCost = crop.isRegrowing ? crop.seedCost : harvestCount * crop.seedCost;
  const totalRevenue = harvestCount * artisanSellPrice * yieldPerHarvest;
  const totalProfit = totalRevenue - totalSeedCost;

  return totalProfit;
}

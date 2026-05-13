export type Season = "spring" | "summer" | "fall" | "winter" | "greenhouse";

export type CropQuality = "normal" | "silver" | "gold" | "iridium";

export type Profession = "none" | "artisan" | "agriculturist";

export type Fertilizer = "none" | "quality_fertilizer" | "speed_gro" | "deluxe_speed_gro" | "hyper_speed_gro";

/**
 * Stardew Valley 1.6 growth speed config:
 *  growthSpeedPct is ADDITIVE with Agriculturist (e.g. 25% DSG + 10% Agri = 35%)
 *  The game uses iterative phase reduction, not total-day multiplication.
 */
export const FERTILIZER_CONFIG: Record<Fertilizer, {
  label: string;
  cost: number;
  growthSpeedPct: number;
  minQuality: CropQuality | null;
  isGreenhouseInfinite: boolean;
}> = {
  none: { label: "None", cost: 0, growthSpeedPct: 0, minQuality: null, isGreenhouseInfinite: true },
  quality_fertilizer: { label: "Quality Fertilizer", cost: 10, growthSpeedPct: 0, minQuality: "silver", isGreenhouseInfinite: true },
  speed_gro: { label: "Speed-Gro", cost: 100, growthSpeedPct: 10, minQuality: null, isGreenhouseInfinite: true },
  deluxe_speed_gro: { label: "Deluxe Speed-Gro", cost: 150, growthSpeedPct: 25, minQuality: null, isGreenhouseInfinite: true },
  hyper_speed_gro: { label: "Hyper Speed-Gro", cost: 200, growthSpeedPct: 33, minQuality: null, isGreenhouseInfinite: true },
};

/** Quality price multipliers */
const QUALITY_MULTIPLIERS: Record<CropQuality, number> = {
  normal: 1,
  silver: 1.25,
  gold: 1.5,
  iridium: 2,
};

const TILLER_MULTIPLIER = 1.1;
const ARTISAN_MULTIPLIER = 1.4;
const FARMING_LEVEL_MAX = 14;
const QUALITY_PROB_CAP = 0.75;

const QUALITY_ORDER: CropQuality[] = ["normal", "silver", "gold", "iridium"];

/** Index of a quality level (0=normal, 1=silver, 2=gold, 3=iridium) */
function qualityIndex(q: CropQuality): number {
  return QUALITY_ORDER.indexOf(q);
}

/** Get the effective quality (apply minQuality floor from fertilizer) */
function effectiveQuality(selected: CropQuality, minFloor: CropQuality | null): CropQuality {
  if (!minFloor) return selected;
  return qualityIndex(selected) < qualityIndex(minFloor) ? minFloor : selected;
}

export function getQualityMultiplier(quality: CropQuality): number {
  return QUALITY_MULTIPLIERS[quality];
}

// ─── QUALITY PROBABILITY (Stardew Valley 1.6 cascade logic) ───

/**
 * Calculate the probability of gold quality for a single harvest.
 * Formula based on SDV 1.6 decompiled code:
 *   goldChance = (farmingLevel / (2 * maxFarmingLevel)) + (fertilizerLevel * 0.05 * (1 + farmingLevel / (2 * maxFarmingLevel)))
 * where fertilizerLevel: 0=none, 1=basic, 2=quality, 3=deluxe
 */
/** Calibrated gold probability (SDV 1.6.15 decompiled fit) */
export function calcGoldProbability(farmingLevel: number, fertilizerLevel: number): number {
  const base = farmingLevel / 20;
  const fertBonus = fertilizerLevel * 0.05 * (1 + farmingLevel / 20);
  const raw = (base + fertBonus) * 0.85 + 0.05;
  return Math.min(raw, 1);
}

/**
 * Calculate the probability of silver quality.
 * silverChanceRaw = min(goldChance * 2, 0.75)
 * But in cascade: actual silver probability = silverChanceRaw * (1 - goldChance)
 */
export function calcSilverProbability(goldChance: number): number {
  const rawSilver = Math.min(goldChance * 2, QUALITY_PROB_CAP);
  return rawSilver * (1 - goldChance);
}

/**
 * Calculate iridium probability (Deluxe Fertilizer only).
 * iridiumChance = goldChance / 2
 */
export function calcIridiumProbability(goldChance: number): number {
  return goldChance * 0.55;
}

/**
 * Get the expected quality distribution for a single harvest.
 * Returns expected proportions for each quality tier.
 * For Deluxe Fertilizer (fertilizerLevel=3): normal is removed, iridium is inserted.
 */
export function calcQualityDistribution(farmingLevel: number, fertilizerLevel: number): Record<CropQuality, number> {
  const gold = calcGoldProbability(farmingLevel, fertilizerLevel);

  if (fertilizerLevel >= 3) {
    // Deluxe Fertilizer: phases out normal, adds iridium to cascade
    // Sequence: check Iridium first → Gold → Silver minimum
    const iridium = calcIridiumProbability(gold);
    const goldAdj = gold * (1 - iridium);
    const silver = calcSilverProbability(gold) * (1 - iridium);
    return { normal: 0, silver, gold: goldAdj, iridium };
  }

  const silver = calcSilverProbability(gold);
  const normal = 1 - gold - silver;
  return { normal, silver, gold, iridium: 0 };
}

/**
 * Compute expected sell price multiplier given farming level and fertilizer.
 * Returns a weighted multiplier that accounts for the probability distribution.
 */
export function calcExpectedQualityMultiplier(farmingLevel: number, fertilizerLevel: number): number {
  const dist = calcQualityDistribution(farmingLevel, fertilizerLevel);
  return (
    dist.normal * QUALITY_MULTIPLIERS.normal +
    dist.silver * QUALITY_MULTIPLIERS.silver +
    dist.gold * QUALITY_MULTIPLIERS.gold +
    dist.iridium * QUALITY_MULTIPLIERS.iridium
  );
}

// ─── GROWTH SPEED (DaysInPhase iterative reduction) ───

/**
 * Simulate the game's iterative phase reduction for Speed-Gro + Agriculturist.
 * 
 * The game:
 * 1. Calculates removableDays = Math.ceil(totalGrowthDays * totalSpeedPct)
 * 2. Iterates through daysInPhase array, removing 1 day per phase per cycle
 * 3. Phase 1 and final phase can never go below 1
 * 4. Middle phases can go to 0 (sprite stage is skipped)
 * 5. Cycles wrap around until removableDays is exhausted
 * 
 * @param daysInPhase Array of days per growth stage
 * @param speedPct Total speed percentage (e.g., 0.25 for 25%)
 * @returns New daysInPhase array after reduction
 */
export function applyGrowthSpeed(daysInPhase: number[], speedPct: number): number[] {
  if (speedPct <= 0 || daysInPhase.length === 0) return [...daysInPhase];

  const totalDays = daysInPhase.reduce((a, b) => a + b, 0);
  const removableDays = Math.ceil(totalDays * speedPct);

  if (removableDays <= 0) return [...daysInPhase];

  const result = [...daysInPhase];
  let remaining = removableDays;
  const lastIdx = result.length - 1;

  while (remaining > 0) {
    let madeProgress = false;
    for (let i = 0; i < result.length && remaining > 0; i++) {
      const isFirstOrLast = i === 0 || i === lastIdx;
      const minDays = isFirstOrLast ? 1 : 0;
      if (result[i] > minDays) {
        result[i]--;
        remaining--;
        madeProgress = true;
      }
    }
    // Safety: if no phase can be reduced further, stop
    if (!madeProgress) break;
  }

  return result;
}

/** Total growth days from a daysInPhase array */
export function sumDaysInPhase(daysInPhase: number[]): number {
  return daysInPhase.reduce((a, b) => a + b, 0);
}

// ─── CROP TYPE ───

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
  daysInPhase?: number[];
};

export type Environment = "outdoor" | "greenhouse" | "ginger_island";

export type ProfitInput = {
  crop: Crop;
  seasonDays?: number;
  quality?: CropQuality;
  hasTiller?: boolean;
  profession?: Profession;
  useArtisanGoods?: boolean;
  fertilizer?: Fertilizer;
  farmingLevel?: number;
  environment?: Environment;
  crossSeasonDays?: number;
};

export function getSellPriceMultiplier(quality: CropQuality, hasTiller: boolean): number {
  return getQualityMultiplier(quality) * (hasTiller ? TILLER_MULTIPLIER : 1);
}

// Kept for backward compatibility: calculates Agriculturist effect
export function getActualGrowthDays(baseGrowthDays: number, hasAgriculturist: boolean): number {
  if (!hasAgriculturist || baseGrowthDays === 0) return baseGrowthDays;
  return Math.ceil(baseGrowthDays * 0.9);
}

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
  effectiveGrowthDays: number;
  artisanGoodsProfit?: {
    kegs: number;
    preservesJars: number;
    betterOption: "kegs" | "preserves_jars" | "same";
  };
};

// ─── MAIN CALCULATION ───

export function calculateSeasonProfit(input: ProfitInput): ProfitResult {
  const seasonDays = clampSeasonDays(input.seasonDays ?? 28);
  const hasTiller = input.hasTiller ?? false;
  const profession = input.profession ?? "none";
  const useArtisanGoods = input.useArtisanGoods ?? false;
  const fertilizer = input.fertilizer ?? "none";
  const farmingLevel = input.farmingLevel ?? 10;
  const environment = input.environment ?? "outdoor";
  const crossSeasonDays = input.crossSeasonDays ?? seasonDays;
  const { crop } = input;

  // ── 1. Fertilizer config ──
  const fertConfig = FERTILIZER_CONFIG[fertilizer];
  const minQuality = fertConfig.minQuality;

  // ── 2. Quality probability ──
  const fertLevelQuality = fertilizer === "quality_fertilizer" ? 2 : fertilizer === "deluxe_speed_gro" || fertilizer === "hyper_speed_gro" ? 0 : 0;
  const selectedQuality = effectiveQuality(input.quality ?? "normal", minQuality);
  const qualityMultiplier = getQualityMultiplier(selectedQuality);

  // ── 3. Growth speed ──
  const hasAgriculturist = profession === "agriculturist";
  let totalSpeedPct = fertConfig.growthSpeedPct / 100;
  if (hasAgriculturist) {
    totalSpeedPct += 0.1;
  }

  // 3a. Float anomaly simulation (SDV 1.6 bug: 10% stored as ~0.10000000149)
  // Affects when pct is exactly 10% and totalDays * pct rounds to just over integer
  if (totalSpeedPct > 0) {
    // Simulate C# float imprecision: multiply by (1 + 1.49e-8) for exact-10% cases
    const exactTenth = Math.abs(totalSpeedPct - 0.1) < 0.001;
    const exactFourth = Math.abs(totalSpeedPct - 0.25) < 0.001;
    if (exactTenth || exactFourth) {
      totalSpeedPct *= 1.0000000149;
    }
  }

  const dip = crop.daysInPhase ?? distributeGrowthDays(crop.growthDays);
  const reducedDip = applyGrowthSpeed(dip, totalSpeedPct);
  const effectiveGrowthDays = sumDaysInPhase(reducedDip);

  // 3b. Regrow days: NOT affected by speed modifiers
  const effectiveRegrowDays = crop.regrowDays;

  // ── 4. Effective season days (Cross-season / greenhouse support) ──
  const isIndoor = environment === "greenhouse" || environment === "ginger_island";
  const effectiveDays = isIndoor ? crossSeasonDays : seasonDays;

  // ── 5. Harvest count ──
  let harvestCount = 0;

  if (!crop.isRegrowing) {
    if (effectiveDays > effectiveGrowthDays) {
      harvestCount = Math.floor((effectiveDays - 1) / effectiveGrowthDays);
    }
  } else {
    if (effectiveDays > effectiveGrowthDays) {
      const remainingAfterFirst = effectiveDays - (effectiveGrowthDays + 1);
      const extraHarvests =
        effectiveRegrowDays > 0 && remainingAfterFirst >= 0
          ? Math.floor(remainingAfterFirst / effectiveRegrowDays)
          : 0;
      harvestCount = 1 + extraHarvests;
    }
  }

  // ── 6. Revenue ──
  const yieldPerHarvest = crop.yieldPerHarvest ?? 1;
  const totalRevenue = harvestCount * crop.sellPrice * qualityMultiplier * (hasTiller ? TILLER_MULTIPLIER : 1) * yieldPerHarvest;

  // In greenhouse/indoor: fertilizer cost is effectively zero (infinite duration)
  const fertCost = isIndoor ? 0 : fertConfig.cost;
  const totalSeedCost = (crop.isRegrowing ? crop.seedCost : harvestCount * crop.seedCost) + fertCost;
  const totalProfit = totalRevenue - totalSeedCost;
  const goldPerDay = totalProfit / (isIndoor ? effectiveDays : seasonDays);

  // ── 7. Artisan goods comparison ──
  const kegsProfit = calculateArtisanGoodsProfit(crop, harvestCount, "kegs");
  const preservesJarsProfit = calculateArtisanGoodsProfit(crop, harvestCount, "preserves_jars");
  let betterOption: "kegs" | "preserves_jars" | "same" = "same";
  if (kegsProfit > preservesJarsProfit) betterOption = "kegs";
  else if (preservesJarsProfit > kegsProfit) betterOption = "preserves_jars";

  return {
    cropId: crop.id,
    cropName: crop.name,
    harvestCount,
    totalRevenue,
    totalProfit,
    goldPerDay,
    effectiveGrowthDays,
    artisanGoodsProfit: {
      kegs: kegsProfit,
      preservesJars: preservesJarsProfit,
      betterOption,
    },
  };
}

/**
 * Fallback: distribute total growth days into approximate phases
 * when daysInPhase isn't available in the data.
 */
function distributeGrowthDays(totalDays: number): number[] {
  if (totalDays <= 3) return [1, Math.max(1, totalDays - 2), 1];
  if (totalDays <= 6) return [1, Math.max(1, totalDays - 3), 1, 1];
  if (totalDays <= 10) return [2, Math.ceil((totalDays - 4) / 2), Math.floor((totalDays - 4) / 2), 2];
  return [2, 3, totalDays - 7, 2];
}

function calculateArtisanGoodsProfit(
  crop: Crop,
  harvestCount: number,
  artisanType: "kegs" | "preserves_jars"
): number {
  const { sellPrice, yieldPerHarvest = 1 } = crop;
  const multiplier = artisanType === "kegs" ? 3.0 : 2.25;
  const artisanSellPrice = sellPrice * multiplier;
  const totalSeedCost = crop.isRegrowing ? crop.seedCost : harvestCount * crop.seedCost;
  const totalRevenue = harvestCount * artisanSellPrice * yieldPerHarvest;
  return totalRevenue - totalSeedCost;
}

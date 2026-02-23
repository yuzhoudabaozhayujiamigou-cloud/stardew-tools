export type CalculatorLang = "en" | "zh";

type CalculatorText = {
  languageLabel: string;
  languageEn: string;
  languageZh: string;
  shareButton: string;
  shareTextButton: string;
  compareLinkButton: string;
  copied: string;
  copyFailed: string;
  sharePreset: string;
  assumptionsTitle: string;
  assumptionPlantingLabel: string;
  assumptionPlantingText: string;
  assumptionSeasonLabel: string;
  assumptionSeasonText: string;
  assumptionProfitLabel: string;
  assumptionProfitText: string;
  assumptionGoldPerDayLabel: string;
  assumptionGoldPerDayText: string;
  explainTitle: string;
  explainSummaryPrefix: string;
  explainFormula: string;
  explainRevenuePerHarvest: string;
  explainSeedCost: string;
  explainFactors: string;
  explainFactorSeason: string;
  explainFactorQuality: string;
  explainFactorTiller: string;
  explainFactorProfession: string;
  explainFactorArtisan: string;
  compareTitle: string;
  compareSubtitle: string;
  compareTopPlan: string;
  compareRunnerUp: string;
  compareProfitGap: string;
  compareGoldPerDayGap: string;
  compareArtisanGap: string;
  dataTitle: string;
  dataVersion: string;
  dataUpdated: string;
  dataSources: string;
  dataChangelog: string;
  reportIssue: string;
  reportHint: string;
  inputHeader: string;
  inputTitle: string;
  seasonLabel: string;
  seasonOptions: {
    spring: string;
    summer: string;
    fall: string;
    winter: string;
    greenhouse: string;
  };
  qualityLabel: string;
  qualityOptions: {
    normal: string;
    silver: string;
    gold: string;
    iridium: string;
  };
  tillerLabel: string;
  tillerOff: string;
  tillerOffHelper: string;
  tillerOn: string;
  tillerOnHelper: string;
  artisanProfessionLabel: string;
  artisanToggle: string;
  artisanHint: string;
  resultsTitle: string;
  resultsSortedBy: string;
  sortCropName: string;
  multiplierLabel: string;
  artisanBoostBadge: string;
  mobileCards: string;
  cropLabel: string;
  harvestsLabel: string;
  revenueLabel: string;
  profitLabel: string;
  goldPerDayLabel: string;
  artisanGoodsLabel: string;
  artisanKegsVsJars: string;
  betterLabel: string;
  byLabel: string;
  sameLabel: string;
  enableArtisanGoodsHint: string;
  harvestsSuffix: string;
  goldPerDaySuffix: string;
};

const CALCULATOR_TEXT: Record<CalculatorLang, CalculatorText> = {
  en: {
    languageLabel: "Language",
    languageEn: "English",
    languageZh: "中文",
    shareButton: "Copy result link",
    shareTextButton: "Copy share text",
    compareLinkButton: "Copy compare link",
    copied: "Copied!",
    copyFailed: "Copy failed",
    sharePreset: "Share preset",
    assumptionsTitle: "Calculation Assumptions (How it works)",
    assumptionPlantingLabel: "Planting",
    assumptionPlantingText: "Assumes you plant today (Day 0).",
    assumptionSeasonLabel: "Season Constraint",
    assumptionSeasonText: "Calculations are capped by the 28-day season limit or your custom daysLeft.",
    assumptionProfitLabel: "Profit",
    assumptionProfitText: "(Total Harvests * Sell Price) - Seed Cost",
    assumptionGoldPerDayLabel: "Gold/Day",
    assumptionGoldPerDayText: "Total Profit divided by daysLeft.",
    explainTitle: "Why this result wins",
    explainSummaryPrefix: "Top pick",
    explainFormula: "Profit formula",
    explainRevenuePerHarvest: "Revenue per harvest",
    explainSeedCost: "Estimated seed cost",
    explainFactors: "Main factors in this run",
    explainFactorSeason: "Season / daysLeft window",
    explainFactorQuality: "Crop quality multiplier",
    explainFactorTiller: "Tiller on/off",
    explainFactorProfession: "Profession setup",
    explainFactorArtisan: "Artisan column uses kegs vs jars math",
    compareTitle: "A/B quick comparison",
    compareSubtitle: "Top 2 plans from current filters",
    compareTopPlan: "Plan A",
    compareRunnerUp: "Plan B",
    compareProfitGap: "Profit gap",
    compareGoldPerDayGap: "Gold/day gap",
    compareArtisanGap: "Best artisan gap",
    dataTitle: "Data quality & traceability",
    dataVersion: "Data version",
    dataUpdated: "Last updated",
    dataSources: "Sources",
    dataChangelog: "Changelog",
    reportIssue: "Report wrong data",
    reportHint: "One click opens a prefilled issue template with your current preset.",
    inputHeader: "Inputs",
    inputTitle: "Crop Settings",
    seasonLabel: "Season",
    seasonOptions: {
      spring: "Spring",
      summer: "Summer",
      fall: "Fall",
      winter: "Winter",
      greenhouse: "Greenhouse",
    },
    qualityLabel: "Crop Quality",
    qualityOptions: {
      normal: "Normal",
      silver: "Silver",
      gold: "Gold",
      iridium: "Iridium",
    },
    tillerLabel: "Tiller Profession",
    tillerOff: "Off",
    tillerOffHelper: "Base",
    tillerOn: "On (+10%)",
    tillerOnHelper: "x1.10",
    artisanProfessionLabel: "Artisan Profession",
    artisanToggle: "Artisan (+40% artisan goods)",
    artisanHint: "Only affects artisan goods column (not main ranking yet).",
    resultsTitle: "Results",
    resultsSortedBy: "Sorted by",
    sortCropName: "crop name",
    multiplierLabel: "Current Multiplier",
    artisanBoostBadge: "Artisan Goods +40%",
    mobileCards: "mobile cards",
    cropLabel: "Crop",
    harvestsLabel: "Harvests",
    revenueLabel: "Revenue",
    profitLabel: "Profit",
    goldPerDayLabel: "Gold/Day",
    artisanGoodsLabel: "Artisan Goods",
    artisanKegsVsJars: "(Kegs vs Jars)",
    betterLabel: "Better",
    byLabel: "by",
    sameLabel: "Same (=)",
    enableArtisanGoodsHint: "Enable artisan goods to see",
    harvestsSuffix: "harvests",
    goldPerDaySuffix: "gold/day",
  },
  zh: {
    languageLabel: "语言",
    languageEn: "English",
    languageZh: "中文",
    shareButton: "复制结果链接",
    shareTextButton: "复制分享文案",
    compareLinkButton: "复制对比链接",
    copied: "已复制",
    copyFailed: "复制失败",
    sharePreset: "当前预设",
    assumptionsTitle: "计算假设（如何计算）",
    assumptionPlantingLabel: "种植时间",
    assumptionPlantingText: "默认你今天种下（Day 0）。",
    assumptionSeasonLabel: "季节约束",
    assumptionSeasonText: "计算受 28 天季节上限或你自定义的 daysLeft 限制。",
    assumptionProfitLabel: "利润",
    assumptionProfitText: "(总收获次数 * 售价) - 种子成本",
    assumptionGoldPerDayLabel: "日均金币",
    assumptionGoldPerDayText: "总利润 / daysLeft。",
    explainTitle: "为什么这个方案更优",
    explainSummaryPrefix: "当前第一名",
    explainFormula: "利润公式",
    explainRevenuePerHarvest: "单次收获营收",
    explainSeedCost: "估算种子成本",
    explainFactors: "本次结果的关键影响因素",
    explainFactorSeason: "季节与剩余天数窗口",
    explainFactorQuality: "作物品质倍率",
    explainFactorTiller: "Tiller 是否开启",
    explainFactorProfession: "职业配置",
    explainFactorArtisan: "加工列采用 Keg/Jar 收益对比",
    compareTitle: "A/B 快速对比",
    compareSubtitle: "基于当前筛选条件的前两名",
    compareTopPlan: "方案 A",
    compareRunnerUp: "方案 B",
    compareProfitGap: "利润差",
    compareGoldPerDayGap: "日均金币差",
    compareArtisanGap: "加工最优差",
    dataTitle: "数据质量与可追溯性",
    dataVersion: "数据版本",
    dataUpdated: "最后更新",
    dataSources: "数据来源",
    dataChangelog: "更新日志",
    reportIssue: "反馈数据错误",
    reportHint: "一键打开预填问题模板，自动带上当前预设参数。",
    inputHeader: "输入",
    inputTitle: "作物设置",
    seasonLabel: "季节",
    seasonOptions: {
      spring: "春季",
      summer: "夏季",
      fall: "秋季",
      winter: "冬季",
      greenhouse: "温室",
    },
    qualityLabel: "作物品质",
    qualityOptions: {
      normal: "普通",
      silver: "银星",
      gold: "金星",
      iridium: "铱星",
    },
    tillerLabel: "Tiller 职业",
    tillerOff: "关闭",
    tillerOffHelper: "基础",
    tillerOn: "开启 (+10%)",
    tillerOnHelper: "x1.10",
    artisanProfessionLabel: "Artisan 职业",
    artisanToggle: "Artisan（加工品 +40%）",
    artisanHint: "当前仅影响加工品收益列（暂不影响主排序）。",
    resultsTitle: "结果",
    resultsSortedBy: "当前排序",
    sortCropName: "作物名",
    multiplierLabel: "当前倍率",
    artisanBoostBadge: "加工品 +40%",
    mobileCards: "移动端卡片",
    cropLabel: "作物",
    harvestsLabel: "收获次数",
    revenueLabel: "营收",
    profitLabel: "利润",
    goldPerDayLabel: "日均金币",
    artisanGoodsLabel: "加工品收益",
    artisanKegsVsJars: "（Keg vs Jar）",
    betterLabel: "更优",
    byLabel: "高出",
    sameLabel: "相同 (=)",
    enableArtisanGoodsHint: "开启后可查看加工收益",
    harvestsSuffix: "次收获",
    goldPerDaySuffix: "金币/天",
  },
};

export function parseCalculatorLang(rawLang: string | null): CalculatorLang {
  return rawLang === "zh" ? "zh" : "en";
}

export function getCalculatorText(lang: CalculatorLang): CalculatorText {
  return CALCULATOR_TEXT[lang];
}


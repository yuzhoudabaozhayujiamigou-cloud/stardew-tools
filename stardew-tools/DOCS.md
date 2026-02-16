# Universe-Bigbang / Stardew-Tools 资产库

## 01_选题库 (Topics & SEO)
- [ ] Topic: Best Spring Crops with 10 Days Left | Query: "stardew best crops 10 days left" | CTA: /?daysLeft=10
- [ ] Topic: Year 1 Spring Profit Guide | Query: "stardew valley year 1 spring strategy" | CTA: /?season=spring
- [ ] Topic: Kegs vs Preserves Jars | Query: "kegs vs jars stardew profit" | CTA: /?mode=compare
- [ ] Topic: Is Strawberry Worth It on Day 13? | Query: "stardew strawberries day 13 speed-gro" | CTA: /calculator?season=spring&daysLeft=16
- [ ] Topic: End-of-Season Planting Tricks | Query: "stardew end of season crops days left" | CTA: /calculator?season=spring&daysLeft=5

## 02_口径与逻辑 (Assumptions)
- [x] daysLeft: 1-28 约束已定义 (Day 1 完成)
- [x] day -> daysLeft 转换规则：`daysLeft = 28 - (dayOfMonth - 1)`（Day13=16, Day15=14, Day28=1）
- [ ] quality: 普通/银/金/铱星收益差值逻辑 (TBD)
- [ ] professions: 农学家/工匠技能加成公式 (TBD)

## 03_发布日志 (Release Log)
- **2026-02-16**: 初始化口径声明 (Methodology) 与 README 更新。
- **2026-02-16**: Day 3 语料采样完成，累计 222 条原始文本（见 `notes/day3-corpus.md`）。
- **2026-02-16**: Day 4 词频与场景聚类完成（见 `notes/day4-clusters.md`），并统一 Day -> daysLeft 口径说明。
- **Next**: Day 8 计划上线 daysLeft 动态过滤功能。

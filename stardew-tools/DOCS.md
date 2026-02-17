# Universe-Bigbang / Stardew-Tools 资产库

## 01_选题库 (Topics & SEO)
- [x] Topic: Best Spring Crops with 10 Days Left | Query: "stardew best crops 10 days left" | CTA: /?daysLeft=10
- [ ] Topic: Year 1 Spring Profit Guide | Query: "stardew valley year 1 spring strategy" | CTA: /?season=spring
- [ ] Topic: Kegs vs Preserves Jars | Query: "kegs vs jars stardew profit" | CTA: /?mode=compare
- [x] Topic: Is Strawberry Worth It on Day 13? | Query: "stardew strawberries day 13 speed-gro" | CTA: /calculator?season=spring&daysLeft=16
- [ ] Topic: End-of-Season Planting Tricks | Query: "stardew end of season crops days left" | CTA: /calculator?season=spring&daysLeft=5
- [x] Topic: Spring Day 15, what can I still plant? | Query: "stardew spring day 15 what to plant" | CTA: /calculator?season=spring&daysLeft=14
- [x] Topic: Best crops with 7 days left before season switch | Query: "stardew best crops 7 days left" | CTA: /calculator?season=spring&daysLeft=7
- [x] Topic: Is it too late to plant on Spring Day 20? | Query: "stardew spring day 20 too late" | CTA: /calculator?season=spring&daysLeft=8
- [x] Topic: Is it too late to plant on Spring Day 25? | Query: "stardew spring day 25 too late" | CTA: /calculator?season=spring&daysLeft=3
- [x] Topic: Summer Day 1 maximum profit guide | Query: "stardew summer day 1 best crop" | CTA: /calculator?season=summer&daysLeft=28
- [x] Topic: Summer Day 7 what to plant | Query: "stardew summer day 7 what to plant" | CTA: /calculator?season=summer&daysLeft=21
- [x] Topic: Summer Day 15 profit guide | Query: "stardew summer day 15 best crops" | CTA: /calculator?season=summer&daysLeft=13
- [x] Topic: Summer Day 20 is it too late | Query: "stardew summer day 20 too late" | CTA: /calculator?season=summer&daysLeft=8
- [x] Topic: Is it too late to plant on Summer Day 25? | Query: "stardew summer day 25 too late" | CTA: /calculator?season=summer&daysLeft=3

## 02_口径与逻辑 (Assumptions)
- [x] daysLeft: 1-28 约束已定义 (Day 1 完成)
- [x] day -> daysLeft 转换规则：`daysLeft = 28 - (dayOfMonth - 1)`（Day13=16, Day15=14, Day28=1）
- [ ] quality: 普通/银/金/铱星收益差值逻辑 (TBD)
- [ ] professions: 农学家/工匠技能加成公式 (TBD)

## 03_发布日志 (Release Log)
- **2026-02-16**: 初始化口径声明 (Methodology) 与 README 更新。
- **2026-02-16**: Day 3 语料采样完成，累计 222 条原始文本（见 `notes/day3-corpus.md`）。
- **2026-02-16**: Day 4 词频与场景聚类完成（见 `notes/day4-clusters.md`），并统一 Day -> daysLeft 口径说明。
- **2026-02-17**: Day 5 已上线两篇 daysLeft 长尾文并完成互链、Quick Nav、FAQ/BlogPosting schema。
- **2026-02-17**: Day 6 完成最小点击埋点（`/api/event` + `cta_click` from/to/slug）并新增 Day 15 / 7 days left 两篇同簇文章。
- **2026-02-17**: 新增 ` /ops/events ` 轻量聚合页（按 fromSlug 聚合 + 最近50条 + `OPS_KEY` gate + noindex）。
- **2026-02-17**: 新增 Spring Day 20 紧急避险文 + Summer Day 1 预热文，形成“季末焦虑 -> 跨季规划”互链闭环。
- **2026-02-17**: Calculator 结果增加移动端卡片模式，减少手机端横向滚动负担。
- **2026-02-17**: 新增 Spring Day 25 panic-template（daysLeft=3）覆盖极限长尾检索并接入埋点闭环。
- **2026-02-17**: 初七 Summer 工业化首批完成（Day 7 / Day 15 / Day 20），形成 Summer Day1 -> Day7 -> Day15 -> Day20 链路。
- **2026-02-17**: Summer Day 25 panic-template 上线（daysLeft=3），Summer 链路封顶为 Day1 -> Day7 -> Day15 -> Day20 -> Day25。

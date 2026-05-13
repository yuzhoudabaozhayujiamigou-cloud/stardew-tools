# Stardew CTR 重排执行报告

## 结果概览

- 本轮按新的优先级执行：
  - P0 `/calculator`
  - P1 `/blog/keg-vs-preserves-jar`
  - P2 `/blog/greenhouse-layout-guide`
  - P3 `/blog/best-crops-year-1`（仅保留基础内链，不做深改）
- `npm run build` 已通过。
- 目标外部路径 `/root/.openclaw/workspace/reports/stardew-ctr-reprioritized-2026-05-11/codex-report.md` 在当前沙箱下不可写，实际报告已输出到仓库内：
  - `reports/stardew-ctr-reprioritized-2026-05-11/codex-report.md`

## 改动文件

### 1. `src/app/calculator/page.tsx`

- 将 title 改为更强的 hub 表达，覆盖 `profit calculator + best crops + kegs/jars + greenhouse` 意图。
- 将 meta description 改为更强承诺，明确这是一个“比较利润 + 分发到下一步决策”的入口。
- 首屏新增 3 个入口卡片：
  - `Best Crops by Season` -> `/blog/best-crops-year-1`
  - `Keg vs Preserves Jar` -> `/blog/keg-vs-preserves-jar`
  - `Greenhouse Profit Planner` -> `/blog/greenhouse-layout-guide`
- 同步把计算器下方的相关导流卡片改成这 3 个核心路由，强化 `/calculator` 作为流量分发中心的定位。

### 2. `src/app/blog/keg-vs-preserves-jar/page.tsx`

- 将 title 改为：
  - `Keg vs Preserves Jar: Best Choice for Every Stardew Valley Crop`
- 将 meta description 改为覆盖 `Cranberries / Ancient Fruit / Starfruit / Blueberries / Strawberries` 的具体判断型文案。
- 首屏第一段直接回答 `Are Cranberries good in a Keg?`
- 新增聚焦型判断表格，列为：
  - `Crop`
  - `Better Choice`
  - `Why`
- 表格至少覆盖：
  - `Cranberry`
  - `Ancient Fruit`
  - `Starfruit`
  - `Blueberry`
  - `Strawberry`
- 页面结构改成更明确的答案页，新增并落实这些 H2：
  - `Are Cranberries good in a Keg?`
  - `Keg vs Preserves Jar quick answer`
  - `Best crops for Kegs`
  - `Best crops for Preserves Jars`
  - `When Kegs are better`
  - `When Jars make money faster`
- 底部相关链接改成与本轮高优先级页一致，补向 `/calculator`、`/blog/greenhouse-layout-guide`、`/blog/best-crops-year-1` 的内链。

### 3. `src/app/blog/greenhouse-layout-guide/page.tsx`

- 将 title 改为更强的 maximum profit 导向：
  - `Best Stardew Valley Greenhouse Layout for Maximum Profit (116 Tiles)`
- 将 meta description 改为覆盖：
  - `Ancient Fruit`
  - `sprinklers`
  - `fruit trees`
  - `year-round profit`
- 首屏直接给出 strongest answer：
  - `116 tiles + 6 Iridium Sprinklers + fruit tree border + Ancient Fruit 默认方案`
- 新增快速选择表格，列为 `Goal / Best Layout`，覆盖：
  - `Maximum profit`
  - `Easy setup`
  - `Late game`
  - `Low effort`
- 将原本指向旧 keg/jar 页的内链，替换为本轮优先的新页 `/blog/keg-vs-preserves-jar`。

### 4. `src/app/blog/best-crops-year-1/page.tsx`

- 保持主体内容不动，不做大规模重写。
- 仅补基础内链：
  - `/blog/keg-vs-preserves-jar`
  - `/blog/greenhouse-layout-guide`
- 目的是让这个暂停页继续参与分发，但不消耗本轮改写预算。

## 为什么这样改

- `/calculator` 当前已有展现但 CTR 很低，最核心问题不是“工具不可用”，而是“入口意图过窄”。这次把它改成 hub，目的是同时承接工具意图和后续决策意图，把单点访问变成分发访问。
- `/blog/keg-vs-preserves-jar` 是本轮新插队高优先级页，而且已知高潜 query 是 `is cranberry good in keg stardew valley`。所以页面不再做泛泛科普，而是把 Cranberry 直接顶到首屏和主表格里，转成具体判断型答案页。
- `/blog/greenhouse-layout-guide` 当前更像说明文，本轮把它改成“先给最优解，再给分支方案”的结构，优先解决 CTR 和首屏满足感。
- `/blog/best-crops-year-1` 按要求暂停深改，只保留必要导流。

## Build 验证

- 执行命令：`npm run build`
- 结果：通过

### 构建中的非阻塞警告

- Next.js 检测到多个 lockfile，推断 workspace root 时给出 warning。
- `middleware` 文件约定已被标记为 deprecated，建议未来迁移到 `proxy`。
- 构建过程中提示某个 edge runtime 页面会禁用静态生成。

这些都不是本轮修改引入的阻塞错误，build 产物已成功生成。

## 遗留风险

- `keg vs preserves jar` 页现在是更强的 CTR/答案页写法，强调“实战判断”和“优先级”。它不是一张覆盖所有作物、所有时间成本模型的完整利润数据库表；如果后续要吃更深层 long-tail，可能还需要补更细的 per-machine-time 数据。
- `/blog/best-crops-year-1` 本轮没有重写首屏和标题策略，只做基础内链保留，因此该页 CTR 提升空间仍然主要留到后续轮次。
- 外部报告目标路径当前不可写，报告未能直接输出到用户指定的 `/root/.openclaw/workspace/reports/...`；已在仓库内生成同名报告作为替代。

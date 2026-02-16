# Day 4 Clusters (from `notes/day3-corpus.md`)

- Input corpus: 222 raw text items
- Goal: extract threshold signals, crop/plan patterns, constraints, and ready-to-title scenarios
- Note: `10 days` exact phrase is not directly present in current corpus; handled as a proxy cluster using late-season timing language (`few days`, `day 15`, `too late`)
- Writing angle for Day 5: position as `~10 days left / late spring` intent family, not as a hard exact-phrase claim
- Day-to-daysLeft rule (shared methodology): `daysLeft = 28 - (dayOfMonth - 1)`
  - Example: Day 13 -> `daysLeft=16`
  - Example: Day 15 -> `daysLeft=14`
  - Example: Day 28 -> `daysLeft=1`

## Section A: Thresholds（天数阈值）

### A1) `10 days`（代理阈值，exact=0，proxy=8）
- 用户核心问题：**赛季后段还值不值得继续种，还是转向备耕/挖矿/蓄能？**
- 引用（2-3条）：
  - "...planting cheap crop or wild seeds ... a few days before season turns..."（`notes/day3-corpus.md:L112`，`[097]`）
  - "...doing that work a few days in advance..."（`notes/day3-corpus.md:L125`，`[110]`）
  - "...will it have enough time to grow ... if i plant it on the 15th"（`notes/day3-corpus.md:L216`，`[201]`）

### A2) `7 days`（exact=1）
- 用户核心问题：**一周窗口内能否再跑完一轮生长/再收一茬？**
- 引用（2-3条）：
  - "It takes 7 days for them to grow."（`notes/day3-corpus.md:L175`，`[160]`）
  - "...beans ... 7 ... with 22,000 profit in 28 days."（`notes/day3-corpus.md:L236`，`[221]`）
  - "...only 6 harvests in 25 days..."（`notes/day3-corpus.md:L236`，`[221]`）

### A3) `14 days`（`14 days/14th`=2）
- 用户核心问题：**成长周期=14天时，临界种植日是哪天？**
- 引用（2-3条）：
  - "It actually takes 14 days for Starfruit to grow..."（`notes/day3-corpus.md:L219`，`[204]`）
  - "...I was sure it was on the 15th. On the 14th, I've already bought the seeds..."（`notes/day3-corpus.md:L213`，`[198]`）
  - "...the 15th is still cutting it kind of tight..."（`notes/day3-corpus.md:L223`，`[208]`）

### A4) `Spring Day 13`（exact=1）
- 用户核心问题：**草莓在 Day 13 的种植/施肥是否还能拿满 3 harvests？**
- 引用（2-3条）：
  - "...Strawberries must be planted ... on Spring 13 to get 3 harvests."（`notes/day3-corpus.md:L200`，`[185]`）
  - "...if i plant it on the 15th"（`notes/day3-corpus.md:L216`，`[201]`）
  - "well too late..."（`notes/day3-corpus.md:L224`，`[209]`）

### A5) `Day 15`（exact=3）
- 用户核心问题：**Day 15 这种“卡边界”是否还有收益，还是应延期到下一年？**
- 引用（2-3条）：
  - "...if i plant it on the 15th"（`notes/day3-corpus.md:L216`，`[201]`）
  - "...the 15th is still cutting it kind of tight..."（`notes/day3-corpus.md:L223`，`[208]`）
  - "well too late..."（`notes/day3-corpus.md:L224`，`[209]`）

### A6) `Last day`（exact=2）
- 用户核心问题：**最后一天该做“收尾种植”还是直接切下一季？**
- 引用（2-3条）：
  - "In last day of red cabbage harvest plant wheat in its place."（`notes/day3-corpus.md:L73`，`[058]`）
  - "Time your planting so you harvest on the last day..."（`notes/day3-corpus.md:L128`，`[113]`）
  - "...few days before the end of the season..."（`notes/day3-corpus.md:L167`，`[152]`）

### A7) `Day 1 / Day 2` 开季窗口（`day 1`=11，`day 2`=2）
- 用户核心问题：**是否必须 Day 1 下种、Day 2 补水，才能多拿一轮收获？**
- 引用（2-3条）：
  - "...done day 1 ... plant day 1 to get an extra harvest..."（`notes/day3-corpus.md:L166`，`[151]`）
  - "...planted 10 seeds ... on day 2..."（`notes/day3-corpus.md:L174`，`[159]`）
  - "...on summer day 2 ... water ... by hand?"（`notes/day3-corpus.md:L210`，`[195]`）

## Section B: Crops/Plans（作物/策略）

### B1) 高频作物（频次 + 出现原因）
- `Blueberry`（11）：高频来自“连续收获 + seed maker 循环 + 现金流稳定”讨论。
- `Wheat`（5）：作为赛季衔接填充物，常用于 last-day/跨季过渡。
- `Ancient Fruit`（5）：中后期稳定高收益代表，被当作长期路线标杆。
- `Potato`（4）：常与 seed cost、随机额外产出、gold/day 计算纠缠。
- `Parsnip`（4）：Year 1 资金紧张期的“低成本高铺量”方案。
- `Strawberry`（4）：与 Spring Day 13、Speed-Gro、能否 3 harvests 绑定最紧。
- `Corn`（4）：跨夏秋的“续航型作物”代表，和时间利用率强相关。
- `Cranberry`（4）：秋季高收益对照组，常与 berry 系策略一起出现。
- `Starfruit`（3）：14-day 周期与临界种植日争议高，典型“高风险高回报”。
- `Pumpkin`（3）：大地块/秋季收益点，常与“末日衔接种植”联动。

### B2) 高频策略（频次 + 出现原因）
- `Sprinklers / Watering`（42）：最强瓶颈信号，浇水能力直接决定可执行方案。
- `Profit math / Gold-per-day`（14）：用户频繁用“利润/天”复核结论，强需求透明口径。
- `Regrow / Multi-harvest`（10）：核心在“买一次收多次”是否优于重购种子路线。
- `Speed-Gro / Fertilizer`（8）：直接改变临界天数，是“来不来得及”的关键开关。
- `Seed maker loop`（7）：后期通过 1-3 seed 产出降低来年成本，影响长期策略。
- `Cross-season carryover`（4）：围绕“last-day 铺场 + 下季起手效率”的优化争论。

## Section C: Constraints（约束条件）

- `Year 1 / Early game`（7）：开局资金与技能低，偏向低成本、快回款作物。
- `No sprinklers / Manual watering`（3）：手动浇水上限压缩可种面积，优先低维护方案。
- `No greenhouse / Greenhouse dependency`（9）：无温室时季节窗口更刚性，跨季策略受限。
- `No Speed-Gro / Fertilizer dependency`（13）：无肥时临界日提前，“差一天”就从可种变不可种。
- `Limited gold / Seed affordability`（8）：预算限制让“单株收益高”不一定优于“可铺量大”。
- `Low energy / Time pressure`（29）：体力与日程是第一现实约束，常压过理论最高收益。
- `RNG / Uncertainty`（7）：额外掉落、crop fairy、概率产出让结论必须给区间而非单点。

## Section D: Ready-to-title scenarios（可直接转标题场景句式 + CTA）

- Day mapping reminder for all CTA links: `daysLeft = 28 - (dayOfMonth - 1)`

- Is it too late to plant `X` on Summer Day 15?  
  CTA: `/calculator?season=summer&daysLeft=14`
- Is Strawberry worth planting on Spring Day 13 without Speed-Gro?  
  CTA: `/calculator?season=spring&daysLeft=16`
- Best crops with 10 days left in Spring (Year 1, no sprinklers).  
  CTA: `/calculator?season=spring&daysLeft=10`
- Best crops with 7 days left before season switch.  
  CTA: `/calculator?season=fall&daysLeft=7`
- Starfruit on Day 15: still profitable with Speed-Gro?  
  CTA: `/calculator?season=summer&daysLeft=14`
- Last-day planting strategy: prep now or wait next season?  
  CTA: `/calculator?season=fall&daysLeft=1`
- Parsnip vs Potato in Year 1 when seed cost is included.  
  CTA: `/calculator?season=spring&daysLeft=28`
- Regrow vs one-time crops with only a few days left.  
  CTA: `/calculator?season=summer&daysLeft=5`
- No-greenhouse winter seed loop: what is still worth planting?  
  CTA: `/calculator?season=winter&daysLeft=14`
- Low-energy crop plan for players watering by hand.  
  CTA: `/calculator?season=spring&daysLeft=12`

## Quick handoff for Day 5 / Day 8

- Day 5（长尾标题）优先聚焦：`Day 13 strawberry`、`Day 15 too late`、`10 days left`。
- Day 8（功能）优先参数化：`daysLeft`、`hasSpeedGro`、`hasSprinklers`、`yearStage`。

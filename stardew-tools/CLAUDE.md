# StardewProfit — CLAUDE.md

## 项目概况

Next.js 16 静态站（`output: export`），Vercel 部署，托管于 `www.stardewprofit.com`。
领域：Stardew Valley（星露谷物语）利润计算器 + 攻略博客。

## 关键脚本

| 命令 | 用途 |
|------|------|
| `npm run dev` | 本地开发 |
| `npm run build` | 构建（必须通过才能 push） |
| `npm run lint` | ESLint 检查 |
| `npm run typecheck` | TypeScript 类型检查 |
| `npm run seo:audit` | SEO 审计脚本 |
| `npm run analyze` | bundle 分析 |

## 代码结构

```
src/
  app/          — App Router 路由
    blog/       — 博客页面（每个 slug 一个子目录）
    tools/      — 工具页面
    calculator/ — 利润计算器
    crops/      — 作物页面
    guides/     — 指南页面
    secret-notes/ — 秘密笔记
  components/   — 共享组件（blog/Breadcrumb/FaqJsonLd 等）
  data/         — 静态数据
  lib/          — 共享工具库
```

## SEO 规则

### Metadata
- title: 50-65 字符，含核心关键词，格式 `"xxx | Stardew Profit"`
- description: 140-165 字符，含时间/版本号
- 每个页面**必须**有 `alternates.canonical`，独立页自引用
- 无 `robots: { index: false }`，无 noindex

### Content 规范
- H1 出现且仅出现一次
- 至少 5 个 H2 段落
- 至少 3 个 FAQ（含 JSON-LD `FAQPage`）
- 正文内至少 3 个内链
- 至少 2 处 `/calculator` CTA

### Canonical 策略
- 独立指南/工具页 → 自引用 canonical
- quick-answer / duplicate 子页 → 如确认 cannibalization，canonical 指向主页面
- 不确定时 → 自引用 + 报告标注

### 构建前自检
- `npm run build` 必须通过
- 编辑后 live curl 验证是否 200
- 不改功能代码（只改 metadata/内容时不要动逻辑）

## 常量

- `SITE_ORIGIN`: `import { SITE_ORIGIN } from "@/lib/site"` 得到 `https://www.stardewprofit.com`
- `SITE_URL`: 部分页面有 `const url = SITE_ORIGIN + fromPath` 的习惯写法

## 工具组件

- `Breadcrumb` — 面包屑导航，需传入 `items: [{ name, href }]`
- `FaqJsonLd` — FAQ JSON-LD 组件，传 `faqs: [{ question, answer }]`
- `TrackedBlogCtaLink` — 带点击追踪的 CTA 链接组件
- `BlogReadNext` — 相关文章推荐组件，用 `getBlogReadNextPosts()` 获取
- `SiteFooter` — 页脚

## 禁止事项

- 不要创建与已有页面 slug 竞争的页面（如再建一个 keg-vs-jar-xxx）
- 不要添加新依赖
- 不要修改 next.config 或构建配置
- 不要修改 .githooks
- 不要 push 到 main 前不 build
- 不要添加 noindex

## Live 验证优先级

1. 访问 live URL → HTTP 200
2. `curl -I` 检查 status code
3. 检查 source code（title/description/h1/canonical）
4. 代码和 live 不一致时，停止改内容，检查部署/缓存

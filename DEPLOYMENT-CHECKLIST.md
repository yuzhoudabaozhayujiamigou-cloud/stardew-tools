# 部署验证清单 - 2026-03-07

## ✅ 已完成

### 代码部署
- [x] OG Image API 创建 (`/api/og/route.tsx`)
- [x] Layout.tsx 更新（性能优化 + OG image）
- [x] Calculator 页面更新（OG image）
- [x] Secret Notes 页面更新（OG image + schema）
- [x] 构建成功（无错误）
- [x] Git 提交（commit 935bc41）
- [x] 推送到 GitHub
- [x] Vercel 自动部署触发

---

## 📋 待验证（部署后 10-15 分钟）

### 1. OG Image 测试
访问这些 URL 验证图片生成：

```bash
# 测试 OG Image API
https://www.stardewprofit.com/api/og?title=Test&type=blog

# 测试首页
https://www.stardewprofit.com/

# 测试 Calculator
https://www.stardewprofit.com/calculator

# 测试 Secret Notes
https://www.stardewprofit.com/secret-notes
```

**预期结果：**
- ✅ 看到生成的 1200x630 图片
- ✅ 图片有正确的标题和副标题
- ✅ 背景颜色根据 type 变化

### 2. 社交媒体验证

**Facebook Debugger:**
```
https://developers.facebook.com/tools/debug/
```
测试 URL：
- https://www.stardewprofit.com/
- https://www.stardewprofit.com/calculator
- https://www.stardewprofit.com/secret-notes

**预期结果：**
- ✅ 显示 og:image
- ✅ 图片尺寸 1200x630
- ✅ 无错误

**Twitter Card Validator:**
```
https://cards-dev.twitter.com/validator
```
测试相同 URL

**预期结果：**
- ✅ 显示 summary_large_image
- ✅ 图片正确显示

### 3. 性能测试

**Lighthouse Audit:**
```bash
# 在 Chrome DevTools 中运行
# 或使用 PageSpeed Insights
https://pagespeed.web.dev/
```

测试 URL: https://www.stardewprofit.com/

**预期改进：**
- ✅ Performance: +5-10 分
- ✅ FCP (First Contentful Paint): -300-500ms
- ✅ 看到 preconnect 提示生效

**检查 Network Tab:**
- ✅ fonts.googleapis.com 早期连接
- ✅ fonts.gstatic.com 早期连接
- ✅ DNS 预解析生效

### 4. 结构化数据验证

**Google Rich Results Test:**
```
https://search.google.com/test/rich-results
```

测试 URL: https://www.stardewprofit.com/secret-notes

**预期结果：**
- ✅ 检测到 WebApplication schema
- ✅ 无错误
- ✅ 所有必需属性存在

**Schema.org Validator:**
```
https://validator.schema.org/
```

查看页面源代码，复制 JSON-LD 验证

**预期结果：**
- ✅ JSON 格式正确
- ✅ 无验证错误

### 5. 页面源代码检查

访问页面，右键 → 查看源代码，搜索：

**首页 (/):**
```html
<meta property="og:image" content="/api/og?title=StardewProfit
```

**Calculator (/calculator):**
```html
<meta property="og:image" content="/api/og?title=Crop+Profit+Calculator
```

**Secret Notes (/secret-notes):**
```html
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"WebApplication"
```

**Layout (所有页面):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://www.google-analytics.com">
```

---

## 🐛 常见问题排查

### 问题：OG image 不显示
**排查：**
1. 检查 `/api/og` 路由是否可访问
2. 查看浏览器控制台错误
3. 验证 Next.js 版本 >= 13.3
4. 清除社交媒体缓存（Facebook Debugger）

### 问题：性能没有改善
**排查：**
1. 清除浏览器缓存
2. 使用隐身模式测试
3. 检查 Network tab 的 Connection Start 时间
4. 验证 preconnect 标签在 HTML 中

### 问题：结构化数据错误
**排查：**
1. 检查 JSON 语法（逗号、引号）
2. 验证所有必需属性存在
3. 使用 jsonlint.com 验证 JSON

---

## 📊 预期影响（2-4 周）

### 流量指标
- **社交分享 CTR:** +20-30%
- **社交引荐流量:** +15-25%
- **有机搜索流量:** +5-10%

### 性能指标
- **FCP:** 1.5-2.0s → 1.0-1.3s (-300-700ms)
- **LCP:** 改善 -200-400ms
- **Lighthouse Performance:** +5-10 分

### SEO 指标
- **Rich snippet 资格:** Secret Notes 页面
- **社交媒体展示:** 所有页面有图片预览
- **Core Web Vitals:** 改善

---

## 📈 监控计划

### 第 1 天
- [ ] 验证部署成功（所有检查项）
- [ ] 测试 OG images（3 个页面）
- [ ] 运行 Lighthouse audit（记录基线）

### 第 1 周
- [ ] 检查 Google Search Console（错误）
- [ ] 监控社交分享数据（如果有）
- [ ] 对比 Lighthouse 分数（前后）

### 第 2-4 周
- [ ] 分析流量变化（GA4）
- [ ] 检查 Rich snippet 状态（GSC）
- [ ] 对比 Core Web Vitals（GSC）

---

## ✅ 成功标准

**技术层面：**
- ✅ 所有页面有 og:image
- ✅ OG images 正确生成
- ✅ 性能优化生效
- ✅ 结构化数据无错误

**业务层面：**
- ✅ 社交分享 CTR +20%
- ✅ 页面加载速度提升
- ✅ Lighthouse 分数改善
- ✅ 无新增错误

---

## 🎯 下一步

部署验证通过后：

1. **今天/明天：** 开始内容生产
   - 写第一篇博客（Summer Crops Deep Dive）
   - 或录第一个 Shorts（Keg vs Jar）

2. **本周：** 建立内容节奏
   - 每天 1 篇博客（或隔天）
   - 每周 3-5 个 Shorts

3. **2 周后：** 数据复盘
   - 分析流量变化
   - 调整策略

---

**部署时间：** 2026-03-07 11:30 GMT+8  
**Commit:** 935bc41  
**预计生效：** 10-15 分钟后  
**验证窗口：** 部署后 1 小时内完成所有检查

#!/bin/bash
# 部署验证脚本 - 每 30 秒检查一次
# 2026-03-11：扩展验证范围（OG + 指定页面 SEO 变更）

set -euo pipefail

SITE_ORIGIN="https://www.stardewprofit.com"
TARGET_BLOG_PATH="/blog/secret-note-22-hidden-tunnel-panel"

# 这次 SEO 落地的关键验收点（724648e）：title/description + FAQ JSON-LD
# title 里可能包含 HTML entity（&amp;）或尾巴补充词（如 "(Stardew)"），所以只匹配前半段。
EXPECTED_TITLE_SUBSTR="Secret Note 22 Solution: Hidden Tunnel Panel Location"
EXPECTED_DESC_SUBSTR="Secret Note 22 points to a hidden wall panel"

echo "🔍 开始监控 Vercel 部署..."
echo "目标：确认站点已包含 2026-03-11 Secret Note 22 SEO 改动（commit 724648e）"
echo "站点：${SITE_ORIGIN}"
echo "页面：${SITE_ORIGIN}${TARGET_BLOG_PATH}"
echo "时间: $(date)"
echo ""

check_count=0
max_checks=20  # 最多检查 10 分钟

fetch() {
  # no-cache 头尽量绕开 CDN 缓存（不保证）
  curl -s "${1}" -H "Cache-Control: no-cache" -H "Pragma: no-cache"
}

while [ $check_count -lt $max_checks ]; do
    echo "检查 #$((check_count + 1)) - $(date +%H:%M:%S)"

    # 1) OG Image API 基础健康
    og_status=$(curl -s -o /dev/null -w "%{http_code}" "${SITE_ORIGIN}/api/og?title=Test&type=blog")
    echo "  OG Image API: $og_status"

    # 2) 首页 OG image（历史验收项，保留）
    homepage_html=$(fetch "${SITE_ORIGIN}/")
    og_image=$(echo "$homepage_html" | grep -o 'og:image.*content="[^"]*"' | head -1 || true)
    if [ -n "$og_image" ]; then
      echo "  ✅ 首页 og:image 存在"
    else
      echo "  ⏳ 首页 og:image 未检测到（可能正常/可能缓存）"
    fi

    # 3) 目标博客页 SEO 变更验收（本次重点）
    blog_html=$(fetch "${SITE_ORIGIN}${TARGET_BLOG_PATH}")

    title_ok=$(echo "$blog_html" | tr '\n' ' ' | grep -F "$EXPECTED_TITLE_SUBSTR" >/dev/null 2>&1 && echo 1 || echo 0)
    desc_ok=$(echo "$blog_html" | tr '\n' ' ' | grep -F "$EXPECTED_DESC_SUBSTR" >/dev/null 2>&1 && echo 1 || echo 0)
    # FAQ JSON-LD 检测：Next 可能将 JSON-LD 以 streaming/flight 数据注入（不一定是独立 script 直出）
    # 因此用宽松匹配：只要 HTML 中包含 schema.org + FAQPage 即视为存在。
    faq_ok=$( (echo "$blog_html" | grep -E 'schema\.org|https://schema\.org' >/dev/null 2>&1) && (echo "$blog_html" | grep -E 'FAQPage' >/dev/null 2>&1) && echo 1 || echo 0 )

    echo "  Secret Note 22 title 更新: $title_ok"
    echo "  Secret Note 22 description 更新: $desc_ok"
    echo "  Secret Note 22 FAQ JSON-LD 存在(宽松): $faq_ok"

    if [ "$title_ok" = "1" ] && [ "$desc_ok" = "1" ] && [ "$faq_ok" = "1" ]; then
        echo ""
        echo "🎉 部署成功：检测到 Secret Note 22 SEO 改动已上线"
        echo "下一步（可选）："
        echo "1) Rich Results Test: https://search.google.com/test/rich-results"
        echo "2) Facebook Debugger: https://developers.facebook.com/tools/debug/"
        exit 0
    else
        echo "  ⏳ 等待部署/缓存刷新..."
    fi

    echo ""
    check_count=$((check_count + 1))

    if [ $check_count -lt $max_checks ]; then
        sleep 30
    fi
done

echo "⚠️  10 分钟后仍未检测到目标页面更新"
echo "可能原因："
echo "1) Vercel 部署队列较长 / 仍在构建"
echo "2) 构建失败（检查 Vercel dashboard）"
echo "3) CDN 缓存未刷新（可尝试带 ?v=$(date +%s) 手动打开页面）"

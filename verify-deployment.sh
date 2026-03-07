#!/bin/bash
# 部署验证脚本 - 每 30 秒检查一次

echo "🔍 开始监控 Vercel 部署..."
echo "Commit: 935bc41"
echo "时间: $(date)"
echo ""

check_count=0
max_checks=20  # 最多检查 10 分钟

while [ $check_count -lt $max_checks ]; do
    echo "检查 #$((check_count + 1)) - $(date +%H:%M:%S)"
    
    # 检查 OG Image API
    og_status=$(curl -s -o /dev/null -w "%{http_code}" "https://www.stardewprofit.com/api/og?title=Test&type=blog")
    echo "  OG Image API: $og_status"
    
    # 检查首页 metadata
    og_image=$(curl -s "https://www.stardewprofit.com/" -H "Cache-Control: no-cache" | grep -o 'og:image.*content="[^"]*"' | head -1)
    
    if [ -n "$og_image" ]; then
        echo "  ✅ OG Image 已部署!"
        echo "  $og_image"
        
        # 检查 preconnect
        preconnect=$(curl -s "https://www.stardewprofit.com/" | grep -o 'preconnect.*fonts.googleapis.com')
        if [ -n "$preconnect" ]; then
            echo "  ✅ Preconnect 已部署!"
        fi
        
        echo ""
        echo "🎉 部署成功！"
        echo ""
        echo "下一步："
        echo "1. 测试社交媒体预览: https://developers.facebook.com/tools/debug/"
        echo "2. 运行 Lighthouse audit: https://pagespeed.web.dev/"
        echo "3. 验证结构化数据: https://search.google.com/test/rich-results"
        exit 0
    else
        echo "  ⏳ 等待部署..."
    fi
    
    echo ""
    check_count=$((check_count + 1))
    
    if [ $check_count -lt $max_checks ]; then
        sleep 30
    fi
done

echo "⚠️  10 分钟后仍未检测到更新"
echo "可能原因："
echo "1. Vercel 部署队列较长"
echo "2. 构建失败（检查 Vercel dashboard）"
echo "3. CDN 缓存未刷新"
echo ""
echo "手动检查："
echo "1. 访问 Vercel dashboard 查看部署状态"
echo "2. 检查构建日志是否有错误"
echo "3. 尝试清除 CDN 缓存"

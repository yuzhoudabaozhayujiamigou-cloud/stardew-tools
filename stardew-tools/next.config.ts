import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,

  // 性能优化
  compress: true,

  // 图片优化
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // 实验性功能
  experimental: {
    optimizeCss: true,
  },

  async headers() {
    return [
      {
        source: "/ops/events",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
      // 添加安全头和性能头
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/blog/artisan-vs-tiller",
        destination: "/blog/stardew-valley-artisan-profit-guide",
        permanent: true,
      },
      {
        source: "/blog/best-crops-spring",
        destination: "/blog/year-1-spring-crops-profit-guide",
        permanent: true,
      },
      {
        source: "/guides/keg-vs-jar",
        destination: "/blog/keg-vs-jar-profit-guide",
        permanent: true,
      },
      // URL 清理 Batch 1: 旧短路径/404 路径 → 目标页
      {
        source: "/artisan",
        destination: "/tools/artisan-profit",
        permanent: true,
      },
      {
        source: "/greenhouse",
        destination: "/guides/greenhouse-profit-guide",
        permanent: true,
      },
      {
        source: "/animals",
        destination: "/blog/animal-profit-guide",
        permanent: true,
      },
      {
        source: "/blog/best-summer-crops",
        destination: "/blog/best-summer-crops-quick-answer",
        permanent: true,
      },
      {
        source: "/blog/best-fall-crops",
        destination: "/blog/best-fall-crops-quick-answer",
        permanent: true,
      },
      {
        source: "/blog/best-keg-items",
        destination: "/guides/best-keg-items",
        permanent: true,
      },
      {
        source: "/blog/stardew-valley-quality-sprinklers-guide",
        destination: "/guides/quality-sprinklers-guide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

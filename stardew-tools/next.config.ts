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
};

export default nextConfig;

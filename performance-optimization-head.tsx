// app/layout.tsx or app/head.tsx
// Performance Optimization: Preconnect & DNS-Prefetch

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to critical domains (establish connection early) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS-Prefetch for external resources (resolve DNS early) */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Preload critical fonts (if using custom fonts) */}
        <link
          rel="preload"
          href="/fonts/geist-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Preload critical CSS (if using external stylesheets) */}
        {/* <link rel="preload" href="/styles/critical.css" as="style" /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}

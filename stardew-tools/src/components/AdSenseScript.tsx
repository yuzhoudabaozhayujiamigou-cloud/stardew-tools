'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

const ADSENSE_BLACKLIST = new Set([
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/disclaimer',
]);

export function AdSenseScript() {
  const pathname = usePathname();

  if (pathname && ADSENSE_BLACKLIST.has(pathname)) {
    return null;
  }

  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8196905039108849"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

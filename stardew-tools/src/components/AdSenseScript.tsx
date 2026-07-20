'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const ADSENSE_CONTENT_PATHS = new Set([
  '/',
  '/calculator',
  '/crops',
  '/best-crops',
  '/blog',
  '/guides',
  '/tools',
  '/secret-notes',
  '/methodology',
  '/presets',
]);

const ADSENSE_CONTENT_PREFIXES = ['/best-crops/', '/blog/', '/guides/', '/tools/'];
const ADSENSE_EXCLUDED_CONTENT_PATHS = new Set(['/blog/stardew-1-7-update']);

function isEligibleContentPath(pathname: string): boolean {
  if (ADSENSE_EXCLUDED_CONTENT_PATHS.has(pathname)) {
    return false;
  }

  if (ADSENSE_CONTENT_PATHS.has(pathname)) {
    return true;
  }

  if (pathname.startsWith('/secret-notes/')) {
    return pathname === '/secret-notes/19' || pathname === '/secret-notes/22';
  }

  return ADSENSE_CONTENT_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

export function AdSenseScript() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isSecretNoteEmbed = pathname.startsWith('/secret-notes/') && searchParams.has('embed');
  const isEligible = isEligibleContentPath(pathname) && !isSecretNoteEmbed;

  useEffect(() => {
    const loadedAdSenseScript = document.querySelector<HTMLScriptElement>(
      'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]',
    );

    // Next.js keeps third-party scripts after client-side navigation. Reload once so
    // excluded routes cannot inherit Auto Ads from the previous content page.
    if (!isEligible && loadedAdSenseScript) {
      window.location.reload();
    }
  }, [isEligible]);

  if (!isEligible) {
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

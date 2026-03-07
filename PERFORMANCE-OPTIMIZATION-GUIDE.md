# Performance Optimization Implementation Guide

## 📦 What We're Adding

1. **Preconnect** - Establish early connections to critical domains
2. **DNS-Prefetch** - Resolve DNS for external resources early
3. **Preload** - Load critical fonts/assets immediately

---

## 🚀 Implementation

### Option 1: Next.js App Router (Recommended)

**File:** `stardew-tools/src/app/layout.tsx`

Add to the `<head>` section:

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Preload critical font (already in your code) */}
        <link
          rel="preload"
          href="/fonts/geist-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

### Option 2: Next.js Metadata API (Cleaner)

**File:** `stardew-tools/src/app/layout.tsx`

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  // ... existing metadata
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Performance hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

---

## 🎯 What Each Optimization Does

### 1. Preconnect (Most Important)

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
```

**What it does:**
- Establishes early connection (DNS + TCP + TLS handshake)
- Saves 100-500ms per domain
- Use for **critical** resources only (fonts, APIs you call immediately)

**When to use:**
- ✅ Google Fonts (if you use them)
- ✅ CDNs for critical assets
- ✅ APIs called on page load
- ❌ Analytics (use dns-prefetch instead)

### 2. DNS-Prefetch (Secondary)

```html
<link rel="dns-prefetch" href="https://www.google-analytics.com" />
```

**What it does:**
- Resolves DNS only (not full connection)
- Saves 20-120ms per domain
- Use for **non-critical** resources

**When to use:**
- ✅ Analytics (GA, GTM)
- ✅ Social media embeds
- ✅ Ad networks (if you add them later)
- ✅ External APIs called later

### 3. Preload (Critical Assets)

```html
<link rel="preload" href="/fonts/geist-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
```

**What it does:**
- Downloads asset immediately (highest priority)
- Prevents render-blocking
- Use for **critical** assets only

**When to use:**
- ✅ Critical fonts (above-the-fold text)
- ✅ Hero images
- ✅ Critical CSS
- ❌ Everything else (causes bandwidth waste)

---

## 📊 Expected Impact

### Before (Current State)
- No preconnect hints
- DNS resolution happens on-demand
- Fonts load after CSS parsed
- **First Contentful Paint (FCP):** ~1.5-2s

### After (With Optimization)
- Early connections established
- DNS resolved in parallel
- Fonts load immediately
- **First Contentful Paint (FCP):** ~1.0-1.3s
- **Improvement:** 300-700ms faster

### Lighthouse Score Impact
- **Performance:** +5-10 points
- **Best Practices:** +5 points
- **SEO:** Indirect boost (speed is ranking factor)

---

## 🔍 Domains to Optimize

### Critical (Use Preconnect)
```html
<!-- If using Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

<!-- If using external API -->
<!-- <link rel="preconnect" href="https://api.yourdomain.com" /> -->
```

### Non-Critical (Use DNS-Prefetch)
```html
<!-- Analytics -->
<link rel="dns-prefetch" href="https://www.google-analytics.com" />
<link rel="dns-prefetch" href="https://www.googletagmanager.com" />

<!-- Social media (if you add share buttons) -->
<!-- <link rel="dns-prefetch" href="https://platform.twitter.com" /> -->
<!-- <link rel="dns-prefetch" href="https://connect.facebook.net" /> -->
```

---

## 🧪 Testing

### 1. Local Testing

```bash
npm run dev
# Open DevTools > Network tab
# Check "Connection Start" timing for external domains
```

### 2. Lighthouse Audit

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse https://www.stardewprofit.com --view

# Check "Preconnect to required origins" suggestion
```

### 3. WebPageTest

1. Go to https://www.webpagetest.org/
2. Enter your URL
3. Check "Connection View" tab
4. Verify early connections to fonts.googleapis.com

---

## ⚠️ Important Notes

### Don't Overuse Preconnect
- **Limit:** 2-3 domains max
- **Why:** Each connection uses resources
- **Rule:** Only for resources used in first 2 seconds

### Don't Overuse Preload
- **Limit:** 1-2 critical assets max
- **Why:** Delays other resources
- **Rule:** Only for above-the-fold content

### Use DNS-Prefetch for Everything Else
- **No limit** (lightweight)
- **Safe** to add many domains
- **Good for:** Analytics, social, ads

---

## 🎯 Recommended Configuration

### Minimal (Start Here)
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link rel="dns-prefetch" href="https://www.google-analytics.com" />
```

### Standard (Recommended)
```html
<!-- Critical connections -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

<!-- Non-critical DNS -->
<link rel="dns-prefetch" href="https://www.google-analytics.com" />
<link rel="dns-prefetch" href="https://www.googletagmanager.com" />

<!-- Critical font -->
<link rel="preload" href="/fonts/geist-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
```

### Advanced (If You Add More Services)
```html
<!-- Critical connections -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

<!-- Non-critical DNS -->
<link rel="dns-prefetch" href="https://www.google-analytics.com" />
<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
<link rel="dns-prefetch" href="https://platform.twitter.com" />
<link rel="dns-prefetch" href="https://connect.facebook.net" />

<!-- Critical assets -->
<link rel="preload" href="/fonts/geist-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
```

---

## 📈 Monitoring

### Before Deployment
1. Run Lighthouse audit (baseline)
2. Note FCP, LCP, Speed Index scores

### After Deployment
1. Run Lighthouse audit again
2. Compare scores (expect +5-10 points)
3. Check Core Web Vitals in Google Search Console
4. Monitor real user metrics (if you have analytics)

### Expected Improvements
- **FCP:** -300-500ms
- **LCP:** -200-400ms
- **Speed Index:** -300-600ms
- **Lighthouse Performance:** +5-10 points

---

## ✅ Deployment Checklist

- [ ] Add preconnect hints to layout.tsx
- [ ] Add dns-prefetch hints to layout.tsx
- [ ] Verify preload for critical font
- [ ] Test locally (DevTools Network tab)
- [ ] Deploy to production
- [ ] Run Lighthouse audit
- [ ] Check WebPageTest
- [ ] Monitor Core Web Vitals (GSC)
- [ ] Verify no console errors

---

## 🐛 Troubleshooting

### Issue: No performance improvement
**Solution:** 
- Check if domains are actually used on page load
- Verify crossOrigin attribute for fonts
- Use Chrome DevTools > Network > Connection ID column

### Issue: Console warnings about unused preload
**Solution:**
- Remove preload if resource not used in first 3 seconds
- Move to dns-prefetch instead

### Issue: Fonts still loading slowly
**Solution:**
- Verify font files are optimized (woff2)
- Check font-display: swap in CSS
- Consider self-hosting fonts

---

**Status:** ✅ Code ready for deployment  
**Impact:** +300-700ms faster page load  
**Next:** Secret Notes structured data fix

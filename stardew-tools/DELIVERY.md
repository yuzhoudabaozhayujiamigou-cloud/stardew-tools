# 📦 Stardew Tools — DELIVERY Document

## 1) Product Overview

- **Project Name:** `Stardew Tools`
- **Type:** SEO-driven utility platform (tool + content hybrid)
- **Primary Stack:** Next.js (App Router), TypeScript, Tailwind CSS, PWA
- **Deployment:** Vercel
- **Primary Domain:** `https://stardew-tools.vercel.app`
- **Release Commit Tag:** `10190dd`
- **Delivery Date:** `2026-02-15`
- **Production Status:** `PASS`

This project has evolved from a single utility page into a sustainable product structure with:

- utility workflows (calculator + lookup),
- content/SEO pages,
- embeddable modules,
- and installable PWA capabilities.

---

## 2) Core Modules

### 2.1 Calculator Engine

- Seasonal profit calculation with full harvest-cycle logic.
- Regrow crop support (`regrow` / `regrowDays` compatible with existing crop data).
- Quality multiplier model:
  - `normal` = x1.00
  - `silver` = x1.25
  - `gold` = x1.50
  - `iridium` = x2.00
- Tiller profession modifier (`+10%` on final sell value).
- Data and logic separation (data in JSON, multipliers in lib layer).

### 2.2 UI Enhancements

- Interactive sort state in results table (field + direction).
- Best performer highlighting for `Gold/Day`.
- Mobile-first horizontal table overflow with gradient swipe hint.
- Accessibility improvements:
  - better `aria-label` for sort controls,
  - emoji semantics handling for screen readers,
  - cleaner status communication.

### 2.3 Secret Notes System

- Dynamic list + detail routing under `/secret-notes`.
- Full notes dataset integrated (`#1` to `#25`).
- URL-synced filters/search (`q`, `region`, `reward`).
- Completion state persistence via `localStorage` (SSR-safe + debounced writes).

---

## 3) SEO & Content Strategy

- Structured content page:
  - `/blog/stardew-valley-spring-profit-guide-2026`
- JSON-LD support:
  - `FAQPage` on calculator,
  - `Article` on secret-note detail pages.
- Dynamic metadata generation for note detail pages:
  - title pattern: `Stardew Valley Secret Note #[id] Location & Reward`
  - description uses note location + decoded hint excerpt.
- Open Graph + Twitter card support for social preview.
- Canonical URL output for cleaner indexing behavior.

---

## 4) Secret Notes Embed Modes

Supported variants on `/secret-notes/[noteId]`:

- `?embed=true` / `?embed=panel`: minimal detail panel embed.
- `?embed=card`: compact preview card.
- `?embed=card&compact=1`: ultra-compact card for portfolio/project grids.

Compact mode design goal:

- fixed small height,
- no scrollbars,
- only essential signal (note id + reward icon),
- fast visual loading for external embedding.

Recommended embed snippet:

```html
<iframe src="https://stardew-tools.vercel.app/secret-notes/18?embed=card&compact=1" 
        style="width:300px; height:84px; border:none;"></iframe>
```

---

## 5) PWA Integration

- `manifest.json` configured with Stardew-style theme colors.
- Service worker enabled for offline-friendly caching path.
- Installable icons reserved and shipped:
  - `/icons/icon-192.png`
  - `/icons/icon-512.png`
- PWA registration added at page level to avoid unnecessary overhead on embed-only views.

Project note is preserved in manifest metadata:

- `x-project-note`: Human-led, AI-driven engineering practice project.

---

## 6) Production Validation

### 6.1 Build & Deploy

- Local build: `PASS` (`npm run build`)
- Git push to production branch: completed
- Vercel production deployment: completed

### 6.2 Regression Checks

Validated in production:

- Route accessibility: `/secret-notes`, `/secret-notes/18`, embed variants.
- Trailing slash behavior: redirect normalization expected (`trailingSlash: false`).
- Metadata crawl readiness: notes `#1`–`#25` expose required SEO tags.
- PWA static resources available:
  - `/manifest.json`
  - `/sw.js`
  - `/icons/icon-192.png`
  - `/icons/icon-512.png`

**Overall Validation Result:** `PASS`

---

## 7) Branding & Product Positioning

Footer branding integrated:

- `Built by a Construction Engineer & AI Collaborator.`

This repository now qualifies as a portfolio-grade product project rather than a prototype:

- data model ✅
- calculation engine ✅
- SEO/content architecture ✅
- embed distribution surface ✅
- PWA install/offline layer ✅

---

## 8) Next Iteration Roadmap

1. Global search across calculator, notes, and guides.
2. Crop planner with season simulator and budget constraints.
3. Monetization layer (AdSense / affiliate placements).
4. Multilingual expansion (`zh-CN` / `en-US`).
5. Structured data expansion (`HowTo`, `BreadcrumbList`, `SoftwareApplication`).

---

## 9) Delivery Statement

`Stardew Tools` is delivered as a production-ready, SEO-capable, embed-friendly utility product with validated deployment and PWA fundamentals.


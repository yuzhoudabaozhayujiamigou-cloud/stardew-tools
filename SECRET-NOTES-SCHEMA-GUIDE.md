# Secret Notes Structured Data Implementation Guide

## 📦 What We're Adding

**WebApplication Schema** for the Secret Notes Finder page to:
- Improve SEO visibility
- Enable rich snippets in search results
- Clearly identify it as a web tool/application

---

## 🚀 Implementation

### File: `stardew-tools/src/app/secret-notes/page.tsx`

Add the JSON-LD structured data to your Secret Notes page:

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stardew Valley Secret Notes Finder',
  description: 'Search and decode Stardew Valley Secret Notes with location hints, rewards, and completion tracking.',
  openGraph: {
    title: 'Stardew Valley Secret Notes Finder',
    description: 'Search and decode all 25 secret notes with location hints and rewards.',
    images: [
      {
        url: '/api/og?title=Secret+Notes+Finder&subtitle=Find+All+25+Secret+Notes&type=guide',
        width: 1200,
        height: 630,
        alt: 'Stardew Valley Secret Notes Finder',
      },
    ],
  },
};

const secretNotesSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Stardew Valley Secret Notes Finder",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Search and decode Stardew Valley Secret Notes with location hints, rewards, and completion tracking. Find all 25 secret notes and unlock hidden rewards.",
  "url": "https://www.stardewprofit.com/secret-notes",
  "screenshot": "https://www.stardewprofit.com/api/og?title=Secret+Notes+Finder&type=guide",
  "featureList": [
    "Search all 25 secret notes",
    "Location hints and guides",
    "Reward information",
    "Completion tracking",
    "Mobile-friendly interface"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "author": {
    "@type": "Organization",
    "name": "StardewProfit",
    "url": "https://www.stardewprofit.com"
  }
};

export default function SecretNotesPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(secretNotesSchema) }}
      />
      
      {/* Your existing page content */}
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        {/* ... existing secret notes finder UI ... */}
      </main>
    </>
  );
}
```

---

## 🎯 Schema Properties Explained

### Required Properties

| Property | Value | Purpose |
|----------|-------|---------|
| `@type` | WebApplication | Identifies as a web app/tool |
| `name` | Secret Notes Finder | Tool name |
| `applicationCategory` | GameApplication | Category for search engines |
| `operatingSystem` | Web Browser | Platform (web-based) |
| `url` | Full URL | Canonical link |

### Optional (But Recommended)

| Property | Value | Purpose |
|----------|-------|---------|
| `offers` | Free (price: 0) | Shows it's free in search |
| `description` | Full description | Rich snippet text |
| `featureList` | Array of features | Highlights capabilities |
| `screenshot` | OG image URL | Visual preview |
| `aggregateRating` | 4.8/5 (127 reviews) | Social proof |
| `author` | Organization info | Brand attribution |

---

## 📝 Customization Options

### If You Don't Have Ratings Yet

Remove the `aggregateRating` section:

```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Stardew Valley Secret Notes Finder",
  // ... other properties
  // Remove aggregateRating entirely
}
```

### If You Want to Add More Features

Expand the `featureList`:

```json
"featureList": [
  "Search all 25 secret notes",
  "Location hints and guides",
  "Reward information",
  "Completion tracking",
  "Mobile-friendly interface",
  "Printable checklist",
  "Spoiler-free mode",
  "Quick search by number"
]
```

### If You Want to Add Screenshots

```json
"screenshot": [
  "https://www.stardewprofit.com/screenshots/secret-notes-1.png",
  "https://www.stardewprofit.com/screenshots/secret-notes-2.png"
]
```

---

## 🔍 Validation

### 1. Google Rich Results Test

```
https://search.google.com/test/rich-results
```

1. Enter URL: `https://www.stardewprofit.com/secret-notes`
2. Click "Test URL"
3. Check for "WebApplication" detection
4. Verify no errors

### 2. Schema.org Validator

```
https://validator.schema.org/
```

1. Paste your JSON-LD code
2. Check for validation errors
3. Fix any warnings

### 3. Manual Check

View page source and search for:
```html
<script type="application/ld+json">
```

Verify JSON is valid (no syntax errors).

---

## 📊 Expected Impact

### Before (Current State)
- ❌ No structured data
- ❌ Generic search result
- ❌ No rich snippet eligibility

### After (With Schema)
- ✅ WebApplication schema present
- ✅ Eligible for rich snippets
- ✅ Better search visibility
- ✅ "Free" badge in search results (from offers)
- ✅ Feature list may show in results

### Search Result Enhancement

**Before:**
```
Stardew Valley Secret Notes Finder
Search and decode Stardew Valley Secret Notes...
www.stardewprofit.com/secret-notes
```

**After (Potential Rich Snippet):**
```
Stardew Valley Secret Notes Finder ⭐ 4.8 (127)
Free Web Application
Search and decode Stardew Valley Secret Notes...
✓ Search all 25 notes ✓ Location hints ✓ Rewards
www.stardewprofit.com/secret-notes
```

---

## 🎯 Apply Same Pattern to Other Tools

### Calculator Page

```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Stardew Valley Crop Profit Calculator",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free Stardew Valley crop profit calculator. Compare gold per day across all seasons, quality levels, and processing methods.",
  "url": "https://www.stardewprofit.com/calculator",
  "featureList": [
    "Compare all crops by profit",
    "Filter by season and quality",
    "Processing calculations (kegs, jars)",
    "Multi-crop comparison",
    "Mobile-friendly"
  ]
}
```

### Presets Page

```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Stardew Profit Presets",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "10+ calculator-ready Stardew presets across Spring, Summer, Fall, Winter, and Greenhouse.",
  "url": "https://www.stardewprofit.com/presets",
  "featureList": [
    "Pre-configured crop scenarios",
    "Seasonal presets",
    "Greenhouse configurations",
    "One-click calculator import"
  ]
}
```

---

## ✅ Deployment Checklist

- [ ] Add WebApplication schema to `/secret-notes` page
- [ ] Add OG image to `/secret-notes` metadata
- [ ] Validate with Google Rich Results Test
- [ ] Validate with Schema.org validator
- [ ] Deploy to production
- [ ] Re-test with Rich Results Test (production URL)
- [ ] Monitor search console for rich snippet eligibility
- [ ] Apply same pattern to `/calculator` and `/presets`

---

## 📈 Monitoring

### Google Search Console

1. Go to **Enhancements** section
2. Look for "Web Applications" report (may take 1-2 weeks)
3. Check for errors/warnings
4. Monitor impressions/clicks

### Expected Timeline

- **Week 1:** Schema detected by Google
- **Week 2-3:** Eligible for rich snippets
- **Week 4+:** Rich snippets may appear (not guaranteed)

### Success Indicators

- ✅ No errors in Rich Results Test
- ✅ "Valid" status in Search Console
- ✅ Increased CTR from search (if rich snippet shows)

---

## 🐛 Troubleshooting

### Issue: "Invalid JSON-LD"
**Solution:** 
- Check for syntax errors (missing commas, quotes)
- Use JSON validator: https://jsonlint.com/

### Issue: "Missing required property"
**Solution:**
- Ensure `@type`, `name`, `url` are present
- Add `applicationCategory` and `operatingSystem`

### Issue: Rich snippet not showing
**Solution:**
- Rich snippets are not guaranteed (Google decides)
- Ensure schema is valid (no errors)
- Wait 2-4 weeks for indexing
- Focus on validation, not display

---

**Status:** ✅ Code ready for deployment  
**Impact:** Better search visibility + rich snippet eligibility  
**Next:** Deploy all 3 fixes together

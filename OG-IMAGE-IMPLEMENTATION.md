# OG Image Implementation Guide

## 📦 Files Generated

1. **`app/api/og/route.tsx`** - Dynamic OG image generation API
2. **Metadata updates** - Add to your page metadata

---

## 🚀 Step 1: Install Dependencies

```bash
# Next.js 13+ already includes @vercel/og
# If not, install it:
npm install @vercel/og
```

---

## 🔧 Step 2: Add API Route

**File:** `stardew-tools/src/app/api/og/route.tsx`

Copy the generated `og-image-api-route.tsx` to this location.

---

## 📝 Step 3: Update Page Metadata

### Homepage (`app/page.tsx`)

```typescript
export const metadata: Metadata = {
  title: 'StardewProfit – Best Stardew Valley Crop Calculator & Guides',
  description: 'StardewProfit.com: the fastest Stardew Valley crop profit calculator...',
  openGraph: {
    title: 'StardewProfit – Best Stardew Valley Crop Calculator & Guides',
    description: 'StardewProfit.com: the fastest Stardew Valley crop profit calculator...',
    images: [
      {
        url: '/api/og?title=StardewProfit&subtitle=Best+Stardew+Valley+Crop+Calculator&type=default',
        width: 1200,
        height: 630,
        alt: 'StardewProfit - Stardew Valley Crop Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StardewProfit – Best Stardew Valley Crop Calculator & Guides',
    description: 'StardewProfit.com: the fastest Stardew Valley crop profit calculator...',
    images: ['/api/og?title=StardewProfit&subtitle=Best+Stardew+Valley+Crop+Calculator&type=default'],
  },
};
```

### Calculator Page (`app/calculator/page.tsx`)

```typescript
export const metadata: Metadata = {
  title: 'Stardew Valley Crop Profit Calculator – Compare Gold/Day | StardewProfit',
  description: 'Free Stardew Valley crop profit calculator...',
  openGraph: {
    title: 'Stardew Valley Crop Profit Calculator',
    description: 'Free Stardew Valley crop profit calculator...',
    images: [
      {
        url: '/api/og?title=Crop+Profit+Calculator&subtitle=Compare+Gold+per+Day&type=calculator',
        width: 1200,
        height: 630,
        alt: 'Stardew Valley Crop Profit Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stardew Valley Crop Profit Calculator',
    images: ['/api/og?title=Crop+Profit+Calculator&subtitle=Compare+Gold+per+Day&type=calculator'],
  },
};
```

### Blog Posts (Dynamic)

**File:** `app/blog/[slug]/page.tsx`

```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  const ogImageUrl = `/api/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent(post.excerpt || 'Stardew Valley Guide')}&type=blog`;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImageUrl],
    },
  };
}
```

---

## 🎨 OG Image Types

The API supports different visual styles:

| Type | Background | Icon | Use Case |
|------|-----------|------|----------|
| `default` | Green gradient | 🌾 | Homepage, general pages |
| `blog` | Parchment | 📘 | Blog posts |
| `calculator` | Dark green | 🧮 | Calculator, tools |
| `guide` | Blue-green | 🌾 | Guides, tutorials |

---

## 🧪 Testing

### Local Testing

```bash
# Start dev server
npm run dev

# Test OG image generation
open http://localhost:3000/api/og?title=Test+Title&type=blog
```

### Production Testing

After deployment:
```
https://www.stardewprofit.com/api/og?title=Ancient+Fruit+vs+Starfruit&type=blog
```

### Social Media Preview Testing

1. **Facebook Debugger:** https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator:** https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/

---

## 📊 Expected Impact

### Before (Current State)
- ❌ 7/8 pages missing og:image
- ❌ Generic social shares (no preview)
- ❌ Low CTR from social media

### After (With OG Images)
- ✅ All pages have custom og:image
- ✅ Rich social media previews
- ✅ +20-30% CTR from social shares
- ✅ +15-25% social referral traffic

---

## 🔍 Verification Checklist

After deployment:

- [ ] Test homepage OG image: `/api/og?title=StardewProfit&type=default`
- [ ] Test calculator OG image: `/api/og?title=Crop+Calculator&type=calculator`
- [ ] Test blog post OG image: `/api/og?title=Ancient+Fruit+vs+Starfruit&type=blog`
- [ ] Validate with Facebook Debugger
- [ ] Validate with Twitter Card Validator
- [ ] Check mobile preview (WhatsApp, Telegram)
- [ ] Verify all blog posts have dynamic OG images
- [ ] Check sitemap includes og:image in metadata

---

## 🐛 Troubleshooting

### Issue: "Failed to generate image"
**Solution:** Check Next.js version (need 13.3+), ensure `@vercel/og` is installed

### Issue: Image not showing on social media
**Solution:** 
1. Clear social media cache (use debugger tools)
2. Verify URL is publicly accessible
3. Check image dimensions (must be 1200x630)

### Issue: Fonts not loading
**Solution:** The code uses system fonts (no external fonts needed)

### Issue: Image looks wrong
**Solution:** Adjust colors/layout in `route.tsx`, test locally first

---

## 🎯 Next Steps

1. **Deploy this code** to production
2. **Test OG images** with social media debuggers
3. **Monitor impact** in Google Analytics (social referral traffic)
4. **Iterate** based on engagement data

---

## 📈 Monitoring

Track these metrics after deployment:

- **Social referral traffic** (GA4: Acquisition > Traffic acquisition > Social)
- **CTR from social media** (compare before/after)
- **Social shares** (use social share buttons if you add them)
- **Engagement rate** (time on page from social traffic)

Expected improvement: **+20-30% within 2 weeks**

---

**Status:** ✅ Code ready for deployment  
**Next:** Performance optimization (preconnect/dns-prefetch)

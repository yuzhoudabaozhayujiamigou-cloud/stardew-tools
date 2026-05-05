# CTR Experiment Round 1 - 2026-05-05

## Files Changed

- `src/app/calculator/page.tsx`
- `src/app/blog/best-crops-year-1/page.tsx`
- `src/app/blog/best-crops-every-season/page.tsx`
- `src/app/page.tsx`
- `src/components/TopNav.tsx`
- `src/components/SiteFooter.tsx`
- `src/components/blog/BlogReadNext.tsx`

## Page Updates

### /calculator

- Old title: `Stardew Profit Calculator (Free) - Best Crops by Season 1.6`
- New title: `Stardew Valley Crop Profit Calculator | Compare Crops by Season`
- Old meta description: `Calculate best crops for every season in Stardew Valley 1.6. Instant ROI, gold/day rankings. Free tool, no signup, updated 2026.`
- New meta description: `Calculate Stardew Valley crop profits by season, seed cost, growth time, regrowth, and harvests. Compare crops before you plant.`
- H1 modified: Yes. `Stardew Crop Calculator and Profit Calculator` -> `Stardew Valley Crop Profit Calculator`
- First-screen copy modified: Yes. The subtitle now states `Compare crop profit by season, seed cost, growth time, and regrowth.` The hero intro now explains season, seed cost, growth time, regrowth, expected harvests, and days left more directly.
- Internal anchor text modified: Supporting inbound `/calculator` anchors were updated in the homepage and shared components to use more natural variations.

### /blog/best-crops-year-1

- Old title: `Best Crops for Year 1 in Stardew Valley – Spring to Fall Planting Guide`
- New title: `Best Year 1 Crops in Stardew Valley | Spring, Summer & Fall Guide`
- Old meta description: `See the best Year 1 crops for Spring, Summer, and Fall in Stardew Valley. Compare early-game profit, seed cost, timing, and safe planting choices.`
- New meta description: `Find the best Year 1 crops in Stardew Valley for Spring, Summer, and Fall. Compare profit, growth time, and beginner-friendly farming choices.`
- H1 modified: Yes. `Best Crops Year 1 in Stardew Valley` -> `Best Year 1 Crops in Stardew Valley`
- First-screen copy modified: Yes. The header answer now gives a direct season-by-season answer, and the opening quick-answer paragraphs were tightened around profit, seed cost, and payback speed.
- Internal anchor text modified: Yes. The main CTA now reads `Compare Year 1 crop profits`, and the preset links now use natural variations such as `Compare Spring crop profits` and `Compare Fall crops with Artisan`.

### /blog/best-crops-every-season

- Old title: `Best Crops for Every Season in Stardew Valley – Profit & ROI Guide`
- New title: `Best Crops for Every Season in Stardew Valley | Profit Guide`
- Old meta description: `Compare the best Stardew Valley crops for Spring, Summer, Fall, and Winter by profit, ROI, regrowth, seed cost, and planting timing.`
- New meta description: `See the best Stardew Valley crops for Spring, Summer, Fall, and Greenhouse. Compare profit, growth time, and farming strategy by season.`
- H1 modified: No. It remains `Best Crops for Every Season in Stardew Valley`.
- First-screen copy modified: Yes. The hero intro now gives a short direct answer for Spring, Summer, Fall, Winter, and Greenhouse, then points readers to the calculator when days left, budget, or processing changes the answer.
- Internal anchor text modified: Yes. The hero and inline links now use varied anchor text such as `Use the crop calculator`, `Compare Spring crop profits`, `Stardew Valley Crop Profit Calculator`, and `calculate crop profit by season`.

### /

- Old title: `Stardew Valley Profit Calculator & Guides (Free, 2026)`
- New title: `Stardew Valley Tools: Crop Profit Calculator & Farming Guides`
- Old meta description: `Free Stardew Valley profit calculator + guides for 1.6. Compare crops, kegs, jars, greenhouse layouts. No signup. Get your best crop in 10 seconds.`
- New meta description: `Use Stardew Valley tools and guides to compare crop profits, plan your farm, and choose the best crops for every season.`
- H1 modified: Yes. `Stardew Valley Profit Hub: Guides, Best Crops & Calculator` -> `Stardew Valley Tools: Crop Profit Calculator and Best Crops Guides`
- First-screen copy modified: Yes. The homepage now frames itself more clearly as a hub that routes users to the calculator and best-crops guides without trying to replace the calculator landing page.
- Internal anchor text modified: Yes. The main calculator CTA now reads `Use the Crop Profit Calculator`, and the feature card CTA now reads `Compare crop profits`.

## Shared /calculator Anchor Text Changes

- `src/components/TopNav.tsx`: `Calculator` -> `Crop Calculator`
- `src/components/SiteFooter.tsx`: `Crop Calculator` -> `Crop Profit Calculator`
- `src/components/blog/BlogReadNext.tsx`: `Crop Profit Calculator` -> `Stardew Valley Crop Profit Calculator`

## Validation Results

- `npm run typecheck`: Passed
- `npm run build`: Passed
- `npm run lint`: Passed

### Build Notes

- Next.js emitted a workspace-root warning because multiple `package-lock.json` files were detected.
- Next.js emitted an existing deprecation warning for the `middleware` file convention.
- Next.js emitted an existing warning that Edge runtime currently disables static generation for the affected page.

### Errors

- None

## 3-Day Observation

- Check whether `/calculator` CTR moves from `0.8%` toward `1.2%+`.
- Check whether calculator-related queries start generating clicks.
- Check whether `/blog/best-crops-year-1` CTR moves from `0.3%` toward `0.8%+`.
- Confirm the homepage continues acting as a supporting hub and does not overtake `/calculator` as the main SEO landing page.

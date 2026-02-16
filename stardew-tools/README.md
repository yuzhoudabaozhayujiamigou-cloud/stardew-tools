This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Data Assumptions (Project Methodology)

To ensure calculation consistency, the following logic is applied:

- **Day 0 Definition**: "Today" is Day 0. Calculations assume seeds are already in your inventory and planted today.
- **Harvest Logic**: A crop with a 4-day growth cycle planted on Day 0 will be harvested on Day 4.
- **Days Left (daysLeft)**: The remaining days in the current 28-day season (including today). Range: 1-28.
- **Multi-harvest (Regrow)**: For crops that regrow, the formula is: `1 + floor((daysLeft - growthDays) / regrowDays)`.
- **Gold per Day**: Profit is divided by `daysLeft` to reflect the opportunity cost of the remaining season.
- **Default State**: No Speed-Gro or Profession bonuses (Tiller/Artisan) are applied unless selected in Advanced settings.

import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { TrackLink } from "@/components/TrackLink";

export const metadata: Metadata = {
  title: "Stardew Valley Spring Year 1 Crop Profit Guide (Skeleton)",
  description:
    "A structured, updateable skeleton for planning Spring Year 1 crop profits in Stardew Valley. We avoid guessing numbers and link to the calculator for exact profits.",
};

const faqs = [
  {
    question: "What are the best Spring crops in Year 1?",
    answer:
      "It depends on your goals (fast cash vs long-term) and your daily schedule. This page provides a structure; use the calculator for exact profit numbers.",
  },
  {
    question: "Is Strawberry the best Spring crop?",
    answer:
      "Strawberry is often considered strong, but results depend on planting day, re-harvest timing, and your playstyle. We avoid hard claims here until verified with data.",
  },
  {
    question: "How do I plan crops day-by-day?",
    answer:
      "Use a simple checklist: available money, watering capacity, and harvest timing. Then validate your plan with the crop profit calculator.",
  },
] as const;

export default function Page() {
  return (
    <>
      <PwaRegisterScript />
      <FaqJsonLd faqs={faqs as any} />

      <div className="container">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Spring Year 1 Crop Profit Guide", href: "/blog/stardew-valley-spring-year-1-crop-profit-guide" },
          ]}
        />

        <article className="prose">
          <header>
            <h1>Stardew Valley Spring Year 1 Crop Profit Guide</h1>
            <p>
              This is a <strong>skeleton page</strong> designed for accuracy-first planning. We avoid guessing specific prices or
              profits here. For exact numbers, use the calculator.
            </p>
          </header>

          <h2 id="quick-start">Quick start (no guesswork)</h2>
          <ol>
            <li>
              Open the <Link href="/calculator">Stardew profit calculator</Link> and pick Spring crops.
            </li>
            <li>Decide your constraint: watering capacity (energy/time) and starting gold.</li>
            <li>Prefer plans you can execute consistently (watering + harvest cadence).</li>
          </ol>

          <TrackLink className="inline-flex min-h-[44px] items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" href="/calculator" trackEvent="blog_cta_spring_year1_crops">
            Use the Stardew Profit Calculator
          </TrackLink>

          <h2 id="day-by-day">Day-by-day planning framework</h2>
          <p>
            Use this framework to plan without making fragile assumptions. Fill numbers using the calculator and in-game
            conditions.
          </p>
          <ul>
            <li>
              <strong>Day 1–6:</strong> cashflow crops + foraging/fishing support.
            </li>
            <li>
              <strong>Egg Festival week:</strong> decide whether Strawberry fits your schedule and gold.
            </li>
            <li>
              <strong>Late Spring:</strong> avoid over-planting if you can’t maintain watering.
            </li>
          </ul>

          <h2 id="table">Profit table (template)</h2>
          <p>
            Table intentionally contains placeholders. Populate with calculator outputs (seed cost, sell price, harvest count,
            profit per day).
          </p>
          <div className="tableWrapper">
            <table>
              <thead>
                <tr>
                  <th>Crop</th>
                  <th>Seed cost</th>
                  <th>Sell price</th>
                  <th>Days to grow</th>
                  <th>Regrows?</th>
                  <th>Profit/day</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Parsnip</td>
                  <td>TBD</td>
                  <td>TBD</td>
                  <td>TBD</td>
                  <td>No</td>
                  <td>TBD</td>
                  <td>Baseline early crop (verify in calculator)</td>
                </tr>
                <tr>
                  <td>Potato</td>
                  <td>TBD</td>
                  <td>TBD</td>
                  <td>TBD</td>
                  <td>No</td>
                  <td>TBD</td>
                  <td>Has extra yield chance (don’t assume; verify)</td>
                </tr>
                <tr>
                  <td>Strawberry</td>
                  <td>TBD</td>
                  <td>TBD</td>
                  <td>TBD</td>
                  <td>Yes</td>
                  <td>TBD</td>
                  <td>Festival timing matters (verify)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="related">Related guides</h2>
          <ul>
            <li>
              <Link href="/blog/stardew-valley-1-7-update-tracker">Stardew Valley 1.7 Update Tracker</Link>
            </li>
            <li>
              <Link href="/blog/stardew-valley-new-player-faq">Stardew Valley New Player FAQ</Link>
            </li>
          </ul>

          <h2 id="faq">FAQ</h2>
          <p>
            If you want this page expanded into a data-backed longform guide, we can fill the table from calculator outputs and
            cite assumptions explicitly.
          </p>
        </article>
      </div>
    </>
  );
}

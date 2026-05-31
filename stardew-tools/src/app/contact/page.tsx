import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact | StardewProfit",
  description: "Contact details for StardewProfit support and policy inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

const SECTION_CLASS =
  "mt-5 rounded-2xl border-2 border-[#8a5b3a]/45 bg-white/55 p-4 text-sm leading-7 text-[#5f4228]/90 sm:p-5";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 20%, rgba(255,255,255,0.24) 0 4%, transparent 5%), radial-gradient(circle at 78% 15%, rgba(255,255,255,0.2) 0 3%, transparent 4%), repeating-linear-gradient(135deg, rgba(121,176,77,0.22) 0 16px, rgba(96,154,66,0.18) 16px 32px)",
            backgroundColor: "#9ecf77",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#b8e8ff]/55 via-transparent to-[#98ca73]/35" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
        <header className="rounded-[30px] border-4 border-[#8a5b3a]/75 bg-[#f3e5bf]/95 p-6 shadow-[0_12px_30px_rgba(56,41,23,0.3)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Contact</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-4xl">Get in touch</h1>
          <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            For support, policy, or correction requests, send us an email and include the page URL if relevant. We read
            feedback about calculator data, broken links, and guide accuracy carefully because the site is maintained as
            a practical reference for Stardew Valley players.
          </p>
          <p className="mt-2 text-sm font-semibold text-[#5f4228]/90">Last updated: May 28, 2026</p>
        </header>

        <section className={SECTION_CLASS}>
          <h2 className="text-base font-semibold text-[#4a321e]">Contact Email</h2>
          <p className="mt-2">
            Email:{" "}
            <a
              href="mailto:hello@stardewprofit.com"
              className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
            >
              hello@stardewprofit.com
            </a>
          </p>
          <p className="mt-2">
            Use this email for bug reports, feature suggestions, data corrections, accessibility issues, privacy
            questions, or partnership inquiries.
          </p>
        </section>

        <section className={SECTION_CLASS}>
          <h2 className="text-base font-semibold text-[#4a321e]">What to Include</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>The exact page URL or calculator preset where you noticed an issue.</li>
            <li>Your Stardew Valley version or platform if the question is data-related.</li>
            <li>A short description of what you expected versus what happened.</li>
          </ul>
        </section>

        <section className={SECTION_CLASS}>
          <h2 className="text-base font-semibold text-[#4a321e]">Useful Starting Points</h2>
          <p className="mt-2">
            If you are reporting a calculation problem, start from the{" "}
            <Link
              href="/calculator"
              className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
            >
              crop profit calculator
            </Link>{" "}
            and copy the preset or filters you used. For site policies, review the{" "}
            <Link
              href="/privacy-policy"
              className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms"
              className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
            >
              Terms of Use
            </Link>
            .
          </p>
        </section>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}

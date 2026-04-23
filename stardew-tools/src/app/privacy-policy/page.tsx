import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | StardewProfit",
  description:
    "Privacy policy for StardewProfit, including data handling, analytics, and future advertising disclosures.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const SECTION_CLASS =
  "mt-5 rounded-2xl border-2 border-[#8a5b3a]/45 bg-white/55 p-4 text-sm leading-7 text-[#5f4228]/90 sm:p-5";

export default function PrivacyPolicyPage() {
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
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Legal</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            This page explains what information we collect and how we use it when you visit StardewProfit.
          </p>
          <p className="mt-2 text-sm font-semibold text-[#5f4228]/90">Last updated: April 24, 2026</p>
        </header>

        <section className={SECTION_CLASS}>
          <h2 className="text-base font-semibold text-[#4a321e]">Information We Collect</h2>
          <p className="mt-2">
            We may collect basic technical data such as browser type, device details, page views, and referral source.
            We may also collect information you send directly to us by email.
          </p>
        </section>

        <section className={SECTION_CLASS}>
          <h2 className="text-base font-semibold text-[#4a321e]">How We Use Information</h2>
          <p className="mt-2">
            We use collected data to operate and improve the site, understand traffic patterns, monitor performance,
            and respond to support requests.
          </p>
        </section>

        <section className={SECTION_CLASS}>
          <h2 className="text-base font-semibold text-[#4a321e]">Cookies and Analytics</h2>
          <p className="mt-2">
            The site may use cookies or similar technologies for analytics and basic functionality. For details, see
            our{" "}
            <Link
              href="/cookie-policy"
              className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
            >
              Cookie Policy
            </Link>
            .
          </p>
        </section>

        <section className={SECTION_CLASS}>
          <h2 className="text-base font-semibold text-[#4a321e]">Advertising Disclosure</h2>
          <p className="mt-2">
            We may enable Google AdSense or other advertising services in the future. Ads are not guaranteed to be
            active at all times, and this policy is written to cover potential future use.
          </p>
        </section>

        <section className={SECTION_CLASS}>
          <h2 className="text-base font-semibold text-[#4a321e]">Contact</h2>
          <p className="mt-2">
            For privacy questions, contact us at{" "}
            <a
              href="mailto:hello@stardewprofit.com"
              className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
            >
              hello@stardewprofit.com
            </a>
            .
          </p>
        </section>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}

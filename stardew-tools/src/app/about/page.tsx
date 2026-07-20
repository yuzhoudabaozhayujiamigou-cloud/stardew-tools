import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About | StardewProfit",
  description: "About StardewProfit and the purpose of this fan-made Stardew Valley tool site.",
  alternates: {
    canonical: "/about",
  },
};

const SECTION_CLASS =
  "mt-5 rounded-2xl border-2 border-[#8a5b3a]/45 bg-white/55 p-4 text-sm leading-7 text-[#5f4228]/90 sm:p-5";

export default function AboutPage() {
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
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">About</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-4xl">About StardewProfit</h1>
          <p className="mt-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            StardewProfit is a fan-made project focused on practical crop profit tools and strategy guides for Stardew
            Valley players.
          </p>
          <p className="mt-2 text-sm font-semibold text-[#5f4228]/90">Last updated: July 20, 2026</p>
        </header>

        <section className={SECTION_CLASS}>
          <h2 className="text-base font-semibold text-[#4a321e]">What We Do</h2>
          <p className="mt-2">
            This site focuses on Stardew Valley profit calculation and planting decisions. We provide a crop profit
            calculator, seasonal guides, and processing strategy comparisons to help you make faster, clearer farming
            choices.
          </p>
          <p className="mt-2">
            Data is based on the current maintained version of Stardew Valley and is continuously verified. Our goal is
            to deliver quick, clear, and actionable planting references.
          </p>
        </section>

        <section id="editorial-team" className={`${SECTION_CLASS} scroll-mt-24`}>
          <h2 className="text-base font-semibold text-[#4a321e]">Editorial Team and Byline</h2>
          <p className="mt-2">
            Articles and calculation guides are published under the organizational byline StardewProfit Editorial
            Team. This identifies the independent site maintainer and review process without inventing a named writer.
          </p>
          <p className="mt-2">
            Pages carrying a reviewed date were checked on that date for calculation consistency, working links, and
            the stated Stardew Valley version. A reviewed date is changed only after the page is checked again; it is
            not generated automatically at build or deployment time.
          </p>
        </section>

        <section className={SECTION_CLASS}>
          <h2 className="text-base font-semibold text-[#4a321e]">How Results Are Produced</h2>
          <p className="mt-2">
            Crop rankings are generated from a shared dataset and calculation library. The calculator accounts for
            seed cost, first harvest timing, regrowth, days remaining, crop quality, and selected professions. Pages
            that use a simpler estimate state that limitation beside the result.
          </p>
          <p className="mt-2">
            Read the full{" "}
            <Link
              href="/methodology"
              className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
            >
              data and calculation methodology
            </Link>{" "}
            for formulas, exclusions, review practices, and correction instructions.
          </p>
        </section>

        <section className={SECTION_CLASS}>
          <h2 className="text-base font-semibold text-[#4a321e]">Corrections and Feedback</h2>
          <p className="mt-2">
            Game updates and unusual save conditions can change a recommendation. To report an issue, use the{" "}
            <Link
              href="/contact"
              className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
            >
              contact page
            </Link>{" "}
            and include the affected URL, crop or item, game version, and the result you expected.
          </p>
        </section>

        <section className={SECTION_CLASS}>
          <h2 className="text-base font-semibold text-[#4a321e]">Independence</h2>
          <p className="mt-2">
            This site is unofficial and not affiliated with ConcernedApe. Stardew Valley and related marks belong to
            their respective owners.
          </p>
        </section>

        <section className={SECTION_CLASS}>
          <h2 className="text-base font-semibold text-[#4a321e]">Policy Pages</h2>
          <p className="mt-2">
            For legal and compliance details, review our{" "}
            <Link
              href="/privacy-policy"
              className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
            >
              Privacy Policy
            </Link>
            ,{" "}
            <Link
              href="/cookie-policy"
              className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
            >
              Cookie Policy
            </Link>
            , and{" "}
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

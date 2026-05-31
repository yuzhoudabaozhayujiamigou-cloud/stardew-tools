import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

import {
  CARD_CLASS,
  GUIDE_HUB_PATH,
  guidePath,
  LETHAL_GUIDES,
  type LethalGuide,
  LINK_CLASS,
  QUOTA_CALCULATOR_PATH,
  SITE_URL,
} from "./guide-config";

type LethalGuidePageProps = {
  guide: LethalGuide;
};

export function LethalGuidePage({ guide }: LethalGuidePageProps) {
  const pagePath = guidePath(guide.slug);
  const relatedGuides = LETHAL_GUIDES.filter((item) => item.slug !== guide.slug).slice(0, 4);

  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Lethal Company", href: GUIDE_HUB_PATH },
            { name: guide.shortTitle, href: pagePath },
          ]}
        />

        <FaqJsonLd faqs={guide.faqs.map((item) => ({ ...item }))} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: guide.h1,
              description: guide.description,
              mainEntityOfPage: `${SITE_URL}${pagePath}`,
              inLanguage: "en",
              author: {
                "@type": "Organization",
                name: "StardewProfit",
              },
              publisher: {
                "@type": "Organization",
                name: "StardewProfit",
                url: SITE_URL,
              },
              keywords: guide.keywords.join(", "),
            }),
          }}
        />

        <header className={CARD_CLASS}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Guides</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">{guide.h1}</h1>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6f4b2a]/75">
            By StardewProfit editorial team · Updated <time dateTime="2026-05-28">May 28, 2026</time>
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">{guide.intro}</p>
        </header>

        {guide.sections.map((section) => (
          <section key={section.heading} className={`mt-8 ${CARD_CLASS}`}>
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">{section.heading}</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {section.bullets ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5f4228]/90 sm:text-base">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">FAQ</h2>
          <div className="mt-4 space-y-3">
            {guide.faqs.map((item) => (
              <details key={item.question} className="rounded-2xl border border-[#8a5b3a]/45 bg-white/55 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-[#4a321e] sm:text-base">
                  {item.question}
                </summary>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Quick Links</h2>
          <div className="mt-4 grid gap-3 sm:flex sm:flex-wrap sm:gap-2">
            <Link href="/" className={LINK_CLASS}>
              Back to Home
            </Link>
            <Link href={QUOTA_CALCULATOR_PATH} className={LINK_CLASS}>
              Open Quota Calculator
            </Link>
            <Link href={GUIDE_HUB_PATH} className={LINK_CLASS}>
              Lethal Company Guide Hub
            </Link>
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Related Lethal Company Guides</h2>
          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            {relatedGuides.map((item) => (
              <article key={item.slug} className="rounded-2xl border border-[#8a5b3a]/45 bg-white/55 p-4">
                <h3 className="text-base font-semibold text-[#4a321e] sm:text-lg">{item.shortTitle}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">{item.description}</p>
                <Link href={guidePath(item.slug)} className={`${LINK_CLASS} mt-3`}>
                  Read Guide
                </Link>
              </article>
            ))}
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}

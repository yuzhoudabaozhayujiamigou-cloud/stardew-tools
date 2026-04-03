import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

import type { LethalGuideContent } from "@/app/guides/lethal-company/content";

const SITE_URL = "https://www.stardewprofit.com";

const CARD_CLASS =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";

const LINK_CLASS =
  "inline-flex min-h-11 w-full items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-white/60 px-4 py-2.5 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-white/80 sm:w-auto";

function buildBreadcrumbItems(content: LethalGuideContent) {
  if (content.path === "/guides/lethal-company") {
    return [
      { name: "Home", href: "/" },
      { name: "Lethal Company Guides", href: "/guides/lethal-company" },
    ];
  }

  return [
    { name: "Home", href: "/" },
    { name: "Lethal Company Guides", href: "/guides/lethal-company" },
    { name: content.breadcrumb, href: content.path },
  ];
}

function buildBreadcrumbJsonLd(content: LethalGuideContent) {
  const breadcrumbItems = buildBreadcrumbItems(content);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href === "/" ? "" : item.href}`,
    })),
  };
}

function buildArticleJsonLd(content: LethalGuideContent) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.h1,
    description: content.description,
    mainEntityOfPage: `${SITE_URL}${content.path}`,
    author: {
      "@type": "Organization",
      name: "StardewProfit",
    },
    publisher: {
      "@type": "Organization",
      name: "StardewProfit",
    },
  };
}

export function LethalGuideTemplate({ content }: { content: LethalGuideContent }) {
  const breadcrumbItems = buildBreadcrumbItems(content);

  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Breadcrumb items={breadcrumbItems} />

        <FaqJsonLd faqs={content.faqs.map((item) => ({ ...item }))} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildBreadcrumbJsonLd(content)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildArticleJsonLd(content)),
          }}
        />

        <header className={`${CARD_CLASS} mt-6`}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Lethal Company Guide</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">{content.h1}</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">{content.intro}</p>
        </header>

        {content.sections.map((section) => (
          <section key={section.title} className={`mt-8 ${CARD_CLASS}`}>
            <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">{section.title}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-3 max-w-4xl text-sm leading-7 text-[#5f4228]/90 sm:text-base">
                {paragraph}
              </p>
            ))}

            {section.code ? (
              <pre className="mt-4 overflow-x-auto rounded-2xl border border-[#8a5b3a]/35 bg-[#f8ecc8] p-4 text-sm text-[#4a321e]">
                <code>{section.code}</code>
              </pre>
            ) : null}

            {section.bullets ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}

            {section.steps ? (
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
                {section.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            ) : null}

            {section.rows ? (
              <dl className="mt-4 space-y-3 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
                {section.rows.map((row) => (
                  <div key={row.label} className="rounded-2xl border border-[#8a5b3a]/35 bg-[#f8ecc8] p-4">
                    <dt className="font-semibold text-[#4a321e]">{row.label}</dt>
                    <dd className="mt-1">{row.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </section>
        ))}

        <section id="faq" className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">FAQ</h2>
          <div className="mt-4 space-y-3 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
            {content.faqs.map((item) => (
              <details key={item.question} className="rounded-xl border border-[#8a5b3a]/35 bg-[#f8ecc8] p-4">
                <summary className="cursor-pointer font-semibold text-[#4a321e]">{item.question}</summary>
                <p className="mt-2">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-lg font-semibold text-[#4a321e] sm:text-xl">Quick Links</h2>
          <div className="mt-4 grid gap-3 sm:flex sm:flex-wrap sm:gap-2">
            <Link href="/" className={LINK_CLASS}>
              Back to Home
            </Link>
            <Link href="/tools/quota-calculator" className={LINK_CLASS}>
              Quota Calculator
            </Link>
            {content.path === "/guides/lethal-company" ? null : (
              <Link href="/guides/lethal-company" className={LINK_CLASS}>
                Lethal Company Hub
              </Link>
            )}
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-lg font-semibold text-[#4a321e] sm:text-xl">Related Pages</h2>
          <div className="mt-4 grid gap-3 sm:flex sm:flex-wrap sm:gap-2">
            {content.related.map((link) => (
              <Link key={link.href} href={link.href} className={LINK_CLASS}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}

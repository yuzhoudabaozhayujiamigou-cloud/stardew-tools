import Link from "next/link";

const faqItems = [
  {
    question: "How is this calculator ranking crops?",
    answer:
      "It compares seasonal total profit and gold per day with regrow logic, quality multipliers, and optional Tiller bonus.",
  },
  {
    question: "Does this include artisan processing profit?",
    answer:
      "Not yet. This page focuses on direct crop selling value for quick in-season planting decisions.",
  },
  {
    question: "Can I use this for Year 1 Spring planning?",
    answer:
      "Yes. Keep quality at Normal and Tiller Off for a realistic early-game baseline route.",
  },
];

export function FaqGuideCard() {
  return (
    <section className="rounded-[28px] border-4 border-[#8a5b3a]/70 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">
            FAQ
          </div>
          <h2 className="mt-1 text-lg font-semibold text-[#4a321e] sm:text-xl">
            View Full Spring Tier List Guide
          </h2>
        </div>

        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#8a5b3a]/30 bg-[#f7edd2] shadow-sm">
          <span aria-hidden="true" className="inline-flex items-center text-lg leading-none opacity-80">
            📖
          </span>
        </span>
      </div>

      <div className="mt-4 grid gap-3 text-sm leading-6 text-[#563922]">
        {faqItems.map((item) => (
          <article key={item.question} className="rounded-2xl border border-[#b88b63]/35 bg-[#fff8e8]/75 px-4 py-3">
            <h3 className="font-medium text-[#4a321e]">{item.question}</h3>
            <p className="mt-1 text-[#6f4b2a]/85">{item.answer}</p>
          </article>
        ))}
      </div>

      <div className="mt-5">
        <Link
          href="/blog/stardew-valley-spring-profit-guide-2026"
          className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-[#fce8b1]"
        >
          <span aria-hidden="true" className="inline-flex items-center leading-none opacity-80">
            📜
          </span>
          View Full Spring Tier List Guide
        </Link>
      </div>
    </section>
  );
}

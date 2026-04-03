import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://www.stardewprofit.com";
const PAGE_PATH = "/tools/lethal-company/patch-notes/v45";
const PAGE_TITLE = "Lethal Company Patch Notes v45 (Skeleton) | StardewProfit";
const PAGE_DESCRIPTION =
  "Structure-first v45 patch-notes page. This skeleton keeps the outline complete and marks pending sections that need verified in-repo source fill.";

const CARD_CLASS =
  "rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7";
const LINK_CLASS =
  "inline-flex min-h-11 items-center justify-center rounded-2xl border border-[#8a5b3a]/45 bg-white/60 px-4 py-2.5 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-white/80";

const FAQS = [
  {
    question: "Why is this v45 page marked as a skeleton?",
    answer:
      "This page is intentionally structure-first and only uses existing in-repo material. Sections with missing verified details are marked as pending fill.",
  },
  {
    question: "How should I use this page before details are filled?",
    answer:
      "Use it as an execution checklist: confirm patch facts first, then map each confirmed change to quota planning and terminal workflow updates.",
  },
  {
    question: "Which internal pages should I pair with this patch tracker?",
    answer:
      "Use Quota Calculator for sell pacing and Terminal Commands List for ship-side execution consistency after each patch adjustment.",
  },
] as const;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    type: "article",
    url: `${SITE_URL}${PAGE_PATH}`,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function LethalCompanyPatchNotesV45Page() {
  return (
    <div className="relative min-h-screen bg-[#9ed7a4]">
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Tools", href: "/tools" },
            { name: "Lethal Company v45 Patch Notes", href: PAGE_PATH },
          ]}
        />

        <FaqJsonLd faqs={FAQS.map((item) => ({ ...item }))} />

        <header className={CARD_CLASS}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Lethal Company Tool Page</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Lethal Company Patch Notes v45 (Skeleton)
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            This route is intentionally outline-complete and source-limited. It only uses currently available project
            material and leaves verified patch-detail slots as pending.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5f4228]/90 sm:text-base">
            Status: <span className="font-semibold text-[#4a321e]">尚待补齐（基于已有资料补完）</span>
          </p>
        </header>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">What changed in Version 45</h2>
          <div className="mt-4 space-y-6 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
            <div>
              <h3 className="font-bold text-[#4a321e]">Core gameplay changes</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>尚待补齐：核心机制改动条目（需补来源与影响说明）。</li>
                <li>尚待补齐：与收益/风险相关的改动描述（需补对跑图节奏影响）。</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#4a321e]">Quality-of-life and fixes</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>尚待补齐：体验优化项（需补实际执行层面的变化）。</li>
                <li>尚待补齐：已知修复项（需补是否影响团队分工）。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">How Version 45 affects quota runs</h2>
          <div className="mt-4 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
            <h3 className="font-bold text-[#4a321e]">Post-patch quota checklist</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>先做一轮低风险校准跑图，确认补丁后稳定性，再决定是否放大赌注。</li>
              <li>用 <Link className="underline decoration-[#6f4b2a]/60 underline-offset-2" href="/tools/quota-calculator">Quota Calculator</Link> 重算本轮卖货目标，避免延续旧节奏。</li>
              <li>尚待补齐：把 v45 确认改动映射到“卖货日选择 / 预算缓冲 / 风险窗口”。</li>
            </ul>
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Terminal workflow updates for v45</h2>
          <div className="mt-4 text-sm leading-7 text-[#5f4228]/90 sm:text-base">
            <h3 className="font-bold text-[#4a321e]">Ship operator quick checks</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>开局统一终端流程，降低补丁后信息误差导致的操作偏差。</li>
              <li>并行打开 <Link className="underline decoration-[#6f4b2a]/60 underline-offset-2" href="/guides/lethal-company/terminal-commands-list">Terminal Commands List</Link>，统一口令与执行顺序。</li>
              <li>尚待补齐：按 v45 确认内容更新“指令优先级 / 角色职责 / 风险口令”。</li>
            </ul>
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">FAQ</h2>
          <div className="mt-4 space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-[#8a5b3a]/35 bg-white/55 p-4">
                <summary className="cursor-pointer font-semibold text-[#4a321e]">{faq.question}</summary>
                <p className="mt-2 text-sm leading-6 text-[#5f4228]/90 sm:text-base">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={`mt-8 ${CARD_CLASS}`}>
          <h2 className="text-lg font-semibold text-[#4a321e] sm:text-xl">Related Pages</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/tools/quota-calculator" className={LINK_CLASS}>
              Quota Calculator
            </Link>
            <Link href="/guides/lethal-company/terminal-commands-list" className={LINK_CLASS}>
              Terminal Commands List
            </Link>
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}

import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";

export default function NotFound() {
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

      <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24">
        <div className="rounded-[30px] border-4 border-[#8a5b3a]/75 bg-[#f3e5bf]/95 p-8 shadow-[0_12px_30px_rgba(56,41,23,0.3)] sm:p-12">
          <p className="text-6xl sm:text-8xl" aria-hidden>🌾</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#4a321e] sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-3 text-base leading-7 text-[#5f4228]/90">
            Looks like this crop didn&apos;t grow. The page you&apos;re looking for doesn&apos;t exist.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-[#7c4d2e]/70 bg-[#5c8a3e] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#4e7a32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5c8a3e]"
            >
              🌱 Crop Calculator
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-[#8a5b3a]/50 bg-[#fff8e8] px-5 py-2.5 text-sm font-bold text-[#5c3d23] shadow-sm transition-colors hover:bg-[#fce8b1]"
            >
              📘 Guides & Answers
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-[#8a5b3a]/50 bg-[#fff8e8] px-5 py-2.5 text-sm font-bold text-[#5c3d23] shadow-sm transition-colors hover:bg-[#fce8b1]"
            >
              🏠 Home
            </Link>
          </div>
        </div>

        <SiteFooter className="mt-12" />
      </main>
    </div>
  );
}

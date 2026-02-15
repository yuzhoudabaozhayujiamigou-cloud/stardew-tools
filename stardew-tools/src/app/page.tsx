import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-amber-50">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-8">
        <div className="text-sm font-semibold tracking-wide text-emerald-900">
          Stardew Tools
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <Link
            className="rounded-full border border-emerald-900/20 bg-white/70 px-4 py-2 text-emerald-950 backdrop-blur hover:bg-white"
            href="/calculator"
          >
            Crop Profit Calculator
          </Link>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 pb-16">
        <section className="rounded-3xl bg-white/70 p-8 backdrop-blur sm:p-12">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-emerald-950 sm:text-5xl">
            Stardew Valley Crop Profit Calculator
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-emerald-950/70 sm:text-lg">
            Compare crops by seasonal profit and gold/day. Fast, mobile-friendly,
            and designed for quick decisions at the start of each season.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
            >
              Open the calculator
            </Link>
            <div className="rounded-2xl border border-emerald-900/10 bg-white/60 px-5 py-3 text-sm text-emerald-950/70">
              MVP: Spring crops (more seasons coming next)
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-emerald-900/10 bg-white/60 p-6">
            <h2 className="text-lg font-semibold text-emerald-950">What it does</h2>
            <p className="mt-2 text-sm leading-6 text-emerald-950/70">
              Pick a season, compare crops, and see harvest count, total profit,
              and gold per day.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-900/10 bg-white/60 p-6">
            <h2 className="text-lg font-semibold text-emerald-950">How we calculate</h2>
            <p className="mt-2 text-sm leading-6 text-emerald-950/70">
              Simple baseline: seed cost + sell price, with regrowth support.
              We will add fertilizer, farming level, and artisan goods later.
            </p>
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-5xl px-6 pb-10 text-xs text-emerald-950/60">
        Not affiliated with Stardew Valley or ConcernedApe.
      </footer>
    </div>
  );
}

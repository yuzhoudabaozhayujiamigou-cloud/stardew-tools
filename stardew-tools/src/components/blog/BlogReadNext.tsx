import Link from "next/link";

export type ReadNextItem = {
  href: string;
  label: string;
};

type BlogReadNextProps = {
  posts: ReadNextItem[];
  currentSlug: string;
};

const LINK_CLASS =
  "inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff8e8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c4d2e]/70 hover:bg-[#fce8b1]";

export function BlogReadNext({ posts, currentSlug }: BlogReadNextProps) {
  const filtered = posts.filter((p) => !p.href.includes(currentSlug));

  if (filtered.length === 0) return null;

  return (
    <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
      <h2 className="text-xl font-semibold text-[#4a321e] sm:text-2xl">Read next</h2>
      <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">
        More quick answers to help you plan your farm.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        {filtered.slice(0, 3).map((post) => (
          <Link key={post.href} href={post.href} className={LINK_CLASS}>
            <span aria-hidden="true" className="inline-flex items-center leading-none opacity-85">📘</span>
            {post.label}
          </Link>
        ))}
      </div>
      <p className="mt-4 text-sm text-[#5f4228]/90">
        Or go back to the{" "}
        <Link
          href="/calculator"
          className="font-semibold underline decoration-[#8a5b3a]/60 decoration-2 underline-offset-2 transition hover:text-[#4a321e]"
        >
          Crop Profit Calculator
        </Link>
      </p>
    </section>
  );
}

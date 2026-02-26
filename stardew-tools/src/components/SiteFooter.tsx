import Link from "next/link";

type SiteFooterProps = {
  className?: string;
};

const FOOTER_LINKS = [
  { href: "/calculator", label: "Crop Calculator" },
  { href: "/blog", label: "Guides & Quick Answers" },
  { href: "/secret-notes", label: "Secret Notes Finder" },
] as const;

const FOOTER_LINK_CLASS =
  "underline decoration-[#8a5b3a]/40 underline-offset-2 transition-colors hover:text-[#4a321e] hover:decoration-[#8a5b3a]/70";

export function SiteFooter(props: SiteFooterProps) {
  const { className = "mt-10" } = props;

  return (
    <footer className={`${className} space-y-3 text-xs text-[#4f3823]/80`}>
      <nav aria-label="Site navigation" className="flex flex-wrap gap-x-4 gap-y-1">
        {FOOTER_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className={FOOTER_LINK_CLASS}>
            {link.label}
          </Link>
        ))}
      </nav>
      <p>Built by a Construction Engineer &amp; AI Collaborator.</p>
      <p>Unofficial fan-made tool. Not affiliated with ConcernedApe.</p>
    </footer>
  );
}

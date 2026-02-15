type SiteFooterProps = {
  className?: string;
};

export function SiteFooter(props: SiteFooterProps) {
  const { className = "mt-10" } = props;

  return (
    <footer className={`${className} space-y-1 text-xs text-[#4f3823]/80`}>
      <p>Built by a Construction Engineer &amp; AI Collaborator.</p>
      <p>Unofficial fan-made tool. Not affiliated with ConcernedApe.</p>
    </footer>
  );
}

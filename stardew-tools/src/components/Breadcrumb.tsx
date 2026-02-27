export default function Breadcrumb({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.href ? { item: `https://stardewprofit.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-600">
        {items.map((item, i) => (
          <span key={i}>
            {i > 0 && <span className="mx-1">›</span>}
            {item.href ? (
              <a
                href={item.href}
                className="inline-flex min-h-[44px] items-center px-1 hover:text-gray-800"
              >
                {item.name}
              </a>
            ) : (
              <span className="inline-flex min-h-[44px] items-center px-1">
                {item.name}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}

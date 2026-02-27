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
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-500">
        {items.map((item, i) => (
          <span key={i}>
            {i > 0 && <span className="mx-1">›</span>}
            {item.href ? (
              <a href={item.href} className="hover:text-gray-700">
                {item.name}
              </a>
            ) : (
              <span>{item.name}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}

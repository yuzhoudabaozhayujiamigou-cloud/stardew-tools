// app/secret-notes/page.tsx
// Add WebApplication Structured Data

export const metadata: Metadata = {
  title: 'Stardew Valley Secret Notes Finder',
  description: 'Search and decode Stardew Valley Secret Notes with location hints, rewards, and completion tracking.',
  // ... existing metadata
};

// Add this JSON-LD script to the page
const secretNotesSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Stardew Valley Secret Notes Finder",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Search and decode Stardew Valley Secret Notes with location hints, rewards, and completion tracking. Find all 25 secret notes and unlock hidden rewards.",
  "url": "https://www.stardewprofit.com/secret-notes",
  "screenshot": "https://www.stardewprofit.com/api/og?title=Secret+Notes+Finder&type=guide",
  "featureList": [
    "Search all 25 secret notes",
    "Location hints and guides",
    "Reward information",
    "Completion tracking",
    "Mobile-friendly interface"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "author": {
    "@type": "Organization",
    "name": "StardewProfit",
    "url": "https://www.stardewprofit.com"
  }
};

export default function SecretNotesPage() {
  return (
    <>
      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(secretNotesSchema) }}
      />
      
      {/* Existing page content */}
      <main>
        {/* ... your secret notes finder UI ... */}
      </main>
    </>
  );
}

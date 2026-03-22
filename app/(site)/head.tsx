// head.tsx is used as a legacy fallback.
// Primary SEO metadata is declared in app/layout.tsx via the Next.js metadata API.
export default function Head() {
  return (
    <>
      <title>Divine Light Global Education Pathways | IELTS, PTE & Study Abroad Consultancy</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Nepal's trusted IELTS & PTE preparation center and study abroad consultancy. Expert visa guidance, scholarship advice, and university placement for UK, USA, Canada, Australia, New Zealand & Europe."
      />
      <meta
        name="keywords"
        content="IELTS preparation Nepal, PTE preparation Nepal, study abroad consultancy Nepal, visa guidance Nepal, scholarship advice, student visa Nepal"
      />
      <link rel="icon" href="/images/favicon.ico" />
      <link rel="canonical" href="https://divinelightglobalpathway.com" />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://divinelightglobalpathway.com" />
      <meta property="og:site_name" content="Divine Light Global Education Pathways" />
      <meta property="og:title" content="Divine Light Global Education Pathways | IELTS, PTE & Study Abroad" />
      <meta property="og:description" content="Nepal's trusted IELTS & PTE preparation and study abroad consultancy. Expert visa guidance, university placement for UK, USA, Canada, Australia & more." />
      <meta property="og:image" content="/images/hero/hero-slide-01.png" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Divine Light Global Education Pathways | IELTS, PTE & Study Abroad" />
      <meta name="twitter:description" content="Nepal's trusted IELTS & PTE preparation and study abroad consultancy." />
      <meta name="twitter:image" content="/images/hero/hero-slide-01.png" />
      {/* Robots */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />
    </>
  );
}

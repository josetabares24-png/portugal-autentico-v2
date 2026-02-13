export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Estaba en Lisboa",
    "url": "https://estabaenlisboa.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://estabaenlisboa.com/logo.png",
      "width": 600,
      "height": 188,
      "caption": "Estaba en Lisboa - Guías de Lisboa por Locales"
    },
    "image": "https://estabaenlisboa.com/logo.png",
    "description": "Guías y itinerarios verificados de Lisboa por locales. Horarios exactos, GPS y restaurantes sin trampas turísticas.",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lisboa",
      "addressCountry": "PT"
    },
    "sameAs": [
      "https://instagram.com/estabaenlisboa"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hola@estabaenlisboa.com",
      "availableLanguage": ["Spanish", "Portuguese", "English", "Korean"]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Estaba en Lisboa",
    "url": "https://estabaenlisboa.com",
    "description": "Guías verificadas de Lisboa con itinerarios, horarios exactos, GPS y restaurantes locales",
    "inLanguage": ["es", "en", "ko"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://estabaenlisboa.com/itinerarios?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://estabaenlisboa.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Guías",
        "item": "https://estabaenlisboa.com/itinerarios"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

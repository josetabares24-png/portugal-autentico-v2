export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://estabaenlisboa.com/#organization",
    "name": "Estaba en Lisboa",
    "url": "https://estabaenlisboa.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://estabaenlisboa.com/logo.png",
      "width": 600,
      "height": 188,
      "caption": "Estaba en Lisboa - Guías de Lisboa"
    },
    "image": "https://estabaenlisboa.com/logo.png",
    "description": "Guías en español sobre Lisboa: transporte, barrios, comida, alojamiento, lugares que visitar y excursiones.",
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
      "contactType": "contact",
      "email": "contacto@estabaenlisboa.com",
      "availableLanguage": ["Spanish"]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://estabaenlisboa.com/#website",
    "name": "Estaba en Lisboa",
    "url": "https://estabaenlisboa.com",
    "description": "Información práctica en español para organizar un viaje a Lisboa.",
    "inLanguage": "es-ES",
    "publisher": {
      "@id": "https://estabaenlisboa.com/#organization"
    }
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
    </>
  );
}

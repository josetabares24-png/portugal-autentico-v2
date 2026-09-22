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
      "email": "hola@estabaenlisboa.com",
      "availableLanguage": ["Spanish"]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Estaba en Lisboa",
    "url": "https://estabaenlisboa.com",
    "description": "Información práctica en español para organizar un viaje a Lisboa.",
    "inLanguage": ["es"]
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

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
    // Prometía guías contrastadas una a una, horarios al minuto y una oferta
    // libre de engaños. Ninguna de las tres se sostiene: no hay un proceso
    // de verificación detrás, los horarios los fija cada monumento y cambian, y
    // calificar la oferta ajena de trampa es un juicio que no podemos
    // respaldar. Este texto se sirve en TODAS las páginas, así que contradecía
    // a las rutas que ya habíamos limpiado.
    "description": "Guías, itinerarios y recursos en español para organizar un viaje a Lisboa, con rutas, mapas, recomendaciones y consejos prácticos.",
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
      "availableLanguage": ["Spanish"]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Estaba en Lisboa",
    "url": "https://estabaenlisboa.com",
    // Misma limpieza que en Organization, arriba.
    "description": "Estaba en Lisboa reúne itinerarios, actividades, entradas y consejos prácticos para descubrir Lisboa y sus alrededores.",
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

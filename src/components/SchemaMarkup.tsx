export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Estaba en Lisboa",
    "url": "https://estabaenlisboa.com",
    "logo": "https://estabaenlisboa.com/logo.svg",
    "description": "Guías y itinerarios verificados de Lisboa por locales. Horarios exactos, GPS y restaurantes sin trampas turísticas.",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lisboa",
      "addressCountry": "PT"
    },
    "sameAs": [
      "https://instagram.com/estabaenlisboa",
      "https://twitter.com/estabaenlisboa"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Estaba en Lisboa",
    "url": "https://estabaenlisboa.com",
    "description": "Guías verificadas de Lisboa con horarios exactos y GPS",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://estabaenlisboa.com/itinerarios?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Lisboa en 1 Día - Guía Completa",
    "image": "https://estabaenlisboa.com/images/eduardo-goody-0Iu7mKa1sPw-unsplash.jpg",
    "description": "Itinerario completo de Lisboa en 1 día con horarios exactos, coordenadas GPS y restaurantes verificados. Lo esencial sin turistadas.",
    "brand": {
      "@type": "Brand",
      "name": "Estaba en Lisboa"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://estabaenlisboa.com/guias/lisboa-1-dia",
      "priceCurrency": "EUR",
      "price": "3.99",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto cuestan las guías de Lisboa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Las guías individuales cuestan desde €3.99 (Lisboa 1 día) hasta €7.99 (Lisboa 3 días). También ofrecemos un pack completo con todas las guías por €24.99, ahorrando €17."
        }
      },
      {
        "@type": "Question",
        "name": "¿Están actualizadas las guías en 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, todas nuestras guías están verificadas y actualizadas en Enero 2025. Incluyen precios actuales, horarios vigentes y restaurantes operativos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué incluyen las guías?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cada guía incluye: horarios exactos hora a hora, coordenadas GPS para cada parada, restaurantes verificados sin trampas turísticas, tips para evitar colas, mejores horarios para fotos y alternativas si llueve."
        }
      },
      {
        "@type": "Question",
        "name": "¿Hay garantía de devolución?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, ofrecemos garantía de 48 horas sin preguntas. Si la guía no cumple tus expectativas, devolvemos el 100% de tu dinero."
        }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

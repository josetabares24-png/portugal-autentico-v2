interface ItineraryStop {
  name: string;
  description?: string;
  latitude?: number;
  longitude?: number;
}

interface ItinerarySchemaProps {
  name: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  url: string;
  stops?: ItineraryStop[];
  touristType?: string[];
}

export default function ItinerarySchema({
  name,
  description,
  duration,
  price,
  image,
  url,
  stops = [],
  touristType = ['Cultural', 'Sightseeing'],
}: ItinerarySchemaProps) {
  const baseUrl = 'https://estabaenlisboa.com';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name,
    description,
    touristType,
    url: `${baseUrl}${url}`,
    image: `${baseUrl}${image}`,
    provider: {
      '@type': 'Organization',
      name: 'Estaba en Lisboa',
      url: baseUrl,
    },
    offers: {
      '@type': 'Offer',
      price: price.toString(),
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: `${baseUrl}${url}`,
      priceValidUntil: '2026-12-31',
    },
    ...(stops.length > 0 && {
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: stops.length,
        itemListElement: stops.map((stop, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'TouristAttraction',
            name: stop.name,
            ...(stop.description && { description: stop.description }),
            ...(stop.latitude && stop.longitude && {
              geo: {
                '@type': 'GeoCoordinates',
                latitude: stop.latitude,
                longitude: stop.longitude,
              },
            }),
          },
        })),
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

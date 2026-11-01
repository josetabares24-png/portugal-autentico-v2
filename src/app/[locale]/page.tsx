import { languageAlternates } from '@/lib/language-alternates';
import type { Metadata } from 'next';
import GrokHome from '@/components/home/GrokHome';

const HOME_URL = 'https://estabaenlisboa.com';
const HOME_DESCRIPTION = 'Organiza Lisboa con rutas por días, qué ver, transporte, zonas donde alojarte, comida y consejos prácticos, escritos y revisados desde la ciudad.';

export const metadata: Metadata = {
  title: { absolute: 'Lisboa: qué ver, rutas y transporte | Estaba en Lisboa' },
  description: HOME_DESCRIPTION,
  openGraph: {
    title: 'Lisboa: qué ver, rutas y transporte | Estaba en Lisboa',
    description: HOME_DESCRIPTION,
    url: HOME_URL,
    images: [
      {
        url: 'https://estabaenlisboa.com/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg',
        width: 1200,
        height: 630,
        alt: 'Vista de Alfama y el río Tajo en Lisboa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lisboa: qué ver, rutas y transporte | Estaba en Lisboa',
    description: HOME_DESCRIPTION,
    images: ['https://estabaenlisboa.com/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg'],
  },
  alternates: {
    canonical: HOME_URL,
    languages: languageAlternates('/'),
  },
};

export default function HomePage() {
  // Conservamos el identificador de CollectionPage y los metadatos originales.
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': HOME_URL + '/#webpage',
    url: HOME_URL,
    name: 'Guía de Lisboa en español',
    description: HOME_DESCRIPTION,
    inLanguage: 'es-ES',
    isPartOf: { '@id': HOME_URL + '/#website' },
    about: {
      '@type': 'City',
      name: 'Lisboa',
      sameAs: 'https://www.wikidata.org/wiki/Q597',
    },
    author: { '@id': HOME_URL + '/sobre-nosotros#jose-tabares' },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />
      <GrokHome />
    </>
  );
}

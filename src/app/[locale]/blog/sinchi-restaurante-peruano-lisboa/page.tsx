import type { Metadata } from 'next';
import { SINCHI_APPROVED_HTML } from '@/components/blog/sinchi-approved-html';
import './sinchi.css';

const ARTICLE_URL = 'https://estabaenlisboa.com/blog/sinchi-restaurante-peruano-lisboa';
const COVER = 'https://estabaenlisboa.com/images/sinchi/11-ceviche-galeria-d4c6f4fac0.webp';
const DESCRIPTION = 'Conoce Sinchi, restaurante peruano en Alcântara: la cocina del chef Joseph Ríos, ceviche de corvina, platos criollos, pisco sour y cómo reservar en Lisboa.';

export const metadata: Metadata = {
  title: { absolute: 'Sinchi, restaurante peruano en Alcântara | Estaba en Lisboa' },
  description: DESCRIPTION,
  alternates: { canonical: ARTICLE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'article',
    title: 'Sinchi, cocina peruana en Alcântara',
    description: DESCRIPTION,
    url: ARTICLE_URL,
    siteName: 'Estaba en Lisboa',
    locale: 'es_ES',
    publishedTime: '2026-11-08T00:00:00.000Z',
    modifiedTime: '2026-11-08T00:00:00.000Z',
    images: [{ url: COVER, width: 1150, height: 766, alt: 'Ceviche servido en el restaurante peruano Sinchi en Lisboa' }],
  },
  twitter: { card: 'summary_large_image', title: 'Sinchi, cocina peruana en Alcântara', description: DESCRIPTION, images: [COVER] },
};

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': ARTICLE_URL + '#article',
  headline: 'Sinchi, cocina peruana en Alcântara',
  description: DESCRIPTION,
  image: [COVER],
  datePublished: '2026-11-08',
  dateModified: '2026-11-08',
  inLanguage: 'es-ES',
  articleSection: 'Gastronomía',
  author: { '@type': 'Person', name: 'José Tabares' },
  publisher: { '@type': 'Organization', name: 'Estaba en Lisboa', url: 'https://estabaenlisboa.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': ARTICLE_URL },
  isAccessibleForFree: true,
};
const breadcrumbsLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://estabaenlisboa.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://estabaenlisboa.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Sinchi, cocina peruana en Alcântara', item: ARTICLE_URL },
  ],
};

/** Contenido nativo e indexable: no usar iframe para el artículo principal. */
export default function SinchiArticlePage() {
  return (
    <main id="main-content" className="sinchi-native">
      <div dangerouslySetInnerHTML={{ __html: SINCHI_APPROVED_HTML }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
    </main>
  );
}

import type { Metadata } from 'next';
import BlogClient from './BlogClient';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Blog Lisboa 2026 | Consejos, Guías y Rutas de Local',
  description: 'Consejos prácticos para Lisboa: miradores, restaurantes baratos, transporte, barrios, qué evitar. Guías escritas por quien vive en Lisboa.',
  keywords: ['blog lisboa', 'consejos lisboa', 'miradores lisboa', 'restaurantes lisboa', 'transporte lisboa'],
  alternates: {
    canonical: 'https://estabaenlisboa.com/blog',
  },
  openGraph: {
    title: 'Blog de Lisboa | Guías y Consejos de Locales',
    description: 'Historias, rutas auténticas y consejos prácticos para vivir Lisboa como un local.',
    url: 'https://estabaenlisboa.com/blog',
    images: [
      {
        url: 'https://estabaenlisboa.com/images/alfama-panoramica.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog de Lisboa',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog de Lisboa',
  url: 'https://estabaenlisboa.com/blog',
  description: 'Consejos de local, guías auténticas y planificación real para Lisboa.',
  blogPost: blogPosts.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.titulo,
    datePublished: post.fecha,
    author: {
      '@type': 'Person',
      name: post.autor,
    },
    image: `https://estabaenlisboa.com${post.imagen}`,
    url: `https://estabaenlisboa.com/blog/${post.id}`,
  })),
};

type BlogPageProps = {
  searchParams: Promise<{ page?: string | string[] }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page } = await searchParams;
  const requestedPage = Number.parseInt(Array.isArray(page) ? page[0] : page ?? '1', 10);
  const totalPages = Math.ceil(Math.max(0, blogPosts.length - 4) / 9);
  const initialPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(requestedPage, 1), totalPages)
    : 1;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient key={initialPage} initialPage={initialPage} />
    </>
  );
}

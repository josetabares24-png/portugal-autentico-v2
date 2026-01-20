import type { Metadata } from 'next';
import BlogClient from './BlogClient';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Blog de Lisboa | Guías y Consejos de Locales',
  description: 'Historias, rutas auténticas y consejos prácticos para vivir Lisboa como un local. Guías actualizadas, gastronomía y transporte.',
  openGraph: {
    title: 'Blog de Lisboa | Guías y Consejos de Locales',
    description: 'Historias, rutas auténticas y consejos prácticos para vivir Lisboa como un local.',
    url: 'https://estabaenlisboa.com/blog',
    images: [
      {
        url: 'https://estabaenlisboa.com/images/hero-lisboa.jpg',
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

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient />
    </>
  );
}

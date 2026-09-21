import type { Metadata } from 'next';
import BlogClient from './BlogClient';
import { blogPosts } from '@/data/blog-posts';

const BLOG_TITLE = 'Blog Lisboa 2026 | Consejos, Guías y Rutas de Local';
const BLOG_DESCRIPTION = 'Consejos prácticos para Lisboa: miradores, restaurantes baratos, transporte, barrios, qué evitar. Guías escritas por quien vive en Lisboa.';

type BlogPageProps = {
  searchParams: Promise<{ page?: string | string[] }>;
};

function resolveBlogPage(page: string | string[] | undefined) {
  const requested = Number.parseInt(Array.isArray(page) ? page[0] : page ?? '1', 10);
  const totalPages = Math.max(1, Math.ceil(Math.max(0, blogPosts.length - 4) / 9));
  return Number.isFinite(requested) ? Math.min(Math.max(requested, 1), totalPages) : 1;
}

export async function generateMetadata({ searchParams }: BlogPageProps): Promise<Metadata> {
  const { page } = await searchParams;
  const currentPage = resolveBlogPage(page);
  const canonical = currentPage === 1
    ? 'https://estabaenlisboa.com/blog'
    : `https://estabaenlisboa.com/blog?page=${currentPage}`;
  const title = currentPage === 1 ? BLOG_TITLE : `Blog Lisboa 2026 — Página ${currentPage}`;

  return {
    title,
    description: BLOG_DESCRIPTION,
    keywords: ['blog lisboa', 'consejos lisboa', 'miradores lisboa', 'restaurantes lisboa', 'transporte lisboa'],
    alternates: { canonical },
    openGraph: {
      title: currentPage === 1 ? 'Blog de Lisboa | Guías y Consejos de Locales' : `Blog de Lisboa — Página ${currentPage}`,
      description: 'Historias, rutas auténticas y consejos prácticos para vivir Lisboa como un local.',
      url: canonical,
      images: [
        {
          url: 'https://estabaenlisboa.com/images/alfama-panoramica.jpg',
          width: 1200,
          height: 630,
          alt: 'Blog de Lisboa',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: BLOG_DESCRIPTION,
      images: ['https://estabaenlisboa.com/images/alfama-panoramica.jpg'],
    },
  };
}

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

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page } = await searchParams;
  const initialPage = resolveBlogPage(page);

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

import type { Metadata } from 'next';
import BlogClient from './BlogClient';
import { blogPosts } from '@/data/blog-posts';
import { BlogEditorialCover } from '@/components/blog/BlogEditorialCover';
import { toIsoEditorialDate } from '@/lib/editorial-date';

const BLOG_TITLE = 'Guías de Lisboa y Portugal | Estaba en Lisboa';
const BLOG_DESCRIPTION = 'Guías de Lisboa y Portugal: transporte, rutas, barrios, escapadas, comida y consejos prácticos para organizar el viaje desde una base local.';

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
    title: currentPage === 1 ? { absolute: title } : title,
    description: BLOG_DESCRIPTION,
    keywords: ['blog lisboa', 'viajar a portugal', 'guia portugal', 'consejos lisboa', 'transporte portugal', 'rutas portugal'],
    alternates: { canonical },
    openGraph: {
      title: currentPage === 1 ? 'Guías de Lisboa y Portugal | Estaba en Lisboa' : `Guías de Lisboa y Portugal — Página ${currentPage}`,
      description: BLOG_DESCRIPTION,
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
  name: 'Guías de Lisboa y Portugal',
  url: 'https://estabaenlisboa.com/blog',
  description: BLOG_DESCRIPTION,
  blogPost: blogPosts.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.titulo,
    ...(toIsoEditorialDate(post.fecha) ? { datePublished: toIsoEditorialDate(post.fecha) } : {}),
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
      <BlogClient key={initialPage} initialPage={initialPage} editorialCover={initialPage === 1 ? <BlogEditorialCover /> : undefined} />
    </>
  );
}

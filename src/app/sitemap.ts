import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog-posts'
import { guidePackSlugs } from '@/data/guide-packs'

const baseUrl = 'https://estabaenlisboa.com'

function parseSpanishDate(date: string): Date | undefined {
  const meses: Record<string, string> = {
    Ene: 'Jan',
    Feb: 'Feb',
    Mar: 'Mar',
    Abr: 'Apr',
    May: 'May',
    Jun: 'Jun',
    Jul: 'Jul',
    Ago: 'Aug',
    Sep: 'Sep',
    Oct: 'Oct',
    Nov: 'Nov',
    Dic: 'Dec',
  };

  const fechaParts = date.split(' ');
  if (fechaParts.length !== 3) {
    return undefined;
  }

  const [dia, mesEsp, anio] = fechaParts;
  const mesEn = meses[mesEsp] || mesEsp;
  const parsedDate = new Date(`${dia} ${mesEn} ${anio}`);

  return isNaN(parsedDate.getTime()) ? undefined : parsedDate;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/itinerarios`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/planifica-tu-viaje`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/pack-completo`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/sobre-nosotros`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contacto`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/faq`, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const guideUrls: MetadataRoute.Sitemap = guidePackSlugs.map((slug) => ({
    url: `${baseUrl}/itinerarios/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // URLs dinámicas del blog
  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => {
    const postDate = parseSpanishDate(post.fecha);
    const entry: MetadataRoute.Sitemap[number] = {
      url: `${baseUrl}/blog/${post.id}`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    };

    if (postDate) {
      entry.lastModified = postDate;
    }

    return entry;
  });

  return [...staticUrls, ...guideUrls, ...blogUrls];
}

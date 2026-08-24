import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog-posts'
import { guidePackSlugs } from '@/data/guide-packs'
import { activities } from '@/data/activities'

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
    { url: `${baseUrl}/actividades`, changeFrequency: 'weekly', priority: 0.8 },
    // Hub transaccional. `weekly` porque su contenido depende de qué productos
    // seleccionamos, no de la disponibilidad que muestra cada widget.
    { url: `${baseUrl}/comprar-entradas`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/free-tours-lisboa`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/planifica-tu-viaje`, changeFrequency: 'monthly', priority: 0.9 },
    // Herramienta. `yearly` porque no trabaja con tarifas concretas sino con
    // tramos de gasto: cambia cuando cambia el modelo, no cada temporada.
    { url: `${baseUrl}/calculadora-presupuesto-lisboa`, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/pack-completo`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/sobre-nosotros`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contacto`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/faq`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/aviso-legal`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/politica-privacidad`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/politica-cookies`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terminos-condiciones`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  /*
   * Itinerarios retirados: su URL redirige de forma permanente a su sustituto
   * editorial, así que no puede seguir en el sitemap —un sitemap no debe
   * declarar URLs que redirigen—. El dato se conserva en `guidePacks` porque
   * el panel de administración sigue leyéndolo; lo que se retira es la URL
   * pública, no el registro.
   *
   * lisboa-romantica -> /blog/lisboa-en-pareja   (redirect en next.config.mjs)
   * lisboa-familiar  -> /blog/lisboa-con-ninos   (redirect en next.config.mjs)
   * lisboa-fotografia -> /blog/donde-fotografiar-lisboa   (idem)
   * lisboa-full-week -> /blog/lisboa-en-7-dias   (idem)
   */
  const RETIRED_GUIDE_SLUGS = new Set([
    'lisboa-romantica',
    'lisboa-familiar',
    'lisboa-fotografia',
    'lisboa-full-week',
  ]);

  const guideUrls: MetadataRoute.Sitemap = guidePackSlugs
    .filter((slug) => !RETIRED_GUIDE_SLUGS.has(slug))
    .map((slug) => ({
      url: `${baseUrl}/itinerarios/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

  // Solo las fichas marcadas como indexable (editorialmente completas y
  // verificadas) entran en el sitemap; el resto sigue siendo visitable
  // desde /actividades pero se sirve con noindex, follow.
  const activityUrls: MetadataRoute.Sitemap = activities
    .filter((activity) => activity.indexable)
    .map((activity) => ({
      url: `${baseUrl}/actividades/${activity.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
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

  return [...staticUrls, ...guideUrls, ...activityUrls, ...blogUrls];
}

import { englishPilotRoutes } from '@/lib/language-alternates'
import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog-posts'
import { guidePackSlugs } from '@/data/guide-packs'
import { activities } from '@/data/activities'
import { getTicketGuide } from '@/data/ticket-guides'
import { isExcludedFromSitemap } from '@/lib/seo-url-policy'

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
  const monthIndex = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].indexOf(mesEn);
  if (monthIndex === -1) return undefined;

  // Construir la fecha en UTC evita que el mismo artículo genere un lastmod
  // distinto según la zona horaria del entorno de build.
  const parsedDate = new Date(Date.UTC(Number(anio), monthIndex, Number(dia)));

  return isNaN(parsedDate.getTime()) ? undefined : parsedDate;
}

/*
 * Fecha de la última modificación del contenido de las páginas que no tienen
 * una fecha propia en sus datos (artículos y guías de entradas sí la tienen).
 *
 * Sale del historial de git del 25/10/2026: el último commit que cambió el
 * texto de la página o de los datos que pinta. No cuentan los commits que
 * solo tocaron hreflang, imágenes OG o parámetros de enlaces de afiliado.
 * Nunca `new Date()`: un lastmod que cambia en cada build le dice a Google
 * que todo cambia siempre, y deja de hacerle caso.
 *
 * Cuando se cambie el texto de una de estas páginas, se actualiza aquí su
 * fecha. El historial de git empieza el 8/10/2026: lo anterior no se puede
 * fechar, así que esa es la fecha más antigua posible.
 */
const CONTENT_LAST_MODIFIED: Record<string, string> = {
  '/': '2026-10-22',
  '/itinerarios': '2026-10-09',
  '/calculadora-presupuesto-lisboa': '2026-10-09',
  '/sobre-nosotros': '2026-10-09',
  '/contacto': '2026-10-08',
  '/itinerarios/lisboa-1-dia-lo-esencial': '2026-10-09',
  '/itinerarios/lisboa-2-dias-completo': '2026-10-10',
  '/itinerarios/lisboa-3-dias-premium': '2026-10-14',
  // Fichas de /actividades que no son guía de entradas: su bloque en
  // src/data/activities.ts cambió por última vez el 9/10.
  '/actividades/miradouro-santa-luzia': '2026-10-09',
  '/actividades/miradouro-senhora-do-monte': '2026-10-09',
  '/actividades/miradouro-portas-do-sol': '2026-10-09',
  '/actividades/pasteis-de-belem': '2026-10-09',
  '/actividades/lx-factory': '2026-10-09',
  '/actividades/elevador-santa-justa': '2026-10-09',
  '/actividades/cascais-cabo-da-roca': '2026-10-09',
  '/actividades/fado-en-alfama': '2026-10-09',
  '/actividades/crucero-atardecer-tajo': '2026-10-09',
  '/actividades/free-walking-tour-centro': '2026-10-09',
  '/actividades/jardim-estrela-principe-real': '2026-10-09',
  '/actividades/parque-eduardo-vii': '2026-10-09',
  '/actividades/tasca-tradicional': '2026-10-09',
  '/actividades/cristo-rei': '2026-10-09',
  // Versión inglesa: publicada y retocada el 23/10 (PR #116).
  '/en': '2026-10-26',
  '/en/lisbon-airport-to-city-centre': '2026-10-23',
  '/en/lisbon-metro-guide': '2026-10-23',
  '/en/lisbon-3-day-itinerary': '2026-10-23',
  '/en/pena-palace-tickets': '2026-10-26',
  '/en/lisbon-free-walking-tours': '2026-10-23',
};

function withContentDate(entry: MetadataRoute.Sitemap[number]): MetadataRoute.Sitemap[number] {
  if (entry.lastModified) return entry;
  const path = new URL(entry.url).pathname;
  const date = CONTENT_LAST_MODIFIED[path === '' ? '/' : path];
  return date ? { ...entry, lastModified: new Date(`${date}T00:00:00.000Z`) } : entry;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/portugal`, lastModified: new Date('2026-10-14T00:00:00.000Z'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/itinerarios`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/que-ver-en-lisboa`, lastModified: new Date('2026-09-30T00:00:00.000Z'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/donde-comer-en-lisboa`, lastModified: new Date('2026-09-30T00:00:00.000Z'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/transporte-lisboa`, lastModified: new Date('2026-10-09T00:00:00.000Z'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/actividades`, changeFrequency: 'weekly', priority: 0.8 },
    // Hub transaccional. `weekly` porque su contenido depende de qué productos
    // seleccionamos, no de la disponibilidad que muestra cada widget.
    { url: `${baseUrl}/comprar-entradas`, lastModified: new Date('2026-10-01T00:00:00.000Z'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/free-tours-lisboa`, lastModified: new Date('2026-10-01T00:00:00.000Z'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/planifica-tu-viaje`, changeFrequency: 'monthly', priority: 0.9 },
    // Herramienta. `yearly` porque no trabaja con tarifas concretas sino con
    // tramos de gasto: cambia cuando cambia el modelo, no cada temporada.
    { url: `${baseUrl}/calculadora-presupuesto-lisboa`, changeFrequency: 'yearly', priority: 0.7 },
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
   * declarar URLs que redirigen—. El dato se conserva en `guidePacks`; lo
   * que se retira es la URL pública, no el registro.
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
      // Las fichas convertidas en guía de entradas declaran su fecha real.
      ...(getTicketGuide(activity.slug)?.article.dateModified
        ? { lastModified: new Date(`${getTicketGuide(activity.slug)!.article.dateModified}T00:00:00.000Z`) }
        : {}),
      changeFrequency: 'monthly' as const,
      priority: getTicketGuide(activity.slug) ? 0.8 : 0.6,
    }));

  // URLs dinámicas del blog
  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => {
    const modifiedDate = post.dateModified ? new Date(`${post.dateModified}T00:00:00.000Z`) : undefined;
    const postDate = modifiedDate && !isNaN(modifiedDate.getTime())
      ? modifiedDate
      : parseSpanishDate(post.fecha);
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

  const englishUrls: MetadataRoute.Sitemap = englishPilotRoutes.map(({path}) => ({ url: baseUrl + path, changeFrequency: 'monthly', priority: 0.6 }));

  // El índice del blog cambia cuando cambia su artículo más reciente.
  const newestPost = blogUrls.reduce<Date | undefined>((newest, { lastModified }) => {
    const date = lastModified instanceof Date ? lastModified : undefined;
    return date && (!newest || date > newest) ? date : newest;
  }, undefined);
  const blogIndex = staticUrls.find(({ url }) => url === `${baseUrl}/blog`);
  if (blogIndex && newestPost) blogIndex.lastModified = newestPost;

  return [...staticUrls, ...guideUrls, ...activityUrls, ...blogUrls, ...englishUrls].map(withContentDate).filter(({ url }) => {
    const { pathname, search, hash } = new URL(url);
    return !search && !hash && !isExcludedFromSitemap(pathname);
  });
}

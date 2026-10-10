import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { activities, activitySlugs } from '@/data/activities';
import { ActivityCard } from '@/components/actividades/ActivityCard';
import { ActivityImagePlaceholder } from '@/components/actividades/ActivityImagePlaceholder';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import Icon from '@/components/Icon';
import { AffiliateLink } from '@/components/afiliados/AffiliateLink';
import { BookingCta } from '@/components/afiliados/BookingCta';
import { getFreeTourAffiliateUrl, getFreeTourCategory } from '@/data/affiliate-links';
import { ArticleBody } from '@/components/blog/ArticleBody';
import { ArticleEditorialLinks } from '@/components/blog/ArticleEditorialLinks';
import { ArticleFooter } from '@/components/blog/ArticleFooter';
import { ArticleHero } from '@/components/blog/ArticleHero';
import { ArticleSources } from '@/components/blog/ArticleSources';
import { ArticleToc } from '@/components/blog/ArticleToc';
import { slugify } from '@/components/blog/article-utils';
import { getTicketGuide } from '@/data/ticket-guides';
import { resolveBookingBlocks } from '@/lib/booking-blocks';

const SITE_URL = 'https://estabaenlisboa.com';
const AUTHOR_NAME = 'José Tabares';
const AUTHOR_PROFILE_URL = `${SITE_URL}/sobre-nosotros`;
const AUTHOR_ID = `${AUTHOR_PROFILE_URL}#jose-tabares`;

export function generateStaticParams() {
  return activitySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const activity = activities.find((a) => a.slug === slug);
  if (!activity) return { title: 'Actividad no encontrada', robots: { index: false, follow: false } };

  // Si la ficha tiene guía de entradas, título y descripción son los de la guía.
  const guide = getTicketGuide(slug);
  const seoTitle = guide?.article.seoTitle ?? activity.seoTitle;
  const description = guide?.article.metaDescription ?? activity.description;

  return {
    title: seoTitle ? { absolute: seoTitle } : `${activity.title} | Estaba en Lisboa`,
    description,
    keywords: [activity.title.toLowerCase(), `${activity.title.toLowerCase()} lisboa`, activity.category.toLowerCase(), 'que ver en lisboa'],
    openGraph: {
      title: seoTitle ?? activity.title,
      description,
      url: `https://estabaenlisboa.com/actividades/${slug}`,
      // Sin foto verificada del lugar todavía: se usa el logo del sitio en
      // vez de arriesgarnos a mostrar la imagen de otro monumento o barrio.
      images: [
        activity.image
          ? { url: `https://estabaenlisboa.com${activity.image}`, width: 1200, height: 630, alt: activity.title }
          : { url: 'https://estabaenlisboa.com/logo.png', width: 600, height: 188, alt: 'Estaba en Lisboa' },
      ],
    },
    alternates: { canonical: `https://estabaenlisboa.com/actividades/${slug}` },
    // La ficha sigue visitable y enlazada, pero solo se indexa como página
    // independiente cuando su contenido editorial está verificado y completo
    // (activity.indexable === true). Ver src/data/activities.ts.
    robots: activity.indexable
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}

export default async function ActivityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const activity = activities.find((a) => a.slug === slug);
  if (!activity) notFound();

  const guide = getTicketGuide(slug);
  const related = activities.filter((a) => a.category === activity.category && a.slug !== activity.slug).slice(0, 3);

  // Enlace de reserva: si la ficha declara una categoría de free tour, la
  // URL afiliada se resuelve centralizadamente (y sólo en servidor). Si no,
  // se usa el bookingUrl propio de la ficha, si lo tiene.
  const freeTourCategory = activity.affiliateCategory
    ? getFreeTourCategory(activity.affiliateCategory)
    : null;
  const isFreeTour = freeTourCategory !== null;
  const affiliateHref = freeTourCategory ? getFreeTourAffiliateUrl(freeTourCategory) : null;
  const affiliateCampaign = freeTourCategory ? freeTourCategory.campaign : activity.slug;

  const touristAttractionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: activity.title,
    description: activity.description,
    // Solo se declara `image` cuando hay una foto verificada de este lugar
    // concreto; no queremos afirmar en datos estructurados que una imagen
    // de otro monumento o barrio corresponde a esta actividad.
    ...(activity.image ? { image: `https://estabaenlisboa.com${activity.image}` } : {}),
    isAccessibleForFree: activity.isFree,
    address: {
      '@type': 'PostalAddress',
      addressLocality: activity.zone,
      addressRegion: 'Lisboa',
      addressCountry: 'PT',
    },
    ...(activity.priceFrom !== undefined
      ? {
          offers: {
            '@type': 'Offer',
            priceCurrency: 'EUR',
            price: activity.priceFrom,
            url: `https://estabaenlisboa.com/actividades/${slug}`,
          },
        }
      : {}),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://estabaenlisboa.com' },
      { '@type': 'ListItem', position: 2, name: 'Actividades', item: 'https://estabaenlisboa.com/actividades' },
      { '@type': 'ListItem', position: 3, name: activity.title, item: `https://estabaenlisboa.com/actividades/${slug}` },
    ],
  };

  if (guide) {
    const { article, faqs } = guide;
    const pageUrl = `${SITE_URL}/actividades/${slug}`;
    const headings = article.contenido
      .filter((bloque) => bloque.tipo === 'subtitulo' && bloque.texto)
      .map((bloque) => ({ title: bloque.texto as string, id: slugify(bloque.texto as string) }));
    const bodyHrefs = new Set(
      article.contenido.flatMap((block) => (block.tipo === 'enlace' && block.href ? [block.href] : [])),
    );
    const editorialLinks = (article.links ?? []).filter((link) => !bodyHrefs.has(link.href));
    const articleJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${pageUrl}#article`,
      headline: article.seoTitle ?? article.titulo,
      description: article.metaDescription ?? article.descripcion,
      ...(article.dateModified ? { datePublished: article.dateModified, dateModified: article.dateModified } : {}),
      author: { '@type': 'Person', '@id': AUTHOR_ID, name: AUTHOR_NAME, url: AUTHOR_PROFILE_URL },
      image: { '@type': 'ImageObject', url: `${SITE_URL}${article.imagen}` },
      mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
      publisher: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Estaba en Lisboa',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png`, width: 600, height: 188 },
      },
      inLanguage: 'es-ES',
      isAccessibleForFree: true,
      isPartOf: { '@id': `${SITE_URL}/#website` },
    };
    const faqJsonLd = faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        }
      : null;

    return (
      <main id="main-content" className="article-page bg-background-light article-v2">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        {faqJsonLd && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        )}

        <ArticleHero
          article={article}
          authorName={AUTHOR_NAME}
          heroImage={article.imagen}
          heroImageAlt={article.imageAlt ?? activity.imageAlt ?? activity.title}
          isEditorialV2
          breadcrumb={{ href: '/actividades', label: 'Actividades', current: guide.breadcrumbLabel }}
        />

        <div className="max-w-6xl mx-auto px-4 pb-16">
          <div className="grid lg:grid-cols-[1fr,320px] gap-10">
            <ArticleBody
              article={article}
              faqs={faqs}
              isEditorialV2
              photos={{}}
              seoDescription={article.metaDescription ?? article.descripcion}
              takeaways={article.resumen ?? []}
              bookings={resolveBookingBlocks(slug, guide.placements, 'guia')}
            />

            <ArticleToc headings={headings} />
          </div>

          <ArticleEditorialLinks links={editorialLinks} />

          <div className="article-compact-ending max-w-2xl mx-auto mt-10">
            <ArticleFooter
              authorName={AUTHOR_NAME}
              beforeAuthor={
                article.fuentes && article.fuentes.length > 0 ? <ArticleSources sources={article.fuentes} /> : null
              }
            />
          </div>
        </div>

        {related.length > 0 && (
          <section className="bg-background-light py-20 border-t border-border-soft">
            <div className="max-w-6xl mx-auto px-6">
              <p className="text-xs text-text-secondary uppercase tracking-widest mb-8">Más en {activity.category}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {related.map((a) => (
                  <ActivityCard key={a.slug} activity={a} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    );
  }

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] overflow-hidden">
        {activity.image ? (
          <Image
            src={activity.image}
            alt={activity.imageAlt ?? activity.title}
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="100vw"
          />
        ) : (
          <ActivityImagePlaceholder />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-2xl">
          <nav aria-label="Breadcrumb" className="text-white/60 text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
            <Link href="/actividades" className="hover:text-white transition-colors">Actividades</Link>
            <span>/</span>
            <span className="text-white/90">{activity.category}</span>
          </nav>
          <h1 className="font-display italic text-white text-4xl md:text-6xl leading-tight mb-2">
            {activity.title}
          </h1>
          <p className="text-white/70 text-sm">{activity.zone} &middot; {activity.duration}</p>
        </div>
      </section>

      {/* Contenido */}
      <section className="bg-background-light py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-border-soft">
            <div>
              <p className="text-xs uppercase tracking-widest text-text-secondary mb-1">Precio</p>
              <p className={`text-2xl font-bold ${activity.isFree ? 'text-terracotta' : 'text-text-main'}`}>
                {activity.priceLabel}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-widest text-text-secondary mb-1">Duración</p>
              <p className="text-2xl font-bold text-text-main">{activity.duration}</p>
            </div>
          </div>

          <p className="text-text-secondary leading-relaxed mb-8">{activity.description}</p>

          {/* Bloque editorial ampliado. Va antes del tip de ahorro y del CTA
              porque responde a la pregunta previa —si merece la pena ir— y
              esas dos cosas solo tienen sentido una vez decidida. */}
          {activity.experiencia && (
            <div className="mb-10 space-y-8">
              <p className="text-text-secondary leading-relaxed">{activity.experiencia.intro}</p>

              <div>
                <h2 className="font-display italic text-text-main text-2xl mb-4">Qué vas a ver</h2>
                <ul className="space-y-2">
                  {activity.experiencia.queVeras.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-text-secondary leading-relaxed">
                      <span className="mt-0.5 flex-shrink-0 text-terracotta">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h2 className="font-display italic text-text-main text-xl mb-2">Cuándo ir</h2>
                  <p className="text-text-secondary leading-relaxed">{activity.experiencia.cuandoIr}</p>
                </div>
                <div>
                  <h2 className="font-display italic text-text-main text-xl mb-2">Cómo llegar</h2>
                  <p className="text-text-secondary leading-relaxed">{activity.experiencia.comoLlegar}</p>
                </div>
              </div>

              <div className="border-l-2 border-terracotta pl-5">
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-2">El error que casi todos cometen</p>
                <p className="text-text-secondary leading-relaxed">{activity.experiencia.elError}</p>
              </div>
            </div>
          )}

          {activity.guide && (
            <p className="mb-10 border-l-2 border-terracotta pl-5 text-text-secondary leading-relaxed">
              <span className="block text-xs uppercase tracking-widest mb-1">Guía completa</span>
              <Link
                href={activity.guide.href}
                className="font-semibold text-terracotta underline underline-offset-2 hover:no-underline"
              >
                {activity.guide.label} →
              </Link>
              {activity.moreGuides?.map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="mt-2 block font-semibold text-terracotta underline underline-offset-2 hover:no-underline"
                >
                  {g.label} →
                </Link>
              ))}
            </p>
          )}

          <div className="relative bg-night bg-azulejo-pattern-gold rounded-lg px-6 py-6 mb-10 overflow-hidden">
            <p className="relative text-gold text-xs uppercase tracking-widest mb-2 font-semibold">Tip para ahorrar de un local</p>
            <p className="relative text-white leading-relaxed">{activity.savingTip}</p>
          </div>

          {/* El bloque se muestra en cuanto la ficha declara una categoría de
              free tour o un bookingUrl propio, aunque todavía no haya enlace
              afiliado configurado: en ese caso el CTA se renderiza inerte,
              igual que en la landing, en vez de desaparecer la sección. */}
          {(isFreeTour || activity.bookingUrl) && (
            <div className="mb-10 overflow-hidden rounded-xl border border-border-soft/70 bg-white shadow-card">
              <span aria-hidden="true" className="block h-1 w-full bg-gradient-to-r from-terracotta to-gold" />

              <div className="p-5 md:p-6">
                {isFreeTour && (
                  <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-text-secondary">
                    <Icon name="event_available" size={15} className="flex-shrink-0 text-gold" />
                    Disponibilidad según la fecha
                  </p>
                )}

                <AffiliateLink
                  href={affiliateHref ?? activity.bookingUrl ?? null}
                  campaign={affiliateCampaign}
                  content={`activity-${activity.slug}`}
                  placement="activity-detail"
                  activitySlug={activity.slug}
                  className="btn-primary w-full px-7 py-3.5 text-base sm:w-auto"
                >
                  {isFreeTour ? 'Consultar free tours y horarios' : 'Reservar con GuruWalk'}
                </AffiliateLink>

                {isFreeTour && (
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    Los horarios y las plazas cambian cada día. Puedes comparar esta y
                    otras rutas en la{' '}
                    <Link href="/free-tours-lisboa" className="text-terracotta underline underline-offset-2 hover:no-underline">
                      guía de free tours de Lisboa
                    </Link>
                    .
                  </p>
                )}

                <AffiliateDisclosure variant="compact" className="mt-4 border-t border-border-soft pt-4 text-text-secondary" />
              </div>
            </div>
          )}

          {/* Conversión directa, sólo en las fichas con producto exacto. Va
              después del tip de ahorro a propósito: primero lo que sabemos
              nosotros, después dónde comprarlo. */}
          <BookingCta activitySlug={activity.slug} placement="activities" />

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/planifica-tu-viaje"
              className="btn-primary px-8 py-3 text-center"
            >
              Incluir en mi plan de viaje
            </Link>
            <Link
              href="/itinerarios"
              className="btn-outline px-8 py-3 text-center"
            >
              Ver itinerarios gratuitos
            </Link>
            <Link
              href="/actividades"
              className="btn-outline px-8 py-3 text-center"
            >
              ← Ver todas las actividades
            </Link>
          </div>
        </div>
      </section>

      {/* Relacionadas */}
      {related.length > 0 && (
        <section className="bg-background-light py-20 border-t border-border-soft">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs text-text-secondary uppercase tracking-widest mb-8">Más en {activity.category}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {related.map((a) => (
                <ActivityCard key={a.slug} activity={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

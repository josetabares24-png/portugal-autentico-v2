import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { activities, activitySlugs } from '@/data/activities';
import { ActivityCard } from '@/components/actividades/ActivityCard';

export function generateStaticParams() {
  return activitySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const activity = activities.find((a) => a.slug === slug);
  if (!activity) return { title: 'Actividad no encontrada', robots: { index: false, follow: false } };

  return {
    title: `${activity.title} | Estaba en Lisboa`,
    description: activity.description,
    keywords: [activity.title.toLowerCase(), `${activity.title.toLowerCase()} lisboa`, activity.category.toLowerCase(), 'que ver en lisboa'],
    openGraph: {
      title: activity.title,
      description: activity.description,
      url: `https://estabaenlisboa.com/actividades/${slug}`,
      images: [{ url: `https://estabaenlisboa.com${activity.image}`, width: 1200, height: 630, alt: activity.title }],
    },
    alternates: { canonical: `https://estabaenlisboa.com/actividades/${slug}` },
  };
}

export default async function ActivityDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const activity = activities.find((a) => a.slug === slug);
  if (!activity) notFound();

  const related = activities.filter((a) => a.category === activity.category && a.slug !== activity.slug).slice(0, 3);

  const touristAttractionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: activity.title,
    description: activity.description,
    image: `https://estabaenlisboa.com${activity.image}`,
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

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] overflow-hidden">
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-2xl">
          <nav aria-label="Breadcrumb" className="text-white/60 text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
            <Link href="/actividades" className="hover:text-white transition-colors">Actividades</Link>
            <span>/</span>
            <span className="text-white/90">{activity.category}</span>
          </nav>
          <h1 className="font-display italic text-white text-3xl md:text-5xl leading-tight mb-2">
            {activity.title}
          </h1>
          <p className="text-white/70 text-sm">{activity.zone} &middot; {activity.duration}</p>
        </div>
      </section>

      {/* Contenido */}
      <section className="bg-background-light py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-border-soft">
            <div>
              <p className="text-xs uppercase tracking-widest text-text-secondary mb-1">Precio</p>
              <p className={`text-2xl font-bold ${activity.isFree ? 'text-primary' : 'text-text-main'}`}>
                {activity.priceLabel}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-widest text-text-secondary mb-1">Duración</p>
              <p className="text-2xl font-bold text-text-main">{activity.duration}</p>
            </div>
          </div>

          <p className="text-text-secondary leading-relaxed mb-8">{activity.description}</p>

          <div className="bg-[#1a2b4a] px-6 py-6 mb-10">
            <p className="text-white/60 text-xs uppercase tracking-widest mb-2">Tip para ahorrar de un local</p>
            <p className="text-white leading-relaxed">{activity.savingTip}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/planifica-tu-viaje"
              className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold text-center transition-colors"
            >
              Incluir en mi plan de viaje
            </Link>
            <Link
              href="/actividades"
              className="px-8 py-3 border border-border-soft hover:border-text-secondary text-text-main font-semibold text-center transition-colors"
            >
              ← Ver todas las actividades
            </Link>
          </div>
        </div>
      </section>

      {/* Relacionadas */}
      {related.length > 0 && (
        <section className="bg-background-light py-16 border-t border-border-soft">
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

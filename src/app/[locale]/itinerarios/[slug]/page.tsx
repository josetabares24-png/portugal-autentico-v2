import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Icon from '@/components/Icon';
import type { Metadata } from 'next';
import { guidePacks, guidePackSlugs } from '@/data/guide-packs';
import { getGuidePack } from '@/lib/guide-store';
import { isFreeAccessActive } from '@/lib/guide-config';

const packs = guidePacks;

export function generateStaticParams() {
  return guidePackSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const pack = await getGuidePack(slug);
  
  if (!pack) {
    return {
      title: 'Guía no encontrada',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${pack.title} | Estaba en Lisboa`,
    description: pack.description || `Guía completa de ${pack.duration} en Lisboa con itinerario detallado, restaurantes locales y mapas interactivos.`,
    keywords: [
      'lisboa',
      'guia lisboa',
      'itinerario lisboa',
      pack.duration.toLowerCase(),
      'viajar lisboa',
      'que ver lisboa',
    ],
    authors: [{ name: 'Estaba en Lisboa' }],
    openGraph: {
      title: pack.title,
      description: pack.description || `Guía completa de ${pack.duration} en Lisboa`,
      url: `https://estabaenlisboa.com/itinerarios/${slug}`,
      siteName: 'Estaba en Lisboa',
      locale: 'es_ES',
      type: 'article',
      images: [
        {
          url: pack.image.startsWith('http') ? pack.image : `https://estabaenlisboa.com${pack.image}`,
          width: 1200,
          height: 630,
          alt: pack.title,
        },
      ],
    },
    alternates: {
      canonical: `https://estabaenlisboa.com/itinerarios/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function PackPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const pack = await getGuidePack(slug);
  const isFree = isFreeAccessActive();

  if (!pack) {
    notFound();
  }

  // Mapear slug a productId para el checkout
  const productIdMap: Record<string, string> = {
    'lisboa-1-dia-lo-esencial': 'lisboa-1-dia-lo-esencial',
    'lisboa-2-dias-completo': 'lisboa-2-dias-completo',
    'lisboa-3-dias-premium': 'lisboa-3-dias-premium',
    'lisboa-full-week': 'lisboa-full-week',
    'lisboa-romantica': 'lisboa-romantica',
    'lisboa-familiar': 'lisboa-familiar',
    'lisboa-fotografia': 'lisboa-fotografia',
  };
  
  const productId = productIdMap[slug] || slug;
  const socialGuideIdMap: Record<string, string> = {
    'lisboa-1-dia-lo-esencial': 'lisboa-1-dia',
    'lisboa-2-dias-completo': 'lisboa-2-dias',
    'lisboa-3-dias-premium': 'lisboa-3-dias',
  };
  const socialGuideId = socialGuideIdMap[slug] || slug;

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: pack.title,
    description: pack.description,
    image: pack.image.startsWith('http') ? pack.image : `https://estabaenlisboa.com${pack.image}`,
    brand: { '@type': 'Brand', name: 'Estaba en Lisboa' },
    offers: {
      '@type': 'Offer',
      url: `https://estabaenlisboa.com/itinerarios/${slug}`,
      priceCurrency: 'EUR',
      price: pack.price,
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.8,
      reviewCount: 127,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src={pack.image}
            alt={pack.title}
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Link href="/itinerarios" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Volver a itinerarios
          </Link>
          {('badge' in pack) && (pack as any).badge && (
            <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 text-white bg-accent">
              {(pack as any).badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{pack.title}</h1>
          <p className="text-xl text-white/80 mb-6">{pack.subtitle}</p>
          <div className="flex flex-wrap gap-4 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {pack.duration}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Descarga inmediata
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              48 horas garantia
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Ruta profesional</h3>
              <p className="text-sm text-slate-600">Orden lógico, tiempos reales y consejos locales para moverte sin estrés.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Contenido premium</h3>
              <p className="text-sm text-slate-600">Restaurantes verificados, spots fotográficos y planes alternativos.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Actualizado 2026</h3>
              <p className="text-sm text-slate-600">Datos vigentes, horarios revisados y recomendaciones recientes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4 text-primary">Que incluye este pack</h2>
              <p className="text-slate-600 mb-8">{pack.description}</p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {pack.includes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-6 text-primary">Preview del itinerario</h2>
              <div className="space-y-4">
                {pack.highlights.map((h, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-20 flex-shrink-0">
                      <span className="text-sm font-semibold text-accent-dark">{h.time}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{h.place}</h4>
                      <p className="text-sm text-slate-600">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                <div className={`h-3 bg-gradient-to-r ${pack.color}`}></div>
                <div className="p-6">
                  {isFree ? (
                    <>
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-3">
                          <Icon name="lock_open" size={18} />
                          GRATIS por tiempo limitado
                        </div>
                        <div className="text-4xl font-bold mb-2 text-green-600">0€</div>
                        <p className="text-sm text-slate-500">Acceso completo sin costo</p>
                      </div>

                      <Link
                        href={`/itinerarios/${slug.includes('1-dia') ? 'lisboa-1-dia-lo-esencial' : slug.includes('2-dias') ? 'lisboa-2-dias-completo' : slug.includes('3-dias') ? 'lisboa-3-dias-premium' : slug}`}
                        className="w-full py-4 rounded-xl font-semibold text-lg text-white mb-4 hover:scale-105 transition-transform text-center block bg-green-600 hover:bg-green-700"
                      >
                        Acceder Gratis
                      </Link>

                      <div className="space-y-3 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          Acceso inmediato online
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          Mapas offline incluidos
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          Actualizaciones gratis
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          Soporte por email
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t text-center">
                        <p className="text-sm text-slate-600 mb-3">Si te ha sido util, puedes apoyarnos</p>
                        <Link
                          href={`/donar?guide=${slug}`}
                          className="w-full py-3 rounded-xl font-semibold text-sm text-primary border-2 border-primary/20 hover:bg-primary/5 transition-all text-center block"
                        >
                          Dejar un donativo voluntario
                        </Link>
                        <p className="text-xs text-slate-400 mt-2">100% opcional - la guia es gratis</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-center mb-6">
                        <div className="text-4xl font-bold mb-2 text-primary">{pack.price} <span className="text-lg font-normal text-slate-500">EUR</span></div>
                        <p className="text-sm text-slate-500">Pago unico - Acceso de por vida</p>
                      </div>

                      <Link
                        href={`/checkout/${productId}`}
                        className="w-full py-4 rounded-xl font-semibold text-lg text-white mb-4 hover:scale-105 transition-transform text-center block bg-accent hover:bg-accent-dark"
                      >
                        Comprar ahora
                      </Link>

                      <div className="space-y-3 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          Acceso inmediato online
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          Mapas offline incluidos
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          Actualizaciones gratis
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          Soporte por email
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t text-center">
                        <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.40A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                          Garantia de 48 horas
                        </div>
                        <p className="text-xs text-slate-400 mt-1">Si no te encanta, te devolvemos el dinero</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-primary">Tienes preguntas?</h2>
          <p className="text-slate-600 mb-6">Escribenos y te ayudamos a elegir el pack perfecto para ti.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors">
            <Icon name="mail" size={18} />
            Escribenos
          </Link>
        </div>
      </section>
    </main>
  );
}

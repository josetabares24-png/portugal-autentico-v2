import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { guidePacks, guidePackSlugs } from '@/data/guide-packs';
import { getGuidePack } from '@/lib/guide-store';
import { isFreeAccessActive } from '@/lib/guide-config';
import { BuyButton } from '@/components/BuyButton';
import type { ProductId } from '@/lib/stripe-products';

export function generateStaticParams() {
  return guidePackSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const pack = await getGuidePack(slug);
  if (!pack) return { title: 'Guía no encontrada', robots: { index: false, follow: false } };
  return {
    title: `${pack.title} | Estaba en Lisboa`,
    description: pack.description || `Guía completa de ${pack.duration} en Lisboa.`,
    keywords: ['lisboa', 'guia lisboa', 'itinerario lisboa', pack.duration.toLowerCase()],
    authors: [{ name: 'Estaba en Lisboa' }],
    openGraph: {
      title: pack.title,
      description: pack.description || `Guía completa de ${pack.duration} en Lisboa`,
      url: `https://estabaenlisboa.com/itinerarios/${slug}`,
      images: [{ url: pack.image.startsWith('http') ? pack.image : `https://estabaenlisboa.com${pack.image}`, width: 1200, height: 630, alt: pack.title }],
    },
    alternates: { canonical: `https://estabaenlisboa.com/itinerarios/${slug}` },
  };
}

export default async function PackPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const pack = await getGuidePack(slug);
  const isFree = isFreeAccessActive();

  if (!pack) notFound();

  const productIdMap: Record<string, string> = {
    'lisboa-1-dia-lo-esencial': 'lisboa-1-dia-lo-esencial',
    'lisboa-2-dias-completo': 'lisboa-2-dias-completo',
    'lisboa-3-dias-premium': 'lisboa-3-dias-premium',
    'lisboa-full-week': 'lisboa-full-week',
    'lisboa-romantica': 'lisboa-romantica',
    'lisboa-familiar': 'lisboa-familiar',
    'lisboa-fotografia': 'lisboa-fotografia',
  };
  const productId = (productIdMap[slug] || slug) as ProductId;

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
    aggregateRating: { '@type': 'AggregateRating', ratingValue: 4.8, reviewCount: 127, bestRating: 5, worstRating: 1 },
  };

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[340px] overflow-hidden">
        <Image
          src={pack.image}
          alt={pack.title}
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-2xl">
          <Link href="/itinerarios" className="text-white/60 text-xs uppercase tracking-widest hover:text-white transition-colors mb-4 block">
            ← Itinerarios
          </Link>
          <h1 className="font-display italic text-white text-3xl md:text-5xl leading-tight mb-2">
            {pack.title}
          </h1>
          <p className="text-white/70 text-sm">{pack.duration} &middot; Descarga inmediata &middot; Garantía 48h</p>
        </div>
      </section>

      {/* Layout principal */}
      <section className="bg-background-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[2fr,1fr] gap-16 items-start">
            {/* Contenido */}
            <div>
              {/* Tres pilares */}
              <div className="grid sm:grid-cols-3 gap-8 mb-16">
                {[
                  { titulo: 'Ruta profesional', desc: 'Orden lógico, tiempos reales y consejos locales.' },
                  { titulo: 'Contenido premium', desc: 'Restaurantes verificados y spots fotográficos.' },
                  { titulo: 'Actualizado 2026', desc: 'Horarios revisados y recomendaciones recientes.' },
                ].map((item) => (
                  <div key={item.titulo} className="border-t-2 border-primary pt-5">
                    <h3 className="font-semibold text-text-main text-sm mb-1">{item.titulo}</h3>
                    <p className="text-text-secondary text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Descripción */}
              <div className="mb-12">
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-4">Qué incluye</p>
                <p className="text-text-secondary leading-relaxed mb-8">{pack.description}</p>
                <div className="space-y-2">
                  {pack.includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preview itinerario */}
              <div>
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-6 pb-3 border-b border-border-soft">Preview del itinerario</p>
                <div className="space-y-0">
                  {pack.highlights.map((h, i) => (
                    <div key={i} className="border-t border-border-soft py-5 grid grid-cols-[5rem,1fr] gap-4">
                      <span className="text-sm font-semibold text-primary">{h.time}</span>
                      <div>
                        <p className="font-semibold text-text-main text-sm mb-1">{h.place}</p>
                        <p className="text-text-secondary text-sm">{h.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar compra */}
            <div className="lg:sticky lg:top-24">
              <div className="border-t-2 border-primary pt-6">
                {isFree ? (
                  <>
                    <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Acceso gratuito</p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-text-main">0 €</span>
                      <span className="text-text-secondary text-sm line-through">{pack.price} €</span>
                    </div>
                    <p className="text-text-secondary text-sm mb-6">Acceso completo sin coste.</p>
                    <Link
                      href={`/itinerarios/${slug}`}
                      className="block w-full text-center py-3 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors mb-6"
                    >
                      Acceder gratis
                    </Link>
                    <div className="space-y-2 text-sm text-text-secondary mb-6">
                      {['Acceso inmediato online', 'Mapas offline incluidos', 'Actualizaciones gratis', 'Soporte por email'].map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <span className="text-primary">&#10003;</span>
                          {f}
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-border-soft pt-5 text-center">
                      <p className="text-text-secondary text-sm mb-3">Si te ha sido útil, puedes apoyarnos</p>
                      <Link
                        href={`/donar?guide=${slug}`}
                        className="block w-full py-2.5 border border-border-soft hover:border-text-secondary text-text-main text-sm font-semibold transition-colors"
                      >
                        Dejar un donativo voluntario
                      </Link>
                      <p className="text-xs text-text-secondary mt-2">100% opcional</p>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-xs uppercase tracking-widest text-text-secondary mb-3">Pago único · Acceso de por vida</p>
                    <p className="text-3xl font-bold text-text-main mb-6">{pack.price} €</p>
                    <BuyButton
                      productId={productId}
                      className="w-full py-3 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors mb-6"
                    >
                      Comprar ahora
                    </BuyButton>
                    <div className="space-y-2 text-sm text-text-secondary mb-6">
                      {['Acceso inmediato online', 'Mapas offline incluidos', 'Actualizaciones gratis', 'Soporte por email'].map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <span className="text-primary">&#10003;</span>
                          {f}
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-border-soft pt-5 text-center">
                      <p className="text-sm text-text-secondary">Garantía de 48 horas</p>
                      <p className="text-xs text-text-secondary mt-1">Si no te encanta, te devolvemos el dinero.</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA contacto */}
      <section className="bg-background-light py-12 border-t border-border-soft">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-text-secondary text-sm mb-4">¿Tienes dudas sobre este itinerario?</p>
          <Link href="/contacto" className="text-sm text-primary hover:underline underline-offset-2">
            Escríbenos y te ayudamos →
          </Link>
        </div>
      </section>
    </main>
  );
}

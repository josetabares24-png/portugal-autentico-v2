import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import HomeNewsletter from '@/components/home/HomeNewsletter';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: { absolute: 'Estaba en Lisboa | Guías prácticas para entender Lisboa' },
  description: 'Guías en español sobre Lisboa: qué ver, cómo moverte, dónde comer, barrios, planificación y excursiones con información práctica y criterio editorial.',
  alternates: { canonical: 'https://estabaenlisboa.com' },
  openGraph: {
    title: 'Estaba en Lisboa | Lisboa explicada sin ruido',
    description: 'Qué ver, cómo moverte, dónde comer y qué conviene saber antes de viajar a Lisboa.',
    url: 'https://estabaenlisboa.com',
    images: [{
      url: 'https://estabaenlisboa.com/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg',
      width: 1200,
      height: 630,
      alt: 'Vista de Alfama y el río Tajo en Lisboa',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estaba en Lisboa | Lisboa explicada sin ruido',
    description: 'Guías prácticas en español para entender y recorrer Lisboa.',
    images: ['https://estabaenlisboa.com/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg'],
  },
};

const categoryPaths = [
  {
    title: 'Qué ver',
    text: 'Lugares y zonas que merecen tiempo, organizados para decidir mejor.',
    href: '/blog/mejores-miradores-lisboa',
    icon: 'travel_explore',
  },
  {
    title: 'Cómo moverse',
    text: 'Metro, tranvía, tren, aeropuerto y billetes, explicado sin rodeos.',
    href: '/blog/como-moverse-por-lisboa',
    icon: 'tram',
  },
  {
    title: 'Dónde comer',
    text: 'Mercados, cafés y opciones útiles según la zona y el presupuesto.',
    href: '/blog/donde-comer-barato-lisboa',
    icon: 'restaurant',
  },
  {
    title: 'Barrios',
    text: 'Qué cambia entre Alfama, Baixa, Graça, Chiado y otras zonas.',
    href: '/blog/barrios-imprescindibles',
    icon: 'location_city',
  },
  {
    title: 'Planificar',
    text: 'Alojamiento, pagos, presupuesto y decisiones antes de llegar.',
    href: '/blog/donde-alojarse-en-lisboa',
    icon: 'map',
  },
  {
    title: 'Excursiones',
    text: 'Sintra, Cascais y escapadas que encajan de verdad desde Lisboa.',
    href: '/blog/excursiones-desde-lisboa',
    icon: 'directions_railway',
  },
];

const essentialIds = [
  'como-moverse-por-lisboa',
  'como-pagar-en-portugal',
  'barrios-imprescindibles',
];

const latestIds = [
  'time-out-market-lisboa',
  'donde-comer-barato-lisboa',
  'mejores-miradores-lisboa',
  'donde-alojarse-en-lisboa',
  'errores-turistas-lisboa',
  'historia-de-lisboa',
];

const essentials = essentialIds
  .map((id) => blogPosts.find((post) => post.id === id))
  .filter((post): post is NonNullable<typeof post> => Boolean(post));

const latestGuides = latestIds
  .map((id) => blogPosts.find((post) => post.id === id))
  .filter((post): post is NonNullable<typeof post> => Boolean(post));

const needGroups = [
  {
    title: 'Si es tu primera vez',
    icon: 'map',
    links: [
      { label: 'Barrios para empezar', href: '/blog/barrios-imprescindibles' },
      { label: 'Errores comunes', href: '/blog/errores-turistas-lisboa' },
      { label: 'Dónde alojarse', href: '/blog/donde-alojarse-en-lisboa' },
    ],
  },
  {
    title: 'Para moverte mejor',
    icon: 'directions_transit',
    links: [
      { label: 'Aeropuerto al centro', href: '/blog/aeropuerto-lisboa-al-centro' },
      { label: 'Metro de Lisboa', href: '/blog/metro-lisboa-guia' },
      { label: 'Estación Oriente', href: '/blog/estacion-oriente-lisboa' },
    ],
  },
  {
    title: 'Para comer bien',
    icon: 'restaurant',
    links: [
      { label: 'Time Out Market', href: '/blog/time-out-market-lisboa' },
      { label: 'Dónde comer barato', href: '/blog/donde-comer-barato-lisboa' },
      { label: 'Dónde tomar café', href: '/blog/donde-tomar-cafe-lisboa' },
    ],
  },
  {
    title: 'Para entender la ciudad',
    icon: 'history_edu',
    links: [
      { label: 'Historia de Lisboa', href: '/blog/historia-de-lisboa' },
      { label: 'Arquitectura manuelina', href: '/blog/arquitectura-manuelina-lisboa' },
      { label: 'Tranvía 28', href: '/blog/tram-28-historia-guia' },
    ],
  },
];

function SectionHeading({ title, eyebrow }: { title: string; eyebrow: string }) {
  return (
    <div className="mb-8 flex flex-col gap-3 border-b border-taupe/25 pb-4 md:flex-row md:items-end md:justify-between">
      <h2 className="font-display text-3xl not-italic leading-none text-night md:text-4xl">{title}</h2>
      <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-taupe">{eyebrow}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main id="main-content" className="bg-cream">
      <section className="border-b border-taupe/15">
        <div className="mx-auto grid max-w-7xl lg:min-h-[610px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center px-6 py-14 md:px-10 md:py-20 lg:px-14">
            <p className="mb-5 font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Guías en español para entender Lisboa
            </p>
            <h1 className="max-w-xl font-display text-5xl not-italic leading-[0.98] text-night md:text-6xl lg:text-7xl">
              Lisboa explicada sin ruido.
            </h1>
            <p className="mt-6 max-w-xl font-body text-base leading-7 text-text-secondary md:text-lg">
              Qué ver, cómo moverte, dónde comer y qué conviene saber antes de llegar. Guías prácticas para ayudarte a decidir mejor, sin llenar el viaje de cosas porque sí.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/blog" className="btn-primary btn-lg">
                Explorar guías <Icon name="arrow_forward" size={17} />
              </Link>
              <Link href="/free-tours-lisboa" className="btn-outline btn-lg">
                Ver free tours
              </Link>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden lg:min-h-full">
            <Image
              src="/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg"
              alt="Tejados de Alfama y el río Tajo en Lisboa"
              fill
              priority
              fetchPriority="high"
              quality={78}
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="site-container">
          <SectionHeading title="Empieza por aquí" eyebrow="Seis formas de orientarte" />
          <div className="grid gap-px border border-taupe/20 bg-taupe/20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {categoryPaths.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group min-h-[190px] bg-cream p-5 transition-colors hover:bg-white"
              >
                <Icon name={item.icon} size={24} className="mb-7 text-gold" />
                <h3 className="font-display text-xl not-italic text-night transition-colors group-hover:text-terracotta">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-6 text-text-secondary">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-20">
        <div className="site-container">
          <SectionHeading title="Imprescindibles" eyebrow="Artículos con demanda real" />
          <div className="grid gap-5 lg:grid-cols-12">
            {essentials.map((post, index) => (
              <article
                key={post.id}
                className={index === 0 ? 'border border-taupe/20 bg-white lg:col-span-6' : 'border border-taupe/20 bg-white lg:col-span-3'}
              >
                <Link href={`/blog/${post.id}`} className="group block h-full">
                  <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                    <Image
                      src={post.imagen}
                      alt={post.titulo}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes={index === 0 ? '(max-width: 1023px) 100vw, 50vw' : '(max-width: 1023px) 100vw, 25vw'}
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="font-body text-[10px] font-bold uppercase tracking-[0.16em] text-gold">{post.categoria}</p>
                    <h3 className={`mt-2 font-display not-italic leading-tight text-night transition-colors group-hover:text-terracotta ${index === 0 ? 'text-3xl' : 'text-2xl'}`}>
                      {post.titulo}
                    </h3>
                    <p className="mt-3 line-clamp-3 font-body text-sm leading-6 text-text-secondary">{post.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-1 font-body text-sm font-semibold text-night">
                      Leer guía <Icon name="arrow_forward" size={15} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-taupe/15 bg-white/45 py-14 md:py-20">
        <div className="site-container">
          <SectionHeading title="Lisboa según lo que necesitas" eyebrow="No todos los viajes empiezan igual" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {needGroups.map((group, index) => (
              <div key={group.title} className={`lg:px-7 ${index === 0 ? 'lg:pl-0' : 'lg:border-l lg:border-taupe/20'}`}>
                <div className="flex items-center gap-3">
                  <Icon name={group.icon} size={21} className="text-gold" />
                  <h3 className="font-display text-xl not-italic text-night">{group.title}</h3>
                </div>
                <div className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex items-center justify-between border-b border-taupe/15 pb-2 font-body text-sm text-night transition-colors hover:text-terracotta"
                    >
                      <span>{link.label}</span>
                      <Icon name="arrow_forward" size={14} className="text-gold transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-alt">
        <div className="mx-auto grid max-w-7xl md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[320px] md:min-h-[430px]">
            <Image
              src="/images/lisboa-originales/baixa-pombalina-lisboa-02.webp"
              alt="Baixa Pombalina en el centro de Lisboa"
              fill
              className="object-cover"
              sizes="(max-width: 767px) 100vw, 45vw"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16">
            <p className="mb-3 font-body text-[10px] font-bold uppercase tracking-[0.18em] text-gold">Una primera toma de contacto</p>
            <h2 className="max-w-xl font-display text-3xl not-italic leading-tight text-night md:text-4xl">
              ¿Quieres empezar Lisboa con contexto?
            </h2>
            <p className="mt-5 max-w-2xl font-body text-base leading-7 text-text-secondary">
              Un free tour puede servir para ubicarte al principio del viaje y entender mejor el centro antes de recorrerlo por tu cuenta. Revisa los recorridos y elige según la zona que quieras conocer.
            </p>
            <div className="mt-7">
              <Link href="/free-tours-lisboa" className="btn-primary">
                Ver free tours <Icon name="arrow_forward" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="site-container">
          <SectionHeading title="Últimas guías para seguir" eyebrow="Contenido para continuar el viaje" />
          <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {latestGuides.map((post) => (
              <article key={post.id}>
                <Link href={`/blog/${post.id}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden border border-taupe/15">
                    <Image
                      src={post.imagen}
                      alt={post.titulo}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    />
                  </div>
                  <p className="mt-4 font-body text-[10px] font-bold uppercase tracking-[0.16em] text-gold">{post.categoria}</p>
                  <h3 className="mt-1 font-display text-2xl not-italic leading-tight text-night transition-colors group-hover:text-terracotta">
                    {post.titulo}
                  </h3>
                  <p className="mt-2 line-clamp-2 font-body text-sm leading-6 text-text-secondary">{post.excerpt}</p>
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-10 border-t border-taupe/20 pt-6">
            <Link href="/blog" className="inline-flex items-center gap-2 font-body text-sm font-semibold text-night hover:text-terracotta">
              Ver todas las guías <Icon name="arrow_forward" size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-taupe/15 bg-white/45 py-12 md:py-16">
        <div className="site-container grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-center">
          <div>
            <p className="mb-2 font-body text-[10px] font-bold uppercase tracking-[0.18em] text-gold">Correo útil, no una campaña</p>
            <h2 className="font-display text-3xl not-italic leading-tight text-night md:text-4xl">Lisboa en tu correo, sin spam.</h2>
          </div>
          <div>
            <p className="mb-5 max-w-xl font-body text-sm leading-6 text-text-secondary">
              Nuevas guías y actualizaciones que realmente cambian cómo planificar el viaje. Sin correos por llenar calendario.
            </p>
            <HomeNewsletter />
          </div>
        </div>
      </section>
    </main>
  );
}

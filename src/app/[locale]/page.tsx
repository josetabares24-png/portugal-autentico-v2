import Link from 'next/link';
import TrackedInternalLink from '@/components/TrackedInternalLink';
import Image from 'next/image';
import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: { absolute: 'Estaba en Lisboa | Guías de Lisboa en español' },
  description:
    'Guías sobre Lisboa: transporte, barrios, comida, qué ver, dónde alojarse y excursiones. Información práctica para organizar el viaje.',
  openGraph: {
    title: 'Estaba en Lisboa | Guías de Lisboa',
    description: 'Guías sobre Lisboa: qué ver, transporte, barrios, comida, alojamiento y excursiones.',
    url: 'https://estabaenlisboa.com',
    images: [
      {
        url: 'https://estabaenlisboa.com/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg',
        width: 1200,
        height: 630,
        alt: 'Vista de Alfama y el río Tajo en Lisboa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estaba en Lisboa | Guías de Lisboa',
    description: 'Información práctica en español para organizar un viaje a Lisboa.',
    images: ['https://estabaenlisboa.com/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg'],
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com',
  },
};

const historias = [
  blogPosts.find((p) => p.id === 'time-out-market-lisboa') || blogPosts[0],
  blogPosts.find((p) => p.id === 'estacion-oriente-lisboa') || blogPosts[1],
  blogPosts.find((p) => p.id === 'estacion-olaias-lisboa') || blogPosts[2],
].filter(Boolean);

type PanelLink = {
  href: string;
  label: string;
};

type GuidePanel = {
  number: string;
  title: string;
  kicker: string;
  intro: string;
  body: string;
  topics: string[];
  guideHref: string;
  guideLabel: string;
  links: PanelLink[];
  note?: string;
};

const guidePanels: GuidePanel[] = [
  {
    number: '01',
    title: 'Rutas y guías',
    kicker: 'Cómo entender Lisboa',
    intro:
      'Empieza por el tiempo que tienes. Lisboa se disfruta mejor cuando agrupas zonas y aceptas que una cuesta puede cambiarte media tarde.',
    body:
      'Para una primera visita, suele funcionar mejor pensar por bloques que por monumentos sueltos: Baixa y Chiado pueden compartir jornada; Belém merece varias horas; Alfama y Graça agradecen un ritmo más lento. Las rutas de Estaba en Lisboa parten de esa lógica y después te llevan a las guías específicas de cada zona.',
    topics: ['1 día', '2 días', '3 días', '4–5 días', '1 semana', 'Con lluvia', 'Con niños'],
    guideHref: '/itinerarios',
    guideLabel: 'Ver la guía de rutas',
    links: [
      { href: '/itinerarios', label: 'Lisboa en 1, 2 y 3 días' },
      { href: '/blog/lisboa-en-4-dias', label: 'Lisboa en 4 días' },
      { href: '/blog/lisboa-en-5-dias', label: 'Lisboa en 5 días' },
      { href: '/blog/lisboa-en-7-dias', label: 'Lisboa en 7 días' },
    ],
    note: 'Si sólo quieres una respuesta rápida: decide primero cuántos días tienes y después elige zonas.',
  },
  {
    number: '02',
    title: 'Movilidad',
    kicker: 'Transportes, atajos y consejos',
    intro:
      'Metro, tranvías, buses y caminar funcionan bien, pero no sirven igual para todos los recorridos.',
    body:
      'El metro resuelve gran parte de la ciudad y suele ser la opción más previsible. Los tranvías son parte de la experiencia, pero no siempre son el camino más rápido. Si llevas equipaje, subes hacia Graça o vienes del aeropuerto, conviene decidir antes qué combinación te ahorra tiempo y cuestas.',
    topics: ['Metro', 'Tranvías', 'Aeropuerto', 'Tarjetas', 'Caminar', 'Apps', 'Atajos'],
    guideHref: '/blog/como-moverse-por-lisboa',
    guideLabel: 'Ver la guía de movilidad',
    links: [
      { href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa' },
      { href: '/blog/metro-lisboa-guia', label: 'Metro de Lisboa' },
      { href: '/blog/tarjeta-navegante-lisboa', label: 'Qué tarjeta comprar' },
      { href: '/blog/aeropuerto-lisboa-al-centro', label: 'Aeropuerto al centro' },
      { href: '/blog/tram-28-historia-guia', label: 'Tranvía 28' },
    ],
    note: 'Atajo real: cuando una ruta termina arriba, muchas veces compensa subir en transporte y bajar caminando.',
  },
  {
    number: '03',
    title: 'Qué visitar',
    kicker: 'Sitios, monumentos, entradas y experiencias',
    intro:
      'Lisboa tiene más planes que tiempo. La clave no es ver todo: es saber qué merece una reserva y qué puedes decidir allí.',
    body:
      'Jerónimos, Castelo de São Jorge, Oceanário, miradores, Sintra y experiencias guiadas compiten por el mismo tiempo de viaje. Antes de comprar entradas, conviene separar lo imprescindible de lo opcional y entender qué visita funciona mejor por la mañana, cuál necesita traslado y cuál puede encajar de forma espontánea.',
    topics: ['Imprescindibles', 'Monumentos', 'Gratis', 'Entradas', 'Con niños', 'Excursiones', 'Experiencias'],
    guideHref: '/actividades',
    guideLabel: 'Ver qué visitar y hacer',
    links: [
      { href: '/blog/monumentos-de-lisboa', label: 'Monumentos de Lisboa' },
      { href: '/blog/que-hacer-gratis-en-lisboa', label: 'Qué hacer gratis' },
      { href: '/comprar-entradas', label: 'Entradas y reservas' },
      { href: '/actividades', label: 'Actividades' },
      { href: '/blog/sintra-desde-lisboa', label: 'Sintra desde Lisboa' },
    ],
  },
  {
    number: '04',
    title: 'Dónde comer',
    kicker: 'Gastronomía y opciones para cada viaje',
    intro:
      'No quiero darte una lista infinita de restaurantes. Quiero ayudarte a elegir según precio, tipo de comida y lo que realmente buscas.',
    body:
      'Lisboa es bacalhau, bifanas, sardinas y pastéis, pero también tascas de barrio, mercados, brunch, cocina contemporánea y cada vez más opciones vegetarianas, veganas y sin gluten. La idea es separar recomendaciones por intención para que no termines pagando de más sólo porque estabas en la calle más turística.',
    topics: ['Portugués', 'Barato', 'Tascas', 'Mercados', 'Veggie', 'Vegano', 'Sin gluten', 'Brunch'],
    guideHref: '/comer-en-lisboa',
    guideLabel: 'Ver la guía para comer en Lisboa',
    links: [
      { href: '/blog/gastronomia-portuguesa-guia', label: 'Gastronomía portuguesa' },
      { href: '/blog/donde-comer-barato-lisboa', label: 'Dónde comer barato' },
      { href: '/blog/mejores-mercados-lisboa', label: 'Mercados' },
      { href: '/blog/pasteles-de-belem', label: 'Pastéis de Belém' },
      { href: '/blog/bacalhau-plato-portugal', label: 'Bacalhau' },
    ],
    note: 'Vegetariano, vegano y sin gluten serán guías propias cuando tengamos suficientes lugares verificados.',
  },
  {
    number: '05',
    title: 'Dónde tomar algo',
    kicker: 'Ambientes, cafés y vida nocturna',
    intro:
      'Bairro Alto, Graça y Cais do Sodré pueden formar parte de la misma noche y sentirse como tres ciudades distintas.',
    body:
      'Aquí la recomendación cambia según el ambiente: una cerveza tranquila, un rooftop, un cóctel, una casa de fado o una zona para seguir hasta tarde. En vez de un ranking genérico de bares, la idea es ayudarte a escoger el tipo de noche que buscas y después bajar a lugares concretos.',
    topics: ['Tranquilo', 'Cerveza', 'Cócteles', 'Rooftops', 'Fado', 'Cafés', 'Salir hasta tarde'],
    guideHref: '/blog/vida-nocturna-lisboa',
    guideLabel: 'Ver la guía para salir',
    links: [
      { href: '/blog/vida-nocturna-lisboa', label: 'Vida nocturna en Lisboa' },
      { href: '/blog/donde-escuchar-fado-autentico', label: 'Dónde escuchar fado' },
      { href: '/blog/donde-tomar-cafe-lisboa', label: 'Cafés' },
      { href: '/blog/chiado-bairro-alto-guia', label: 'Chiado y Bairro Alto' },
    ],
  },
  {
    number: '06',
    title: 'Spots',
    kicker: 'Las fotos que te puedes llevar del viaje',
    intro:
      'No sólo dónde hacer la foto: también desde qué punto, a qué hora y cuándo merece la pena desviarte.',
    body:
      'Lisboa tiene miradores, tranvías, azulejos, tejados y calles que cambian completamente con la luz. Queremos convertir esta sección en una guía práctica para fotografiar la ciudad sin caer en una colección de lugares “instagrameables” sin contexto.',
    topics: ['Miradores', 'Tranvías', 'Azulejos', 'Atardecer', 'Calles', 'Puentes', 'Panorámicas'],
    guideHref: '/blog/donde-fotografiar-lisboa',
    guideLabel: 'Ver la guía de spots',
    links: [
      { href: '/blog/donde-fotografiar-lisboa', label: 'Dónde fotografiar Lisboa' },
      { href: '/blog/mejores-miradores-lisboa', label: 'Mejores miradores' },
      { href: '/blog/graca-lisboa-que-ver', label: 'Graça' },
      { href: '/blog/alfama-historia-guia', label: 'Alfama' },
    ],
  },
  {
    number: '07',
    title: 'Cuídate de esto',
    kicker: 'Errores, trampas y situaciones que conviene conocer',
    intro:
      'Lisboa no necesita una guía alarmista. Sí contexto para no decidir con prisa cuando algo no conoces.',
    body:
      'En una ciudad turística se repiten algunas situaciones: carteristas en zonas concurridas, servicios poco claros, precios pensados para quien no mira la carta y costumbres como el couvert que sorprenden si nadie te las explicó. La idea es decirte qué suele pasar y cómo reducir el riesgo sin convertir el viaje en una lista de miedos.',
    topics: ['Carteristas', 'Precios', 'Restaurantes', 'Aeropuerto', 'Transporte', 'Reservas', 'Errores comunes'],
    guideHref: '/blog/errores-turistas-lisboa',
    guideLabel: 'Ver la guía para evitar problemas',
    links: [
      { href: '/blog/errores-turistas-lisboa', label: 'Errores comunes de turistas' },
      { href: '/blog/como-pagar-en-portugal', label: 'Cómo pagar en Portugal' },
      { href: '/blog/aeropuerto-lisboa-al-centro', label: 'Llegar desde el aeropuerto' },
    ],
  },
];

export default function HomePage() {
  return (
    <main id="main-content" className="bg-cream">
      {/* ── HERO ── */}
      <section className="relative h-[calc(100svh-4rem)] min-h-[560px] max-h-[820px] overflow-hidden md:min-h-[620px]">
        <Image
          src="/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg"
          alt="Vista de Alfama y del río Tajo desde un mirador de Lisboa"
          fill
          className="scale-[1.22] object-cover object-[52%_50%] md:scale-100 md:object-center"
          priority
          fetchPriority="high"
          quality={75}
          sizes="(max-width: 767px) 450vw, (max-width: 1279px) 190vw, 100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top right, rgba(10,15,30,0.82) 0%, rgba(10,15,30,0.45) 35%, transparent 65%)',
          }}
        />

        <div className="absolute bottom-0 left-0 max-w-3xl p-7 sm:p-10 md:p-16">
          <h1
            className="mb-4 font-display italic leading-[1.02] text-white"
            style={{ fontSize: 'clamp(2.45rem, 5.2vw, 4.6rem)', fontWeight: 400 }}
          >
            La Lisboa que le enseño a quien viene a verme.
          </h1>
          <p className="mb-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Rutas, transporte, comida, lugares y consejos para entender la ciudad antes de empezar a correr de un sitio a otro.
          </p>
          <a href="#guia-rapida" className="btn-ghost-light btn-lg">
            ¿Qué necesitas? ↓
          </a>
        </div>
      </section>

      {/* ── GUÍA RÁPIDA / ACCORDION ── */}
      <section id="guia-rapida" className="scroll-mt-20 border-b border-taupe/20 bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 md:px-10">
          <div className="mb-10 md:flex md:items-end md:justify-between md:gap-10">
            <div className="max-w-2xl">
              <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">Lisboa, sin complicarte</p>
              <h2
                className="font-display italic leading-tight text-night"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}
              >
                Abre sólo lo que necesitas.
              </h2>
              <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-text-secondary">
                Siete puertas de entrada a la ciudad. La información importante está aquí; las guías completas están a un clic.
              </p>
            </div>
            <p className="mt-5 font-body text-xs uppercase tracking-[0.16em] text-taupe md:mt-0">
              Toca para desplegar
            </p>
          </div>

          <div className="border-t border-night/20">
            {guidePanels.map((panel) => (
              <details
                key={panel.number}
                className="group border-b border-night/20"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 py-6 outline-none transition-colors hover:text-terracotta focus-visible:ring-2 focus-visible:ring-terracotta/50 [&::-webkit-details-marker]:hidden md:gap-7 md:py-7">
                  <span className="w-8 flex-shrink-0 font-body text-xs tracking-[0.18em] text-taupe">
                    {panel.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[1.35rem] italic leading-tight text-night md:text-[1.65rem]">
                      {panel.title}
                    </h3>
                    <p className="mt-1 font-body text-sm leading-snug text-text-secondary">
                      {panel.kicker}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="ml-auto flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-night/20 font-body text-xl font-light text-night transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <div className="pb-8 pl-12 pr-2 md:pb-10 md:pl-[4.75rem] md:pr-14">
                  <p className="max-w-2xl font-body text-base font-medium leading-relaxed text-night">
                    {panel.intro}
                  </p>
                  <p className="mt-4 max-w-2xl font-body text-[0.95rem] leading-relaxed text-text-secondary">
                    {panel.body}
                  </p>

                  <div className="mt-6">
                    <p className="mb-3 font-body text-[0.68rem] uppercase tracking-[0.16em] text-taupe">
                      Dentro de esta guía
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {panel.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-full border border-night/15 px-3 py-1.5 font-body text-xs text-night/80"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {panel.note ? (
                    <p className="mt-5 max-w-2xl border-l-2 border-terracotta pl-4 font-display text-[1rem] italic leading-relaxed text-night">
                      {panel.note}
                    </p>
                  ) : null}

                  <div className="mt-7 flex flex-col gap-5 border-t border-taupe/20 pt-6">
                    <TrackedInternalLink
                      href={panel.guideHref}
                      contentType="home_guide_hub"
                      contentId={panel.title.toLowerCase().replaceAll(' ', '_')}
                      className="inline-flex w-fit items-center rounded-full bg-night px-5 py-3 font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    >
                      {panel.guideLabel} →
                    </TrackedInternalLink>

                    <div className="flex flex-wrap gap-x-5 gap-y-3">
                      {panel.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="font-body text-sm text-night underline decoration-taupe/40 underline-offset-4 transition-colors hover:text-terracotta"
                        >
                          {link.label} →
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABREBOCA EDITORIAL ── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">Después de lo práctico</p>
            <h2
              className="font-display italic leading-tight text-night"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}
            >
              Lisboa también se entiende por sus historias.
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-text-secondary">
              Cuando ya sabes cómo moverte y qué hacer, empiezan las cosas que hacen que una ciudad deje de ser sólo un destino.
            </p>
          </div>

          {historias[0] ? (
            <article className="grid gap-8 border-t border-taupe/20 pt-8 md:grid-cols-[1.18fr_0.82fr] md:gap-12">
              <Link href={`/blog/${historias[0]!.id}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                  <Image
                    src={historias[0]!.imagen}
                    alt={historias[0]!.titulo}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 58vw"
                    loading="lazy"
                  />
                </div>
              </Link>

              <div className="self-center">
                <p className="mb-3 font-body text-xs uppercase tracking-[0.14em] text-taupe">
                  {historias[0]!.categoria}
                </p>
                <Link href={`/blog/${historias[0]!.id}`}>
                  <h3 className="font-display text-[1.7rem] italic leading-tight text-night transition-colors hover:text-terracotta md:text-[2.15rem]">
                    {historias[0]!.titulo}
                  </h3>
                </Link>
                <p className="mt-4 font-body text-base leading-relaxed text-text-secondary">
                  {historias[0]!.excerpt}
                </p>
                <Link
                  href={`/blog/${historias[0]!.id}`}
                  className="mt-6 inline-flex border-b border-night pb-0.5 font-body text-sm text-night transition-colors hover:border-terracotta hover:text-terracotta"
                >
                  Leer historia
                </Link>
              </div>
            </article>
          ) : null}

          <div className="mt-12 grid gap-8 border-t border-taupe/20 pt-8 md:grid-cols-2">
            {historias.slice(1).map((post) => (
              <article key={post!.id} className="grid grid-cols-[110px_1fr] gap-5 sm:grid-cols-[150px_1fr]">
                <Link href={`/blog/${post!.id}`} className="block">
                  <div className="relative aspect-square overflow-hidden rounded-md">
                    <Image
                      src={post!.imagen}
                      alt={post!.titulo}
                      fill
                      className="object-cover"
                      sizes="150px"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <div>
                  <p className="mb-2 font-body text-xs text-taupe">{post!.categoria}</p>
                  <Link href={`/blog/${post!.id}`}>
                    <h3 className="font-display text-[1.1rem] italic leading-snug text-night transition-colors hover:text-terracotta md:text-[1.25rem]">
                      {post!.titulo}
                    </h3>
                  </Link>
                  <Link
                    href={`/blog/${post!.id}`}
                    className="mt-3 inline-flex font-body text-sm text-night underline decoration-taupe/40 underline-offset-4 transition-colors hover:text-terracotta"
                  >
                    Leer →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 border-t border-taupe/20 pt-8">
            <Link
              href="/blog"
              className="font-body text-sm font-semibold text-night underline decoration-taupe/40 underline-offset-4 transition-colors hover:text-terracotta"
            >
              Ver todas las guías e historias →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CIERRE ── */}
      <section className="relative overflow-hidden bg-night bg-azulejo-pattern-gold py-16 md:py-20">
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10">
          <p className="max-w-xl font-body text-base leading-relaxed text-white/80">
            Si ya sabes cuántos días vienes, las rutas son la forma más rápida de empezar a organizar el viaje.
          </p>
          <TrackedInternalLink
            href="/itinerarios"
            contentType="home_secondary_cta"
            contentId="itinerarios"
            className="btn-primary flex-shrink-0"
          >
            Ver itinerarios →
          </TrackedInternalLink>
        </div>
      </section>
    </main>
  );
}

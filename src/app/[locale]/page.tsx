import Link from 'next/link';
import TrackedInternalLink from '@/components/TrackedInternalLink';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Guía de Lisboa en español: rutas, transporte, comida y qué ver | Estaba en Lisboa' },
  description:
    'Una guía editorial para entender Lisboa: rutas, transporte, qué visitar, dónde comer, vida nocturna, lugares para fotografiar y consejos para evitar errores comunes.',
  openGraph: {
    title: 'Estaba en Lisboa | Una guía para entender Lisboa',
    description:
      'Rutas, transporte, qué visitar, dónde comer, dónde tomar algo, spots y consejos útiles para viajar mejor por Lisboa.',
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
    title: 'Estaba en Lisboa | Una guía para entender Lisboa',
    description:
      'Rutas, transporte, comida, lugares, fotos y consejos para organizar Lisboa con sentido.',
    images: ['https://estabaenlisboa.com/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg'],
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com',
  },
};

type GuideLink = {
  href: string;
  label: string;
  note: string;
};

function EditorialLinks({ items }: { items: GuideLink[] }) {
  return (
    <div className="mt-8 border-t border-taupe/25">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group grid gap-1 border-b border-taupe/20 py-4 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-8"
        >
          <span className="font-body text-sm font-semibold text-night transition-colors group-hover:text-terracotta">
            {item.label} →
          </span>
          <span className="font-body text-sm leading-relaxed text-text-secondary">{item.note}</span>
        </Link>
      ))}
    </div>
  );
}

const chapterNav = [
  { href: '#rutas', label: 'Rutas y guías' },
  { href: '#movilidad', label: 'Movilidad' },
  { href: '#visitar', label: 'Qué visitar' },
  { href: '#comer', label: 'Dónde comer' },
  { href: '#tomar-algo', label: 'Dónde tomar algo' },
  { href: '#spots', label: 'Spots' },
  { href: '#cuidate', label: 'Cuídate de esto' },
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
              'linear-gradient(to top right, rgba(10,15,30,0.84) 0%, rgba(10,15,30,0.5) 36%, transparent 66%)',
          }}
        />

        <div className="absolute bottom-0 left-0 max-w-3xl p-7 sm:p-10 md:p-16">
          <p className="mb-4 font-body text-xs uppercase tracking-[0.2em] text-white/70">Estaba en Lisboa</p>
          <h1
            className="mb-4 font-display italic leading-[1.02] text-white"
            style={{ fontSize: 'clamp(2.45rem, 5.2vw, 4.6rem)', fontWeight: 400 }}
          >
            La Lisboa que le enseño a quien viene a verme.
          </h1>
          <p className="mb-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            No una lista de monumentos. Una guía para entender la ciudad, moverte mejor, comer bien,
            saber qué merece tu tiempo y evitar los errores que casi todos cometemos la primera vez.
          </p>
          <a href="#rutas" className="btn-ghost-light btn-lg">
            Empezar por aquí ↓
          </a>
        </div>
      </section>

      {/* ── INTRO EDITORIAL ── */}
      <section className="border-b border-taupe/20 bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="mb-4 font-body text-xs uppercase tracking-[0.18em] text-taupe">Tu guía en el bolsillo</p>
          <h2
            className="max-w-3xl font-display italic leading-tight text-night"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400 }}
          >
            Lisboa se entiende mejor cuando dejas de verla como una lista de cosas que tachar.
          </h2>

          <div className="mt-8 grid gap-6 font-body text-base leading-relaxed text-text-secondary md:grid-cols-2 md:text-lg">
            <p>
              El mapa engaña un poco. Dos lugares pueden parecer cerca y estar separados por una cuesta
              que cambia por completo el ritmo del día. Un tranvía puede ser precioso y, al mismo tiempo,
              no ser la forma más práctica de llegar. Y un barrio que parece una parada rápida puede acabar
              ocupándote toda la tarde.
            </p>
            <p>
              Esta página es el punto de partida. Aquí no intento contarte todo: intento explicarte cómo
              funciona Lisboa para que después puedas elegir mejor tus rutas, transportes, visitas, comidas
              y planes sin pasar horas saltando entre veinte pestañas.
            </p>
          </div>

          <nav aria-label="Secciones de la guía" className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-taupe/25 pt-6">
            {chapterNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-sm text-night underline decoration-taupe/40 underline-offset-4 transition-colors hover:text-terracotta"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── 01 RUTAS ── */}
      <section id="rutas" className="scroll-mt-24 bg-cream py-18 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-[0.78fr_1.22fr] md:gap-16">
            <div>
              <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">01 · Rutas / Guías</p>
              <h2
                className="font-display italic leading-tight text-night"
                style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 400 }}
              >
                Primero, entiende Lisboa
              </h2>
            </div>

            <div>
              <p className="font-body text-lg leading-relaxed text-night">
                Lisboa funciona mejor por zonas que por una lista infinita de monumentos. Si vienes pocos días,
                tiene más sentido juntar Baixa y Chiado, reservar un bloque para Belém y dejar Alfama y Graça
                para cuando puedas caminar sin mirar el reloj cada cinco minutos.
              </p>
              <p className="mt-5 font-body text-base leading-relaxed text-text-secondary">
                La pregunta no es sólo «qué ver», sino cuánto cabe de verdad en el tiempo que tienes. Por eso
                nuestras rutas empiezan por los días disponibles y desde ahí te llevan a las guías específicas.
              </p>

              <EditorialLinks
                items={[
                  { href: '/itinerarios', label: 'Lisboa en 1, 2 y 3 días', note: 'Rutas ordenadas para una primera visita sin meter media ciudad en una mañana.' },
                  { href: '/blog/lisboa-en-4-dias', label: 'Lisboa en 4 días', note: 'Centro, Belém, Sintra y tiempo para empezar a salir de lo más obvio.' },
                  { href: '/blog/lisboa-en-5-dias', label: 'Lisboa en 5 días', note: 'Una ruta más respirada, con margen para barrios y Parque das Nações.' },
                  { href: '/blog/lisboa-en-7-dias', label: 'Lisboa en 7 días', note: 'Para combinar ciudad, excursiones y días menos apretados.' },
                ]}
              />
            </div>
          </div>

          <blockquote className="mt-14 max-w-3xl border-l-2 border-terracotta pl-6 font-display text-xl italic leading-relaxed text-night md:ml-auto md:text-2xl">
            Si intentas conocer Lisboa sólo siguiendo puntos de Google Maps, probablemente caminarás más y entenderás menos.
          </blockquote>
        </div>
      </section>

      {/* ── 02 MOVILIDAD ── */}
      <section id="movilidad" className="scroll-mt-24 py-18 md:py-28" style={{ background: '#EDE7DA' }}>
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start md:gap-16">
            <div>
              <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">02 · Movilidad</p>
              <h2
                className="mb-6 font-display italic leading-tight text-night"
                style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 400 }}
              >
                Moverte por Lisboa es fácil. Elegir mal cómo hacerlo, no tanto.
              </h2>
              <p className="font-body text-lg leading-relaxed text-night">
                El metro resuelve buena parte de la ciudad, los tranvías son útiles en algunos recorridos y caminar
                sigue siendo la mejor forma de entender muchas zonas. El error está en usar cada transporte como si
                sirviera igual para todo.
              </p>
              <p className="mt-5 font-body text-base leading-relaxed text-text-secondary">
                Si vienes del aeropuerto, llevas maleta o vas a subir hacia Graça, la decisión cambia. También cambia
                según la tarjeta que compres: no todo el mundo necesita lo mismo.
              </p>
              <p className="mt-6 border-t border-taupe/30 pt-5 font-display text-lg italic leading-relaxed text-night">
                Un atajo que sí uso: cuando una ruta termina arriba, prefiero subir en transporte y bajar caminando.
              </p>
            </div>

            <div>
              <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/tranvia-28.jpg"
                  alt="Tranvía amarillo de Lisboa circulando por una calle histórica"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 44vw"
                  loading="lazy"
                />
              </div>

              <EditorialLinks
                items={[
                  { href: '/blog/como-moverse-por-lisboa', label: 'Cómo moverse por Lisboa', note: 'La guía general: metro, tranvías, buses, caminar y cuándo conviene cada uno.' },
                  { href: '/blog/metro-lisboa-guia', label: 'Metro de Lisboa', note: 'Líneas, conexiones y lo que necesitas saber antes de usarlo.' },
                  { href: '/blog/tarjeta-navegante-lisboa', label: 'Qué tarjeta comprar', note: 'Navegante, billetes y cómo evitar pagar de más por no entender el sistema.' },
                  { href: '/blog/aeropuerto-lisboa-al-centro', label: 'Aeropuerto → centro', note: 'Qué opción tiene más sentido según equipaje, hora y alojamiento.' },
                  { href: '/blog/tram-28-historia-guia', label: 'Tranvía 28', note: 'Cómo disfrutarlo sin convertirlo en una mañana de cola.' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 QUÉ VISITAR ── */}
      <section id="visitar" className="scroll-mt-24 bg-cream py-18 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">03 · Qué visitar / Actividades</p>
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div>
              <h2
                className="font-display italic leading-tight text-night"
                style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 400 }}
              >
                Qué merece realmente tu tiempo
              </h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-night">
                Jerónimos, Castelo de São Jorge, Oceanário, Belém, Sintra… Lisboa tiene suficientes lugares como
                para llenar una semana. Lo difícil no es encontrar planes; es decidir cuáles encajan con tu viaje.
              </p>
              <p className="mt-5 font-body text-base leading-relaxed text-text-secondary">
                Algunas entradas conviene llevarlas resueltas. Otras pueden decidirse ese mismo día. Y hay experiencias
                gratuitas que, según tu forma de viajar, pueden darte más que una atracción de pago.
              </p>

              <TrackedInternalLink
                href="/actividades"
                contentType="home_editorial_cta"
                contentId="activities"
                className="mt-7 inline-flex border-b border-night pb-0.5 font-body text-sm font-semibold text-night transition-colors hover:border-terracotta hover:text-terracotta"
              >
                Explorar actividades →
              </TrackedInternalLink>
            </div>

            <div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                <Image
                  src="/images/sintra-palacio-turistas.jpg"
                  alt="Palacio da Pena en Sintra, una de las excursiones más populares desde Lisboa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 52vw"
                  loading="lazy"
                />
              </div>

              <EditorialLinks
                items={[
                  { href: '/blog/monumentos-de-lisboa', label: 'Monumentos de Lisboa', note: 'Qué merece la pena ver y cómo encajarlo en una ruta realista.' },
                  { href: '/blog/que-hacer-gratis-en-lisboa', label: 'Qué hacer gratis', note: 'Miradores, iglesias, calles y planes que no necesitan entrada.' },
                  { href: '/comprar-entradas', label: 'Entradas', note: 'Qué conviene reservar antes y dónde comprobar opciones.' },
                  { href: '/blog/sintra-desde-lisboa', label: 'Sintra desde Lisboa', note: 'Cómo organizar el día sin improvisar transporte y horarios.' },
                  { href: '/free-tours-lisboa', label: 'Free tours', note: 'Para entender el centro al principio del viaje, no como obligación.' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 COMER ── */}
      <section id="comer" className="scroll-mt-24 py-18 md:py-28" style={{ background: '#EDE7DA' }}>
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start md:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/tasca-da-graca.jpg"
                alt="Interior de una tasca tradicional en Lisboa"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 46vw"
                loading="lazy"
              />
            </div>

            <div>
              <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">04 · Dónde comer</p>
              <h2
                className="font-display italic leading-tight text-night"
                style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 400 }}
              >
                Comer bien en Lisboa no significa comer caro
              </h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-night">
                Lisboa es bacalhau, bifanas, sardinas y pastéis, pero la ciudad no termina ahí. Hay tascas de barrio,
                mercados, cafés, restaurantes contemporáneos y cada vez más opciones vegetarianas, veganas y sin gluten.
              </p>
              <p className="mt-5 font-body text-base leading-relaxed text-text-secondary">
                Prefiero separar esta sección por lo que realmente buscas —comer barato, probar cocina portuguesa,
                desayunar, encontrar opciones específicas— en lugar de hacer una lista interminable de restaurantes.
              </p>

              <EditorialLinks
                items={[
                  { href: '/blog/gastronomia-portuguesa-guia', label: 'Gastronomía portuguesa', note: 'Qué probar y cómo entender mejor lo que aparece en una carta.' },
                  { href: '/blog/donde-comer-barato-lisboa', label: 'Comer barato', note: 'Dónde mirar cuando quieres comer bien sin pagar el precio de la calle turística.' },
                  { href: '/blog/mejores-mercados-lisboa', label: 'Mercados', note: 'Una forma sencilla de probar varias cosas y ver otra cara de la ciudad.' },
                  { href: '/blog/pasteles-de-belem', label: 'Pastéis de Belém', note: 'Qué los hace distintos y cómo evitar perder tiempo en la cola equivocada.' },
                  { href: '/blog/bacalhau-plato-portugal', label: 'Bacalhau', note: 'Por qué aparece en todas partes y qué estás pidiendo realmente.' },
                ]}
              />

              <p className="mt-6 font-body text-sm leading-relaxed text-text-secondary">
                Próxima capa editorial: separar recomendaciones vegetarianas, veganas y sin gluten sólo cuando tengamos
                suficientes lugares comprobados como para que esas guías sean realmente útiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05 TOMAR ALGO ── */}
      <section id="tomar-algo" className="scroll-mt-24 bg-cream py-18 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">05 · Dónde tomar algo</p>
              <h2
                className="font-display italic leading-tight text-night"
                style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 400 }}
              >
                La noche de Lisboa cambia mucho según dónde termines
              </h2>
            </div>

            <div>
              <p className="font-body text-lg leading-relaxed text-night">
                No es lo mismo empezar con una cerveza en Graça, buscar un cóctel tranquilo, escuchar fado o acabar la
                noche en Cais do Sodré. Incluso Bairro Alto cambia bastante según la hora y el tipo de sitio que buscas.
              </p>
              <p className="mt-5 font-body text-base leading-relaxed text-text-secondary">
                La idea aquí no será recomendar “los mejores bares” sin contexto. Será ayudarte a elegir ambiente:
                tranquilo, romántico, rooftop, fado, cerveza, baile o simplemente un lugar donde sentarte a hablar.
              </p>

              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src="/images/fado-tasca-noche.jpg"
                  alt="Ambiente nocturno en una casa de fado de Lisboa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  loading="lazy"
                />
              </div>

              <EditorialLinks
                items={[
                  { href: '/blog/vida-nocturna-lisboa', label: 'Vida nocturna', note: 'Qué zonas tienen qué ambiente y cómo cambia la ciudad después de cenar.' },
                  { href: '/blog/donde-escuchar-fado-autentico', label: 'Dónde escuchar fado', note: 'Qué comprobar antes de reservar y cómo distinguir tipos de experiencia.' },
                  { href: '/blog/donde-tomar-cafe-lisboa', label: 'Cafés', note: 'Para cuando el plan no es salir de fiesta sino sentarte un rato y ver pasar Lisboa.' },
                  { href: '/blog/chiado-bairro-alto-guia', label: 'Chiado y Bairro Alto', note: 'Dos zonas pegadas con ritmos completamente distintos durante el día y la noche.' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 SPOTS ── */}
      <section id="spots" className="scroll-mt-24 py-18 md:py-28" style={{ background: '#EDE7DA' }}>
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">06 · Spots</p>
            <h2
              className="font-display italic leading-tight text-night"
              style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 400 }}
            >
              Las fotos que probablemente quieras llevarte de Lisboa
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-night">
              Lisboa es muy agradecida para fotografiar porque casi siempre hay algo delante del paisaje: un tranvía,
              un azulejo, tejados, ropa tendida, una cuesta o el Tajo apareciendo al final de una calle.
            </p>
            <p className="mt-5 font-body text-base leading-relaxed text-text-secondary">
              Aquí quiero enseñarte algo más útil que “lugares instagrameables”: desde dónde hacer la foto, a qué hora
              funciona mejor la luz y cuándo un spot conocido merece de verdad el desvío.
            </p>
          </div>

          <div className="relative aspect-[16/8] overflow-hidden rounded-lg">
            <Image
              src="/images/miradouro-atardecer.jpg"
              alt="Atardecer sobre Lisboa desde uno de sus miradores"
              fill
              className="object-cover"
              sizes="100vw"
              loading="lazy"
            />
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <EditorialLinks
              items={[
                { href: '/blog/donde-fotografiar-lisboa', label: 'Dónde fotografiar Lisboa', note: 'Una guía pensada desde el encuadre y el momento del día.' },
                { href: '/blog/mejores-miradores-lisboa', label: 'Miradores', note: 'Qué vista tiene cada uno y cuándo la luz cambia completamente la experiencia.' },
              ]}
            />
            <EditorialLinks
              items={[
                { href: '/blog/graca-lisboa-que-ver', label: 'Graça', note: 'Cuestas, miradores y una Lisboa que se ve especialmente bien desde arriba.' },
                { href: '/blog/alfama-historia-guia', label: 'Alfama', note: 'Calles estrechas, tejados y capas de ciudad que funcionan mejor sin prisa.' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── 07 CUIDATE ── */}
      <section id="cuidate" className="scroll-mt-24 bg-cream py-18 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">07 · Cuídate de esto</p>
          <h2
            className="max-w-3xl font-display italic leading-tight text-night"
            style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 400 }}
          >
            Lisboa no necesita miedo. Sí un poco de contexto.
          </h2>

          <div className="mt-8 grid gap-6 font-body text-base leading-relaxed text-text-secondary md:grid-cols-2 md:text-lg">
            <p>
              Como en cualquier ciudad turística, hay situaciones que se repiten: carteristas donde se concentra mucha
              gente, menús pensados para quien no mira precios, servicios que parecen más oficiales de lo que son y
              pequeñas costumbres —como el couvert en restaurantes— que sorprenden si nadie te las explicó antes.
            </p>
            <p>
              No quiero una sección alarmista de “zonas peligrosas”. Quiero algo más útil: explicar qué suele pasar,
              dónde conviene prestar más atención y cómo evitar pagar, reservar o aceptar algo por simple desconocimiento.
            </p>
          </div>

          <EditorialLinks
            items={[
              { href: '/blog/errores-turistas-lisboa', label: 'Errores de turistas', note: 'Los fallos más comunes de planificación, transporte y expectativas en una primera visita.' },
              { href: '/blog/como-pagar-en-portugal', label: 'Cómo pagar en Portugal', note: 'Tarjetas, efectivo y detalles prácticos que conviene saber antes de sentarte o comprar.' },
              { href: '/blog/aeropuerto-lisboa-al-centro', label: 'Llegar desde el aeropuerto', note: 'Opciones claras para evitar decidir con prisa justo al aterrizar.' },
            ]}
          />

          <p className="mt-10 border-l-2 border-terracotta pl-6 font-display text-xl italic leading-relaxed text-night">
            La mejor protección para un viajero casi siempre es entender cómo funciona el lugar antes de necesitar decidir rápido.
          </p>
        </div>
      </section>

      {/* ── CIERRE ── */}
      <section className="relative overflow-hidden bg-night bg-azulejo-pattern-gold py-20 md:py-24">
        <div className="relative mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div>
              <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-white/55">Y después, sí</p>
              <h2
                className="font-display italic leading-tight text-white"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400 }}
              >
                Cuando tengas lo práctico resuelto, empieza a mirar Lisboa con calma.
              </h2>
              <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-white/75">
                También escribimos sobre su historia, sus estaciones, sus azulejos y esas cosas que no necesitas
                saber para viajar… pero que hacen que la ciudad deje de sentirse como un decorado.
              </p>
            </div>

            <div className="md:text-right">
              <TrackedInternalLink
                href="/blog"
                contentType="home_secondary_cta"
                contentId="blog"
                className="btn-primary"
              >
                Leer historias y guías →
              </TrackedInternalLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

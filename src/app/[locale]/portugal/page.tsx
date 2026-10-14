import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BusFront, CarFront, TrainFront } from 'lucide-react';
import { portugalGuides, portugalIslands, portugalRegions, portugalRoutes } from '@/data/portugal';
import { PHOTO_CREDITS } from '@/data/photo-credits';

const PAGE_URL = 'https://estabaenlisboa.com/portugal';
const TITLE = 'Viajar a Portugal 2026: regiones, rutas y transporte';
const DESCRIPTION = 'Elige qué parte de Portugal visitar, reparte los días y organiza los traslados. Rutas orientativas, guías de Lisboa y enlaces a información oficial.';
const PORTO_IMAGE = '/images/commons/porto-douro-wikimedia.jpg';
const SINTRA_IMAGE = '/images/commons/palacio-nacional-sintra-wikimedia.webp';
const sectionClass = 'mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12';
const eyebrowClass = 'font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta';
const textLinkClass = 'inline-flex min-h-11 items-center gap-2 font-body text-sm font-semibold underline decoration-terracotta/40 underline-offset-4 transition-colors hover:text-terracotta';

export const metadata: Metadata = {
  title: { absolute: TITLE }, description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  authors: [{ name: 'José Tabares', url: 'https://estabaenlisboa.com/sobre-nosotros' }],
  robots: { index: true, follow: true },
  openGraph: { type: 'website', title: TITLE, description: DESCRIPTION, url: PAGE_URL,
    images: [{ url: `https://estabaenlisboa.com${PORTO_IMAGE}`, width: 1280, height: 853,
      alt: 'La Ribeira de Oporto y el puente de Dom Luís I. Foto: Michael Gaylard, CC BY 4.0.' }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION,
    images: [`https://estabaenlisboa.com${PORTO_IMAGE}`] },
};

export default function PortugalPage() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'CollectionPage', '@id': `${PAGE_URL}#webpage`,
    url: PAGE_URL, name: 'Viajar por Portugal', description: DESCRIPTION, inLanguage: 'es-ES',
    dateModified: '2026-10-14', isPartOf: { '@id': 'https://estabaenlisboa.com/#website' },
    author: { '@id': 'https://estabaenlisboa.com/sobre-nosotros#jose-tabares' },
    about: { '@type': 'Country', name: 'Portugal', sameAs: 'https://www.wikidata.org/wiki/Q45' },
    hasPart: ['/blog/portugal-en-7-dias', ...portugalGuides.map(guide => guide.href), '/que-ver-en-lisboa', '/blog/lisboa-vs-porto']
      .map(path => ({ '@type': 'WebPage', url: `https://estabaenlisboa.com${path}` })),
  };
  return (
    <main id="main-content" className="bg-cream text-night">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className={`${sectionClass} pb-10 pt-6 md:pb-14 md:pt-8`}>
        <nav aria-label="Ruta de navegación" className="mb-8 flex items-center gap-2 font-body text-xs text-text-secondary md:mb-12">
          <Link href="/" className="underline underline-offset-4 hover:text-terracotta">Inicio</Link>
          <span aria-hidden="true">/</span><span aria-current="page">Portugal</span>
        </nav>
        <div className="grid items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <p className={eyebrowClass}>Regiones · Rutas · Decisiones prácticas</p>
            <h1 className="mt-4 font-display text-[3.1rem] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-[4rem] lg:text-[5rem]">Viajar por <br />Portugal</h1>
            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-text-secondary md:text-lg">Lisboa, Oporto, el interior, la costa o las islas. El primer paso es elegir qué parte del país quieres conocer; después, decidir cuántos días dedicarle y cómo llegar.</p>
            <a href="#rutas" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-[3px] bg-terracotta px-6 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-primary-dark">Elegir una ruta <ArrowRight size={17} aria-hidden="true" /></a>
            <p className="mt-5 font-body text-xs text-text-secondary">Revisado el 14 de octubre de 2026</p>
          </div>
          <figure>
            <div className="relative aspect-[5/4] overflow-hidden bg-night/5"><Image src={PORTO_IMAGE} alt="La Ribeira de Oporto y el puente de Dom Luís I vistos desde la orilla de Gaia" fill priority className="object-cover" sizes="(max-width: 1023px) 100vw, 55vw" /></div>
            <figcaption className="mt-3 flex flex-wrap justify-between gap-x-4 gap-y-1 font-body text-[11px] leading-relaxed text-text-secondary"><span>Oporto, a orillas del Duero.</span><a href="#creditos" className="underline underline-offset-4">Foto: Michael Gaylard · CC BY 4.0</a></figcaption>
          </figure>
        </div>
      </header>
      <nav aria-label="En esta guía" className="border-y border-night/15">
        <div className={`${sectionClass} grid grid-cols-2 gap-x-4 md:flex md:flex-wrap md:gap-x-8`}>
          {[
            ['#regiones', 'Qué región elegir'], ['#rutas', 'Cuántos días'],
            ['#transporte', 'Cómo moverse'], ['#guias', 'Guías para seguir'],
          ].map(([href, label]) => <a key={href} href={href} className="inline-flex min-h-14 items-center gap-2 py-3 font-body text-xs font-semibold hover:text-terracotta sm:text-sm">{label}<ArrowRight size={14} aria-hidden="true" /></a>)}
        </div>
      </nav>
      <section id="regiones" aria-labelledby="regiones-title" className={`${sectionClass} scroll-mt-24 py-14 md:py-20`}>
        <div className="mb-9 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-12">
          <div><p className={eyebrowClass}>01 / Dónde ir</p><h2 id="regiones-title" className="mt-3 font-display text-3xl font-semibold leading-tight md:text-[2.7rem]">Qué parte de Portugal<br className="hidden sm:block" /> encaja con tu viaje</h2></div>
          <p className="max-w-xl font-body text-base leading-relaxed text-text-secondary">Un fin de semana en Oporto, una ruta por el Alentejo y unos días en Madeira necesitan planes distintos. Estas son las zonas principales y la decisión que conviene resolver en cada una.</p>
        </div>
        <div className="grid gap-x-12 md:grid-cols-2">
          {portugalRegions.map(region => <article key={region.id} className="border-t border-night/15 py-7">
            <div className="flex items-start gap-4"><span className="pt-1 font-body text-xs text-terracotta" aria-hidden="true">{region.number}</span>
              <div className="min-w-0"><h3 className="font-display text-[1.8rem] font-semibold leading-tight">{region.name}</h3><p className="mt-2 font-body text-xs font-medium leading-relaxed text-terracotta">{region.places}</p>
                <p className="mt-4 font-body text-sm leading-[1.8] text-text-secondary">{region.description}</p><p className="mt-3 font-body text-sm leading-[1.8]"><strong className="font-semibold">Para organizarlo:</strong> {region.planning}</p>
                <div className="mt-3">{region.href.startsWith('/') ? <Link href={region.href} className={textLinkClass}>{region.label}<ArrowRight size={15} aria-hidden="true" /></Link> : <a href={region.href} className={textLinkClass}>{region.label}<ArrowUpRight size={15} aria-hidden="true" /></a>}</div>
              </div>
            </div>
          </article>)}
          <aside className="border-t border-night/15 py-7 md:pl-4"><p className={eyebrowClass}>Una decisión antes de reservar</p><h3 className="mt-3 font-display text-[1.8rem] font-semibold leading-tight">¿Dormir en un sitio<br />o ir cambiando de base?</h3><p className="mt-4 font-body text-sm leading-[1.8] text-text-secondary">Una base funciona cuando las salidas son cercanas y puedes volver sin perder media jornada. Para conocer Lisboa y Oporto, dos alojamientos suelen dar más margen que hacer el trayecto de ida y vuelta como excursión.</p><p className="mt-3 font-body text-sm leading-[1.8] text-text-secondary">Antes de añadir una parada, mira dónde dormirás esa noche y qué harás con el equipaje. Ese detalle puede decidir si la visita merece la pena.</p></aside>
        </div>
        <div className="mt-6 border-t border-night/15 pt-8"><div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-2"><h3 className="font-display text-2xl font-semibold">Las islas requieren su propio plan</h3><span className="font-body text-xs text-text-secondary">Madeira y Azores</span></div>
          <div className="grid gap-8 md:grid-cols-2">{portugalIslands.map(island => <article key={island.name}><h4 className="font-display text-xl font-semibold">{island.name}</h4><p className="mt-2 font-body text-xs leading-relaxed text-terracotta">{island.places}</p><p className="mt-3 font-body text-sm leading-[1.8] text-text-secondary">{island.description}</p><a href={island.href} className={`mt-2 ${textLinkClass}`}>Información oficial de {island.name}<ArrowUpRight size={15} aria-hidden="true" /></a></article>)}</div>
        </div>
      </section>
      <section id="rutas" aria-labelledby="rutas-title" className="scroll-mt-24 border-y border-night/10 bg-white/60">
        <div className={`${sectionClass} py-14 md:py-20`}>
          <div className="mb-10 max-w-2xl"><p className={eyebrowClass}>02 / Repartir el tiempo</p><h2 id="rutas-title" className="mt-3 font-display text-3xl font-semibold leading-tight md:text-[2.7rem]">Una ruta según los días que tienes</h2><p className="mt-4 font-body text-base leading-relaxed text-text-secondary">Son propuestas de reparto, no un horario cerrado. Ajusta el primer y el último día a tus vuelos; no cuentes una tarde de llegada como un día completo de visitas.</p></div>
          <div className="grid gap-9 lg:grid-cols-3 lg:gap-8">{portugalRoutes.map(route => <article key={route.days} className="border-t-2 border-terracotta pt-6">
            <p className="flex items-baseline gap-3"><span className="font-display text-5xl font-semibold leading-none">{route.days}</span><span className="font-body text-xs font-semibold uppercase tracking-widest">días</span></p><h3 className="mt-5 font-display text-2xl font-semibold">{route.name}</h3>
            <ol aria-label={`Recorrido orientativo de ${route.days} días`} className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-body text-xs font-semibold text-terracotta">{route.route.map((stop, index) => <li key={stop} className="flex items-center gap-2">{index > 0 && <ArrowRight size={12} aria-hidden="true" />}{stop}</li>)}</ol>
            <p className="mt-4 font-body text-sm leading-[1.8] text-text-secondary">{route.description}</p><Link href={route.href} className={`mt-3 ${textLinkClass}`}>{route.label}<ArrowRight size={15} aria-hidden="true" /></Link>
          </article>)}</div>
        </div>
      </section>
      <section id="transporte" aria-labelledby="transporte-title" className={`${sectionClass} scroll-mt-24 py-14 md:py-20`}>
        <div className="mb-9 max-w-2xl"><p className={eyebrowClass}>03 / Los traslados</p><h2 id="transporte-title" className="mt-3 font-display text-3xl font-semibold leading-tight md:text-[2.7rem]">Tren, autobús o coche</h2><p className="mt-4 font-body text-base leading-relaxed text-text-secondary">Compara el viaje de puerta a puerta: estación de salida, llegada, último tramo y regreso. El tiempo dentro del vehículo es solo una parte.</p></div>
        <div className="grid gap-7 md:grid-cols-3">
          <article className="border-t border-night/15 pt-6"><TrainFront size={25} strokeWidth={1.5} className="text-terracotta" aria-hidden="true" /><h3 className="mt-4 font-display text-2xl font-semibold">Para el eje entre ciudades</h3><p className="mt-3 font-body text-sm leading-[1.8] text-text-secondary">CP conecta Lisboa y Oporto con Alfa Pendular e Intercidades. Los servicios regionales cubren otros recorridos y las líneas urbanas de Lisboa permiten llegar a Sintra y Cascais. Revisa la estación exacta y las conexiones: no todas las visitas quedan junto al andén.</p><a href="https://www.cp.pt" className={`mt-3 ${textLinkClass}`}>Consultar trayectos en CP<ArrowUpRight size={15} aria-hidden="true" /></a></article>
          <article className="border-t border-night/15 pt-6"><BusFront size={25} strokeWidth={1.5} className="text-terracotta" aria-hidden="true" /><h3 className="mt-4 font-display text-2xl font-semibold">Cuando el tren no encaja</h3><p className="mt-3 font-body text-sm leading-[1.8] text-text-secondary">Busca también autobús si el tren exige rodeos o no sirve el destino que quieres. Compara el punto de llegada, las condiciones del billete y el último servicio de vuelta antes de decidir. Un precio menor no compensa un enlace que te deja lejos de donde necesitas estar.</p><Link href="/blog/como-moverse-por-portugal" className={`mt-3 ${textLinkClass}`}>Comparar tren y autobús<ArrowRight size={15} aria-hidden="true" /></Link></article>
          <article className="border-t border-night/15 pt-6"><CarFront size={25} strokeWidth={1.5} className="text-terracotta" aria-hidden="true" /><h3 className="mt-4 font-display text-2xl font-semibold">Para una ruta con varias paradas</h3><p className="mt-3 font-body text-sm leading-[1.8] text-text-secondary">El coche puede ayudarte si el recorrido depende de pueblos, alojamientos dispersos o salidas sin una conexión práctica. Si vas a quedarte en las ciudades, revisa primero aparcamiento, peajes y el coste total. No hace falta alquilarlo para todos los días del viaje.</p><Link href="/blog/como-moverse-por-portugal" className={`mt-3 ${textLinkClass}`}>Cuándo compensa el coche<ArrowRight size={15} aria-hidden="true" /></Link></article>
        </div>
      </section>
      <section className="bg-night text-white" aria-labelledby="reservar-title">
        <div className={`${sectionClass} grid gap-8 py-12 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:py-16`}>
          <div><p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">Antes de cerrar el viaje</p><h2 id="reservar-title" className="mt-3 font-display text-3xl font-semibold leading-tight">Cuatro cosas que<br />merece la pena resolver</h2></div>
          <ol className="grid gap-x-8 gap-y-6 sm:grid-cols-2">{[
            ['Llegada y salida', 'Mira si puedes entrar por una ciudad y salir por otra. Si vuelves al mismo aeropuerto, reserva tiempo para ese último traslado.'],
            ['Noches por base', 'Cuenta noches, no solo destinos. Deja claro dónde duermes cada día antes de comprar billetes entre ciudades.'],
            ['Reservas con hora', 'Comprueba las condiciones de los monumentos que quieras visitar. Organiza alrededor de esas entradas el resto de la jornada.'],
            ['El último tramo', 'Revisa cómo llegar desde la estación o terminal al alojamiento, especialmente si la llegada es tarde.'],
          ].map(([title, text], index) => <li key={title}><p className="font-body text-sm font-semibold"><span className="mr-2 text-white/55">0{index + 1}</span>{title}</p><p className="mt-2 font-body text-sm leading-relaxed text-white/75">{text}</p></li>)}</ol>
        </div>
      </section>
      <section id="guias" aria-labelledby="guias-title" className={`${sectionClass} scroll-mt-24 py-14 md:py-20`}>
        <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <figure><div className="relative aspect-[4/3] overflow-hidden bg-night/5"><Image src={SINTRA_IMAGE} alt="Fachada y chimeneas del Palacio Nacional de Sintra" fill className="object-cover" sizes="(max-width: 1023px) 100vw, 40vw" /></div><figcaption className="mt-3 font-body text-[11px] leading-relaxed text-text-secondary">Palacio Nacional de Sintra. <a href="#creditos" className="underline underline-offset-4">Foto: Jakub Hałun · CC BY 4.0</a></figcaption></figure>
          <div><p className={eyebrowClass}>04 / Seguir preparando el viaje</p><h2 id="guias-title" className="mb-5 mt-3 font-display text-3xl font-semibold leading-tight md:text-[2.5rem]">Guías para resolver<br />el siguiente paso</h2>{portugalGuides.map(guide => <Link key={guide.href} href={guide.href} className="group flex min-h-20 items-center justify-between gap-5 border-t border-night/15 py-5"><div><h3 className="font-display text-xl font-semibold transition-colors group-hover:text-terracotta">{guide.title}</h3><p className="mt-1 font-body text-sm leading-relaxed text-text-secondary">{guide.text}</p></div><ArrowUpRight size={20} className="shrink-0 text-terracotta" aria-hidden="true" /></Link>)}</div>
        </div>
      </section>
      <footer className="border-t border-night/15 bg-white/40">
        <div className={`${sectionClass} grid gap-8 py-9 md:grid-cols-2 md:gap-12`}>
          <div><h2 className="font-body text-xs font-semibold uppercase tracking-widest">Información oficial para comprobar el plan</h2><p className="mt-3 font-body text-xs leading-relaxed text-text-secondary">Las regiones se han contrastado con Turismo de Portugal. Los repartos de días son propuestas editoriales; consulta horarios, disponibilidad y condiciones en cada operador antes de reservar.</p><div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-body text-xs"><a href="https://www.visitportugal.com/es/destinos" className="inline-flex min-h-10 items-center underline underline-offset-4 hover:text-terracotta">Turismo de Portugal</a><a href="https://www.cp.pt/info/pt/lisboa" className="inline-flex min-h-10 items-center underline underline-offset-4 hover:text-terracotta">Trenes urbanos de Lisboa</a><a href="https://www.cp.pt/info/alfa-pendular" className="inline-flex min-h-10 items-center underline underline-offset-4 hover:text-terracotta">Alfa Pendular</a></div></div>
          <div id="creditos" className="scroll-mt-24"><h2 className="font-body text-xs font-semibold uppercase tracking-widest">Créditos de las fotografías</h2><ul className="mt-3 space-y-2 font-body text-xs leading-relaxed text-text-secondary">{[PORTO_IMAGE, SINTRA_IMAGE].map(image => { const credit = PHOTO_CREDITS[image]; return <li key={image}>{credit.subject}: <a href={credit.sourceUrl} className="underline underline-offset-4 hover:text-terracotta">{credit.author} / Wikimedia Commons</a>, <a href={credit.licenseUrl} className="underline underline-offset-4 hover:text-terracotta">{credit.license}</a>. Encuadre adaptado a la página.</li>; })}</ul></div>
        </div>
      </footer>
    </main>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/data/blog-posts';
import { blogPosts } from '@/data/blog-posts';
import TrackedInternalLink from '@/components/TrackedInternalLink';
import { getArticleImage } from '@/components/blog/EditorialArticleCard';
import GrokQuickSearch from './GrokQuickSearch';
import s from './GrokHome.module.css';

// La página utiliza rutas y contenidos reales: sin duplicar sitemap,
// datos inventados ni enlaces de afiliación sin aviso.
const sections = [
  { title: 'Qué ver', subtitle: 'Barrios y monumentos', href: '/que-ver-en-lisboa' },
  { title: 'Entradas', subtitle: 'Opciones y consejos', href: '/comprar-entradas' },
  { title: 'Free tours', subtitle: 'Con guía local', href: '/free-tours-lisboa' },
  { title: 'Excursiones', subtitle: 'Sintra y Cascais', href: '/blog/excursiones-desde-lisboa' },
  { title: 'Alojamiento', subtitle: 'Dónde dormir', href: '/blog/donde-alojarse-en-lisboa' },
];

const picks = [
  'monasterio-jeronimos-entradas',
  'sintra-desde-lisboa',
  'alfama-historia-guia',
  'donde-escuchar-fado-autentico',
];
const featured: BlogPost[] = picks
  .map((id) => blogPosts.find((post) => post.id === id))
  .filter((post): post is BlogPost => Boolean(post));

const experiences = [
  {
    id: 'jeronimos', type: 'Belém', title: 'Torre y Jerónimos',
    description: 'Qué puedes visitar, qué conviene reservar y cómo organizar Belém sin dar vueltas.',
    photo: '/images/actividades/mosteiro-dos-jeronimos-claustro.webp',
    alt: 'Claustro del monasterio de los Jerónimos en Belém', tag: 'Monumentos',
    href: '/blog/monasterio-jeronimos-entradas', callToAction: 'Consultar entradas',
  },
  {
    id: 'centro', type: 'Centro histórico', title: 'Free tour por el centro',
    description: 'Una manera de conocer Baixa y Chiado. Consulta el recorrido y los horarios disponibles.',
    photo: '/images/lisboa-originales/rua-augusta-arco-lisboa.webp',
    alt: 'Arco da Rua Augusta en Lisboa', tag: 'A pie',
    href: '/free-tours-lisboa', callToAction: 'Explorar free tours',
  },
  {
    id: 'sintra', type: 'Excursión', title: 'Un día en Sintra',
    description: 'Palacios, trenes y cómo decidir si conviene ir por tu cuenta o reservar excursión.',
    photo: '/images/sintra-palacio-turistas.jpg',
    alt: 'Visitantes frente al Palacio da Pena en Sintra', tag: 'Día completo',
    href: '/blog/sintra-desde-lisboa', callToAction: 'Ver guía',
  },
];

const itinerary = [
  { place: 'Praça do Comércio y Rua Augusta', area: 'Día 1 · Baixa', detail: 'Empieza por el centro, el Tajo y las calles principales.', href: '/blog/baixa-lisboa-que-ver', photo: '/images/lisboa-originales/rua-augusta-arco-lisboa.webp' },
  { place: 'Chiado y el eléctrico', area: 'Día 1 · Chiado', detail: 'Calles, cafés y transporte histórico sin prisas.', href: '/blog/chiado-bairro-alto-guia', photo: '/images/lisboa-originales/electrico-15e-caf-lisboa.jpg' },
  { place: 'Alfama y sus miradores', area: 'Día 1 · Alfama', detail: 'Subidas, callejuelas y vistas sobre el Tajo.', href: '/blog/alfama-historia-guia', photo: '/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg' },
  { place: 'Torre de Belém', area: 'Día 2 · Belém', detail: 'Comprueba el acceso y posibles cierres antes de ir.', href: '/actividades/torre-de-belem', photo: '/images/actividades/torre-de-belem-lisboa.webp' },
  { place: 'Monasterio de los Jerónimos', area: 'Día 2 · Belém', detail: 'Horarios, entradas y qué merece la pena visitar.', href: '/blog/monasterio-jeronimos-entradas', photo: '/images/actividades/mosteiro-dos-jeronimos-claustro.webp' },
  { place: 'Pastéis de Belém', area: 'Día 2 · Belém', detail: 'Una parada cerca del monasterio antes de seguir.', href: '/blog/pasteles-de-belem', photo: '/images/actividades/pasteis-de-belem.webp' },
];
const moreGuides = [
  { title: 'Cómo moverte', description: 'Metro, tranvías y trenes sin confusiones.', href: '/blog/como-moverse-por-lisboa' },
  { title: 'Dónde comer', description: 'Comida portuguesa, mercados y presupuesto.', href: '/donde-comer-en-lisboa' },
  { title: 'Miradores', description: 'Cuáles elegir y cuándo ir.', href: '/blog/mejores-miradores-lisboa' },
  { title: 'Evita errores', description: 'Cuestas, reservas y lo que conviene saber.', href: '/blog/errores-turistas-lisboa' },
  { title: 'Dónde tomar algo', description: 'Fado, terrazas y vida nocturna.', href: '/blog/vida-nocturna-lisboa' },
  { title: 'Dónde hacer fotos', description: 'La mejor luz y las calles que merecen una parada.', href: '/blog/donde-fotografiar-lisboa' },
];

export default function GrokHome() {
  return (
    <main id="main-content" className={s.page}>
      <section className={s.hero} aria-labelledby="home-grok-title">
        <div className={s.heroPhoto}>
          <Image src="/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg" alt="Tejados de Alfama y vistas al Tajo en Lisboa" fill priority fetchPriority="high" sizes="100vw" />
        </div>
        <div className={s.heroTint} aria-hidden="true" />
        <div className={s.heroContent}>
          <p className={s.scriptLabel}>Guías, entradas y actividades</p>
          <h1 id="home-grok-title">Todo para planear tu viaje a Lisboa</h1>
          <p className={s.heroText}>Artículos claros, rutas y consejos desde la ciudad. Consulta las opciones antes de reservar.</p>
          <GrokQuickSearch />
          <nav className={s.quickLinks} aria-label="Búsquedas populares">
            <Link href="/itinerarios/lisboa-2-dias-completo">Qué ver en 2 días</Link>
            <Link href="/comprar-entradas">Entradas Belém</Link>
            <Link href="/free-tours-lisboa">Free tours</Link>
            <Link href="/blog/sintra-desde-lisboa">Sintra</Link>
          </nav>
        </div>
      </section>

      <nav className={s.categories} aria-label="Explorar Lisboa por tema">
        {sections.map((item) => <Link className={s.category} href={item.href} key={item.title}>
          <strong>{item.title}</strong>
          <span>{item.subtitle}</span>
        </Link>)}
      </nav>

      <section className={s.section} aria-labelledby="home-articles-heading">
        <div className={s.container}>
          <div className={s.centerHeading}>
            <p className={s.scriptLabel}>Blog</p>
            <h2 id="home-articles-heading" className={s.sectionHeading}>Artículos para decidir tu viaje</h2>
            <p className={s.sectionLead}>Lo que conviene saber antes de reservar.</p>
          </div>
          <div className={s.blogGrid}>
            <article className={s.articleCard}>
              <Link href="/itinerarios/lisboa-2-dias-completo" aria-label="Ver el itinerario de Lisboa en dos días">
                <div className={s.articlePhoto}>
                  <Image
                    src="/images/lisboa-originales/electrico-15e-caf-lisboa.jpg"
                    alt="Tranvía de Lisboa pasando por una calle del centro"
                    fill sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 42vw"
                  />
                </div>
              </Link>
              <div className={s.articleBody}>
                <span className={s.articleCategory}>ITINERARIO</span>
                <h3><Link href="/itinerarios/lisboa-2-dias-completo">Lisboa en 2 días: qué ver y qué reservar</Link></h3>
                <p>Dos días organizados por zonas, con paradas claras, fotos y consejos para decidir las reservas antes de salir.</p>
                <Link className={s.readLink} href="/itinerarios/lisboa-2-dias-completo">Ver itinerario</Link>
              </div>
            </article>
            {featured.map((post) => (
              <article className={s.articleCard} key={post.id}>
                <Link href={'/blog/' + post.id} aria-label={'Leer ' + post.titulo}>
                  <div className={s.articlePhoto}>
                    <Image src={getArticleImage(post)} alt={post.titulo} fill sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw" />
                  </div>
                </Link>
                <div className={s.articleBody}>
                  <span className={s.articleCategory}>{post.categoria}</span>
                  <h3><Link href={'/blog/' + post.id}>{post.titulo}</Link></h3>
                  <p>{post.excerpt}</p>
                  <Link className={s.readLink} href={'/blog/' + post.id}>Leer artículo</Link>
                </div>
              </article>
            ))}
          </div>
          <p style={{textAlign:'center',marginTop:28}}>
            <Link className={s.tealButton} href="/blog">Ver todos los artículos</Link>
          </p>
          <nav className={s.discover} aria-label="Artículos editoriales recomendados">
            <Link href="/blog/time-out-market-lisboa"><strong>Time Out Market</strong><span>Qué puedes comer y cuándo compensa ir.</span></Link>
            <Link href="/blog/estacion-oriente-lisboa"><strong>Estación de Oriente</strong><span>Tren, metro y arquitectura para visitar.</span></Link>
            <Link href="/blog/estacion-olaias-lisboa"><strong>Estación de Olaias</strong><span>Arte y una estación diferente de Lisboa.</span></Link>
            <Link href="/blog/paseo-en-velero-lisboa-lisbon-byboat"><strong>Lisboa en velero</strong><span>Un paseo por el Tajo con Lisbon ByBoat. Colaboración comercial.</span></Link>
            <Link href="/blog/lisboa-en-4-dias"><strong>Lisboa en 4 días</strong><span>Una ruta con más tiempo para recorrer los barrios.</span></Link>
          </nav>
        </div>
      </section>

      <section className={s.activitySection} aria-labelledby="home-experiences-heading">
        <div className={s.container}>
          <div className={s.centerHeading}>
            <p className={s.scriptLabel}>Entradas y actividades</p>
            <h2 id="home-experiences-heading" className={s.sectionHeading}>Reserva lo que más te llena</h2>
            <p className={s.sectionLead}>Guías propias y enlaces a opciones reales para organizarte.</p>
          </div>
          <div className={s.activityGrid}>
            {experiences.map((item) => (
              <article className={s.activityCard} key={item.id}>
                <Link href={item.href} aria-label={'Ver ' + item.title}>
                  <div className={s.activityPhoto}>
                    <Image src={item.photo} alt={item.alt} fill sizes="(max-width: 640px) 100vw, 33vw" />
                    <span className={s.activityBadge}>{item.tag}</span>
                  </div>
                </Link>
                <div className={s.activityBody}>
                  <span className={s.activityKicker}>{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className={s.activityAction}>
                    <small>Precio y disponibilidad en destino</small>
                    <TrackedInternalLink href={item.href} contentType="home_essentials" contentId={item.id} className={s.tealButton}>{item.callToAction}</TrackedInternalLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={s.itinerarySection} aria-labelledby="home-itinerary-heading">
        <div className={s.container}>
          <div className={s.itinerarySplit}>
            <div>
              <p className={s.scriptLabel}>Itinerarios</p>
              <h2 id="home-itinerary-heading" className={s.sectionHeading}>Lisboa en 2 días</h2>
              <p className={s.itineraryLead}>Una idea para repartir el centro y Belém en dos jornadas. Los horarios, los precios y el acceso pueden cambiar: confirma cada parada antes de salir.</p>
              <Link href="/itinerarios/lisboa-2-dias-completo" className={s.yellow}>Ver itinerario completo</Link>
              <p style={{marginTop:12}}><Link className={s.readLink} href="/itinerarios">Comparar rutas de 1, 2 o 3 días</Link></p>
              <div className={s.itineraryImage}>
                <Image src="/images/lisboa-originales/rua-augusta-arco-lisboa.webp" alt="Arco da Rua Augusta en Lisboa" fill sizes="(max-width: 900px) 100vw, 35vw" />
              </div>
            </div>
            <div className={s.itineraryList} aria-label="Paradas recomendadas para dos días">
              {itinerary.map((stop) => (
                <article className={s.itineraryItem} key={stop.place}>
                  <Link href={stop.href} className={s.itineraryThumb} aria-label={'Ver ' + stop.place}>
                    <Image src={stop.photo} alt="" fill sizes="114px" />
                  </Link>
                  <div className={s.itineraryDescription}>
                    <small>{stop.area}</small>
                    <h3>{stop.place}</h3>
                    <p>{stop.detail}</p>
                  </div>
                  <Link href={stop.href} className={s.itineraryCTA}>Ver guía</Link>
                </article>
              ))}
            </div>
          </div>
          <nav className={s.discover} aria-label="Más consejos útiles">
            {moreGuides.map((item) => <Link href={item.href} key={item.href}>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </Link>)}
          </nav>
        </div>
      </section>

      <section className={s.section} aria-labelledby="home-seasonal-title">
        <div className={s.container}>
          <p className={s.scriptLabel}>Para estas fechas</p>
          <h2 id="home-seasonal-title" className={s.sectionHeading}>Si vienes en otoño o invierno</h2>
          <p className={s.sectionLead}>Navidad, lluvia y fin de año cambian los planes. Consulta fechas y horarios en cada guía.</p>
          <nav className={s.discover} aria-label="Guías de temporada">
            <Link href="/blog/lisboa-cuando-llueve"><strong>Cuando llueve</strong><span>Planes a cubierto y alternativas.</span></Link>
            <Link href="/blog/lisboa-en-navidad"><strong>Navidad en Lisboa</strong><span>Mercados, luces y visitas.</span></Link>
            <Link href="/blog/nochevieja-lisboa"><strong>Fin de año</strong><span>Celebraciones y transporte.</span></Link>
            <Link href="/blog/lisboa-en-enero"><strong>Lisboa en enero</strong><span>Qué abre y qué puede cerrar.</span></Link>
          </nav>
          <p style={{marginTop:24,fontSize:14,color:'#526971'}}>
            Este proyecto lo escribo y reviso desde Lisboa. <Link href="/sobre-nosotros" className={s.readLink}>Conoce quién está detrás</Link>
          </p>
        </div>
      </section>

      <aside className={s.trust} aria-label="Cómo preparamos nuestras recomendaciones">
        <div className={s.container}>
          <div className={s.trustGrid}>
            <p><strong>Precios con fecha</strong> Mostramos importes solo cuando están comprobados. Si no, te llevamos a la fuente.</p>
            <p><strong>Enlaces de afiliación avisados</strong> Algunas reservas son de afiliado. Lo indicamos antes de la compra.</p>
            <p><strong>Revisado antes de publicar</strong> Actualizamos consejos cuando encontramos cambios; consulta la ficha para los detalles.</p>
          </div>
        </div>
      </aside>
    </main>
  );
}

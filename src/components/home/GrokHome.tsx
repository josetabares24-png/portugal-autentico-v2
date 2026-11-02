import Image from 'next/image';
import Link from 'next/link';
import { blogPostsByDate } from '@/data/blog-posts';
import TrackedInternalLink from '@/components/TrackedInternalLink';
import { uniqueArticleImages } from '@/components/blog/EditorialArticleCard';
import GrokQuickSearch from './GrokQuickSearch';
import { PhotoAttribution } from '@/components/ui/PhotoAttribution';
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

// La Home publica automáticamente los cinco artículos más recientes.
const recentPosts = blogPostsByDate.slice(0, 5);
const recentImages = uniqueArticleImages(recentPosts);

const experiences = [
  {
    id: 'jeronimos', type: 'Belém', title: 'Torre y Jerónimos',
    description: 'Qué puedes visitar, qué conviene reservar y cómo organizar Belém sin dar vueltas.',
    photo: '/images/commons/claustro-jeronimos-halun-wikimedia.webp',
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
    photo: '/images/commons/sintra-palacio-pena-wikimedia.webp',
    alt: 'Visitantes frente al Palacio da Pena en Sintra', tag: 'Día completo',
    href: '/blog/sintra-desde-lisboa', callToAction: 'Ver guía',
  },
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
          <h1 id="home-grok-title">Todo para planear tu viaje a <span className={s.city}>Lisboa</span></h1>
          <p className={s.heroText}>Artículos claros, rutas y consejos desde la ciudad. Consulta las opciones antes de reservar.</p>
          <GrokQuickSearch articles={blogPostsByDate.map(post => ({ label: post.titulo, href: '/blog/' + post.id }))} />
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
            <p className={s.sectionLead}>Publicaciones recientes, de la más nueva a la más antigua.</p>
          </div>
          <div className={s.blogGrid}>
            {recentPosts.map((post) => {
              const image = recentImages.get(post.id);
              return (
                <article className={s.articleCard} key={post.id}>
                  <Link href={'/blog/' + post.id} aria-label={'Leer ' + post.titulo}>
                    {image ? <div className={s.articlePhoto}>
                      <Image src={image} alt={post.titulo} fill sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 42vw" />
                    </div> : <span className={s.visuallyHidden}>Leer {post.titulo}</span>}
                  </Link>
                  <div className={s.articleBody}>
                    <span className={s.articleCategory}>{post.categoria} · {post.fecha}</span>
                    <h3><Link href={'/blog/' + post.id}>{post.titulo}</Link></h3>
                    <p>{post.excerpt}</p>
                    <Link className={s.readLink} href={'/blog/' + post.id}>Leer artículo</Link>
                  </div>
                  {image && <PhotoAttribution image={image} />}
                </article>
              );
            })}
          </div>
          <p style={{textAlign:'center',marginTop:28}}>
            <Link className={s.tealButton} href="/blog">Ver todos los artículos</Link>
          </p>
        </div>
      </section>

      <section className={s.activitySection} aria-labelledby="home-experiences-heading">
        <div className={s.container}>
          <div className={s.centerHeading}>
            <p className={s.scriptLabel}>Entradas y actividades</p>
            <h2 id="home-experiences-heading" className={s.sectionHeading}>Prepara tus visitas y reservas</h2>
            <p className={s.sectionLead}>Guías propias y enlaces a opciones reales para organizarte.</p>
          </div>
          <div className={s.activityGrid}>
            {experiences.map((item) => (
              <article className={s.activityCard} key={item.id}>
                <Link href={item.href} aria-label={item.tag + ': ' + item.title}>
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
            <Link href="/itinerarios/lisboa-2-dias-completo" className={s.itineraryImage} aria-label="Ver el itinerario de Lisboa en dos días">
              <Image src="/images/lisboa-originales/alfama-rua-da-adica-lisboa.jpg" alt="Calle de Alfama en Lisboa" fill sizes="(max-width: 640px) 100vw, 35vw" />
            </Link>
            <div>
              <p className={s.scriptLabel}>Itinerarios</p>
              <h2 id="home-itinerary-heading" className={s.sectionHeading}>Lisboa en 2 días</h2>
              <p className={s.itineraryLead}>Centro y Alfama el primer día, Belém el segundo. Un resumen fotográfico y el recorrido completo, con mapa y consejos para decidir qué reservar.</p>
              <Link href="/itinerarios/lisboa-2-dias-completo" className={s.yellow}>Ver itinerario completo</Link>
              <p className={s.relatedRoute}><Link className={s.readLink} href="/itinerarios">Comparar rutas de 1, 2 o 3 días</Link></p>
            </div>
          </div>
          <nav className={s.discover} aria-label="Más consejos útiles">
            {moreGuides.map(item => <Link href={item.href} key={item.href}>{item.title}</Link>)}
          </nav>
          <nav className={s.seasonalLinks} aria-label="Guías de temporada">
            <span>Si vienes en otoño o invierno:</span>
            <Link href="/blog/lisboa-cuando-llueve">Cuando llueve</Link>
            <Link href="/blog/lisboa-en-navidad">Navidad</Link>
            <Link href="/blog/nochevieja-lisboa">Fin de año</Link>
            <Link href="/blog/lisboa-en-enero">Enero</Link>
          </nav>
          <p className={s.authorNote}>Este proyecto lo escribo y reviso desde Lisboa. <Link href="/sobre-nosotros" className={s.readLink}>Conoce quién está detrás</Link></p>
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

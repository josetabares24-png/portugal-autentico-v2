import Image from 'next/image';
import Link from 'next/link';
import type { Article, ArticleBlock } from './article-types';
import { ArticleToc } from './ArticleToc';
import styles from './LisbonByBoatStory.module.css';

type Props = {
  article: Article;
  photos: { hero: string; boat: string; sailing: string };
  links: { day: string; sunset: string; all: string; map: string; whatsapp: string };
};

function sectionBlocks(article: Article, title: string) {
  const start = article.contenido.findIndex((block) => block.tipo === 'subtitulo' && block.texto === title);
  const blocks: ArticleBlock[] = [];
  for (let index = start + 1; start >= 0 && index < article.contenido.length; index++) {
    const block = article.contenido[index];
    if (block.tipo === 'subtitulo') break;
    blocks.push(block);
  }
  return blocks;
}

function Copy({ blocks }: { blocks: ArticleBlock[] }) {
  return blocks.map((block, index) => {
    if (block.tipo === 'parrafo') return <p key={index}>{block.texto}</p>;
    if (block.tipo === 'nota') return <p className={styles.note} key={index}>{block.texto}</p>;
    if (block.tipo === 'lista') return <ul key={index}>{block.items?.map((item) => <li key={item}>{item}</li>)}</ul>;
    return null;
  });
}

function ReservationLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className={styles.reserve} href={href} target="_blank" rel="sponsored nofollow noopener noreferrer">{children}<span className="sr-only"> (enlace patrocinado, abre en otra pestaña)</span></a>;
}

export default function LisbonByBoatStory({ article, photos, links }: Props) {
  const headings = [
    { id: 'experiencia', title: 'Cómo es el paseo' },
    { id: 'opciones', title: 'De día o al atardecer' },
    { id: 'recorrido', title: 'Qué se ve desde el río' },
    { id: 'embarque', title: 'Mapa y embarque' },
    { id: 'consejos', title: 'Antes de reservar' },
  ];
  const comparison = sectionBlocks(article, 'Qué paseo elegir: de día o al atardecer').find((block) => block.tipo === 'tabla');
  const tours = [
    { name: 'Lisbon Sailing Tour', moment: 'De día', photo: photos.boat, alt: 'Embarcación de Lisbon ByBoat durante un paseo por Lisboa', href: links.day, action: 'Ver salidas de día' },
    { name: 'Lisbon Sunset Sailing Tour', moment: 'Al atardecer', photo: photos.sailing, alt: 'Velero de Lisbon ByBoat navegando frente a Lisboa', href: links.sunset, action: 'Ver salidas al atardecer' },
  ];

  return (
    <div className={styles.story}>
      <div className={styles.frame}>
        <nav className={styles.breadcrumb} aria-label="Ruta de navegación"><Link href="/blog">Blog</Link><span aria-hidden="true">/</span><span>Lisbon ByBoat</span></nav>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Experiencias · Lisboa desde el agua</p>
          <h1 className={styles.title}>Lisboa desde el Tajo: <span>un paseo en velero con Lisbon ByBoat</span></h1>
          <p className={styles.subtitle}>{article.subtitulo}</p>
          <p className={styles.byline}><Link href="/sobre-nosotros">José Tabares</Link><span aria-hidden="true">·</span><time dateTime="2026-10-27">27 octubre 2026</time><span aria-hidden="true">·</span><span>{article.minutos} min de lectura</span></p>
          <p className={styles.disclosure}>Colaboración comercial con Lisbon ByBoat</p>
        </header>
        <figure className={styles.hero}>
          <Image src={photos.hero} alt="Velero navegando por el río Tajo con Lisboa al fondo" width={980} height={490} unoptimized priority sizes="(max-width: 1200px) 100vw, 1184px" />
          <figcaption>Fotografía: Lisbon ByBoat</figcaption>
        </figure>
        <dl className={styles.essentials} aria-label="El paseo, de un vistazo">
          {[['Duración', '120 minutos'], ['Paseos', 'De día · atardecer'], ['Incluye', '2 bebidas'], ['Tripulación', '2 personas']].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
        <div className={styles.readingGrid}>
          <ArticleToc headings={headings} />
          <article className={styles.reading} aria-label={article.titulo}>
            <div className={styles.intro}><Copy blocks={article.contenido.slice(0, 2)} /></div>
            <section id="experiencia">
              <p className={styles.eyebrow}>La experiencia</p>
              <h2>Cómo es el paseo en velero por Lisboa</h2>
              <Copy blocks={sectionBlocks(article, 'Cómo es el paseo en velero por Lisboa')} />
            </section>
            <section id="opciones">
              <p className={styles.eyebrow}>Elegir el momento</p>
              <h2>Qué paseo elegir: de día o al atardecer</h2>
              <Copy blocks={sectionBlocks(article, 'Qué paseo elegir: de día o al atardecer')} />
              <div className={styles.tours}>
                {tours.map((tour, index) => {
                  const row = comparison?.filas?.[index];
                  return <section className={styles.tour} aria-label={tour.name} key={tour.name}>
                    <Image src={tour.photo} alt={tour.alt} width={980} height={551} unoptimized loading="lazy" sizes="(max-width: 639px) 100vw, 50vw" />
                    <div className={styles.tourBody}>
                      <p className={styles.eyebrow}>{tour.moment}</p>
                      <h3>{tour.name}</h3>
                      <p className={styles.tourIncludes}>{row?.[1]} · {row?.[3]}</p>
                      <p className={styles.price}>{row?.[2]} <span>por persona</span></p>
                      <ReservationLink href={tour.href}>{tour.action}</ReservationLink>
                    </div>
                  </section>;
                })}
              </div>
              <p className={styles.small}>Reserva directamente con Lisbon ByBoat. Comprueba la fecha, las condiciones y el precio final antes de confirmar.</p>
            </section>
            <section id="recorrido">
              <p className={styles.eyebrow}>Mirar hacia la orilla</p>
              <h2>Qué monumentos se ven desde el río</h2>
              <Copy blocks={sectionBlocks(article, 'Qué monumentos se ven desde el río')} />
            </section>
            <section id="embarque">
              <p className={styles.eyebrow}>Antes de salir</p>
              <h2>Dónde embarcar en Doca de Belém</h2>
              <Copy blocks={sectionBlocks(article, 'Dónde embarcar en Doca de Belém')} />
              <div className={styles.map}>
                <iframe title="Mapa interactivo de Doca de Belém, Lisboa" src="https://www.openstreetmap.org/export/embed.html?bbox=-9.215%2C38.690%2C-9.197%2C38.700&layer=mapnik&marker=38.694336%2C-9.20562" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                <div><span>Doca de Belém</span><a href={links.map} target="_blank" rel="noopener noreferrer">Abrir indicaciones<span className="sr-only"> (abre en otra pestaña)</span></a></div>
              </div>
            </section>
            <section id="consejos">
              <h2>Consejos antes de reservar</h2>
              <Copy blocks={sectionBlocks(article, 'Consejos antes de reservar')} />
            </section>
            <section className={styles.ending}>
              <h2>¿Merece la pena incluirlo en tu viaje?</h2>
              <Copy blocks={sectionBlocks(article, '¿Merece la pena incluirlo en tu viaje?')} />
              <div className={styles.contactLinks}>
                <a className={styles.allTours} href={links.all} target="_blank" rel="sponsored nofollow noopener noreferrer">Ver todas las experiencias de Lisbon ByBoat<span className="sr-only"> (enlace patrocinado, abre en otra pestaña)</span></a>
                <a className={styles.allTours} href={links.whatsapp} target="_blank" rel="sponsored nofollow noopener noreferrer">WhatsApp · +351 933 914 743<span className="sr-only"> (contacto de Lisbon ByBoat, abre en otra pestaña)</span></a>
              </div>
              <p className={styles.small}>Este contenido es una colaboración comercial. No constituye una reseña basada en una experiencia personal a bordo.</p>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}

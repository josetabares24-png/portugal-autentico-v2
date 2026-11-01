import Image from 'next/image';
import Link from 'next/link';
import styles from './GrokTwoDayItinerary.module.css';

/**
 * Página de 2 días inspirada en la versión aprobada de Grok.
 * Los enlaces llegan a guías y reservas propias existentes; sin inventar
 * precio, disponibilidad, apertura ni ofertas. El orden es orientativo.
 */
type Stop = {
  id: string;
  area: string;
  name: string;
  subtitle: string;
  photo: string;
  alt: string;
  href: string;
  cta: string;
  actionLabel: string;
  note: string;
  eyebrow: string;
  day: 1 | 2;
};
const stops: Stop[] = [
  {
    id: 'baixa',
    area: 'BAIXA',
    name: 'Praça do Comércio y Rua Augusta',
    subtitle: 'Empieza junto al Tajo y camina por el centro hacia Rua Augusta.',
    photo: '/images/lisboa-originales/rua-augusta-arco-lisboa.webp',
    alt: 'Arco da Rua Augusta en el centro de Lisboa',
    href: '/blog/baixa-lisboa-que-ver',
    cta: 'Ver guía',
    actionLabel: 'Sin entrada',
    note: 'Paseo por el centro',
    eyebrow: 'Centro histórico',
    day: 1,
  },
  {
    id: 'chiado',
    area: 'CHIADO',
    name: 'Chiado y el eléctrico',
    subtitle: 'Cafés, librerías y tranvías. Consulta las líneas antes de subir.',
    photo: '/images/lisboa-originales/electrico-15e-caf-lisboa.jpg',
    alt: 'Tranvía circulando por una calle de Lisboa',
    href: '/blog/como-moverse-por-lisboa',
    cta: 'Ver transporte',
    actionLabel: 'Billete según ruta',
    note: 'Consulta tarifa actual',
    eyebrow: 'Tranvía y paseos',
    day: 1,
  },
  {
    id: 'alfama',
    area: 'ALFAMA',
    name: 'Alfama y el Castelo de São Jorge',
    subtitle: 'Calles empinadas, miradores y el castillo si te apetece entrar.',
    photo: '/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg',
    alt: 'Tejados de Alfama y el río Tajo en Lisboa',
    href: '/actividades/castelo-sao-jorge',
    cta: 'Consultar entrada',
    actionLabel: 'Entrada opcional',
    note: 'Comprueba acceso',
    eyebrow: 'Barrio y castillo',
    day: 1,
  },
  {
    id: 'belem',
    area: 'BELÉM',
    name: 'Torre de Belém y Jerónimos',
    subtitle: 'Dos monumentos de la zona. Consulta el acceso antes de ir.',
    photo: '/images/actividades/torre-de-belem-lisboa.webp',
    alt: 'Torre de Belém junto al río Tajo',
    href: '/blog/belem-barrio-guia',
    cta: 'Planear visita',
    actionLabel: 'Entradas por verificar',
    note: 'Revisa horarios y cierres',
    eyebrow: 'Monumentos',
    day: 2,
  },
  {
    id: 'pasteis',
    area: 'BELÉM',
    name: 'Pastéis de Belém',
    subtitle: 'Una parada para probar el pastel de nata más conocido del barrio.',
    photo: '/images/actividades/pasteis-de-belem.webp',
    alt: 'Pastéis de Belém recién preparados',
    href: '/blog/pasteles-de-belem',
    cta: 'Dónde comer',
    actionLabel: 'Precio en el local',
    note: 'No necesita entrada',
    eyebrow: 'Gastronomía',
    day: 2,
  },
  {
    id: 'mirador',
    area: 'ATARDECER',
    name: 'Cierra el día en un mirador',
    subtitle: 'Elige la vista y termina sin añadir otra reserva a tu agenda.',
    photo: '/images/miradouro-atardecer.jpg',
    alt: 'Atardecer visto desde un mirador de Lisboa',
    href: '/blog/mejores-miradores-lisboa',
    cta: 'Elegir mirador',
    actionLabel: 'Opciones gratuitas',
    note: 'Depende del mirador',
    eyebrow: 'Vista de la ciudad',
    day: 2,
  },
];

const days = [
  { day: 1 as const, title: 'Día 1', eyebrow: 'Centro y Alfama', summary: 'Empieza en la zona llana y deja las cuestas de Alfama para después.' },
  { day: 2 as const, title: 'Día 2', eyebrow: 'Belém y atardecer', summary: 'Agrupa los monumentos de Belém antes de volver al centro.' },
];

export default function GrokTwoDayItinerary() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <Image
          src="/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg"
          alt="Panorámica de Alfama en Lisboa"
          fill priority fetchPriority="high" sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} aria-hidden="true"/>
        <div className={styles.heroContent}>
          <Link href="/itinerarios" className={styles.back}>Ver otros itinerarios</Link>
          <p className={styles.script}>Itinerario</p>
          <h1>Lisboa en 2 días</h1>
          <p className={styles.intro}>Día 1 por el centro y Alfama. Día 2 en Belém, con tiempo para un mirador.</p>
        </div>
      </header>

      <section className={styles.quickFacts} aria-label="Antes de empezar">
        <div><small>Duración</small><strong>2 días</strong></div>
        <div><small>Cómo moverte</small><strong>A pie y en transporte público</strong></div>
        <div><small>Reservas</small><strong>Comprueba los accesos</strong></div>
        <div><small>Cuestas</small><strong>Alfama tiene pendientes</strong></div>
      </section>

      <main className={styles.container}>
        <section className={styles.overview} aria-labelledby="grok-two-day-stops">
          <div className={styles.sectionHead}>
            <p className={styles.script}>De un vistazo</p>
            <h2 id="grok-two-day-stops">Tu ruta, parada a parada</h2>
            <p>Seis ideas para orientarte. Puedes ajustar el orden según horarios, clima y energía.</p>
          </div>
          <div className={styles.photoGrid}>
            {stops.map((stop, index) => (
              <Link key={stop.id} href={'#' + stop.id} className={styles.photoCard} aria-label={'Ver parada: ' + stop.name}>
                <Image src={stop.photo} alt={stop.alt} fill sizes="(max-width: 640px) 50vw, 33vw" className={styles.photo}/>
                <div className={styles.photoShade} aria-hidden="true"/>
                <span className={styles.photoNum}>{String(index + 1).padStart(2,'0')}</span>
                <div className={styles.photoText}>
                  <span>{stop.eyebrow}</span>
                  <h3>{stop.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {days.map((day) => (
          <section className={styles.day} key={day.day} aria-labelledby={'grok-day-'+day.day}>
            <div className={styles.dayHeading}>
              <p className={styles.script}>{day.eyebrow}</p>
              <h2 id={'grok-day-'+day.day}>{day.title}</h2>
              <p>{day.summary}</p>
            </div>
            <div className={styles.dayRows}>
              {stops.filter(s=>s.day===day.day).map((stop) => (
                <article className={styles.row} key={stop.id} id={stop.id}>
                  <Link className={styles.rowImage} href={stop.href} aria-label={'Leer sobre '+stop.name}>
                    <Image src={stop.photo} alt={stop.alt} fill sizes="(max-width: 640px) 100px, 180px" className={styles.photo}/>
                  </Link>
                  <div className={styles.rowCopy}>
                    <span className={styles.area}>{stop.area}</span>
                    <h3>{stop.name}</h3>
                    <p>{stop.subtitle}</p>
                    <span className={styles.micro}>{stop.note}</span>
                  </div>
                  <div className={styles.action}>
                    <strong>{stop.actionLabel}</strong>
                    <Link href={stop.href} className={styles.actionButton}>{stop.cta}</Link>
                    <small>Guía de Estaba en Lisboa</small>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
        <aside className={styles.factBox} aria-labelledby="grok-alfama-title">
          <h2 id="grok-alfama-title">Ficha rápida: Alfama</h2>
          <div>
            <p><strong>Por qué ir</strong>Calles históricas, miradores y pequeñas plazas.</p>
            <p><strong>Para quién</strong>Para quien disfrute caminando y no tema las cuestas.</p>
            <p><strong>Qué saber</strong>El pavimento puede resbalar con lluvia. Lleva calzado cómodo.</p>
            <p><strong>Cómo organizarla</strong>Deja margen para descansar y consulta el horario del castillo.</p>
          </div>
          <Link href="/blog/alfama-historia-guia">Leer la guía completa de Alfama</Link>
        </aside>

        <section className={styles.after} aria-label="Más formas de preparar tu visita">
          <div>
            <h2>¿Quieres organizarlo de otra manera?</h2>
            <p>Si prefieres reservar una visita guiada o comparar las entradas de los monumentos, puedes hacerlo desde nuestras páginas habituales.</p>
          </div>
          <div className={styles.links}>
            <Link href="/free-tours-lisboa">Comparar free tours</Link>
            <Link href="/comprar-entradas">Consultar entradas</Link>
            <Link href="/itinerarios">Todas las rutas</Link>
          </div>
        </section>
      </main>

      <footer className={styles.disclosures}>
        <div><strong>Precios con fecha</strong>La disponibilidad y los importes se comprueban en las páginas correspondientes, no en este itinerario.</div>
        <div><strong>Enlaces de afiliado avisados</strong>Algunas opciones de reserva pueden generar una comisión, sin cambiar tu precio.</div>
        <div><strong>Revisado antes de publicar</strong>Los cierres y horarios de monumentos pueden cambiar. Consulta las fuentes antes de salir.</div>
      </footer>
    </div>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MapaZona from './MapaZona';
import styles from './QosqoEditorial.module.css';

/**
 * QOSQO: propuesta editorial revisable.
 * Se mantiene en ruta temporal noindex, fuera del sitemap y del blog.
 * No confundir la información facilitada por el restaurante con una visita propia.
 */
export const metadata: Metadata = {
  title: 'QOSQO: cocina peruana junto a la Sé de Lisboa',
  description:
    'QOSQO está junto al Campo das Cebolas, cerca de la Sé de Lisboa. Conoce los platos peruanos que propone, dónde encontrarlo y cómo reservar.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    googleBot: { index: false, follow: false, noarchive: true },
  },
};

const TEL = 'tel:+351212418058';
const EMAIL =
  'mailto:geralqosqo@gmail.com?subject=Reserva%20QOSQO%20(desde%20Estaba%20en%20Lisboa)';
const DIRECTIONS =
  'https://www.google.com/maps/dir/?api=1&destination=QOSQO%2C%20Rua%20dos%20Bacalhoeiros%2026A%2C%20Lisboa%2C%20Portugal';
const INSTAGRAM =
  'https://www.instagram.com/qosqo_lisboa/?utm_source=estabaenlisboa&utm_medium=referral&utm_campaign=qosqo&utm_content=instagram';

type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

const extraPhotos: Photo[] = [
  {
    src: '/images/qosqo/qosqo-plato-salsa-amarilla.webp',
    alt: 'Preparación de pescado sobre salsa de ají amarillo con decoración de flores',
    width: 1067,
    height: 1600,
    caption: 'Una de las preparaciones con salsa amarilla fotografiadas por QOSQO.',
  },
  {
    src: '/images/qosqo/qosqo-pisco-sour.webp',
    alt: 'Pisco sour en una copa sobre un mantel colorido de QOSQO',
    width: 1280,
    height: 1600,
    caption: 'Pisco sour, uno de los cócteles que destaca el restaurante.',
  },
  {
    src: '/images/qosqo/qosqo-plato-principal.webp',
    alt: 'Plato servido por QOSQO con cebolla morada, hierbas y flores',
    width: 1200,
    height: 1600,
    caption: 'Otra de las elaboraciones que nos compartió el restaurante.',
  },
];

const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'QOSQO',
  servesCuisine: 'Peruana',
  telephone: '+351212418058',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua dos Bacalhoeiros 26A',
    addressLocality: 'Lisboa',
    addressCountry: 'PT',
  },
  sameAs: [
    'https://www.facebook.com/ceviche.portugal',
    'https://www.instagram.com/qosqo_lisboa/',
  ],
};

export default function QosqoEditorialPreview() {
  return (
    <main id="main-content" className={styles.page}>
      <article>
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Gastronomía · Campo das Cebolas</p>
            <h1 className={styles.title}>QOSQO: cocina peruana junto a la Sé de Lisboa</h1>
            <p className={styles.deck}>
              Entre la Sé y el río, QOSQO reúne ceviches, tiraditos,
              platos criollos y pisco sour. Una opción para descubrir
              sabores del Perú mientras recorres el centro de Lisboa.
            </p>
            <p className={styles.heroMeta}>Por José Tabares · Estaba en Lisboa</p>
            <span className={styles.sponsor}>Colaboración comercial con QOSQO</span>
            <div className={styles.actions}>
              <a className={styles.primary} href={TEL} rel="sponsored nofollow" data-cta="qosqo-hero-reserva">
                Llamar para reservar
              </a>
              <a className={styles.secondary} href="#platos">
                Conocer los platos
              </a>
            </div>
          </div>
          <figure className={styles.heroVisual}>
            <div className={styles.heroImage}>
              <Image
                src="/images/qosqo/qosqo-tiradito-leche-de-tigre-aji-amarillo.webp"
                alt="Tiradito de pescado con leche de tigre de ají amarillo servido en QOSQO"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 54vw"
              />
            </div>
            <figcaption className={styles.photoCredit}>Fotografía: QOSQO</figcaption>
          </figure>
        </header>

        <div className={styles.facts}>
          <div className={styles.factsInner}>
            <div className={styles.fact}>
              <span className={styles.factLabel}>Dirección</span>
              <span className={styles.factValue}>Rua dos Bacalhoeiros 26A, Lisboa</span>
            </div>
            <div className={styles.fact}>
              <span className={styles.factLabel}>Zona</span>
              <span className={styles.factValue}>Sé · Campo das Cebolas</span>
            </div>
            <div className={styles.fact}>
              <span className={styles.factLabel}>Contacto</span>
              <span className={styles.factValue}>
                <a href={TEL} rel="sponsored nofollow" data-cta="qosqo-ficha-telefono">
                  +351 21 241 8058
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.reading}>
            <p className={styles.lead}>
              Si estás paseando por las calles de Alfama, visitando la Sé o bajando
              hacia Terreiro do Paço, QOSQO queda a pocos pasos del Campo das
              Cebolas. Su carta gira alrededor de la cocina peruana, con
              preparaciones de pescado, recetas criollas y platos para compartir.
            </p>
            <p>
              El restaurante nos facilitó su historia, fotografías y una
              selección de sus especialidades para preparar esta guía.
              Te contamos qué puedes encontrar y cómo ponerte en contacto
              para reservar.
            </p>

            <section id="cocina">
              <h2>Una mesa para descubrir la cocina peruana</h2>
              <p>
                En Perú, comer suele ser una mezcla de tradiciones: del
                ají y la patata a técnicas e ingredientes que llegaron
                de otras cocinas. En QOSQO conviven clásicos reconocibles,
                como el ceviche o el lomo saltado, con elaboraciones de
                presentación más contemporánea.
              </p>
              <p>
                Su equipo nos cuenta que suele recomendar pedir varios
                platos al centro de la mesa. Es una forma sencilla de
                probar distintas recetas, especialmente si es tu primera
                vez en un restaurante peruano.
              </p>
              <figure className={styles.imageWide}>
                <Image
                  src="/images/qosqo/qosqo-plato-con-mantel-andino.webp"
                  alt="Pulpo servido sobre un mantel con motivos andinos y el nombre QOSQO"
                  width={1467}
                  height={978}
                  sizes="(max-width: 760px) 100vw, 715px"
                  loading="lazy"
                />
                <figcaption>
                  Pulpo confitado con puré de camote y patatas «ao murro», según la descripción de QOSQO.
                  Fotografía: QOSQO.
                </figcaption>
              </figure>
            </section>

            <section id="platos">
              <p className={styles.eyebrow}>Qué comer</p>
              <h2>Los platos que QOSQO quiere que conozcas</h2>
              <h3>Para empezar: tiradito, ceviche y causa</h3>
              <p>
                El tiradito es una buena puerta de entrada a los sabores
                del Perú: pescado cortado en láminas finas, servido aquí
                con leche de tigre de ají amarillo. El resultado combina
                frescura, acidez y el carácter de este ají peruano.
              </p>
              <p>
                QOSQO también destaca su ceviche, preparado con pescado
                fresco marinado con lima, cebolla y cilantro. Otra
                especialidad que describen es la causa limeña, un plato
                frío de patata, ají amarillo y lima que puede llevar
                distintos rellenos.
              </p>

              <h3>Platos calientes con carácter</h3>
              <p>
                Entre las opciones que nos han presentado están el
                lomo saltado —carne salteada con verduras y acompañada
                de arroz— y el ají de gallina, con gallina deshilachada
                en una crema de ají amarillo y nueces.
              </p>
              <div className={styles.imagePair}>
                <figure>
                  <Image
                    src="/images/qosqo/qosqo-aji-de-gallina.webp"
                    alt="Ají de gallina con arroz blanco servido en QOSQO"
                    width={1200}
                    height={1600}
                    sizes="(max-width: 760px) 50vw, 350px"
                    loading="lazy"
                  />
                  <figcaption>Ají de gallina. Foto: QOSQO.</figcaption>
                </figure>
                <figure>
                  <Image
                    src="/images/qosqo/qosqo-plato-pescado.webp"
                    alt="Lomo de corvina con salsa de ají amarillo en un plato de QOSQO"
                    width={1067}
                    height={1600}
                    sizes="(max-width: 760px) 50vw, 350px"
                    loading="lazy"
                  />
                  <figcaption>Corvina con ají amarillo. Foto: QOSQO.</figcaption>
                </figure>
              </div>
              <p>
                Si prefieres pescado, el restaurante menciona además
                el lomo de corvina con salsa de ají amarillo, puré de
                patata, arroz jazmín y katsuobushi. Y para una comida
                más contundente, propone costilla de vaca asada con
                cerveza Cusqueña Negra.
              </p>
              <div className={styles.shortNote}>
                Los platos mencionados proceden de la información facilitada
                por QOSQO en noviembre de 2026. Consulta la carta actual
                y los alérgenos directamente con el restaurante antes de pedir.
              </div>
            </section>

            <section id="pisco">
              <h2>Un pisco sour para empezar</h2>
              <p>
                Para acompañar la comida, QOSQO destaca el pisco sour,
                uno de los cócteles más conocidos del Perú, y otras
                combinaciones con frutas tropicales como mango o maracuyá.
                En su selección también aparecen Inca Kola y cerveza
                Cusqueña.
              </p>
              <figure className={styles.imageNarrow}>
                <Image
                  src="/images/qosqo/qosqo-bebidas.webp"
                  alt="Dos personas sostienen cócteles en una mesa del restaurante QOSQO"
                  width={1280}
                  height={1600}
                  sizes="(max-width: 760px) 100vw, 560px"
                  loading="lazy"
                />
                <figcaption>Un momento para brindar en QOSQO. Fotografía: QOSQO.</figcaption>
              </figure>
            </section>

            <section id="ambiente">
              <h2>Un restaurante pequeño, cerca del río</h2>
              <p>
                QOSQO nos cuenta que dispone de dos salas interiores
                y que renovó el local a comienzos de 2026. Está en
                la Rua dos Bacalhoeiros, entre la zona de la Sé y
                Terreiro do Paço, así que es fácil incluirlo en un
                paseo por el centro histórico.
              </p>
              <p>
                También nos comentan que organizan ocasionalmente
                encuentros gastronómicos con cocineros peruanos invitados.
                Si te interesa asistir a alguno, lo mejor es
                preguntar directamente por las próximas fechas.
              </p>
              <figure className={styles.imageNarrow}>
                <Image
                  src="/images/qosqo/qosqo-sala-y-postre.webp"
                  alt="Postre de QOSQO con un mural colorido del restaurante al fondo"
                  width={1200}
                  height={1600}
                  sizes="(max-width: 760px) 100vw, 560px"
                  loading="lazy"
                />
                <figcaption>Un postre con el mural del local al fondo. Foto: QOSQO.</figcaption>
              </figure>
            </section>
          </div>

          <aside className={styles.aside} aria-label="Índice del artículo">
            <div className={styles.asideInner}>
              <p className={styles.asideTitle}>En este artículo</p>
              <nav className={styles.toc} aria-label="Secciones de QOSQO">
                <a href="#cocina">La cocina de QOSQO</a>
                <a href="#platos">Qué platos conocer</a>
                <a href="#pisco">Pisco sour y bebidas</a>
                <a href="#ambiente">El ambiente</a>
                <a href="#reservas">Cómo llegar y reservar</a>
              </nav>
              <div className={styles.asideAddress}>
                <strong>QOSQO · Cocina peruana</strong>
                Rua dos Bacalhoeiros 26A<br />
                Lisboa, Portugal
              </div>
            </div>
          </aside>
        </div>

        <section className={styles.gallery} aria-label="Más fotografías de QOSQO">
          <div className={styles.galleryIntro}>
            <div>
              <p className={styles.eyebrow}>Desde la mesa</p>
              <h2>Algunos detalles de QOSQO</h2>
            </div>
            <p>Una selección de imágenes compartidas por el restaurante.</p>
          </div>
          <div className={styles.galleryGrid}>
            {extraPhotos.map((photo) => (
              <figure key={photo.src}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 760px) 100vw, 55vw"
                  loading="lazy"
                />
                <figcaption>{photo.caption} Fotografía: QOSQO.</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="reservas" className={styles.booking}>
          <div className={styles.bookingInner}>
            <div>
              <p className={styles.eyebrow}>Antes de ir</p>
              <h2>Cómo llegar y reservar en QOSQO</h2>
              <p>
                El restaurante está en la Rua dos Bacalhoeiros 26A,
                junto al Campo das Cebolas. Desde la Sé de Lisboa
                o desde Terreiro do Paço puedes acercarte caminando.
              </p>
              <p>
                Para confirmar la disponibilidad, el horario y la carta
                actual, contacta directamente con QOSQO.
              </p>
              <div className={styles.bookingLinks}>
                <a className={styles.primary} href={TEL} rel="sponsored nofollow" data-cta="qosqo-final-llamar">
                  Llamar para reservar
                </a>
                <a className={styles.secondary} href={EMAIL} rel="sponsored nofollow" data-cta="qosqo-final-email">
                  Escribir por correo
                </a>
              </div>
              <div className={styles.contact}>
                <span>Rua dos Bacalhoeiros 26A, Lisboa, Portugal</span>
                <span>
                  <a href={DIRECTIONS} target="_blank" rel="sponsored nofollow noopener noreferrer" data-cta="qosqo-direcciones">
                    Ver cómo llegar en Google Maps
                  </a>
                </span>
                <span>
                  <a href={INSTAGRAM} target="_blank" rel="sponsored nofollow noopener noreferrer" data-cta="qosqo-instagram">
                    Instagram @qosqo_lisboa
                  </a>
                </span>
              </div>
            </div>
            <div className={styles.mapPanel}>
              <MapaZona />
            </div>
          </div>
        </section>

        <footer className={styles.bottom}>
          <p>
            <strong>Sobre este contenido:</strong> colaboración comercial con QOSQO.
            Las fotografías y los detalles de los platos fueron facilitados por
            el restaurante en noviembre de 2026. Esta publicación no es una
            reseña de una visita personal; antes de publicar su versión definitiva
            se revisarán los datos y permisos de las imágenes con QOSQO.
          </p>
          <div className={styles.author}>
            <Image
              src="/images/jose/jose-tabares-avatar.jpg"
              alt="José Tabares"
              width={43}
              height={43}
              loading="lazy"
            />
            <div>
              <strong>Escrito por José Tabares</strong>
              <span>
                Creador de Estaba en Lisboa, una guía independiente de la ciudad en español.
                {' '}<Link href="/sobre-nosotros">Conoce el proyecto</Link>.
              </span>
            </div>
          </div>
        </footer>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(restaurantJsonLd).replace(/</g, '\\u003c'),
        }}
      />
    </main>
  );
}

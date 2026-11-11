import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MapaZona from './MapaZona';
import styles from './QosqoEditorial.module.css';

/**
 * QOSQO: reportaje gastronómico independiente, creado para revisión.
 * Noindex, fuera del sitemap; no se atribuye una visita ni una degustación.
 */
export const metadata: Metadata = {
  title: 'QOSQO, cocina peruana junto a la Sé de Lisboa',
  description:
    'QOSQO, restaurante peruano cerca de la Sé de Lisboa: platos destacados, dirección en Rua dos Bacalhoeiros y cómo reservar.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    googleBot: { index: false, follow: false, noarchive: true },
  },
};

const PHONE = 'tel:+351212418058';
const EMAIL =
  'mailto:geralqosqo@gmail.com?subject=Reserva%20QOSQO%20(desde%20Estaba%20en%20Lisboa)';
const MAPS =
  'https://www.google.com/maps/dir/?api=1&destination=QOSQO%2C%20Rua%20dos%20Bacalhoeiros%2026A%2C%20Lisboa%2C%20Portugal';
const INSTAGRAM =
  'https://www.instagram.com/qosqo_lisboa/?utm_source=estabaenlisboa&utm_medium=referral&utm_campaign=qosqo&utm_content=instagram';

const restaurantSchema = {
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
        <header className={styles.cover}>
          <div className={styles.coverInner}>
            <p className={styles.eyebrow}>Estaba en Lisboa / Gastronomía</p>
            <h1 className={styles.brandTitle}>
              QOSQO<span className="sr-only">, restaurante peruano cerca de la Sé de Lisboa</span>
            </h1>
            <p className={styles.coverSubtitle}>
              Cocina peruana en Rua dos Bacalhoeiros
            </p>
            <p className={styles.coverDeck}>
              Tiraditos, lomo saltado, ají de gallina y pisco sour.
              Esto es lo que nos contó QOSQO sobre su carta y cómo visitarlo.
            </p>
            <div className={styles.coverBottom}>
              <span>Por José Tabares</span>
              <span>Colaboración comercial con QOSQO</span>
            </div>
            <a
              className={styles.coverAction}
              href={PHONE}
              rel="sponsored nofollow"
              data-cta="qosqo-cabecera-reserva"
            >
              Llamar para reservar
            </a>
          </div>
        </header>

        <div className={styles.coverPhotos}>
          <figure className={styles.coverPhoto}>
            <Image
              src="/images/qosqo/qosqo-plato-con-mantel-andino.webp"
              alt="Pulpo confitado servido sobre un mantel de colores y motivos andinos con el nombre QOSQO"
              width={1467}
              height={978}
              priority
              sizes="(max-width: 680px) 100vw, 67vw"
            />
          </figure>
          <figure className={styles.coverPhoto}>
            <Image
              src="/images/qosqo/qosqo-bebidas.webp"
              alt="Dos personas brindan con cócteles sobre una mesa del restaurante QOSQO"
              width={1280}
              height={1600}
              sizes="(max-width: 680px) 1px, 33vw"
              loading="lazy"
            />
          </figure>
        </div>
        <p className={styles.credit}>Fotografías: QOSQO.</p>

        <nav className={styles.quickNav} aria-label="Contenido del artículo">
          <a href="#historia">El restaurante</a>
          <a href="#platos">Qué comer</a>
          <a href="#pisco">Bebidas</a>
          <a href="#visita">Cómo llegar y reservar</a>
        </nav>

        <section className={styles.intro} id="historia" aria-labelledby="qosqo-historia">
          <div>
            <span className={styles.sectionNumber}>01 / EL RESTAURANTE</span>
            <h2 id="qosqo-historia">Dos salas y una carta para compartir</h2>
          </div>
          <div className={styles.introCopy}>
            <p>
              QOSQO está en la Rua dos Bacalhoeiros, junto al
              Campo das Cebolas. Desde la Sé de Lisboa queda
              cerca del camino que baja hacia Terreiro do Paço.
            </p>
            <p>
              El restaurante tiene dos salas pequeñas, según nos
              cuenta su equipo, y renovó el espacio a comienzos
              de 2026. Su consejo para conocer la carta es pedir
              varios platos y compartirlos.
            </p>
            <p>
              Hay pescado con lima y ají amarillo, pero también
              guisos como el ají de gallina y carne preparada al
              wok. No todo se reduce al ceviche.
            </p>
          </div>
        </section>

        <section className={styles.sectionShell} id="platos" aria-labelledby="qosqo-platos">
          <div className={styles.sectionTitle}>
            <div>
              <span className={styles.sectionNumber}>02 / EN LA MESA</span>
              <h2 id="qosqo-platos">Qué comer en QOSQO</h2>
            </div>
            <p>
              Del pescado con ají amarillo a los platos calientes
              que QOSQO destaca en su carta.
            </p>
          </div>

          <div className={styles.editorialFeature}>
            <figure>
              <Image
                src="/images/qosqo/qosqo-tiradito-leche-de-tigre-aji-amarillo.webp"
                alt="Tiradito de pescado sobre salsa amarilla, con pequeños acompañamientos crujientes"
                width={1073}
                height={1344}
                sizes="(max-width: 680px) 100vw, 48vw"
                loading="lazy"
              />
              <figcaption>Tiradito con leche de tigre de ají amarillo. Foto: QOSQO.</figcaption>
            </figure>
            <div className={styles.featureCopy}>
              <p className={styles.eyebrow}>Para empezar</p>
              <h3>Tiradito con leche de tigre de ají amarillo</h3>
              <p>
                QOSQO propone tiraditos de atún o corvina:
                pescado cortado en láminas y servido con leche
                de tigre de ají amarillo. La leche de tigre
                es un aliño cítrico que también acompaña
                al ceviche.
              </p>
              <p>
                En la selección que nos enviaron aparece
                el ceviche, preparado con pescado fresco,
                lima, cebolla y cilantro. También la causa
                limeña: un plato frío de patata con ají
                amarillo y lima, que puede llevar pollo,
                atún o verduras.
              </p>
            </div>
          </div>

          <div className={styles.index} aria-label="Otras especialidades">
            <div className={styles.indexRow}>
              <span className={styles.indexCount}>01</span>
              <h3>Ají de gallina</h3>
              <p>Gallina deshilachada con crema de ají amarillo y nueces, acompañada de arroz.</p>
            </div>
            <div className={styles.indexRow}>
              <span className={styles.indexCount}>02</span>
              <h3>Lomo saltado</h3>
              <p>Carne de vacuno salteada con verduras, flambeada con pisco y servida con arroz blanco.</p>
            </div>
            <div className={styles.indexRow}>
              <span className={styles.indexCount}>03</span>
              <h3>Corvina con ají amarillo</h3>
              <p>Lomo de corvina con salsa de ají amarillo, puré de patata, arroz jazmín y katsuobushi.</p>
            </div>
            <div className={styles.indexRow}>
              <span className={styles.indexCount}>04</span>
              <h3>Platos para compartir</h3>
              <p>Entre sus propuestas figuran el pulpo confitado con camote y la costilla asada con cerveza Cusqueña Negra.</p>
            </div>
          </div>

          <div className={styles.doublePhoto}>
            <figure>
              <Image
                src="/images/qosqo/qosqo-aji-de-gallina.webp"
                alt="Ají de gallina con arroz, servido sobre un mantel de QOSQO"
                width={1200}
                height={1600}
                sizes="(max-width: 680px) 50vw, 45vw"
                loading="lazy"
              />
              <figcaption>Ají de gallina. Foto: QOSQO.</figcaption>
            </figure>
            <figure>
              <Image
                src="/images/qosqo/qosqo-plato-pescado.webp"
                alt="Corvina servida con salsa de ají amarillo en QOSQO"
                width={1067}
                height={1600}
                sizes="(max-width: 680px) 50vw, 45vw"
                loading="lazy"
              />
              <figcaption>Corvina con ají amarillo. Foto: QOSQO.</figcaption>
            </figure>
          </div>
          <p className={styles.note}>
            La selección y las descripciones se basan en información del restaurante
            de noviembre de 2026. Antes de ir, confirma la carta actual,
            la disponibilidad de los platos y los alérgenos.
          </p>
        </section>

        <section className={styles.drinks} id="pisco" aria-labelledby="qosqo-pisco">
          <div className={styles.drinksInner}>
            <div className={styles.drinksCopy}>
              <p className={styles.eyebrow}>03 / PARA BRINDAR</p>
              <h2 id="qosqo-pisco">Pisco sour y otras bebidas peruanas</h2>
              <p>
                El pisco sour tiene su lugar en la mesa de QOSQO.
                Además de esta combinación de pisco y cítricos,
                el restaurante nos ha mostrado variantes con
                frutas como mango y maracuyá.
              </p>
              <p>
                También mencionan Inca Kola y cerveza Cusqueña,
                dos bebidas que forman parte de su selección
                de productos peruanos.
              </p>
              <p className={styles.smallPrint}>
                Consulta directamente qué bebidas están disponibles
                y sus precios en la carta vigente.
              </p>
            </div>
            <figure className={styles.drinksFigure}>
              <Image
                src="/images/qosqo/qosqo-pisco-sour.webp"
                alt="Cóctel pisco sour junto a un mantel con el nombre de QOSQO"
                width={1280}
                height={1600}
                sizes="(max-width: 680px) 100vw, 48vw"
                loading="lazy"
              />
              <figcaption>Un pisco sour servido en QOSQO. Fotografía: QOSQO.</figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.strip} aria-labelledby="qosqo-ambiente">
          <figure className={styles.stripImage}>
            <Image
              src="/images/qosqo/qosqo-sala-y-postre.webp"
              alt="Postre de QOSQO con el mural de colores del restaurante desenfocado al fondo"
              width={1200}
              height={1600}
              sizes="(max-width: 680px) 100vw, 52vw"
              loading="lazy"
            />
            <figcaption>Detalle de un postre y el mural del restaurante. Foto: QOSQO.</figcaption>
          </figure>
          <div>
            <p className={styles.eyebrow}>04 / EL LUGAR</p>
            <h2 id="qosqo-ambiente">Un alto antes de seguir por Lisboa</h2>
            <p>
              QOSQO está en una calle que conecta varias de las
              zonas más visitadas del centro. Es una opción para
              hacer una pausa después de caminar por Alfama o
              antes de continuar hacia la ribera.
            </p>
            <p>
              Si te interesa una experiencia gastronómica concreta
              o alguno de los eventos con cocineros invitados,
              pregunta al restaurante por las próximas fechas.
            </p>
          </div>
        </section>

        <section className={styles.visit} id="visita" aria-labelledby="qosqo-visita">
          <div className={styles.visitInner}>
            <div className={styles.visitHeader}>
              <div>
                <p className={styles.eyebrow}>05 / INFORMACIÓN PRÁCTICA</p>
                <h2 id="qosqo-visita">Dónde está QOSQO y cómo reservar</h2>
              </div>
              <p>
                Consulta directamente la disponibilidad, el
                horario y la carta vigente antes de visitarlo.
              </p>
            </div>
            <div className={styles.visitBody}>
              <div>
                <p className={styles.address}>
                  Rua dos Bacalhoeiros 26A<br />
                  Lisboa, Portugal
                </p>
                <div className={styles.contactRows}>
                  <a href={PHONE} rel="sponsored nofollow" data-cta="qosqo-reserva-llamar">
                    Llamar para reservar <span>+351 21 241 8058</span>
                  </a>
                  <a href={EMAIL} rel="sponsored nofollow" data-cta="qosqo-reserva-email">
                    Consultar por correo <span>Gmail</span>
                  </a>
                  <a href={MAPS} target="_blank" rel="sponsored nofollow noopener noreferrer" data-cta="qosqo-como-llegar">
                    Cómo llegar <span>Google Maps</span>
                  </a>
                  <a href={INSTAGRAM} target="_blank" rel="sponsored nofollow noopener noreferrer" data-cta="qosqo-instagram">
                    Ver Instagram <span>@qosqo_lisboa</span>
                  </a>
                </div>
              </div>
              <div className={styles.visitMap}>
                <MapaZona />
              </div>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <p className={styles.footerDisclosure}>
            Colaboración comercial con QOSQO. Este artículo se ha preparado a partir
            de los materiales, fotografías y detalles facilitados por el restaurante,
            y no representa una visita ni una degustación personal. Esta es
            una versión preliminar: la publicación definitiva requiere la
            validación de los datos y la autorización de las fotografías.
          </p>
          <div className={styles.byline}>
            <Image
              src="/images/jose/jose-tabares-avatar.jpg"
              alt="José Tabares"
              width={44}
              height={44}
              loading="lazy"
            />
            <div>
              <strong>José Tabares</strong>
              Estaba en Lisboa · Guías independientes en español.{' '}
              <Link href="/sobre-nosotros">Sobre el proyecto</Link>
            </div>
          </div>
        </footer>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(restaurantSchema).replace(/</g, '\\u003c'),
        }}
      />
    </main>
  );
}

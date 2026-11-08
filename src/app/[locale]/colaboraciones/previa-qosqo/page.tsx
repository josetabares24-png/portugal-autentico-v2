import type { Metadata } from 'next';
import Image from 'next/image';
import MapaZona from './MapaZona';

/**
 * Vista de revisión editorial de QOSQO (colaboración comercial).
 * No indexada, fuera del sitemap y del blog. Texto basado solo en el material
 * que QOSQO envió por correo el 04/11/2026; sin precios hasta recibir la carta.
 */
export const metadata: Metadata = {
  title: 'QOSQO, restaurante peruano cerca de la Sé de Lisboa',
  description:
    'QOSQO, cocina peruana en la Rua dos Bacalhoeiros, junto al Campo das Cebolas: tiraditos, ají de gallina, pisco sour y cómo reservar.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    googleBot: { index: false, follow: false, noarchive: true },
  },
};

const INSTAGRAM = 'https://www.instagram.com/qosqo_lisboa/?utm_source=estabaenlisboa&utm_medium=referral&utm_campaign=qosqo&utm_content=instagram';

type Foto = { src: string; alt: string; w: number; h: number; caption?: string };

const galeria: Foto[] = [
  { src: '/images/qosqo/qosqo-tiradito-leche-de-tigre-aji-amarillo.webp', alt: 'Tiradito de pescado con leche de tigre de ají amarillo en QOSQO', w: 1073, h: 1344, caption: 'Tiradito con leche de tigre de ají amarillo' },
  { src: '/images/qosqo/qosqo-aji-de-gallina.webp', alt: 'Ají de gallina con arroz blanco servido en QOSQO', w: 1200, h: 1600, caption: 'Ají de gallina con arroz blanco' },
  { src: '/images/qosqo/qosqo-plato-salsa-amarilla.webp', alt: 'Plato de pescado con salsa amarilla en QOSQO', w: 1067, h: 1600 },
  { src: '/images/qosqo/qosqo-plato-pescado.webp', alt: 'Plato de pescado servido en QOSQO', w: 1067, h: 1600 },
  { src: '/images/qosqo/qosqo-plato-con-mantel-andino.webp', alt: 'Plato de QOSQO sobre un mantel de colores andinos', w: 1467, h: 978 },
  { src: '/images/qosqo/qosqo-sala-y-postre.webp', alt: 'Postre en primer plano y la sala de QOSQO con murales de colores al fondo', w: 1200, h: 1600 },
];

const COMO_LLEGAR =
  'https://www.google.com/maps/dir/?api=1&destination=QOSQO%2C%20Rua%20dos%20Bacalhoeiros%2026A%2C%20Lisboa%2C%20Portugal';

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
  sameAs: ['https://www.facebook.com/ceviche.portugal', 'https://www.instagram.com/qosqo_lisboa/'],
};

const linkCls = 'font-semibold text-[#0b5c6b] underline underline-offset-4 hover:text-[#08404a]';

export default function QosqoEditorialPreview() {
  return (
    <main id="main-content" className="w-full bg-[#f8f6f1] text-[#1f1f1f]">
      <article className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        <p className="mb-4 inline-block rounded bg-[#1f1f1f] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Colaboración comercial con QOSQO
        </p>
        <p className="mb-6 rounded border border-amber-300 bg-amber-50 px-4 py-3 text-sm">
          Borrador para revisión, fuera del blog y del sitemap. Falta la carta con precios, que el restaurante confirme horario y teléfono, y su permiso escrito para las fotos.
        </p>

        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
          Dónde comer peruano cerca de la Sé de Lisboa: QOSQO
        </h1>

        <figure className="mt-8 overflow-hidden rounded-lg">
          <Image
            src="/images/qosqo/qosqo-plato-principal.webp"
            alt="Plato peruano de QOSQO con brotes, cebolla morada y flores"
            width={1200}
            height={1600}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto max-h-[70vh] w-full object-cover"
          />
          <figcaption className="mt-2 text-xs text-neutral-600">Foto: QOSQO.</figcaption>
        </figure>

        <section aria-label="Datos prácticos" className="mt-8 rounded-lg border border-neutral-300 bg-white p-5 text-base">
          <ul className="space-y-2">
            <li><strong>Dirección:</strong> Rua dos Bacalhoeiros 26A, Lisboa</li>
            <li>
              <strong>Teléfono:</strong>{' '}
              <a className={linkCls} href="tel:+351212418058" rel="sponsored nofollow noopener" data-cta="qosqo-telefono-ficha">+351 21 241 8058</a>
            </li>
            <li>
              <strong>Horario publicado:</strong> de domingo a jueves de 12:00 a 23:00, viernes y sábado de 12:00 a 23:30, según{' '}
              <a className={linkCls} href="https://www.timeout.pt/lisboa/pt/restaurantes/qosqo" target="_blank" rel="noopener">Time Out Lisboa</a>{' '}
              (junio de 2026). Confírmalo antes de ir.
            </li>
            <li><strong>Precios:</strong> pídele la carta al restaurante; aún no tenemos una carta oficial con precios.</li>
          </ul>
          <a
            href={COMO_LLEGAR}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            data-cta="qosqo-como-llegar"
            className="mt-4 inline-block rounded bg-[#0b5c6b] px-4 py-2 font-semibold text-white hover:bg-[#08404a]"
          >
            Cómo llegar a QOSQO
          </a>
        </section>

        <div className="mt-8 space-y-5 text-lg leading-relaxed">
          <p>
            QOSQO está en la Rua dos Bacalhoeiros, junto al Campo das Cebolas. Si andas por la Sé o bajas de Alfama hacia
            Terreiro do Paço y te apetece comer peruano, queda de camino.
          </p>
          <p>
            Este artículo se basa en el material que nos ha enviado el restaurante: platos, fotos y su historia. No es una
            reseña de una visita nuestra.
          </p>

          <h2 className="pt-4 text-2xl font-bold">Qué platos propone QOSQO</h2>
          <p>
            Para abrir, el restaurante destaca los tiraditos de atún o corvina con leche de tigre de ají amarillo: pescado
            crudo en láminas finas, con una salsa cítrica de ají amarillo, un ají peruano. Si no lo conoces,
            pregunta cuánto pica antes de pedir.
          </p>
          <p>
            La causa de pollo a la limeña es un plato frío. Según la descripción de QOSQO, lleva puré de patata, ají
            amarillo y lima, con relleno de pollo.
          </p>
          <p>
            Entre los calientes han elegido el pulpo confitado con puré de camote (boniato) y patatas «ao murro», y la
            costilla de vaca asada con cerveza Cusqueña Negra, puré de choclo (maíz) y arroz jazmín. También el lomo de
            corvina con salsa de ají amarillo, puré de patata, arroz jazmín y katsuobushi (copos de bonito seco).
          </p>
          <p>
            En carne, QOSQO propone el lomo saltado: trozos de lomo de vacuno salteados con verduras, flambeados con pisco
            y con arroz blanco. Y el ají de gallina, gallina deshilachada en una crema de ají amarillo con nueces, también
            con arroz. El restaurante dice que tiene opciones vegetarianas; pregunta por ellas y por los alérgenos al
            reservar.
          </p>

          <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
            {galeria.map((f) => (
              <figure key={f.src}>
                <Image
                  src={f.src}
                  alt={f.alt}
                  width={f.w}
                  height={f.h}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 384px"
                  className="aspect-[4/5] h-auto w-full rounded-lg object-cover"
                />
                <figcaption className="mt-1 text-xs text-neutral-600">
                  {f.caption ? `${f.caption}. ` : ''}Foto: QOSQO.
                </figcaption>
              </figure>
            ))}
          </div>

          <h2 className="pt-4 text-2xl font-bold">Pisco sour y otras bebidas</h2>
          <p>
            Entre las bebidas que nos ha enviado QOSQO están el pisco sour y versiones de mango y maracuyá. También
            mencionan cerveza Cusqueña rubia y negra e Inca Kola.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <figure>
              <Image src="/images/qosqo/qosqo-pisco-sour.webp" alt="Pisco sour sobre un mantel con el logo de QOSQO" width={1280} height={1600} loading="lazy" sizes="(max-width: 640px) 50vw, 384px" className="aspect-[4/5] h-auto w-full rounded-lg object-cover" />
              <figcaption className="mt-1 text-xs text-neutral-600">Pisco sour. Foto: QOSQO.</figcaption>
            </figure>
            <figure>
              <Image src="/images/qosqo/qosqo-bebidas.webp" alt="Dos cócteles servidos en la mesa de QOSQO" width={1280} height={1600} loading="lazy" sizes="(max-width: 640px) 50vw, 384px" className="aspect-[4/5] h-auto w-full rounded-lg object-cover" />
              <figcaption className="mt-1 text-xs text-neutral-600">Foto: QOSQO.</figcaption>
            </figure>
          </div>

          <h2 className="pt-4 text-2xl font-bold">Lo que cuenta el restaurante</h2>
          <p>
            Según QOSQO, tiene dos salas interiores pequeñas y renovó el local a principios de 2026. Su equipo recomienda pedir varios platos al centro para compartir y probar un poco de todo.
            También organiza a veces cenas temáticas con cocineros peruanos invitados; si te interesa, pregunta por las
            próximas fechas.
          </p>

          <h2 className="pt-4 text-2xl font-bold">Dónde está y cómo reservar</h2>
          <p>
            <strong>Dirección:</strong> Rua dos Bacalhoeiros 26A, Lisboa, en la zona del Campo das Cebolas, entre la Sé y
            Terreiro do Paço. En metro puedes llegar hasta{' '}
            <a className={linkCls} href="https://www.metrolisboa.pt/viajar/terreiro-do-paco/" target="_blank" rel="noopener">Terreiro do Paço</a>,
            en la línea azul, y seguir andando hasta la Rua dos Bacalhoeiros.
          </p>
          <MapaZona />
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Consultar disponibilidad por correo:{' '}
              <a className={linkCls} href="mailto:geralqosqo@gmail.com?subject=Reserva%20(desde%20Estaba%20en%20Lisboa)" rel="sponsored nofollow noopener" data-cta="qosqo-email">
                geralqosqo@gmail.com
              </a>
            </li>
            <li>
              Instagram:{' '}
              <a className={linkCls} href={INSTAGRAM} target="_blank" rel="sponsored nofollow noopener" data-cta="qosqo-instagram">
                @qosqo_lisboa
              </a>
            </li>
            <li>
              Teléfono:{' '}
              <a className={linkCls} href="tel:+351212418058" rel="sponsored nofollow noopener" data-cta="qosqo-telefono">
                +351 21 241 8058
              </a>
            </li>
          </ul>
          <p>Todavía no tenemos la carta con precios: pídela al restaurante antes de ir.</p>
        </div>

        <p className="mt-10 border-t border-neutral-300 pt-4 text-sm text-neutral-600">
          Colaboración comercial: artículo patrocinado por QOSQO. Fotografías enviadas por QOSQO; autorización escrita de publicación pendiente. Información
          facilitada por el restaurante en noviembre de 2026; horario y teléfono contrastados con Time Out Lisboa (junio de 2026).
        </p>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd).replace(/</g, '\\u003c') }}
      />
    </main>
  );
}

import type { Metadata } from 'next';
import { ArticleBody } from '@/components/blog/ArticleBody';
import { ArticleFooter } from '@/components/blog/ArticleFooter';
import { ArticleHero } from '@/components/blog/ArticleHero';
import { ArticleSources } from '@/components/blog/ArticleSources';
import { ArticleToc } from '@/components/blog/ArticleToc';
import type { Article } from '@/components/blog/article-types';
import { slugify } from '@/components/blog/article-utils';

/**
 * Vista privada de revisión para Sinchi: NO es un artículo publicado.
 * La ficha no se añade al índice del blog, ni a su catálogo, ni al sitemap.
 *
 * IMPORTANTE: La carta recibida por Gmail el 02-11-2026 es la fuente principal
 * para precios y platos. La galería enlaza fotografías desde la web oficial
 * de Sinchi solo para revisión. Falta su permiso explícito para publicarlas.
 */
export const metadata: Metadata = {
  title: 'Vista previa · Sinchi y el ceviche peruano en Alcântara',
  description: 'Borrador editorial para revisión de Sinchi y Estaba en Lisboa.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

const article: Article = {
  titulo: 'Sinchi Lisboa: ceviche peruano en Alcântara, carta y reservas',
  descripcion: 'Sinchi, restaurante peruano en Alcântara, Lisboa: ceviches, lomo saltado, precios de la carta, dirección y cómo reservar.',
  subtitulo: 'Ceviches, tiraditos, lomo saltado y cocina peruana en Alcântara. Algunos platos destacados y cómo reservar directamente con el restaurante.',
  imagen: '',
  categoria: 'Gastronomía',
  fecha: '2 Nov 2026',
  minutos: 5,
  contenido: [
    {
      tipo: 'parrafo',
      texto: 'Si estás por Alcântara y te provoca comer peruano, hay un restaurante que vale la pena tener localizado: Sinchi. Está en la Rua Luís de Camões y en su carta aparecen ceviches, tiraditos, lomo saltado y arroz chaufa. Es uno de esos sitios donde puedes ir con ganas de pescado y marisco o sentarte a comer un buen plato caliente.',
    },
    {
      tipo: 'parrafo',
      texto: 'La carta tiene bastante donde elegir, así que voy a quedarme con los platos que mejor explican lo que ofrece Sinchi. Los precios que verás más abajo salen del menú que el restaurante compartió directamente con Estaba en Lisboa en noviembre de 2026.',
    },
    { tipo: 'subtitulo', texto: 'Qué encontrarás en la carta de Sinchi' },
    {
      tipo: 'parrafo',
      texto: 'La carta dedica una sección completa al ceviche. El clásico lleva pescado blanco, cebolla morada, choclo, maíz cancha, camote y leche de tigre. También hay versiones con ají amarillo, atún y una interpretación nikkei con salsa de influencia japonesa. Si es tu primera vez con la cocina peruana, el clásico ayuda a entender por qué este plato es tan conocido.',
    },
    {
      tipo: 'parrafo',
      texto: 'El lomo saltado va por otro camino: trozos de ternera hechos al wok con cebolla, tomate, cilantro, soja y vinagre, acompañados de arroz. Es un plato caliente y contundente, una buena alternativa cuando alguien del grupo no quiere pescado crudo.',
    },
    {
      tipo: 'lista',
      items: [
        'Ceviche clásico — 22 €: pescado blanco, cebolla morada, choclo, cancha, camote y leche de tigre.',
        'Ceviche del barrio — 24 €: pescado blanco, pulpo, camarón y calamar.',
        'Lomo saltado — 26 €: ternera salteada al wok, verduras, salsa de soja y arroz.',
        'Yuquitas huancaína — 8 €: yuca frita acompañada de salsa huancaína.',
      ],
    },
    {
      tipo: 'parrafo',
      texto: 'Estos precios son una pequeña referencia de la carta enviada por Sinchi en noviembre de 2026. Para conocer el menú más reciente o preguntar por algún plato, puedes contactar directamente con el restaurante desde su web o por WhatsApp. Así también puedes organizar tu reserva sin intermediarios.',
    },
    { tipo: 'subtitulo', texto: '¿Qué beber? Pisco sour, chicha morada y vinos peruanos' },
    {
      tipo: 'parrafo',
      texto: 'Además de las bebidas habituales, la carta incluye chicha morada, Inca Kola y varias versiones de pisco sour. En el documento de vinos enviado por Sinchi aparecen referencias portuguesas y dos vinos Intipalka del Valle de Ica, en Perú. Es un detalle interesante si quieres acompañar la comida con algo más cercano a la tradición del restaurante.',
    },
    { tipo: 'subtitulo', texto: 'Dónde está Sinchi en Alcântara' },
    {
      tipo: 'parrafo',
      texto: 'Sinchi está en Rua Luís de Camões 90, 1300-360 Lisboa, en Alcântara. Puedes encajar una comida aquí en una jornada por la zona occidental de la ciudad. Si planeas ir, revisa antes su ficha en Google Maps para consultar los horarios del día, incluidos posibles cambios por festivos.',
    },
    { tipo: 'subtitulo', texto: 'Horarios y cómo reservar en Sinchi' },
    {
      tipo: 'parrafo',
      texto: 'Puedes reservar directamente desde la web oficial de Sinchi, donde encontrarás la sección «Reserva». Así contactas con el propio restaurante, sin pasar por otros portales. Si tienes dudas sobre la disponibilidad, también puedes escribirles por WhatsApp al +351 924 385 110. Para comprobar posibles cambios de horarios o festivos, consulta su ficha de Google Maps antes de desplazarte.',
    },
    {
      tipo: 'tabla',
      texto: 'Horarios publicados en la página oficial de Sinchi, consultados el 2 de noviembre de 2026. Pueden cambiar.',
      columnas: ['Día', 'Horario'],
      filas: [
        ['Lunes', '12:00–16:00 · 19:00–23:00'],
        ['Martes', 'Cerrado'],
        ['Miércoles', '12:00–16:00'],
        ['Jueves y viernes', '12:00–16:00 · 19:00–23:00'],
        ['Sábado', '13:00–16:00 · 19:00–23:00'],
        ['Domingo', 'Cerrado'],
      ],
    },
    {
      tipo: 'nota',
      texto: 'Horarios facilitados por la página oficial del restaurante. Para la fecha exacta de tu visita, abre Google Maps y comprueba si hay cambios o festivos. Si los datos de Maps y su web no coinciden, confirma por WhatsApp con Sinchi.',
    },
    { tipo: 'subtitulo', texto: '¿Merece la pena tenerlo en cuenta?' },
    {
      tipo: 'parrafo',
      texto: 'Si lo que te apetece es un ceviche y estás por Alcântara, Sinchi tiene varias versiones para elegir. Y si vas acompañado de alguien que prefiere comer caliente, también hay lomo saltado, arroz chaufa y tallarines. Eso facilita bastante elegir un sitio sin que todo el grupo tenga que pedir lo mismo.',
    },
    {
      tipo: 'parrafo',
      texto: 'Si te interesa probar Sinchi, puedes ver el menú, comprobar los horarios y acceder a su sección de reservas desde la web del propio restaurante. Y si tienes alguna petición especial, escríbeles por WhatsApp antes de ir.',
    },
  ],
};

const headings = article.contenido
  .filter((block) => block.tipo === 'subtitulo' && block.texto)
  .map((block) => ({ title: block.texto!, id: slugify(block.texto!) }));

export default function SinchiEditorialPreview() {
  return (
    <main id="main-content" className="article-page article-v2 bg-background-light">
      <div className="border-b border-border-soft bg-[#F1ECE4]">
        <div className="mx-auto max-w-6xl px-4 py-3 text-xs font-medium tracking-[0.08em] text-text-main sm:text-sm">
          VISTA PREVIA · BORRADOR PARA REVISIÓN · NO PUBLICADO
        </div>
      </div>

      <ArticleHero article={article} authorName="José Tabares" heroImage={null} isEditorialV2 />

      <section className="mx-auto max-w-6xl px-4 pb-6" aria-label="Reserva directa en Sinchi">
        <div className="flex flex-col gap-4 border-y border-border-soft bg-[#F4F0E9] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7B654F]">Reserva directa · Sin intermediarios</p>
            <p className="mt-1 font-display text-xl font-semibold text-text-main">¿Te apetece probar Sinchi?</p>
            <p className="mt-1 text-sm text-text-secondary">Conoce el restaurante y accede a su sección de reservas directamente desde su web.</p>
          </div>
          <div className="flex flex-col gap-2 sm:shrink-0">
            <a
              href="https://sinchi.eatbu.com/?lang=pt"
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-text-main px-6 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-85"
            >
              Ver la web de Sinchi y reservar
            </a>
            <a
              href="https://wa.me/351924385110"
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="text-center text-xs font-medium text-text-secondary underline underline-offset-4 hover:text-text-main"
            >
              ¿Dudas? Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* La galería enlaza fotografías publicadas en el sitio oficial de Sinchi.
          Únicamente revisión noindex: permiso de republicación pendiente. */}
      <section className="mx-auto max-w-6xl px-4 pb-8" aria-label="Galería fotográfica del restaurante Sinchi">
        <div className="grid gap-2.5 md:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
          <figure className="relative aspect-[5/4] overflow-hidden bg-[#E8E1D9] md:aspect-auto md:min-h-[440px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://cdn.website.dish.co/media/ce/3c/8383499/Sinchi-SC1-jpg.jpg" alt="Fotografía de la cocina peruana de Sinchi publicada en su página oficial" width={1080} height={1080} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-5 pb-5 pt-24 text-white sm:px-7 sm:pb-7">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85">Sinchi · Alcântara, Lisboa</span>
              <p className="mt-1.5 max-w-md font-display text-2xl font-semibold leading-tight sm:text-3xl">Una mesa peruana en Lisboa</p>
              <span className="mt-2 block text-xs text-white/85">Fotografía de la web oficial del restaurante</span>
            </figcaption>
          </figure>
          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-1">
            <figure className="relative aspect-square overflow-hidden bg-[#E8E1D9] md:aspect-auto md:min-h-[214px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cdn.website.dish.co/media/7f/f8/8383508/Sinchi-SC2-jpg.jpg" alt="Plato peruano de la galería oficial de Sinchi" width={750} height={750} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </figure>
            <figure className="relative aspect-square overflow-hidden bg-[#E8E1D9] md:aspect-auto md:min-h-[214px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cdn.website.dish.co/media/a6/b4/8383514/Sinchi-SC3-jpg.jpg" alt="Fotografía gastronómica publicada por Sinchi en su web" width={750} height={750} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </figure>
          </div>
        </div>
        <div className="mt-2.5 grid grid-cols-3 gap-2.5">
          <figure className="relative aspect-[4/5] overflow-hidden bg-[#E8E1D9] sm:aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://cdn.website.dish.co/media/f8/33/8383519/Sinchi-SC4-jpg.jpg" alt="Fotografía 4 de la galería de Sinchi Lisboa" width={700} height={700} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </figure>
          <figure className="relative aspect-[4/5] overflow-hidden bg-[#E8E1D9] sm:aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://cdn.website.dish.co/media/8f/4b/8383524/Sinchi-SC5-jpg.jpg" alt="Fotografía 5 de la galería de Sinchi Lisboa" width={700} height={700} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </figure>
          <figure className="relative aspect-[4/5] overflow-hidden bg-[#E8E1D9] sm:aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://cdn.website.dish.co/media/9b/c4/8383529/Sinchi-SC6-jpg.jpg" alt="Fotografía 6 de la galería de Sinchi Lisboa" width={700} height={700} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </figure>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-x-5 gap-y-3 border-b border-border-soft pb-5">
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-text-secondary"><span>Alcântara, Lisboa</span><span>Cocina peruana</span><span>Ceviche clásico: 22 €</span></div>
          <a href="https://sinchi.eatbu.com/?lang=pt" target="_blank" rel="noopener noreferrer" className="text-xs text-text-secondary underline underline-offset-4 hover:text-text-main">Fotografías: web de Sinchi</a>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-text-secondary">Esta vista previa enlaza imágenes publicadas en la página oficial de Sinchi. Antes de publicarlas definitivamente, confirmaremos con el restaurante que autoriza su uso editorial en Estaba en Lisboa.</p>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-10 lg:grid-cols-[1fr,320px]">
          <div className="min-w-0">
            <p className="article-reading mb-5 border-l-2 border-[#B98F68] pl-4 text-sm text-text-secondary">
              Este artículo forma parte de una colaboración comercial con Sinchi. Los platos y precios se han revisado a partir de la carta enviada por el restaurante en noviembre de 2026.
            </p>
            <ArticleBody
              article={article}
              faqs={[]}
              isEditorialV2
              photos={{}}
              seoDescription={article.descripcion}
              takeaways={[]}
            />
            <section className="mt-10 border-t border-border-soft pt-8" aria-label="Mapa y ubicación de Sinchi Lisboa">
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8B735E]">Dónde encontrarlo</p>
                  <h2 className="font-display text-2xl font-semibold text-text-main sm:text-3xl">Sinchi, en Alcântara</h2>
                  <address className="mt-2 not-italic text-sm leading-relaxed text-text-secondary">
                    Rua Luís de Camões 90, 1300-360 Lisboa, Portugal
                  </address>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sinchi%20Cozinha%20Peruana%20Rua%20Lu%C3%ADs%20de%20Cam%C3%B5es%2090%20Lisboa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-border-soft px-4 py-2.5 text-sm font-semibold text-text-main transition-colors hover:bg-[#F4F0EB]"
                >
                  Cómo llegar en Google Maps
                </a>
              </div>
              <div className="overflow-hidden rounded-md border border-border-soft bg-[#F1EEE9]">
                <iframe
                  title="Mapa interactivo de Sinchi, Rua Luís de Camões 90, Alcântara, Lisboa"
                  src="https://maps.google.com/maps?q=Sinchi%20Cozinha%20Peruana%2C%20Rua%20Lu%C3%ADs%20de%20Cam%C3%B5es%2090%2C%201300-360%20Lisboa%2C%20Portugal&z=16&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="block h-[285px] w-full border-0 sm:h-[370px]"
                />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                El mapa indica la dirección publicada por el restaurante. Ábrelo en Google Maps para consultar la ruta y los horarios del día.
              </p>
            </section>

            <section className="article-reading mt-10 border-t border-border-soft pt-7" aria-label="Contactar y reservar en Sinchi">
              <h2 className="font-display text-2xl font-semibold text-text-main">Reserva tu mesa</h2>
              <p className="mt-2 text-text-secondary">
                En la página oficial de Sinchi encontrarás su apartado «Reserva». Para consultar la carta completa actualizada, disponibilidad o alguna petición especial, puedes escribir directamente al restaurante por WhatsApp.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://sinchi.eatbu.com/?lang=pt"
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-text-main px-6 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-85"
                >
                  Reservar directamente con Sinchi
                </a>
                <a
                  href="https://wa.me/351924385110"
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-border-soft px-6 py-3 text-center text-sm font-semibold text-text-main hover:bg-[#F4F0EB]"
                >
                  Consultar por WhatsApp
                </a>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                La reserva se realiza en la web del restaurante, no en Estaba en Lisboa. Consulta en la sección «Reserva» sus opciones y disponibilidad.
              </p>
              <p className="mt-3 text-xs text-text-secondary">Rua Luís de Camões 90, Alcântara, Lisboa · +351 924 385 110</p>
            </section>
            <div className="mt-10">
              <ArticleSources
                verifiedDate="2026-11-02"
                sources={[
                  { label: 'Sinchi: web y datos de contacto', href: 'https://sinchi.eatbu.com/?lang=pt' },
                  { label: 'Google Maps: ubicación y consulta de horarios actuales', href: 'https://www.google.com/maps/search/?api=1&query=Sinchi%20Cozinha%20Peruana%20Rua%20Lu%C3%ADs%20de%20Cam%C3%B5es%2090%20Lisboa' },
                  { label: 'Consulado del Perú: restaurantes peruanos en Lisboa', href: 'https://www.consulado.pe/es/Lisboa/Lists/RestaurantesPeruanos/DispForm.aspx?ContentTypeId=0x0100E1004E32DD4B264D8928886040921D86&ID=16' },
                ]}
              />
              <p className="article-reading mt-3 text-xs text-text-secondary">
                Fuente adicional: cartas de comida y vino enviadas directamente por Sinchi el 2 de noviembre de 2026.
              </p>
              <ArticleFooter authorName="José Tabares" />
            </div>
          </div>
          <ArticleToc headings={headings} />
        </div>
      </div>
    </main>
  );
}

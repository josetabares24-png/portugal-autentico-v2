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
  titulo: 'Dónde comer ceviche peruano en Alcântara: Sinchi, Lisboa',
  descripcion: 'Sinchi, restaurante peruano en Alcântara, Lisboa: ceviches, lomo saltado, precios de la carta, dirección y cómo reservar.',
  subtitulo: 'Ceviches, tiraditos, lomo saltado y una carta que lleva los sabores peruanos hasta Alcântara. Esto es lo que puedes pedir, lo que cuesta y cómo reservar.',
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
        'Ceviche clásico: pescado blanco, cebolla morada, choclo, cancha, camote y leche de tigre.',
        'Ceviche del barrio: incorpora pescado blanco, pulpo, camarón y calamar.',
        'Lomo saltado: carne salteada al wok, verduras, salsa de soja y arroz.',
        'Pulpo al olivo: pulpo con salsa de aceitunas peruanas, palta y tomate cherry.',
        'Yucas a la huancaína: yuca frita con una salsa cremosa de ají amarillo.',
        'Arroz chaufa: arroz al wok con huevo y pollo o camarones.',
      ],
    },
    { tipo: 'subtitulo', texto: 'Precios de la carta de Sinchi' },
    {
      tipo: 'parrafo',
      texto: 'Estos son algunos precios de la carta que el restaurante nos facilitó para preparar el artículo. Son una referencia de noviembre de 2026; conviene confirmarlos al reservar porque pueden cambiar.',
    },
    {
      tipo: 'tabla',
      texto: 'Selección de platos y precios facilitados por Sinchi en noviembre de 2026',
      columnas: ['Plato', 'Precio'],
      filas: [
        ['Yuquitas huancaína', '8 €'],
        ['Pulpo al olivo', '20 €'],
        ['Ceviche clásico', '22 €'],
        ['Ceviche al ají amarillo', '22 €'],
        ['Ceviche del barrio', '24 €'],
        ['Lomo saltado', '26 €'],
        ['Arroz chaufa de pollo', '20 €'],
        ['Trío de ceviches', '38 €'],
        ['Pisco sour tradicional', '10 €'],
      ],
    },
    {
      tipo: 'parrafo',
      texto: 'No es una propuesta para comer por muy poco dinero, pero puedes calcular el presupuesto antes de ir. TheFork señala un precio medio orientativo de 26 € por persona, aunque depende de lo que pidas y de las bebidas.',
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
      texto: 'El propio restaurante nos confirmó que atiende llamadas y WhatsApp en el +351 924 385 110. También tiene página web, sinchi.eatbu.com, y puedes consultar sus opciones de reserva en TheFork. Los horarios publicados en internet no coinciden entre sí; para comprobar los horarios actuales y las excepciones de festivos, abre su ficha en Google Maps antes de ir.',
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
      texto: 'Como referencia externa, TheFork mostraba el 2 de noviembre de 2026 una puntuación de 9,7 sobre 10 y más de 330 opiniones. Esa valoración puede cambiar y no sustituye una visita propia. Si te interesa probarlo, revisa la carta actual y reserva directamente con el restaurante.',
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
            <section className="article-reading mt-10 border-t border-border-soft pt-7" aria-label="Contactar y reservar en Sinchi">
              <h2 className="font-display text-2xl font-semibold text-text-main">Reserva tu mesa</h2>
              <p className="mt-2 text-text-secondary">
                Comprueba los horarios del día en Google Maps y reserva directamente con Sinchi. También puedes mirar su web o TheFork.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/351924385110"
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-text-main px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85"
                >
                  Escribir a Sinchi por WhatsApp
                </a>
                <a
                  href="https://www.thefork.pt/restaurante/sinchi-cozinha-peruana-r831205"
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-border-soft px-5 py-3 text-sm font-semibold text-text-main hover:bg-[#F4F0EB]"
                >
                  Consultar Sinchi en TheFork
                </a>
                <a
                  href="https://sinchi.eatbu.com/?lang=pt"
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-border-soft px-5 py-3 text-sm font-semibold text-text-main hover:bg-[#F4F0EB]"
                >
                  Página web de Sinchi
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sinchi%20Cozinha%20Peruana%20Rua%20Lu%C3%ADs%20de%20Cam%C3%B5es%2090%20Lisboa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-border-soft px-5 py-3 text-sm font-semibold text-text-main hover:bg-[#F4F0EB]"
                >
                  Horarios actualizados en Google Maps
                </a>
              </div>
              <p className="mt-3 text-xs text-text-secondary">Rua Luís de Camões 90, Alcântara, Lisboa · +351 924 385 110</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Sinchi%20Cozinha%20Peruana%20Rua%20Lu%C3%ADs%20de%20Cam%C3%B5es%2090%20Lisboa" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm underline underline-offset-4">Cómo llegar con Google Maps</a>
            </section>
            <div className="mt-10">
              <ArticleSources
                verifiedDate="2026-11-02"
                sources={[
                  { label: 'Sinchi: web y datos de contacto', href: 'https://sinchi.eatbu.com/?lang=pt' },
                  { label: 'Google Maps: ubicación y consulta de horarios actuales', href: 'https://www.google.com/maps/search/?api=1&query=Sinchi%20Cozinha%20Peruana%20Rua%20Lu%C3%ADs%20de%20Cam%C3%B5es%2090%20Lisboa' },
                  { label: 'TheFork: carta y opiniones de Sinchi', href: 'https://www.thefork.pt/restaurante/sinchi-cozinha-peruana-r831205' },
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

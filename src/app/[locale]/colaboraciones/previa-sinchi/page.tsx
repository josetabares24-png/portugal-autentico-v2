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
 * para precios y platos. Las imágenes de TheFork/Instagram se han identificado
 * como candidatas visuales, pero NO se reproducen sin permiso para republicar.
 */
export const metadata: Metadata = {
  title: 'Vista previa · Sinchi y el ceviche peruano en Alcântara',
  description: 'Borrador editorial para revisión de Sinchi y Estaba en Lisboa.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

const article: Article = {
  titulo: 'Dónde comer ceviche peruano en Alcântara: Sinchi, Lisboa',
  descripcion: 'Sinchi, restaurante peruano en Alcântara, Lisboa: ceviches, lomo saltado, precios de la carta, dirección y cómo reservar.',
  subtitulo: 'Un restaurante de cocina peruana en la Rua Luís de Camões. Qué platos encontrarás, cuánto cuestan y cómo reservar si estás por Alcântara.',
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
      texto: 'El ceviche es uno de los motivos más claros para elegir Sinchi. La versión clásica combina pescado blanco con cebolla morada, choclo, maíz cancha, camote y leche de tigre. Si prefieres algo diferente, también hay ceviche al ají amarillo, ceviche de atún y una versión nikkei con salsa de influencia japonesa.',
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
      texto: 'El restaurante está en Rua Luís de Camões 90, 1300-360 Lisboa, en Alcântara. Es una zona que puedes encajar en un día dedicado a la parte occidental de Lisboa. Si vas expresamente, guarda la dirección exacta y comprueba el horario antes de salir.',
    },
    { tipo: 'subtitulo', texto: 'Cómo reservar en Sinchi' },
    {
      tipo: 'parrafo',
      texto: 'El restaurante nos confirmó que atiende llamadas y WhatsApp en el +351 924 385 110. También dispone de una ficha en TheFork para consultar su carta, fotografías y las opciones de reserva que estén habilitadas en cada momento.',
    },
    {
      tipo: 'nota',
      texto: 'Los horarios publicados en diferentes directorios pueden no coincidir. Para evitar un viaje en vano, confirma por WhatsApp el día y la hora en que quieres ir, especialmente si vas a comer fuera del horario habitual.',
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

      <div className="mx-auto max-w-6xl px-4 pb-3">
        <figure className="relative overflow-hidden border border-border-soft bg-[#EFE7D9]">
          <div className="flex min-h-[220px] flex-col items-start justify-end gap-2 px-6 py-8 sm:min-h-[320px] sm:px-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#836F5D]">Fotografía editorial pendiente</span>
            <p className="max-w-xl font-display text-2xl font-semibold text-[#45372D] sm:text-4xl">
              Ceviche peruano, en Alcântara.
            </p>
            <p className="max-w-xl text-sm text-[#6D5D4F]">
              Portada reservada para una foto real de Sinchi, tras confirmar autorización de uso.
            </p>
          </div>
        </figure>
        <p className="mt-3 text-xs text-text-secondary">
          Selección fotográfica pendiente de autorización: ceviche clásico, lomo saltado e interior del restaurante.
          <a href="https://www.thefork.pt/restaurante/sinchi-cozinha-peruana-r831205" target="_blank" rel="noopener noreferrer" className="ml-1 underline underline-offset-2">
            Ver fotografías de referencia en TheFork
          </a>.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-10 lg:grid-cols-[1fr,320px]">
          <div className="min-w-0">
            <p className="article-reading mb-6 text-xs text-text-secondary">
              Colaboración comercial con Sinchi · Información de carta proporcionada por el restaurante.
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
                Para consultar disponibilidad, horario o dudas sobre la carta, habla con el restaurante directamente.
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
              </div>
              <p className="mt-3 text-xs text-text-secondary">Rua Luís de Camões 90, Alcântara, Lisboa · +351 924 385 110</p>
            </section>
            <div className="mt-10">
              <ArticleSources
                verifiedDate="2026-11-02"
                sources={[
                  { label: 'Sinchi: web y datos de contacto', href: 'https://sinchi.eatbu.com/?lang=pt' },
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

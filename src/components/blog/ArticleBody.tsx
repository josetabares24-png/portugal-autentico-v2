import { Fragment } from 'react';
import TrackedInternalLink from '@/components/TrackedInternalLink';
import type {
  Article,
  ArticleExtras,
  ArticleFaq,
  SectionPhoto,
} from './article-types';
import { ArticleBookingBlock, type ArticleBookingBlockProps } from './ArticleBookingBlock';
import { ArticleCallout } from './ArticleCallout';
import { ArticleFigure } from './ArticleFigure';
import { renderEditorialHeading, slugify } from './article-utils';

type ArticleBodyProps = {
  article: Article;
  extras?: ArticleExtras;
  faqs: ArticleFaq[];
  isEditorialV2: boolean;
  photos: Record<string, SectionPhoto>;
  seoDescription: string;
  takeaways: string[];
  /**
   * Bloques de reserva ya resueltos en el servidor. Se pintan antes del
   * encabezado indicado (al cierre de la sección que los justifica); los que
   * no encuentran su encabezado caen al final del cuerpo.
   */
  bookings?: (ArticleBookingBlockProps & { beforeHeading?: string; position?: 'after-summary' })[];
  /** Propiedad heredada por compatibilidad; sin formulario mientras la newsletter esté pausada. */
  newsletterSlug?: string;
};

export function ArticleBody({
  article,
  extras,
  faqs,
  isEditorialV2,
  photos,
  seoDescription,
  takeaways,
  bookings = [],
}: ArticleBodyProps) {
  const headingIds = new Set(
    article.contenido
      .filter((b) => (b.tipo === 'subtitulo' || b.tipo === 'subseccion') && b.texto)
      .map((b) => slugify(b.texto as string)),
  );
  /*
   * Bloque de arriba (`position: 'after-summary'`): solo en las páginas donde
   * la siguiente decisión del lector es comprar (ver blog-booking-placements).
   * Como mucho uno, y nunca antes del contenido: se pinta al cerrar la primera
   * sección que tenga texto propio (antes del primer subtítulo que viene
   * después de un párrafo del cuerpo). Si hubiera más de uno marcado arriba,
   * el resto baja al final del cuerpo.
   */
  const topBooking = bookings.find((b) => b.position === 'after-summary');
  const bodyBookings = bookings.filter((b) => b !== topBooking);
  const bodyBlocks = article.contenido.slice(1);
  const firstBodyParagraph = bodyBlocks.findIndex((b) => b.tipo === 'parrafo');
  const topBookingIndex = !topBooking || firstBodyParagraph === -1
    ? -1
    : bodyBlocks.findIndex(
        (b, i) => i > firstBodyParagraph && (b.tipo === 'subtitulo' || b.tipo === 'subseccion'),
      );
  // Sin subtítulo después del primer párrafo: justo detrás de ese párrafo.
  const topBookingAfter = topBooking && topBookingIndex === -1 && firstBodyParagraph !== -1
    ? firstBodyParagraph
    : -1;
  const isLowered = (b: (typeof bookings)[number]) => b.position === 'after-summary';
  const bookingsBefore = (headingId: string) =>
    bodyBookings
      .filter((b) => !isLowered(b) && b.beforeHeading === headingId)
      .map((b) => renderBooking(b));
  const trailingBookings = [
    ...(topBooking && topBookingIndex === -1 && topBookingAfter === -1 ? [topBooking] : []),
    ...bodyBookings.filter(
      (b) => isLowered(b) || !b.beforeHeading || !headingIds.has(b.beforeHeading),
    ),
  ];
  // La nota de afiliado sale una vez por artículo, en el primer bloque que se
  // ve al bajar (el de arriba si existe).
  const firstBookingId = topBooking?.contentId
    ?? bodyBlocks
      .flatMap((b) =>
        b.tipo === 'subtitulo' || b.tipo === 'subseccion'
          ? bodyBookings.filter((x) => !isLowered(x) && x.beforeHeading === slugify(b.texto || ''))
          : [],
      )[0]?.contentId
    ?? trailingBookings[0]?.contentId;
  const renderBooking = (b: (typeof bookings)[number]) => (
    <ArticleBookingBlock key={b.contentId} {...b} disclosure={b.contentId === firstBookingId ? 'full' : 'short'} />
  );
  const renderBlock = (bloque: (typeof bodyBlocks)[number], index: number) => {
    if (bloque.tipo === 'parrafo') {
      const paragraphIndex = article.contenido
        .slice(1, index + 1)
        .filter((item) => item.tipo === 'parrafo').length;
      // Cada 3 párrafos, añadir destacado estilo cita.
      // En la maquetación v2 no se aplica: convertía en cita un
      // párrafo corriente solo por su posición.
      if (!isEditorialV2 && paragraphIndex % 4 === 0 && bloque.texto && bloque.texto.length > 50) {
        return (
          <blockquote key={index} className="article-quote border-l-4 border-gold">
            <p>
              {bloque.texto}
            </p>
          </blockquote>
        );
      }
      return (
        <p key={index}>
          {bloque.texto}
        </p>
      );
    }
    if (bloque.tipo === 'subtitulo') {
      const headingId = slugify(bloque.texto || '');
      const photo = isEditorialV2 ? photos[headingId] : undefined;
      return (
        <Fragment key={index}>
          {bookingsBefore(headingId)}
          <h2 id={headingId} className="scroll-mt-28">
            {isEditorialV2 ? renderEditorialHeading(bloque.texto || '') : bloque.texto}
          </h2>
          {photo && <ArticleFigure photo={photo} />}
        </Fragment>
      );
    }
    if (bloque.tipo === 'subseccion') {
      const headingId = slugify(bloque.texto || '');
      return (
        <Fragment key={index}>
          {bookingsBefore(headingId)}
          <h3 id={headingId} className="scroll-mt-28">
            {bloque.texto}
          </h3>
        </Fragment>
      );
    }
    if (bloque.tipo === 'lista') {
      return (
        <ul key={index} className="article-list">
          {bloque.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-terracotta mt-0.5 flex-shrink-0">&#10003;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }
    if (bloque.tipo === 'tip') {
      return (
        <ArticleCallout
          key={index}
          label="Tip local"
          className="article-info-box article-tip border-l-2 border-gold"
        >
          <p>{bloque.texto}</p>
        </ArticleCallout>
      );
    }
    if (bloque.tipo === 'nota') {
      return (
        <ArticleCallout key={index} label="Dato verificado">
          <p>{bloque.texto}</p>
        </ArticleCallout>
      );
    }
    // Lista personal de José, con enlaces a las páginas del sitio.
    if (bloque.tipo === 'personal' && bloque.label && bloque.enlaces?.length) {
      return (
        <ArticleCallout
          key={index}
          label={bloque.label}
          className="article-info-box article-tip border-l-2 border-gold"
        >
          {bloque.texto ? <p>{bloque.texto}</p> : null}
          <ul className="mt-2 space-y-1.5">
            {bloque.enlaces.map((link) => (
              <li key={link.href + link.label}>
                <TrackedInternalLink
                  href={link.href}
                  contentType="article_personal_link"
                  contentId={link.href}
                  className="underline underline-offset-2 hover:text-terracotta"
                >
                  {link.label}
                </TrackedInternalLink>
              </li>
            ))}
          </ul>
        </ArticleCallout>
      );
    }
    // Advertencia sobre el estado de un lugar: cierres, obras o
    // cualquier cosa que convenga comprobar antes de ir. Reutiliza
    // los estilos de `nota`; solo cambia la etiqueta.
    if (bloque.tipo === 'aviso') {
      return (
        <ArticleCallout key={index} label="Antes de ir">
          <p>{bloque.texto}</p>
        </ArticleCallout>
      );
    }
    // Comparativas con datos (precios, opciones). En pantallas
    // estrechas (<640px) cada fila se apila como una tarjeta y cada
    // celda muestra su cabecera (data-label), sin scroll horizontal.
    if (bloque.tipo === 'tabla' && bloque.columnas && bloque.filas) {
      return (
        <div key={index} className="article-table-wrap">
          <table className="article-table">
            {bloque.texto ? <caption>{bloque.texto}</caption> : null}
            <thead>
              <tr>
                {bloque.columnas.map((col, i) => (
                  <th key={i} scope="col">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bloque.filas.map((fila, r) => (
                <tr key={r}>
                  {fila.map((celda, c) =>
                    c === 0 ? (
                      <th key={c} scope="row">{celda}</th>
                    ) : (
                      <td key={c} data-label={bloque.columnas?.[c] ?? ''}>{celda}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    /*
     * Sugerencia dentro del texto, para los free tours. Va deliberadamente
     * sobria —un filete lateral y un enlace, sin botón ni fondo— porque
     * aparece en mitad de la lectura y un banner ahí resta credibilidad
     * al artículo. Enlaza siempre a una sección de la web propia, nunca
     * a un afiliado directo.
     */
    if (bloque.tipo === 'enlace' && bloque.href && bloque.label) {
      return (
        <aside key={index} className="article-inline-cta border-l-2 border-terracotta">
          {bloque.texto ? <p>{bloque.texto}</p> : null}
          <TrackedInternalLink
            href={bloque.href}
            contentType="article_inline_link"
            contentId={bloque.href}
            className="article-inline-cta-link"
          >
            {bloque.label} →
          </TrackedInternalLink>
        </aside>
      );
    }
    return null;
  };

  return (
    <article className="article-surface min-w-0">
      {/* Lead paragraph - primer párrafo destacado */}
      <p className="article-lead">
        {article.contenido.find(b => b.tipo === 'parrafo')?.texto || seoDescription}
      </p>

      {/* Resumen */}
      {takeaways.length > 0 && (
        <ArticleCallout
          label="Lo esencial"
          className="article-info-box article-reading border-l-2 border-gold"
          labelClassName="article-box-label uppercase tracking-widest mb-3"
        >
          <ul className="article-list article-list-compact">
            {takeaways.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-terracotta mt-0.5 flex-shrink-0">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ArticleCallout>
      )}

      {/* Cómo llegar / Mejor hora */}
      {(extras?.comoLlegar || extras?.mejorHora) && (
        <div className="article-facts article-reading border-t border-border-soft grid sm:grid-cols-2 gap-6">
          {extras.comoLlegar && (
            <div>
              <h2 id="como-llegar" className="scroll-mt-28">Cómo llegar</h2>
              <p>{extras.comoLlegar}</p>
            </div>
          )}
          {extras.mejorHora && (
            <div>
              <h2 id="mejor-hora" className="scroll-mt-28">Mejor hora para ir</h2>
              <p>{extras.mejorHora}</p>
            </div>
          )}
        </div>
      )}

      {/* Contenido del artículo */}
      <div className="article-content article-reading">
        {bodyBlocks.map((bloque, index) => {
          const top = topBooking && index === topBookingIndex ? renderBooking(topBooking) : null;
          const afterTop = topBooking && index === topBookingAfter ? renderBooking(topBooking) : null;
          if (top || afterTop) {
            return (
              <Fragment key={`block-${index}`}>
                {top}
                {renderBlock(bloque, index)}
                {afterTop}
              </Fragment>
            );
          }
          return renderBlock(bloque, index);
        })}
        {trailingBookings.map(renderBooking)}
      </div>

      {faqs.length > 0 && (
        <>
          <hr className="my-12 border-border-soft" />
          <section className="article-faq article-reading">
            <h3>Preguntas frecuentes</h3>
            <div className="space-y-0">
              {faqs.map((faq, i) => (
                <details key={i} className="group border-t border-border-soft">
                  <summary className="flex items-start justify-between cursor-pointer gap-4">
                    <h4>{faq.q}</h4>
                    <span className="article-faq-icon flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="article-faq-answer">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </>
      )}
    </article>
  );
}

import { Fragment } from 'react';
import Link from 'next/link';
import type {
  Article,
  ArticleExtras,
  ArticleFaq,
  SectionPhoto,
} from './article-types';
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
};

export function ArticleBody({
  article,
  extras,
  faqs,
  isEditorialV2,
  photos,
  seoDescription,
  takeaways,
}: ArticleBodyProps) {
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
        {article.contenido.slice(1).map((bloque, index) => {
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
              <h3
                key={index}
                id={headingId}
                className="scroll-mt-28"
              >
                {bloque.texto}
              </h3>
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
                <Link href={bloque.href} className="article-inline-cta-link">
                  {bloque.label} →
                </Link>
              </aside>
            );
          }
          return null;
        })}
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

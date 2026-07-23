import Icon from '@/components/Icon';
import type { TimelineStop as TimelineStopType } from '@/data/itineraries';

interface EditorialTimelineStopProps extends TimelineStopType {
  id: string;
  index: number;
  isLast?: boolean;
}

function splitIntoParagraphs(text: string) {
  const sentences = text
    .match(/[^.!?]+[.!?]+(?=\s+[A-ZÁÉÍÓÚÑ¿¡]|$)|[^.!?]+$/g)
    ?.map((sentence) => sentence.trim())
    .filter(Boolean) ?? [text];

  const paragraphs: string[] = [];

  for (let i = 0; i < sentences.length; i += 2) {
    paragraphs.push(sentences.slice(i, i + 2).join(' '));
  }

  return paragraphs;
}

export function EditorialTimelineStop({
  id,
  time,
  title,
  description,
  tip,
  type,
  index,
  isLast = false,
  googleMapsUrl,
  coordinates,
}: EditorialTimelineStopProps) {
  const [introParagraph, ...detailParagraphs] = splitIntoParagraphs(description);
  const stopLabel = type === 'food' ? 'Gastronomía' : 'Visita';

  return (
    <article id={id} className="relative scroll-mt-32 pb-7 md:pb-9">
      {!isLast && (
        <div
          className="absolute left-[1.18rem] top-12 bottom-0 w-px bg-terracotta/25"
          aria-hidden="true"
        />
      )}

      <div className="grid grid-cols-[2.5rem,minmax(0,1fr)] gap-3 sm:gap-5">
        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-sm font-bold text-white shadow-sm">
          {index + 1}
        </div>

        <div className="rounded-[1.25rem] border border-border-soft bg-white/90 p-5 shadow-sm md:p-7">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-terracotta/10 px-3 py-1 text-xs font-semibold text-terracotta">
              {time}
            </span>
            <span className="rounded-full border border-border-soft px-3 py-1 text-xs font-semibold text-text-secondary">
              {stopLabel}
            </span>
          </div>

          <h2 className="font-display italic text-2xl leading-tight text-text-main sm:text-3xl">
            {title}
          </h2>

          <div className="mt-5 max-w-3xl space-y-5">
            <section aria-label={`Introducción de ${title}`}>
              <p className="text-[15.5px] leading-[1.72] text-[#2f3744] sm:text-base">
                {introParagraph}
              </p>
            </section>

            {detailParagraphs.length > 0 && (
              <section aria-label={`Qué ver en ${title}`}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-text-secondary">
                  Qué ver
                </p>
                <div className="space-y-4">
                  {detailParagraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[15.5px] leading-[1.72] text-[#2f3744] sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="mt-6 rounded-2xl border border-terracotta/25 bg-terracotta/5 p-4">
            <div className="flex gap-3">
              <Icon name="lightbulb" size={18} className="mt-0.5 flex-shrink-0 text-terracotta" />
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-terracotta">
                  Consejo local
                </p>
                <p className="text-sm leading-[1.7] text-[#374151]">
                  {tip}
                </p>
              </div>
            </div>
          </aside>

          {googleMapsUrl && (
            <div className="mt-5 rounded-2xl border border-border-soft bg-background-light/70 p-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-terracotta/30 px-4 py-3 text-sm font-semibold text-terracotta transition-colors hover:border-terracotta hover:bg-terracotta/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta sm:w-auto"
              >
                <Icon name="map" size={16} />
                Abrir en Google Maps
                <Icon name="open_in_new" size={14} />
              </a>

              {coordinates && (
                <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                  Coordenadas: {coordinates.lat.toFixed(4)}, {coordinates.lng.toFixed(4)}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

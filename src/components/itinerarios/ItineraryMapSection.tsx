import { PremiumContent } from '@/components/itinerarios/PremiumContent';
import type { ItineraryDay } from '@/lib/itinerary-days';

/*
 * Presentación del mapa.
 *
 * El mapa no cambia: sigue siendo `ItineraryMap` (Leaflet, `ssr: false`, carga
 * diferida a través de `PremiumContent`). Lo que cambia es lo que hay
 * alrededor: antes aparecía sin más, y ahora se dice qué zonas cubre y cuántas
 * paradas tiene cada día, para que se entienda de un vistazo si esa mancha de
 * marcadores es un paseo o tres jornadas.
 *
 * El resumen por día se calcula de las paradas reales, no se escribe a mano.
 */

interface ItineraryMapSectionProps {
  dias: ItineraryDay[];
  mapTitle: string;
  mapDescription: string;
  guideTitle: string;
}

export function ItineraryMapSection({
  dias,
  mapTitle,
  mapDescription,
  guideTitle,
}: ItineraryMapSectionProps) {
  const coordinates = dias
    .flatMap((d) => d.stops)
    .filter((s) => s.coordinates)
    .map((s) => s.coordinates!);

  if (coordinates.length === 0) return null;

  return (
    /*
     * El mapa y los recursos útiles llegan de `PremiumContent`, que ya trae
     * sus propias secciones. Por eso la presentación se cierra antes y no los
     * envuelve: anidar secciones dentro de secciones enturbia el esquema del
     * documento sin ganar nada.
     */
    <>
      <section id="mapa" className="scroll-mt-20 border-t border-border-soft bg-background-light pt-12 md:pt-16">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <h2 className="mb-1.5 font-display text-2xl font-semibold not-italic leading-tight text-text-main md:text-[1.75rem]">
            La ruta en el mapa
          </h2>
          <p className="mb-6 max-w-[62ch] font-body text-[15px] leading-relaxed text-text-secondary">
            Las {coordinates.length} paradas del itinerario, numeradas en el mismo orden en que
            aparecen aquí arriba.
          </p>

          <ul className="grid gap-3 sm:grid-cols-3">
            {dias.map((dia) => (
              <li key={dia.day} className="border-l-2 border-border-soft pl-3">
                <p className="font-body text-[11px] font-semibold uppercase tracking-widest text-terracotta">
                  Día {dia.day}
                </p>
                <p className="font-body text-sm leading-snug text-text-main">{dia.title}</p>
                <p className="font-body text-xs text-text-secondary">
                  {dia.stops.filter((s) => s.coordinates).length} puntos
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PremiumContent
        coordinates={coordinates}
        mapTitle={mapTitle}
        mapDescription={mapDescription}
        guideTitle={guideTitle}
      />
    </>
  );
}

'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { activities, ACTIVITY_CATEGORIES, ActivityCategory } from '@/data/activities';
import { ActivityCard } from '@/components/actividades/ActivityCard';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { ExperienceSearch } from '@/components/ExperienceSearch';
import { FilterChip } from '@/components/FilterChip';
import Icon from '@/components/Icon';
import { PageIntro } from '@/components/PageIntro';
import { coincide } from '@/lib/search';

type PriceFilter = 'todas' | 'gratis' | 'pago';

// Accesos destacados a la landing de free tours. Se enlaza a la página
// interna (con el ancla de cada ruta), no directamente al afiliado: los
// enlaces afiliados viven centralizados en /free-tours-lisboa.
const FREE_TOUR_HIGHLIGHTS = [
  { anchor: 'ruta-imprescindible', name: 'Centro histórico', icon: 'attractions' },
  { anchor: 'ruta-alfama', name: 'Alfama', icon: 'directions_walk' },
  { anchor: 'ruta-belem', name: 'Belém', icon: 'sailing' },
] as const;

export default function ActividadesPage() {
  const [category, setCategory] = useState<ActivityCategory | 'Todas'>('Todas');
  const [price, setPrice] = useState<PriceFilter>('todas');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return activities.filter((a) => {
      const matchesCategory = category === 'Todas' || a.category === category;
      const matchesPrice = price === 'todas' || (price === 'gratis' ? a.isFree : !a.isFree);
      /*
       * La búsqueda mira también la zona y la etiqueta de precio, no sólo el
       * título: así «alfama» encuentra por barrio y «gratis» por precio, que
       * es como busca la gente. Combina con los filtros en lugar de
       * sustituirlos.
       */
      const matchesQuery = coincide(query, [
        a.title,
        a.category,
        a.zone,
        a.description,
        a.priceLabel,
        a.isFree ? 'gratis' : 'de pago',
      ]);
      return matchesCategory && matchesPrice && matchesQuery;
    });
  }, [category, price, query]);

  const hayFiltros = query !== '' || category !== 'Todas' || price !== 'todas';
  const limpiarTodo = () => {
    setQuery('');
    setCategory('Todas');
    setPrice('todas');
  };

  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Actividades"
        title="Lisboa sin gastar mucho"
        description="Cada actividad con su precio real, su duración y un tip de ahorro de local."
      />

      {/* Free tours: bloque editorial destacado, visualmente separado del
          catálogo para que no se lea como una actividad más ni como
          publicidad de un proveedor. */}
      <section className="bg-background-light py-10 border-b border-border-soft">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-xl bg-night px-6 py-8 md:px-9 md:py-9">
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-terracotta to-gold" />

            <div className="md:flex md:items-start md:justify-between md:gap-10">
              <div className="md:max-w-md">
                <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                  <span aria-hidden="true" className="h-px w-5 bg-gold/70" />
                  Empieza por aquí
                </p>
                <h2 className="mb-3 font-display text-2xl font-semibold not-italic leading-tight text-white md:text-3xl">
                  Descubre Lisboa con un free tour
                </h2>
                <p className="text-sm leading-relaxed text-white/75">
                  Una buena opción para entender la ciudad durante el primer día y
                  después recorrerla por tu cuenta con más contexto.
                </p>
              </div>

              <div className="mt-7 md:mt-0 md:flex-1">
                <ul className="mb-6 divide-y divide-white/10 border-y border-white/10">
                  {FREE_TOUR_HIGHLIGHTS.map((item) => (
                    <li key={item.anchor}>
                      <Link
                        href={`/free-tours-lisboa#${item.anchor}`}
                        className="group flex min-h-11 items-center justify-between gap-4 py-3 text-white transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                      >
                        <span className="flex items-center gap-2.5">
                          <Icon name={item.icon} size={16} className="flex-shrink-0 text-gold" />
                          <span className="text-sm font-medium">{item.name}</span>
                        </span>
                        <Icon
                          name="arrow_forward"
                          size={16}
                          className="flex-shrink-0 text-white/40 motion-safe:transition-transform group-hover:translate-x-1 group-hover:text-gold"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link href="/free-tours-lisboa" className="btn-primary w-full sm:w-auto">
                  Comparar todos los free tours
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros.

          Fija sólo de tablet en adelante. En un móvil de 375 px esta barra
          mide 235 px y, sumada a la cabecera, dejaba 300 px de pantalla
          permanentemente ocupados: el 37 % del alto, y hasta el 45 % en un
          móvil de 360. La culpa es de las ocho categorías, que no caben en
          una línea y se parten en varias. Suelta en móvil, se recupera esa
          pantalla y los filtros siguen donde estaban. */}
      <section className="bg-background-light py-5 border-b border-border-soft static sm:sticky sm:top-16 z-10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Buscar y filtrar en la misma zona, no como dos interfaces
              pegadas: el campo arriba, los filtros justo debajo. */}
          <ExperienceSearch
            id="buscar-actividades"
            value={query}
            onChange={setQuery}
            label="Buscar actividades en Lisboa"
            placeholder="Buscar actividades en Lisboa…"
            className="mb-3 max-w-2xl"
          />

          <div className="flex flex-wrap gap-1.5">
            {(['Todas', ...ACTIVITY_CATEGORIES] as const).map((c) => (
              <FilterChip
                key={c}
                active={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </FilterChip>
            ))}
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            {([
              { id: 'todas', label: 'Cualquier precio' },
              { id: 'gratis', label: 'Gratis' },
              { id: 'pago', label: 'De pago' },
            ] as const).map((opt) => (
              <FilterChip
                key={opt.id}
                active={price === opt.id}
                tone="secondary"
                onClick={() => setPrice(opt.id)}
              >
                {opt.label}
              </FilterChip>
            ))}

            {hayFiltros && (
              <button
                type="button"
                onClick={limpiarTodo}
                className="filter-clear"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section className="bg-background-light py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <p className="mb-5 font-article text-xs text-text-secondary" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? 'actividad' : 'actividades'}
          </p>
          {filtered.length > 0 ? (
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((activity) => (
                <ActivityCard key={activity.slug} activity={activity} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-border-soft bg-white p-8 text-center">
              <p className="mb-4 font-article text-text-main">
                No encontramos actividades con esa búsqueda.
              </p>
              <button
                type="button"
                onClick={limpiarTodo}
                className="btn-secondary btn-lg"
              >
                Limpiar búsqueda
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Paso al hub transaccional.

          Aquí NO van widgets. Esta página es para descubrir qué hacer en
          Lisboa, y el módulo de reserva de un proveedor compitiendo con
          nuestras fichas convertía el catálogo en un escaparate. Los seis
          widgets viven en `/comprar-entradas`, una sola vez.

          Esto no sustituye a nada: las fichas que tienen producto exacto
          llevan su propio botón directo, para que quien ya sabe lo que
          quiere no tenga que pasar por una página intermedia.
          ------------------------------------------------------------------ */}
      <section className="bg-background-light pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-6 border-t border-border-soft pt-10">
          <div className="md:flex md:items-center md:justify-between md:gap-8">
            <div className="md:max-w-xl">
              <h2 className="mb-2 font-display text-2xl font-semibold not-italic leading-tight text-text-main">
                ¿Ya sabes qué quieres reservar?
              </h2>
              <p className="text-sm leading-relaxed text-text-secondary">
                Hemos reunido aparte las entradas, experiencias y excursiones que merecen
                comprarse por adelantado, con precio y disponibilidad reales.
              </p>
            </div>
            <Link
              href="/comprar-entradas"
              className="btn-secondary mt-5 w-full md:mt-0 md:w-auto md:flex-shrink-0"
            >
              Ver todas las entradas y experiencias
            </Link>
          </div>

          <AffiliateDisclosure
            variant="compact"
            className="mt-8 max-w-xl text-text-secondary"
          />
        </div>
      </section>

      {/* CTA plan a medida */}
      <section className="relative bg-night bg-azulejo-pattern-gold py-20 overflow-hidden">
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="mb-4 font-display text-3xl font-semibold not-italic text-white md:text-4xl">
            ¿Prefieres que te lo organice yo?
          </h2>
          <p className="text-white/60 mb-8">
            Cuéntame tus días, tu presupuesto y tus intereses, y te combino estas actividades en un plan hora a hora.
          </p>
          <Link
            href="/planifica-tu-viaje"
            className="btn-primary btn-lg"
          >
            Planifica tu viaje
          </Link>
        </div>
      </section>
    </main>
  );
}

'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ExperienceSearch } from '@/components/ExperienceSearch';
import { BookingCard } from '@/components/afiliados/BookingCard';
import { BookingProductBlock } from '@/components/afiliados/BookingProductBlock';
import { HUB_PRODUCTS, type BookingCategory } from '@/data/bookings';
import { coincide } from '@/lib/search';

/*
 * Hub transaccional.
 *
 * La versión anterior se leía como un artículo: dos párrafos de introducción,
 * una entradilla larga por categoría, y el primer producto por debajo del
 * pliegue. Aquí el orden es el de una tienda: título, una frase, buscador,
 * categorías, producto. El contexto editorial que sí aporta no se ha borrado,
 * se ha bajado al final.
 *
 * Componente de cliente porque el buscador y los chips son estado. El
 * contenido sigue renderizándose en servidor, así que Google ve los nombres,
 * las frases y los encabezados igual que antes.
 *
 * Sin cursivas decorativas: los encabezados usan el mismo serif del sitio en
 * redonda, y el cuerpo la tipografía de los artículos.
 */

const CATEGORIAS: { id: BookingCategory | 'todo'; label: string }[] = [
  { id: 'todo', label: 'Todo' },
  { id: 'entradas', label: 'Entradas' },
  { id: 'experiencias', label: 'Experiencias' },
  { id: 'excursiones', label: 'Excursiones' },
];

/** Una frase por sección, y sólo cuando aporta algo que no sea evidente. */
const NOTA_CATEGORIA: Record<BookingCategory, string> = {
  entradas: 'Casi todo se puede pagar en taquilla: reserva cuando te ahorre la cola.',
  experiencias: 'Grupos pequeños, así que las plazas se acaban antes de lo que parece.',
  excursiones: 'Salir de la ciudad por el día sin pelearte con horarios de tren.',
};

const ORDEN: BookingCategory[] = ['entradas', 'experiencias', 'excursiones'];

export default function ComprarEntradasPage() {
  const [consulta, setConsulta] = useState('');
  const [categoria, setCategoria] = useState<BookingCategory | 'todo'>('todo');

  const filtrados = useMemo(
    () =>
      HUB_PRODUCTS.filter((p) => {
        const porCategoria = categoria === 'todo' || p.category === categoria;
        const porTexto = coincide(consulta, [p.name, p.kind, p.blurb, ...p.searchTerms]);
        return porCategoria && porTexto;
      }),
    [consulta, categoria]
  );

  const hayFiltros = consulta !== '' || categoria !== 'todo';
  const limpiarTodo = () => {
    setConsulta('');
    setCategoria('todo');
  };

  /*
   * Con «Todo» y sin buscar, se agrupa por categoría: da estructura y deja
   * enlazables las secciones. En cuanto hay búsqueda o categoría elegida, se
   * pinta una sola rejilla compacta, que es lo que espera quien está
   * buscando algo concreto.
   */
  const agrupado = categoria === 'todo' && consulta === '';

  const renderProducto = (p: (typeof HUB_PRODUCTS)[number], i: number) =>
    /*
     * Los productos con enlace directo llevan tarjeta nuestra. La excursión
     * de Sintra no tiene enlace propio todavía, así que conserva su widget:
     * es su único mecanismo de reserva.
     */
    Object.keys(p.links).length > 0 ? (
      <BookingCard
        key={p.id}
        product={p}
        placement="activities"
        placementLabel="comprar-entradas"
        priority={i === 0}
      />
    ) : (
      <BookingProductBlock key={p.id} product={p} />
    );

  return (
    <main id="main-content">
      {/* Hero compacto: eyebrow, h1, una frase, buscador, chips. */}
      <section className="bg-background-light pt-8 pb-5 md:pt-16 md:pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <p className="mb-2 font-article text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">
            Reserva en Lisboa
          </p>
          <h1 className="mb-3 font-display text-3xl font-semibold not-italic leading-tight text-text-main md:text-4xl">
            Entradas y experiencias en Lisboa
          </h1>
          <p className="mb-4 max-w-2xl font-article text-[15px] leading-relaxed text-text-secondary md:mb-6 md:text-base">
            Lo que merece reservarse por adelantado, elegido a mano.
          </p>

          <ExperienceSearch
            id="buscar-entradas"
            value={consulta}
            onChange={setConsulta}
            label="Buscar entradas y experiencias en Lisboa"
            placeholder="¿Qué quieres hacer en Lisboa?"
            className="max-w-2xl"
          />

          <div className="-mx-6 mt-3 flex snap-x snap-mandatory items-center gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-4 sm:flex-wrap sm:overflow-visible sm:px-0 md:pb-0">
            {CATEGORIAS.map((c) => {
              const activa = categoria === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={activa}
                  onClick={() => setCategoria(c.id)}
                  className={`inline-flex min-h-11 flex-shrink-0 snap-start items-center rounded-full border px-4 font-article text-sm font-semibold transition-colors ${
                    activa
                      ? 'border-terracotta bg-terracotta text-white'
                      : 'border-border-soft bg-white text-text-secondary hover:border-terracotta hover:text-terracotta'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}

            {hayFiltros && (
              <button
                type="button"
                onClick={limpiarTodo}
                className="inline-flex min-h-11 flex-shrink-0 items-center px-2 font-article text-sm font-semibold text-terracotta underline underline-offset-4 hover:no-underline"
              >
                Limpiar filtros
              </button>
            )}
          </div>

          <p className="mt-3 font-article text-xs text-text-secondary" aria-live="polite">
            {filtrados.length} {filtrados.length === 1 ? 'opción' : 'opciones'}
          </p>
        </div>
      </section>

      {/* Producto. Empieza aquí, no después de tres párrafos. */}
      <section className="bg-background-light pb-14">
        <div className="max-w-6xl mx-auto px-6">
          {filtrados.length === 0 && (
            <div className="rounded-xl border border-border-soft bg-white p-8 text-center">
              <p className="mb-4 font-article text-text-main">
                No encontramos nada con esa búsqueda.
              </p>
              <button type="button" onClick={limpiarTodo} className="btn-outline min-h-12 px-6 py-3 font-article text-sm">
                Limpiar búsqueda
              </button>
            </div>
          )}

          {filtrados.length > 0 && !agrupado && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtrados.map(renderProducto)}
            </div>
          )}

          {filtrados.length > 0 &&
            agrupado &&
            ORDEN.map((cat) => {
              const productos = filtrados.filter((p) => p.category === cat);
              if (!productos.length) return null;
              const label = CATEGORIAS.find((c) => c.id === cat)?.label ?? cat;

              return (
                <div key={cat} className="mb-12 last:mb-0">
                  <div className="mb-4">
                    <h2 className="font-display text-xl font-semibold not-italic leading-tight text-text-main md:text-2xl">
                      {label}
                    </h2>
                    <p className="mt-1 font-article text-sm text-text-secondary">
                      {NOTA_CATEGORIA[cat]}
                    </p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {productos.map(renderProducto)}
                  </div>
                </div>
              );
            })}

          {/* Divulgación compacta, debajo del producto y en redonda. */}
          <p className="mt-10 max-w-2xl font-article text-xs leading-relaxed text-text-secondary">
            Algunos enlaces son de afiliado. Si reservas a través de ellos podemos recibir
            una comisión sin coste adicional para ti, y elegimos qué recomendar solo por su
            calidad.{' '}
            <Link
              href="/aviso-legal#3-afiliados-y-enlaces-a-terceros"
              className="underline underline-offset-2 hover:no-underline"
            >
              Más información
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Contexto al final: comprar primero, leer después. */}
      <section className="bg-background-light py-12 border-t border-border-soft">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="mb-4 font-display text-xl font-semibold not-italic leading-tight text-text-main md:text-2xl">
            Qué conviene reservar y qué no
          </h2>
          <div className="space-y-4 font-article text-[15px] leading-relaxed text-text-secondary">
            <p>
              Buena parte de lo mejor de Lisboa no lleva taquilla: los miradouros, perderse
              por Alfama, el Tajo al atardecer o comer en una tasca de barrio. Reservar sólo
              tiene sentido cuando te ahorra una cola o te asegura una plaza, y eso pasa
              sobre todo en el Castelo, el Oceanário y las experiencias de grupo pequeño.
            </p>
            <p>
              Las excursiones de un día son otro caso: a Sintra o Cascais se llega en tren
              por unos pocos euros, y así lo contamos en las guías. Una excursión organizada
              no compra el transporte, compra no tener que pensar en horarios ni en qué
              entrada sacar primero.
            </p>
            <p>
              El catálogo completo, con el precio real de cada actividad y un tip de ahorro,
              está en{' '}
              <Link href="/actividades" className="text-terracotta underline underline-offset-2 hover:no-underline">
                Actividades
              </Link>
              . Y si buscas la opción más barata para el primer día,{' '}
              <Link href="/free-tours-lisboa" className="text-terracotta underline underline-offset-2 hover:no-underline">
                los free tours
              </Link>{' '}
              siguen siendo la mejor forma de entender la ciudad.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

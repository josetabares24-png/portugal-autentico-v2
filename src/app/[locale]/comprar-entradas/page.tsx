'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ExperienceSearch } from '@/components/ExperienceSearch';
import { BookingProductRenderer } from '@/components/afiliados/BookingProductRenderer';
import { HUB_PRODUCTS, type BookingCategory } from '@/data/bookings';
import { coincide } from '@/lib/search';

/*
 * Hub transaccional, multiproveedor.
 *
 * El orden es el de una tienda: título, una frase, buscador, categorías,
 * producto. El contexto editorial que sí aporta está al final.
 *
 * Lo que esta página sabe: qué productos hay, cómo se buscan, cómo se filtran
 * y en qué orden salen. Lo que NO sabe: con quién se reserva cada uno. Eso lo
 * decide `BookingProductRenderer` leyendo lo que el producto declara, y por
 * eso añadir un proveedor nuevo no toca este archivo.
 *
 * Componente de cliente porque el buscador y los chips son estado. El
 * contenido sigue renderizándose en servidor.
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

/**
 * Una frase por categoría, y sólo cuando aporta algo que no sea evidente.
 * Se pinta únicamente al elegir esa categoría: en «Todo» sobraría tres veces.
 */
const NOTA_CATEGORIA: Record<BookingCategory, string> = {
  entradas: 'Casi todo se puede pagar en taquilla: reserva cuando te ahorre la cola.',
  experiencias: 'Grupos pequeños, así que las plazas se acaban antes de lo que parece.',
  excursiones: 'Salir de la ciudad por el día sin pelearte con horarios de tren.',
};

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
   * Una sola rejilla, siempre.
   *
   * Antes, en «Todo», el catálogo se partía en tres bloques con su encabezado
   * y su entradilla. Con seis productos eso obligaba a recorrer tres tramos
   * de texto para ver seis cosas. El encabezado de categoría se pinta ahora
   * sólo cuando el visitante elige una: ahí sí dice dónde está.
   */
  const categoriaElegida = categoria === 'todo' ? null : categoria;

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
      <section id="catalogo" className="bg-background-light pb-14 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          {categoriaElegida && filtrados.length > 0 && (
            <div className="mb-4">
              <h2 className="font-display text-xl font-semibold not-italic leading-tight text-text-main md:text-2xl">
                {CATEGORIAS.find((c) => c.id === categoriaElegida)?.label}
              </h2>
              <p className="mt-1 font-article text-sm text-text-secondary">
                {NOTA_CATEGORIA[categoriaElegida]}
              </p>
            </div>
          )}

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

          {filtrados.length > 0 && (
            /*
             * Columnas elegidas por el ancho que le queda al producto, no por
             * costumbre.
             *
             * El módulo del proveedor es una tarjeta vertical pensada para el
             * ancho al que ellos mismos las pintan, unos 300-360 px. Con esta
             * rejilla la celda mide 309 px en 1024 y 352 px en 1280 y 1440:
             * dentro de ese rango en todo el escritorio.
             *
             * La alternativa era pasar a tres columnas sólo en `xl`, y se
             * descartó midiéndola: entre 1024 y 1279 dejaba celdas de 476 a
             * 540 px, y ahí la foto del widget se agranda y la tarjeta se
             * queda medio vacía. Más cerca de su ancho natural convierte
             * mejor que más grande.
             */
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtrados.map((p, i) => (
                <BookingProductRenderer key={p.id} product={p} priority={i === 0} />
              ))}
            </div>
          )}

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

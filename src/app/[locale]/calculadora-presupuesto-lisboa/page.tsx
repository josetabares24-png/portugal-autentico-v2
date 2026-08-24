'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { EditorialPageHero } from '@/components/EditorialPageHero';
import {
  BUDGET_ASSUMPTIONS,
  LIMITES,
  NO_INCLUIDO,
  OPCIONES_ALOJAMIENTO,
  OPCIONES_COMIDA,
  OPCIONES_TRANSPORTE,
  OPCIONES_VISITAS,
  calculateLisbonBudget,
  formatRango,
  type NivelAlojamiento,
  type NivelComida,
  type NivelTransporte,
  type NivelVisitas,
} from '@/lib/budget-calculator';

/*
 * /calculadora-presupuesto-lisboa
 *
 * Toda la aritmética vive en `src/lib/budget-calculator.ts`, que es una
 * función pura y con pruebas propias. Aquí sólo hay estado de interfaz: esta
 * página no calcula nada por su cuenta.
 *
 * Dos reglas de producto que sostienen la página entera:
 *
 *   - **Se devuelve un rango, nunca una cifra.** Un número redondo daría una
 *     sensación de exactitud que ningún presupuesto de viaje tiene. El rango
 *     es la respuesta honesta y además es más útil: enseña cuánto margen hay.
 *   - **Se enseña de dónde sale.** El desglose, las reglas del cálculo y lo
 *     que queda fuera están en la propia página, no escondidos en una nota al
 *     pie. Una herramienta que no se deja auditar no merece confianza.
 *
 * No se citan tarifas ni precios de entradas concretas: son datos volátiles
 * que este sitio ya ha tenido que corregir varias veces. Para lo concreto,
 * la página enlaza a donde ese dato se mantiene al día.
 */

const FAQ: readonly { pregunta: string; respuesta: string }[] = [
  {
    pregunta: '¿Por qué da un rango y no una cifra exacta?',
    respuesta:
      'Porque una cifra exacta sería mentira. El mismo viaje cuesta cosas muy distintas en agosto y en febrero, reservando con cuatro meses o con cuatro días, y según decisiones que todavía no has tomado. El rango te dice entre qué dos números vas a moverte, que es lo que de verdad necesitas para decidir.',
  },
  {
    pregunta: '¿Incluye los vuelos?',
    respuesta:
      'No. Ni los vuelos ni el traslado del aeropuerto al alojamiento. Es un presupuesto de lo que se gasta estando en Lisboa: dormir, comer, moverse por la ciudad y entrar en sitios. Lo dejamos fuera a propósito porque el precio del vuelo depende de desde dónde viajes y no hay forma de estimarlo aquí.',
  },
  {
    pregunta: '¿Cuánto cuesta un día en Lisboa por persona?',
    respuesta:
      'Depende sobre todo del alojamiento, que suele ser más de la mitad del gasto. Ajusta el formulario a tu caso y mira la línea «por persona y día»: el desglose te enseña qué parte se lleva cada categoría, y ahí se ve enseguida dónde puedes recortar.',
  },
  {
    pregunta: '¿Por qué sale más caro viajando solo?',
    respuesta:
      'Porque el alojamiento se paga por habitación, no por persona. Una habitación doble cuesta prácticamente lo mismo la ocupen uno o dos, así que viajando solo asumes tú el coste entero. La calculadora lo refleja: cuenta dos personas por habitación y redondea hacia arriba.',
  },
] as const;

interface OpcionSimple {
  id: string;
  label: string;
  desc: string;
}

function SelectorGrupo<T extends string>({
  titulo,
  ayuda,
  opciones,
  valor,
  onChange,
}: {
  titulo: string;
  ayuda: string;
  opciones: readonly (OpcionSimple & { id: T })[];
  valor: T;
  onChange: (id: T) => void;
}) {
  return (
    <fieldset className="border-0 p-0">
      <legend className="mb-1 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">
        {titulo}
      </legend>
      <p className="mb-3 font-body text-sm leading-relaxed text-text-secondary">{ayuda}</p>
      <div className="grid gap-3 sm:grid-cols-3">
        {opciones.map((opcion) => {
          const activa = opcion.id === valor;
          return (
            <button
              key={opcion.id}
              type="button"
              aria-pressed={activa}
              onClick={() => onChange(opcion.id)}
              className={`min-h-16 rounded-lg px-4 py-3 text-left transition-all duration-200 ${
                activa
                  ? 'bg-white shadow-card ring-2 ring-gold'
                  : 'border border-border-soft bg-white/60 hover:border-taupe hover:shadow-soft'
              }`}
            >
              <span className="block font-body text-sm font-semibold text-text-main">
                {opcion.label}
              </span>
              <span className="mt-0.5 block font-body text-xs leading-snug text-text-secondary">
                {opcion.desc}
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function Deslizador({
  id,
  titulo,
  valor,
  min,
  max,
  sufijoUno,
  sufijoVarios,
  onChange,
}: {
  id: string;
  titulo: string;
  valor: number;
  min: number;
  max: number;
  sufijoUno: string;
  sufijoVarios: string;
  onChange: (valor: number) => void;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-3 block font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary"
      >
        {titulo}:{' '}
        <span className="text-sm font-bold normal-case tracking-normal text-terracotta">
          {valor} {valor === 1 ? sufijoUno : sufijoVarios}
        </span>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={1}
        value={valor}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1 w-full cursor-pointer appearance-none bg-border-soft accent-terracotta"
      />
      <div className="mt-1 flex justify-between font-body text-xs text-text-secondary">
        <span>
          {min} {min === 1 ? sufijoUno : sufijoVarios}
        </span>
        <span>
          {max} {sufijoVarios}
        </span>
      </div>
    </div>
  );
}

export default function CalculadoraPresupuestoPage() {
  const [dias, setDias] = useState(3);
  const [personas, setPersonas] = useState(2);
  const [alojamiento, setAlojamiento] = useState<NivelAlojamiento>('intermedio');
  const [comida, setComida] = useState<NivelComida>('mixto');
  const [transporte, setTransporte] = useState<NivelTransporte>('publico');
  const [visitas, setVisitas] = useState<NivelVisitas>('algunas');
  const [excursionSintra, setExcursionSintra] = useState(false);

  const resultado = useMemo(
    () =>
      calculateLisbonBudget({
        dias,
        personas,
        alojamiento,
        comida,
        transporte,
        visitas,
        excursionSintra,
      }),
    [dias, personas, alojamiento, comida, transporte, visitas, excursionSintra]
  );

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question',
      name: item.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: item.respuesta },
    })),
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <EditorialPageHero
        eyebrow="Planificación"
        title="Cuánto cuesta un viaje a Lisboa"
        image="/images/bica-cafe-mapa.jpg"
        imageAlt="Un mapa de Lisboa y un café sobre la mesa de una terraza"
      />

      <section className="bg-background-light pt-12 pb-2 md:pt-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-body text-[15px] leading-relaxed text-text-secondary md:text-base">
            Ajusta el formulario a tu viaje y verás entre qué dos cifras se va a mover el
            gasto. No te va a dar un precio cerrado, porque no existe: lo que cuesta Lisboa
            depende de la temporada, de la antelación con la que reserves y de decisiones que
            todavía no has tomado.
          </p>
          <p className="mt-4 font-body text-[15px] leading-relaxed text-text-secondary md:text-base">
            Lo que sí puede hacer es enseñarte el orden de magnitud y, sobre todo, qué parte
            se lleva cada cosa. Debajo del resultado están el desglose, las reglas con las
            que se calcula y lo que queda fuera.
          </p>
        </div>
      </section>

      {/* Formulario y resultado */}
      <section className="bg-background-light py-12 md:py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.15fr,1fr] lg:items-start lg:gap-12">
          <div className="space-y-9">
            <div className="grid gap-8 sm:grid-cols-2">
              <Deslizador
                id="dias"
                titulo="Días en Lisboa"
                valor={dias}
                min={LIMITES.diasMin}
                max={LIMITES.diasMax}
                sufijoUno="día"
                sufijoVarios="días"
                onChange={setDias}
              />
              <Deslizador
                id="personas"
                titulo="Personas"
                valor={personas}
                min={LIMITES.personasMin}
                max={LIMITES.personasMax}
                sufijoUno="persona"
                sufijoVarios="personas"
                onChange={setPersonas}
              />
            </div>

            <SelectorGrupo
              titulo="Alojamiento"
              ayuda="Se cuenta por habitación y noche, con dos personas por habitación."
              opciones={OPCIONES_ALOJAMIENTO}
              valor={alojamiento}
              onChange={setAlojamiento}
            />

            <SelectorGrupo
              titulo="Comida"
              ayuda="Desayuno, comida, cena y algo de beber, por persona y día."
              opciones={OPCIONES_COMIDA}
              valor={comida}
              onChange={setComida}
            />

            <SelectorGrupo
              titulo="Transporte en la ciudad"
              ayuda="Sólo moverte por Lisboa. Llegar a Lisboa no entra en el cálculo."
              opciones={OPCIONES_TRANSPORTE}
              valor={transporte}
              onChange={setTransporte}
            />

            <SelectorGrupo
              titulo="Visitas y entradas"
              ayuda="Cuánto piensas entrar en sitios de pago. Los miradores y los barrios no cuestan nada."
              opciones={OPCIONES_VISITAS}
              valor={visitas}
              onChange={setVisitas}
            />

            <div className="rounded-lg border border-border-soft bg-white p-4">
              <label htmlFor="sintra" className="flex cursor-pointer items-start gap-3">
                <input
                  id="sintra"
                  type="checkbox"
                  checked={excursionSintra}
                  onChange={(e) => setExcursionSintra(e.target.checked)}
                  className="mt-1 h-5 w-5 flex-shrink-0 rounded border-border-soft text-terracotta focus:ring-terracotta/30"
                />
                <span>
                  <span className="block font-body text-sm font-semibold text-text-main">
                    Un día en Sintra
                  </span>
                  <span className="mt-0.5 block font-body text-xs leading-snug text-text-secondary">
                    Suma el tren, el transporte de allí y dos entradas. Ese día no se cuentan
                    además las visitas en Lisboa.
                  </span>
                </span>
              </label>
            </div>
          </div>

          {/* Resultado */}
          <div className="lg:sticky lg:top-24">
            <div
              aria-live="polite"
              className="rounded-xl border border-border-soft bg-white p-6 shadow-card md:p-7"
            >
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">
                Presupuesto orientativo
              </p>
              <p className="mt-2 font-display text-3xl font-semibold leading-tight text-text-main md:text-4xl">
                {formatRango(resultado.total)}
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
                {resultado.personas} {resultado.personas === 1 ? 'persona' : 'personas'} ·{' '}
                {resultado.dias} {resultado.dias === 1 ? 'día' : 'días'} ·{' '}
                {resultado.noches === 0
                  ? 'sin dormir en Lisboa'
                  : `${resultado.noches} ${resultado.noches === 1 ? 'noche' : 'noches'}`}
              </p>

              <dl className="mt-5 space-y-2 border-t border-border-soft pt-5 font-body text-sm">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-text-secondary">Por persona</dt>
                  <dd className="font-semibold text-text-main">
                    {formatRango(resultado.porPersona)}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-text-secondary">Por persona y día</dt>
                  <dd className="font-semibold text-text-main">
                    {formatRango(resultado.porPersonaYDia)}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 border-t border-border-soft pt-5">
                <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">
                  Desglose
                </p>
                <ul className="space-y-3">
                  {resultado.categorias.map((categoria) => (
                    <li key={categoria.id}>
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="font-body text-sm text-text-main">
                          {categoria.label}
                        </span>
                        <span className="font-body text-sm font-semibold text-text-main">
                          {formatRango(categoria.rango)}
                        </span>
                      </div>
                      <p className="font-body text-xs leading-snug text-text-secondary">
                        {categoria.base}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 border-t border-border-soft pt-5 font-body text-xs leading-relaxed text-text-secondary">
                Es una estimación, no un precio. Los rangos son anchos a propósito y no
                incluyen los vuelos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="border-t border-border-soft" />
      </div>

      {/* Qué no incluye y cómo se calcula */}
      <section className="bg-background-light py-14 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="page-title mb-4 text-2xl md:text-3xl">Qué no está contado</h2>
            <ul className="space-y-2">
              {NO_INCLUIDO.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-body text-[15px] leading-relaxed text-text-secondary"
                >
                  <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-terracotta" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="page-title mb-4 text-2xl md:text-3xl">Cómo se calcula</h2>
            <ol className="space-y-3">
              {BUDGET_ASSUMPTIONS.map((regla, i) => (
                <li
                  key={regla}
                  className="flex items-start gap-3 font-body text-[15px] leading-relaxed text-text-secondary"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-border-soft text-[11px] font-semibold text-text-main"
                  >
                    {i + 1}
                  </span>
                  <span>{regla}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="border-t border-border-soft" />
      </div>

      {/* Dónde está el dato concreto */}
      <section className="bg-background-light py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="page-title mb-3 text-2xl md:text-3xl">
            Dónde mirar los precios de verdad
          </h2>
          <p className="page-description mb-6">
            Esta página trabaja con tramos de gasto, no con tarifas. Los precios concretos
            cambian, así que viven donde se pueden mantener al día:
          </p>
          <ul className="space-y-3 font-body text-[15px] leading-relaxed text-text-secondary">
            <li>
              <Link
                href="/blog/presupuesto-viajar-lisboa"
                className="text-terracotta underline-offset-2 hover:underline"
              >
                Presupuesto para viajar a Lisboa
              </Link>{' '}
              — el desglose largo, categoría por categoría.
            </li>
            <li>
              <Link
                href="/blog/como-moverse-por-lisboa"
                className="text-terracotta underline-offset-2 hover:underline"
              >
                Cómo moverse por Lisboa
              </Link>{' '}
              — qué billete compensa según los días que estés.
            </li>
            <li>
              <Link
                href="/blog/donde-alojarse-en-lisboa"
                className="text-terracotta underline-offset-2 hover:underline"
              >
                Dónde alojarse en Lisboa
              </Link>{' '}
              — qué cambia de precio entre un barrio y otro.
            </li>
            <li>
              <Link
                href="/comprar-entradas"
                className="text-terracotta underline-offset-2 hover:underline"
              >
                Entradas y visitas
              </Link>{' '}
              — cada ficha muestra el precio que tiene hoy en el proveedor.
            </li>
            <li>
              <Link
                href="/free-tours-lisboa"
                className="text-terracotta underline-offset-2 hover:underline"
              >
                Free tours de Lisboa
              </Link>{' '}
              — se paga al final lo que consideres, y bajan mucho la partida de visitas.
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background-light pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="page-title mb-6 text-2xl md:text-3xl">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {FAQ.map((item) => (
              <div key={item.pregunta}>
                <h3 className="mb-2 font-body text-base font-semibold text-text-main">
                  {item.pregunta}
                </h3>
                <p className="font-body text-[15px] leading-relaxed text-text-secondary">
                  {item.respuesta}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 border-l-2 border-border-soft pl-4 font-body text-sm leading-relaxed text-text-secondary">
            Con el presupuesto ya en la cabeza, el siguiente paso es el itinerario:{' '}
            <Link
              href="/pack-completo"
              className="text-terracotta underline-offset-2 hover:underline"
            >
              elige según los días que tengas
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

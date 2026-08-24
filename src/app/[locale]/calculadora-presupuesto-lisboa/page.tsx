'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { EditorialPageHero } from '@/components/EditorialPageHero';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { AttractionTicketLink } from '@/components/afiliados/AttractionTicketLink';
import {
  ATRACCIONES,
  BUDGET_ASSUMPTIONS,
  LIMITES,
  NO_INCLUIDO,
  OPCIONES_ALOJAMIENTO,
  OPCIONES_COMIDA,
  OPCIONES_TRANSPORTE,
  calculateLisbonBudget,
  formatRango,
  normalizarImporte,
  type NivelAlojamiento,
  type NivelComida,
  type NivelTransporte,
} from '@/lib/budget-calculator';

/*
 * /calculadora-presupuesto-lisboa
 *
 * Toda la aritmética vive en `src/lib/budget-calculator.ts`, que es una
 * función pura y con pruebas propias. Aquí sólo hay estado de interfaz: esta
 * página no calcula nada por su cuenta.
 *
 * Reglas de producto que sostienen la página entera:
 *
 *   - **Lo que estimamos se devuelve como rango; lo que sabe el usuario, no.**
 *     Un número redondo daría una sensación de exactitud que ningún
 *     presupuesto tiene. Pero si alguien ya reservó por 520 €, ese dato es
 *     suyo y entra tal cual.
 *   - **Se enseña de dónde sale.** El desglose, las reglas del cálculo y lo
 *     que queda fuera están en la propia página, no escondidos en una nota al
 *     pie. Una herramienta que no se deja auditar no merece confianza.
 *   - **Lo comercial no invade la herramienta.** Los enlaces de entradas
 *     aparecen debajo del resultado, sólo para lo que el usuario ha marcado y
 *     sólo si existe un producto exacto en el registro central.
 *
 * El H1 es «Calculadora de presupuesto para Lisboa» a propósito: la
 * intención de «cuánto cuesta un viaje a Lisboa» es del artículo
 * /blog/presupuesto-viajar-lisboa, que explica el porqué. Esta página estima
 * un viaje concreto. Las dos se enlazan y no compiten.
 */

const FAQ: readonly { pregunta: string; respuesta: string }[] = [
  {
    pregunta: '¿Por qué da un rango y no una cifra exacta?',
    respuesta:
      'Porque una cifra exacta sería mentira. El mismo viaje cuesta cosas muy distintas en agosto y en febrero, reservando con cuatro meses o con cuatro días, y según decisiones que todavía no has tomado. El rango te dice entre qué dos números vas a moverte, que es lo que de verdad necesitas para decidir. Lo que sí es exacto es lo que introduces tú: si ya tienes el alojamiento reservado o sabes lo que cuestan tus vuelos, esos importes entran tal cual, sin margen añadido.',
  },
  {
    pregunta: '¿Incluye los vuelos?',
    respuesta:
      'No los estimamos, porque dependen de desde dónde viajes y no hay forma razonable de calcularlos aquí. Pero si ya sabes cuánto te cuestan, puedes sumar el importe total de tu grupo y aparecerán como una línea más del desglose. Si lo dejas vacío, el resultado avisa de que los vuelos no están contados.',
  },
  {
    pregunta: '¿Puedo poner el alojamiento que ya tengo reservado?',
    respuesta:
      'Sí, y es lo más recomendable en cuanto lo tengas. Elige «Importe propio» e introduce lo que pagas en total por toda la estancia y todo el grupo. Ese importe entra sin rango: es tu dato, no una estimación nuestra, y suele ser la partida que más estrecha el resultado.',
  },
  {
    pregunta: '¿Cuántas noches cuenta?',
    respuesta:
      'Las que tú le digas. Al empezar sugiere una menos que los días, porque lo habitual es llegar un día y marcharse otro, pero puedes cambiarlas: tres días con tres noches es perfectamente posible, y una visita de un día sin dormir también.',
  },
  {
    pregunta: '¿Y si voy a Sintra?',
    respuesta:
      'Marca «Un día en Sintra» y se suma el desplazamiento: el tren de ida y vuelta y moverse por allí, que está en cuesta y con los sitios separados. Las entradas de Sintra no van ahí: se marcan una a una en la lista de atracciones, igual que las de Lisboa, para que no se cuenten dos veces.',
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

function GrupoTitulo({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 border-b border-border-soft pb-2 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">
      {children}
    </p>
  );
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
  valor: T | null;
  onChange: (id: T) => void;
}) {
  return (
    <fieldset className="border-0 p-0">
      <legend className="mb-1 font-body text-sm font-semibold text-text-main">{titulo}</legend>
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
        className="mb-3 block font-body text-sm font-semibold text-text-main"
      >
        {titulo}:{' '}
        <span className="font-bold text-terracotta">
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

function CampoImporte({
  id,
  label,
  ayuda,
  valor,
  onChange,
  placeholder,
  aviso,
}: {
  id: string;
  label: string;
  ayuda: string;
  valor: string;
  onChange: (valor: string) => void;
  placeholder: string;
  aviso?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block font-body text-sm font-semibold text-text-main">
        {label}
      </label>
      <p className="mb-2 font-body text-xs leading-relaxed text-text-secondary">{ayuda}</p>
      <div className="flex items-center gap-2">
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={0}
          max={LIMITES.importeMax}
          step={1}
          value={valor}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="form-input max-w-[12rem]"
        />
        <span aria-hidden="true" className="font-body text-sm text-text-secondary">
          €
        </span>
      </div>
      {aviso && (
        <p role="status" className="mt-2 font-body text-xs leading-relaxed text-terracotta">
          {aviso}
        </p>
      )}
    </div>
  );
}

export default function CalculadoraPresupuestoPage() {
  const [dias, setDiasEstado] = useState(3);
  const [noches, setNochesEstado] = useState(2);
  /*
   * Mientras nadie toque las noches, seguir a los días es lo que la gente
   * espera: 3 días, 2 noches. En cuanto alguien las cambia a mano dejan de
   * moverse solas, porque a partir de ahí su decisión vale más que nuestra
   * sugerencia.
   */
  const [nochesTocadas, setNochesTocadas] = useState(false);
  const [personas, setPersonas] = useState(2);

  const [modoAlojamiento, setModoAlojamiento] = useState<'estimado' | 'propio'>('estimado');
  const [nivelAlojamiento, setNivelAlojamiento] = useState<NivelAlojamiento>('intermedio');
  const [alojamientoPropio, setAlojamientoPropio] = useState('');

  const [comida, setComida] = useState<NivelComida>('mixto');
  const [transporte, setTransporte] = useState<NivelTransporte>('publico');

  const [atracciones, setAtracciones] = useState<string[]>([]);
  const [excursionSintra, setExcursionSintra] = useState(false);
  const [vuelos, setVuelos] = useState('');

  function cambiarDias(nuevos: number) {
    setDiasEstado(nuevos);
    if (!nochesTocadas) setNochesEstado(Math.max(LIMITES.nochesMin, nuevos - 1));
  }

  function cambiarNoches(nuevas: number) {
    setNochesTocadas(true);
    setNochesEstado(nuevas);
  }

  function alternarAtraccion(id: string) {
    setAtracciones((previas) =>
      previas.includes(id) ? previas.filter((a) => a !== id) : [...previas, id]
    );
  }

  const resultado = useMemo(
    () =>
      calculateLisbonBudget({
        dias,
        noches,
        personas,
        alojamiento:
          modoAlojamiento === 'propio'
            ? { modo: 'propio', total: normalizarImporte(alojamientoPropio) }
            : { modo: 'estimado', nivel: nivelAlojamiento },
        comida,
        transporte,
        atracciones,
        excursionSintra,
        vuelosTotal: normalizarImporte(vuelos),
      }),
    [
      dias,
      noches,
      personas,
      modoAlojamiento,
      nivelAlojamiento,
      alojamientoPropio,
      comida,
      transporte,
      atracciones,
      excursionSintra,
      vuelos,
    ]
  );

  const sintraMarcadas = resultado.atraccionesSeleccionadas.filter((a) => a.zona === 'sintra');
  const conEntradas = resultado.atraccionesSeleccionadas.filter((a) => a.bookingProductId);

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
        eyebrow="Herramienta"
        title="Calculadora de presupuesto para Lisboa"
        image="/images/bica-cafe-mapa.jpg"
        imageAlt="Un mapa de Lisboa y un café sobre la mesa de una terraza"
      />

      <section className="bg-background-light pt-12 pb-2 md:pt-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-body text-[15px] leading-relaxed text-text-secondary md:text-base">
            Calcula cuánto puede costarte tu viaje. Ajusta el formulario y verás entre qué
            dos cifras se va a mover el gasto. No te va a dar un precio cerrado, porque no
            existe: lo que cuesta Lisboa depende de la temporada, de la antelación con la
            que reserves y de decisiones que todavía no has tomado.
          </p>
          <p className="mt-4 font-body text-[15px] leading-relaxed text-text-secondary md:text-base">
            Lo que ya sepas con certeza —el alojamiento reservado, los vuelos— puedes
            introducirlo y entra tal cual, sin margen añadido. Debajo del resultado están el
            desglose, las reglas con las que se calcula y lo que queda fuera.
          </p>
        </div>
      </section>

      {/* Formulario y resultado */}
      <section className="bg-background-light py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="page-title mb-8 text-2xl md:text-3xl">Calcula tu presupuesto</h2>

          <div className="grid gap-10 lg:grid-cols-[1.15fr,1fr] lg:items-start lg:gap-12">
            <div className="space-y-10">
              {/* --- Tu viaje --- */}
              <div>
                <GrupoTitulo>Tu viaje</GrupoTitulo>
                <div className="grid gap-8 sm:grid-cols-2">
                  <Deslizador
                    id="dias"
                    titulo="Días en Lisboa"
                    valor={dias}
                    min={LIMITES.diasMin}
                    max={LIMITES.diasMax}
                    sufijoUno="día"
                    sufijoVarios="días"
                    onChange={cambiarDias}
                  />
                  <Deslizador
                    id="noches"
                    titulo="Noches de alojamiento"
                    valor={noches}
                    min={LIMITES.nochesMin}
                    max={LIMITES.nochesMax}
                    sufijoUno="noche"
                    sufijoVarios="noches"
                    onChange={cambiarNoches}
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
                <p className="mt-4 font-body text-xs leading-relaxed text-text-secondary">
                  Las noches se sugieren solas —una menos que los días— hasta que las
                  cambias. A partir de ahí mandas tú.
                </p>
              </div>

              {/* --- Alojamiento --- */}
              <div>
                <GrupoTitulo>Alojamiento</GrupoTitulo>
                <fieldset className="border-0 p-0">
                  <legend className="mb-1 font-body text-sm font-semibold text-text-main">
                    Dónde vas a dormir
                  </legend>
                  <p className="mb-3 font-body text-sm leading-relaxed text-text-secondary">
                    Lo estimado se cuenta por habitación y noche, con dos personas por
                    habitación. Si ya lo tienes reservado, mejor pon tu importe.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {OPCIONES_ALOJAMIENTO.map((opcion) => {
                      const activa = modoAlojamiento === 'estimado' && nivelAlojamiento === opcion.id;
                      return (
                        <button
                          key={opcion.id}
                          type="button"
                          aria-pressed={activa}
                          onClick={() => {
                            setModoAlojamiento('estimado');
                            setNivelAlojamiento(opcion.id);
                          }}
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
                    <button
                      type="button"
                      aria-pressed={modoAlojamiento === 'propio'}
                      onClick={() => setModoAlojamiento('propio')}
                      className={`min-h-16 rounded-lg px-4 py-3 text-left transition-all duration-200 ${
                        modoAlojamiento === 'propio'
                          ? 'bg-white shadow-card ring-2 ring-gold'
                          : 'border border-border-soft bg-white/60 hover:border-taupe hover:shadow-soft'
                      }`}
                    >
                      <span className="block font-body text-sm font-semibold text-text-main">
                        Importe propio
                      </span>
                      <span className="mt-0.5 block font-body text-xs leading-snug text-text-secondary">
                        Ya sé cuánto pagaré o lo tengo reservado
                      </span>
                    </button>
                  </div>
                </fieldset>

                {modoAlojamiento === 'propio' && (
                  <div className="mt-4 rounded-lg border border-border-soft bg-white p-4">
                    <CampoImporte
                      id="alojamiento-propio"
                      label="Coste total del alojamiento"
                      ayuda="El total de toda la estancia y de todo el grupo, no por noche ni por persona. Por ejemplo: 520."
                      placeholder="520"
                      valor={alojamientoPropio}
                      onChange={setAlojamientoPropio}
                      aviso={
                        normalizarImporte(alojamientoPropio) === 0
                          ? 'Escribe el importe total para que entre en el cálculo. Mientras esté vacío, el alojamiento cuenta 0 €.'
                          : undefined
                      }
                    />
                  </div>
                )}
              </div>

              {/* --- Cómo gastas --- */}
              <div className="space-y-8">
                <GrupoTitulo>Cómo gastas</GrupoTitulo>
                <SelectorGrupo
                  titulo="Comida"
                  ayuda="Desayuno, comida, cena y algo de beber, por persona y día."
                  opciones={OPCIONES_COMIDA}
                  valor={comida}
                  onChange={setComida}
                />
                <SelectorGrupo
                  titulo="Transporte en la ciudad"
                  ayuda="Sólo moverte por Lisboa. Llegar a Lisboa no entra aquí."
                  opciones={OPCIONES_TRANSPORTE}
                  valor={transporte}
                  onChange={setTransporte}
                />
              </div>

              {/* --- Qué quieres visitar --- */}
              <div>
                <GrupoTitulo>Qué quieres visitar</GrupoTitulo>
                <fieldset className="border-0 p-0">
                  <legend className="mb-1 font-body text-sm font-semibold text-text-main">
                    Sitios de pago
                  </legend>
                  <p className="mb-3 font-body text-sm leading-relaxed text-text-secondary">
                    Marca los que pienses visitar. Cada uno se suma una vez por persona. Los
                    miradores, los barrios y pasear no están porque no cuestan nada.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {ATRACCIONES.map((atraccion) => {
                      const marcada = atracciones.includes(atraccion.id);
                      return (
                        <label
                          key={atraccion.id}
                          className={`flex min-h-16 cursor-pointer items-start gap-3 rounded-lg px-4 py-3 transition-all duration-200 ${
                            marcada
                              ? 'bg-white shadow-card ring-2 ring-gold'
                              : 'border border-border-soft bg-white/60 hover:border-taupe'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={marcada}
                            onChange={() => alternarAtraccion(atraccion.id)}
                            className="mt-1 h-4 w-4 flex-shrink-0 rounded border-border-soft text-terracotta focus:ring-terracotta/30"
                          />
                          <span>
                            <span className="block font-body text-sm font-semibold text-text-main">
                              {atraccion.nombre}
                              {atraccion.zona === 'sintra' && (
                                <span className="ml-2 align-middle font-body text-[10px] font-bold uppercase tracking-wider text-text-secondary">
                                  Sintra
                                </span>
                              )}
                            </span>
                            <span className="mt-0.5 block font-body text-xs leading-snug text-text-secondary">
                              {atraccion.desc}
                            </span>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="mt-4 rounded-lg border border-border-soft bg-white p-4">
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
                        Suma sólo el desplazamiento: el tren de ida y vuelta y moverse por
                        allí. Las entradas de Sintra se marcan arriba, una a una.
                      </span>
                    </span>
                  </label>
                  {sintraMarcadas.length > 0 && !excursionSintra && (
                    <p role="status" className="mt-3 font-body text-xs leading-relaxed text-terracotta">
                      Has marcado {sintraMarcadas.length}{' '}
                      {sintraMarcadas.length === 1 ? 'sitio' : 'sitios'} en Sintra. Si vas a
                      subir, marca también el día de Sintra para contar el viaje.
                    </p>
                  )}
                </div>
              </div>

              {/* --- Gastos conocidos --- */}
              <div>
                <GrupoTitulo>Gastos que ya conoces</GrupoTitulo>
                <div className="rounded-lg border border-border-soft bg-white p-4">
                  <CampoImporte
                    id="vuelos"
                    label="¿Quieres sumar tus vuelos?"
                    ayuda="No los estimamos: dependen de desde dónde viajes. Si ya sabes lo que cuestan, pon el total de todo el grupo. Por ejemplo: 340."
                    placeholder="340"
                    valor={vuelos}
                    onChange={setVuelos}
                  />
                </div>
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
                  <div className="flex items-baseline justify-between gap-4 border-t border-border-soft pt-2">
                    <dt className="text-text-secondary">
                      Gastos en destino
                      <span className="block text-xs">sin alojamiento ni vuelos</span>
                    </dt>
                    <dd className="font-semibold text-text-main">
                      {formatRango(resultado.sinAlojamiento)}
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
                          {categoria.origen === 'introducido' && ' · importe tuyo, sin estimar'}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {!resultado.vuelosIncluidos && (
                  <p className="mt-5 border-t border-border-soft pt-5 font-body text-sm leading-relaxed text-text-main">
                    Vuelos no incluidos.
                  </p>
                )}

                <p className="mt-5 border-t border-border-soft pt-5 font-body text-xs leading-relaxed text-text-secondary">
                  Es una estimación, no un precio. Los rangos son anchos a propósito.
                </p>

                {conEntradas.length > 0 && (
                  <div className="mt-6 border-t border-border-soft pt-5">
                    <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">
                      Entradas de lo que has marcado
                    </p>
                    <ul className="space-y-2">
                      {conEntradas.map((atraccion) => (
                        <li key={atraccion.id}>
                          <AttractionTicketLink
                            productId={atraccion.bookingProductId as string}
                            nombre={atraccion.nombre}
                          />
                        </li>
                      ))}
                    </ul>
                    <AffiliateDisclosure
                      variant="compact"
                      className="mt-3 text-text-secondary"
                    />
                  </div>
                )}
              </div>
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
            <p className="mt-4 font-body text-sm leading-relaxed text-text-secondary">
              Los vuelos tampoco se estiman, pero puedes sumarlos arriba si ya sabes lo que
              te cuestan.
            </p>
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
              — se paga al final lo que consideres, y bajan la partida de visitas.
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

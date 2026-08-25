'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { AttractionTicketLink } from '@/components/afiliados/AttractionTicketLink';
import { BudgetAttractionChips } from '@/components/calculadora/BudgetAttractionChips';
import { BudgetDonut, categoriaDominante } from '@/components/calculadora/BudgetDonut';
import { BudgetMobileDock } from '@/components/calculadora/BudgetMobileDock';
import { BudgetOptimizer } from '@/components/calculadora/BudgetOptimizer';
import {
  BudgetStylePresets,
  presetActivo,
  type Preset,
} from '@/components/calculadora/BudgetStylePresets';
import {
  BUDGET_ASSUMPTIONS,
  LIMITES,
  NO_INCLUIDO,
  OPCIONES_ALOJAMIENTO,
  OPCIONES_COMIDA,
  OPCIONES_TRANSPORTE,
  calculateLisbonBudget,
  formatRango,
  normalizarImporte,
  type BudgetInput,
  type NivelAlojamiento,
  type NivelComida,
  type NivelTransporte,
} from '@/lib/budget-calculator';
import { generarSugerencias, type Sugerencia } from '@/lib/budget-optimizer';

/*
 * /calculadora-presupuesto-lisboa
 *
 * Toda la aritmética vive en `src/lib/budget-calculator.ts`, que es una
 * función pura y con pruebas propias. Aquí sólo hay estado de interfaz: esta
 * página no calcula nada, y el motor no se ha tocado en ninguno de los
 * rediseños.
 *
 * Reglas de producto que sostienen la página entera:
 *
 *   - **Lo que estimamos se devuelve como rango; lo que sabe el usuario, no.**
 *     Un número redondo daría una sensación de exactitud que ningún
 *     presupuesto tiene. Pero si alguien ya reservó por 520 €, ese dato es
 *     suyo y entra tal cual.
 *   - **Se enseña de dónde sale.** Las reglas del cálculo y lo que queda fuera
 *     están en la propia página. Una herramienta que no se deja auditar no
 *     merece confianza.
 *   - **Lo comercial no invade la herramienta.** Los enlaces de entradas
 *     aparecen dentro del resultado, sólo para lo que el usuario ha marcado y
 *     sólo si existe un producto exacto en el registro central.
 *
 * Decisiones de interfaz:
 *
 *   - Sin foto de portada. Es una herramienta: cada píxel de hero es un píxel
 *     que aleja el primer control. La cabecera es texto sobre cream.
 *   - Tres decisiones antes de la cifra —cuánto dura, cómo viajas, qué
 *     visitas—, y el resto detrás de «Personalizar». Nueve selectores abiertos
 *     de golpe es un formulario; tres preguntas es una herramienta.
 *   - El estilo de viaje es un atajo de interfaz que fija alojamiento, comida
 *     y transporte a la vez. No añade aritmética: elige valores que ya
 *     existían, y quien quiera los cambia uno a uno.
 *   - Contadores «− n +» en vez de deslizadores: con el pulgar son precisos y
 *     ocupan menos.
 *
 * El H1 es «Calculadora de presupuesto para Lisboa» a propósito: la intención
 * de «cuánto cuesta un viaje a Lisboa» es del artículo
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

/* --------------------------------------------------------------- primitivas */

/** Tarjeta blanca con su pregunta. La unidad visual de todo el configurador. */
function Bloque({
  titulo,
  ayuda,
  children,
}: {
  titulo: string;
  ayuda?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-border-soft bg-white p-4 shadow-card md:p-5">
      <h3 className="font-body text-[15px] font-semibold leading-tight text-text-main">{titulo}</h3>
      {ayuda && (
        <p className="mt-1 font-body text-xs leading-relaxed text-text-secondary">{ayuda}</p>
      )}
      <div className="mt-3">{children}</div>
    </section>
  );
}

/**
 * Contador compacto: etiqueta encima, «− n +» debajo. Caben tres en una fila
 * a 375 px, que es lo que hace que la duración ocupe una tarjeta y no tres.
 *
 * Los botones miden 44×44 y tienen etiqueta propia; el valor se anuncia con
 * `aria-live` para que un lector de pantalla lo oiga al cambiar.
 */
function Contador({
  control,
  etiqueta,
  valor,
  min,
  max,
  onChange,
}: {
  control: string;
  etiqueta: string;
  valor: number;
  min: number;
  max: number;
  onChange: (valor: number) => void;
}) {
  return (
    <div data-control={control} className="text-center">
      <p
        id={`${control}-etiqueta`}
        className="mb-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-text-secondary"
      >
        {etiqueta}
      </p>
      <div className="flex items-center justify-between gap-0.5 rounded-lg border border-border-soft bg-background-light px-0.5">
        <button
          type="button"
          aria-label={`Reducir ${etiqueta.toLowerCase()}`}
          disabled={valor <= min}
          onClick={() => onChange(Math.max(min, valor - 1))}
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md font-body text-lg font-semibold text-text-main transition-colors hover:text-terracotta disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:text-text-main"
        >
          <span aria-hidden="true">−</span>
        </button>
        <output
          aria-live="polite"
          aria-labelledby={`${control}-etiqueta`}
          className="font-body text-base font-bold tabular-nums text-text-main"
        >
          {valor}
        </output>
        <button
          type="button"
          aria-label={`Aumentar ${etiqueta.toLowerCase()}`}
          disabled={valor >= max}
          onClick={() => onChange(Math.min(max, valor + 1))}
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md font-body text-lg font-semibold text-text-main transition-colors hover:text-terracotta disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:text-text-main"
        >
          <span aria-hidden="true">+</span>
        </button>
      </div>
    </div>
  );
}

/**
 * Tarjeta de opción. El estado seleccionado se marca con anillo, fondo y una
 * marca de verificación: nunca sólo con color.
 */
function TarjetaOpcion({
  label,
  desc,
  activa,
  onClick,
}: {
  label: string;
  desc: string;
  activa: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={activa}
      onClick={onClick}
      className={`flex min-h-[3.75rem] w-full flex-col justify-center rounded-lg px-3 py-2.5 text-left transition-all duration-200 ${
        activa
          ? 'bg-white shadow-card ring-2 ring-gold'
          : 'border border-border-soft bg-white/60 hover:border-taupe'
      }`}
    >
      <span className="flex items-center justify-between gap-2">
        <span className="font-body text-[13px] font-semibold text-text-main">{label}</span>
        {activa && <Icon name="check" size={14} className="flex-shrink-0 text-terracotta" />}
      </span>
      <span className="mt-0.5 block font-body text-[11px] leading-snug text-text-secondary">
        {desc}
      </span>
    </button>
  );
}

function SelectorGrupo<T extends string>({
  titulo,
  opciones,
  valor,
  onChange,
}: {
  titulo: string;
  opciones: readonly (OpcionSimple & { id: T })[];
  valor: T | null;
  onChange: (id: T) => void;
}) {
  return (
    <fieldset className="border-0 p-0">
      <legend className="mb-2 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-text-secondary">
        {titulo}
      </legend>
      <div className="grid gap-2 sm:grid-cols-3">
        {opciones.map((opcion) => (
          <TarjetaOpcion
            key={opcion.id}
            label={opcion.label}
            desc={opcion.desc}
            activa={opcion.id === valor}
            onClick={() => onChange(opcion.id)}
          />
        ))}
      </div>
    </fieldset>
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
      <label htmlFor={id} className="mb-1 block font-body text-[13px] font-semibold text-text-main">
        {label}
      </label>
      <p className="mb-2 font-body text-[11px] leading-relaxed text-text-secondary">{ayuda}</p>
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
          className="form-input max-w-[9rem]"
        />
        <span aria-hidden="true" className="font-body text-sm text-text-secondary">
          €
        </span>
      </div>
      {aviso && (
        <p role="status" className="mt-2 font-body text-[11px] leading-relaxed text-terracotta">
          {aviso}
        </p>
      )}
    </div>
  );
}

/** Bloque plegable para lo secundario. El contenido sigue en el HTML. */
function Plegable({
  titulo,
  children,
  abierto,
  onToggle,
}: {
  titulo: string;
  children: React.ReactNode;
  abierto?: boolean;
  onToggle?: (abierto: boolean) => void;
}) {
  return (
    <details
      open={abierto}
      onToggle={(e) => onToggle?.((e.currentTarget as HTMLDetailsElement).open)}
      className="group"
    >
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 font-body text-[13px] font-semibold text-text-main marker:hidden">
        {titulo}
        <Icon
          name="expand_more"
          size={16}
          className="flex-shrink-0 text-text-secondary transition-transform duration-200 group-open:rotate-180"
        />
      </summary>
      <div className="pt-3">{children}</div>
    </details>
  );
}

/* --------------------------------------------------------------- la página */

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

  const [personalizarAbierto, setPersonalizarAbierto] = useState(false);

  // Optimizador: la tercera sugerencia, el último cambio aplicado y el input
  // previo para deshacerlo. Un solo paso atrás, no un historial.
  const [verMasAhorro, setVerMasAhorro] = useState(false);
  const [ultimaAplicada, setUltimaAplicada] = useState<string | null>(null);
  const [inputAnterior, setInputAnterior] = useState<BudgetInput | null>(null);

  const resultadoRef = useRef<HTMLDivElement>(null);
  const optimizadorRef = useRef<HTMLDivElement>(null);
  const [resultadoVisible, setResultadoVisible] = useState(false);

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

  /** `true` si el sistema pide menos movimiento. Se consulta al vuelo. */
  function prefiereMenosMovimiento(): boolean {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  const irA = useCallback((destino: 'panel' | 'optimizador') => {
    const nodo = destino === 'optimizador' ? optimizadorRef.current : resultadoRef.current;
    nodo?.scrollIntoView({
      behavior: prefiereMenosMovimiento() ? 'auto' : 'smooth',
      block: 'start',
    });
    resultadoRef.current?.focus({ preventScroll: true });
  }, []);

  const inputActual: BudgetInput = useMemo(
    () => ({
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

  const resultado = useMemo(() => calculateLisbonBudget(inputActual), [inputActual]);
  const sugerencias = useMemo(() => generarSugerencias(inputActual), [inputActual]);

  /**
   * Lleva un `BudgetInput` completo de vuelta al estado de la interfaz. Sólo
   * toca lo que el optimizador puede cambiar; los días, las noches y las
   * atracciones se quedan como estén.
   */
  const aplicarInput = useCallback((input: BudgetInput) => {
    if (input.alojamiento.modo === 'estimado') {
      setModoAlojamiento('estimado');
      setNivelAlojamiento(input.alojamiento.nivel);
    }
    setComida(input.comida);
    setTransporte(input.transporte);
  }, []);

  function aplicarSugerencia(sugerencia: Sugerencia) {
    setInputAnterior(inputActual);
    setUltimaAplicada(sugerencia.titulo);
    aplicarInput(sugerencia.nuevoInput);
  }

  function deshacer() {
    if (!inputAnterior) return;
    aplicarInput(inputAnterior);
    setInputAnterior(null);
    setUltimaAplicada(null);
  }

  function elegirPreset(preset: Preset) {
    setModoAlojamiento('estimado');
    setNivelAlojamiento(preset.alojamiento);
    setComida(preset.comida);
    setTransporte(preset.transporte);
  }

  /*
   * El dock inferior sobra cuando el panel completo ya está en pantalla:
   * serían dos resultados compitiendo. Se observa el panel y se esconde
   * mientras se vea. Si el navegador no trae IntersectionObserver, el dock se
   * queda visible: mejor de más que de menos.
   */
  useEffect(() => {
    const panel = resultadoRef.current;
    if (!panel || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entrada]) => setResultadoVisible(entrada.isIntersecting),
      { rootMargin: '-80px 0px -120px 0px' }
    );
    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  /*
   * Lo que el usuario ya ha rellenado no puede quedarse escondido sin más
   * detrás de un plegable cerrado. En vez de impedirle cerrarlo —que sería
   * pelearse con él—, el propio título lo dice: «con tus importes».
   */
  const hayDatosPropios = modoAlojamiento === 'propio' || normalizarImporte(vuelos) > 0;

  const sintraMarcadas = resultado.atraccionesSeleccionadas.filter((a) => a.zona === 'sintra');
  const conEntradas = resultado.atraccionesSeleccionadas.filter((a) => a.bookingProductId);
  const sinEntradas = resultado.atraccionesSeleccionadas.filter((a) => !a.bookingProductId);
  const dominante = categoriaDominante(resultado.categorias);
  const importeVuelos = normalizarImporte(vuelos);
  const estilo = presetActivo({ modoAlojamiento, alojamiento: nivelAlojamiento, comida, transporte });

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
    <main id="main-content" className="bg-background-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/*
        Dos microanimaciones y nada más: la cifra entra con un fundido de
        180 ms cuando cambia —lleva `key`, así que React la vuelve a montar— y
        los tramos del anillo se mueven con una transición corta. Van aquí, en
        un `style` de la página, para no meter reglas de una sola página en
        globals.css. Con `prefers-reduced-motion` se desactivan las dos.
      */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
@keyframes budgetCifraEntra {
  from { opacity: 0; transform: scale(0.985); }
  to   { opacity: 1; transform: scale(1); }
}
.budget-cifra { animation: budgetCifraEntra 180ms ease-out both; }
.budget-donut-segmento {
  transition: stroke-dasharray 220ms ease-out, stroke-dashoffset 220ms ease-out;
}
summary::-webkit-details-marker { display: none; }
@media (prefers-reduced-motion: reduce) {
  .budget-cifra { animation: none; }
  .budget-donut-segmento { transition: none; }
}`,
        }}
      />

      {/* Cabecera. Sin foto: cada píxel de hero aleja el primer control. */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-6 md:pt-14 md:pb-8">
        <p className="mb-2 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">
          Herramienta gratuita
        </p>
        <h1 className="max-w-[16ch] font-display text-[1.9rem] font-semibold leading-[1.1] text-text-main md:text-[2.6rem]">
          Calculadora de presupuesto para Lisboa
        </h1>
        <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 font-body text-sm leading-relaxed text-text-secondary md:text-base">
          <span>Descubre cuánto puede costarte tu viaje.</span>
          <span className="whitespace-nowrap rounded-full border border-border-soft bg-white px-2.5 py-0.5 font-body text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
            Gratis · Sin registro
          </span>
        </p>
      </section>

      <section className="pb-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr,1fr] lg:items-start lg:gap-8">
            {/* ---------------------------------------- CONFIGURACIÓN ---- */}
            <div className="space-y-4">
              {/*
                Los títulos de las dos columnas no se pintan: el diseño ya deja
                clarísimo qué es cada una y una cabecera de sección aquí sólo
                añadiría ruido. Pero existen, porque las tarjetas de dentro son
                h3 y un documento no debe saltarse un nivel de encabezado.
              */}
              <h2 className="sr-only">Configura tu viaje</h2>

              <Bloque titulo="¿Cuánto dura tu viaje?">
                <div className="grid grid-cols-3 gap-2">
                  <Contador
                    control="dias"
                    etiqueta="Días"
                    valor={dias}
                    min={LIMITES.diasMin}
                    max={LIMITES.diasMax}
                    onChange={cambiarDias}
                  />
                  <Contador
                    control="noches"
                    etiqueta="Noches"
                    valor={noches}
                    min={LIMITES.nochesMin}
                    max={LIMITES.nochesMax}
                    onChange={cambiarNoches}
                  />
                  <Contador
                    control="personas"
                    etiqueta="Personas"
                    valor={personas}
                    min={LIMITES.personasMin}
                    max={LIMITES.personasMax}
                    onChange={setPersonas}
                  />
                </div>
                {noches === 0 && dias > 1 ? (
                  <p role="status" className="mt-2.5 font-body text-[11px] leading-relaxed text-terracotta">
                    Con 0 noches el alojamiento no cuenta nada. Si vas a dormir en Lisboa,
                    súbelas: suele ser la partida más grande.
                  </p>
                ) : (
                  <p className="mt-2.5 font-body text-[11px] leading-relaxed text-text-secondary">
                    Las noches se sugieren solas —una menos que los días— hasta que las cambias.
                  </p>
                )}
              </Bloque>

              <Bloque titulo="¿Cómo quieres viajar?">
                <BudgetStylePresets activo={estilo} onElegir={elegirPreset} />

                <div className="mt-4 border-t border-border-soft pt-3">
                  <Plegable
                    titulo={
                      hayDatosPropios
                        ? 'Personalizar · con tus importes'
                        : estilo
                          ? 'Personalizar'
                          : 'Personalizar · a tu manera'
                    }
                    abierto={personalizarAbierto}
                    onToggle={setPersonalizarAbierto}
                  >
                    <div className="space-y-5">
                      <fieldset className="border-0 p-0">
                        <legend className="mb-2 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-text-secondary">
                          Alojamiento
                        </legend>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {OPCIONES_ALOJAMIENTO.map((opcion) => (
                            <TarjetaOpcion
                              key={opcion.id}
                              label={opcion.label}
                              desc={opcion.desc}
                              activa={modoAlojamiento === 'estimado' && nivelAlojamiento === opcion.id}
                              onClick={() => {
                                setModoAlojamiento('estimado');
                                setNivelAlojamiento(opcion.id);
                              }}
                            />
                          ))}
                          <TarjetaOpcion
                            label="Importe propio"
                            desc="Ya lo tengo reservado"
                            activa={modoAlojamiento === 'propio'}
                            onClick={() => setModoAlojamiento('propio')}
                          />
                        </div>

                        {modoAlojamiento === 'propio' && (
                          <div
                            data-control="alojamiento-propio"
                            className="mt-3 rounded-lg border border-gold/50 bg-background-light p-3"
                          >
                            <CampoImporte
                              id="alojamiento-propio"
                              label="Coste total del alojamiento"
                              ayuda="El total de toda la estancia y de todo el grupo, no por noche ni por persona. Por ejemplo: 520."
                              placeholder="520"
                              valor={alojamientoPropio}
                              onChange={setAlojamientoPropio}
                              aviso={
                                normalizarImporte(alojamientoPropio) === 0
                                  ? 'Escribe el importe para que entre en el cálculo. Vacío cuenta 0 €.'
                                  : undefined
                              }
                            />
                          </div>
                        )}
                      </fieldset>

                      <SelectorGrupo
                        titulo="Comida"
                        opciones={OPCIONES_COMIDA}
                        valor={comida}
                        onChange={setComida}
                      />

                      <SelectorGrupo
                        titulo="Transporte en la ciudad"
                        opciones={OPCIONES_TRANSPORTE}
                        valor={transporte}
                        onChange={setTransporte}
                      />

                      <div className="rounded-lg border border-border-soft bg-background-light p-3">
                        <CampoImporte
                          id="vuelos"
                          label="¿Ya sabes lo que cuestan tus vuelos?"
                          ayuda="No los estimamos: dependen de desde dónde viajes. Si lo sabes, pon el total del grupo. Por ejemplo: 340."
                          placeholder="340"
                          valor={vuelos}
                          onChange={setVuelos}
                        />
                      </div>
                    </div>
                  </Plegable>
                </div>
              </Bloque>

              <Bloque
                titulo="¿Qué lugares quieres visitar?"
                ayuda="Sólo sitios de pago. Cada uno se suma una vez por persona; miradores, barrios y pasear no cuestan nada."
              >
                <BudgetAttractionChips
                  seleccionadas={atracciones}
                  onAlternar={alternarAtraccion}
                >
                  {/*
                    El transporte a Sintra va debajo de sus entradas, pero no es
                    una novena atracción: es el desplazamiento, y por eso vive
                    fuera de la cuadrícula y con otro aspecto.
                  */}
                  <label
                    htmlFor="sintra"
                    className="mt-2 flex min-h-11 cursor-pointer items-center gap-2.5 rounded-lg border border-border-soft bg-background-light px-3 py-2"
                  >
                    <input
                      id="sintra"
                      type="checkbox"
                      checked={excursionSintra}
                      onChange={(e) => setExcursionSintra(e.target.checked)}
                      className="h-4 w-4 flex-shrink-0 rounded border-border-soft text-terracotta focus:ring-terracotta/30"
                    />
                    <span className="font-body text-[13px] leading-snug text-text-main">
                      Añadir transporte para un día en Sintra
                    </span>
                  </label>
                  {sintraMarcadas.length > 0 && !excursionSintra && (
                    <p role="status" className="mt-2 font-body text-[11px] leading-relaxed text-terracotta">
                      Has marcado {sintraMarcadas.length}{' '}
                      {sintraMarcadas.length === 1 ? 'sitio' : 'sitios'} en Sintra. Si vas a
                      subir, marca también el día de Sintra para contar el viaje.
                    </p>
                  )}
                </BudgetAttractionChips>
              </Bloque>

              <button
                type="button"
                onClick={() => irA('panel')}
                className="btn-primary w-full justify-center py-3.5 text-base lg:hidden"
              >
                Ver mi presupuesto
              </button>
            </div>

            {/* -------------------------------------------- RESULTADO ---- */}
            <div className="space-y-4 lg:sticky lg:top-24">
              <h2 className="sr-only">Tu presupuesto</h2>

              <div
                ref={resultadoRef}
                tabIndex={-1}
                aria-live="polite"
                className="overflow-hidden rounded-xl border border-border-soft bg-white shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <div className="bg-night px-5 py-5 text-white md:px-6">
                  <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
                    Tu presupuesto estimado
                  </p>
                  <p
                    key={`total-${formatRango(resultado.total)}`}
                    className="budget-cifra mt-1 font-display text-[2rem] font-semibold leading-none md:text-[2.4rem]"
                  >
                    {formatRango(resultado.total)}
                  </p>
                  <p className="mt-2.5 border-t border-white/15 pt-2.5 font-body text-sm text-white/85">
                    <span className="font-semibold text-white">
                      {formatRango(resultado.porPersona)}
                    </span>{' '}
                    por persona
                    <span className="mx-2 text-white/40">·</span>
                    {formatRango(resultado.porPersonaYDia)} al día
                  </p>
                </div>

                <div className="px-5 py-4 md:px-6">
                  <p className="font-body text-[11px] leading-relaxed text-text-secondary">
                    {resultado.dias} {resultado.dias === 1 ? 'día' : 'días'} ·{' '}
                    {resultado.personas} {resultado.personas === 1 ? 'persona' : 'personas'} ·{' '}
                    {resultado.noches === 0
                      ? 'sin dormir en Lisboa'
                      : `${resultado.noches} ${resultado.noches === 1 ? 'noche' : 'noches'}`}
                  </p>

                  <div className="mt-3 flex items-baseline justify-between gap-3 rounded-lg bg-background-light px-3 py-2.5">
                    <span className="font-body text-[13px] text-text-main">
                      Gastos en destino
                      <span className="block text-[11px] text-text-secondary">
                        sin alojamiento ni vuelos
                      </span>
                    </span>
                    <span className="font-body text-[15px] font-semibold tabular-nums text-text-main">
                      {formatRango(resultado.sinAlojamiento)}
                    </span>
                  </div>

                  {!resultado.vuelosIncluidos && (
                    <p className="mt-3 font-body text-[11px] text-text-secondary">
                      Vuelos no incluidos.
                    </p>
                  )}

                  <div className="mt-3 border-t border-border-soft pt-3">
                    <Plegable titulo="Ver el desglose completo">
                      <ul className="space-y-2">
                        {resultado.categorias.map((categoria) => (
                          <li key={categoria.id} className="grid grid-cols-[1fr,auto] gap-x-3">
                            <span className="font-body text-[13px] text-text-main">
                              {categoria.label}
                            </span>
                            <span className="text-right font-body text-[13px] font-semibold tabular-nums text-text-main">
                              {formatRango(categoria.rango)}
                            </span>
                            <span className="font-body text-[11px] leading-snug text-text-secondary">
                              {categoria.base}
                              {categoria.origen === 'introducido' && ' · importe tuyo'}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 font-body text-[11px] leading-relaxed text-text-secondary">
                        Es una estimación, no un precio. Los rangos son anchos a propósito.
                      </p>
                    </Plegable>
                  </div>
                </div>
              </div>

              {resultado.total.max > 0 && (
                <Bloque titulo="Así se distribuye tu presupuesto">
                  <BudgetDonut
                    categorias={resultado.categorias}
                    total={resultado.total}
                    vuelos={importeVuelos > 0 ? importeVuelos : null}
                  />
                </Bloque>
              )}

              <div ref={optimizadorRef} className="scroll-mt-24">
                <BudgetOptimizer
                  id="optimizador-presupuesto"
                  sugerencias={sugerencias}
                  dominante={dominante ? dominante.frase : null}
                  verMas={verMasAhorro}
                  aplicada={ultimaAplicada}
                  puedeDeshacer={inputAnterior !== null}
                  onVerMas={() => setVerMasAhorro(true)}
                  onAplicar={aplicarSugerencia}
                  onDeshacer={deshacer}
                />
              </div>

              {resultado.atraccionesSeleccionadas.length > 0 && (
                <Bloque titulo="Entradas seleccionadas">
                  <ul className="space-y-2.5">
                    {conEntradas.map((atraccion) => (
                      <li
                        key={atraccion.id}
                        className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1"
                      >
                        <span className="font-body text-[13px] text-text-main">
                          {atraccion.nombre}
                        </span>
                        <AttractionTicketLink
                          productId={atraccion.bookingProductId as string}
                          nombre={atraccion.nombre}
                          etiqueta="Ver entradas"
                        />
                      </li>
                    ))}
                    {sinEntradas.map((atraccion) => (
                      <li key={atraccion.id} className="flex items-baseline justify-between gap-3">
                        <span className="font-body text-[13px] text-text-main">
                          {atraccion.nombre}
                        </span>
                        <span className="font-body text-[11px] text-text-secondary">
                          se compra en su web
                        </span>
                      </li>
                    ))}
                  </ul>
                  {conEntradas.length > 0 && (
                    <AffiliateDisclosure variant="compact" className="mt-3 text-text-secondary" />
                  )}
                </Bloque>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------- MÁS INFORMACIÓN ---- */}
      <section className="border-t border-border-soft pb-32 pt-10 lg:pb-14">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-5 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">
            Más información
          </h2>

          <div className="space-y-3">
            <div className="rounded-xl border border-border-soft bg-white p-4">
              <Plegable titulo="Qué no está contado">
                <ul className="space-y-1.5">
                  {NO_INCLUIDO.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-body text-[13px] leading-relaxed text-text-secondary"
                    >
                      <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-terracotta" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-2.5 font-body text-[13px] leading-relaxed text-text-secondary">
                  Los vuelos tampoco se estiman, pero puedes sumarlos arriba si ya sabes lo que te
                  cuestan.
                </p>
              </Plegable>
            </div>

            <div className="rounded-xl border border-border-soft bg-white p-4">
              <Plegable titulo="Cómo se calcula">
                <ol className="space-y-2">
                  {BUDGET_ASSUMPTIONS.map((regla, i) => (
                    <li
                      key={regla}
                      className="flex items-start gap-2.5 font-body text-[13px] leading-relaxed text-text-secondary"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-border-soft text-[10px] font-semibold text-text-main"
                      >
                        {i + 1}
                      </span>
                      <span>{regla}</span>
                    </li>
                  ))}
                </ol>
              </Plegable>
            </div>

            <div className="rounded-xl border border-border-soft bg-white p-4">
              <Plegable titulo="Dónde mirar los precios de verdad">
                <p className="mb-3 font-body text-[13px] leading-relaxed text-text-secondary">
                  Esta página trabaja con tramos de gasto, no con tarifas. Los precios concretos
                  cambian, así que viven donde se pueden mantener al día:
                </p>
                <ul className="space-y-2 font-body text-[13px] leading-relaxed text-text-secondary">
                  <li>
                    <Link href="/blog/presupuesto-viajar-lisboa" className="text-terracotta underline-offset-2 hover:underline">
                      Presupuesto para viajar a Lisboa
                    </Link>{' '}
                    — el desglose largo, categoría por categoría.
                  </li>
                  <li>
                    <Link href="/blog/como-moverse-por-lisboa" className="text-terracotta underline-offset-2 hover:underline">
                      Cómo moverse por Lisboa
                    </Link>{' '}
                    — qué billete compensa según los días que estés.
                  </li>
                  <li>
                    <Link href="/blog/donde-alojarse-en-lisboa" className="text-terracotta underline-offset-2 hover:underline">
                      Dónde alojarse en Lisboa
                    </Link>{' '}
                    — qué cambia de precio entre un barrio y otro.
                  </li>
                  <li>
                    <Link href="/comprar-entradas" className="text-terracotta underline-offset-2 hover:underline">
                      Entradas y visitas
                    </Link>{' '}
                    — cada ficha muestra el precio que tiene hoy en el proveedor.
                  </li>
                  <li>
                    <Link href="/free-tours-lisboa" className="text-terracotta underline-offset-2 hover:underline">
                      Free tours de Lisboa
                    </Link>{' '}
                    — se paga al final lo que consideres, y bajan la partida de visitas.
                  </li>
                </ul>
              </Plegable>
            </div>
          </div>

          {/* La FAQ se queda visible: es lo que declara el FAQPage. */}
          <h2 className="mb-4 mt-10 font-display text-xl font-semibold text-text-main">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {FAQ.map((item) => (
              <div key={item.pregunta}>
                <h3 className="mb-1 font-body text-sm font-semibold text-text-main">
                  {item.pregunta}
                </h3>
                <p className="font-body text-[13px] leading-relaxed text-text-secondary">
                  {item.respuesta}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 border-l-2 border-border-soft pl-4 font-body text-[13px] leading-relaxed text-text-secondary">
            Con el presupuesto ya en la cabeza, el siguiente paso es el itinerario:{' '}
            <Link href="/pack-completo" className="text-terracotta underline-offset-2 hover:underline">
              elige según los días que tengas
            </Link>
            .
          </p>
        </div>
      </section>

      <BudgetMobileDock
        total={resultado.total}
        porPersona={resultado.porPersona}
        visible={!resultadoVisible}
        onOptimizar={() => {
          setVerMasAhorro(true);
          irA('optimizador');
        }}
      />
    </main>
  );
}

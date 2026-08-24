'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/Icon';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { AttractionTicketLink } from '@/components/afiliados/AttractionTicketLink';
import { BudgetDonut, categoriaDominante } from '@/components/calculadora/BudgetDonut';
import { BudgetMobileDock } from '@/components/calculadora/BudgetMobileDock';
import { BudgetOptimizer } from '@/components/calculadora/BudgetOptimizer';
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
 * página no calcula nada por su cuenta, y el motor no se ha tocado en el
 * rediseño.
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
 *     aparecen dentro del resultado, sólo para lo que el usuario ha marcado y
 *     sólo si existe un producto exacto en el registro central.
 *
 * Decisiones de interfaz, que es lo que cambió en el rediseño:
 *
 *   - Hero propio y bajo en vez de `EditorialPageHero`. Aquel mide 56vh y
 *     está pensado para páginas editoriales; en una herramienta empuja el
 *     primer control fuera de la pantalla del móvil. No se modifica el
 *     componente compartido, que lo usan otras páginas: se usa uno local.
 *   - Contadores «− n +» en vez de deslizadores. Un deslizador de 14 pasos
 *     con el pulgar es impreciso; el contador acierta siempre y ocupa menos.
 *   - Dos pasos numerados, configurar y resultado, para que en móvil se sepa
 *     dónde se está sin leer nada.
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

/* --------------------------------------------------------------- primitivas */

function PasoTitulo({ numero, children }: { numero: number; children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span
        aria-hidden="true"
        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-night font-body text-sm font-bold text-white"
      >
        {numero}
      </span>
      <h2 className="font-display text-xl font-semibold leading-tight text-text-main md:text-2xl">
        {children}
      </h2>
    </div>
  );
}

function GrupoTitulo({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
      {children}
    </p>
  );
}

/**
 * Contador táctil. Sustituye al deslizador porque con el pulgar es más
 * preciso y ocupa menos alto: en un móvil de 375 px, tres deslizadores con
 * sus extremos empujaban el resto del formulario fuera de la pantalla.
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
  sufijoUno,
  sufijoVarios,
  onChange,
}: {
  control: string;
  etiqueta: string;
  valor: number;
  min: number;
  max: number;
  sufijoUno: string;
  sufijoVarios: string;
  onChange: (valor: number) => void;
}) {
  const sufijo = valor === 1 ? sufijoUno : sufijoVarios;

  return (
    <div
      data-control={control}
      className="flex items-center justify-between gap-3 rounded-lg border border-border-soft bg-white px-3 py-2"
    >
      <span id={`${control}-etiqueta`} className="font-body text-sm font-semibold text-text-main">
        {etiqueta}
      </span>
      <div className="flex items-center gap-1">
        <button
          type="button"
          aria-label={`Reducir ${etiqueta.toLowerCase()}`}
          disabled={valor <= min}
          onClick={() => onChange(Math.max(min, valor - 1))}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-border-soft font-body text-lg font-semibold text-text-main transition-colors hover:border-terracotta hover:text-terracotta disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-border-soft disabled:hover:text-text-main"
        >
          <span aria-hidden="true">−</span>
        </button>
        <output
          aria-live="polite"
          aria-labelledby={`${control}-etiqueta`}
          className="min-w-[5.5rem] text-center font-body text-sm font-semibold text-text-main"
        >
          {valor} {sufijo}
        </output>
        <button
          type="button"
          aria-label={`Aumentar ${etiqueta.toLowerCase()}`}
          disabled={valor >= max}
          onClick={() => onChange(Math.min(max, valor + 1))}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-border-soft font-body text-lg font-semibold text-text-main transition-colors hover:border-terracotta hover:text-terracotta disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-border-soft disabled:hover:text-text-main"
        >
          <span aria-hidden="true">+</span>
        </button>
      </div>
    </div>
  );
}

/**
 * Tarjeta de opción. El estado seleccionado se marca con anillo, fondo y una
 * marca de verificación: nunca sólo con color, para que se distinga sin
 * depender de percibirlo.
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
      className={`flex min-h-[4.5rem] w-full flex-col justify-center rounded-lg px-4 py-3 text-left transition-all duration-200 ${
        activa
          ? 'bg-white shadow-card ring-2 ring-gold'
          : 'border border-border-soft bg-white/60 hover:border-taupe hover:shadow-soft'
      }`}
    >
      <span className="flex items-center justify-between gap-2">
        <span className="font-body text-sm font-semibold text-text-main">{label}</span>
        {activa && (
          <Icon name="check" size={16} className="flex-shrink-0 text-terracotta" />
        )}
      </span>
      <span className="mt-1 block font-body text-xs leading-snug text-text-secondary">
        {desc}
      </span>
    </button>
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
      <p className="mb-3 font-body text-xs leading-relaxed text-text-secondary">{ayuda}</p>
      <div className="grid gap-2.5 sm:grid-cols-2">
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
          className="form-input max-w-[10rem]"
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

/* ------------------------------------------------------------------ consejo */

/**
 * Consejo contextual. Tres reglas simples y deterministas sobre lo que la
 * persona acaba de elegir, más uno estable de repliegue. Nada dinámico, nada
 * personalizado de mentira: si ninguna regla aplica, sale siempre el mismo.
 */
function elegirConsejo({
  atracciones,
  noches,
  dias,
}: {
  atracciones: number;
  noches: number;
  dias: number;
}): string {
  if (noches === 0 && dias > 1) {
    return 'Has puesto 0 noches, así que el alojamiento no cuenta nada. Si vas a dormir en Lisboa, súbelas: suele ser la partida más grande de todas.';
  }
  if (atracciones === 0) {
    return 'Sin entradas marcadas, la partida de visitas se queda en cero. Es un escenario real: miradores, barrios y los paseos junto al Tajo no cuestan nada, y dan para varios días.';
  }
  if (atracciones >= 5) {
    return 'Con tantas entradas, mira los horarios antes de repartirlas: encadenar cinco visitas de pago en pocos días sale caro en tiempo, no sólo en dinero.';
  }
  return 'Los rangos son anchos a propósito. En cuanto reserves el alojamiento, pon el importe real: es lo que más estrecha el resultado.';
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

  // Optimizador: panel abierto, último cambio aplicado y el input previo para
  // poder deshacerlo. Un solo paso atrás, no un historial.
  const [optimizadorAbierto, setOptimizadorAbierto] = useState(false);
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

  const irAlResultado = useCallback((foco: 'panel' | 'optimizador' = 'panel') => {
    const destino = foco === 'optimizador' ? optimizadorRef.current : resultadoRef.current;
    destino?.scrollIntoView({
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

  function abrirOptimizador() {
    setOptimizadorAbierto(true);
    irAlResultado('optimizador');
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

  const sintraMarcadas = resultado.atraccionesSeleccionadas.filter((a) => a.zona === 'sintra');
  const conEntradas = resultado.atraccionesSeleccionadas.filter((a) => a.bookingProductId);
  const sinEntradas = resultado.atraccionesSeleccionadas.filter((a) => !a.bookingProductId);
  const consejo = elegirConsejo({ atracciones: atracciones.length, noches, dias });
  const dominante = categoriaDominante(resultado.categorias);
  const importeVuelos = normalizarImporte(vuelos);

  const resumenAlojamiento =
    modoAlojamiento === 'propio'
      ? 'Alojamiento ya reservado'
      : `Alojamiento ${OPCIONES_ALOJAMIENTO.find((o) => o.id === nivelAlojamiento)?.label.toLowerCase()}`;

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
@media (prefers-reduced-motion: reduce) {
  .budget-cifra { animation: none; }
  .budget-donut-segmento { transition: none; }
}`,
        }}
      />

      {/*
        Hero propio, bajo a propósito. `EditorialPageHero` mide 56vh y está
        pensado para artículos; aquí dejaba el primer control por debajo del
        pliegue en cualquier móvil. No se toca el componente compartido.
      */}
      <section className="relative min-h-[15rem] overflow-hidden md:min-h-[19rem]">
        <Image
          src="/images/bica-cafe-mapa.jpg"
          alt="Un mapa de Lisboa y un café sobre la mesa de una terraza"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="editorial-page-hero-overlay absolute inset-0"
        />
        <div className="site-container absolute inset-x-0 bottom-0 pb-6 pt-24 md:pb-8">
          <p className="mb-2 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">
            Herramienta
          </p>
          <h1 className="max-w-[20ch] font-display text-[1.75rem] italic leading-tight text-white md:text-4xl">
            Calculadora de presupuesto para Lisboa
          </h1>
          <p className="mt-3 font-body text-sm leading-relaxed text-white/85 md:text-base">
            Calcula cuánto puede costarte tu viaje.
            <span className="ml-2 whitespace-nowrap rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white">
              Gratis · Sin registro
            </span>
          </p>
        </div>
      </section>

      <section className="bg-background-light pt-8 md:pt-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="max-w-2xl font-body text-sm leading-relaxed text-text-secondary md:text-[15px]">
            Ajusta los controles y verás entre qué dos cifras se mueve el gasto. No hay
            precio cerrado, porque no existe: depende de la temporada, de la antelación con
            la que reserves y de decisiones que aún no has tomado. Lo que ya sepas con
            certeza puedes introducirlo, y entra tal cual.
          </p>
        </div>
      </section>

      {/* PASO 1 + PASO 2 */}
      <section className="bg-background-light py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr,1fr] lg:items-start lg:gap-12">
            {/* ---------------------------------------------------- PASO 1 */}
            <div>
              <PasoTitulo numero={1}>Configura tu viaje</PasoTitulo>

              <div className="space-y-8">
                {/* Tu viaje */}
                <div>
                  <GrupoTitulo>Tu viaje</GrupoTitulo>
                  <div className="space-y-2.5">
                    <Contador
                      control="dias"
                      etiqueta="Días"
                      valor={dias}
                      min={LIMITES.diasMin}
                      max={LIMITES.diasMax}
                      sufijoUno="día"
                      sufijoVarios="días"
                      onChange={cambiarDias}
                    />
                    <Contador
                      control="noches"
                      etiqueta="Noches"
                      valor={noches}
                      min={LIMITES.nochesMin}
                      max={LIMITES.nochesMax}
                      sufijoUno="noche"
                      sufijoVarios="noches"
                      onChange={cambiarNoches}
                    />
                    <Contador
                      control="personas"
                      etiqueta="Personas"
                      valor={personas}
                      min={LIMITES.personasMin}
                      max={LIMITES.personasMax}
                      sufijoUno="persona"
                      sufijoVarios="personas"
                      onChange={setPersonas}
                    />
                  </div>
                  <p className="mt-2.5 font-body text-xs leading-relaxed text-text-secondary">
                    Las noches se sugieren solas —una menos que los días— hasta que las
                    cambias. A partir de ahí mandas tú.
                  </p>
                </div>

                {/* Alojamiento */}
                <div>
                  <GrupoTitulo>Alojamiento</GrupoTitulo>
                  <fieldset className="border-0 p-0">
                    <legend className="mb-1 font-body text-sm font-semibold text-text-main">
                      Dónde vas a dormir
                    </legend>
                    <p className="mb-3 font-body text-xs leading-relaxed text-text-secondary">
                      Lo estimado se cuenta por habitación y noche, con dos personas por
                      habitación.
                    </p>
                    <div className="grid gap-2.5 sm:grid-cols-2">
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
                        desc="Ya lo tengo reservado y sé lo que pago"
                        activa={modoAlojamiento === 'propio'}
                        onClick={() => setModoAlojamiento('propio')}
                      />
                    </div>
                  </fieldset>

                  {modoAlojamiento === 'propio' && (
                    <div
                      data-control="alojamiento-propio"
                      className="mt-3 rounded-lg border border-gold/50 bg-white p-4"
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
                            ? 'Escribe el importe total para que entre en el cálculo. Mientras esté vacío, el alojamiento cuenta 0 €.'
                            : undefined
                        }
                      />
                    </div>
                  )}
                </div>

                {/* Comida y transporte */}
                <div className="space-y-6">
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

                {/* Atracciones */}
                <div>
                  <GrupoTitulo>Qué quieres visitar</GrupoTitulo>
                  <fieldset data-control="atracciones" className="border-0 p-0">
                    <legend className="mb-1 font-body text-sm font-semibold text-text-main">
                      ¿Qué lugares quieres visitar?
                    </legend>
                    <p className="mb-3 font-body text-xs leading-relaxed text-text-secondary">
                      Sólo sitios de pago. Cada uno se suma una vez por persona; los
                      miradores, los barrios y pasear no están porque no cuestan nada.
                    </p>
                    <div className="overflow-hidden rounded-lg border border-border-soft bg-white">
                      {ATRACCIONES.map((atraccion, i) => {
                        const marcada = atracciones.includes(atraccion.id);
                        return (
                          <label
                            key={atraccion.id}
                            className={`flex min-h-[3.25rem] cursor-pointer items-center gap-3 px-4 py-2.5 transition-colors ${
                              i > 0 ? 'border-t border-border-soft' : ''
                            } ${marcada ? 'bg-gold/10' : 'hover:bg-background-light'}`}
                          >
                            <input
                              type="checkbox"
                              checked={marcada}
                              onChange={() => alternarAtraccion(atraccion.id)}
                              className="h-5 w-5 flex-shrink-0 rounded border-border-soft text-terracotta focus:ring-terracotta/30"
                            />
                            <span className="min-w-0 flex-1">
                              <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                                <span className="font-body text-sm font-semibold text-text-main">
                                  {atraccion.nombre}
                                </span>
                                {atraccion.zona === 'sintra' && (
                                  <span className="rounded-full bg-border-soft px-2 py-0.5 font-body text-[10px] font-bold uppercase tracking-wider text-text-secondary">
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

                  <div className="mt-3 rounded-lg border border-border-soft bg-white p-4">
                    <label htmlFor="sintra" className="flex cursor-pointer items-start gap-3">
                      <input
                        id="sintra"
                        type="checkbox"
                        checked={excursionSintra}
                        onChange={(e) => setExcursionSintra(e.target.checked)}
                        className="mt-0.5 h-5 w-5 flex-shrink-0 rounded border-border-soft text-terracotta focus:ring-terracotta/30"
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
                        {sintraMarcadas.length === 1 ? 'sitio' : 'sitios'} en Sintra. Si vas
                        a subir, marca también el día de Sintra para contar el viaje.
                      </p>
                    )}
                  </div>
                </div>

                {/* Gastos conocidos */}
                <div>
                  <GrupoTitulo>¿Ya tienes algo reservado?</GrupoTitulo>
                  <p className="mb-3 font-body text-xs leading-relaxed text-text-secondary">
                    Opcional. Lo que pongas aquí entra exacto, sin rango. El alojamiento se
                    introduce arriba, en su propio bloque.
                  </p>
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

                {/*
                  Sólo en móvil: en escritorio el resultado está a la vista, en
                  la columna de al lado, así que un botón para ir a él sobraría.
                  Aquí sí hace algo real: lleva el foco y la vista al panel.
                */}
                <button
                  type="button"
                  onClick={() => irAlResultado('panel')}
                  className="btn-primary w-full justify-center py-3.5 text-base lg:hidden"
                >
                  Ver mi presupuesto
                </button>
              </div>
            </div>

            {/* ---------------------------------------------------- PASO 2 */}
            <div className="lg:sticky lg:top-24">
              <PasoTitulo numero={2}>Tu presupuesto</PasoTitulo>

              <div
                ref={resultadoRef}
                tabIndex={-1}
                aria-live="polite"
                className="overflow-hidden rounded-xl border border-border-soft bg-white shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {/* Cabecera: el total manda */}
                <div className="bg-night px-6 py-6 text-white md:px-7">
                  <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    Así queda tu viaje
                  </p>
                  <p className="mt-3 font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
                    Total para el grupo
                  </p>
                  <p
                    key={`total-${formatRango(resultado.total)}`}
                    className="budget-cifra mt-1 font-display text-[2rem] font-semibold leading-none md:text-[2.5rem]"
                  >
                    {formatRango(resultado.total)}
                  </p>
                  <p className="mt-3 border-t border-white/15 pt-3 font-body text-sm text-white/85">
                    <span className="font-semibold text-white">Por persona</span>{' '}
                    {formatRango(resultado.porPersona)}
                    <span className="mx-2 text-white/40">·</span>
                    {formatRango(resultado.porPersonaYDia)} al día
                  </p>
                </div>

                <div className="px-6 py-5 md:px-7">
                  <p className="font-body text-xs leading-relaxed text-text-secondary">
                    {resultado.dias} {resultado.dias === 1 ? 'día' : 'días'} ·{' '}
                    {resultado.personas} {resultado.personas === 1 ? 'persona' : 'personas'} ·{' '}
                    {resultado.noches === 0
                      ? 'sin dormir en Lisboa'
                      : `${resultado.noches} ${resultado.noches === 1 ? 'noche' : 'noches'}`}
                    <span className="mx-1.5">·</span>
                    {resumenAlojamiento}
                  </p>

                  {/* Reparto del presupuesto */}
                  {resultado.total.max > 0 && (
                    <div className="mt-5 border-t border-border-soft pt-4">
                      <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
                        En qué se va
                      </p>
                      <BudgetDonut
                        categorias={resultado.categorias}
                        total={resultado.total}
                        vuelos={importeVuelos > 0 ? importeVuelos : null}
                      />
                      {dominante && (
                        <p className="mt-3 flex items-start gap-2 rounded-lg bg-background-light px-3 py-2 font-body text-xs leading-relaxed text-text-main">
                          <Icon
                            name="info"
                            size={14}
                            className="mt-0.5 flex-shrink-0 text-terracotta"
                          />
                          <span>
                            Ahora mismo,{' '}
                            <strong className="font-semibold">{dominante.frase}</strong> es la
                            partida que más pesa en tu viaje.
                          </span>
                        </p>
                      )}
                    </div>
                  )}

                  {/* Segundo bloque: gasto en destino */}
                  <div className="mt-5 rounded-lg border border-border-soft bg-background-light px-4 py-3">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-body text-sm font-semibold text-text-main">
                        Gastos en destino
                      </span>
                      <span className="font-body text-base font-semibold text-text-main">
                        {formatRango(resultado.sinAlojamiento)}
                      </span>
                    </div>
                    <p className="mt-0.5 font-body text-xs text-text-secondary">
                      sin alojamiento ni vuelos
                    </p>
                  </div>

                  {/* Desglose tipo recibo */}
                  <div className="mt-5 border-t border-border-soft pt-4">
                    <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
                      Desglose
                    </p>
                    <ul className="space-y-2.5">
                      {resultado.categorias.map((categoria) => (
                        <li key={categoria.id} className="grid grid-cols-[1fr,auto] gap-x-3">
                          <span className="font-body text-sm text-text-main">
                            {categoria.label}
                          </span>
                          <span className="text-right font-body text-sm font-semibold tabular-nums text-text-main">
                            {formatRango(categoria.rango)}
                          </span>
                          <span className="font-body text-xs leading-snug text-text-secondary">
                            {categoria.base}
                            {categoria.origen === 'introducido' && ' · importe tuyo'}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {!resultado.vuelosIncluidos && (
                    <p className="mt-4 border-t border-border-soft pt-4 font-body text-sm text-text-main">
                      Vuelos no incluidos.
                    </p>
                  )}

                  {/* Entradas seleccionadas */}
                  {resultado.atraccionesSeleccionadas.length > 0 && (
                    <div className="mt-5 border-t border-border-soft pt-4">
                      <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
                        Entradas seleccionadas
                      </p>
                      <ul className="space-y-2.5">
                        {conEntradas.map((atraccion) => (
                          <li
                            key={atraccion.id}
                            className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1"
                          >
                            <span className="font-body text-sm text-text-main">
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
                            <span className="font-body text-sm text-text-main">
                              {atraccion.nombre}
                            </span>
                            <span className="font-body text-xs text-text-secondary">
                              se compra en su web
                            </span>
                          </li>
                        ))}
                      </ul>
                      {conEntradas.length > 0 && (
                        <AffiliateDisclosure
                          variant="compact"
                          className="mt-3 text-text-secondary"
                        />
                      )}
                    </div>
                  )}

                  {/* Optimizador */}
                  <div ref={optimizadorRef} className="mt-5 scroll-mt-24">
                    <BudgetOptimizer
                      id="optimizador-presupuesto"
                      abierto={optimizadorAbierto}
                      sugerencias={sugerencias}
                      aplicada={ultimaAplicada}
                      puedeDeshacer={inputAnterior !== null}
                      onToggle={() => setOptimizadorAbierto((v) => !v)}
                      onAplicar={aplicarSugerencia}
                      onDeshacer={deshacer}
                    />
                  </div>

                  {/* Consejo contextual */}
                  <div className="mt-5 flex items-start gap-2.5 border-t border-border-soft pt-4">
                    <Icon
                      name="lightbulb"
                      size={16}
                      className="mt-0.5 flex-shrink-0 text-gold"
                    />
                    <p className="font-body text-xs leading-relaxed text-text-secondary">
                      {consejo}
                    </p>
                  </div>

                  <p className="mt-4 font-body text-xs leading-relaxed text-text-secondary">
                    Es una estimación, no un precio. Los rangos son anchos a propósito.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="border-t border-border-soft" />
      </div>

      {/* Qué no incluye y cómo se calcula — peso visual secundario */}
      <section className="bg-background-light py-12 md:py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="mb-3 font-display text-xl font-semibold text-text-main">
              Qué no está contado
            </h2>
            <ul className="space-y-1.5">
              {NO_INCLUIDO.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-body text-sm leading-relaxed text-text-secondary"
                >
                  <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-terracotta" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">
              Los vuelos tampoco se estiman, pero puedes sumarlos arriba si ya sabes lo que
              te cuestan.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-xl font-semibold text-text-main">
              Cómo se calcula
            </h2>
            <ol className="space-y-2.5">
              {BUDGET_ASSUMPTIONS.map((regla, i) => (
                <li
                  key={regla}
                  className="flex items-start gap-2.5 font-body text-sm leading-relaxed text-text-secondary"
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
      <section className="bg-background-light py-12 md:py-14">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-2 font-display text-xl font-semibold text-text-main">
            Dónde mirar los precios de verdad
          </h2>
          <p className="mb-4 font-body text-sm leading-relaxed text-text-secondary">
            Esta página trabaja con tramos de gasto, no con tarifas. Los precios concretos
            cambian, así que viven donde se pueden mantener al día:
          </p>
          <ul className="space-y-2.5 font-body text-sm leading-relaxed text-text-secondary">
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

      {/* FAQ. El padding inferior extra en móvil deja sitio al dock fijo. */}
      <section className="bg-background-light pb-32 lg:pb-14">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-5 font-display text-xl font-semibold text-text-main">
            Preguntas frecuentes
          </h2>
          <div className="space-y-5">
            {FAQ.map((item) => (
              <div key={item.pregunta}>
                <h3 className="mb-1.5 font-body text-[15px] font-semibold text-text-main">
                  {item.pregunta}
                </h3>
                <p className="font-body text-sm leading-relaxed text-text-secondary">
                  {item.respuesta}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 border-l-2 border-border-soft pl-4 font-body text-sm leading-relaxed text-text-secondary">
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

      <BudgetMobileDock
        total={resultado.total}
        porPersona={resultado.porPersona}
        visible={!resultadoVisible}
        onOptimizar={abrirOptimizador}
      />
    </main>
  );
}

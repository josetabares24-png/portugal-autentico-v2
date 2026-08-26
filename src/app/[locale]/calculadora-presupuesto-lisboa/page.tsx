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
import { BudgetSaveCard } from '@/components/calculadora/BudgetSaveCard';
import { formatRecomendado, getRecommendedBudget } from '@/lib/budget-recommended';
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
    pregunta: '¿Qué significa «presupuesto recomendado»?',
    respuesta:
      'Es una cifra práctica dentro del rango que estimamos para tu viaje: un número con el que puedes trabajar, en vez de un intervalo de varios cientos de euros. No es un precio cerrado. Las fechas, la disponibilidad, la antelación con la que reserves y las decisiones que todavía no has tomado pueden mover el gasto, y por eso seguimos enseñando también el rango completo debajo. Lo que sí entra tal cual es lo que introduces tú: si ya tienes el alojamiento reservado o sabes lo que cuestan tus vuelos, esos importes se usan sin margen añadido.',
  },
  {
    pregunta: '¿Incluye los vuelos?',
    respuesta:
      'No los estimamos, porque dependen de desde dónde viajes y no hay forma razonable de calcularlos aquí. Pero si ya sabes cuánto te cuestan, puedes sumar el importe total de tu grupo y aparecerán como una línea más del desglose. Si lo dejas vacío, el resultado avisa de que los vuelos no están contados.',
  },
  {
    pregunta: '¿Puedo poner el alojamiento que ya tengo reservado?',
    respuesta:
      'Sí, y es lo más recomendable en cuanto lo tengas. Elige «Importe propio» e introduce lo que pagas en total por toda la estancia y todo el grupo, no por noche ni por persona. Ese importe entra tal cual: es tu dato, no una estimación nuestra, y suele ser la partida que más estrecha el resultado. Mientras no escribas nada seguimos usando nuestra estimación, para que el presupuesto no se quede corto sin que te des cuenta.',
  },
  {
    pregunta: '¿Cuántas noches cuenta?',
    respuesta:
      'Las que tú le digas. Al empezar propone una menos que los días, porque lo habitual es llegar un día y marcharse otro: si llegas el lunes y te vas el jueves, son 4 días y 3 noches. Pero puedes cambiarlas, y a partir de ahí se quedan como las dejes. Tres días con tres noches es perfectamente posible, y una visita de un día sin dormir también.',
  },
  {
    pregunta: '¿Y si voy a Sintra?',
    respuesta:
      'Marca «Añadir transporte para un día en Sintra» y se suma el desplazamiento: el tren de ida y vuelta y moverse por allí, que está en cuesta y con los sitios separados. Las entradas de Sintra no van ahí: se marcan una a una en la lista de atracciones, igual que las de Lisboa, para que no se cuenten dos veces.',
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
      {/*
        Las etiquetas tienen longitudes muy distintas —«Personas» frente a
        «Noches de alojamiento»— y en tres columnas a 375 px unas envuelven y
        otras no. Con una altura mínima común y el texto apoyado abajo, los
        tres contadores quedan alineados envuelva la que envuelva. El
        `tracking` es algo más corto que en el resto de la página por la misma
        razón: aquí el ancho es el recurso escaso.
      */}
      <p
        id={`${control}-etiqueta`}
        className="mb-1.5 flex min-h-[2.1rem] items-end justify-center text-balance font-body text-[11px] font-semibold uppercase leading-tight tracking-[0.06em] text-text-secondary"
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
  const personalizarRef = useRef<HTMLDivElement>(null);
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

  /*
   * «Afinar presupuesto» abre Personalizar y lleva la vista hasta allí. No es
   * un formulario nuevo: los campos de alojamiento propio y vuelos ya existen,
   * sólo están plegados. Lo único que hace falta es dejar de esconderlos
   * cuando alguien pregunta cómo mejorar la cifra.
   */
  const afinar = useCallback(() => {
    setPersonalizarAbierto(true);
    personalizarRef.current?.scrollIntoView({
      behavior: prefiereMenosMovimiento() ? 'auto' : 'smooth',
      block: 'start',
    });
  }, []);

  /*
   * «Importe propio» elegido pero el campo todavía vacío no puede valer 0 €.
   * Contaba cero y el presupuesto caía de 565 a 315 € en el default: una cifra
   * engañosamente baja justo mientras la persona busca el importe real.
   *
   * Mientras no haya un importe, se sigue usando la estimación del nivel
   * elegido y se dice en voz alta que falta el dato. En cuanto hay un número
   * mayor que cero, entra exacto como siempre.
   *
   * Ojo: un 0 escrito a mano sí es un dato legítimo —quien duerme en casa de
   * alguien paga cero—, pero eso sólo se puede distinguir aquí, donde existe
   * la diferencia entre «vacío» y «cero». El motor no la ve ni tiene por qué.
   */
  const importeAlojamientoPropio = normalizarImporte(alojamientoPropio);
  const alojamientoPropioPendiente =
    modoAlojamiento === 'propio' && alojamientoPropio.trim() === '';

  const inputActual: BudgetInput = useMemo(
    () => ({
      dias,
      noches,
      personas,
      alojamiento:
        modoAlojamiento === 'propio' && alojamientoPropio.trim() !== ''
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
  const recomendado = useMemo(
    () => getRecommendedBudget(inputActual, resultado),
    [inputActual, resultado]
  );

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
  const dominante = categoriaDominante(recomendado.categorias);

  /*
   * Qué estamos contando, en una frase. Se arma con lo que de verdad hay en el
   * presupuesto, no con una lista fija: si no hay entradas marcadas no se
   * nombran, y los vuelos sólo aparecen si la persona puso su importe.
   */
  const queIncluye = (() => {
    const partes = ['alojamiento', 'comida', 'transporte'];
    if (excursionSintra) partes.push('Sintra');
    const entradas = recomendado.entradas.length;
    if (entradas > 0) {
      partes.push(`${entradas} ${entradas === 1 ? 'entrada' : 'entradas'}`);
    }
    const lista = `${partes.slice(0, -1).join(', ')} y ${partes[partes.length - 1]}`;
    const vuelos = resultado.vuelosIncluidos
      ? 'Vuelos incluidos con el importe que has indicado.'
      : 'Vuelos no incluidos.';
    return `Incluye ${lista}. ${vuelos}`;
  })();

  /*
   * Las dos partidas que la persona puede convertir en dato exacto. Cuando ya
   * están las dos, «¿Quieres afinarlo más?» sobra; cuando falta una, se nombra
   * sólo esa en vez de repetir las dos.
   */
  const alojamientoAfinado = modoAlojamiento === 'propio' && importeAlojamientoPropio > 0;
  const vuelosAfinados = resultado.vuelosIncluidos;
  const yaAfinado = alojamientoAfinado && vuelosAfinados;
  const faltaPorAfinar = !alojamientoAfinado && !vuelosAfinados
    ? 'alojamiento o vuelos'
    : !alojamientoAfinado
      ? 'alojamiento'
      : 'vuelos';
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
                    etiqueta="Días en Lisboa"
                    valor={dias}
                    min={LIMITES.diasMin}
                    max={LIMITES.diasMax}
                    onChange={cambiarDias}
                  />
                  <Contador
                    control="noches"
                    etiqueta="Noches de alojamiento"
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
                    Has puesto 0 noches, así que no contamos alojamiento.
                  </p>
                ) : (
                  <p className="mt-2.5 font-body text-[11px] leading-relaxed text-text-secondary">
                    Ejemplo: si llegas el lunes y te vas el jueves, son 4 días y 3 noches.
                    Puedes cambiar las noches si tu viaje es distinto.
                  </p>
                )}
              </Bloque>

              <Bloque titulo="¿Cómo quieres viajar?">
                <BudgetStylePresets activo={estilo} onElegir={elegirPreset} />

                <div ref={personalizarRef} className="mt-4 scroll-mt-24 border-t border-border-soft pt-3">
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
                                alojamientoPropioPendiente
                                  ? 'Añade el total del alojamiento para sustituir nuestra estimación.'
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
                    className="mt-2 flex cursor-pointer items-start gap-2.5 rounded-lg border border-border-soft bg-background-light px-3 py-2.5"
                  >
                    <input
                      id="sintra"
                      type="checkbox"
                      checked={excursionSintra}
                      onChange={(e) => setExcursionSintra(e.target.checked)}
                      className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-border-soft text-terracotta focus:ring-terracotta/30"
                    />
                    <span className="min-w-0">
                      <span className="block font-body text-[13px] font-semibold leading-snug text-text-main">
                        Añadir transporte para un día en Sintra
                      </span>
                      {/*
                        La ayuda va visible y no en un `title`: es justo el dato
                        que evita la duda de si las entradas están dentro.
                      */}
                      <span className="mt-0.5 block font-body text-[11px] leading-relaxed text-text-secondary">
                        Incluye el desplazamiento y el transporte local. Las entradas de Sintra
                        se calculan aparte.
                      </span>
                    </span>
                  </label>
                  {sintraMarcadas.length > 0 && !excursionSintra && (
                    <p role="status" className="mt-2 font-body text-[11px] leading-relaxed text-terracotta">
                      Has marcado {sintraMarcadas.length}{' '}
                      {sintraMarcadas.length === 1 ? 'sitio' : 'sitios'} en Sintra. Si vas a
                      {sintraMarcadas.length === 1 ? ' visitarlo' : ' visitarlos'}, añade también
                      el transporte del día.
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
                {/*
                  La cifra protagonista es una sola. Un rango de trescientos
                  euros de recorrido es honesto pero no se puede usar: nadie
                  aparta «385 – 675 €» para un viaje. El rango no desaparece,
                  baja un escalón —sigue aquí abajo y en el desglose— y arriba
                  queda lo que la persona vino a preguntar.
                */}
                <div className="bg-night px-5 py-5 text-white md:px-6">
                  <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
                    Tu presupuesto recomendado
                  </p>
                  <p
                    key={`total-${recomendado.total}`}
                    className="budget-cifra mt-1 font-display text-[2.6rem] font-semibold leading-none md:text-[3rem]"
                  >
                    {formatRecomendado(recomendado.total)}
                  </p>
                  {/* Días, noches y personas, en el orden en que se piensa un viaje. */}
                  <p className="mt-1.5 font-body text-[13px] text-white/75">
                    {resultado.dias} {resultado.dias === 1 ? 'día' : 'días'}
                    <span className="mx-1.5 text-white/40">·</span>
                    {resultado.noches === 0
                      ? 'sin dormir en Lisboa'
                      : `${resultado.noches} ${resultado.noches === 1 ? 'noche' : 'noches'}`}
                    <span className="mx-1.5 text-white/40">·</span>
                    {resultado.personas} {resultado.personas === 1 ? 'persona' : 'personas'}
                  </p>
                  <p className="mt-2.5 border-t border-white/15 pt-2.5 font-body text-sm text-white/85">
                    <span className="font-semibold text-white">
                      ≈ {formatRecomendado(recomendado.porPersona)}
                    </span>{' '}
                    por persona
                    <span className="mx-2 text-white/40">·</span>≈{' '}
                    {formatRecomendado(recomendado.porPersonaYDia)} al día
                  </p>
                </div>

                <div className="px-5 py-4 md:px-6">
                  {/*
                    Qué estamos contando, en una frase. Antes había que abrir el
                    desglose para saber si los vuelos estaban dentro, y esa es
                    justo la duda que aparece al ver la cifra por primera vez.
                  */}
                  <p className="font-body text-[12px] leading-relaxed text-text-main">
                    {queIncluye}
                  </p>

                  <div className="mt-3 flex items-baseline justify-between gap-3 rounded-lg bg-background-light px-3 py-2.5">
                    <span className="min-w-0 font-body text-[13px] text-text-main">
                      Gasto recomendado en destino
                      <span className="block text-[11px] text-text-secondary">
                        sin alojamiento ni vuelos · rango {formatRango(resultado.sinAlojamiento)}
                      </span>
                    </span>
                    <span className="flex-shrink-0 whitespace-nowrap font-body text-[15px] font-semibold tabular-nums text-text-main">
                      {formatRecomendado(recomendado.enDestino)}
                    </span>
                  </div>

                  <div className="mt-2 flex items-baseline justify-between gap-3 rounded-lg bg-background-light px-3 py-2.5">
                    <span className="min-w-0 font-body text-[13px] text-text-main">
                      Rango estimado
                      <span className="block text-[11px] text-text-secondary">
                        Puede variar según fechas, disponibilidad y las decisiones finales del
                        viaje.
                      </span>
                    </span>
                    <span className="flex-shrink-0 whitespace-nowrap font-body text-[15px] font-semibold tabular-nums text-text-main">
                      {formatRango(resultado.total)}
                    </span>
                  </div>

                  {/*
                    Atajo a «Personalizar». No es un formulario nuevo: los
                    campos ya existen, sólo están plegados. Lo único que
                    aporta es decir en voz alta que un importe real vale más
                    que cualquier estimación nuestra.
                  */}
                  {/*
                    Deja de insistir cuando ya no hay nada que afinar. Repetir
                    «introduce tus importes» a quien ya los ha introducido es
                    ruido, y además hace dudar de si se han recogido bien.
                  */}
                  {yaAfinado ? (
                    <p className="mt-3 flex items-start gap-1.5 font-body text-[11px] leading-relaxed text-text-secondary">
                      <span aria-hidden="true" className="mt-0.5 text-terracotta">
                        <Icon name="check" size={13} />
                      </span>
                      Ya estamos usando tus importes de alojamiento y vuelos.
                    </p>
                  ) : (
                    <div className="mt-3 rounded-lg border border-dashed border-taupe/50 px-3 py-2.5">
                      <p className="font-body text-[12px] font-semibold text-text-main">
                        ¿Quieres afinarlo más?
                      </p>
                      <p className="mt-0.5 font-body text-[11px] leading-relaxed text-text-secondary">
                        Si ya sabes cuánto pagarás por {faltaPorAfinar}, introduce{' '}
                        {faltaPorAfinar.includes(' y ') ? 'esos importes' : 'ese importe'} en
                        Personalizar y {faltaPorAfinar.includes(' y ') ? 'los' : 'lo'} usaremos
                        tal cual.
                      </p>
                      <button
                        type="button"
                        onClick={afinar}
                        className="mt-2 font-body text-[12px] font-semibold text-terracotta underline underline-offset-2 hover:no-underline"
                      >
                        Afinar presupuesto
                      </button>
                    </div>
                  )}

                  <div className="mt-3 border-t border-border-soft pt-3">
                    <Plegable titulo="Ver el desglose completo">
                      <ul className="space-y-2">
                        {recomendado.categorias.map((categoria) => (
                          <li key={categoria.id} className="grid grid-cols-[1fr,auto] gap-x-3">
                            <span className="font-body text-[13px] text-text-main">
                              {categoria.label}
                            </span>
                            <span className="text-right font-body text-[13px] font-semibold tabular-nums text-text-main">
                              {formatRecomendado(categoria.importe)}
                            </span>
                            <span className="font-body text-[11px] leading-snug text-text-secondary">
                              {categoria.origen === 'introducido'
                                ? 'Importe que has indicado'
                                : `${formatRango(categoria.rango)} estimados`}
                            </span>
                          </li>
                        ))}

                        {/*
                          Cuando la suma no cae en un múltiplo de cinco, la
                          diferencia aparece como línea propia. Preferimos una
                          fila fea a que las columnas no sumen: si alguien
                          suma el desglose a mano y le falta un euro, deja de
                          creerse el resto.
                        */}
                        {recomendado.redondeo > 0 && (
                          <li className="grid grid-cols-[1fr,auto] gap-x-3">
                            <span className="font-body text-[13px] text-text-secondary">
                              Redondeo
                            </span>
                            <span className="text-right font-body text-[13px] tabular-nums text-text-secondary">
                              {formatRecomendado(recomendado.redondeo)}
                            </span>
                          </li>
                        )}

                        <li className="grid grid-cols-[1fr,auto] gap-x-3 border-t border-border-soft pt-2">
                          <span className="font-body text-[13px] font-semibold text-text-main">
                            Total recomendado
                          </span>
                          <span className="text-right font-body text-[13px] font-semibold tabular-nums text-text-main">
                            {formatRecomendado(recomendado.total)}
                          </span>
                        </li>
                      </ul>

                      {recomendado.entradas.length > 0 && (
                        <div className="mt-3 border-t border-border-soft pt-3">
                          <p className="mb-2 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-text-secondary">
                            Entradas, una a una
                          </p>
                          <ul className="space-y-1.5">
                            {recomendado.entradas.map((linea) => (
                              <li
                                key={linea.atraccion.id}
                                className="grid grid-cols-[1fr,auto] gap-x-3"
                              >
                                <span className="font-body text-[12px] text-text-main">
                                  {linea.atraccion.nombre}
                                </span>
                                <span className="text-right font-body text-[12px] font-semibold tabular-nums text-text-main">
                                  {formatRecomendado(linea.subtotal)}
                                </span>
                                <span className="font-body text-[11px] text-text-secondary">
                                  {linea.porPersona} € × {linea.personas}{' '}
                                  {linea.personas === 1 ? 'persona' : 'personas'}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <p className="mt-3 font-body text-[11px] leading-relaxed text-text-secondary">
                        Cada partida es un punto dentro de su rango estimado, no un precio. Lo que
                        has introducido tú entra tal cual.
                      </p>
                    </Plegable>
                  </div>
                </div>
              </div>

              {recomendado.total > 0 && (
                <Bloque titulo="Así se distribuye tu presupuesto">
                  <BudgetDonut recomendado={recomendado} />
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

              {/*
                Guardar va DESPUÉS del optimizador, no antes. Antes se ofrecía
                llevarse el PDF y sólo entonces aparecía «gastar menos», lo que
                invitaba a descargar una versión que la propia página iba a
                proponer cambiar dos centímetros más abajo. Primero se termina
                de ajustar, después se guarda.

                Recibe `inputActual`, así que si se aplica una sugerencia el PDF
                y el email salen ya con el presupuesto nuevo, sin nada que
                sincronizar.
              */}
              {resultado.total.max > 0 && <BudgetSaveCard input={inputActual} />}

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
        total={recomendado.total}
        porPersona={recomendado.porPersona}
        visible={!resultadoVisible}
        onOptimizar={() => {
          setVerMasAhorro(true);
          irA('optimizador');
        }}
      />
    </main>
  );
}

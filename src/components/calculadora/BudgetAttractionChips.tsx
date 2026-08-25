'use client';

import Icon from '@/components/Icon';
import { ATRACCIONES, type Atraccion } from '@/lib/budget-calculator';

/*
 * Selector de lugares de pago.
 *
 * **Los nombres van completos.** El intento anterior los abrevió —«Castelo»,
 * «Pena», «Mouros»— para que cupieran en una línea, y eso es pedirle a alguien
 * que marque una casilla sin saber del todo qué está marcando. Aquí se paga
 * con quince píxeles de alto y se cobra en claridad: la tarjeta crece hasta
 * dos líneas y no hay truncado, ni puntos suspensivos, ni `line-clamp`.
 *
 * **Lisboa y Sintra van separadas.** El grupo lo dice una vez, en su
 * encabezado, en lugar de repetir una etiqueta «Sintra» dentro de cada
 * tarjeta: además de ser redundante, ese distintivo se comía el ancho que
 * necesitaba el nombre.
 *
 * **Preparado para crecer.** La lista que se pinta sale de `DESTACADAS_IDS`,
 * no de `ATRACCIONES` directamente. Hoy coinciden —las ocho son las ocho— y
 * por eso no aparece ningún «Ver más lugares»: un botón que abre un panel
 * vacío es peor que no tenerlo. El día que el catálogo tenga quince, las que
 * no estén destacadas caen solas en `resto` y el botón aparece sin tocar el
 * formulario.
 *
 * El estado vive en un único sitio, `atracciones[]` de la página, así que una
 * atracción no puede quedar marcada dos veces aunque algún día se pinte en
 * dos listas.
 */

/**
 * Las que se ven de entrada. Escritas a mano y no derivadas de `ATRACCIONES`:
 * es justo lo que hace que una atracción nueva del catálogo no se cuele en el
 * bloque principal sin que alguien lo decida.
 */
const DESTACADAS_IDS: readonly string[] = [
  'castelo-sao-jorge',
  'mosteiro-jeronimos',
  'torre-belem',
  'maat',
  'oceanario',
  'palacio-pena',
  'quinta-regaleira',
  'castelo-mouros',
];

function Chip({
  atraccion,
  marcada,
  onAlternar,
}: {
  atraccion: Atraccion;
  marcada: boolean;
  onAlternar: (id: string) => void;
}) {
  return (
    <label
      title={atraccion.desc}
      className={`flex min-h-[3.5rem] cursor-pointer items-center gap-2 rounded-lg px-2.5 py-2 transition-all duration-200 ${
        marcada
          ? 'bg-white shadow-card ring-2 ring-gold'
          : 'border border-border-soft bg-white/60 hover:border-taupe'
      }`}
    >
      <input
        type="checkbox"
        checked={marcada}
        onChange={() => onAlternar(atraccion.id)}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border ${
          marcada ? 'border-terracotta bg-terracotta text-white' : 'border-border-soft bg-white'
        }`}
      >
        {marcada && <Icon name="check" size={11} />}
      </span>
      <span className="min-w-0 flex-1 font-body text-[13px] font-semibold leading-tight text-text-main">
        {atraccion.nombre}
      </span>
    </label>
  );
}

function Grupo({
  titulo,
  atracciones,
  seleccionadas,
  onAlternar,
  children,
}: {
  titulo: string;
  atracciones: readonly Atraccion[];
  seleccionadas: readonly string[];
  onAlternar: (id: string) => void;
  children?: React.ReactNode;
}) {
  if (atracciones.length === 0) return null;

  return (
    <fieldset className="border-0 p-0">
      <legend className="mb-2 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-text-secondary">
        {titulo}
      </legend>
      <div className="grid grid-cols-2 gap-2">
        {atracciones.map((atraccion) => (
          <Chip
            key={atraccion.id}
            atraccion={atraccion}
            marcada={seleccionadas.includes(atraccion.id)}
            onAlternar={onAlternar}
          />
        ))}
      </div>
      {children}
    </fieldset>
  );
}

export function BudgetAttractionChips({
  seleccionadas,
  onAlternar,
  children,
}: {
  seleccionadas: readonly string[];
  onAlternar: (id: string) => void;
  /** Va debajo del grupo de Sintra: el transporte de la excursión. */
  children?: React.ReactNode;
}) {
  const destacadas = ATRACCIONES.filter((a) => DESTACADAS_IDS.includes(a.id));
  const resto = ATRACCIONES.filter((a) => !DESTACADAS_IDS.includes(a.id));

  const lisboa = destacadas.filter((a) => a.zona === 'lisboa');
  const sintra = destacadas.filter((a) => a.zona === 'sintra');

  return (
    <div data-control="atracciones" className="space-y-4">
      <Grupo
        titulo="Lisboa"
        atracciones={lisboa}
        seleccionadas={seleccionadas}
        onAlternar={onAlternar}
      />

      <Grupo
        titulo="Sintra"
        atracciones={sintra}
        seleccionadas={seleccionadas}
        onAlternar={onAlternar}
      >
        {children}
      </Grupo>

      {/*
        Hoy `resto` está vacío y esto no se pinta. Está escrito para que el
        día que el catálogo crezca no haya que rehacer nada; y está detrás de
        una condición para que nadie se encuentre con un botón que no lleva a
        ninguna parte.
      */}
      {resto.length > 0 && (
        <Grupo
          titulo="Más lugares"
          atracciones={resto}
          seleccionadas={seleccionadas}
          onAlternar={onAlternar}
        />
      )}
    </div>
  );
}

/**
 * El presupuesto en PDF.
 *
 * Este módulo **no calcula nada**. Recibe un `BudgetResult` ya cerrado y unas
 * sugerencias ya generadas, y las dibuja. Si aquí apareciera una multiplicación
 * sobre euros, existirían dos verdades: la de la pantalla y la del papel.
 *
 * No es una captura de la página ni un intento de reproducirla. Es un
 * documento aparte, pensado para leerse en A4 y para que alguien lo tenga
 * abierto mientras reserva. Por eso lleva el desglose y el rango, y no lleva
 * ni botones ni enlaces de compra.
 *
 * Sobre las fuentes: se usan las estándar de PDF (Helvetica y Times), que van
 * incrustadas en cualquier lector y no añaden un megabyte al adjunto. Su
 * codificación es WinAnsi, que cubre el español y el portugués —«São»,
 * «Jerónimos», «Belém»— y el símbolo del euro, pero no la tipografía fina que
 * sí usamos en la web. `sanear()` traduce esos caracteres en vez de dejar que
 * pdf-lib lance una excepción a mitad de página.
 */

import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from 'pdf-lib';
import {
  OPCIONES_ALOJAMIENTO,
  OPCIONES_COMIDA,
  OPCIONES_TRANSPORTE,
  formatRango,
  type BudgetInput,
  type BudgetResult,
  type Rango,
} from './budget-calculator';
import { formatImpactoRecomendado, type Sugerencia } from './budget-optimizer';
import {
  formatRecomendado,
  getRecommendedBudget,
  type RecommendedBudget,
} from './budget-recommended';

const CREAM = rgb(0.961, 0.937, 0.902); // #F5EFE6
const NIGHT = rgb(0.102, 0.169, 0.29); // #1a2b4a
const TERRACOTTA = rgb(0.722, 0.278, 0.18); // #B8472E
const GOLD = rgb(0.788, 0.592, 0.29); // #C9974A
const TAUPE = rgb(0.435, 0.4, 0.365); // #6F665D
const BORDE = rgb(0.91, 0.886, 0.851); // #e8e2d9
const BLANCO = rgb(1, 1, 1);

const A4 = { ancho: 595.28, alto: 841.89 };
const MARGEN = 48;
const ANCHO_UTIL = A4.ancho - MARGEN * 2;

/**
 * Caracteres que la web usa y WinAnsi no tiene. El menos matemático del
 * optimizador («−80 €») es el caso real: sin esta traducción, pdf-lib falla.
 */
const SUSTITUCIONES: Array<[RegExp, string]> = [
  [/−/g, '-'], // menos matemático
  [/[‐-―]/g, '-'], // guiones tipográficos varios
  [/[‘’]/g, "'"],
  [/[“”]/g, '"'],
  [/…/g, '...'],
  [/ /g, ' '],
  [/ /g, ' '],
];

function sanear(texto: string): string {
  let salida = texto;
  for (const [patron, reemplazo] of SUSTITUCIONES) salida = salida.replace(patron, reemplazo);
  // Cualquier cosa que quede fuera de Latin-1 se cae, en vez de romper el PDF.
  // El rango va con escapes y no con los caracteres literales: un espacio y
  // una `ÿ` sueltos dentro de un `[^...]` son ilegibles y fáciles de romper.
  return salida.replace(/[^\u0020-\u00ff\u20ac]/g, '');
}

interface Contexto {
  doc: PDFDocument;
  pagina: PDFPage;
  y: number;
  regular: PDFFont;
  negrita: PDFFont;
  display: PDFFont;
}

/** Abre una página nueva con el fondo crema ya pintado. */
function nuevaPagina(ctx: Contexto): void {
  ctx.pagina = ctx.doc.addPage([A4.ancho, A4.alto]);
  ctx.pagina.drawRectangle({ x: 0, y: 0, width: A4.ancho, height: A4.alto, color: CREAM });
  ctx.y = A4.alto - MARGEN;
}

/** Reserva vertical: si no cabe lo que viene, salta de página. */
function asegurar(ctx: Contexto, alto: number): void {
  if (ctx.y - alto < MARGEN) nuevaPagina(ctx);
}

function texto(
  ctx: Contexto,
  contenido: string,
  opciones: { size?: number; font?: PDFFont; color?: ReturnType<typeof rgb>; x?: number } = {}
): void {
  const size = opciones.size ?? 10;
  const font = opciones.font ?? ctx.regular;
  ctx.pagina.drawText(sanear(contenido), {
    x: opciones.x ?? MARGEN,
    y: ctx.y,
    size,
    font,
    color: opciones.color ?? NIGHT,
  });
}

/** Texto alineado a la derecha del área útil. */
function textoDerecha(
  ctx: Contexto,
  contenido: string,
  opciones: { size?: number; font?: PDFFont; color?: ReturnType<typeof rgb> } = {}
): void {
  const size = opciones.size ?? 10;
  const font = opciones.font ?? ctx.regular;
  const limpio = sanear(contenido);
  const ancho = font.widthOfTextAtSize(limpio, size);
  ctx.pagina.drawText(limpio, {
    x: A4.ancho - MARGEN - ancho,
    y: ctx.y,
    size,
    font,
    color: opciones.color ?? NIGHT,
  });
}

/** Parte un texto en líneas que caben en `ancho`. */
function envolver(contenido: string, font: PDFFont, size: number, ancho: number): string[] {
  const palabras = sanear(contenido).split(/\s+/).filter(Boolean);
  const lineas: string[] = [];
  let actual = '';
  for (const palabra of palabras) {
    const intento = actual ? `${actual} ${palabra}` : palabra;
    if (font.widthOfTextAtSize(intento, size) <= ancho) {
      actual = intento;
    } else {
      if (actual) lineas.push(actual);
      actual = palabra;
    }
  }
  if (actual) lineas.push(actual);
  return lineas;
}

function parrafo(
  ctx: Contexto,
  contenido: string,
  opciones: { size?: number; color?: ReturnType<typeof rgb>; interlineado?: number } = {}
): void {
  const size = opciones.size ?? 9;
  const interlineado = opciones.interlineado ?? size + 3;
  for (const linea of envolver(contenido, ctx.regular, size, ANCHO_UTIL)) {
    asegurar(ctx, interlineado);
    texto(ctx, linea, { size, color: opciones.color ?? TAUPE });
    ctx.y -= interlineado;
  }
}

function titulo(ctx: Contexto, contenido: string): void {
  asegurar(ctx, 24);
  ctx.y -= 5;
  texto(ctx, contenido.toUpperCase(), { size: 8, font: ctx.negrita, color: TERRACOTTA });
  ctx.y -= 6;
  ctx.pagina.drawLine({
    start: { x: MARGEN, y: ctx.y },
    end: { x: A4.ancho - MARGEN, y: ctx.y },
    thickness: 0.75,
    color: BORDE,
  });
  ctx.y -= 12;
}

/** Una fila «concepto ......... valor». El patrón de todo el desglose. */
function fila(ctx: Contexto, etiqueta: string, valor: string, nota?: string): void {
  asegurar(ctx, nota ? 22 : 14);
  texto(ctx, etiqueta, { size: 10, font: ctx.negrita });
  textoDerecha(ctx, valor, { size: 10 });
  ctx.y -= nota ? 11 : 13;
  if (nota) {
    texto(ctx, nota, { size: 8, color: TAUPE });
    ctx.y -= 11;
  }
}

/**
 * Genera el PDF del presupuesto.
 *
 * @param result   El resultado del motor. Única fuente de las cifras.
 * @param sugerencias Las del optimizador, tal cual. Puede ser una lista vacía.
 * @param generadoEn Fecha de generación. Se pasa como parámetro para que la
 *   función siga siendo determinista y comprobable: el reloj lo pone quien
 *   llama, no este módulo.
 */
export async function createBudgetPdf(
  input: BudgetInput,
  result: BudgetResult,
  sugerencias: readonly Sugerencia[],
  generadoEn: Date
): Promise<Uint8Array> {
  const recomendado: RecommendedBudget = getRecommendedBudget(input, result);
  const doc = await PDFDocument.create();
  doc.setTitle('Presupuesto para tu viaje a Lisboa');
  doc.setAuthor('Estaba en Lisboa');
  doc.setSubject('Estimación orientativa de presupuesto');
  doc.setProducer('estabaenlisboa.com');

  const ctx: Contexto = {
    doc,
    pagina: null as unknown as PDFPage,
    y: 0,
    regular: await doc.embedFont(StandardFonts.Helvetica),
    negrita: await doc.embedFont(StandardFonts.HelveticaBold),
    display: await doc.embedFont(StandardFonts.TimesRomanItalic),
  };
  nuevaPagina(ctx);

  // -- Cabecera --------------------------------------------------------
  ctx.pagina.drawRectangle({
    x: 0,
    y: A4.alto - 78,
    width: A4.ancho,
    height: 78,
    color: NIGHT,
  });
  ctx.y = A4.alto - 34;
  texto(ctx, 'Estaba en Lisboa', { size: 15, font: ctx.display, color: GOLD });
  ctx.y -= 21;
  texto(ctx, 'Presupuesto para tu viaje a Lisboa', { size: 17, font: ctx.negrita, color: BLANCO });
  ctx.y = A4.alto - 78 - 20;

  // -- El viaje --------------------------------------------------------
  titulo(ctx, 'Tu viaje');

  const noche = result.noches === 1 ? 'noche' : 'noches';
  const dia = result.dias === 1 ? 'día' : 'días';
  const persona = result.personas === 1 ? 'persona' : 'personas';
  fila(ctx, 'Duración', `${result.dias} ${dia} · ${result.noches} ${noche}`);
  fila(
    ctx,
    'Viajeros',
    `${result.personas} ${persona}`,
    result.habitaciones > 0
      ? `Se cuentan ${result.habitaciones} ${result.habitaciones === 1 ? 'habitación' : 'habitaciones'}, a dos personas por habitación.`
      : undefined
  );

  /*
   * Aquí va el estilo que la persona eligió —«Intermedio», «Restaurantes»—, no
   * el conteo con el que se calculó. El conteo ya sale abajo, en el desglose,
   * al lado de su cifra, que es donde importa.
   */
  const alojamiento = input.alojamiento;
  fila(
    ctx,
    'Alojamiento',
    alojamiento.modo === 'propio'
      ? 'Importe propio'
      : OPCIONES_ALOJAMIENTO.find((o) => o.id === alojamiento.nivel)?.label ?? '—'
  );
  fila(ctx, 'Comida', OPCIONES_COMIDA.find((o) => o.id === input.comida)?.label ?? '—');
  fila(ctx, 'Transporte', OPCIONES_TRANSPORTE.find((o) => o.id === input.transporte)?.label ?? '—');
  if (input.excursionSintra) fila(ctx, 'Excursión', 'Un día completo en Sintra');

  // -- Las cifras ------------------------------------------------------
  titulo(ctx, 'Tu presupuesto recomendado');

  asegurar(ctx, 90);
  ctx.pagina.drawRectangle({
    x: MARGEN,
    y: ctx.y - 74,
    width: ANCHO_UTIL,
    height: 88,
    color: BLANCO,
    borderColor: GOLD,
    borderWidth: 1,
  });
  ctx.y -= 6;
  texto(ctx, 'PARA TODO EL GRUPO', { size: 7.5, font: ctx.negrita, color: TAUPE, x: MARGEN + 16 });
  ctx.y -= 27;
  texto(ctx, formatRecomendado(recomendado.total), {
    size: 28,
    font: ctx.negrita,
    color: NIGHT,
    x: MARGEN + 16,
  });
  ctx.y -= 19;
  texto(
    ctx,
    `≈ ${formatRecomendado(recomendado.porPersona)} por persona  ·  ≈ ${formatRecomendado(recomendado.porPersonaYDia)} por persona y día`,
    { size: 9, color: TAUPE, x: MARGEN + 16 }
  );
  ctx.y -= 15;
  texto(ctx, `Rango estimado: ${formatRango(result.total)}`, {
    size: 9,
    color: TAUPE,
    x: MARGEN + 16,
  });
  ctx.y -= 24;

  parrafo(
    ctx,
    'Una cifra práctica dentro de nuestra estimación, para planificar sin manejar un intervalo enorme.'
  );
  ctx.y -= 6;

  fila(
    ctx,
    'Gastos en destino',
    formatRango(result.sinAlojamiento),
    'Comida, transporte urbano, entradas y logística de excursión. Sin alojamiento y sin vuelos.'
  );

  // -- Desglose --------------------------------------------------------
  titulo(ctx, 'Desglose recomendado');

  const baseDe = (id: string) => result.categorias.find((c) => c.id === id)?.base ?? '';

  for (const categoria of recomendado.categorias) {
    fila(
      ctx,
      categoria.label,
      formatRecomendado(categoria.importe),
      categoria.origen === 'introducido'
        ? 'Importe que has indicado'
        : `${baseDe(categoria.id)} · ${formatRango(categoria.rango)} estimados`
    );
  }

  // La diferencia del redondeo va escrita, no escondida: así el desglose suma.
  if (recomendado.redondeo > 0) {
    fila(ctx, 'Redondeo', formatRecomendado(recomendado.redondeo));
  }
  fila(ctx, 'TOTAL RECOMENDADO', formatRecomendado(recomendado.total));

  if (!result.vuelosIncluidos) {
    parrafo(ctx, 'Los vuelos no están incluidos: no introdujiste ningún importe.');
  }

  // -- Atracciones -----------------------------------------------------
  if (recomendado.entradas.length > 0) {
    titulo(ctx, 'Actividades seleccionadas');
    for (const linea of recomendado.entradas) {
      asegurar(ctx, 13);
      texto(ctx, linea.atraccion.nombre, { size: 9.5, font: ctx.negrita });
      texto(
        ctx,
        `  ·  ${linea.porPersona} € por persona × ${linea.personas}`,
        {
          size: 8,
          color: TAUPE,
          x: MARGEN + ctx.negrita.widthOfTextAtSize(sanear(linea.atraccion.nombre), 9.5),
        }
      );
      textoDerecha(ctx, formatRecomendado(linea.subtotal), { size: 9.5, font: ctx.negrita });
      ctx.y -= 13;
    }
    parrafo(
      ctx,
      'Las cantidades de actividades son estimaciones para planificación y pueden diferir de la tarifa vigente. Comprueba el precio actual antes de reservar.'
    );
  }

  // -- Optimizador -----------------------------------------------------
  if (sugerencias.length > 0) {
    titulo(ctx, 'Cómo gastar menos');
    for (const sugerencia of sugerencias) {
      asegurar(ctx, 28);
      texto(ctx, sugerencia.titulo, { size: 10, font: ctx.negrita });
      textoDerecha(ctx, formatImpactoRecomendado(sugerencia.impactoRecomendado), {
        size: 10,
        font: ctx.negrita,
        color: TERRACOTTA,
      });
      ctx.y -= 12;
      for (const linea of envolver(sugerencia.descripcion, ctx.regular, 8.5, ANCHO_UTIL - 90)) {
        texto(ctx, linea, { size: 8.5, color: TAUPE });
        ctx.y -= 11;
      }
      ctx.y -= 2;
    }
    parrafo(ctx, 'El impacto sale de comparar dos estimaciones nuestras. No es un precio.');
  }

  // -- Pie -------------------------------------------------------------
  /*
   * El cierre se reserva entero antes de empezar a dibujarlo. Sin esto, el
   * párrafo cabía en la página y la fecha no, y el PDF acababa con una hoja
   * en blanco ocupada por una sola línea.
   */
  const CIERRE =
    'Estimación orientativa, no un precio cerrado: depende de la temporada, de la antelación con la que reserves y de decisiones que quizá aún no has tomado.';
  const fecha = generadoEn.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const lineasCierre = envolver(CIERRE, ctx.regular, 9, ANCHO_UTIL);
  asegurar(ctx, 24 + lineasCierre.length * 12 + 16);

  titulo(ctx, 'Antes de darlo por bueno');
  for (const linea of lineasCierre) {
    texto(ctx, linea, { size: 9, color: TAUPE });
    ctx.y -= 12;
  }
  ctx.y -= 4;
  texto(ctx, `Generado el ${fecha} · estabaenlisboa.com`, { size: 8, color: TAUPE });

  return doc.save();
}

/** Nombre de archivo estable y descriptivo, sin datos personales dentro. */
export function nombreArchivoPdf(result: BudgetResult): string {
  return `presupuesto-lisboa-${result.dias}d-${result.personas}p.pdf`;
}

/**
 * El viaje en una línea, para el email. Sólo duración y personas: la cifra ya
 * va aparte y como protagonista, y repetirla aquí la duplicaría.
 */
export function resumenPresupuesto(dias: number, personas: number): string {
  const dia = dias === 1 ? 'día' : 'días';
  const persona = personas === 1 ? 'persona' : 'personas';
  return `${dias} ${dia} · ${personas} ${persona}`;
}

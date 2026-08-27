/**
 * Descargar o recibir por email el presupuesto en PDF.
 *
 * La regla que ordena todo el endpoint: **el navegador manda decisiones, nunca
 * importes**. Llegan días, noches, personas, niveles y atracciones marcadas; el
 * total lo calcula aquí `calculateLisbonBudget`. Si el cliente enviara
 * `total: 1`, ese campo no se lee siquiera: no existe en el contrato.
 *
 * Dos modos, un solo camino de cálculo:
 *
 *   · sin `email` → devuelve el PDF (descarga directa);
 *   · con `email` → genera el mismo PDF y lo manda como adjunto.
 *
 * El PDF no se guarda en ninguna parte. Se construye en memoria, se entrega o
 * se adjunta, y desaparece con la petición. Tampoco se da de alta el email en
 * ninguna lista: es correo transaccional y sólo eso.
 *
 * El segundo modo está **temporalmente cerrado** (`BUDGET_EMAIL_ENABLED`).
 * Mientras lo esté, una petición con email se rechaza aquí mismo con un 503 y
 * no se llama al proveedor: sin la clave habilitada, el viaje sólo servía para
 * acabar en un 502 y llenar el log. La descarga no se ve afectada.
 */

import { NextRequest, NextResponse } from 'next/server';
import logger from '@/lib/logger';
import { limitRequest, getRequestIdentifier } from '@/lib/ratelimit';
import { validateEmail, createErrorResponse, sendBrevoEmail } from '@/lib/api-utils';
import { parseBudgetInput } from '@/lib/budget-input';
import { BUDGET_EMAIL_ENABLED } from '@/lib/budget-features';
import { calculateLisbonBudget, formatRango, type Rango } from '@/lib/budget-calculator';
import { formatRecomendado, getRecommendedBudget } from '@/lib/budget-recommended';
import { generarSugerencias } from '@/lib/budget-optimizer';
import { createBudgetPdf, nombreArchivoPdf, resumenPresupuesto } from '@/lib/budget-pdf';

/** pdf-lib necesita Node, no el runtime edge. */
export const runtime = 'nodejs';

/**
 * Tope del cuerpo. Un `BudgetInput` legítimo ocupa unos cientos de bytes; 8 KB
 * deja margen de sobra y corta cualquier intento de mandar un payload enorme.
 */
const MAX_BODY_BYTES = 8 * 1024;

export async function POST(request: NextRequest) {
  const identifier = getRequestIdentifier(request);
  const rateLimitResult = await limitRequest(identifier);
  if (!rateLimitResult.success) {
    return createErrorResponse(
      'Demasiadas solicitudes. Espera un momento e inténtalo de nuevo.',
      429
    );
  }

  let crudo: unknown;
  try {
    const texto = await request.text();
    if (texto.length > MAX_BODY_BYTES) {
      return createErrorResponse('Solicitud demasiado grande.', 413);
    }
    crudo = JSON.parse(texto);
  } catch {
    return createErrorResponse('Solicitud no válida.', 400);
  }

  if (typeof crudo !== 'object' || crudo === null) {
    return createErrorResponse('Solicitud no válida.', 400);
  }
  const cuerpo = crudo as Record<string, unknown>;

  const parsed = parseBudgetInput(cuerpo.input);
  if (!parsed.ok) {
    return createErrorResponse(parsed.error, 400);
  }

  // A partir de aquí, todas las cifras son nuestras.
  const result = calculateLisbonBudget(parsed.input);
  const sugerencias = generarSugerencias(parsed.input);

  let pdf: Uint8Array;
  try {
    pdf = await createBudgetPdf(parsed.input, result, sugerencias, new Date());
  } catch (error) {
    logger.error('[Presupuesto] Error generando el PDF:', error);
    return createErrorResponse('No se ha podido generar el PDF.', 500);
  }

  const nombre = nombreArchivoPdf(result);

  // -- Modo descarga ---------------------------------------------------
  if (cuerpo.email === undefined || cuerpo.email === null || cuerpo.email === '') {
    return new NextResponse(Buffer.from(pdf), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${nombre}"`,
        'Content-Length': String(pdf.byteLength),
        'Cache-Control': 'no-store',
      },
    });
  }

  // -- Modo email ------------------------------------------------------
  /*
   * La interfaz no ofrece este camino mientras la bandera esté en `false`,
   * pero el endpoint es público y alguien puede llamarlo igual. Se corta
   * antes de validar nada y sin nombrar al proveedor: quien llame no tiene
   * por qué enterarse de con quién trabajamos ni de qué le pasa a la clave.
   */
  if (!BUDGET_EMAIL_ENABLED) {
    return createErrorResponse(
      'El envío por email está temporalmente desactivado. Puedes descargar el PDF.',
      503
    );
  }

  const email = typeof cuerpo.email === 'string' ? cuerpo.email.trim() : '';
  if (!validateEmail(email)) {
    return createErrorResponse('Email no válido.', 400);
  }

  const recomendado = getRecommendedBudget(parsed.input, result);
  const viaje = resumenPresupuesto(result.dias, result.personas);
  const enviado = await sendBrevoEmail({
    to: [{ email, name: email }],
    subject: `Tu presupuesto para Lisboa — ${recomendado.total} € recomendados`,
    htmlContent: cuerpoHtml(recomendado.total, viaje, result.total),
    textContent: cuerpoTexto(recomendado.total, viaje, result.total),
    attachment: [{ name: nombre, content: Buffer.from(pdf).toString('base64') }],
  });

  if (!enviado.success) {
    // El motivo real va al log; fuera sale un mensaje neutro, sin filtrar si
    // falta una clave, si el proveedor está caído o si rechazó la dirección.
    logger.error('[Presupuesto] Error enviando el email:', enviado.error);
    return createErrorResponse(
      'No hemos podido enviar el email ahora mismo. Puedes descargar el PDF mientras tanto.',
      502
    );
  }

  return NextResponse.json({ success: true });
}

function cuerpoTexto(total: number, viaje: string, rango: Rango): string {
  return [
    'Tu presupuesto recomendado:',
    formatRecomendado(total),
    '',
    `Para: ${viaje}`,
    `Rango estimado: ${formatRango(rango)}`,
    '',
    'Adjuntamos el PDF con el desglose completo.',
    '',
    'Es una estimación orientativa, no un precio cerrado: depende de la temporada y de con cuánta antelación reserves.',
    '',
    'Puedes volver a calcularlo cuando cambies de planes:',
    'https://estabaenlisboa.com/calculadora-presupuesto-lisboa',
    '',
    'Te lo enviamos porque lo pediste desde la calculadora. No te hemos suscrito a ninguna lista.',
    '',
    'Estaba en Lisboa',
  ].join('\n');
}

function cuerpoHtml(total: number, viaje: string, rango: Rango): string {
  return `<!doctype html>
<html lang="es"><body style="margin:0;padding:24px;background:#F5EFE6;font-family:Helvetica,Arial,sans-serif;color:#1a2b4a;">
  <div style="max-width:520px;margin:0 auto;background:#ffffff;border:1px solid #e8e2d9;border-radius:12px;padding:28px;">
    <p style="margin:0 0 4px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#6F665D;">Estaba en Lisboa</p>
    <h1 style="margin:0 0 20px;font-size:20px;">Tu presupuesto para Lisboa</h1>
    <div style="margin:0 0 20px;padding:16px;background:#F5EFE6;border-left:3px solid #C9974A;">
      <p style="margin:0 0 2px;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#6F665D;">Tu presupuesto recomendado</p>
      <p style="margin:0 0 6px;font-size:32px;font-weight:700;line-height:1.1;">${formatRecomendado(total)}</p>
      <p style="margin:0;font-size:14px;color:#6F665D;">Para: ${viaje}</p>
      <p style="margin:4px 0 0;font-size:13px;color:#6F665D;">Rango estimado: ${formatRango(rango)}</p>
    </div>
    <p style="margin:0 0 20px;font-size:15px;line-height:1.6;">Adjuntamos el PDF con el desglose completo.</p>
    <p style="margin:0 0 20px;font-size:13px;line-height:1.6;color:#6F665D;">Es una estimación orientativa, no un precio cerrado: depende de la temporada y de con cuánta antelación reserves.</p>
    <p style="margin:0 0 24px;font-size:14px;"><a href="https://estabaenlisboa.com/calculadora-presupuesto-lisboa" style="color:#B8472E;">Volver a calcularlo</a> cuando cambies de planes.</p>
    <p style="margin:0;padding-top:16px;border-top:1px solid #e8e2d9;font-size:12px;line-height:1.6;color:#6F665D;">Te lo enviamos porque lo pediste desde la calculadora. No te hemos suscrito a ninguna lista.</p>
  </div>
</body></html>`;
}

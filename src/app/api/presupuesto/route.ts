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
 */

import { NextRequest, NextResponse } from 'next/server';
import logger from '@/lib/logger';
import { limitRequest, getRequestIdentifier } from '@/lib/ratelimit';
import { validateEmail, createErrorResponse, sendBrevoEmail } from '@/lib/api-utils';
import { parseBudgetInput } from '@/lib/budget-input';
import { calculateLisbonBudget, formatRango } from '@/lib/budget-calculator';
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
  const email = typeof cuerpo.email === 'string' ? cuerpo.email.trim() : '';
  if (!validateEmail(email)) {
    return createErrorResponse('Email no válido.', 400);
  }

  const resumen = resumenPresupuesto(result.total, result.dias, result.personas);
  const enviado = await sendBrevoEmail({
    to: [{ email, name: email }],
    subject: `Tu presupuesto para Lisboa · ${formatRango(result.total)}`,
    htmlContent: cuerpoHtml(resumen),
    textContent: cuerpoTexto(resumen),
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

function cuerpoTexto(resumen: string): string {
  return [
    'Aquí tienes tu presupuesto para Lisboa en PDF.',
    '',
    resumen,
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

function cuerpoHtml(resumen: string): string {
  return `<!doctype html>
<html lang="es"><body style="margin:0;padding:24px;background:#F5EFE6;font-family:Helvetica,Arial,sans-serif;color:#1a2b4a;">
  <div style="max-width:520px;margin:0 auto;background:#ffffff;border:1px solid #e8e2d9;border-radius:12px;padding:28px;">
    <p style="margin:0 0 4px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#6F665D;">Estaba en Lisboa</p>
    <h1 style="margin:0 0 16px;font-size:20px;">Tu presupuesto para Lisboa</h1>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">Lo tienes en el PDF adjunto, con el desglose completo.</p>
    <p style="margin:0 0 20px;padding:12px 16px;background:#F5EFE6;border-left:3px solid #C9974A;font-size:15px;font-weight:600;">${resumen}</p>
    <p style="margin:0 0 20px;font-size:13px;line-height:1.6;color:#6F665D;">Es una estimación orientativa, no un precio cerrado: depende de la temporada y de con cuánta antelación reserves.</p>
    <p style="margin:0 0 24px;font-size:14px;"><a href="https://estabaenlisboa.com/calculadora-presupuesto-lisboa" style="color:#B8472E;">Volver a calcularlo</a> cuando cambies de planes.</p>
    <p style="margin:0;padding-top:16px;border-top:1px solid #e8e2d9;font-size:12px;line-height:1.6;color:#6F665D;">Te lo enviamos porque lo pediste desde la calculadora. No te hemos suscrito a ninguna lista.</p>
  </div>
</body></html>`;
}

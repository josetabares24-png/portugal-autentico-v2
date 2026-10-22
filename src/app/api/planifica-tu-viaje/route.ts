import { NextRequest, NextResponse } from 'next/server';
import logger from '@/lib/logger';
import { limitRequest, getRequestIdentifier } from '@/lib/ratelimit';
import { createErrorResponse, sendBrevoEmail } from '@/lib/api-utils';
import { deliverPlanningRequest, parsePlanningRequest, type PlanningMessage } from '@/lib/planning-request';
import { PLANNING_EMAIL } from '@/lib/planning-contact';

export async function POST(request: NextRequest) {
  const rateLimitResult = await limitRequest(getRequestIdentifier(request));
  if (!rateLimitResult.success) {
    return createErrorResponse('Demasiadas solicitudes. Por favor, espera un momento e intenta de nuevo.', 429);
  }

  const body: unknown = await request.json().catch(() => null);
  const data = parsePlanningRequest(body);
  if (!data) return createErrorResponse('Revisa tu nombre, email y la longitud del mensaje.', 400);

  try {
    const smtpReady = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
    const fallback = smtpReady ? async (message: PlanningMessage) => {
      const nodemailer = await import('nodemailer');
      const port = Number(process.env.SMTP_PORT) || 465;
      const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST, port, secure: port === 465,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
      try {
        const result = await transport.sendMail({
          from: { name: 'Estaba en Lisboa', address: process.env.SMTP_USER! },
          to: message.to.map(({ email, name }) => ({ address: email, name })),
          replyTo: { address: message.replyTo.email, name: message.replyTo.name },
          subject: message.subject, html: message.htmlContent, text: message.textContent,
        });
        return { success: result.accepted.length > 0 };
      } finally { transport.close(); }
    } : undefined;

    // Inline transactional messages keep web/email promises consistent; old
    // external templates can still contain the former 24–48h delivery promise.
    const result = await deliverPlanningRequest(data, {
      primary: process.env.BREVO_API_KEY ? sendBrevoEmail : undefined,
      fallback,
    });
    if (!result.success) {
      logger.warn('[Planifica] No transport accepted the owner notification');
      return createErrorResponse(`No se ha podido enviar. Puedes escribirme a ${PLANNING_EMAIL}.`, 503);
    }
    if (!result.confirmationSent) logger.warn('[Planifica] Owner notified; visitor acknowledgement failed');
    return NextResponse.json({ success: true });
  } catch {
    logger.error('[Planifica] Request delivery failed');
    return createErrorResponse(`No se ha podido enviar. Puedes escribirme a ${PLANNING_EMAIL}.`, 500);
  }
}

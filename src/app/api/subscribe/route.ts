import { NextRequest, NextResponse } from 'next/server';
import logger from '@/lib/logger';
import { limitRequest, getRequestIdentifier } from '@/lib/ratelimit';
import { validateEmail, createErrorResponse, addBrevoContact } from '@/lib/api-utils';

const NEWSLETTER_LIST_ID = Number(process.env.BREVO_NEWSLETTER_LIST_ID || 5);
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://estabaenlisboa.com';

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return entities[char];
  });
}

function welcomeEmail(name: string) {
  const safeName = escapeHtml(name);

  return {
    subject: 'Bienvenido a Estaba en Lisboa',
    text: `Hola ${name},

Gracias por suscribirte a Estaba en Lisboa.

Te escribiremos cuando publiquemos una guía nueva o actualicemos información importante sobre Lisboa.

Puedes ver las guías aquí:
${SITE_URL}/blog

Si en algún momento no quieres recibir más correos:
${SITE_URL}/unsubscribe

Estaba en Lisboa`,
    html: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#F5EFE6;font-family:Arial,sans-serif;color:#1A2B4A;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background:#F5EFE6;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width:600px;background:#FFFFFF;">
          <tr>
            <td style="padding:32px;">
              <img src="${SITE_URL}/logo.png" alt="Estaba en Lisboa" width="160" style="display:block;max-width:160px;height:auto;border:0;margin-bottom:28px;" />
              <h1 style="margin:0 0 18px;font-size:24px;line-height:1.25;color:#1A2B4A;">Hola ${safeName}</h1>
              <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#4a4a4a;">Gracias por suscribirte a Estaba en Lisboa.</p>
              <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#4a4a4a;">Te escribiremos cuando publiquemos una guía nueva o actualicemos información importante sobre Lisboa.</p>
              <p style="margin:0 0 28px;">
                <a href="${SITE_URL}/blog" style="display:inline-block;background:#1A2B4A;color:#FFFFFF;padding:12px 20px;text-decoration:none;font-weight:600;">Ver las guías</a>
              </p>
              <p style="margin:0;font-size:12px;line-height:1.6;color:#6F665D;">
                Si no quieres recibir más correos, puedes <a href="${SITE_URL}/unsubscribe" style="color:#B8472E;">darte de baja aquí</a>.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  };
}

async function sendWelcomeEmail(email: string, name: string) {
  const brevoApiKey = process.env.BREVO_API_KEY;
  const subscriptionTemplateId = process.env.BREVO_SUBSCRIPTION_TEMPLATE_ID;

  if (!brevoApiKey) return false;

  if (subscriptionTemplateId) {
    try {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-key': brevoApiKey,
        },
        body: JSON.stringify({
          templateId: Number(subscriptionTemplateId),
          to: [{ email, name }],
          params: {
            name,
            guides_url: `${SITE_URL}/blog`,
            unsubscribe_url: `${SITE_URL}/unsubscribe`,
          },
          headers: {
            'X-Mailer': 'Estaba en Lisboa',
            'List-Unsubscribe': `<${SITE_URL}/unsubscribe>`,
          },
        }),
      });

      if (response.ok) return true;
      logger.warn('[Subscribe] Brevo template send failed; trying controlled fallback');
    } catch (error) {
      logger.warn('[Subscribe] Brevo template unavailable; trying controlled fallback:', error);
    }
  }

  const content = welcomeEmail(name);
  const senderName = process.env.BREVO_SENDER_NAME || 'Estaba en Lisboa';
  const senderEmail = process.env.BREVO_SENDER_EMAIL;

  if (senderEmail) {
    try {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-key': brevoApiKey,
        },
        body: JSON.stringify({
          sender: { name: senderName, email: senderEmail },
          to: [{ email, name }],
          subject: content.subject,
          htmlContent: content.html,
          textContent: content.text,
          headers: {
            'X-Mailer': 'Estaba en Lisboa',
            'List-Unsubscribe': `<${SITE_URL}/unsubscribe>`,
          },
        }),
      });

      if (response.ok) return true;
      logger.warn('[Subscribe] Brevo HTML welcome email failed');
    } catch (error) {
      logger.warn('[Subscribe] Brevo HTML welcome email unavailable:', error);
    }
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return false;
  }

  try {
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Estaba en Lisboa" <${process.env.SMTP_USER}>`,
      to: email,
      subject: content.subject,
      html: content.html,
      text: content.text,
      headers: {
        'List-Unsubscribe': `<${SITE_URL}/unsubscribe>`,
      },
    });

    return true;
  } catch (error) {
    logger.warn('[Subscribe] SMTP welcome email failed:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  const identifier = getRequestIdentifier(request);
  const rateLimitResult = await limitRequest(identifier);

  if (!rateLimitResult.success) {
    return createErrorResponse(
      'Demasiadas solicitudes. Espera un momento e inténtalo de nuevo.',
      429
    );
  }

  try {
    const body = await request.json();
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const name = typeof body.name === 'string' && body.name.trim()
      ? body.name.trim()
      : email.split('@')[0];

    if (!validateEmail(email)) {
      return createErrorResponse('Email no válido', 400);
    }

    if (!process.env.BREVO_API_KEY) {
      logger.error('[Subscribe] BREVO_API_KEY is not configured');
      return NextResponse.json(
        { success: false, message: 'No pudimos completar la suscripción. Inténtalo de nuevo más tarde.' },
        { status: 503 }
      );
    }

    // Capturing the subscriber is the primary business action. The welcome
    // email is useful, but a failed welcome email must never turn a stored
    // subscriber into a false failure — or an unstored address into false success.
    const contactResult = await addBrevoContact({
      email,
      name,
      attributes: { FUENTE: 'blog' },
      listIds: [NEWSLETTER_LIST_ID],
      emailBlacklisted: false,
    });

    if (!contactResult.success) {
      logger.error('[Subscribe] Brevo contact write failed');
      return NextResponse.json(
        { success: false, message: 'No pudimos completar la suscripción. Inténtalo de nuevo más tarde.' },
        { status: 502 }
      );
    }

    const welcomeSent = await sendWelcomeEmail(email, name);
    if (!welcomeSent) {
      logger.warn('[Subscribe] Subscriber stored, but welcome email was not delivered');
    }

    return NextResponse.json({
      success: true,
      message: 'Suscripción completada',
      welcomeSent,
    });
  } catch (error) {
    logger.error('[Subscribe] Error processing subscription:', error);
    return NextResponse.json(
      { success: false, message: 'No pudimos completar la suscripción. Inténtalo de nuevo más tarde.' },
      { status: 500 }
    );
  }
}

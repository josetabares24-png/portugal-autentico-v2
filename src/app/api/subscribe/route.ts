import { NextRequest, NextResponse } from 'next/server';
import logger from '@/lib/logger';
import { limitRequest, getRequestIdentifier } from '@/lib/ratelimit';
import { validateEmail, createErrorResponse, addBrevoContact } from '@/lib/api-utils';
import { notifyAdmin } from '@/lib/admin-notify';

const NEWSLETTER_LIST_ID = Number(process.env.BREVO_NEWSLETTER_LIST_ID || 5);
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://estabaenlisboa.com';
// Regalo que se ofrece en los artículos. Solo se acepta este identificador:
// el cliente no puede pedir que enlacemos cualquier URL en el email.
const LEAD_MAGNETS: Record<string, { title: string; path: string }> = {
  'que-reservar': {
    title: 'Qué reservar antes de ir a Lisboa',
    path: '/que-reservar-antes-de-ir-a-lisboa.pdf',
  },
};
type LeadMagnet = (typeof LEAD_MAGNETS)[string];

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

function welcomeEmail(name: string, leadMagnet?: LeadMagnet) {
  const safeName = escapeHtml(name);
  const pdfUrl = leadMagnet ? `${SITE_URL}${leadMagnet.path}` : '';

  return {
    subject: 'Bienvenido a Estaba en Lisboa',
    text: `Hola ${name},

Gracias por suscribirte a Estaba en Lisboa.

Te escribiremos cuando publiquemos una guía nueva o actualicemos información importante sobre Lisboa.
${leadMagnet ? `\nLa lista que pediste, ${leadMagnet.title}, está aquí:\n${pdfUrl}\n` : ''}
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
              ${leadMagnet ? `<p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#4a4a4a;">La lista que pediste: <a href="${pdfUrl}" style="color:#B8472E;">${escapeHtml(leadMagnet.title)} (PDF)</a>.</p>` : ''}
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

async function sendWelcomeEmail(email: string, name: string, leadMagnet?: LeadMagnet) {
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
            // Brevo ignora los parámetros que la plantilla no usa. Para que el
            // email lleve el PDF hay que añadir {{ params.lead_magnet_url }} a
            // la plantilla en Brevo; mientras tanto el enlace sale en la web.
            ...(leadMagnet
              ? { lead_magnet_title: leadMagnet.title, lead_magnet_url: `${SITE_URL}${leadMagnet.path}` }
              : {}),
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

  const content = welcomeEmail(name, leadMagnet);
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

type Lead = {
  email: string;
  name: string;
  slug: string;
  placement: string;
  consent: boolean;
  consentAt: string;
  consentText: string;
  leadMagnet: string;
};

function cleanField(value: unknown, max: number) {
  return typeof value === 'string' ? value.replace(/[\r\n]+/g, ' ').trim().slice(0, max) : '';
}

function leadNotification(lead: Lead) {
  const rows: Array<[string, string]> = [
    ['Email', lead.email],
    ['Nombre', lead.name],
    ['Artículo', lead.slug ? `${SITE_URL}/blog/${lead.slug}` : '(índice del blog)'],
    ['Formulario', lead.placement],
    ['Consentimiento marcado', lead.consent ? 'sí' : 'no (formulario sin casilla)'],
    ['Fecha del consentimiento (UTC)', lead.consentAt],
    ['Texto aceptado', lead.consentText || '(no enviado)'],
    ['PDF', lead.leadMagnet || '(ninguno)'],
  ];
  const text = [
    'Brevo no ha aceptado el alta (revisa la API key en Brevo). Añade este contacto a la lista de la newsletter a mano:',
    '',
    ...rows.map(([k, v]) => `${k}: ${v}`),
  ].join('\n');
  const html = `<div style="font-family:Arial,sans-serif;max-width:600px">
<p>Brevo no ha aceptado el alta (revisa la API key en Brevo). Añade este contacto a la lista de la newsletter a mano:</p>
<table cellpadding="6" style="border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="color:#6F665D">${escapeHtml(k)}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`)
    .join('')}</table></div>`;
  return {
    subject: `[Newsletter] Alta pendiente de Brevo: ${lead.email}`,
    text,
    html,
    replyTo: lead.email,
  };
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
    const leadMagnet =
      typeof body.leadMagnet === 'string' && Object.prototype.hasOwnProperty.call(LEAD_MAGNETS, body.leadMagnet)
        ? LEAD_MAGNETS[body.leadMagnet]
        : undefined;

    if (!validateEmail(email)) {
      return createErrorResponse('Email no válido', 400);
    }

    const consent = body.consent === true;
    const consentAt = new Date().toISOString();
    const lead: Lead = {
      email,
      name,
      slug: cleanField(body.slug, 120),
      placement: cleanField(body.placement, 40) || 'blog_index',
      consent,
      consentAt,
      consentText: cleanField(body.consentText, 400),
      leadMagnet: leadMagnet?.title ?? '',
    };

    // Guardar el contacto en Brevo es lo principal. Si Brevo falla (por
    // ejemplo, la API key desactivada), el alta no se pierde: se avisa a José
    // por email con los datos y el consentimiento, y el lector recibe igual
    // su PDF. La respuesta lleva stored:false para distinguir el caso.
    const contactResult = process.env.BREVO_API_KEY
      ? await addBrevoContact({
          email,
          name,
          attributes: { FUENTE: 'blog' },
          listIds: [NEWSLETTER_LIST_ID],
          emailBlacklisted: false,
        })
      : { success: false, error: 'BREVO_API_KEY no configurada' };

    if (!contactResult.success) {
      logger.error('[Subscribe] No se pudo guardar el contacto en Brevo; enviando el alta por email a José', {
        reason: contactResult.error,
        slug: lead.slug,
        placement: lead.placement,
      });
      const notified = await notifyAdmin(leadNotification(lead));
      if (notified.sent) {
        logger.warn(`[Subscribe] Alta enviada a José por email (via ${notified.via}); contacto pendiente de importar en Brevo`);
      } else {
        // Último recurso para no perder el alta: queda en el log de Vercel.
        logger.error('[Subscribe] ALTA NO GUARDADA NI ENVIADA. Datos para importarla a mano:', JSON.stringify(lead));
      }
      const welcomeSent = await sendWelcomeEmail(email, name, leadMagnet);
      return NextResponse.json({
        success: true,
        stored: false,
        notified: notified.sent,
        welcomeSent,
        message: 'Suscripción recibida',
      });
    }

    const welcomeSent = await sendWelcomeEmail(email, name, leadMagnet);
    if (!welcomeSent) {
      logger.warn('[Subscribe] Subscriber stored, but welcome email was not delivered');
    }

    return NextResponse.json({
      success: true,
      stored: true,
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

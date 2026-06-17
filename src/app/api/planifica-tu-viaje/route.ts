import { NextRequest, NextResponse } from 'next/server';
import logger from '@/lib/logger';
import { limitRequest, getRequestIdentifier } from '@/lib/ratelimit';
import { validateEmail, createErrorResponse, sendBrevoEmail, addBrevoContact } from '@/lib/api-utils';

export async function POST(request: NextRequest) {
  const identifier = getRequestIdentifier(request);
  const rateLimitResult = await limitRequest(identifier);
  if (!rateLimitResult.success) {
    return createErrorResponse(
      'Demasiadas solicitudes. Por favor, espera un momento e intenta de nuevo.',
      429
    );
  }

  try {
    const body = await request.json();
    const { nombre, email, fechas, dias, personas, intereses, ritmo, presupuesto, comentarios } = body;

    if (!nombre || !email) {
      return createErrorResponse('Nombre y email son requeridos', 400);
    }

    if (!validateEmail(email)) {
      return createErrorResponse('Email no válido', 400);
    }

    const notificationTemplateId = process.env.BREVO_CONSERJERIA_TEMPLATE_ID;
    const confirmationTemplateId = process.env.BREVO_CONSERJERIA_CONFIRMATION_TEMPLATE_ID;

    const resumenHtml = `
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Fechas:</strong> ${fechas || 'No especificado'}</p>
      <p><strong>Días en Lisboa:</strong> ${dias || 'No especificado'}</p>
      <p><strong>Personas:</strong> ${personas || 'No especificado'}</p>
      <p><strong>Ritmo:</strong> ${ritmo || 'No especificado'}</p>
      <p><strong>Presupuesto:</strong> ${presupuesto || 'No especificado'}</p>
      <p><strong>Intereses:</strong> ${intereses || 'No especificado'}</p>
      <p><strong>Comentarios:</strong> ${comentarios || '—'}</p>
    `;
    const resumenText = `Nombre: ${nombre}\nEmail: ${email}\nFechas: ${fechas || 'No especificado'}\nDías: ${dias || 'No especificado'}\nPersonas: ${personas || 'No especificado'}\nRitmo: ${ritmo || 'No especificado'}\nPresupuesto: ${presupuesto || 'No especificado'}\nIntereses: ${intereses || 'No especificado'}\nComentarios: ${comentarios || '—'}`;

    let notificationSent = false;
    let confirmationSent = false;

    if (process.env.BREVO_API_KEY) {
      const notificationResult = await sendBrevoEmail({
        templateId: notificationTemplateId ? parseInt(notificationTemplateId, 10) : undefined,
        to: [{ email: 'contacto@estabaenlisboa.com', name: 'Estaba en Lisboa' }],
        replyTo: { email, name: nombre },
        subject: `[Plan a medida] ${nombre} - ${dias || '?'} días`,
        htmlContent: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;"><h2 style="color: #C84B31;">Nueva solicitud de plan a medida</h2><div style="background: #f7f4ef; padding: 20px; border-radius: 8px;">${resumenHtml}</div></div>`,
        textContent: resumenText,
        params: {
          NOMBRE: nombre,
          EMAIL: email,
          FECHAS: fechas || '',
          DIAS: String(dias || ''),
          PERSONAS: String(personas || ''),
          RITMO: ritmo || '',
          PRESUPUESTO: presupuesto || '',
          INTERESES: intereses || '',
          COMENTARIOS: comentarios || '',
        },
      });
      notificationSent = notificationResult.success;
      if (!notificationResult.success) {
        logger.warn('[Planifica] Error enviando notificación a admin:', notificationResult.error);
      }

      const confirmationResult = await sendBrevoEmail({
        templateId: confirmationTemplateId ? parseInt(confirmationTemplateId, 10) : undefined,
        to: [{ email, name: nombre }],
        subject: 'Hemos recibido tu solicitud - Estaba en Lisboa',
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #C84B31; margin-bottom: 20px;">¡Solicitud recibida!</h2>
            <p style="color: #555; line-height: 1.6;">Hola <strong>${nombre}</strong>,</p>
            <p style="color: #555; line-height: 1.6;">Gracias por confiar en Estaba en Lisboa para planificar tu viaje. Voy a revisar tus respuestas personalmente y te enviaré tu plan a medida en un plazo de 24-48 horas, junto con los detalles para confirmarlo.</p>
            <p style="color: #666; font-size: 14px; margin-top: 30px;">Si tienes alguna urgencia, responde directamente a este email.</p>
            <p style="color: #999; font-size: 12px; margin-top: 30px;">— José, desde Lisboa</p>
          </div>
        `,
        textContent: `Hola ${nombre},\n\nGracias por confiar en Estaba en Lisboa para planificar tu viaje. Voy a revisar tus respuestas personalmente y te enviaré tu plan a medida en un plazo de 24-48 horas, junto con los detalles para confirmarlo.\n\nSi tienes alguna urgencia, responde directamente a este email.\n\n— José, desde Lisboa`,
      });
      confirmationSent = confirmationResult.success;
      if (!confirmationResult.success) {
        logger.warn('[Planifica] Error enviando confirmación al usuario:', confirmationResult.error);
      }

      await addBrevoContact({
        email,
        name: nombre,
        attributes: {
          FUENTE: 'planifica-tu-viaje',
          FECHAS: fechas || '',
          DIAS: String(dias || ''),
          PERSONAS: String(personas || ''),
          RITMO: ritmo || '',
          PRESUPUESTO: presupuesto || '',
          INTERESES: intereses || '',
        },
        listIds: [5],
      });
    }

    if (!notificationSent && !confirmationSent) {
      if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
        logger.error('[Planifica] Ni Brevo ni SMTP configurados');
        return NextResponse.json(
          { success: false, error: 'Error de configuración del servidor. Por favor, contacta con soporte.' },
          { status: 500 }
        );
      }

      const nodemailer = require('nodemailer');
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });

      await transporter.sendMail({
        from: `"Formulario Web" <${process.env.SMTP_USER}>`,
        to: 'contacto@estabaenlisboa.com',
        replyTo: email,
        subject: `[Plan a medida] ${nombre} - ${dias || '?'} días`,
        html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;"><h2 style="color: #C84B31;">Nueva solicitud de plan a medida</h2>${resumenHtml}</div>`,
        text: resumenText,
      });

      await transporter.sendMail({
        from: `"Estaba en Lisboa" <${process.env.SMTP_USER}>`,
        to: email,
        subject: 'Hemos recibido tu solicitud - Estaba en Lisboa',
        html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;"><h2 style="color: #C84B31;">¡Solicitud recibida!</h2><p>Hola <strong>${nombre}</strong>,</p><p>Voy a revisar tus respuestas personalmente y te enviaré tu plan a medida en 24-48 horas.</p><p>— José, desde Lisboa</p></div>`,
        text: `Hola ${nombre},\n\nVoy a revisar tus respuestas personalmente y te enviaré tu plan a medida en 24-48 horas.\n\n— José, desde Lisboa`,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error('[Planifica] Error procesando solicitud:', error);
    return NextResponse.json(
      { success: false, error: 'Error al enviar la solicitud. Por favor, intenta de nuevo.' },
      { status: 500 }
    );
  }
}

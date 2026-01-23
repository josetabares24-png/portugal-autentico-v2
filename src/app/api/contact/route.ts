import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, email, asunto, mensaje } = body;

    // Validación básica
    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json(
        { message: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Email no válido' },
        { status: 400 }
      );
    }

    // Mapear asuntos a texto legible
    const asuntoMap: Record<string, string> = {
      'duda-guia': 'Duda sobre una guía',
      'problema-pago': 'Problema con el pago',
      'sugerencia': 'Sugerencia o feedback',
      'colaboracion': 'Propuesta de colaboración',
      'otro': 'Otro',
    };

    const asuntoTexto = asuntoMap[asunto] || asunto;

    const brevoApiKey = process.env.BREVO_API_KEY;
    const notificationTemplateId = process.env.BREVO_CONTACT_NOTIFICATION_TEMPLATE_ID;
    const confirmationTemplateId = process.env.BREVO_CONTACT_CONFIRMATION_TEMPLATE_ID;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const senderName = process.env.BREVO_SENDER_NAME || 'Estaba en Lisboa';

    // Intentar usar Brevo primero
    if (brevoApiKey) {
      try {
        // 1. Enviar notificación al administrador
        if (notificationTemplateId) {
          await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'api-key': brevoApiKey,
            },
            body: JSON.stringify({
              templateId: parseInt(notificationTemplateId, 10),
              to: [{ email: 'contacto@estabaenlisboa.com', name: 'Estaba en Lisboa' }],
              replyTo: { email, name: nombre },
              params: {
                NOMBRE: nombre,
                EMAIL: email,
                ASUNTO: asuntoTexto,
                MENSAJE: mensaje,
              },
              headers: {
                'X-Mailer': 'Estaba en Lisboa',
              },
            }),
          });
        } else if (senderEmail) {
          // Fallback sin template
          await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'api-key': brevoApiKey,
            },
            body: JSON.stringify({
              sender: { name: senderName, email: senderEmail },
              to: [{ email: 'contacto@estabaenlisboa.com', name: 'Estaba en Lisboa' }],
              replyTo: { email, name: nombre },
              subject: `[Contacto Web] ${asuntoTexto} - ${nombre}`,
              htmlContent: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <h2 style="color: #FF6B35;">Nuevo mensaje de contacto</h2>
                  <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Nombre:</strong> ${nombre}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Asunto:</strong> ${asuntoTexto}</p>
                  </div>
                  <div style="background: #fff; padding: 20px; border-left: 4px solid #FF6B35; margin: 20px 0;">
                    <h3 style="color: #333; margin-top: 0;">Mensaje:</h3>
                    <p style="white-space: pre-wrap; color: #555;">${mensaje}</p>
                  </div>
                  <p style="color: #666; font-size: 12px; margin-top: 30px;">
                    Puedes responder directamente a este email para contactar con ${nombre} (${email})
                  </p>
                </div>
              `,
              textContent: `Nuevo mensaje de contacto\n\nNombre: ${nombre}\nEmail: ${email}\nAsunto: ${asuntoTexto}\n\nMensaje:\n${mensaje}\n\nPuedes responder directamente a este email para contactar con ${nombre} (${email})`,
              headers: {
                'X-Mailer': 'Estaba en Lisboa',
              },
            }),
          });
        }

        // 2. Enviar confirmación al usuario (SIEMPRE)
        if (confirmationTemplateId) {
          await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'api-key': brevoApiKey,
            },
            body: JSON.stringify({
              templateId: parseInt(confirmationTemplateId, 10),
              to: [{ email, name: nombre }],
              params: {
                NOMBRE: nombre,
                ASUNTO: asuntoTexto,
                MENSAJE: mensaje,
              },
              headers: {
                'X-Mailer': 'Estaba en Lisboa',
                'List-Unsubscribe': '<https://estabaenlisboa.com/unsubscribe>',
                'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
              },
            }),
          });
        } else if (senderEmail) {
          // Fallback: enviar confirmación sin template si no hay template ID
          await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'api-key': brevoApiKey,
            },
            body: JSON.stringify({
              sender: { name: senderName, email: senderEmail },
              to: [{ email, name: nombre }],
              subject: 'Hemos recibido tu mensaje - Estaba en Lisboa',
              htmlContent: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                  <h2 style="color: #FF6B35; margin-bottom: 20px;">¡Mensaje recibido! ✅</h2>
                  <p style="color: #555; line-height: 1.6;">
                    Hola <strong>${nombre}</strong>,
                  </p>
                  <p style="color: #555; line-height: 1.6;">
                    Hemos recibido tu mensaje sobre <strong>${asuntoTexto}</strong> y te responderemos en menos de 24 horas.
                  </p>
                  <div style="background: #f7f4ef; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FF6B35;">
                    <p style="margin: 0; color: #555; font-size: 14px; line-height: 1.8; white-space: pre-wrap;">${mensaje}</p>
                  </div>
                  <p style="color: #666; font-size: 14px; margin-top: 30px;">
                    Si tienes alguna urgencia, puedes escribirnos directamente a 
                    <a href="mailto:contacto@estabaenlisboa.com" style="color: #FF6B35; text-decoration: none;">contacto@estabaenlisboa.com</a>
                  </p>
                  <p style="color: #999; font-size: 12px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
                    © 2026 Estaba en Lisboa. Todos los derechos reservados.
                  </p>
                </div>
              `,
              textContent: `Hola ${nombre},\n\nHemos recibido tu mensaje sobre ${asuntoTexto} y te responderemos en menos de 24 horas.\n\nResumen de tu mensaje:\n${mensaje}\n\nSi tienes alguna urgencia, puedes escribirnos directamente a contacto@estabaenlisboa.com\n\n© 2026 Estaba en Lisboa. Todos los derechos reservados.`,
              headers: {
                'X-Mailer': 'Estaba en Lisboa',
                'List-Unsubscribe': '<https://estabaenlisboa.com/unsubscribe>',
                'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
              },
            }),
          });
        }

        return NextResponse.json(
          { message: 'Mensaje enviado correctamente' },
          { status: 200 }
        );
      } catch (brevoError) {
        logger.warn('[Contact] Error con Brevo, usando fallback:', brevoError);
      }
    }

    // Fallback a nodemailer si Brevo no está disponible
    const nodemailer = require('nodemailer');
    
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP no configurado');
      return NextResponse.json(
        { message: 'Error de configuración del servidor' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Enviar notificación al admin
    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.SMTP_USER}>`,
      to: 'contacto@estabaenlisboa.com',
      replyTo: email,
      subject: `[Contacto Web] ${asuntoTexto} - ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF6B35;">Nuevo mensaje de contacto</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${asuntoTexto}</p>
          </div>
          <div style="background: #fff; padding: 20px; border-left: 4px solid #FF6B35; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Mensaje:</h3>
            <p style="white-space: pre-wrap; color: #555;">${mensaje}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Puedes responder directamente a este email para contactar con ${nombre} (${email})
          </p>
        </div>
      `,
    });

    // Enviar confirmación automática al usuario
    await transporter.sendMail({
      from: `"Estaba en Lisboa" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Hemos recibido tu mensaje - Estaba en Lisboa',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #FF6B35; margin-bottom: 20px;">¡Mensaje recibido! ✅</h2>
          <p style="color: #555; line-height: 1.6;">
            Hola <strong>${nombre}</strong>,
          </p>
          <p style="color: #555; line-height: 1.6;">
            Hemos recibido tu mensaje sobre <strong>${asuntoTexto}</strong> y te responderemos en menos de 24 horas.
          </p>
          <div style="background: #f7f4ef; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FF6B35;">
            <p style="margin: 0; color: #555; font-size: 14px; line-height: 1.8; white-space: pre-wrap;">${mensaje}</p>
          </div>
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            Si tienes alguna urgencia, puedes escribirnos directamente a 
            <a href="mailto:contacto@estabaenlisboa.com" style="color: #FF6B35; text-decoration: none;">contacto@estabaenlisboa.com</a>
          </p>
          <p style="color: #999; font-size: 12px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
            © 2026 Estaba en Lisboa. Todos los derechos reservados.
          </p>
        </div>
      `,
      text: `Hola ${nombre},\n\nHemos recibido tu mensaje sobre ${asuntoTexto} y te responderemos en menos de 24 horas.\n\nResumen de tu mensaje:\n${mensaje}\n\nSi tienes alguna urgencia, puedes escribirnos directamente a contacto@estabaenlisboa.com\n\n© 2026 Estaba en Lisboa. Todos los derechos reservados.`,
    });

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );
  } catch (error: any) {
    logger.error('Error enviando email de contacto:', error);
    return NextResponse.json(
      { message: 'Error al enviar el mensaje. Por favor, intenta de nuevo.' },
      { status: 500 }
    );
  }
}

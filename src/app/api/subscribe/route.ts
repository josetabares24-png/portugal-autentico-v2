import { NextRequest, NextResponse } from 'next/server';
import { getBrevoService } from '@/lib/brevo';
import logger from '@/lib/logger';
import { limitRequest, getRequestIdentifier } from '@/lib/ratelimit';
import { validateEmail, createErrorResponse, sendBrevoEmail, addBrevoContact } from '@/lib/api-utils';

export async function POST(request: NextRequest) {
  // Rate limiting
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
    const { name, email } = body;

    // Validación básica
    if (!name || !email) {
      return createErrorResponse('Nombre y email son requeridos', 400);
    }

    // Validar formato de email
    if (!validateEmail(email)) {
      return createErrorResponse('Email no válido', 400);
    }

    // Intentar usar Brevo primero
    try {
      const brevoApiKey = process.env.BREVO_API_KEY;
      const subscriptionTemplateId = process.env.BREVO_SUBSCRIPTION_TEMPLATE_ID;
      
      if (brevoApiKey && subscriptionTemplateId) {
        // Usar plantilla de Brevo
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'api-key': brevoApiKey,
          },
          body: JSON.stringify({
            templateId: parseInt(subscriptionTemplateId, 10),
            to: [{ email, name }],
            headers: {
              'X-Mailer': 'Estaba en Lisboa',
              'List-Unsubscribe': '<https://estabaenlisboa.com/unsubscribe>',
              'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
            },
          }),
        });

        if (response.ok) {
          // Agregar contacto a Brevo
          await addBrevoContact({
            email,
            name: name || email.split('@')[0],
            attributes: {
              FUENTE: 'blog',
            },
            listIds: [5],
          });

          return NextResponse.json({ 
            success: true, 
            message: 'Email de bienvenida enviado correctamente',
            method: 'brevo_template'
          });
        }
      }

      // Si no hay template, usar método alternativo de Brevo
      const senderName = process.env.BREVO_SENDER_NAME || 'Estaba en Lisboa';
      const senderEmail = process.env.BREVO_SENDER_EMAIL;
      
      if (senderEmail) {
        const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <tr>
            <td style="background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%); padding: 40px 30px; text-align: center;">
              <img src="https://estabaenlisboa.com/logo.png" alt="Estaba en Lisboa" width="180" height="56" style="display: block; max-width: 180px; height: auto; border: 0; margin: 0 auto;" />
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px;">
              <h1 style="margin: 0 0 20px 0; font-size: 24px; font-weight: 700; color: #333;">¡Hola ${name}! 👋</h1>
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #555;">Gracias por suscribirte a <strong style="color: #FF6B35;">Estaba en Lisboa</strong>.</p>
              <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #555;">Recibirás los mejores consejos, lugares secretos y novedades de Lisboa directamente en tu bandeja de entrada.</p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://estabaenlisboa.com/itinerarios" style="display: inline-block; background: #FF6B35; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 600;">Explorar guías →</a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eee;">
              <p style="margin: 0; font-size: 12px; color: #999;"><a href="{{unsubscribe}}" style="color: #FF6B35; text-decoration: none;">Darse de baja</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `;

        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'api-key': process.env.BREVO_API_KEY || '',
          },
          body: JSON.stringify({
            sender: { name: senderName, email: senderEmail },
            to: [{ email, name }],
            subject: '¡Bienvenido a Estaba en Lisboa!',
            htmlContent,
            textContent: `¡Hola ${name}!\n\nGracias por suscribirte a Estaba en Lisboa.\n\nRecibirás los mejores consejos, lugares secretos y novedades de Lisboa directamente en tu bandeja de entrada.\n\nExplora nuestras guías: https://estabaenlisboa.com/itinerarios\n\nDarse de baja: https://estabaenlisboa.com/unsubscribe\n\n© 2026 Estaba en Lisboa. Todos los derechos reservados.`,
            headers: {
              'X-Mailer': 'Estaba en Lisboa',
              'List-Unsubscribe': '<https://estabaenlisboa.com/unsubscribe>',
              'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
            },
          }),
        });

        if (response.ok) {
          // Agregar contacto a Brevo
          await addBrevoContact({
            email,
            name: name || email.split('@')[0],
            attributes: {
              FUENTE: 'blog',
            },
            listIds: [5],
          });

          return NextResponse.json({ 
            success: true, 
            message: 'Email de bienvenida enviado correctamente',
            method: 'brevo_html'
          });
        }
      }
    } catch (brevoError) {
      logger.warn('[Subscribe] Brevo no disponible, usando fallback nodemailer:', brevoError);
    }

    // Fallback a nodemailer si Brevo no está disponible
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

    // Email de bienvenida con link de descarga (fallback nodemailer)
    await transporter.sendMail({
      from: `"Estaba en Lisboa" <${process.env.SMTP_USER}>`,
      to: email,
      subject: '📥 Tu Guía Gratuita de Lisboa está lista',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
              color: white;
              padding: 30px 20px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background: white;
              padding: 30px;
              border: 1px solid #e0e0e0;
              border-top: none;
            }
            .button {
              display: inline-block;
              background: #FF6B35;
              color: white;
              padding: 15px 30px;
              text-decoration: none;
              border-radius: 8px;
              font-weight: bold;
              margin: 20px 0;
            }
            .footer {
              text-align: center;
              padding: 20px;
              color: #666;
              font-size: 14px;
            }
            ul {
              padding-left: 20px;
            }
            li {
              margin-bottom: 8px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>¡Hola ${name}! 👋</h1>
            <p>Tu guía de Lisboa está lista</p>
          </div>
          
          <div class="content">
            <p>Gracias por confiar en Estaba en Lisboa.</p>
            
            <p>Acabas de dar el primer paso para descubrir Lisboa como un verdadero local. 
            En esta guía encontrarás 15 consejos que te harán ahorrar tiempo, dinero y 
            sobre todo, te harán vivir experiencias auténticas.</p>
            
            <p style="text-align: center;">
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}/downloads/guia-lisboa-gratis.pdf" class="button">
                📥 Acceder a la guía
              </a>
            </p>
            
            <p><strong>Próximos pasos:</strong></p>
            <ul>
              <li>Lee la guía con calma (son solo 15 páginas)</li>
              <li>Marca los consejos que más te interesen</li>
              <li>Si quieres itinerarios completos día a día, echa un vistazo a nuestras 
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}">guías premium</a></li>
            </ul>
            
            <p>¿Tienes alguna pregunta? Responde a este email, leo todos los mensajes personalmente.</p>
            
            <p>¡Buen viaje a Lisboa!</p>
            
            <p>Un abrazo,<br>
            <strong>Jose</strong><br>
            Estaba en Lisboa</p>
          </div>
          
          <div class="footer">
            <p>Estaba en Lisboa · Lisboa, Portugal</p>
            <p>
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}">Web</a>
            </p>
          </div>
        </body>
        </html>
      `,
    });

    // Opcional: Guardar en base de datos
    // Si usas Prisma, descomentar esto:
    /*
    await prisma.subscriber.create({
      data: {
        name,
        email,
        subscribed_at: new Date(),
        source: 'guia_gratis',
      },
    });
    */

    return NextResponse.json({ 
      success: true, 
      message: 'Guía enviada correctamente' 
    });

  } catch (error) {
    logger.error('Error al procesar suscripción:', error);
    return NextResponse.json(
      { message: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}

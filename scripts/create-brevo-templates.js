/**
 * Script para crear plantillas automáticas en Brevo
 * Ejecutar: node scripts/create-brevo-templates.js
 */

const BREVO_API_URL = 'https://api.brevo.com/v3';

// Intentar obtener la API key de diferentes fuentes
let BREVO_API_KEY = process.env.BREVO_API_KEY;

// Si no está en env, intentar decodificar la key proporcionada
if (!BREVO_API_KEY) {
  const encodedKey = 'eyJhcGlfa2V5IjoieGtleXNpYi05ZGM0YzQ1NGU4MTFiNzQ5YWFkMDMyODViM2Q3OGZjMGNiMGUzNjQ0MzM4ZmY0MDMzMjMyNDM3OGMzN2I2OTQxLVRMNVVGM3liRXZQT1A1eGMifQ==';
  try {
    // Intentar decodificar como JWT/base64
    const decoded = Buffer.from(encodedKey, 'base64').toString('utf-8');
    const parsed = JSON.parse(decoded);
    BREVO_API_KEY = parsed.api_key || encodedKey;
  } catch (e) {
    // Si no se puede decodificar, usar directamente
    BREVO_API_KEY = encodedKey;
  }
}

// Plantilla de bienvenida del quiz
const welcomeTemplate = {
  templateName: 'Quiz Lisboa - Bienvenida',
  subject: '{{params.NOMBRE}}, tu perfil viajero en Lisboa',
  htmlContent: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Tu perfil viajero en Lisboa</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header con Logo -->
          <tr>
            <td style="background: #ffffff; padding: 40px 30px; text-align: center; border-bottom: 2px solid #f0f0f0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 20px;">
                    <img src="https://estabaenlisboa.com/logo.png" alt="Estaba en Lisboa" width="180" height="56" style="display: block; max-width: 180px; height: auto; border: 0;" />
                  </td>
                </tr>
                <tr>
                  <td align="center" style="color: #FF6B35; font-size: 14px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;">
                    🇵🇹 Guías de Lisboa por Locales
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Contenido Principal -->
          <tr>
            <td style="padding: 40px 30px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding-bottom: 20px;">
                    <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #333; line-height: 1.4;">
                      Hola <strong style="color: #FF6B35;">{{params.NOMBRE}}</strong>,
                    </h1>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding-bottom: 20px;">
                    <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #555;">
                      ¡Gracias por hacer el quiz! Me encanta saber qué tipo de viajero eres para poder recomendarte exactamente lo que necesitas.
                    </p>
                  </td>
                </tr>
                
                <!-- Profile Card -->
                <tr>
                  <td style="padding: 20px 0;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: linear-gradient(135deg, #f7f4ef 0%, #fff9f0 100%); border-left: 4px solid #FF6B35; border-radius: 8px;">
                      <tr>
                        <td style="padding: 20px;">
                          <p style="margin: 0 0 10px 0; font-size: 14px; font-weight: 600; color: #FF6B35; text-transform: uppercase; letter-spacing: 0.5px;">
                            Tu perfil viajero
                          </p>
                          <p style="margin: 0; font-size: 28px; font-weight: 700; color: #333; text-transform: capitalize;">
                            {{params.PERFIL}}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding-bottom: 20px;">
                    <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #555;">
                      Según tus respuestas, he preparado recomendaciones personalizadas de barrios, experiencias y la guía ideal para tu viaje a Lisboa.
                    </p>
                  </td>
                </tr>
                
                <!-- CTA Button -->
                <tr>
                  <td align="center" style="padding: 20px 0 30px 0;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td align="center" style="background: #FF6B35; border-radius: 8px;">
                          <a href="https://estabaenlisboa.com/itinerarios" style="display: inline-block; padding: 16px 32px; font-size: 16px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 8px;">
                            Ver mis guías personalizadas →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Info Box -->
                <tr>
                  <td style="padding-bottom: 20px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #f0f7ff; border: 1px solid #d0e7ff; border-radius: 8px;">
                      <tr>
                        <td style="padding: 20px;">
                          <p style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #333;">
                            💡 Próximos pasos:
                          </p>
                          <p style="margin: 0 0 8px 0; font-size: 14px; line-height: 1.6; color: #555;">
                            • Explora nuestras guías premium con itinerarios hora a hora
                          </p>
                          <p style="margin: 0 0 8px 0; font-size: 14px; line-height: 1.6; color: #555;">
                            • Descubre los barrios perfectos para tu perfil
                          </p>
                          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #555;">
                            • Recibe tips exclusivos directamente en tu email
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding-bottom: 20px;">
                    <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #555;">
                      Si tienes alguna pregunta sobre tu viaje a Lisboa, responde a este email. Leo todos los mensajes personalmente.
                    </p>
                  </td>
                </tr>
                
                <!-- Signature -->
                <tr>
                  <td style="padding-top: 30px; border-top: 1px solid #eee;">
                    <p style="margin: 0 0 8px 0; font-size: 14px; line-height: 1.6; color: #666;">
                      <strong style="color: #333;">José</strong><br>
                      Estaba en Lisboa<br>
                      <a href="https://estabaenlisboa.com" style="color: #FF6B35; text-decoration: none;">estabaenlisboa.com</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: #f9f9f9; padding: 30px; text-align: center; border-top: 1px solid #eee;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding-bottom: 10px;">
                    <p style="margin: 0; font-size: 12px; line-height: 1.6; color: #666;">
                      Este email fue enviado porque completaste nuestro quiz en <a href="https://estabaenlisboa.com" style="color: #FF6B35; text-decoration: none;">estabaenlisboa.com</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 12px; color: #999;">
                      <a href="{{unsubscribe}}" style="color: #FF6B35; text-decoration: none; margin: 0 8px;">Darse de baja</a> | 
                      <a href="https://estabaenlisboa.com/politica-privacidad" style="color: #FF6B35; text-decoration: none; margin: 0 8px;">Política de privacidad</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 20px;">
                    <p style="margin: 0; font-size: 11px; color: #999;">
                      © 2026 Estaba en Lisboa. Todos los derechos reservados.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim(),
  sender: {
    name: 'Estaba en Lisboa',
    email: process.env.BREVO_SENDER_EMAIL || 'noreply@estabaenlisboa.com'
  },
  isActive: true
};

// Plantilla de confirmación de suscripción
const subscriptionTemplate = {
  templateName: 'Suscripción - Confirmación',
  subject: '¡Bienvenido a Estaba en Lisboa!',
  htmlContent: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>¡Bienvenido a Estaba en Lisboa!</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header con Logo -->
          <tr>
            <td style="background: #ffffff; padding: 40px 30px; text-align: center; border-bottom: 2px solid #f0f0f0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 20px;">
                    <img src="https://estabaenlisboa.com/logo.png" alt="Estaba en Lisboa" width="180" height="56" style="display: block; max-width: 180px; height: auto; border: 0;" />
                  </td>
                </tr>
                <tr>
                  <td align="center" style="color: #FF6B35; font-size: 14px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;">
                    🇵🇹 Guías de Lisboa por Locales
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Contenido Principal -->
          <tr>
            <td style="padding: 40px 30px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 20px;">
                    <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #333; line-height: 1.4;">
                      ¡Bienvenido! 👋
                    </h1>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding-bottom: 20px;">
                    <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #555; text-align: center;">
                      Gracias por suscribirte a <strong style="color: #FF6B35;">Estaba en Lisboa</strong>.
                    </p>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding-bottom: 30px;">
                    <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #555; text-align: center;">
                      Recibirás los mejores consejos, lugares secretos y novedades de Lisboa directamente en tu bandeja de entrada.
                    </p>
                  </td>
                </tr>
                
                <!-- CTA Button -->
                <tr>
                  <td align="center" style="padding-bottom: 30px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td align="center" style="background: #FF6B35; border-radius: 8px;">
                          <a href="https://estabaenlisboa.com/itinerarios" style="display: inline-block; padding: 16px 32px; font-size: 16px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 8px;">
                            Explorar guías →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Info Box -->
                <tr>
                  <td style="padding-bottom: 20px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #f7f4ef; border-radius: 8px;">
                      <tr>
                        <td style="padding: 20px; text-align: center;">
                          <p style="margin: 0; font-size: 14px; line-height: 1.8; color: #555;">
                            ✉️ Tips exclusivos de local<br>
                            📍 Lugares secretos verificados<br>
                            🗺️ Itinerarios hora a hora<br>
                            💡 Consejos que no encontrarás en Google
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: #f9f9f9; padding: 30px; text-align: center; border-top: 1px solid #eee;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 12px; color: #999;">
                      <a href="{{unsubscribe}}" style="color: #FF6B35; text-decoration: none;">Darse de baja</a> | 
                      <a href="https://estabaenlisboa.com/politica-privacidad" style="color: #FF6B35; text-decoration: none;">Política de privacidad</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 15px;">
                    <p style="margin: 0; font-size: 11px; color: #999;">
                      © 2026 Estaba en Lisboa. Todos los derechos reservados.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim(),
  sender: {
    name: 'Estaba en Lisboa',
    email: process.env.BREVO_SENDER_EMAIL || 'noreply@estabaenlisboa.com'
  },
  isActive: true
};

// Plantilla de notificación de contacto (para el administrador)
const contactNotificationTemplate = {
  templateName: 'Contacto - Notificación Admin',
  subject: '[Contacto Web] {{params.ASUNTO}} - {{params.NOMBRE}}',
  htmlContent: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Nuevo mensaje de contacto</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header con Logo -->
          <tr>
            <td style="background: #ffffff; padding: 30px 30px 20px 30px; text-align: center; border-bottom: 2px solid #f0f0f0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 15px;">
                    <img src="https://estabaenlisboa.com/logo.png" alt="Estaba en Lisboa" width="180" height="56" style="display: block; max-width: 180px; height: auto; border: 0;" />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Contenido Principal -->
          <tr>
            <td style="padding: 30px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding-bottom: 20px;">
                    <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #FF6B35; line-height: 1.4;">
                      📧 Nuevo mensaje de contacto
                    </h1>
                  </td>
                </tr>
                
                <!-- Información del contacto -->
                <tr>
                  <td style="padding-bottom: 20px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #f9f9f9; border-radius: 8px; border-left: 4px solid #FF6B35;">
                      <tr>
                        <td style="padding: 20px;">
                          <p style="margin: 0 0 12px 0; font-size: 14px; line-height: 1.6;">
                            <strong style="color: #333; display: inline-block; min-width: 80px;">Nombre:</strong>
                            <span style="color: #555;">{{params.NOMBRE}}</span>
                          </p>
                          <p style="margin: 0 0 12px 0; font-size: 14px; line-height: 1.6;">
                            <strong style="color: #333; display: inline-block; min-width: 80px;">Email:</strong>
                            <a href="mailto:{{params.EMAIL}}" style="color: #FF6B35; text-decoration: none;">{{params.EMAIL}}</a>
                          </p>
                          <p style="margin: 0; font-size: 14px; line-height: 1.6;">
                            <strong style="color: #333; display: inline-block; min-width: 80px;">Asunto:</strong>
                            <span style="color: #555;">{{params.ASUNTO}}</span>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Mensaje -->
                <tr>
                  <td style="padding-bottom: 20px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #fff; border: 1px solid #e0e0e0; border-radius: 8px;">
                      <tr>
                        <td style="padding: 20px;">
                          <h3 style="margin: 0 0 15px 0; font-size: 16px; font-weight: 600; color: #333;">Mensaje:</h3>
                          <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #555; white-space: pre-wrap;">{{params.MENSAJE}}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Info Box -->
                <tr>
                  <td style="padding-bottom: 20px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #f0f7ff; border: 1px solid #d0e7ff; border-radius: 8px;">
                      <tr>
                        <td style="padding: 15px 20px;">
                          <p style="margin: 0; font-size: 13px; line-height: 1.6; color: #555;">
                            💡 <strong>Puedes responder directamente a este email</strong> para contactar con {{params.NOMBRE}} ({{params.EMAIL}})
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eee;">
              <p style="margin: 0; font-size: 11px; color: #999;">
                © 2025 Estaba en Lisboa. Todos los derechos reservados.
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim(),
  sender: {
    name: 'Estaba en Lisboa',
    email: process.env.BREVO_SENDER_EMAIL || 'noreply@estabaenlisboa.com'
  },
  isActive: true
};

// Plantilla de presupuesto
const presupuestoTemplate = {
  templateName: 'Presupuesto - Envío Detallado',
  subject: 'Tu Presupuesto para Lisboa - {{params.TOTAL_VIAJE}}€',
  htmlContent: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Tu Presupuesto para Lisboa</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header con Logo -->
          <tr>
            <td style="background: #ffffff; padding: 40px 30px; text-align: center; border-bottom: 2px solid #f0f0f0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 20px;">
                    <img src="https://estabaenlisboa.com/logo.png" alt="Estaba en Lisboa" width="180" height="56" style="display: block; max-width: 180px; height: auto; border: 0;" />
                  </td>
                </tr>
                <tr>
                  <td align="center" style="color: #FF6B35; font-size: 14px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;">
                    🇵🇹 Guías de Lisboa por Locales
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Contenido Principal -->
          <tr>
            <td style="padding: 40px 30px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 20px;">
                    <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #333; line-height: 1.4;">
                      Tu Presupuesto para Lisboa 📊
                    </h1>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding-bottom: 20px;">
                    <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #555; text-align: center;">
                      Hola <strong style="color: #FF6B35;">{{params.NOMBRE}}</strong>,
                    </p>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding-bottom: 30px;">
                    <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #555; text-align: center;">
                      Aquí está tu presupuesto personalizado calculado según tu estilo de viaje.
                    </p>
                  </td>
                </tr>
                
                <!-- Presupuesto Total -->
                <tr>
                  <td style="padding-bottom: 30px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%); border-radius: 16px; overflow: hidden;">
                      <tr>
                        <td style="padding: 30px; text-align: center;">
                          <p style="margin: 0 0 10px 0; font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.9); text-transform: uppercase; letter-spacing: 1px;">
                            PRESUPUESTO TOTAL
                          </p>
                          <p style="margin: 0 0 15px 0; font-size: 48px; font-weight: 900; color: #ffffff;">
                            {{params.TOTAL_VIAJE}}€
                          </p>
                          <p style="margin: 0; font-size: 14px; color: rgba(255,255,255,0.9);">
                            {{params.PERSONAS}} {{params.PERSONAS_SINGULAR}} × {{params.DIAS}} {{params.DIAS_SINGULAR}}
                          </p>
                          <div style="margin-top: 15px; padding: 12px; background: rgba(255,255,255,0.2); border-radius: 8px; backdrop-filter: blur(10px);">
                            <p style="margin: 0; font-size: 16px; color: #ffffff; font-weight: 600;">
                              {{params.TOTAL_PERSONA_DIA}}€ por persona al día
                            </p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Desglose -->
                <tr>
                  <td style="padding-bottom: 30px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #f9f9f9; border-radius: 12px; overflow: hidden;">
                      <tr>
                        <td style="padding: 20px;">
                          <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 700; color: #333;">
                            Desglose por persona/día
                          </h3>
                          <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e0e0e0;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <span style="font-size: 20px;">🏨</span>
                                <span style="font-size: 14px; font-weight: 600; color: #333;">Alojamiento</span>
                              </div>
                              <span style="font-size: 18px; font-weight: 700; color: #FF6B35;">{{params.ALOJAMIENTO}}€</span>
                            </div>
                          </div>
                          <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e0e0e0;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <span style="font-size: 20px;">☕</span>
                                <span style="font-size: 14px; font-weight: 600; color: #333;">Desayuno</span>
                              </div>
                              <span style="font-size: 18px; font-weight: 700; color: #FF6B35;">{{params.DESAYUNO}}€</span>
                            </div>
                          </div>
                          <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e0e0e0;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <span style="font-size: 20px;">🍽️</span>
                                <span style="font-size: 14px; font-weight: 600; color: #333;">Almuerzo</span>
                              </div>
                              <span style="font-size: 18px; font-weight: 700; color: #FF6B35;">{{params.ALMUERZO}}€</span>
                            </div>
                          </div>
                          <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e0e0e0;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <span style="font-size: 20px;">🍷</span>
                                <span style="font-size: 14px; font-weight: 600; color: #333;">Cena</span>
                              </div>
                              <span style="font-size: 18px; font-weight: 700; color: #FF6B35;">{{params.CENA}}€</span>
                            </div>
                          </div>
                          <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e0e0e0;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <span style="font-size: 20px;">🚇</span>
                                <span style="font-size: 14px; font-weight: 600; color: #333;">Transporte</span>
                              </div>
                              <span style="font-size: 18px; font-weight: 700; color: #FF6B35;">{{params.TRANSPORTE}}€</span>
                            </div>
                          </div>
                          <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e0e0e0;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <span style="font-size: 20px;">🎯</span>
                                <span style="font-size: 14px; font-weight: 600; color: #333;">Actividades</span>
                              </div>
                              <span style="font-size: 18px; font-weight: 700; color: #FF6B35;">{{params.ACTIVIDADES}}€</span>
                            </div>
                          </div>
                          <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e0e0e0;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                              <div style="display: flex; align-items: center; gap: 10px;">
                                <span style="font-size: 20px;">🛍️</span>
                                <span style="font-size: 14px; font-weight: 600; color: #333;">Extras</span>
                              </div>
                              <span style="font-size: 18px; font-weight: 700; color: #FF6B35;">{{params.EXTRAS}}€</span>
                            </div>
                          </div>
                          <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #FF6B35;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                              <span style="font-size: 16px; font-weight: 700; color: #333; text-transform: uppercase;">TOTAL POR DÍA</span>
                              <span style="font-size: 28px; font-weight: 900; color: #FF6B35;">{{params.TOTAL_PERSONA_DIA}}€</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Tipo de Presupuesto -->
                <tr>
                  <td style="padding-bottom: 30px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #f7f4ef; border-left: 4px solid #FF6B35; border-radius: 8px;">
                      <tr>
                        <td style="padding: 20px;">
                          <p style="margin: 0 0 10px 0; font-size: 14px; font-weight: 600; color: #333; text-transform: uppercase;">
                            Tipo de presupuesto: {{params.TIPO_NOMBRE}}
                          </p>
                          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #555;">
                            {{params.TIPO_DESCRIPCION}}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- CTA Button -->
                <tr>
                  <td align="center" style="padding-bottom: 20px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td align="center" style="background: #FF6B35; border-radius: 8px;">
                          <a href="https://estabaenlisboa.com/itinerarios" style="display: inline-block; padding: 16px 32px; font-size: 16px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 8px;">
                            Ver Guías Premium →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: #f9f9f9; padding: 30px; text-align: center; border-top: 1px solid #eee;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 12px; color: #999;">
                      <a href="https://estabaenlisboa.com/politica-privacidad" style="color: #FF6B35; text-decoration: none;">Política de privacidad</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 15px;">
                    <p style="margin: 0; font-size: 11px; color: #999;">
                      © 2026 Estaba en Lisboa. Todos los derechos reservados.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim(),
  sender: {
    name: 'Estaba en Lisboa',
    email: process.env.BREVO_SENDER_EMAIL || 'noreply@estabaenlisboa.com'
  },
  isActive: true
};

// Plantilla de Conserjería Digital (Calculadora Premium)
const conserjeriaDigitalTemplate = {
  templateName: 'Conserjería Digital - Propuesta Personalizada',
  subject: 'Tu propuesta de viaje a Portugal - {{params.NOMBRE}}',
  htmlContent: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Tu Propuesta de Viaje a Portugal</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #FFFDF7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #FFFDF7;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
          
          <!-- Header con Logo -->
          <tr>
            <td style="background: #ffffff; padding: 50px 40px 30px 40px; text-align: center; border-bottom: 1px solid #f0f0f0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 20px;">
                    <img src="https://estabaenlisboa.com/logo.png" alt="Estaba en Lisboa" width="180" height="56" style="display: block; max-width: 180px; height: auto; border: 0;" />
                  </td>
                </tr>
                <tr>
                  <td align="center" style="color: #FF6B35; font-size: 13px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;">
                    🇵🇹 Conserjería Digital
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Contenido Principal -->
          <tr>
            <td style="padding: 50px 40px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding-bottom: 25px;">
                    <h1 style="margin: 0; font-size: 32px; font-weight: 400; font-style: italic; color: #1e293b; line-height: 1.3; font-family: Georgia, serif;">
                      Hola {{params.NOMBRE}},
                    </h1>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding-bottom: 30px;">
                    <p style="margin: 0; font-size: 17px; line-height: 1.7; color: #475569;">
                      Gracias por confiar en nosotros para diseñar tu viaje perfecto a Portugal. He creado una propuesta personalizada basada en tus preferencias.
                    </p>
                  </td>
                </tr>
                
                <!-- Resumen del Viaje -->
                <tr>
                  <td style="padding-bottom: 35px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
                      <tr>
                        <td style="padding: 25px;">
                          <h3 style="margin: 0 0 20px 0; font-size: 16px; font-weight: 700; color: #1e293b; text-transform: uppercase; letter-spacing: 0.5px;">
                            Resumen de tu viaje
                          </h3>
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td style="padding: 8px 0; font-size: 15px; color: #475569;">
                                <strong style="color: #1e293b; min-width: 120px; display: inline-block;">Estilo:</strong>
                                <span style="color: #FF6B35; font-weight: 600;">{{params.ESTILO_NOMBRE}}</span>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 8px 0; font-size: 15px; color: #475569;">
                                <strong style="color: #1e293b; min-width: 120px; display: inline-block;">Duración:</strong>
                                {{params.DIAS}} {{params.DIAS_SINGULAR}}
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 8px 0; font-size: 15px; color: #475569;">
                                <strong style="color: #1e293b; min-width: 120px; display: inline-block;">Viajeros:</strong>
                                {{params.PERSONAS}} {{params.PERSONAS_SINGULAR}}
                              </td>
                            </tr>
                            <tr><td style="padding: 8px 0; font-size: 15px; color: #475569;"><strong style="color: #1e293b; min-width: 120px; display: inline-block;">Alojamiento:</strong>{{params.ALOJAMIENTO_NOMBRE}}</td></tr>
                            <tr><td style="padding: 8px 0; font-size: 15px; color: #475569;"><strong style="color: #1e293b; min-width: 120px; display: inline-block;">Ritmo:</strong>{{params.RITMO_NOMBRE}}</td></tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Presupuesto Estimado -->
                <tr>
                  <td style="padding-bottom: 35px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); border-radius: 16px; overflow: hidden;">
                      <tr>
                        <td style="padding: 35px; text-align: center;">
                          <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.8); text-transform: uppercase; letter-spacing: 1.5px;">
                            Presupuesto Estimado
                          </p>
                          <p style="margin: 0 0 20px 0; font-size: 56px; font-weight: 300; color: #ffffff; font-family: Georgia, serif;">
                            {{params.TOTAL_VIAJE}}€
                          </p>
                          <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 10px; padding: 15px; margin-top: 20px;">
                            <p style="margin: 0; font-size: 16px; color: #ffffff; font-weight: 500;">
                              {{params.TOTAL_PERSONA_DIA}}€ por persona al día
                            </p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Desglose -->
                <tr>
                  <td style="padding-bottom: 35px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0;">
                      <tr>
                        <td style="padding: 25px;">
                          <h3 style="margin: 0 0 20px 0; font-size: 16px; font-weight: 700; color: #1e293b; text-transform: uppercase; letter-spacing: 0.5px;">
                            Desglose por persona/día
                          </h3>
                          {{params.DESGLOSE_ITEMS}}
                          <div style="margin-top: 25px; padding-top: 25px; border-top: 2px solid #FF6B35;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                              <span style="font-size: 15px; font-weight: 700; color: #1e293b; text-transform: uppercase; letter-spacing: 0.5px;">Total por día</span>
                              <span style="font-size: 32px; font-weight: 300; color: #FF6B35; font-family: Georgia, serif;">{{params.TOTAL_PERSONA_DIA}}€</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Intereses -->
                <tr>
                  <td style="padding-bottom: 35px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
                      <tr>
                        <td style="padding: 25px;">
                          <h3 style="margin: 0 0 15px 0; font-size: 16px; font-weight: 700; color: #1e293b; text-transform: uppercase; letter-spacing: 0.5px;">
                            Tus intereses
                          </h3>
                          <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #475569;">
                            {{params.INTERESES_TEXTO}}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Qué Incluye -->
                <tr>
                  <td style="padding-bottom: 35px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #f8fafc; border-radius: 12px; border-left: 4px solid #FF6B35;">
                      <tr>
                        <td style="padding: 25px;">
                          <h3 style="margin: 0 0 20px 0; font-size: 16px; font-weight: 700; color: #1e293b; text-transform: uppercase; letter-spacing: 0.5px;">
                            ¿Qué incluye tu propuesta?
                          </h3>
                          <ul style="margin: 0; padding-left: 20px; list-style: none;">
                            <li style="margin-bottom: 12px; font-size: 15px; line-height: 1.6; color: #475569; padding-left: 25px; position: relative;">
                              <span style="position: absolute; left: 0; color: #FF6B35; font-weight: bold;">✓</span>
                              Itinerario día a día (mañana, tarde y noche)
                            </li>
                            <li style="margin-bottom: 12px; font-size: 15px; line-height: 1.6; color: #475569; padding-left: 25px; position: relative;">
                              <span style="position: absolute; left: 0; color: #FF6B35; font-weight: bold;">✓</span>
                              Reserva de restaurantes locales "no turísticos"
                            </li>
                            <li style="margin-bottom: 12px; font-size: 15px; line-height: 1.6; color: #475569; padding-left: 25px; position: relative;">
                              <span style="position: absolute; left: 0; color: #FF6B35; font-weight: bold;">✓</span>
                              Logística de transporte optimizada
                            </li>
                            <li style="margin-bottom: 0; font-size: 15px; line-height: 1.6; color: #475569; padding-left: 25px; position: relative;">
                              <span style="position: absolute; left: 0; color: #FF6B35; font-weight: bold;">✓</span>
                              Asistencia vía WhatsApp durante el viaje
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Fee de Diseño -->
                <tr>
                  <td style="padding-bottom: 35px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #ffffff; border: 2px dashed #e2e8f0; border-radius: 12px;">
                      <tr>
                        <td style="padding: 25px; text-align: center;">
                          <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
                            Fee de Diseño Local
                          </p>
                          <p style="margin: 0; font-size: 36px; font-weight: 300; color: #1e293b; font-family: Georgia, serif;">
                            150€
                          </p>
                          <p style="margin: 12px 0 0 0; font-size: 13px; color: #94a3b8;">
                            Incluye planificación completa y asistencia
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- CTA Button -->
                <tr>
                  <td align="center" style="padding-bottom: 30px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td align="center" style="background: #1e293b; border-radius: 10px;">
                          <a href="https://estabaenlisboa.com/itinerarios" style="display: inline-block; padding: 18px 40px; font-size: 16px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 10px; letter-spacing: 0.3px;">
                            Ver Guías Premium →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Mensaje Personal -->
                <tr>
                  <td style="padding-top: 30px; border-top: 1px solid #e2e8f0;">
                    <p style="margin: 0 0 15px 0; font-size: 15px; line-height: 1.7; color: #475569; font-style: italic;">
                      "No vendemos tours, diseñamos memorias que duran toda la vida."
                    </p>
                    <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #475569;">
                      Si tienes alguna pregunta o quieres ajustar algo de tu propuesta, responde a este email. Estaré encantado de ayudarte a crear el viaje perfecto.
                    </p>
                  </td>
                </tr>
                
                <!-- Signature -->
                <tr>
                  <td style="padding-top: 30px; border-top: 1px solid #e2e8f0;">
                    <p style="margin: 0 0 8px 0; font-size: 15px; line-height: 1.6; color: #1e293b;">
                      <strong>José</strong><br>
                      Estaba en Lisboa<br>
                      <a href="https://estabaenlisboa.com" style="color: #FF6B35; text-decoration: none;">estabaenlisboa.com</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: #f8fafc; padding: 35px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                      <a href="https://estabaenlisboa.com/politica-privacidad" style="color: #FF6B35; text-decoration: none;">Política de privacidad</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 20px;">
                    <p style="margin: 0; font-size: 11px; color: #cbd5e1;">
                      © 2026 Estaba en Lisboa. Todos los derechos reservados.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim(),
  sender: {
    name: 'Estaba en Lisboa',
    email: process.env.BREVO_SENDER_EMAIL || 'noreply@estabaenlisboa.com'
  },
  isActive: true
};

// Plantilla de confirmación de contacto (para el usuario)
const contactConfirmationTemplate = {
  templateName: 'Contacto - Confirmación Usuario',
  subject: 'Hemos recibido tu mensaje - Estaba en Lisboa',
  htmlContent: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Mensaje recibido</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header con Logo -->
          <tr>
            <td style="background: #ffffff; padding: 40px 30px; text-align: center; border-bottom: 2px solid #f0f0f0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 20px;">
                    <img src="https://estabaenlisboa.com/logo.png" alt="Estaba en Lisboa" width="180" height="56" style="display: block; max-width: 180px; height: auto; border: 0;" />
                  </td>
                </tr>
                <tr>
                  <td align="center" style="color: #FF6B35; font-size: 14px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;">
                    🇵🇹 Guías de Lisboa por Locales
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Contenido Principal -->
          <tr>
            <td style="padding: 40px 30px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 20px;">
                    <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #333; line-height: 1.4;">
                      ¡Mensaje recibido! ✅
                    </h1>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding-bottom: 20px;">
                    <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #555; text-align: center;">
                      Hola <strong style="color: #FF6B35;">{{params.NOMBRE}}</strong>,
                    </p>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding-bottom: 30px;">
                    <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #555; text-align: center;">
                      Hemos recibido tu mensaje sobre <strong>{{params.ASUNTO}}</strong> y te responderemos en menos de 24 horas.
                    </p>
                  </td>
                </tr>
                
                <!-- Info Box -->
                <tr>
                  <td style="padding-bottom: 30px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #f7f4ef; border-radius: 8px;">
                      <tr>
                        <td style="padding: 20px; text-align: center;">
                          <p style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #333;">
                            📋 Resumen de tu mensaje:
                          </p>
                          <p style="margin: 0; font-size: 14px; line-height: 1.8; color: #555; white-space: pre-wrap;">{{params.MENSAJE}}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- CTA Button -->
                <tr>
                  <td align="center" style="padding-bottom: 20px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td align="center" style="background: #FF6B35; border-radius: 8px;">
                          <a href="https://estabaenlisboa.com/itinerarios" style="display: inline-block; padding: 16px 32px; font-size: 16px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 8px;">
                            Explorar nuestras guías →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding-top: 20px; border-top: 1px solid #eee;">
                    <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #666; text-align: center;">
                      Si tienes alguna urgencia, puedes escribirnos directamente a 
                      <a href="mailto:estabaenlisboa@gmail.com" style="color: #FF6B35; text-decoration: none;">estabaenlisboa@gmail.com</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: #f9f9f9; padding: 30px; text-align: center; border-top: 1px solid #eee;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 12px; color: #999;">
                      <a href="https://estabaenlisboa.com/politica-privacidad" style="color: #FF6B35; text-decoration: none;">Política de privacidad</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 15px;">
                    <p style="margin: 0; font-size: 11px; color: #999;">
                      © 2026 Estaba en Lisboa. Todos los derechos reservados.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim(),
  sender: {
    name: 'Estaba en Lisboa',
    email: process.env.BREVO_SENDER_EMAIL || 'noreply@estabaenlisboa.com'
  },
  isActive: true
};

async function updateTemplate(templateId, templateData) {
  try {
    const response = await fetch(`${BREVO_API_URL}/smtp/templates/${templateId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(templateData),
    });

    let result;
    const text = await response.text();
    if (text) {
      try {
        result = JSON.parse(text);
      } catch (e) {
        // Si la respuesta está vacía o no es JSON, puede ser éxito
        if (response.ok) {
          console.log(`✅ Plantilla "${templateData.templateName}" actualizada exitosamente. ID: ${templateId}`);
          return { success: true, id: templateId };
        }
      }
    }

    if (!response.ok) {
      console.error(`   Detalles del error:`, result ? JSON.stringify(result, null, 2) : text);
      throw new Error(result?.message || result?.error || text || 'Error al actualizar plantilla');
    }

    console.log(`✅ Plantilla "${templateData.templateName}" actualizada exitosamente. ID: ${templateId}`);
    return { success: true, id: templateId };
  } catch (error) {
    console.error(`❌ Error al actualizar plantilla ID ${templateId}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function createTemplate(templateData) {
  try {
    const response = await fetch(`${BREVO_API_URL}/smtp/templates`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(templateData),
    });

    const result = await response.json();

    if (!response.ok) {
      if (result.code === 'duplicate_parameter' || result.message?.includes('already exists')) {
        console.log(`⚠️  La plantilla "${templateData.templateName}" ya existe.`);
        return { success: false, exists: true };
      }
      
      // Mostrar más detalles del error
      console.error(`   Detalles del error:`, JSON.stringify(result, null, 2));
      throw new Error(result.message || result.error || 'Error al crear plantilla');
    }

    console.log(`✅ Plantilla "${templateData.templateName}" creada exitosamente. ID: ${result.id}`);
    return { success: true, id: result.id };
  } catch (error) {
    console.error(`❌ Error al crear plantilla "${templateData.templateName}":`, error.message);
    return { success: false, error: error.message };
  }
}

async function listTemplates() {
  try {
    const response = await fetch(`${BREVO_API_URL}/smtp/templates`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'api-key': BREVO_API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error('Error al listar plantillas');
    }

    const result = await response.json();
    return result.templates || [];
  } catch (error) {
    console.error('Error al listar plantillas:', error);
    return [];
  }
}

async function testApiKey() {
  try {
    const response = await fetch(`${BREVO_API_URL}/account`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'api-key': BREVO_API_KEY,
      },
    });

    if (response.ok) {
      const account = await response.json();
      console.log(`✅ API Key válida. Cuenta: ${account.email || account.companyName || 'N/A'}\n`);
      return true;
    } else {
      const error = await response.json().catch(() => ({ message: 'Unknown error' }));
      console.error(`❌ API Key inválida: ${error.message || 'Error de autenticación'}\n`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error al verificar API Key: ${error.message}\n`);
    return false;
  }
}

async function getValidSender() {
  try {
    // Intentar obtener senders verificados
    const response = await fetch(`${BREVO_API_URL}/senders?status=active`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'api-key': BREVO_API_KEY,
      },
    });

    if (response.ok) {
      const result = await response.json();
      const senders = result.senders || [];
      
      if (senders.length > 0) {
        const sender = senders[0];
        console.log(`📧 Sender encontrado: ${sender.email} (${sender.name || 'Sin nombre'})\n`);
        return {
          email: sender.email,
          name: sender.name || 'Estaba en Lisboa'
        };
      }
    }
    
    // Si no hay senders activos, usar el del env o uno por defecto
    const envSender = process.env.BREVO_SENDER_EMAIL;
    if (envSender) {
      console.log(`📧 Usando sender del env: ${envSender}\n`);
      return {
        email: envSender,
        name: 'Estaba en Lisboa'
      };
    }
    
    console.log(`⚠️  No se encontraron senders activos. Usa BREVO_SENDER_EMAIL en .env\n`);
    return null;
  } catch (error) {
    console.error(`   Error al obtener senders: ${error.message}`);
    return null;
  }
}

async function main() {
  console.log('🚀 Creando plantillas automáticas en Brevo...\n');

  if (!BREVO_API_KEY) {
    console.error('❌ BREVO_API_KEY no está configurada');
    console.log('💡 Configura la variable de entorno: export BREVO_API_KEY=tu_api_key');
    process.exit(1);
  }

  // Verificar que la API key sea válida
  console.log('🔑 Verificando API Key...');
  const isValid = await testApiKey();
  if (!isValid) {
    console.error('❌ No se puede continuar sin una API Key válida');
    console.log('\n💡 Para obtener tu API Key:');
    console.log('   1. Ve a https://app.brevo.com/settings/keys/api');
    console.log('   2. Crea una nueva API Key o copia una existente');
    console.log('   3. Ejecuta: export BREVO_API_KEY=tu_api_key_real');
    console.log('   4. Vuelve a ejecutar este script\n');
    process.exit(1);
  }

  // Obtener sender válido
  console.log('📧 Obteniendo sender válido...');
  const validSender = await getValidSender();
  if (!validSender) {
    console.error('❌ No se puede continuar sin un sender válido');
    console.log('\n💡 Para configurar un sender:');
    console.log('   1. Ve a https://app.brevo.com/settings/senders/new');
    console.log('   2. Verifica tu email o dominio');
    console.log('   3. Agrega BREVO_SENDER_EMAIL=tu@email-verificado.com en .env');
    console.log('   4. Vuelve a ejecutar este script\n');
    process.exit(1);
  }

  // Actualizar templates con el sender válido
  welcomeTemplate.sender = validSender;
  subscriptionTemplate.sender = validSender;
  contactNotificationTemplate.sender = validSender;
  contactConfirmationTemplate.sender = validSender;
  presupuestoTemplate.sender = validSender;
  conserjeriaDigitalTemplate.sender = validSender;

  // Listar plantillas existentes
  console.log('📋 Verificando plantillas existentes...');
  const existingTemplates = await listTemplates();
  console.log(`   Encontradas ${existingTemplates.length} plantillas existentes\n`);

  // Buscar o crear/actualizar plantilla de bienvenida del quiz
  console.log('1️⃣ Actualizando plantilla de bienvenida del quiz...');
  // Buscar por ID 6 primero, luego por nombre
  const existingWelcome = existingTemplates.find(t => t.id === 6) || 
                          existingTemplates.find(t => t.id === 8) ||
                          existingTemplates.find(t => 
                            (t.name === welcomeTemplate.templateName || t.templateName === welcomeTemplate.templateName)
                          );
  
  let welcomeResult;
  if (existingWelcome) {
    console.log(`   📝 Encontrada plantilla existente (ID: ${existingWelcome.id}), actualizando...`);
    welcomeResult = await updateTemplate(existingWelcome.id, welcomeTemplate);
  } else {
    console.log(`   ➕ Creando nueva plantilla...`);
    welcomeResult = await createTemplate(welcomeTemplate);
  }
  
  if (welcomeResult.success) {
    console.log(`   ✅ ID de plantilla: ${welcomeResult.id}`);
    console.log(`   💡 Agrega en Vercel: BREVO_WELCOME_TEMPLATE_ID=${welcomeResult.id}\n`);
  }

  // Buscar o crear/actualizar plantilla de suscripción
  console.log('2️⃣ Actualizando plantilla de confirmación de suscripción...');
  // Buscar por ID 7 primero, luego por nombre
  const existingSubscription = existingTemplates.find(t => t.id === 7) ||
                               existingTemplates.find(t => t.id === 9) ||
                               existingTemplates.find(t => 
                                 (t.name === subscriptionTemplate.templateName || t.templateName === subscriptionTemplate.templateName)
                               );
  
  let subscriptionResult;
  if (existingSubscription) {
    console.log(`   📝 Encontrada plantilla existente (ID: ${existingSubscription.id}), actualizando...`);
    subscriptionResult = await updateTemplate(existingSubscription.id, subscriptionTemplate);
  } else {
    console.log(`   ➕ Creando nueva plantilla...`);
    subscriptionResult = await createTemplate(subscriptionTemplate);
  }
  
  if (subscriptionResult.success) {
    console.log(`   ✅ ID de plantilla: ${subscriptionResult.id}`);
    console.log(`   💡 Agrega en Vercel: BREVO_SUBSCRIPTION_TEMPLATE_ID=${subscriptionResult.id}\n`);
  }

  // Buscar o crear/actualizar plantilla de notificación de contacto (admin)
  console.log('3️⃣ Actualizando plantilla de notificación de contacto (admin)...');
  const existingContactNotification = existingTemplates.find(t => t.id === 10) ||
                                      existingTemplates.find(t => 
                                        (t.name === contactNotificationTemplate.templateName || t.templateName === contactNotificationTemplate.templateName)
                                      );
  
  let contactNotificationResult;
  if (existingContactNotification) {
    console.log(`   📝 Encontrada plantilla existente (ID: ${existingContactNotification.id}), actualizando...`);
    contactNotificationResult = await updateTemplate(existingContactNotification.id, contactNotificationTemplate);
  } else {
    console.log(`   ➕ Creando nueva plantilla...`);
    contactNotificationResult = await createTemplate(contactNotificationTemplate);
  }
  
  if (contactNotificationResult.success) {
    console.log(`   ✅ ID de plantilla: ${contactNotificationResult.id}`);
    console.log(`   💡 Agrega en Vercel: BREVO_CONTACT_NOTIFICATION_TEMPLATE_ID=${contactNotificationResult.id}\n`);
  }

  // Buscar o crear/actualizar plantilla de confirmación de contacto (usuario)
  console.log('4️⃣ Actualizando plantilla de confirmación de contacto (usuario)...');
  const existingContactConfirmation = existingTemplates.find(t => t.id === 11) ||
                                      existingTemplates.find(t => 
                                        (t.name === contactConfirmationTemplate.templateName || t.templateName === contactConfirmationTemplate.templateName)
                                      );
  
  let contactConfirmationResult;
  if (existingContactConfirmation) {
    console.log(`   📝 Encontrada plantilla existente (ID: ${existingContactConfirmation.id}), actualizando...`);
    contactConfirmationResult = await updateTemplate(existingContactConfirmation.id, contactConfirmationTemplate);
  } else {
    console.log(`   ➕ Creando nueva plantilla...`);
    contactConfirmationResult = await createTemplate(contactConfirmationTemplate);
  }
  
  if (contactConfirmationResult.success) {
    console.log(`   ✅ ID de plantilla: ${contactConfirmationResult.id}`);
    console.log(`   💡 Agrega en Vercel: BREVO_CONTACT_CONFIRMATION_TEMPLATE_ID=${contactConfirmationResult.id}\n`);
  }

  // Buscar o crear/actualizar plantilla de presupuesto
  console.log('5️⃣ Actualizando plantilla de presupuesto...');
  const existingPresupuesto = existingTemplates.find(t => t.id === 12) ||
                              existingTemplates.find(t => 
                                (t.name === presupuestoTemplate.templateName || t.templateName === presupuestoTemplate.templateName)
                              );
  
  let presupuestoResult;
  if (existingPresupuesto) {
    console.log(`   📝 Encontrada plantilla existente (ID: ${existingPresupuesto.id}), actualizando...`);
    presupuestoResult = await updateTemplate(existingPresupuesto.id, presupuestoTemplate);
  } else {
    console.log(`   ➕ Creando nueva plantilla...`);
    presupuestoResult = await createTemplate(presupuestoTemplate);
  }
  
  if (presupuestoResult.success) {
    console.log(`   ✅ ID de plantilla: ${presupuestoResult.id}`);
    console.log(`   💡 Agrega en Vercel: BREVO_PRESUPUESTO_TEMPLATE_ID=${presupuestoResult.id}\n`);
  }

  // Buscar o crear/actualizar plantilla de Conserjería Digital
  console.log('6️⃣ Actualizando plantilla de Conserjería Digital...');
  const existingConserjeria = existingTemplates.find(t => t.id === 13) ||
                              existingTemplates.find(t => 
                                (t.name === conserjeriaDigitalTemplate.templateName || t.templateName === conserjeriaDigitalTemplate.templateName)
                              );
  
  let conserjeriaResult;
  if (existingConserjeria) {
    console.log(`   📝 Encontrada plantilla existente (ID: ${existingConserjeria.id}), actualizando...`);
    conserjeriaResult = await updateTemplate(existingConserjeria.id, conserjeriaDigitalTemplate);
  } else {
    console.log(`   ➕ Creando nueva plantilla...`);
    conserjeriaResult = await createTemplate(conserjeriaDigitalTemplate);
  }
  
  if (conserjeriaResult.success) {
    console.log(`   ✅ ID de plantilla: ${conserjeriaResult.id}`);
    console.log(`   💡 Agrega en Vercel: BREVO_CONSERJERIA_TEMPLATE_ID=${conserjeriaResult.id}\n`);
  }

  console.log('✨ Proceso completado!\n');
  console.log('📝 Próximos pasos:');
  console.log('   1. Copia los IDs de las plantillas creadas');
  console.log('   2. Agrega BREVO_WELCOME_TEMPLATE_ID en Vercel');
  console.log('   3. Verifica que BREVO_SENDER_EMAIL esté configurado');
  console.log('   4. Prueba enviando un email desde el quiz\n');
}

main().catch(console.error);

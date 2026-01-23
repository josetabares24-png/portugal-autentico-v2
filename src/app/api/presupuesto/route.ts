import { NextRequest, NextResponse } from 'next/server';
import logger from '@/lib/logger';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, nombre, tipo, dias, personas, totalViaje, totalPersonaDia, desglose, presupuesto, alojamiento, ritmo, intereses } = body;

    // Validación
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Email no válido' },
        { status: 400 }
      );
    }

    if (!nombre || nombre.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Nombre requerido' },
        { status: 400 }
      );
    }

    const brevoApiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const senderName = process.env.BREVO_SENDER_NAME || 'Estaba en Lisboa';
    const presupuestoTemplateId = process.env.BREVO_PRESUPUESTO_TEMPLATE_ID;
    const conserjeriaTemplateId = process.env.BREVO_CONSERJERIA_TEMPLATE_ID;

    const tipoNombres: Record<string, string> = {
      low: 'Mochilero',
      mid: 'Medio',
      high: 'Confort',
    };

    const tipoDescripciones: Record<string, string> = {
      low: 'Presupuesto optimizado para viajeros que buscan maximizar su experiencia sin gastar de más. Incluye hostels, tascas locales y transporte público.',
      mid: 'Presupuesto equilibrado con hoteles céntricos, restaurantes locales y mix de transporte. Perfecto para la mayoría de viajeros.',
      high: 'Presupuesto cómodo con hoteles boutique, restaurantes gourmet y transporte privado. Para quienes buscan lo mejor.',
    };

    const tipoNombre = tipoNombres[tipo] || 'Medio';
    const tipoDescripcion = tipoDescripciones[tipo] || tipoDescripciones.mid;

    // Mapeo para Conserjería Digital
    const estiloNombres: Record<string, string> = {
      smart: 'Smart & Local',
      premium: 'Premium Experience',
      luxury: 'Ultra-Luxury',
    };

    const alojamientoNombres: Record<string, string> = {
      boutique: 'Boutique',
      lujo: 'Lujo',
      local: 'Local Auténtico',
    };

    const ritmoNombres: Record<string, string> = {
      relajado: 'Relajado',
      intenso: 'Intenso',
    };

    const budget = {
      alojamiento: tipo === 'low' ? 20 : tipo === 'mid' ? 60 : 120,
      desayuno: tipo === 'low' ? 3 : tipo === 'mid' ? 8 : 15,
      almuerzo: tipo === 'low' ? 8 : tipo === 'mid' ? 15 : 25,
      cena: tipo === 'low' ? 10 : tipo === 'mid' ? 20 : 40,
      transporte: tipo === 'low' ? 7 : tipo === 'mid' ? 7 : 15,
      actividades: tipo === 'low' ? 10 : tipo === 'mid' ? 25 : 50,
      extras: tipo === 'low' ? 5 : tipo === 'mid' ? 15 : 30,
    };

    // Preparar parámetros para Conserjería Digital
    const estiloNombre = presupuesto ? estiloNombres[presupuesto] || 'Premium Experience' : tipoNombre;
    const alojamientoNombre = alojamiento ? (alojamientoNombres[alojamiento] || alojamiento) : '';
    const ritmoNombre = ritmo ? (ritmoNombres[ritmo] || ritmo) : '';
    
    // Extraer valores del desglose
    const alojamientoValor = desglose?.find((item: { label: string }) => item.label === 'Alojamiento')?.value || budget.alojamiento;
    const comidaValor = desglose?.find((item: { label: string }) => item.label === 'Comida')?.value || (budget.almuerzo + budget.cena);
    const transporteValor = desglose?.find((item: { label: string }) => item.label === 'Transporte')?.value || budget.transporte;
    const actividadesValor = desglose?.find((item: { label: string }) => item.label === 'Actividades')?.value || budget.actividades;

    // Generar texto de intereses
    const interesesTexto = intereses && intereses.length > 0 ? intereses.map((i: string) => {
      const interestMap: Record<string, string> = {
        gastronomia: '🍷 Gastronomía',
        historia: '🏛️ Historia Oculta',
        naturaleza: '🌊 Naturaleza Salvaje',
        cultura: '🎭 Cultura Local',
        fiesta: '🎉 Vida Nocturna',
        fotografia: '📸 Fotografía',
      };
      return interestMap[i] || i;
    }).join(', ') : '';

    // Preparar parámetros de texto para Conserjería Digital (sin HTML)
    // El HTML se construye directamente en la plantilla de Brevo

    // Generar HTML del presupuesto detallado (fallback si no hay template)
    const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tu Presupuesto para Lisboa</title>
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
                      Hola <strong style="color: #FF6B35;">${nombre}</strong>,
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
                            ${totalViaje.toFixed(0)}€
                          </p>
                          <p style="margin: 0; font-size: 14px; color: rgba(255,255,255,0.9);">
                            ${personas} ${personas === 1 ? 'persona' : 'personas'} × ${dias} ${dias === 1 ? 'día' : 'días'}
                          </p>
                          <div style="margin-top: 15px; padding: 12px; background: rgba(255,255,255,0.2); border-radius: 8px; backdrop-filter: blur(10px);">
                            <p style="margin: 0; font-size: 16px; color: #ffffff; font-weight: 600;">
                              ${totalPersonaDia.toFixed(0)}€ por persona al día
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
                          ${desglose.map((item: { label: string; value: number; icon: string }) => `
                            <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e0e0e0;">
                              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                <div style="display: flex; align-items: center; gap: 10px;">
                                  <span style="font-size: 20px;">${item.icon}</span>
                                  <span style="font-size: 14px; font-weight: 600; color: #333;">${item.label}</span>
                                </div>
                                <span style="font-size: 18px; font-weight: 700; color: #FF6B35;">${item.value}€</span>
                              </div>
                            </div>
                          `).join('')}
                          <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #FF6B35;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                              <span style="font-size: 16px; font-weight: 700; color: #333; text-transform: uppercase;">TOTAL POR DÍA</span>
                              <span style="font-size: 28px; font-weight: 900; color: #FF6B35;">${totalPersonaDia}€</span>
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
                            Tipo de presupuesto: ${tipoNombre}
                          </p>
                          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #555;">
                            ${tipo === 'low' ? 'Presupuesto optimizado para viajeros que buscan maximizar su experiencia sin gastar de más. Incluye hostels, tascas locales y transporte público.' : tipo === 'mid' ? 'Presupuesto equilibrado con hoteles céntricos, restaurantes locales y mix de transporte. Perfecto para la mayoría de viajeros.' : 'Presupuesto cómodo con hoteles boutique, restaurantes gourmet y transporte privado. Para quienes buscan lo mejor.'}
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
                
                <!-- Cupón -->
                <tr>
                  <td style="padding-top: 20px; border-top: 1px solid #eee;">
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
    `.trim();

    const textContent = `Tu Presupuesto para Lisboa

Hola ${nombre},

Aquí está tu presupuesto personalizado calculado según tu estilo de viaje.

PRESUPUESTO TOTAL: ${totalViaje.toFixed(0)}€
${personas} ${personas === 1 ? 'persona' : 'personas'} × ${dias} ${dias === 1 ? 'día' : 'días'}
${totalPersonaDia.toFixed(0)}€ por persona al día

Desglose por persona/día:
${desglose.map((item: { label: string; value: number }) => `- ${item.label}: ${item.value}€`).join('\n')}

TOTAL POR DÍA: ${totalPersonaDia}€

Tipo de presupuesto: ${tipoNombre}

Ver nuestras guías: https://estabaenlisboa.com/itinerarios

© 2026 Estaba en Lisboa. Todos los derechos reservados.`;

    // Función para obtener guía recomendada según días
    const getRecommendedGuide = (dias: number): { slug: string; price: string; name: string } => {
      if (dias === 1) {
        return { slug: 'lisboa-1-dia-lo-esencial', price: '1.99', name: 'Guía Lisboa Express: Lo Mejor en 1 Día' };
      }
      if (dias === 2) {
        return { slug: 'lisboa-2-dias-completo', price: '2.99', name: 'Guía Lisboa Fin de Semana: 2 Días Perfectos' };
      }
      if (dias === 3) {
        return { slug: 'lisboa-3-dias-premium', price: '3.99', name: 'Guía Lisboa + Sintra: 3 Días de Experiencia Completa' };
      }
      if (dias >= 7) {
        return { slug: 'lisboa-full-week', price: '5.99', name: 'Guía Lisboa 7 Días: Semana Completa + Alrededores' };
      }
      return { slug: 'lisboa-2-dias-completo', price: '2.99', name: 'Guía Lisboa Fin de Semana: 2 Días Perfectos' };
    };

    const recommendedGuide = getRecommendedGuide(dias);

    // Intentar usar Brevo primero
    if (brevoApiKey && senderEmail) {
      try {
        // Usar template simple de presupuesto (ID 12) - enfoque en guías premium
        if (presupuestoTemplateId) {
          const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'api-key': brevoApiKey,
            },
            body: JSON.stringify({
              templateId: parseInt(presupuestoTemplateId, 10),
              to: [{ email, name: nombre }],
              params: {
                NOMBRE: nombre,
                TOTAL_VIAJE: totalViaje.toFixed(0),
                PERSONAS: personas.toString(),
                PERSONAS_SINGULAR: personas === 1 ? 'persona' : 'personas',
                DIAS: dias.toString(),
                DIAS_SINGULAR: dias === 1 ? 'día' : 'días',
                TOTAL_PERSONA_DIA: totalPersonaDia.toFixed(0),
                TIPO_NOMBRE: tipoNombre,
                TIPO_DESCRIPCION: tipoDescripcion,
                ALOJAMIENTO: budget.alojamiento.toString(),
                DESAYUNO: budget.desayuno.toString(),
                ALMUERZO: budget.almuerzo.toString(),
                CENA: budget.cena.toString(),
                TRANSPORTE: budget.transporte.toString(),
                ACTIVIDADES: budget.actividades.toString(),
                EXTRAS: budget.extras.toString(),
                GUIA_RECOMENDADA_SLUG: recommendedGuide.slug,
                GUIA_RECOMENDADA_NOMBRE: recommendedGuide.name,
                GUIA_RECOMENDADA_PRECIO: recommendedGuide.price,
                GUIA_RECOMENDADA_URL: `https://estabaenlisboa.com/itinerarios/${recommendedGuide.slug}`,
              },
              headers: {
                'X-Mailer': 'Estaba en Lisboa',
                'List-Unsubscribe': '<https://estabaenlisboa.com/unsubscribe>',
                'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
              },
            }),
          });

          if (response.ok) {
            // También agregar a Brevo como contacto
            try {
              await fetch('https://api.brevo.com/v3/contacts', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'api-key': brevoApiKey,
                },
                body: JSON.stringify({
                  email,
                  attributes: {
                    NOMBRE: nombre,
                    PRESUPUESTO_TIPO: tipoNombre,
                    PRESUPUESTO_DIAS: dias.toString(),
                    PRESUPUESTO_PERSONAS: personas.toString(),
                    PRESUPUESTO_TOTAL: totalViaje.toFixed(0),
                  },
                  listIds: [5], // Lista ID 5
                  updateEnabled: true,
                }),
              });
            } catch (contactError) {
              logger.warn('[Presupuesto] Error agregando contacto a Brevo:', contactError);
            }

            return NextResponse.json(
              { success: true, message: 'Presupuesto enviado correctamente' },
              { status: 200 }
            );
          }
        } else {
          // Fallback: enviar email directo sin template
          const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'api-key': brevoApiKey,
            },
            body: JSON.stringify({
              sender: { name: senderName, email: senderEmail },
              to: [{ email, name: nombre }],
              subject: `Tu Presupuesto para Lisboa - ${totalViaje.toFixed(0)}€`,
              htmlContent,
              textContent,
              headers: {
                'X-Mailer': 'Estaba en Lisboa',
                'List-Unsubscribe': '<https://estabaenlisboa.com/unsubscribe>',
                'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
              },
            }),
          });

          if (response.ok) {
            // También agregar a Brevo como contacto
            try {
              await fetch('https://api.brevo.com/v3/contacts', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'api-key': brevoApiKey,
                },
                body: JSON.stringify({
                  email,
                  attributes: {
                    NOMBRE: nombre,
                    PRESUPUESTO_TIPO: tipoNombre,
                    PRESUPUESTO_DIAS: dias.toString(),
                    PRESUPUESTO_PERSONAS: personas.toString(),
                    PRESUPUESTO_TOTAL: totalViaje.toFixed(0),
                  },
                  listIds: [5], // Lista ID 5
                  updateEnabled: true,
                }),
              });
            } catch (contactError) {
              logger.warn('[Presupuesto] Error agregando contacto a Brevo:', contactError);
            }

            return NextResponse.json(
              { success: true, message: 'Presupuesto enviado correctamente' },
              { status: 200 }
            );
          }
        }
      } catch (brevoError) {
        console.warn('[Presupuesto] Error con Brevo, usando fallback:', brevoError);
      }
    }

    // Fallback a nodemailer
    const nodemailer = require('nodemailer');
    
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        { success: false, error: 'Error de configuración del servidor' },
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

    await transporter.sendMail({
      from: `"Estaba en Lisboa" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Tu Presupuesto para Lisboa - ${totalViaje.toFixed(0)}€`,
      html: htmlContent,
      text: textContent,
    });

    return NextResponse.json(
      { success: true, message: 'Presupuesto enviado correctamente' },
      { status: 200 }
    );
  } catch (error: any) {
    logger.error('Error enviando presupuesto:', error);
    return NextResponse.json(
      { success: false, error: 'Error al enviar el presupuesto. Por favor, intenta de nuevo.' },
      { status: 500 }
    );
  }
}

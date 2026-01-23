/**
 * Utilidades compartidas para APIs
 * Reduce duplicación de código entre diferentes endpoints
 */

import { NextResponse } from 'next/server';
import logger from './logger';

/**
 * Validar formato de email
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') {
    return false;
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * Crear respuesta de API estandarizada
 */
export function createApiResponse(data: any, status = 200): NextResponse {
  return NextResponse.json(data, { status });
}

/**
 * Crear respuesta de error estandarizada
 */
export function createErrorResponse(message: string, status = 400, details?: any): NextResponse {
  return NextResponse.json(
    { 
      success: false, 
      error: message,
      ...(details && { details })
    },
    { status }
  );
}

/**
 * Enviar email usando Brevo
 */
export async function sendBrevoEmail(config: {
  templateId?: number;
  to: { email: string; name: string }[];
  params?: Record<string, string>;
  htmlContent?: string;
  textContent?: string;
  subject?: string;
  replyTo?: { email: string; name: string };
}): Promise<{ success: boolean; error?: string }> {
  const brevoApiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || 'Estaba en Lisboa';

  if (!brevoApiKey || !senderEmail) {
    logger.warn('[Brevo] API key o sender email no configurados');
    return { success: false, error: 'Brevo no configurado' };
  }

  try {
    const body: any = {
      sender: { name: senderName, email: senderEmail },
      to: config.to,
      headers: {
        'X-Mailer': 'Estaba en Lisboa',
        'List-Unsubscribe': '<https://estabaenlisboa.com/unsubscribe>',
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
      },
    };

    if (config.templateId) {
      body.templateId = config.templateId;
      if (config.params) {
        body.params = config.params;
      }
    } else {
      if (!config.subject || !config.htmlContent) {
        return { success: false, error: 'Subject y htmlContent requeridos sin template' };
      }
      body.subject = config.subject;
      body.htmlContent = config.htmlContent;
      if (config.textContent) {
        body.textContent = config.textContent;
      }
    }

    if (config.replyTo) {
      body.replyTo = config.replyTo;
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': brevoApiKey,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      logger.error('[Brevo] Error enviando email:', errorData);
      return { success: false, error: errorData.message || 'Error al enviar email' };
    }

    return { success: true };
  } catch (error: any) {
    logger.error('[Brevo] Excepción al enviar email:', error);
    return { success: false, error: error.message || 'Error de conexión con Brevo' };
  }
}

/**
 * Agregar contacto a Brevo
 */
export async function addBrevoContact(config: {
  email: string;
  name?: string;
  attributes?: Record<string, string>;
  listIds?: number[];
}): Promise<{ success: boolean; error?: string }> {
  const brevoApiKey = process.env.BREVO_API_KEY;

  if (!brevoApiKey) {
    return { success: false, error: 'Brevo no configurado' };
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': brevoApiKey,
      },
      body: JSON.stringify({
        email: config.email,
        ...(config.name && { attributes: { NOMBRE: config.name, ...config.attributes } }),
        ...(config.attributes && !config.name && { attributes: config.attributes }),
        listIds: config.listIds || [5], // Lista ID 5 por defecto
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      // No fallar si el contacto ya existe
      if (response.status === 400 && errorData.message?.includes('already exists')) {
        return { success: true };
      }
      logger.warn('[Brevo] Error agregando contacto:', errorData);
      return { success: false, error: errorData.message || 'Error al agregar contacto' };
    }

    return { success: true };
  } catch (error: any) {
    logger.warn('[Brevo] Excepción al agregar contacto:', error);
    return { success: false, error: error.message || 'Error de conexión' };
  }
}

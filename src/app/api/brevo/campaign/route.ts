import { timingSafeEqual } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import logger from '@/lib/logger';
import { limitRequest, getRequestIdentifier } from '@/lib/ratelimit';
import { createErrorResponse } from '@/lib/api-utils';

type CampaignPayload = {
  name: string;
  subject: string;
  sender: { name: string; email: string };
  htmlContent: string;
  listIds: number[];
  scheduledAt?: string;
};

const BREVO_API_URL = 'https://api.brevo.com/v3';

/**
 * Crear campañas no es una función pública, pero este endpoint no comprobaba
 * nada: ni Clerk ni el proxy lo cubrían. Ahora solo responde si
 * BREVO_CAMPAIGN_SECRET está definido y la petición trae
 * `Authorization: Bearer <secreto>`. Sin esa variable queda apagado (404).
 */
function isAuthorized(request: NextRequest): boolean | null {
  const secret = process.env.BREVO_CAMPAIGN_SECRET;
  if (!secret) return null;
  const header = request.headers.get('authorization') ?? '';
  const given = Buffer.from(header.replace(/^Bearer\s+/i, ''));
  const expected = Buffer.from(secret);
  return given.length === expected.length && timingSafeEqual(given, expected);
}

export async function POST(request: NextRequest) {
  const authorized = isAuthorized(request);
  if (authorized === null) {
    return NextResponse.json({ success: false, error: 'No encontrado' }, { status: 404 });
  }
  if (!authorized) {
    return NextResponse.json({ success: false, error: 'No autorizado' }, { status: 401 });
  }

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
    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: 'BREVO_API_KEY no configurada' },
        { status: 500 }
      );
    }

    const data = (await request.json()) as CampaignPayload;

    if (!data?.name || !data?.subject || !data?.sender?.email || !data?.sender?.name) {
      return NextResponse.json(
        { success: false, error: 'Faltan campos obligatorios' },
        { status: 400 }
      );
    }

    if (!data?.htmlContent || !data?.listIds?.length) {
      return NextResponse.json(
        { success: false, error: 'Contenido HTML o listas inválidas' },
        { status: 400 }
      );
    }

    const response = await fetch(`${BREVO_API_URL}/emailCampaigns`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        name: data.name,
        subject: data.subject,
        sender: data.sender,
        type: 'classic',
        htmlContent: data.htmlContent,
        recipients: { listIds: data.listIds },
        ...(data.scheduledAt ? { scheduledAt: data.scheduledAt } : {}),
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: result?.message || 'Error al crear campaña' },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    logger.error('Brevo campaign API error:', error);
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}

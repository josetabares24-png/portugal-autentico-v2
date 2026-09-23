import { NextRequest, NextResponse } from 'next/server';
import logger from '@/lib/logger';
import { limitRequest, getRequestIdentifier } from '@/lib/ratelimit';
import { validateEmail, createErrorResponse } from '@/lib/api-utils';

const NEWSLETTER_LIST_ID = Number(process.env.BREVO_NEWSLETTER_LIST_ID || 5);

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

    if (!validateEmail(email)) {
      return createErrorResponse('Email no válido', 400);
    }

    const brevoApiKey = process.env.BREVO_API_KEY;
    if (!brevoApiKey) {
      logger.error('[Unsubscribe] Brevo API key is not configured');
      return NextResponse.json(
        { success: false, message: 'No pudimos procesar la baja. Inténtalo de nuevo más tarde.' },
        { status: 503 }
      );
    }

    const response = await fetch(
      `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}?identifierType=email_id`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-key': brevoApiKey,
        },
        body: JSON.stringify({
          emailBlacklisted: true,
          unlinkListIds: [NEWSLETTER_LIST_ID],
        }),
      }
    );

    // Return the same successful answer when the address is already absent.
    // This avoids turning the endpoint into an email-enumeration check.
    if (response.ok || response.status === 404) {
      return NextResponse.json({
        success: true,
        message: 'La baja se ha procesado.',
      });
    }

    const errorBody = await response.text().catch(() => '');
    logger.error(
      `[Unsubscribe] Brevo returned status ${response.status}: ${errorBody.slice(0, 300)}`
    );

    return NextResponse.json(
      { success: false, message: 'No pudimos procesar la baja. Inténtalo de nuevo más tarde.' },
      { status: 502 }
    );
  } catch (error) {
    logger.error('[Unsubscribe] Error processing request:', error);
    return NextResponse.json(
      { success: false, message: 'No pudimos procesar la baja. Inténtalo de nuevo más tarde.' },
      { status: 500 }
    );
  }
}

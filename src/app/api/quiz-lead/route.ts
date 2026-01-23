import { NextRequest, NextResponse } from 'next/server';
import { getBrevoService } from '@/lib/brevo';
import logger from '@/lib/logger';
import { limitRequest, getRequestIdentifier } from '@/lib/ratelimit';
import { validateEmail, createErrorResponse } from '@/lib/api-utils';

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
    const data = await request.json();

    if (!data.email || !validateEmail(data.email)) {
      return createErrorResponse('Email inválido', 400);
    }

    const brevo = getBrevoService();
    const result = await brevo.addContact({
      email: data.email,
      name: data.name,
      profile: data.profile || 'gastronomo',
      companion: data.companion || '',
      interest: data.interest || '',
      duration: data.duration || '',
      budget: data.budget || '',
      experience: data.experience || '',
    });

    if (!result.success) {
      logger.error('Brevo error:', result.error);
    }

    let emailSent = false;
    if (result.success) {
      try {
        const welcomeResult = await brevo.sendWelcomeEmail(
          data.email,
          data.name,
          data.profile
        );
        emailSent = welcomeResult.success;
      } catch (error) {
        console.error('Brevo welcome email error:', error);
      }
    }

    return NextResponse.json({ success: true, emailSent });
  } catch (error) {
    logger.error('Quiz lead API error:', error);
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}

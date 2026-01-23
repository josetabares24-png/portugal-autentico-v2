import { NextRequest, NextResponse } from 'next/server';
import { getBrevoService } from '@/lib/brevo';
import logger from '@/lib/logger';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json(
        { success: false, error: 'Email inválido' },
        { status: 400 }
      );
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

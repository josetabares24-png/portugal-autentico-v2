import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { auth } from '@clerk/nextjs/server';
import { limitRequest, getRequestIdentifier } from '@/lib/ratelimit';
import { createErrorResponse } from '@/lib/api-utils';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const DONATION_AMOUNTS = [2, 5, 10];
const MIN_AMOUNT = 1;
const MAX_AMOUNT = 100;

export async function POST(request: NextRequest) {
  const identifier = getRequestIdentifier(request);
  const rateLimitResult = await limitRequest(identifier);
  if (!rateLimitResult.success) {
    return createErrorResponse(
      'Demasiadas solicitudes. Por favor, espera un momento.',
      429
    );
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    console.error('STRIPE_SECRET_KEY no está configurada');
    return NextResponse.json(
      { error: 'Error de configuración del servidor.' },
      { status: 500 }
    );
  }

  if (!process.env.NEXT_PUBLIC_SITE_URL) {
    console.error('NEXT_PUBLIC_SITE_URL no está configurada');
    return NextResponse.json(
      { error: 'Error de configuración del servidor.' },
      { status: 500 }
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-12-15.clover',
  });

  try {
    // Auth es opcional para donaciones
    let userId: string | null = null;
    try {
      const authResult = await auth();
      userId = authResult.userId;
    } catch {
      // No auth - está bien para donaciones
    }

    const body = await request.json();
    const { amount, guideSlug } = body;

    // Validar monto
    if (!amount || typeof amount !== 'number' || amount < MIN_AMOUNT || amount > MAX_AMOUNT) {
      return NextResponse.json(
        { error: `El monto debe ser entre ${MIN_AMOUNT}€ y ${MAX_AMOUNT}€.` },
        { status: 400 }
      );
    }

    // Redondear a 2 decimales
    const roundedAmount = Math.round(amount * 100) / 100;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Donativo voluntario - Estaba en Lisboa',
              description: 'Gracias por apoyar nuestro proyecto de guías gratuitas de Lisboa',
            },
            unit_amount: Math.round(roundedAmount * 100), // Stripe usa centavos
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/donar/gracias`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/donar`,
      metadata: {
        type: 'donation',
        amount: String(roundedAmount),
        guideSlug: guideSlug || '',
        userId: userId || '',
      },
    });

    if (!session.url) {
      throw new Error('No se pudo crear la sesión de donación.');
    }

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Donate API error:', error);
    return NextResponse.json(
      { error: error.message || 'Error al procesar la donación.' },
      { status: 500 }
    );
  }
}

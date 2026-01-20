import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { auth } from '@clerk/nextjs/server';
import { registerPurchase, isPaymentProcessed } from '@/lib/access';

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not configured');
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-12-15.clover',
  });
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }
    const body = await request.json();
    const { sessionId } = body;
    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID requerido' }, { status: 400 });
    }
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.metadata?.userId !== userId) {
      return NextResponse.json({ error: 'Sesion no pertenece a este usuario' }, { status: 403 });
    }
    if (session.payment_status !== 'paid') {
      return NextResponse.json({ error: 'El pago no ha sido completado' }, { status: 400 });
    }
    const paymentIntentId = session.payment_intent as string;
    const productId = session.metadata?.productId;
    const productPrice = session.metadata?.productPrice;
    if (!productId || !productPrice) {
      return NextResponse.json({ error: 'Datos de producto no encontrados' }, { status: 400 });
    }
    const alreadyProcessed = await isPaymentProcessed(paymentIntentId);
    if (!alreadyProcessed) {
      const success = await registerPurchase(userId, productId, parseFloat(productPrice), paymentIntentId);
      if (!success) {
        return NextResponse.json({ error: 'Error al registrar la compra' }, { status: 500 });
      }
    }
    return NextResponse.json({
      success: true,
      productId,
      message: alreadyProcessed ? 'Compra ya registrada' : 'Compra registrada exitosamente'
    });
  } catch (error: unknown) {
    const err = error as { message?: string };
    console.error('Error verifying session:', err.message);
    return NextResponse.json({ error: 'Error al verificar la sesion' }, { status: 500 });
  }
}

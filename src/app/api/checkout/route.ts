import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { STRIPE_PRODUCTS } from '@/lib/stripe-products';
import { auth } from '@clerk/nextjs/server';

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
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'El sistema de pagos no esta configurado.' },
        { status: 500 }
      );
    }
    if (!process.env.NEXT_PUBLIC_SITE_URL) {
      return NextResponse.json(
        { error: 'Error de configuracion.' },
        { status: 500 }
      );
    }
    const stripe = getStripe();
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { error: 'Debes iniciar sesion para comprar.' },
        { status: 401 }
      );
    }
    const body = await request.json();
    const { productId } = body;
    if (!productId || typeof productId !== 'string') {
      return NextResponse.json(
        { error: 'Product ID invalido.' },
        { status: 400 }
      );
    }
    if (!(productId in STRIPE_PRODUCTS)) {
      return NextResponse.json(
        { error: 'Producto no valido.' },
        { status: 400 }
      );
    }
    const product = STRIPE_PRODUCTS[productId as keyof typeof STRIPE_PRODUCTS];
    try {
      await stripe.prices.retrieve(product.priceId);
    } catch (err: unknown) {
      const stripeError = err as { code?: string };
      if (stripeError.code === 'resource_missing') {
        return NextResponse.json(
          { error: 'Producto no configurado en Stripe.' },
          { status: 500 }
        );
      }
    }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: product.priceId, quantity: 1 }],
      mode: 'payment',
      success_url: process.env.NEXT_PUBLIC_SITE_URL + '/exito?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: process.env.NEXT_PUBLIC_SITE_URL + '/itinerarios',
      metadata: {
        productId: productId,
        userId: userId,
        productName: product.name,
        productPrice: product.price.toString(),
      },
    });
    if (!session.url) {
      throw new Error('No se pudo crear la sesion.');
    }
    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    const err = error as { type?: string };
    let errorMessage = 'Error al procesar el pago.';
    let statusCode = 500;
    if (err.type === 'StripeCardError') {
      errorMessage = 'Tarjeta rechazada.';
    } else if (err.type === 'StripeRateLimitError') {
      errorMessage = 'Demasiadas solicitudes.';
      statusCode = 429;
    }
    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}

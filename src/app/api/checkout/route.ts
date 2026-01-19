import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { STRIPE_PRODUCTS } from '@/lib/stripe-products';
import { auth } from '@clerk/nextjs/server';

// Validar variables de entorno al inicio
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not configured');
}

if (!process.env.NEXT_PUBLIC_SITE_URL) {
  throw new Error('NEXT_PUBLIC_SITE_URL is not configured');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-12-15.clover',
});

export async function POST(request: NextRequest) {
  try {
    // Obtener userId si está autenticado (opcional)
    const { userId } = await auth();
    const { productId } = await request.json();

    // Validación de input
    if (!productId || typeof productId !== 'string') {
      return NextResponse.json(
        { error: 'Product ID inválido' },
        { status: 400 }
      );
    }

    if (!(productId in STRIPE_PRODUCTS)) {
      return NextResponse.json(
        { error: 'Producto no válido' },
        { status: 400 }
      );
    }

    const product = STRIPE_PRODUCTS[productId as keyof typeof STRIPE_PRODUCTS];

    // Obtener información del precio desde Stripe para usar el nombre real
    let priceName: string = product.name;
    try {
      const price = await stripe.prices.retrieve(product.priceId);
      if (price.product) {
        const stripeProduct = await stripe.products.retrieve(price.product as string);
        priceName = stripeProduct.name || product.name;
      }
    } catch (err) {
      console.warn('No se pudo obtener nombre del producto desde Stripe, usando nombre local:', err);
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: product.priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/exito?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/itinerarios`,
      customer_email: undefined, // Stripe pedirá el email si no está autenticado
      metadata: {
        productId: productId,
        userId: userId,
      },
    });

    if (!session.url) {
      throw new Error('No se pudo crear la sesión de checkout');
    }

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    
    // Mensajes de error más amigables
    let errorMessage = 'Error al procesar el pago. Por favor, intenta de nuevo.';
    
    if (error.type === 'StripeCardError') {
      errorMessage = 'Tu tarjeta fue rechazada. Verifica los datos o usa otra tarjeta.';
    } else if (error.type === 'StripeRateLimitError') {
      errorMessage = 'Demasiadas solicitudes. Por favor, espera un momento e intenta de nuevo.';
    } else if (error.type === 'StripeInvalidRequestError') {
      errorMessage = 'Error en la solicitud. Por favor, verifica los datos e intenta de nuevo.';
    } else if (error.message) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

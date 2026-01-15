import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { STRIPE_PRODUCTS } from '@/lib/stripe-products';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-12-15.clover',
});

export async function POST(request: NextRequest) {
  try {
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
      metadata: {
        productId: productId,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

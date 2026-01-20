import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';
import { registerPurchase } from '@/lib/access';

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
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      console.error('STRIPE_WEBHOOK_SECRET is not configured');
      return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 });
    }
    const body = await request.text();
    const headersList = await headers();
    const signature = headersList.get('stripe-signature');
    if (!signature) {
      return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 });
    }
    const stripe = getStripe();
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: unknown) {
      const error = err as { message?: string };
      return NextResponse.json({ error: 'Webhook signature verification failed: ' + error.message }, { status: 400 });
    }
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.userId;
        const productId = session.metadata?.productId;
        const productPrice = session.metadata?.productPrice;
        if (userId && productId && productPrice) {
          const success = await registerPurchase(userId, productId, parseFloat(productPrice), session.payment_intent as string);
          if (!success) {
            console.error('Failed to register purchase:', { userId, productId });
          }
        }
        break;
      }
      default:
        break;
    }
    return NextResponse.json({ received: true });
  } catch (error: unknown) {
    const err = error as { message?: string };
    console.error('Webhook error:', err.message);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}

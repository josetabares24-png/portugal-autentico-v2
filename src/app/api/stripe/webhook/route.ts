import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { handlePurchaseFulfillment } from '@/lib/purchase-fulfillment';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const headersList = await headers();
    const sig = headersList.get('stripe-signature');

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, sig!, endpointSecret);
    } catch (err: any) {
      console.error(`Webhook signature verification failed:`, err.message);
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // Handle the event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;

      console.log(`Processing completed checkout session: ${session.id}`);

      try {
        await handlePurchaseFulfillment(session);
        console.log(`Purchase fulfillment completed for session: ${session.id}`);
      } catch (error) {
        console.error(`Failed to fulfill purchase for session ${session.id}:`, error);
        // In production, you might want to retry or alert
        return NextResponse.json({ error: 'Fulfillment failed' }, { status: 500 });
      }
    } else {
      console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
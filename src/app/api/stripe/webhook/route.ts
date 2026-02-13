import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { handlePurchaseFulfillment } from '@/lib/purchase-fulfillment';
import { insertCompletedPurchase, getPurchaseByStripeSession } from '@/lib/supabase';
import { STRIPE_PRODUCTS } from '@/lib/stripe-products';
import { guidePacks } from '@/data/guide-packs';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-12-15.clover',
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
        // 1. Guardar compra en Supabase para Mis Guías y acceso a contenido
        const productId = session.metadata?.productId as string | undefined;
        const clerkUserId = session.metadata?.userId as string | undefined;
        const customerEmail = session.customer_details?.email;
        const customerName = session.customer_details?.name || 'Viajero';

        if (productId && clerkUserId && customerEmail) {
          // Evitar duplicados si el webhook se reenvía
          const existing = await getPurchaseByStripeSession(session.id);
          if (!existing) {
            const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
            const amount = lineItems.data[0]?.amount_total
              ? lineItems.data[0].amount_total / 100
              : STRIPE_PRODUCTS[productId as keyof typeof STRIPE_PRODUCTS]?.price ?? 0;
            const pack = guidePacks[productId];
            const stripeProduct = STRIPE_PRODUCTS[productId as keyof typeof STRIPE_PRODUCTS];

            await insertCompletedPurchase({
              clerkUserId,
              email: customerEmail,
              name: customerName,
              productId,
              itinerarySlug: productId,
              itineraryTitle: pack?.title ?? stripeProduct?.name ?? productId,
              amount,
              stripeSessionId: session.id,
            });
            console.log(`Purchase saved to Supabase for user ${clerkUserId}, product ${productId}`);
          }
        } else {
          console.warn(
            `Webhook: missing metadata (productId: ${!!productId}, userId: ${!!clerkUserId}). ` +
            `Purchase not saved to Supabase. User must be logged in at checkout.`
          );
        }

        // 2. Enviar email de confirmación
        await handlePurchaseFulfillment(session);
        console.log(`Purchase fulfillment completed for session: ${session.id}`);
      } catch (error) {
        console.error(`Failed to fulfill purchase for session ${session.id}:`, error);
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
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { STRIPE_PRODUCTS } from '@/lib/stripe-products';
import { auth } from '@clerk/nextjs/server';

// Forzar que esta ruta sea dinámica para evitar análisis en build time
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  // Validar variables de entorno en runtime, no en tiempo de import
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error('STRIPE_SECRET_KEY no está configurada');
    return NextResponse.json(
      { error: 'Error de configuración del servidor. Por favor, contacta al soporte.' },
      { status: 500 }
    );
  }

  if (!process.env.NEXT_PUBLIC_SITE_URL) {
    console.error('NEXT_PUBLIC_SITE_URL no está configurada');
    return NextResponse.json(
      { error: 'Error de configuración del servidor. Por favor, contacta al soporte.' },
      { status: 500 }
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-11-20.acacia',
  });
  try {
    console.log('API Checkout: Iniciando proceso de checkout', {
      hasStripeKey: !!process.env.STRIPE_SECRET_KEY,
      hasSiteUrl: !!process.env.NEXT_PUBLIC_SITE_URL,
      stripeMode: process.env.STRIPE_SECRET_KEY?.startsWith('sk_live_') ? 'LIVE' : 'TEST'
    });
    
    // Verificar autenticación OBLIGATORIA - las guías se guardan con el usuario
    const { userId } = await auth();
    
    console.log('API Checkout: Auth check', { hasUserId: !!userId });
    
    if (!userId) {
      console.error('API Checkout: Usuario no autenticado');
      return NextResponse.json(
        { error: 'Debes iniciar sesión para comprar. Las guías se guardan en tu cuenta para acceso permanente.' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { productId } = body;

    console.log('API Checkout: productId recibido =', productId);

    // Validación de input
    if (!productId || typeof productId !== 'string') {
      console.error('API Checkout: Product ID inválido', productId);
      return NextResponse.json(
        { error: 'Product ID inválido. Por favor, recarga la página e intenta de nuevo.' },
        { status: 400 }
      );
    }

    if (!(productId in STRIPE_PRODUCTS)) {
      console.error('API Checkout: Producto no encontrado en STRIPE_PRODUCTS', productId);
      console.log('API Checkout: Productos disponibles:', Object.keys(STRIPE_PRODUCTS));
      return NextResponse.json(
        { error: `Producto no válido: ${productId}. Por favor, recarga la página e intenta de nuevo.` },
        { status: 400 }
      );
    }

    const product = STRIPE_PRODUCTS[productId as keyof typeof STRIPE_PRODUCTS];
    
    console.log('API Checkout: Producto encontrado', {
      productId,
      priceId: product.priceId,
      name: product.name
    });

    // Verificar que el Price ID existe en Stripe
    let priceName: string = product.name;
    try {
      console.log('API Checkout: Verificando price ID en Stripe', { priceId: product.priceId });
      const price = await stripe.prices.retrieve(product.priceId);
      console.log('API Checkout: Price encontrado en Stripe', { priceId: price.id });
      
      if (price.product) {
        const stripeProduct = await stripe.products.retrieve(price.product as string);
        priceName = stripeProduct.name || product.name;
        console.log('API Checkout: Producto en Stripe:', stripeProduct.name);
      }
    } catch (err: any) {
      const stripeMode = process.env.STRIPE_SECRET_KEY?.startsWith('sk_live_') ? 'LIVE' : 'TEST';
      console.error('API Checkout: Error al verificar producto en Stripe', {
        error: err.message,
        code: err.code,
        priceId: product.priceId,
        stripeMode
      });
      // Si el price ID no existe, esto es un error crítico
      if (err.code === 'resource_missing') {
        console.error('API Checkout: Price missing in Stripe', {
          priceId: product.priceId,
          stripeMode,
          secretKeyPrefix: process.env.STRIPE_SECRET_KEY?.substring(0, 12)
        });
        return NextResponse.json(
          { error: `El producto no está configurado correctamente en Stripe (Modo: ${stripeMode}). El Price ID '${product.priceId}' no existe. Por favor, verifica que los productos estén creados en el modo correcto (${stripeMode}). Error: ${err.message}` },
          { status: 500 }
        );
      }
      console.warn('API Checkout: No se pudo obtener nombre del producto desde Stripe, usando nombre local:', err.message);
    }

    const stripeMode = process.env.STRIPE_SECRET_KEY?.startsWith('sk_live_') ? 'LIVE' : 'TEST';
    console.log('API Checkout: Creando sesión de checkout en Stripe', {
      priceId: product.priceId,
      stripeMode
    });
    
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
        userId: userId, // Guardamos userId para asociar la compra con el usuario
      },
      // Customer ID para asociar con Clerk user
      customer: undefined, // Stripe creará el customer automáticamente
    });

    console.log('API Checkout: Sesión creada:', session.id);

    if (!session.url) {
      console.error('API Checkout: La sesión no tiene URL');
      throw new Error('No se pudo crear la sesión de checkout. Por favor, intenta de nuevo.');
    }

    console.log('API Checkout: URL de checkout:', session.url);
    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('API Checkout: Error completo:', {
      message: error.message,
      type: error.type,
      code: error.code,
      statusCode: error.statusCode,
      raw: error
    });
    
    // Mensajes de error más amigables y específicos
    let errorMessage = 'Error al procesar el pago. Por favor, intenta de nuevo.';
    let statusCode = 500;
    
    if (error.type === 'StripeCardError') {
      errorMessage = 'Tu tarjeta fue rechazada. Verifica los datos o usa otra tarjeta.';
    } else if (error.type === 'StripeRateLimitError') {
      errorMessage = 'Demasiadas solicitudes. Por favor, espera un momento e intenta de nuevo.';
      statusCode = 429;
    } else if (error.type === 'StripeInvalidRequestError') {
      errorMessage = `Error en la solicitud de Stripe: ${error.message || 'Por favor, verifica los datos e intenta de nuevo.'}`;
      statusCode = 400;
    } else if (error.type === 'StripeAuthenticationError') {
      errorMessage = 'Error de autenticación con Stripe. Por favor, contacta al soporte.';
      statusCode = 500;
    } else if (error.type === 'StripeAPIError') {
      errorMessage = 'Error en el servidor de Stripe. Por favor, intenta de nuevo en unos momentos.';
      statusCode = 502;
    } else if (error.message) {
      errorMessage = error.message;
      // Si el mensaje incluye información específica, lo mantenemos
      if (error.message.includes('STRIPE_SECRET_KEY') || error.message.includes('not configured')) {
        errorMessage = 'Error de configuración del servidor. Por favor, contacta al soporte.';
        statusCode = 500;
      }
    }

    return NextResponse.json(
      { error: errorMessage, details: process.env.NODE_ENV === 'development' ? error.message : undefined },
      { status: statusCode }
    );
  }
}

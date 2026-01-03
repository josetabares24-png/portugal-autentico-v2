'use client';

import { useState } from 'react';

export function useCheckout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const redirectToCheckout = async (productId: string) => {
    try {
      setLoading(true);
      setError(null);

      // Crear sesión de checkout
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Redirigir directamente a Stripe Checkout usando la URL de la sesión
      if (data.sessionId) {
        const stripe = await import('@stripe/stripe-js').then(m => 
          m.loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
        );
        
        if (!stripe) {
          throw new Error('Stripe no se cargó correctamente');
        }

        const { error: stripeError } = await stripe.redirectToCheckout({
          sessionId: data.sessionId,
        });

        if (stripeError) {
          throw new Error(stripeError.message);
        }
      } else {
        throw new Error('No se recibió ID de sesión');
      }
    } catch (err: any) {
      console.error('Error en checkout:', err);
      setError(err.message || 'Error al procesar el pago');
      setLoading(false);
    }
    // No ponemos finally aquí porque la redirección ocurrirá antes
  };

  return { redirectToCheckout, loading, error };
}

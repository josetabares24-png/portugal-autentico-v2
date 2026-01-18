'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export function useCheckout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const redirectToCheckout = async (productId: string) => {
    try {
      setLoading(true);
      setError(null);

      // Crear sesión de checkout en el backend
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

      if (!data.sessionId) {
        throw new Error('No se recibió ID de sesión');
      }

      // Obtener instancia de Stripe
      const stripe = await stripePromise;
      
      if (!stripe) {
        throw new Error('No se pudo cargar Stripe');
      }

      // Redirigir a Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

    } catch (err: any) {
      console.error('Error en checkout:', err);
      setError(err.message || 'Error al procesar el pago');
      setLoading(false);
    }
  };

  return { redirectToCheckout, loading, error };
}


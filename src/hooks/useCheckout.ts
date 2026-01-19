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

      if (!response.ok) {
        const errorMessage = data.error || 'Error al crear sesión de checkout';
        throw new Error(errorMessage);
      }

      if (!data.url) {
        throw new Error('No se recibió URL de checkout');
      }

      // Redirigir directamente a Stripe Checkout usando la URL
      window.location.href = data.url;

    } catch (err: any) {
      console.error('Error en checkout:', err);
      setError(err.message || 'Error al procesar el pago');
      setLoading(false);
    }
  };

  return { redirectToCheckout, loading, error };
}


'use client';

import { useState } from 'react';

export function useCheckout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const redirectToCheckout = async (productId: string) => {
    try {
      setLoading(true);
      setError(null);

      // Validar que tenemos un productId
      if (!productId) {
        throw new Error('Product ID es requerido');
      }

      console.log('Iniciando checkout para producto:', productId);

      // Crear sesión de checkout en el backend
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      console.log('Respuesta del API:', { status: response.status, data });

      if (!response.ok) {
        const errorMessage = data.error || 'Error al crear sesión de checkout';
        
        // Si es un error 401, el mensaje ya indica que se requiere autenticación
        if (response.status === 401) {
          setError(errorMessage);
          setLoading(false);
          throw new Error(errorMessage);
        }
        
        setError(errorMessage);
        setLoading(false);
        throw new Error(errorMessage);
      }

      if (!data.url) {
        const errorMsg = 'No se recibió URL de checkout del servidor';
        setError(errorMsg);
        setLoading(false);
        throw new Error(errorMsg);
      }

      console.log('Redirigiendo a Stripe Checkout:', data.url);

      // Redirigir directamente a Stripe Checkout usando la URL
      window.location.href = data.url;

      // No reseteamos loading aquí porque la página se redirige
      
    } catch (err: any) {
      console.error('Error en checkout:', err);
      const errorMessage = err.message || 'Error al procesar el pago. Por favor, intenta de nuevo.';
      setError(errorMessage);
      setLoading(false);
      throw err; // Re-lanzar para que el componente pueda manejarlo
    }
  };

  return { redirectToCheckout, loading, error };
}


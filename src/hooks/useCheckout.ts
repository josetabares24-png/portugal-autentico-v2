'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export function useCheckout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const redirectToCheckout = async (productId: string) => {
    try {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/bbbed4c0-6b1e-4cf6-9f02-da79905f3ca5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'useCheckout.ts:12',message:'redirectToCheckout called',data:{productId},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H3,H4'})}).catch(()=>{});
      // #endregion
      
      setLoading(true);
      setError(null);

      // Validar que tenemos un productId
      if (!productId) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/bbbed4c0-6b1e-4cf6-9f02-da79905f3ca5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'useCheckout.ts:20',message:'Product ID missing',data:{productId},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H4'})}).catch(()=>{});
        // #endregion
        throw new Error('Product ID es requerido');
      }

      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/bbbed4c0-6b1e-4cf6-9f02-da79905f3ca5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'useCheckout.ts:25',message:'Checking env vars',data:{hasPublishableKey:!!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H2'})}).catch(()=>{});
      // #endregion
      
      console.log('Iniciando checkout para producto:', productId);

      // Crear sesión de checkout en el backend
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/bbbed4c0-6b1e-4cf6-9f02-da79905f3ca5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'useCheckout.ts:29',message:'Fetching checkout API',data:{productId},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H5'})}).catch(()=>{});
      // #endregion
      
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/bbbed4c0-6b1e-4cf6-9f02-da79905f3ca5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'useCheckout.ts:36',message:'API response received',data:{status:response.status,hasError:!response.ok,hasUrl:!!data.url,error:data.error},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H3,H4,H5'})}).catch(()=>{});
      // #endregion

      console.log('Respuesta del API:', { status: response.status, data });

      if (!response.ok) {
        const errorMessage = data.error || 'Error al crear sesión de checkout';
        
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/bbbed4c0-6b1e-4cf6-9f02-da79905f3ca5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'useCheckout.ts:43',message:'API error',data:{status:response.status,error:errorMessage,is401:response.status===401},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H3'})}).catch(()=>{});
        // #endregion
        
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
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/bbbed4c0-6b1e-4cf6-9f02-da79905f3ca5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'useCheckout.ts:56',message:'Missing checkout URL',data:{hasUrl:false},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H4'})}).catch(()=>{});
        // #endregion
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


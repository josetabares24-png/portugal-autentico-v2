'use client';

import { useState, useEffect, useRef } from 'react';
import { useCheckout } from '@/hooks/useCheckout';
import { ProductId } from '@/lib/stripe-products';
import { useUser } from '@clerk/nextjs';
import { SignInButton } from '@clerk/nextjs';

interface BuyButtonProps {
  productId: ProductId;
  className?: string;
  children?: React.ReactNode;
}

export function BuyButton({ productId, className = '', children }: BuyButtonProps) {
  const { redirectToCheckout, loading, error } = useCheckout();
  const { isSignedIn, isLoaded } = useUser();
  const [localError, setLocalError] = useState<string | null>(null);
  const mountTimeRef = useRef<number>(Date.now());
  const clerkLoadTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasLoggedClerkErrorRef = useRef<boolean>(false);

  // #region agent log
  useEffect(() => {
    const logData = {
      location: 'BuyButton.tsx:25',
      message: 'BuyButton mounted',
      data: { productId, isLoaded, isSignedIn, mountTime: mountTimeRef.current },
      timestamp: Date.now(),
      sessionId: 'debug-session',
      runId: 'initial',
      hypothesisId: 'B'
    };
    if (typeof window !== 'undefined') {
      fetch('http://127.0.0.1:7242/ingest/bbbed4c0-6b1e-4cf6-9f02-da79905f3ca5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logData)}).catch(()=>{});
    }
  }, []);
  // #endregion

  // #region agent log
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const logData = {
        location: 'BuyButton.tsx:35',
        message: 'Clerk state changed',
        data: { isLoaded, isSignedIn, productId, timeSinceMount: Date.now() - mountTimeRef.current },
        timestamp: Date.now(),
        sessionId: 'debug-session',
        runId: 'initial',
        hypothesisId: 'B'
      };
      fetch('http://127.0.0.1:7242/ingest/bbbed4c0-6b1e-4cf6-9f02-da79905f3ca5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logData)}).catch(()=>{});
    }
  }, [isLoaded, isSignedIn, productId]);
  // #endregion

  // Timeout para detectar si Clerk nunca se carga (Hipótesis D)
  // #region agent log
  useEffect(() => {
    if (!isLoaded && typeof window !== 'undefined') {
      clerkLoadTimeoutRef.current = setTimeout(() => {
        if (!isLoaded && !hasLoggedClerkErrorRef.current) {
          hasLoggedClerkErrorRef.current = true;
          const logData = {
            location: 'BuyButton.tsx:55',
            message: 'Clerk load timeout - Clerk never loaded',
            data: { 
              productId, 
              timeSinceMount: Date.now() - mountTimeRef.current,
              isLoaded,
              isSignedIn 
            },
            timestamp: Date.now(),
            sessionId: 'debug-session',
            runId: 'initial',
            hypothesisId: 'D'
          };
          fetch('http://127.0.0.1:7242/ingest/bbbed4c0-6b1e-4cf6-9f02-da79905f3ca5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logData)}).catch(()=>{});
          setLocalError('Error al cargar la autenticación. Por favor, recarga la página.');
        }
      }, 10000); // 10 segundos timeout
    }
    return () => {
      if (clerkLoadTimeoutRef.current) {
        clearTimeout(clerkLoadTimeoutRef.current);
      }
    };
  }, [isLoaded, productId]);
  // #endregion

  // Debug: Log del estado de Clerk
  if (typeof window !== 'undefined') {
    console.log('BuyButton - Clerk state:', { isLoaded, isSignedIn, productId });
  }

  const handleClick = async () => {
    // #region agent log
    const clickLogData = {
      location: 'BuyButton.tsx:85',
      message: 'Button clicked',
      data: { productId, isLoaded, isSignedIn, timeSinceMount: Date.now() - mountTimeRef.current },
      timestamp: Date.now(),
      sessionId: 'debug-session',
      runId: 'initial',
      hypothesisId: 'C'
    };
    if (typeof window !== 'undefined') {
      fetch('http://127.0.0.1:7242/ingest/bbbed4c0-6b1e-4cf6-9f02-da79905f3ca5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(clickLogData)}).catch(()=>{});
    }
    // #endregion

    // Si Clerk aún no se ha cargado, intentar igual (puede ser un problema de configuración)
    if (!isLoaded) {
      // #region agent log
      const notLoadedLogData = {
        location: 'BuyButton.tsx:99',
        message: 'Button clicked but Clerk not loaded',
        data: { productId, isLoaded, isSignedIn, timeSinceMount: Date.now() - mountTimeRef.current },
        timestamp: Date.now(),
        sessionId: 'debug-session',
        runId: 'initial',
        hypothesisId: 'C'
      };
      if (typeof window !== 'undefined') {
        fetch('http://127.0.0.1:7242/ingest/bbbed4c0-6b1e-4cf6-9f02-da79905f3ca5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(notLoadedLogData)}).catch(()=>{});
      }
      // #endregion
      console.warn('BuyButton: Clerk aún no se ha cargado, pero intentando checkout');
      // No retornar inmediatamente, permitir que intente
    }
    
    setLocalError(null); // Limpiar error previo
    
    if (isLoaded && !isSignedIn) {
      // #region agent log
      const notSignedInLogData = {
        location: 'BuyButton.tsx:115',
        message: 'User not signed in',
        data: { productId, isLoaded, isSignedIn },
        timestamp: Date.now(),
        sessionId: 'debug-session',
        runId: 'initial',
        hypothesisId: 'C'
      };
      if (typeof window !== 'undefined') {
        fetch('http://127.0.0.1:7242/ingest/bbbed4c0-6b1e-4cf6-9f02-da79905f3ca5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(notSignedInLogData)}).catch(()=>{});
      }
      // #endregion
      setLocalError('Debes iniciar sesión para comprar. Las guías se guardan en tu cuenta.');
      return;
    }
    
    if (!productId) {
      setLocalError('Error: Producto no especificado. Por favor, recarga la página.');
      return;
    }
    
    try {
      // #region agent log
      const checkoutStartLogData = {
        location: 'BuyButton.tsx:132',
        message: 'Starting checkout',
        data: { productId, isLoaded, isSignedIn },
        timestamp: Date.now(),
        sessionId: 'debug-session',
        runId: 'initial',
        hypothesisId: 'C'
      };
      if (typeof window !== 'undefined') {
        fetch('http://127.0.0.1:7242/ingest/bbbed4c0-6b1e-4cf6-9f02-da79905f3ca5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(checkoutStartLogData)}).catch(()=>{});
      }
      // #endregion
      console.log('BuyButton: Iniciando checkout para producto:', productId);
      await redirectToCheckout(productId);
      // Si llegamos aquí sin error, la redirección debería haber ocurrido
    } catch (err: any) {
      // #region agent log
      const checkoutErrorLogData = {
        location: 'BuyButton.tsx:148',
        message: 'Checkout error',
        data: { 
          productId, 
          isLoaded, 
          isSignedIn, 
          errorMessage: err.message,
          errorType: err.name,
          statusCode: err.statusCode
        },
        timestamp: Date.now(),
        sessionId: 'debug-session',
        runId: 'initial',
        hypothesisId: 'C'
      };
      if (typeof window !== 'undefined') {
        fetch('http://127.0.0.1:7242/ingest/bbbed4c0-6b1e-4cf6-9f02-da79905f3ca5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(checkoutErrorLogData)}).catch(()=>{});
      }
      // #endregion
      console.error('BuyButton: Error capturado:', err);
      // El error ya se maneja en useCheckout y se muestra en displayError
      // Pero podemos agregar un mensaje más específico aquí si es necesario
      if (err.message?.includes('iniciar sesión') || err.message?.includes('401')) {
        setLocalError(err.message || 'Debes iniciar sesión para comprar.');
      } else {
        // Mostrar cualquier otro error
        setLocalError(err.message || 'Error al procesar el pago. Por favor, intenta de nuevo.');
      }
    }
  };
  
  // Combinar errores del hook y locales
  const displayError = error || localError;

  // Si no está autenticado, mostrar mensaje claro
  if (isLoaded && !isSignedIn) {
    return (
      <div className="w-full">
        <SignInButton mode="modal">
          <button
            className={className}
          >
            {children || 'Inicia sesión para comprar'}
          </button>
        </SignInButton>
        <p className="text-xs text-slate-500 mt-2 text-center">
          Las guías se guardan en tu cuenta para acceso permanente
        </p>
      </div>
    );
  }

  // Si Clerk no se ha cargado, mostrar mensaje y permitir click (por si es problema de Clerk)
  const isDisabled = loading;
  const showLoadingState = !isLoaded && !displayError;

  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        disabled={isDisabled}
        className={`${className} ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        type="button"
      >
        {loading ? 'Procesando...' : showLoadingState ? 'Cargando...' : (children || 'Comprar ahora')}
      </button>
      {showLoadingState && (
        <p className="text-xs text-slate-500 mt-2 text-center">
          Verificando autenticación...
        </p>
      )}
      {displayError && (
        <div className="mt-2 text-center">
          <p className="text-red-600 text-sm font-medium mb-2">{displayError}</p>
          {displayError.includes('iniciar sesión') && (
            <SignInButton mode="modal">
              <button className="text-xs text-primary hover:underline font-semibold">
                Iniciar sesión ahora →
              </button>
            </SignInButton>
          )}
        </div>
      )}
    </div>
  );
}

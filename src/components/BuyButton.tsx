'use client';

import { useState, useEffect } from 'react';
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
  const [clerkTimeout, setClerkTimeout] = useState(false);

  // Detectar si Clerk tarda mucho en cargar (15 segundos)
  useEffect(() => {
    if (!isLoaded) {
      const timeout = setTimeout(() => {
        setClerkTimeout(true);
      }, 15000);

      return () => clearTimeout(timeout);
    } else {
      setClerkTimeout(false);
    }
  }, [isLoaded]);

  const handleClick = async () => {
    setLocalError(null);
    
    // Si Clerk aún no se ha cargado, esperar un poco más
    if (!isLoaded && !clerkTimeout) {
      setLocalError('Cargando autenticación... Por favor, espera un momento.');
      return;
    }

    // Si Clerk no se cargó después del timeout
    if (!isLoaded && clerkTimeout) {
      setLocalError('Error al cargar la autenticación. Por favor, recarga la página.');
      return;
    }
    
    // Si está cargado pero no autenticado
    if (isLoaded && !isSignedIn) {
      setLocalError('Debes iniciar sesión para comprar. Las guías se guardan en tu cuenta para acceso permanente.');
      return;
    }
    
    if (!productId) {
      setLocalError('Error: Producto no especificado. Por favor, recarga la página.');
      return;
    }
    
    try {
      await redirectToCheckout(productId);
    } catch (err: any) {
      console.error('Error en checkout:', err);
      if (err.message?.includes('iniciar sesión') || err.message?.includes('401')) {
        setLocalError(err.message || 'Debes iniciar sesión para comprar.');
      } else {
        setLocalError(err.message || 'Error al procesar el pago. Por favor, intenta de nuevo.');
      }
    }
  };
  
  // Combinar errores del hook y locales
  const displayError = error || localError;

  // Si no está autenticado y Clerk ya se cargó, mostrar botón de inicio de sesión
  if (isLoaded && !isSignedIn) {
    return (
      <div className="w-full">
        <SignInButton mode="modal">
          <button className={className}>
            {children || 'Inicia sesión para comprar'}
          </button>
        </SignInButton>
        <p className="text-xs text-slate-500 mt-2 text-center">
          Las guías se guardan en tu cuenta para acceso permanente
        </p>
      </div>
    );
  }

  // Si Clerk no se ha cargado aún
  const isDisabled = loading || (!isLoaded && !clerkTimeout);
  const showLoadingState = !isLoaded && !displayError && !clerkTimeout;

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
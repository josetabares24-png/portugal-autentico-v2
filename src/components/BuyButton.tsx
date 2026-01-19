'use client';

import { useState } from 'react';
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

  // Debug: Log del estado de Clerk
  if (typeof window !== 'undefined') {
    console.log('BuyButton - Clerk state:', { isLoaded, isSignedIn, productId });
  }

  const handleClick = async () => {
    // Si Clerk aún no se ha cargado, intentar igual (puede ser un problema de configuración)
    if (!isLoaded) {
      console.warn('BuyButton: Clerk aún no se ha cargado, pero intentando checkout');
      // No retornar inmediatamente, permitir que intente
    }
    
    setLocalError(null); // Limpiar error previo
    
    if (isLoaded && !isSignedIn) {
      setLocalError('Debes iniciar sesión para comprar. Las guías se guardan en tu cuenta.');
      return;
    }
    
    if (!productId) {
      setLocalError('Error: Producto no especificado. Por favor, recarga la página.');
      return;
    }
    
    try {
      console.log('BuyButton: Iniciando checkout para producto:', productId);
      await redirectToCheckout(productId);
      // Si llegamos aquí sin error, la redirección debería haber ocurrido
    } catch (err: any) {
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

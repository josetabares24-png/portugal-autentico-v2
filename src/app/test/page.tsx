'use client';

import { useUser, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs';

export default function TestClerkPage() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full border border-slate-200">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-4xl">lock</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Test Clerk Auth</h1>
          <p className="text-slate-500">Verifica que la autenticación funciona</p>
        </div>
        
        {!isSignedIn ? (
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-slate-400">info</span>
                <p className="font-bold text-slate-700">Estado:</p>
              </div>
              <p className="text-slate-600">❌ No estás conectado</p>
            </div>

            <SignInButton mode="modal">
              <button className="bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white px-6 py-4 rounded-xl font-bold w-full shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">login</span>
                <span>Sign In / Sign Up</span>
              </button>
            </SignInButton>

            <p className="text-xs text-slate-500 text-center">
              Click para probar login con Google, Email o Username
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-green-600">check_circle</span>
                <p className="font-bold text-green-800">✅ Conectado exitosamente</p>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-600 text-sm">person</span>
                  <div>
                    <p className="text-green-700 font-semibold">Usuario:</p>
                    <p className="text-green-600">{user.fullName || 'Sin nombre'}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-600 text-sm">email</span>
                  <div>
                    <p className="text-green-700 font-semibold">Email:</p>
                    <p className="text-green-600">{user.emailAddresses[0]?.emailAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-600 text-sm">badge</span>
                  <div>
                    <p className="text-green-700 font-semibold">User ID:</p>
                    <p className="text-green-600 font-mono text-xs break-all">{user.id}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <UserButton 
                afterSignOutUrl="/test"
                appearance={{
                  elements: {
                    avatarBox: "w-12 h-12"
                  }
                }}
              />
              
              <SignOutButton>
                <button className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">logout</span>
                  <span>Sign Out</span>
                </button>
              </SignOutButton>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <p className="text-xs text-blue-800 text-center">
                <strong>🎉 Clerk funciona perfectamente!</strong><br/>
                Ahora puedes proteger tus guías con este sistema.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-slate-200">
          <a 
            href="/"
            className="text-sm text-slate-500 hover:text-primary flex items-center justify-center gap-1 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Volver al inicio</span>
          </a>
        </div>
      </div>
    </div>
  );
}

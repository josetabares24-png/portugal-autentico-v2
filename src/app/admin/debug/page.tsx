import { auth, clerkClient } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function AdminDebugPage() {
  const { userId } = await auth();
  
  if (!userId) {
    return (
      <div className="min-h-screen bg-[#FFFDF7] pt-24 pb-16 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border-2 border-red-200 p-8">
          <h1 className="text-2xl font-bold text-red-600 mb-4">❌ No estás autenticado</h1>
          <p>Necesitas iniciar sesión primero.</p>
        </div>
      </div>
    );
  }

  try {
    const client = await clerkClient();
    const user = await client.users.getUser(userId);
    const metadata = user.publicMetadata as { role?: string; isAdmin?: boolean; isMaster?: boolean };
    const email = user.emailAddresses[0]?.emailAddress;

    const isAdminByMetadata = metadata?.isAdmin === true || metadata?.isMaster === true || metadata?.role === 'admin';
    const adminEmails = process.env.ADMIN_EMAILS?.split(',') || ['josetabares24@gmail.com'];
    const isAdminByEmail = email && adminEmails.includes(email);

    return (
      <div className="min-h-screen bg-[#FFFDF7] pt-24 pb-16 p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">🔍 Debug - Estado de Admin</h1>
            
            <div className="space-y-4">
              <div>
                <h2 className="font-bold text-slate-700 mb-2">Usuario ID:</h2>
                <p className="font-mono text-sm bg-slate-50 p-2 rounded">{userId}</p>
              </div>

              <div>
                <h2 className="font-bold text-slate-700 mb-2">Email:</h2>
                <p className="font-mono text-sm bg-slate-50 p-2 rounded">{email || 'No disponible'}</p>
              </div>

              <div>
                <h2 className="font-bold text-slate-700 mb-2">Public Metadata:</h2>
                <pre className="text-xs bg-slate-50 p-4 rounded overflow-auto">
                  {JSON.stringify(metadata, null, 2)}
                </pre>
              </div>

              <div>
                <h2 className="font-bold text-slate-700 mb-2">Verificaciones:</h2>
                <ul className="space-y-2">
                  <li className={`p-3 rounded ${isAdminByMetadata ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {isAdminByMetadata ? '✅' : '❌'} Admin por Metadata: {isAdminByMetadata ? 'SÍ' : 'NO'}
                  </li>
                  <li className={`p-3 rounded ${isAdminByEmail ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {isAdminByEmail ? '✅' : '❌'} Admin por Email: {isAdminByEmail ? 'SÍ' : 'NO'}
                  </li>
                  <li className={`p-3 rounded ${isAdminByMetadata || isAdminByEmail ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {(isAdminByMetadata || isAdminByEmail) ? '✅' : '❌'} Resultado Final: {(isAdminByMetadata || isAdminByEmail) ? 'ES ADMIN' : 'NO ES ADMIN'}
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-bold text-slate-700 mb-2">Emails de Admin Configurados:</h2>
                <p className="text-sm bg-slate-50 p-2 rounded">{adminEmails.join(', ')}</p>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>💡 Tip:</strong> Si el metadata está correcto pero aún no funciona, 
                  cierra sesión y vuelve a iniciar sesión para refrescar la sesión de Clerk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-[#FFFDF7] pt-24 pb-16 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border-2 border-red-200 p-8">
          <h1 className="text-2xl font-bold text-red-600 mb-4">❌ Error</h1>
          <pre className="text-xs bg-red-50 p-4 rounded overflow-auto">
            {error instanceof Error ? error.message : String(error)}
          </pre>
        </div>
      </div>
    );
  }
}

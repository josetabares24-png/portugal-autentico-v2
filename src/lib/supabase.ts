// src/lib/supabase.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Lazy initialization para evitar errores durante el build
let supabaseAdminInstance: SupabaseClient | null = null;

function getSupabaseAdmin(): SupabaseClient {
  if (supabaseAdminInstance) {
    return supabaseAdminInstance;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  // Durante el build, si no hay variables de entorno, crear un cliente dummy
  // que permita el build pero no funcionará en runtime
  // IMPORTANTE: Supabase valida que la key no esté vacía, así que siempre debemos pasar un valor
  if (!supabaseUrl || !supabaseKey || supabaseUrl === '' || supabaseKey === '') {
    // Usar valores de demo de Supabase que son válidos pero no funcionarán en producción
    // Esto permite que el build pase sin errores
    // JWT válido de Supabase demo (no funcionará en producción pero permite el build)
    supabaseAdminInstance = createClient(
      'https://xyzcompany.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5emNvbXBhbnkiLCJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQxMDk2ODAwLCJleHAiOjE5ODM0NTY3OTl9.dummy_signature_that_allows_build',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );
  } else {
    supabaseAdminInstance = createClient(
      supabaseUrl,
      supabaseKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );
  }

  return supabaseAdminInstance;
}

// Crear un objeto proxy que inicializa el cliente solo cuando se accede
// Esto evita que se cree durante el build si no se usa
const supabaseAdminProxy = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    const client = getSupabaseAdmin();
    const value = (client as any)[prop];
    if (typeof value === 'function') {
      return value.bind(client);
    }
    return value;
  },
});

export const supabaseAdmin = supabaseAdminProxy;

// Función helper para validar configuración en runtime
export function validateSupabaseConfig() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error('NEXT_PUBLIC_SUPABASE_URL no está configurada');
  }
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY no está configurada');
  }
}

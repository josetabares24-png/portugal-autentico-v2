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

export interface Purchase {
  id: string;
  user_id: string | null;
  email: string;
  name: string;
  itinerary_id: string;
  itinerary_slug: string;
  itinerary_title: string;
  amount: number;
  currency: string;
  stripe_session_id: string | null;
  stripe_payment_intent_id: string | null;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  pdf_url: string | null;
  pdf_generated: boolean;
  email_sent: boolean;
  dietary_restrictions: string[];
  interests: string[];
  budget_level: 'budget' | 'moderate' | 'luxury' | null;
  travel_style: 'relaxed' | 'balanced' | 'intensive' | null;
  additional_notes: string | null;
  metadata: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export async function createPurchase(data: {
  email: string;
  name: string;
  itinerary_id: string;
  itinerary_slug: string;
  itinerary_title: string;
  amount: number;
  currency?: string;
  stripe_session_id?: string;
  dietary_restrictions?: string[];
  interests?: string[];
  budget_level?: 'budget' | 'moderate' | 'luxury';
  travel_style?: 'relaxed' | 'balanced' | 'intensive';
  additional_notes?: string;
  metadata?: Record<string, any>;
}): Promise<Purchase> {
  const { data: userId, error: userError } = await supabaseAdmin.rpc(
    'get_or_create_user',
    {
      p_email: data.email,
      p_name: data.name,
    }
  );

  if (userError) {
    console.error('Error getting/creating user:', userError);
    throw new Error('Failed to get or create user');
  }

  const { data: purchase, error: purchaseError } = await supabaseAdmin
    .from('purchases')
    .insert({
      user_id: userId,
      email: data.email,
      name: data.name,
      itinerary_id: data.itinerary_id,
      itinerary_slug: data.itinerary_slug,
      itinerary_title: data.itinerary_title,
      amount: data.amount,
      currency: data.currency || 'eur',
      stripe_session_id: data.stripe_session_id,
      status: 'pending',
      dietary_restrictions: data.dietary_restrictions || [],
      interests: data.interests || [],
      budget_level: data.budget_level,
      travel_style: data.travel_style,
      additional_notes: data.additional_notes,
      metadata: data.metadata || {},
    })
    .select()
    .single();

  if (purchaseError) {
    console.error('Error creating purchase:', purchaseError);
    throw new Error('Failed to create purchase');
  }

  return purchase;
}

/**
 * Inserta una compra completada vinculada a un usuario de Clerk.
 * Usado por el webhook de Stripe cuando el checkout se completa.
 */
export async function insertCompletedPurchase(data: {
  clerkUserId: string;
  email: string;
  name: string;
  productId: string;
  itinerarySlug: string;
  itineraryTitle: string;
  amount: number;
  stripeSessionId: string;
}): Promise<Purchase | null> {
  const { data: purchase, error } = await supabaseAdmin
    .from('purchases')
    .insert({
      user_id: data.clerkUserId,
      email: data.email,
      name: data.name,
      itinerary_id: data.productId,
      itinerary_slug: data.itinerarySlug,
      itinerary_title: data.itineraryTitle,
      amount: data.amount,
      currency: 'eur',
      stripe_session_id: data.stripeSessionId,
      status: 'completed',
      dietary_restrictions: [],
      interests: [],
      metadata: {},
      pdf_generated: false,
      email_sent: false,
    })
    .select()
    .single();

  if (error) {
    console.error('Error inserting completed purchase:', error);
    return null;
  }

  return purchase;
}

export async function updatePurchaseWithPayment(
  stripeSessionId: string,
  data: {
    stripe_payment_intent_id: string;
    status: 'completed' | 'failed';
  }
): Promise<Purchase | null> {
  const { data: purchase, error } = await supabaseAdmin
    .from('purchases')
    .update({
      stripe_payment_intent_id: data.stripe_payment_intent_id,
      status: data.status,
    })
    .eq('stripe_session_id', stripeSessionId)
    .select()
    .single();

  if (error) {
    console.error('Error updating purchase:', error);
    return null;
  }

  return purchase;
}

export async function markPurchaseAsPdfGenerated(
  purchaseId: string,
  pdfUrl: string
): Promise<boolean> {
  const { error } = await supabaseAdmin
    .from('purchases')
    .update({
      pdf_generated: true,
      pdf_url: pdfUrl,
    })
    .eq('id', purchaseId);

  if (error) {
    console.error('Error marking PDF as generated:', error);
    return false;
  }

  return true;
}

export async function markPurchaseAsEmailSent(
  purchaseId: string
): Promise<boolean> {
  const { error } = await supabaseAdmin
    .from('purchases')
    .update({
      email_sent: true,
    })
    .eq('id', purchaseId);

  if (error) {
    console.error('Error marking email as sent:', error);
    return false;
  }

  return true;
}

export async function getPurchaseByStripeSession(
  sessionId: string
): Promise<Purchase | null> {
  const { data, error } = await supabaseAdmin
    .from('purchases')
    .select('*')
    .eq('stripe_session_id', sessionId)
    .single();

  if (error) {
    console.error('Error getting purchase by session:', error);
    return null;
  }

  return data;
}

export async function getPurchasesByEmail(email: string): Promise<Purchase[]> {
  const { data, error } = await supabaseAdmin
    .from('purchases')
    .select('*')
    .eq('email', email)
    .eq('status', 'completed')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error getting purchases by email:', error);
    return [];
  }

  return data || [];
}

export async function getAllPurchases(
  limit: number = 100,
  offset: number = 0
): Promise<Purchase[]> {
  const { data, error } = await supabaseAdmin
    .from('purchases')
    .select('*')
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error('Error getting all purchases:', error);
    return [];
  }

  return data || [];
}

export async function getSalesStats(): Promise<{
  total_sales: number;
  total_revenue: number;
  completed_sales: number;
  pending_sales: number;
  avg_sale_amount: number;
} | null> {
  const { data, error } = await supabaseAdmin.rpc('get_sales_stats');

  if (error) {
    console.error('Error getting sales stats:', error);
    return null;
  }

  return data;
}

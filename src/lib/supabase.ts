// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// Validar variables de entorno pero permitir que el build funcione
// Las funciones que usen supabaseAdmin deben validar en runtime
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

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

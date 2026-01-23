import { NextResponse } from 'next/server';
import { isAdmin } from '@/lib/auth-utils';

export async function GET() {
  const admin = await isAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const hasSupabase = !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
  
  return NextResponse.json({ configured: hasSupabase });
}

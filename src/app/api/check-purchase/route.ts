import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ hasAccess: false });
    }

    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('productId');

    if (!productId) {
      return NextResponse.json({ hasAccess: false });
    }

    // Verificar en la base de datos si el usuario ha comprado este producto
    // Intentar con itinerary_id primero (formato nuevo)
    let { data, error } = await supabaseAdmin
      .from('purchases')
      .select('id')
      .eq('user_id', userId)
      .eq('itinerary_id', productId)
      .eq('status', 'completed')
      .maybeSingle();

    // Si no encuentra, intentar con guide_id (formato antiguo)
    if (!data && !error) {
      const { data: data2, error: error2 } = await supabaseAdmin
        .from('purchases')
        .select('id')
        .eq('user_id', userId)
        .eq('guide_id', productId)
        .eq('status', 'completed')
        .maybeSingle();
      
      data = data2;
      error = error2;
    }

    if (error) {
      console.error('Error checking purchase:', error);
      return NextResponse.json({ hasAccess: false });
    }

    return NextResponse.json({ hasAccess: !!data });
  } catch (error) {
    console.error('Error in check-purchase:', error);
    return NextResponse.json({ hasAccess: false });
  }
}

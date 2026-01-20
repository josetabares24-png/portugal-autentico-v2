import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const guideId = searchParams.get('guideId');

  if (!guideId) {
    return NextResponse.json({ error: 'guideId es obligatorio' }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from('guide_reviews')
    .select('guide_id,rating,comment,created_at')
    .eq('guide_id', guideId)
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: 'No se pudieron cargar las reseñas' }, { status: 500 });
  }

  return NextResponse.json({ reviews: data || [] });
}

export async function POST(request: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const body = await request.json();
  const { guideId, rating, comment } = body as {
    guideId?: string;
    rating?: number;
    comment?: string;
  };

  if (!guideId || typeof guideId !== 'string') {
    return NextResponse.json({ error: 'Guía inválida' }, { status: 400 });
  }

  const safeRating = Number(rating);
  if (!Number.isFinite(safeRating) || safeRating < 1 || safeRating > 5) {
    return NextResponse.json({ error: 'La valoración debe ser de 1 a 5' }, { status: 400 });
  }

  const trimmedComment = comment?.trim() || null;

  const { data: purchase, error: purchaseError } = await supabaseAdmin
    .from('purchases')
    .select('id')
    .eq('user_id', userId)
    .eq('itinerary_id', guideId)
    .eq('status', 'completed')
    .maybeSingle();

  if (purchaseError) {
    return NextResponse.json({ error: 'Error validando la compra' }, { status: 500 });
  }

  if (!purchase) {
    return NextResponse.json({ error: 'Solo puedes valorar guías compradas' }, { status: 403 });
  }

  const { data, error } = await supabaseAdmin
    .from('guide_reviews')
    .upsert(
      {
        user_id: userId,
        guide_id: guideId,
        rating: safeRating,
        comment: trimmedComment,
      },
      { onConflict: 'user_id,guide_id' }
    )
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: 'No se pudo guardar la reseña' }, { status: 500 });
  }

  return NextResponse.json({ review: data }, { status: 200 });
}

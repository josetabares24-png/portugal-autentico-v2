import { NextResponse } from 'next/server';
import { isAdmin } from '@/lib/auth-utils';
import { supabaseAdmin, validateSupabaseConfig } from '@/lib/supabase';
import type { GuideHighlight } from '@/lib/guide-store';

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  const admin = await isAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  try {
    validateSupabaseConfig();
    const { data, error } = await supabaseAdmin
      .from('guides')
      .select('*')
      .eq('slug', params.slug)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener la guía' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const admin = await isAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  try {
    validateSupabaseConfig();
    const body = await request.json();

    const {
      title,
      subtitle,
      description,
      duration,
      price,
      image,
      color,
      features = [],
      includes = [],
      highlights = [],
      featured = false,
      badgeText,
      badgeColor,
      type = 'main',
    } = body as {
      title: string;
      subtitle?: string;
      description: string;
      duration: string;
      price: number;
      image: string;
      color?: string;
      features?: string[];
      includes?: string[];
      highlights?: GuideHighlight[];
      featured?: boolean;
      badgeText?: string;
      badgeColor?: string;
      type?: 'main' | 'special';
    };

    if (!title || !description || !duration || !image) {
      return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from('guides')
      .upsert({
        slug: params.slug,
        title,
        subtitle: subtitle || null,
        description,
        duration,
        price,
        image,
        color: color || null,
        features,
        includes,
        highlights,
        featured,
        badge_text: badgeText || null,
        badge_color: badgeColor || null,
        type,
      }, { onConflict: 'slug' });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error al guardar la guía' }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  const admin = await isAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  try {
    validateSupabaseConfig();
    const { error } = await supabaseAdmin
      .from('guides')
      .delete()
      .eq('slug', params.slug);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar la guía' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { isAdmin } from '@/lib/auth-utils';
import { supabaseAdmin, validateSupabaseConfig } from '@/lib/supabase';
import type { GuideHighlight } from '@/lib/guide-store';

export async function POST(request: Request) {
  const admin = await isAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  try {
    validateSupabaseConfig();
    const body = await request.json();

    const {
      slug,
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
      slug: string;
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

    if (!slug || !title || !description || !duration || !image) {
      return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 });
    }

    const { error } = await supabaseAdmin.from('guides').insert({
      slug,
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
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear la guía' }, { status: 500 });
  }
}

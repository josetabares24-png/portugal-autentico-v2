import { supabaseAdmin, validateSupabaseConfig } from '@/lib/supabase';
import { guidePacks, type GuidePack } from '@/data/guide-packs';
import { mainItineraries, specialItineraries, type Itinerary } from '@/data/itineraries';

export interface GuideHighlight {
  time: string;
  place: string;
  desc: string;
}

export interface GuideEditData {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  price: number;
  image: string;
  color: string;
  description: string;
  includes: string[];
  highlights: GuideHighlight[];
  features: string[];
  featured: boolean;
  badgeText?: string;
  badgeColor?: string;
  type: 'main' | 'special';
}

interface GuideRow {
  slug: string;
  title: string;
  subtitle: string | null;
  description: string;
  duration: string;
  price: number;
  image: string;
  color: string | null;
  featured: boolean | null;
  badge_text: string | null;
  badge_color: string | null;
  features: string[] | null;
  includes: string[] | null;
  highlights: GuideHighlight[] | null;
  type: 'main' | 'special' | null;
}

const localGuides = [...mainItineraries, ...specialItineraries];

function getLocalGuideMeta(slug: string): Itinerary | undefined {
  return localGuides.find(
    (guide) => guide.slug === slug || guide.id === slug || guide.href?.includes(slug)
  );
}

export async function getGuideList(): Promise<{
  main: Itinerary[];
  special: Itinerary[];
}> {
  try {
    validateSupabaseConfig();
    const { data, error } = await supabaseAdmin
      .from('guides')
      .select('*')
      .order('title', { ascending: true });

    if (error || !data || data.length === 0) {
      return { main: mainItineraries, special: specialItineraries };
    }

    const mapped = data.map((row: GuideRow) => ({
      id: row.slug,
      slug: row.slug,
      title: row.title,
      description: row.description,
      duration: row.duration,
      price: Number(row.price),
      image: row.image,
      features: row.features || [],
      href: `/itinerarios/${row.slug}`,
      featured: row.featured || false,
      badge: row.badge_text
        ? { text: row.badge_text, color: row.badge_color || 'bg-orange-500' }
        : undefined,
      _type: row.type || 'main',
    }));

    return {
      main: mapped.filter((guide) => guide._type !== 'special'),
      special: mapped.filter((guide) => guide._type === 'special'),
    };
  } catch (error) {
    return { main: mainItineraries, special: specialItineraries };
  }
}

export async function getGuidePack(slug: string): Promise<GuidePack | null> {
  try {
    validateSupabaseConfig();
    const { data, error } = await supabaseAdmin
      .from('guides')
      .select('*')
      .eq('slug', slug)
      .single();

    if (!error && data) {
      const row = data as GuideRow;
      return {
        slug: row.slug,
        title: row.title,
        subtitle: row.subtitle || row.duration,
        duration: row.duration,
        price: Number(row.price).toFixed(2),
        image: row.image,
        color: row.color || 'from-slate-600 to-slate-800',
        badge: row.badge_text || undefined,
        description: row.description,
        includes: row.includes || [],
        highlights: row.highlights || [],
      };
    }
  } catch (error) {
    // fallback below
  }

  const local = guidePacks[slug as keyof typeof guidePacks];
  return local || null;
}

export async function getGuideEditData(slug: string): Promise<GuideEditData | null> {
  const localPack = guidePacks[slug as keyof typeof guidePacks];
  const localMeta = getLocalGuideMeta(slug);

  // Intentar obtener de Supabase solo si está configurado
  try {
    // Verificar si Supabase está configurado sin lanzar error
    const hasSupabase = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (hasSupabase) {
      validateSupabaseConfig();
      const { data, error } = await supabaseAdmin
        .from('guides')
        .select('*')
        .eq('slug', slug)
        .single();

      if (!error && data) {
        const row = data as GuideRow;
        return {
          slug: row.slug,
          title: row.title,
          subtitle: row.subtitle || localPack?.subtitle || '',
          duration: row.duration,
          price: Number(row.price),
          image: row.image,
          color: row.color || localPack?.color || 'from-slate-600 to-slate-800',
          description: row.description,
          includes: row.includes || localPack?.includes || [],
          highlights: row.highlights || localPack?.highlights || [],
          features: row.features || localMeta?.features || [],
          featured: row.featured || false,
          badgeText: row.badge_text || localMeta?.badge?.text,
          badgeColor: row.badge_color || localMeta?.badge?.color,
          type: row.type || (localMeta?.id.includes('full-week') || localMeta?.id.includes('romantica') || localMeta?.id.includes('familiar') || localMeta?.id.includes('fotografia') ? 'special' : 'main'),
        };
      }
    }
  } catch (error) {
    // Si hay error con Supabase, continuar con fallback local
    console.warn(`[guide-store] Supabase no disponible, usando datos locales para ${slug}:`, error instanceof Error ? error.message : 'Unknown error');
  }

  // Fallback a datos locales
  if (!localPack || !localMeta) {
    return null;
  }

  return {
    slug,
    title: localPack.title,
    subtitle: localPack.subtitle,
    duration: localPack.duration,
    price: Number(localPack.price),
    image: localPack.image,
    color: localPack.color,
    description: localPack.description,
    includes: localPack.includes,
    highlights: localPack.highlights,
    features: localMeta.features,
    featured: localMeta.featured || false,
    badgeText: localMeta.badge?.text,
    badgeColor: localMeta.badge?.color,
    type: localMeta.id.includes('full-week') || localMeta.id.includes('romantica') || localMeta.id.includes('familiar') || localMeta.id.includes('fotografia') ? 'special' : 'main',
  };
}

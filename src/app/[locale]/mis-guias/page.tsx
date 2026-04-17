import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import ReviewForm from '@/components/ReviewForm';
import { supabaseAdmin } from '@/lib/supabase';

export const metadata = {
  title: 'Mis Guías | Estaba en Lisboa',
  description: 'Accede a tus guías compradas de Lisboa',
};

export default async function MisGuiasPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/');
  }

  const { data: purchases } = await supabaseAdmin
    .from('purchases')
    .select('id,itinerary_id,itinerary_slug,itinerary_title,created_at')
    .eq('user_id', userId)
    .eq('status', 'completed')
    .order('created_at', { ascending: false });

  const { data: reviews } = await supabaseAdmin
    .from('guide_reviews')
    .select('guide_id,rating,comment')
    .eq('user_id', userId);

  const reviewsByGuide = new Map(
    (reviews || []).map((review) => [review.guide_id, review])
  );

  return (
    <main className="bg-background-light py-20" id="main-content">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10 pb-6 border-b border-border-soft">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-2">Cuenta</p>
          <h1 className="font-display italic text-text-main text-3xl md:text-4xl">
            Mis Guías de Lisboa
          </h1>
        </div>

        {!purchases || purchases.length === 0 ? (
          <div className="border-t-2 border-primary pt-8 text-center py-16">
            <p className="text-text-main font-semibold mb-2">Aún no tienes guías compradas</p>
            <p className="text-text-secondary text-sm mb-8">
              Explora nuestros itinerarios y elige la guía que mejor encaje con tu viaje.
            </p>
            <Link
              href="/itinerarios"
              className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-colors"
            >
              Ver Todas las Guías
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {purchases.map((purchase) => (
              <div key={purchase.id} className="border-t-2 border-primary pt-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold text-text-main text-sm">{purchase.itinerary_title}</h3>
                    <p className="text-xs text-text-secondary mt-0.5">
                      Comprada el {new Date(purchase.created_at).toLocaleDateString('es-ES')}
                    </p>
                  </div>
                  <Link
                    href={`/itinerarios/${purchase.itinerary_slug}`}
                    className="text-xs font-semibold text-primary hover:underline underline-offset-2 flex-shrink-0"
                  >
                    Ver guía →
                  </Link>
                </div>
                <ReviewForm
                  guideId={purchase.itinerary_id}
                  guideTitle={purchase.itinerary_title}
                  existingReview={reviewsByGuide.get(purchase.itinerary_id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

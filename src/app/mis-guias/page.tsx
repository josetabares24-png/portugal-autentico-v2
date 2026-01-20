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
    <main className="min-h-screen bg-[#FFFDF7] pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Mis Guías de Lisboa
          </h1>
          <p className="text-xl text-slate-600">
            Aquí encontrarás todas las guías que has comprado
          </p>
        </div>

        {!purchases || purchases.length === 0 ? (
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-12 text-center">
            <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Aún no tienes guías compradas</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Explora nuestros itinerarios y elige la guía que mejor encaje con tu viaje.
            </p>
            <Link
              href="/itinerarios"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              Ver Todas las Guías
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {purchases.map((purchase) => (
              <div key={purchase.id} className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{purchase.itinerary_title}</h3>
                    <p className="text-sm text-slate-500 mt-1">Comprada el {new Date(purchase.created_at).toLocaleDateString('es-ES')}</p>
                  </div>
                  <Link
                    href={`/itinerarios/${purchase.itinerary_slug}`}
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    Ver guía
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

import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { isAdmin } from '@/lib/auth-utils';
import { getGuideEditData } from '@/lib/guide-store';
import { GuideEditForm } from './GuideEditForm';

export default async function EditGuiaPage({
  params,
}: {
  params: { slug: string };
}) {
  const admin = await isAdmin();
  if (!admin) {
    redirect('/');
  }

  const { slug } = params;
  const guide = await getGuideEditData(slug);
  if (!guide) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FFFDF7] pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link
            href={`/admin/guias/${slug}`}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-600 mb-4 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a la guía
          </Link>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Editar Guía
          </h1>
          <p className="text-xl text-slate-600">{guide.title}</p>
        </div>

        <GuideEditForm initialData={guide} />
      </div>
    </main>
  );
}

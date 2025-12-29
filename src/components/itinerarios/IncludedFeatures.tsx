import { includedFeatures } from '@/data/itineraries';

export function IncludedFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-text-main">Qué incluye este pack</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {includedFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-text-main">{feature.title}</h4>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

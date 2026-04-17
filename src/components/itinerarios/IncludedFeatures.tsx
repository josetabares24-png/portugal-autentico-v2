import { includedFeatures } from '@/data/itineraries';

export function IncludedFeatures() {
  return (
    <section className="py-16 bg-background-light border-t border-border-soft">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
          Qué incluye esta guía
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {includedFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4 border-t border-border-soft pt-4">
              <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
              <div>
                <h4 className="font-semibold text-text-main text-sm mb-0.5">{feature.title}</h4>
                <p className="text-xs text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

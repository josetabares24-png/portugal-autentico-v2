import Link from 'next/link';

interface PreviewContenidoEditorialProps {
  guideId: string;
}

const PREVIEW_DATA = {
  'lisboa-1-dia': {
    paradas: [
      { hora: '09:00', lugar: 'Mirador de Santa Luzia', descripcion: 'Vista panorámica de Alfama' },
      { hora: '10:00', lugar: 'Castelo de São Jorge', descripcion: 'Fortaleza medieval con vistas 360°' },
      { hora: '11:30', lugar: 'Alfama Walking Tour', descripcion: 'Laberinto de callejones auténticos' },
      { hora: '13:00', lugar: 'Baixa-Chiado', descripcion: 'Corazón comercial de Lisboa' },
      { hora: '15:30', lugar: 'Elevador de Santa Justa', descripcion: 'Mirador art nouveau' }
    ],
    restaurantes: [
      { nombre: 'Café da Garagem', rango: '€12-18', tipo: 'Almuerzo casual' },
      { nombre: 'Cantinho do Aziz', rango: '€15-25', tipo: 'Cocina mozambiqueña' },
      { nombre: 'Cervejaria Ramiro', rango: '€30-45', tipo: 'Mariscos' },
      { nombre: 'A Tasca do Chico', rango: '€20-30', tipo: 'Cena con fado' },
      { nombre: 'Manteigaria', rango: '€1.50', tipo: 'Pastéis de nata' }
    ],
    sampleParada: {
      titulo: '09:00 — Mirador de Santa Luzia',
      contenido: `Empieza tu día en uno de los miradores más fotogénicos de Lisboa. Llegarás justo cuando la luz matinal ilumina las fachadas de azulejos de Alfama.

Por qué este mirador: A diferencia del sobresaturado Mirador das Portas do Sol (50 metros más arriba), Santa Luzia mantiene su autenticidad. Los locales vienen aquí a tomar café, no hay vendedores ambulantes agresivos, y las vistas son prácticamente idénticas.

Qué verás: Panteón Nacional a tu izquierda, río Tajo y los tejados naranjas de Alfama, Iglesia de Santo Estêvão (icónica en fotos).

Tips de local: Llega a las 9:00 máximo - después de las 10:00 se llena de tours. Compra café en el quiosco pequeño (€1.50) vs restaurante caro (€4). Los azulejos del mural lateral cuentan la historia del ataque moro de 1147. Baños públicos gratis justo detrás.

Tiempo sugerido: 20 minutos`
    }
  }
  // Puedes agregar más guías con el mismo formato
};

export default function PreviewContenidoEditorial({ guideId }: PreviewContenidoEditorialProps) {
  const data = PREVIEW_DATA[guideId as keyof typeof PREVIEW_DATA];
  
  if (!data) return null;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          
          {/* Header minimalista */}
          <div className="mb-16">
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Vista Previa
            </p>
            <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Esto incluye la guía
            </h2>
            <div className="w-12 h-px bg-primary"></div>
          </div>

          {/* Paradas - lista editorial limpia */}
          <div className="mb-16">
            <h3 className="text-xl font-normal text-slate-900 mb-8 pb-3 border-b border-slate-200" style={{ fontFamily: 'Georgia, serif' }}>
              {data.paradas.length} Paradas Verificadas
            </h3>
            
            <div className="space-y-6">
              {data.paradas.map((parada, idx) => (
                <div key={idx} className="flex gap-6 pb-6 border-b border-slate-100 last:border-0">
                  <div className="flex-shrink-0 w-16">
                    <span className="text-sm font-medium text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                      {parada.hora}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-900 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                      {parada.lugar}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                      {parada.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-slate-500 italic mt-6" style={{ fontFamily: 'Georgia, serif' }}>
              + {8 - data.paradas.length} paradas más en la guía completa
            </p>
          </div>

          {/* Restaurantes - tabla editorial */}
          <div className="mb-16">
            <h3 className="text-xl font-normal text-slate-900 mb-8 pb-3 border-b border-slate-200" style={{ fontFamily: 'Georgia, serif' }}>
              {data.restaurantes.length} Restaurantes Recomendados
            </h3>
            
            <div className="space-y-4">
              {data.restaurantes.map((rest, idx) => (
                <div key={idx} className="flex justify-between items-baseline gap-4 pb-4 border-b border-slate-100 last:border-0">
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                      {rest.nombre}
                    </h4>
                    <p className="text-sm text-slate-600" style={{ fontFamily: 'Georgia, serif' }}>
                      {rest.tipo}
                    </p>
                  </div>
                  <span className="text-sm text-slate-700 font-medium flex-shrink-0" style={{ fontFamily: 'Georgia, serif' }}>
                    {rest.rango}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sample de parada - bloque editorial destacado */}
          <div className="mb-16 pt-12 border-t-2 border-slate-900">
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Ejemplo de Parada
            </p>
            
            <h3 className="text-2xl md:text-3xl font-normal text-slate-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              {data.sampleParada.titulo}
            </h3>

            <div 
              className="prose prose-lg prose-slate max-w-none leading-relaxed"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {data.sampleParada.contenido.split('\n\n').map((parrafo, idx) => (
                <p key={idx} className="mb-6 text-slate-700">
                  {parrafo}
                </p>
              ))}
            </div>

            <p className="text-sm text-slate-600 italic mt-8 pt-6 border-t border-slate-200" style={{ fontFamily: 'Georgia, serif' }}>
              La guía completa incluye este nivel de detalle en todas las paradas, con coordenadas GPS, mapas interactivos y actualizaciones continuas.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

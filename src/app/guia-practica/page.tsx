import Link from 'next/link';

export default function GuiaPracticaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-4">
            100% GRATIS
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Guia Practica de Lisboa</h1>
          <p className="text-xl opacity-90">Todo lo que necesitas saber antes de viajar a Lisboa</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Transporte</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Desde el aeropuerto:</strong> El metro es la opcion mas barata (1.50 EUR). Linea roja directa al centro en 25 minutos.</p>
              <p><strong>Tarjeta Viva Viagem:</strong> Compra esta tarjeta recargable (0.50 EUR) en cualquier estacion de metro.</p>
              <p><strong>Pase diario:</strong> 6.60 EUR para metro, bus y tranvia ilimitado.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Dinero y Precios</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Moneda:</strong> Euro. Tarjetas aceptadas en casi todos lados.</p>
              <p><strong>Presupuesto diario:</strong> 50-80 EUR economico, 100-150 EUR medio.</p>
              <p><strong>Propinas:</strong> No obligatorias. 5-10% si el servicio fue bueno.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Clima y Cuando Ir</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Mejor epoca:</strong> Abril-Junio y Septiembre-Octubre.</p>
              <p><strong>Verano:</strong> Muy caluroso (35C+) y lleno de turistas.</p>
              <p><strong>Que llevar:</strong> Zapatos comodos, protector solar, una capa extra.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Tips Esenciales</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Tranvia 28:</strong> Tomalo en Martim Moniz temprano (antes de las 9am).</p>
              <p><strong>Fado:</strong> El fado autentico esta en Alfama, no en Bairro Alto.</p>
              <p><strong>Ginjinha:</strong> Prueba este licor de cereza en A Ginjinha por 1.50 EUR.</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Quieres el itinerario completo?</h2>
            <p className="mb-6 opacity-90">Rutas dia a dia, mapas offline, restaurantes recomendados y mas</p>
            <Link href="/itinerarios" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
              Ver Itinerarios
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

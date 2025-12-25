import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Portugal Autentico</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Guias premium de Lisboa creadas por locales</p>
          <p className="text-lg mb-10 opacity-80">+1,500 viajeros ya descubrieron el Lisboa real</p>
          <Link href="/itinerarios" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block">
            Ver Itinerarios
          </Link>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nuestros Itinerarios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Lisboa 1 Dia</h3>
              <p className="text-gray-600 mb-4">Lo esencial de Lisboa</p>
              <p className="text-2xl font-bold text-blue-600">27 EUR</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-500">
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">POPULAR</span>
              <h3 className="text-xl font-bold mb-2 text-gray-800 mt-2">Lisboa 2 Dias</h3>
              <p className="text-gray-600 mb-4">Experiencia completa</p>
              <p className="text-2xl font-bold text-blue-600">37 EUR</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Lisboa 3 Dias</h3>
              <p className="text-gray-600 mb-4">Lisboa y alrededores</p>
              <p className="text-2xl font-bold text-blue-600">47 EUR</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xl font-bold mb-2">Portugal Autentico</p>
          <p className="text-gray-400">2025 - Todos los derechos reservados</p>
        </div>
      </footer>
    </main>
  );
}

interface Garantia48hPremiumProps {
  className?: string;
  showStats?: boolean; // Mostrar estadísticas de satisfacción
}

export default function Garantia48hPremium({ 
  className = '', 
  showStats = true 
}: Garantia48hPremiumProps) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 rounded-2xl md:rounded-3xl p-6 md:p-10 border-2 border-green-300 shadow-2xl ${className}`}>
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>

      <div className="relative">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
          {/* Icon Shield Animado */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
              
              {/* Icon principal */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-white text-4xl md:text-5xl font-bold">verified_user</span>
              </div>

              {/* Badge "100%" */}
              <div className="absolute -top-2 -right-2 bg-white rounded-full px-2 py-1 shadow-lg border-2 border-green-500">
                <span className="text-xs font-black text-green-600">100%</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500 text-white rounded-full mb-3 text-xs font-bold">
              <span className="material-symbols-outlined text-sm">workspace_premium</span>
              <span>GARANTÍA VERIFICADA</span>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Garantía de Devolución{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                48 Horas
              </span>
            </h3>
            
            <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Sabemos que comprar online genera dudas. Por eso, si esta guía no supera tus expectativas, 
              <strong className="text-green-700"> te devolvemos cada euro</strong> en menos de 24 horas. 
              <span className="block mt-2 text-slate-600 italic">Sin preguntas incómodas. Sin letra pequeña. Sin complicaciones.</span>
            </p>

            {/* Features grid */}
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg px-3 py-2.5 border border-green-200">
                <span className="material-symbols-outlined text-green-600 text-xl">check_circle</span>
                <div>
                  <p className="text-xs font-bold text-slate-900">Devolución Total</p>
                  <p className="text-xs text-slate-600">100% garantizado</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg px-3 py-2.5 border border-green-200">
                <span className="material-symbols-outlined text-green-600 text-xl">schedule</span>
                <div>
                  <p className="text-xs font-bold text-slate-900">Respuesta Rápida</p>
                  <p className="text-xs text-slate-600">Menos de 24h</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg px-3 py-2.5 border border-green-200">
                <span className="material-symbols-outlined text-green-600 text-xl">support_agent</span>
                <div>
                  <p className="text-xs font-bold text-slate-900">Soporte Real</p>
                  <p className="text-xs text-slate-600">Humanos, no bots</p>
                </div>
              </div>
            </div>

            {/* Stats de satisfacción */}
            {showStats && (
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t-2 border-green-200">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs">😊</span>
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-green-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      +500
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">98.4% satisfechos</p>
                    <p className="text-xs text-slate-600">Solo 8 devoluciones en 6 meses</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-green-300">
                  <span className="material-symbols-outlined text-green-600">emoji_events</span>
                  <p className="text-xs font-bold text-slate-700">
                    Compra sin riesgo
                  </p>
                </div>
              </div>
            )}

            {/* Testimonio implícito */}
            <div className="mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-xl border-l-4 border-green-500">
              <p className="text-sm text-slate-700 italic" style={{ fontFamily: 'Georgia, serif' }}>
                "Pedí devolución por error (compré la guía equivocada) y en 6 horas tenía el dinero de vuelta. 
                Increíble atención al cliente."
              </p>
              <p className="text-xs text-slate-500 mt-2">— María G., Madrid · Verificado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { MapPin, Clock, Euro, Star, ChevronRight, Compass, Camera, Coffee, Wine, Ship, Sparkles } from 'lucide-react';

const barrios = [
  {
    id: 'alfama',
    name: 'Alfama',
    subtitle: 'El alma de Lisboa',
    description: 'El barrio mas antiguo de Lisboa. Callejuelas empedradas, fado en cada esquina y vistas al Tajo que quitan el aliento.',
    highlights: ['Castillo de Sao Jorge', 'Fado autentico', 'Miradouro da Graca'],
    color: '#E63946',
    accentColor: '#FF6B6B',
    icon: '🏰',
    time: '3-4 horas',
    budget: '€€',
    rating: 4.9,
    coordinates: { x: 72, y: 35 },
    path: 'M280,120 L320,100 L360,115 L370,150 L350,180 L310,190 L275,170 L270,140 Z'
  },
  {
    id: 'baixa',
    name: 'Baixa',
    subtitle: 'Corazon pombalino',
    description: 'El centro reconstruido tras el terremoto de 1755. Arquitectura neoclasica, plazas majestuosas y el famoso elevador de Santa Justa.',
    highlights: ['Praca do Comercio', 'Elevador Santa Justa', 'Rua Augusta'],
    color: '#2A9D8F',
    accentColor: '#40C9A2',
    icon: '🏛️',
    time: '2-3 horas',
    budget: '€€',
    rating: 4.7,
    coordinates: { x: 50, y: 50 },
    path: 'M180,170 L240,160 L275,170 L280,210 L250,240 L200,245 L170,220 L165,190 Z'
  },
  {
    id: 'belem',
    name: 'Belem',
    subtitle: 'Gloria maritima',
    description: 'Donde Portugal conquisto los mares. Monumentos manuelinos, los mejores pasteis de nata y jardines junto al rio.',
    highlights: ['Torre de Belem', 'Monasterio Jeronimos', 'Pasteis de Belem'],
    color: '#E9C46A',
    accentColor: '#FFD93D',
    icon: '⛵',
    time: '4-5 horas',
    budget: '€€€',
    rating: 4.8,
    coordinates: { x: 15, y: 65 },
    path: 'M20,250 L80,235 L120,250 L125,290 L90,320 L40,315 L15,285 Z'
  },
  {
    id: 'chiado',
    name: 'Chiado',
    subtitle: 'Bohemia elegante',
    description: 'El barrio intelectual y artistico. Librerias centenarias, cafes literarios y las mejores tiendas de la ciudad.',
    highlights: ['Livraria Bertrand', 'A Brasileira', 'Teatro Sao Carlos'],
    color: '#9B5DE5',
    accentColor: '#C77DFF',
    icon: '📚',
    time: '2-3 horas',
    budget: '€€€',
    rating: 4.6,
    coordinates: { x: 42, y: 42 },
    path: 'M150,140 L180,130 L210,145 L215,175 L190,200 L155,195 L140,165 Z'
  },
  {
    id: 'bairro-alto',
    name: 'Bairro Alto',
    subtitle: 'Noches infinitas',
    description: 'De dia tranquilo, de noche explosivo. El epicentro de la vida nocturna lisboeta con bares en cada puerta.',
    highlights: ['Vida nocturna', 'Miradouro Sao Pedro', 'Street art'],
    color: '#F72585',
    accentColor: '#FF85A1',
    icon: '🌙',
    time: 'Toda la noche',
    budget: '€€',
    rating: 4.5,
    coordinates: { x: 35, y: 38 },
    path: 'M120,110 L155,100 L175,115 L180,145 L160,170 L125,165 L110,140 Z'
  },
  {
    id: 'lx-factory',
    name: 'LX Factory',
    subtitle: 'Creatividad industrial',
    description: 'Antigua fabrica textil convertida en hub creativo. Tiendas unicas, restaurantes trendy y mercados de fin de semana.',
    highlights: ['Ler Devagar', 'Mercado dominical', 'Arte urbano'],
    color: '#00BBF9',
    accentColor: '#00D4FF',
    icon: '🎨',
    time: '2-3 horas',
    budget: '€€',
    rating: 4.7,
    coordinates: { x: 22, y: 55 },
    path: 'M70,200 L110,190 L130,205 L125,235 L100,255 L65,250 L55,225 Z'
  },
  {
    id: 'mouraria',
    name: 'Mouraria',
    subtitle: 'Multicultura viva',
    description: 'El barrio mas multicultural. Cuna del fado, gastronomia del mundo y la Lisboa mas autentica y diversa.',
    highlights: ['Martim Moniz', 'Fado vadio', 'Gastronomia mundial'],
    color: '#FF9500',
    accentColor: '#FFB347',
    icon: '🎵',
    time: '2-3 horas',
    budget: '€',
    rating: 4.4,
    coordinates: { x: 58, y: 32 },
    path: 'M220,95 L260,85 L285,100 L290,130 L265,155 L225,150 L210,125 Z'
  },
  {
    id: 'parque-nacoes',
    name: 'Parque das Nacoes',
    subtitle: 'Lisboa del futuro',
    description: 'La zona moderna de la Expo 98. Arquitectura contemporanea, Oceanario y paseos junto al rio mas largo de Europa.',
    highlights: ['Oceanario', 'Teleferico', 'Casino Lisboa'],
    color: '#06D6A0',
    accentColor: '#00F5D4',
    icon: '🐠',
    time: '4-5 horas',
    budget: '€€€',
    rating: 4.6,
    coordinates: { x: 88, y: 20 },
    path: 'M350,50 L390,40 L420,55 L425,90 L400,115 L360,110 L345,85 Z'
  }
];

const TramIllustration = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 120 80" className={className} fill="none">
    <defs>
      <linearGradient id="tramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD93D" />
        <stop offset="100%" stopColor="#E9C46A" />
      </linearGradient>
    </defs>
    <rect x="15" y="20" width="90" height="45" rx="8" fill="url(#tramGradient)" />
    <rect x="15" y="20" width="90" height="45" rx="8" stroke="#C9A227" strokeWidth="2" fill="none" />
    <rect x="22" y="28" width="18" height="20" rx="3" fill="#87CEEB" opacity="0.8" />
    <rect x="45" y="28" width="18" height="20" rx="3" fill="#87CEEB" opacity="0.8" />
    <rect x="68" y="28" width="18" height="20" rx="3" fill="#87CEEB" opacity="0.8" />
    <rect x="20" y="52" width="80" height="4" fill="#C9A227" />
    <circle cx="35" cy="70" r="8" fill="#333" />
    <circle cx="35" cy="70" r="4" fill="#666" />
    <circle cx="85" cy="70" r="8" fill="#333" />
    <circle cx="85" cy="70" r="4" fill="#666" />
    <line x1="60" y1="20" x2="60" y2="8" stroke="#333" strokeWidth="3" />
    <line x1="50" y1="8" x2="70" y2="8" stroke="#333" strokeWidth="2" />
    <text x="60" y="60" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">28</text>
  </svg>
);

const PastelIllustration = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={className} fill="none">
    <defs>
      <linearGradient id="custardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFE066" />
        <stop offset="100%" stopColor="#E9C46A" />
      </linearGradient>
      <linearGradient id="crustGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#D4A574" />
        <stop offset="100%" stopColor="#8B6914" />
      </linearGradient>
    </defs>
    <ellipse cx="30" cy="45" rx="22" ry="8" fill="url(#crustGradient)" />
    <path d="M8 45 L8 25 Q8 20 15 18 L45 18 Q52 20 52 25 L52 45" fill="url(#crustGradient)" />
    <ellipse cx="30" cy="25" rx="18" ry="6" fill="url(#custardGradient)" />
    <ellipse cx="25" cy="24" rx="4" ry="2" fill="#8B4513" opacity="0.6" />
    <ellipse cx="35" cy="26" rx="3" ry="1.5" fill="#8B4513" opacity="0.5" />
  </svg>
);

const TorreBelem = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 80 120" className={className} fill="none">
    <defs>
      <linearGradient id="torreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDF6E3" />
        <stop offset="100%" stopColor="#D4C4A8" />
      </linearGradient>
    </defs>
    <ellipse cx="40" cy="115" rx="35" ry="5" fill="#2A9D8F" opacity="0.3" />
    <rect x="5" y="85" width="70" height="30" fill="url(#torreGradient)" stroke="#8B7355" strokeWidth="1" />
    <rect x="25" y="25" width="30" height="60" fill="url(#torreGradient)" stroke="#8B7355" strokeWidth="1" />
    <rect x="22" y="20" width="8" height="8" fill="url(#torreGradient)" stroke="#8B7355" strokeWidth="1" />
    <rect x="32" y="15" width="8" height="13" fill="url(#torreGradient)" stroke="#8B7355" strokeWidth="1" />
    <rect x="42" y="20" width="8" height="8" fill="url(#torreGradient)" stroke="#8B7355" strokeWidth="1" />
    <rect x="35" y="35" width="10" height="15" rx="5" fill="#4A90A4" opacity="0.6" />
    <rect x="35" y="55" width="10" height="12" rx="5" fill="#4A90A4" opacity="0.6" />
    <line x1="40" y1="15" x2="40" y2="2" stroke="#8B7355" strokeWidth="1" />
    <path d="M40 2 L55 6 L40 10 Z" fill="#E63946" />
  </svg>
);

export default function LisboaInteractiveMap() {
  const [selectedBarrio, setSelectedBarrio] = useState<typeof barrios[0] | null>(null);
  const [hoveredBarrio, setHoveredBarrio] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2A9D8F" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2A9D8F" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M0,60 C150,90 350,30 600,60 C850,90 1050,30 1200,60 L1200,120 L0,120 Z" fill="url(#waveGradient)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Compass className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium tracking-wide">EXPLORA LA CIUDAD</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Descubre <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Lisboa</span>
          </h2>
          
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Cada barrio cuenta una historia diferente. Haz clic en el mapa para explorar los secretos mejor guardados de la ciudad de las siete colinas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
              
              <TramIllustration className="absolute -top-8 -left-4 w-24 h-16 transform -rotate-12 opacity-80 z-20" />
              <PastelIllustration className="absolute -bottom-4 -right-4 w-16 h-16 transform rotate-12 opacity-80 z-20" />
              
              <svg viewBox="0 0 450 350" className="w-full h-auto">
                <defs>
                  {barrios.map(barrio => (
                    <linearGradient key={`grad-${barrio.id}`} id={`gradient-${barrio.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={barrio.color} stopOpacity="0.8" />
                      <stop offset="100%" stopColor={barrio.accentColor} stopOpacity="0.6" />
                    </linearGradient>
                  ))}
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <pattern id="waterPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1" fill="#2A9D8F" opacity="0.3" />
                  </pattern>
                </defs>

                <path d="M0,280 Q100,250 200,270 T400,260 L450,350 L0,350 Z" fill="url(#waterPattern)" opacity="0.5" />
                <path d="M0,290 Q120,260 220,280 T420,270 L450,350 L0,350 Z" fill="#2A9D8F" opacity="0.2" />

                {barrios.map((barrio, index) => (
                  <g key={barrio.id}>
                    <path
                      d={barrio.path}
                      fill={`url(#gradient-${barrio.id})`}
                      stroke={hoveredBarrio === barrio.id || selectedBarrio?.id === barrio.id ? 'white' : barrio.color}
                      strokeWidth={hoveredBarrio === barrio.id || selectedBarrio?.id === barrio.id ? 3 : 1.5}
                      filter={hoveredBarrio === barrio.id ? 'url(#glow)' : 'none'}
                      className="cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setHoveredBarrio(barrio.id)}
                      onMouseLeave={() => setHoveredBarrio(null)}
                      onClick={() => setSelectedBarrio(barrio)}
                    />
                    
                    <g transform={`translate(${barrio.coordinates.x * 4.5}, ${barrio.coordinates.y * 3.5})`} className="pointer-events-none">
                      <circle r="12" fill="white" opacity="0.9" />
                      <text textAnchor="middle" dominantBaseline="central" fontSize="14">{barrio.icon}</text>
                    </g>
                  </g>
                ))}

                <g transform="translate(400, 30)">
                  <circle r="20" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
                  <text x="0" y="-8" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">N</text>
                  <path d="M0,-5 L3,5 L0,2 L-3,5 Z" fill="#E63946" />
                </g>

                <text x="350" y="320" fill="#2A9D8F" fontSize="12" fontStyle="italic" opacity="0.7">Rio Tajo</text>
              </svg>

              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {barrios.map(barrio => (
                  <button
                    key={barrio.id}
                    onClick={() => setSelectedBarrio(barrio)}
                    onMouseEnter={() => setHoveredBarrio(barrio.id)}
                    onMouseLeave={() => setHoveredBarrio(null)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                      selectedBarrio?.id === barrio.id
                        ? 'bg-white text-slate-900 scale-105'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <span className="mr-1">{barrio.icon}</span>
                    {barrio.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {selectedBarrio ? (
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 relative overflow-hidden" style={{ boxShadow: `0 0 60px ${selectedBarrio.color}20` }}>
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-30" style={{ backgroundColor: selectedBarrio.color }} />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-5xl mb-2 block">{selectedBarrio.icon}</span>
                      <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>{selectedBarrio.name}</h3>
                      <p className="text-lg" style={{ color: selectedBarrio.accentColor }}>{selectedBarrio.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-white font-medium">{selectedBarrio.rating}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-6">{selectedBarrio.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-slate-400 mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">Tiempo</span>
                      </div>
                      <p className="text-white font-medium">{selectedBarrio.time}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-slate-400 mb-1">
                        <Euro className="w-4 h-4" />
                        <span className="text-sm">Presupuesto</span>
                      </div>
                      <p className="text-white font-medium">{selectedBarrio.budget}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      No te pierdas
                    </h4>
                    <div className="space-y-2">
                      {selectedBarrio.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors cursor-pointer group">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedBarrio.color }} />
                          <span className="text-slate-300 group-hover:text-white transition-colors">{highlight}</span>
                          <ChevronRight className="w-4 h-4 text-slate-500 ml-auto group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full py-4 rounded-xl font-medium text-white transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2" style={{ background: `linear-gradient(135deg, ${selectedBarrio.color}, ${selectedBarrio.accentColor})`, boxShadow: `0 10px 30px ${selectedBarrio.color}40` }}>
                    <Camera className="w-5 h-5" />
                    Explorar {selectedBarrio.name}
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>Selecciona un barrio</h3>
                <p className="text-slate-400 mb-6">Haz clic en cualquier zona del mapa para descubrir sus secretos.</p>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors cursor-pointer">
                    <Coffee className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                    <span className="text-sm text-slate-300">Cafes</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors cursor-pointer">
                    <Wine className="w-6 h-6 text-rose-400 mx-auto mb-2" />
                    <span className="text-sm text-slate-300">Restaurantes</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors cursor-pointer">
                    <Camera className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <span className="text-sm text-slate-300">Miradores</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors cursor-pointer">
                    <Ship className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                    <span className="text-sm text-slate-300">Rio Tajo</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={`mt-16 flex justify-center items-center gap-8 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-50' : 'opacity-0'}`}>
          <TramIllustration className="w-20 h-14" />
          <PastelIllustration className="w-12 h-12" />
          <TorreBelem className="w-14 h-20" />
        </div>
      </div>
    </section>
  );
}

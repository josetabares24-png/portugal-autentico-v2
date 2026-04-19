'use client';

import { useState, useCallback } from 'react';
import { submitQuizLead } from '@/lib/brevo';

type TravelCompanion = 'solo' | 'pareja' | 'amigos' | 'familia';
type Interest = 'gastronomia' | 'cultura' | 'fiesta' | 'naturaleza';
type Duration = '1dia' | '2dias' | '4dias' | 'semana';
type Budget = 'bajo' | 'medio' | 'alto';
type Experience = 'primera' | 'segunda' | 'experto';

interface Answers {
  companion?: TravelCompanion;
  interest?: Interest;
  duration?: Duration;
  budget?: Budget;
  experience?: Experience;
  name?: string;
  email?: string;
}

interface Profile {
  title: string;
  subtitle: string;
  barrios: string[];
  experiences: { text: string }[];
}

interface Guide {
  title: string;
  desc: string;
  price: string;
  url: string;
}

const profiles: Record<string, Profile> = {
  gastronomo: {
    title: 'Explorador Gastronómico',
    subtitle: 'Lisboa te espera con sus sabores auténticos',
    barrios: ['Baixa-Chiado', 'Santos', 'Cais do Sodré', 'Príncipe Real'],
    experiences: [
      { text: 'Tour de pastéis por pastelerías que no salen en TripAdvisor' },
      { text: 'Cata de vinos portugueses en tascas del Barrio Alto' },
      { text: 'Marisco fresco en Cervejaria Ramiro (ve temprano)' },
    ],
  },
  cultural: {
    title: 'Alma Cultural',
    subtitle: 'Los secretos de Lisboa te están esperando',
    barrios: ['Alfama', 'Belém', 'Mouraria', 'Graça'],
    experiences: [
      { text: 'Fado auténtico en una casa de Alfama (no turistada)' },
      { text: 'Monasterio de los Jerónimos a primera hora' },
      { text: 'Museo del Azulejo, el más infravalorado de Lisboa' },
    ],
  },
  fiestero: {
    title: 'Noctámbulo Lisboeta',
    subtitle: 'Las noches de Lisboa van a ser memorables',
    barrios: ['Bairro Alto', 'Cais do Sodré', 'Santos', 'LX Factory'],
    experiences: [
      { text: 'Pink Street y sus bares escondidos' },
      { text: 'Lux Frágil, el club que puso Lisboa en el mapa' },
      { text: 'After en Mirador de Santa Catarina viendo amanecer' },
    ],
  },
  aventurero: {
    title: 'Espíritu Libre',
    subtitle: 'La naturaleza cerca de Lisboa te llama',
    barrios: ['Cascais', 'Sintra', 'Costa da Caparica', 'Almada'],
    experiences: [
      { text: 'Surf en Caparica (clases si es tu primera vez)' },
      { text: 'Sintra: Palacio da Pena + Quinta da Regaleira' },
      { text: 'Bici de Belém a Cascais por la costa' },
    ],
  },
  romantico: {
    title: 'Romántico de Lisboa',
    subtitle: 'La ciudad perfecta para enamorarse',
    barrios: ['Alfama', 'Príncipe Real', 'Chiado', 'Belém'],
    experiences: [
      { text: 'Atardecer en Mirador de Santa Luzia' },
      { text: 'Cena con vistas al Tajo en Café de São Bento' },
      { text: 'Tranvía 28 a primera hora (sin turistas)' },
    ],
  },
  familiar: {
    title: 'Lisboa en Familia',
    subtitle: 'Planes para todas las edades',
    barrios: ['Belém', 'Parque das Nações', 'Cascais', 'Baixa'],
    experiences: [
      { text: 'Oceanário: uno de los mejores acuarios del mundo' },
      { text: 'Torre de Belém + pastéis en Pastéis de Belém' },
      { text: 'Teleférico en Parque das Nações' },
    ],
  },
};

const guideData: Record<Duration, Guide> = {
  '1dia': {
    title: 'Lisboa Esencial — 1 Día',
    desc: 'Ruta optimizada hora a hora para no perder ni un minuto',
    price: '1.99€',
    url: '/itinerarios/lisboa-1-dia-lo-esencial',
  },
  '2dias': {
    title: 'Lisboa Completa — 2-3 Días',
    desc: 'Lo esencial + barrios con encanto + restaurantes verificados',
    price: '2.99€',
    url: '/itinerarios/lisboa-2-dias-completo',
  },
  '4dias': {
    title: 'Lisboa + Alrededores — 4+ Días',
    desc: 'Lisboa + Sintra + Cascais con logística clara',
    price: '3.99€',
    url: '/itinerarios/lisboa-3-dias-premium',
  },
  semana: {
    title: 'Lisboa + Alrededores — Inmersión',
    desc: 'Todo Portugal cerca de Lisboa, sin prisas',
    price: '3.99€',
    url: '/itinerarios/lisboa-3-dias-premium',
  },
};

function ProgressBar({ current, total }: { current: number; total: number }) {
  const progress = ((current + 1) / total) * 100;
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs uppercase tracking-widest text-text-secondary">
          Pregunta {current + 1} de {total}
        </p>
        <span className="text-xs text-text-secondary">{Math.round(progress)}%</span>
      </div>
      <div className="h-0.5 bg-border-soft">
        <div
          className="h-0.5 bg-primary transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

interface OptionButtonProps {
  title: string;
  desc: string;
  selected: boolean;
  onClick: () => void;
}

function OptionButton({ title, desc, selected, onClick }: OptionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-5 border-t-2 text-left transition-colors ${
        selected
          ? 'border-primary bg-background-light'
          : 'border-border-soft hover:border-text-secondary'
      }`}
    >
      <p className={`font-semibold text-sm mb-0.5 ${selected ? 'text-text-main' : 'text-text-main'}`}>
        {title}
      </p>
      <p className="text-text-secondary text-xs">{desc}</p>
    </button>
  );
}

export default function QuizLisboa() {
  const [screen, setScreen] = useState<
    'welcome' | 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'email' | 'loading' | 'results'
  >('welcome');
  const [answers, setAnswers] = useState<Answers>({});
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = useCallback((message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  const handleAnswer = useCallback(
    (key: keyof Answers, value: string, nextScreen: typeof screen) => {
      setAnswers((prev) => ({ ...prev, [key]: value }));
      setTimeout(() => setScreen(nextScreen), 300);
    },
    []
  );

  const getProfileKey = useCallback(() => {
    if (answers.companion === 'pareja') return 'romantico';
    if (answers.companion === 'familia') return 'familiar';
    if (answers.interest === 'gastronomia') return 'gastronomo';
    if (answers.interest === 'cultura') return 'cultural';
    if (answers.interest === 'fiesta') return 'fiestero';
    if (answers.interest === 'naturaleza') return 'aventurero';
    return 'gastronomo';
  }, [answers]);

  const calculateProfile = useCallback((): Profile => {
    return profiles[getProfileKey()];
  }, [getProfileKey]);

  const getGuide = useCallback((): Guide => {
    return guideData[answers.duration || '2dias'];
  }, [answers.duration]);

  const handleEmailSubmit = useCallback(async () => {
    if (!answers.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email)) {
      showToast('Ingresa un email válido', 'error');
      return;
    }

    setScreen('loading');
    const profileKey = getProfileKey();
    const result = await submitQuizLead({
      email: answers.email,
      name: answers.name,
      profile: profileKey,
      companion: answers.companion || '',
      interest: answers.interest || '',
      duration: answers.duration || '',
      budget: answers.budget || '',
      experience: answers.experience || '',
    });

    if (!result.success) {
      showToast('No pudimos guardar tu email, pero aquí está tu resultado', 'error');
    } else if (result.emailSent === false) {
      showToast('El email no se pudo enviar. Revisa Brevo o inténtalo de nuevo', 'error');
    } else {
      showToast('Email enviado. Revisa tu bandeja', 'success');
    }

    setTimeout(() => setScreen('results'), 1500);
  }, [answers, getProfileKey, showToast]);

  const shareResult = useCallback(() => {
    const profile = calculateProfile();
    const text = `Soy "${profile.title}" según el quiz de Lisboa`;
    const url = window.location.href;

    if (navigator.share) {
      navigator.share({ title: 'Mi Lisboa Ideal', text, url });
    } else {
      navigator.clipboard.writeText(`${text} ${url}`);
      showToast('Enlace copiado');
    }
  }, [calculateProfile, showToast]);

  const currentQuestion =
    screen === 'q1' ? 0 : screen === 'q2' ? 1 : screen === 'q3' ? 2 : screen === 'q4' ? 3 : screen === 'q5' ? 4 : -1;

  return (
    <div className="min-h-screen bg-background-light text-text-main">
      <div className="max-w-xl mx-auto px-6 py-12 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <a href="https://estabaenlisboa.com" className="font-display italic text-text-main text-lg hover:text-primary transition-colors">
            Estaba en Lisboa
          </a>
          <a
            href="https://estabaenlisboa.com"
            className="text-text-secondary hover:text-text-main transition-colors text-sm"
            aria-label="Cerrar quiz"
          >
            &#x2715;
          </a>
        </header>

        {currentQuestion >= 0 && <ProgressBar current={currentQuestion} total={5} />}

        {/* Welcome */}
        {screen === 'welcome' && (
          <div className="flex-1 flex flex-col justify-center py-8">
            <p className="text-xs uppercase tracking-widest text-text-secondary mb-4">Quiz personalizado</p>
            <h1 className="font-display italic text-text-main text-4xl md:text-5xl leading-tight mb-4">
              ¿Qué Lisboa es para ti?
            </h1>
            <p className="text-text-secondary leading-relaxed mb-10">
              5 preguntas rápidas. Te digo qué barrios, qué experiencias y qué guía necesitas.
            </p>
            <div className="flex gap-8 mb-12 text-sm text-text-secondary">
              <span>60 segundos</span>
              <span>Personalizado</span>
              <span>Gratis</span>
            </div>
            <button
              onClick={() => setScreen('q1')}
              className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors"
            >
              Descubrir mi Lisboa
            </button>
            <p className="text-xs text-text-secondary mt-4 text-center">
              +2.400 viajeros ya lo hicieron
            </p>
          </div>
        )}

        {/* Q1 */}
        {screen === 'q1' && (
          <div className="flex-1 flex flex-col">
            <h2 className="font-display italic text-text-main text-3xl mb-8">
              ¿Con quién viajas a Lisboa?
            </h2>
            <div className="space-y-3">
              {[
                { value: 'solo', title: 'Solo', desc: 'A mi ritmo, sin compromisos' },
                { value: 'pareja', title: 'En pareja', desc: 'Escapada romántica' },
                { value: 'amigos', title: 'Con amigos', desc: 'Grupo listo para pasarla bien' },
                { value: 'familia', title: 'En familia', desc: 'Con niños o familia extendida' },
              ].map((opt) => (
                <OptionButton
                  key={opt.value}
                  title={opt.title}
                  desc={opt.desc}
                  selected={answers.companion === opt.value}
                  onClick={() => handleAnswer('companion', opt.value, 'q2')}
                />
              ))}
            </div>
          </div>
        )}

        {/* Q2 */}
        {screen === 'q2' && (
          <div className="flex-1 flex flex-col">
            <h2 className="font-display italic text-text-main text-3xl mb-8">
              ¿Qué te emociona más de Lisboa?
            </h2>
            <div className="space-y-3">
              {[
                { value: 'gastronomia', title: 'Comer y beber bien', desc: 'Pastéis, vino, marisco fresco' },
                { value: 'cultura', title: 'Historia y cultura', desc: 'Monumentos, fado, azulejos' },
                { value: 'fiesta', title: 'Vida nocturna', desc: 'Bares, terrazas, clubs' },
                { value: 'naturaleza', title: 'Playas y naturaleza', desc: 'Sintra, Cascais, costa' },
              ].map((opt) => (
                <OptionButton
                  key={opt.value}
                  title={opt.title}
                  desc={opt.desc}
                  selected={answers.interest === opt.value}
                  onClick={() => handleAnswer('interest', opt.value, 'q3')}
                />
              ))}
            </div>
          </div>
        )}

        {/* Q3 */}
        {screen === 'q3' && (
          <div className="flex-1 flex flex-col">
            <h2 className="font-display italic text-text-main text-3xl mb-8">
              ¿Cuántos días tienes?
            </h2>
            <div className="space-y-3">
              {[
                { value: '1dia', title: '1 día', desc: 'Escala o visita exprés' },
                { value: '2dias', title: '2-3 días', desc: 'Fin de semana largo' },
                { value: '4dias', title: '4-5 días', desc: 'Tiempo para explorar bien' },
                { value: 'semana', title: 'Una semana o más', desc: 'Inmersión total' },
              ].map((opt) => (
                <OptionButton
                  key={opt.value}
                  title={opt.title}
                  desc={opt.desc}
                  selected={answers.duration === opt.value}
                  onClick={() => handleAnswer('duration', opt.value, 'q4')}
                />
              ))}
            </div>
          </div>
        )}

        {/* Q4 */}
        {screen === 'q4' && (
          <div className="flex-1 flex flex-col">
            <h2 className="font-display italic text-text-main text-3xl mb-8">
              ¿Cómo vas de presupuesto?
            </h2>
            <div className="space-y-3">
              {[
                { value: 'bajo', title: 'Ajustado', desc: 'Maximizar sin gastar de más' },
                { value: 'medio', title: 'Normal', desc: 'Algunos gustos sin pasarse' },
                { value: 'alto', title: 'Cómodo', desc: 'Quiero lo mejor' },
              ].map((opt) => (
                <OptionButton
                  key={opt.value}
                  title={opt.title}
                  desc={opt.desc}
                  selected={answers.budget === opt.value}
                  onClick={() => handleAnswer('budget', opt.value, 'q5')}
                />
              ))}
            </div>
          </div>
        )}

        {/* Q5 */}
        {screen === 'q5' && (
          <div className="flex-1 flex flex-col">
            <h2 className="font-display italic text-text-main text-3xl mb-8">
              ¿Primera vez en Lisboa?
            </h2>
            <div className="space-y-3">
              {[
                { value: 'primera', title: 'Sí, primera vez', desc: 'Todo es nuevo para mí' },
                { value: 'segunda', title: 'Ya conozco lo básico', desc: 'Belém, Alfama, tranvía 28...' },
                { value: 'experto', title: 'Casi local', desc: 'Busco lo que no sale en Google' },
              ].map((opt) => (
                <OptionButton
                  key={opt.value}
                  title={opt.title}
                  desc={opt.desc}
                  selected={answers.experience === opt.value}
                  onClick={() => handleAnswer('experience', opt.value, 'email')}
                />
              ))}
            </div>
          </div>
        )}

        {/* Email */}
        {screen === 'email' && (
          <div className="flex-1 flex flex-col justify-center py-8">
            <p className="text-xs uppercase tracking-widest text-text-secondary mb-4">Tu resultado está listo</p>
            <h2 className="font-display italic text-text-main text-3xl mb-2">
              ¿Dónde te lo mando?
            </h2>
            <p className="text-text-secondary text-sm mb-8">
              Recibirás también un mini-itinerario personalizado gratis.
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Tu nombre"
                value={answers.name || ''}
                onChange={(e) => setAnswers((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 border border-border-soft bg-white text-text-main focus:outline-none focus:border-text-secondary text-sm"
              />
              <input
                type="email"
                placeholder="Tu mejor email"
                value={answers.email || ''}
                onChange={(e) => setAnswers((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 border border-border-soft bg-white text-text-main focus:outline-none focus:border-text-secondary text-sm"
              />
              <button
                onClick={handleEmailSubmit}
                className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors"
              >
                Ver mi resultado
              </button>
              <p className="text-xs text-text-secondary text-center">Sin spam. Solo contenido útil.</p>
              <button
                onClick={() => {
                  setScreen('loading');
                  setTimeout(() => setScreen('results'), 1000);
                }}
                className="w-full text-text-secondary text-sm hover:text-text-main transition-colors pt-2"
              >
                Ver sin dejar email
              </button>
            </div>
          </div>
        )}

        {/* Loading */}
        {screen === 'loading' && (
          <div className="flex-1 flex flex-col justify-center items-center text-center py-8">
            <p className="text-xs uppercase tracking-widest text-text-secondary mb-4">Un momento</p>
            <h3 className="font-display italic text-text-main text-2xl mb-2">Analizando tus respuestas</h3>
            <p className="text-text-secondary text-sm">Preparando recomendaciones personalizadas...</p>
          </div>
        )}

        {/* Results */}
        {screen === 'results' && (() => {
          const profile = calculateProfile();
          const guide = getGuide();

          return (
            <div className="flex-1 py-4">
              {/* Perfil */}
              <div className="border-t-2 border-primary pt-6 pb-8 mb-8">
                <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Tu perfil viajero</p>
                <h2 className="font-display italic text-text-main text-3xl mb-1">{profile.title}</h2>
                <p className="text-text-secondary">{profile.subtitle}</p>
              </div>

              {/* Barrios */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-4">Barrios para ti</p>
                <div className="flex flex-wrap gap-3">
                  {profile.barrios.map((barrio) => (
                    <span
                      key={barrio}
                      className="px-3 py-1.5 border border-border-soft text-sm text-text-secondary"
                    >
                      {barrio}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experiencias */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-text-secondary mb-4 pb-3 border-b border-border-soft">
                  No te puedes perder
                </p>
                <div className="space-y-0">
                  {profile.experiences.map((exp, i) => (
                    <div key={i} className="border-t border-border-soft py-4 flex items-start gap-3">
                      <span className="text-primary flex-shrink-0 mt-0.5">&#10003;</span>
                      <p className="text-text-secondary text-sm">{exp.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guía recomendada */}
              <div className="border-t-2 border-primary pt-6 mb-8">
                <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Tu guía ideal</p>
                <h3 className="font-display italic text-text-main text-2xl mb-1">{guide.title}</h3>
                <p className="text-text-secondary text-sm mb-4">{guide.desc}</p>
                <p className="text-3xl font-bold text-text-main mb-1">{guide.price}</p>
                <p className="text-xs text-text-secondary mb-6">Pago único · Acceso de por vida · Actualizado 2026</p>
                <a
                  href={`https://estabaenlisboa.com${guide.url}`}
                  className="block w-full py-4 bg-primary hover:bg-primary-dark text-white font-semibold text-center transition-colors mb-3"
                >
                  Quiero mi guía
                </a>
                <button
                  onClick={shareResult}
                  className="block w-full py-3 border border-border-soft hover:border-text-secondary text-text-main text-sm font-semibold transition-colors"
                >
                  Compartir resultado
                </button>
              </div>

              {/* Compartir */}
              <div className="border-t border-border-soft pt-6 text-center">
                <p className="text-text-secondary text-sm mb-4">
                  ¿Viajas con alguien? Que hagan el quiz
                </p>
                <div className="flex justify-center gap-4 mb-4">
                  <button
                    onClick={() =>
                      window.open(
                        `https://wa.me/?text=${encodeURIComponent(
                          `Soy "${profile.title}" según el quiz de Lisboa ${window.location.href}`
                        )}`
                      )
                    }
                    className="px-5 py-2.5 border border-border-soft hover:border-text-secondary text-text-main text-sm transition-colors"
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      showToast('Enlace copiado');
                    }}
                    className="px-5 py-2.5 border border-border-soft hover:border-text-secondary text-text-main text-sm transition-colors"
                  >
                    Copiar enlace
                  </button>
                </div>
                <p className="text-xs text-text-secondary">
                  Etiquétanos en Instagram:{' '}
                  <span className="text-primary font-semibold">@estabaenlisboa</span>
                </p>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 font-semibold text-sm text-white z-50 ${
            toast.type === 'error' ? 'bg-red-600' : 'bg-primary'
          }`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
}

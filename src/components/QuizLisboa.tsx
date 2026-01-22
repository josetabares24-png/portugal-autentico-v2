'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  emoji: string;
  title: string;
  subtitle: string;
  barrios: string[];
  experiences: { icon: string; text: string }[];
}

interface Guide {
  title: string;
  desc: string;
  price: string;
  url: string;
}

const profiles: Record<string, Profile> = {
  gastronomo: {
    emoji: '🍷',
    title: 'Explorador Gastronómico',
    subtitle: 'Lisboa te espera con sus sabores auténticos',
    barrios: ['Baixa-Chiado', 'Santos', 'Cais do Sodré', 'Príncipe Real'],
    experiences: [
      { icon: '🥐', text: 'Tour de pastéis por pastelerías que no salen en TripAdvisor' },
      { icon: '🍷', text: 'Cata de vinos portugueses en tascas del Barrio Alto' },
      { icon: '🐟', text: 'Marisco fresco en Cervejaria Ramiro (ve temprano)' },
    ],
  },
  cultural: {
    emoji: '🏛️',
    title: 'Alma Cultural',
    subtitle: 'Los secretos de Lisboa te están esperando',
    barrios: ['Alfama', 'Belém', 'Mouraria', 'Graça'],
    experiences: [
      { icon: '🎵', text: 'Fado auténtico en una casa de Alfama (no turistada)' },
      { icon: '🏰', text: 'Monasterio de los Jerónimos a primera hora' },
      { icon: '🎨', text: 'Museo del Azulejo, el más infravalorado de Lisboa' },
    ],
  },
  fiestero: {
    emoji: '🎉',
    title: 'Noctámbulo Lisboeta',
    subtitle: 'Las noches de Lisboa van a ser memorables',
    barrios: ['Bairro Alto', 'Cais do Sodré', 'Santos', 'LX Factory'],
    experiences: [
      { icon: '🍸', text: 'Pink Street y sus bares escondidos' },
      { icon: '🎶', text: 'Lux Frágil, el club que puso Lisboa en el mapa' },
      { icon: '🌅', text: 'After en Mirador de Santa Catarina viendo amanecer' },
    ],
  },
  aventurero: {
    emoji: '🌊',
    title: 'Espíritu Libre',
    subtitle: 'La naturaleza cerca de Lisboa te llama',
    barrios: ['Cascais', 'Sintra', 'Costa da Caparica', 'Almada'],
    experiences: [
      { icon: '🏄', text: 'Surf en Caparica (clases si es tu primera vez)' },
      { icon: '🏰', text: 'Sintra: Palacio da Pena + Quinta da Regaleira' },
      { icon: '🚴', text: 'Bici de Belém a Cascais por la costa' },
    ],
  },
  romantico: {
    emoji: '💕',
    title: 'Romántico de Lisboa',
    subtitle: 'La ciudad perfecta para enamorarse',
    barrios: ['Alfama', 'Príncipe Real', 'Chiado', 'Belém'],
    experiences: [
      { icon: '🌅', text: 'Atardecer en Mirador de Santa Luzia' },
      { icon: '🍽️', text: 'Cena con vistas al Tajo en Café de São Bento' },
      { icon: '🚃', text: 'Tranvía 28 a primera hora (sin turistas)' },
    ],
  },
  familiar: {
    emoji: '👨‍👩‍👧',
    title: 'Lisboa en Familia',
    subtitle: 'Planes para todas las edades',
    barrios: ['Belém', 'Parque das Nações', 'Cascais', 'Baixa'],
    experiences: [
      { icon: '🐠', text: 'Oceanário: uno de los mejores acuarios del mundo' },
      { icon: '🏰', text: 'Torre de Belém + pastéis en Pastéis de Belém' },
      { icon: '🚡', text: 'Teleférico en Parque das Nações' },
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

const screenVariants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.98 },
};

const optionVariants = {
  initial: { opacity: 0, x: -12 },
  animate: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.35 },
  }),
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="mb-6">
      <div className="flex gap-1.5 mb-3">
        {Array.from({ length: total }).map((_, i) => (
          <motion.div
            key={i}
            className={`h-1 flex-1 rounded-full ${
              i < current ? 'bg-primary' : i === current ? 'bg-primary/40' : 'bg-slate-200'
            }`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: i * 0.05, duration: 0.25 }}
          />
        ))}
      </div>
      <p className="text-sm text-text-secondary">
        Pregunta <span className="text-primary font-semibold">{current + 1}</span> de {total}
      </p>
    </div>
  );
}

interface OptionCardProps {
  emoji: string;
  title: string;
  desc: string;
  selected: boolean;
  onClick: () => void;
  index: number;
}

function OptionCard({ emoji, title, desc, selected, onClick, index }: OptionCardProps) {
  return (
    <motion.button
      custom={index}
      variants={optionVariants}
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.01, x: 3 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 text-left ${
        selected
          ? 'bg-primary/10 border-primary shadow-soft-lg'
          : 'bg-white border-slate-200/80 hover:border-primary/40 hover:shadow-soft'
      }`}
    >
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 ${
          selected ? 'bg-primary text-white shadow-lg' : 'bg-background-cream'
        }`}
      >
        {emoji}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-text-main">{title}</p>
        <p className="text-sm text-text-secondary">{desc}</p>
      </div>
      <div
        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
          selected ? 'bg-primary border-primary' : 'border-slate-300'
        }`}
      >
        {selected && (
          <motion.svg
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-3.5 h-3.5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </motion.svg>
        )}
      </div>
    </motion.button>
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

    setTimeout(() => setScreen('results'), 1200);
  }, [answers, getProfileKey, showToast]);

  const shareResult = useCallback(() => {
    const profile = calculateProfile();
    const text = `Soy "${profile.title}" según el quiz de Lisboa 🇵🇹`;
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
    <div className="min-h-screen bg-background-light text-text-main relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background-cream via-background-light to-white" />
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-lg mx-auto px-5 py-8 min-h-screen flex flex-col">
        <header className="flex items-center justify-between mb-6">
          <a href="https://estabaenlisboa.com" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
              <span className="text-lg">📍</span>
            </div>
            <span className="font-semibold text-text-main">Estaba en Lisboa</span>
          </a>
          <a
            href="https://estabaenlisboa.com"
            className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-50 transition-all"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </a>
        </header>

        {currentQuestion >= 0 && <ProgressBar current={currentQuestion} total={5} />}

        <AnimatePresence mode="wait">
          {screen === 'welcome' && (
            <motion.div
              key="welcome"
              variants={screenVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35 }}
              className="flex-1 flex flex-col justify-center text-center py-8"
            >
              <motion.span
                className="text-6xl mb-4 block"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                🇵🇹
              </motion.span>

              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mx-auto mb-6">
                <span className="material-symbols-outlined text-base">verified</span>
                Por alguien que vive aquí
              </div>

              <h1 className="text-4xl sm:text-5xl font-display font-black mb-4 tracking-tight">
                ¿Qué Lisboa es <span className="text-primary">para ti</span>?
              </h1>

              <p className="text-lg text-text-secondary mb-8 max-w-sm mx-auto">
                5 preguntas rápidas. Te digo qué barrios, qué experiencias y qué guía necesitas.
              </p>

              <div className="flex justify-center gap-6 mb-10">
                {[
                  { icon: '⏱️', text: '60 seg' },
                  { icon: '🎯', text: 'Personalizado' },
                  { icon: '🎁', text: 'Gratis' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-text-secondary">
                    <span className="w-9 h-9 bg-white rounded-lg flex items-center justify-center border border-slate-200">
                      {item.icon}
                    </span>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setScreen('q1')}
                className="w-full py-4 px-6 bg-primary hover:bg-primary-dark rounded-2xl font-semibold text-lg text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Descubrir mi Lisboa
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </motion.button>

              <p className="text-sm text-text-secondary mt-4 flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-base text-primary">group</span>
                +2,400 viajeros ya lo hicieron
              </p>
            </motion.div>
          )}

          {screen === 'q1' && (
            <motion.div
              key="q1"
              variants={screenVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 flex flex-col"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Con quién viajas a Lisboa?</h2>
              <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-3">
                {[
                  { value: 'solo', emoji: '🎒', title: 'Solo', desc: 'A mi ritmo, sin compromisos' },
                  { value: 'pareja', emoji: '💑', title: 'En pareja', desc: 'Escapada romántica' },
                  { value: 'amigos', emoji: '👯', title: 'Con amigos', desc: 'Grupo listo para pasarla bien' },
                  { value: 'familia', emoji: '👨‍👩‍👧', title: 'En familia', desc: 'Con niños o familia extendida' },
                ].map((opt, i) => (
                  <OptionCard
                    key={opt.value}
                    index={i}
                    emoji={opt.emoji}
                    title={opt.title}
                    desc={opt.desc}
                    selected={answers.companion === opt.value}
                    onClick={() => handleAnswer('companion', opt.value, 'q2')}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}

          {screen === 'q2' && (
            <motion.div
              key="q2"
              variants={screenVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 flex flex-col"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Qué te emociona más de Lisboa?</h2>
              <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-3">
                {[
                  { value: 'gastronomia', emoji: '🍷', title: 'Comer y beber bien', desc: 'Pastéis, vino, marisco fresco' },
                  { value: 'cultura', emoji: '🏛️', title: 'Historia y cultura', desc: 'Monumentos, fado, azulejos' },
                  { value: 'fiesta', emoji: '🎉', title: 'Vida nocturna', desc: 'Bares, terrazas, clubs' },
                  { value: 'naturaleza', emoji: '🌊', title: 'Playas y naturaleza', desc: 'Sintra, Cascais, costa' },
                ].map((opt, i) => (
                  <OptionCard
                    key={opt.value}
                    index={i}
                    emoji={opt.emoji}
                    title={opt.title}
                    desc={opt.desc}
                    selected={answers.interest === opt.value}
                    onClick={() => handleAnswer('interest', opt.value, 'q3')}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}

          {screen === 'q3' && (
            <motion.div
              key="q3"
              variants={screenVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 flex flex-col"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Cuántos días tienes?</h2>
              <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-3">
                {[
                  { value: '1dia', emoji: '⚡', title: '1 día', desc: 'Escala o visita exprés' },
                  { value: '2dias', emoji: '📅', title: '2-3 días', desc: 'Fin de semana largo' },
                  { value: '4dias', emoji: '🗓️', title: '4-5 días', desc: 'Tiempo para explorar bien' },
                  { value: 'semana', emoji: '🌟', title: 'Una semana o más', desc: 'Inmersión total' },
                ].map((opt, i) => (
                  <OptionCard
                    key={opt.value}
                    index={i}
                    emoji={opt.emoji}
                    title={opt.title}
                    desc={opt.desc}
                    selected={answers.duration === opt.value}
                    onClick={() => handleAnswer('duration', opt.value, 'q4')}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}

          {screen === 'q4' && (
            <motion.div
              key="q4"
              variants={screenVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 flex flex-col"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Cómo vas de presupuesto?</h2>
              <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-3">
                {[
                  { value: 'bajo', emoji: '💰', title: 'Ajustado', desc: 'Maximizar sin gastar de más' },
                  { value: 'medio', emoji: '💳', title: 'Normal', desc: 'Algunos gustos sin pasarse' },
                  { value: 'alto', emoji: '✨', title: 'Cómodo', desc: 'Quiero lo mejor' },
                ].map((opt, i) => (
                  <OptionCard
                    key={opt.value}
                    index={i}
                    emoji={opt.emoji}
                    title={opt.title}
                    desc={opt.desc}
                    selected={answers.budget === opt.value}
                    onClick={() => handleAnswer('budget', opt.value, 'q5')}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}

          {screen === 'q5' && (
            <motion.div
              key="q5"
              variants={screenVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 flex flex-col"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Primera vez en Lisboa?</h2>
              <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-3">
                {[
                  { value: 'primera', emoji: '🆕', title: 'Sí, primera vez', desc: 'Todo es nuevo para mí' },
                  { value: 'segunda', emoji: '🔄', title: 'Ya conozco lo básico', desc: 'Belém, Alfama, tranvía 28...' },
                  { value: 'experto', emoji: '🎓', title: 'Casi local', desc: 'Busco lo que no sale en Google' },
                ].map((opt, i) => (
                  <OptionCard
                    key={opt.value}
                    index={i}
                    emoji={opt.emoji}
                    title={opt.title}
                    desc={opt.desc}
                    selected={answers.experience === opt.value}
                    onClick={() => handleAnswer('experience', opt.value, 'email')}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}

          {screen === 'email' && (
            <motion.div
              key="email"
              variants={screenVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 flex flex-col justify-center text-center py-8"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 bg-primary/10 border border-primary/20 rounded-3xl flex items-center justify-center text-4xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎁
              </motion.div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Tu resultado está listo</h2>
              <p className="text-text-secondary mb-2">¿Dónde te lo mando?</p>

              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mx-auto mb-8">
                <span>🎁</span>
                + Mini-itinerario gratis
              </div>

              <div className="space-y-3 max-w-xs mx-auto w-full">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <span className="material-symbols-outlined text-lg">person</span>
                  </span>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={answers.name || ''}
                    onChange={(e) => setAnswers((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-text-main placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white transition-all"
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </span>
                  <input
                    type="email"
                    placeholder="Tu mejor email"
                    value={answers.email || ''}
                    onChange={(e) => setAnswers((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-text-main placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white transition-all"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleEmailSubmit}
                  className="w-full py-4 px-6 bg-primary hover:bg-primary-dark rounded-2xl font-semibold shadow-lg text-white flex items-center justify-center gap-2"
                >
                  Ver mi resultado
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </motion.button>

                <p className="text-xs text-text-secondary flex items-center justify-center gap-1.5 mt-4">
                  <span className="material-symbols-outlined text-base text-primary">lock</span>
                  Sin spam. Solo contenido útil.
                </p>

                <button
                  onClick={() => {
                    setScreen('loading');
                    setTimeout(() => setScreen('results'), 1200);
                  }}
                  className="text-text-secondary text-sm hover:text-text-main transition-colors mt-2"
                >
                  Ver sin dejar email
                </button>
              </div>
            </motion.div>
          )}

          {screen === 'loading' && (
            <motion.div
              key="loading"
              variants={screenVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 flex flex-col justify-center items-center text-center py-8"
            >
              <div className="relative w-28 h-28 mb-8">
                <motion.div
                  className="absolute inset-0 border-[3px] border-primary/20 border-t-primary rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-4 border-[3px] border-accent/20 border-t-accent rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
                <motion.span
                  className="absolute inset-0 flex items-center justify-center text-3xl"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🔍
                </motion.span>
              </div>

              <h3 className="text-xl font-semibold mb-2">Analizando tus respuestas</h3>
              <p className="text-text-secondary mb-8">Preparando recomendaciones...</p>

              <div className="space-y-3 text-left max-w-[260px]">
                {[
                  'Identificando tu perfil viajero',
                  'Seleccionando barrios ideales',
                  'Eligiendo experiencias clave',
                ].map((text, i) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.4 }}
                    className="flex items-center gap-3 text-sm text-text-secondary"
                  >
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-[14px] text-white">check</span>
                    </div>
                    {text}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {screen === 'results' && (
            <motion.div
              key="results"
              variants={screenVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 py-4"
            >
              {(() => {
                const profile = calculateProfile();
                const guide = getGuide();

                return (
                  <>
                    <div className="text-center pb-6 mb-6 border-b border-slate-200 relative">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-primary rounded-full" />

                      <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                        <span className="material-symbols-outlined text-base">verified</span>
                        Tu perfil viajero
                      </div>

                      <span className="text-5xl block mb-3">{profile.emoji}</span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold mb-1">{profile.title}</h2>
                      <p className="text-text-secondary">{profile.subtitle}</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-soft">
                        <div className="flex items-center gap-2.5 text-xs font-semibold text-text-secondary uppercase tracking-wide mb-4">
                          <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-base text-primary">place</span>
                          </div>
                          Barrios para ti
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {profile.barrios.map((barrio) => (
                            <span key={barrio} className="px-3 py-1.5 bg-background-cream rounded-lg text-sm font-medium">
                              {barrio}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-soft">
                        <div className="flex items-center gap-2.5 text-xs font-semibold text-text-secondary uppercase tracking-wide mb-4">
                          <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-base text-primary">star</span>
                          </div>
                          No te puedes perder
                        </div>
                        <div className="space-y-3">
                          {profile.experiences.map((exp) => (
                            <div key={exp.text} className="flex items-start gap-3">
                              <span className="w-9 h-9 bg-background-cream rounded-xl flex items-center justify-center text-lg shrink-0">
                                {exp.icon}
                              </span>
                              <p className="text-sm text-text-secondary pt-2">{exp.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-primary/20 rounded-3xl p-6 text-center relative overflow-hidden shadow-soft-lg">
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

                      <div className="inline-flex items-center gap-1.5 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                        <span className="material-symbols-outlined text-base">bolt</span>
                        Tu guía ideal
                      </div>

                      <h3 className="text-xl font-bold mb-1">{guide.title}</h3>
                      <p className="text-sm text-text-secondary mb-4">{guide.desc}</p>

                      <div className="mb-4">
                        <span className="text-4xl font-extrabold text-primary">{guide.price}</span>
                        <span className="text-slate-400 line-through ml-2">25€</span>
                      </div>

                      <div className="flex justify-center gap-4 text-xs text-text-secondary mb-6">
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-base text-primary">download</span>
                          Acceso inmediato
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-base text-primary">autorenew</span>
                          Actualizado 2025
                        </span>
                      </div>

                      <div className="space-y-3">
                        <motion.a
                          href={`https://estabaenlisboa.com${guide.url}`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-4 px-6 bg-primary hover:bg-primary-dark rounded-2xl font-semibold text-white shadow-lg flex items-center justify-center gap-2"
                        >
                          <span className="material-symbols-outlined text-lg">map</span>
                          Quiero mi guía
                        </motion.a>

                        <button
                          onClick={shareResult}
                          className="w-full py-4 px-6 bg-white border border-slate-200 rounded-2xl font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                        >
                          <span className="material-symbols-outlined text-lg">share</span>
                          Compartir resultado
                        </button>
                      </div>
                    </div>

                    <div className="text-center mt-8 pt-6 border-t border-slate-200">
                      <p className="text-sm text-text-secondary mb-4">¿Viajas con alguien? Que hagan el quiz</p>
                      <div className="flex justify-center gap-3">
                        {[
                          {
                            icon: '📱',
                            action: () =>
                              window.open(
                                `https://wa.me/?text=${encodeURIComponent(
                                  `Soy "${profile.title}" según el quiz de Lisboa 🇵🇹 ${window.location.href}`
                                )}`
                              ),
                          },
                          {
                            icon: '🔗',
                            action: () => {
                              navigator.clipboard.writeText(window.location.href);
                              showToast('Enlace copiado');
                            },
                          },
                        ].map((item) => (
                          <button
                            key={item.icon}
                            onClick={item.action}
                            className="w-12 h-12 bg-white border border-slate-200 rounded-xl text-xl hover:bg-slate-50 hover:-translate-y-0.5 transition-all"
                          >
                            {item.icon}
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-text-secondary mt-4">
                        Etiquétanos en Instagram: <span className="text-primary font-semibold">@estabaenlisboa</span>
                      </p>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-2xl font-medium flex items-center gap-2 shadow-xl z-50 ${
              toast.type === 'error' ? 'bg-red-500 text-white' : 'bg-primary text-white'
            }`}
          >
            <span className="material-symbols-outlined text-lg">
              {toast.type === 'error' ? 'error' : 'check_circle'}
            </span>
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
  initial: { opacity: 0, y: 30, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -30, scale: 0.96 },
};

const optionVariants = {
  initial: { opacity: 0, x: -20, scale: 0.95 },
  animate: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function ProgressBar({ current, total }: { current: number; total: number }) {
  const progress = ((current + 1) / total) * 100;
  
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-slate-600">
          Pregunta <span className="text-primary font-bold">{current + 1}</span> de {total}
        </p>
        <span className="text-xs font-medium text-slate-400">{Math.round(progress)}%</span>
      </div>
      <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-[#F7931E] rounded-full shadow-lg"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>
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
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group relative w-full p-5 rounded-3xl border-2 transition-all duration-300 flex items-center gap-4 text-left overflow-hidden ${
        selected
          ? 'bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5 border-primary shadow-xl shadow-primary/20'
          : 'bg-white/80 backdrop-blur-sm border-slate-200 hover:border-primary/50 hover:shadow-lg hover:bg-white'
      }`}
    >
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />
      
      {/* Icono con efecto premium */}
      <motion.div
        className={`relative w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-all duration-300 ${
          selected
            ? 'bg-gradient-to-br from-primary to-[#F7931E] text-white shadow-lg shadow-primary/30'
            : 'bg-gradient-to-br from-slate-50 to-slate-100 group-hover:from-primary/10 group-hover:to-primary/5'
        }`}
        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {emoji}
        {selected && (
          <motion.div
            className="absolute inset-0 rounded-2xl bg-white/20"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.div>
      
      {/* Contenido */}
      <div className="flex-1 min-w-0">
        <p className={`font-bold text-lg mb-1 transition-colors ${
          selected ? 'text-slate-900' : 'text-slate-800 group-hover:text-primary'
        }`}>
          {title}
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
      </div>
      
      {/* Checkbox premium */}
      <div className="relative flex-shrink-0">
        <motion.div
          className={`w-7 h-7 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${
            selected
              ? 'bg-primary border-primary shadow-lg shadow-primary/30'
              : 'bg-white border-slate-300 group-hover:border-primary/50'
          }`}
          animate={selected ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          {selected && (
            <motion.svg
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </motion.svg>
          )}
        </motion.div>
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
      setTimeout(() => setScreen(nextScreen), 400);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 text-slate-900 relative overflow-hidden">
      {/* Fondo premium con efectos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-[#F7931E]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-primary/15 to-[#F7931E]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-12 min-h-screen flex flex-col">
        {/* Header premium */}
        <header className="flex items-center justify-between mb-8 sm:mb-12">
          <a href="https://estabaenlisboa.com" className="flex items-center gap-3 group">
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-primary to-[#F7931E] rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">📍</span>
            </motion.div>
            <span className="font-bold text-lg text-slate-800 group-hover:text-primary transition-colors">
              Estaba en Lisboa
            </span>
          </a>
          <a
            href="https://estabaenlisboa.com"
            className="w-11 h-11 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-white hover:border-primary/30 hover:shadow-lg transition-all"
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
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 flex flex-col justify-center text-center py-8"
            >
              <motion.div
                className="relative inline-block mb-8"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-7xl sm:text-8xl block">🇵🇹</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[#F7931E]/20 rounded-full blur-2xl -z-10"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-primary/10 to-[#F7931E]/10 border-2 border-primary/30 text-primary px-5 py-2.5 rounded-full text-sm font-bold mx-auto mb-8 shadow-lg shadow-primary/10"
              >
                <span className="material-symbols-outlined text-lg">verified</span>
                Por alguien que vive aquí
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
              >
                ¿Qué Lisboa es{' '}
                <span className="bg-gradient-to-r from-primary to-[#F7931E] bg-clip-text text-transparent">
                  para ti
                </span>
                ?
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-lg mx-auto leading-relaxed"
              >
                5 preguntas rápidas. Te digo qué barrios, qué experiencias y qué guía necesitas.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12"
              >
                {[
                  { icon: '⏱️', text: '60 seg', desc: 'Súper rápido' },
                  { icon: '🎯', text: 'Personalizado', desc: '100% para ti' },
                  { icon: '🎁', text: 'Gratis', desc: 'Sin coste' },
                ].map((item, i) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex flex-col items-center gap-2 text-slate-700"
                  >
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-lg border border-slate-100">
                      {item.icon}
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-sm">{item.text}</p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setScreen('q1')}
                className="group relative w-full sm:w-auto sm:px-12 py-5 bg-gradient-to-r from-primary to-[#F7931E] hover:from-primary-dark hover:to-[#E55A28] rounded-2xl font-bold text-lg text-white shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all flex items-center justify-center gap-3 mx-auto overflow-hidden"
              >
                <span className="relative z-10">Descubrir mi Lisboa</span>
                <motion.span
                  className="material-symbols-outlined text-xl relative z-10"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  arrow_forward
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-sm text-slate-500 mt-6 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base text-primary">group</span>
                <span className="font-semibold text-slate-700">+2,400</span> viajeros ya lo hicieron
              </motion.p>
            </motion.div>
          )}

          {screen === 'q1' && (
            <motion.div
              key="q1"
              variants={screenVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="flex-1 flex flex-col"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl font-black mb-8 text-slate-900"
              >
                ¿Con quién viajas a Lisboa?
              </motion.h2>
              <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-4">
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
              transition={{ duration: 0.4 }}
              className="flex-1 flex flex-col"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl font-black mb-8 text-slate-900"
              >
                ¿Qué te emociona más de Lisboa?
              </motion.h2>
              <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-4">
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
              transition={{ duration: 0.4 }}
              className="flex-1 flex flex-col"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl font-black mb-8 text-slate-900"
              >
                ¿Cuántos días tienes?
              </motion.h2>
              <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-4">
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
              transition={{ duration: 0.4 }}
              className="flex-1 flex flex-col"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl font-black mb-8 text-slate-900"
              >
                ¿Cómo vas de presupuesto?
              </motion.h2>
              <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-4">
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
              transition={{ duration: 0.4 }}
              className="flex-1 flex flex-col"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl font-black mb-8 text-slate-900"
              >
                ¿Primera vez en Lisboa?
              </motion.h2>
              <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-4">
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
              transition={{ duration: 0.4 }}
              className="flex-1 flex flex-col justify-center text-center py-8 max-w-md mx-auto w-full"
            >
              <motion.div
                className="relative w-24 h-24 mx-auto mb-8"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-[#F7931E]/20 rounded-3xl blur-xl" />
                <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-[#F7931E]/10 border-2 border-primary/30 rounded-3xl flex items-center justify-center text-5xl shadow-2xl">
                  🎁
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl font-black mb-3"
              >
                Tu resultado está listo
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-600 mb-4"
              >
                ¿Dónde te lo mando?
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-[#F7931E]/10 border-2 border-primary/30 text-primary px-5 py-2.5 rounded-full text-sm font-bold mx-auto mb-10 shadow-lg"
              >
                <span>🎁</span>
                + Mini-itinerario gratis
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4 w-full"
              >
                <div className="relative group">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined text-xl">person</span>
                  </span>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={answers.name || ''}
                    onChange={(e) => setAnswers((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full pl-14 pr-5 py-4 bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg focus:shadow-primary/10 transition-all font-medium"
                  />
                </div>
                <div className="relative group">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined text-xl">mail</span>
                  </span>
                  <input
                    type="email"
                    placeholder="Tu mejor email"
                    value={answers.email || ''}
                    onChange={(e) => setAnswers((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full pl-14 pr-5 py-4 bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg focus:shadow-primary/10 transition-all font-medium"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleEmailSubmit}
                  className="w-full py-5 px-6 bg-gradient-to-r from-primary to-[#F7931E] hover:from-primary-dark hover:to-[#E55A28] rounded-2xl font-bold text-lg text-white shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all flex items-center justify-center gap-3 mt-6"
                >
                  Ver mi resultado
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </motion.button>

                <p className="text-xs text-slate-500 flex items-center justify-center gap-2 mt-6">
                  <span className="material-symbols-outlined text-base text-primary">lock</span>
                  Sin spam. Solo contenido útil.
                </p>

                <button
                  onClick={() => {
                    setScreen('loading');
                    setTimeout(() => setScreen('results'), 1500);
                  }}
                  className="text-slate-500 text-sm hover:text-primary font-medium transition-colors mt-4"
                >
                  Ver sin dejar email
                </button>
              </motion.div>
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
              <div className="relative w-32 h-32 mb-10">
                <motion.div
                  className="absolute inset-0 border-4 border-primary/20 border-t-primary rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-3 border-4 border-[#F7931E]/20 border-t-[#F7931E] rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
                <motion.span
                  className="absolute inset-0 flex items-center justify-center text-4xl"
                  animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🔍
                </motion.span>
              </div>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-black mb-3"
              >
                Analizando tus respuestas
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-slate-600 mb-10 text-lg"
              >
                Preparando recomendaciones personalizadas...
              </motion.p>

              <div className="space-y-4 text-left max-w-sm w-full">
                {[
                  'Identificando tu perfil viajero',
                  'Seleccionando barrios ideales',
                  'Eligiendo experiencias clave',
                ].map((text, i) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.5 }}
                    className="flex items-center gap-4 text-base text-slate-700"
                  >
                    <motion.div
                      className="w-6 h-6 bg-gradient-to-br from-primary to-[#F7931E] rounded-full flex items-center justify-center shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.5 }}
                    >
                      <span className="material-symbols-outlined text-sm text-white">check</span>
                    </motion.div>
                    <span className="font-medium">{text}</span>
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
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center pb-8 mb-8 border-b-2 border-slate-200 relative"
                    >
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-[#F7931E] rounded-full" />

                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-[#F7931E]/10 border-2 border-primary/30 text-primary px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider mb-6 shadow-lg"
                      >
                        <span className="material-symbols-outlined text-base">verified</span>
                        Tu perfil viajero
                      </motion.div>

                      <motion.span
                        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                        className="text-7xl block mb-4"
                      >
                        {profile.emoji}
                      </motion.span>
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-3xl sm:text-4xl font-black mb-2 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"
                      >
                        {profile.title}
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg text-slate-600"
                      >
                        {profile.subtitle}
                      </motion.p>
                    </motion.div>

                    <div className="space-y-5 mb-8">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-3xl p-6 shadow-xl"
                      >
                        <div className="flex items-center gap-3 text-xs font-black text-slate-600 uppercase tracking-wider mb-5">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary to-[#F7931E] rounded-xl flex items-center justify-center shadow-lg">
                            <span className="material-symbols-outlined text-base text-white">place</span>
                          </div>
                          Barrios para ti
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {profile.barrios.map((barrio, i) => (
                            <motion.span
                              key={barrio}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.7 + i * 0.1 }}
                              className="px-4 py-2 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl text-sm font-bold text-slate-800 border border-slate-200 shadow-sm"
                            >
                              {barrio}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-3xl p-6 shadow-xl"
                      >
                        <div className="flex items-center gap-3 text-xs font-black text-slate-600 uppercase tracking-wider mb-5">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary to-[#F7931E] rounded-xl flex items-center justify-center shadow-lg">
                            <span className="material-symbols-outlined text-base text-white">star</span>
                          </div>
                          No te puedes perder
                        </div>
                        <div className="space-y-4">
                          {profile.experiences.map((exp, i) => (
                            <motion.div
                              key={exp.text}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.9 + i * 0.15 }}
                              className="flex items-start gap-4"
                            >
                              <span className="w-12 h-12 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center text-2xl shrink-0 border border-slate-200 shadow-sm">
                                {exp.icon}
                              </span>
                              <p className="text-base text-slate-700 pt-3 font-medium leading-relaxed">{exp.text}</p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      className="bg-gradient-to-br from-white via-white to-slate-50 border-2 border-primary/30 rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl"
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                      
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#F7931E] text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-6 shadow-lg"
                      >
                        <span className="material-symbols-outlined text-base">bolt</span>
                        Tu guía ideal
                      </motion.div>

                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 }}
                        className="text-2xl sm:text-3xl font-black mb-2"
                      >
                        {guide.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                        className="text-base text-slate-600 mb-6"
                      >
                        {guide.desc}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.6, type: 'spring' }}
                        className="mb-6"
                      >
                        <span className="text-5xl font-black bg-gradient-to-r from-primary to-[#F7931E] bg-clip-text text-transparent">
                          {guide.price}
                        </span>
                        <span className="text-xl text-slate-400 line-through ml-3">25€</span>
                      </motion.div>

                      <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600 mb-8">
                        <span className="flex items-center gap-2 font-semibold">
                          <span className="material-symbols-outlined text-lg text-primary">download</span>
                          Acceso inmediato
                        </span>
                        <span className="flex items-center gap-2 font-semibold">
                          <span className="material-symbols-outlined text-lg text-primary">autorenew</span>
                          Actualizado 2025
                        </span>
                      </div>

                      <div className="space-y-3">
                        <motion.a
                          href={`https://estabaenlisboa.com${guide.url}`}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="block w-full py-5 px-6 bg-gradient-to-r from-primary to-[#F7931E] hover:from-primary-dark hover:to-[#E55A28] rounded-2xl font-black text-lg text-white shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all flex items-center justify-center gap-3"
                        >
                          <span className="material-symbols-outlined text-xl">map</span>
                          Quiero mi guía
                        </motion.a>

                        <motion.button
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={shareResult}
                          className="w-full py-4 px-6 bg-white border-2 border-slate-200 rounded-2xl font-bold hover:bg-slate-50 hover:border-primary/30 transition-all flex items-center justify-center gap-3 shadow-lg"
                        >
                          <span className="material-symbols-outlined text-xl">share</span>
                          Compartir resultado
                        </motion.button>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.8 }}
                      className="text-center mt-10 pt-8 border-t-2 border-slate-200"
                    >
                      <p className="text-base text-slate-600 mb-6 font-medium">
                        ¿Viajas con alguien? Que hagan el quiz
                      </p>
                      <div className="flex justify-center gap-4 mb-6">
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
                          <motion.button
                            key={item.icon}
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={item.action}
                            className="w-14 h-14 bg-white border-2 border-slate-200 rounded-2xl text-2xl hover:bg-slate-50 hover:border-primary/30 transition-all shadow-lg"
                          >
                            {item.icon}
                          </motion.button>
                        ))}
                      </div>
                      <p className="text-sm text-slate-500">
                        Etiquétanos en Instagram:{' '}
                        <span className="text-primary font-bold">@estabaenlisboa</span>
                      </p>
                    </motion.div>
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
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-2xl z-50 ${
              toast.type === 'error'
                ? 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                : 'bg-gradient-to-r from-primary to-[#F7931E] text-white'
            }`}
          >
            <span className="material-symbols-outlined text-xl">
              {toast.type === 'error' ? 'error' : 'check_circle'}
            </span>
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

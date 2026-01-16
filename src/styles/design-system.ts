/**
 * SISTEMA DE DISEÑO UNIFICADO
 *
 * Colores, tipografía y estilos consistentes para toda la web
 * Basado en el diseño del home page
 */

export const designSystem = {
  // COLORES PRINCIPALES
  colors: {
    primary: '#FF6B35',        // Naranja principal
    primaryDark: '#E55A28',    // Naranja oscuro para hovers
    secondary: '#F7931E',      // Naranja secundario/dorado
    accent: '#FF6B35',         // Color de acento

    // Backgrounds
    bgLight: '#FFFDF7',        // Crema claro - fondo principal
    bgCream: '#FFF8E7',        // Crema más oscuro
    bgWhite: '#FFFFFF',        // Blanco puro

    // Textos
    textMain: '#1E293B',       // Texto principal (slate-900)
    textSecondary: '#64748B',  // Texto secundario (slate-500)
    textLight: '#94A3B8',      // Texto claro (slate-400)

    // Grises
    slate50: '#F8FAFC',
    slate100: '#F1F5F9',
    slate200: '#E2E8F0',
    slate300: '#CBD5E1',
    slate700: '#334155',
    slate800: '#1E293B',
    slate900: '#0F172A',

    // Otros
    success: '#10B981',        // Verde
    warning: '#F59E0B',        // Amarillo
    error: '#EF4444',          // Rojo
    info: '#3B82F6',           // Azul
  },

  // TIPOGRAFÍA
  fonts: {
    // Serif para headlines grandes (elegante, editorial)
    serif: 'Georgia, serif',

    // Sans-serif para UI y cuerpo (Geist es la por defecto de Next.js)
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',

    // Mono (si se necesita)
    mono: 'ui-monospace, monospace',
  },

  // TAMAÑOS DE TEXTO
  fontSize: {
    // Mobile first, luego desktop
    h1: {
      mobile: '2.5rem',      // 40px
      tablet: '3.75rem',     // 60px
      desktop: '4.5rem',     // 72px
    },
    h2: {
      mobile: '2rem',        // 32px
      tablet: '2.5rem',      // 40px
      desktop: '3rem',       // 48px
    },
    h3: {
      mobile: '1.5rem',      // 24px
      tablet: '1.875rem',    // 30px
      desktop: '2.25rem',    // 36px
    },
    body: {
      mobile: '1rem',        // 16px
      desktop: '1.125rem',   // 18px
    },
    small: {
      mobile: '0.875rem',    // 14px
      desktop: '1rem',       // 16px
    },
  },

  // ESPACIADO
  spacing: {
    xs: '0.5rem',      // 8px
    sm: '1rem',        // 16px
    md: '1.5rem',      // 24px
    lg: '2rem',        // 32px
    xl: '3rem',        // 48px
    '2xl': '4rem',     // 64px
    '3xl': '6rem',     // 96px
    '4xl': '8rem',     // 128px
  },

  // SOMBRAS
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    orange: '0 20px 40px -10px rgba(255, 107, 53, 0.5)',
  },

  // BORDES
  borderRadius: {
    sm: '0.5rem',      // 8px
    md: '0.75rem',     // 12px
    lg: '1rem',        // 16px
    xl: '1.5rem',      // 24px
    '2xl': '2rem',     // 32px
    full: '9999px',    // círculo
  },

  // GRADIENTES PREDEFINIDOS
  gradients: {
    primary: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
    primaryReverse: 'linear-gradient(135deg, #F7931E 0%, #FF6B35 100%)',
    dark: 'linear-gradient(to bottom right, #0F172A 0%, #1E293B 50%, #78350F 100%)',
    overlay: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.7) 50%, rgba(120, 53, 15, 0.4) 100%)',
    text: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
  },

  // TRANSICIONES
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// ESTILOS DE COMPONENTES COMUNES
export const componentStyles = {
  // Botón primario (naranja)
  buttonPrimary: `
    inline-flex items-center justify-center gap-3
    bg-gradient-to-r from-[#FF6B35] to-[#F7931E]
    text-white font-bold
    px-10 py-5 rounded-2xl
    shadow-2xl hover:shadow-orange-500/50
    transition-all hover:scale-105
    focus:outline-none focus:ring-4 focus:ring-orange-500/50
  `,

  // Botón secundario (outline)
  buttonSecondary: `
    inline-flex items-center justify-center gap-2
    bg-white/10 hover:bg-white/20
    backdrop-blur-md border-2 border-white/30
    text-white font-semibold
    px-10 py-5 rounded-2xl
    transition-all
    focus:outline-none focus:ring-4 focus:ring-white/30
  `,

  // Badge/Pill
  badge: `
    inline-flex items-center gap-2
    bg-orange-50/10 backdrop-blur-md
    border-2 border-orange-400/30
    rounded-full px-5 py-2.5
    shadow-lg
  `,

  // Card
  card: `
    bg-white rounded-2xl
    border border-slate-200
    shadow-sm hover:shadow-xl
    transition-all duration-500
    overflow-hidden
  `,

  // Hero Section
  heroSection: `
    relative min-h-[90vh]
    flex items-center justify-center
    overflow-hidden
  `,

  // Hero Background Overlay
  heroOverlay: `
    absolute inset-0
    bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-orange-900/40
  `,

  // Input
  input: `
    w-full px-6 py-4
    rounded-2xl
    bg-white/10 backdrop-blur-sm
    border border-white/20
    text-white placeholder-white/50
    focus:outline-none focus:ring-2 focus:ring-orange-500
  `,

  // Section Title
  sectionTitle: `
    text-3xl md:text-4xl lg:text-5xl
    font-bold
    text-slate-900
    mb-6
    tracking-tight
  `,

  // Section Subtitle
  sectionSubtitle: `
    text-lg md:text-xl
    text-slate-600
    leading-relaxed
  `,
};

// UTILIDADES PARA TAILWIND CSS
export const tailwindClasses = {
  container: 'container mx-auto px-4 sm:px-6 lg:px-8',
  section: 'py-16 md:py-24 lg:py-32',
  gridCards: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
  flexCenter: 'flex items-center justify-center',
  textGradient: 'bg-gradient-to-r from-[#FF6B35] to-[#F7931E] bg-clip-text text-transparent',
};

export default designSystem;

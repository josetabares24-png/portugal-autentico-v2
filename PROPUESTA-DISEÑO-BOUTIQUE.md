# 🎨 Propuesta Diseño Boutique Premium - Estaba en Lisboa

## 🎯 Filosofía: De "IA Genérico" a "Boutique Digital Editorial"

### Problemas Actuales Detectados:
- ❌ Layout simétrico 12-col predecible
- ❌ Tipografía Georgia (bonita pero genérica)
- ❌ Gradientes naranja saturados muy vistas
- ❌ CTAs con sombras pesadas
- ❌ Bloques uniformes sin respiración
- ❌ Tono marketing ("Evita trampas turísticas")

---

## 📐 Nuevo Sistema de Diseño

### 1. TIPOGRAFÍA EDITORIAL

#### Títulos (Display):
**Tipo**: **Fraunces** (serif variable, ultra editorial)
- Weights: 300 (Light) para headers sutiles, 900 (Black) para statements
- Alternative: **Playfair Display** si no puedes usar variable fonts
- Uso: H1 masivos (clamp(4rem, 12vw, 10rem)) con tracking apretado (-0.03em)

#### Subtítulos & Énfasis:
**Tipo**: **Sohne** (sans geométrica premium)
- Alternative gratis: **Cabinet Grotesk** o **Inter Display**
- Uso: Subheaders con spacing generoso (0.05em)

#### Cuerpo:
**Tipo**: **Söhne Mono** para detalles técnicos (horarios, GPS)
- Alternative: **JetBrains Mono** o **IBM Plex Mono**
- Uso: Coordenadas, precios, timestamps

```css
/* Implementación */
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,900;1,9..144,300&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

---

### 2. PALETA BOUTIQUE (Menos saturación)

```css
:root {
  /* Primarios - Tonos terrosos portugueses */
  --clay-50: #FAF8F5;      /* Fondo principal */
  --clay-100: #F5F0E8;     /* Fondos alternos */
  --terracotta: #D4653C;   /* CTA principal (menos saturado) */
  --ochre: #E8A056;        /* Acentos cálidos */

  /* Neutros editoriales */
  --ink-900: #1A1614;      /* Texto principal (casi negro) */
  --ink-700: #3D3935;      /* Texto secundario */
  --ink-400: #9B938C;      /* Texto terciario */

  /* Acentos sutiles */
  --sage: #8B9E8A;         /* Verde suave */
  --sand: #E5DDD1;         /* Separadores */

  /* Textura */
  --noise: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
}
```

---

### 3. LAYOUT ASIMÉTRICO - PROPUESTA HOME

#### Hero (Above the fold)

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│         [Logo]                              [Guías] [Blog]   │
│                                                               │
│    ┌───────────────────────────────┐                         │
│    │                               │      ┌──────────────┐   │
│    │  Lo que nadie te              │      │ Actualizado  │   │
│    │  cuenta de Lisboa             │      │ Enero 2025   │   │
│    │                               │      └──────────────┘   │
│    │  (H1 - 10rem Fraunces)        │                         │
│    │  ├─────────────────────       │      [Desde 3.99€]     │
│    │                               │                         │
│    │                               │      [→ Ver guías]     │
│    └───────────────────────────────┘                         │
│                                                               │
│      Por alguien que vive aquí                               │
│      desde 2015                                              │
│      ─────────── (línea fina 0.5px)                          │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Implementación**:
- Hero: 100vh, sin imagen de fondo (fondo clay-50 con noise sutil)
- H1 alineado a la izquierda, ocupando 60% del ancho
- CTA flotando a la derecha en posición absoluta
- Sin botones secundarios (un solo CTA claro)
- Micro-interacción: H1 con reveal de palabras al scroll

---

#### Sección "El Problema" (Asimétrica)

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│                                        El problema con        │
│                                        los blogs de viajes   │
│                                        ─────────────────      │
│                                                               │
│  ┌────────────────────────────┐                              │
│  │                            │    Te mandan todos a         │
│  │  [Foto editorial B/N       │    Belém a las 11am          │
│  │   de Lisboa vacía]         │    (hora pico turística)     │
│  │                            │                              │
│  │                            │    Te recomiendan el         │
│  └────────────────────────────┘    Timeout Market            │
│                                     (trampa cara)            │
│                                                               │
│                                     Copian info de 2019      │
│                                     (precios obsoletos)      │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Detalles**:
- Imagen 45% ancho, alineada izquierda
- Texto 50% ancho, alineado derecha con amplio margen
- Foto en B/N con grain sutil
- Bullets sin iconos, solo guiones em-dash (—)
- Spacing entre elementos: 8rem (muy generoso)

---

#### Itinerarios (Bento Grid Asimétrico)

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│  Elige tu ritmo                                              │
│  ─────────────                                               │
│                                                               │
│  ┌──────────────┬──────────────┬──────────────┐             │
│  │              │              │              │             │
│  │ Lisboa       │              │              │             │
│  │ 1 día        │  Lisboa      │  Lisboa      │             │
│  │              │  2 días      │  3 días      │             │
│  │ 3.99€        │              │  + Sintra    │             │
│  │              │  5.99€       │              │             │
│  │              │              │  7.99€       │             │
│  └──────────────┴──────────────┴──────────────┘             │
│                                                               │
│  ┌────────────────────────┬────────────────────────┐         │
│  │                        │                        │         │
│  │  Lisboa                │  Lisboa                │         │
│  │  Fotográfica           │  Romántica             │         │
│  │                        │                        │         │
│  │  4.99€                 │  6.99€                 │         │
│  │                        │                        │         │
│  └────────────────────────┴────────────────────────┘         │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Características**:
- Grid: No simétrico, alturas variables
- Primera fila: 3 cards (1:1.2:1.2 ratio)
- Segunda fila: 2 cards (1:1 ratio)
- Hover: Elevación sutil (4px), sin escala
- Imágenes: B/N con color en hover (transición suave)
- Precio: Mono font, posición bottom-left
- Bordes: 0.5px solid sand

---

### 4. INTERACCIONES ORGÁNICAS

#### Botones CTA:

```css
.btn-primary {
  background: linear-gradient(135deg, var(--terracotta), var(--ochre));
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 2rem;
  font-family: var(--font-body);
  font-weight: 600;
  letter-spacing: 0.02em;

  /* Efecto líquido */
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.3s ease;
}

.btn-primary:hover {
  transform: scale(1.02) translateY(-2px);
  box-shadow: 0 8px 24px rgba(212, 101, 60, 0.2);
}

/* Efecto de expansión líquida */
.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(circle at center,
    rgba(255,255,255,0.3) 0%,
    transparent 70%);
  opacity: 0;
  transform: scale(0);
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
              opacity 0.3s;
}

.btn-primary:hover::before {
  opacity: 1;
  transform: scale(1);
}
```

#### Scroll Reveals:

```javascript
// Parallax suave en hero
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const hero = document.querySelector('.hero-title');
  hero.style.transform = `translateY(${scrolled * 0.3}px)`;
  hero.style.opacity = 1 - (scrolled / 500);
});

// Reveal de texto palabra por palabra
const splitText = new SplitType('.animate-text', { types: 'words' });
gsap.from('.animate-text .word', {
  scrollTrigger: {
    trigger: '.animate-text',
    start: 'top 80%',
  },
  opacity: 0,
  y: 20,
  stagger: 0.05,
  duration: 0.6,
  ease: 'power2.out'
});
```

---

### 5. DETALLES TÁCTILES

#### Sombras Suaves (No dramáticas):

```css
/* Card elevation */
.card {
  box-shadow:
    0 1px 2px rgba(26, 22, 20, 0.04),
    0 2px 4px rgba(26, 22, 20, 0.04),
    0 4px 8px rgba(26, 22, 20, 0.04);
}

.card:hover {
  box-shadow:
    0 2px 4px rgba(26, 22, 20, 0.06),
    0 4px 8px rgba(26, 22, 20, 0.06),
    0 8px 16px rgba(26, 22, 20, 0.06);
}
```

#### Bordes Ultra-Finos:

```css
.divider {
  border: none;
  height: 0.5px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--sand) 50%,
    transparent
  );
}
```

#### Textura de Grano:

```css
body {
  background-color: var(--clay-50);
  background-image: var(--noise);
  background-blend-mode: multiply;
}
```

---

### 6. TONO HUMANO - REESCRITURA

#### ANTES (Marketing):
> "Evita Trampas Turísticas en Lisboa 2025"

#### DESPUÉS (Amigo local):
> "Lo que nadie te cuenta de Lisboa"

#### ANTES:
> "Horarios exactos + GPS + Restaurantes locales"

#### DESPUÉS:
> "Dónde desayunar en Graça sin turistas.
> Qué mirador está vacío a las 9am.
> Por qué Belém a las 11 es un error."

#### ANTES:
> "500+ viajeros satisfechos"

#### DESPUÉS:
> "Usado por 500 personas que querían
> evitar las multitudes"

---

### 7. IMPLEMENTACIÓN TÉCNICA

#### Fuentes Variables:

```tsx
// app/layout.tsx
import { Fraunces } from 'next/font/google';
import { Inter } from 'next/font/google';
import { JetBrains_Mono } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '900'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
```

#### Tailwind Config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        clay: {
          50: '#FAF8F5',
          100: '#F5F0E8',
        },
        terracotta: '#D4653C',
        ochre: '#E8A056',
        ink: {
          900: '#1A1614',
          700: '#3D3935',
          400: '#9B938C',
        },
        sage: '#8B9E8A',
        sand: '#E5DDD1',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(26, 22, 20, 0.04), 0 2px 4px rgba(26, 22, 20, 0.04), 0 4px 8px rgba(26, 22, 20, 0.04)',
        'soft-lg': '0 2px 4px rgba(26, 22, 20, 0.06), 0 4px 8px rgba(26, 22, 20, 0.06), 0 8px 16px rgba(26, 22, 20, 0.06)',
      },
      borderWidth: {
        'hairline': '0.5px',
      },
    },
  },
};
```

---

## 🎯 RESUMEN EJECUTIVO

### Lo que CAMBIA:
1. **Tipografía**: Georgia → Fraunces (editorial premium)
2. **Layout**: Simétrico → Asimétrico con whitespace intencional
3. **Colores**: Naranjas saturados → Terracotta/Ochre apagados
4. **Tono**: Marketing → Conversación local
5. **Interacciones**: Escalas bruscas → Transiciones líquidas
6. **Detalles**: Sin textura → Grain sutil + bordes hairline

### Lo que PERMANECE:
- Estructura de información clara
- CTAs directos (pero más sutiles)
- Mobile-first responsive
- Performance (Next.js optimizado)

---

## 📊 MÉTRICAS DE ÉXITO

1. **Tiempo en página**: +30% (layout más atractivo para explorar)
2. **Tasa de rebote**: -20% (credibilidad boutique)
3. **Conversión**: +15% (menos fricción, más confianza)

---

## 🚀 ROADMAP DE IMPLEMENTACIÓN

### Fase 1 (1-2 días):
- [ ] Setup fuentes Fraunces + Inter + JetBrains Mono
- [ ] Actualizar paleta de colores (clay, terracotta, ochre)
- [ ] Rediseñar Hero asimétrico
- [ ] Agregar textura grain

### Fase 2 (2-3 días):
- [ ] Rediseñar grid itinerarios (bento layout)
- [ ] Implementar interacciones líquidas en botones
- [ ] Scroll reveals con GSAP
- [ ] Reescribir copy con tono humano

### Fase 3 (1 día):
- [ ] Testing mobile
- [ ] Performance audit
- [ ] Deploy

---

¿Empezamos con la Fase 1? 🎨

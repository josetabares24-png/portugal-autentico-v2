/**
 * Script para crear productos en Stripe en MODO PRODUCCIÓN (LIVE)
 * 
 * ⚠️ IMPORTANTE: Este script crea productos REALES que se venderán de verdad
 * 
 * Uso:
 * 1. Configura STRIPE_SECRET_KEY_LIVE en .env.local con tu clave de producción
 * 2. Ejecutar: node scripts/create-stripe-products-live.js
 */

require('dotenv').config({ path: '.env.local' });
const Stripe = require('stripe');

// Usar clave de producción si existe, sino usar la normal
const stripeSecretKey = process.env.STRIPE_SECRET_KEY_LIVE || process.env.STRIPE_SECRET_KEY?.replace(/"/g, '').trim();

if (!stripeSecretKey) {
  console.error('❌ Error: STRIPE_SECRET_KEY no encontrada en .env.local');
  process.exit(1);
}

// Verificar el modo
const isLive = stripeSecretKey.startsWith('sk_live_');
const mode = isLive ? 'PRODUCCIÓN (LIVE)' : 'TEST';

if (!isLive) {
  console.warn('⚠️  ADVERTENCIA: La clave parece ser de TEST (sk_test_)');
  console.warn('   Si quieres crear productos en PRODUCCIÓN, usa una clave que empiece con sk_live_');
  console.warn(`   Continuando en modo: ${mode}\n`);
}

const stripe = new Stripe(stripeSecretKey);

const products = [
  {
    id: 'lisboa-1-dia-lo-esencial',
    name: 'Guía Lisboa Express: Lo Mejor en 1 Día (Sin Perder Tiempo)',
    description: `Perfecta si tienes escala, poco tiempo o es tu primera vez. Itinerario optimizado para ver lo esencial sin perder ni un minuto. Incluye:
• Ruta hora por hora perfectamente planificada
• 8 paradas esenciales con timing perfecto
• Restaurantes locales verificados (sin trampas turísticas)
• Mapa interactivo descargable con GPS
• Consejos insider para evitar colas y multitudes
• Mejor momento del día para cada lugar
• Alternativas si llueve
• Transporte público paso a paso`,
    price: 199, // 1.99 EUR en centavos
    currency: 'eur'
  },
  {
    id: 'lisboa-2-dias-completo',
    name: 'Guía Lisboa Fin de Semana: 2 Días Perfectos (La Más Vendida)',
    description: `La guía más popular. Fin de semana perfecto con lo mejor de Lisboa sin agobios. Incluye:
• Día 1: Centro histórico completo (Alfama, Baixa, Chiado)
• Día 2: Belém + barrios auténticos que no aparecen en guías turísticas
• 20+ restaurantes locales verificados (donde comen los lisboetas)
• Mapa interactivo con todos los puntos GPS
• Horarios optimizados para evitar multitudes
• Transporte público detallado paso a paso
• Vida nocturna recomendada (bares y fado auténtico)
• Tips para ahorrar tiempo y dinero`,
    price: 299, // 2.99 EUR
    currency: 'eur'
  },
  {
    id: 'lisboa-3-dias-premium',
    name: 'Guía Lisboa + Sintra: 3 Días de Experiencia Completa',
    description: `La experiencia completa: Lisboa + excursión a Sintra y Cascais. No te pierdas nada. Incluye:
• Día 1: Lisboa Centro completo (Alfama, Baixa, Chiado)
• Día 2: Belém + barrios locales auténticos
• Día 3: Excursión completa a Sintra + Cascais + Cabo da Roca
• 30+ restaurantes y tascas auténticas verificadas
• Mapas interactivos para cada día con GPS
• Transporte optimizado (trenes, buses, horarios)
• Playas secretas en Cascais (sin turistas)
• Rutas de senderismo en Sintra
• Mejores miradores y spots de fotos`,
    price: 399, // 3.99 EUR
    currency: 'eur'
  },
  {
    id: 'lisboa-full-week',
    name: 'Guía Lisboa 7 Días: Semana Completa + Alrededores (Sintra, Cascais, Óbidos)',
    description: `La guía definitiva para explorar Lisboa y toda la región. Una semana completa sin dejar nada por ver. Incluye:
• 7 días de itinerarios detallados día a día
• Lisboa completa + Sintra + Cascais + Óbidos + Setúbal
• 50+ restaurantes verificados (desde tascas a restaurantes premium)
• Playas secretas, viñedos y pueblos medievales
• Rutas de senderismo y naturaleza
• Vida nocturna completa (bares, fado, discotecas)
• Mapas interactivos para cada día con GPS
• Transporte optimizado para cada excursión
• Excursiones de día completo perfectamente planificadas
• Alternativas según el clima`,
    price: 599, // 5.99 EUR
    currency: 'eur'
  },
  {
    id: 'lisboa-romantica',
    name: 'Guía Lisboa Romántica: Para Parejas y Lunas de Miel (Incluye Spots para Propuestas)',
    description: `Crea momentos inolvidables en Lisboa. Guía especializada para parejas, aniversarios y lunas de miel. Incluye:
• Miradores al atardecer con las mejores vistas (con sugerencias de champagne)
• Restaurantes románticos íntimos (no turísticos)
• Paseo en tranvía 28 en horarios menos concurridos
• Cena con espectáculo de fado auténtico (no para turistas)
• Hoteles boutique recomendados con encanto
• Rutas románticas a pie por barrios históricos
• Playas secretas perfectas para dos
• Ideas y ubicaciones para propuesta de matrimonio
• Contactos de fotógrafos profesionales para sesiones
• Spots para fotos de pareja increíbles`,
    price: 299, // 2.99 EUR
    currency: 'eur'
  },
  {
    id: 'lisboa-familiar',
    name: 'Guía Lisboa Familiar: Perfecta para Viajar con Niños (Sin Estrés, Todo Planificado)',
    description: `Viaja tranquilo con tu familia. Guía especializada para familias con niños de todas las edades. Incluye:
• Itinerarios adaptados para niños (rutas cortas, descansos)
• Restaurantes family-friendly verificados
• Parques y áreas de juego en cada barrio
• Oceanario de Lisboa (mejor del mundo) - horarios y tips
• Playas aptas para niños con servicios
• Actividades interactivas que encantan a los peques
• Museos con secciones infantiles y talleres
• Transporte público con cochecito (accesibilidad)
• Ubicaciones de baños y cambiadores
• Rutas cortas para niños pequeños (sin cansarlos)
• Alternativas si los niños se cansan
• Tips para evitar colas con niños`,
    price: 299, // 2.99 EUR
    currency: 'eur'
  },
  {
    id: 'lisboa-fotografia',
    name: 'Guía Lisboa Instagram: 50+ Spots para Fotos Perfectas (Fotógrafos e Influencers)',
    description: `Consigue las fotos más increíbles de Lisboa. Guía definitiva para fotógrafos profesionales, influencers y quien quiera fotos perfectas para Instagram. Incluye:
• 50+ spots fotográficos con GPS exacto
• Mejor hora del día para cada ubicación (golden hour, blue hour)
• Miradores secretos sin turistas (fotos sin gente)
• Calles más fotogénicas de Alfama y Chiado
• Arquitectura única y azulejos perfectos para fotos
• Mercados y vida local auténtica (fotos reales, no posadas)
• Spots para fotos de pareja, individuales y grupales
• Técnicas de fotografía urbana aplicadas a Lisboa
• Permisos y restricciones (dónde puedes y no puedes fotografiar)
• Mejores ángulos y composición para cada spot
• Tips para influencers: qué llevar, qué evitar
• Spots perfectos para stories y reels de Instagram`,
    price: 299, // 2.99 EUR
    currency: 'eur'
  }
];

async function createProducts() {
  console.log(`🚀 Creando productos en Stripe - MODO: ${mode}\n`);
  if (isLive) {
    console.log('⚠️  ATENCIÓN: Estos productos se crearán en PRODUCCIÓN para VENTA REAL\n');
  } else {
    console.log('ℹ️  Estos productos se crearán en modo TEST (no son ventas reales)\n');
  }

  const results = {
    success: [],
    errors: []
  };

  for (const product of products) {
    try {
      console.log(`📦 Creando: ${product.name}...`);

      // Crear producto
      const stripeProduct = await stripe.products.create({
        name: product.name,
        description: product.description,
        metadata: {
          product_id: product.id,
          guide_type: product.id.includes('romantica') || product.id.includes('familiar') || product.id.includes('fotografia') ? 'themed' : 'itinerary',
        }
      });

      // Crear precio
      const price = await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: product.price,
        currency: product.currency,
      });

      results.success.push({
        id: product.id,
        name: product.name,
        priceId: price.id,
        amount: product.price / 100
      });

      console.log(`   ✅ Creado - Price ID: ${price.id}\n`);

    } catch (error) {
      results.errors.push({
        id: product.id,
        name: product.name,
        error: error.message
      });
      console.log(`   ❌ Error: ${error.message}\n`);
    }
  }

  // Mostrar resumen
  console.log('\n📊 RESUMEN:\n');
  console.log(`✅ Productos creados: ${results.success.length}`);
  console.log(`❌ Errores: ${results.errors.length}\n`);

  if (results.success.length > 0) {
    console.log('📝 Actualiza src/lib/stripe-products.ts con estos Price IDs (PRODUCCIÓN):\n');
    console.log('export const STRIPE_PRODUCTS = {');

    results.success.forEach(product => {
      console.log(`  "${product.id}": {`);
      console.log(`    priceId: "${product.priceId}",`);
      console.log(`    name: "${product.name}",`);
      console.log(`    price: ${product.amount},`);
      console.log(`  },`);
    });

    console.log('};\n');
  }

  if (results.errors.length > 0) {
    console.log('❌ Errores:\n');
    results.errors.forEach(err => {
      console.log(`   ${err.name}: ${err.error}`);
    });
  }
}

// Ejecutar
createProducts()
  .then(() => {
    console.log('✅ Proceso completado!');
    process.exit(0);
  })
  .catch(error => {
    console.error('❌ Error fatal:', error.message);
    process.exit(1);
  });

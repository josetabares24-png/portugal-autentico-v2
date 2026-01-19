/**
 * Script para crear productos en Stripe automáticamente
 *
 * Uso:
 * 1. Instalar dependencias: npm install stripe
 * 2. Configurar STRIPE_SECRET_KEY en .env.local
 * 3. Ejecutar: node scripts/create-stripe-products.js
 */

require('dotenv').config({ path: '.env.local' });
const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const products = [
  {
    id: 'lisboa-1-dia-lo-esencial',
    name: 'Lisboa 1 Día - Lo Esencial',
    description: `Itinerario completo paso a paso para ver lo esencial de Lisboa en 1 día. Incluye:
• Ruta optimizada hora por hora
• Restaurantes verificados por locales
• Mapa interactivo descargable
• Consejos insider para evitar colas
• GPS de cada ubicación
• Mejor momento para visitar cada lugar`,
    price: 199, // 1.99 EUR en centavos
    currency: 'eur'
  },
  {
    id: 'lisboa-2-dias-completo',
    name: 'Lisboa 2 Días - Completo',
    description: `Guía completa de 2 días en Lisboa con itinerarios detallados. Incluye:
• Día 1: Centro histórico (Alfama, Baixa, Chiado)
• Día 2: Belém + barrios auténticos
• 20+ restaurantes locales verificados
• Mapa interactivo con todos los puntos
• Horarios optimizados para evitar multitudes
• Transporte público paso a paso
• Vida nocturna recomendada`,
    price: 299, // 2.99 EUR
    currency: 'eur'
  },
  {
    id: 'lisboa-3-dias-premium',
    name: 'Lisboa 3 Días - Premium',
    description: `Guía premium de 3 días: Lisboa + Alrededores. Incluye:
• Día 1: Lisboa Centro (Alfama, Baixa, Chiado)
• Día 2: Belém + barrios locales
• Día 3: Excursión a Sintra + Cascais
• 30+ restaurantes y tascas auténticas
• Mapas interactivos para cada día
• Transporte optimizado
• Playas secretas en Cascais
• Rutas de senderismo en Sintra`,
    price: 399, // 3.99 EUR
    currency: 'eur'
  },
  {
    id: 'lisboa-full-week',
    name: 'Lisboa Full Week',
    description: `Guía completa de una semana en Lisboa y alrededores. Incluye:
• 7 días de itinerarios detallados
• Lisboa + Sintra + Cascais + Óbidos + Setúbal
• 50+ restaurantes verificados
• Playas, viñedos y pueblos medievales
• Rutas de senderismo
• Vida nocturna completa
• Mapas interactivos para cada día
• Transporte optimizado
• Excursiones de día completo planificadas`,
    price: 599, // 5.99 EUR
    currency: 'eur'
  },
  {
    id: 'lisboa-romantica',
    name: 'Lisboa Romántica',
    description: `Guía especial para parejas y lunas de miel. Incluye:
• Miradores al atardecer con champagne
• Restaurantes románticos íntimos
• Paseo en tranvía privado
• Cena con espectáculo de fado
• Hoteles boutique recomendados
• Rutas románticas a pie
• Playas secretas para dos
• Ideas para propuesta de matrimonio
• Fotógrafos profesionales contactos`,
    price: 299, // 2.99 EUR
    currency: 'eur'
  },
  {
    id: 'lisboa-familiar',
    name: 'Lisboa Familiar',
    description: `Guía especializada para familias con niños. Incluye:
• Itinerarios adaptados para niños
• Restaurantes family-friendly
• Parques y áreas de juego
• Oceanario de Lisboa (mejor del mundo)
• Playas aptas para niños
• Actividades interactivas
• Museos con secciones infantiles
• Transporte público con cochecito
• Baños y cambiadores ubicaciones
• Rutas cortas para niños pequeños`,
    price: 299, // 2.99 EUR
    currency: 'eur'
  },
  {
    id: 'lisboa-fotografia',
    name: 'Lisboa Fotografía',
    description: `Guía definitiva para fotógrafos en Lisboa. Incluye:
• 50+ spots fotográficos con GPS exacto
• Mejor hora del día para cada ubicación
• Golden hour spots
• Blue hour spots
• Miradores secretos sin turistas
• Calles fotogénicas de Alfama
• Arquitectura y azulejos únicos
• Mercados y vida local auténtica
• Técnicas de fotografía urbana
• Permisos y restricciones`,
    price: 299, // 2.99 EUR
    currency: 'eur'
  }
];

async function createProducts() {
  console.log('🚀 Creando productos en Stripe...\n');

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
    console.log('📝 Actualiza src/lib/stripe-products.ts con estos Price IDs:\n');
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

// Verificar que existe la API key
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('❌ Error: STRIPE_SECRET_KEY no encontrada en .env.local');
  console.error('\nPara configurarla:');
  console.error('1. Crea un archivo .env.local en la raíz del proyecto');
  console.error('2. Agrega: STRIPE_SECRET_KEY=sk_test_...');
  console.error('3. Consigue tu API key en: https://dashboard.stripe.com/apikeys\n');
  process.exit(1);
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

/**
 * Script para crear productos en modo TEST con los mismos Price IDs
 * SOLUCIÓN TEMPORAL mientras se actualizan las claves en Vercel a modo LIVE
 * Ejecutar con: node scripts/create-products-test-mode.js
 */

require('dotenv').config({ path: '.env.local' });
const Stripe = require('stripe');

// Productos según el código (mismos Price IDs)
const PRODUCTOS = {
  "lisboa-1-dia-lo-esencial": {
    name: "Guía Lisboa Express: Lo Mejor en 1 Día (Sin Perder Tiempo)",
    price: 1.99,
    description: "Itinerario completo paso a paso para ver lo esencial de Lisboa en un solo día. Incluye mapas interactivos, restaurantes locales auténticos, y todos los secretos para evitar las trampas turísticas."
  },
  "lisboa-2-dias-completo": {
    name: "Guía Lisboa Fin de Semana: 2 Días Perfectos (La Más Vendida)",
    price: 2.99,
    description: "La guía más completa para un fin de semana perfecto en Lisboa. Dos días cuidadosamente planificados con los mejores miradores, restaurantes locales, y experiencias auténticas que no encontrarás en guías turísticas tradicionales."
  },
  "lisboa-3-dias-premium": {
    name: "Guía Lisboa + Sintra: 3 Días de Experiencia Completa",
    price: 3.99,
    description: "Tres días completos explorando Lisboa y Sintra. Incluye todos los secretos para visitar Sintra sin multitudes, los mejores restaurantes de ambas ciudades, y itinerarios detallados día a día."
  },
  "lisboa-full-week": {
    name: "Guía Lisboa 7 Días: Semana Completa + Alrededores (Sintra, Cascais, Óbidos)",
    price: 5.99,
    description: "La guía más completa para una semana completa en Lisboa y alrededores. Incluye itinerarios para Sintra, Cascais, Óbidos, y todos los secretos locales que necesitas para vivir Lisboa como un lisboeta."
  },
  "lisboa-romantica": {
    name: "Guía Lisboa Romántica: Para Parejas y Lunas de Miel (Incluye Spots para Propuestas)",
    price: 2.99,
    description: "Guía especializada para parejas. Incluye los mejores miradores para atardeceres, restaurantes románticos, paseos especiales, y spots perfectos para propuestas de matrimonio."
  },
  "lisboa-familiar": {
    name: "Guía Lisboa Familiar: Perfecta para Viajar con Niños (Sin Estrés, Todo Planificado)",
    price: 2.99,
    description: "Guía diseñada específicamente para familias con niños. Incluye actividades aptas para todas las edades, restaurantes familiares, y consejos para hacer de tu viaje una experiencia sin estrés."
  },
  "lisboa-fotografia": {
    name: "Guía Lisboa Instagram: 50+ Spots para Fotos Perfectas (Fotógrafos e Influencers)",
    price: 2.99,
    description: "Guía especializada para fotógrafos e influencers. Incluye más de 50 spots fotográficos con las mejores horas del día para cada uno, secretos de composición, y ubicaciones exactas."
  }
};

async function createProductsInTestMode() {
  console.log('🔧 CREANDO PRODUCTOS EN MODO TEST');
  console.log('='.repeat(70));
  console.log('');
  console.log('⚠️  NOTA: Esta es una solución temporal.');
  console.log('   La solución correcta es actualizar Vercel a modo LIVE.');
  console.log('');

  // Verificar que tenemos claves de TEST
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error('❌ ERROR: STRIPE_SECRET_KEY no configurada');
    process.exit(1);
  }

  // Crear cliente Stripe con claves de TEST
  // Necesitamos claves de TEST aquí
  console.log('⚠️  IMPORTANTE: Este script necesita claves de TEST.');
  console.log('   Si quieres usar modo LIVE, actualiza las variables en Vercel.');
  console.log('');
  console.log('Para crear en modo TEST:');
  console.log('1. Ve a https://dashboard.stripe.com/');
  console.log('2. Cambia a modo TEST (toggle arriba)');
  console.log('3. Ve a Developers → API keys');
  console.log('4. Copia las claves TEST');
  console.log('5. Actualiza .env.local con claves TEST');
  console.log('6. Ejecuta este script nuevamente');
  console.log('');
  
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-12-15.clover',
  });

  const stripeMode = process.env.STRIPE_SECRET_KEY?.startsWith('sk_live_') ? 'LIVE' : 'TEST';
  
  if (stripeMode === 'LIVE') {
    console.error('❌ ERROR: Estás usando claves LIVE pero intentas crear en TEST');
    console.error('   Para crear productos en modo TEST, necesitas claves de TEST');
    console.error('');
    console.error('💡 SOLUCIÓN CORRECTA:');
    console.error('   En lugar de crear productos en TEST, actualiza Vercel a modo LIVE:');
    console.error('   1. Ve a Vercel → Settings → Environment Variables');
    console.error('   2. Actualiza STRIPE_SECRET_KEY y NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY');
    console.error('   3. Usa claves que empiecen con sk_live_ y pk_live_');
    console.error('   4. Haz un nuevo deploy');
    process.exit(1);
  }

  console.log(`✅ Modo detectado: ${stripeMode}`);
  console.log('');

  // Intentar crear productos con los Price IDs del código
  const priceIdsFromCode = [
    "price_1SrROYJglPw4zh36iR17AIYz",
    "price_1SrROZJglPw4zh36UyYmizEN",
    "price_1SrROaJglPw4zh36Duif1EGb",
    "price_1SrRObJglPw4zh363xyTNsx9",
    "price_1SrRObJglPw4zh36HNrZTa8y",
    "price_1SrROcJglPw4zh36gHqlXI4c",
    "price_1SrROdJglPw4zh36n2PXXbwL"
  ];

  console.log('⚠️  Los Price IDs del código son de modo LIVE.');
  console.log('   En modo TEST, Stripe creará Price IDs diferentes.');
  console.log('');
  console.log('🔄 Creando productos nuevos en modo TEST...');
  console.log('');

  const createdProducts = [];

  for (const [productId, producto] of Object.entries(PRODUCTOS)) {
    try {
      console.log(`📦 Creando: ${producto.name}`);
      
      // Crear producto
      const stripeProduct = await stripe.products.create({
        name: producto.name,
        description: producto.description,
        active: true,
        metadata: {
          product_id: productId,
          source: 'automated_test_mode'
        }
      });

      // Crear precio
      const price = await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: Math.round(producto.price * 100),
        currency: 'eur',
        metadata: {
          product_id: productId
        }
      });

      createdProducts.push({
        productId,
        stripeProductId: stripeProduct.id,
        priceId: price.id,
        name: producto.name,
        price: producto.price
      });

      console.log(`   ✅ Creado - Product ID: ${stripeProduct.id}`);
      console.log(`   ✅ Price ID: ${price.id}`);
      console.log('');

    } catch (error) {
      console.error(`   ❌ Error: ${error.message}`);
      console.log('');
    }
  }

  if (createdProducts.length > 0) {
    console.log('='.repeat(70));
    console.log('📝 NUEVOS PRICE IDs EN MODO TEST:');
    console.log('='.repeat(70));
    console.log('');
    console.log('⚠️  IMPORTANTE: Estos Price IDs son DIFERENTES a los de modo LIVE.');
    console.log('   Si quieres usar estos, debes actualizar src/lib/stripe-products.ts');
    console.log('');
    console.log('export const STRIPE_PRODUCTS = {');
    createdProducts.forEach(p => {
      console.log(`  "${p.productId}": {`);
      console.log(`    priceId: "${p.priceId}",`);
      console.log(`    name: "${p.name}",`);
      console.log(`    price: ${p.price},`);
      console.log(`  },`);
    });
    console.log('} as const;');
    console.log('');
    console.log('💡 PERO LA MEJOR SOLUCIÓN ES:');
    console.log('   1. Actualizar Vercel a modo LIVE (claves sk_live_ y pk_live_)');
    console.log('   2. Usar los Price IDs que ya creamos en modo LIVE');
    console.log('');
  }
}

createProductsInTestMode().catch((error) => {
  console.error('❌ Error fatal:', error);
  process.exit(1);
});

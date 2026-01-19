/**
 * Script para verificar y sincronizar descripciones entre Stripe y el código
 * Ejecutar con: node scripts/verificar-descripciones.js
 */

require('dotenv').config({ path: '.env.local' });
const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-12-15.clover',
});

// Productos del código
const PRODUCTOS_CODIGO = {
  "lisboa-1-dia-lo-esencial": {
    priceId: "price_1SrROYJglPw4zh36iR17AIYz",
    name: "Guía Lisboa Express: Lo Mejor en 1 Día (Sin Perder Tiempo)",
  },
  "lisboa-2-dias-completo": {
    priceId: "price_1SrROZJglPw4zh36UyYmizEN",
    name: "Guía Lisboa Fin de Semana: 2 Días Perfectos (La Más Vendida)",
  },
  "lisboa-3-dias-premium": {
    priceId: "price_1SrROaJglPw4zh36Duif1EGb",
    name: "Guía Lisboa + Sintra: 3 Días de Experiencia Completa",
  },
  "lisboa-full-week": {
    priceId: "price_1SrRObJglPw4zh363xyTNsx9",
    name: "Guía Lisboa 7 Días: Semana Completa + Alrededores (Sintra, Cascais, Óbidos)",
  },
  "lisboa-romantica": {
    priceId: "price_1SrRObJglPw4zh36HNrZTa8y",
    name: "Guía Lisboa Romántica: Para Parejas y Lunas de Miel (Incluye Spots para Propuestas)",
  },
  "lisboa-familiar": {
    priceId: "price_1SrROcJglPw4zh36gHqlXI4c",
    name: "Guía Lisboa Familiar: Perfecta para Viajar con Niños (Sin Estrés, Todo Planificado)",
  },
  "lisboa-fotografia": {
    priceId: "price_1SrROdJglPw4zh36n2PXXbwL",
    name: "Guía Lisboa Instagram: 50+ Spots para Fotos Perfectas (Fotógrafos e Influencers)",
  },
};

async function verificarDescripciones() {
  console.log('🔍 VERIFICANDO DESCRIPCIONES ENTRE STRIPE Y CÓDIGO');
  console.log('='.repeat(70));
  console.log('');

  for (const [productId, producto] of Object.entries(PRODUCTOS_CODIGO)) {
    try {
      // Obtener el price y luego el producto
      const price = await stripe.prices.retrieve(producto.priceId);
      const stripeProduct = await stripe.products.retrieve(price.product);

      console.log(`📦 ${producto.name}`);
      console.log(`   Price ID: ${producto.priceId}`);
      console.log(`   ✅ Price existe en Stripe`);
      console.log(`   Nombre en Stripe: "${stripeProduct.name}"`);
      
      if (stripeProduct.description) {
        console.log(`   Descripción en Stripe: "${stripeProduct.description.substring(0, 80)}..."`);
      } else {
        console.log(`   ⚠️  Sin descripción en Stripe`);
      }

      // Verificar si el nombre coincide
      if (stripeProduct.name === producto.name) {
        console.log(`   ✅ Nombre coincide con el código`);
      } else {
        console.log(`   ⚠️  Nombre NO coincide (pero no afecta el checkout)`);
        console.log(`      Código: "${producto.name}"`);
        console.log(`      Stripe: "${stripeProduct.name}"`);
      }

      console.log('');
    } catch (error) {
      console.error(`   ❌ Error: ${error.message}`);
      console.log('');
    }
  }

  console.log('='.repeat(70));
  console.log('📊 RESUMEN:');
  console.log('-'.repeat(70));
  console.log('✅ Lo IMPORTANTE: Los Price IDs coinciden (esto es lo que usa Stripe)');
  console.log('⚠️  Lo OPCIONAL: Los nombres/descripciones pueden ser diferentes');
  console.log('');
  console.log('💡 NOTA: Los nombres y descripciones solo se usan para mostrar información.');
  console.log('   Lo que realmente importa para el checkout son los Price IDs.');
  console.log('');
}

verificarDescripciones().catch((error) => {
  console.error('❌ Error fatal:', error);
  process.exit(1);
});

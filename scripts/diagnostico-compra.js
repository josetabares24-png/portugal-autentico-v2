/**
 * Script de diagnóstico completo para el sistema de compra
 * Verifica todos los componentes del flujo de compra
 */

require('dotenv').config({ path: '.env.local' });
const Stripe = require('stripe');

console.log('🔍 DIAGNÓSTICO COMPLETO DEL SISTEMA DE COMPRA\n');
console.log('='.repeat(70));

// 1. Verificar variables de entorno
console.log('\n1️⃣ VERIFICANDO VARIABLES DE ENTORNO\n');
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

if (!stripeSecretKey) {
  console.error('❌ STRIPE_SECRET_KEY no encontrada en .env.local');
} else {
  const isLive = stripeSecretKey.startsWith('sk_live_');
  const mode = isLive ? 'LIVE (PRODUCCIÓN)' : 'TEST';
  console.log(`✅ STRIPE_SECRET_KEY encontrada (Modo: ${mode})`);
  console.log(`   Prefijo: ${stripeSecretKey.substring(0, 12)}...`);
}

if (!stripePublishableKey) {
  console.error('❌ NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY no encontrada');
} else {
  const isLive = stripePublishableKey.startsWith('pk_live_');
  const mode = isLive ? 'LIVE' : 'TEST';
  console.log(`✅ NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY encontrada (Modo: ${mode})`);
  console.log(`   Prefijo: ${stripePublishableKey.substring(0, 12)}...`);
}

if (!siteUrl) {
  console.error('❌ NEXT_PUBLIC_SITE_URL no encontrada');
} else {
  console.log(`✅ NEXT_PUBLIC_SITE_URL: ${siteUrl}`);
}

// 2. Verificar productos en código
console.log('\n2️⃣ VERIFICANDO PRODUCTOS EN CÓDIGO\n');
const STRIPE_PRODUCTS = {
  "lisboa-1-dia-lo-esencial": {
    priceId: "price_1SrQdzJglPw4zh36crmeVMh8",
    name: "Guía Lisboa Express: Lo Mejor en 1 Día (Sin Perder Tiempo)",
    price: 1.99,
  },
  "lisboa-2-dias-completo": {
    priceId: "price_1SrQdzJglPw4zh36k0f3ry7E",
    name: "Guía Lisboa Fin de Semana: 2 Días Perfectos (La Más Vendida)",
    price: 2.99,
  },
  "lisboa-3-dias-premium": {
    priceId: "price_1SrQe0JglPw4zh36sSQFZuPM",
    name: "Guía Lisboa + Sintra: 3 Días de Experiencia Completa",
    price: 3.99,
  },
  "lisboa-full-week": {
    priceId: "price_1SrQe0JglPw4zh36X9fEZreG",
    name: "Guía Lisboa 7 Días: Semana Completa + Alrededores (Sintra, Cascais, Óbidos)",
    price: 5.99,
  },
  "lisboa-romantica": {
    priceId: "price_1SrQe1JglPw4zh36n3T893Ce",
    name: "Guía Lisboa Romántica: Para Parejas y Lunas de Miel (Incluye Spots para Propuestas)",
    price: 2.99,
  },
  "lisboa-familiar": {
    priceId: "price_1SrQe2JglPw4zh361zLoS8HK",
    name: "Guía Lisboa Familiar: Perfecta para Viajar con Niños (Sin Estrés, Todo Planificado)",
    price: 2.99,
  },
  "lisboa-fotografia": {
    priceId: "price_1SrQe2JglPw4zh36lWx5sCvp",
    name: "Guía Lisboa Instagram: 50+ Spots para Fotos Perfectas (Fotógrafos e Influencers)",
    price: 2.99,
  },
};

console.log(`✅ Productos en código: ${Object.keys(STRIPE_PRODUCTS).length}`);
Object.entries(STRIPE_PRODUCTS).forEach(([id, product]) => {
  console.log(`   - ${id}: ${product.priceId}`);
});

// 3. Verificar productos en Stripe
if (!stripeSecretKey) {
  console.log('\n⚠️  No se puede verificar Stripe sin STRIPE_SECRET_KEY');
  process.exit(1);
}

console.log('\n3️⃣ VERIFICANDO PRODUCTOS EN STRIPE\n');
const stripe = new Stripe(stripeSecretKey);
const isLive = stripeSecretKey.startsWith('sk_live_');
const mode = isLive ? 'LIVE' : 'TEST';

console.log(`Modo Stripe: ${mode}\n`);

async function verificarStripe() {
  try {
    // Verificar cada Price ID
    const resultados = [];
    
    for (const [productId, product] of Object.entries(STRIPE_PRODUCTS)) {
      try {
        const price = await stripe.prices.retrieve(product.priceId);
        const stripeProduct = price.product ? await stripe.products.retrieve(price.product) : null;
        
        resultados.push({
          productId,
          priceId: product.priceId,
          existe: true,
          activo: price.active,
          nombre: stripeProduct?.name || 'N/A',
          precio: price.unit_amount ? (price.unit_amount / 100) : 'N/A',
          moneda: price.currency || 'N/A'
        });
      } catch (err) {
        resultados.push({
          productId,
          priceId: product.priceId,
          existe: false,
          error: err.message
        });
      }
    }
    
    // Mostrar resultados
    let todosExisten = true;
    resultados.forEach(result => {
      if (result.existe && result.activo) {
        console.log(`✅ ${result.productId}`);
        console.log(`   Price ID: ${result.priceId}`);
        console.log(`   Nombre: ${result.nombre}`);
        console.log(`   Precio: ${result.precio} ${result.moneda}`);
        console.log('');
      } else if (result.existe && !result.activo) {
        console.log(`⚠️  ${result.productId}`);
        console.log(`   Price ID: ${result.priceId} (INACTIVO)`);
        console.log('');
        todosExisten = false;
      } else {
        console.log(`❌ ${result.productId}`);
        console.log(`   Price ID: ${result.priceId} NO EXISTE`);
        console.log(`   Error: ${result.error}`);
        console.log('');
        todosExisten = false;
      }
    });
    
    // Resumen
    console.log('\n' + '='.repeat(70));
    if (todosExisten) {
      console.log('✅ TODOS LOS PRODUCTOS EXISTEN EN STRIPE');
    } else {
      console.log('❌ ALGUNOS PRODUCTOS NO EXISTEN O ESTÁN INACTIVOS');
      console.log('\n⚠️  ACCIÓN REQUERIDA:');
      console.log('   1. Ejecuta: node scripts/setup-stripe-products.js');
      console.log('   2. Esto creará/actualizará los productos en Stripe');
      console.log('   3. Luego actualiza src/lib/stripe-products.ts con los nuevos Price IDs');
    }
    
    // Verificar que el modo coincida
    const productosEnStripe = await stripe.products.list({ limit: 100 });
    const productosActivos = productosEnStripe.data.filter(p => p.active);
    
    console.log(`\n📊 RESUMEN:`);
    console.log(`   - Productos en código: ${Object.keys(STRIPE_PRODUCTS).length}`);
    console.log(`   - Productos activos en Stripe (${mode}): ${productosActivos.length}`);
    console.log(`   - Price IDs verificados: ${resultados.filter(r => r.existe && r.activo).length}/${resultados.length}`);
    
  } catch (error) {
    console.error('\n❌ Error al verificar Stripe:', error.message);
    if (error.type === 'StripeAuthenticationError') {
      console.error('\n⚠️  La clave de Stripe no es válida o está mal configurada.');
    }
  }
}

verificarStripe()
  .then(() => {
    console.log('\n✅ Diagnóstico completado');
    process.exit(0);
  })
  .catch(error => {
    console.error('\n❌ Error fatal:', error.message);
    process.exit(1);
  });

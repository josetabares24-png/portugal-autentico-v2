/**
 * Script para configurar productos de Stripe correctamente
 * - Elimina productos antiguos si existen
 * - Crea productos nuevos con los nombres correctos del código
 * - Genera código actualizado para stripe-products.ts
 */

require('dotenv').config({ path: '.env.local' });
const Stripe = require('stripe');

if (!process.env.STRIPE_SECRET_KEY) {
  console.error('❌ Error: STRIPE_SECRET_KEY no encontrada en .env.local');
  process.exit(1);
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const isLive = process.env.STRIPE_SECRET_KEY.startsWith('sk_live_');
const mode = isLive ? 'PRODUCCIÓN (LIVE)' : 'TEST';

console.log('🚀 Configurando productos de Stripe...\n');
console.log(`Modo: ${mode}\n`);

// Productos con los nombres exactos del código
const productsToCreate = [
  {
    productId: 'lisboa-1-dia-lo-esencial',
    name: 'Guía Lisboa Express: Lo Mejor en 1 Día (Sin Perder Tiempo)',
    description: 'Perfecta si tienes escala, poco tiempo o es tu primera vez. Itinerario optimizado para ver lo esencial sin perder ni un minuto.',
    price: 1.99,
    currency: 'eur'
  },
  {
    productId: 'lisboa-2-dias-completo',
    name: 'Guía Lisboa Fin de Semana: 2 Días Perfectos (La Más Vendida)',
    description: 'El favorito. Fin de semana perfecto con Belém, Alfama y los barrios con encanto.',
    price: 2.99,
    currency: 'eur'
  },
  {
    productId: 'lisboa-3-dias-premium',
    name: 'Guía Lisboa + Sintra: 3 Días de Experiencia Completa',
    description: 'La experiencia completa. Lisboa, Sintra, Cascais y Cabo da Roca.',
    price: 3.99,
    currency: 'eur'
  },
  {
    productId: 'lisboa-full-week',
    name: 'Guía Lisboa 7 Días: Semana Completa + Alrededores (Sintra, Cascais, Óbidos)',
    description: 'Una semana completa: Lisboa, Sintra, Cascais, Setúbal y Arrábida.',
    price: 5.99,
    currency: 'eur'
  },
  {
    productId: 'lisboa-romantica',
    name: 'Guía Lisboa Romántica: Para Parejas y Lunas de Miel (Incluye Spots para Propuestas)',
    description: 'Miradores al atardecer, cenas románticas y experiencias para parejas.',
    price: 2.99,
    currency: 'eur'
  },
  {
    productId: 'lisboa-familiar',
    name: 'Guía Lisboa Familiar: Perfecta para Viajar con Niños (Sin Estrés, Todo Planificado)',
    description: 'Actividades para niños, ritmo relajado y restaurantes kid-friendly.',
    price: 2.99,
    currency: 'eur'
  },
  {
    productId: 'lisboa-fotografia',
    name: 'Guía Lisboa Instagram: 50+ Spots para Fotos Perfectas (Fotógrafos e Influencers)',
    description: '12 spots fotográficos, horarios de luz perfecta y settings de cámara.',
    price: 2.99,
    currency: 'eur'
  }
];

async function setupProducts() {
  try {
    // 1. Listar productos existentes
    console.log('📋 Paso 1: Verificando productos existentes...\n');
    const existingProducts = await stripe.products.list({ limit: 100 });
    
    // 2. Archivar/eliminar productos antiguos que coincidan con nuestros productIds
    console.log('🗑️  Paso 2: Eliminando productos antiguos...\n');
    const productIdsToCheck = productsToCreate.map(p => p.productId);
    
    for (const product of existingProducts.data) {
      const metadataProductId = product.metadata?.product_id;
      if (metadataProductId && productIdsToCheck.includes(metadataProductId)) {
        try {
          console.log(`   ⚠️  Archivar producto antiguo: ${product.name} (${product.id})`);
          // Archivar en lugar de eliminar (más seguro)
          await stripe.products.update(product.id, { active: false });
        } catch (err) {
          console.log(`   ⚠️  No se pudo archivar ${product.name}: ${err.message}`);
        }
      }
    }

    // 3. Crear productos nuevos
    console.log('\n✨ Paso 3: Creando productos nuevos...\n');
    const createdProducts = [];

    for (const product of productsToCreate) {
      try {
        console.log(`📦 Creando: ${product.name}...`);
        
        // Crear producto en Stripe
        const stripeProduct = await stripe.products.create({
          name: product.name,
          description: product.description,
          metadata: {
            product_id: product.productId,
            guide_type: product.productId.includes('romantica') || 
                       product.productId.includes('familiar') || 
                       product.productId.includes('fotografia') ? 'themed' : 'itinerary',
          }
        });

        // Crear precio
        const price = await stripe.prices.create({
          product: stripeProduct.id,
          unit_amount: Math.round(product.price * 100), // Convertir a centavos
          currency: product.currency,
        });

        createdProducts.push({
          productId: product.productId,
          name: product.name,
          priceId: price.id,
          price: product.price,
          stripeProductId: stripeProduct.id
        });

        console.log(`   ✅ Creado - Price ID: ${price.id}\n`);

      } catch (error) {
        console.error(`   ❌ Error creando ${product.name}: ${error.message}\n`);
      }
    }

    // 4. Mostrar código actualizado
    console.log('\n' + '='.repeat(70));
    console.log('📝 CÓDIGO ACTUALIZADO PARA src/lib/stripe-products.ts');
    console.log('='.repeat(70) + '\n');
    
    console.log('export const STRIPE_PRODUCTS = {');
    createdProducts.forEach(product => {
      console.log(`  "${product.productId}": {`);
      console.log(`    priceId: "${product.priceId}",`);
      console.log(`    name: "${product.name}",`);
      console.log(`    price: ${product.price},`);
      console.log(`  },`);
    });
    console.log('} as const;');
    console.log('\n' + '='.repeat(70) + '\n');

    // 5. Resumen
    console.log('📊 RESUMEN:\n');
    console.log(`✅ Productos creados: ${createdProducts.length}/${productsToCreate.length}`);
    
    if (createdProducts.length === productsToCreate.length) {
      console.log('\n✅ ¡Todo listo! Los productos están creados en Stripe.');
      console.log(`\n⚠️  IMPORTANTE: Actualiza src/lib/stripe-products.ts con el código mostrado arriba.`);
    } else {
      console.log('\n⚠️  Algunos productos no se pudieron crear. Revisa los errores arriba.');
    }

  } catch (error) {
    console.error('\n❌ Error fatal:', error.message);
    process.exit(1);
  }
}

setupProducts()
  .then(() => {
    console.log('\n✅ Proceso completado!');
    process.exit(0);
  })
  .catch(error => {
    console.error('\n❌ Error fatal:', error.message);
    process.exit(1);
  });

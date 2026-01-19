/**
 * Script para listar productos existentes en Stripe
 */

require('dotenv').config({ path: '.env.local' });
const Stripe = require('stripe');

if (!process.env.STRIPE_SECRET_KEY) {
  console.error('❌ Error: STRIPE_SECRET_KEY no encontrada en .env.local');
  process.exit(1);
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function listProducts() {
  console.log('🔍 Buscando productos en Stripe...\n');
  console.log(`Modo: ${process.env.STRIPE_SECRET_KEY.startsWith('sk_live_') ? 'PRODUCCIÓN' : 'TEST'}\n`);

  try {
    const products = await stripe.products.list({
      limit: 100,
      active: true,
    });

    if (products.data.length === 0) {
      console.log('❌ No se encontraron productos activos.\n');
      console.log('💡 Verifica:');
      console.log('   1. Que estés en el modo correcto (Test vs Live)');
      console.log('   2. Que la clave de API sea de la cuenta correcta');
      console.log('   3. Que los productos no estén archivados\n');
    } else {
      console.log(`✅ Encontrados ${products.data.length} productos:\n`);
      
      for (const product of products.data) {
        const prices = await stripe.prices.list({
          product: product.id,
          limit: 1,
        });
        
        const price = prices.data[0];
        const amount = price ? (price.unit_amount / 100).toFixed(2) : 'N/A';
        const currency = price ? price.currency.toUpperCase() : '';
        
        console.log(`📦 ${product.name}`);
        console.log(`   ID: ${product.id}`);
        console.log(`   Price ID: ${price ? price.id : 'Sin precio'}`);
        console.log(`   Precio: ${amount} ${currency}`);
        console.log(`   Activo: ${product.active ? 'Sí' : 'No'}`);
        console.log(`   Metadata: ${JSON.stringify(product.metadata)}`);
        console.log('');
      }
    }

    // También listar productos archivados
    const archivedProducts = await stripe.products.list({
      limit: 100,
      active: false,
    });

    if (archivedProducts.data.length > 0) {
      console.log(`\n📦 Productos archivados: ${archivedProducts.data.length}\n`);
    }

  } catch (error) {
    console.error('❌ Error al listar productos:', error.message);
    if (error.type === 'StripeAuthenticationError') {
      console.error('\n💡 La clave de API no es válida o no tiene permisos.');
    }
  }
}

listProducts()
  .then(() => {
    console.log('✅ Proceso completado!');
    process.exit(0);
  })
  .catch(error => {
    console.error('❌ Error fatal:', error.message);
    process.exit(1);
  });

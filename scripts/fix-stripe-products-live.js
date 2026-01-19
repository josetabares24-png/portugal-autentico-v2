/**
 * Script para sincronizar productos de Stripe con el código
 * Elimina todos los productos LIVE y crea los correctos según el código
 * Ejecutar con: node scripts/fix-stripe-products-live.js
 */

require('dotenv').config({ path: '.env.local' });
const Stripe = require('stripe');

// Productos según el código
const PRODUCTOS_CODIGO = {
  "lisboa-1-dia-lo-esencial": {
    priceId: "price_1SrQdzJglPw4zh36crmeVMh8",
    name: "Guía Lisboa Express: Lo Mejor en 1 Día (Sin Perder Tiempo)",
    price: 1.99,
    description: "Itinerario completo paso a paso para ver lo esencial de Lisboa en un solo día. Incluye mapas interactivos, restaurantes locales auténticos, y todos los secretos para evitar las trampas turísticas."
  },
  "lisboa-2-dias-completo": {
    priceId: "price_1SrQdzJglPw4zh36k0f3ry7E",
    name: "Guía Lisboa Fin de Semana: 2 Días Perfectos (La Más Vendida)",
    price: 2.99,
    description: "La guía más completa para un fin de semana perfecto en Lisboa. Dos días cuidadosamente planificados con los mejores miradores, restaurantes locales, y experiencias auténticas que no encontrarás en guías turísticas tradicionales."
  },
  "lisboa-3-dias-premium": {
    priceId: "price_1SrQe0JglPw4zh36sSQFZuPM",
    name: "Guía Lisboa + Sintra: 3 Días de Experiencia Completa",
    price: 3.99,
    description: "Tres días completos explorando Lisboa y Sintra. Incluye todos los secretos para visitar Sintra sin multitudes, los mejores restaurantes de ambas ciudades, y itinerarios detallados día a día."
  },
  "lisboa-full-week": {
    priceId: "price_1SrQe0JglPw4zh36X9fEZreG",
    name: "Guía Lisboa 7 Días: Semana Completa + Alrededores (Sintra, Cascais, Óbidos)",
    price: 5.99,
    description: "La guía más completa para una semana completa en Lisboa y alrededores. Incluye itinerarios para Sintra, Cascais, Óbidos, y todos los secretos locales que necesitas para vivir Lisboa como un lisboeta."
  },
  "lisboa-romantica": {
    priceId: "price_1SrQe1JglPw4zh36n3T893Ce",
    name: "Guía Lisboa Romántica: Para Parejas y Lunas de Miel (Incluye Spots para Propuestas)",
    price: 2.99,
    description: "Guía especializada para parejas. Incluye los mejores miradores para atardeceres, restaurantes románticos, paseos especiales, y spots perfectos para propuestas de matrimonio."
  },
  "lisboa-familiar": {
    priceId: "price_1SrQe2JglPw4zh361zLoS8HK",
    name: "Guía Lisboa Familiar: Perfecta para Viajar con Niños (Sin Estrés, Todo Planificado)",
    price: 2.99,
    description: "Guía diseñada específicamente para familias con niños. Incluye actividades aptas para todas las edades, restaurantes familiares, y consejos para hacer de tu viaje una experiencia sin estrés."
  },
  "lisboa-fotografia": {
    priceId: "price_1SrQe2JglPw4zh36lWx5sCvp",
    name: "Guía Lisboa Instagram: 50+ Spots para Fotos Perfectas (Fotógrafos e Influencers)",
    price: 2.99,
    description: "Guía especializada para fotógrafos e influencers. Incluye más de 50 spots fotográficos con las mejores horas del día para cada uno, secretos de composición, y ubicaciones exactas."
  }
};

async function fixStripeProducts() {
  console.log('🔧 SINCRONIZANDO PRODUCTOS DE STRIPE CON EL CÓDIGO');
  console.log('='.repeat(70));
  console.log('');

  // Verificar variables de entorno
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error('❌ ERROR: STRIPE_SECRET_KEY no configurada en .env.local');
    process.exit(1);
  }

  const stripeMode = process.env.STRIPE_SECRET_KEY.startsWith('sk_live_') ? 'LIVE' : 'TEST';
  
  if (stripeMode !== 'LIVE') {
    console.error('❌ ERROR: Debes usar claves de Stripe en modo LIVE (sk_live_...)');
    console.error('   Actualmente estás usando modo:', stripeMode);
    process.exit(1);
  }

  console.log(`✅ Modo detectado: ${stripeMode}`);
  console.log('');

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-12-15.clover',
  });

  // 1. Listar todos los productos activos
  console.log('1️⃣ Listando productos existentes en Stripe...');
  console.log('-'.repeat(70));
  
  const allProducts = [];
  let hasMore = true;
  let startingAfter = null;

  while (hasMore) {
    const params = { limit: 100, active: true };
    if (startingAfter) {
      params.starting_after = startingAfter;
    }

    const response = await stripe.products.list(params);
    allProducts.push(...response.data);
    
    hasMore = response.has_more;
    if (hasMore && response.data.length > 0) {
      startingAfter = response.data[response.data.length - 1].id;
    }
  }

  console.log(`📦 Encontrados ${allProducts.length} productos activos en Stripe`);
  console.log('');

  // 2. Archivar todos los productos existentes
  console.log('2️⃣ Archivaldo productos existentes...');
  console.log('-'.repeat(70));

  for (const product of allProducts) {
    try {
      await stripe.products.update(product.id, { active: false });
      console.log(`   ✅ Archivado: ${product.name} (${product.id})`);
    } catch (error) {
      console.error(`   ❌ Error al archivar ${product.name}:`, error.message);
    }
  }

  console.log('');
  console.log(`✅ ${allProducts.length} productos archivados`);
  console.log('');

  // 3. Crear los productos nuevos según el código
  console.log('3️⃣ Creando productos nuevos según el código...');
  console.log('-'.repeat(70));

  const nuevosProductos = [];

  for (const [productId, producto] of Object.entries(PRODUCTOS_CODIGO)) {
    try {
      // Crear el producto
      const stripeProduct = await stripe.products.create({
        name: producto.name,
        description: producto.description,
        active: true,
        metadata: {
          product_id: productId,
          source: 'automated_sync'
        }
      });

      console.log(`   ✅ Producto creado: ${producto.name}`);
      console.log(`      Product ID: ${stripeProduct.id}`);

      // Verificar si el Price ID existe
      try {
        const existingPrice = await stripe.prices.retrieve(producto.priceId);
        
        if (existingPrice.product === stripeProduct.id) {
          console.log(`      ✅ Price ID ya existe y está correcto: ${producto.priceId}`);
          nuevosProductos.push({
            productId,
            stripeProductId: stripeProduct.id,
            priceId: producto.priceId,
            name: producto.name,
            price: producto.price
          });
        } else {
          // El price existe pero pertenece a otro producto, crear uno nuevo
          console.log(`      ⚠️  Price ID existe pero pertenece a otro producto`);
          const newPrice = await stripe.prices.create({
            product: stripeProduct.id,
            unit_amount: Math.round(producto.price * 100), // Convertir a centavos
            currency: 'eur',
            metadata: {
              product_id: productId
            }
          });
          console.log(`      ✅ Nuevo Price creado: ${newPrice.id}`);
          nuevosProductos.push({
            productId,
            stripeProductId: stripeProduct.id,
            priceId: newPrice.id,
            name: producto.name,
            price: producto.price
          });
        }
      } catch (priceError) {
        if (priceError.code === 'resource_missing') {
          // El price no existe, crear uno nuevo
          console.log(`      ⚠️  Price ID no existe: ${producto.priceId}`);
          const newPrice = await stripe.prices.create({
            product: stripeProduct.id,
            unit_amount: Math.round(producto.price * 100), // Convertir a centavos
            currency: 'eur',
            metadata: {
              product_id: productId
            }
          });
          console.log(`      ✅ Nuevo Price creado: ${newPrice.id}`);
          nuevosProductos.push({
            productId,
            stripeProductId: stripeProduct.id,
            priceId: newPrice.id,
            name: producto.name,
            price: producto.price
          });
        } else {
          throw priceError;
        }
      }

      console.log('');
    } catch (error) {
      console.error(`   ❌ Error al crear ${producto.name}:`, error.message);
      console.log('');
    }
  }

  // 4. Mostrar resumen y código actualizado
  console.log('='.repeat(70));
  console.log('📊 RESUMEN:');
  console.log('-'.repeat(70));
  console.log(`✅ Productos archivados: ${allProducts.length}`);
  console.log(`✅ Productos nuevos creados: ${nuevosProductos.length}`);
  console.log('');

  if (nuevosProductos.length > 0) {
    console.log('📝 CÓDIGO ACTUALIZADO PARA src/lib/stripe-products.ts:');
    console.log('-'.repeat(70));
    console.log('export const STRIPE_PRODUCTS = {');
    
    for (const producto of nuevosProductos) {
      console.log(`  "${producto.productId}": {`);
      console.log(`    priceId: "${producto.priceId}",`);
      console.log(`    name: "${producto.name}",`);
      console.log(`    price: ${producto.price},`);
      console.log(`  },`);
    }
    
    console.log('} as const;');
    console.log('');
    console.log('export type ProductId = keyof typeof STRIPE_PRODUCTS;');
    console.log('');
  }

  // 5. Actualizar el archivo automáticamente
  const fs = require('fs');
  const path = require('path');
  const productsPath = path.join(__dirname, '../src/lib/stripe-products.ts');
  
  let newContent = 'export const STRIPE_PRODUCTS = {\n';
  
  for (const producto of nuevosProductos) {
    newContent += `  "${producto.productId}": {\n`;
    newContent += `    priceId: "${producto.priceId}",\n`;
    newContent += `    name: "${producto.name}",\n`;
    newContent += `    price: ${producto.price},\n`;
    newContent += `  },\n`;
  }
  
  newContent += '} as const;\n\n';
  newContent += 'export type ProductId = keyof typeof STRIPE_PRODUCTS;\n';

  try {
    fs.writeFileSync(productsPath, newContent, 'utf8');
    console.log('✅ Archivo src/lib/stripe-products.ts actualizado automáticamente');
    console.log('');
  } catch (error) {
    console.error('⚠️  No se pudo actualizar el archivo automáticamente:', error.message);
    console.log('   Por favor, copia el código de arriba manualmente');
    console.log('');
  }

  console.log('✅ ¡PROCESO COMPLETADO!');
  console.log('');
  console.log('📋 PRÓXIMOS PASOS:');
  console.log('   1. Verifica que todo esté correcto en Stripe Dashboard');
  console.log('   2. Haz un nuevo deploy en Vercel');
  console.log('   3. Prueba hacer una compra');
  console.log('');
}

fixStripeProducts().catch((error) => {
  console.error('❌ Error fatal:', error);
  process.exit(1);
});

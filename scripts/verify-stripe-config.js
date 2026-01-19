/**
 * Script de verificación completa de configuración de Stripe
 * Verifica variables de entorno, conexión, productos y Price IDs
 * Ejecutar con: node scripts/verify-stripe-config.js
 */

require('dotenv').config({ path: '.env.local' });
const Stripe = require('stripe');
const fs = require('fs');
const path = require('path');

async function verifyStripeConfig() {
  console.log('🔍 VERIFICACIÓN COMPLETA DE STRIPE\n');
  console.log('='.repeat(60));

  // 1. Verificar variables de entorno
  console.log('\n1️⃣ VERIFICANDO VARIABLES DE ENTORNO:');
  console.log('-'.repeat(60));

  const requiredEnvVars = {
    'STRIPE_SECRET_KEY': process.env.STRIPE_SECRET_KEY,
    'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY': process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    'NEXT_PUBLIC_SITE_URL': process.env.NEXT_PUBLIC_SITE_URL,
  };

  let envErrors = false;
  let stripeMode = 'DESCONOCIDO';

  for (const [key, value] of Object.entries(requiredEnvVars)) {
    if (!value) {
      console.error(`❌ ${key}: NO CONFIGURADA`);
      envErrors = true;
    } else {
      if (key === 'STRIPE_SECRET_KEY') {
        if (value.startsWith('sk_live_')) {
          stripeMode = 'LIVE';
        } else if (value.startsWith('sk_test_')) {
          stripeMode = 'TEST';
        }
        const masked = `${value.substring(0, 12)}...${value.substring(value.length - 4)}`;
        console.log(`✅ ${key}: ${masked}`);
        console.log(`   📊 Modo detectado: ${stripeMode}`);
      } else if (key === 'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY') {
        const masked = `${value.substring(0, 12)}...${value.substring(value.length - 4)}`;
        const keyMode = value.startsWith('pk_live_') ? 'LIVE' : 
                       value.startsWith('pk_test_') ? 'TEST' : 'DESCONOCIDO';
        console.log(`✅ ${key}: ${masked}`);
        console.log(`   📊 Modo detectado: ${keyMode}`);
        
        if (keyMode !== stripeMode && stripeMode !== 'DESCONOCIDO') {
          console.error(`   ⚠️  ADVERTENCIA: Los modos no coinciden (Secret: ${stripeMode}, Publishable: ${keyMode})`);
        }
      } else {
        console.log(`✅ ${key}: ${value}`);
      }
    }
  }

  if (envErrors) {
    console.error('\n❌ ERROR: Faltan variables de entorno requeridas');
    console.log('\nPor favor, configura las variables en Vercel:');
    console.log('   - Settings → Environment Variables');
    console.log('   - Asegúrate de tener: STRIPE_SECRET_KEY, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, NEXT_PUBLIC_SITE_URL');
    process.exit(1);
  }

  // 2. Verificar conexión con Stripe
  console.log('\n2️⃣ VERIFICANDO CONEXIÓN CON STRIPE:');
  console.log('-'.repeat(60));

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-12-15.clover',
  });

  try {
    const account = await stripe.accounts.retrieve();
    console.log(`✅ Conexión exitosa con Stripe`);
    console.log(`   Account ID: ${account.id}`);
    console.log(`   País: ${account.country}`);
    console.log(`   Email: ${account.email || 'N/A'}`);
    console.log(`   Modo: ${stripeMode}`);
  } catch (error) {
    console.error(`❌ Error al conectar con Stripe: ${error.message}`);
    console.error(`   Tipo: ${error.type}`);
    if (error.code) {
      console.error(`   Código: ${error.code}`);
    }
    process.exit(1);
  }

  // 3. Leer productos desde el archivo TypeScript
  console.log('\n3️⃣ LEYENDO PRODUCTOS CONFIGURADOS:');
  console.log('-'.repeat(60));

  const productsPath = path.join(__dirname, '../src/lib/stripe-products.ts');
  let productsContent;
  try {
    productsContent = fs.readFileSync(productsPath, 'utf8');
  } catch (error) {
    console.error(`❌ No se pudo leer el archivo: ${productsPath}`);
    process.exit(1);
  }

  // Extraer Price IDs usando regex simple
  const priceIdRegex = /priceId:\s*"([^"]+)"/g;
  const products = [];
  let match;

  while ((match = priceIdRegex.exec(productsContent)) !== null) {
    const priceId = match[1];
    // Buscar el nombre del producto (línea anterior)
    const lines = productsContent.split('\n');
    const priceIdLineIndex = productsContent.substring(0, match.index).split('\n').length - 1;
    
    // Buscar el productId (la key del objeto)
    let productId = 'unknown';
    for (let i = priceIdLineIndex - 5; i >= 0; i--) {
      const line = lines[i];
      if (line.includes('"') && line.includes(':')) {
        const productIdMatch = line.match(/"([^"]+)":/);
        if (productIdMatch) {
          productId = productIdMatch[1];
          break;
        }
      }
    }
    
    // Buscar el nombre
    let name = 'Unknown';
    for (let i = priceIdLineIndex; i < Math.min(priceIdLineIndex + 5, lines.length); i++) {
      const line = lines[i];
      if (line.includes('name:')) {
        const nameMatch = line.match(/name:\s*"([^"]+)"/);
        if (nameMatch) {
          name = nameMatch[1];
          break;
        }
      }
    }
    
    products.push({ productId, priceId, name });
  }

  console.log(`📦 Productos encontrados en código: ${products.length}`);
  products.forEach((p, i) => {
    console.log(`   ${i + 1}. ${p.productId}`);
    console.log(`      Price ID: ${p.priceId}`);
    console.log(`      Nombre: ${p.name}`);
  });

  // 4. Verificar que los Price IDs existen en Stripe
  console.log('\n4️⃣ VERIFICANDO PRODUCTOS EN STRIPE:');
  console.log('-'.repeat(60));

  let productsOk = 0;
  let productsError = 0;
  const errors = [];

  for (const product of products) {
    console.log(`\n   📦 ${product.productId}`);
    console.log(`      Price ID: ${product.priceId}`);
    
    try {
      // Verificar que el price existe
      const price = await stripe.prices.retrieve(product.priceId);
      console.log(`      ✅ Price encontrado en Stripe (Modo: ${stripeMode})`);
      console.log(`         Monto: €${(price.unit_amount / 100).toFixed(2)} ${price.currency.toUpperCase()}`);
      console.log(`         Activo: ${price.active ? 'Sí' : 'No'}`);
      
      if (!price.active) {
        console.warn(`      ⚠️  ADVERTENCIA: El price está inactivo en Stripe`);
        errors.push(`Price ${product.priceId} está inactivo`);
        productsError++;
        continue;
      }
      
      // Verificar que el producto existe
      if (price.product) {
        const stripeProduct = await stripe.products.retrieve(price.product);
        console.log(`      ✅ Producto encontrado: "${stripeProduct.name}"`);
        console.log(`         Activo: ${stripeProduct.active ? 'Sí' : 'No'}`);
        
        if (!stripeProduct.active) {
          console.warn(`      ⚠️  ADVERTENCIA: El producto está inactivo en Stripe`);
          errors.push(`Producto ${price.product} está inactivo`);
          productsError++;
        } else {
          productsOk++;
        }
      } else {
        console.warn(`      ⚠️  El price no tiene un producto asociado`);
        errors.push(`Price ${product.priceId} no tiene producto asociado`);
        productsError++;
      }
    } catch (error) {
      console.error(`      ❌ ERROR: ${error.message}`);
      if (error.code === 'resource_missing') {
        console.error(`         El Price ID "${product.priceId}" NO EXISTE en Stripe (Modo: ${stripeMode})`);
        console.error(`         🔧 SOLUCIÓN:`);
        console.error(`            1. Verifica que estás en el modo correcto (${stripeMode}) en Stripe Dashboard`);
        console.error(`            2. Crea el producto en Stripe o actualiza el Price ID en el código`);
        errors.push(`Price ${product.priceId} no existe en Stripe (Modo: ${stripeMode})`);
      }
      productsError++;
    }
  }

  // 5. Resumen final
  console.log('\n' + '='.repeat(60));
  console.log('📊 RESUMEN FINAL:');
  console.log('-'.repeat(60));
  console.log(`✅ Productos OK: ${productsOk}`);
  console.log(`❌ Productos con errores: ${productsError}`);
  console.log(`📊 Modo Stripe: ${stripeMode}`);
  console.log(`🌐 Site URL: ${process.env.NEXT_PUBLIC_SITE_URL}`);

  if (productsError > 0) {
    console.log('\n❌ ACCIÓN REQUERIDA:');
    console.log('   Algunos productos no están configurados correctamente.\n');
    errors.forEach((err, i) => {
      console.log(`   ${i + 1}. ${err}`);
    });
    console.log('\n🔧 PASOS PARA SOLUCIONAR:');
    console.log(`   1. Ve a https://dashboard.stripe.com/ (Asegúrate de estar en modo ${stripeMode})`);
    console.log(`   2. Verifica que todos los productos existen y están activos`);
    console.log(`   3. Si faltan productos, ejecuta: node scripts/setup-stripe-products.js`);
    console.log(`   4. Actualiza los Price IDs en src/lib/stripe-products.ts si es necesario`);
    process.exit(1);
  } else {
    console.log('\n✅ TODO ESTÁ CONFIGURADO CORRECTAMENTE!');
    console.log('   El checkout debería funcionar sin problemas.');
    console.log('\n📝 PRÓXIMOS PASOS:');
    console.log('   1. Prueba el checkout en tu sitio web');
    console.log('   2. Usa una tarjeta de prueba: 4242 4242 4242 4242');
    console.log('   3. Verifica que la redirección funcione correctamente');
  }

  console.log('\n');
}

verifyStripeConfig().catch((error) => {
  console.error('Error fatal:', error);
  process.exit(1);
});

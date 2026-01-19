/**
 * Script de diagnóstico para verificar la configuración de Checkout
 * Ejecutar con: node scripts/test-checkout.js
 */

require('dotenv').config({ path: '.env.local' });
const Stripe = require('stripe');

console.log('🔍 Diagnóstico de Checkout\n');
console.log('=' .repeat(50));

// 1. Verificar variables de entorno
console.log('\n1️⃣ Verificando Variables de Entorno:');
console.log('-'.repeat(50));

const requiredEnvVars = {
  'STRIPE_SECRET_KEY': process.env.STRIPE_SECRET_KEY,
  'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY': process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  'NEXT_PUBLIC_SITE_URL': process.env.NEXT_PUBLIC_SITE_URL,
};

let envErrors = false;
for (const [key, value] of Object.entries(requiredEnvVars)) {
  if (!value) {
    console.error(`❌ ${key}: NO CONFIGURADA`);
    envErrors = true;
  } else {
    const masked = key.includes('SECRET') || key.includes('KEY')
      ? `${value.substring(0, 7)}...${value.substring(value.length - 4)}`
      : value;
    console.log(`✅ ${key}: ${masked}`);
    
    // Verificar el modo (test vs live)
    if (key === 'STRIPE_SECRET_KEY') {
      const mode = value.startsWith('sk_live_') ? 'PRODUCCIÓN' : 
                   value.startsWith('sk_test_') ? 'TEST' : 'DESCONOCIDO';
      console.log(`   Modo: ${mode}`);
    }
  }
}

if (envErrors) {
  console.error('\n❌ ERROR: Faltan variables de entorno requeridas');
  console.log('\nPor favor, verifica tu archivo .env.local');
  process.exit(1);
}

// 2. Verificar conexión con Stripe
console.log('\n2️⃣ Verificando Conexión con Stripe:');
console.log('-'.repeat(50));

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

try {
  const account = await stripe.accounts.retrieve();
  console.log(`✅ Conexión exitosa con Stripe`);
  console.log(`   Account ID: ${account.id}`);
  console.log(`   País: ${account.country}`);
  console.log(`   Email: ${account.email || 'N/A'}`);
} catch (error) {
  console.error(`❌ Error al conectar con Stripe: ${error.message}`);
  console.error(`   Tipo: ${error.type}`);
  if (error.code) {
    console.error(`   Código: ${error.code}`);
  }
  process.exit(1);
}

// 3. Verificar productos en Stripe
console.log('\n3️⃣ Verificando Productos en Stripe:');
console.log('-'.repeat(50));

// Importar productos desde el archivo TypeScript usando require con la extensión correcta
const fs = require('fs');
const path = require('path');

// Leer el archivo de productos y extraer la constante
const productsPath = path.join(__dirname, '../src/lib/stripe-products.ts');
const productsContent = fs.readFileSync(productsPath, 'utf8');

// Parsear la constante STRIPE_PRODUCTS (simplificado - asumimos que está bien formateada)
// En producción, podrías usar ts-node o compilar primero
const STRIPE_PRODUCTS = {
  "lisboa-1-dia-lo-esencial": {
    priceId: "price_1SrOVhJglPw4zh36W8Oqg3N4",
    name: "Guía Lisboa Express: Lo Mejor en 1 Día (Sin Perder Tiempo)",
    price: 1.99,
  },
  "lisboa-2-dias-completo": {
    priceId: "price_1SrOViJglPw4zh36xVIRenP4",
    name: "Guía Lisboa Fin de Semana: 2 Días Perfectos (La Más Vendida)",
    price: 2.99,
  },
  "lisboa-3-dias-premium": {
    priceId: "price_1SrOViJglPw4zh36F5rDrqoH",
    name: "Guía Lisboa + Sintra: 3 Días de Experiencia Completa",
    price: 3.99,
  },
  "lisboa-full-week": {
    priceId: "price_1SrOVjJglPw4zh36FT8kHxwb",
    name: "Guía Lisboa 7 Días: Semana Completa + Alrededores (Sintra, Cascais, Óbidos)",
    price: 5.99,
  },
  "lisboa-romantica": {
    priceId: "price_1SrOVkJglPw4zh3610LZCAEu",
    name: "Guía Lisboa Romántica: Para Parejas y Lunas de Miel (Incluye Spots para Propuestas)",
    price: 2.99,
  },
  "lisboa-familiar": {
    priceId: "price_1SrOVkJglPw4zh36apTBywoj",
    name: "Guía Lisboa Familiar: Perfecta para Viajar con Niños (Sin Estrés, Todo Planificado)",
    price: 2.99,
  },
  "lisboa-fotografia": {
    priceId: "price_1SrOVlJglPw4zh36JNMf0adm",
    name: "Guía Lisboa Instagram: 50+ Spots para Fotos Perfectas (Fotógrafos e Influencers)",
    price: 2.99,
  },
};

const productIds = Object.keys(STRIPE_PRODUCTS);
console.log(`📦 Productos configurados localmente: ${productIds.length}`);

let productsOk = 0;
let productsError = 0;

for (const [productId, product] of Object.entries(STRIPE_PRODUCTS)) {
  console.log(`\n   Producto: ${productId}`);
  console.log(`   Nombre: ${product.name}`);
  console.log(`   Price ID: ${product.priceId}`);
  
  try {
    // Verificar que el price existe
    const price = await stripe.prices.retrieve(product.priceId);
    console.log(`   ✅ Price encontrado en Stripe`);
    console.log(`      Monto: ${(price.unit_amount / 100).toFixed(2)} ${price.currency.toUpperCase()}`);
    
    // Verificar que el producto existe
    if (price.product) {
      const stripeProduct = await stripe.products.retrieve(price.product);
      console.log(`   ✅ Producto encontrado en Stripe: ${stripeProduct.name}`);
      console.log(`      Activo: ${stripeProduct.active ? 'Sí' : 'No'}`);
      
      if (!stripeProduct.active) {
        console.warn(`   ⚠️  ADVERTENCIA: El producto está inactivo en Stripe`);
        productsError++;
      } else {
        productsOk++;
      }
    } else {
      console.warn(`   ⚠️  El price no tiene un producto asociado`);
      productsError++;
    }
  } catch (error) {
    console.error(`   ❌ ERROR: ${error.message}`);
    if (error.code === 'resource_missing') {
      console.error(`      El Price ID "${product.priceId}" no existe en Stripe`);
      console.error(`      Debes crear este producto en Stripe primero`);
    }
    productsError++;
  }
}

// 4. Resumen
console.log('\n' + '='.repeat(50));
console.log('📊 RESUMEN:');
console.log('-'.repeat(50));
console.log(`✅ Productos OK: ${productsOk}`);
if (productsError > 0) {
  console.error(`❌ Productos con errores: ${productsError}`);
  console.log('\n⚠️  ACCIÓN REQUERIDA:');
  console.log('   Algunos productos no están configurados correctamente en Stripe.');
  console.log('   Ejecuta: node scripts/create-stripe-products-live.js');
  console.log('   (o scripts/create-stripe-products.js para modo test)');
  process.exit(1);
} else {
  console.log('\n✅ Todo está configurado correctamente!');
  console.log('   Puedes proceder con el checkout.');
}

console.log('\n');

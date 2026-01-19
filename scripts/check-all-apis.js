/**
 * Script para verificar todas las APIs y su configuración
 * Ejecutar con: node scripts/check-all-apis.js
 */

require('dotenv').config({ path: '.env.local' });

console.log('🔍 VERIFICACIÓN DE TODAS LAS APIs\n');
console.log('='.repeat(60));

// Lista de todas las variables de entorno necesarias
const envVars = {
  // Stripe
  'STRIPE_SECRET_KEY': {
    required: true,
    description: 'Clave secreta de Stripe (pagos)',
    checkMode: (val) => val?.startsWith('sk_live_') ? 'LIVE' : val?.startsWith('sk_test_') ? 'TEST' : 'DESCONOCIDO'
  },
  'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY': {
    required: true,
    description: 'Clave pública de Stripe (checkout frontend)',
    checkMode: (val) => val?.startsWith('pk_live_') ? 'LIVE' : val?.startsWith('pk_test_') ? 'TEST' : 'DESCONOCIDO'
  },
  // Clerk (Autenticación)
  'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY': {
    required: true,
    description: 'Clave pública de Clerk (autenticación)',
    checkMode: (val) => val?.startsWith('pk_live_') ? 'LIVE' : val?.startsWith('pk_test_') ? 'TEST' : 'DESCONOCIDO'
  },
  'CLERK_SECRET_KEY': {
    required: true,
    description: 'Clave secreta de Clerk (autenticación backend)',
    checkMode: (val) => val?.startsWith('sk_live_') ? 'LIVE' : val?.startsWith('sk_test_') ? 'TEST' : 'DESCONOCIDO'
  },
  // Supabase (Base de datos)
  'NEXT_PUBLIC_SUPABASE_URL': {
    required: true,
    description: 'URL de Supabase (base de datos)',
    checkMode: () => null
  },
  'SUPABASE_SERVICE_ROLE_KEY': {
    required: true,
    description: 'Clave de servicio de Supabase',
    checkMode: () => null
  },
  // Site URL
  'NEXT_PUBLIC_SITE_URL': {
    required: true,
    description: 'URL del sitio web',
    checkMode: () => null
  },
  // SMTP (Opcional - para emails)
  'SMTP_HOST': {
    required: false,
    description: 'Servidor SMTP (para emails de contacto)',
    checkMode: () => null
  },
  'SMTP_USER': {
    required: false,
    description: 'Usuario SMTP',
    checkMode: () => null
  },
  'SMTP_PASS': {
    required: false,
    description: 'Contraseña SMTP',
    checkMode: () => null
  }
};

// APIs disponibles
const APIs = [
  {
    path: '/api/checkout',
    name: 'Checkout API',
    description: 'Procesa pagos con Stripe',
    requiredVars: ['STRIPE_SECRET_KEY', 'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY', 'NEXT_PUBLIC_SITE_URL', 'CLERK_SECRET_KEY', 'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY'],
    mode: 'LIVE/TEST'
  },
  {
    path: '/api/contact',
    name: 'Contact API',
    description: 'Envía emails de contacto',
    requiredVars: ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'],
    mode: 'N/A',
    optional: true
  },
  {
    path: '/api/subscribe',
    name: 'Subscribe API',
    description: 'Maneja suscripciones y envío de guías',
    requiredVars: ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'NEXT_PUBLIC_SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY'],
    mode: 'N/A',
    optional: false
  }
];

console.log('\n1️⃣ VERIFICANDO VARIABLES DE ENTORNO:');
console.log('-'.repeat(60));

let hasErrors = false;
const modes = {
  stripe: null,
  clerk: null
};

for (const [key, config] of Object.entries(envVars)) {
  const value = process.env[key];
  const masked = key.includes('SECRET') || key.includes('KEY') || key.includes('PASS')
    ? value ? `${value.substring(0, 12)}...${value.substring(value.length - 4)}` : 'NO CONFIGURADA'
    : value || 'NO CONFIGURADA';

  if (!value && config.required) {
    console.error(`❌ ${key}: NO CONFIGURADA (REQUERIDA)`);
    console.error(`   ${config.description}`);
    hasErrors = true;
  } else if (!value && !config.required) {
    console.log(`⚠️  ${key}: NO CONFIGURADA (OPCIONAL)`);
    console.log(`   ${config.description}`);
  } else {
    const mode = config.checkMode(value);
    console.log(`✅ ${key}: ${masked}`);
    console.log(`   ${config.description}`);
    
    if (mode) {
      console.log(`   📊 Modo: ${mode}`);
      
      // Detectar modo de Stripe
      if (key.includes('STRIPE')) {
        if (!modes.stripe) {
          modes.stripe = mode;
        } else if (modes.stripe !== mode) {
          console.error(`   ⚠️  ADVERTENCIA: Modo Stripe inconsistente (${modes.stripe} vs ${mode})`);
        }
      }
      
      // Detectar modo de Clerk
      if (key.includes('CLERK')) {
        if (!modes.clerk) {
          modes.clerk = mode;
        } else if (modes.clerk !== mode) {
          console.error(`   ⚠️  ADVERTENCIA: Modo Clerk inconsistente (${modes.clerk} vs ${mode})`);
        }
      }
    }
  }
  console.log('');
}

console.log('\n2️⃣ VERIFICANDO APIS:');
console.log('-'.repeat(60));

for (const api of APIs) {
  console.log(`\n📦 ${api.name} (${api.path})`);
  console.log(`   Descripción: ${api.description}`);
  console.log(`   Modo: ${api.mode}`);
  
  let apiOk = true;
  const missingVars = [];
  
  for (const varName of api.requiredVars) {
    if (!process.env[varName]) {
      if (!api.optional) {
        console.error(`   ❌ ${varName}: FALTA`);
        missingVars.push(varName);
        apiOk = false;
      } else {
        console.log(`   ⚠️  ${varName}: NO CONFIGURADA (opcional)`);
      }
    } else {
      console.log(`   ✅ ${varName}: Configurada`);
    }
  }
  
  if (apiOk) {
    console.log(`   ✅ API lista para usar`);
  } else {
    console.error(`   ❌ API no funcional - Faltan variables: ${missingVars.join(', ')}`);
    hasErrors = true;
  }
}

console.log('\n' + '='.repeat(60));
console.log('📊 RESUMEN:');
console.log('-'.repeat(60));

if (modes.stripe) {
  console.log(`💰 Stripe: Modo ${modes.stripe}`);
  if (modes.stripe === 'TEST') {
    console.log('   ⚠️  ADVERTENCIA: Estás en modo TEST. Los pagos no serán reales.');
  } else if (modes.stripe === 'LIVE') {
    console.log('   ✅ Modo LIVE activado. Los pagos serán reales.');
  }
}

if (modes.clerk) {
  console.log(`🔐 Clerk: Modo ${modes.clerk}`);
  if (modes.clerk === 'TEST') {
    console.log('   ℹ️  Modo TEST de Clerk (usuarios de prueba)');
  } else if (modes.clerk === 'LIVE') {
    console.log('   ✅ Modo LIVE de Clerk (usuarios reales)');
  }
}

console.log(`\n📝 APIs configuradas:`);
APIs.forEach((api, i) => {
  const allVarsPresent = api.requiredVars.every(v => process.env[v] || api.optional);
  console.log(`   ${allVarsPresent ? '✅' : '❌'} ${i + 1}. ${api.name}`);
});

if (hasErrors) {
  console.log('\n❌ HAY ERRORES DE CONFIGURACIÓN');
  console.log('   Por favor, configura las variables faltantes en Vercel:');
  console.log('   Settings → Environment Variables');
  process.exit(1);
} else {
  console.log('\n✅ TODO ESTÁ CONFIGURADO CORRECTAMENTE!');
  console.log('\n📋 IMPORTANTE:');
  console.log(`   - Stripe está en modo: ${modes.stripe || 'NO DETECTADO'}`);
  console.log(`   - Clerk está en modo: ${modes.clerk || 'NO DETECTADO'}`);
  if (modes.stripe === 'TEST') {
    console.log('\n⚠️  RECORDATORIO:');
    console.log('   Para vender productos reales, cambia Stripe a modo LIVE en Vercel.');
  }
}

console.log('\n');

/**
 * Script para actualizar las claves de Clerk en .env.local
 * Ejecutar con: node scripts/update-clerk-keys.js
 */

const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '../.env.local');

// Nuevas claves de Clerk (modo LIVE)
// NOTA: Estas claves deben ser actualizadas manualmente en .env.local
// Las claves reales no se deben commitear en el repositorio
const newClerkKeys = {
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || 'pk_live_...',
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY || 'sk_live_...'
};

console.log('🔐 ACTUALIZANDO CLAVES DE CLERK EN .env.local');
console.log('='.repeat(70));
console.log('');

// Leer el archivo .env.local si existe
let envContent = '';
if (fs.existsSync(envPath)) {
  envContent = fs.readFileSync(envPath, 'utf8');
  console.log('✅ Archivo .env.local encontrado');
} else {
  console.log('⚠️  Archivo .env.local no existe, se creará uno nuevo');
}

// Actualizar o agregar las claves de Clerk
for (const [key, value] of Object.entries(newClerkKeys)) {
  // Buscar si la variable ya existe
  const regex = new RegExp(`^${key}=.*$`, 'm');
  
  if (regex.test(envContent)) {
    // Actualizar la variable existente
    envContent = envContent.replace(regex, `${key}=${value}`);
    console.log(`✅ Actualizado: ${key}`);
  } else {
    // Agregar la variable nueva
    if (envContent && !envContent.endsWith('\n')) {
      envContent += '\n';
    }
    envContent += `${key}=${value}\n`;
    console.log(`✅ Agregado: ${key}`);
  }
}

// Guardar el archivo
try {
  fs.writeFileSync(envPath, envContent, 'utf8');
  console.log('');
  console.log('✅ Archivo .env.local actualizado correctamente');
  console.log('');
  console.log('📋 Claves actualizadas:');
  console.log(`   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=${newClerkKeys.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}`);
  console.log(`   CLERK_SECRET_KEY=${newClerkKeys.CLERK_SECRET_KEY.substring(0, 20)}...`);
  console.log('');
  console.log('✅ ¡LISTO! Las claves de Clerk están actualizadas en .env.local');
  console.log('');
} catch (error) {
  console.error('❌ Error al actualizar el archivo:', error.message);
  console.log('');
  console.log('⚠️  ACTUALIZACIÓN MANUAL REQUERIDA:');
  console.log('');
  console.log('Abre el archivo .env.local y actualiza estas líneas:');
  console.log('');
  console.log(`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=${newClerkKeys.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}`);
  console.log(`CLERK_SECRET_KEY=${newClerkKeys.CLERK_SECRET_KEY}`);
  console.log('');
  process.exit(1);
}

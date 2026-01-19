/**
 * Script para verificar que el deploy en Vercel está funcionando correctamente
 * Ejecutar después del deploy: node scripts/verificar-vercel-deploy.js
 */

const https = require('https');
const http = require('http');

const siteUrl = 'https://estabaenlisboa.com';

console.log('🔍 VERIFICANDO DEPLOY EN VERCEL');
console.log('='.repeat(70));
console.log(`🌐 URL: ${siteUrl}`);
console.log('');
console.log('⏳ Espera 2-3 minutos después del deploy antes de ejecutar este script');
console.log('');

// Extraer hostname
const url = new URL(siteUrl);
const isHttps = url.protocol === 'https:';
const client = isHttps ? https : http;

console.log('📡 Verificando que el sitio esté accesible...');

const options = {
  hostname: url.hostname,
  port: isHttps ? 443 : 80,
  path: '/itinerarios',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  },
};

const req = client.request(options, (res) => {
  console.log(`📊 Status Code: ${res.statusCode}`);
  console.log('');
  
  if (res.statusCode === 200) {
    console.log('✅ Sitio web está accesible');
  } else {
    console.log(`⚠️  Status code: ${res.statusCode}`);
  }
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    // Verificar si hay errores de Stripe en la respuesta
    if (data.includes('Modo: TEST')) {
      console.log('');
      console.log('❌ PROBLEMA DETECTADO:');
      console.log('   El sitio todavía muestra errores de "Modo: TEST"');
      console.log('');
      console.log('🔧 SOLUCIÓN:');
      console.log('   1. Verifica que las variables en Vercel empiecen con sk_live_ y pk_live_');
      console.log('   2. Espera a que termine el deploy completamente (puede tardar 2-3 minutos)');
      console.log('   3. Recarga la página con Ctrl+F5 para limpiar caché');
      console.log('');
    } else if (data.includes('Stripe') || data.includes('checkout')) {
      console.log('');
      console.log('✅ No se detectaron errores obvios de Stripe en la respuesta');
      console.log('');
      console.log('💡 PRÓXIMOS PASOS:');
      console.log('   1. Ve a https://estabaenlisboa.com/itinerarios');
      console.log('   2. Intenta hacer una compra');
      console.log('   3. Verifica que NO aparezca el error de "Modo: TEST"');
      console.log('   4. Si funciona, deberías ser redirigido a Stripe Checkout');
      console.log('');
    } else {
      console.log('');
      console.log('✅ Sitio web respondió correctamente');
      console.log('');
      console.log('💡 Para verificar el checkout:');
      console.log('   1. Ve a https://estabaenlisboa.com/itinerarios');
      console.log('   2. Inicia sesión');
      console.log('   3. Click en "Comprar ahora" en cualquier guía');
      console.log('   4. Verifica que NO aparezca el error de "Modo: TEST"');
      console.log('');
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Error al verificar el sitio:', error.message);
  console.log('');
  console.log('💡 Posibles causas:');
  console.log('   - El sitio aún no está disponible');
  console.log('   - Problema de red');
  console.log('   - El deploy aún no ha terminado');
  console.log('');
});

req.setTimeout(10000, () => {
  req.destroy();
  console.error('❌ Timeout al verificar el sitio (más de 10 segundos)');
  console.log('');
  console.log('💡 El sitio puede estar aún desplegándose. Espera unos minutos más.');
  console.log('');
});

req.end();

console.log('');
console.log('📋 VERIFICACIÓN MANUAL:');
console.log('-'.repeat(70));
console.log('1. Ve a https://estabaenlisboa.com/itinerarios');
console.log('2. Recarga la página con Ctrl+F5 (para limpiar caché)');
console.log('3. Inicia sesión si no estás logueado');
console.log('4. Click en "Comprar ahora" en cualquier guía');
console.log('5. Verifica:');
console.log('   ✅ Si funciona: Te redirige a Stripe Checkout');
console.log('   ❌ Si falla: Aparece error de "Modo: TEST"');
console.log('');

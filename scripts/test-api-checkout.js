/**
 * Script para probar la API de checkout directamente
 * Simula una llamada a /api/checkout
 * Ejecutar con: node scripts/test-api-checkout.js
 */

require('dotenv').config({ path: '.env.local' });

const https = require('https');
const http = require('http');

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://estabaenlisboa.com';
const productId = 'lisboa-1-dia-lo-esencial'; // Producto de prueba

console.log('🧪 PROBANDO API DE CHECKOUT');
console.log('='.repeat(60));
console.log(`🌐 URL: ${siteUrl}`);
console.log(`📦 Producto: ${productId}`);
console.log('='.repeat(60));
console.log('\n⚠️  NOTA: Este script prueba la API, pero necesita autenticación de Clerk.');
console.log('    Para probar completamente, necesitas estar logueado en el sitio.\n');

// Extraer el hostname de la URL
const url = new URL(siteUrl);
const isHttps = url.protocol === 'https:';
const client = isHttps ? https : http;

const postData = JSON.stringify({ productId });

const options = {
  hostname: url.hostname,
  port: isHttps ? 443 : 80,
  path: '/api/checkout',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
    // Nota: Para autenticación real necesitarías las cookies de Clerk
    // Este script solo prueba si la API responde
  },
};

console.log('📤 Enviando petición a la API...\n');

const req = client.request(options, (res) => {
  console.log(`📊 Status Code: ${res.statusCode}`);
  console.log(`📋 Headers:`, res.headers);
  console.log('\n');

  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const parsed = JSON.parse(data);
      console.log('📥 Respuesta de la API:');
      console.log(JSON.stringify(parsed, null, 2));
      
      if (res.statusCode === 401) {
        console.log('\n⚠️  Error 401: No autenticado');
        console.log('    Esto es normal si no estás logueado.');
        console.log('    La API está funcionando, solo necesita autenticación.\n');
      } else if (res.statusCode === 200 && parsed.url) {
        console.log('\n✅ ¡ÉXITO! La API funciona correctamente.');
        console.log(`🔗 URL de checkout: ${parsed.url}\n`);
      } else if (res.statusCode !== 200) {
        console.log(`\n❌ Error ${res.statusCode}:`);
        console.log(`   ${parsed.error || parsed.message || 'Error desconocido'}\n`);
      }
    } catch (e) {
      console.log('📥 Respuesta (no JSON):');
      console.log(data);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Error en la petición:', error.message);
  console.log('\n💡 Posibles causas:');
  console.log('   1. El sitio no está accesible');
  console.log('   2. Problema de red');
  console.log('   3. La URL es incorrecta\n');
});

req.write(postData);
req.end();

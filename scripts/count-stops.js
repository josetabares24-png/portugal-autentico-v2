/**
 * Script para contar los lugares reales en cada guía
 */

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../src/data/itineraries.ts');
const content = fs.readFileSync(DATA_FILE, 'utf8');

function countStops(timelineName) {
  // Buscar el array completo
  const regex = new RegExp(`export const ${timelineName}:\\s*TimelineStop\\[\\]\\s*=\\s*\\[([\\s\\S]*?)\\];`, 'm');
  const match = content.match(regex);
  
  if (!match) {
    return { count: 0, error: 'No encontrado' };
  }
  
  const arrayContent = match[1];
  
  // Contar objetos que tienen coordinates
  // Buscar todos los patrones: coordinates: { lat: X, lng: Y }
  const coordPattern = /coordinates:\s*\{\s*lat:\s*[\d.]+,\s*lng:\s*[-\d.]+/g;
  const matches = arrayContent.match(coordPattern);
  
  return {
    count: matches ? matches.length : 0,
    content: arrayContent.substring(0, 200) // Primeros 200 chars para debug
  };
}

console.log('📊 Contando lugares reales en cada guía:\n');

const guides = [
  { name: 'Lisboa 1 Día', var: 'lisboa1DiaTimeline' },
  { name: 'Lisboa 2 Días - Día 1', var: 'lisboa2DiasDia1Timeline' },
  { name: 'Lisboa 2 Días - Día 2', var: 'lisboa2DiasDia2Timeline' },
  { name: 'Lisboa 3 Días - Día 3', var: 'lisboa3DiasDia3Timeline' },
  { name: 'Lisboa Full Week', var: 'lisboaFullWeekTimeline' },
  { name: 'Lisboa Romántica', var: 'lisboaRomanticaTimeline' },
  { name: 'Lisboa Familiar', var: 'lisboaFamiliarTimeline' },
  { name: 'Lisboa Fotografía', var: 'lisboaFotografiaTimeline' }
];

guides.forEach(guide => {
  const result = countStops(guide.var);
  console.log(`${guide.name}: ${result.count} lugares ${result.error ? `(${result.error})` : ''}`);
});

console.log('\n💡 Si los números no coinciden, el parser necesita mejoras.');

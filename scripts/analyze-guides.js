/**
 * Script para analizar y comparar las guías
 */

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../src/data/itineraries.ts');
const content = fs.readFileSync(DATA_FILE, 'utf8');

function analyzeTimeline(timelineName) {
  const regex = new RegExp(`export const ${timelineName}:\\s*TimelineStop\\[\\]\\s*=\\s*\\[([\\s\\S]*?)\\];`, 'm');
  const match = content.match(regex);
  
  if (!match) {
    return { found: false, stops: [] };
  }
  
  const arrayContent = match[1];
  const stops = [];
  
  // Buscar todos los objetos que tienen 'time:' y 'title:'
  // Usar un enfoque más robusto: buscar inicio de objeto y encontrar su cierre
  let pos = 0;
  while (pos < arrayContent.length) {
    const objStart = arrayContent.indexOf('{', pos);
    if (objStart === -1) break;
    
    // Encontrar el cierre del objeto
    let depth = 0;
    let objEnd = objStart;
    let inString = false;
    let stringChar = null;
    
    for (let i = objStart; i < arrayContent.length; i++) {
      const char = arrayContent[i];
      const prevChar = i > 0 ? arrayContent[i - 1] : '';
      
      if ((char === '"' || char === "'") && prevChar !== '\\') {
        if (!inString) {
          inString = true;
          stringChar = char;
        } else if (char === stringChar) {
          inString = false;
          stringChar = null;
        }
      }
      
      if (!inString) {
        if (char === '{') depth++;
        if (char === '}') {
          depth--;
          if (depth === 0) {
            objEnd = i + 1;
            break;
          }
        }
      }
    }
    
    if (objEnd <= objStart) {
      pos = objStart + 1;
      continue;
    }
    
    const stopContent = arrayContent.substring(objStart, objEnd);
    
    // Extraer datos básicos
    const timeMatch = stopContent.match(/time:\s*['"]([^'"]*)['"]/);
    const titleMatch = stopContent.match(/title:\s*['"]([^'"]*?)['"]/);
    const coordMatch = stopContent.match(/coordinates:\s*\{\s*lat:\s*([\d.]+),\s*lng:\s*([-\d.]+)\s*\}/);
    const typeMatch = stopContent.match(/type:\s*['"]([^'"]*)['"]/);
    
    if (timeMatch && titleMatch) {
      stops.push({
        time: timeMatch[1],
        title: titleMatch[1],
        hasCoordinates: !!coordMatch,
        type: typeMatch ? typeMatch[1] : 'unknown'
      });
    }
    
    pos = objEnd;
  }
  
  return { found: true, stops };
}

console.log('📊 Análisis detallado de cada guía:\n');

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

const results = {};

guides.forEach(guide => {
  const result = analyzeTimeline(guide.var);
  if (result.found) {
    const withCoords = result.stops.filter(s => s.hasCoordinates).length;
    const withoutCoords = result.stops.length - withCoords;
    
    results[guide.name] = {
      total: result.stops.length,
      withCoords,
      withoutCoords,
      stops: result.stops
    };
    
    console.log(`${guide.name}:`);
    console.log(`  Total lugares: ${result.stops.length}`);
    console.log(`  Con coordenadas: ${withCoords}`);
    console.log(`  Sin coordenadas: ${withoutCoords}`);
    if (result.stops.length > 0) {
      console.log(`  Lugares:`);
      result.stops.forEach((stop, i) => {
        const coord = stop.hasCoordinates ? '✅' : '❌';
        console.log(`    ${i + 1}. ${stop.time} - ${stop.title} ${coord}`);
      });
    }
    console.log('');
  } else {
    console.log(`${guide.name}: NO ENCONTRADO\n`);
  }
});

console.log('\n📈 Resumen:');
console.log(`Lisboa 1 Día: ${results['Lisboa 1 Día']?.total || 0} lugares`);
console.log(`Lisboa 2 Días (Día 1 + Día 2): ${(results['Lisboa 2 Días - Día 1']?.total || 0) + (results['Lisboa 2 Días - Día 2']?.total || 0)} lugares totales`);
console.log(`Lisboa 3 Días (Día 3): ${results['Lisboa 3 Días - Día 3']?.total || 0} lugares (falta Día 1 y 2)`);

/**
 * Script para generar archivos KML desde los datos de itineraries.ts
 * Los archivos KML se pueden importar directamente en Google My Maps
 * 
 * Ejecutar: node scripts/generate-maps-from-data.js
 */

const fs = require('fs');
const path = require('path');

// Leer el archivo de datos y extraer las coordenadas
// Como es TypeScript, vamos a leerlo como texto y parsear los datos básicos

const DATA_FILE = path.join(__dirname, '../src/data/itineraries.ts');

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateKML(guideName, stops, outputPath) {
  if (!stops || stops.length === 0) {
    console.warn(`⚠️  No hay paradas para ${guideName}`);
    return;
  }

  const kmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>${escapeXml(guideName)} - Estaba en Lisboa</name>
    <description>Mapa interactivo con todos los lugares de la guía ${escapeXml(guideName)}</description>
    <Style id="restaurant">
      <IconStyle>
        <color>ff00ff00</color>
        <scale>1.2</scale>
        <Icon>
          <href>http://maps.google.com/mapfiles/kml/paddle/grn-circle.png</href>
        </Icon>
      </IconStyle>
    </Style>
    <Style id="visit">
      <IconStyle>
        <color>ff0000ff</color>
        <scale>1.2</scale>
        <Icon>
          <href>http://maps.google.com/mapfiles/kml/paddle/blu-circle.png</href>
        </Icon>
      </IconStyle>
    </Style>
    <Style id="photo">
      <IconStyle>
        <color>ffffff00</color>
        <scale>1.2</scale>
        <Icon>
          <href>http://maps.google.com/mapfiles/kml/paddle/ylw-circle.png</href>
        </Icon>
      </IconStyle>
    </Style>
`;

  // Agrupar por tipo
  const byType = {
    food: [],
    visit: [],
    photo: []
  };

  stops.forEach((stop) => {
    if (!stop.coordinates || !stop.coordinates.lat || !stop.coordinates.lng) {
      return; // Saltar paradas sin coordenadas
    }

    const type = stop.type || 'visit';
    const category = type === 'food' ? 'food' : 
                     type === 'photo' ? 'photo' : 'visit';
    
    byType[category].push(stop);
  });

  let placemarks = '';

  // Folder de Restaurantes
  if (byType.food.length > 0) {
    placemarks += `    <Folder>
      <name>🍴 Restaurantes y Comida</name>
`;
    byType.food.forEach(stop => {
      const { lat, lng } = stop.coordinates;
      const time = stop.time || '';
      const description = (stop.description || '').substring(0, 300);
      const tip = (stop.tip || '').substring(0, 200);
      const googleMapsUrl = stop.googleMapsUrl || `https://maps.google.com/?q=${lat},${lng}`;
      
      placemarks += `      <Placemark>
        <name>${escapeXml(stop.title)}</name>
        <description><![CDATA[
          <div style="font-family: Arial, sans-serif; max-width: 400px;">
            <h3 style="color: #FF6B35; margin-top: 0;">${escapeXml(stop.title)}</h3>
            ${time ? `<p><strong>⏰ Hora:</strong> ${escapeXml(time)}</p>` : ''}
            ${description ? `<p>${escapeXml(description)}${stop.description.length > 300 ? '...' : ''}</p>` : ''}
            ${tip ? `<p style="background: #f0f7ff; padding: 10px; border-radius: 5px; margin-top: 10px;"><strong>💡 Tip:</strong> ${escapeXml(tip)}${stop.tip.length > 200 ? '...' : ''}</p>` : ''}
            <p style="margin-top: 15px;">
              <a href="${googleMapsUrl}" target="_blank" style="color: #FF6B35; text-decoration: none; font-weight: bold;">📍 Abrir en Google Maps →</a>
            </p>
          </div>
        ]]></description>
        <styleUrl>#restaurant</styleUrl>
        <Point>
          <coordinates>${lng},${lat},0</coordinates>
        </Point>
      </Placemark>
`;
    });
    placemarks += `    </Folder>
`;
  }

  // Folder de Visitas
  if (byType.visit.length > 0) {
    placemarks += `    <Folder>
      <name>🏛️ Monumentos y Visitas</name>
`;
    byType.visit.forEach(stop => {
      const { lat, lng } = stop.coordinates;
      const time = stop.time || '';
      const description = (stop.description || '').substring(0, 300);
      const tip = (stop.tip || '').substring(0, 200);
      const googleMapsUrl = stop.googleMapsUrl || `https://maps.google.com/?q=${lat},${lng}`;
      
      placemarks += `      <Placemark>
        <name>${escapeXml(stop.title)}</name>
        <description><![CDATA[
          <div style="font-family: Arial, sans-serif; max-width: 400px;">
            <h3 style="color: #FF6B35; margin-top: 0;">${escapeXml(stop.title)}</h3>
            ${time ? `<p><strong>⏰ Hora:</strong> ${escapeXml(time)}</p>` : ''}
            ${description ? `<p>${escapeXml(description)}${stop.description.length > 300 ? '...' : ''}</p>` : ''}
            ${tip ? `<p style="background: #f0f7ff; padding: 10px; border-radius: 5px; margin-top: 10px;"><strong>💡 Tip:</strong> ${escapeXml(tip)}${stop.tip.length > 200 ? '...' : ''}</p>` : ''}
            <p style="margin-top: 15px;">
              <a href="${googleMapsUrl}" target="_blank" style="color: #FF6B35; text-decoration: none; font-weight: bold;">📍 Abrir en Google Maps →</a>
            </p>
          </div>
        ]]></description>
        <styleUrl>#visit</styleUrl>
        <Point>
          <coordinates>${lng},${lat},0</coordinates>
        </Point>
      </Placemark>
`;
    });
    placemarks += `    </Folder>
`;
  }

  // Folder de Fotos
  if (byType.photo.length > 0) {
    placemarks += `    <Folder>
      <name>📸 Spots de Fotos</name>
`;
    byType.photo.forEach(stop => {
      const { lat, lng } = stop.coordinates;
      const time = stop.time || '';
      const description = (stop.description || '').substring(0, 300);
      const tip = (stop.tip || '').substring(0, 200);
      const googleMapsUrl = stop.googleMapsUrl || `https://maps.google.com/?q=${lat},${lng}`;
      
      placemarks += `      <Placemark>
        <name>${escapeXml(stop.title)}</name>
        <description><![CDATA[
          <div style="font-family: Arial, sans-serif; max-width: 400px;">
            <h3 style="color: #FF6B35; margin-top: 0;">${escapeXml(stop.title)}</h3>
            ${time ? `<p><strong>⏰ Hora:</strong> ${escapeXml(time)}</p>` : ''}
            ${description ? `<p>${escapeXml(description)}${stop.description.length > 300 ? '...' : ''}</p>` : ''}
            ${tip ? `<p style="background: #f0f7ff; padding: 10px; border-radius: 5px; margin-top: 10px;"><strong>💡 Tip:</strong> ${escapeXml(tip)}${stop.tip.length > 200 ? '...' : ''}</p>` : ''}
            <p style="margin-top: 15px;">
              <a href="${googleMapsUrl}" target="_blank" style="color: #FF6B35; text-decoration: none; font-weight: bold;">📍 Abrir en Google Maps →</a>
            </p>
          </div>
        ]]></description>
        <styleUrl>#photo</styleUrl>
        <Point>
          <coordinates>${lng},${lat},0</coordinates>
        </Point>
      </Placemark>
`;
    });
    placemarks += `    </Folder>
`;
  }

  const kmlFooter = `  </Document>
</kml>`;

  const kmlContent = kmlHeader + placemarks + kmlFooter;
  
  // Crear directorio si no existe
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(outputPath, kmlContent, 'utf8');
  console.log(`✅ KML generado: ${path.basename(outputPath)} (${stops.length} lugares)`);
}

// Parsear el archivo TypeScript para extraer los datos
function parseTimelineData() {
  const content = fs.readFileSync(DATA_FILE, 'utf8');
  
  // Extraer las definiciones de timeline usando regex
  // Buscar patrones como: coordinates: { lat: 38.xxx, lng: -9.xxx }
  
  const guides = [
    { name: 'Lisboa 1 Día - Lo Esencial', var: 'lisboa1DiaTimeline', file: 'lisboa-1-dia.kml' },
    { name: 'Lisboa 2 Días - Completo', var: 'lisboa2DiasDia1Timeline', file: 'lisboa-2-dias-dia1.kml', var2: 'lisboa2DiasDia2Timeline', file2: 'lisboa-2-dias-dia2.kml' },
    { name: 'Lisboa 3 Días - Premium', var: 'lisboa3DiasSintraTimeline', file: 'lisboa-3-dias.kml' },
    { name: 'Lisboa Full Week', var: 'lisboaFullWeekTimeline', file: 'lisboa-full-week.kml' },
    { name: 'Lisboa Romántica', var: 'lisboaRomanticaTimeline', file: 'lisboa-romantica.kml' },
    { name: 'Lisboa Familiar', var: 'lisboaFamiliarTimeline', file: 'lisboa-familiar.kml' },
    { name: 'Lisboa Fotografía', var: 'lisboaFotografiaTimeline', file: 'lisboa-fotografia.kml' }
  ];

  const outputDir = path.join(__dirname, '../maps');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Para cada guía, buscar su timeline y extraer los datos
  guides.forEach(guide => {
    // Buscar el inicio del array de timeline
    const varPattern = new RegExp(`export const ${guide.var}:\\s*TimelineStop\\[\\]\\s*=\\s*\\[([\\s\\S]*?)\\];`, 'm');
    const match = content.match(varPattern);
    
    if (match) {
      const timelineContent = match[1];
      const stops = extractStops(timelineContent);
      generateKML(guide.name, stops, path.join(outputDir, guide.file));
    } else {
      console.warn(`⚠️  No se encontró ${guide.var}`);
    }

    // Si hay segundo día
    if (guide.var2) {
      const var2Pattern = new RegExp(`export const ${guide.var2}:\\s*TimelineStop\\[\\]\\s*=\\s*\\[([\\s\\S]*?)\\];`, 'm');
      const match2 = content.match(var2Pattern);
      if (match2) {
        const timelineContent2 = match2[1];
        const stops2 = extractStops(timelineContent2);
        generateKML(`${guide.name} - Día 2`, stops2, path.join(outputDir, guide.file2));
      }
    }

    // Si hay tercer día
    if (guide.var3) {
      const var3Pattern = new RegExp(`export const ${guide.var3}:\\s*TimelineStop\\[\\]\\s*=\\s*\\[([\\s\\S]*?)\\];`, 'm');
      const match3 = content.match(var3Pattern);
      if (match3) {
        const timelineContent3 = match3[1];
        const stops3 = extractStops(timelineContent3);
        generateKML(`${guide.name} - Día 3`, stops3, path.join(outputDir, guide.file3));
      }
    }
  });
}

function extractStops(timelineContent) {
  const stops = [];
  
  // Buscar objetos completos usando un parser más robusto
  // Buscamos el patrón: { time: '...', title: '...', ... coordinates: { lat: X, lng: Y }, ... }
  // Necesitamos encontrar el inicio y fin de cada objeto, manejando anidación
  
  let pos = 0;
  while (pos < timelineContent.length) {
    // Buscar inicio de objeto
    const objStart = timelineContent.indexOf('{', pos);
    if (objStart === -1) break;
    
    // Encontrar el cierre del objeto contando llaves
    let depth = 0;
    let objEnd = objStart;
    let inString = false;
    let stringChar = null;
    
    for (let i = objStart; i < timelineContent.length; i++) {
      const char = timelineContent[i];
      const prevChar = i > 0 ? timelineContent[i - 1] : '';
      
      // Manejar strings (comillas simples y dobles)
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
    
    const stopContent = timelineContent.substring(objStart, objEnd);
    
    // Extraer coordenadas (debe tenerlas para ser válido)
    const coordMatch = stopContent.match(/coordinates:\s*\{\s*lat:\s*([\d.]+),\s*lng:\s*([-\d.]+)\s*\}/);
    if (!coordMatch) {
      pos = objEnd;
      continue;
    }
    
    const lat = parseFloat(coordMatch[1]);
    const lng = parseFloat(coordMatch[2]);
    
    // Extraer time
    const timeMatch = stopContent.match(/time:\s*['"]([^'"]*)['"]/);
    const time = timeMatch ? timeMatch[1] : '';
    
    // Extraer title (puede tener saltos de línea, usar modo multilínea)
    const titleMatch = stopContent.match(/title:\s*['"]([^'"]*?)['"]/);
    const title = titleMatch ? titleMatch[1] : '';
    
    // Extraer tipo
    const typeMatch = stopContent.match(/type:\s*['"]([^'"]*)['"]/);
    const type = typeMatch ? typeMatch[1] : 'visit';
    
    // Extraer descripción (puede ser multilínea, buscar hasta el siguiente campo o fin)
    let description = '';
    const descMatch = stopContent.match(/description:\s*['"]([\s\S]*?)['"],/);
    if (descMatch) {
      description = descMatch[1].replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim();
    }
    
    // Extraer tip
    let tip = '';
    const tipMatch = stopContent.match(/tip:\s*['"]([\s\S]*?)['"],/);
    if (tipMatch) {
      tip = tipMatch[1].replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim();
    }
    
    // Extraer googleMapsUrl
    const urlMatch = stopContent.match(/googleMapsUrl:\s*['"]([^'"]*)['"]/);
    const googleMapsUrl = urlMatch ? urlMatch[1] : `https://maps.google.com/?q=${lat},${lng}`;
    
    stops.push({
      time,
      title,
      type,
      description,
      tip,
      coordinates: { lat, lng },
      googleMapsUrl
    });
    
    pos = objEnd;
  }
  
  return stops;
}

// Función principal
function main() {
  console.log('🗺️  Generando archivos KML para Google My Maps...\n');
  
  try {
    parseTimelineData();
    
    console.log('\n✨ Proceso completado!\n');
    console.log('📝 Próximos pasos:');
    console.log('   1. Ve a https://www.google.com/maps/d/');
    console.log('   2. Crea un nuevo mapa para cada guía');
    console.log('   3. Importa el archivo KML desde la carpeta maps/');
    console.log('   4. Haz el mapa público');
    console.log('   5. Copia el Map ID de la URL');
    console.log('   6. Reemplaza "PLACEHOLDER" en el código\n');
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('\n💡 Si hay problemas, puedes crear los mapas manualmente en Google My Maps');
    console.error('   usando los datos de src/data/itineraries.ts\n');
  }
}

main();

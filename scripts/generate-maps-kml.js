/**
 * Script para generar archivos KML de Google My Maps para cada guía
 * Los archivos KML se pueden importar directamente en Google My Maps
 * 
 * Ejecutar: node scripts/generate-maps-kml.js
 */

const fs = require('fs');
const path = require('path');

// Importar los datos de las guías
// Nota: Esto requiere que el archivo TypeScript esté compilado o usar ts-node
// Por ahora, vamos a leer el archivo directamente y parsear los datos

const GUIDES = [
  {
    id: 'lisboa-1-dia',
    name: 'Lisboa 1 Día - Lo Esencial',
    slug: 'lisboa-1-dia-lo-esencial',
    timelineVar: 'lisboa1DiaTimeline'
  },
  {
    id: 'lisboa-2-dias',
    name: 'Lisboa 2 Días - Completo',
    slug: 'lisboa-2-dias-completo',
    timelineVar: 'lisboa2DiasDia1Timeline',
    timelineVar2: 'lisboa2DiasDia2Timeline'
  },
  {
    id: 'lisboa-3-dias',
    name: 'Lisboa 3 Días - Premium',
    slug: 'lisboa-3-dias-premium',
    timelineVar: 'lisboa3DiasDia1Timeline',
    timelineVar2: 'lisboa3DiasDia2Timeline',
    timelineVar3: 'lisboa3DiasDia3Timeline'
  },
  {
    id: 'lisboa-full-week',
    name: 'Lisboa Full Week',
    slug: 'lisboa-full-week',
    timelineVar: 'lisboaFullWeekTimeline'
  },
  {
    id: 'lisboa-romantica',
    name: 'Lisboa Romántica',
    slug: 'lisboa-romantica',
    timelineVar: 'lisboaRomanticaTimeline'
  },
  {
    id: 'lisboa-familiar',
    name: 'Lisboa Familiar',
    slug: 'lisboa-familiar',
    timelineVar: 'lisboaFamiliarTimeline'
  },
  {
    id: 'lisboa-fotografia',
    name: 'Lisboa Fotografía',
    slug: 'lisboa-fotografia',
    timelineVar: 'lisboaFotografiaTimeline'
  }
];

// Función para generar KML desde datos de paradas
function generateKML(guideName, stops, outputPath) {
  const kmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>${guideName} - Estaba en Lisboa</name>
    <description>Mapa interactivo con todos los lugares de la guía ${guideName}</description>
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
    <Style id="transport">
      <IconStyle>
        <color>ff00ffff</color>
        <scale>1.2</scale>
        <Icon>
          <href>http://maps.google.com/mapfiles/kml/paddle/cyan-circle.png</href>
        </Icon>
      </IconStyle>
    </Style>
`;

  let placemarks = '';
  
  // Agrupar por tipo
  const byType = {
    food: [],
    visit: [],
    photo: [],
    transport: []
  };

  stops.forEach((stop, index) => {
    const type = stop.type || 'visit';
    const category = type === 'food' ? 'food' : 
                     type === 'photo' ? 'photo' :
                     type === 'transport' ? 'transport' : 'visit';
    
    byType[category].push({ ...stop, index });
  });

  // Crear folders por categoría
  const folders = {
    food: { name: '🍴 Restaurantes y Comida', stops: byType.food, style: 'restaurant' },
    visit: { name: '🏛️ Monumentos y Visitas', stops: byType.visit, style: 'visit' },
    photo: { name: '📸 Spots de Fotos', stops: byType.photo, style: 'photo' },
    transport: { name: '🚇 Transporte', stops: byType.transport, style: 'transport' }
  };

  Object.entries(folders).forEach(([key, folder]) => {
    if (folder.stops.length === 0) return;

    placemarks += `    <Folder>
      <name>${folder.name}</name>
`;

    folder.stops.forEach(stop => {
      if (!stop.coordinates || !stop.coordinates.lat || !stop.coordinates.lng) {
        console.warn(`⚠️  Parada sin coordenadas: ${stop.title}`);
        return;
      }

      const { lat, lng } = stop.coordinates;
      const time = stop.time || '';
      const description = stop.description || '';
      const tip = stop.tip || '';
      const googleMapsUrl = stop.googleMapsUrl || `https://maps.google.com/?q=${lat},${lng}`;
      
      const htmlDescription = `
        <![CDATA[
          <div style="font-family: Arial, sans-serif; max-width: 400px;">
            <h3 style="color: #FF6B35; margin-top: 0;">${escapeXml(stop.title)}</h3>
            ${time ? `<p><strong>⏰ Hora:</strong> ${escapeXml(time)}</p>` : ''}
            ${description ? `<p>${escapeXml(description.substring(0, 200))}${description.length > 200 ? '...' : ''}</p>` : ''}
            ${tip ? `<p style="background: #f0f7ff; padding: 10px; border-radius: 5px; margin-top: 10px;"><strong>💡 Tip:</strong> ${escapeXml(tip.substring(0, 150))}${tip.length > 150 ? '...' : ''}</p>` : ''}
            <p style="margin-top: 15px;">
              <a href="${googleMapsUrl}" target="_blank" style="color: #FF6B35; text-decoration: none; font-weight: bold;">📍 Abrir en Google Maps →</a>
            </p>
          </div>
        ]]>
      `.trim();

      placemarks += `      <Placemark>
        <name>${escapeXml(stop.title)}</name>
        <description>${htmlDescription}</description>
        <styleUrl>#${folder.style}</styleUrl>
        <Point>
          <coordinates>${lng},${lat},0</coordinates>
        </Point>
      </Placemark>
`;
    });

    placemarks += `    </Folder>
`;
  });

  const kmlFooter = `  </Document>
</kml>`;

  const kmlContent = kmlHeader + placemarks + kmlFooter;
  
  // Crear directorio si no existe
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(outputPath, kmlContent, 'utf8');
  console.log(`✅ KML generado: ${outputPath}`);
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

// Función para extraer datos del archivo TypeScript
function extractTimelineData() {
  const filePath = path.join(__dirname, '../src/data/itineraries.ts');
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Esto es un parser básico - en producción sería mejor usar un parser TypeScript real
  // Por ahora, vamos a crear un script que genere instrucciones para crear los mapas manualmente
  
  console.log('📋 Generando instrucciones para crear mapas en Google My Maps...\n');
  
  // Generar un archivo JSON con todos los lugares organizados
  const guidesData = {};
  
  GUIDES.forEach(guide => {
    guidesData[guide.id] = {
      name: guide.name,
      slug: guide.slug,
      instructions: `Para crear el mapa de "${guide.name}":
1. Ve a https://www.google.com/maps/d/
2. Crea un nuevo mapa: "${guide.name} - Estaba en Lisboa"
3. Importa el archivo KML desde la carpeta maps/
4. Organiza las capas: Restaurantes, Monumentos, Spots de Fotos
5. Haz el mapa público
6. Copia el Map ID de la URL (después de mid=)
7. Reemplaza "PLACEHOLDER" en src/app/itinerarios/${guide.slug}/page.tsx`
    };
  });
  
  const instructionsPath = path.join(__dirname, '../maps/INSTRUCCIONES.md');
  const instructionsDir = path.dirname(instructionsPath);
  if (!fs.existsSync(instructionsDir)) {
    fs.mkdirSync(instructionsDir, { recursive: true });
  }
  
  let instructionsContent = `# 🗺️ Instrucciones para Crear Mapas de Google My Maps

## Guías que necesitan mapas:

${GUIDES.map(g => `- **${g.name}** (${g.slug})`).join('\n')}

## Pasos para crear cada mapa:

### 1. Crear el mapa en Google My Maps
1. Ve a https://www.google.com/maps/d/
2. Haz clic en "Crear un nuevo mapa"
3. Nombra el mapa: "[Nombre de la Guía] - Estaba en Lisboa"
4. Haz clic en "Importar" (botón debajo del título)

### 2. Importar lugares desde el archivo KML
1. Selecciona el archivo KML correspondiente desde la carpeta \`maps/\`
2. Google Maps importará todos los lugares automáticamente
3. Los lugares se organizarán en capas según su tipo:
   - 🍴 Restaurantes y Comida (verde)
   - 🏛️ Monumentos y Visitas (azul)
   - 📸 Spots de Fotos (amarillo)
   - 🚇 Transporte (cyan)

### 3. Personalizar el mapa
1. Reorganiza las capas si es necesario
2. Añade descripciones adicionales a los lugares
3. Añade fotos a los lugares importantes
4. Ajusta los colores de los marcadores si quieres

### 4. Hacer el mapa público
1. Haz clic en "Compartir"
2. Cambia la visibilidad a "Público en la web"
3. Guarda los cambios

### 5. Obtener el Map ID
1. En la URL del mapa verás algo como: \`https://www.google.com/maps/d/viewer?mid=ABC123XYZ456\`
2. Copia solo la parte después de \`mid=\` (ejemplo: \`ABC123XYZ456\`)

### 6. Actualizar el código
1. Abre el archivo de la guía: \`src/app/itinerarios/[slug]/page.tsx\`
2. Busca \`<InteractiveMap mapId="PLACEHOLDER" .../>\`
3. Reemplaza \`PLACEHOLDER\` con el Map ID que copiaste
4. Guarda y haz deploy

## Notas importantes:

- Los archivos KML se generan automáticamente desde los datos de \`src/data/itineraries.ts\`
- Si añades nuevos lugares a las guías, regenera los KML ejecutando: \`node scripts/generate-maps-kml.js\`
- Cada mapa debe ser público para que funcione el embed en la web
- Los mapas se pueden actualizar en cualquier momento - los cambios se reflejarán automáticamente en la web

## Archivos generados:

Los archivos KML estarán en la carpeta \`maps/\` con el nombre:
- \`lisboa-1-dia.kml\`
- \`lisboa-2-dias.kml\`
- \`lisboa-3-dias.kml\`
- \`lisboa-full-week.kml\`
- \`lisboa-romantica.kml\`
- \`lisboa-familiar.kml\`
- \`lisboa-fotografia.kml\`
`;

  fs.writeFileSync(instructionsPath, instructionsContent, 'utf8');
  console.log(`✅ Instrucciones generadas: ${instructionsPath}\n`);
  
  return guidesData;
}

// Función principal
async function main() {
  console.log('🗺️  Generando archivos KML para Google My Maps...\n');
  
  // Por ahora, generamos las instrucciones
  // Para generar los KML reales, necesitaríamos parsear el TypeScript o usar ts-node
  extractTimelineData();
  
  console.log('📝 NOTA: Para generar los archivos KML reales, necesitamos:');
  console.log('   1. Instalar ts-node: npm install -D ts-node');
  console.log('   2. O compilar el TypeScript primero');
  console.log('   3. O crear un script que lea directamente el archivo TS\n');
  
  console.log('💡 Por ahora, puedes:');
  console.log('   1. Leer las instrucciones en maps/INSTRUCCIONES.md');
  console.log('   2. Crear los mapas manualmente en Google My Maps');
  console.log('   3. O usar los datos de src/data/itineraries.ts para crear los mapas\n');
}

main().catch(console.error);

# 🗺️ Instrucciones para Crear Mapas de Google My Maps

## ✅ Archivos KML Generados

Los siguientes archivos KML han sido generados automáticamente desde los datos de las guías:

- `lisboa-1-dia.kml` - Lisboa 1 Día - Lo Esencial (8 lugares)
- `lisboa-2-dias-dia1.kml` - Lisboa 2 Días - Día 1 (6 lugares)
- `lisboa-2-dias-dia2.kml` - Lisboa 2 Días - Día 2 (6 lugares)
- `lisboa-3-dias-dia3.kml` - Lisboa 3 Días - Día 3 (7 lugares)
- `lisboa-full-week.kml` - Lisboa Full Week (16 lugares)
- `lisboa-romantica.kml` - Lisboa Romántica (7 lugares)
- `lisboa-familiar.kml` - Lisboa Familiar (7 lugares)
- `lisboa-fotografia.kml` - Lisboa Fotografía (12 lugares)

## 📋 Pasos para Crear Cada Mapa

### Paso 1: Crear el Mapa en Google My Maps

1. Ve a **https://www.google.com/maps/d/**
2. Haz clic en **"Crear un nuevo mapa"** (botón rojo en la esquina superior izquierda)
3. Nombra el mapa: **"[Nombre de la Guía] - Estaba en Lisboa"**
   - Ejemplo: "Lisboa 1 Día - Lo Esencial - Estaba en Lisboa"

### Paso 2: Importar el Archivo KML

1. En el panel izquierdo, haz clic en **"Importar"** (botón debajo del título del mapa)
2. Selecciona el archivo KML correspondiente desde la carpeta `maps/`
3. Google Maps importará automáticamente todos los lugares
4. Los lugares se organizarán en capas según su tipo:
   - 🍴 **Restaurantes y Comida** (marcadores verdes)
   - 🏛️ **Monumentos y Visitas** (marcadores azules)
   - 📸 **Spots de Fotos** (marcadores amarillos)

### Paso 3: Personalizar el Mapa (Opcional)

1. **Reorganizar capas**: Arrastra las capas en el panel izquierdo para cambiar el orden
2. **Añadir descripciones**: Haz clic en cada marcador para añadir más información
3. **Añadir fotos**: Haz clic en un marcador → "Añadir foto" para incluir imágenes
4. **Ajustar colores**: Haz clic en una capa → "Estilo" para cambiar colores de marcadores
5. **Añadir rutas**: Puedes dibujar rutas entre lugares si quieres mostrar el recorrido

### Paso 4: Hacer el Mapa Público

1. Haz clic en el botón **"Compartir"** (arriba a la derecha)
2. En "Quién tiene acceso", cambia a **"Público en la web"**
3. Haz clic en **"Guardar"**
4. **IMPORTANTE**: El mapa debe ser público para que funcione el embed en la web

### Paso 5: Obtener el Map ID

1. En la barra de direcciones del navegador, verás una URL como:
   ```
   https://www.google.com/maps/d/viewer?mid=ABC123XYZ456789
   ```
2. Copia **solo la parte después de `mid=`**
   - Ejemplo: Si la URL es `...mid=ABC123XYZ456789`, copia `ABC123XYZ456789`

### Paso 6: Actualizar el Código

1. Abre el archivo de la guía correspondiente:
   - `src/app/itinerarios/lisboa-1-dia-lo-esencial/page.tsx`
   - `src/app/itinerarios/lisboa-2-dias-completo/page.tsx`
   - `src/app/itinerarios/lisboa-3-dias-premium/page.tsx`
   - `src/app/itinerarios/lisboa-full-week/page.tsx`
   - `src/app/itinerarios/lisboa-romantica/page.tsx`
   - `src/app/itinerarios/lisboa-familiar/page.tsx`
   - `src/app/itinerarios/lisboa-fotografia/page.tsx`

2. Busca la línea con `<InteractiveMap mapId="PLACEHOLDER" .../>`

3. Reemplaza `PLACEHOLDER` con el Map ID que copiaste:
   ```tsx
   <InteractiveMap
     mapId="ABC123XYZ456789"  // ← Tu Map ID aquí
     title="Mapa Interactivo de Lisboa"
     description="Todos los lugares de la guía en un mapa interactivo"
     guideTitle="Lisboa 1 Día - Lo Esencial"
   />
   ```

4. Guarda el archivo

### Paso 7: Deploy

1. Haz commit de los cambios
2. Haz deploy a Vercel
3. Verifica que el mapa se muestra correctamente en la web

## 🔄 Regenerar Archivos KML

Si añades nuevos lugares a las guías en `src/data/itineraries.ts`, regenera los KML ejecutando:

```bash
node scripts/generate-maps-from-data.js
```

Esto actualizará todos los archivos KML con los nuevos lugares.

## 📝 Notas Importantes

- ✅ **Cada mapa debe ser público** para que funcione el embed
- ✅ **Los mapas se pueden actualizar** en cualquier momento - los cambios se reflejarán automáticamente
- ✅ **Los archivos KML incluyen** coordenadas, descripciones, tips y enlaces a Google Maps
- ✅ **Los lugares están organizados** por categorías (restaurantes, visitas, fotos)
- ⚠️ **Para guías de 2-3 días**: Puedes crear un mapa por día o combinar todos en uno

## 🆘 Solución de Problemas

### El mapa no se muestra
- Verifica que el mapa sea **público** (Paso 4)
- Verifica que el Map ID sea correcto (sin espacios ni caracteres extra)
- Verifica que la URL del embed sea correcta

### Los lugares no aparecen
- Verifica que el archivo KML se importó correctamente
- Revisa que las coordenadas sean válidas en el archivo KML

### Necesito añadir más lugares
- Edita `src/data/itineraries.ts` y añade los nuevos lugares
- Regenera los KML con `node scripts/generate-maps-from-data.js`
- Reimporta el KML actualizado en Google My Maps

## 📞 Soporte

Si tienes problemas, verifica:
1. Que el mapa sea público
2. Que el Map ID sea correcto
3. Que el archivo KML se haya importado correctamente

¡Listo! Con estos pasos tendrás mapas interactivos profesionales para cada guía. 🎉

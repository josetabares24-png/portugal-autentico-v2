# 📊 Análisis Detallado de Mapas por Guía

## ✅ Lugares Extraídos Correctamente

Después de corregir el script, estos son los números reales:

| Guía | Lugares | Observaciones |
|------|---------|---------------|
| **Lisboa 1 Día** | 8 lugares | ✅ Completo |
| **Lisboa 2 Días - Día 1** | 6 lugares | ✅ Completo |
| **Lisboa 2 Días - Día 2** | 6 lugares | ✅ Completo |
| **Lisboa 2 Días (Total)** | **12 lugares** | 6+6 = 12 |
| **Lisboa 3 Días** | **13 lugares** | Timeline combinado (Día 1 + Día 2 + Día 3) |
| **Lisboa Full Week** | 16 lugares | ✅ Completo |
| **Lisboa Romántica** | 7 lugares | ✅ Completo |
| **Lisboa Familiar** | 7 lugares | ✅ Completo |
| **Lisboa Fotografía** | 12 lugares | ✅ Completo |

## 📈 Análisis de la Distribución

### Comparación 1 Día vs 2 Días

**Lisboa 1 Día:**
- 8 lugares en 1 día
- Ritmo: 8 lugares/día

**Lisboa 2 Días:**
- 12 lugares en 2 días
- Ritmo: 6 lugares/día
- **Total: 50% más lugares que 1 día** (12 vs 8)

### Observación

Tienes razón en que es raro que:
- 1 día tenga 8 lugares
- Cada día de 2 días tenga solo 6 lugares

**Sin embargo:**
- El total de 2 días (12) es mayor que 1 día (8) ✅
- La guía de 2 días está diseñada para un ritmo más pausado
- Cada día de 2 días tiene más tiempo por lugar (menos agotador)

### Recomendación

Si quieres que la guía de 2 días tenga más lugares por día, podrías:

1. **Añadir más lugares al Día 1 o Día 2** en `src/data/itineraries.ts`
2. **Dividir algunos lugares grandes en sub-lugares** (ej: "Belém" podría dividirse en Torre, Monasterio, Pasteles, MAAT)
3. **Añadir más spots de fotos o miradores** que no requieren mucho tiempo

## 🔍 Detalle por Guía

### Lisboa 1 Día (8 lugares)
1. Alfama
2. Mirador de Santa Luzia
3. Castelo de São Jorge
4. Almuerzo en Tasca do Chico
5. Belém
6. Pastéis de Belém
7. LX Factory
8. Cena en Bairro Alto

### Lisboa 2 Días - Día 1 (6 lugares)
1. Baixa-Chiado
2. Tranvía 28
3. Almuerzo en Graça
4. Mirador da Senhora do Monte
5. Panteón Nacional
6. Cena + Fado en Alfama

### Lisboa 2 Días - Día 2 (6 lugares)
1. Belém - Monumentos Marítimos
2. Monasterio de los Jerónimos
3. Pastéis de Belém
4. MAAT
5. LX Factory
6. Cena en Time Out Market

### Lisboa 3 Días (13 lugares - Timeline combinado)
**Día 1:**
1. Alfama al amanecer
2. Castillo de San Jorge
3. Baixa - Centro neurálgico
4. Atardecer en Mirador da Graça

**Día 2:**
5. Torre de Belém
6. Monasterio dos Jerónimos
7. Pastéis de Belém
8. MAAT - Museo de Arte Moderno

**Día 3 (Sintra):**
9. Tren a Sintra
10. Palacio da Pena
11. Quinta da Regaleira
12. Castelo dos Mouros
13. Centro de Sintra

## 💡 Sugerencias para Mejorar

### Opción 1: Añadir más lugares a 2 Días

**Día 1 podría incluir:**
- Elevador de Santa Justa (mencionado pero sin coordenadas)
- A Brasileira café (mencionado pero sin coordenadas)
- Mirador de Santa Luzia (ya está en 1 día, podría estar aquí también)

**Día 2 podría incluir:**
- Padrão dos Descobrimientos (mencionado pero sin coordenadas)
- Más spots en Belém

### Opción 2: Dividir lugares grandes

Por ejemplo, "Belém" en 1 día podría dividirse en:
- Torre de Belém
- Monasterio de los Jerónimos
- Padrão dos Descobrimientos

Esto aumentaría el conteo sin añadir tiempo real de visita.

## ✅ Archivos KML Generados

Todos los archivos KML están en `maps/`:
- `lisboa-1-dia.kml` (8 lugares) ✅
- `lisboa-2-dias-dia1.kml` (6 lugares) ✅
- `lisboa-2-dias-dia2.kml` (6 lugares) ✅
- `lisboa-3-dias.kml` (13 lugares) ✅
- `lisboa-full-week.kml` (16 lugares) ✅
- `lisboa-romantica.kml` (7 lugares) ✅
- `lisboa-familiar.kml` (7 lugares) ✅
- `lisboa-fotografia.kml` (12 lugares) ✅

## 🎯 Conclusión

Los números son correctos según los datos actuales. Si quieres que 2 días tenga más lugares, necesitamos añadir más lugares a las guías en `src/data/itineraries.ts` y luego regenerar los KML.

¿Quieres que añada más lugares a alguna guía específica?

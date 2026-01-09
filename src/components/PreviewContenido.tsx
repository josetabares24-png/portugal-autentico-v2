import Link from 'next/link';

interface PreviewContenidoProps {
  guideId: string;
}

const PREVIEW_DATA = {
  'lisboa-1-dia': {
    paradas: [
      { hora: '09:00', lugar: 'Mirador de Santa Luzia', descripcion: 'Vista panorámica de Alfama' },
      { hora: '10:00', lugar: 'Castelo de São Jorge', descripcion: 'Fortaleza medieval con vistas 360°' },
      { hora: '11:30', lugar: 'Alfama Walking Tour', descripcion: 'Laberinto de callejones auténticos' },
      { hora: '13:00', lugar: 'Baixa-Chiado', descripcion: 'Corazón comercial de Lisboa' },
      { hora: '15:30', lugar: 'Elevador de Santa Justa', descripcion: 'Mirador art nouveau' },
      { hora: '17:00', lugar: 'Bairro Alto', descripcion: 'Barrio bohemio y street art' },
      { hora: '19:00', lugar: 'Mirador de São Pedro', descripcion: 'Atardecer sobre el Tajo' },
      { hora: '21:00', lugar: 'Cena con fado', descripcion: 'Experiencia gastronómica + música' }
    ],
    restaurantes: [
      { nombre: 'Café da Garagem', rango: '€12-18', tipo: 'Almuerzo casual' },
      { nombre: 'Cantinho do Aziz', rango: '€15-25', tipo: 'Cocina mozambiqueña' },
      { nombre: 'Cervejaria Ramiro', rango: '€30-45', tipo: 'Mariscos (opcional)' },
      { nombre: 'A Tasca do Chico', rango: '€20-30', tipo: 'Cena con fado' },
      { nombre: 'Manteigaria', rango: '€1.50', tipo: 'Pastéis de nata' }
    ],
    sampleParada: {
      titulo: '09:00 - Mirador de Santa Luzia',
      contenido: `Empieza tu día en uno de los miradores más fotogénicos de Lisboa. Llegarás justo cuando la luz matinal ilumina las fachadas de azulejos de Alfama.

**Por qué este mirador:**
A diferencia del sobresaturado Mirador das Portas do Sol (50 metros más arriba), Santa Luzia mantiene su autenticidad. Los locales vienen aquí a tomar café, no hay vendedores ambulantes agresivos, y las vistas son prácticamente idénticas.

**Qué verás:**
- Panteón Nacional a tu izquierda
- Río Tajo y los tejados naranjas de Alfama
- Iglesia de Santo Estêvão (icónica en fotos)

**Tips de local:**
✓ Llega a las 9:00 máximo - después de las 10:00 se llena de tours
✓ Compra café en el quiosco pequeño (€1.50) vs restaurante caro (€4)
✓ Los azulejos del mural lateral cuentan la historia del ataque moro de 1147
✓ Baños públicos gratis justo detrás (útil antes de la caminata)

**Tiempo sugerido:** 20 minutos`
    }
  },
  'lisboa-2-dias': {
    paradas: [
      { hora: 'Día 1 - 09:00', lugar: 'Belém', descripcion: 'Monumentos Patrimonio UNESCO' },
      { hora: 'Día 1 - 11:30', lugar: 'Torre de Belém', descripcion: 'Fortaleza manuelina' },
      { hora: 'Día 1 - 14:00', lugar: 'LX Factory', descripcion: 'Hub creativo industrial' },
      { hora: 'Día 1 - 17:00', lugar: 'Ponte 25 de Abril', descripcion: 'Golden Gate portuguesa' },
      { hora: 'Día 2 - 09:00', lugar: 'Oceanário', descripcion: 'Uno de los mejores de Europa' },
      { hora: 'Día 2 - 12:00', lugar: 'Parque das Nações', descripcion: 'Lisboa moderna' },
      { hora: 'Día 2 - 15:00', lugar: 'Mercado da Ribeira', descripcion: 'Food hall gourmet' },
      { hora: 'Día 2 - 18:00', lugar: 'Cais do Sodré', descripcion: 'Nightlife auténtico' }
    ],
    restaurantes: [
      { nombre: 'Pastéis de Belém', rango: '€1.30', tipo: 'Pasteles originales' },
      { nombre: 'Honorato Hamburgueres', rango: '€12-16', tipo: 'Burgers artesanales' },
      { nombre: 'Cervejaria Portugália', rango: '€18-28', tipo: 'Mariscos + cerveza' },
      { nombre: 'Time Out Market', rango: '€8-20', tipo: '35+ restaurantes' },
      { nombre: 'Mini Bar Teatro', rango: '€45-65', tipo: 'Alta cocina (opcional)' }
    ],
    sampleParada: {
      titulo: 'Día 1 - 09:00 - Belém: El Distrito Monumental',
      contenido: `Belém merece medio día completo. Aquí Portugal celebra su era dorada de descubrimientos (siglo XV-XVI).

**Por qué empezar aquí:**
Belém está a 6km del centro, así que ir primero te evita dos viajes. Además, llegas antes de las hordas de cruceros (11:00+).

**Paradas imprescindibles:**
1. **Monasterio de los Jerónimos** (€10, abre 10:00)
   - Obra maestra manuelina - Patrimonio UNESCO
   - Tumba de Vasco da Gama
   - Claustro espectacular
   - TIP: Compra entrada online, cola de 1h+ sin reserva

2. **Torre de Belém** (€6)
   - Fortaleza del siglo XVI sobre el Tajo
   - Subida a las torres (escaleras estrechas, no apto claustrofobia)
   - Vistas del río

3. **Monumento a los Descubrimientos**
   - Gratis ver desde fuera (la mejor parte)
   - Terraza panorámica €6 (opcional, no imprescindible)

**Tiempo sugerido Belém completo:** 3-4 horas`
    }
  },
  'lisboa-3-dias': {
    paradas: [
      { hora: 'Día 1', lugar: 'Centro Histórico', descripcion: '8 paradas esenciales' },
      { hora: 'Día 2', lugar: 'Belém + LX Factory', descripcion: 'Monumentos + creatividad' },
      { hora: 'Día 3', lugar: 'Sintra', descripcion: 'Excursión palacios (40 min tren)' },
      { hora: 'Día 3 tarde', lugar: 'Cascais', descripcion: 'Playa + atardecer' }
    ],
    restaurantes: [
      { nombre: 'Ramiro', rango: '€35-50', tipo: 'Mariscos (imperdible)' },
      { nombre: 'Pateo 13', rango: '€25-35', tipo: 'Fado auténtico' },
      { nombre: 'Café de São Bento', rango: '€15-22', tipo: 'Local + político' },
      { nombre: 'Tascardoso', rango: '€12-18', tipo: 'Taberna tradicional' },
      { nombre: 'Incomum by Luis Santos', rango: '€55-75', tipo: 'Fine dining (opcional)' }
    ],
    sampleParada: {
      titulo: 'Día 3 - Sintra: El Día de los Palacios',
      contenido: `Sintra merece un día completo. Es Patrimonio UNESCO y probablemente el highlight de tu viaje.

**Cómo llegar:**
Tren desde Rossio (Lisboa centro) → Sintra: 40 min, €2.30 cada trayecto.
Salen cada 15-20 min de 06:00 a 23:30.

**Qué visitar (orden estratégico):**

1. **Palacio da Pena** (09:30 - imprescindible reservar online)
   - €14 entrada + parque
   - Castillo colorido estilo Disney, vistas 360°
   - TIP: Compra entrada para 09:30 o 10:00 - después imposible

2. **Quinta da Regaleira** (12:00)
   - €10 entrada
   - Jardines místicos + pozo iniciático famoso Instagram
   - Explora túneles y cuevas

3. **Centro histórico Sintra** (14:00)
   - Almuerzo: Tascantiga (€12-18) o Café Saudade (€10-15)
   - Palacio Nacional (exterior gratis, interior €10 - opcional)

**Tarde: Cabo da Roca + Cascais**
Bus 403 desde Sintra → Cabo da Roca (punto más occidental Europa) → Cascais (playa).
Tren Cascais → Lisboa: 40 min.

**Presupuesto día Sintra:** €50-70/persona (transporte + entradas + comida)`
    }
  },
  'lisboa-fotografia': {
    paradas: [
      { hora: '06:30', lugar: 'Tranvía 28 vacío', descripcion: 'Golden hour sin turistas' },
      { hora: '07:30', lugar: 'Alfama amaneciendo', descripcion: 'Calles naranjas + luces cálidas' },
      { hora: '09:00', lugar: 'Mirador da Graça', descripcion: 'Panorámica ciudad despierta' },
      { hora: '11:00', lugar: 'Pink Street', descripcion: 'Calle rosa icónica' },
      { hora: '14:00', lugar: 'LX Factory murales', descripcion: 'Street art industrial' },
      { hora: '17:00', lugar: 'Elevador da Bica', descripcion: 'Funicular + perspectiva' },
      { hora: '18:30', lugar: 'Mirador de Santa Catarina', descripcion: 'Sunset sobre el puente' },
      { hora: '20:00', lugar: 'Cais das Colunas', descripcion: 'Blue hour reflejos agua' }
    ],
    restaurantes: [
      { nombre: 'Copenhagen Coffee Lab', rango: '€3-6', tipo: 'Café specialty' },
      { nombre: 'Landeau Chocolate', rango: '€5', tipo: 'Cake fotogénico' },
      { nombre: 'Park Bar', rango: '€8-15', tipo: 'Rooftop con vistas' },
      { nombre: 'Lost In', rango: '€12-20', tipo: 'Terraza Instagram' }
    ],
    sampleParada: {
      titulo: '06:30 - Tranvía 28: La Foto Icónica Sin Turistas',
      contenido: `El tranvía 28 es LA foto de Lisboa. Pero a las 10:00 hay 300 turistas esperando la misma toma. La solución: madrugar.

**Setup perfecto:**
- **Ubicación:** Esquina Rua da Conceição con Rua dos Fanqueiros (Baixa)
- **Hora:** 06:30-07:30 (primer tranvía 06:40, todavía oscuro pero con luz natural)
- **Luz:** Golden hour lateral, fachadas amarillas + naranja del tranvía
- **Composición:** Tranvía entrando en curva, fachada de azulejos de fondo

**Settings recomendados:**
- ISO 400-800 (luz baja)
- f/5.6 para nitidez tranvía + fondo definido
- 1/250s mínimo (tranvía en movimiento)
- Modo ráfaga (3-5 fps)

**Tips:**
✓ Llega 10 min antes, elige tu spot
✓ Tranvía pasa cada 10-12 min
✓ Mejor lado: izquierdo de la calle mirando hacia Alfama
✓ Si está nublado: +1 EV compensación

**Backup locations:**
- Rua da Bica (funicular + cuesta)
- Largo Portas do Sol (mirador + tranvía de fondo)`
    }
  },
  'lisboa-familia': {
    paradas: [
      { hora: '10:00', lugar: 'Oceanário', descripcion: '2h explorando (reserva online)' },
      { hora: '12:30', lugar: 'Parque das Nações', descripcion: 'Teleférico + jardines' },
      { hora: '14:30', lugar: 'Pavilhão do Conhecimento', descripcion: 'Museo ciencia interactivo' },
      { hora: '17:00', lugar: 'Jardim da Estrela', descripcion: 'Playground + patos' },
      { hora: 'Día 2', lugar: 'Tranvía 28', descripcion: 'Aventura en tranvía histórico' },
      { hora: 'Día 2', lugar: 'Castillo São Jorge', descripcion: 'Explora fortaleza medieval' },
      { hora: 'Día 2', lugar: 'Elevador Santa Justa', descripcion: 'Ascensor mágico' }
    ],
    restaurantes: [
      { nombre: 'Honorato', rango: '€8-12', tipo: 'Kids burgers + helado' },
      { nombre: 'Mensagem', rango: '€12-18', tipo: 'Portuguesa + kids menu' },
      { nombre: 'Pizzaria Casanova', rango: '€10-16', tipo: 'Pizza familiar' },
      { nombre: 'Gelato Therapy', rango: '€3-5', tipo: 'Helados artesanales' },
      { nombre: 'Manteigaria', rango: '€1.50', tipo: 'Pasteles (niños adoran)' }
    ],
    sampleParada: {
      titulo: '10:00 - Oceanário: La Experiencia Star',
      contenido: `El Oceanário de Lisboa es uno de los 10 mejores acuarios del mundo. Y con niños, es la parada más memorable del viaje.

**Por qué es perfecto para familias:**
- Tanque central gigante (5 millones litros) visible desde 4 niveles
- Peces luna, tiburones, mantarrayas nadando juntos
- Zona táctil donde tocan estrellas de mar
- Nutrias adorables (show cada hora)
- Interior cubierto (perfecto si llueve)

**Logística familiar:**
- **Tiempo:** 2-3 horas mínimo
- **Entrada:** €22 adultos, €15 niños (4-12), gratis <3 años
- **TIP CRÍTICO:** Compra online con 24h antelación = 20% descuento
- **Mejor hora:** 10:00 apertura (evitas grupos escolares 11:30+)

**Qué llevar:**
✓ Carrito si tienen <4 años (hay ascensores, 100% accesible)
✓ Snacks (cafetería cara €6-8 sandwich)
✓ Cámara con flash apagado (reflejos en cristales)

**Después del Oceanário:**
Justo al lado: Parque das Nações con teleférico (€6 adultos, €3.50 niños), jardines, fuentes interactivas gratis.

**Baños:** 3 locaciones, cambiadores disponibles.
**Taquillas:** €1 (moneda 50 cent + 50 cent)`
    }
  },
  'lisboa-romantico': {
    paradas: [
      { hora: '10:00', lugar: 'Jardim Botânico', descripcion: 'Paseo romántico privado' },
      { hora: '12:00', lugar: 'Chiado elegante', descripcion: 'Cafés históricos' },
      { hora: '14:30', lugar: 'Belém riverside', descripcion: 'Paseo junto al Tajo' },
      { hora: '17:00', lugar: 'LX Factory sunset', descripcion: 'Rooftop con cócteles' },
      { hora: '19:00', lugar: 'Mirador das Portas do Sol', descripcion: 'Atardecer épico' },
      { hora: '21:00', lugar: 'Cena con fado', descripcion: 'Experiencia íntima musical' }
    ],
    restaurantes: [
      { nombre: 'Belcanto', rango: '€160-220', tipo: '2 estrellas Michelin' },
      { nombre: 'Pap\'Açôrda', rango: '€35-50', tipo: 'Romántico tradicional' },
      { nombre: 'Pharmacia', rango: '€30-45', tipo: 'Rooftop vistas río' },
      { nombre: 'A Tasquinha', rango: '€40-60', tipo: 'Fado intimista' },
      { nombre: 'Café A Brasileira', rango: '€8-15', tipo: 'Histórico (merienda)' }
    ],
    sampleParada: {
      titulo: '19:00 - Mirador das Portas do Sol: El Atardecer Perfecto',
      contenido: `Este es EL momento del día. El mirador donde pides matrimonio, donde haces la foto que imprimes, donde Lisboa te enamora.

**Por qué este mirador:**
Posición privilegiada sobre Alfama, vistas 180° del Tajo, luz dorada perfecta 19:00-20:00 (verano) o 17:30-18:30 (invierno).

**Setup romántico:**
Llega 30 min antes del sunset. Hay una terraza-bar pequeña (Portas do Sol Bar) donde puedes:
- Reservar mesa junto al muro (WhatsApp: +351 91X XXX XXX - incluido en guía)
- Dos copas de vino verde o gin portugués
- Aceitunas y queso da serra (€15-20 total)
- Vista perfecta sin moverse

**Momento perfecto:**
El sol se esconde detrás del Panteón Nacional (domo blanco a la izquierda). En ese momento:
- Los tejados de Alfama se vuelven naranja fuego
- El río Tajo refleja todo en dorado
- Las luces de la ciudad empiezan a encenderse

**Después del sunset:**
Caminata 10 min bajando por Alfama (calles iluminadas, ambiente mágico) hasta restaurante con fado reservado para las 21:00.

**Tips:**
✓ Evita sábados (demasiados tours)
✓ Si está nublado, el momento "blue hour" (20 min después sunset) es igual de bonito
✓ Trae un chal/chaqueta ligera (brisa del río)`
    }
  },
  'lisboa-foodie': {
    paradas: [
      { hora: '09:00', lugar: 'Mercado da Ribeira', descripcion: 'Breakfast + exploración' },
      { hora: '11:00', lugar: 'Conserveira de Lisboa', descripcion: 'Conservas gourmet' },
      { hora: '13:00', lugar: 'Taberna lunch', descripcion: 'Almuerzo auténtico' },
      { hora: '15:30', lugar: 'Pastelerías históricas', descripcion: 'Dulces tour' },
      { hora: '17:00', lugar: 'Mercado de Campo Ourique', descripcion: 'Food hall local' },
      { hora: '19:00', lugar: 'Wine tasting', descripcion: 'Vinos Alentejo + Douro' },
      { hora: '21:00', lugar: 'Fine dining', descripcion: 'Cena de autor' }
    ],
    restaurantes: [
      { nombre: 'Ramiro', rango: '€40-60', tipo: 'Mariscos (imperdible)' },
      { nombre: 'Belcanto', rango: '€160-220', tipo: '2★ Michelin José Avillez' },
      { nombre: 'Taberna da Rua', rango: '€25-35', tipo: 'Petiscos tradicionales' },
      { nombre: 'Café de São Bento', rango: '€18-28', tipo: 'Donde comen políticos' },
      { nombre: 'Pastéis de Belém', rango: '€1.30', tipo: 'Original desde 1837' },
      { nombre: 'Sol e Pesca', rango: '€20-30', tipo: 'Conservas + cerveza' },
      { nombre: 'Mini Bar Teatro', rango: '€50-70', tipo: 'José Avillez casual' },
      { nombre: 'Pica-Pau', rango: '€15-25', tipo: 'Picanha + cerveza' }
    ],
    sampleParada: {
      titulo: '13:00 - Almuerzo en Taberna Auténtica: Donde Comen los Locales',
      contenido: `Olvidate de TripAdvisor. Las mejores tabernas de Lisboa no tienen página web, ni reservas online, ni menú en inglés.

**Mi taberna favorita: Taberna da Rua das Flores**
- Rua das Flores 103 (Chiado)
- SIN RESERVA (llega 12:45 o 14:30 para evitar cola)
- Menú solo en portugués (te lo traduzco completo en la guía)

**Qué pedir (estrategia local):**

**Entrada obligatoria:**
- Pão com manteiga (pan con mantequilla de hierba-sal) - €2
- Azeitonas (aceitunas marinadas) - €2.50
  
**Plato fuerte (elige 1-2 para compartir):**
1. **Polvo à lagareiro** (€18) - Pulpo asado + patatas + aceite 
   ⭐ Mi #1 recomendación absoluta
   
2. **Secretos de porco preto** (€16) - Cerdo ibérico + puré
   Si amas la carne, esto cambia tu vida
   
3. **Bacalhau à Brás** (€14) - Bacalao + patatas paja + huevo
   El plato nacional, versión perfecta

**Vino:**
- Vinho verde (€3.50 copa) - blanco refrescante perfecto pulpo
- Tinto Alentejo (€4 copa) - con carnes

**Postre:**
- Arroz doce (€3.50) - arroz con leche canela, cremoso adicción
- Pastel de nata casero (€1.50) - si aún tienes espacio

**TOTAL: €25-35/persona TODO incluido**

**Por qué esta taberna:**
- Dueño João lleva 30 años, conoce todos los proveedores
- Pescado llega diario de Peniche (40km, mejor pesca Portugal)
- Cerdo de dehesas Alentejo (raza autóctona negra)
- Aceite de oliva de su familia (Trás-os-Montes)

**Ambiente:** Azulejos antiguos, mesas de mármol, portugueses cenando (señal inequívoca calidad).`
    }
  }
};

export default function PreviewContenido({ guideId }: PreviewContenidoProps) {
  const data = PREVIEW_DATA[guideId as keyof typeof PREVIEW_DATA];
  
  if (!data) return null;

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
              <span className="text-blue-600 font-bold text-sm">👀 PREVIEW GRATUITO</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Esto es lo que incluye
              <br />
              <span className="text-primary">esta guía</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              Mira exactamente qué estás comprando - sin sorpresas
            </p>
          </div>

          {/* Grid de contenido */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            
            {/* Paradas */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-2xl">location_on</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                    {data.paradas.length} Paradas Verificadas
                  </h3>
                  <p className="text-sm text-slate-600">Con horarios y coordenadas GPS</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {data.paradas.slice(0, 4).map((parada, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <span className="text-blue-600 font-bold text-sm flex-shrink-0 mt-0.5">{parada.hora}</span>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{parada.lugar}</p>
                      <p className="text-xs text-slate-600">{parada.descripcion}</p>
                    </div>
                  </div>
                ))}
                {data.paradas.length > 4 && (
                  <p className="text-sm text-slate-500 italic pt-2">
                    + {data.paradas.length - 4} paradas más en la guía completa...
                  </p>
                )}
              </div>
            </div>

            {/* Restaurantes */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-2xl">restaurant</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                    {data.restaurantes.length} Restaurantes
                  </h3>
                  <p className="text-sm text-slate-600">Con precios reales y tips</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {data.restaurantes.map((rest, idx) => (
                  <div key={idx} className="flex items-start justify-between gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900 text-sm">{rest.nombre}</p>
                      <p className="text-xs text-slate-600">{rest.tipo}</p>
                    </div>
                    <span className="text-green-600 font-bold text-sm flex-shrink-0">{rest.rango}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sample de Primera Parada - MUY IMPORTANTE */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-white text-3xl">visibility</span>
              </div>
              <div>
                <div className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full mb-2">
                  PREVIEW EXCLUSIVO
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  {data.sampleParada.titulo}
                </h3>
                <p className="text-sm text-slate-600">
                  👇 Esto es solo el comienzo. La guía completa tiene este nivel de detalle en CADA parada.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div 
                className="text-slate-700 leading-relaxed whitespace-pre-line"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {data.sampleParada.contenido}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t-2 border-blue-200">
              <p className="text-center text-slate-700 font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                💎 La guía completa incluye este nivel de detalle en las {data.paradas.length} paradas + mapas interactivos + coordenadas GPS + actualizaciones perpetuas
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                    {data.paradas.length}
                  </div>
                  <p className="text-sm text-slate-600">Paradas detalladas</p>
                </div>
                <div className="hidden sm:block w-px h-12 bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                    {data.restaurantes.length}
                  </div>
                  <p className="text-sm text-slate-600">Restaurantes verificados</p>
                </div>
                <div className="hidden sm:block w-px h-12 bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                    ∞
                  </div>
                  <p className="text-sm text-slate-600">Actualizaciones gratis</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA al final del preview */}
          <div className="mt-8 text-center">
            <p className="text-slate-600 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              ⬇️ Desbloquea la guía completa abajo
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

#!/usr/bin/env python3
"""
Generador de PDF Profesional para "15 Consejos que Solo los Locales Conocen"
Guía gratuita de Estaba en Lisboa - Versión Mejorada
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm, mm
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle, Image
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.pdfgen import canvas
from reportlab.platypus.flowables import HRFlowable
import os

# Configuración
OUTPUT_FILE = "guia-lisboa-gratis.pdf"
BRAND_COLOR = colors.HexColor("#FF6B35")
SECONDARY_COLOR = colors.HexColor("#F7931E")
LIGHT_ORANGE = colors.HexColor("#FFF5F0")
DARK_GRAY = colors.HexColor("#333333")
MEDIUM_GRAY = colors.HexColor("#666666")

def create_custom_styles():
    """Crear estilos personalizados mejorados"""
    styles = getSampleStyleSheet()
    
    # Título portada
    styles.add(ParagraphStyle(
        name='CoverTitle',
        parent=styles['Heading1'],
        fontSize=36,
        textColor=BRAND_COLOR,
        spaceAfter=20,
        spaceBefore=10,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold',
        leading=42
    ))
    
    # Subtítulo portada
    styles.add(ParagraphStyle(
        name='CoverSubtitle',
        parent=styles['Normal'],
        fontSize=14,
        textColor=MEDIUM_GRAY,
        spaceAfter=40,
        alignment=TA_CENTER,
        fontName='Helvetica',
        leading=20
    ))
    
    # Número de consejo (grande y destacado)
    styles.add(ParagraphStyle(
        name='ConsejoNumero',
        parent=styles['Heading2'],
        fontSize=14,
        textColor=BRAND_COLOR,
        spaceAfter=4,
        spaceBefore=25,
        fontName='Helvetica-Bold',
        leading=18,
        leftIndent=0
    ))
    
    # Título de consejo
    styles.add(ParagraphStyle(
        name='ConsejoTitulo',
        parent=styles['Heading3'],
        fontSize=13,
        textColor=DARK_GRAY,
        spaceAfter=12,
        spaceBefore=0,
        fontName='Helvetica-Bold',
        leading=16,
        leftIndent=0
    ))
    
    # Texto normal mejorado
    styles.add(ParagraphStyle(
        name='BodyText',
        parent=styles['Normal'],
        fontSize=10,
        textColor=DARK_GRAY,
        spaceAfter=8,
        alignment=TA_JUSTIFY,
        fontName='Helvetica',
        leading=14,
        leftIndent=0,
        rightIndent=0
    ))
    
    # Destacado con fondo
    styles.add(ParagraphStyle(
        name='Destacado',
        parent=styles['Normal'],
        fontSize=10,
        textColor=BRAND_COLOR,
        spaceAfter=8,
        fontName='Helvetica-Bold',
        leading=14,
        leftIndent=10,
        rightIndent=10
    ))
    
    # Sección title
    styles.add(ParagraphStyle(
        name='SectionTitle',
        parent=styles['Heading2'],
        fontSize=18,
        textColor=BRAND_COLOR,
        spaceAfter=15,
        spaceBefore=25,
        fontName='Helvetica-Bold',
        leading=22
    ))
    
    return styles

def add_header_footer(canvas, doc):
    """Agregar header y footer con diseño mejorado"""
    canvas.saveState()
    
    page_num = canvas.getPageNumber()
    
    if page_num > 1:  # No en portada
        # Línea superior decorativa
        canvas.setStrokeColor(LIGHT_ORANGE)
        canvas.setLineWidth(2)
        canvas.line(2*cm, A4[1] - 1.5*cm, A4[0] - 2*cm, A4[1] - 1.5*cm)
        
        # Número de página
        canvas.setFont('Helvetica', 9)
        canvas.setFillColor(MEDIUM_GRAY)
        canvas.drawCentredString(A4[0]/2, 1.5*cm, f"{page_num}")
        
        # Footer
        canvas.setFont('Helvetica-Bold', 8)
        canvas.setFillColor(BRAND_COLOR)
        canvas.drawCentredString(A4[0]/2, 1*cm, "estabaenlisboa.com")
    
    canvas.restoreState()

def create_portada(styles):
    """Portada mejorada con diseño profesional"""
    story = []
    
    # Espaciado superior
    story.append(Spacer(1, 3*cm))
    
    # Logo/Círculo decorativo
    story.append(Paragraph(
        '<font size="100" color="#FF6B35">●</font>',
        ParagraphStyle(name='Circle', alignment=TA_CENTER, spaceAfter=30)
    ))
    
    # Título principal
    story.append(Paragraph(
        "15 Consejos que Solo<br/>los Locales Conocen",
        styles['CoverTitle']
    ))
    
    # Línea decorativa
    story.append(Spacer(1, 0.5*cm))
    story.append(HRFlowable(
        width="40%",
        thickness=3,
        color=SECONDARY_COLOR,
        spaceAfter=20,
        spaceBefore=0,
        hAlign='CENTER'
    ))
    
    # Subtítulo
    story.append(Paragraph(
        "La guía gratuita para vivir Lisboa<br/>como un verdadero lisboeta",
        styles['CoverSubtitle']
    ))
    
    story.append(Spacer(1, 2*cm))
    
    # Box con info del autor
    author_data = [[
        Paragraph(
            '<font size="11"><b>Por Jose</b><br/>'
            '<font color="#666666">Estaba en Lisboa</font></font>',
            ParagraphStyle(name='Author', alignment=TA_CENTER, leading=16)
        )
    ]]
    
    author_table = Table(author_data, colWidths=[12*cm])
    author_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), LIGHT_ORANGE),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 15),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 15),
        ('ROUNDEDCORNERS', [10, 10, 10, 10]),
    ]))
    
    story.append(author_table)
    story.append(PageBreak())
    
    return story

def create_introduccion(styles):
    """Introducción mejorada"""
    story = []
    
    # Título con emoji
    story.append(Paragraph(
        "📍 Lisboa como un local",
        styles['SectionTitle']
    ))
    
    story.append(Spacer(1, 0.3*cm))
    
    intro_text = """
    Llevo tiempo viviendo en Lisboa. Y sabes qué veo cada día? Gente que llega con la maleta 
    llena de ilusión… y se va pensando <i>"estuvo bien, pero me quedé con ganas de más"</i>.
    """
    story.append(Paragraph(intro_text, styles['BodyText']))
    
    intro_text2 = """
    No porque Lisboa no sea increíble (lo es). Sino porque nadie les contó 
    <b><font color="#FF6B35">cómo funciona esto de verdad</font></b>.
    """
    story.append(Paragraph(intro_text2, styles['BodyText']))
    
    intro_text3 = """
    Esta guía no va de secretos hipsters ni de hacerte sentir especial. Va de que <b>disfrutes mi ciudad</b> 
    sin acabar frustrado, sin tirar el dinero, y sin volver a casa con esa sensación de 
    "podría haber sido mejor".
    """
    story.append(Paragraph(intro_text3, styles['BodyText']))
    
    story.append(Spacer(1, 0.5*cm))
    
    # Box destacado
    box_data = [[
        Paragraph(
            '<b><font color="#FF6B35">💡 Lo que encontrarás aquí:</font></b><br/>'
            'Consejos prácticos que te ahorrarán tiempo, dinero y frustraciones. '
            'Sin relleno, solo lo que realmente necesitas saber.',
            ParagraphStyle(name='BoxText', fontSize=10, leading=14, alignment=TA_LEFT)
        )
    ]]
    
    box_table = Table(box_data, colWidths=[15*cm])
    box_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), LIGHT_ORANGE),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('TOPPADDING', (0, 0), (-1, -1), 12),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 12),
        ('LEFTPADDING', (0, 0), (-1, -1), 15),
        ('RIGHTPADDING', (0, 0), (-1, -1), 15),
        ('ROUNDEDCORNERS', [8, 8, 8, 8]),
    ]))
    
    story.append(box_table)
    story.append(Spacer(1, 1*cm))
    story.append(PageBreak())
    
    return story

def create_consejos(styles):
    """Consejos con diseño mejorado"""
    story = []
    
    consejos = [
        {
            "numero": "1️⃣",
            "titulo": "Lisboa tiene cuestas. Muchas. Y tu GPS no avisa",
            "contenido": [
                'Cuando abres Google Maps y lees "8 minutos andando", piensas: <i>pan comido</i>.',
                'Luego llegas y resulta que esos 8 minutos son <b>subiendo una calle con 15% de inclinación</b>, adoquines que parecen jabón cuando llueve, y el sol pegando como si te debiera algo.',
                '<b><font color="#FF6B35">👉 Lo que hago yo:</font></b> Subo en tranvía, metro o elevador. Bajo andando y disfrutando. Mis rodillas contentas. Mi humor también.',
                'El Elevador da Glória cuesta 3,80€ ida y vuelta. Créeme, es mejor inversión que arrastrarte cuesta arriba odiando la vida.'
            ]
        },
        {
            "numero": "2️⃣",
            "titulo": "El tranvía 28 es bonito… pero no es la biblia",
            "contenido": [
                'Sí, es el tranvía más famoso del mundo. También el más lleno, el más lento, y el <b>favorito de los carteristas</b>.',
                'Veo cada día a gente haciendo cola 40 minutos bajo el sol para meterse en un vagón donde van como sardinas en lata.',
                '<b><font color="#FF6B35">👉 Lo que hago yo:</font></b>',
                '• Si quieres la experiencia, madruga (antes de las 9h) o vete tarde (después de las 18h)<br/>• Si quieres moverte, usa el 12 o el 15E<br/>• Si quieres conocer Alfama de verdad, camina'
            ]
        },
        {
            "numero": "3️⃣",
            "titulo": "Si el menú tiene fotos gigantes… huye",
            "contenido": [
                'Lisboa tiene restaurantes brutales. Pero también tiene <b>trampas para turistas</b> en cada esquina del centro.',
                '<b><font color="#FF6B35">Señales rojas:</font></b><br/>• Menú plastificado con fotos brillantes<br/>• Alguien en la puerta gritando<br/>• Carta en 8 idiomas',
                '<b><font color="#FF6B35">👉 Dónde como yo:</font></b> Calles sin nombre turístico. Si solo hay vecinos del barrio, vas bien.'
            ]
        },
        {
            "numero": "4️⃣",
            "titulo": "El fado no es un show con cena turística",
            "contenido": [
                'El fado es <b>silencio, emoción, respeto</b>. No es un espectáculo con bailarines y menú de 3 platos.',
                '<b><font color="#FF6B35">👉 Fado auténtico:</font></b><br/>✅ Tasca tradicional, entrada aparte<br/>✅ Sitios pequeños, sin escenario de teatro<br/>❌ "Fado show + cena = 60€"'
            ]
        },
        {
            "numero": "5️⃣",
            "titulo": "Entre las 11h y las 16h, Lisboa es un horno",
            "contenido": [
                'Si llegas a Belém a mediodía en julio: 🔥 35 grados, 🚶‍♂️ Colas eternas, 😩 Torre llena.',
                '<b><font color="#FF6B35">👉 Lo que hago yo:</font></b> Empiezo temprano (8h-9h). Entre 12h-16h: como tranquilo. Retomo a las 17h.',
                'Lisboa no está hecha para correr. Está hecha para vivirla con calma.'
            ]
        },
        {
            "numero": "6️⃣",
            "titulo": "Los mejores miradores no tienen cartel",
            "contenido": [
                'Todo el mundo conoce Santa Luzia. Pero justo al lado hay otro miradouro, con <b>menos gente y mejores vistas</b>.',
                '<b><font color="#FF6B35">👉 Mi truco:</font></b> Si ves un espacio abierto con 2-3 locales, una pared baja y vistas al río… quédate ahí.',
                'Algunos de mis mejores atardeceres han sido en miradores sin letrero.'
            ]
        },
        {
            "numero": "7️⃣",
            "titulo": "El metro es tu mejor aliado",
            "contenido": [
                'El metro es: ✅ Rápido ✅ Limpio ✅ Barato (1,50€) ✅ Perfecto para saltar zonas sin gracia',
                '<b><font color="#FF6B35">👉 Ejemplo:</font></b> ¿Alfama a Belém andando? 1h30. Metro + tranvía 15E = 20 minutos.',
                'Camina donde merece la pena. El resto, déjaselo al transporte.'
            ]
        },
        {
            "numero": "8️⃣",
            "titulo": 'No todo lo "típico" es bueno',
            "contenido": [
                'Voy a ser sincero: ✅ Pastéis de Belém → Sí ✅ Sardinas en junio → Experiencia única ❌ Restaurante "típico" en Praça do Comércio → 80% decepción',
                'No todo lo que dice "auténtico" lo es.'
            ]
        },
        {
            "numero": "9️⃣",
            "titulo": "Alfama no se visita corriendo",
            "contenido": [
                'Alfama es <b>el corazón de Lisboa</b>. Pero si solo sigues GPS, te pierdes: las calles con ropa tendida, el olor a sardinas, la señora regando plantas.',
                '<b><font color="#FF6B35">👉 Mi consejo:</font></b> Guarda el móvil. Piérdete a propósito. Siéntate en un banco.',
                'Alfama no es un checklist. Es un sentimiento.'
            ]
        },
        {
            "numero": "🔟",
            "titulo": "Lisboa va más allá de Belém y Baixa",
            "contenido": [
                'Si solo vas a Belém y Baixa, te pierdes <b>el Lisboa real</b>.',
                '<b><font color="#FF6B35">Barrios que merecen tu tiempo:</font></b><br/>• Graça → Vistas, calma<br/>• Campo de Ourique → Mercado con alma<br/>• Mouraria → Multicultural, vibrante',
                'Dedica medio día a un barrio que no salga en el top 10.'
            ]
        },
        {
            "numero": "1️⃣1️⃣",
            "titulo": "Lisboa al atardecer es otra ciudad",
            "contenido": [
                'No es exageración. La luz cambia. Los colores cambian. Hasta el aire huele distinto.',
                '<b><font color="#FF6B35">👉 Planea un miradouro al atardecer:</font></b> Graça, Jardim do Torel, São Pedro de Alcântara.',
                'Ese momento puede ser el mejor de tu viaje.'
            ]
        },
        {
            "numero": "1️⃣2️⃣",
            "titulo": "Las zapatillas importan más que Instagram",
            "contenido": [
                'Adoquines + cuestas + humedad = <b>tobillo en peligro</b>.',
                '<b><font color="#FF6B35">👉 Lleva calzado cómodo, con agarre, que ya hayas usado.</font></b>',
                'Lisboa no es para estrenar zapatos.'
            ]
        },
        {
            "numero": "1️⃣3️⃣",
            "titulo": "No necesitas coche",
            "contenido": [
                'A menos que salgas de Lisboa, <b>el coche es un problema</b>. Aparcar cuesta un ojo. El tráfico es denso.',
                '<b><font color="#FF6B35">👉 Transporte público + caminar = suficiente.</font></b>',
                'Si quieres ir a Sintra: tren desde Rossio. 2,30€, 40 minutos.'
            ]
        },
        {
            "numero": "1️⃣4️⃣",
            "titulo": "La Lisboa Card no siempre compensa",
            "contenido": [
                'Solo vale si visitas <b>muchas atracciones de pago en poco tiempo</b>.',
                '<b><font color="#FF6B35">👉 Pregúntate:</font></b> ¿Voy a entrar a 3+ museos por día? ¿Voy a usar mucho transporte?',
                'Si no, pagar suelto sale mejor.'
            ]
        },
        {
            "numero": "1️⃣5️⃣",
            "titulo": "Deja huecos libres en tu agenda",
            "contenido": [
                'Este es el consejo más importante. <b>No llenes cada hora.</b>',
                '<b><font color="#FF6B35">👉 Lisboa se vive en los momentos no planeados:</font></b> Sentarte en un café sin razón, perderte en una calle que olía bien, hablar con alguien.',
                'Los mejores recuerdos están en los espacios en blanco.'
            ]
        }
    ]
    
    for idx, consejo in enumerate(consejos):
        # Número y título en una sola línea más compacta
        story.append(Paragraph(
            f'{consejo["numero"]} {consejo["titulo"]}',
            styles['ConsejoNumero']
        ))
        
        # Contenido
        for parrafo in consejo['contenido']:
            story.append(Paragraph(parrafo, styles['BodyText']))
        
        # Espaciado entre consejos (menos al final)
        if idx < len(consejos) - 1:
            story.append(Spacer(1, 0.4*cm))
        
        # Page break cada 5 consejos para mejor distribución
        if (idx + 1) % 5 == 0 and idx < len(consejos) - 1:
            story.append(PageBreak())
    
    return story

def create_cierre(styles):
    """Cierre y CTA mejorado"""
    story = []
    
    story.append(PageBreak())
    story.append(Spacer(1, 1.5*cm))
    
    # Título de cierre
    story.append(Paragraph("🎒 ¿Y ahora qué?", styles['SectionTitle']))
    
    cierre_text = """
    Esta guía te da las bases. Pero si quieres <b>no improvisar</b>, si quieres 
    <b>itinerarios probados</b>, si quieres <b>comer bien sin perder horas buscando</b>…
    """
    story.append(Paragraph(cierre_text, styles['BodyText']))
    
    story.append(Spacer(1, 0.5*cm))
    
    # CTA Box destacado
    cta_data = [[
        Paragraph(
            '<b><font size="12" color="#FF6B35">👉 En Estaba en Lisboa lo tienes todo listo</font></b><br/><br/>'
            '✓ Itinerarios reales día a día<br/>'
            '✓ Restaurantes probados<br/>'
            '✓ Mapas claros<br/>'
            '✓ Nada de relleno<br/><br/>'
            '<i>Sin agobios. Sin pérdidas de tiempo. Solo disfrutar.</i>',
            ParagraphStyle(name='CTAText', fontSize=10, leading=16, alignment=TA_LEFT)
        )
    ]]
    
    cta_table = Table(cta_data, colWidths=[15*cm])
    cta_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), LIGHT_ORANGE),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('TOPPADDING', (0, 0), (-1, -1), 20),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 20),
        ('LEFTPADDING', (0, 0), (-1, -1), 20),
        ('RIGHTPADDING', (0, 0), (-1, -1), 20),
        ('ROUNDEDCORNERS', [10, 10, 10, 10]),
    ]))
    
    story.append(cta_table)
    story.append(Spacer(1, 1*cm))
    
    # Despedida final
    story.append(Paragraph(
        '<b><font size="14" color="#FF6B35">Buen viaje. Y recuerda:</font></b><br/>'
        '<font size="13"><i>Lisboa no se conquista. Se siente.</i></font>',
        ParagraphStyle(name='Despedida', alignment=TA_CENTER, leading=20, spaceAfter=30)
    ))
    
    # Web
    story.append(Paragraph(
        '<b><font size="12" color="#FF6B35">estabaenlisboa.com</font></b>',
        ParagraphStyle(name='Web', alignment=TA_CENTER, spaceAfter=10)
    ))
    
    return story

def generate_pdf():
    """Generar el PDF completo mejorado"""
    
    # Crear documento con márgenes mejorados
    doc = SimpleDocTemplate(
        OUTPUT_FILE,
        pagesize=A4,
        rightMargin=2.5*cm,
        leftMargin=2.5*cm,
        topMargin=2*cm,
        bottomMargin=2.5*cm,
        title="15 Consejos que Solo los Locales Conocen",
        author="Estaba en Lisboa",
        subject="Guía gratuita de Lisboa"
    )
    
    # Crear estilos
    styles = create_custom_styles()
    
    # Construir contenido
    story = []
    story.extend(create_portada(styles))
    story.extend(create_introduccion(styles))
    story.extend(create_consejos(styles))
    story.extend(create_cierre(styles))
    
    # Generar PDF
    doc.build(story, onFirstPage=add_header_footer, onLaterPages=add_header_footer)
    
    file_size = os.path.getsize(OUTPUT_FILE) / 1024
    
    print("=" * 60)
    print("✅ PDF PROFESIONAL GENERADO EXITOSAMENTE")
    print("=" * 60)
    print(f"📄 Archivo: {OUTPUT_FILE}")
    print(f"💾 Tamaño: {file_size:.1f} KB")
    print(f"📐 Páginas: ~8-10 páginas")
    print(f"🎨 Diseño: Profesional con colores de marca")
    print("=" * 60)
    print(f"\n📂 IMPORTANTE: Coloca este archivo en:")
    print(f"   public/downloads/guia-lisboa-gratis.pdf")
    print("=" * 60)

if __name__ == "__main__":
    generate_pdf()

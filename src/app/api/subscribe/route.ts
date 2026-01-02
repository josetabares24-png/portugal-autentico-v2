import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    // Validación básica
    if (!name || !email) {
      return NextResponse.json(
        { message: 'Nombre y email son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Email no válido' },
        { status: 400 }
      );
    }

    // Configurar transporter de email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email de bienvenida con link de descarga
    await transporter.sendMail({
      from: `"Estaba en Lisboa" <${process.env.SMTP_USER}>`,
      to: email,
      subject: '📥 Tu Guía Gratuita de Lisboa está lista',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
              color: white;
              padding: 30px 20px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background: white;
              padding: 30px;
              border: 1px solid #e0e0e0;
              border-top: none;
            }
            .button {
              display: inline-block;
              background: #FF6B35;
              color: white;
              padding: 15px 30px;
              text-decoration: none;
              border-radius: 8px;
              font-weight: bold;
              margin: 20px 0;
            }
            .footer {
              text-align: center;
              padding: 20px;
              color: #666;
              font-size: 14px;
            }
            ul {
              padding-left: 20px;
            }
            li {
              margin-bottom: 8px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>¡Hola ${name}! 👋</h1>
            <p>Tu guía de Lisboa está lista para descargar</p>
          </div>
          
          <div class="content">
            <p>Gracias por confiar en Estaba en Lisboa.</p>
            
            <p>Acabas de dar el primer paso para descubrir Lisboa como un verdadero local. 
            En esta guía encontrarás 15 consejos que te harán ahorrar tiempo, dinero y 
            sobre todo, te harán vivir experiencias auténticas.</p>
            
            <p style="text-align: center;">
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}/downloads/guia-lisboa-gratis.pdf" class="button">
                📥 Descargar Guía en PDF
              </a>
            </p>
            
            <p><strong>Próximos pasos:</strong></p>
            <ul>
              <li>Lee la guía con calma (son solo 15 páginas)</li>
              <li>Marca los consejos que más te interesen</li>
              <li>Si quieres itinerarios completos día a día, echa un vistazo a nuestras 
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}">guías premium</a></li>
            </ul>
            
            <p>¿Tienes alguna pregunta? Responde a este email, leo todos los mensajes personalmente.</p>
            
            <p>¡Buen viaje a Lisboa!</p>
            
            <p>Un abrazo,<br>
            <strong>Jose</strong><br>
            Estaba en Lisboa</p>
          </div>
          
          <div class="footer">
            <p>Estaba en Lisboa · Lisboa, Portugal</p>
            <p>
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}">Web</a>
            </p>
          </div>
        </body>
        </html>
      `,
    });

    // Opcional: Guardar en base de datos
    // Si usas Prisma, descomentar esto:
    /*
    await prisma.subscriber.create({
      data: {
        name,
        email,
        subscribed_at: new Date(),
        source: 'guia_gratis',
      },
    });
    */

    return NextResponse.json({ 
      success: true, 
      message: 'Guía enviada correctamente' 
    });

  } catch (error) {
    console.error('Error al procesar suscripción:', error);
    return NextResponse.json(
      { message: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}

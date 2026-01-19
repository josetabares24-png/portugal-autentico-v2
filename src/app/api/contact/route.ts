import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, email, asunto, mensaje } = body;

    // Validación básica
    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json(
        { message: 'Todos los campos son requeridos' },
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

    // Verificar que SMTP esté configurado
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP no configurado');
      return NextResponse.json(
        { message: 'Error de configuración del servidor' },
        { status: 500 }
      );
    }

    // Configurar transporter de email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Mapear asuntos a texto legible
    const asuntoMap: Record<string, string> = {
      'duda-guia': 'Duda sobre una guía',
      'problema-pago': 'Problema con el pago',
      'sugerencia': 'Sugerencia o feedback',
      'colaboracion': 'Propuesta de colaboración',
      'otro': 'Otro',
    };

    const asuntoTexto = asuntoMap[asunto] || asunto;

    // Email de notificación al administrador
    const mailOptions = {
      from: `"Formulario Web" <${process.env.SMTP_USER}>`,
      to: 'contacto@estabaenlisboa.com',
      replyTo: email,
      subject: `[Contacto Web] ${asuntoTexto} - ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ee5b2b;">Nuevo mensaje de contacto</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${asuntoTexto}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border-left: 4px solid #ee5b2b; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Mensaje:</h3>
            <p style="white-space: pre-wrap; color: #555;">${mensaje}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Puedes responder directamente a este email para contactar con ${nombre} (${email})
          </p>
        </div>
      `,
      text: `
Nuevo mensaje de contacto

Nombre: ${nombre}
Email: ${email}
Asunto: ${asuntoTexto}

Mensaje:
${mensaje}

---
Puedes responder directamente a este email para contactar con ${nombre} (${email})
      `,
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error enviando email de contacto:', error);
    return NextResponse.json(
      { message: 'Error al enviar el mensaje. Por favor, intenta de nuevo.' },
      { status: 500 }
    );
  }
}

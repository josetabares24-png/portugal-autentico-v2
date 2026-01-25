import Stripe from 'stripe';
import { generatePurchaseEmailHtml, generatePurchaseEmailText } from './email-templates';

interface PurchaseData {
  customerEmail: string;
  customerName: string;
  productName: string;
  productPrice: string;
  downloadUrl: string;
  guideContent?: string;
}

export async function handlePurchaseFulfillment(session: Stripe.Checkout.Session) {
  try {
    // Extract customer information
    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name || 'Viajero';

    if (!customerEmail) {
      throw new Error('No customer email found in session');
    }

    // Get product information from session
    const lineItems = await fetchLineItems(session.id);
    if (!lineItems.data.length) {
      throw new Error('No line items found in session');
    }

    const product = lineItems.data[0];
    const productName = product.description || 'Guía Premium';
    const productPrice = formatPrice(product.amount_total || 0, product.currency || 'eur');

    // Generate secure download URL (you'll need to implement this)
    const downloadUrl = generateSecureDownloadUrl(session.id);

    // Get guide content if available (optional)
    const guideContent = await getGuideContent(product.price?.id);

    // Prepare email data
    const emailData: PurchaseData = {
      customerEmail,
      customerName,
      productName,
      productPrice,
      downloadUrl,
      guideContent,
    };

    // Send email via Brevo
    try {
      await sendPurchaseEmail(emailData);
      console.log(`Purchase email sent successfully to ${customerEmail} for ${productName}`);
    } catch (emailError: any) {
      // No fallar todo el proceso si el email falla
      // El pago ya se procesó, solo logueamos el error
      console.error(`[CRITICAL] Error enviando email de compra a ${customerEmail}:`, emailError);
      // Podrías agregar aquí un sistema de notificación (Sentry, logs, etc.)
      // Por ahora, no lanzamos el error para que el webhook responda OK
      // y Stripe no reintente el webhook
    }

  } catch (error) {
    console.error('Error in purchase fulfillment:', error);
    throw error;
  }
}

async function fetchLineItems(sessionId: string) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-12-15.clover',
  });

  return await stripe.checkout.sessions.listLineItems(sessionId);
}

function formatPrice(amount: number, currency: string): string {
  const formatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: currency.toUpperCase(),
  });
  return formatter.format(amount / 100); // Stripe amounts are in cents
}

function generateSecureDownloadUrl(sessionId: string): string {
  // This should generate a secure, time-limited URL for downloading the guide
  // For now, we'll create a placeholder URL - you'll need to implement the actual download system
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://estabaenlisboa.com';
  return `${baseUrl}/api/download/${sessionId}`;
}

async function getGuideContent(priceId?: string): Promise<string | undefined> {
  // This function could fetch a preview/summary of the guide content
  // For now, we'll return a placeholder or undefined
  // You could implement this to show the first part of the guide
  return undefined;
}

async function sendPurchaseEmail(data: PurchaseData, retries = 2): Promise<any> {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';
  const TIMEOUT_MS = 30000; // 30 segundos timeout

  if (!BREVO_API_KEY) {
    throw new Error('BREVO_API_KEY not configured');
  }

  const emailData = {
    sender: {
      name: 'Portugal Auténtico',
      email: 'contacto@estabaenlisboa.com',
    },
    to: [
      {
        email: data.customerEmail,
        name: data.customerName,
      },
    ],
    subject: `¡Tu guía ${data.productName} está lista! - Portugal Auténtico`,
    htmlContent: generatePurchaseEmailHtml(data),
    textContent: generatePurchaseEmailText(data),
    replyTo: {
      email: 'hola@estabaenlisboa.com',
      name: 'Portugal Auténtico',
    },
    tags: ['purchase', 'guide-delivery', data.productName.toLowerCase().replace(/\s+/g, '-')],
  };

  // Crear AbortController para timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    console.log(`[Email] Intentando enviar email a ${data.customerEmail}...`);
    
    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify(emailData),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      let errorData: string;
      try {
        errorData = await response.text();
      } catch (e) {
        errorData = `Error ${response.status}: ${response.statusText}`;
      }
      
      // Si es un error 429 (rate limit) o 5xx, reintentar
      if ((response.status === 429 || response.status >= 500) && retries > 0) {
        console.log(`[Email] Error ${response.status}, reintentando... (${retries} intentos restantes)`);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Esperar 2 segundos
        return sendPurchaseEmail(data, retries - 1);
      }
      
      throw new Error(`Brevo API error: ${response.status} - ${errorData}`);
    }

    const result = await response.json();
    console.log(`[Email] Email enviado exitosamente a ${data.customerEmail}:`, result.messageId || 'OK');
    return result;

  } catch (error: any) {
    clearTimeout(timeoutId);
    
    // Si es un error de timeout o conexión, reintentar
    if ((error.name === 'AbortError' || error.message?.includes('fetch') || error.code === 'ECONNREFUSED') && retries > 0) {
      console.log(`[Email] Error de conexión, reintentando... (${retries} intentos restantes)`);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Esperar 2 segundos
      return sendPurchaseEmail(data, retries - 1);
    }
    
    console.error('[Email] Error enviando email:', error);
    throw new Error(`Error al enviar email: ${error.message || 'Error de conexión con Brevo API'}`);
  }
}

// Optional: Function to log purchase fulfillment for analytics
export async function logPurchaseFulfillment(sessionId: string, email: string, productName: string) {
  // You could implement logging to a database or analytics service here
  console.log(`Purchase fulfilled - Session: ${sessionId}, Email: ${email}, Product: ${productName}`);
}
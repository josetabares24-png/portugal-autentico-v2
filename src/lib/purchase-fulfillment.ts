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
    await sendPurchaseEmail(emailData);

    console.log(`Purchase email sent successfully to ${customerEmail} for ${productName}`);

  } catch (error) {
    console.error('Error in purchase fulfillment:', error);
    throw error;
  }
}

async function fetchLineItems(sessionId: string) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-12-18.acacia',
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

async function sendPurchaseEmail(data: PurchaseData) {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

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

  const response = await fetch(BREVO_API_URL, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': BREVO_API_KEY,
      'content-type': 'application/json',
    },
    body: JSON.stringify(emailData),
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(`Brevo API error: ${response.status} - ${errorData}`);
  }

  const result = await response.json();
  console.log('Email sent successfully:', result);

  return result;
}

// Optional: Function to log purchase fulfillment for analytics
export async function logPurchaseFulfillment(sessionId: string, email: string, productName: string) {
  // You could implement logging to a database or analytics service here
  console.log(`Purchase fulfilled - Session: ${sessionId}, Email: ${email}, Product: ${productName}`);
}
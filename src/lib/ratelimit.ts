/**
 * Rate Limiting usando Upstash Redis
 * 
 * Configuración necesaria en Vercel:
 * - UPSTASH_REDIS_REST_URL
 * - UPSTASH_REDIS_REST_TOKEN
 * 
 * Si no están configuradas, el rate limiting se desactiva automáticamente
 */

let ratelimit: any = null;

// Intentar importar solo si las variables están disponibles
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  try {
    // Dynamic import para evitar errores en build si no está instalado
    const { Ratelimit } = require("@upstash/ratelimit");
    const { Redis } = require("@upstash/redis");

    ratelimit = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(10, "1 m"), // 10 requests por minuto
      analytics: true,
    });
  } catch (error) {
    // Si no está instalado o configurado, ratelimit será null
    console.warn('[RateLimit] Upstash no disponible. Rate limiting desactivado.');
  }
}

/**
 * Limitar requests por IP
 * @param identifier - IP address o identificador único
 * @returns true si el request está permitido, false si excede el límite
 */
export async function limitRequest(identifier: string): Promise<{ success: boolean; limit: number; remaining: number; reset: number }> {
  // Si rate limiting no está configurado, permitir todos los requests
  if (!ratelimit) {
    return { success: true, limit: 10, remaining: 10, reset: Date.now() + 60000 };
  }

  try {
    const result = await ratelimit.limit(identifier);
    return result;
  } catch (error) {
    // En caso de error, permitir el request (fail open)
    console.warn('[RateLimit] Error al verificar límite:', error);
    return { success: true, limit: 10, remaining: 10, reset: Date.now() + 60000 };
  }
}

/**
 * Obtener identificador del request (IP address)
 */
export function getRequestIdentifier(request: Request): string {
  // Intentar obtener IP real del header
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    // Tomar la primera IP si hay múltiples (proxies)
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }

  // Fallback a anonymous si no se puede obtener IP
  return "anonymous";
}

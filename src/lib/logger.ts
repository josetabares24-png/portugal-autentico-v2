/**
 * Logger compartido para la aplicación
 * En desarrollo: muestra todos los logs en consola
 * En producción: solo muestra errores y warnings, el resto se puede enviar a un servicio de logging
 */

type LogLevel = 'log' | 'error' | 'warn' | 'info' | 'debug';

interface Logger {
  log: (...args: any[]) => void;
  error: (...args: any[]) => void;
  warn: (...args: any[]) => void;
  info: (...args: any[]) => void;
  debug: (...args: any[]) => void;
}

const isDevelopment = process.env.NODE_ENV === 'development';

// Función para enviar logs a servicio externo (Sentry, LogRocket, etc.)
const sendToLoggingService = (level: LogLevel, ...args: any[]) => {
  if (!isDevelopment) {
    // Aquí puedes integrar con Sentry, LogRocket, o cualquier servicio de logging
    // Ejemplo:
    // if (level === 'error') {
    //   Sentry.captureException(args[0]);
    // }
  }
};

const logger: Logger = {
  log: (...args: any[]) => {
    if (isDevelopment) {
      console.log(...args);
    }
    sendToLoggingService('log', ...args);
  },
  
  error: (...args: any[]) => {
    // Los errores siempre se muestran, incluso en producción
    console.error(...args);
    sendToLoggingService('error', ...args);
  },
  
  warn: (...args: any[]) => {
    // Los warnings siempre se muestran, incluso en producción
    console.warn(...args);
    sendToLoggingService('warn', ...args);
  },
  
  info: (...args: any[]) => {
    if (isDevelopment) {
      console.info(...args);
    }
    sendToLoggingService('info', ...args);
  },
  
  debug: (...args: any[]) => {
    if (isDevelopment) {
      console.debug(...args);
    }
    sendToLoggingService('debug', ...args);
  },
};

export default logger;

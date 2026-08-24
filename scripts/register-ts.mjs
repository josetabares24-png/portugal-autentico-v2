/**
 * Registra el gancho de `ts-resolve.mjs`. Se pasa con `--import` desde los
 * scripts de package.json que necesitan cargar TypeScript del proyecto.
 */
import { register } from 'node:module';

register('./ts-resolve.mjs', import.meta.url);

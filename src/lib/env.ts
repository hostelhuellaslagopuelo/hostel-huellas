// Validación de variables de entorno.
//
// Regla: en LOCAL la app arranca aunque falten variables (Resend, etc.), para
// poder trabajar contra la base de datos local sin credenciales de producción.
// En PRODUCCIÓN, si falta alguna variable requerida, se lanza un error al
// iniciar el servidor (ver src/instrumentation.ts) para fallar rápido en el deploy.

export const isProduction = process.env.NODE_ENV === "production";

// Variables sin las que la app no puede funcionar en producción.
const REQUIRED_IN_PRODUCTION = [
  "DATABASE_URL",
  "ADMIN_PASSWORD",
  "ADMIN_SECRET",
  "RESEND_API_KEY",
  "RESEND_FROM_EMAIL",
] as const;

export function validateEnv(): void {
  // En local no exigimos nada: la app corre sin Resend ni credenciales de prod.
  if (!isProduction) return;

  const missing = REQUIRED_IN_PRODUCTION.filter((name) => !process.env[name]);
  if (missing.length > 0) {
    throw new Error(
      `[env] Faltan variables de entorno requeridas en producción: ${missing.join(", ")}`
    );
  }
}

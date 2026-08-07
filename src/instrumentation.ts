// Se ejecuta una sola vez al iniciar el servidor Next.js, antes de atender
// requests. Lo usamos para validar las variables de entorno: en producción,
// si falta alguna requerida, el arranque falla con un error claro.
// En local no valida nada (ver src/lib/env.ts).

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { validateEnv } = await import("./lib/env");
    validateEnv();
  }
}

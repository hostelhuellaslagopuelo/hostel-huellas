# Deploy de "precios editables" a la base real (Neon)

Esta función agrega una tabla nueva (`AlojamientoPrecio`) donde se guarda el
precio de cada alojamiento, editable desde el panel (`/admin/precios`).

El resto del contenido de los alojamientos sigue en el código
(`src/lib/alojamiento.ts`). En la base **solo vive el precio**.

> El código es tolerante: si la tabla todavía no existe en Neon, el sitio usa
> los precios estáticos del código como respaldo (no se rompe nada). Pero el
> panel de precios necesita la tabla para poder guardar.

---

## Paso 1 — Crear la tabla en Neon

El acceso a la base lo tiene **el cliente**. La forma más simple es que corra un
bloque de SQL en la consola de Neon (no hace falta la línea de comandos):

1. Entrar a **https://console.neon.tech** → proyecto de Hostel Huellas.
2. Menú lateral **SQL Editor**.
3. Pegar esto y ejecutar (**Run**):

```sql
CREATE TABLE IF NOT EXISTS "AlojamientoPrecio" (
    "slug" TEXT NOT NULL,
    "precioARS" INTEGER,
    "actualizadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AlojamientoPrecio_pkey" PRIMARY KEY ("slug")
);
```

Los nombres van entre comillas dobles a propósito: Prisma usa esa capitalización
exacta. No los cambies.

### (Opcional) Cargar los precios actuales

No es obligatorio —el panel muestra los precios del código como valores
iniciales y los guarda al tocar "Guardar"—, pero si querés dejar las filas
creadas desde el arranque:

```sql
INSERT INTO "AlojamientoPrecio" ("slug", "precioARS") VALUES
    ('dorm1',          20000),
    ('dorm2',          20000),
    ('privada-picos',  25000),
    ('privada-cuevas', 25000),
    ('privada-huemul', 25000),
    ('departamento',   NULL)   -- NULL = "Consultar"
ON CONFLICT ("slug") DO NOTHING;
```

---

## Paso 2 — Desplegar el código nuevo

Deploy normal (Vercel). El `build` corre `prisma generate` así que el cliente de
Prisma queda al día con la tabla nueva. No hace falta ningún paso extra de
migración.

> **Importante (validación de variables en producción):** el proyecto ahora
> valida en el arranque que estén estas variables, y **no arranca** si falta
> alguna. Asegurate de que en Vercel estén cargadas:
> `DATABASE_URL`, `ADMIN_PASSWORD`, `ADMIN_SECRET`, `RESEND_API_KEY`,
> `RESEND_FROM_EMAIL`.

---

## Paso 3 — Usarlo

El cliente entra a `/admin`, hace clic en **Precios** (arriba a la derecha),
edita los valores y guarda. El sitio se actualiza solo (sin redeploy).

Nada de pedirle al cliente que toque código o comandos: solo el Paso 1 (una vez,
copiar y pegar el SQL) y de ahí en más todo desde el panel.

---

## Resumen de acciones

| # | Acción | ¿Obligatorio? |
|---|--------|---------------|
| 1 | Correr el SQL del **Paso 1** en Neon (crea la tabla) | **Sí** |
| 2 | Verificar variables de entorno en Vercel | **Sí** |
| 3 | (Opcional) Cargar precios iniciales con el `INSERT` | No |

> **Seguridad:** las recomendaciones de seguridad (rotar credenciales, contraseña
> de admin, RLS, etc.) se movieron a [`SEGURIDAD.md`](./SEGURIDAD.md). No son parte
> de este deploy, pero convine leerlas.

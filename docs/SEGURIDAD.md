# Seguridad — Hostel Huellas

Notas de seguridad del proyecto. Nada de esto es parte del deploy de precios
(ver [`DEPLOY-PRECIOS-NEON.md`](./DEPLOY-PRECIOS-NEON.md)); son recomendaciones
generales.

## Estado de la app

A nivel código la app está en un nivel razonable para lo que es (sitio de hostel
con panel de reservas):

- **Inyección SQL:** cubierta (Prisma parametriza todas las consultas).
- **XSS:** cubierto (React escapa por defecto).
- **Spam de reservas:** hay honeypot + límite por IP.
- **Sesión de admin:** firmada con HMAC.

No hay pagos online (el pago lo registra el admin a mano), así que la superficie
de riesgo es acotada.

## 🔴 Lo crítico (hacer sí o sí)

Son dos cosas rápidas y no requieren tocar código:

1. **Rotar las credenciales de Neon y Resend.** La `DATABASE_URL` y la
   `RESEND_API_KEY` estuvieron commiteadas en el repo (`env.example.txt` /
   historial de git). Cualquiera con acceso al repo las tuvo, y con la connection
   string se entra a la base como dueño (lee/borra datos de huéspedes: DNI, email,
   teléfono).
   - En Neon: **Roles → Reset password**, y actualizar `DATABASE_URL` en Vercel.
   - En Resend: regenerar la API key y actualizar `RESEND_API_KEY` en Vercel.

2. **Cambiar `ADMIN_PASSWORD`** (hoy es `123`) por una contraseña fuerte, y usar
   un `ADMIN_SECRET` largo y aleatorio.

Con esas dos, la app queda en un nivel de seguridad perfectamente razonable.

## 🟡 Recomendado (opcional)

**Rol de Postgres con permisos mínimos.** Que la app se conecte con un usuario
que solo puede leer/escribir las tablas, no borrarlas ni cambiar el esquema.
Limita el daño si se filtra la clave.

```sql
CREATE ROLE app_user WITH LOGIN PASSWORD 'PONER_UNA_CLAVE_FUERTE';
GRANT SELECT, INSERT, UPDATE, DELETE ON "Reserva"           TO app_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON "AlojamientoPrecio" TO app_user;
-- (sin permisos de DDL: no puede DROP/ALTER ni tocar otras tablas)
```

Después, cambiar la `DATABASE_URL` de Vercel para que use `app_user`.

## 🟢 RLS (Row Level Security) — casi decorativo acá

**El RLS aporta muy poco en esta app.** El navegador nunca se conecta a la base:
todo pasa por el servidor con un único usuario de Postgres. El RLS brilla cuando
hay clientes conectándose directo a la base (modelo Supabase), que no es el caso.
Además, si se filtra la `DATABASE_URL`, el atacante entra como dueño y puede hasta
desactivarlo. Solo tiene sentido como defensa en profundidad / si es un requisito.

Si igual se quiere activar, primero confirmar el rol con el que se conecta la app:

```sql
SELECT current_user;   -- normalmente "neondb_owner"
```

Si **no** es `neondb_owner`, reemplazarlo en el bloque siguiente:

```sql
-- 1) Activar RLS
ALTER TABLE "AlojamientoPrecio" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Reserva"           ENABLE ROW LEVEL SECURITY;

-- 2) Forzarla también para el dueño (si no, el dueño la saltea)
ALTER TABLE "AlojamientoPrecio" FORCE ROW LEVEL SECURITY;
ALTER TABLE "Reserva"           FORCE ROW LEVEL SECURITY;

-- 3) Permitir a la app operar (si no, Prisma deja de leer/escribir)
CREATE POLICY app_all ON "AlojamientoPrecio"
    FOR ALL TO neondb_owner USING (true) WITH CHECK (true);
CREATE POLICY app_all ON "Reserva"
    FOR ALL TO neondb_owner USING (true) WITH CHECK (true);
```

Probar inmediatamente que el sitio carga y el panel guarda. Si algo se rompe (el
rol no coincidía), revertir:

```sql
ALTER TABLE "AlojamientoPrecio" DISABLE ROW LEVEL SECURITY;
ALTER TABLE "Reserva"           DISABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS app_all ON "AlojamientoPrecio";
DROP POLICY IF EXISTS app_all ON "Reserva";
```

## Prioridades

| # | Acción | Prioridad |
|---|--------|-----------|
| 1 | Rotar credenciales de Neon + Resend | 🔴 Crítico |
| 2 | Cambiar `ADMIN_PASSWORD` + `ADMIN_SECRET` | 🔴 Crítico |
| 3 | Rol `app_user` con permisos mínimos | 🟡 Recomendado |
| 4 | Activar RLS | 🟢 Opcional |

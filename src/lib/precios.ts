// Precios de los alojamientos — lógica de servidor.
//
// El contenido de cada alojamiento (fotos, textos, etc.) vive estático en
// ./alojamiento. Acá solo resolvemos el PRECIO, que el cliente edita desde el
// panel y se guarda en la tabla AlojamientoPrecio. Si no hay fila para un slug
// (o la tabla todavía no existe), caemos al precio estático como respaldo.
//
// IMPORTANTE: este módulo importa Prisma, así que NO debe importarse desde
// componentes cliente. Los componentes reciben el resultado ya resuelto por props.

import { prisma } from "./prisma";
import { habitaciones, type Habitacion } from "./alojamiento";

// precioARS = null → se muestra "Consultar".
export function formatPrecioARS(precioARS: number | null): string {
  if (precioARS == null) return "Consultar";
  return `$${new Intl.NumberFormat("es-AR").format(precioARS)}`;
}

// Convierte un precio estático como "$20.000" a 20000, o "Consultar" a null.
export function parsePrecioStatic(price: string): number | null {
  const digits = price.replace(/[^\d]/g, "");
  return digits ? Number(digits) : null;
}

async function getOverrides(): Promise<Map<string, number | null>> {
  try {
    const rows = await prisma.alojamientoPrecio.findMany();
    return new Map(rows.map((r) => [r.slug, r.precioARS]));
  } catch {
    // La tabla puede no existir todavía en producción: usamos los estáticos.
    return new Map();
  }
}

// Alojamientos con el precio de la base pisando al estático (para el sitio público).
export async function getHabitacionesConPrecio(): Promise<Habitacion[]> {
  const overrides = await getOverrides();
  return habitaciones.map((h) =>
    overrides.has(h.slug)
      ? { ...h, price: formatPrecioARS(overrides.get(h.slug) ?? null) }
      : h
  );
}

export type PrecioEditable = {
  slug: string;
  title: string;
  // null = "Consultar"
  precioARS: number | null;
};

// Valores para la pantalla de admin: el de la base si existe, si no el estático.
export async function getPreciosEditables(): Promise<PrecioEditable[]> {
  const overrides = await getOverrides();
  return habitaciones.map((h) => ({
    slug: h.slug,
    title: h.title,
    precioARS: overrides.has(h.slug)
      ? overrides.get(h.slug) ?? null
      : parsePrecioStatic(h.price),
  }));
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifySession } from "@/lib/admin-auth";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { habitaciones } from "@/lib/alojamiento";

async function requireAdmin(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_session")?.value ?? "";
  const secret = process.env.ADMIN_SECRET ?? "";
  return token ? verifySession(token, secret) : false;
}

const VALID_SLUGS = new Set(habitaciones.map((h) => h.slug));

// ─── PUT /api/admin/precios — actualizar precios de los alojamientos ──────────
export async function PUT(req: NextRequest) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  let body: { precios?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }

  if (!Array.isArray(body.precios)) {
    return NextResponse.json({ error: "Formato inválido." }, { status: 400 });
  }

  // Normalizamos y validamos antes de tocar la base.
  const updates: { slug: string; precioARS: number | null }[] = [];
  for (const item of body.precios) {
    const slug = String((item as { slug?: unknown }).slug ?? "");
    if (!VALID_SLUGS.has(slug)) continue;

    const raw = (item as { precioARS?: unknown }).precioARS;
    let precioARS: number | null = null;
    if (raw !== null && raw !== undefined && raw !== "") {
      const n = Number(raw);
      if (!Number.isFinite(n) || n < 0) {
        return NextResponse.json(
          { error: `Precio inválido para "${slug}".` },
          { status: 400 }
        );
      }
      precioARS = Math.round(n);
    }
    updates.push({ slug, precioARS });
  }

  await Promise.all(
    updates.map((u) =>
      prisma.alojamientoPrecio.upsert({
        where: { slug: u.slug },
        create: { slug: u.slug, precioARS: u.precioARS },
        update: { precioARS: u.precioARS },
      })
    )
  );

  // Refrescar las páginas del sitio que muestran precios (ISR on-demand).
  revalidatePath("/");
  revalidatePath("/alojamiento");
  for (const slug of VALID_SLUGS) revalidatePath(`/alojamiento/${slug}`);

  return NextResponse.json({ ok: true });
}

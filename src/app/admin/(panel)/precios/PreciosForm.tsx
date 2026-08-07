"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { PrecioEditable } from "@/lib/precios";

type Row = {
  slug: string;
  title: string;
  value: string; // precio como texto (vacío si "Consultar")
  consultar: boolean;
};

function toRows(precios: PrecioEditable[]): Row[] {
  return precios.map((p) => ({
    slug: p.slug,
    title: p.title,
    value: p.precioARS == null ? "" : String(p.precioARS),
    consultar: p.precioARS == null,
  }));
}

export function PreciosForm({ precios }: { precios: PrecioEditable[] }) {
  const router = useRouter();
  const [rows, setRows] = useState<Row[]>(() => toRows(precios));
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  const update = (slug: string, patch: Partial<Row>) => {
    setRows((prev) =>
      prev.map((r) => (r.slug === slug ? { ...r, ...patch } : r))
    );
    setStatus("idle");
  };

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  async function handleSave() {
    // Validación: cada fila debe tener precio válido o estar en "Consultar".
    for (const r of rows) {
      if (r.consultar) continue;
      const n = Number(r.value);
      if (r.value.trim() === "" || !Number.isFinite(n) || n < 0) {
        setStatus("error");
        setError(`Completá un precio válido para "${r.title}" o marcá Consultar.`);
        return;
      }
    }

    setStatus("saving");
    setError(null);

    const payload = {
      precios: rows.map((r) => ({
        slug: r.slug,
        precioARS: r.consultar ? null : Math.round(Number(r.value)),
      })),
    };

    try {
      const res = await fetch("/api/admin/precios", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "No se pudo guardar.");
      }
      setStatus("saved");
      router.refresh();
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "No se pudo guardar.");
    }
  }

  return (
    <div className="min-h-screen bg-beige">
      <header className="bg-forest text-paper px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/admin"
            className="text-sm text-paper/70 hover:text-paper transition-colors"
          >
            ← Panel
          </Link>
          <h1 className="font-serif text-2xl">Precios</h1>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-paper/70 hover:text-paper border border-paper/30 px-4 py-2 rounded-sm transition-colors"
        >
          Cerrar sesión
        </button>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">
        <p className="text-ink/60 text-sm mb-8 leading-relaxed">
          Editá el precio por noche de cada alojamiento. Marcá{" "}
          <strong className="text-ink/80">Consultar</strong> si preferís que no
          se muestre un número. Los cambios se reflejan en el sitio al guardar.
        </p>

        <div className="space-y-3">
          {rows.map((r) => (
            <div
              key={r.slug}
              className="bg-paper border border-ink/8 rounded-sm p-5 flex flex-wrap items-center gap-4"
            >
              <div className="font-serif text-lg text-forest min-w-[12rem] flex-1">
                {r.title}
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`text-lg ${
                    r.consultar ? "text-ink/25" : "text-clay"
                  }`}
                >
                  $
                </span>
                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  step={500}
                  value={r.value}
                  disabled={r.consultar}
                  onChange={(e) => update(r.slug, { value: e.target.value })}
                  placeholder={r.consultar ? "—" : "20000"}
                  className="w-32 border border-ink/15 rounded-sm px-3 py-2 text-ink text-right font-medium focus:outline-none focus:border-clay disabled:bg-ink/5 disabled:text-ink/30"
                />
              </div>

              <label className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-ink/55 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={r.consultar}
                  onChange={(e) =>
                    update(r.slug, { consultar: e.target.checked })
                  }
                  className="accent-forest w-4 h-4"
                />
                Consultar
              </label>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={handleSave}
            disabled={status === "saving"}
            className="bg-forest text-beige px-8 py-3 rounded-full text-sm font-medium uppercase tracking-[0.18em] hover:bg-moss transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "saving" ? "Guardando…" : "Guardar cambios"}
          </button>

          {status === "saved" && (
            <span className="text-sm text-moss font-medium">
              ✓ Precios actualizados
            </span>
          )}
          {status === "error" && error && (
            <span className="text-sm text-red-700">{error}</span>
          )}
        </div>
      </main>
    </div>
  );
}

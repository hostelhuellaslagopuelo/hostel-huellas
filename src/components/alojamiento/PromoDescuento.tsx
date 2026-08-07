import { DESCUENTO_NOTA } from "@/lib/alojamiento";

// Badge de promoción para el descuento por 3ª persona. Se usa junto al precio
// en el listado y en el detalle de cada alojamiento.
export function PromoDescuento({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-clay/25 bg-clay/10 px-3 py-1.5 text-xs font-semibold text-clay ${className}`}
    >
      <span aria-hidden className="text-sm leading-none">%</span>
      {DESCUENTO_NOTA}
    </span>
  );
}

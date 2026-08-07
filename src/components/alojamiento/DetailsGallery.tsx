import { type Habitacion } from "@/lib/alojamiento";
import { PromoDescuento } from "./PromoDescuento";
import Image from "next/image";
import Link from "next/link";

export function DetailsGallery({ h }: { h: Habitacion }) {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-start">
          {/* Galería */}
          <div className="space-y-4">
            {h.images.length > 1 && (
              <div
                className={`grid gap-4 ${
                  h.images.length >= 3
                    ? "grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-2"
                }`}
              >
                {h.images.slice(1).map((src, i) => (
                  <div
                    key={src + i.toString()}
                    className={`overflow-hidden rounded-sm ring-1 ring-black/5 ${
                      i === 0 && h.images.length >= 3
                        ? "col-span-2 aspect-video"
                        : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`${h.title} — imagen ${i + 2}`}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Ficha */}
          <div className="lg:sticky lg:top-28 space-y-8">
            {/* Precio */}
            <div className="bg-beige rounded-sm p-8 border border-ink/5">
              <div className="font-serif text-4xl text-clay">{h.price}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-ink/40 mt-1">
                {h.tag}
              </div>
              <PromoDescuento className="mt-3" />
              <div className="text-[11px] uppercase tracking-[0.22em] text-moss mt-3 font-medium">
                {h.capacity}
              </div>
              <Link
                href="/contacto"
                className="mt-8 block w-full bg-forest text-beige text-center px-6 py-3.5 rounded-full text-sm font-medium uppercase tracking-[0.18em] hover:bg-moss hover:-translate-y-0.5 transition-all shadow-lg"
              >
                Reservar
              </Link>
              <Link
                href="/contacto"
                className="mt-3 block w-full text-center border border-forest/25 text-forest px-6 py-3.5 rounded-full text-sm font-medium uppercase tracking-[0.18em] hover:border-clay hover:text-clay transition-all"
              >
                Contacto
              </Link>
            </div>

            {/* Descripción */}
            <div>
              <p className="text-ink/75 leading-relaxed text-lg">
                {h.descLong}
              </p>
            </div>

            {/* Ideal para */}
            <div className="border-t border-ink/8 pt-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-clay font-semibold mb-2">
                Ideal para
              </div>
              <p className="text-ink/65 text-sm leading-relaxed">{h.ideal}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { type Habitacion } from "@/lib/alojamiento";
import { PromoDescuento } from "./PromoDescuento";

export function Habitaciones({ habitaciones }: { habitaciones: Habitacion[] }) {
  return (
    <section className="bg-paper py-8 md:py-16 pb-28 md:pb-40">
      <div className="max-w-7xl mx-auto px-6 space-y-16 md:space-y-24">
        {habitaciones.map((h, i) => (
          <article
            key={h.slug}
            id={h.slug}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Link
              href={`/alojamiento/${h.slug}`}
              className="group overflow-hidden rounded-sm ring-1 ring-black/5 shadow-2xl shadow-black/10 block"
            >
              <Image
                src={h.images[0]}
                alt={h.title}
                width={1024}
                height={768}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </Link>

            <div className="space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-clay font-semibold">
                  {h.subtitle}
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-forest mt-3 leading-tight">
                  {h.title}
                </h2>
              </div>
              <p className="text-ink/70 leading-relaxed text-lg max-w-[48ch]">
                {h.descLong}
              </p>
              <div className="text-[11px] uppercase tracking-[0.22em] text-moss">
                {h.capacity}
              </div>
              <ul className="space-y-2">
                {h.includes.map((inc) => (
                  <li
                    key={inc}
                    className="flex items-center gap-3 text-sm text-ink/65"
                  >
                    <span className="text-clay text-xs">▲</span>
                    {inc}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-end gap-4 pt-4 border-t border-ink/8">
                <div>
                  <div className="font-serif text-4xl text-clay">{h.price}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-ink/40 mt-1">
                    {h.tag}
                  </div>
                  <PromoDescuento className="mt-3" />
                </div>
                <div className="ml-auto flex flex-wrap items-center gap-3">
                  <Link
                    href={`/alojamiento/${h.slug}`}
                    className="border border-forest/30 text-forest px-6 py-3 rounded-full text-sm font-medium uppercase tracking-[0.18em] hover:border-clay hover:text-clay transition-all"
                  >
                    Ver detalles
                  </Link>
                  <Link
                    href="/contacto"
                    className="bg-forest text-beige px-6 py-3 rounded-full text-sm font-medium uppercase tracking-[0.18em] hover:bg-moss hover:-translate-y-0.5 transition-all shadow-md"
                  >
                    Reservar
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

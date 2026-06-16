import { Actividad } from "@/lib/actividades";
import Image from "next/image";
import Link from "next/link";

export function OtrasActividades({ actividades }: { actividades: Actividad[] }) {
  return (
    <section className="bg-beige/40 py-20 md:py-28 relative overflow-hidden">
      <div className="texture-grain absolute inset-0" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] text-clay font-semibold">
            Más en Lago Puelo
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-forest mt-4 leading-[1.05] text-balance max-w-2xl">
            Otras experiencias para completar el viaje.
          </h2>
          <p className="text-ink/60 mt-4 max-w-[52ch] leading-relaxed">
            Actividades organizadas por operadores locales de la zona — Maxi las recomienda y te orienta desde el hostel.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {actividades.map((a) => (
            <Link
              key={a.slug}
              href={`/experiencias/${a.slug}`}
              className="group flex gap-4 bg-white/70 border border-ink/8 rounded-sm p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-20 h-20 shrink-0 rounded-sm overflow-hidden">
                <Image
                  src={a.img}
                  alt={a.title}
                  width={160}
                  height={160}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <div className="text-[10px] uppercase tracking-[0.2em] text-clay font-semibold mb-1">
                  {a.tag}
                </div>
                <h3 className="font-serif text-base text-forest leading-snug truncate">
                  {a.title}
                </h3>
                <p className="text-xs text-ink/50 mt-1">{a.duracion}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

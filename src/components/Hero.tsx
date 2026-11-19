import { whatsappLink, whatsappGeneralMessage } from '@/data/site';
import { MessageCircle, MapPin, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="grain relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 sm:px-10 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-olive-500/30 bg-olive-50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-olive-700">
            <MapPin size={13} aria-hidden />
            Maipú, Mendoza
          </p>

          <h1 className="mt-6 font-display text-5xl leading-[1.1] text-forest-900 sm:text-6xl">
            Ropa usada,
            <br />
            <span className="italic text-olive-600">nuevas oportunidades.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-forest-800/80">
            Prendas de segunda mano elegidas una por una. Mirá el catálogo,
            escribinos por WhatsApp y coordinamos cómo llegar a vos.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#catalogo"
              className="rounded-full bg-forest-800 px-7 py-3.5 text-sm font-medium text-cream-100 transition-colors hover:bg-forest-700"
            >
              Ver el catálogo
            </a>
            <a
              href={whatsappLink(whatsappGeneralMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-forest-800/25 px-7 py-3.5 text-sm font-medium text-forest-800 transition-colors hover:border-forest-800/60"
            >
              <MessageCircle size={17} aria-hidden />
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div
            aria-hidden
            className="absolute -top-8 -left-8 h-full w-full rounded-t-full bg-olive-200/60"
          />
          <div className="relative flex h-[480px] flex-col items-center justify-center rounded-t-full border border-forest-900/10 bg-gradient-to-b from-cream-50 to-olive-100 shadow-[0_30px_60px_-30px_rgba(31,48,40,0.35)]">
            <span className="font-display text-7xl italic text-forest-800">R</span>
            <p className="mt-4 max-w-[220px] text-center text-sm leading-relaxed text-forest-800/70">
              Cada prenda tiene una historia.
              <br />
              La próxima es tuya.
            </p>
            <div
              aria-hidden
              className="mt-6 h-px w-16 bg-olive-500/40"
            />
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-olive-700">
              Segunda mano · Circular
            </p>
          </div>
        </div>
      </div>

      <div className="border-y border-forest-900/10 bg-cream-200/70">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-4 text-sm text-forest-800/80 sm:px-10">
          <span className="inline-flex items-center gap-2">
            <MessageCircle size={15} aria-hidden className="text-olive-600" />
            Consultas por WhatsApp
          </span>
          <span className="inline-flex items-center gap-2">
            <Truck size={15} aria-hidden className="text-olive-600" />
            Entrega personal a domicilio
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} aria-hidden className="text-olive-600" />
            Retiro coordinado en Maipú
          </span>
        </div>
      </div>
    </section>
  );
}

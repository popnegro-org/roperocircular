import { Home, Store, MessageCircle } from 'lucide-react';

export default function InfoSection() {
  return (
    <section id="info" className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-700">
            Información útil
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-forest-900 sm:text-5xl">
            Entregas y retiro
          </h2>
          <p className="mt-4 leading-relaxed text-forest-800/75">
            Trabajamos en Maipú, Mendoza. Toda la logística se coordina de forma
            personal, para que la experiencia sea tan simple como posible.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <article className="rounded-2xl border border-forest-900/10 bg-cream-50 p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-800 text-cream-100">
              <Home size={19} aria-hidden />
            </span>
            <h3 className="mt-5 font-display text-xl text-forest-900">
              Entrega a domicilio
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-forest-800/75">
              Realizamos entregas personales a domicilio coordinadas por
              WhatsApp, para que recibas tus prendas sin complicaciones.
            </p>
          </article>

          <article className="rounded-2xl border border-forest-900/10 bg-cream-50 p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-olive-500 text-cream-100">
              <Store size={19} aria-hidden />
            </span>
            <h3 className="mt-5 font-display text-xl text-forest-900">
              Retiro coordinado
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-forest-800/75">
              ¿Preferís venir? Coordinamos previamente por WhatsApp el día y el
              horario para que pases a retirar tus prendas por Maipú.
            </p>
          </article>

          <article className="rounded-2xl border border-forest-900/10 bg-cream-50 p-7 sm:col-span-2">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-xl text-forest-900">
                  ¿Tenés dudas sobre una prenda?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-800/75">
                  Medidas, estado, detalles de tela: escribinos y te respondemos
                  lo antes posible.
                </p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-forest-900/15 text-forest-800">
                <MessageCircle size={19} aria-hidden />
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

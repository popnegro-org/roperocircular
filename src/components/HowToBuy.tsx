import { site } from '@/data/site';
import { MessageCircle, Home, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Sparkles,
    title: '1. Elegí tus prendas',
    description:
      'Mirá el catálogo y anotá las prendas que te gustaron. Cada una tiene su talle y su estado publicado.',
  },
  {
    icon: MessageCircle,
    title: '2. Escribinos por WhatsApp',
    description:
      'Tocá la prenda y se abre una conversación con el mensaje listo. Confirmamos disponibilidad y respondemos tus consultas.',
  },
  {
    icon: Home,
    title: '3. Elegí cómo recibirlo',
    description:
      'Coordinamos la entrega personal a domicilio o el retiro en nuestra zona de Maipú, en el día y horario que te quede cómodo.',
  },
];

export default function HowToBuy() {
  return (
    <section id="comprar" className="bg-forest-900 py-20 text-cream-100 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-300">
            Comprar y entregas
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Simple, cercano, sin vueltas
          </h2>
          <p className="mt-4 leading-relaxed text-cream-300/85">
            No usamos carrito ni pagos en línea: todo se coordina de una manera
            más personal, por WhatsApp.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="rounded-2xl border border-cream-100/10 bg-forest-800/60 p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-olive-500/20 text-olive-300">
                <Icon size={19} aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-300/80">
                {description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-olive-300/20 bg-olive-500/10 p-7 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-2xl">¿Lista para elegir?</h3>
            <p className="mt-2 text-sm text-cream-300/85">
              Retiro coordinado previamente por WhatsApp en Maipú, Mendoza.
            </p>
          </div>
          <a
            href={`https://wa.me/${site.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cream-100 px-7 py-3.5 text-sm font-medium text-forest-900 transition-colors hover:bg-cream-200"
          >
            <MessageCircle size={17} aria-hidden />
            Iniciar conversación
          </a>
        </div>
      </div>
    </section>
  );
}

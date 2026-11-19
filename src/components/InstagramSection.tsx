import { site } from '@/data/site';
import { Instagram, MessageCircle } from 'lucide-react';

export default function InstagramSection() {
  if (site.instagram.url) {
    return (
      <section id="instagram" className="bg-cream-100 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 text-center sm:px-10">
          <h2 className="font-display text-4xl text-forest-900 sm:text-5xl">
            Seguínos en Instagram
          </h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-forest-800/75">
            Novedades, prendas nuevas y combos directos desde nuestra cuenta.
          </p>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest-800 px-7 py-3.5 text-sm font-medium text-cream-100 transition-colors hover:bg-forest-700"
          >
            <Instagram size={17} aria-hidden />
            {site.instagram.handle}
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="instagram" className="bg-cream-100 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 text-center sm:px-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-olive-500/30 bg-olive-50 text-olive-700">
          <Instagram size={24} aria-hidden />
        </span>
        <h2 className="mt-6 font-display text-4xl text-forest-900 sm:text-5xl">
          Pronto en Instagram
        </h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-forest-800/75">
          Estamos preparando nuestra cuenta para mostrar novedades y prendas.
          Por ahora, el mejor lugar para ver lo disponible es nuestro
          catálogo y WhatsApp.
        </p>
        <a
          href={`https://wa.me/${site.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-forest-800/25 px-7 py-3.5 text-sm font-medium text-forest-800 transition-colors hover:border-forest-800/60"
        >
          <MessageCircle size={17} aria-hidden />
          Escribinos mientras tanto
        </a>
      </div>
    </section>
  );
}

import { site } from '@/data/site';
import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const waHref = `https://wa.me/${site.whatsappNumber}`;

  return (
    <footer className="bg-forest-950 text-cream-200">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl text-cream-100">{site.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-cream-300/80">
              {site.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-300">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-cream-100"
                >
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-olive-400" />
                  WhatsApp {site.whatsappDisplay}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-cream-300/80">
                <Mail size={14} aria-hidden />
                {site.location}
              </li>
              <li>
                {site.instagram.url ? (
                  <a
                    href={site.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-cream-100"
                  >
                    <Instagram size={14} aria-hidden />
                    Instagram: {site.instagram.handle}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-cream-300/60">
                    <Instagram size={14} aria-hidden />
                    Instagram: disponible próximamente
                  </span>
                )}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-300">
              Cómo comprar
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-cream-300/80">
              Elegí las prendas que te gustan desde el catálogo y escribinos por
              WhatsApp. Coordinamos entrega personal a domicilio o retiro en
              Maipú, previa coordinación.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-cream-100/10 pt-6">
          <p className="text-xs text-cream-300/60">
            © {new Date().getFullYear()} {site.name}. Maipú, Mendoza, Argentina.
          </p>
        </div>
      </div>
    </footer>
  );
}

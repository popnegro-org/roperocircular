import { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { site, whatsappLink, whatsappGeneralMessage } from '@/data/site';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Comprar y entregas', href: '#comprar' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-forest-900/10 bg-cream-100/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#inicio" className="flex items-center gap-3">
          <span
            aria-hidden
            className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-800 font-display text-lg italic text-cream-100"
          >
            R
          </span>
          <span className="font-display text-lg text-forest-900">
            {site.name}
          </span>
        </a>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-forest-800">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-olive-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {site.instagram.url && (
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Ropero Circular"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-forest-900/15 text-forest-800 transition-colors hover:bg-forest-800 hover:text-cream-100"
            >
              <Instagram size={16} />
            </a>
          )}
          <a
            href={whatsappLink(whatsappGeneralMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-forest-800 px-5 py-2.5 text-sm font-medium text-cream-100 transition-colors hover:bg-forest-700"
          >
            Escribinos
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="flex h-10 w-10 items-center justify-center rounded-full text-forest-900 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Navegación móvil"
          className="border-t border-forest-900/10 bg-cream-100 md:hidden"
        >
          <ul className="space-y-1 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-forest-900 transition-colors hover:bg-forest-50"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={whatsappLink(whatsappGeneralMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-forest-800 px-5 py-3 text-center text-sm font-medium text-cream-100"
              >
                Escribinos por WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

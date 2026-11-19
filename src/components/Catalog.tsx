import { useMemo, useState } from 'react';
import type { GarmentCategory } from '@/data/garments';
import { categories, garments } from '@/data/garments';
import { SearchX } from 'lucide-react';
import GarmentCard from '@/components/GarmentCard';

type SizeFilter = 'Todos' | 'S' | 'M' | 'L' | 'XL';

const sizeFilters: SizeFilter[] = ['Todos', 'S', 'M', 'L', 'XL'];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState<GarmentCategory | 'Todas'>('Todas');
  const [activeSize, setActiveSize] = useState<SizeFilter>('Todos');
  const [hideSold, setHideSold] = useState(false);

  const availableSizes = useMemo(() => {
    const set = new Set(garments.filter((g) => !g.sold).map((g) => g.size));
    return sizeFilters.filter((s) => s === 'Todos' || set.has(s as never));
  }, []);

  const filtered = useMemo(
    () =>
      garments.filter((g) => {
        if (activeCategory !== 'Todas' && g.category !== activeCategory) return false;
        if (activeSize !== 'Todos' && g.size !== activeSize) return false;
        if (hideSold && g.sold) return false;
        return true;
      }),
    [activeCategory, activeSize, hideSold]
  );

  const availableCount = garments.filter((g) => !g.sold).length;

  return (
    <section id="catalogo" className="bg-forest-50/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-700">
              Catálogo
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-forest-900 sm:text-5xl">
              Prendas disponibles
            </h2>
            <p className="mt-3 text-forest-800/70">
              {availableCount} prendas listas para encontrar una nueva dueña.
            </p>
          </div>

          <label className="inline-flex cursor-pointer items-center gap-3 text-sm text-forest-800">
            <input
              type="checkbox"
              checked={hideSold}
              onChange={(e) => setHideSold(e.target.checked)}
              className="h-4 w-4 accent-forest-700"
            />
            Ocultar vendidas
          </label>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-y border-forest-900/10 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="group"
            aria-label="Filtrar por categoría"
            className="flex flex-wrap gap-2"
          >
            {(['Todas', ...categories] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  activeCategory === cat
                    ? 'bg-forest-800 text-cream-100'
                    : 'border border-forest-900/15 text-forest-800 hover:border-forest-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div role="group" aria-label="Filtrar por talle" className="flex items-center gap-2">
            <span className="mr-1 text-xs uppercase tracking-[0.15em] text-forest-800/60">
              Talle
            </span>
            {availableSizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setActiveSize(size)}
                aria-pressed={activeSize === size}
                className={`h-9 w-9 rounded-full text-sm transition-colors ${
                  activeSize === size
                    ? 'bg-olive-600 text-cream-100'
                    : 'border border-forest-900/15 text-forest-800 hover:border-olive-600'
                }`}
              >
                {size === 'Todos' ? '·' : size}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((garment) => (
              <GarmentCard key={garment.id} garment={garment} />
            ))}
          </ul>
        ) : (
          <div className="mt-10 flex flex-col items-center rounded-2xl border border-dashed border-forest-900/20 bg-cream-50 px-6 py-16 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-olive-50 text-olive-700">
              <SearchX size={24} aria-hidden />
            </span>
            <h3 className="mt-5 font-display text-2xl text-forest-900">
              No hay prendas con estos filtros
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-forest-800/70">
              Probá combinando otra categoría o talle. También podés escribirnos
              y contarnos qué estás buscando.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('Todas');
                setActiveSize('Todos');
                setHideSold(false);
              }}
              className="mt-6 rounded-full border border-forest-800/25 px-6 py-2.5 text-sm font-medium text-forest-800 transition-colors hover:border-forest-800/60"
            >
              Ver todas las prendas
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

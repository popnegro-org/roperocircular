import type { Garment } from '@/data/garments';
import { garmentWhatsappMessage } from '@/data/garments';
import { site } from '@/data/site';
import { MessageCircle, Check } from 'lucide-react';

const palette: Record<Garment['colorKey'], { bg: string; accent: string }> = {
  olive: { bg: '#7c8450', accent: '#5b6238' },
  terracotta: { bg: '#c08a5a', accent: '#a06a3e' },
  sand: { bg: '#d9c9a4', accent: '#b3a075' },
  forest: { bg: '#4a6a58', accent: '#324e40' },
  clay: { bg: '#b9746b', accent: '#97564e' },
  cream: { bg: '#e6ddc6', accent: '#bfae86' },
};

function GarmentCard({ garment }: { garment: Garment }) {
  const colors = palette[garment.colorKey];
  const message = garmentWhatsappMessage(garment);

  return (
    <li className="group">
      <article
        className={`overflow-hidden rounded-2xl border bg-cream-50 transition-all duration-300 ${
          garment.sold
            ? 'border-forest-900/5 opacity-70'
            : 'border-forest-900/10 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(31,48,40,0.4)]'
        }`}
      >
        <div
          aria-hidden
          className="relative flex aspect-[3/4] items-center justify-center"
          style={{
            background: `linear-gradient(160deg, ${colors.bg} 0%, ${colors.accent} 100%)`,
          }}
        >
          <span className="font-display text-4xl italic text-cream-100/90">
            {garment.name.charAt(0)}
          </span>
          <span className="absolute left-4 top-4 rounded-full bg-cream-100/90 px-3 py-1 text-xs font-medium text-forest-900">
            Talle {garment.size}
          </span>
          {garment.sold && (
            <span className="absolute inset-0 flex items-center justify-center bg-forest-950/50">
              <span className="rounded-full bg-cream-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-forest-900">
                Vendida
              </span>
            </span>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-lg leading-snug text-forest-900">
              {garment.name}
            </h3>
            <span className="shrink-0 rounded-full bg-olive-50 px-2.5 py-1 text-[11px] font-medium text-olive-700">
              {garment.condition}
            </span>
          </div>

          <p className="mt-2 text-xs uppercase tracking-[0.12em] text-olive-600">
            {garment.category}
          </p>
          <p className="mt-2.5 text-sm leading-relaxed text-forest-800/75">
            {garment.notes}
          </p>

          <div className="mt-5">
            {garment.sold ? (
              <span className="flex w-full items-center justify-center gap-2 rounded-full border border-forest-900/10 px-4 py-2.5 text-sm text-forest-800/50">
                <Check size={15} aria-hidden />
                Ya encontró dueña
              </span>
            ) : (
              <a
                href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-forest-800 px-4 py-2.5 text-sm font-medium text-cream-100 transition-colors hover:bg-olive-600"
              >
                <MessageCircle size={15} aria-hidden />
                Consultar por esta prenda
              </a>
            )}
          </div>
        </div>
      </article>
    </li>
  );
}

export default function GarmentCardListItem({ garment }: { garment: Garment }) {
  return <GarmentCard garment={garment} />;
}

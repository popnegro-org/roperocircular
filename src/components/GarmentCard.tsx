import type { Garment } from '@/data/garments';
import { garmentWhatsappMessage } from '@/data/garments';
import { whatsappLink } from '@/data/site';
import { Check, MessageCircle, Shirt } from 'lucide-react';

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(price);
}

export default function GarmentCard({ garment }: { garment: Garment }) {
  const isAvailable = garment.availability === 'available';
  const statusLabel = garment.availability === 'sold' ? 'Vendida' : 'Reservada';

  return (
    <li className="group">
      <article className={`overflow-hidden rounded-2xl border bg-cream-50 transition-all duration-300 ${isAvailable ? 'border-forest-900/10 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(31,48,40,0.4)]' : 'border-forest-900/5 opacity-80'}`}>
        <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden bg-olive-50">
          {garment.imageUrl ? (
            <img src={garment.imageUrl} alt={`${garment.name}, talle ${garment.size}`} loading="lazy" className="h-full w-full object-cover" />
          ) : (
            <div className="flex flex-col items-center gap-3 text-olive-700/70" aria-label="Fotografía pendiente">
              <Shirt size={42} strokeWidth={1} aria-hidden />
              <span className="text-xs uppercase tracking-[0.15em]">Foto pendiente</span>
            </div>
          )}
          <span className="absolute left-4 top-4 rounded-full bg-cream-100/95 px-3 py-1 text-xs font-medium text-forest-900">Talle {garment.size}</span>
          {!isAvailable && (
            <span className="absolute inset-0 flex items-center justify-center bg-forest-950/40">
              <span className="rounded-full bg-cream-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-forest-900">{statusLabel}</span>
            </span>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-lg leading-snug text-forest-900">{garment.name}</h3>
            <span className="shrink-0 rounded-full bg-olive-50 px-2.5 py-1 text-[11px] font-medium text-olive-700">{garment.condition}</span>
          </div>
          <p className="mt-2 text-xs uppercase tracking-[0.12em] text-olive-600">{garment.category} · Código {garment.id}</p>
          <p className="mt-2.5 text-sm leading-relaxed text-forest-800/75">{garment.notes}</p>
          <div className="mt-4">
            {garment.priceArs !== undefined ? <p className="font-semibold text-forest-900">{formatPrice(garment.priceArs)}</p> : <p className="text-xs text-forest-800/60">Consultar precio</p>}
          </div>
          <div className="mt-5">
            {isAvailable ? (
              <a href={whatsappLink(garmentWhatsappMessage(garment))} target="_blank" rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-forest-800 px-4 py-2.5 text-sm font-medium text-cream-100 transition-colors hover:bg-olive-600">
                <MessageCircle size={15} aria-hidden />Consultar por esta prenda
              </a>
            ) : (
              <span className="flex w-full items-center justify-center gap-2 rounded-full border border-forest-900/10 px-4 py-2.5 text-sm text-forest-800/60">
                <Check size={15} aria-hidden />{statusLabel}
              </span>
            )}
          </div>
        </div>
      </article>
    </li>
  );
}

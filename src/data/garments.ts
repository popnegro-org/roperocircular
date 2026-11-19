export type GarmentCategory = 'Vestidos' | 'Blusas y camisas' | 'Abrigos' | 'Pantalones' | 'Faldas' | 'Tejidos';
export type GarmentSize = 'S' | 'M' | 'L' | 'XL';
export type GarmentAvailability = 'available' | 'reserved' | 'sold';

export interface Garment {
  id: string;
  name: string;
  category: GarmentCategory;
  size: GarmentSize;
  condition: 'Impecable' | 'Muy bueno' | 'Bueno';
  notes: string;
  priceArs?: number;
  imageUrl?: string;
  availability: GarmentAvailability;
}

export const categories: GarmentCategory[] = [
  'Vestidos', 'Blusas y camisas', 'Abrigos', 'Pantalones', 'Faldas', 'Tejidos',
];

// El catálogo queda vacío hasta cargar prendas reales y disponibilidad confirmada.
export const garments: Garment[] = [];

export function garmentWhatsappMessage(garment: Garment): string {
  return [
    '¡Hola, Ropero Circular!',
    `Vi la prenda "${garment.name}" (código ${garment.id}, talle ${garment.size}).`,
    '¿Podrían confirmarme si sigue disponible y cómo coordinar la entrega?',
  ].join(' ');
}

export interface GarmentFilters {
  category?: GarmentCategory | 'Todas';
  size?: GarmentSize | 'Todos';
  onlyAvailable?: boolean;
  query?: string;
}

export function filterGarments(items: Garment[], filters: GarmentFilters): Garment[] {
  const term = filters.query?.trim().toLocaleLowerCase('es-AR') ?? '';

  return items.filter((garment) => {
    if (filters.category && filters.category !== 'Todas' && garment.category !== filters.category) return false;
    if (filters.size && filters.size !== 'Todos' && garment.size !== filters.size) return false;
    if (filters.onlyAvailable && garment.availability !== 'available') return false;
    if (term && ![garment.name, garment.notes, garment.category, garment.id]
      .join(' ').toLocaleLowerCase('es-AR').includes(term)) return false;
    return true;
  });
}

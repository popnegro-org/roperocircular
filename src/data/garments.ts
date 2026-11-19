export type GarmentCategory =
  | 'Vestidos'
  | 'Blusas y camisas'
  | 'Abrigos'
  | 'Pantalones'
  | 'Faldas'
  | 'Tejidos';

export type GarmentSize = 'S' | 'M' | 'L' | 'XL';

export interface Garment {
  id: string;
  name: string;
  category: GarmentCategory;
  size: GarmentSize;
  condition: 'Impecable' | 'Muy bueno' | 'Bueno';
  notes: string;
  colorKey: 'olive' | 'terracotta' | 'sand' | 'forest' | 'clay' | 'cream';
  sold: boolean;
}

export const categories: GarmentCategory[] = [
  'Vestidos',
  'Blusas y camisas',
  'Abrigos',
  'Pantalones',
  'Faldas',
  'Tejidos',
];

export const garments: Garment[] = [
  {
    id: 'vst-01',
    name: 'Vestido midi floral',
    category: 'Vestidos',
    size: 'M',
    condition: 'Impecable',
    notes: 'Vestido midi con estampa floral en tonos suaves, mangas cortas.',
    colorKey: 'sand',
    sold: false,
  },
  {
    id: 'bls-01',
    name: 'Blusa de lino blanca',
    category: 'Blusas y camisas',
    size: 'S',
    condition: 'Muy bueno',
    notes: 'Blusa fresca de lino, cuello campero, ideal para el verano mendocino.',
    colorKey: 'cream',
    sold: false,
  },
  {
    id: 'abr-01',
    name: 'Campera de jean clásica',
    category: 'Abrigos',
    size: 'M',
    condition: 'Muy bueno',
    notes: 'Campera de denim lavado clásica, cierre metálico en buen estado.',
    colorKey: 'forest',
    sold: false,
  },
  {
    id: 'tej-01',
    name: 'Sweater tejido ocre',
    category: 'Tejidos',
    size: 'L',
    condition: 'Impecable',
    notes: 'Sweater de punto cálido, lana gruesa, cuello redondo.',
    colorKey: 'terracotta',
    sold: false,
  },
  {
    id: 'pan-01',
    name: 'Pantalón recto beige',
    category: 'Pantalones',
    size: 'M',
    condition: 'Muy bueno',
    notes: 'Pantalón de vestido recto, tiro medio, tela liviana.',
    colorKey: 'sand',
    sold: false,
  },
  {
    id: 'fld-01',
    name: 'Falda plisada verde',
    category: 'Faldas',
    size: 'S',
    condition: 'Bueno',
    notes: 'Falda plisada midi en verde oliva, movimiento muy lindo.',
    colorKey: 'olive',
    sold: false,
  },
  {
    id: 'vst-02',
    name: 'Vestido largo de lino',
    category: 'Vestidos',
    size: 'L',
    condition: 'Impecable',
    notes: 'Vestido largo entallado, corte simple y atemporal.',
    colorKey: 'clay',
    sold: false,
  },
  {
    id: 'abr-02',
    name: 'Trench camel',
    category: 'Abrigos',
    size: 'M',
    condition: 'Muy bueno',
    notes: 'Trench clásico color camel, cinturón incluido, forro completo.',
    colorKey: 'sand',
    sold: false,
  },
  {
    id: 'bls-02',
    name: 'Camisa oxford celeste',
    category: 'Blusas y camisas',
    size: 'L',
    condition: 'Muy bueno',
    notes: 'Camisa oxford de algodón, ligeramente oversize.',
    colorKey: 'forest',
    sold: false,
  },
  {
    id: 'tej-02',
    name: 'Cárdigan grueso crudo',
    category: 'Tejidos',
    size: 'M',
    condition: 'Bueno',
    notes: 'Cárdigan de punto grueso color crudo, botones de madera.',
    colorKey: 'cream',
    sold: false,
  },
  {
    id: 'pan-02',
    name: 'Jean de tiro alto',
    category: 'Pantalones',
    size: 'S',
    condition: 'Impecable',
    notes: 'Jean de tiro alto, pierna recta, sin desgastes.',
    colorKey: 'forest',
    sold: false,
  },
  {
    id: 'vst-03',
    name: 'Vestido negro de gala',
    category: 'Vestidos',
    size: 'M',
    condition: 'Muy bueno',
    notes: 'Vestido negro de gala, caída fluida, detalles en la manga.',
    colorKey: 'forest',
    sold: true,
  },
];

export function garmentWhatsappMessage(garment: Garment): string {
  return [
    `¡Hola, Ropero Circular!`,
    `Vi en el sitio el modelo "${garment.name}" (talle ${garment.size}).`,
    `¿Sigue disponible? Me gustaría coordinar cómo verlo.`,
  ].join(' ');
}

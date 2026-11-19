export const site = {
  name: 'Ropero Circular',
  tagline: 'Ropa usada, nuevas oportunidades.',
  description:
    'Ropa usada y prendas de segunda mano en Maipú, Mendoza. Elegí lo tuyo y coordinamos la entrega: envío a domicilio o retiro coordinado por WhatsApp.',
  location: 'Maipú, Mendoza, Argentina',
  whatsappNumber: '5492616706710',
  whatsappDisplay: '+54 9 261 670-6710',
  instagram: {
    // Dejar en null hasta que el propietario comparta la URL del perfil.
    handle: null as string | null,
    url: null as string | null,
  },
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappGeneralMessage =
  '¡Hola! Vengo del sitio web de Ropero Circular y quiero hacer una consulta.';

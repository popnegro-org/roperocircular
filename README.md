# Ropero Circular — Sitio web PMV

Landing comercial de **Ropero Circular**, emprendimiento de ropa usada y prendas de segunda mano de Maipú, Mendoza, Argentina.

- Eslogan: *Ropa usada, nuevas oportunidades.*
- WhatsApp: [+54 9 261 670-6710](https://wa.me/5492616706710)
- Instagram: pendiente de configurar (ver [Instagram](#instagram-integración-configurable)).

## Stack

Vite + React + TypeScript + Tailwind CSS. Sin backend, sin base de datos, sin carrito, sin pagos y sin autenticación, según el alcance del PMV (Issue #1).

## Arquitectura

```
index.html                     Metadatos SEO (título, descripción, Open Graph, lang="es")
public/favicon.svg             Ícono del sitio
src/
  main.tsx                     Punto de entrada
  App.tsx                      Composición de secciones
  index.css                    Tipografías (Fraunces + Work Sans), base de estilo
  data/
    site.ts                    Datos comerciales + configuración de Instagram
    garments.ts                Catálogo de prendas (archivo editable)
  components/
    Navbar.tsx                 Navegación fija con menú móvil
    Hero.tsx                   Portada con datos del emprendimiento
    Catalog.tsx                Catálogo con filtros por categoría y talle
    GarmentCard.tsx            Tarjeta de prenda con consulta por WhatsApp
    HowToBuy.tsx               Cómo comprar y entregas
    InfoSection.tsx            Entrega a domicilio y retiro coordinado
    InstagramSection.tsx       Sección de Instagram (configurable)
    Footer.tsx                 Pie de página con contacto
```

## Actualizar el catálogo

Editá `src/data/garments.ts`. Cada prenda es un objeto dentro del arreglo `garments`:

```ts
{
  id: 'vst-01',                    // identificador único, no se repite
  name: 'Vestido midi floral',     // nombre visible en la tarjeta
  category: 'Vestidos',            // categoría (ver lista `categories`)
  size: 'M',                       // talle: S | M | L | XL
  condition: 'Impecable',          // estado: Impecable | Muy bueno | Bueno
  notes: 'Descripción corta de la prenda.',
  colorKey: 'sand',                // color del mosaico: olive | terracotta | sand | forest | clay | cream
  sold: false,                     // true = aparece como "Vendida"
}
```

Para agregar una prenda: copiá un bloque existente, cambiá los valores y el `id`.
Para marcar una venta: poné `sold: true` (la tarjeta se atenúa y deja de ofrecer
el botón de WhatsApp). Para quitar una prenda: borrá su bloque completo.

Las categorías nuevas se agregan en el arreglo `categories` del mismo archivo y
aparecen automáticamente como filtro.

## Instagram (integración configurable)

La URL del perfil **no está inventada ni publicada**. Cuando el propietario la
comparta, editar `src/data/site.ts`:

```ts
instagram: {
  handle: '@roperocircular',            // el @ real
  url: 'https://www.instagram.com/...', // la URL real
},
```

Mientras `url` sea `null`, el sitio muestra "Pronto en Instagram" y ningún
ícono enlaza a un perfil inexistente.

## Comandos

```bash
npm run dev        # desarrollo
npm run build      # build de producción
npm run lint       # ESLint
npm run typecheck  # TypeScript
```

## Privacidad

- No se publica la dirección residencial: solo "Maipú, Mendoza" y la
  coordinación del retiro por WhatsApp.
- No se inventan horarios, precios, productos reales ni perfiles sociales.
  Las prendas del catálogo son de ejemplo y deben reemplazarse por las reales.

## Estado de la entrega

- [x] Landing responsive con identidad visual (verde bosque, oliva, crema)
- [x] Catálogo con filtros por categoría y talle, y estado "vendida"
- [x] Consultas por WhatsApp con mensaje personalizado por prenda
- [x] Instagram preparado como integración configurable
- [x] SEO básico (lang es, descripción, Open Graph) y accesibilidad (roles, aria-labels, contraste)
- [x] Lint, typecheck y build verificados
- [x] Rama candidata `pmv/landing-catalogo` y Pull Request hacia `main`
- [ ] Capturas: adjuntar al PR desde la vista previa del proyecto (este flujo no tiene navegador)
- [ ] Pendientes del propietario: URL de Instagram, fotos reales de prendas,
  precios (fuera del alcance de este PMV) y política de horarios de retiro.

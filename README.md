# VetMed Connect

Plataforma B2B para la gestión eficiente de medicamentos veterinarios en el Distrito Metropolitano de Quito, Ecuador. Conecta distribuidores con veterinarias de forma inteligente, permitiendo automatizar pedidos, controlar stock y localizar productos en tiempo real.

## Descripción

VetMed Connect es una solución integral que facilita la comunicación y gestión comercial entre:

- **Distribuidores**: Gestión centralizada de catálogo, inventario en tiempo real y conexión con veterinarias asociadas.
- **Veterinarias**: Gestión automatizada de stock, control de ventas POS y pedidos directos a distribuidores.
- **Público General**: Búsqueda rápida de medicinas, localización de clínicas cercanas y consulta de disponibilidad real.

## Stack Tecnológico

- **Framework**: [Next.js 16](https://nextjs.org/) con App Router
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Iconos**: [Material Symbols](https://fonts.google.com/icons)
- **Fuentes**: Manrope, Lexend (Google Fonts)

## Características Principales

- Dashboard para distribuidores con métricas y alertas
- Gestión de inventario de productos médicos veterinarios
- Administración de veterinarias asociadas
- Sistema de alertas de stock bajo y productos próximos a vencer
- Interfaz responsive con soporte para modo claro/oscuro
- Formularios modales para agregar/editar productos y veterinarias

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/vimofama/vetmed-app

# Navegar al directorio
cd vetmed-app

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del Proyecto

```
vetmed-app/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── layout.tsx                  # Layout principal
│   ├── globals.css                 # Estilos globales
│   └── dashboard/
│       ├── page.tsx                # Dashboard del distribuidor
│       ├── layout.tsx              # Layout del dashboard
│       └── veterinarias/
│           └── page.tsx            # Gestión de veterinarias
├── components/
│   └── dashboard/
│       ├── Navbar.tsx              # Barra de navegación
│       ├── Footer.tsx              # Pie de página
│       └── veterinary/
│           ├── ProductForm.tsx     # Formulario de productos
│           └── VeterinaryForm.tsx  # Formulario de veterinarias
├── lib/
│   └── utils.ts                    # Utilidades
└── public/                         # Archivos estáticos
```

## Scripts Disponibles

```bash
pnpm dev      # Inicia el servidor de desarrollo
pnpm build    # Construye la aplicación para producción
pnpm start    # Inicia el servidor de producción
pnpm lint     # Ejecuta el linter
```


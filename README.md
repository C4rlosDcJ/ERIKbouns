# ERIKbouns - Portafolio Web Profesional

Sitio web portafolio profesional, minimalista y responsivo de alto rendimiento para la marca **ErikBouns** (Tecnología y Entretenimiento) y su división de reparación técnica **ONEFIX**.

## Características destacadas

- **Identidad de Marca Integrada**: Logotipo oficial incorporado en la pestaña del navegador (Favicon), menú principal (Navbar), pie de página (Footer) y tarjeta de presentación interactiva.
- **Diseño Premium Minimalista**: Paleta de colores renovada en Azul Marino Profundo (Navy) y Slate, complementada con elegantes acentos en Azul Eléctrico y tipografía de alto contraste.
- **Animaciones de Desplazamiento (Scroll Reveal)**: Efecto de aparición y deslizamiento dinámico y secuencial en las secciones a medida que el usuario navega por la página.
- **Interacciones Táctiles y Carruseles**: Carrusel de marcas optimizado con controles táctiles/swipe en móviles y botones de desplazamiento en escritorio.
- **Redirección de ONEFIX**: Botón de solicitud de cotización vinculado directamente a la aplicación externa de reparación.

## Tecnologías utilizadas

- **React 18**
- **Vite**
- **Vanilla CSS (Design System v5 - Premium Navy Edition)**
- **IntersectionObserver API**

## Estructura del proyecto

- `src/components/Navbar.jsx` - Navegación con logotipo y menú móvil adaptado a tabletas (1024px)
- `src/components/Hero.jsx` - Sección principal con animación de tipeo en vivo y estadísticas de la comunidad
- `src/components/About.jsx` - Historia de la marca y tarjeta visual con logotipo integrado
- `src/components/YouTube.jsx` - Carrusel de vídeos destacados
- `src/components/ONEFIX.jsx` - Servicios técnicos especializados con enlace a cotizador externo
- `src/components/Donate.jsx` - Opciones de patrocinio y soporte
- `src/components/Brands.jsx` - Carrusel interactivo de marcas aliadas con respaldo vectorial
- `src/components/Contact.jsx` - Formulario de negocios y canales de contacto directo
- `src/components/Footer.jsx` - Firma del pie de página con logotipo oficial y redes sociales

## Instalación y ejecución

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

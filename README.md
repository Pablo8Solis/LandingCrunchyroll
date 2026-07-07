# Crunchyroll Landing Page 🚀

Una página de aterrizaje (landing page) responsiva, accesible y altamente optimizada para Crunchyroll, desarrollada con **HTML5 semántico**, **Tailwind CSS v4.0** y **JavaScript (Vanilla)**.

El proyecto está diseñado bajo buenas prácticas modernas de SEO, accesibilidad para el usuario (A11y) y rendimiento móvil.

---

## ✨ Características Principales

*   **Diseño Responsivo e Impactante:** Diseño oscuro (dark mode) premium que evoca la identidad visual de Crunchyroll, adaptándose perfectamente a pantallas móviles, tabletas y computadoras de escritorio.
*   **Optimización de Imágenes (WebP):** Script automatizado con **Sharp** que convierte imágenes (PNG/JPG) a formato `.webp` con compresión de alta calidad, reduciendo drásticamente el peso de la página y mejorando la velocidad de carga (CLS preventivo).
*   **Accesibilidad (A11y):**
    *   **Skip Link:** Enlace oculto para usuarios de lectores de pantalla y navegación por teclado que permite saltar directamente al contenido principal (`#main-content`).
    *   **Foco Visible:** Indicador de foco personalizado (`:focus-visible`) con estilo naranja corporativo de Crunchyroll.
    *   **Movimiento Reducido:** Soporte para la media query `prefers-reduced-motion` que desactiva animaciones y transiciones a nivel global para usuarios que lo requieran.
    *   **Estructura Semántica:** Marcado HTML5 limpio usando etiquetas adecuadas (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) y atributos `role` / `aria-label`.
*   **SEO Técnico Avanzado:**
    *   Marcado de datos estructurados **JSON-LD** para mejorar la indexación en motores de búsqueda (`WebSite` y `Organization`).
    *   Metadatos completos para **Open Graph** y **Twitter Cards** para una visualización rica al compartir enlaces.
    *   Etiqueta canonical configurada.
*   **Catálogo Dinámico:** Carga asíncrona/dinámica de tarjetas de anime mediante JavaScript, manteniendo el código HTML limpio y modular.

---

## 🛠️ Tecnologías y Herramientas

*   **HTML5** (Semántica y Accesibilidad)
*   **Tailwind CSS v4.3.2** (Uso de la nueva CLI `@tailwindcss/cli` y directivas CSS modernas)
*   **JavaScript Vanilla** (Construcción dinámica del DOM)
*   **Node.js** & **Sharp** (Procesamiento y compresión de activos gráficos)

---

## 📁 Estructura del Proyecto

```text
Crunchyrooll/
├── img/                       # Recursos gráficos (.webp, .png, .jpg)
├── scripts/
│   └── convert-to-webp.js     # Script de procesamiento de imágenes con Sharp
├── src/
│   └── input.css              # Estilos fuente y configuraciones de Tailwind v4
├── index.html                 # Página principal con scripts e integraciones SEO
├── styles.css                 # CSS final compilado y minificado por Tailwind
├── package.json               # Dependencias del proyecto y scripts npm
└── vercel.json                # Configuración de despliegue para Vercel
```

---

## 🚀 Instalación y Desarrollo Local

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).

### 1. Instalar Dependencias

Clona o descarga el proyecto, abre la terminal en el directorio raíz y ejecuta:

```bash
npm install
```

*(O utiliza `pnpm install` / `yarn install` según tu gestor de paquetes de preferencia)*.

### 2. Ejecutar el Servidor de Desarrollo (Tailwind Watch)

Para iniciar el compilador de Tailwind CSS en modo escucha ("watch"), el cual vigila los cambios en `index.html` y compila automáticamente hacia `styles.css`:

```bash
npm run dev
```

### 3. Compilar para Producción

Para compilar y minificar las hojas de estilo optimizándolas para el entorno de producción:

```bash
npm run build
```

### 4. Convertir Imágenes Nuevas a WebP

Si agregas nuevas imágenes en formatos `.jpg` o `.png` en la carpeta `img/`, puedes convertirlas automáticamente al formato optimizado `.webp` ejecutando:

```bash
node scripts/convert-to-webp.js
```

El script analizará la carpeta, convertirá los nuevos archivos a WebP al 80% de calidad, y te mostrará un resumen del ahorro en espacio en bytes y porcentaje en la consola.

---

## 🌐 Despliegue

El proyecto cuenta con una configuración rápida en `vercel.json` para despliegues instantáneos a **Vercel** sirviendo la carpeta raíz:

```json
{
  "outputDirectory": "."
}
```

Solo conecta tu repositorio a Vercel o ejecuta `vercel` en la terminal para publicarlo.

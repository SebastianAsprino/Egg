# Egg — Curso de Programación Web

Repositorio con los ejercicios y el proyecto final del curso de desarrollo web brindado por el
**Servicio Público de Empleo** y dictado por [Egg](https://egg.live) (2023). Todo está hecho con
**HTML5, CSS3 y JavaScript** sin frameworks ni herramientas de build.

## Proyecto final: «Mi Primera Web»

Sitio de una sola página inspirado en la estética **vaporwave**, publicado en
[egg.asprino.tech](https://egg.asprino.tech/) (carpeta [`Mi_Pagina_Web/`](Mi_Pagina_Web)).

- Diseño responsive con Flexbox y media queries.
- Tipografía variable **Monaspace Krypton** auto-hospedada (`.woff2`) con `preload`.
- Imágenes WebP/PNG/JPG con texto alternativo descriptivo.
- SEO básico: `meta description`, Open Graph, URL canónica y `robots.txt`.
- Secciones: introducción, tarjetas (música, arte y ropa), historia y pie con contacto y redes.

## Ejercicios del curso

| Carpeta | Tema |
| --- | --- |
| `PWDC/mi_primera_web`, `PWDC/paso 20` | Primera página: encabezados, listas y texto con gradiente en CSS |
| `PWDC/paso 6` | Introducción a CSS |
| `PWDC/paso 7/modo claro y oscuro` | Modo claro/oscuro con `prefers-color-scheme` (CSS) y con cambio de hoja de estilos (JS) |
| `PWDC/paso 10` | Flexbox: barra de navegación, cabecera y grilla de fotos |
| `PWDC/paso 13` | Elementos en bloque y en línea |
| `PWDC/paso 14` | Posicionamiento: `static`, `relative`, `absolute` y `fixed` |
| `PWDC/css-modelo-de-cajas` | Modelo de cajas |
| `PWDC/paso 25` | Formularios: campos, `select` y estilos de formulario |
| `PWDC/explicacion a` | Navegación entre páginas con enlaces relativos |
| `PWDC/ejercicio complementario pagina responsiva` | Maquetación responsive de una tarjeta de perfil (plantilla Orion) |
| `paso 35` | Maqueta de una landing page de adopción de mascotas |

## Estructura

```text
.
├── Mi_Pagina_Web/        # Proyecto final (index.html, robots.txt, Assets/ con CSS, fuentes e imágenes)
├── PWDC/                 # Ejercicios paso a paso del curso
└── paso 35/              # Ejercicio de landing page
```

## Cómo verlo

No requiere instalación: abrí cualquier `index.html` en el navegador o serví la carpeta con un
servidor estático, por ejemplo:

```sh
python3 -m http.server 8000 --directory Mi_Pagina_Web
# http://localhost:8000
```

> El proyecto final usa rutas absolutas (`/Assets/...`) para la fuente, por lo que debe servirse
> desde la raíz del dominio (como en el comando anterior) para que cargue la tipografía.

## Despliegue

`Mi_Pagina_Web/` es un sitio estático: puede publicarse tal cual en GitHub Pages, Netlify,
Vercel o cualquier hosting estático apuntando a esa carpeta.

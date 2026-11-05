# ESTADO del portfolio

Última actualización: 2026-11-05 (v5, textos + rejilla de Formación en dos columnas). Archivo para ver de un vistazo qué hemos hecho, qué estamos haciendo y hacia dónde vamos. Se actualiza cuando Fernando lo pide o al cerrar un bloque de trabajo.

## Qué es
Portfolio personal de **Fernando Mínguez** (con tilde, confirmado): desarrollador full stack junior con 9 años en marketing y operaciones, que busca **prácticas de DAW/DAM en marzo de 2027**. Web estática (HTML, CSS y JS sin frameworks), ligera, en una sola página. Inspirada en adhamdannaway.com (cara partida y menú), aaabadcode.com (humo de colores), majd-portfolio (frase que se enciende al hacer scroll) y fmorenil.dev (tarjetas con mockups).

Ver en local: `python -m http.server 5173 --directory public` desde esta carpeta y abrir `http://localhost:5173/index.html`.

## Estructura (reorganizada el 05-11-2026)
- **`public/`** — la web que se publica: `index.html`, `css/styles.css`, `js/` (main.js, smoke.js), `assets/` (foto, miniaturas, fuentes, logos). Es lo que irá tal cual a Cloudflare Pages (root = `public`).
- **`docs/`** — ESTADO.md, DESIGN.md, PRODUCT.md y `.impeccable/` (documentación, no se publica).
- **`fuente/`** — originales pesados (foto de 7,5 MB, logos aportados por Fernando). No se publica.

## Pendiente: auditoría de código ✅ HECHA (3 bucles de 4)
Hecha por el agente auditor el 05-11-2026 tras la reorganización (el 3.º bucle ya no encontró nada):
- **Arreglos**: regla CSS muerta `.caret` + `@keyframes blink` fuera (restos del editor tecleado); selector de reduced-motion corregido (compacto a solo los chips); 6 `<symbol>` SVG muertos elimi­nados del sprite (`i-bars`, `i-funnel`, `i-githubactions`, `i-horn`, `i-hubspot`, `i-trend`, ~3 KB).
- **Verificado**: 0 errores/avisos en consola (desktop y móvil, con movimiento del ratón), 0 peticiones ≥400 y 0 imágenes rotas en Red, `node --check` en verde para main.js y smoke.js (módulo ES), visual compuesto a 1440/1100/813/500/390 sin desalineaciones.
- Sin tocar: sidecar JSON de imágenes del pipeline (posible POD; los tratará si se decide); smoke.js solo auditado estructuralmente. Nada de commits.
- **Post-auditoría (mismo día, Fernando)"**: título "FP Superior en Desarrollo de Aplicaciones Web" ya nunca se parte en anchos intermedios. Solución final (ver sexta tanda): `.cv__cols` en dos columnas `1.35fr/1fr` y apilado solo por debajo de 1040px; escudo/badge column 132px fija y uniforme para los 4 centros.

## Lo que hemos hecho
1. **v1 · "carta de ajuste":** magenta contra gris, slider arrastrable. Descartada.
2. **v2 · claro y limpio:** textos del hero, tarjetas con sombra suave, mitad Marketing con pinceladas. Se descartó la imagen; se conservó el estilo.
3. **v3 / v3.1:** slider + humo de colores WebGL + iconos de tecnologías + proyectos reordenados.
4. **v4:**
   - **Hero sin slider:** una sola escena con una sola foto. La pantalla está "partida" solo por dentro: el humo ocupa la mitad izquierda y se desvanece hacia el centro de la cara; los iconos solo siguen al ratón en la mitad derecha; el título del lado donde está el ratón destaca.
   - **Código que se escribe solo de fondo** (fernando.ts y PerfilController.java), sin ventana: va tenue y **sube a plena opacidad cuando el ratón pasa por encima**. Se detiene fuera de vista y con "reducir movimiento".
   - **Marketing con herramientas:** diez fichas abajo a la izquierda, separadas de la foto, con Google Analytics, Google Ads, Odoo, HubSpot, Looker Studio, Search Console, Power BI, Mailchimp, Canva y un icono de tendencia. Solo siguen al ratón en esa mitad.
   - **Código de fondo:** pasa a plena opacidad con el cursor en cualquier punto de la mitad derecha.
   - **Foto original** de nuevo, recodificada desde `fuente/foto.jpg` (AVIF 1800 y 1000 px, WebP de reserva).
   - **Cursor:** se probó un cursor propio (punto con círculo) y no gustó; **se volvió al cursor normal del sistema**.
   - **Menú superior** estilo Adham: Sobre mí · Experiencia · Trabajos · Contacto, iconos de LinkedIn y GitHub y botón Escríbeme. Menú desplegable en móvil y enlace activo según la sección.
   - **Frase "Sobre mí"** cuyas palabras se encienden al hacer scroll (texto fijado por Fernando, ver v5).
   - **Sección Experiencia** con los datos de tu CV: perfil (versión de Fernando: "Angular y Java con Spring Boot… cuentas, equipos y datos de negocio B2B/B2C"), Numik Labs, ValgrAI, Binoovo, Way to Blue, formación, idiomas, soft skills y stack en siete grupos, con icono en todas las tecnologías que lo tienen (nuevo grupo "Marketing y datos"; **MariaDB añadida** en bases de datos). Sin icono: Mockito, ArchUnit, Scrum, Kanban, APIs REST, etc. porque no existen en la librería. Sin teléfono y sin PDF.
   - **Tarjetas con mockups:** móvil para Trazen y SitIn, ventana de navegador para 2048, con etiquetas de stack y botones de enlace. "Más proyectos": PokeAPI, daw-movies, Gestión Monetaria.
   - **Contacto** (título "¿Hablamos?"): botón Escríbeme (abre el correo con asunto y saludo), botón Copiar correo, LinkedIn y GitHub. Sin formulario (decisión razonada: web estática).
5. **v5 (actual) · revisión editorial de textos**, sin cambiar diseño ni estructura:
   - **Textos fijados por Fernando, literales:** hero Marketing ("9 años de experiencia en marketing, comunicación y operaciones…"), hero Desarrollo ("Desarrollador full stack junior, enfocado en Java, Spring Boot y Angular…") y "Sobre mí" ("Transformo necesidades de negocio en soluciones digitales. Combino 9 años…"). Se **eliminaron los enlaces del hero** (Ver trabajos / Ver experiencia).
   - **Título de pestaña y descripción:** "Fernando Mínguez · Desarrollador full stack junior"; el lema "Entender el negocio. Construir la tecnología." vive solo ahí (y en la intención del posicionamiento).
   - **Experiencia:** perfil técnico reescrito (Java/Spring Boot, Angular, tests y trabajo con agentes de IA: especifico, reviso, valido); **Numik Labs separado** como "Proyecto emprendedor"; ValgrAI, Binoovo y Way to Blue reescritos sin "liderar" ni "equipos técnicos"; soft skills concretas; enlace "Experiencia anterior y detalle completo en LinkedIn".
   - **Stack por nivel:** Stack principal, APIs/arquitectura/testing, Herramientas, Producto y plataformas, IA, Marketing y negocio y **Complementarias (vistas en formación)** con MySQL, MariaDB, MongoDB, Swagger, Postman, ArchUnit, Mutation testing, Angular Material, Sass y Microservicios. No se eliminó ninguna tecnología.
   - **Proyectos:** Trazen y 2048 "Publicado", SitIn "En desarrollo"; PokeAPI y daw-movies marcados como "Ejercicio de aprendizaje"; Gestión Monetaria como proyecto personal.
   - **Contacto:** prácticas de desarrollo de software en marzo de 2027.
   - **Ajustes posteriores:** logo de Spring Boot cambiado a la hoja verde; en el hero Marketing quedan seis iconos de herramientas (Google Analytics, Google Ads, Looker, Power BI junto a Looker, Odoo y Mailchimp), sin Canva, HubSpot, flecha ni maletín; en Desarrollo los iconos van agrupados por afinidad (Angular+TypeScript, Java+Spring Boot+Docker, Git+GitHub, OpenCode+Claude Code); salto de línea tras "automatizados." en el perfil; "Autonomía, demostrada en proyectos propios."; en el stack se quitaron Microservicios, HubSpot y GitHub Actions; en las tarjetas se quitaron las etiquetas PostGIS, PWA, CI y Capacitor.
   - Verificado contra tus carpetas: Java/Spring, Angular, JavaScript, PostgreSQL/PostGIS, Docker, JUnit/Mockito y Capacitor/Ionic tienen uso en proyectos propios; MySQL/MariaDB, ArchUnit, Swagger y mutation testing solo en ejercicios del ciclo.

## Para recordar a Fernando si quiere volver a añadirlos
Cosas que se quitaron por petición suya (2026-11-05). **Recordárselo cuando toque el stack, las tarjetas de proyectos o el hero**, sobre todo lo relacionado con los trabajos:
- **Etiquetas de las tarjetas de proyectos:** *PostGIS* (SitIn), *PWA* y *CI* (2048) y *Capacitor* (Trazen). Siguen mencionadas en el texto de las tarjetas donde corresponde (p. ej. SitIn usa PostGIS, Trazen usa Capacitor) y *PWA*/*Capacitor* siguen en el grupo "Producto y plataformas" del stack.
- **Stack:** *Microservicios* (no tiene uso en ningún proyecto), *HubSpot* (sigue citado en el texto de ValgrAI) y *GitHub Actions* (2048 usa CI).
- **Hero, mitad Marketing:** iconos de *Canva*, *HubSpot*, el de tendencia (flecha) y el de *Search Console* (maletín). Canva, HubSpot y Search Console siguen en el grupo "Marketing y negocio" del stack.

## Para publicar en Cloudflare (Pages + Registrar): lista anotada el 2026-11-05
Detalle completo en el plan guardado (C:/Users/ferna/.claude/plans/quiero-usar-el-skill-validated-owl.md). Nada de esto está hecho todavía.

**Decisiones de Fernando antes de empezar**
1. Dominio y extensión: Cloudflare Registrar admite más de 400, pero **no está confirmado `.es` ni `.dev`** (los dominios de país suelen quedar fuera); comprobarlo en su buscador.
2. ¿Habrá actividad económica con la web (autónomo, facturar, publicidad)? Decide si el aviso legal es exigible.
3. Correo: mantener `fernandomguez@gmail.com` o crear uno del dominio con Cloudflare Email Routing (gratis).
4. Repositorio de GitHub: público o privado y nombre.

**Imprescindible**
- Repositorio remoto en GitHub (hoy solo hay git local: `main` y `backup/2026-11-05`).
- **Carpeta de salida limpia:** mover la web a `public/` (`index.html`, `styles.css`, `main.js`, `smoke.js`, `assets/`) y dejar fuera `ESTADO.md`, `PRODUCT.md`, `DESIGN.md`, `.impeccable/` y `fuente/` (la foto original de 7,5 MB no debe publicarse). Pages: sin comando de build, directorio de salida `public`.
- Dominio y DNS en Cloudflare, HTTPS automático, `www` redirigido al dominio sin `www`, y `404.html`.

**Legal en España** (no soy abogado; contrastar con la guía de la AEPD o un abogado)
- Sin cookies, analítica, formularios ni fuentes externas: **no hace falta banner de cookies**.
- Aviso legal (LSSI): una web personal sin actividad económica queda fuera, pero un portfolio para captar trabajo o clientes podría interpretarse como actividad económica. Lo prudente: página breve "Aviso legal y privacidad" enlazada en el pie; NIF y domicilio solo si hay actividad económica.

**Muy recomendable**
- Imagen social 1200×630 y etiquetas Open Graph/Twitter (hoy hay 0, LinkedIn no mostraría vista previa), `canonical`, JSON-LD `Person` (opcional), favicon real y `site.webmanifest`, `robots.txt`, `sitemap.xml`.
- Archivo `_headers` con cabeceras de seguridad, una CSP probada (hay un script en línea, `smoke.js` se importa dinámicamente y hay `data:`) y caché para `assets/`.
- Enlace "Saltar al contenido" y Lighthouse; correo del dominio con SPF/DKIM/DMARC; actualizar el dominio en LinkedIn, GitHub y el CV.

**Ya comprobado:** las imágenes publicadas no llevan EXIF ni GPS; `lang`, `title`, `description` y `alt` existen; sin peticiones a terceros.

## Cómo está ahora
- **Archivos:** `index.html`, `styles.css`, `main.js` (menú, hero, editor, scroll, copiar correo), `smoke.js` (humo WebGL2), `assets/` (foto, miniaturas, fuente Figtree).
- **Peso estimado:** unas 9 peticiones y ~200 KB con las miniaturas (la foto del hero pesa ~86 KB en AVIF; la referencia pesa 31 peticiones y 370 KB).
- **Foto original** (7,5 MB): en `fuente/foto.jpg`. **No se publica.** En esa carpeta también hay `nuevareferencia.png`, que es solo una referencia.
- **Comprobado a ojo:** hero a 1440 y 390 px con el ratón a cada lado, frase de scroll, experiencia, tarjetas, menú móvil, sin desbordamiento horizontal, 0 errores de consola.
- **Sin comprobar:** el humo con "reducir movimiento" o en táctil (solo manchas CSS), el menú móvil abierto (capturado, no revisado), contacto y stack (capturados, no revisados), 1100 px con los cambios nuevos, y la medición real de carga total.
- **Documentación del skill:** `DESIGN.md` y `.impeccable/` son de la v3.1 y están desactualizados (no incluyen v4). El reviewer no ha visto la v4.

## Lo que estamos haciendo
Bloque v4 cerrado por Fernando el 2026-11-05. Sin tareas abiertas; solo quedan los pendientes de abajo. Se retoma cuando Fernando lo pida.

## Hacia dónde vamos
1. Retoques que pida Fernando sobre la v4.
2. Mejorar las imágenes de las tarjetas (capturas pequeñas; Gestión Monetaria no tiene captura pública).
3. Revisión final, `DESIGN.md` al día y publicar en Cloudflare Pages con dominio propio (ver la lista de arriba).

## Cerrado el 2026-11-05 (sexta tanda): Formación en dos columnas (logos al centro, idiomas y soft skills a la derecha)
- Fernando pidió reconstruir la sección Formación siguiendo su esquema: zona central con los logos junto a cada fila (sin cambiar las líneas de texto) y zona derecha con Idiomas y Soft skills. El HTML ya lo tenía; solo tocó CSS: `.cv__cols` vuelve a dos columnas `minmax(0,1.35fr) minmax(0,1fr)` (peso extra en Formación) y nuevo corte `@media (max-width:1040px){.cv__cols{grid-template-columns:1fr}}` (antes apilaba siempre).
- Verificado con capturas headless (Edge) a 1366/1280/1100/1080/1060/1040 px: «FP Superior en Desarrollo de Aplicaciones Web» y las líneas de universidad+fechas no saltan. A 1024 y 1000 px los metadatos de las universidades saltaban, por eso el corte quedó en 1040.
- Sin commit (se acumula al commit pendiente).

## Cerrado el 2026-11-05 (quinta tanda): logos de empresas y centros en Experiencia
- **Experiencia profesional y formación con logos self-hosteados** en `assets/logos/` (cero peticiones a terceros): ValgrAI (webp recortado por análisis de columnas: wordmark + puntos, se retiró el bloque de texto pequeño del SVG original), Binoovo y CIPFP Mislata (aportados por Fernando en `fuente/`), Way to Blue (logo de la web), UAM y UPV (SVG oficiales de sus webs), Universidad de Alcalá (escudo de Wikimedia caía con 429 en esta IP → favicon/blanco de uah.es recoloreado a tinta con PIL). Badges flexibles `.logo-mini` (alto fijo 44px, ancho según proporción) bajo `h3`/`strong` con estructura `.jobs__head` y `li` flex en `.edu`. Recuerda: al editar los items de jobs hay que conservar el `<div>` contenedor de cada fila (rompi la rejilla una vez).
- Pendiente de Fernando: revisar tamaños de badges (ValgrAI/UPV quedan pequeñitos por ser logos horizontales muy anchos).

## Cerrado el 2026-11-05 (cuarta tanda): hero de desarrollo con "linterna de código"
- **Hero, mitad desarrollo**: el bloquecito tecleado (`.codebg`) se sustituyó por `.codefog` — todo el lado derecho lleno de código denso (~60 líneas: fernando.ts, PerfilController.java, repositorio de prueba y un test), opacidad base .075 (solo se intuye) con desvanecidos por `::after` y **linterna**: una capa gemela idéntica revelada por un disco `mask-image: radial-gradient` que sigue al ratón (radio 200→300px según velocidad del puntero, con enfriamiento, lerp suave, solo en la mitad dev; `<desarrollo>` y la copy siguen por encima). Cuidados: variables `--mx/--my/--lr` viven en `.codefog` (el bug del día fue ponerlas inline en la capa lit y pisaban la herencia), `prefers-reduced-motion` apaga el seguimiento y > breakpoint `<1180px` no se pinta. El humo de marketing no se tocó.
- Verificado con capturas de Chrome headless con puppeteer (base sin ratón, ratón reposo, barrido veloz) y diagnóstico en vivo de valores computados. Apendice pendiente: ajuste fino de radios/opacidad a petición de Fernando (\(0.78 de opacidad lit, 200-300px radios).
- **Commit pendiente** del portfolio (se acumula).

## Cerrado el 2026-11-05 (tercera tanda): Queveo publicado y "Más proyectos" con mini-tarjetas
- **Queveo publicado**: repo nuevo [`fernandomguez/queveo`](https://github.com/fernandomguez/queveo) y demo en **https://fernandomguez.github.io/queveo/** (rama `gh-pages` con build local `--base-href=/queveo/`; el paso a paso para desplegar queda hecho — cuando quiera despliegue automático por Actions hay que refrescar token con `gh auth refresh -s workflow`). README escrito (TMDB, Angular 22, Vitest). **Ojo: la key de TMDB va visible en el bundle** (aceptado por Fernando; rotable después). Ajustes de CSS en Queveo al publicar (fuente de selects, chips de valoración envolventes, mínimos de columnas) para que no se cortase texto a 1100px.
- **"Más proyectos" rediseñado a mini-tarjetas** (Fernando aprobó el plan en dos fases): rejilla con breakpoints explícitos (1 col móvil · 2×2 ≥640px · 4 ≥1160px; se evitó el 3+1 huérfano del auto-fit), cada tarjeta con mini-captura o tile de icono en badge blanca con tinta por proyecto (blue para GitHub de daw-movies, teal para el pie de Gestión Monetaria), chips de stack reales y nota de estado pegada abajo. Contenido: PokeAPI (captura real · demo), Queveo (captura real · demo), daw-movies (tile con icono · repositorio) y Gestión Monetaria (tile con icono pie en teal · sin versión pública). Capturas hechas con Chrome headless + `virtual-time-budget` y WebP por Pillow en `assets/proj/*-mini.webp` (22-23 KB cada una). Pulido además con dos bucles de revisión por agente (3.º sin hallazgos).
- **Diagnóstico de red del instituto** (contexto del día): pokeapi.co afuera filtrada a ratos para navegadores Chrome/Edge/Firefox por QUIC (UDP 443) y para las DNS cifradas (dns.google, cloudflare-dns) siempre; por TCP/CLI llega todo. Fernando lo verá sin problema desde casa/móvil, así que no toca arreglar nada en las webs.
- **Pendiente de Fernando:** revisar las mini-tarjetas y el reparto destacados/otros; decidir si en una segunda fase Queveo sube a destacado (features: "dónde verla" con TMDB watch/providers, "mi lista" con localStorage, PWA) con swap de 2048 a otros.
- **Commit pendiente** del portfolio (se acumula con lo de antes).

## Cerrado el 2026-11-05 (segunda tanda): PokeAPI mejorado y publicado
- **App** (`Desktop/Proyectos/PokeApi`): de buscador único a pokédex completa — rejilla paginada de 24, chips de filtro por los 18 tipos (carga bajo demanda), conmutador "solo la oficial 1–1025" vs formas alternativas, búsqueda en vivo por nombre o número, favoritos en localStorage con corazón en tarjeta y ficha, y estado completo en el hash de la URL (`#q=...&pagina=...&tipos=...&fav=1&formas=1`). Ficha individual modal con artwork, tipos de colores, altura y peso; tarjetas accesibles por teclado. Una única petición grande al cargar + listas de tipos y sprites bajo demanda y en caché.
- **Publicado en GitHub Pages**: repo ya existía (`fernandomguez/pokeapi`, público); commit `b3b050e` de la nueva versión y Pages activado. **Demo: https://fernandomguez.github.io/pokeapi/**
- **Portfolio actualizado**: la entrada de PokeAPI en "Más proyectos" ahora enlaza a la demo (cambio sin commit, se une al commit pendiente del portfolio).
- Pendiente de Fernando: revisar la demo y dar el OK; añadir captura a la tarjeta si más adelante se promociona.

## Pendiente de Fernando
- Revisar la demo nueva de PokeAPI y decirme si algo no gusta.
- Decidir si regenero `DESIGN.md` y paso el reviewer sobre la v4.
- PDF del CV sin teléfono, si más adelante quiere botón de descarga.
- Las cuatro decisiones de publicación (dominio, actividad económica, correo, repositorio).
- **Commit pendiente:** todo lo hecho desde el último commit en el portfolio (textos v5, iconos, ajustes, y el nuevo enlace de PokeAPI) está sin commit.

## Reglas de trabajo acordadas
- **No documentar ni revisar por defecto.** Tras cada cambio de diseño, preguntar si quiere regenerar `DESIGN.md`, pasar el reviewer u otras tareas que gasten tokens.
- Actualizar este `ESTADO.md` cuando se pida o al cerrar un bloque.
- No inventar proyectos, cifras ni enlaces; lo que no tiene enlace público se dice tal cual.
- No publicar el teléfono ni capturas con datos reales (finanzas) de proyectos privados.

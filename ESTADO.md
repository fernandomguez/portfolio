# ESTADO del portfolio

Última actualización: 2026-11-05 (v5, textos). Archivo para ver de un vistazo qué hemos hecho, qué estamos haciendo y hacia dónde vamos. Se actualiza cuando Fernando lo pide o al cerrar un bloque de trabajo.

## Qué es
Portfolio personal de **Fernando Mínguez** (con tilde, confirmado): desarrollador full stack junior con 9 años en marketing y operaciones, que busca **prácticas de DAW/DAM en febrero–marzo de 2027**. Web estática (HTML, CSS y JS sin frameworks), ligera, en una sola página. Inspirada en adhamdannaway.com (cara partida y menú), aaabadcode.com (humo de colores), majd-portfolio (frase que se enciende al hacer scroll) y fmorenil.dev (tarjetas con mockups).

Ver en local: `python -m http.server 5173` desde esta carpeta y abrir `http://localhost:5173/index.html`.

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
   - **Contacto:** prácticas de desarrollo de software en febrero–marzo de 2027.
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
3. Subir PokeAPI a GitHub o desplegarlo para enlazarlo.
4. Revisión final, `DESIGN.md` al día y publicar en Cloudflare Pages con dominio propio (ver la lista de arriba).

## Pendiente de Fernando
- Enlace de PokeAPI (repo o demo).
- Decidir si regenero `DESIGN.md` y paso el reviewer sobre la v4.
- PDF del CV sin teléfono, si más adelante quiere botón de descarga.
- Las cuatro decisiones de publicación (dominio, actividad económica, correo, repositorio).
- **Commit pendiente:** todo lo hecho desde el último commit (textos v5, iconos, ajustes) está sin commit.

## Reglas de trabajo acordadas
- **No documentar ni revisar por defecto.** Tras cada cambio de diseño, preguntar si quiere regenerar `DESIGN.md`, pasar el reviewer u otras tareas que gasten tokens.
- Actualizar este `ESTADO.md` cuando se pida o al cerrar un bloque.
- No inventar proyectos, cifras ni enlaces; lo que no tiene enlace público se dice tal cual.
- No publicar el teléfono ni capturas con datos reales (finanzas) de proyectos privados.

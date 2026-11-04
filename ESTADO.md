# ESTADO del portfolio

Última actualización: 2026-11-05. Archivo para ver de un vistazo qué hemos hecho, qué estamos haciendo y hacia dónde vamos. Se actualiza cuando Fernando lo pide o al cerrar un bloque de trabajo.

## Qué es
Portfolio personal de **Fernando Mínguez** (con tilde, confirmado): desarrollador full stack junior con 9 años en marketing y operaciones, que busca **prácticas de DAW/DAM en febrero–marzo de 2027**. Web estática (HTML, CSS y JS sin frameworks), ligera, en una sola página. Inspirada en adhamdannaway.com (cara partida y menú), aaabadcode.com (humo de colores), majd-portfolio (frase que se enciende al hacer scroll) y fmorenil.dev (tarjetas con mockups).

Ver en local: `python -m http.server 5173` desde esta carpeta y abrir `http://localhost:5173/index.html`.

## Lo que hemos hecho
1. **v1 · "carta de ajuste":** magenta contra gris, slider arrastrable. Descartada.
2. **v2 · claro y limpio:** textos del hero, tarjetas con sombra suave, mitad Marketing con pinceladas. Se descartó la imagen; se conservó el estilo.
3. **v3 / v3.1:** slider + humo de colores WebGL + iconos de tecnologías + proyectos reordenados.
4. **v4 (actual):**
   - **Hero sin slider:** una sola escena con una sola foto. La pantalla está "partida" solo por dentro: el humo ocupa la mitad izquierda y se desvanece hacia el centro de la cara; los iconos solo siguen al ratón en la mitad derecha; el título del lado donde está el ratón destaca.
   - **Código que se escribe solo de fondo** (fernando.ts y PerfilController.java), sin ventana: va tenue y **sube a plena opacidad cuando el ratón pasa por encima**. Se detiene fuera de vista y con "reducir movimiento".
   - **Marketing con herramientas:** diez fichas abajo a la izquierda, separadas de la foto, con Google Analytics, Google Ads, Odoo, HubSpot, Looker Studio, Search Console, Power BI, Mailchimp, Canva y un icono de tendencia. Solo siguen al ratón en esa mitad.
   - **Código de fondo:** pasa a plena opacidad con el cursor en cualquier punto de la mitad derecha.
   - **Foto original** de nuevo, recodificada desde `fuente/foto.jpg` (AVIF 1800 y 1000 px, WebP de reserva).
   - **Cursor:** se probó un cursor propio (punto con círculo) y no gustó; **se volvió al cursor normal del sistema**.
   - **Menú superior** estilo Adham: Sobre mí · Experiencia · Trabajos · Contacto, iconos de LinkedIn y GitHub y botón Escríbeme. Menú desplegable en móvil y enlace activo según la sección.
   - **Frase "Sobre mí"** cuyas palabras se encienden al hacer scroll. Texto actual: *"Nueve años en marketing y negocio me han enseñado qué necesita una empresa. Ahora, con mi especialización en desarrollo web, quiero aprovechar los dos mundos: ser el nexo entre negocio y tecnología, integrar sistemas y llevar productos de la idea a la realidad."* La intención es que se note que a largo plazo quiere ser forward deployed engineer, integrations manager o project/product owner, sin nombrar esos puestos.
   - **Sección Experiencia** con los datos de tu CV: perfil (versión de Fernando: "Angular y Java con Spring Boot… cuentas, equipos y datos de negocio B2B/B2C"), Numik Labs, ValgrAI, Binoovo, Way to Blue, formación, idiomas, soft skills y stack en siete grupos, con icono en todas las tecnologías que lo tienen (nuevo grupo "Marketing y datos"; **MariaDB añadida** en bases de datos). Sin icono: Mockito, ArchUnit, Scrum, Kanban, APIs REST, etc. porque no existen en la librería. Sin teléfono y sin PDF.
   - **Tarjetas con mockups:** móvil para Trazen y SitIn, ventana de navegador para 2048, con etiquetas de stack y botones de enlace. "Más proyectos": PokeAPI, daw-movies, Gestión Monetaria.
   - **Contacto** (título "¿Hablamos?"): botón Escríbeme (abre el correo con asunto y saludo), botón Copiar correo, LinkedIn y GitHub. Sin formulario (decisión razonada: web estática).

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
4. Revisión final, `DESIGN.md` al día y publicar (GitHub Pages u otro sitio estático) cuando Fernando decida.

## Pendiente de Fernando
- Enlace de PokeAPI (repo o demo).
- Decidir si regenero `DESIGN.md` y paso el reviewer sobre la v4.
- PDF del CV sin teléfono, si más adelante quiere botón de descarga.

## Reglas de trabajo acordadas
- **No documentar ni revisar por defecto.** Tras cada cambio de diseño, preguntar si quiere regenerar `DESIGN.md`, pasar el reviewer u otras tareas que gasten tokens.
- Actualizar este `ESTADO.md` cuando se pida o al cerrar un bloque.
- No inventar proyectos, cifras ni enlaces; lo que no tiene enlace público se dice tal cual.
- No publicar el teléfono ni capturas con datos reales (finanzas) de proyectos privados.

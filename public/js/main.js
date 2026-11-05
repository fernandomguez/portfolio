(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer: fine)').matches;
  const $ = (s, r = document) => r.querySelector(s);

  /* ---------- menu ---------- */
  const toggle = $('.nav__toggle'), menu = $('#menu');
  if (toggle && menu) {
    const set = open => {
      menu.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      toggle.querySelector('use').setAttribute('href', open ? '#i-x' : '#i-menu');
    };
    toggle.addEventListener('click', () => set(!menu.classList.contains('open')));
    menu.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
    addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
  }
  // highlight the link of the section on screen
  const links = [...document.querySelectorAll('.nav__links a')];
  if (links.length && 'IntersectionObserver' in window) {
    const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
    const io = new IntersectionObserver(es => es.forEach(e => {
      const a = map.get(e.target.id);
      if (a) a.setAttribute('aria-current', e.isIntersecting ? 'true' : 'false');
    }), { rootMargin: '-45% 0px -50% 0px' });
    map.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
  }

  /* ---------- hero: half under the pointer (mouse only) + código linterna ---------- */
  const hero = $('.hero');
  const fog = $('.codefog'), lit = $('.codefog__lit');
  if (hero && fine) {
    let tick = 0, ex = 0, ey = 0;
    const lamp = { x: -600, y: -600, r: 210, tx: -600, ty: -600, heat: 210, vis: 0, on: false, px: null, py: null, rect: null };
    let lampRAF = 0;
    const step = () => {
      lampRAF = 0;
      lamp.heat += (200 - lamp.heat) * .035;            // se enfría al dejar de mover
      lamp.x += (lamp.tx - lamp.x) * .16;
      lamp.y += (lamp.ty - lamp.y) * .16;
      lamp.r += (lamp.heat - lamp.r) * .09;
      lamp.vis += ((lamp.on ? 1 : 0) - lamp.vis) * .18;
      fog.style.setProperty('--mx', Math.round(lamp.x) + 'px');
      fog.style.setProperty('--my', Math.round(lamp.y) + 'px');
      fog.style.setProperty('--lr', Math.round(lamp.r) + 'px');
      lit.style.opacity = (lamp.vis * .78).toFixed(3);
      if (lamp.vis > .02) lampRAF = requestAnimationFrame(step);
    };
    const lampMove = () => {
      if (!lampRAF) lampRAF = requestAnimationFrame(step);
    };
    const clear = () => {
      hero.dataset.lead = '';
      ['--px', '--py', '--lx', '--ly'].forEach(v => hero.style.setProperty(v, 0));
      lamp.on = false;
      lampMove();
    };
    hero.addEventListener('pointermove', e => {
      ex = e.clientX; ey = e.clientY;
      if (tick) return;
      tick = requestAnimationFrame(() => {
        tick = 0;
        const r = hero.getBoundingClientRect();
        const nx = ((ex - r.left) / r.width - .5) * 2, ny = ((ey - r.top) / r.height - .5) * 2;
        const left = nx < 0;
        hero.dataset.lead = left ? 'mk' : 'dev';
        // each half's floating icons only follow the pointer while it is on that half
        hero.style.setProperty('--lx', left ? nx : 0); hero.style.setProperty('--ly', left ? ny : 0);
        hero.style.setProperty('--px', left ? 0 : nx); hero.style.setProperty('--py', left ? 0 : ny);
        if (!left && fog && !reduced) {
          if (!lamp.rect || lamp.rect.width !== fog.offsetWidth) lamp.rect = fog.getBoundingClientRect();
          lamp.tx = ex - lamp.rect.left; lamp.ty = ey - lamp.rect.top;
          if (lamp.px !== null) {
            // velocidad del puntero → radio de la linterna (crece al mover rápido, se enfría al parar)
            const spd = Math.hypot(ex - lamp.px, ey - lamp.py);
            lamp.heat = Math.min(300, 200 + spd * 1.4);
          }
          lamp.px = ex; lamp.py = ey;
          lamp.on = true;
        } else {
          lamp.on = false;
        }
        lampMove();
      });
    });
    hero.addEventListener('pointerleave', clear);
    window.addEventListener('resize', () => { lamp.rect = null; }, { passive: true });
  }

  /* ---------- smoke (mouse + WebGL2 + no reduced motion; loaded after the page is ready) ---------- */
  const canvas = $('.smoke');
  if (hero && canvas && fine && !reduced) {
    const go = () => import('./smoke.js').then(m => { if (m.default(canvas, hero)) canvas.classList.add('on'); }).catch(() => {});
    const later = () => ('requestIdleCallback' in window ? requestIdleCallback(go, { timeout: 2500 }) : setTimeout(go, 800));
    document.readyState === 'complete' ? later() : addEventListener('load', later, { once: true });
  }

  /* ---------- fondo denso de código (la linterna lo revela) ---------- */
  const fogEl = $('.codefog');
  if (fogEl) {
    const CODE = `// fernando.ts — el perfil como interfaz
import { Spring, Angular, Postgres, Ionic } from "stack/core";

export interface Candidato {
  rol: string;
  stack: string[];
  ventas: string;
  proyectos: string[];
  disponible: string;
}

export const fernando: Candidato = {
  rol: "Full Stack junior",
  stack: ["Java", "Spring Boot", "Angular", "TypeScript"],
  extra: ["Ionic", "Capacitor", "PostgreSQL", "Docker"],
  antes: "9 años en marketing y negocio",
  busco: "prácticas de desarrollo en 2027",
};

// PerfilController.java — la misma información, por API
@RestController
@RequestMapping("/perfil")
@Validated
public class PerfilController {

  private final CandidatosRepository repo;

  @GetMapping(value = "/fernando", produces = "application/json")
  public ResponseEntity perfil() {
    var c = repo.findByNombre("Fernando Mínguez");
    c.setDisponibilidad(LocalDate.of(2027, 2, 1));
    return ResponseEntity.ok(c);         // 200, como siempre
  }

  @GetMapping("/proyectos")
  public List proyectos() {
    return List.of(
      new ProyectoDto("Trazen",  "Angular · Spring · Capacitor"),
      new ProyectoDto("SitIn",   "Angular · Spring · PostGIS"),
      new ProyectoDto("2048",    "JavaScript · PWA · CI")
    );
  }
}

// InMemoryCandidatos.java — la base de datos de prueba
public class InMemoryCandidatos implements CandidatosRepository {

  private final Map datos = new HashMap();

  @Override
  public Optional findByNombre(String nombre) {
    var c = new Candidato("Fernando", "Full Stack junior");
    return Optional.of(datos.putIfAbsent(nombre, c));
  }
}

// PRUEBAS — el caché de tormentas que ya pasó
@Test
void elPerfilResponde200() {
  given().get("/perfil/fernando")
    .then().statusCode(200)
         .body("rol", equalTo("Full Stack junior"));
}`;
    // resaltado con la misma paleta del hero: comentarios, strings, palabras clave, anotaciones y llamadas
    const reg = /(\/\/[^\n]*)|("(?:[^"\\\n]|\\.)*")|(@\w+)|\b(?:export|interface|const|import|from|public|class|private|final|return|new|var|implements|void|given|get|then)\b|(\b[A-Za-z_]\w*\b(?=\s*:))|(\b[A-Za-z_]\w*(?=\())/g;
    const html = CODE.replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(reg, (m, c, s, ann, kw, prop, fn) => {
        const clase = c ? 'c' : s ? 's' : ann ? 'f' : kw ? 'k' : prop ? 'p' : 'f';
        return `<span class="${clase}">${m}</span>`;
      });
    fogEl.querySelectorAll('.codefog__code').forEach(el => { el.innerHTML = html; });
  }

  /* ---------- statement: words light up while scrolling ---------- */
  const rv = $('[data-reveal]');
  if (rv) {
    const words = rv.textContent.trim().split(/\s+/);
    rv.textContent = '';
    const spans = words.map(w => { const s = document.createElement('span'); s.className = 'w'; s.textContent = w + ' '; rv.appendChild(s); return s; });
    if (!reduced) {
      const sec = rv.closest('.statement');
      let ticking = false;
      const upd = () => {
        ticking = false;
        const r = sec.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - innerHeight)) / .85);
        const n = spans.length;
        spans.forEach((s, i) => { const o = Math.min(1, Math.max(0, (p * (n + 3) - i) / 3)); s.style.opacity = (.14 + .86 * o).toFixed(3); });
      };
      addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
      addEventListener('resize', upd);
      upd();
    }
  }

  /* ---------- contact: copy the address ---------- */
  document.querySelectorAll('[data-copy]').forEach(b => {
    const label = b.querySelector('span'), orig = label.textContent;
    b.addEventListener('click', async () => {
      const txt = b.dataset.copy;
      try { await navigator.clipboard.writeText(txt); }
      catch { const t = document.createElement('textarea'); t.value = txt; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch {} t.remove(); }
      label.textContent = 'Copiado';
      const toast = $('[data-toast]'); if (toast) toast.textContent = 'Correo copiado al portapapeles';
      setTimeout(() => { label.textContent = orig; }, 1800);
    });
  });
})();

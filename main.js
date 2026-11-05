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

  /* ---------- hero: which half is the pointer on (mouse only) ---------- */
  const hero = $('.hero');
  const codebg = $('.codebg');
  if (hero && fine) {
    let tick = 0, ex = 0, ey = 0;
    const clear = () => {
      hero.dataset.lead = '';
      ['--px', '--py', '--lx', '--ly'].forEach(v => hero.style.setProperty(v, 0));
      if (codebg) codebg.classList.remove('hot');
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
        if (codebg) codebg.classList.toggle('hot', !left);
      });
    });
    hero.addEventListener('pointerleave', clear);
  }

  /* ---------- smoke (mouse + WebGL2 + no reduced motion; loaded after the page is ready) ---------- */
  const canvas = $('.smoke');
  if (hero && canvas && fine && !reduced) {
    const go = () => import('./smoke.js').then(m => { if (m.default(canvas, hero)) canvas.classList.add('on'); }).catch(() => {});
    const later = () => ('requestIdleCallback' in window ? requestIdleCallback(go, { timeout: 2500 }) : setTimeout(go, 800));
    document.readyState === 'complete' ? later() : addEventListener('load', later, { once: true });
  }

  /* ---------- background code that types itself ---------- */
  const code = $('.codebg__code');
  if (code) {
    const SN = [
      [['c', '// fernando.ts\n'], ['k', 'const'], ['', ' fernando = {\n  '], ['p', 'rol'], ['', ': '], ['s', '"Full Stack junior"'], ['', ',\n  '],
        ['p', 'stack'], ['', ': ['], ['s', '"Java"'], ['', ', '], ['s', '"Spring"'], ['', ', '], ['s', '"Angular"'], ['', '],\n  '],
        ['p', 'antes'], ['', ': '], ['s', '"marketing y negocio"'], ['', ',\n  '], ['p', 'busco'], ['', ': '], ['s', '"prácticas 2027"'], ['', ',\n};']],
      [['c', '// PerfilController.java\n'], ['f', '@GetMapping'], ['', '('], ['s', '"/perfil"'], ['', ')\n'], ['k', 'public'], ['', ' Perfil '], ['f', 'perfil'], ['', '() {\n  '],
        ['k', 'return new'], ['', ' Perfil(\n    '], ['s', '"Fernando"'], ['', ',\n    List.'], ['f', 'of'], ['', '('], ['s', '"Java"'], ['', ', '], ['s', '"Angular"'], ['', ')\n  );\n}']]
    ];
    const caret = document.createElement('b'); caret.className = 'caret';
    if (reduced) {
      SN[0].forEach(([c, x]) => { const sp = document.createElement('span'); if (c) sp.className = c; sp.textContent = x; code.appendChild(sp); });
    } else {
      let visible = true;
      if ('IntersectionObserver' in window) new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(hero);
      const sleep = ms => new Promise(r => setTimeout(r, ms));
      const wait = async () => { while (!visible || document.hidden) await sleep(300); };
      const type = async toks => {
        code.textContent = ''; code.appendChild(caret);
        for (const [c, x] of toks) {
          const sp = document.createElement('span'); if (c) sp.className = c; code.insertBefore(sp, caret);
          for (const ch of x) {
            await wait();
            sp.textContent += ch;
            await sleep(ch === '\n' ? 280 : ch === ' ' ? 35 : 42 + Math.random() * 60);
          }
        }
      };
      const erase = async () => {
        const spans = [...code.querySelectorAll('span')];
        while (spans.length) {
          await wait();
          const sp = spans[spans.length - 1];
          if (!sp.textContent) { sp.remove(); spans.pop(); continue; }
          sp.textContent = sp.textContent.slice(0, -4);
          await sleep(12);
        }
      };
      (async () => { for (let i = 0; ; i++) { await type(SN[i % SN.length]); await sleep(3000); await erase(); await sleep(400); } })();
    }
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

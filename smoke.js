// Pastel fluid smoke that follows the pointer. WebGL2, no dependencies.
// Returns null when the browser cannot render it, so the CSS fallback stays.
export default function start(canvas, host) {
  const gl = canvas.getContext('webgl2', { alpha: false, antialias: false, depth: false, stencil: false });
  if (!gl || !gl.getExtension('EXT_color_buffer_float')) return null;

  const VS = `#version 300 es
precision highp float;in vec2 p;out vec2 vUv,vL,vR,vT,vB;uniform vec2 t;
void main(){vUv=p*.5+.5;vL=vUv-vec2(t.x,0);vR=vUv+vec2(t.x,0);vT=vUv+vec2(0,t.y);vB=vUv-vec2(0,t.y);gl_Position=vec4(p,0,1);}`;
  const HD = '#version 300 es\nprecision highp float;precision highp sampler2D;in vec2 vUv,vL,vR,vT,vB;out vec4 o;';
  const FS = {
    splat: 'uniform sampler2D u;uniform vec2 pt;uniform vec4 c;uniform float r,ar;void main(){vec2 d=vUv-pt;d.x*=ar;o=texture(u,vUv)+c*exp(-dot(d,d)/r);}',
    adv: 'uniform sampler2D v,s;uniform vec2 t;uniform float dt,k;void main(){vec2 co=vUv-dt*texture(v,vUv).xy*t;o=texture(s,co)/(1.+k*dt);}',
    curl: 'uniform sampler2D v;void main(){float L=texture(v,vL).y,R=texture(v,vR).y,T=texture(v,vT).x,B=texture(v,vB).x;o=vec4(.5*(R-L-T+B),0,0,1);}',
    vort: 'uniform sampler2D v,c;uniform float cu,dt;void main(){float L=texture(c,vL).x,R=texture(c,vR).x,T=texture(c,vT).x,B=texture(c,vB).x,C=texture(c,vUv).x;vec2 f=.5*vec2(abs(T)-abs(B),abs(R)-abs(L));f/=length(f)+1e-4;f*=cu*C;f.y*=-1.;o=vec4(clamp(texture(v,vUv).xy+f*dt,-1000.,1000.),0,1);}',
    div: 'uniform sampler2D v;void main(){float L=texture(v,vL).x,R=texture(v,vR).x,T=texture(v,vT).y,B=texture(v,vB).y;vec2 C=texture(v,vUv).xy;if(vL.x<0.)L=-C.x;if(vR.x>1.)R=-C.x;if(vT.y>1.)T=-C.y;if(vB.y<0.)B=-C.y;o=vec4(.5*(R-L+T-B),0,0,1);}',
    pres: 'uniform sampler2D p,d;void main(){float L=texture(p,vL).x,R=texture(p,vR).x,T=texture(p,vT).x,B=texture(p,vB).x;o=vec4((L+R+B+T-texture(d,vUv).x)*.25,0,0,1);}',
    grad: 'uniform sampler2D p,v;void main(){float L=texture(p,vL).x,R=texture(p,vR).x,T=texture(p,vT).x,B=texture(p,vB).x;o=vec4(texture(v,vUv).xy-vec2(R-L,T-B),0,1);}',
    clear: 'uniform sampler2D u;uniform float k;void main(){o=k*texture(u,vUv);}',
    show: 'uniform sampler2D u;void main(){vec4 d=texture(u,vUv);float a=1.-exp(-d.a*2.4);vec3 c=clamp((d.rgb/(d.a+1e-4)-.5)*1.18+.5,0.,1.);o=vec4(mix(vec3(1),c,a),1);}'
  };

  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
  const mk = fs => {
    const p = gl.createProgram();
    gl.attachShader(p, sh(gl.VERTEX_SHADER, VS));
    gl.attachShader(p, sh(gl.FRAGMENT_SHADER, HD + fs));
    gl.bindAttribLocation(p, 0, 'p');
    gl.linkProgram(p);
    const u = {};
    for (let i = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS); i--;) {
      const n = gl.getActiveUniform(p, i).name;
      u[n] = gl.getUniformLocation(p, n);
    }
    return { p, u };
  };
  const P = {};
  for (const k in FS) P[k] = mk(FS[k]);
  if (!gl.getProgramParameter(P.show.p, gl.LINK_STATUS)) return null;

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

  const asp = host.clientWidth / Math.max(1, host.clientHeight);
  const res = n => asp > 1 ? [Math.round(n * asp), n] : [n, Math.round(n / asp)];
  const [sw, sh2] = res(128), [dw, dh] = res(512);
  canvas.width = dw; canvas.height = dh;

  const fbo = (w, h) => {
    const tx = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tx);
    for (const [k, v] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, v);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, w, h, 0, gl.RGBA, gl.HALF_FLOAT, null);
    const fb = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tx, 0);
    gl.viewport(0, 0, w, h); gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    return { tx, fb, w, h };
  };
  const dbl = (w, h) => { let a = fbo(w, h), b = fbo(w, h); return { get r() { return a; }, get w() { return b; }, swap() { [a, b] = [b, a]; } }; };
  const vel = dbl(sw, sh2), dye = dbl(dw, dh), prs = dbl(sw, sh2), div = fbo(sw, sh2), curl = fbo(sw, sh2);
  if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) return null;

  const run = (pr, target, tx, fl) => {
    gl.useProgram(pr.p);
    let i = 0;
    for (const k in tx) { gl.activeTexture(gl.TEXTURE0 + i); gl.bindTexture(gl.TEXTURE_2D, tx[k].tx); gl.uniform1i(pr.u[k], i++); }
    for (const k in fl) { const v = fl[k]; if (v.length === 2) gl.uniform2f(pr.u[k], v[0], v[1]); else if (v.length === 4) gl.uniform4f(pr.u[k], v[0], v[1], v[2], v[3]); else gl.uniform1f(pr.u[k], v[0]); }
    gl.uniform2f(pr.u.t, 1 / sw, 1 / sh2);
    if (target) { gl.viewport(0, 0, target.w, target.h); gl.bindFramebuffer(gl.FRAMEBUFFER, target.fb); }
    else { gl.viewport(0, 0, dw, dh); gl.bindFramebuffer(gl.FRAMEBUFFER, null); }
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  const hue = h => { h = ((h % 1) + 1) % 1; const f = n => { const k = (n + h * 6) % 6; return 1 - .6 * Math.max(0, Math.min(k, 4 - k, 1)); }; return [f(5), f(3), f(1)]; };
  const splat = (x, y, dx, dy, col, k) => {
    run(P.splat, vel.w, { u: vel.r }, { pt: [x, y], c: [dx, dy, 0, 0], r: [.0028], ar: [asp] }); vel.swap();
    run(P.splat, dye.w, { u: dye.r }, { pt: [x, y], c: [col[0] * k, col[1] * k, col[2] * k, k], r: [.0016], ar: [asp] }); dye.swap();
  };
  const stroke = () => {
    const x0 = .08 + Math.random() * .4, y0 = .15 + Math.random() * .7, ang = Math.random() * 6.28, len = .18 + Math.random() * .16, h0 = Math.random();
    for (let i = 0; i < 22; i++) {
      const t = i / 21, a2 = ang + Math.sin(t * 3) * .9;
      splat(x0 + Math.cos(a2) * len * t, y0 + Math.sin(a2) * len * t, Math.cos(a2) * 380, Math.sin(a2) * 380, hue(h0 + t * .55), .28);
    }
  };
  const burst = () => { const n = 5 + (Math.random() * 2 | 0); for (let i = 0; i < n; i++) stroke(); };

  let last = null, travel = 0, moved = 0, on = false, prev = 0, nextAuto = 0;
  host.addEventListener('pointermove', e => {
    if (e.pointerType === 'touch') return;
    const r = host.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = 1 - (e.clientY - r.top) / r.height;
    if (x > .62) { last = null; return; }
    if (last) {
      const dx = x - last[0], dy = y - last[1];
      travel += Math.abs(dx * r.width) + Math.abs(dy * r.height);
      if (dx || dy) splat(x, y, dx * 7000, dy * 7000, hue(travel / 900), .28);
    }
    last = [x, y]; moved = performance.now();
  });
  host.addEventListener('pointerleave', () => { last = null; });

  const frame = now => {
    if (!on) return;
    const dt = Math.min((now - prev) / 1000, .033) || .016; prev = now;
    if (now - moved > 3500 && now > nextAuto) { stroke(); nextAuto = now + 3200; }
    run(P.curl, curl, { v: vel.r });
    run(P.vort, vel.w, { v: vel.r, c: curl }, { cu: [28], dt: [dt] }); vel.swap();
    run(P.div, div, { v: vel.r });
    run(P.clear, prs.w, { u: prs.r }, { k: [.8] }); prs.swap();
    for (let i = 0; i < 14; i++) { run(P.pres, prs.w, { p: prs.r, d: div }); prs.swap(); }
    run(P.grad, vel.w, { p: prs.r, v: vel.r }); vel.swap();
    run(P.adv, vel.w, { v: vel.r, s: vel.r }, { dt: [dt], k: [.35] }); vel.swap();
    run(P.adv, dye.w, { v: vel.r, s: dye.r }, { dt: [dt], k: [1.3] }); dye.swap();
    run(P.show, null, { u: dye.r });
    requestAnimationFrame(frame);
  };
  const play = () => { if (!on) { on = true; prev = performance.now(); requestAnimationFrame(frame); } };
  const pause = () => { on = false; };

  burst();
  const visible = { v: true };
  new IntersectionObserver(([en]) => { visible.v = en.isIntersecting; visible.v && !document.hidden ? play() : pause(); }).observe(host);
  document.addEventListener('visibilitychange', () => { document.hidden ? pause() : visible.v && play(); });
  play();
  return { play, pause };
}

/* signal-field.js — "research synthesis" ambient field for the hero.
   Drifting signal particles link into networks near the cursor; every few
   seconds a cluster condenses into a small journey-map structure (accent
   path through nodes) and dissolves — noise → patterns → strategy.
   Reads --ink/--accent live so it follows the Tweaks theme. */
(function () {
  "use strict";
  var hero = document.querySelector(".hero");
  if (!hero) return;

  var canvas = document.createElement("canvas");
  canvas.className = "signal-field";
  canvas.setAttribute("aria-hidden", "true");
  hero.prepend(canvas);
  var ctx = canvas.getContext("2d");

  var REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var LINK = 76;                       // link distance, px
  var W = 0, H = 0, DPR = 1;
  var particles = [], visible = true, last = 0;

  /* ── theme colors (live) ─────────────────────────────────── */
  var ink = "#2c2620", accent = "#bd5d3a";
  function readColors() {
    var cs = getComputedStyle(document.documentElement);
    ink = (cs.getPropertyValue("--ink") || ink).trim();
    accent = (cs.getPropertyValue("--accent") || accent).trim();
  }
  readColors();
  new MutationObserver(readColors).observe(document.documentElement,
    { attributes: true, attributeFilter: ["style", "data-dark"] });

  /* ── sizing ──────────────────────────────────────────────── */
  function resize() {
    var r = hero.getBoundingClientRect();
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * DPR; canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    init();
    if (REDUCED) drawStatic();
  }
  function init() {
    var n = Math.min(Math.round((W * H) / 2800), 640);
    particles = [];
    for (var i = 0; i < n; i++) {
      particles.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
        r: 0.7 + Math.random() * 1.5,
        tw: Math.random() * Math.PI * 2
      });
    }
  }
  if ("ResizeObserver" in window) new ResizeObserver(resize).observe(hero);
  else window.addEventListener("resize", resize);

  /* ── input ───────────────────────────────────────────────── */
  var mouse = { x: -9e3, y: -9e3 };
  window.addEventListener("pointermove", function (e) {
    var r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  }, { passive: true });
  document.addEventListener("pointerleave", function () { mouse.x = mouse.y = -9e3; });

  /* ── insight clusters ────────────────────────────────────── */
  var cluster = null, nextAt = 2200;
  function spawnCluster(cx, cy) {
    var n = 5 + (Math.random() * 3 | 0), nodes = [];
    for (var i = 0; i < n; i++) {
      var a = (i / n) * Math.PI * 2 + Math.random();
      var d = 46 + Math.random() * 86;
      nodes.push({ x: cx + Math.cos(a) * d, y: cy + Math.sin(a) * d * 0.72 });
    }
    nodes.sort(function (a, b) { return a.x - b.x; });
    cluster = { cx: cx, cy: cy, nodes: nodes, born: performance.now(), life: 4200 };
  }
  hero.addEventListener("pointerdown", function (e) {
    if (e.target.closest("a, button, image-slot")) return;
    var r = canvas.getBoundingClientRect();
    spawnCluster(e.clientX - r.left, e.clientY - r.top);
  });

  function env(t) { return Math.max(0, Math.min(1, Math.min(t, 1 - t) * 4)); }

  /* ── visibility (skip work when hero is off-screen) ──────── */
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (es) { visible = es[0].isIntersecting; })
      .observe(hero);
  }

  /* ── render helpers ──────────────────────────────────────── */
  var BUCKETS = [0.05, 0.1, 0.16, 0.22, 0.3, 0.4];
  function drawLinks(boost) {
    var cell = LINK, cols = Math.ceil(W / cell) + 2;
    var grid = new Map();
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      var k = ((p.x / cell) | 0) + 1 + (((p.y / cell) | 0) + 1) * cols;
      var arr = grid.get(k);
      if (!arr) { arr = []; grid.set(k, arr); }
      arr.push(i);
    }
    var segs = [[], [], [], [], [], []];
    var offs = [0, 1, cols - 1, cols, cols + 1];
    grid.forEach(function (list, key) {
      for (var oi = 0; oi < offs.length; oi++) {
        var other = grid.get(key + offs[oi]);
        if (!other) continue;
        for (var ai = 0; ai < list.length; ai++) {
          var a = particles[list[ai]];
          var start = (offs[oi] === 0) ? ai + 1 : 0;
          for (var bi = start; bi < other.length; bi++) {
            var b = particles[other[bi]];
            var dx = a.x - b.x, dy = a.y - b.y;
            var d2 = dx * dx + dy * dy;
            if (d2 > LINK * LINK) continue;
            var d = Math.sqrt(d2);
            var alpha = 0.13 * (1 - d / LINK);
            var mdx = (a.x + b.x) / 2 - mouse.x, mdy = (a.y + b.y) / 2 - mouse.y;
            if (boost && mdx * mdx + mdy * mdy < 130 * 130) alpha = Math.min(0.4, alpha * 2.6);
            var bk = Math.min(5, (alpha / 0.07) | 0);
            segs[bk].push(a.x, a.y, b.x, b.y);
          }
        }
      }
    });
    ctx.strokeStyle = ink; ctx.lineWidth = 1;
    for (var s = 0; s < 6; s++) {
      var arr2 = segs[s];
      if (!arr2.length) continue;
      ctx.globalAlpha = BUCKETS[s];
      ctx.beginPath();
      for (var j = 0; j < arr2.length; j += 4) {
        ctx.moveTo(arr2[j], arr2[j + 1]); ctx.lineTo(arr2[j + 2], arr2[j + 3]);
      }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  function drawParticles(now) {
    ctx.fillStyle = ink;
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      ctx.globalAlpha = 0.3 + 0.22 * Math.sin(now / 900 + p.tw);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 6.2832);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function drawCluster(e) {
    var nodes = cluster.nodes;
    ctx.strokeStyle = accent; ctx.fillStyle = accent;
    /* journey-map path */
    ctx.globalAlpha = 0.55 * e; ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(nodes[0].x, nodes[0].y);
    for (var i = 1; i < nodes.length; i++) ctx.lineTo(nodes[i].x, nodes[i].y);
    ctx.stroke();
    /* nodes */
    for (var j = 0; j < nodes.length; j++) {
      ctx.globalAlpha = 0.85 * e;
      ctx.beginPath(); ctx.arc(nodes[j].x, nodes[j].y, 2.4, 0, 6.2832); ctx.fill();
      ctx.globalAlpha = 0.3 * e; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(nodes[j].x, nodes[j].y, 7, 0, 6.2832); ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  function drawStatic() {
    ctx.clearRect(0, 0, W, H);
    drawParticles(0);
    drawLinks(false);
  }

  /* ── main loop ───────────────────────────────────────────── */
  function frame(now) {
    requestAnimationFrame(frame);
    if (!visible) return;
    if (document.documentElement.getAttribute("data-fx") === "off") {
      ctx.clearRect(0, 0, W, H); return;
    }
    var dt = Math.min((now - last) / 16.7, 2.5) || 1; last = now;
    ctx.clearRect(0, 0, W, H);

    if (!cluster && now > nextAt)
      spawnCluster(W * (0.15 + Math.random() * 0.7), H * (0.2 + Math.random() * 0.6));

    var cEnv = 0;
    if (cluster) {
      var t = (now - cluster.born) / cluster.life;
      if (t >= 1) { cluster = null; nextAt = now + 2600 + Math.random() * 3400; }
      else cEnv = env(t);
    }

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.vx += (Math.random() - 0.5) * 0.03 * dt;
      p.vy += (Math.random() - 0.5) * 0.03 * dt;

      /* cursor halo — particles settle on a ring around the pointer */
      var mdx = p.x - mouse.x, mdy = p.y - mouse.y;
      var md2 = mdx * mdx + mdy * mdy;
      if (md2 < 22500) {
        var md = Math.sqrt(md2) || 1;
        var pull = (md - 80) / md * 0.012 * dt;
        p.vx -= mdx * pull; p.vy -= mdy * pull;
      }

      /* cluster gravity — condense toward nearest node */
      if (cluster && cEnv > 0) {
        var dx = p.x - cluster.cx, dy = p.y - cluster.cy;
        if (dx * dx + dy * dy < 40000) {
          var best = null, bd = 1e9;
          for (var n = 0; n < cluster.nodes.length; n++) {
            var nd = cluster.nodes[n];
            var ddx = nd.x - p.x, ddy = nd.y - p.y, dd = ddx * ddx + ddy * ddy;
            if (dd < bd) { bd = dd; best = nd; }
          }
          var g = 0.018 * cEnv * dt;
          p.vx += (best.x - p.x) * g * 0.08;
          p.vy += (best.y - p.y) * g * 0.08;
        }
      }

      p.vx *= 0.96; p.vy *= 0.96;
      var sp2 = p.vx * p.vx + p.vy * p.vy;
      if (sp2 > 2.56) { var s = 1.6 / Math.sqrt(sp2); p.vx *= s; p.vy *= s; }
      p.x += p.vx * dt; p.y += p.vy * dt;
      if (p.x < -12) p.x = W + 12; else if (p.x > W + 12) p.x = -12;
      if (p.y < -12) p.y = H + 12; else if (p.y > H + 12) p.y = -12;
    }

    drawLinks(true);
    drawParticles(now);
    if (cluster && cEnv > 0) drawCluster(cEnv);
  }

  resize();
  if (!REDUCED) { last = performance.now(); requestAnimationFrame(frame); }
})();

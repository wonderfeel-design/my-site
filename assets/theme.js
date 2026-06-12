/* theme.js — applies Tweak state to CSS variables and persists across pages.
   Loaded by both index.html and case.html (plain script, before React). */
(function () {
  const KEY = "ka_tweaks_v2";

  // Palette = [background, ink, accent]
  const PALETTES = {
    "Warm Clay":   ["#f4efe4", "#2c2620", "#bd5d3a"],
    "Bone & Ink":  ["#f3f1ea", "#23211d", "#b0512f"],
    "Dust Rose":   ["#f3ebe6", "#2e2622", "#b15a52"],
    "Sand & Sage": ["#f1ede2", "#2b2a23", "#71794a"],
    "Cool Stone":  ["#eef0ef", "#232826", "#4f7d72"]
  };

  const ACCENTS = {
    "Terracotta": "#bd5d3a",
    "Clay rose":  "#b15a52",
    "Ochre":      "#b07d2f",
    "Sage":       "#71794a",
    "Ink blue":   "#5a6b86"
  };

  const FONTS = {
    "Modern":    { display: '"Instrument Sans", "Hanken Grotesk", system-ui, sans-serif', body: '"Hanken Grotesk", system-ui, sans-serif' },
    "Editorial": { display: '"Newsreader", Georgia, serif',  body: '"Hanken Grotesk", system-ui, sans-serif' },
    "Grotesque": { display: '"Hanken Grotesk", system-ui, sans-serif', body: '"Hanken Grotesk", system-ui, sans-serif' }
  };

  const DEFAULTS = {
    palette: "Warm Clay",
    accent: "Terracotta",
    fonts: "Modern",
    density: "regular",
    dark: false,
    fx: true
  };

  function read() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return Object.assign({}, DEFAULTS, JSON.parse(raw));
    } catch (e) {}
    return Object.assign({}, DEFAULTS);
  }

  function save(t) {
    try { localStorage.setItem(KEY, JSON.stringify(t)); } catch (e) {}
  }

  function apply(t) {
    const root = document.documentElement;
    const pal = PALETTES[t.palette] || PALETTES["Warm Clay"];
    const accent = ACCENTS[t.accent] || pal[2];
    // Dark values are set inline so they win over the [data-dark] stylesheet
    // rule; derived surfaces (--paper, --line…) still come from the CSS block.
    if (t.dark) {
      root.setAttribute("data-dark", "1");
      root.style.setProperty("--bg", "#1d1a15");
      root.style.setProperty("--ink", "#ece4d6");
    } else {
      root.removeAttribute("data-dark");
      root.style.setProperty("--bg", pal[0]);
      root.style.setProperty("--ink", pal[1]);
    }
    root.style.setProperty("--accent", accent);
    const f = FONTS[t.fonts] || FONTS["Modern"];
    root.style.setProperty("--font-display", f.display);
    root.style.setProperty("--font-body", f.body);
    root.setAttribute("data-density", t.density || "regular");
    root.setAttribute("data-fx", t.fx === false ? "off" : "on");
  }

  // Apply immediately on load to avoid flash
  const current = read();
  apply(current);

  window.KA_THEME = {
    KEY, DEFAULTS, PALETTES, ACCENTS, FONTS,
    read, save, apply,
    paletteOptions: Object.keys(PALETTES).map(k => PALETTES[k]), // arrays for swatches
    paletteNames: Object.keys(PALETTES),
    accentOptions: Object.keys(ACCENTS).map(k => ACCENTS[k]),
    accentNames: Object.keys(ACCENTS),
    fontNames: Object.keys(FONTS)
  };
})();

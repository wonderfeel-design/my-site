/* tweaks-app.jsx — mounts the Tweaks panel on any page. Reads/writes KA_THEME. */
(function () {
  const T = window.KA_THEME;
  const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  const paletteName = (arr) => {
    const i = T.paletteOptions.findIndex((p) => eq(p, arr));
    return i >= 0 ? T.paletteNames[i] : T.DEFAULTS.palette;
  };
  const accentName = (hex) => {
    const i = T.accentOptions.findIndex((h) => h.toLowerCase() === String(hex).toLowerCase());
    return i >= 0 ? T.accentNames[i] : T.DEFAULTS.accent;
  };

  function TweaksApp() {
    const [t, setT] = React.useState(T.read());
    const update = (patch) => {
      const next = Object.assign({}, t, patch);
      setT(next); T.apply(next); T.save(next);
    };
    return (
      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette" />
        <TweakColor label="Theme" value={T.PALETTES[t.palette]} options={T.paletteOptions}
                    onChange={(arr) => update({ palette: paletteName(arr) })} />
        <TweakColor label="Accent" value={T.ACCENTS[t.accent]} options={T.accentOptions}
                    onChange={(hex) => update({ accent: accentName(hex) })} />
        <TweakToggle label="Dark mode" value={t.dark} onChange={(v) => update({ dark: v })} />
        <TweakToggle label="Signal field" value={t.fx !== false} onChange={(v) => update({ fx: v })} />
        <TweakSection label="Type & density" />
        <TweakRadio label="Typeface" value={t.fonts} options={T.fontNames}
                    onChange={(v) => update({ fonts: v })} />
        <TweakRadio label="Density" value={t.density}
                    options={["compact", "regular", "comfy"]}
                    onChange={(v) => update({ density: v })} />
      </TweaksPanel>
    );
  }

  const mount = document.getElementById("tweaks-root");
  if (mount) ReactDOM.createRoot(mount).render(<TweaksApp />);
})();

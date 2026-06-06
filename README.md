# Acrylics → Classical Portraits — progress tracker

A single-file follow-along painting curriculum + tracker. No build step.

## Deploy to GitHub Pages (≈2 minutes)

1. Create a new GitHub repo (e.g. `acrylics-roadmap`).
2. Add **`index.html`** to it (the repo root). `README.md` is optional.
3. Commit and push to the `main` branch.
4. Repo **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**, pick **`main`** and **`/ (root)`**, Save.
5. Wait ~1 minute, then open `https://<your-username>.github.io/<repo-name>/`.

That's it — `index.html` is everything.

## How it persists

Progress, streak, notes and your daily-goal save to the browser's **`localStorage`**, keyed to the Pages domain. So:

- Progress is saved per-browser, per-device. Using a different browser or device starts fresh.
- Clearing site data / "clear browsing data" for that domain resets it.
- It is **not** synced across devices (it's a static page with no backend).

## Notes / caveats

- The page loads React, Tailwind, Babel and lucide from public CDNs at runtime, so it needs an internet connection to render.
- Tailwind's Play CDN prints a "not for production" warning in the browser console — harmless for personal use.
- Pinned versions: React 18.3.1, lucide-react 0.383.0, Tailwind Play CDN, latest Babel Standalone.

## Want a production build instead?

The CDN/no-build approach is simplest but does in-browser transpilation. If you'd rather have a proper bundled, dependency-pinned, no-CDN build (Vite + a GitHub Actions deploy workflow, served from a committed source tree), say so and I'll generate the full project — `package.json`, `vite.config.js` (with `base` set for the repo subpath), `src/App.jsx`, Tailwind config, and `.github/workflows/deploy.yml`.

The component source also lives in `acrylic-roadmap.jsx` (standard ESM React with `export default App`) if you want to drop it into your own toolchain.

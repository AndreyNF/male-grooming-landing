# AGENTS.md

## Cursor Cloud specific instructions

This is a single-page React landing site (no backend, no database, no API).

**Stack**: React 18 + TypeScript + Vite 5 + Tailwind CSS 3 + shadcn/ui (Radix primitives)

**Key commands** (all from repo root):

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server (port 5173) | `npm run dev` |
| Lint | `npm run lint` |
| Build | `npm run build` |

**Notes:**

- There are no automated tests in this repo (no test script).
- ESLint reports 2 pre-existing errors in shadcn/ui boilerplate (`@typescript-eslint/no-empty-object-type` in `command.tsx` and `textarea.tsx`). These are not regressions.
- The Vite dev server binds to `0.0.0.0:5173` with HMR enabled. HMR error overlay is intentionally disabled in `vite.config.ts`.
- The `pp-tagger` dev dependency provides a `componentTagger()` Vite plugin active only in development mode.
- Images are served from an external CDN (`cdn.poehali.dev`); the app renders structurally without internet but images will be missing.

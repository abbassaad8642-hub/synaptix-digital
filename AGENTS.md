# AGENTS.md

## Cursor Cloud specific instructions

This is a **Vite + React + TypeScript** single-page application (SPA) for Fixels Media, a marketing agency website. There is no backend, no database, and no external service dependencies.

### Services

| Service | Command | Port | Notes |
|---|---|---|---|
| Vite Dev Server | `npm run dev` | 8080 | The only service needed |

### Key commands

All standard commands are in `package.json` scripts:

- **Dev server**: `npm run dev` (port 8080)
- **Lint**: `npm run lint` (ESLint 9; 3 pre-existing errors in auto-generated shadcn/ui and tailwind config files)
- **Unit tests**: `npm test` (Vitest)
- **Build**: `npm run build` (production build to `dist/`)

### Notes

- The `npm run lint` command exits with code 1 due to 3 pre-existing lint errors in auto-generated `shadcn/ui` components (`command.tsx`, `textarea.tsx`) and `tailwind.config.ts`. These are not regressions.
- Playwright E2E tests (`@playwright/test`) are listed as a dev dependency but require `npx playwright install` to download browser binaries before running.
- The project uses `package-lock.json` — always use **npm** as the package manager.

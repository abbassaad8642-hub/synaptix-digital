# AGENTS.md

## Project overview

- Stack: Vite 5, React 18, TypeScript, React Router, Tailwind CSS, shadcn/ui, TanStack Query, Vitest, ESLint.
- This repository is a marketing site / landing-page app. Routes are declared in `src/App.tsx`, and most user-facing screens live in `src/pages`.
- Lovable may also write to this repo. Keep changes targeted and avoid broad formatting churn.

## Key directories

- `src/pages`: route-level pages such as `/`, `/services`, `/portfolio`, `/contact`, and landing pages.
- `src/components`: shared site components such as `Layout`, `Navbar`, `Footer`, and form sections.
- `src/components/ui`: shadcn/ui primitives and low-level reusable UI building blocks.
- `src/hooks`: custom React hooks.
- `src/lib`: shared utilities.
- `src/test`: test setup and Vitest helpers.

## Local commands

- Install deps: `npm install`
- Start dev server: `npm run dev`
- Production build: `npm run build`
- Development build: `npm run build:dev`
- Lint: `npm run lint`
- Run tests once: `npm run test`
- Watch tests: `npm run test:watch`

## Cursor Cloud specific instructions

- The Vite dev server runs on port `8080` and binds to all interfaces via `vite.config.ts`. Use that port for browser testing.
- For any non-trivial UI change, run the dev server, open the affected route in the browser, and verify the final state manually.
- Prefer a short demo video for UI work; use screenshots only when the change is static and a screenshot fully proves it.
- Leave the dev server running after testing unless cleanup is required to continue.

## Code conventions

- Use function components and colocate small helper types near the component that uses them.
- Prefer the `@/` alias for imports from `src`.
- Keep route composition in `src/pages`; move reusable sections or shared layout into `src/components`.
- Reuse existing shadcn/ui primitives from `src/components/ui` before creating custom low-level controls.
- Prefer Tailwind utility classes and the existing design tokens defined through `tailwind.config.ts` and `src/index.css`.
- When editing content-heavy pages, keep copy changes scoped and avoid accidental text rewrites outside the requested area.
- The TypeScript config is intentionally relaxed (`strict: false`). Do not use `any` when a simple local type or prop interface will do, but do not spend time on unrelated type-hardening.

## Testing expectations

- Always run the narrowest relevant checks for the files you touched:
  - `npm run lint` for TypeScript/React changes.
  - `npm run test` when logic, hooks, utilities, or tested components change.
  - `npm run build` when routing, bundling, or production-only behavior may be affected.
- Add or update Vitest tests for new behavior when the changed code already has tests nearby or when logic can be validated without a browser.
- For page-level visual changes, manually verify the affected route in the browser in addition to automated checks.

## Routing and page QA

- Current top-level routes are defined in `src/App.tsx`.
- When changing navigation or page content, verify any affected routes directly, especially:
  - `/`
  - `/services`
  - `/services/:slug`
  - `/portfolio`
  - `/case-studies`
  - `/blog`
  - `/contact`
  - `/free-strategy-call`
  - `/free-marketing-audit`
  - `/ai-marketing-playbook`
  - `/landing/:slug`

## Testing helpers

- Vitest uses `jsdom` with setup in `src/test/setup.ts`.
- Test files live under `src/**/*.{test,spec}.{ts,tsx}`.
- Use Testing Library patterns for React component tests.

## Agent workflow reminders

- Read `README.md`, `package.json`, and any relevant page/component files before making structural changes.
- Check for existing patterns in neighboring pages/components before introducing a new abstraction.
- Keep diffs small, avoid unrelated refactors, and preserve user changes in a dirty worktree.

# Vercel Web Analytics Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Vercel Web Analytics (page views + visitors) to the React 19 + Vite SPA.

**Architecture:** Single dependency (`@vercel/analytics`) with the `<Analytics />` component mounted once in `src/main.tsx`. The component no-ops outside Vercel deployments, so local dev and builds are unaffected.

**Tech Stack:** React 19, Vite 8, TypeScript, `@vercel/analytics`

## Global Constraints

- Web Analytics only — no Speed Insights, no custom events (per spec)
- No environment variables or extra configuration
- Build must pass: `npm run build`

---

### Task 1: Install and mount Analytics component

**Files:**
- Modify: `package.json` (via npm install)
- Modify: `src/main.tsx:1-10`

**Interfaces:**
- Consumes: nothing from earlier tasks
- Produces: `<Analytics />` mounted at app root; no exported interfaces for later tasks

- [ ] **Step 1: Install the package**

```bash
npm install @vercel/analytics
```

Expected: added to `dependencies` in `package.json`, install exits 0.

- [ ] **Step 2: Mount the component in the entry file**

Update `src/main.tsx` to exactly:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
)
```

Note: `<Analytics />` is a sibling of `<App />`, not a child — it renders a script/iframe and must not be nested inside app markup.

- [ ] **Step 3: Verify build**

```bash
npm run build
```

Expected: tsc passes with no errors; vite produces `dist/`.

- [ ] **Step 4: Verify lint**

```bash
npm run lint
```

Expected: no new errors.

- [ ] **Step 5: Smoke-test dev server renders**

```bash
npm run dev
```

Expected: app loads at localhost with no console errors. `<Analytics />` renders nothing locally by design.

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json src/main.tsx
git commit -m "feat: add vercel web analytics"
```

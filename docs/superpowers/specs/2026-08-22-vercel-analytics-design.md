# Vercel Web Analytics — Design

## Goal

Add Vercel Web Analytics to the portfolio (React 19 + Vite + Three.js SPA) to track page views and visitors. No Speed Insights, no custom events.

## Approach

Use the official `@vercel/analytics` package (Option A), chosen over a raw script tag in `index.html` because it integrates with React and handles SPA navigation tracking automatically.

## Changes

1. Add dependency: `@vercel/analytics`
2. Render `<Analytics />` from `@vercel/analytics/react` in the app root (`src/main.tsx`), so it mounts once at startup

## Behavior

- On Vercel production deployments: collects page views/visitors automatically
- Local dev / non-Vercel hosts: component renders nothing (no-op)
- No environment variables or dashboard configuration required beyond enabling analytics on the Vercel project (automatic on deploy)

## Error Handling

None needed — the component fails silently if analytics cannot load; no impact on rendering.

## Testing

- `npm run build` passes
- After deploy, verify traffic appears in the Vercel dashboard Analytics tab

# Favicon Redesign — Design

## Goal

Replace the current lightning-bolt favicon (`public/favicon.svg`) with the "Orbit" design selected from three options drawn in Pencil.

## Design

- 48×48 SVG, dark rounded tile (`#100D1A`, corner radius 11)
- Centered gradient sphere: radial gradient `#D9C2FF` (highlight, upper-left) → `#863BFF` → `#4C1D95`
- White orbit ring (`#EDE6FF`) tilted -18° around the sphere

## Changes

- Overwrite `public/favicon.svg` with the new artwork (hand-written SVG matching the approved design)
- No changes needed in `index.html` — it already references `/favicon.svg`

## Error Handling

None needed — static asset swap.

## Testing

- `npm run build` passes
- User performs visual verification in the browser (hard-refresh / cache-bust) before merge

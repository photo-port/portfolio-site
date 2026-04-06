# Design Language

All work on this portfolio site must maintain the established visual identity. Follow these guidelines for any new pages, components, or modifications.

## Color Palette

- Background: `#0a0a0a` (near-black)
- Foreground text: `#ededed`
- Muted text: `text-zinc-400` / `text-zinc-500`
- Borders and dividers: `border-white/10`, `border-white/15`, `border-white/30`
- Hover states: white (`hover:text-white`, `hover:bg-white hover:text-black`)
- Overlays: `bg-black/40` to `bg-black/95`

## Typography

- Font: Inter (loaded via `next/font/google`)
- Headings: bold, tight tracking (`font-bold tracking-tight`)
- Section labels: uppercase, wide letter-spacing (`text-sm uppercase tracking-[0.3em] text-zinc-500`)
- Body copy: `text-zinc-400 leading-relaxed`
- Keep type minimal and clean — no decorative fonts

## Layout & Spacing

- Max content width: `max-w-7xl` for full sections, `max-w-3xl` for focused content
- Consistent section padding: `px-6 py-24`
- Center-aligned section headers with label + heading pattern

## Interactive Elements

- Buttons/CTAs: bordered style (`border border-white/30`), uppercase tracking, invert on hover (`hover:bg-white hover:text-black`)
- Links: subtle zinc color, transition to white on hover
- Transitions: smooth and understated — use `transition-all`, `transition-colors`, `duration-300` to `duration-500`
- Lightbox/modals: fade + scale entrance, crossfade between items, fade out on close

## Component Patterns

- Gallery uses CSS columns masonry layout with hover overlays
- Images use `next/image` with hover scale (`group-hover:scale-105`)
- Sections follow: muted label → bold heading → content
- Dark-first design — no light mode. Everything assumes a dark background.

## General Rules

- No bright accent colors. The palette is monochrome with white highlights.
- Animations should feel calm and intentional, never flashy.
- Maintain generous whitespace. Don't crowd elements.
- All new components must feel like they belong on the same page as the existing hero, gallery, about, and contact sections.

# Design Language

All work on this portfolio site must maintain the established visual identity. The site defaults to light mode with an optional dark mode toggle. Follow these guidelines for any new pages, components, or modifications.

## Theme System

- Light mode is the default. Dark mode is opt-in via a toggle in the nav.
- Theme is class-based (`dark` class on `<html>`), persisted to localStorage.
- Use Tailwind's `dark:` variant for all dark mode styles.
- Every visible element must look correct in both modes.

## Color Palette

### Light Mode (default)
- Background: `white` / `bg-white`
- Text: `text-zinc-900`
- Muted text: `text-zinc-500`, `text-zinc-400`
- Borders: `border-zinc-200`, `border-zinc-300`
- Hover: `hover:text-zinc-900`, `hover:bg-zinc-900 hover:text-white`

### Dark Mode
- Background: `dark:bg-[#0a0a0a]`
- Text: `dark:text-[#ededed]`
- Muted text: `dark:text-zinc-400`, `dark:text-zinc-500`
- Borders: `dark:border-white/10`, `dark:border-white/15`, `dark:border-white/30`
- Hover: `dark:hover:text-white`, `dark:hover:bg-white dark:hover:text-black`

## Typography

- Font: Inter (loaded via `next/font/google`)
- Headings: bold, tight tracking (`font-bold tracking-tight`)
- Section labels: uppercase, wide letter-spacing (`text-sm uppercase tracking-[0.3em]`)
- Body copy: muted color with `leading-relaxed`
- Keep type minimal and clean — no decorative fonts

## Layout & Spacing

- Max content width: `max-w-7xl` for full sections, `max-w-3xl` for focused content
- Consistent section padding: `px-6 py-24`
- Center-aligned section headers with label + heading pattern

## Interactive Elements

- Buttons/CTAs: bordered style, uppercase tracking, invert on hover (light: fill dark, dark: fill white)
- Links: subtle muted color, transition to foreground on hover
- Transitions: smooth and understated — `transition-colors duration-300` on theme-sensitive containers
- Lightbox/modals: fade + scale entrance, crossfade between items, fade out on close. Lightbox always uses dark backdrop regardless of theme.

## Component Patterns

- Gallery uses CSS columns masonry layout with hover overlays
- Images use `next/image` with hover scale (`group-hover:scale-105`)
- Sections follow: muted label → bold heading → content
- Nav includes a theme toggle (sun/moon icon)

## General Rules

- No bright accent colors. The palette is monochrome with contextual highlights.
- Animations should feel calm and intentional, never flashy.
- Maintain generous whitespace. Don't crowd elements.
- All new components must work in both light and dark mode.
- Always pair light styles with their `dark:` counterparts.

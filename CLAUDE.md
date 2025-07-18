# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal dev portfolio built with SvelteKit 2.22.0 and Svelte 5.0, using TypeScript and Tailwind CSS 4.0. The project uses modern development tooling including Vite for building and ESLint/Prettier for code quality.

## Development Commands

**Start development server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

**Type checking:**
```bash
npm run check
# or in watch mode
npm run check:watch
```

**Code formatting and linting:**
```bash
npm run format  # Format with Prettier
npm run lint    # Lint with ESLint and Prettier
```

**Sync SvelteKit types:**
```bash
npm run prepare
```

## Architecture

**SvelteKit Structure:**
- File-based routing in `src/routes/`
- Root layout: `src/routes/+layout.svelte`
- Pages: `src/routes/+page.svelte`
- Library code: `src/lib/` (import with `$lib` alias)
- Global styles: `src/app.css`
- HTML template: `src/app.html`

**Svelte 5 Runes:**
This project uses Svelte 5 with the new runes syntax. Use `$props()`, `$state()`, `$derived()`, and `$effect()` instead of legacy APIs.

## Styling System

**Custom Color Theme:**
```css
--color-keppel: #44b097    /* Primary teal */
--color-mint: #aff5bf      /* Light green accent */
--color-jungle: #0a1d20    /* Dark background */
--color-clover: #549454    /* Medium green */
--color-silver: #d4d4dc    /* Light gray */
--color-moss: #2e503c      /* Dark green */
```

**Tailwind CSS 4.0:**
- Configured via Vite plugin
- Custom colors available as Tailwind utilities
- Rubik font family set globally

## TypeScript Configuration

The project uses strict TypeScript with SvelteKit's type definitions. Import paths use the `$lib` alias for library code.

## Development Notes

- Uses npm as package manager
- ESLint configured with TypeScript and Svelte support
- Prettier configured with Svelte and Tailwind plugins
- Vite handles building and development server
- Auto-adapter configured for flexible deployment
# Copilot Instructions for Sample One App

## Project Overview
**SampleOne** is a Next.js 16 web application with React 19, TypeScript, and Tailwind CSS v4. It's a minimal starter project using the App Router pattern with modern tooling (ESLint 9, PostCSS 4).

## Architecture & Key Patterns

### App Router Structure
- **Location**: `app/` directory
- **Layout**: `app/layout.tsx` defines the root layout with metadata, font imports (Geist family via `next/font`), and CSS variable theming
- **Pages**: `app/page.tsx` is the home page - uses standard Next.js App Router conventions
- **Styling**: Global styles in `app/globals.css` - imports Tailwind CSS via `@import "tailwindcss"` and defines theme variables (background/foreground colors with dark mode support)

### Styling & Theming
- **Framework**: Tailwind CSS v4 with PostCSS plugin (`@tailwindcss/postcss`)
- **CSS Variables**: Define theme colors in `globals.css` using `:root` and `@media (prefers-color-scheme: dark)` for dark mode
- **Fonts**: Google Fonts via `next/font` (Geist Sans/Mono) - imported in layout and applied as CSS variables
- **Pattern**: Use Tailwind utility classes with CSS custom properties (e.g., `dark:bg-black`, `dark:text-zinc-50`)

### Path Aliases
- **Config**: `tsconfig.json` defines `@/*` mapped to project root
- **Usage**: Import from project root using `@/app`, `@/lib`, etc.

## Developer Workflows

### Development
```bash
npm run dev
```
Starts Next.js dev server on `http://localhost:3000` with hot module replacement.

### Build & Production
```bash
npm run build      # Compiles TypeScript, optimizes bundles
npm start          # Serves production build locally
```

### Linting
```bash
npm run lint       # Runs ESLint with Next.js + TypeScript rules
```

## Code Conventions

### TypeScript Configuration
- **Strict Mode**: Enabled - enforce strict type checking
- **Target**: ES2017
- **Module System**: ESM (esnext)
- **Path Resolution**: Bundler (Next.js optimized)

### ESLint Setup
- **Config**: `eslint.config.mjs` (flat config format, ESLint 9+)
- **Rules**: Combines `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`
- **Ignored Paths**: `.next/`, `out/`, `build/`, `next-env.d.ts` (Next.js generated files)

### Component Patterns
- **Default Exports**: Pages use `export default` (App Router convention)
- **Metadata**: Use `Metadata` type from `next` for page metadata in layouts/routes
- **Image Component**: Use `next/image` for optimized images (see `page.tsx` for example)
- **CSS Classes**: Combine Tailwind with inline className strings using template literals

## Common Tasks

### Add a New Page
Create file in `app/[route]/page.tsx` (e.g., `app/about/page.tsx`). Next.js automatically routes it. Use `Metadata` export for SEO.

### Update Styling
1. **Global**: Modify `app/globals.css` (CSS variables or Tailwind directives)
2. **Component**: Use inline `className` with Tailwind utilities
3. **Dark Mode**: Use `dark:` prefix for dark mode classes (respects system preference via `@media`)

### Add Dependencies
Run `npm install [package]`. Update `tsconfig.json` path aliases if adding libs needing imports.

## Key Files Reference
- `package.json` - Dependencies & scripts (Next 16, React 19, Tailwind 4)
- `tsconfig.json` - TypeScript config with strict mode & path aliases
- `next.config.ts` - Next.js configuration (currently empty)
- `eslint.config.mjs` - ESLint rules for code quality
- `app/layout.tsx` - Root layout with fonts & metadata
- `app/globals.css` - Theme variables & Tailwind import

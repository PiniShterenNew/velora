# Design Extraction Guide

Use this guide before editing an existing product UI.

## Search Targets

Look for design evidence in:

- Theme files, design tokens, CSS variables, Tailwind config, Sass/Less variables, style dictionaries, and global styles.
- Shared component libraries, UI packages, primitives, layout wrappers, and variant utilities.
- Storybook, Ladle, examples, visual snapshots, screenshots, tests, and fixture pages.
- Figma links, design docs, product docs, issue descriptions, PR notes, and inline comments.
- Representative routes and neighboring components near the affected surface.

Prefer fast repository search such as `rg`, `rg --files`, and targeted file reads.

## Evidence To Extract

Capture concrete patterns, not vibes:

- Spacing scale: container widths, gaps, padding, section rhythm, density.
- Typography: heading hierarchy, body sizes, labels, weights, line heights.
- Color roles: backgrounds, surfaces, borders, text, muted text, brand accents, success, warning, error, info.
- Shape and elevation: border radius, border style, shadows, dividers, cards, panels.
- Components: buttons, forms, inputs, selects, tabs, modals, navigation, tables, cards, toasts.
- States: hover, focus, active, selected, disabled, loading, empty, error, success.
- Icons and imagery: icon library, sizing, stroke weight, placement, usage rules.
- Motion: transitions, durations, easing, reduced-motion behavior, animation restraint.
- Responsive behavior: breakpoints, fluid rules, stacking, mobile navigation, overflow handling.
- Accessibility: semantic structure, labels, focus order, focus style, keyboard support, contrast.

## Comparison Method

1. Find the closest existing UI pattern to the requested change.
2. Inspect at least one neighboring component and one similar component elsewhere when available.
3. Identify which tokens/classes/components govern the pattern.
4. Note where the requested change fits cleanly and where it risks visual drift.
5. Choose the smallest implementation that preserves the pattern.

## Do Not Invent

Do not invent missing tokens, new component APIs, new visual motifs, or new interaction models unless the user explicitly approves it. If a pattern is missing, state the gap and propose the closest consistent option.

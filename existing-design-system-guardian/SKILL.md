---
name: existing-design-system-guardian
description: Preserve the existing design system when modifying an already-existing product UI. Use for UI changes in existing apps, including component edits, styling changes, layout changes, screen updates, interaction/state changes, design polish, visual QA, frontend refactors with UI impact, and accessibility fixes that affect visuals. Also use when explicitly invoked as $existing-design-system-guardian. Do not use for greenfield products, pure backend work, non-visual refactors, or intentional redesigns/rebrands unless the user asks to preserve legacy patterns during migration.
---

# Existing Design System Guardian

## Core Philosophy

Treat the existing product as the source of truth.

- Preserve before improving.
- Extract before editing.
- Prefer local consistency over generic best practices.
- Never introduce a new visual language unless the user explicitly asks for a redesign.
- When evidence is thin or conflicting, inspect more context or ask before changing UI direction.

This skill is for modifying already-existing products. It must guide UI work toward continuity, not novelty.

## Workflow

1. Understand the user request and identify the affected surface: route, screen, component, state, flow, or style layer.
2. Locate relevant files before editing: components, routes, styles, theme files, tests, stories, screenshots, docs, shared UI packages, and nearby usages.
3. Inspect neighboring components and similar product patterns. Do not infer the design system from one file when broader evidence is available.
4. Classify the work as a feature addition, visual fix, component update, interaction change, accessibility fix, or refactor with UI impact.
5. Build a lightweight design profile from repository evidence. Use `references/design-profile-template.md` when the change is non-trivial or visually sensitive.
6. Produce a short implementation plan before editing when the change is non-trivial, risky, or affects shared UI.
7. Make the smallest consistent change that satisfies the request.
8. Review the final result against the design profile and `references/review-checklist.md`.

For detailed extraction guidance, read `references/design-extraction-guide.md`.
For realistic behavior examples, read `references/examples.md`.

## Private Working Rules

Use these steps internally without over-explaining them to the user:

- Separate user intent from visual implementation assumptions.
- Identify constraints from repo evidence, not personal taste.
- Detect conflicts between the requested change and established product conventions.
- Prefer existing tokens, components, variants, classes, and interaction patterns.
- Escalate uncertainty when repository evidence is insufficient.
- Keep user-facing reasoning concise and specific.

## Design Profile

Create a lightweight working design profile during execution. Include:

- Product context
- Affected surface
- Existing component patterns
- Token/style sources
- Layout and spacing rules
- Typography rules
- Color and semantic roles
- Interaction and state patterns
- Accessibility expectations
- Anti-patterns to avoid
- Confidence level
- Open questions or uncertainty

Keep this profile in working context. Save it to a file only if the user asks, or if the repository already has a suitable documentation location and the change justifies preserving it.

## Editing Rules

- Reuse existing components before creating new ones.
- Reuse existing tokens, classes, variants, and utilities before adding styles.
- Keep changes minimal, local, and aligned with existing file organization.
- Preserve naming conventions.
- Match existing responsive behavior.
- Match existing states: hover, focus, active, disabled, loading, empty, error, success.
- Preserve semantic HTML, keyboard behavior, focus visibility, contrast, and reduced-motion expectations.
- Do not add arbitrary colors, spacing, shadows, fonts, radii, animation curves, icons, or dependencies.
- Do not create a parallel design system.
- If the requested change conflicts with the design profile, call out the conflict and propose the closest consistent alternative.

## Stop Or Ask When

- No existing UI pattern can be found after reasonable inspection.
- The request appears to require a redesign, rebrand, or new design system.
- The requested change conflicts with established product conventions.
- Required design tokens or components are missing.
- Visual impact cannot be assessed from the available repo context.
- Tests, builds, or visual tools are unavailable or failing for unrelated reasons.
- The change requires external design assets, screenshots, or Figma access that is unavailable.

## Final Response

Summarize:

- What changed.
- Which existing patterns were preserved.
- What verification was actually performed.
- Any remaining risks or uncertainty.

Never claim visual verification, test coverage, or design-system compliance unless it was actually checked.

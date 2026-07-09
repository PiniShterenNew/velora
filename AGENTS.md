# AGENTS.md

# NorthSpark Studio

This repository contains the public marketing website for NorthSpark Studio.

The objective is **not** to build a generic website.

The objective is to build a premium, production-ready website that demonstrates strategic thinking, premium design, and engineering quality while generating qualified client inquiries.

---

# Primary Goal

Every implementation decision should move the project closer to a launchable V1.

Avoid unnecessary architecture, abstractions, or redesigns.

If a change does not clearly improve the production-ready website, do not make it.

---

# General Principles

- Preserve the existing visual language.
- Preserve RTL support.
- Preserve responsive behavior.
- Preserve accessibility.
- Preserve semantic HTML.
- Preserve performance.
- Preserve the design system.
- Prefer consistency over cleverness.

---

# Scope Discipline

Only modify files required by the current task.

Avoid unrelated refactors.

Avoid "while I'm here" improvements.

If another issue is discovered:

- report it
- do not fix it unless it blocks the current task

---

# Design Philosophy

NorthSpark is not animation-heavy.

Motion exists to support understanding.

Never animate simply because something can move.

Visual hierarchy always has priority over visual effects.

---

# Motion Principles

Motion should:

- guide attention
- improve comprehension
- support storytelling
- communicate hierarchy

Motion should never:

- delay reading
- compete with content
- create unnecessary distraction

---

# Layout Principles

The project should use a single layout system.

Avoid duplicated container widths.

Avoid duplicated spacing logic.

Avoid arbitrary magic numbers.

Prefer shared layout primitives.

---

# Responsive Principles

Design mobile-first when possible.

Test mentally across:

- Desktop XL
- Desktop
- Laptop
- Tablet
- Mobile
- Small Mobile

Avoid breakpoint-specific hacks whenever possible.

Prefer fluid layouts using:

- clamp()
- flex
- grid
- logical properties

---

# CSS Principles

Prefer:

- reusable classes
- low specificity
- design tokens
- shared utilities

Avoid:

- duplicated selectors
- unnecessary !important
- deeply nested selectors
- component-specific hacks

---

# Typography Principles

Typography establishes hierarchy.

Never reduce typography simply to make layouts fit.

Instead adjust:

- spacing
- layout
- composition

before reducing type size.

---

# Animation Principles

CSS should be used only for:

- hover
- focus
- active
- small transitions

Complex animation belongs to GSAP.

Do not introduce additional animation libraries.

---

# Component Principles

Components should have a single responsibility.

Avoid coupling unrelated behaviors.

Prefer composition over duplication.

---

# Accessibility

Always preserve:

- keyboard navigation
- focus visibility
- reduced motion support
- semantic structure
- readable contrast

---

# Performance

Prefer:

- transform
- opacity

Avoid animating:

- width
- height
- top
- left
- layout properties

Avoid unnecessary continuous animations.

---

# Code Style

Write code as if another senior frontend engineer will maintain it.

Prioritize:

- readability
- maintainability
- predictability

over clever implementations.

---

# Before Editing

Always inspect the existing implementation first.

Understand:

- why it exists
- how it works
- what depends on it

Do not rewrite code before understanding it.

---

# During Editing

Prefer the smallest correct change.

Avoid broad rewrites.

Keep changes localized.

Maintain backwards compatibility whenever practical.

---

# After Editing

Provide a concise Markdown report containing:

## Files Changed

List every modified file.

## Summary

Explain what changed.

## Reasoning

Explain why the implementation was chosen.

## Risks

List any remaining issues.

## Manual QA

List what should be visually verified.

---

# Never

- Do not redesign without being asked.
- Do not rewrite copy.
- Do not rename files unnecessarily.
- Do not introduce new dependencies without approval.
- Do not remove existing functionality unless requested.
- Do not execute build, lint, tests or typecheck unless explicitly requested.

---

# Decision Rule

Before making any implementation decision, ask:

> Does this change move NorthSpark closer to a production-ready V1 that can generate clients?

If the answer is no, do not implement it.
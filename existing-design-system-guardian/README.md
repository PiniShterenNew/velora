# Existing Design System Guardian

Production-grade Codex skill for preserving an existing product design system while making UI changes.

## Purpose

Use this skill when modifying an already-existing product UI. It helps Codex inspect the repository, extract local design conventions, make the smallest consistent change, and review the result against the product's own patterns.

## Install

Copy the `existing-design-system-guardian` folder into a Codex skills directory such as:

```text
%USERPROFILE%\.codex\skills\
```

Then invoke it explicitly with:

```text
$existing-design-system-guardian
```

It is also designed for implicit activation on existing-product UI changes.

## Files

- `SKILL.md`: Trigger metadata and core workflow.
- `agents/openai.yaml`: UI metadata for skill lists and prompt chips.
- `references/design-extraction-guide.md`: Detailed repository inspection guidance.
- `references/design-profile-template.md`: Lightweight working profile template.
- `references/review-checklist.md`: Final consistency and quality checklist.
- `references/examples.md`: Realistic activation, clarification, and conflict examples.

## Validation

Run the skill validator:

```text
python C:\Users\User\.codex\skills\.system\skill-creator\scripts\quick_validate.py existing-design-system-guardian
```

The skill is intentionally instruction-and-reference based. It includes no scripts because design-system preservation depends on repository evidence and product judgment rather than a deterministic transformation.

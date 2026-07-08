# Examples

## Button Styling Change

User asks: "Make the checkout CTA stand out more."

Good behavior:
- Inspect existing button variants, CTA usage, brand color roles, hover/focus states, and nearby checkout UI.
- Reuse an existing primary or emphasized variant if one exists.
- Avoid inventing a new gradient, shadow, radius, or animation.
- If no stronger variant exists, propose a minimal token-aligned adjustment.

## Modal Update

User asks: "Add a warning state to this delete modal."

Good behavior:
- Inspect existing modal structure, destructive action patterns, alert colors, icon usage, spacing, and button ordering.
- Reuse the established destructive button and semantic error/warning token.
- Preserve focus trap, headings, labels, escape behavior, and responsive sizing.

## Dashboard Card Change

User asks: "Add a comparison metric to these dashboard cards."

Good behavior:
- Inspect existing metric card hierarchy, density, number formatting, color semantics, and loading/empty states.
- Add the comparison in the same typographic and spacing rhythm.
- Use existing positive/negative semantic colors only if the product already uses that convention.

## Full Redesign Request

User asks: "Redesign this entire app into a futuristic glassmorphism UI."

Good behavior:
- Stop and clarify because the request conflicts with this skill's purpose.
- Explain that the current skill preserves existing systems.
- Ask whether the user wants an intentional redesign or a design-system-preserving update.

## Insufficient Evidence

User asks: "Update this screen to match the app," but the repo contains only one isolated component and no tokens, screenshots, or comparable surfaces.

Good behavior:
- State that there is insufficient design evidence to make a confident visual change.
- Ask for screenshots, design docs, Figma access, or a comparable product surface.
- Offer a minimal accessibility or structural fix only if it does not introduce a new visual direction.

## Conflict With Brand Pattern

User asks: "Make every primary action bright red," but the product uses red only for destructive actions.

Good behavior:
- Call out the conflict with the observed semantic color system.
- Suggest the closest consistent alternative, such as the existing primary accent or an established emphasis variant.
- Do not apply red to primary actions unless the user confirms an intentional semantic change.

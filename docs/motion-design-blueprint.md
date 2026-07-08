# Motion Design Blueprint

## Motion Philosophy

Motion on the Velora Studio homepage should feel strategic, calm, confident, and purposeful. It should support the central promise of the brand: websites are built to guide understanding and decision-making. Animation should never feel like decoration added after the fact. It should clarify hierarchy, pace the story, and help the visitor understand what matters next.

The homepage may use expressive motion in the hero and Story Scrolling demonstration, but most motion should remain restrained. The experience should feel premium because it is clear and intentional, not because everything moves.

## Motion Principles

- Motion supports content. Every animation must help reveal, group, sequence, or emphasize information.
- Motion guides attention. The visitor should always know where to look next.
- Motion never blocks comprehension. Text must remain readable before, during, and after animation.
- Decorative motion remains secondary. Backgrounds, shapes, and accents must never compete with headlines, CTAs, or proof.
- Motion should be progressive. Important ideas appear before supporting details.
- Motion should respect scroll intent. Users must be able to move through the page naturally without feeling trapped.
- Motion should be consistent. Similar elements should share similar timing, easing, and reveal behavior.
- Motion should be reversible where interaction is reversible. Menus, accordions, hover states, and active states should clearly open and close.
- Motion should degrade gracefully. Reduced-motion users should receive the same content without forced animation.

## Motion Hierarchy

1. Hero entrance
2. Section transitions
3. Scroll storytelling
4. Project and process proof moments
5. Illustrations
6. Cards
7. Buttons and CTAs
8. Navigation and menu interactions
9. Micro interactions
10. Decorative background movement

The higher an item is in the hierarchy, the more motion budget it receives. Lower-priority motion must yield if performance, clarity, or accessibility is at risk.

## Motion Categories

### Hero Entrance

The hero entrance is the page's primary motion moment. It should sequence background, eyebrow, headline, supporting text, CTAs, and service signals. The animation should feel like the page is assembling around the main idea.

Hero motion may use slightly larger distance, more deliberate delay, and more expressive easing than the rest of the page. Once the entrance is complete, the hero should settle.

### Section Reveal

Section reveal introduces each major content block as it enters the viewport. It should generally reveal the section intro first, followed by cards, steps, or supporting visuals.

Section reveal should be subtle: opacity and vertical movement are enough in most cases. Reveals should happen once unless there is a strong reason to repeat.

### Scroll Storytelling

Scroll storytelling changes visual focus based on scroll position. It is appropriate when content is meant to unfold as a sequence: story cards, progress markers, process flows, or active portfolio focus.

Scroll storytelling should not hijack the page. It should work with normal scrolling and preserve access to all content.

### Decorative Motion

Decorative motion includes background shapes, ambient geometry, dots, accents, and visual flourishes. It should be slow, low-contrast, and nonessential.

Decorative motion should stop or simplify under reduced motion, low-power contexts, or mobile performance constraints.

### Background Motion

Background motion should create depth and continuity without demanding attention. It may gently settle on load or shift lightly across scroll. It must never obscure text or create contrast problems.

Background motion is optional. Static backgrounds are acceptable whenever they improve clarity or performance.

### Hover

Hover motion should confirm interactivity. Cards may lift slightly, links may underline or shift, and buttons may gain emphasis. Hover states should be quick and modest.

Hover behavior must not contain essential information because touch users cannot access hover.

### CTA

CTA motion should make primary actions feel responsive and confident. A primary hero CTA may receive one subtle attention cue after the hero entrance. Other CTAs should rely on hover, focus, and active feedback.

Avoid aggressive pulsing, shaking, or repeated urgency patterns.

### Loading

The homepage should avoid visible loading motion unless content is genuinely delayed. If used, loading motion should be minimal and should not mimic completed content.

### Transition

Transitions include mobile menu opening, FAQ expansion, active story state changes, and anchor navigation changes. These should be fast, legible, and predictable.

Transitions should communicate state changes, not create spectacle.

## Scroll Strategy

### Standard Reveal

Use standard reveal for section intros, problem items, service cards, process cards, about elements, FAQ intro, and footer utility content. This is the default behavior.

Use when content simply needs to enter the reading flow.

Avoid when the section already has a stronger scroll interaction.

### Scrub

Use scrubbed animation only when the animation's progress must map directly to scroll position, such as a progress marker moving through a story path.

Use sparingly. Scrub can feel heavy if applied to many elements at once.

Avoid scrub for long text blocks, essential CTAs, or content that users may want to read at their own pace.

### Timeline

Use timeline sequencing for hero entrance and possibly process flow reveals. Timeline motion is best when a clear order improves comprehension.

Avoid timelines that delay access to important content after the user has already scrolled to it.

### Pin

Use pinning only when a fixed visual anchor significantly improves understanding, such as a desktop Story Scrolling compass.

Avoid pinning on mobile unless testing proves it is smooth, accessible, and does not create scroll fatigue. Never pin essential content in a way that prevents normal reading.

### Parallax

Use parallax only for subtle background depth. It should never apply to primary text or CTAs.

Avoid parallax where it causes motion sickness, performance issues, or visual distraction.

### Continuous Movement

Use continuous movement only for low-priority decorative elements or optional service signals, such as a mobile service tag marquee. It must remain slow and nonessential.

Avoid simultaneous continuous animations across multiple sections. Continuous motion should pause or be removed under reduced motion.

## Section Motion Rules

### Header

The header may slide or fade in on load. Mobile menu transitions should use quick opacity and position changes. Header hover states should be minimal.

### Hero

Hero owns the strongest entrance sequence. Motion order should be background, label, headline, body, CTAs, service signals. After entrance, only the primary CTA may have a very subtle delayed attention cue.

### Decision Board

Reveal the framework as a system. Heading appears first, then stages in order. Stage accents and shapes should support the sequence.

### Problem

Reveal problem cards progressively. The tone should be diagnostic. Motion should not soften the urgency of the problem.

### Approach

Reveal steps in order. Connectors or number marks may animate after the related content appears.

### Services

Reveal service cards with a light stagger. Hover may lift cards or clarify focus. Illustrations should stay secondary.

### Story Scrolling

Use the page's main scroll-interaction budget here. Desktop may use a sticky compass and active cards. Mobile should simplify to standard scrolling with active focus changes.

### Process

Use sequence animation to show the collaboration path. Desktop connectors may draw in. Mobile should use simple card reveals.

### Work

Reveal projects as proof. Active project focus may respond to scroll, but all projects must remain readable and clickable.

### About

Use gentle reveal only. The section should feel stable and human.

### FAQ

Accordion transitions should be fast and clear. Icon rotation should indicate state. Avoid dramatic animation inside answers.

### Final CTA

Reveal the panel as the final conversion moment. Button interactions should be responsive, not noisy.

### Footer

Use minimal motion: link hover/focus feedback and optional soft reveal.

## Performance Principles

- Prefer transform and opacity for animation.
- Avoid animating layout properties when a transform can achieve the same effect.
- Avoid unnecessary infinite animations.
- Limit simultaneous animations in the viewport.
- Keep scroll-linked animation calculations simple.
- Avoid heavy animation on large images or complex layout containers.
- Use static states for offscreen content.
- Test long pages on mobile hardware, not only desktop.
- Keep decorative animation optional.
- Design for smooth 60fps, but prioritize content clarity over animation complexity.
- Do not allow motion to delay Largest Contentful Paint or primary CTA availability.
- Avoid chaining many delayed animations after the user has already started scrolling.

## Accessibility

### Reduced Motion

Users who prefer reduced motion should receive minimal or no movement. Replace complex reveals with immediate visibility or simple opacity changes. Disable continuous movement, scroll-scrub effects, parallax, and decorative loops.

### Keyboard Navigation

All interactive elements must remain reachable and understandable by keyboard. Motion must not move focus targets unexpectedly. Mobile menus and FAQ accordions must preserve logical focus order.

### Focus Visibility

Focus states must be clearly visible and not dependent on animation. Animated hover states do not replace focus styling.

### Content Accessibility During Animations

Content must remain available to assistive technology regardless of visual reveal state. Do not hide essential content in a way that prevents screen readers from accessing it. Accordion answers must use accessible expanded/collapsed state communication.

### Scroll Accessibility

Scroll storytelling must not trap users. Pinned or active-scroll sections must allow natural scrolling, browser search, keyboard navigation, and reduced-motion alternatives.

### Timing And Control

Avoid long animations that users cannot skip. Avoid flashing, rapid pulsing, or high-frequency movement. Any continuous motion should be nonessential and safe to pause or disable.

## Motion Governance

Before adding any new animation, answer:

1. What user attention or understanding problem does this solve?
2. Is this motion higher priority than existing motion in the viewport?
3. Does the same content remain clear with reduced motion?
4. Can this be achieved with transform and opacity?
5. Does it improve the homepage narrative, or only decorate it?

If the answer is unclear, the motion should not be added.

---
name: concierge-business-design
description: Premium, playful design system for a personalized business audit platform. Build branded interfaces for marketing websites, web apps, and mobile experiences using cohesive components, tokens, and UI kits. Includes button, input, card, badge, modal, and navigation components with full styling guidance.
user-invocable: true
---

# Concierge Business Design System Skill

This design system provides everything needed to create polished, on-brand interfaces for a business concierge audit platform. The system balances premium aesthetics (black/white/gold) with playful, modern interactions.

## Quick Start

1. **Read README.md** — Understand the brand voice, visual foundations, color system, and component library
2. **Explore Foundation Cards** — View the Design System tab to see color palettes, typography, spacing, shadows, and brand identity
3. **Browse Components** — Check `components/` folders for Button, Input, Card, Badge, Modal, Tabs, and more
4. **Study UI Kits** — Review `ui_kits/` for complete product examples (marketing website, web app, mobile app)

## Using Components

All components are available via the compiled bundle. In HTML/JSX files:

```javascript
const { Button, Input, Card, Badge, Modal, Tabs } = window.ConciergeDS;

// Use in React
<Button variant="primary" size="md">Click Me</Button>
<Input label="Email" type="email" placeholder="you@example.com" />
<Card clickable padding="lg">Card Content</Card>
```

## Color System

- **Neutrals:** Black (#000000) + White (#FFFFFF) + Gray scale (50–900)
- **Primary Accent:** Premium Blue (#1E7FFF) — used for interactive elements, CTAs, focus states
- **Luxury Details:** Gold (#D4AF37) + Silver (#C0C0C0) — refined accents
- **Semantic:** Green (success), Amber (warning), Red (error), Blue (info)

Use tokens via CSS variables: `var(--accent-primary)`, `var(--color-gold)`, etc.

## Typography

- **Font:** Poppins (Google Fonts, sans-serif)
- **Scale:** 10px–56px with defined weights (300–800) and line heights
- **Usage:** Display/H1/H2/H3 for headings; Body/Label/Caption for content

## Component Variants

**Button:** primary, secondary, ghost, danger (sizes: sm/md/lg)  
**Input:** Text, email, password, number (with label, helper, icon, error)  
**Card:** Default (shadow), bordered, flat (sizes: sm/md/lg padding)  
**Badge:** primary, success, warning, error (sizes: sm/md/lg)  
**Tabs:** Default (underline) or pills variant  
**Modal:** sm/md/lg with header, close button, action footer  

## Animations & Interactions

- **Transitions:** 150ms (fast) to 350ms (slow), ease-out timing
- **Hover States:** Subtle shadow lift, color shift, minor scale (never aggressive)
- **Focus:** Blue outline (3px) with offset for accessibility
- **Disabled:** 60% opacity, cursor not-allowed

## When to Use This Skill

✅ Building new product screens in this brand  
✅ Creating throwaway prototypes or mockups  
✅ Designing marketing materials (landing pages, emails)  
✅ Extending the component library with new patterns  
✅ Documenting design decisions and brand guidelines  

❌ For design work outside this brand (create a new design system instead)

## File Structure

```
tokens/              CSS custom properties for colors, typography, spacing
components/          Reusable React UI primitives (Button, Input, Card, etc)
ui_kits/             Full-screen product examples (website, web app, mobile)
guidelines/          Foundation specimen cards (colors, type, spacing)
styles.css           Global entry point (@import all tokens)
README.md            Full design guide and manifesto
```

## Questions?

Refer to the README.md for detailed visual foundations, brand voice, content guidelines, and component usage patterns. Each component folder includes a `.prompt.md` file with usage examples and key props.

---

**Brand Essence:** Premium expertise delivered with personality. Serious about strategy, playful about execution.

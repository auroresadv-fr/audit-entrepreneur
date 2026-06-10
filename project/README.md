# Concierge Business Design System

**Design system for a premium, playful business concierge service platform.**

---

## Overview

**Company:** Concierge Business Digital — Personalized business audit platform  
**Audience:** Entrepreneurs, TPE (small business leaders) seeking strategic guidance  
**Products:**
- **Marketing Website:** Landing page, pricing, audit overview
- **Web App:** Interactive audit questionnaire, personality-based analysis, results dashboard
- **Mobile App:** Post-audit dashboard, progress tracking, 1-to-1 coaching sessions

**Positioning:** Premium yet playful. Modern, interactive experience that differentiates from "old school" competitor platforms. Tone: serious expertise delivered with personality and delight.

---

## Content Fundamentals

**Voice & Tone:**
- Professional, confident, approachable
- Direct and action-oriented ("You can do this", not "let's try")
- Minimal emoji, used strategically to delighter (not slap-dash)
- Title case for headings, sentence case for body copy
- French first (supporting English as secondary)

**Copy Examples:**
- "Découvrez un audit détaillé spécialement adapté à votre profil"
- "Commencer votre audit maintenant" (strong, clear CTA)
- "Sérieux dans l'expertise, ludique dans l'exécution"

---

## Visual Foundations

### Color System
- **Core Palette:** Black (#000000) + White (#FFFFFF)
- **Primary Accent:** Premium Blue (#1E7FFF) — confident, modern, trustworthy
- **Luxury Details:** Gold (#D4AF37) + Silver (#C0C0C0) — refined, premium touch
- **Semantic:**
  - Success: Green (#10B981)
  - Warning: Amber (#F59E0B)
  - Error: Red (#EF4444)
  - Info: Blue (#3B82F6)

**Usage:** Black/white as primary structure. Blue for interactive elements and CTAs. Gold/silver for premium details (borders, accents, highlights). Semantic colors for feedback and status.

### Typography
- **Font Family:** Poppins (sans-serif, modern, geometric)
- **Display Scale:** 56px down to 10px, with defined line heights and weights
- **Type System:** Hierarchy via size + weight, not multiple families
- **Accessibility:** Minimum 16px for body text, 24px+ for mobile readability

### Design Language
- **Corner Radius:** 12px default (elegant, not playful; balanced)
- **Spacing:** Premium breathing room — 4px/8px/12px/16px/24px/32px+ scale
- **Shadows:** Sophisticated, subtle elevation (not harsh drop shadows)
- **Animations:** Microinteractions only — 150–350ms transitions, ease-out easing
- **Imagery:** Mix of real photography (entrepreneurs, offices) + abstract illustrations + data visualizations
- **Backgrounds:** Solid colors, subtle gradients on hero sections, no patterns or noise

### Interactive States
- **Hover:** Subtle color shift, shadow lift, minor scale (not aggressive)
- **Active/Focus:** Blue outline (3px offset) or blue glow on inputs
- **Disabled:** 60% opacity, cursor not-allowed
- **Loading:** Smooth fade-in animation (no spinner — microloader)

---

## Components

**Forms & Input:**
- Button (4 variants: primary, secondary, ghost, danger; 3 sizes: sm/md/lg)
- Input (text, email, password, number with label, helper text, icons, error state)
- Checkbox (with label, disabled state)
- Modal (sm/md/lg sizes with header, close button, action footer)

**Feedback & Display:**
- Badge (4 variants: primary, success, warning, error; 3 sizes)
- Card (shadow, bordered, or flat; clickable with hover lift)

**Navigation:**
- Tabs (default underline or pills variant)

Each component supports:
- Multiple size/variant options
- Disabled states
- Hover/active/focus states
- Full-width option (where applicable)
- Accessibility (focus outlines, semantic HTML)

---

## Products & UI Kits

### 1. Marketing Website (`ui_kits/website/`)
- Navigation bar with branding
- Hero section with strong CTA
- Features grid (4 cards)
- Pricing section (3 tiers, featured middle)
- Footer

**Visual:** Light backgrounds, blue accents, premium spacing, full-width hero image placeholders.

### 2. Web App — Audit Platform (`ui_kits/web_app/`)
- Dark sidebar navigation (black background)
- Header with user info + progress
- Question card with multiple-choice options
- Progress bar
- Previous/Next navigation

**Visual:** High contrast (black sidebar + white content), clear typography hierarchy, emphasis on the current question.

### 3. Mobile App — Dashboard (`ui_kits/mobile_app/`)
- iOS frame (375×812)
- Status bar simulation
- Audit score card (gradient background)
- Priority action cards with badges
- Bottom tab navigation

**Visual:** Card-based layout, color badges for status, mobile-optimized spacing.

---

## File Structure

```
tokens/
  colors.css              -- Color palette CSS variables
  typography.css          -- Font families, sizes, weights, line heights
  effects.css             -- Spacing, shadows, transitions, radii

components/
  buttons/
    Button.jsx
    Button.d.ts
    Button.prompt.md
    buttons.card.html     -- Component showcase
  forms/
    Input.jsx
    Input.d.ts
    Input.prompt.md
    Checkbox.jsx
    Checkbox.d.ts
    forms.card.html       -- Forms showcase
  feedback/
    Badge.jsx
    Badge.d.ts
    Modal.jsx
    Modal.d.ts
  layout/
    Card.jsx
    Card.d.ts
  navigation/
    Tabs.jsx
    Tabs.d.ts

ui_kits/
  website/index.html      -- Marketing site full-screen view
  web_app/index.html      -- Audit platform view
  mobile_app/index.html   -- Mobile dashboard view

guidelines/
  colors-primary.card.html        -- Neutrals + black/white palette
  colors-accent.card.html         -- Blue, gold, silver, semantic colors
  type-headlines.card.html        -- Display + heading styles
  type-body.card.html             -- Body + caption styles
  spacing-scale.card.html         -- Spacing token visualization
  shadows-elevation.card.html     -- Shadow system
  radius.card.html                -- Corner radius scale
  brand-identity.card.html        -- Brand values + premium positioning

styles.css              -- Global entry point (imports all tokens)
README.md               -- This file
SKILL.md                -- Skill manifest for multi-project use
```

---

## Suggested Brand Names

If you haven't chosen yet, here are options:
1. **CONCIERGE** — Direct, premium, international
2. **AUDITE** — Audit + memorable brand
3. **PERSONA LABS** — Personality-focused, modern
4. **NEXUS AUDIT** — Connection + detailed analysis
5. **COMPASS** — Strategic guide for entrepreneurs

---

## Next Steps

- [ ] Choose final brand name
- [ ] Review and refine color palette (particularly the blue accent)
- [ ] Add real brand logo and icons to `assets/`
- [ ] Iterate UI kits with real copy (translate to full French)
- [ ] Create additional starting-point screens (results dashboard, pricing detail, etc.)
- [ ] Add animations (entrance states, page transitions, loading states)
- [ ] Expand component library (Select, Radio, Toggle, Accordion, Toast, etc.)

---

## Usage

This design system is built for **reuse across products and prototypes**. To use it:

1. **In Design Mode:** Copy components and customize via the Tweaks panel
2. **In Code:** Import from the compiled bundle — components are available under `window.ConciergeDS`
3. **As a Skill:** This system can be invoked as a reusable skill for new design projects in this brand

Button — Primary CTA and action element for the design system

Flexible button component with four variants (primary, secondary, ghost, danger) and three sizes (sm, md, lg). Default is primary/md. Supports icons, disabled state, and full-width layout.

```jsx
<Button>Click Me</Button>
<Button variant="secondary" size="lg">Secondary Action</Button>
<Button variant="ghost" disabled>Disabled Ghost</Button>
<Button variant="danger" icon="🗑️">Delete</Button>
```

**Key Props:**
- `variant`: "primary" | "secondary" | "ghost" | "danger"
- `size`: "sm" | "md" | "lg"
- `disabled`: boolean
- `fullWidth`: boolean
- `icon`: ReactNode for left icon

**Hover States:** All variants darken or change background on hover for visual feedback.

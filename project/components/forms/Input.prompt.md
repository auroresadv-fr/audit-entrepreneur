Input — Text input field with optional label, helper text, and error state

Flexible input component supporting text, email, password, and number types. Includes optional icon, error validation feedback, and disabled state. Auto-focuses with blue accent border.

```jsx
<Input label="Email" type="email" placeholder="you@example.com" />
<Input label="Password" type="password" icon="🔒" />
<Input error helperText="This field is required" value="" />
<Input disabled value="Disabled field" />
```

**Key Props:**
- `type`: "text" | "email" | "password" | "number" | "tel" | "url"
- `label`: string for label above
- `helperText`: string for feedback below
- `icon`: ReactNode for left icon
- `error`: boolean for red error state
- `disabled`: boolean
- `fullWidth`: boolean

**States:** Default, focused (blue glow), error (red border), disabled (gray background).

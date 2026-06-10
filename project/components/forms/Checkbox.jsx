export function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  ...props
}) {
  const checkboxStyle = {
    width: "20px",
    height: "20px",
    accentColor: "var(--accent-primary)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "var(--space-3)",
    cursor: disabled ? "not-allowed" : "pointer",
  };

  const labelStyle = {
    fontSize: "var(--font-size-sm)",
    color: disabled ? "var(--text-tertiary)" : "var(--text-primary)",
  };

  return (
    <label style={containerStyle}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        style={checkboxStyle}
        {...props}
      />
      {label && <span style={labelStyle}>{label}</span>}
    </label>
  );
}

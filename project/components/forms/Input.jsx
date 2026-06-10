export function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
  disabled = false,
  error = false,
  label,
  helperText,
  icon,
  fullWidth = false,
  ...props
}) {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    width: fullWidth ? "100%" : "auto",
  };

  const labelStyle = {
    fontSize: "var(--font-size-sm)",
    fontWeight: "var(--font-weight-medium)",
    color: "var(--text-primary)",
  };

  const inputWrapperStyle = {
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: "100%",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    paddingLeft: icon ? "2.5rem" : "1rem",
    fontSize: "var(--font-size-base)",
    fontFamily: "var(--font-sans)",
    border: error ? "2px solid var(--color-error)" : "1px solid var(--border-primary)",
    borderRadius: "var(--radius-md)",
    backgroundColor: disabled ? "var(--bg-secondary)" : "var(--color-white)",
    color: "var(--text-primary)",
    transition: "all var(--transition-base)",
    cursor: disabled ? "not-allowed" : "auto",
  };

  const iconStyle = {
    position: "absolute",
    left: "0.75rem",
    pointerEvents: "none",
    color: "var(--text-tertiary)",
    fontSize: "1.25rem",
  };

  const helperStyle = {
    fontSize: "var(--font-size-xs)",
    color: error ? "var(--color-error)" : "var(--text-tertiary)",
  };

  const handleFocus = (e) => {
    if (!disabled) {
      e.currentTarget.style.borderColor = "var(--accent-primary)";
      e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-primary-light)";
    }
  };

  const handleBlur = (e) => {
    e.currentTarget.style.borderColor = error ? "var(--color-error)" : "var(--border-primary)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <div style={containerStyle}>
      {label && <label style={labelStyle}>{label}</label>}
      <div style={inputWrapperStyle}>
        {icon && <span style={iconStyle}>{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </div>
      {helperText && <span style={helperStyle}>{helperText}</span>}
    </div>
  );
}

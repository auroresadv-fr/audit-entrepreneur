export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  icon,
  ...props
}) {
  const baseStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--font-weight-semibold)",
    borderRadius: "var(--radius-md)",
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all var(--transition-base)",
    opacity: disabled ? 0.6 : 1,
  };

  const sizeStyles = {
    sm: {
      padding: "0.5rem 1rem",
      fontSize: "var(--font-size-sm)",
    },
    md: {
      padding: "0.75rem 1.5rem",
      fontSize: "var(--font-size-base)",
    },
    lg: {
      padding: "1rem 2rem",
      fontSize: "var(--font-size-lg)",
    },
  };

  const variantStyles = {
    primary: {
      backgroundColor: "var(--color-gold)",
      color: "var(--color-black)",
      boxShadow: "var(--shadow-md)",
    },
    secondary: {
      backgroundColor: "var(--bg-secondary)",
      color: "var(--text-primary)",
      border: "1px solid var(--border-primary)",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "var(--color-gold)",
      border: "1px solid var(--color-gold)",
    },
    danger: {
      backgroundColor: "var(--color-error)",
      color: "var(--text-inverse)",
    },
  };

  const hoverStyles = {
    primary: { backgroundColor: "var(--color-gold-dark)", boxShadow: "var(--shadow-lg)" },
    secondary: { backgroundColor: "var(--bg-tertiary)" },
    ghost: { backgroundColor: "var(--color-gold-light)" },
    danger: { backgroundColor: "var(--color-error-dark)" },
  };

  const style = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
    width: fullWidth ? "100%" : "auto",
  };

  const handleMouseEnter = (e) => {
    if (!disabled) {
      Object.assign(e.currentTarget.style, hoverStyles[variant]);
    }
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.currentTarget.style, variantStyles[variant]);
  };

  return (
    <button
      style={style}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}

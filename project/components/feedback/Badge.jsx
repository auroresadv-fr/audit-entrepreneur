export function Badge({
  children,
  variant = "primary",
  size = "md",
  ...props
}) {
  const sizeMap = {
    sm: { padding: "0.25rem 0.75rem", fontSize: "var(--font-size-xs)" },
    md: { padding: "0.5rem 1rem", fontSize: "var(--font-size-sm)" },
    lg: { padding: "0.75rem 1.25rem", fontSize: "var(--font-size-base)" },
  };

  const variantMap = {
    primary: {
      backgroundColor: "var(--accent-primary-light)",
      color: "var(--accent-primary-dark)",
      border: "1px solid var(--accent-primary)",
    },
    success: {
      backgroundColor: "var(--color-success-light)",
      color: "var(--color-success-dark)",
      border: "1px solid var(--color-success)",
    },
    warning: {
      backgroundColor: "var(--color-warning-light)",
      color: "var(--color-warning-dark)",
      border: "1px solid var(--color-warning)",
    },
    error: {
      backgroundColor: "var(--color-error-light)",
      color: "var(--color-error-dark)",
      border: "1px solid var(--color-error)",
    },
  };

  const style = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "var(--radius-full)",
    fontWeight: "var(--font-weight-medium)",
    whiteSpace: "nowrap",
    ...sizeMap[size],
    ...variantMap[variant],
  };

  return <span style={style} {...props}>{children}</span>;
}

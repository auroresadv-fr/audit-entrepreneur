export function Card({
  children,
  variant = "default",
  clickable = false,
  padding = "md",
  ...props
}) {
  const paddingMap = {
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
  };

  const cardStyle = {
    borderRadius: "var(--radius-lg)",
    backgroundColor: "var(--bg-primary)",
    border: variant === "bordered" ? "1px solid var(--border-primary)" : "none",
    boxShadow: variant === "default" ? "var(--shadow-md)" : "none",
    padding: paddingMap[padding],
    transition: "all var(--transition-base)",
    cursor: clickable ? "pointer" : "auto",
  };

  const handleMouseEnter = (e) => {
    if (clickable) {
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      e.currentTarget.style.transform = "translateY(-2px)";
    }
  };

  const handleMouseLeave = (e) => {
    if (clickable) {
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
      e.currentTarget.style.transform = "translateY(0)";
    }
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
}

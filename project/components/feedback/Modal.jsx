export function Modal({
  isOpen,
  onClose,
  title,
  children,
  actions,
  size = "md",
}) {
  if (!isOpen) return null;

  const sizeMap = {
    sm: { maxWidth: "400px" },
    md: { maxWidth: "600px" },
    lg: { maxWidth: "800px" },
  };

  const backdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "var(--bg-overlay)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "var(--z-modal-backdrop)",
  };

  const modalStyle = {
    backgroundColor: "var(--bg-primary)",
    borderRadius: "var(--radius-lg)",
    boxShadow: "var(--shadow-2xl)",
    padding: "var(--space-8)",
    zIndex: "var(--z-modal)",
    ...sizeMap[size],
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "var(--space-6)",
  };

  const closeButtonStyle = {
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "var(--text-secondary)",
  };

  return (
    <div style={backdropStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>{title}</h2>
          <button style={closeButtonStyle} onClick={onClose}>✕</button>
        </div>
        <div style={{ marginBottom: "var(--space-6)" }}>{children}</div>
        {actions && <div style={{ display: "flex", gap: "var(--space-4)" }}>{actions}</div>}
      </div>
    </div>
  );
}

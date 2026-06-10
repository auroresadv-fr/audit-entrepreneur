export function Tabs({
  tabs,
  activeTab,
  onChange,
  variant = "default",
}) {
  const containerStyle = {
    display: "flex",
    borderBottom: variant === "default" ? "1px solid var(--border-primary)" : "none",
    gap: variant === "pills" ? "var(--space-3)" : "0",
  };

  const tabStyle = (isActive) => ({
    padding: "var(--space-4) var(--space-6)",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    fontSize: "var(--font-size-sm)",
    fontWeight: isActive ? "var(--font-weight-semibold)" : "var(--font-weight-normal)",
    color: isActive ? "var(--accent-primary)" : "var(--text-secondary)",
    borderBottom: variant === "default" && isActive ? "2px solid var(--accent-primary)" : "none",
    borderRadius: variant === "pills" ? "var(--radius-full)" : "0",
    backgroundColor: variant === "pills" && isActive ? "var(--accent-primary-light)" : "transparent",
    transition: "all var(--transition-base)",
  });

  return (
    <div style={containerStyle}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          style={tabStyle(activeTab === tab.id)}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

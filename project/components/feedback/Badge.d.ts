export interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
}
export function Badge(props: BadgeProps): JSX.Element;

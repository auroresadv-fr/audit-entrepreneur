/**
 * @dsCard group="Components" viewport="700x300" name="Buttons"
 * @startingPoint section="Components" subtitle="Primary, secondary, ghost, and danger buttons with multiple sizes" viewport="700x300"
 */

export interface ButtonProps {
  /**
   * Button content or label
   */
  children: React.ReactNode;

  /**
   * Visual style variant
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "ghost" | "danger";

  /**
   * Button size
   * @default "md"
   */
  size?: "sm" | "md" | "lg";

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Fill available width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Optional icon element
   */
  icon?: React.ReactNode;

  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button(props: ButtonProps): JSX.Element;

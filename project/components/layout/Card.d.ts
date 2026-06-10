/**
 * Card component with shadow and optional border
 * @startingPoint section="Components" subtitle="Elevated container with shadow, border, or flat variants" viewport="700x250"
 */

export interface CardProps {
  /**
   * Card content
   */
  children: React.ReactNode;

  /**
   * Visual variant
   * @default "default"
   */
  variant?: "default" | "bordered" | "flat";

  /**
   * Clickable/interactive state with hover lift
   * @default false
   */
  clickable?: boolean;

  /**
   * Internal padding
   * @default "md"
   */
  padding?: "sm" | "md" | "lg";

  /**
   * Click handler for interactive cards
   */
  onClick?: () => void;
}

export function Card(props: CardProps): JSX.Element;

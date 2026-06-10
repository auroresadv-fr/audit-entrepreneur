/**
 * Text input component with optional label, helper text, icon, and error state
 * @startingPoint section="Components" subtitle="Text, email, password, number inputs with labels and validation" viewport="700x400"
 */

export interface InputProps {
  /**
   * Input type attribute
   * @default "text"
   */
  type?: "text" | "email" | "password" | "number" | "tel" | "url";

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Current input value
   */
  value?: string;

  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Error state (red border and error text color)
   * @default false
   */
  error?: boolean;

  /**
   * Label text above input
   */
  label?: string;

  /**
   * Helper or error text below input
   */
  helperText?: string;

  /**
   * Icon to display at left of input
   */
  icon?: React.ReactNode;

  /**
   * Fill available width
   * @default false
   */
  fullWidth?: boolean;
}

export function Input(props: InputProps): JSX.Element;

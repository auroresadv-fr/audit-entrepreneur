export interface CheckboxProps {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
}
export function Checkbox(props: CheckboxProps): JSX.Element;

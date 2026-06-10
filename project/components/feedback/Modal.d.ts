export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}
export function Modal(props: ModalProps): JSX.Element | null;

export interface TabsProps {
  tabs: Array<{ id: string; label: string }>;
  activeTab: string;
  onChange: (tabId: string) => void;
  variant?: "default" | "pills";
}
export function Tabs(props: TabsProps): JSX.Element;

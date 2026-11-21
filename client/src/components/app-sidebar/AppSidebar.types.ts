export type NavigationKey = 'today' | 'calorie-estimation' | 'plan' | 'foods' | 'progress';

export interface AppSidebarProps {
  open: boolean;
  selectedKey: NavigationKey;
  onClose: () => void;
  onSelect: (key: NavigationKey) => void;
}

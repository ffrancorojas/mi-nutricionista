export type MealType = 'Desayuno' | 'Comida' | 'Merienda' | 'Cena';

export interface MealEntry {
  id: string;
  name: string;
  type: MealType;
  time: string;
  note: string;
  completed: boolean;
}

export interface MealCardProps {
  meal: MealEntry;
  onToggle: (id: string) => void;
}

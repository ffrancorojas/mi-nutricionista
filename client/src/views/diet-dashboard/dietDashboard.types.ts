import type { MealEntry } from '../../components';

export type NewMealForm = Pick<MealEntry, 'name' | 'type' | 'time' | 'note'>;

export interface NutritionRowProps {
  label: string;
  value: string;
  color: string;
}

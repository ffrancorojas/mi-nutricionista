import type { MealEntry } from '../../components';

export type CreateMealRequest = Pick<MealEntry, 'name' | 'type' | 'time' | 'note'>;

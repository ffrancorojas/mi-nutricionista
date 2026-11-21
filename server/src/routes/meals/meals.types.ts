export type MockMealType = 'Desayuno' | 'Comida' | 'Merienda' | 'Cena';

export interface MockMeal {
  id: string;
  name: string;
  type: MockMealType;
  time: string;
  note: string;
  completed: boolean;
}

export type CreateMealPayload = Pick<MockMeal, 'name' | 'type' | 'time' | 'note'>;

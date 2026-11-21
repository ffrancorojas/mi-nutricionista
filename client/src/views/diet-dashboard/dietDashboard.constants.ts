import type { MealEntry } from '../../components';

export const demoMeals: MealEntry[] = [
  { id: 'breakfast', type: 'Desayuno', time: '08:30', name: 'Avena con yogur y frutos rojos', note: 'Avena · yogur natural · fresas', completed: true },
  { id: 'lunch', type: 'Comida', time: '14:00', name: 'Bowl templado de garbanzos', note: 'Garbanzos · verduras asadas · tahini', completed: false },
  { id: 'snack', type: 'Merienda', time: '17:30', name: 'Manzana y un puñado de nueces', note: 'Fruta · frutos secos', completed: false },
  { id: 'dinner', type: 'Cena', time: '21:00', name: 'Tortilla de espinacas', note: 'Huevos · espinacas · ensalada', completed: false },
];

export const demoNutrition = {
  energy: '1.240 kcal',
  protein: '58 g',
  water: '1,2 L',
};

export const mealTypes = ['Desayuno', 'Comida', 'Merienda', 'Cena'] as const;

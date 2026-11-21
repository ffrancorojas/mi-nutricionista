import type { MockMeal } from './meals.types.js';

export const initialMockMeals: MockMeal[] = [
  { id: 'breakfast', type: 'Desayuno', time: '08:30', name: 'Avena con yogur y frutos rojos', note: 'Avena · yogur natural · fresas', completed: true },
  { id: 'lunch', type: 'Comida', time: '14:00', name: 'Bowl templado de garbanzos', note: 'Garbanzos · verduras asadas · tahini', completed: false },
  { id: 'snack', type: 'Merienda', time: '17:30', name: 'Manzana y un puñado de nueces', note: 'Fruta · frutos secos', completed: false },
  { id: 'dinner', type: 'Cena', time: '21:00', name: 'Tortilla de espinacas', note: 'Huevos · espinacas · ensalada', completed: false },
];

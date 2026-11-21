import type { MealEntry } from '../../components';
import type { CreateMealRequest } from './mealApi.types';

async function request<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...init?.headers },
  });
  if (!response.ok) throw new Error(`La API de demostración respondió con ${response.status}.`);
  return response.json() as Promise<T>;
}

export function getMeals() {
  return request<MealEntry[]>('/api/meals');
}

export function createMeal(meal: CreateMealRequest) {
  return request<MealEntry>('/api/meals', { method: 'POST', body: JSON.stringify(meal) });
}

export function toggleMeal(id: string) {
  return request<MealEntry>(`/api/meals/${encodeURIComponent(id)}/toggle`, { method: 'PATCH' });
}

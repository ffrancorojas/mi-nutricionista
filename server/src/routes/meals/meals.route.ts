import type { FastifyInstance } from 'fastify';
import { initialMockMeals } from './meals.constants.js';
import type { CreateMealPayload, MockMeal } from './meals.types.js';

let meals: MockMeal[] = initialMockMeals.map((meal) => ({ ...meal }));

export async function registerMealsRoutes(app: FastifyInstance) {
  app.get('/api/meals', async () => meals);

  app.post<{ Body: CreateMealPayload }>('/api/meals', async (request, reply) => {
    const name = request.body.name.trim();
    if (!name) return reply.code(400).send({ message: 'El nombre de la comida es obligatorio.' });

    const meal: MockMeal = {
      ...request.body,
      id: `mock-${Date.now()}`,
      name,
      completed: false,
    };
    meals = [...meals, meal].sort((first, second) => first.time.localeCompare(second.time));
    return reply.code(201).send(meal);
  });

  app.patch<{ Params: { id: string } }>('/api/meals/:id/toggle', async (request, reply) => {
    const meal = meals.find((item) => item.id === request.params.id);
    if (!meal) return reply.code(404).send({ message: 'No se ha encontrado la comida.' });

    meal.completed = !meal.completed;
    return meal;
  });
}

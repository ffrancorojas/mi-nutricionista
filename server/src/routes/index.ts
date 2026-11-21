export * from './health';
export * from './meals';

import type { FastifyInstance } from 'fastify';
import { registerHealthRoute } from './health/index.js';
import { registerMealsRoutes } from './meals/index.js';

export async function registerRoutes(app: FastifyInstance) {
  await registerHealthRoute(app);
  await registerMealsRoutes(app);
}

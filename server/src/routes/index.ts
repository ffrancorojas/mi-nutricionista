export * from './health';

import type { FastifyInstance } from 'fastify';
import { registerHealthRoute } from './health/index.js';

export async function registerRoutes(app: FastifyInstance) {
  await registerHealthRoute(app);
}

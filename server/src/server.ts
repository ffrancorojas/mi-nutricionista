import cors from '@fastify/cors';
import Fastify from 'fastify';
import { registerRoutes } from './routes/index.js';

const app = Fastify({ logger: true });

await app.register(cors, {
  origin: process.env.CLIENT_ORIGIN ?? 'http://localhost:5173',
});

await registerRoutes(app);

const port = Number(process.env.PORT ?? 3000);
await app.listen({ host: '0.0.0.0', port });

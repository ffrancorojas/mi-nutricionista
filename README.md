# Mi Nutricionista

Aplicación web instalable (PWA) con frontend y backend separados. La idea y las funcionalidades del producto se definirán más adelante.

## Estructura

- `client/`: interfaz React + TypeScript, Material UI y configuración PWA.
- `server/`: API mock en memoria con Fastify. No usa base de datos ni login.

## Desarrollo

```bash
npm install
npm run dev
```

El comando `npm run dev` inicia el cliente y el backend mock juntos. La web estará disponible en `http://localhost:5173`; la API mock en `http://localhost:3000` ofrece `GET /api/meals`, `POST /api/meals` y `PATCH /api/meals/:id/toggle`. También puedes arrancarlos por separado con `npm run dev:client` y `npm run dev:server`.

## Tecnologías iniciales

- React, TypeScript y Vite.
- Material UI para los controles de interfaz.
- `vite-plugin-pwa` para preparar la instalación como aplicación web.
- Fastify para la API.

## Estado actual

La primera fase se centra en el frontend. La pantalla actual es una maqueta funcional con comidas y valores nutricionales de ejemplo. Las comidas se leen y modifican mediante el backend mock en memoria; al parar el servidor, los cambios se pierden. No hay login ni base de datos. La autenticación, persistencia de datos y funcionalidades de nutrición se definirán más adelante.

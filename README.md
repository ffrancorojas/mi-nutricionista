# Mi Nutricionista

Aplicación web instalable (PWA) con frontend y backend separados. La idea y las funcionalidades del producto se definirán más adelante.

## Estructura

- `client/`: interfaz React + TypeScript, Material UI y configuración PWA.
- `server/`: API Node.js + TypeScript + Fastify.

## Desarrollo

```bash
npm install
npm run dev:client
npm run dev:server
```

El cliente y el servidor se ejecutan por separado. El endpoint inicial del backend es `GET /api/health`.

## Tecnologías iniciales

- React, TypeScript y Vite.
- Material UI para los controles de interfaz.
- `vite-plugin-pwa` para preparar la instalación como aplicación web.
- Fastify para la API.

La autenticación, persistencia de datos y funcionalidades de nutrición quedan por definir.

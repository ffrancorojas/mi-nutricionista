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

## Estado actual

La primera fase se centra en el frontend. La pantalla actual es una maqueta funcional con comidas y valores nutricionales de ejemplo; añadir o marcar comidas solo cambia el estado temporal del navegador. No hay login ni persistencia todavía. La autenticación, persistencia de datos y funcionalidades de nutrición se definirán más adelante.

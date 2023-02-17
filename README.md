# Servidor Websocket

## Lenguajes/Tecnologías
- Express 4
- Socket.IO

## Instalación y configuración
- Instalar dependencias `npm install`
- Copiar el archivo `config.example.js` a `config.example`

## Iniciar servidor
```
node app.js
```
## Estructura general
- `examples/*`: Diferentes ejemplos de integraciones tanto en el cliente (html) cómo servidor (php).
- `libs/middlewares`: Middlewares http.
- `libs/handlers`: Funciones ejecutadas por las rutas.
- `tmp/logs`: Logs de las peticiones realizadas.

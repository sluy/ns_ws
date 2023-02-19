# Servicio Websocket

## Lenguajes/Tecnologías
- Express 4
- Socket.IO

## Instalación y configuración
- Instalar dependencias `npm install`
- Copiar el archivo `.env.example` a `.env`

## Iniciar servicio

### Desarrollo
```
node app.js
```
### Producción
Instalar globalmente (si no está instalado previamente) el paquete `forever` :
```
npm install -g forever
```
Inicializar el servicio por medio de `forever`:
```
forever start app.js
```
## Estructura general
- `/actions`: Acciones por ejecutar en el sistema.
- `/gateways/*`: Pasarelas en distintos lenguajes de programación para ejecutar acciones en el servicio.
- `/examples/*`: Diferentes ejemplos de integraciones tanto en el cliente (html) cómo llamados al servicio (por medio de las pasarelas).
- `/middlewares`: Middlewares http.
- `/handlers`: Funciones ejecutadas por las rutas.
- `tmp/logs`: Logs de las peticiones realizadas.


## Acciones en el Sistema:

### Creación:

Suponiendo que la acción sea `test`, crearemos el archivo `actions/test.js` que devolverá por defecto la función a ejecutar.

Esta función recibirá un objeto cómo único parámetro que tendrá por elementos:
- `io` : Instancia de socket.io
- `req`: Request de Express.
- `res`: Response de Express.
- `log`: Función de ayuda para guardar logs.

Siguiendo el ejemplo, el contenido podría ser algo cómo:
```
#file: actions/test.js
module.exports = ({ io, log }) => {
  io.emit("test", true); // emitimos el evento 'test'
  log("test"); // guardamos el log tmp/logs/test
  return { status: true }; // devolvemos true.
};
```

### Vinculando al sistema
Para vincular es simple, editamos el contenido del archivo `actions/index.js` e incluímos nuestra nueva función.
Vale destacar será siempre el nombre por el cual se accederá a la acción:
```
#file: actions/index.js
module.exports = {
  "test": require("./test"),
};
```
### Emitiendo el evento
Para emitir el evento debe abrirse la dirección `http://neo.fo:8080/{nombre}?secret={clavesecreta}` siendo en el caso del ejemplo `http://neo.fo:8080/test?secret={clavesecreta}`.

Para más ayuda puedes consultar los ejemplos en el directorio `examples/*`.

### Escuchando el evento
En Socket.IO del cliente, agregar el escucha `io.on({nombre}, () => { ...código a ejecutar... })`, quedando para el ejemplo `io.on('test', () => { console.log('test triggered...!') })`.

Para más ayuda puedes consultar los ejemplos en el directorio `examples/*`.

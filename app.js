/**
 * Modulo app.js
 */
// Require
const argv = require('./config/yargs').argv;
let { crear } = require('./tareas/tarea');
// Variable para guardar el comando que es recibido por la consola
let comando = argv._[0];

// Switch para calcular las diferentes funciones que se ejecutaran dependiendo del comando
switch (comando) {

    case 'crear':
        console.log(crear(argv.descripcion));
        break;

    case 'listar':
        console.log('Mostrar las tareas');
        break;

    case 'actualizar':
        console.log('Actualizar Tarea');
        break;

    default:
        console.log('Comando no reconocido');
        break;

}
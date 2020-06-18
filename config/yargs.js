/**
 * Modulo yargs.js
 */

// Realizamos el json con las opciones
const opts = {

    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la Tarea a Realizar'
    },
    completado: {
        alias: 'c',
        default: false,
        desc: 'Marca como completada o no una Tarea'
    }

}

// Requerimos el yargs y agregamos los comandos
const argv = require('yargs')
    .command('crear', 'Crea una tarea ( escribir la descripcion con --descripcion o -d )', opts)
    .command('listar', 'Lista todas las tareas que tenga en la lista de Treas')
    .command('actualizar', 'Actualiza la Tarea como completada ( es obligatorio agregar la descripcion y el completado es opcional con el comando --completado o -c es un boolean solo recibe true o false) ')
    .help()
    .argv;


// Exportamos la constante argv
module.exports = {
    argv
}
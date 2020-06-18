/**
 * Modulo tarea.js
 */

// Requerimos el FileSystem
const fs = require('fs');
const { rejects } = require('assert');
const { resolve } = require('path');

// Declaramos el array para guardar las tareas
let listadoTareas = [];

const guardarDataBase = () => {

    let data = JSON.stringify(listadoTareas);

    fs.writeFile('database/database.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDataBase = () => {

    try {
        listadoTareas = require('../database/database.json');
    } catch (error) {
        listadoTareas = [];
    }

}

// creamos la funcion crear()
const crear = (descripcion) => {

    cargarDataBase();

    let tarea = {
        descripcion,
        completada: false
    }

    listadoTareas.push(tarea)

    guardarDataBase()

    return `
        ===============
        =====LISTO=====
        Tarea: ${tarea.descripcion} Agregada
    `;
}

module.exports = {
    crear
}
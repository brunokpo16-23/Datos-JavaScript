//Objetos Methods

//Con esto activaremos el modo estricto de javaScript
"use strict"

const producto = {
    nombreProducto: "Monitor 20  Pulgadas",
    precio: 300,
    disponible: true,
}

// Con este Objeto podemos congelar objetos para que no se pueda hacer mas nada con este objeto.
Object.freeze(producto);

// Este funciona igual que el anterior pero si nos permite modificar los existentes
Object.seal(producto);

// Como saber si un objeto esta bloqueado 
console.log(Object.isFrozen(producto));
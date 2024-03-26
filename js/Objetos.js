// Objetos 

// Podemos utilizar objetos para poner varias variables en 1 
const producto = {
    nombreProducto: "Monitor 20  Pulgadas",
    precio: 300,
    disponible: true,
}


// Para acceder a una probidad del objeto en la consola puedes utilizar lo siguiente 
// console.log(producto.nombreProducto);
// console.log(producto.precio);
// console.log(producto.disponible);

// Otra sintaxis para buscar que es lo mismo que las anteriores 
// console.log(producto["nombreProducto"]);

// Para agregar nuevas propiedades a nuestro objeto 
// Debes agregar la propiedad de nuestro objeto junto con un . y el valor que queramos agregar 
producto.imagen = "imagen.jpg"

//Para eliminar propiedades de nuestro objeto 
delete producto.disponible


console.log(producto);
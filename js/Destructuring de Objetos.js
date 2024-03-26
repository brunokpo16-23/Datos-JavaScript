// Destructing de Productos

const producto = {
    nombreProducto: "Monitor 20  Pulgadas",
    precio: 300,
    disponible: true,
}


// Con esta forma le podemos asignar un mismo valor a una variable nueva 
// Esta es la forma vieja
const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

console.log(nombreProducto);
console.log(precioProducto);

// Distructuring
// Forma nueva
const {precio} = producto;
const {nombreProducto} = producto;

//Puedes acortarlo escribiéndolo de esta manera 
const {precio, nombreProducto} = producto;



console.log(precio);
console.log(nombreProducto);

























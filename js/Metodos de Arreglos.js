// Array Methods
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
    {nombre: "Monitor 20 Pulgadas", precio: 500},
    {nombre: "Television 50 Pulgadas", precio: 700},
    {nombre: "Tablet", precio: 300},
    {nombre: "Auriculares", precio: 200},
    {nombre: "Teclado", precio: 50},
    {nombre: "Celular", precio: 500},
    {nombre: "Bocinas", precio: 300},
    {nombre: "Laptop", precio: 800},
]


// ForEach 
// Este sirve para buscar algo dentro de nuestro arreglo
// meses.forEach(function(mes) {
    // if(mes = "Marzo") {
        // console.log("Marzo si existe")
    // }
// });

// Includes 
// Este es lo mismo que el aterior pero simplificado
// Este funciona bien en arreglos planes, pero cuando tiene objetos no es la mejor opcion
// const resultado = meses.includes("Marzo");
// console.log(resultado)
// Si el valor existe dira true, de lo contrario false 

// Some 
// Ideal para arreglos de objetos
// resultado2 = carrito.some(function(producto) {
    // return producto.nombre = "Celular"
// })

// console.log(resultado2);


// Reduse
// Esto va a tormar todos nuestros numeros y darnos un resultado
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);

// Filter 
// Este sirve para obtener un elemento, o todos menos uno, o mayor a tal elemento, etc
resultado = carrito.filter(function(producto) {
    return producto.precio > 400
});

// Todos lo que incluyan ese nombre 
resultado = carrito.filter(function(producto) {
    return producto.nombre === "Celular"
});

// Todos menos ese nombre
resultado = carrito.filter(function(producto) {
    return producto.nombre !== "Celular"
});



console.log(resultado);
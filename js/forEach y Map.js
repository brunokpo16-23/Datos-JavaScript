const carrito = [{
    nombre: "Monitor 20 Pulgadas",
    precio: 500
},
{
    nombre: "Television 50 Pulgadas",
    precio: 700
},
{
    nombre: "Tablet",
    precio: 300
},
{
    nombre: "Auriculares",
    precio: 200
},
{
    nombre: "Teclado",
    precio: 50
},
{
    nombre: "Celular",
    precio: 500
},
{
    nombre: "Bocinas",
    precio: 300
},
{
    nombre: "Laptop",
    precio: 800
},
]



//forEach 
//Cuando quieres iterar sobre arreglos ya creados o enviar a la consola utiliza este 
//Estos unicamente puede ser utilizado en arreglos,ademas de que se van a ejecutar 1 vez por cada elemento
carrito.forEach(producto => console.log(producto))

//Map
//Cuando quieres crear un nuevo arreglo utiliza este 
//Estos unicamente puede ser utilizado en arreglos,ademas de que se van a ejecutar 1 vez por cada elemento

carrito.forEach(producto => console.log(producto.nombre))
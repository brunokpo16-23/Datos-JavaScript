//Arreglos

// Los arreglos pueden tener cualquier tipo de valores

//Sirve para agrupar elementos del mismo tipo o relacionados 
const números = [10, 20, 30, 40, 50];


// Acceder a variables de Arreglos
console.log(números[3]);

// Si queremos acceder a varias podemos utilizar el siguiente código
números.forEach(function (números) {
    console.log(números);
})

// Conoce la cantidad de cosas que tiene nuestro arreglo 
console.log(números.length);

// Agregar un elementos a nuestro arreglo
números.push(60, 70, 80); // Esta forma es poco usada  Este agrega al final del arreglo
números.unshift(-10, -20, -30) // Este agrega al inicio del arreglo

// Formas de eliminar elementos del arreglo
números.pop(); //Este eliminara el ultimo elemento de nuestro arreglo 
números.shift(); // Este elimina el primer elemento
números.splice(2, 1); // Este el primer valor que le pongamos es desde cual va a empezar a eliminar y el segundo 
// valor el cuantos va a eliminar a partir de ese, si es 1 no va a eliminar mas que el que le pongamos 


// Formas de ver el contenido de un arregle 
// console.table(números);
console.table(números);

// La desventaja de estas modificaciones a nuestros arreglos es que estamos modificando nuestro arreglo original y no es una buena practica
// Ahora se usa el REST OPERATOR Y SPREAD OPERATOR
const númerosNuevos = [...números, 90]; // Esta sintaxis es lo mismo que PUSH pero mejor y mas recomendada
const númerosNuevos2 = [100, ...números];  // Esta sintaxis es lo mismo que UNSHIFT pero mejor y mas recomendada


console.table(númerosNuevos);
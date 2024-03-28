//FOR LOOPS

// Un For Loop va a ir evaluando un código mientras una condición sea evaluada como verdadera 

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Este te muestra que numero de toda la iteración es par
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`El numero ${i} es PAR`);
    } else {
        console.log(`El numero ${i} es IMPAR`);
    }
}

// Iterando sobre un carrito de compras
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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}


//WHILE 
//Este evalúa la condición y si no es verdadera no ejecuta el código 
let i = 1; //Indice 

while (i <= 100) { // Condición 
    if (i % 2 === 0) {
        console.log(`El numero ${i} es PAR`);
    } else console.log(`El numero ${i} es IMPAR`);

    i++; //Incremento 
}


// DO WHILE LOOP
// Este ejecuta el código al menos una vez y luego evalúa 
let e = 100;

do {
    console.log(e);
    e++
} while (e < 10);
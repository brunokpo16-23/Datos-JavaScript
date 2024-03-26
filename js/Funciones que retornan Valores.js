// Esta funcion no hace la suma aca si no que la envia a resultado para que luego sea resultado el que tiene el valor
// function sumar(numero1, numero2) {
    // return n1 + numero2;
// }
// sumar(2, 3)

// const resultado = sumar(2, 3);

// Otro ejemplo mas avanzado
let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.16 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(900);
total = agregarCarrito(1200);


console.log(total);

const totalAPagar = calcularImpuesto(total)
console.log(`El total a pagar con Inpuestos es de: $${totalAPagar}`)


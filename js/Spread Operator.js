//Spread Operator

const producto = {
    nombreProducto: "Monitor 20  Pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}

// Con esta linea podremos unir 2 o mas objetos sin modificar los originales
const nuevoProducto = { ...producto, ...medidas}

console.log(producto);
console.log(nuevoProducto);
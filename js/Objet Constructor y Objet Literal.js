// POO ( Programación orientada a objetos)

// Objet Literal
const producto = {
    nombre: "Tablet",
    precio: 500
}

//Objet Constructor 
//El nombre de la clase debe estar creado en mayúscula 
function Producto(nombre, precio,) {
    this.nombre = nombre,
    this.precio = precio;
}

const producto2 = new Producto("Monitor Curvo de 49 pulgadas", 800);
const producto3 = new Producto("Laptop de 25 pulgadas", 500);
const producto4 = new Producto("Mouse Inalámbrico", 900);
const producto5 = new Producto("Auriculares Inalámbricos", 100);
//Prototypes
//Un prototype nos permite crear funciones que están asociadas a un tipo de objeto 
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un valor de $${this.precio}`;
};


console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(producto4);
console.log(producto5);





